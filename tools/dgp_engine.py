#!/usr/bin/env python3
"""DGP: incorporação determinística e auditoria estática do corpus fixado.

Não substitui análise filológica, revisão editorial de popups nem teste de DOM.
"""
import argparse
import hashlib
import html
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path

SHA = "deb54b426ead447d01ced7534736f3e77be7015b"
BLOB = "eec318bb6150b6b2f4422ea4a76383ac0a254de2"
URL = "https://raw.githubusercontent.com/aniseferreira/Grc-Por-DigDict/" + SHA + "/arquivos_xml/01_Alfa.txt.xml"
NS = "{http://www.tei-c.org/ns/1.0}"
SIZE = 100


def normalize(s):
    return re.sub(r"\s+", " ", s).strip()


def source_bytes(path=None):
    if path:
        payload = Path(path).read_bytes()
    else:
        with urllib.request.urlopen(URL, timeout=35) as stream:
            payload = stream.read()
    digest = hashlib.sha1(b"blob " + str(len(payload)).encode() + b"\0" + payload).hexdigest()
    if digest != BLOB:
        raise ValueError("Fonte XML não corresponde ao SHA canônico: " + digest)
    return payload


def entries(payload):
    root = ET.fromstring(payload)
    nodes = root.findall(".//" + NS + "entryFree")
    if len(nodes) != 7204:
        raise ValueError("Total alfa inesperado: " + str(len(nodes)))
    output = []
    for n, node in enumerate(nodes, 1):
        defs = [x for x in node if x.tag == NS + "def"]
        if len(defs) != 1 or list(node).index(defs[0]) != 0:
            raise ValueError("Estrutura entryFree incompatível, ordinal " + str(n))
        head = normalize(node.text or "")
        definition = normalize("".join(defs[0].itertext()))
        if not head or not definition:
            raise ValueError("Lema/definição ausente no ordinal " + str(n))
        if chr(96) in head + definition or ("$" + "{") in head + definition:
            raise ValueError("Template literal inseguro no ordinal " + str(n))
        output.append((n, head, definition))
    return output


def identifier(n):
    return "entry-dgp-" + str(n).zfill(4)


def markup(items, batch):
    if len(items) != SIZE or any(e[0] != items[0][0] + i for i, e in enumerate(items)):
        raise ValueError("Lote sem 100 ordinais consecutivos")
    rows, cards = [], []
    for n, lemma, meaning in items:
        code = identifier(n)
        a, d = html.escape(lemma, quote=True), html.escape(meaning, quote=True)
        search = html.escape(lemma + " " + meaning + " DGP", quote=True)
        rows.append(
            '<tr class="search-row" data-dictionary="grego" data-target="' + code
            + '" data-source="DGP" data-search="' + search + '" tabindex="0">'
            + '<td class="table-lemma greek">' + a + '</td><td>—</td><td>' + d
            + '</td><td><span class="source-pill">DGP</span></td></tr>'
        )
        cards.append(
            '<article id="' + code + '" class="entry-card" data-dictionary="grego"'
            + ' data-source="DGP" hidden><header class="entry-header"><div>'
            + '<h1 class="entry-title greek">' + a + '</h1>'
            + '<div class="entry-meta"><span>DGP · ordem ' + str(n)
            + ' na letra α</span></div></div><div class="source-tag">DGP</div>'
            + '</header><div class="entry-divider"></div><section class="entry-section">'
            + '<div class="section-title">Definição do DGP</div>'
            + '<p class="entry-text">' + d + '</p></section></article>'
        )
    marker = "\n\n/* DGP AUTO LOTE " + str(batch) + " — ordinais " + str(items[0][0]) + "–" + str(items[-1][0]) + "; XML " + SHA + ". */\n"
    quote = chr(96)
    return (marker + "window.ScripturaLexicons.DGP.rowsHtml += String.raw" + quote
            + "\n" + "\n".join(rows) + "\n" + quote + ";\n"
            + "window.ScripturaLexicons.DGP.cardsHtml += String.raw" + quote
            + "\n" + "\n".join(cards) + "\n" + quote + ";\n")


def inspect(source, items, batch):
    mark = "/* DGP AUTO LOTE " + str(batch) + " — ordinais "
    pos = source.rfind(mark)
    if pos < 0:
        raise ValueError("Bloco do lote não encontrado")
    block = source[pos:]
    rows = re.findall(r'<tr class="search-row"[^>]*>.*?</tr>', block, re.S)
    cards = re.findall(r'<article id="entry-dgp-[0-9]+"[^>]*>.*?</article>', block, re.S)
    errors = []
    if len(rows) != SIZE or len(cards) != SIZE:
        errors.append("Cardinalidade divergente: rows=" + str(len(rows)) + ", cards=" + str(len(cards)))
    for i, (n, lemma, definition) in enumerate(items):
        if i >= len(rows) or i >= len(cards):
            errors.append("Registro ausente: " + str(n))
            continue
        row, card = rows[i], cards[i]
        code = identifier(n)
        if 'data-target="' + code + '"' not in row or 'id="' + code + '"' not in card:
            errors.append("ID/alvo incorreto: " + str(n))
        fields = (
            (row, r'<td class="table-lemma greek">(.*?)</td>', lemma),
            (row, r'<td>—</td><td>(.*?)</td>', definition),
            (card, r'<h1 class="entry-title greek">(.*?)</h1>', lemma),
            (card, r'<p class="entry-text">(.*?)</p>', definition),
            (row, r'data-search="([^"]*)"', lemma + " " + definition + " DGP"),
        )
        for body, pat, expected in fields:
            found = re.search(pat, body, re.S)
            if not found or html.unescape(found.group(1)) != expected:
                errors.append("Fidelidade textual/índice: " + str(n))
        for body in (row, card):
            if 'data-source="DGP"' not in body or 'data-dictionary="grego"' not in body:
                errors.append("Fonte/dicionário: " + str(n))
    return {
        "batch": batch, "start": items[0][0], "end": items[-1][0],
        "rows": len(rows), "cards": len(cards),
        "errors": sorted(set(errors)), "approved_static": not errors,
        "browsertest": "NAO_EXECUTADO", "popup_editorial_review": "NAO_CERTIFICADA",
        "source_sha": SHA, "source_blob": BLOB
    }


