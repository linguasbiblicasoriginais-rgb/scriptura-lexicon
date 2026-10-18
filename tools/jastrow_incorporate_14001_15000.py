#!/usr/bin/env python3
"""Incorporacao editorial preliminar JASTROW 14001..15000; nao faz auditoria nem integracao."""
from __future__ import annotations
from concurrent.futures import ThreadPoolExecutor, as_completed
import html
import json
from pathlib import Path
import re
import time
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

ROOT = Path(".")
START, END = 14001, 15000
UPSTREAM = "947c1b91684df9f8b92f14cf0d281b5d4f29bfc7"

def clean(s):
    return re.sub(r"\s+", " ", html.unescape(s or "")).strip()

def text_of(el):
    return clean("".join(el.itertext()))

def derive(record):
    xml = ET.fromstring(record["source_xml"])
    definitions = [text_of(x) for x in xml.iter() if x.tag == "definition"]
    definitions = [s for s in definitions if s]
    notes = [text_of(x) for x in xml.iter() if x.tag == "notes"]
    notes = [s for s in notes if s]
    targets = []
    for item in xml.iter():
        if item.tag == "xref":
            label = text_of(item)
            if label:
                targets.append(label)
    pos = [text_of(x) for x in xml if x.tag == "pos"]
    typ = "; ".join(pos) if pos else "Vocábulo"
    # Captura a explicacao na fonte. A traduçao nao substitui o XML integral.
    if definitions:
        source = "; ".join(definitions[:4])
        source = clean(source)[:460].rstrip(" ,;")
        if not source: raise ValueError("Definicao vazia apos normalizacao")
        return {"kind":"translate","source":source,"type":typ}
    for target in targets:
        if target not in ("preced.", "next w.", "ib.", "s.v."):
            return {"kind":"reference","source":target,"type":typ}
    if notes:
        n=notes[0]
        m=re.search(r"\b(?:v\.|see)\s+([\u0590-\u05ff][\u0590-\u05ff\u0020\-\u05f3\u05f4]*)",n,re.I)
        if m:
            return {"kind":"reference","source":clean(m.group(1)),"type":typ}
        return {"kind":"translate","source":clean(n)[:230],"type":typ}
    # Registro lacunoso e genuino da fonte: declaracao transparente, sem significado inventado.
    return {"kind":"empty","source":"","type":typ}

def translate_google(source):
    url = "https://translate.googleapis.com/translate_a/single?" + urlencode({
      "client":"gtx","sl":"en","tl":"pt","dt":"t","q":source})
    last=None
    for attempt in range(5):
        try:
            req = Request(url,headers={"User-Agent":"Mozilla/5.0 (compatible; ScripturaLexicon/1.0)"})
            with urlopen(req,timeout=22) as response:
                obj=json.loads(response.read().decode("utf-8"))
            translated=clean("".join((part[0] or "") for part in obj[0] if part))
            if translated and len(translated)>0:
                return translated
            raise RuntimeError("Resposta vazia do tradutor")
        except Exception as exc:
            last=exc
            time.sleep(min(2**attempt,12))
    raise RuntimeError(f"Traducao indisponivel: {last}")

