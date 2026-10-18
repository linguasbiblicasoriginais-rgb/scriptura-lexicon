#!/usr/bin/env python3
"""Cópia fiel da camada inglesa do KLEIN (Sefaria), até 1000 entradas/rodada.

A incorporação não traduz, audita, homologa nem integra outras branches.
Cada lote tem commit e push independentes, com verificação do HEAD remoto.
"""
from __future__ import annotations
import hashlib
import html
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
INDEX = ROOT / "index.html"
CHECKPOINT = ROOT / "lexicons/klein-progress.json"
INVENTORY = ROOT / "lexicons/klein-source-inventory.json"
SOURCE = "Klein Dictionary"
BRANCH = "chat-gpt-klein"
LICENSE = "CC-BY-NC"
EDITION = "Carta Jerusalem; 1st edition, 1987"
API = "https://www.sefaria.org/api"
BATCH_SIZE = 100
MAX_NEW = min(1000, max(0, int(os.environ.get("KLEIN_TARGET_NEW", "1000"))))

def get(path):
    url = API + path
    for attempt in range(3):
        try:
            req = Request(url, headers={
                "User-Agent": "ScripturaLexicon-Klein-NonCommercial/1.0",
                "Accept": "application/json",
            })
            with urlopen(req, timeout=40) as response:
                return json.load(response)
        except (HTTPError, URLError, TimeoutError, ValueError) as exc:
            if isinstance(exc, HTTPError) and exc.code in (400, 401, 403, 404):
                raise RuntimeError("API Sefaria recusou " + url + ": " + str(exc)) from exc
            if attempt == 2:
                raise RuntimeError("API Sefaria indisponível: " + url + ": " + str(exc)) from exc
            time.sleep(4 * (attempt + 1))

def safe(value):
    return html.escape(str(value), quote=True)

def plain(value):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]*>", " ", str(value))).strip()

def entry(ref):
    response = get("/texts/" + quote(ref, safe="") + "?context=0&commentary=0")
    canonical = response.get("ref")
    if response.get("indexTitle") != SOURCE or not isinstance(canonical, str) or not canonical.startswith(SOURCE + ", "):
        raise RuntimeError("Ref não pertence ao Klein: " + repr(ref) + " -> " + repr(canonical))
    raw = response.get("text")
    if isinstance(raw, str):
        raw = [raw]
    if not isinstance(raw, list) or not raw or any(not isinstance(x, str) or not x for x in raw):
        raise RuntimeError("Texto original ausente/inesperado em " + canonical)
    matching = [v for v in response.get("versions", []) if isinstance(v, dict)
                and EDITION.lower() in str(v.get("versionTitle", "")).lower()]
    if not matching:
        raise RuntimeError("Edição de 1987 não demonstrada em " + canonical)
    version = matching[0]
    if str(version.get("license", "")).upper() != LICENSE:
        raise RuntimeError("Licença não autorizada em " + canonical + ": " + repr(version.get("license")))
    successor = response.get("next")
    previous = response.get("prev")
    for name, value in (("next", successor), ("prev", previous)):
        if value is not None and (not isinstance(value, str) or not value.startswith(SOURCE + ", ")):
            raise RuntimeError(name + " fora da obra: " + repr(value))
    headword = canonical.partition(", ")[2]
    return {
        "source": SOURCE,
        "source_ref": canonical,
        "headword": headword,
        "text_html": raw,
        "edition": version.get("versionTitle"),
        "version_source": version.get("versionSource"),
        "source_license": version.get("license"),
        "next_ref": successor,
        "prev_ref": previous,
    }

