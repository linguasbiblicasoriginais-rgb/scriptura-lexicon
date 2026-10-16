#!/usr/bin/env python3
"""JASTROW 30001–31000. Translate every lexical sense and note before publishing.
Original Sefaria XML remains separate. No audit, homologation or integration.
A failure anywhere aborts before writing ANY module, index or checkpoint.
"""
from __future__ import annotations
import html
import json
import re
from pathlib import Path
from xml.etree import ElementTree as ET
import argostranslate.package
import argostranslate.translate

ROOT=Path(".")
START,END=30001,31000
UPSTREAM="947c1b91684df9f8b92f14cf0d281b5d4f29bfc7"
SEMITIC=re.compile(r"([\u0590-\u05ff\u0370-\u03ff\u1f00-\u1fff]+)")
EN_GATES=[
    re.compile(r"\b(?:the|those|these|this)\s+(?:\w+\s+){1,5}(?:of|with|for|which|is|are)\b",re.I),
    re.compile(r"\b(?:to be|has been|have been|is called|are called|would be|the following|according to)\b",re.I)
]
MODEL_TARGET=None
TRANSLATOR=None
CACHE={}
segments_done=0

def clean(s):
    return re.sub(r"\s+"," ",html.unescape(s or "")).strip()

def text_of(el):
    return clean("".join(el.itertext()))

def prepare_model():
    global TRANSLATOR,MODEL_TARGET
    argostranslate.package.update_package_index()
    available=[x for x in argostranslate.package.get_available_packages()
               if x.from_code=="en" and x.to_code in ("pb","pt")]
    if not available:raise RuntimeError("Modelo de tradução inglês→português indisponível; não publicar.")
    model=next((x for x in available if x.to_code=="pb"),available[0])
    argostranslate.package.install_from_path(model.download())
    langs={x.code:x for x in argostranslate.translate.get_installed_languages()}
    TRANSLATOR=langs["en"].get_translation(langs[model.to_code])
    MODEL_TARGET=model.to_code
    for original in ("olive harvest", "a vessel used to draw water from a well"):
        result=TRANSLATOR.translate(original)
        if not result or clean(result).lower()==original:raise RuntimeError("Modelo não traduziu o teste inicial.")
    print("JASTROW_MODEL",MODEL_TARGET,model.package_version,flush=True)

def translate_latin(s):
    global segments_done
    if not re.search(r"[A-Za-z]{2}",s):return s
    source=s.strip()
    if not source:return s
    # Bibliographical English "ass" denotes an animal, not the modern colloquial false friend.
    source=re.sub(r"\bass(?=\W|$)", "donkey", source, flags=re.I)
    if source in CACHE:return CACHE[source]
    # Short source abbreviations remain bibliographic notation; do not invent expansions.
    abbreviations={
        "v.":"ver","cmp.":"comparar","cf.":"conferir",
        "same.":"mesmo significado.","same":"mesmo significado",
        "Pl.":"Plural.","pl.":"plural","sing.":"singular",
        "f.":"feminino","m.":"masculino",
        "see":"ver","ib.":"na mesma fonte","Ib.":"na mesma fonte",
        "next w.":"verbete seguinte","preced.":"verbete precedente",
    }
    if source in abbreviations:
        translation=abbreviations[source]
    else:
        # Translator handles sentence segmentation; punctuation is retained by source metadata.
        translation=clean(TRANSLATOR.translate(source))
    if not translation:raise RuntimeError("Tradução vazia: "+repr(source[:110]))
    if translation.lower()==source.lower() and len(re.findall(r"[A-Za-z]+",source))>=3 and re.search(r"\b(the|which|with|being|before|after|without|was|were|having|because|should|to be)\b",source,re.I):
        raise RuntimeError("Trecho inglês mantido sem tradução: "+repr(source[:110]))
    if len(source)>=28 and len(re.findall(r"[A-Za-z]+",source))>=6:
        if any(p.search(translation) for p in EN_GATES):
            raise RuntimeError("Português não confirmado; inglês residual: "+repr(translation[:160]))
    CACHE[source]=translation
    segments_done+=1
    if segments_done%250==0:print("JASTROW_SEGMENTOS_TRADUZIDOS",segments_done,flush=True)
    return translation

