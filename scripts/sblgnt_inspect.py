#!/usr/bin/env python3
"""Inventário fonte oficial SBLGNT, sem alterar arquivos locais."""
import sys,zipfile,hashlib,collections,json,re
from pathlib import Path
blob=Path(sys.argv[1]).read_bytes()
print("ZIP_SHA256="+hashlib.sha256(blob).hexdigest(),flush=True)
print("ZIP_BYTES="+str(len(blob)),flush=True)
with zipfile.ZipFile(sys.argv[1]) as z:
  paths=sorted(x for x in z.namelist() if re.search(r'/data/sblgnt/text/[^/]+\.txt$',x))
  print("BOOK_FILES="+str(len(paths)),flush=True)
  verse_total=0;chapters=set();bad=[];signs=collections.Counter()
  for p in paths:
    s=z.read(p).decode("utf-8-sig")
    lines=s.splitlines()
    refs=[]
    for i,ln in enumerate(lines[1:],2):
      if not ln.strip():continue
      m=re.match(r'^([^\t]+)\t(.+)$',ln)
      if m:
        ref=m.group(1); txt=m.group(2)
        m2=re.fullmatch(r'([^ ]+) (\d+):(\d+)',ref)
        if m2:
          book,c,v=m2.groups()
          refs.append((book,int(c),int(v)))
          chapters.add((book,int(c)))
          for char in "⸀⸂⸃":signs[char]+=txt.count(char)
          continue
      bad.append({"file":p,"line":i,"text":ln[:100]})
    verse_total+=len(refs)
    print("BOOK="+json.dumps({"file":p.rsplit("/",1)[-1],"heading":lines[0],"count":len(refs),"chapters":len(set(x[1] for x in refs)),"first":refs[:2],"last":refs[-2:],"lines":len(lines)},ensure_ascii=False),flush=True)
  print("VERSE_COUNT="+str(verse_total),flush=True)
  print("CHAPTER_COUNT="+str(len(chapters)),flush=True)
  print("CRITICAL_SIGNS="+json.dumps(signs,ensure_ascii=False),flush=True)
  print("BAD_LINES="+json.dumps(bad[:25],ensure_ascii=False),flush=True)
  print("BAD_LINES_COUNT="+str(len(bad)),flush=True)
  if len(paths)!=27 or bad:raise RuntimeError("Corpus digital não satisfaz inventário estrito")