def ingest(root, corpus):
    progress_file = root / "lexicons/dgp-progress.json"
    progress = json.loads(progress_file.read_text(encoding="utf-8"))
    begin = int(progress["scope"]["next_ordinal"])
    finish = begin + SIZE - 1
    if finish > len(corpus):
        raise ValueError("Fim do corpus alfa; próxima letra requer fonte canônica")
    if int(progress["batches"][-1]["end_ordinal"]) != begin - 1:
        raise ValueError("Checkpoint inconsistente")
    selected = corpus[begin-1:finish]
    batch = int(progress["batches"][-1]["batch"]) + 1
    module_path = root / "lexicons/dgp-batches.js"
    original = module_path.read_text(encoding="utf-8")
    for n, _, _ in selected:
        if identifier(n) in original:
            raise ValueError("Ordinal duplicado: " + str(n))
    updated = original + markup(selected, batch)
    report = inspect(updated, selected, batch)
    if not report["approved_static"]:
        raise ValueError("Auditoria precommit reprovada: " + repr(report["errors"]))
    progress["scope"].update(batch_size=SIZE, next_ordinal=finish+1, status="lote " + str(batch) + " incorporado; auditoria pendente")
    progress["batches"].append({
        "batch":batch, "start_ordinal":begin, "end_ordinal":finish,
        "start_entry":selected[0][1], "end_entry":selected[-1][1],
        "entry_count":SIZE, "status":"aguardando auditoria independente"
    })
    module_path.write_text(updated, encoding="utf-8")
    progress_file.write_text(json.dumps(progress, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    with (root / "regras/Rdgp.txt").open("a", encoding="utf-8") as f:
        f.write("\nLote " + str(batch) + ": " + str(begin) + "–" + str(finish)
                + ", XML " + SHA + ". INCORPORADO; auditoria e integração pendentes.\n")
    return report


def audit(source, corpus, start, batch):
    items = corpus[start-1:start-1+SIZE]
    if len(items) != SIZE:
        raise ValueError("Lote incompleto")
    report = inspect(source, items, batch)
    lines = [
        "# DGP — auditoria independente do lote " + str(batch),
        "", "Corpus fixado: " + SHA, "Blob: " + BLOB,
        "Ordinais: " + str(items[0][0]) + "–" + str(items[-1][0]),
        "Lemas: " + items[0][1] + " → " + items[-1][1], "",
        "## Verificações automáticas",
        "", "- Registros: 100",
        "- Linhas de busca: " + str(report["rows"]),
        "- Cartões: " + str(report["cards"]),
        "- Divergências: " + str(len(report["errors"])),
        "- Fidelidade textual e estrutural: " + ("APROVADA" if report["approved_static"] else "REPROVADA"),
        "- Popups bibliográficos: revisão editorial complementar necessária.",
        "- Navegador e DOM: não testados.",
        "", "## Ressalva",
        "", "Auditoria computacional não substitui revisão filológica ou visual.",
        "Nenhuma aprovação interpretativa deve ser inferida deste relatório.", ""
    ]
    if report["errors"]:
        lines += ["## Divergências", ""] + ["- " + x for x in report["errors"]] + [""]
    return report, "\n".join(lines)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["preflight", "ingest", "audit"])
    parser.add_argument("--root", default=".")
    parser.add_argument("--xml")
    parser.add_argument("--source-js")
    parser.add_argument("--start", type=int)
    parser.add_argument("--batch", type=int)
    parser.add_argument("--report-out")
    args = parser.parse_args()
    corpus = entries(source_bytes(args.xml))
    root = Path(args.root)
    if args.command == "preflight":
        progress = json.loads((root / "lexicons/dgp-progress.json").read_text(encoding="utf-8"))
        n = int(progress["scope"]["next_ordinal"])
        result = {"next_ordinal":n, "first":corpus[n-1][1], "last":corpus[n+SIZE-2][1]}
    elif args.command == "ingest":
        result = ingest(root, corpus)
    else:
        if args.start is None or args.batch is None or not args.source_js:
            parser.error("audit exige --start --batch --source-js")
        result, document = audit(Path(args.source_js).read_text(encoding="utf-8"), corpus, args.start, args.batch)
        if args.report_out:
            Path(args.report_out).write_text(document, encoding="utf-8")
    print(json.dumps(result, ensure_ascii=False, indent=2))
    if result.get("errors"):
        raise SystemExit(2)


if __name__ == "__main__":
    main()
