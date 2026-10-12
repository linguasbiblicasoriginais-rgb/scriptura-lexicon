#!/usr/bin/env python3
"""Incorporar THAYER 200 verbetes sem auditoria, PR ou integracao."""
import datetime,hashlib,html,json,pathlib,re,subprocess,urllib.request
R=pathlib.Path(__file__).resolve().parents[1]
URL="https://raw.githubusercontent.com/nigelmsipa/thayers-greek-lexicon-dataset/master/data/thayer_lexicon.jsonl"
def plain(x):return re.sub(r"\s+"," ",str(x or "")).strip()
def esc(x):return html.escape(str(x),quote=True)
def main():
    P=R/"lexicons/thayer-progress.json"
    progress=json.loads(P.read_text(encoding="utf8"))
    if progress.get("total_published")!=512 or progress.get("next_lemma")!="ἀντιπαρέρχομαι":raise Exception("Checkpoint mudou, abortando")
    out=R/"lexicons/thayer-batch-008-200.js"
    if out.exists():raise Exception("Lote 008 ja existente")
    req=urllib.request.Request(URL,headers={"User-Agent":"ScripturaLexicon/THAYER-Incorporator-1.0"})
    with urllib.request.urlopen(req,timeout=120) as response: source_bytes=response.read()
    source=[json.loads(s) for s in source_bytes.decode("utf-8-sig").splitlines() if s.strip()]
    indexed={}
    for e in source:
        keys=e.get("strongs") or []
        if isinstance(keys,str):keys=[keys]
        keys=list(keys)+[e.get("id") or ""]
        for k in keys:
            v=re.fullmatch(r"G(\d+)",str(k).strip().upper())
            if v:
                i=int(v.group(1))
                if 492<=i<=691 and (i not in indexed or e.get("id")==f"G{i}"):indexed[i]=e
    missing=[i for i in range(492,692) if i not in indexed]
    if missing:raise Exception("Lemas nao encontrados na fonte auxiliar: "+str(missing))
    import argostranslate.package,argostranslate.translate
    argostranslate.package.update_package_index()
    avail=[p for p in argostranslate.package.get_available_packages() if p.from_code=="en" and p.to_code=="pt"]
    if not avail:raise Exception("Tradutor en-pt offline indisponivel")
    argostranslate.package.install_from_path(avail[0].download())
    languages=argostranslate.translate.get_installed_languages()
    translate=next(z for z in languages if z.code=="en").get_translation(next(z for z in languages if z.code=="pt")).translate
    rows=[];cards=[];entries=[]
    for t,n in enumerate(range(492,692)):
        e=indexed[n];lemma=plain(e.get("lemma"));gram=plain(e.get("grammar"))
        en=plain(e.get("text")) or plain(" ".join(e.get("paragraphs") or []))
        if not lemma or len(en)<10:raise Exception(f"Artigo auxiliar G{n} vazio")
        pt=plain(translate(en[:550]))
        if len(pt)<5:raise Exception(f"Traducao de trabalho G{n} vazia")
        id=f"entry-thayer-{512+t:04d}";gloss=pt[:170].rstrip(" ;,.")
        ss=" ".join((lemma,gram,gloss,pt[:250],f"Thayer G{n}"))
        rows.append(f'<tr class="search-row" data-dictionary="grego" data-target="{id}" data-source="THAYER" data-search="{esc(ss)}" tabindex="0"><td class="table-lemma greek">{esc(lemma)}</td><td>{esc(gram)}</td><td>{esc(gloss)}</td><td><span class="source-pill">THAYER</span></td></tr>')
        src=e.get("source") or {};pages=src.get("print_pages") or []
        notes="; ".join(map(str,pages)) if pages else "não determinada"
        card=(f'<article id="{id}" class="entry-card" data-dictionary="grego" hidden>'
          f'<header class="entry-header"><div><h1 class="entry-title greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="{esc(lemma)}" data-meanings="{esc(gloss)}">{esc(lemma)}</h1>'
          f'<div class="entry-meta"><span>{esc(gram or "forma grega")}</span><span class="separator">·</span><span>Thayer G{n}</span></div></div><div class="source-tag">THAYER</div></header><div class="entry-divider"></div>'
          f'<section class="entry-section"><div class="section-title">Tradução provisória</div><p class="entry-text"><strong>{esc(gloss)}</strong></p></section>'
          f'<section class="entry-section"><div class="section-title">Acepções e uso</div><p class="entry-text">{esc(pt)}</p></section>'
          f'<section class="entry-section"><div class="section-title">Texto original (transcrição digital auxiliar)</div><p class="entry-text">{esc(en)}</p></section>'
          f'<section class="entry-section"><div class="section-title">Fonte</div><p class="entry-text">Joseph H. Thayer, <em>A Greek-English Lexicon of the New Testament</em>, G{n}; página da transcrição auxiliar: {esc(notes)}. Auxiliar CC0: nigelmsipa/thayers-greek-lexicon-dataset. Tradução automática provisória não cotejada com o fac-símile.</p></section></article>')
        cards.append(card)
        entries.append({"id":id,"index":f"G{n}","lemma":lemma,"grammar":gram,"english_auxiliary_transcription":en,"portuguese_automatic_working_translation":pt,"source_auxiliary_pages":pages})
    if len(entries)!=200:raise Exception("Nao se formaram 200 verbetes")
    delim=chr(96)
    j='"use strict";\n/* THAYER 008: INCORPORACAO 200 (G492-G691); sem auditoria */\n'
    j+='window.ScripturaLexicons=window.ScripturaLexicons||{};if(!window.ScripturaLexicons.THAYER)throw new Error("THAYER base ausente");\n'
    j+='window.ScripturaLexicons.THAYER.rowsHtml+=String.raw'+delim+"\n"+"\n".join(rows)+"\n"+delim+";\n"
    j+='window.ScripturaLexicons.THAYER.cardsHtml+=String.raw'+delim+"\n"+"\n".join(cards)+"\n"+delim+";\n"
    if delim in "".join(rows+cards):raise Exception("Delimitador inseguro presente na fonte.")
    i=R/"index.html";h=i.read_text(encoding="utf8");a='    <script src="lexicons/thayer-batch-007-suplemento.js"></script>'
    if h.count(a)!=1:raise Exception("Ancora de modulo THAYER indefinida")
    checkpoint={**progress,"date":datetime.date.today().isoformat(),"total_existing_before_batch":512,"new_entries":200,"total_published":712,"first_new_lemma":entries[0]["lemma"],"last_new_lemma":entries[-1]["lemma"],"next_lemma":"G692 — lema pendente de confirmação na fonte","batch_size":200,"previous_checkpoint":512,"last_batch_source_ordinals":"G492-G691","source_ordinals_added":"G492-G691","last_batch_lemmas":[x["lemma"] for x in entries],"last_batch_translation_status":"AUTOMATICA_PROVISORIA_NAO_AUDITADA","source_transcription_sha256":hashlib.sha256(source_bytes).hexdigest(),"source_transcription_records":len(source)}
    checkpoint["batches"].append({"batch":8,"new_entries":200,"prior_total":512,"final_total":712,"first":entries[0]["lemma"],"last":entries[-1]["lemma"],"strongs":"G492-G691","module":"lexicons/thayer-batch-008-200.js","source_layer":"lexicons/thayer-source-batch-008-200.json","translation_status":"tradução automática provisória sem colação"})
    source_out=R/"lexicons/thayer-source-batch-008-200.json"
    rule=R/"regras/Rthayer.txt";readme=R/"README.md"
    out.write_text(j,encoding="utf8")
    source_out.write_text(json.dumps({"source":URL,"sha256":hashlib.sha256(source_bytes).hexdigest(),"entries":entries},ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    P.write_text(json.dumps(checkpoint,ensure_ascii=False,indent=2)+"\n",encoding="utf8")
    i.write_text(h.replace(a,a+'\n    <script src="lexicons/thayer-batch-008-200.js"></script>'),encoding="utf8")
    rule.write_text(rule.read_text(encoding="utf8")+"\nTHAYER LOTE 008: 200 verbetes G492-G691, IDs 0512-0711, total 712; tradução automática provisória e texto transcrito inglês auxiliar preservados. Somente incorporação, sem auditoria, homologação ou integração; cotejo do fac-símile pendente.\n",encoding="utf8")
    readme.write_text("## THAYER — lote 008 (200 entradas)\n\nIncorporação exclusiva em chat-gpt-thayer dos índices auxiliares G492–G691 (200 novos; total 712). Texto inglês de digitalização CC0 preservado e tradução inicial automática ao português, ainda não cotejada com o fac-símile Thayer. Sem auditoria, homologação ou integração nesta execução.\n\n"+readme.read_text(encoding="utf8"),encoding="utf8")
    subprocess.run(["git","config","user.name","github-actions[bot]"],cwd=R,check=True)
    subprocess.run(["git","config","user.email","41898282+github-actions[bot]@users.noreply.github.com"],cwd=R,check=True)
    paths=[str(x.relative_to(R)) for x in (out,source_out,P,i,rule,readme)]
    subprocess.run(["git","add","--"]+paths,cwd=R,check=True)
    subprocess.run(["git","commit","-m","THAYER: incorporar 200 verbetes G492-G691 (total 712)"],cwd=R,check=True)
    subprocess.run(["git","push","origin","HEAD:chat-gpt-thayer"],cwd=R,check=True)
    print("INCORPORADOS=200 TOTAL_ATUAL=712 TOTAL_AUXILIAR="+str(len(source)))
if __name__=="__main__":main()
