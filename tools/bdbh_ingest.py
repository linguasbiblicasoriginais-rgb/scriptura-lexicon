#!/usr/bin/env python3
"""Incorporação BDB Hebraico via texto canônico de Sefaria; sem auditoria/integracao."""
import hashlib
import html
import json
import re
import subprocess
import sys
import time
from pathlib import Path
from urllib.parse import quote
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

ROOT = Path(__file__).resolve().parents[1]
CHECKPOINT = ROOT / "lexicons/bdbh-progress.json"
INDEX = ROOT / "index.html"
BRANCH = "chat-gpt-bdbh"
TARGET_NEW = 1015
BATCH_SIZE = 100
API = "https://www.sefaria.org/api"
SOURCE = "BDB"
LEXICON = "BDB Dictionary"

def api_get(path):
    url = API + path
    last = None
    for retry in range(3):
        try:
            req = Request(url, headers={
                "User-Agent": "ScripturaLexicon-BDBH/1.0 (academic non-commercial import)",
                "Accept": "application/json",
            })
            with urlopen(req, timeout=25) as fp:
                return json.load(fp)
        except (HTTPError, URLError, TimeoutError, ValueError) as exc:
            last = exc
            if isinstance(exc, HTTPError) and exc.code in (400, 401, 403, 404):
                raise RuntimeError(f"HTTP {exc.code} na fonte: {url}") from exc
            if retry < 2:
                time.sleep(2 * (retry + 1))
    raise RuntimeError(f"Fonte inacessível {url}: {last}")

def first_ref():
    index = api_get("/index/BDB")
    dictionary = next(
        (n for n in index.get("schema", {}).get("nodes", [])
         if n.get("nodeType") == "DictionaryNode"
         and n.get("lexiconName") == LEXICON), None
    )
    if not dictionary or not dictionary.get("firstWord"):
        raise RuntimeError("Índice BDB sem primeiro verbete hebraico verificável")
    print("FONTE CANÔNICA", LEXICON, "PRIMEIRO", dictionary["firstWord"],
          "ÚLTIMO", dictionary.get("lastWord"), flush=True)
    return "BDB, " + dictionary["firstWord"]

def escape(value):
    return html.escape(str(value), quote=True)

def plain(value):
    return re.sub(r"\s+", " ", re.sub(r"<[^>]*>", " ", str(value))).strip()

def get_lexicon_entry(ref):
    text = api_get("/texts/" + quote(ref, safe="") + "?context=0&commentary=0")
    if text.get("indexTitle") != SOURCE:
        raise RuntimeError(f"Fonte textual imprevista em {ref!r}: {text.get('indexTitle')!r}")
    canonical = text.get("ref")
    if not canonical or not canonical.startswith("BDB, "):
        raise RuntimeError(f"Referência devolvida não é BDB Hebraico: {canonical!r}")
    pages = text.get("text")
    if isinstance(pages, str):
        pages = [pages]
    if not isinstance(pages, list) or not pages or not all(isinstance(x, str) and x for x in pages):
        raise RuntimeError(f"Texto original incompleto ou ausente: {ref!r}")
    versions = text.get("versions", [])
    version = next(
        (v for v in versions
         if v.get("shortVersionTitle") == LEXICON or
            v.get("versionTitle", "").startswith("A Hebrew and English lexicon of the Old Testament")),
        None
    )
    if not version:
        raise RuntimeError(f"Não comprovada a edição BDB Hebrew para {ref!r}")
    next_ref = text.get("next")
    prev_ref = text.get("prev")
    if next_ref is not None and (not isinstance(next_ref, str)
                                 or not next_ref.startswith("BDB, ")):
        raise RuntimeError(f"Próximo verbete aponta para outra obra: {next_ref!r}")
    if prev_ref is not None and (not isinstance(prev_ref, str)
                                 or not prev_ref.startswith("BDB, ")):
        raise RuntimeError(f"Verbete anterior aponta para outra obra: {prev_ref!r}")
    headword = canonical.partition(", ")[2]
    return ({
        "source": LEXICON,
        "source_ref": canonical,
        "headword": headword,
        "text_html": pages,
        "edition": version.get("versionTitle"),
        "version_source": version.get("versionSource"),
        "source_license": version.get("license"),
        "next_ref": next_ref,
        "prev_ref": prev_ref,
    }, next_ref)

