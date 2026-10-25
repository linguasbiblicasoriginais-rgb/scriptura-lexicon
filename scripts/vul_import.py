#!/usr/bin/env python3
"""Vulgata Clementina (1598) / eBible USFX. Fonte imutável por SHA-256."""
import collections
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
SOURCE="https://ebible.org/Scriptures/latVUC_usfx.zip"
SOURCE_PAGE="https://ebible.org/find/details.php?id=latVUC"
SHA256="f5e4ea08acaa8bf10736df2677b27ce244ba7ef5016d98b10d3bb67b58bca86e"
BYTES=3716338
EXPECTED_BOOKS=73
EXPECTED_CHAPTERS=1334
EXPECTED_VERSES=35809
EXPECTED_NOTES=13775
MISSING_FROM_SOURCE=["MAN","3ES","4ES","PS151","LAO"]
SLUG={"GEN":"genesis","EXO":"exodus","LEV":"leviticus","NUM":"numbers",
"DEU":"deuteronomy","JOS":"joshua","JDG":"judges","RUT":"ruth",
"1SA":"1-samuel","2SA":"2-samuel","1KI":"1-kings","2KI":"2-kings",
"1CH":"1-chronicles","2CH":"2-chronicles","EZR":"ezra","NEH":"nehemiah",
"EST":"esther","JOB":"job","PSA":"psalms","PRO":"proverbs",
"ECC":"ecclesiastes","SNG":"song-of-songs","ISA":"isaiah",
"JER":"jeremiah","LAM":"lamentations","EZK":"ezekiel","DAN":"daniel",
"HOS":"hosea","JOL":"joel","AMO":"amos","OBA":"obadiah","JON":"jonah",
"MIC":"micah","NAM":"nahum","HAB":"habakkuk","ZEP":"zephaniah",
"HAG":"haggai","ZEC":"zechariah","MAL":"malachi","TOB":"tobit",
"JDT":"judith","WIS":"wisdom","SIR":"sirach","BAR":"baruch",
"1MA":"1-maccabees","2MA":"2-maccabees","MAT":"matthew",
"MRK":"mark","LUK":"luke","JHN":"john","ACT":"acts","ROM":"romans",
"1CO":"1-corinthians","2CO":"2-corinthians","GAL":"galatians",
"EPH":"ephesians","PHP":"philippians","COL":"colossians",
"1TH":"1-thessalonians","2TH":"2-thessalonians","1TI":"1-timothy",
"2TI":"2-timothy","TIT":"titus","PHM":"philemon","HEB":"hebrews",
"JAS":"james","1PE":"1-peter","2PE":"2-peter","1JN":"1-john",
"2JN":"2-john","3JN":"3-john","JUD":"jude","REV":"revelation"}
def need(test,message):
    if not test: raise RuntimeError(message)
def tag(node):
    return node.tag.rsplit("}",1)[-1]
def norm(value):
    return re.sub(r"\s+"," ",value).strip()
def formatted(value):
    return json.dumps(value,ensure_ascii=False,separators=(",",":"))