def main():
    data=[]
    for batch in range(71,76):
        path=ROOT / f"lexicons/jastrow-source-lote-{batch:04d}.json"
        obj=json.loads(path.read_text(encoding="utf-8"))
        assert obj["source_commit"]==UPSTREAM and obj["entry_count"]==200
        data.extend(obj["records"])
    if [e["ordinal"] for e in data]!=list(range(START,END+1)):
        raise RuntimeError("Intervalo fonte incompleto ou fora de ordem")
    for p in range(14001,15001,100):
        if (ROOT/f"lexicons/jastrow-{p:04d}-{p+99:04d}.js").exists():
            raise RuntimeError(f"Modulo novo ja existe: {p}")
    prepared=[derive(r) for r in data]
    translations={}
    targets={e["source"] for e in prepared if e["kind"]=="translate"}
    print(f"JASTROW_TRANSLATION_REQUESTS {len(targets)}",flush=True)
    with ThreadPoolExecutor(max_workers=5) as pool:
        futures={pool.submit(translate_google,t):t for t in targets}
        for f in as_completed(futures):
            translations[futures[f]]=f.result()
            if len(translations)%100==0:
                print(f"JASTROW_TRADUCAO_PROCESSADA {len(translations)}/{len(targets)}",flush=True)
    items=[]
    for rec,prepared_item in zip(data,prepared):
        if prepared_item["kind"]=="reference":
            gloss="Ver "+prepared_item["source"].rstrip(".")+"." 
        elif prepared_item["kind"]=="translate":
            gloss=translations[prepared_item["source"]]
        else:
            gloss="Registro sem definição lexical no original; consultar a fonte."
        items.append({"sid":rec["canonical_entry_id"],"lemma":rec["headword"],
                      "gloss":gloss,"type":prepared_item["type"]})
    for start in range(START,END+1,100):
        offset=start-START
        out=ROOT/f"lexicons/jastrow-{start:04d}-{start+99:04d}.js"
        subset=items[offset:offset+100]
        # Mantem mesmo contrato do agregador existente; 20 e o numero do lote de 200.
        batch=(start-1)//200+1
        txt=('"use strict";\n/* JASTROW '+str(start)+'–'+str(start+99)+
             ': traducoes preliminares pt-BR nao revistas; fonte XML integral independente. */\n'+
             'window.ScripturaJastrowAppend('+json.dumps(subset,ensure_ascii=False,separators=(",",":"))+
             ','+str(batch)+');\n')
        out.write_text(txt,encoding="utf-8")
        print("JASTROW_MODULO",start,start+99,len(subset),flush=True)
    index=ROOT/"index.html"
    source=index.read_text(encoding="utf-8")
    anchor='    <script src="lexicons/jastrow-13901-14000.js"></script>'
    assert source.count(anchor)==1
    tags="\n".join(f'    <script src="lexicons/jastrow-{start:04d}-{start+99:04d}.js"></script>'
                 for start in range(START,END+1,100))
    index.write_text(source.replace(anchor,anchor+"\n"+tags),encoding="utf-8")
    checkpoint=ROOT/"lexicons/jastrow-progress.json"
    p=json.loads(checkpoint.read_text(encoding="utf-8"))
    assert p["scope"]["total_published"]==14000 and p["scope"]["next_ordinal"]==14001
    first,last=items[0],items[-1]
    p["scope"].update({"next_ordinal":15001,"next_source_id":None,
        "next_lemma":None,"source_records_retrieved":15000,
        "last_source_id":last["sid"],"next_source_batch_ordinal":15001,
        "next_source_batch_id":None,"next_source_batch_lemma":None,
        "total_published":15000,"batch_size":1000,
        "editorial_status":"15.000 entradas JASTROW na branch de incorporação, incluindo 1.000 nesta rodada. Glosas preliminares pt-BR de tradução automática, não revistas; XML integral preservado separadamente. Sem auditoria, homologação ou integração.",
        "source_status":"15.000 entradas originais integrais em setenta e cinco lotes de 200."})
    for batch in range(71,76):
        a=(batch-1)*200+1
        d=data[a-START:a-START+200]
        p["batches"].append({"batch":batch+5,"source_start_ordinal":a,
          "source_end_ordinal":a+199,"source_count":200,
          "source_first_id":d[0]["canonical_entry_id"],
          "source_last_id":d[-1]["canonical_entry_id"],
          "source_file":f"lexicons/jastrow-source-lote-{batch:04d}.json",
          "source_upstream_commit":UPSTREAM,
          "translated_start_ordinal":a,"translated_end_ordinal":a+199,
          "translated_count":200,"translated_first_id":d[0]["canonical_entry_id"],
          "translated_last_id":d[-1]["canonical_entry_id"],
          "translated_files":[f"lexicons/jastrow-{a:04d}-{a+99:04d}.js",f"lexicons/jastrow-{a+100:04d}-{a+199:04d}.js"],
          "status":"Sínteses de tradução automática preliminar em português; sem auditoria, homologação ou integração."})
    p["last_attempt"]={"date":"2026-10-14","requested":1000,
        "new_translations_committed":1000,"prior_published":14000,
        "total_published":15000,"new_range":first["sid"]+"–"+last["sid"],
        "source_records_retrieved_total":15000,"source_commit":UPSTREAM,
        "next_ordinal":15001,"next_source_id":None,"next_lemma":None,
        "audit_performed":False,"homologation_performed":False,
        "integration_performed":False,
        "editorial_level":"Tradução automática inicial não revista; fonte original integral independente."}
    checkpoint.write_text(json.dumps(p,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    print("JASTROW_PUBLISHED",1000,"TOTAL",15000,"FIRST",first["sid"],"LAST",last["sid"],flush=True)

if __name__=="__main__":
    main()