def render_batch(entries, first, number):
    rows, cards = [], []
    for offset, record in enumerate(entries):
        ordinal = first + offset
        ref, lemma = record["source_ref"], record["headword"]
        eid = "entry-bdbh-" + hashlib.sha256(ref.encode("utf-8")).hexdigest()[:20]
        original_html = "\n".join(record["text_html"])
        excerpt = plain(original_html)
        search = " ".join([lemma, excerpt[:1000], "BDB", ref])
        rows.append(
            '<tr class="search-row" data-dictionary="hebraico" data-target="' + eid +
            '" data-source="BDB" data-search="' + escape(search) + '" tabindex="0">' +
            '<td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">' +
            escape(lemma) + '</td><td>—</td><td lang="en">' +
            escape(excerpt[:120] if excerpt else "Verbete original em inglês") +
            '</td><td><span class="source-pill">BDB</span></td></tr>'
        )
        cards.append(
            '<article id="' + eid +
            '" class="entry-card" data-dictionary="hebraico" data-bdbh-ordinal="' +
            str(ordinal) + '" hidden>' +
            '<header class="entry-header"><div><h1 class="entry-title hebrew-title" lang="he" dir="rtl">' +
            escape(lemma) + '</h1><div class="entry-meta">BDB Hebraico · ' +
            escape(ref) + '</div></div><div class="source-tag">BDB</div></header>' +
            '<div class="entry-divider"></div>' +
            '<section class="entry-section" lang="en">' +
            '<div class="section-title">Fonte original (inglês) — Brown–Driver–Briggs</div>' +
            '<div class="entry-text">' + original_html + '</div></section></article>'
        )
    key = f"bdbh-batch-{number:03d}"
    payload = {
        "searchAnchorId": f"bdbh-search-anchor-{number:03d}",
        "entryAnchorId": f"bdbh-entry-anchor-{number:03d}",
        "rowsHtml": "\n".join(rows),
        "cardsHtml": "\n".join(cards),
        "sourceRecords": entries,
        "sourceLexicon": LEXICON,
        "sourceURL": "https://www.sefaria.org/BDB?tab=contents",
        "firstOrdinal": first,
        "lastOrdinal": first + len(entries) - 1,
    }
    return ('"use strict";\nwindow.ScripturaLexicons=window.ScripturaLexicons||{};\n'
            'window.ScripturaLexicons[' + json.dumps(key) + ']=' +
            json.dumps(payload, ensure_ascii=False, separators=(",", ":")) + ';\n')

def edit_index(number):
    page = INDEX.read_text(encoding="utf-8")
    changes = [
        ('<tr id="dgp-search-anchor" hidden></tr>',
         f'<tr id="bdbh-search-anchor-{number:03d}" hidden></tr>\n'
         '                        <tr id="dgp-search-anchor" hidden></tr>'),
        ('<div id="dgp-entry-anchor" hidden></div>',
         f'<div id="bdbh-entry-anchor-{number:03d}" hidden></div>\n'
         '        <div id="dgp-entry-anchor" hidden></div>'),
        ('<script src="script.js"></script>',
         f'<script src="lexicons/bdbh-batch-{number:03d}.js"></script>\n'
         '    <script src="script.js"></script>'),
    ]
    for old, new in changes:
        if old not in page or new in page:
            raise RuntimeError("Âncora ausente ou já existente; index.html não alterado")
        page = page.replace(old, new, 1)
    INDEX.write_text(page, encoding="utf-8")

def commit_batch(path, first, last):
    rel = str(path.relative_to(ROOT))
    subprocess.run(["git", "add", "--", "index.html", rel,
                    "lexicons/bdbh-progress.json"], cwd=ROOT, check=True)
    subprocess.run(["git", "commit", "-m",
                    f"BDBH: incorporar verbetes {first}–{last} da Sefaria (BDB Hebraico)"],
                   cwd=ROOT, check=True)
    subprocess.run(["git", "push", "origin", "HEAD:" + BRANCH],
                   cwd=ROOT, check=True)
    sha = subprocess.check_output(["git", "rev-parse", "HEAD"],
                                  cwd=ROOT, text=True).strip()
    print("BDBH COMMIT CONFIRMADO", first, last, sha, flush=True)