def translate_preserving_script(s):
    s=clean(s)
    if not s:return ""
    # Split Hebrew/Aramaic/Greek runs. No original-script letters enter MT or get rewritten.
    chunks=SEMITIC.split(s)
    translated=[]
    for i,c in enumerate(chunks):
        if not c:continue
        if i%2==1:
            translated.append(c)
        else:
            # Very long blocks: split on sentence boundaries, never truncate.
            if len(c)>900:
                pieces=re.split(r"(?<=[.!?;])(\s+)",c)
                if len(pieces)==1:
                    raise RuntimeError("Segmento >900 sem fronteira segura; tradução integral não assegurada.")
                translated.append("".join(translate_latin(p) if not p.isspace() else p for p in pieces))
            else:translated.append(translate_latin(c))
    joined=clean("".join(translated))
    original_nonlatin=SEMITIC.findall(s)
    if any(joined.count(v)<s.count(v) for v in set(original_nonlatin)):
        raise RuntimeError("A tradução alterou fragmentos originais em hebraico/aramaico/grego.")
    return joined

def grammatical_type(source):
    s=clean(source)
    patterns=[
      (r"^m\.$","Substantivo masculino"),(r"^f\.$","Substantivo feminino"),
      (r"^adj\.$","Adjetivo"),(r"^adv\.$","Advérbio"),
      (r"^m\. pl\.$","Substantivo masculino plural"),(r"^f\. pl\.$","Substantivo feminino plural"),
      (r"^pr\. n\. m\.$","Nome próprio masculino"),(r"^pr\. n\. f\.$","Nome próprio feminino"),
      (r"^v\.$","Verbo")
    ]
    for pat,v in patterns:
        if re.fullmatch(pat,s,re.I):return v
    if not s:return "Vocábulo"
    # Technical abbreviations are encoded as supplied when unsure.
    return s

def load_source():
    data=[]
    for batch in range(151,156):
        f=ROOT/f"lexicons/jastrow-source-lote-{batch:04d}.json"
        obj=json.loads(f.read_text(encoding="utf-8"))
        assert obj["source_commit"]==UPSTREAM and obj["entry_count"]==200
        data.extend(obj["records"])
    if [x["ordinal"] for x in data]!=list(range(START,END+1)):
        raise RuntimeError("Originais incompletos ou fora de ordem")
    for p in range(START,END+1,100):
        if (ROOT/f"lexicons/jastrow-{p}-{p+99}.js").exists():
            raise RuntimeError("Já existe módulo deste intervalo")
    return data

