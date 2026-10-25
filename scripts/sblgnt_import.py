#!/usr/bin/env python3
"""Importação fiel SBLGNT 1.2: edição crítica de Michael W. Holmes, CC BY 4.0.

Não sobrescreve NA28/UBS5 ou outros corpora. Aparato em JSON independente.
"""
import collections
import hashlib
import json
import re
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UPSTREAM_COMMIT = "c4d241a9c1c479a55b989ba35a4976c1d0b8052c"
SOURCE = f"https://codeload.github.com/Faithlife/SBLGNT/zip/{UPSTREAM_COMMIT}"
SHA256 = "4fc2659ce10ec6f57552f22e039de927ed3e417c7b5a757f34f05dae530e4c0f"
ZIP_BYTES = 1414688
EXPECTED_BOOKS = 27
EXPECTED_CHAPTERS = 260
EXPECTED_VERSES = 7939
EXPECTED_SIGNS = {"⸀": 5117, "⸂": 1765, "⸃": 1765}
MAP = {
"Matt": ("MAT","matthew",28), "Mark": ("MRK","mark",16),
"Luke": ("LUK","luke",24), "John": ("JHN","john",21),
"Acts": ("ACT","acts",28), "Rom": ("ROM","romans",16),
"1Cor": ("1CO","1-corinthians",16), "2Cor": ("2CO","2-corinthians",13),
"Gal": ("GAL","galatians",6), "Eph": ("EPH","ephesians",6),
"Phil": ("PHP","philippians",4), "Col": ("COL","colossians",4),
"1Thess": ("1TH","1-thessalonians",5), "2Thess": ("2TH","2-thessalonians",3),
"1Tim": ("1TI","1-timothy",6), "2Tim": ("2TI","2-timothy",4),
"Titus": ("TIT","titus",3), "Phlm": ("PHM","philemon",1),
"Heb": ("HEB","hebrews",13), "Jas": ("JAS","james",5),
"1Pet": ("1PE","1-peter",5), "2Pet": ("2PE","2-peter",3),
"1John": ("1JN","1-john",5), "2John": ("2JN","2-john",1),
"3John": ("3JN","3-john",1), "Jude": ("JUD","jude",1),
"Rev": ("REV","revelation",22)}
def need(test,message):
    if not test: raise RuntimeError(message)
def js(obj):
    return json.dumps(obj, ensure_ascii=False, separators=(",", ":"))
def read_source(z, suffix):
    matches=[p for p in z.namelist() if p.endswith(suffix)]
    need(len(matches)==1, f"Fonte ausente ou ambígua: {suffix} ({matches})")
    return z.read(matches[0]).decode("utf-8-sig")
def replace_once(text, a, b, name):
    # Uma substituição já aplicada não deve duplicar conteúdo da linha-âncora.
    if b in text:
        return text
    n=text.count(a)
    need(n==1 or (n==0 and b in text), f"Âncora {name}: {n} ocorrências")
    return text.replace(a,b) if n else text
