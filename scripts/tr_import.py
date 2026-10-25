#!/usr/bin/env python3
"""Incorporar Textus Receptus de Scrivener 1894 sem alterar UXLC, LXX ou VUL."""
import collections
import hashlib
import json
import re
import sys
import zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
UPSTREAM_COMMIT="2bac2dae4a0961c84d6d544a40cbef8b8d8c4e32"
SOURCE=f"https://codeload.github.com/honza/textus-receptus/zip/{UPSTREAM_COMMIT}"
SHA256="0ff99c96f1146183ed610ed6794431101a5b8d28ec806bdf4cbdf537da1e2c18"
BYTES=20875091
EXPECTED_BOOKS=27
EXPECTED_CHAPTERS=260
EXPECTED_VERSES=7957
EXPECTED_WORDS=140628
SLUG={
"MAT":"matthew","MRK":"mark","LUK":"luke","JHN":"john",
"ACT":"acts","ROM":"romans","1CO":"1-corinthians","2CO":"2-corinthians",
"GAL":"galatians","EPH":"ephesians","PHP":"philippians",
"COL":"colossians","1TH":"1-thessalonians","2TH":"2-thessalonians",
"1TI":"1-timothy","2TI":"2-timothy","TIT":"titus","PHM":"philemon",
"HEB":"hebrews","JAS":"james","1PE":"1-peter","2PE":"2-peter",
"1JN":"1-john","2JN":"2-john","3JN":"3-john","JUD":"jude",
"REV":"revelation"}
CHAPTER_COUNTS={"MAT":28,"MRK":16,"LUK":24,"JHN":21,"ACT":28,
"ROM":16,"1CO":16,"2CO":13,"GAL":6,"EPH":6,"PHP":4,"COL":4,
"1TH":5,"2TH":3,"1TI":6,"2TI":4,"TIT":3,"PHM":1,"HEB":13,"JAS":5,
"1PE":5,"2PE":3,"1JN":5,"2JN":1,"3JN":1,"JUD":1,"REV":22}
def need(test,message):
    if not test:raise RuntimeError(message)
def dump(obj):
    return json.dumps(obj,ensure_ascii=False,separators=(",",":"))