def parse_book(book):
    code=book.get("id","")
    need(code in SLUG,f"Livro não catalogado: {code}")
    chapters=collections.OrderedDict()
    notes=[]; outside=[]; titles=[]; paragraph_breaks=[]
    current_chapter=None; current_verse=None
    segments=[]; count=0
    def collect(piece):
        if not piece or not piece.strip(): return
        if current_verse is not None: segments.append(piece)
        else: outside.append({"chapter":current_chapter,"text":norm(piece)})
    def save_verse():
        nonlocal current_verse, segments
        need(current_chapter is not None and current_verse is not None,
             f"Marcador final órfão: {code} {current_chapter}:{current_verse}")
        txt=norm("".join(segments))
        need(bool(txt),f"Versículo vazio: {code} {current_chapter}:{current_verse}")
        target=chapters[current_chapter]
        need(current_verse not in target,f"Versículo repetido {code} {current_chapter}:{current_verse}")
        target[current_verse]=txt
        segments=[];current_verse=None
    def walk(node):
        nonlocal current_chapter,current_verse,segments,count
        kind=tag(node)
        if kind=="c":
            need(current_verse is None,f"Capítulo dentro do versículo: {code}")
            value=node.get("id","")
            need(value.isdigit() and int(value)==len(chapters)+1,
                 f"Capítulo fora de sequência: {code} {value}")
            current_chapter=int(value)
            chapters[current_chapter]=collections.OrderedDict()
            return
        if kind=="v":
            need(current_chapter is not None and current_verse is None,
                 f"Abertura de versículo inesperada: {code} {current_chapter}")
            value=node.get("id","")
            need(value.isdigit() and int(value)>=1,
                 f"Versículo sem número íntegro: {code} {current_chapter} {value}")
            current_verse=value
            segments=[];count+=1
            return
        if kind=="ve":
            if node.get("id"):
                need(node.get("id")==current_verse,
                     f"Final com número divergente: {code} {current_chapter} {node.attrib}")
            save_verse()
            return
        if kind=="f":
            # 13.775 notas do Glossa Ordinaria: NÃO entram no texto bíblico.
            notes.append({"chapter":current_chapter,"verse":current_verse,
                         "attrs":dict(node.attrib),
                         "text":norm("".join(node.itertext()))})
            return
        if kind in {"fr","fk","ft"}:
            raise RuntimeError(f"Filho de nota fora de <f>: {code} {kind}")
        if kind in {"id","h","toc"}:
            if kind in {"h","toc"}:
                titles.append({"kind":kind,"attrs":dict(node.attrib),
                               "text":norm("".join(node.itertext()))})
            return
        allowed={"p","q","it"}
        need(kind in allowed,
             f"Elemento XML não reconhecido: {code} {current_chapter}:{current_verse}, <{kind}>")
        if kind in {"p","q"} and current_chapter is not None:
            paragraph_breaks.append({"chapter":current_chapter,
                                      "verse":current_verse,"kind":kind,
                                      "attrs":dict(node.attrib)})
        collect(node.text or "")
        for child in node:
            walk(child)
            collect(child.tail or "")
    for item in book:walk(item)
    need(current_verse is None,f"Versículo não encerrado: {code} {current_chapter}:{current_verse}")
    need(len(chapters)>=1 and sum(map(len,chapters.values()))==count,
         f"Contagem inconsistente: {code}")
    return {"id":code,"slug":SLUG[code],"chapters":chapters,"notes":notes,
            "titles":titles,"outsideVerse":outside,"paragraphs":paragraph_breaks,
            "markers":count}
