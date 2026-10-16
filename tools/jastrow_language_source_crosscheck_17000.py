#!/usr/bin/env python3
"""Check unmarked JASTROW glosses against preserved original English XML, read only."""
from pathlib import Path
import runpy, contextlib, io, re, json, collections, html
import xml.etree.ElementTree as ET

with contextlib.redirect_stdout(io.StringIO()):
    ctx=runpy.run_path("tools/jastrow_language_inventory_17000.py")
published=ctx["records"]
source={}
for i in range(1,86):
    p=Path(f"lexicons/jastrow-source-lote-{i:04d}.json")
    j=json.loads(p.read_text(encoding="utf-8"))
    for r in j["records"]:
        sid=r.get("canonical_entry_id") or r.get("source_id")
        source[sid]=r["source_xml"]

special=re.compile(r"\b(?:the|with|which|whose|where|these|those|their|there|they|them|another|according|between|from|and|some|many|called|was|were|having|used|means|meaning|refers|being|its|him|her|his)\b",re.I)
specific_phrase=re.compile(r"\b(?:of the|in the|to the|from the|for the|with the|as the|the same|the name|which is|that is|is called|is used|is the|and the|by the|on the|according to|when the|it is|it was)\b",re.I)
def lexwords(t):
    t=html.unescape(t)
    t=re.sub(r"[\u0590-\u05ff\u0370-\u03ff]"," ",t)
    return re.findall(r"[A-Za-z]+(?:['’][A-Za-z]+)?",t.lower())
def clean(t):
    return re.sub(r"\s+"," ",html.unescape(t or "")).strip()
def longest_snippet(s_words,g_words):
    # Overlapping 4+ latin-word sequences preserved verbatim in source and gloss.
    positions=collections.defaultdict(list)
    for p in range(len(s_words)-3):
        positions[tuple(s_words[p:p+4])].append(p)
    best=[]
    for j in range(len(g_words)-3):
        for k in positions.get(tuple(g_words[j:j+4]),[]):
            n=4
            while j+n<len(g_words) and k+n<len(s_words) and g_words[j+n]==s_words[k+n]:
                n+=1
            cand=g_words[j:j+n]
            if len(cand)>len(best):
                best=cand
    return best
result=collections.Counter()
by_group=collections.defaultdict(collections.Counter)
examples={"copy":[],"phrase":[],"other":[],"ambiguous":[]}
for filename,entry in published:
    sid=entry["sid"];g=str(entry.get("gloss") or "")
    if entry.get("gloss_language")=="en" or "[Fonte em inglês; tradução pendente]" in g:
        continue
    m=re.search(r'jastrow-(\d+)-(\d+)\.js$',filename)
    ordinal=int(m.group(1)) if m else 1
    group=f"{(ordinal-1)//1000*1000+1:05d}-{((ordinal-1)//1000+1)*1000:05d}"
    result["unmarked"]+=1
    original=source.get(sid)
    if not original:
        result["no_source"]+=1
        continue
    try:
        tree=ET.fromstring(original)
        definition="; ".join(clean("".join(x.itertext())) for x in tree.iter() if x.tag=="definition")
    except Exception:
        result["source_xml_error"]+=1
        continue
    normsource=lexwords(definition)
    normgloss=lexwords(g)
    shared=longest_snippet(normsource,normgloss)
    original_copy=(len(shared)>=4 and (
        sum(bool(special.fullmatch(x)) for x in shared)>=2 or
        (len(shared)>=7 and sum(bool(special.fullmatch(x)) for x in shared)>=1)))
    engl_phrase=bool(specific_phrase.search(g))
    meaningful=len(normgloss)>3 and bool(special.search(g))
    if original_copy:
        result["source_english_copied"]+=1
        by_group[group]["copied"]+=1
        if len(examples["copy"])<70: examples["copy"].append({"sid":sid,"g":g[:310],"shared":" ".join(shared)[:220]})
    elif engl_phrase:
        result["common_english_phrase"]+=1
        by_group[group]["phrase"]+=1
        if len(examples["phrase"])<70: examples["phrase"].append({"sid":sid,"g":g[:310]})
    elif meaningful:
        result["other_english_indicator"]+=1
        by_group[group]["indicator"]+=1
        if len(examples["other"])<70: examples["other"].append({"sid":sid,"g":g[:240]})
    else:
        result["no_simple_english_indicator"]+=1
        by_group[group]["without_indicator"]+=1
report={"source_count":len(source),"published_count":len(published),"counts":dict(result),"groups":{k:dict(v) for k,v in sorted(by_group.items())},"examples":examples}
print("JASTROW_SOURCE_CROSSCHECK_JSON",json.dumps(report,ensure_ascii=False))
