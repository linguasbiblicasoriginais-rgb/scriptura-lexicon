#!/usr/bin/env python3
"""Incorporação exclusiva do BDB Hebraico, diretamente da API da Sefaria.

Não traduz, corrige, homologa, audita ou integra. Registra todo o objeto
lexicográfico canônico e constrói cartões para a interface já existente.
"""
import hashlib
import html
import json
import re
import subprocess
import sys
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
LEXICONS = ROOT / "lexicons"
CHECKPOINT = LEXICONS / "bdbh-progress.json"
INDEX = ROOT / "index.html"
LEXICON_NAME = "BDB Dictionary"
API = "https://www.sefaria.org/api"
BRANCH = "chat-gpt-bdbh"
TARGET = 1000
BATCH_SIZE = 100


def api_get(path):
    url = API + path
    last_error = None
    for attempt in range(3):
        try:
            req = Request(url, headers={
                "User-Agent": "ScripturaLexicon-BDBH/1.0 (research; one-time import)",
                "Accept": "application/json",
            })
            with urlopen(req, timeout=45) as response:
                return json.load(response)
        except (HTTPError, URLError, TimeoutError, ValueError) as exc:
            last_error = exc
            if isinstance(exc, HTTPError) and exc.code in (400, 401, 403, 404):
                raise RuntimeError(f"Fonte inacessível: {url}: HTTP {exc.code}") from exc
            if attempt < 2:
                time.sleep(4 * (attempt + 1))
    raise RuntimeError(f"Não foi possível ler {url}: {last_error}")


def first_headword():
    index = api_get("/index/BDB")
    for node in index.get("schema", {}).get("nodes", []):
        if node.get("nodeType") == "DictionaryNode":
            hmap = node.get("headwordMap") or []
            print("INDICE BDB", {
                "lexiconName": node.get("lexiconName"),
                "firstWord": node.get("firstWord"),
                "lastWord": node.get("lastWord"),
                "headwordMap_first": hmap[:3],
            }, flush=True)
            for term in ("א", "אָב", "אבב"):
                try:
                    ref = "BDB, " + term
                    d = api_get("/texts/" + quote(ref, safe="") + "?context=0")
                    print("API TEXTOS", term, str(d)[:1500], flush=True)
                except Exception as exc:
                    print("API TEXTOS ERRO", term, str(exc)[:300], flush=True)
            return node.get("firstWord") or (hmap[0][0] if hmap else None)
    raise RuntimeError("Índice BDB da Sefaria não contém headwordMap utilizável.")


def source_id(record):
    rid = record.get("rid")
    if rid:
        return str(rid)
    canonical = json.dumps(record, ensure_ascii=False, sort_keys=True)
    return "hash:" + hashlib.sha256(canonical.encode("utf-8")).hexdigest()


def esc(value):
    return html.escape(str(value), quote=True)


def strip_markup(value):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]*>", " ", str(value))).strip()


def first_definition(obj):
    if isinstance(obj, dict):
        if obj.get("definition"):
            return strip_markup(obj["definition"])[:170]
        for item in obj.values():
            val = first_definition(item)
            if val:
                return val
    elif isinstance(obj, list):
        for item in obj:
            val = first_definition(item)
            if val:
                return val
    return ""


def original_markup(text):
    # Preserva deliberadamente a marcação da própria fonte canônica.
    return str(text)


def render_original(value, key=None):
    if value is None or value == "":
        return ""
    if isinstance(value, dict):
        parts = []
        for label, child in value.items():
            rendered = render_original(child, label)
            if not rendered:
                continue
            parts.append('<div class="entry-text"><strong>' + esc(label) +
                         ':</strong> ' + rendered + '</div>')
        return "\n".join(parts)
    if isinstance(value, list):
        return '<ol>' + "".join('<li>' + render_original(item) + '</li>' for item in value) + '</ol>'
    if isinstance(value, (int, float, bool)):
        return esc(value)
    if key in ("definition", "etymology", "notes", "note", "examples", "text"):
        return original_markup(value)
    return esc(value)