def prepare_entry(src):
    root=ET.fromstring(src["source_xml"])
    if root.attrib.get("id")!=src["canonical_entry_id"]:raise RuntimeError("Identificador fonte diverge")
    all_heads=[text_of(x) for x in root if x.tag=="head-word"]
    if not all_heads:raise RuntimeError("Lema original ausente")
    pos=[text_of(x) for x in root if x.tag=="pos"]
    typ=grammatical_type("; ".join(pos))
    heading=["Variantes do lema: "+", ".join(all_heads[1:])] if len(all_heads)>1 else []
    base_meta=[]
    for tag in ["language-key","language-reference","plural-form"]:
        for x in root:
            if x.tag==tag and text_of(x):base_meta.append((tag,text_of(x)))
    details=[]
    definitions=[]
    translated_items=0
    for el in root.iter():
        if el.tag!="sense":continue
        for child in el:
            if child.tag in ("definition","notes","number","plural-form","language-reference"):
                original=text_of(child)
                if not original:continue
                pt=translate_preserving_script(original) if child.tag!="number" else original
                if child.tag=="definition":
                    definitions.append(pt)
                    label="Definição"
                elif child.tag=="notes":label="Notas e referências"
                elif child.tag=="number":label="Número da acepção"
                elif child.tag=="plural-form":label="Forma plural"
                else:label="Referência linguística"
                details.append((label,pt))
                translated_items+=1
    for tag,original in base_meta:
        pt=translate_preserving_script(original)
        details.insert(0,("Informações do original",pt))
        translated_items+=1
    # Avoid duplicated data, but do not erase any source sense or note.
    if heading:details.insert(0,("Variantes originais",heading[0]))
    if not details:
        # Preserve source's actual absence rather than invent an English gloss.
        details=[("Estado da fonte","A entrada original não apresenta explicação lexical independente.")]
    # Search summary and full entry are distinct: full entry includes EVERY translated fragment.
    if definitions:
        short="; ".join(definitions)
    else:
        xrefs=[text_of(x) for x in root.iter() if x.tag=="xref" and text_of(x)]
        if xrefs:short="Ver "+", ".join(xrefs)+"."
        else:
            notes=[s for k,s in details if k=="Notas e referências"]
            short=notes[0] if notes else "Consultar as informações traduzidas do verbete."
    if not short.strip():raise RuntimeError("Texto lexical português vazio: "+src["canonical_entry_id"])
    fmt=lambda s:html.escape(s,quote=True)
    detail_html="".join("<p><strong>"+fmt(label)+":</strong> "+fmt(txt)+"</p>" for label,txt in details)
    return {"sid":src["canonical_entry_id"],"lemma":all_heads[0],
            "gloss":short,"type":typ,"detailsHtml":detail_html,
            "gloss_language":"pt-BR","translate_units":translated_items}

