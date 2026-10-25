#!/usr/bin/env python3
"""Latin Vulgate (Jerome tradition), CrossWire SWORD Vulgate module 2.1.

Source frozen by SHA256. Retains original OSIS fragments, extracts note-free
verse text without conjectural readings, and never changes Clementine VUL.
"""
import collections
import hashlib
import html as html_lib
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT=Path(__file__).resolve().parent.parent
SOURCE="https://crosswire.org/ftpmirror/pub/sword/packages/rawzip/Vulgate.zip"
ZIP_SHA256="0ceb8ff1e2924231cdfe637ff7e0133c3d44222a43bd55d55796bcc42b1a7345"
IMP_SHA256="55fe94d7ff051c3e24ef1ccfc70dc56a7b0e3a7384bce23e2d2b17aa03672800"
MAP={
"Genesis":("GEN","genesis"),"Exodus":("EXO","exodus"),
"Leviticus":("LEV","leviticus"),"Numbers":("NUM","numbers"),
"Deuteronomy":("DEU","deuteronomy"),"Joshua":("JOS","joshua"),
"Judges":("JDG","judges"),"Ruth":("RUT","ruth"),
"I Samuel":("1SA","1-samuel"),"II Samuel":("2SA","2-samuel"),
"I Kings":("1KI","1-kings"),"II Kings":("2KI","2-kings"),
"I Chronicles":("1CH","1-chronicles"),"II Chronicles":("2CH","2-chronicles"),
"Ezra":("EZR","ezra"),"Nehemiah":("NEH","nehemiah"),
"Esther":("EST","esther"),"Job":("JOB","job"),
"Psalms":("PSA","psalms"),"Proverbs":("PRO","proverbs"),
"Ecclesiastes":("ECC","ecclesiastes"),"Song of Solomon":("SNG","song-of-songs"),
"Isaiah":("ISA","isaiah"),"Jeremiah":("JER","jeremiah"),
"Lamentations":("LAM","lamentations"),"Ezekiel":("EZK","ezekiel"),
"Daniel":("DAN","daniel"),"Hosea":("HOS","hosea"),
"Joel":("JOL","joel"),"Amos":("AMO","amos"),"Obadiah":("OBA","obadiah"),
"Jonah":("JON","jonah"),"Micah":("MIC","micah"),"Nahum":("NAM","nahum"),
"Habakkuk":("HAB","habakkuk"),"Zephaniah":("ZEP","zephaniah"),
"Haggai":("HAG","haggai"),"Zechariah":("ZEC","zechariah"),
"Malachi":("MAL","malachi"),"Tobit":("TOB","tobit"),
"Judith":("JDT","judith"),"Wisdom":("WIS","wisdom"),
"Sirach":("SIR","sirach"),"Baruch":("BAR","baruch"),
"I Maccabees":("1MA","1-maccabees"),"II Maccabees":("2MA","2-maccabees"),
"Matthew":("MAT","matthew"),"Mark":("MRK","mark"),
"Luke":("LUK","luke"),"John":("JHN","john"),
"Acts":("ACT","acts"),"Romans":("ROM","romans"),
"I Corinthians":("1CO","1-corinthians"),"II Corinthians":("2CO","2-corinthians"),
"Galatians":("GAL","galatians"),"Ephesians":("EPH","ephesians"),
"Philippians":("PHP","philippians"),"Colossians":("COL","colossians"),
"I Thessalonians":("1TH","1-thessalonians"),
"II Thessalonians":("2TH","2-thessalonians"),
"I Timothy":("1TI","1-timothy"),"II Timothy":("2TI","2-timothy"),
"Titus":("TIT","titus"),"Philemon":("PHM","philemon"),
"Hebrews":("HEB","hebrews"),"James":("JAS","james"),
"I Peter":("1PE","1-peter"),"II Peter":("2PE","2-peter"),
"I John":("1JN","1-john"),"II John":("2JN","2-john"),
"III John":("3JN","3-john"),"Jude":("JUD","jude"),
"Revelation of John":("REV","revelation"),
"I Esdras":("3ES","3-esdras"),"II Esdras":("4ES","4-esdras"),
"Prayer of Manasses":("MAN","prayer-of-manasseh"),
"Additional Psalm":("PS151","psalms-151"),
"Laodiceans":("LAO","laodiceans")}
EXPECTED_BOOKS=78
EXPECTED_MARKERS=38698
def need(condition,message):
    if not condition:raise RuntimeError(message)
