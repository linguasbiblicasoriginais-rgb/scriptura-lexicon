#!/usr/bin/env python3
"""Separate 17000 published JASTROW entries in 170 review batches. No lexical edits."""
import contextlib,html,io,json,re,runpy
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT=Path(".")
OUTPUT=ROOT/"revisoes"/"jastrow-traducao"
OUTPUT.mkdir(parents=True,exist_ok=True)
with contextlib.redirect_stdout(io.StringIO()):
    loaded=runpy.run_path("tools/jastrow_language_inventory_17000.py")
published=loaded["records"]
assert len(published)==17000,len(published)
pub={}
for module,entry in published:
    assert entry["sid"] not in pub
    pub[entry["sid"]]=(module,entry)
CONFIRMED_OLD_EN={"C01281","D00190","G00156","G00562","I00195","J00624","K00330","K00470","K00789"}
possible=re.compile(r"\b(?:the|which|whose|whereas|with|without|between|afterwards|beforehand|substance|reduce|pressed|ground dates|look up|this means|these words|referred to|used for|the same|it is|was called|is called|as follows)\b",re.I)
rows=[]
for batch in range(1,86):
    file=f"lexicons/jastrow-source-lote-{batch:04d}.json"
    obj=json.loads((ROOT/file).read_text(encoding="utf-8"))
    assert len(obj["records"])==200
    for src in obj["records"]:
        root=ET.fromstring(src["source_xml"])
        sid=src.get("canonical_entry_id") or root.attrib["id"]
        assert sid in pub,(src["ordinal"],sid)
        module,entry=pub.pop(sid)
        def text(x):
            return re.sub(r"\s+"," ",html.unescape("".join(x.itertext()))).strip()
        definitions=[text(x) for x in root.iter() if x.tag=="definition" and text(x)]
        notes=[text(x) for x in root.iter() if x.tag=="notes" and text(x)]
        gloss=entry.get("gloss","")
        issue=("ingles_marcado" if entry.get("gloss_language")=="en" or "[Fonte em inglês; tradução pendente]" in gloss
               else ("ingles_sem_marcacao_confirmado" if sid in CONFIRMED_OLD_EN else None))
        rows.append({"ordinal":src["ordinal"],"sid":sid,"lema":entry.get("lemma",""),
                     "classe":entry.get("type",""),"glosa_atual":gloss,
                     "glosa_idioma":entry.get("gloss_language","nao_declarado"),
                     "definicoes_originais":definitions,"notas_originais":notes,
                     "fonte":file,"modulo_publicado":module,
                     "problemas_comprovados":[issue] if issue else [],
                     "indicios_para_examinar":["expressao_inglesa_possivel"] if not issue and possible.search(gloss) else [],
                     "avaliacao_filologica":"pendente","traducao_corrigida":None})
assert not pub,list(pub)[:5]
assert [r["ordinal"] for r in rows]==list(range(1,17001))
total=Counter()
batches=[]
for start in range(1,17001,100):
    n=(start-1)//100+1
    group=rows[start-1:start+99]
    c=Counter()
    for r in group:
        c["verbetes"]+=1
        if "ingles_marcado" in r["problemas_comprovados"]: c["ingles_marcado"]+=1
        elif "ingles_sem_marcacao_confirmado" in r["problemas_comprovados"]: c["ingles_sem_marcacao_confirmado"]+=1
        else:c["nao_avaliados_individualmente"]+=1
        if r["indicios_para_examinar"]:c["indicios_nao_confirmados"]+=1
    assert c["verbetes"]==100
    c["problemas_comprovados"]=c["ingles_marcado"]+c["ingles_sem_marcacao_confirmado"]
    total.update({x:c[x] for x in ["ingles_marcado","ingles_sem_marcacao_confirmado","problemas_comprovados"]})
    fname=f"lote-{n:04d}-{start:05d}-{start+99:05d}.json"
    (OUTPUT/fname).write_text(json.dumps({
        "lote":n,"inicio":start,"fim":start+99,"quantidades":dict(c),
        "problemas_comprovados_acumulados":total["problemas_comprovados"],
        "status":"triagem inicial, revisao linguistica individual pendente",
        "verbetes":group
    },ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    batches.append({"lote":n,"inicio":start,"fim":start+99,"arquivo":str(OUTPUT/fname),
                    "ingles_marcado":c["ingles_marcado"],
                    "ingles_sem_marcacao_confirmado":c["ingles_sem_marcacao_confirmado"],
                    "problemas_comprovados":c["problemas_comprovados"],
                    "problemas_acumulados_comprovados":total["problemas_comprovados"],
                    "nao_avaliados_individualmente":c["nao_avaliados_individualmente"],
                    "indicios_nao_confirmados":c["indicios_nao_confirmados"],
                    "avaliacao_linguistica":"pendente"})
assert total["ingles_marcado"]==2046,total
assert total["ingles_sem_marcacao_confirmado"]==9,total
manifest={"total_publicado":17000,"quantidade_lotes":170,"verbetes_por_lote":100,
          "aviso":"A contagem inicial é piso comprovado, NÃO total definitivo de erros de tradução.",
          "problemas_comprovados_inicial":total["problemas_comprovados"],
          "ingles_marcado":total["ingles_marcado"],
          "ingles_sem_marcacao_confirmado":total["ingles_sem_marcacao_confirmado"],
          "verbetes_pendentes_de_avaliacao_filologica":17000,"lotes":batches}
(OUTPUT/"manifesto.json").write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
(OUTPUT/"README.md").write_text("# JASTROW — Avaliação de traduções\n\n170 lotes de 100 verbetes. Cada arquivo contém a glosa publicada, a definição e as notas do XML original, os identificadores e as pendências explícitas. A ausência de indícios automáticos NÃO significa tradução aprovada.\n\nContagem inicial: 2.046 verbetes com inglês identificado por marcação, mais nove casos de inglês sem marcação identificados previamente. As avaliações linguísticas individuais permanecem pendentes. Nenhum módulo lexicográfico foi modificado.\n",encoding="utf-8")
print("JASTROW_170_LOTES_READY",json.dumps({
    "lotes":len(batches),"registros":len(rows),"ingles_marcado":total["ingles_marcado"],
    "ingles_sem_marcacao":total["ingles_sem_marcacao_confirmado"],
    "problemas_comprovados":total["problemas_comprovados"],
    "primeiros":batches[:3],"ultimos":batches[-3:]
},ensure_ascii=False),flush=True)