def extract_text(z):
    modules=collections.OrderedDict()
    titles={}
    summary=[]
    marks=collections.Counter()
    grand_verses=0
    for basename,(code,slug,expected_chapters) in MAP.items():
        content=read_source(z, "/data/sblgnt/text/"+basename+".txt")
        lines=content.splitlines()
        need(len(lines)>2, f"Livro vazio: {code}")
        title=lines[0]
        need(title.strip(), f"Título grego ausente: {code}")
        titles[code]=title
        verses_by_ch=collections.OrderedDict()
        previous=None
        for lineno,line in enumerate(lines[1:],2):
            need(bool(line) and line.count("\t")==1,
                 f"Estrutura de referência inválida {basename}.txt:{lineno}")
            ref,txt=line.split("\t",1)
            m=re.fullmatch(r"([^ ]+) (\d+):(\d+)",ref)
            need(m is not None,f"Referência inválida {basename}.txt:{lineno}: {ref!r}")
            book,c,v=m.groups(); c=int(c);v=int(v)
            need(book==basename and 1<=c<=expected_chapters and v>=1,
                 f"Referência fora do livro {basename}:{lineno}: {ref}")
            need(txt.strip() and "\ufffd" not in txt,f"Texto corrompido {ref}")
            # Um espaço final separador na fonte não pertence à cadeia lexical.
            txt=txt.rstrip(" \t")
            need((c,v)>previous if previous else True,
                 f"Versículo duplicado ou fora de ordem {ref}")
            previous=(c,v)
            current=verses_by_ch.setdefault(c,collections.OrderedDict())
            need(str(v) not in current,f"Versículo duplicado {ref}")
            current[str(v)]=txt
            for sign in EXPECTED_SIGNS: marks[sign]+=txt.count(sign)
            grand_verses+=1
        need(list(verses_by_ch)==list(range(1,expected_chapters+1)),
             f"Capítulos faltantes em {code}")
        per_ch=[]
        for chapter,verses in verses_by_ch.items():
            per_ch.append(len(verses))
            path=f"scriptures/texts/sblgnt-{slug}-{chapter}.js"
            need(path not in modules,f"Módulo duplicado: {path}")
            modules[path]="\n".join([
              "/* SBLGNT — Michael W. Holmes (2010), v1.2; CC BY 4.0;",
              f"   © 2010 Society of Biblical Literature e Logos Bible Software. {code} {chapter}. */",
              "(function(){","'use strict';",
              "window.ScripturaScriptureTexts ||= {};",
              "window.ScripturaScriptureTexts.SBLGNT ||= {};",
              f'window.ScripturaScriptureTexts.SBLGNT["{code}"] ||= {{}};',
              f'window.ScripturaScriptureTexts.SBLGNT["{code}"][{chapter}]='+js(verses)+";",
              "})();",""
            ])
        summary.append({"source":basename,"id":code,"slug":slug,"title":title,
          "chapters":len(per_ch),"verses":sum(per_ch),"perChapter":per_ch})
        print(f"VALIDADO SBLGNT {code}: {len(per_ch)} capítulos; {sum(per_ch)} versículos",flush=True)
    need(len(modules)==EXPECTED_CHAPTERS,f"Quantidade incorreta de módulos: {len(modules)}")
    need(grand_verses==EXPECTED_VERSES,f"Quantidade incorreta de versículos: {grand_verses}")
    need(dict(marks)==EXPECTED_SIGNS,f"Sinais críticos divergentes: {dict(marks)}")
    return modules,titles,summary,marks
def extract_apparatus(z):
    apparatus={}
    total_notes=0
    total_refs=0
    for base,(code,slug,n) in MAP.items():
        content=read_source(z,"/data/sblgntapp/xml/"+base+".xml")
        root=ET.fromstring(content)
        need(root.tag=="book",f"Raiz de aparato inesperada: {base}")
        data=collections.OrderedDict()
        reference=None
        headings=[]
        for element in root:
            if element.tag=="book-name":
                headings.append("".join(element.itertext()))
            elif element.tag=="verse":
                reference=(element.text or "").strip()
                need(bool(re.fullmatch(r".+ \d+:\d+",reference)),
                     f"Referência crítica inválida: {base} {reference}")
                need(reference not in data,f"Referência crítica repetida: {reference}")
                data[reference]=[]
                total_refs+=1
            elif element.tag=="note":
                need(reference is not None,f"Nota crítica sem versículo: {base}")
                data[reference].append("".join(element.itertext()))
                total_notes+=1
            else:
                raise RuntimeError(f"Elemento não classificado no aparato: {base} {element.tag}")
        apparatus[code]={"source":base,"titles":headings,"readings":data}
    return apparatus,total_refs,total_notes