def module_text(records, start, end, number):
    rows = []
    cards = []
    for offset, record in enumerate(records):
        ordinal = start + offset
        ident = source_id(record)
        entry_id = "entry-bdbh-" + hashlib.sha256(
            (str(ordinal) + ":" + ident).encode("utf-8")
        ).hexdigest()[:20]
        hw = record.get("headword", "")
        content = record.get("content") or {}
        morphology = content.get("morphology") or record.get("morphology") or ""
        morphology_text = strip_markup(morphology) if isinstance(morphology, str) else ""
        gloss = first_definition(content)
        search = " ".join(filter(None, [
            hw, record.get("transliteration", ""),
            str(record.get("rid", "")), morphology_text, gloss, "BDB"
        ]))
        rows.append(
            '<tr class="search-row" data-dictionary="hebraico" data-target="' + esc(entry_id) +
            '" data-source="BDB" data-search="' + esc(search) + '" tabindex="0">' +
            '<td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">' + esc(hw) + '</td>' +
            '<td>' + esc(morphology_text or "—") + '</td>' +
            '<td lang="en">' + esc(gloss or "Texto original em inglês") + '</td>' +
            '<td><span class="source-pill">BDB</span></td></tr>'
        )
        other = {k: v for k, v in record.items()
                 if k not in ("headword", "content", "parent_lexicon")}
        cards.append(
            '<article id="' + esc(entry_id) +
            '" class="entry-card" data-dictionary="hebraico" data-bdbh-ordinal="' +
            str(ordinal) + '" hidden>' +
            '<header class="entry-header"><div><h1 class="entry-title hebrew-title" lang="he" dir="rtl">' +
            esc(hw) + '</h1><div class="entry-meta">BDB Hebraico · entrada ' +
            str(ordinal) + '</div></div><div class="source-tag">BDB</div></header>' +
            '<div class="entry-divider"></div>' +
            '<section class="entry-section" lang="en">' +
            '<div class="section-title">Fonte original (inglês) — Sefaria</div>' +
            render_original(content) + '</section>' +
            '<section class="entry-section">' +
            '<div class="section-title">Dados da entrada na fonte</div>' +
            render_original(other) + '</section></article>'
        )
    name = f"bdbh-{number:03d}"
    obj = {
        "searchAnchorId": f"bdbh-search-anchor-{number:03d}",
        "entryAnchorId": f"bdbh-entry-anchor-{number:03d}",
        "rowsHtml": "\n".join(rows),
        "cardsHtml": "\n".join(cards),
        "sourceRecords": records,
        "sourceLexicon": LEXICON_NAME,
        "sourceURL": "https://www.sefaria.org/BDB?tab=contents",
        "ordinalFirst": start,
        "ordinalLast": end,
    }
    return (
        '"use strict";\n'
        'window.ScripturaLexicons = window.ScripturaLexicons || {};\n'
        'window.ScripturaLexicons[' + json.dumps(name) + '] = ' +
        json.dumps(obj, ensure_ascii=False, separators=(",", ":")) + ';\n'
    )


def add_batch_to_index(number):
    raw = INDEX.read_text(encoding="utf-8")
    marker_search = '<tr id="dgp-search-anchor" hidden></tr>'
    marker_entry = '<div id="dgp-entry-anchor" hidden></div>'
    marker_script = '<script src="script.js"></script>'
    if any(m not in raw for m in (marker_search, marker_entry, marker_script)):
        raise RuntimeError("Âncoras existentes da interface não encontradas; interrompido.")
    search_id = f'<tr id="bdbh-search-anchor-{number:03d}" hidden></tr>'
    entry_id = f'<div id="bdbh-entry-anchor-{number:03d}" hidden></div>'
    script_id = f'<script src="lexicons/bdbh-batch-{number:03d}.js"></script>'
    if any(m in raw for m in (search_id, entry_id, script_id)):
        raise RuntimeError("Marcadores do lote já registrados, interrompido.")
    raw = raw.replace(marker_search, search_id + "\n                        " + marker_search, 1)
    raw = raw.replace(marker_entry, entry_id + "\n        " + marker_entry, 1)
    raw = raw.replace(marker_script, script_id + "\n    " + marker_script, 1)
    INDEX.write_text(raw, encoding="utf-8")


