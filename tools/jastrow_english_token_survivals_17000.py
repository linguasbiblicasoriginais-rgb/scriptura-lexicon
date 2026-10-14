#!/usr/bin/env python3
"""Source-matched English lexical tokens that survived in Portuguese Jastrow glosses; read-only."""
import contextlib,io,runpy,re,json,collections
with contextlib.redirect_stdout(io.StringIO()):
    ctx=runpy.run_path("tools/jastrow_language_inventory_deep_17000.py")
source=ctx["src"];published=ctx["published"];normalize=ctx["normalize"];zipf=ctx["zipf_frequency"]
ignored=set("ibid ibid targ y targum ib berlin ber berl amst is ex deut gen dan isa ps sal jer est job rashi rab yalk metz b mets sm s v pp p ed eds edn ib bl phil a ibidem b h n pl m f masc fem pr n nm cf cmp cf cp sq var loc c v a et al text tanh tan ber siff sifre talm targ tosef tfs jastrow y jud gk gr gen".split())
by_word=collections.Counter();by_range=collections.Counter();out=[]
for path,r in published:
    g=str(r.get("gloss") or "")
    if r.get("gloss_language")=="en" or "[Fonte em inglês; tradução pendente]" in g: continue
    st=set(normalize(source.get(r["sid"],"")))
    words=normalize(g)
    suspicious=[]
    for w in words:
        if len(w)<4 or w in ignored or w not in st:continue
        en=zipf(w,"en");pt=zipf(w,"pt")
        if en>=3.5 and en-pt>=1.6:
            suspicious.append(w)
    if suspicious:
        common=collections.Counter(suspicious)
        for k in common:by_word[k]+=1
        m=re.search(r'jastrow-(\d+)-(\d+)\.js$',path)
        group=((int(m.group(1))-1)//1000+1) if m else 1
        by_range[group]+=1
        out.append({"sid":r["sid"],"gloss":g[:420],"terms":list(common),"group":group})
print("JASTROW_ENGLISH_LEXICAL_SURVIVALS",json.dumps({"suspect_records":len(out),"by_group":dict(sorted(by_range.items())),"top_tokens":by_word.most_common(140),"entries":out[:450]},ensure_ascii=False))
