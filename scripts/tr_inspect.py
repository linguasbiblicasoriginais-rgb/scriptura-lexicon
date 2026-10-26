#!/usr/bin/env python3
"""Inspeção somente-leitura: corpus Textus Receptus Scrivener 1894."""
import hashlib,sys,json,zipfile,collections
from pathlib import Path
src=Path(sys.argv[1]).read_bytes()
print("SOURCE_SHA256",hashlib.sha256(src).hexdigest(),flush=True)
print("SOURCE_BYTES",len(src),flush=True)
with zipfile.ZipFile(sys.argv[1]) as z:
  files=z.namelist()
  print("ZIP_ENTRIES",len(files),flush=True)
  files=[x for x in files if x.endswith("data/gnt.flat.json")]
  print("DATA_MATCH",files,flush=True)
  if len(files)!=1:raise RuntimeError("Arquivo canônico ausente")
  j=json.loads(z.read(files[0]))
  print("DATA_TYPE",type(j).__name__,flush=True)
  if isinstance(j,list):
    data=j
  elif isinstance(j,dict):
    print("TOP_LEVEL_KEYS",list(j.keys())[:30],flush=True)
    candidates=[(k,v) for k,v in j.items() if isinstance(v,list)]
    data=max(candidates,key=lambda x:len(x[1]))[1] if candidates else []
  else: raise RuntimeError("Forma JSON inválida")
  print("ITEM_COUNT",len(data),flush=True)
  print("SAMPLES",json.dumps(data[:2],ensure_ascii=False)[:4500],flush=True)
  print("END_SAMPLE",json.dumps(data[-1:],ensure_ascii=False)[:2300],flush=True)
  c=collections.Counter(str(v.get("book_name_short")) for v in data)
  print("BOOK_COUNTS",json.dumps(dict(c),ensure_ascii=False,sort_keys=True),flush=True)
  print("CHAPTERS",len({(v.get("book_name_short"),v.get("chapter")) for v in data}),flush=True)
  print("WORD_ITEMS",sum(len(v.get("words",[])) for v in data),flush=True)
  bad=[i for i,x in enumerate(data) if not x.get("greek_text") or not x.get("book_name_short")]
  print("INVALID_ENTRIES",len(bad),flush=True)
  if bad:raise RuntimeError("Há entradas sem texto/livro: "+str(bad[:10]))
