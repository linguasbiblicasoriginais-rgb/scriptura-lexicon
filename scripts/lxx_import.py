#!/usr/bin/env python3
"""Importação determinística de Brenton LXX/USFX, com saída atômica antes do commit."""
import collections
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
SOURCE="https://ebible.org/Scriptures/grcbrent_usfx.zip"
SHA256="a673b76d2d41ef35a492e96df9c76e433a6f6dd9ac2bbeff5a35991c32df22dd"
BYTES=1816963
BOOKS=52
CHAPTERS=1104
MARKERS=28597
def need(ok,msg):
    if not ok: raise RuntimeError(msg)
def local(tag): return tag.rsplit("}",1)[-1]
def js(obj): return json.dumps(obj,ensure_ascii=False,separators=(",",":"))
def text_only(node): return "".join(node.itertext()).strip()
def parse_book(book):
    code=book.get("id")
    need(code and re.fullmatch(r"[A-Z0-9]{3}",code),f"Livro inválido: {code!r}")
    chapters=collections.OrderedDict()
    headings=collections.defaultdict(list)
    orphan=[]
    front_matter=[]
    current_chapter=None
    current_verse=None
    fragments=[]
    verse_markers=0
    def collect(piece):
        if not piece or not piece.strip(): return
        if current_verse is not None: fragments.append(piece)
        elif current_chapter is not None: orphan.append({"chapter":current_chapter,"text":piece.strip()})
        else: front_matter.append(piece.strip())
    def end_verse():
        nonlocal current_verse,fragments
        need(current_verse is not None,f"{code}: marcador de encerramento sem abertura")
        value=" ".join("".join(fragments).split())
        need(bool(value),f"{code} {current_chapter}:{current_verse} sem texto")
        need(current_verse not in chapters[current_chapter],f"Versículo duplicado {code} {current_chapter}:{current_verse}")
        chapters[current_chapter][current_verse]=value
        current_verse=None;fragments=[]
    def walk(node):
        nonlocal current_chapter,current_verse,fragments,verse_markers
        t=local(node.tag)
        if t=="c":
            need(current_verse is None,f"Capítulo dentro do versículo: {code}")
            raw=node.get("id","")
            need(raw.isdigit(),f"Capítulo não numérico: {code} {raw!r}")
            n=int(raw)
            need(n==len(chapters)+1,f"Capítulo fora de sequência: {code} {n}")
            current_chapter=n
            chapters[n]=collections.OrderedDict()
            return
        if t=="v":
            need(current_chapter is not None,f"Versículo antes do capítulo: {code}")
            need(current_verse is None,f"Versículo anterior não encerrado: {code} {current_chapter}:{current_verse}")
            raw=node.get("id","")
            need(bool(raw),f"Versículo sem ID: {code} {current_chapter}")
            current_verse=raw
            fragments=[]
            verse_markers+=1
            return
        if t=="ve":
            if node.get("id"):
                need(node.get("id")==current_verse,f"Marcador final divergente: {code} {current_chapter}: {node.attrib}")
            end_verse()
            return
        if t in {"id","h","toc","mt","rem","ide","cl"}: return
        if t in {"d","s"}:
            # A fonte usa <d> em Salmos, inclusive contendo marcos <v/>.
            # Percorrer seus filhos: ignorá-los perde a abertura do versículo.
            if current_chapter is not None:
                headings[current_chapter].append({"type":t,"text":text_only(node)})
        if t not in {"p","q","b","w","add","it","bk","wj","nd","em","sc","qs","qt","rq","tl","sig","pn","ord","k","sup","rb","pro","span","bd","d","s"}:
            raise RuntimeError(f"Elemento USFX desconhecido: {code} cap={current_chapter} vers={current_verse}, tag={t}, attrs={node.attrib}")
        collect(node.text or "")
        for child in node:
            walk(child)
            collect(child.tail or "")
    for item in book:
        walk(item)
    need(current_verse is None,f"Versículo não encerrado: {code} {current_chapter}:{current_verse}")
    need(chapters,f"Nenhum capítulo: {code}")
    need(verse_markers==sum(map(len,chapters.values())),f"Versículos perdidos: {code}")
    return {"id":code,"chapters":chapters,"markers":verse_markers,
            "headings":dict(headings),"outsideVerse":orphan,"frontMatter":front_matter,
            "titles":[{"type":local(x.tag),"text":text_only(x),"attributes":dict(x.attrib)}
                      for x in book if local(x.tag) in {"h","toc"}]}