def render(records, first, batch):
    rows, cards = [], []
    for offset, rec in enumerate(records):
        ordinal = first + offset
        lemma, ref = rec["headword"], rec["source_ref"]
        eid = "entry-klein-" + hashlib.sha256(ref.encode("utf-8")).hexdigest()[:24]
        original = "\n".join(rec["text_html"])
        excerpt = plain(original)
        search = " ".join([lemma, excerpt[:900], "KLEIN", ref])
        rows.append(
            '<tr class="search-row" data-dictionary="hebraico" data-source="KLEIN"'
            ' data-target="' + eid + '" data-search="' + safe(search) + '" tabindex="0">'
            '<td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">' + safe(lemma) +
            '</td><td>—</td><td lang="en">' + safe(excerpt[:110]) +
            '</td><td><span class="source-pill">KLEIN</span></td></tr>'
        )
        cards.append(
            '<article id="' + eid + '" class="entry-card" data-dictionary="hebraico"'
            ' data-source="KLEIN" data-klein-ordinal="' + str(ordinal) + '" hidden>'
            '<header class="entry-header"><div><h1 class="entry-title hebrew-title"'
            ' lang="he" dir="rtl">' + safe(lemma) + '</h1><div class="entry-meta">'
            'KLEIN · ' + safe(ref) + '</div></div><div class="source-tag">KLEIN</div></header>'
            '<div class="entry-divider"></div><section class="entry-section" lang="en">'
            '<div class="section-title">Fonte original (inglês) — Ernest Klein</div>'
            '<div class="entry-text">' + original + '</div></section>'
            '<footer class="entry-meta">Ernest Klein, Carta Jerusalem (1987). '
            '<a href="https://www.sefaria.org/Klein_Dictionary" target="_blank"'
            ' rel="noopener noreferrer">Fonte Sefaria</a>. '
            'Licença CC BY-NC; redistribuição exclusivamente não comercial.'
            '</footer></article>'
        )
    key = "klein-batch-%03d" % batch
    payload = {
        "searchAnchorId": "klein-search-anchor-%03d" % batch,
        "entryAnchorId": "klein-entry-anchor-%03d" % batch,
        "rowsHtml": "\n".join(rows),
        "cardsHtml": "\n".join(cards),
        "sourceRecords": records,
        "sourceLexicon": SOURCE,
        "sourceURL": "https://www.sefaria.org/Klein_Dictionary?tab=contents",
        "edition": EDITION,
        "license": LICENSE,
        "licenseURL": "https://creativecommons.org/licenses/by-nc/4.0/",
        "firstOrdinal": first,
        "lastOrdinal": first + len(records) - 1,
    }
    return ('"use strict";\nwindow.ScripturaLexicons=window.ScripturaLexicons||{};\n'
            'window.ScripturaLexicons[' + json.dumps(key) + ']='
            + json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ';\n')

def update_index(number):
    original = INDEX.read_text(encoding="utf-8")
    markers = [
        ('<tr id="dgp-search-anchor" hidden></tr>',
         '<tr id="klein-search-anchor-%03d" hidden></tr>\n                        '
         '<tr id="dgp-search-anchor" hidden></tr>' % number),
        ('<div id="dgp-entry-anchor" hidden></div>',
         '<div id="klein-entry-anchor-%03d" hidden></div>\n        '
         '<div id="dgp-entry-anchor" hidden></div>' % number),
        ('<script src="script.js"></script>',
         '<script src="lexicons/klein-batch-%03d.js"></script>\n    '
         '<script src="script.js"></script>' % number),
    ]
    for old, new in markers:
        if original.count(old) != 1 or new in original:
            raise RuntimeError("Âncora não unívoca ou já presente; index.html preservado: " + old)
        original = original.replace(old, new, 1)
    INDEX.write_text(original, encoding="utf-8")

def remote_head():
    data = subprocess.check_output(["git", "ls-remote", "origin",
                                    "refs/heads/" + BRANCH], cwd=ROOT, text=True).strip()
    if not data:
        raise RuntimeError("Branch remota não encontrada")
    return data.split()[0]

def run(*args):
    subprocess.run(list(args), cwd=ROOT, check=True)