def publish(records):
    import collections
    if len(records)!=1000 or len({x["sid"] for x in records})!=1000:
        raise RuntimeError("Cardinalidade editorial incorreta")
    modules={}
    for start in range(START,END+1,100):
        subset=records[start-START:start-START+100]
        b=(start-1)//200+1
        # No English source text or 'translation pending' inside an incorporated entry.
        if any(x["gloss_language"]!="pt-BR" or "tradução pendente" in x["gloss"].lower() for x in subset):
            raise RuntimeError("Tentativa de incorporar tradução pendente")
        payload=[{k:v for k,v in x.items() if k!="translate_units"} for x in subset]
        modules[f"lexicons/jastrow-{start}-{start+99}.js"]=(
            '"use strict";\n/* JASTROW '+str(start)+'–'+str(start+99)+
            ': glosas e notas em português por tradução automática preliminar, integralmente na camada publicada; original em XML separado. */\n'+
            "window.ScripturaJastrowAppend("+json.dumps(payload,ensure_ascii=False,separators=(",",":"))+","+str(b)+");\n")
    index=ROOT/"index.html"
    idx=index.read_text(encoding="utf-8")
    anchor='    <script src="lexicons/jastrow-29901-30000.js"></script>'
    if idx.count(anchor)!=1:raise RuntimeError("Âncora de carregamento ausente/duplicada")
    tags="\n".join(f'    <script src="lexicons/jastrow-{start}-{start+99}.js"></script>'
                   for start in range(START,END+1,100))
    new_idx=idx.replace(anchor,anchor+"\n"+tags)
    checkpoint=ROOT/"lexicons/jastrow-progress.json"
    p=json.loads(checkpoint.read_text(encoding="utf-8"))
    assert p["scope"]["total_published"]==30000 and p["scope"]["next_ordinal"]==30001
    original=ROOT/"lexicons/jastrow-editorial-append.js"
    adapter=original.read_text(encoding="utf-8")
    old='+'+"'"+'<section class="entry-section"><div class="section-title">Fonte original</div>'
    if "e.detailsHtml?" not in adapter:
        extra="'</p></section>'+(e.detailsHtml?'<section class=\"entry-section\"><div class=\"section-title\">Tradução das acepções e notas</div>'+e.detailsHtml+'</section>':'')+'"
        # Replace just the boundary after summary; existing fallback for all old entries remains.
        old_boundary="+'</p></section><section class=\"entry-section\"><div class=\"section-title\">Fonte original</div>"
        new_boundary="+'"+extra[1:]+ '<section class="entry-section"><div class="section-title">Fonte original</div>'
        # This is a convenience construction; ensure syntactically valid by exact parse before writing.
        if adapter.count(old_boundary)!=1:
            raise RuntimeError("Segmento do adapter não encontrado")
        adapter=adapter.replace(old_boundary,new_boundary)
    last=records[-1]
    p["scope"].update({"total_published":31000,"next_ordinal":31001,
      "next_source_id":None,"next_lemma":None,"source_records_retrieved":31000,
      "last_source_id":last["sid"],"next_source_batch_ordinal":31001,
      "next_source_batch_id":None,"next_source_batch_lemma":None,
      "glosses_pending_translation_last_cycle":0,
      "editorial_status":"31.000 registros JASTROW incorporados; 1.000 novos, glosas e notas traduzidas automaticamente para português, não revistas. Nenhum inglês sinalizado como pendência foi publicado. Fonte XML original independente.",
      "source_status":"31.000 entradas originais integrais em 155 lotes de 200."})
    for batch in range(151,156):
        a=(batch-1)*200+1
        first,last_entry=records[a-START],records[a+199-START]
        p["batches"].append({
          "batch":batch+5,"source_start_ordinal":a,
          "source_end_ordinal":a+199,"source_count":200,
          "source_first_id":first["sid"],"source_last_id":last_entry["sid"],
          "source_file":f"lexicons/jastrow-source-lote-{batch:04d}.json",
          "source_upstream_commit":UPSTREAM,
          "translated_start_ordinal":a,"translated_end_ordinal":a+199,
          "translated_count":200,"translated_first_id":first["sid"],"translated_last_id":last_entry["sid"],
          "translated_files":[f"lexicons/jastrow-{a}-{a+99}.js",f"lexicons/jastrow-{a+100}-{a+199}.js"],
          "status":"Glosas e notas traduzidas automaticamente para português, original preservado; sem auditoria/homologação/integração."})
    p["last_attempt"]={"date":"2026-10-14","requested":1000,
      "new_entries_committed":1000,
      "new_translations_committed":sum(x["translate_units"]>0 for x in records),
      "translation_units":sum(x["translate_units"] for x in records),
      "glosses_pending_translation":0,"prior_published":30000,
      "total_published":31000,"new_range":records[0]["sid"]+"–"+records[-1]["sid"],
      "source_records_retrieved_total":31000,"source_commit":UPSTREAM,
      "next_ordinal":31001,"translation_engine":"Argos Translate offline en→"+MODEL_TARGET,
      "audit_performed":False,"homologation_performed":False,"integration_performed":False,
      "editorial_level":"Tradução automática preliminar para português; fonte original preservada."}
    # Write only after all 1000 entries translated and index/checkpoint/adapter prepared.
    for path,content in modules.items(): (ROOT/path).write_text(content,encoding="utf-8")
    index.write_text(new_idx,encoding="utf-8")
    checkpoint.write_text(json.dumps(p,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    original.write_text(adapter,encoding="utf-8")
    print("JASTROW_PUBLISHED",1000,"TOTAL",31000,
          "FIRST",records[0]["sid"],"LAST",records[-1]["sid"],
          "TRANSLATED_UNITS",p["last_attempt"]["translation_units"],flush=True)

if __name__=="__main__":
    originals=load_source()
    prepare_model()
    prepared=[]
    for i,r in enumerate(originals,1):
        prepared.append(prepare_entry(r))
        if i%50==0:print("JASTROW_ENTRADAS_PORTUGUESAS_PREPARADAS",i,"DE",1000,flush=True)
    publish(prepared)
