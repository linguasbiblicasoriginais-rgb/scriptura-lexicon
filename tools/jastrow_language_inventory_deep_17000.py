#!/usr/bin/env python3
"""Focused independent English-text inventory of all 17000 original Jastrow glosses, read-only."""
from pathlib import Path
import re,json,html,collections,io,contextlib,runpy
from xml.etree import ElementTree as ET
from lingua import Language, LanguageDetectorBuilder
from wordfreq import zipf_frequency

with contextlib.redirect_stdout(io.StringIO()):
    published=runpy.run_path("tools/jastrow_language_inventory_17000.py")["records"]

src={}
for i in range(1,86):
    j=json.loads(Path(f"lexicons/jastrow-source-lote-{i:04d}.json").read_text(encoding="utf-8"))
    for record in j["records"]:
        xml=record["source_xml"]
        el=ET.fromstring(xml)
        sid=record.get("canonical_entry_id") or el.attrib.get("id")
        if sid is None: raise ValueError("No sid")
        if sid in src:raise ValueError("Repeated "+sid)
        source_definition=" ".join("".join(x.itertext()) for x in el.iter() if x.tag=="definition")
        src[sid]=source_definition

stop=set("the of and is are was were this that those these which whose with where when while from into for between among before after each other another or have has had been being there their them they would could should may might shall will it its do does did as at by to our who whom whose than then now thus not same any all even either both more most some also".split())
portugal=set("de do da das dos e é foi foram ser está estão são para com em na no nas nos pela pelo ou também onde quando qual quais entre pelas pelos uma um uns umas seu sua seus suas que se como dos desses isto este esta tais esse essa aqueles outras outros é".split())
det=LanguageDetectorBuilder.from_languages(Language.ENGLISH,Language.PORTUGUESE).build()

def normalize(txt):
    txt=html.unescape(str(txt))
    txt=re.sub(r"[\u0590-\u05ff\u0370-\u03ff]+"," ",txt)
    txt=re.sub(r'<[^>]+>'," ",txt)
    return re.findall(r"[A-Za-zÀ-ÿ]+(?:['’][A-Za-zÀ-ÿ]+)?",txt.lower())
def overlapping_source(st,gt):
    # approximate longest contiguous common word sequence incl function words
    pos=collections.defaultdict(list)
    for i in range(len(st)-2):pos[tuple(st[i:i+3])].append(i)
    best=[]
    for j in range(len(gt)-2):
        for p in pos.get(tuple(gt[j:j+3]),[]):
            k=3
            while j+k<len(gt) and p+k<len(st) and gt[j+k]==st[p+k]:k+=1
            seq=gt[j:j+k]
            if len(seq)>len(best): best=seq
    return best

groups=collections.defaultdict(collections.Counter)
records=[]
for p,r in published:
    sid=r["sid"]; gloss=str(r.get("gloss") or "")
    ordnum=int(re.search(r'jastrow-(\d+)-(\d+)\.js$',p).group(1)) if re.search(r'jastrow-(\d+)-(\d+)\.js$',p) else 1
    group=f"{((ordnum-1)//1000)*1000+1:05d}-{((ordnum-1)//1000+1)*1000:05d}"
    g=groups[group];g["all"]+=1
    if r.get("gloss_language")=="en" or "[Fonte em inglês; tradução pendente]" in gloss:
        g["marked_en"]+=1
        continue
    g["unmarked"]+=1
    orig=src.get(sid,"")
    tokens=normalize(gloss)
    srctok=normalize(orig)
    common=overlapping_source(srctok,tokens)
    engstop=[w for w in tokens if w in stop]
    pts=[w for w in tokens if w in portugal]
    # Unmistakably foreign English sequence: source-verbatim 3+ English-linguistic words
    copied=len(common)>=3 and sum(w in stop for w in common)>=1 and (len(common)>=5 or sum(w in stop for w in common)>=2)
    # English prob: phrase excludes references by counting content and function words
    typed=[t for t in tokens if len(t)>=3 and t not in stop and t not in portugal]
    ef=sum(max(0,zipf_frequency(t,"en")-zipf_frequency(t,"pt"))>1.0 and zipf_frequency(t,"en")>=3.1 for t in typed)
    pf=sum(max(0,zipf_frequency(t,"pt")-zipf_frequency(t,"en"))>1.0 and zipf_frequency(t,"pt")>=3.1 for t in typed)
    gram=sum(t in stop for t in tokens)
    EnglishUnit=(" ".join(tokens))
    if len(tokens)>=4:
        confidence=det.compute_language_confidence_values(" ".join(tokens))
        enconf=next((v.value for v in confidence if v.language==Language.ENGLISH),0)
    else:enconf=0
    # high linguistic evidence 3 English words, 2 stops or source copy
    high=(copied or (gram>=2 and ef>=2 and enconf>=0.84 and len(tokens)>=5)
          or (ef>=4 and enconf>=0.95 and len(tokens)>=7 and len(pts)<=1))
    maybe=(not high and (gram>=1 and ef>=1 or ef>=2 and enconf>=0.70 or enconf>=0.97 and len(tokens)>=5 and ef>=1))
    if high:g["high"]+=1
    elif maybe:g["maybe"]+=1
    else:g["not_flagged"]+=1
    if high or maybe:
        records.append({"sid":sid,"ordinal":ordnum,"group":group,"cat":"high" if high else "maybe",
          "gloss":gloss[:550],"original_copy":" ".join(common)[:180],
          "stop":engstop[:8],"en_words":ef,"pt_words":pf,
          "enprob":round(enconf,3)})
total=collections.Counter()
for c in groups.values():total.update(c)
print("REPORT_EXACT_JASTROW",json.dumps({
"source_records":len(src),"publication_records":len(published),
"totals":dict(total),"groups":{k:dict(v) for k,v in sorted(groups.items())},
"candidate_count":len(records),"candidates":records[:600]},ensure_ascii=False))
