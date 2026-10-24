#!/usr/bin/env python3
import sys, zipfile, hashlib, collections, json, xml.etree.ElementTree as ET
from pathlib import Path
p=Path(sys.argv[1]); b=p.read_bytes()
print('ZIP_BYTES',len(b),flush=True)
print('ZIP_SHA256',hashlib.sha256(b).hexdigest(),flush=True)
with zipfile.ZipFile(p) as z:
    files=z.namelist(); print('ZIP_FILES',json.dumps(files,ensure_ascii=False),flush=True)
    for name in files:
        if not name.lower().endswith('.xml'):continue
        root=ET.fromstring(z.read(name))
        tag=lambda x:x.tag.rsplit('}',1)[-1]
        ctr=collections.Counter(tag(n) for n in root.iter());print('XML_FILE',name,'ROOT',tag(root),'TAG_COUNTS',json.dumps(dict(ctr),ensure_ascii=False),flush=True)
        if tag(root)!='usfx':continue
        booknodes=[n for n in root if tag(n)=='book']
        print('TEXT_BOOKS',len(booknodes),flush=True)
        for book in booknodes:
            ct=collections.Counter(tag(n) for n in book.iter())
            bs=[{'tag':tag(n),'attrs':n.attrib,'text':(n.text or '')[:110],'tail':(n.tail or '')[:45]} for n in list(book.iter())[:18]]
            print('BOOK',json.dumps({'attrs':book.attrib,'chapters':ct['c'],'verses':ct['v'],'ends':ct['ve'],'first':bs},ensure_ascii=False),flush=True)