def main():
    need(len(sys.argv)==2,"Uso: scripts/sblgnt_import.py SOURCE.zip")
    raw=Path(sys.argv[1]).read_bytes()
    need(len(raw)==ZIP_BYTES,f"Tamanho diferente da fonte oficial: {len(raw)}")
    digest=hashlib.sha256(raw).hexdigest()
    need(digest==SHA256,f"SHA256 da fonte diferente: {digest}")
    with zipfile.ZipFile(sys.argv[1]) as z:
        modules,titles,summary,marks=extract_text(z)
        apparatus,n_apparatus_verses,n_apparatus_notes=extract_apparatus(z)
    need(len(apparatus)==EXPECTED_BOOKS, "Aparato parcial")
    # O frontend carrega capítulos sob demanda; nunca recriar scripts no HTML.
    html_file=ROOT/"index.html"
    html=html_file.read_text(encoding="utf8")
    html=re.sub(r'(?m)^[ \t]*<script defer src="scriptures/texts/(?:uxlc|lxx|tr|sblgnt|vul|vulj)-[^"]+\.js"></script>\r?\n',"",html)
    reader_file=ROOT/"scriptures/reader.js"
    reader=reader_file.read_text(encoding="utf8")
    reader=replace_once(reader,
        '        NA28: "Novo Testamento Grego – Texto Crítico (NA28)",',
        '        SBLGNT: "SBL Greek New Testament — Holmes (2010)",\n'
        '        NA28: "Novo Testamento Grego – Texto Crítico (NA28)",',
        "título")
    reader=replace_once(reader,
        '["UXLC", "LXX", "NA28", "UBS5", "TR", "VUL"]',
        '["UXLC", "LXX", "SBLGNT", "NA28", "UBS5", "TR", "VULJ", "VUL"]',
        "ordem dos editores")
    reader=replace_once(reader,
        'const canLink = ["UXLC", "LXX", "NA28", "UBS5"].includes(state.edition)',
        'const canLink = ["UXLC", "LXX", "NA28", "UBS5", "SBLGNT"].includes(state.edition)',
        "link externo")
    reader=replace_once(reader,
        'if (canLink) external.href = (state.edition === "UXLC" ?',
        'if (canLink) external.href = (state.edition === "SBLGNT" ?'
        ' "https://github.com/Faithlife/SBLGNT/tree/'+UPSTREAM_COMMIT+'/data/sblgnt/text" :'
        ' state.edition === "UXLC" ?',
        "URL da fonte")
    reader=replace_once(reader,
        'else external.removeAttribute("href");',
        'else external.removeAttribute("href");\n'
        '        external.textContent = state.edition === "SBLGNT" ?'
        ' "Consultar edição de origem ↗" : "Consultar capítulo na edição de origem ↗";',
        "texto do link")
    reader=replace_once(reader,
        'feedback.textContent = !canLink ?',
        'feedback.textContent = state.edition === "SBLGNT" ?'
        ' "SBLGNT, edição crítica de Michael W. Holmes (2010), v1.2.'
        ' © 2010 Society of Biblical Literature e Logos Bible Software.'
        ' CC BY 4.0. Sinais críticos preservados; aparato armazenado separadamente." : !canLink ?',
        "crédito")
    for pattern in [
        r'UXLC|LXX|NA28|UBS5|TR|VUL',
    ]:
        reader=reader.replace(pattern, 'UXLC|LXX|SBLGNT|NA28|UBS5|TR|VUL')
    need(reader.count('UXLC|LXX|SBLGNT|NA28|UBS5|TR|VULJ|VUL')>=1,
         "As duas rotas de navegação devem aceitar a edição nova")
    progress={
      "edition":"The Greek New Testament: SBL Edition (SBLGNT)",
      "editor":"Michael W. Holmes","editionYear":2010,
      "digitalVersion":"1.2 (2023-07-10)",
      "copyright":"© 2010 Society of Biblical Literature and Logos Bible Software",
      "license":"Creative Commons Attribution 4.0 International (CC BY 4.0)",
      "licenseUrl":"https://creativecommons.org/licenses/by/4.0/",
      "source":"Faithlife/SBLGNT","sourceUrl":SOURCE,
      "sourceCommit":UPSTREAM_COMMIT,"sha256":digest,"zipBytes":ZIP_BYTES,
      "books":summary,"totalBooks":EXPECTED_BOOKS,
      "chapters":len(modules),"verses":EXPECTED_VERSES,
      "criticalSigns":dict(marks),"apparatusVerseUnits":n_apparatus_verses,
      "apparatusNotes":n_apparatus_notes,
      "textPolicy":"Texto de cada versículo transcrito da edição v1.2, sem emendas; somente espaços finais de separação excluídos; sinais ⸀ ⸂ ⸃ preservados",
      "apparatusPolicy":"Dados críticos próprios da edição separados do texto bíblico, em JSON; não correspondem ao aparato da NA28",
      "relationship":"Edição independente, não substitui e não replica NA28/UBS5"
    }
    for path,text in modules.items():
        dst=ROOT/path;dst.parent.mkdir(parents=True,exist_ok=True)
        dst.write_text(text,encoding="utf8")
    (ROOT/"scriptures/sblgnt-progress.json").write_text(
        json.dumps(progress,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
    (ROOT/"scriptures/sblgnt-apparatus.json").write_text(
        json.dumps(apparatus,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
    html_file.write_text(html,encoding="utf8")
    reader_file.write_text(reader,encoding="utf8")
    print(f"PRONTO SBLGNT: {EXPECTED_BOOKS} livros, {len(modules)} capítulos, {EXPECTED_VERSES} versículos;",flush=True)
    print(f"APARATO: {n_apparatus_verses} unidades de referência; {n_apparatus_notes} notas.",flush=True)
if __name__=="__main__":main()