def main():
    need(len(sys.argv)==2,"Uso: scripts/lxx_import.py ZIP")
    raw=Path(sys.argv[1]).read_bytes()
    need(len(raw)==BYTES,f"Tamanho do ZIP mudou: {len(raw)} (esperado {BYTES})")
    digest=hashlib.sha256(raw).hexdigest()
    need(digest==SHA256,"SHA256 do ZIP mudou: "+digest)
    with zipfile.ZipFile(sys.argv[1]) as z:
        source=ET.fromstring(z.read("grcbrent_usfx.xml"))
    need(local(source.tag)=="usfx","Documento USFX inválido")
    books=[parse_book(node) for node in source if local(node.tag)=="book"]
    need(len(books)==BOOKS,f"Quantidade de livros divergente: {len(books)}")
    ids=[b["id"] for b in books]
    need(len(set(ids))==len(ids),f"IDs duplicados: {ids}")
    need(sum(len(b["chapters"]) for b in books)==CHAPTERS,"Quantidade de capítulos divergente")
    need(sum(b["markers"] for b in books)==MARKERS,"Quantidade de marcadores de versículo divergente")
    result={};status=[];total=0
    for book in books:
        source_id=book["id"]
        grouped=collections.defaultdict(dict)
        for oldc,verses in book["chapters"].items():
            # Edições gregas: Esdras B reúne Esdras+Neemias; Salmo 151 é independente.
            if source_id=="EZR" and oldc>=11: code="NEH";chapter=oldc-10
            elif source_id=="PSA" and oldc==151: code="PSA151";chapter=1
            else:
                code={"ESG":"EST","DAG":"DAN"}.get(source_id,source_id)
                chapter=oldc
            need(chapter not in grouped[code],f"Capítulo duplicado {code} {chapter}")
            grouped[code][chapter]=verses
        for code,chapters in grouped.items():
            need(sorted(chapters)==list(range(1,len(chapters)+1)),f"Capítulos descontínuos: {code}")
            slug={"PSA151":"psalms-151","NEH":"nehemiah","EST":"esther","DAN":"daniel"}.get(code,code.lower())
            per=[]
            for chapter,verses in chapters.items():
                need(all(bool(t) for t in verses.values()),f"Texto vazio em {code} {chapter}")
                per.append(len(verses))
                path=f"scriptures/texts/lxx-{slug}-{chapter}.js"
                lines=[f"/* Septuaginta Brenton (texto grego); eBible grcbrent; fonte {SHA256}; {source_id} {chapter} */",
                  "(function(){","'use strict';",
                  "window.ScripturaScriptureTexts ||= {};",
                  "window.ScripturaScriptureTexts.LXX ||= {};",
                  f'window.ScripturaScriptureTexts.LXX["{code}"] ||= {{}};',
                  f'window.ScripturaScriptureTexts.LXX["{code}"][{chapter}]='+js(verses)+";",
                  "})();",""]
                need(path not in result,f"Arquivo duplicado {path}")
                result[path]="\n".join(lines)
                total+=len(verses)
            status.append({"sourceId":source_id,"id":code,"slug":slug,
                 "chapters":len(chapters),"verses":sum(per),"perChapter":per})
            print(f"VALIDADO {source_id} -> {code}: {len(chapters)} capítulos, {sum(per)} versículos",flush=True)
    need(sum(s["chapters"] for s in status)==CHAPTERS,f"Capítulos gerados divergentes: {len(result)}")
    need(len(result)==CHAPTERS,f"Módulos gerados divergentes {len(result)}")
    # Testa reconstrução de todas as saídas a partir da fonte antes de escrever.
    for path,content in result.items():
        need(content.count("window.ScripturaScriptureTexts.LXX")==3,f"Formato JS inválido {path}")
    html_path=ROOT/"index.html"
    html=html_path.read_text(encoding="utf8")
    # Reconstrução idempotente da lista de referências LXX.
    html,removed=re.subn(r'(?m)^[ \t]*<script defer src="scriptures/texts/lxx-[^"]+\.js"></script>\r?\n',"",html)
    need(removed in (1,len(result)),f"Quantidade inesperada de referências LXX: {removed}")
    anchor='    <script defer src="scriptures/texts/na28-matthew-1.js"></script>'
    need(html.count(anchor)==1,"Âncora do NT grego ausente")
    html=html.replace(anchor,"".join(
      '    <script defer src="'+path+'"></script>\n' for path in result)+anchor)
    need(html.count('scriptures/texts/lxx-')==len(result),"Referências HTML LXX duplicadas")
    reader_path=ROOT/"scriptures/reader.js"
    reader=reader_path.read_text(encoding="utf8")
    reader=reader.replace("Septuaginta (LXX)","Septuaginta — Brenton (texto grego, 1851)")
    reader=reader.replace("Apócrifos|Σοφία Σιράχ|Sirácida|52|SIR",
        "Apócrifos|Σοφία Σιράχ|Sirácida|51|SIR")
    # O corpus contém a Oração de Manassés como livro independente.
    entry="Apócrifos|Ἐπιστολὴ Ἰερεμίου|Epístola de Jeremias|1|LJE"
    need(reader.count(entry)==1,"Entrada LJE não encontrada")
    if "Apócrifos|Προσευχὴ Μανασσῆ|Oração de Manassés|1|MAN" not in reader:
        reader=reader.replace(entry,
            "Apócrifos|Προσευχὴ Μανασσῆ|Oração de Manassés|1|MAN\\n"+entry)
    manifest={"source":"eBible Brenton Septuagint (Greek)","edition":"LXX Brenton",
         "sourceUrl":SOURCE,"sha256":SHA256,"zipBytes":BYTES,
         "sourceBooks":BOOKS,"outputBooks":len(status),
         "chapters":len(result),"verseMarkers":MARKERS,"verses":total,
         "books":status,"license":"Public Domain (eBible.org)",
         "mapping":{"EZR 11-23":"NEH 1-13","PSA 151":"PSA151 1","ESG":"EST","DAG":"DAN"},
         "notPresentInSource":["JOS_A","JDG_A","JDG_B","TOB_S","DAN_TH","SUS_TH","BEL_TH","ODE","PSS"],
         "note":"Esta edição não representa todas as recensões nem Göttingen/Rahlfs."}
    # Títulos e fragmentos fora dos versículos são preservados separadamente.
    paratext={book["id"]:{"headings":book["headings"],
                         "outsideVerse":book["outsideVerse"],
                         "frontMatter":book["frontMatter"],
                         "titles":book["titles"]} for book in books}
    need(len(paratext)==BOOKS,"Metadados paratextuais incompletos")
    # Verificação do arquivo demonstrativo preservado antes de substituí-lo.
    old=ROOT/"scriptures/texts/lxx-genesis-1.js"
    archive=ROOT/"scriptures/archive/legacy-pre-brenton-2026-10-24/lxx-genesis-1.js"
    if old.exists():
        if archive.exists():
            need(archive.read_bytes()==old.read_bytes(),"Histórico LXX divergente")
        else:
            archive.parent.mkdir(parents=True,exist_ok=True)
            archive.write_bytes(old.read_bytes())
        old.unlink()
    else:
        need(archive.exists(),"Módulo legado e arquivo histórico ausentes")
    for path,content in result.items():
        dest=ROOT/path;dest.parent.mkdir(parents=True,exist_ok=True)
        dest.write_text(content,encoding="utf8")
    (ROOT/"scriptures/lxx-brenton-progress.json").write_text(
        json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    (ROOT/"scriptures/lxx-brenton-paratext.json").write_text(
        json.dumps(paratext,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    reader_path.write_text(reader,encoding="utf8")
    html_path.write_text(html,encoding="utf8")
    print(f"PRONTO: {BOOKS} livros-fonte, {len(status)} grupos, {len(result)} capítulos, {total} versículos.",flush=True)
if __name__=="__main__":main()
