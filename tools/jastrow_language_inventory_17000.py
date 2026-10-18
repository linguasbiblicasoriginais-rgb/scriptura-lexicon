#!/usr/bin/env python3
"""Read-only language inventory of incorporated JASTROW entries; no rewriting, audit approval, or integration."""
from pathlib import Path
import re, json, unicodedata, collections
from lingua import Language, LanguageDetectorBuilder

ROOT=Path("lexicons")
index=Path("index.html").read_text(encoding="utf-8")
files=re.findall(r'<script\s+src="(lexicons/jastrow-\d+-\d+\.js)"',index)
decoder=json.JSONDecoder()
hit=re.compile(r'\{\s*"sid"\s*:')
errors=[]
records=[]
for filename in files:
    txt=Path(filename).read_text(encoding="utf-8")
    seen=0
    for match in hit.finditer(txt):
        try:
            record,offset=decoder.raw_decode(txt[match.start():])
            if "gloss" in record and "sid" in record:
                records.append((filename,record))
                seen+=1
        except Exception as e:
            errors.append([filename, str(e)[:100]])
    if not seen: errors.append([filename,"no entry parsed"])

# First 10 entries use legacy JS object syntax; independently account for them.
legacy=Path("lexicons/jastrow.js").read_text(encoding="utf-8")
early=legacy.split("const items = [",1)[1].split("];",1)[0]
base=[]
for match in re.finditer(r'\bsid:\s*"([^"]+)"[^\n]*?\bgloss:\s*"([^"]*)"',early):
    base.append({"sid":match.group(1),"gloss":match.group(2)})
# Parse ten inline entries, even when type/gloss occur on separate lines.
if len(base)!=10:
    base=[]
    for segment in re.split(r'(?=\bsid:\s*"A000\d\d")',early):
        sid=re.search(r'\bsid:\s*"([^"]+)"',segment)
        gloss=re.search(r'\bgloss:\s*"((?:\\.|[^"\\])*)"',segment)
        if sid and gloss:
            base.append({"sid":sid.group(1),"gloss":gloss.group(1)})
for record in base: records.append(("lexicons/jastrow.js",record))

english_words=set("the of to from with which whose where when these those their this there they them being between into among each other another according and some many used means meaning called said written refers who what whom because given having have has had were was are is not same its his her we you our thus them but also name names word words plural derived occurs occurring denotes used term terms refers".split())
portuguese_words=set("o os a as de da do dos das em no na nos nas um uma uns umas para por pelo pela pelos pelas que com como quando onde este esta isto estes estas aquele aquela ao aos aos se ser são é foi eram sendo entre também outro outra outros outras nome nomes palavra palavras significa chamado chamada denominado denominada utilizado usada usado refere forma formas ver veja consultar significado plural deriva derivado derivada ocorre ocorre usado diz dito escrito próprio seguinte anterior espécie origem".split())
english_distinct=set("the with which whose where these those their there they them between another according and some many called said written refers whom because having were was are its his her we our thus both else other someone whenever".split())
# Quote and semitic-script removal preserves Latin words and accents.
def letters(txt):
    txt=re.sub(r'[\u0590-\u05ff\u0370-\u03ff]'," ",txt)
    txt=re.sub(r'<[^>]+>'," ",txt)
    return re.findall(r"[A-Za-zÀ-ÿ]+(?:['’][A-Za-zÀ-ÿ]+)?",txt)
det=LanguageDetectorBuilder.from_languages(Language.ENGLISH,Language.PORTUGUESE).with_low_accuracy_mode().build()
grouped=collections.defaultdict(lambda:collections.Counter())
samples=collections.defaultdict(list)
seenids=set()
duplicate_ids=[]
for filename,rec in records:
    sid=rec["sid"];g=str(rec.get("gloss") or "")
    if sid in seenids: duplicate_ids.append(sid)
    seenids.add(sid)
    startmatch=re.search(r'jastrow-(\d+)-(\d+)\.js$',filename)
    ordinal=int(startmatch.group(1)) if startmatch else 1
    if ordinal<=1000: group="00001-01000"
    elif ordinal<=14000: group=f"{(ordinal-1)//1000*1000+1:05d}-{((ordinal-1)//1000+1)*1000:05d}"
    else: group=f"{(ordinal-1)//1000*1000+1:05d}-{((ordinal-1)//1000+1)*1000:05d}"
    c=grouped[group];c["entries"]+=1
    if rec.get("gloss_language")=="en" or "[Fonte em inglês; tradução pendente]" in g:
        c["explicit_en"]+=1
        continue
    c["unmarked"]+=1
    tokens=[w.lower() for w in letters(g) if len(w)>1]
    ens=sum(w in english_words for w in tokens)
    pts=sum(w in portuguese_words for w in tokens)
    distinct=sum(w in english_distinct for w in tokens)
    normalized=" ".join(tokens)
    if len(tokens)>=3 and len(normalized)>=17:
        confidence=det.compute_language_confidence_values(normalized)
        enconf=next((x.value for x in confidence if x.language==Language.ENGLISH),0.)
    else: enconf=0.
    high=(distinct>=2 and ens>=pts+1 and enconf>=0.70) or (distinct>=1 and ens>=3 and pts==0 and enconf>=0.88)
    possible=(not high and ((distinct>=1 and enconf>=0.60) or (ens>=2 and pts<=1 and enconf>=0.70) or (enconf>=0.94 and len(tokens)>=5 and pts==0)))
    if high:
        c["high_confidence_en"]+=1
        if len(samples["high"])<35: samples["high"].append({"sid":sid,"gloss":g[:270],"en_conf":round(enconf,2),"group":group})
    elif possible:
        c["possible_en"]+=1
        if len(samples["possible"])<35: samples["possible"].append({"sid":sid,"gloss":g[:270],"en_conf":round(enconf,2),"group":group})
    else:
        c["no_signal"]+=1
tot=collections.Counter()
for x in grouped.values(): tot.update(x)
report={"loaded_scripts":len(files),"parsed_in_modules":len(records)-len(base),"base":len(base),"parsed_total":len(records),"unique_sid":len(seenids),"duplicates":duplicate_ids[:20],"parse_errors":errors[:30],"totals":dict(tot),"groups":{k:dict(grouped[k]) for k in sorted(grouped)},"samples":samples}
print("JASTROW_LANGUAGE_INVENTORY_JSON",json.dumps(report,ensure_ascii=False))