def norm(value):return " ".join(value.split())
def js(obj):return json.dumps(obj,ensure_ascii=False,separators=(",",":"))
def md5_file(path):return hashlib.sha256(Path(path).read_bytes()).hexdigest()
def extract_osis(fragment,ref):
    try:root=ET.fromstring("<root>"+fragment+"</root>")
    except ET.ParseError as e:raise RuntimeError(f"OSIS inválido em {ref}: {e}, prefixo={fragment[:160]!r}")
    notes=[];headings=[]
    for node in root.iter():
        kind=node.tag.rsplit("}",1)[-1]
        if kind in {"note","title"}:
            record={"kind":kind,"text":norm("".join(node.itertext())),"attributes":dict(node.attrib)}
            (notes if kind=="note" else headings).append(record)
    def text(node):
        kind=node.tag.rsplit("}",1)[-1]
        if kind in {"note","title"}:return ""
        content=node.text or ""
        for child in node:
            content+=text(child)+(child.tail or "")
        return content
    literal=norm(text(root))
    need("\ufffd" not in literal,f"Caractere inválido em {ref}")
    return literal,notes,headings
def main():
    need(len(sys.argv)==3,"Uso: scripts/vulj_import.py ZIP CrossWire-extract.imp")
    zip_path,imp_path=sys.argv[1:]
    need(md5_file(zip_path)==ZIP_SHA256,"Arquivo CrossWire modificado: ZIP SHA256 divergente")
    need(md5_file(imp_path)==IMP_SHA256,"Saída SWORD inesperada: SHA256 divergente")
    data=Path(imp_path).read_text(encoding="utf-8")
    parts=re.split(r"(?m)^\$\$\$(.+?)\r?\n",data)
    need(len(parts)>=3 and len(parts)%2==1,f"IMP inválido: {len(parts)} blocos")
    need(not parts[0].strip(),f"Preâmbulo IMP não reconhecido: {parts[0][:100]!r}")
    groups=collections.OrderedDict()
    paratext=collections.defaultdict(list)
    headingcount=0
    marked=0
    for ref,content in zip(parts[1::2],parts[2::2]):
        marked+=1
        if ref.startswith("[ "):
            headingcount+=1
            paratext["__global__"].append({"ref":ref,"rawOSIS":content.strip()})
            continue
        matched=re.fullmatch(r"(.+) (\d+):(\d+)",ref)
        need(matched is not None,f"Referência OSIS não interpretável {ref!r}")
        book,c,v=matched.groups();c=int(c);v=int(v)
        need(book in MAP,f"Livro fora da fonte catalogada: {book!r}")
        code=MAP[book][0]
        need(c>=0 and v>=0,f"Capítulo/versículo inválido: {ref}")
        verse,notes,headings=extract_osis(content.strip(),ref)
        if c==0 or v==0:
            # Alguns livros (Sirácida) conservam prefácio real no nó 0:0.
            # Preservá-lo separadamente, sem inventar uma referência 1:0.
            paratext[code].append({"ref":ref,"headings":headings,"notes":notes,
                                  "textOutsideVerses":verse,"rawOSIS":content.strip()})
            continue
        bucket=groups.setdefault(code,collections.OrderedDict())
        verse_map=bucket.setdefault(c,collections.OrderedDict())
        need(str(v) not in verse_map,f"Referência duplicada: {ref}")
        if verse:
            verse_map[str(v)]=verse
        else:
            verse_map[str(v)]="" # preserva a referência, mas informa a lacuna.
        if notes or headings or ("<" in content):
            paratext[code].append({"ref":ref,"headings":headings,"notes":notes,
                                  "rawOSIS":content.strip()})
    need(marked==EXPECTED_MARKERS,f"Marcadores fonte divergentes: {marked}")
    need(len(groups)==EXPECTED_BOOKS,f"Livros presentes {len(groups)} != {EXPECTED_BOOKS}")
    need(headingcount==3,f"Cabeçalhos gerais inesperados: {headingcount}")
    need(len({x[0] for x in MAP.values()})==EXPECTED_BOOKS,"Mapa local de livros possui IDs duplicados")
    result=collections.OrderedDict();summary=[];missing=[]
    for book,(code,slug) in MAP.items():
        chaptermap=groups[code]
        chapters=sorted(chaptermap)
        need(chapters==list(range(1,max(chapters)+1)),f"Capítulos descontínuos {code}: {chapters}")
        per=[];with_content=0
        for c in chapters:
            verses=chaptermap[c]
            keys=sorted(int(x) for x in verses)
            need(keys==list(range(1,max(keys)+1)),f"Versículos ausentes {code} {c}: {keys}")
            empty=[v for v,t in verses.items() if not t]
            missing.extend(f"{code} {c}:{v}" for v in empty)
            with_content+=len(verses)-len(empty)
            per.append(len(verses))
            path=f"scriptures/texts/vulj-{slug}-{c}.js"
            need(path not in result,f"Arquivo duplicado {path}")
            result[path]="\n".join([
                f"/* Latin Vulgate CrossWire v2.1 — tradição de Jerônimo; public domain. {code} {c}. */",
                "(function(){","'use strict';",
                "window.ScripturaScriptureTexts ||= {};",
                "window.ScripturaScriptureTexts.VULJ ||= {};",
                f'window.ScripturaScriptureTexts.VULJ["{code}"] ||= {{}};',
                f'window.ScripturaScriptureTexts.VULJ["{code}"][{c}]='+js(verses)+";",
                "})();",""])
        summary.append({"id":code,"sourceBook":book,"slug":slug,
            "chapters":len(chapters),"verseSlots":sum(per),
            "versesWithText":with_content,"perChapter":per})
        print(f"VALIDADO VULJ {code}: {len(chapters)} capítulos, {sum(per)} posições, {with_content} com texto",flush=True)
    need(len(result)>=1300,f"Capítulos inferiores ao esperado: {len(result)}")
    print(f"FONTE: {len(groups)} livros, {len(result)} capítulos, {sum(x['verseSlots'] for x in summary)} posições, {len(missing)} lacunas",flush=True)
    print(f"LACUNAS: {missing[:60]}",flush=True)
    # Source title from CrossWire (not edition Weber–Gryson)
    catalog_file=ROOT/"scriptures/catalog-vul.js"
    catalog=catalog_file.read_text(encoding="utf8")
    m=re.search(r'window\.ScripturaVulCatalog\s*=\s*("(?:\\.|[^"\\])*");',catalog)
    need(m is not None,"Catálogo latino não encontrado")
    catalog_items=json.loads(m.group(1)).splitlines()
    byid={x["id"]:x for x in summary}
    seen=set();adjusted=[]
    for row in catalog_items:
        terms=row.split("|");need(len(terms)==5,f"Catálogo inconsistente {row[:50]}")
        id=terms[-1];need(id in byid,f"Livro no catálogo sem fonte CrossWire: {id}")
        need(id not in seen,f"Entrada duplicada no catálogo VULJ {id}")
        seen.add(id);terms[-2]=str(byid[id]["chapters"]);adjusted.append("|".join(terms))
    need(seen==set(byid),f"Livros ausentes no catálogo latino: {set(byid)-seen}")
    newcatalog="/* Catálogo VULJ separado; divisão original da fonte CrossWire. */\n" + \
        "window.ScripturaVulJeromeCatalog = "+js("\n".join(adjusted))+";\n"
    # O frontend carrega capítulos sob demanda; nunca recriar scripts no HTML.
    html_file=ROOT/"index.html"
    html=html_file.read_text(encoding="utf8")
    html=re.sub(r'(?m)^[ \t]*<script defer src="scriptures/texts/(?:uxlc|lxx|tr|sblgnt|vul|vulj)-[^"]+\.js"></script>\r?\n',"",html)
    reader_file=ROOT/"scriptures/reader.js";reader=reader_file.read_text(encoding="utf8")
    label='        VULJ: "Vulgata Latina — tradição de Jerônimo (CrossWire)",\n'
    if "VULJ:" not in reader:reader=reader.replace(
        '        VUL: "Biblia Sacra Vulgata Clementina (1598)"',
        label+'        VUL: "Biblia Sacra Vulgata Clementina (1598)"')
    reader=reader.replace('["UXLC", "LXX", "SBLGNT", "NA28", "UBS5", "TR", "VUL"]',
                           '["UXLC", "LXX", "SBLGNT", "NA28", "UBS5", "TR", "VULJ", "VUL"]')
    reader=reader.replace('edition === "VUL" ? window.ScripturaVulCatalog : rawCatalog.NT;',
                           'edition === "VUL" ? window.ScripturaVulCatalog :\n'
                           '            edition === "VULJ" ? window.ScripturaVulJeromeCatalog : rawCatalog.NT;')
    reader=reader.replace('state.edition === "VUL" ? "la" : "grc"',
                           '(state.edition === "VUL" || state.edition === "VULJ") ? "la" : "grc"')
    if 'state.edition === "VULJ" ? "Texto latino CrossWire Vulgate 2.1' not in reader:
    reader=reader.replace('state.edition === "VUL" ? "Texto latino da Vulgata Clementina',
                           'state.edition === "VULJ" ? "Texto latino CrossWire Vulgate 2.1 (domínio público), tradição jeronimiana; não equivale à edição crítica Weber–Gryson." :\n'
                           '            state.edition === "VUL" ? "Texto latino da Vulgata Clementina')
    reader=reader.replace('UXLC|LXX|SBLGNT|NA28|UBS5|TR|VUL',
                           'UXLC|LXX|SBLGNT|NA28|UBS5|TR|VULJ|VUL')
    need(reader.count('UXLC|LXX|SBLGNT|NA28|UBS5|TR|VULJ|VUL')>=1,"Rotas VULJ ausentes")
    need(reader.count('state.edition === "VULJ"')>=3,"Tratamento de idioma/corpus VULJ ausente")

    popup_file=ROOT/"scriptures/word-popups.js"
    pop=popup_file.read_text(encoding="utf8")
    old_marker='edition === "VUL" ? "VUL" : "GRC"'
    replacement='(edition === "VUL" || edition === "VULJ") ? "VUL" : "GRC"'
    need(pop.count(old_marker)==1 or pop.count(replacement)==1,"Popup de latim não localizado")
    pop=pop.replace(old_marker,replacement)

    manifest={
      "edition":"Latin Vulgate (CrossWire), Jerome tradition",
      "readerTitle":"Vulgata Latina — tradição de Jerônimo (CrossWire)",
      "source":SOURCE,"sourceZipSha256":ZIP_SHA256,
      "sourceImpSha256":IMP_SHA256,
      "module":"Vulgate","moduleVersion":"2.1 (2021-02-09)",
      "sourceLicense":"Public Domain","sourceVersification":"Vulg",
      "sourceEditorialClaim":"Jerome's A.D. 405 Biblia Sacra Vulgata Latina with Psalms variant and Apocrypha",
      "editorialQualification":"Tradição transmitida e posteriormente editada; não é autógrafo de Jerônimo nem Weber–Gryson; em certos livros o texto latino provém de outros tradutores.",
      "totalBooks":len(summary),"chapters":len(result),
      "verseSlots":sum(x["verseSlots"] for x in summary),
      "versesWithText":sum(x["versesWithText"] for x in summary),
      "emptySlots":missing,"books":summary,
      "markupPolicy":"Anotações OSIS e cabeçalhos da fonte separados em metadados; texto de cada versículo transcrito sem notas."
    }
    for path,content in result.items():
        dst=ROOT/path;dst.parent.mkdir(parents=True,exist_ok=True)
        dst.write_text(content,encoding="utf8")
    (ROOT/"scriptures/catalog-vulj.js").write_text(newcatalog,encoding="utf8")
    (ROOT/"scriptures/vulj-crosswire-progress.json").write_text(
        json.dumps(manifest,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
    (ROOT/"scriptures/vulj-crosswire-paratext.json").write_text(
        json.dumps(paratext,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
    html_file.write_text(html,encoding="utf8")
    reader_file.write_text(reader,encoding="utf8")
    popup_file.write_text(pop,encoding="utf8")
    print(f"PRONTO VULJ: {len(summary)} livros, {len(result)} capítulos, {manifest['versesWithText']} versículos.",flush=True)
if __name__=="__main__":main()
