import xml.etree.ElementTree as ET,urllib.request,collections,io
u="https://archive.org/download/thayersgreekengl0000thay/thayersgreekengl0000thay_djvu.xml"
data=urllib.request.urlopen(urllib.request.Request(u,headers={"User-Agent":"Mozilla/5.0"}),timeout=90).read()
print("DOWNLOAD",len(data),flush=True)
root=ET.fromstring(data)
objs=root.findall(".//OBJECT")
print("OBJECTS",len(objs),flush=True)
for page in [24,25,26,27,29,30,31,200,707]:
 if page>=len(objs):continue
 obj=objs[page]
 lines=obj.findall(".//LINE")
 first=[]
 for j,line in enumerate(lines):
  ws=line.findall("./WORD")
  if ws:
   s=" ".join((w.text or "").strip() for w in ws[:9])
   first.append((j,s,ws[0].get("coords"),ws[0].get("x-confidence")))
 print("PAGE",page+1,"OBJECT",obj.get("width"),obj.get("height"),"LINES",len(lines),flush=True)
 for a in first[:30]:print("  ",a,flush=True)