def main():
    if MAX_NEW == 0:
        print("KLEIN solicitado 0 registros", flush=True)
        return
    if not INVENTORY.exists() or not CHECKPOINT.exists():
        raise RuntimeError("Inventário integral e checkpoint confirmados são obrigatórios")
    inventory = json.loads(INVENTORY.read_text(encoding="utf-8"))
    state = json.loads(CHECKPOINT.read_text(encoding="utf-8"))
    total = inventory.get("total_entries")
    if not inventory.get("count_verified") or not isinstance(total, int) or total < 1:
        raise RuntimeError("Total canônico da fonte não foi comprovado")
    if state.get("source") != SOURCE or state.get("source_total") != total:
        raise RuntimeError("Inventário e checkpoint divergentes")
    initial = state.get("total_incorporated")
    if not isinstance(initial, int) or initial < 0 or initial > total:
        raise RuntimeError("Checkpoint possui ordinal inválido")
    if len(state.get("seen_refs", [])) != initial or len(set(state["seen_refs"])) != initial:
        raise RuntimeError("Referências incorporadas não concordam com checkpoint")
    for batch in state.get("batches", []):
        if not (ROOT / batch["file"]).is_file():
            raise RuntimeError("Lote registrado no checkpoint ausente: " + batch["file"])
    if initial < total and not state.get("next_ref"):
        raise RuntimeError("Há entradas restantes mas não há próxima referência")
    if initial == total:
        if state.get("next_ref") is not None:
            raise RuntimeError("Total atingido porém campo next ainda não é nulo")
        print("KLEIN JÁ COMPLETO", total, flush=True)
        return
    before = remote_head()
    own = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip()
    if own != before:
        raise RuntimeError("HEAD local e remoto divergentes; execução concorrente?")
    seen = set(state["seen_refs"])
    target = min(MAX_NEW, total - initial)
    while state["total_incorporated"] - initial < target:
        first = state["total_incorporated"] + 1
        quota = min(BATCH_SIZE, target - (first - initial - 1))
        records = []
        for _ in range(quota):
            ref = state.get("next_ref")
            if ref is None:
                break
            if ref in seen:
                raise RuntimeError("Referência já incorporada: " + ref)
            record = entry(ref)
            canonical = record["source_ref"]
            if canonical in seen:
                raise RuntimeError("Referência canônica duplicada: " + canonical)
            seen.add(canonical)
            state["seen_refs"].append(canonical)
            state["last_ref"] = canonical
            state["last_headword"] = record["headword"]
            state["next_ref"] = record["next_ref"]
            records.append(record)
            if len(records) % 20 == 0:
                print("KLEIN RECEBIDOS", first + len(records) - 1, canonical, flush=True)
            time.sleep(0.07)
        if not records:
            raise RuntimeError("Fim inesperado antes de alcançar o inventário: " + str(first))
        batch_num = len(state["batches"]) + 1
        module = ROOT / ("lexicons/klein-batch-%03d.js" % batch_num)
        if module.exists():
            raise RuntimeError("Não sobrescrever módulo existente: " + str(module))
        module.write_text(render(records, first, batch_num), encoding="utf-8")
        update_index(batch_num)
        last = first + len(records) - 1
        state["total_incorporated"] = last
        state["batches"].append({
            "file": str(module.relative_to(ROOT)),
            "first_ordinal": first,
            "last_ordinal": last,
            "count": len(records),
            "first_headword": records[0]["headword"],
            "last_headword": records[-1]["headword"],
            "first_ref": records[0]["source_ref"],
            "last_ref": records[-1]["source_ref"],
        })
        if last == total and state.get("next_ref") is not None:
            raise RuntimeError("Total confirmado atingido mas API informa continuação; recusar commit")
        if last < total and state.get("next_ref") is None:
            raise RuntimeError("Fonte terminou antes do total; recusar commit")
        CHECKPOINT.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n",
                              encoding="utf-8")
        run("git", "add", "--", "index.html", str(module.relative_to(ROOT)),
            str(CHECKPOINT.relative_to(ROOT)))
        run("git", "commit", "-m",
            "KLEIN: incorporar verbetes %d–%d da Sefaria" % (first, last))
        # Verificação de concorrência antes de alterar o remoto.
        before_push = remote_head()
        if before_push != own:
            raise RuntimeError("Branch mudou durante a preparação do lote; não publicar")
        run("git", "push", "origin", "HEAD:" + BRANCH)
        own = subprocess.check_output(["git", "rev-parse", "HEAD"],
                                      cwd=ROOT, text=True).strip()
        confirmed = remote_head()
        if confirmed != own:
            raise RuntimeError("Push não confirmado no remoto: " + own + " != " + confirmed)
        print("KLEIN LOTE CONFIRMADO", first, last, own,
              "acumulado", state["total_incorporated"], "/", total, flush=True)
        if len(records) < quota:
            break
    print("KLEIN RODADA CONCLUÍDA", state["total_incorporated"] - initial,
          "novos", state["total_incorporated"], "de", total, flush=True)

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("KLEIN INCORPORAÇÃO INTERROMPIDA", type(exc).__name__, exc,
              file=sys.stderr, flush=True)
        sys.exit(1)