def main():
    if CHECKPOINT.exists():
        state = json.loads(CHECKPOINT.read_text(encoding="utf-8"))
        if not isinstance(state.get("next_ref"), (str, type(None))):
            raise RuntimeError("Checkpoint possui referência inválida")
    else:
        state = {
            "source": LEXICON,
            "source_url": "https://www.sefaria.org/BDB?tab=contents",
            "source_total": None,
            "total_incorporated": 0,
            "next_ref": first_ref(),
            "last_ref": None,
            "last_headword": None,
            "seen_refs": [],
            "batches": [],
        }
    original_count = state["total_incorporated"]
    if state.get("source_total") != 11015 or not 10000 <= original_count <= 11015:
        raise RuntimeError("Conclusão BDBH exige fonte 11015 e checkpoint de 10000 a 11015")
    if len(state.get("seen_refs", [])) != original_count:
        raise RuntimeError("Checkpoint e sequência de referências têm contagens divergentes")
    remaining_target = min(TARGET_NEW, state["source_total"] - original_count)
    seen = set(state.get("seen_refs", []))
    while state["total_incorporated"] - original_count < remaining_target:
        start = state["total_incorporated"] + 1
        limit = min(BATCH_SIZE, remaining_target - (start - 1 - original_count))
        entries = []
        for _ in range(limit):
            ref = state.get("next_ref")
            if not ref:
                break
            if ref in seen:
                raise RuntimeError(f"Ciclo na sequência BDB antes de commit: {ref!r}")
            data, successor = get_lexicon_entry(ref)
            if data["source_ref"] in seen:
                raise RuntimeError(f"Verbete já incorporado; interrupção sem sobrescrita: {ref}")
            entries.append(data)
            seen.add(data["source_ref"])
            state["seen_refs"].append(data["source_ref"])
            state["last_headword"] = data["headword"]
            state["last_ref"] = data["source_ref"]
            state["next_ref"] = successor
            if len(entries) == 1 or len(entries) % 20 == 0:
                print("BDBH FONTE", start + len(entries) - 1,
                      data["source_ref"], "PRÓXIMO", repr(successor),
                      flush=True)
            time.sleep(0.18)
        if not entries:
            print("Fim da fonte detectado antes da meta de novos verbetes", flush=True)
            break
        number = len(state["batches"]) + 1
        module = ROOT / f"lexicons/bdbh-batch-{number:03d}.js"
        if module.exists():
            raise RuntimeError(f"Módulo já existe; não sobrescrever: {module}")
        module.write_text(render_batch(entries, start, number), encoding="utf-8")
        edit_index(number)
        last = start + len(entries) - 1
        state["total_incorporated"] = last
        state["batches"].append({
            "file": str(module.relative_to(ROOT)),
            "first_ordinal": start,
            "last_ordinal": last,
            "count": len(entries),
            "first_headword": entries[0]["headword"],
            "last_headword": entries[-1]["headword"],
            "first_ref": entries[0]["source_ref"],
            "last_ref": entries[-1]["source_ref"],
        })
        CHECKPOINT.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n",
                              encoding="utf-8")
        commit_batch(module, start, last)
        if len(entries) < limit:
            break
    if state["total_incorporated"] != state["source_total"] or state.get("next_ref") is not None:
        raise RuntimeError("Fim do BDB hebraico ainda não confirmado: total ou próxima referência diverge")
    print("BDBH RESULTADO", json.dumps({
        "novos": state["total_incorporated"] - original_count,
        "acumulado": state["total_incorporated"],
        "ultimo_verbete": state["last_headword"],
        "proxima_referencia": state["next_ref"],
        "denominador": state["source_total"],
    }, ensure_ascii=False), flush=True)

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("IMPEDIMENTO BDBH:", type(exc).__name__, str(exc), file=sys.stderr,
              flush=True)
        raise
