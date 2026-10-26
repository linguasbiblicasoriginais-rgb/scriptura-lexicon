#!/usr/bin/env python3
"""Inventário estrito do pacote grego Brenton eBible. Não altera o repositório."""
import collections
import hashlib
import json
import sys
import xml.etree.ElementTree as ET
import zipfile
from pathlib import Path
def local(tag):
    return tag.rsplit("}", 1)[-1]
def main():
    p=Path(sys.argv[1])
    data=p.read_bytes()
    print("FONTE=ebible.org/grcbrent; LICENCA=Public Domain",flush=True)
    print("ZIP_SHA256="+hashlib.sha256(data).hexdigest(),flush=True)
    print("ZIP_BYTES="+str(len(data)),flush=True)
    with zipfile.ZipFile(p) as archive:
        paths=[x for x in archive.namelist() if not x.endswith("/")]
        print("ZIP_FILES="+str(len(paths)),flush=True)
        print("FILE_LIST="+json.dumps(paths,ensure_ascii=False),flush=True)
        xmls=[x for x in paths if x.lower().endswith((".xml",".usfx"))]
        print("XML_FILES="+str(len(xmls)),flush=True)
        if not xmls: raise RuntimeError("Nenhum XML encontrado; não importar")
        tagcounts=collections.Counter()
        books=[]
        for path in xmls:
            root=ET.fromstring(archive.read(path))
            localtags=collections.Counter(local(n.tag) for n in root.iter())
            tagcounts.update(localtags)
            xmlbooks=[n for n in root.iter() if local(n.tag)=="book"]
            for book in xmlbooks:
                ids={k:book.get(k) for k in book.attrib}
                chapters=[c for c in book if local(c.tag)=="c"]
                verses=[v for v in book.iter() if local(v.tag)=="v"]
                sample=[{"tag":local(x.tag),"attrs":dict(x.attrib),"text":(x.text or "")[:90],"tail":(x.tail or "")[:40]} for x in list(book.iter())[:26]]
                info={"file":path,"ids":ids,"chapterMarkers":len(chapters),"verseMarkers":len(verses),"firstNodes":sample}
                books.append(info)
                print("BOOK="+json.dumps(info,ensure_ascii=False),flush=True)
            print("XML_ROOT="+json.dumps({"file":path,"root":local(root.tag),"tags":dict(localtags)},ensure_ascii=False),flush=True)
        print("TOTAL_BOOKS="+str(len(books)),flush=True)
        print("TAG_INVENTORY="+json.dumps(dict(tagcounts),ensure_ascii=False,sort_keys=True),flush=True)
        if len(books)<39: raise RuntimeError("O corpus tem menos que 39 livros; importação bloqueada")
if __name__=="__main__":main()