def commit_batch(file, count_before, count_after):
    subprocess.run(["git", "add", "--", "index.html", str(file.relative_to(ROOT)),
                    str(CHECKPOINT.relative_to(ROOT))], check=True, cwd=ROOT)
    subprocess.run([
        "git", "commit", "-m",
        f"BDBH: incorporar {count_after - count_before} verbetes "
        f"({count_before + 1:04d}–{count_after:04d}), Sefaria"
    ], check=True, cwd=ROOT)
    subprocess.run(["git", "push", "origin", "HEAD:" + BRANCH], check=True, cwd=ROOT)
    sha = subprocess.check_output(["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip()
    print(f"COMMIT CONFIRMADO: {sha} / acumulado {count_after}", flush=True)


def main():
    if CHECKPOINT.exists():
        state = json.loads(CHECKPOINT.read_text(encoding="utf-8"))
    else:
        state = {
            "source": "Sefaria — BDB Dictionary (Hebrew)",
            "source_url": "https://www.sefaria.org/BDB?tab=contents",
            "source_total": None,
            "total_incorporated": 0,
            "last_headword": None,
            "last_rid": None,
            "next_headword": first_headword(),
            "pending_entries": [],
            "seen_rids": [],
            "seen_headwords": [],
            "batches": [],
        }

    initial = state["total_incorporated"]
    if initial >= TARGET:
        print(f"Há {initial} entradas BDBH; nenhum novo registro necessário.")
        return
    seen_rids = set(state.get("seen_rids", []))
    seen_hws = set(state.get("seen_headwords", []))
    while state["total_incorporated"] - initial < TARGET:
        before = state["total_incorporated"]
        available = TARGET - (before - initial)
        target = min(BATCH_SIZE, available)
        records = []
        while len(records) < target:
            pending = state["pending_entries"]
            if pending:
                record = pending.pop(0)
                if record.get("parent_lexicon") != LEXICON_NAME:
                    raise RuntimeError("Entrada incompatível com BDB Hebraico.")
                key = source_id(record)
                if key in seen_rids:
                    continue
                seen_rids.add(key)
                state["seen_rids"].append(key)
                records.append(record)
                state["last_headword"] = record.get("headword")
                state["last_rid"] = record.get("rid")
                continue
            hw = state.get("next_headword")
            if not hw:
                break
            if hw in seen_hws:
                raise RuntimeError(f"Ciclo de ponteiros next_hw na fonte: {hw!r}")
            payload = api_get("/words/" + quote(str(hw), safe=""))
            if not isinstance(payload, list):
                raise RuntimeError(f"Resposta não é lista para {hw!r}")
            selected = [e for e in payload if e.get("parent_lexicon") == LEXICON_NAME]
            if selected:
                if len(state["seen_headwords"]) < 20:
                    print("FONTE", repr(hw), "RIDS/PONTEIROS:",
                          [(str(e.get("rid")), str(e.get("headword")),
                            str(e.get("prev_hw")), str(e.get("next_hw")))
                           for e in selected[:15]], flush=True)
                pointer = next(
                    (e.get("next_hw") for e in reversed(selected)
                     if e.get("next_hw") and e.get("next_hw") != hw
                     and e.get("next_hw") not in seen_hws), None
                )
                if pointer is None:
                    raise RuntimeError(
                        f"Sem próximo ponteiro BDB não circular para {hw!r}: "
                        f"{[(e.get('headword'), e.get('next_hw')) for e in selected]}"
                    )
                state["pending_entries"] = selected
            else:
                if len(state["seen_headwords"]) < 20:
                    print("FONTE/SEM BDB", repr(hw),
                          [(e.get("parent_lexicon"), e.get("headword"),
                            e.get("rid"), e.get("next_hw"))
                           for e in payload[:15]], flush=True)
                pointer = next((e.get("next_hw") for e in payload
                                if e.get("next_hw") and e.get("next_hw") != hw
                                and e.get("next_hw") not in seen_hws), None)
                if not pointer:
                    raise RuntimeError(
                        f"Sem entrada hebraica ou continuidade para {hw!r}; "
                        "não pressupor fim da fonte."
                    )
            seen_hws.add(hw)
            state["seen_headwords"].append(hw)
            state["next_headword"] = pointer
            time.sleep(0.25)
        if not records:
            print("Fim da fonte; nenhuma nova entrada neste lote.")
            break
        count = before + len(records)
        batch_no = len(state["batches"]) + 1
        if batch_no > 100:
            raise RuntimeError("Número inesperado de lotes.")
        path = LEXICONS / f"bdbh-batch-{batch_no:03d}.js"
        if path.exists():
            raise RuntimeError(f"Arquivo de lote existente, sem sobrescrita: {path}")
        path.write_text(module_text(records, before + 1, count, batch_no),
                        encoding="utf-8")
        add_batch_to_index(batch_no)
        state["total_incorporated"] = count
        state["batches"].append({
            "file": str(path.relative_to(ROOT)),
            "first_ordinal": before + 1,
            "last_ordinal": count,
            "count": len(records),
            "first_headword": records[0].get("headword"),
            "last_headword": records[-1].get("headword"),
        })
        CHECKPOINT.write_text(
            json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        commit_batch(path, before, count)
        if len(records) < target:
            print("Fonte encerrada antes do total solicitado.")
            break
    print(json.dumps({
        "incorporados_nesta_rodada": state["total_incorporated"] - initial,
        "acumulado": state["total_incorporated"],
        "ultimo_lema": state["last_headword"],
        "proximo_lema": state["next_headword"],
        "total_da_fonte": "total ainda não apurado",
    }, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    try:
        main()
    except Exception as e:
        print(f"IMPEDIMENTO CONCRETO: {type(e).__name__}: {e}", file=sys.stderr)
        sys.exit(1)
