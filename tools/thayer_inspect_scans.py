import gzip,urllib.request,xml.etree.ElementTree as ET,io,json,time,os
base="https://archive.org/download/thayersgreekengl0000thay/"
for suffix in ("_abbyy.gz","_djvu.xml","_scandata.xml"):
 url=base+"thayersgreekengl0000thay"+suffix
 try:
  rq=urllib.request.Request(url,headers={"User-Agent":"Mozilla/5.0"})
  with urllib.request.urlopen(rq,timeout=75) as r:
   print("RESOURCE",suffix,"STATUS",r.status,"SIZE",r.headers.get("Content-Length"),"TYPE",r.headers.get("Content-Type"),flush=True)
   data=r.read(12000)
   if suffix.endswith(".gz"):data=gzip.decompress(data) if len(data)<1000 else data[:100]
   print("SAMPLE",repr(data[:800]),flush=True)
 except Exception as e:print("ERROR",suffix,type(e).__name__,str(e)[:300],flush=True)