def main():
    need(len(sys.argv)==2,"Uso: python3 scripts/tr_import.py /tmp/scrivener-1894.zip")
    blob=Path(sys.argv[1]).read_bytes()
    need(len(blob)==BYTES,f"Arquivo upstream mudou de tamanho ({len(blob)})")
    digest=hashlib.sha256(blob).hexdigest()
    need(digest==SHA256,f"SHA256 diferente: {digest}")
    with zipfile.ZipFile(sys.argv[1]) as z:
        entries=[p for p in z.namelist() if p.endswith("/data/gnt.flat.json")]
        need(len(entries)==1,f"Arquivo flat JSON inesperado: {entries}")
        rows=json.loads(z.read(entries[0]))
    need(isinstance(rows,list) and len(rows)==EXPECTED_VERSES,
         f"Contagem de registros divergente: {len(rows)}")
    grouped={book:collections.OrderedDict() for book in SLUG}
    book_names={}
    word_total=0
    anomalies=[]
    for i,row in enumerate(rows):
        code=row.get("book_name_short")
        need(code in SLUG,f"Livro inesperado no registro {i}: {code!r}")
        chapter=row.get("chapter");verse=row.get("verse")
        need(type(chapter)==int and type(verse)==int and chapter>0 and verse>0,
             f"Identificador de versículo inválido {code} {chapter}:{verse}")
        need(chapter<=CHAPTER_COUNTS[code],
             f"Capítulo fora do catálogo {code} {chapter}")
        text=row.get("greek_text")
        need(isinstance(text,str) and text.strip() and "\ufffd" not in text,
             f"Texto grego ausente ou inválido {code} {chapter}:{verse}")
        need(isinstance(row.get("words"),list),
             f"Informações morfológicas ausentes {code} {chapter}:{verse}")
        word_total+=len(row["words"])
        book_names.setdefault(code,{
            "english":row.get("book_name"),
            "greek":row.get("book_greek"),
            "osis":row.get("book_name_osis")
        })
        chapter_map=grouped[code].setdefault(chapter,collections.OrderedDict())
        need(verse not in chapter_map,f"Referência duplicada {code} {chapter}:{verse}")
        chapter_map[verse]=text
        if "\u2028" in text or "\u2029" in text:
            anomalies.append(f"{code} {chapter}:{verse} U+2028/2029")
    need(word_total==EXPECTED_WORDS,f"Contagem de palavras divergente: {word_total}")
    need(not anomalies,f"Caracteres problemáticos no JS: {anomalies[:5]}")
    need(len(book_names)==EXPECTED_BOOKS,"Nem todos os livros possuem texto")
    files=collections.OrderedDict()
    summary=[]
    for code,chapters in grouped.items():
        need(len(chapters)==CHAPTER_COUNTS[code],
             f"Capítulos incompletos em {code}: {len(chapters)}")
        need(sorted(chapters)==list(range(1,CHAPTER_COUNTS[code]+1)),
             f"Capítulos fora de sequência: {code}")
        verse_counts=[]
        for chapter,verses in chapters.items():
            need(verses and all(verses.values()),f"Capítulo vazio: {code} {chapter}")
            keys=list(verses)
            need(keys==sorted(keys),f"Versículos fora de ordem: {code} {chapter}")
            path=f"scriptures/texts/tr-{SLUG[code]}-{chapter}.js"
            need(path not in files,f"Módulo duplicado {path}")
            files[path]="\n".join([
              f"/* Textus Receptus, F. H. A. Scrivener (1894), transcrição Honza Pokorny. Fonte SHA256 {SHA256}. */",
              "(function(){","'use strict';",
              "window.ScripturaScriptureTexts ||= {};",
              "window.ScripturaScriptureTexts.TR ||= {};",
              f'window.ScripturaScriptureTexts.TR["{code}"] ||= {{}};',
              f'window.ScripturaScriptureTexts.TR["{code}"][{chapter}]='+dump(verses)+";",
              "})();",""
            ])
            verse_counts.append(len(verses))
        summary.append({
            "id":code,"slug":SLUG[code],
            "chapters":len(chapters),"verses":sum(verse_counts),
            "perChapter":verse_counts,**book_names[code]})
        print(f"VALIDADO TR {code}: {len(chapters)} capítulos, {sum(verse_counts)} versículos",flush=True)
    need(len(files)==EXPECTED_CHAPTERS,f"Módulos faltantes: {len(files)}")
    need(sum(b["verses"] for b in summary)==EXPECTED_VERSES,"Total de versículos inconsistente")

    # O frontend carrega capítulos sob demanda; nunca recriar scripts no HTML.
    html_path=ROOT/"index.html"
    html=html_path.read_text(encoding="utf8")
    html=re.sub(r'(?m)^[ \t]*<script defer src="scriptures/texts/(?:uxlc|lxx|tr|sblgnt|vul|vulj)-[^"]+\.js"></script>\r?\n',"",html)
    reader_path=ROOT/"scriptures/reader.js"
    reader=reader_path.read_text(encoding="utf8")
    oldlabel='TR: "Novo Testamento Grego – Texto Recebido (TR)"'
    newlabel='TR: "Textus Receptus — Scrivener (1894)"'
    need(reader.count(oldlabel)==1 or reader.count(newlabel)==1,
         "Identificação de TR inesperada")
    reader=reader.replace(oldlabel,newlabel)
    oldfeedback="O Texto Recebido depende da definição de uma edição canônica (por exemplo, Stephanus ou Scrivener)."
    newfeedback="Edição identificada: F. H. A. Scrivener (1894); transcrição digital de Honza Pokorny."
    need(reader.count(oldfeedback)==1 or reader.count(newfeedback)==1,
         "Mensagem de TR inesperada")
    reader=reader.replace(oldfeedback,newfeedback)

    manifest={
      "edition":"Textus Receptus — Scrivener (1894)",
      "source":"honza/textus-receptus; data/gnt.flat.json",
      "upstreamCommit":UPSTREAM_COMMIT,
      "sourceUrl":SOURCE,"sha256":digest,"zipBytes":BYTES,
      "sourceLicense":"Dados livres para uso sem restrições; software de origem GPL v3+.",
      "sourceCredits":"Transcrição digital: Honza Pokorny; texto editorial: F. H. A. Scrivener, 1894.",
      "totalBooks":EXPECTED_BOOKS,"chapters":len(files),
      "verses":EXPECTED_VERSES,"sourceWordRecords":word_total,
      "books":summary,
      "textPolicy":"greek_text preservado literalmente; morfologia e glossas não são inseridas nos textos nem nos popups",
      "criticalCaveat":"Scrivener 1894 não deve ser confundido com Stephanus 1550, NA28 ou o texto majoritário bizantino"
    }
    for path,content in files.items():
        dest=ROOT/path;dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_text(content,encoding="utf8")
    (ROOT/"scriptures/tr-scrivener-progress.json").write_text(
        json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    html_path.write_text(html,encoding="utf8")
    reader_path.write_text(reader,encoding="utf8")
    print(f"PRONTO TR: {EXPECTED_BOOKS} livros, {len(files)} capítulos, {EXPECTED_VERSES} versículos, {word_total} registros lexicais na fonte.",flush=True)
if __name__=="__main__":main()