def main():
    need(len(sys.argv)==2,"Uso: scripts/vul_import.py fonte.zip")
    data=Path(sys.argv[1]).read_bytes()
    need(len(data)==BYTES,f"Tamanho ZIP diferente: {len(data)}")
    digest=hashlib.sha256(data).hexdigest()
    need(digest==SHA256,f"SHA-256 divergente: {digest}")
    with zipfile.ZipFile(sys.argv[1]) as z:
        root=ET.fromstring(z.read("latVUC_usfx.xml"))
    need(tag(root)=="usfx","A fonte não é USFX")
    books=[parse_book(b) for b in root if tag(b)=="book"]
    need(len(books)==EXPECTED_BOOKS,f"Esperados {EXPECTED_BOOKS} livros, encontrados {len(books)}")
    ids=[b["id"] for b in books]
    need(len(set(ids))==EXPECTED_BOOKS and set(ids)==set(SLUG),
         f"IDs de livros inesperados: {ids}")
    totalchapters=sum(len(b["chapters"]) for b in books)
    totalverses=sum(b["markers"] for b in books)
    totalnotes=sum(len(b["notes"]) for b in books)
    need(totalchapters==EXPECTED_CHAPTERS,f"Capítulos divergentes: {totalchapters}")
    need(totalverses==EXPECTED_VERSES,f"Versículos divergentes: {totalverses}")
    need(totalnotes==EXPECTED_NOTES,f"Notas divergentes: {totalnotes}")
    files={}
    progress=[]
    notes={}
    for book in books:
        code=book["id"]
        per=[]
        for c,verses in book["chapters"].items():
            need(all(v for v in verses.values()),f"Conteúdo vazio em {code} {c}")
            path=f"scriptures/texts/vul-{book['slug']}-{c}.js"
            need(path not in files,"Caminho duplicado: "+path)
            files[path]="\n".join([
                f"/* Vulgata Clementina (1598); eBible latVUC; SHA256 {SHA256}; {code} {c} */",
                "(function(){","'use strict';",
                "window.ScripturaScriptureTexts ||= {};",
                "window.ScripturaScriptureTexts.VUL ||= {};",
                f'window.ScripturaScriptureTexts.VUL["{code}"] ||= {{}};',
                f'window.ScripturaScriptureTexts.VUL["{code}"][{c}]='+formatted(verses)+";",
                "})();",""])
            per.append(len(verses))
        progress.append({"id":code,"slug":book["slug"],
                         "chapters":len(per),"verses":sum(per),"perChapter":per,
                         "notes":len(book["notes"])})
        notes[code]={"titles":book["titles"],"notes":book["notes"],
                     "outsideVerse":book["outsideVerse"],
                     "paragraphs":book["paragraphs"]}
        print(f"VALIDADO: {code}: {len(per)} capítulos; {sum(per)} versículos; {len(book['notes'])} notas",flush=True)
    need(len(files)==EXPECTED_CHAPTERS,"Número de módulos inesperado")
    # O frontend carrega capítulos sob demanda; nunca recriar scripts no HTML.
    html_path=ROOT/"index.html"
    html=html_path.read_text(encoding="utf8")
    html=re.sub(r'(?m)^[ \t]*<script defer src="scriptures/texts/(?:uxlc|lxx|tr|sblgnt|vul|vulj)-[^"]+\.js"></script>\r?\n',"",html)
    reader_path=ROOT/"scriptures/reader.js"
    reader=reader_path.read_text(encoding="utf8")
    reader=reader.replace('VUL: "Biblia Sacra Vulgata (VUL)"',
                          'VUL: "Biblia Sacra Vulgata Clementina (1598)"')
    reader=reader.replace(
        "A Vulgata utiliza o texto latino fornecido; a edição exata e o vínculo externo ainda não foram verificados.",
        "Texto latino da Vulgata Clementina (1598), eBible latVUC; notas editoriais preservadas separadamente.")
    catalog_path=ROOT/"scriptures/catalog-vul.js"
    catalog=catalog_path.read_text(encoding="utf8")
    catalog,changed=re.subn(r'(\|Livro de Sirácida \(ou Eclesiástico\)\|)52(\|SIR)',
                             r'\g<1>51\g<2>',catalog)
    need(changed in (0,1),"Catalogação de Sirácida inesperada")
    need("|51|SIR" in catalog,"Sirácida não reconciliado")
    # O capítulo demonstrativo anterior pertence a outra transcrição: arquivá-lo sem alterá-lo.
    legacy=ROOT/"scriptures/texts/vul-genesis-1.js"
    archived=ROOT/"scriptures/archive/legacy-pre-clementina-2026-10-24/vul-genesis-1.js"
    if legacy.exists():
        if archived.exists():
            need(archived.read_bytes()==legacy.read_bytes(),"Legado alterado")
        else:
            archived.parent.mkdir(parents=True,exist_ok=True)
            archived.write_bytes(legacy.read_bytes())
        legacy.unlink()
    else:need(archived.exists(),"Legado demonstrativo não preservado")
    # Após validar a fonte e as contagens, a escrita local é seguida de testes antes de git push.
    for path,content in files.items():
        dest=ROOT/path;dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_text(content,encoding="utf8")
    manifest={"edition":"Biblia Sacra Vulgata Clementina (1598)",
              "source":"eBible latVUC (Clementine Vulgate 1598)",
              "sourceUrl":SOURCE,"sourcePage":SOURCE_PAGE,
              "sha256":digest,"zipBytes":BYTES,"license":"Public Domain",
              "books":progress,"totalBooks":EXPECTED_BOOKS,
              "chapters":totalchapters,"verses":totalverses,
              "notes":totalnotes,"notPresentInSource":MISSING_FROM_SOURCE,
              "editorialPolicy":"notas e títulos preservados em JSON separado; não integrar notas ao texto",
              "whitespacePolicy":"sequências de espaços e quebras convertidas a espaço simples; letras e pontuação conservadas"}
    (ROOT/"scriptures/vul-clementine-progress.json").write_text(
        json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    (ROOT/"scriptures/vul-clementine-paratext.json").write_text(
        json.dumps(notes,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    reader_path.write_text(reader,encoding="utf8")
    catalog_path.write_text(catalog,encoding="utf8")
    html_path.write_text(html,encoding="utf8")
    print(f"PRONTO: {len(progress)} livros, {totalchapters} capítulos, {totalverses} versículos; {totalnotes} notas preservadas.",flush=True)
if __name__=="__main__":main()
