#!/usr/bin/env node
"use strict";
/**
 * Varredura filológica assistida JASTROW A00000–A00599.
 * Não certifica conteúdo: produz evidências e uma fila de exame humano.
 */
const fs=require("node:fs"),cp=require("node:child_process"),vm=require("node:vm");
const SOURCE="origin/chat-gpt-commits";
const read=p=>cp.execFileSync("git",["show",SOURCE+":"+p],{encoding:"utf8",maxBuffer:30*1024*1024});
const decode=x=>String(x??"").replace(/&(?:amp|lt|gt|quot|apos|nbsp|#39|#x27);/gi,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&nbsp;":" ","&#39;":"'","&#x27;":"'"}[t.toLowerCase()]??t));
const plain=x=>decode(String(x??"").replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim());
const normalize=x=>plain(x).normalize("NFC").replace(/[\u05f3\u2019\u2018]/g,"'").replace(/[\u05f4]/g,'"').replace(/\s+/g," ").trim();
const collect=(x,tag)=>[...String(x).matchAll(new RegExp("<"+tag+"(?:\\s[^>]*)?>([\\s\\S]*?)<\\/"+tag+">","g"))].map(q=>plain(q[1]));
const html=read("index.html");
const names=[...html.matchAll(/<script src="([^"]+)"/g)].map(x=>x[1]);
const modules=names.filter(x=>/^lexicons\/jastrow.*\.js$/.test(x));
const sandbox={window:{ScripturaLexicons:{}}};
for(const file of modules)vm.runInNewContext(read(file),sandbox,{filename:file,timeout:5000});
const lex=sandbox.window.ScripturaLexicons.JASTROW;
const rows=[...lex.rowsHtml.matchAll(/<tr class="search-row"[^>]*>[\s\S]*?<\/tr>/g)].map(x=>x[0]);
const cards=[...lex.cardsHtml.matchAll(/<article[^>]*class="entry-card"[^>]*>[\s\S]*?<\/article>/g)].map(x=>x[0]);
const originals=[1,2,3].flatMap(n=>JSON.parse(read("lexicons/jastrow-source-lote-"+String(n).padStart(4,"0")+".json")).records);
if(rows.length!==600||cards.length!==600||originals.length!==600)throw Error("Contagens inesperadas: "+[rows.length,cards.length,originals.length].join("/"));
const results=[],stats={};
const increment=k=>{stats[k]=(stats[k]||0)+1;};
for(let i=0;i<600;i++){
  const entry=originals[i],src=entry.source_xml,xmlId=src.match(/<entry id="([^"]+)"/)?.[1]??"",id="A"+String(i).padStart(5,"0");
  const row=rows[i],card=cards[i],rowTarget=row.match(/data-target="([^"]+)"/)?.[1],cardId=card.match(/<article[^>]*\bid="([^"]+)"/)?.[1];
  const display=plain(card.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]||"");
  const heads=collect(src,"head-word"),defs=collect(src,"definition").filter(Boolean),notes=collect(src,"notes").filter(Boolean),allSenses=(src.match(/<sense>/g)||[]).length;
  const grc=(plain(src).match(/[\u0370-\u03ff\u1f00-\u1fff]+/g)||[]).filter(x=>x.length>1);
  const binyans=collect(src,"binyan-name"),parts=collect(src,"pos"),languages=collect(src,"language-key");
  const text=plain(card);
  const editorialPart=card.match(/<div class="section-title">(?:Tradução e análise da fonte|Tradução e análise|Acepções)[\s\S]*?<\/section>/)?.[0]||card;
  const editorialText=plain(editorialPart);
  const flags=[];
  const flag=(key,detail,weight=1)=>{flags.push({key,detail,weight});increment(key)};
  if(xmlId!==id||rowTarget!=="entry-jastrow-"+id.toLowerCase()||cardId!=="entry-jastrow-"+id.toLowerCase())flag("ID_OR_TARGET_MISMATCH","ID XML/busca/cartão não corresponde",9);
  if(normalize(heads[0])!==normalize(display)){
    const alternate=heads.length>1&&heads.every(h=>normalize(display).includes(normalize(h)));
    if(!alternate)flag("HEADWORD_DIFFERENCE","Fonte: "+heads[0]+" | Interface: "+display,4);
    else flag("MULTIPLE_SOURCE_HEADWORDS","Cabeçalhos múltiplos preservados em lema combinado",0);
  }
  if(heads.length>1){const missing=heads.filter(h=>!normalize(text).includes(normalize(h)));if(missing.length)flag("VARIANTS_NOT_VISIBLE","Variantes do cabeçalho ausentes: "+missing.join(" | "),3);}
  const editorLen=editorialText.length,sourceLen=plain(src).length;
  if(allSenses>=3 && editorLen<Math.max(135,sourceLen*0.23))flag("MULTISENSE_COMPRESSED",allSenses+" sentidos na fonte; "+editorLen+" caracteres editoriais para "+sourceLen+" de fonte",3);
  else if(allSenses>=2 && editorLen<Math.max(90,sourceLen*0.16))flag("MULTISENSE_REVIEW",allSenses+" sentidos condensados",1);
  if(binyans.length>=2){const txt=editorialText.toLowerCase();const present=binyans.filter(b=>{const b0=b.toLowerCase().replace(/\./g,"").trim();return txt.includes(b0)||((b0==="pi"||b0==="pa")&&/piel|pael|pi\./i.test(txt))||((b0==="hif"||b0==="hifil")&&/hifil|hif\.|causativ/i.test(txt))||((b0==="nif")&&/nifal|nif\.|reflexiv/i.test(txt))});
    if(present.length<Math.ceil(binyans.length/2))flag("MORPHOLOGY_NOT_EVIDENT","Formas binyan no original: "+binyans.join(", "),2);
  }
  if(grc.length){const missing=[...new Set(grc)].filter(g=>!text.includes(g));if(missing.length)flag("GREEK_NOT_EVIDENT","Expressões gregas não visíveis na redação: "+missing.slice(0,6).join(", "),2);}
  if(notes.join(" ").length>450 && editorialText.length<notes.join(" ").length*0.25)flag("EXTENSIVE_NOTES_CONDENSED","Notas extensas do original resumidas",2);
  if(defs.length>=2 && editorialText.length<70)flag("DEFINITIONS_CONDENSED",defs.length+" definições, redação muito curta",3);
  if(!/(?:ver |vide |remet|cf\.|compar|v\.|≃|=)/i.test(editorialText) && /\bv\.\s*(?:[\u0590-\u05ff]|\w)/.test(plain(src)) && allSenses===1 && defs.every(d=>d.length<12))flag("CROSS_REFERENCE_REVIEW","Remissão relevante no original; conferir texto português",2);
  const score=flags.reduce((n,f)=>n+f.weight,0);
  const level=flags.some(f=>f.weight>=9)?"blocker":score>=5?"high":score>=3?"medium":flags.length?"low":"no_automatic_flag";
  const result={id,ordinal:i+1,source_headword:heads,display_headword:display,source_sense_count:allSenses,source_definition_count:defs.length,source_notes_count:notes.length,source_binyans:binyans,source_pos:parts,source_language:languages,source_chars:sourceLen,editorial_chars:editorLen,source_definition_excerpts:defs.slice(0,5).map(t=>t.slice(0,160)),source_notes_excerpts:notes.slice(0,2).map(t=>t.slice(0,200)),editorial_excerpt:editorialText.slice(0,340),score,level,flags,philological_certification:"PENDING_MANUAL"};
  results.push(result);increment("LEVEL_"+level.toUpperCase());
}
const current=cp.execFileSync("git",["rev-parse",SOURCE],{encoding:"utf8"}).trim();
const manifest={schema:"jastrow-philological-screening-v1",source_branch:"chat-gpt-commits",source_head:current,source_commit:"947c1b91684df9f8b92f14cf0d281b5d4f29bfc7",scope:"A00000–A00599",count:results.length,review_type:"Comparação estruturada de XML e sínteses editoriais; triagem, não certificação humana",stats,items:results};
const root="auditoria/jastrow-filologia-600";
fs.mkdirSync(root,{recursive:true});
fs.writeFileSync(root+"/triagem-600.json",JSON.stringify(manifest,null,2)+"\n");
const hdr="# JASTROW — triagem filológica integral de 600 entradas\n\n"
  +"**Fonte de interface auditada:** \`"+current+"\` em \`chat-gpt-commits\`. **Originais:** Sefaria-Data, commit \`947c1b91684df9f8b92f14cf0d281b5d4f29bfc7\`.\n\n"
  +"**Abrangência:** confronto automatizado de 600/600 entradas XML, cartões e resumos portugueses. **Não equivale a 600 revisões filológicas humanas.** Nenhum registro é classificado como certificado exclusivamente por esta triagem. \`total_audited=0\` permanece até revisão individual comprovada.\n\n";
const statsTable="| Classe | Quantidade |\n|---|---:|\n"+Object.entries(stats).filter(([k])=>k.startsWith("LEVEL_")).map(([k,v])=>"| "+k.replace("LEVEL_","").toLowerCase()+" | "+v+" |").join("\n")+"\n\n";
const flagsTable="| Sinalizador de revisão | Entradas |\n|---|---:|\n"+Object.entries(stats).filter(([k])=>!k.startsWith("LEVEL_")).sort((a,b)=>b[1]-a[1]).map(([k,v])=>"| "+k+" | "+v+" |").join("\n")+"\n\n";
const intro=hdr+statsTable+flagsTable+"A ausência de sinal automático não comprova correção de etimologias, citações, acepções ou bibliografia. Texto em português é frequentemente síntese, e não tradução integral. Os sinalizadores podem conter falsos positivos: requerem adjudicação humana comparando as duas camadas.\n\n";
for(let b=0;b<12;b++){
 const chunk=results.slice(b*50,b*50+50);
 let body="# JASTROW — triagem filológica, ordinais "+(b*50+1)+"–"+(b*50+50)+"\n\n";
 body+="| ID | Lema original | Sentidos XML | Classe | Achados |\n|---|---|---:|---|---|\n";
 for(const x of chunk){const keys=x.flags.map(y=>y.key).join("; ")||"—";body+="| \`"+x.id+"\` | "+x.source_headword[0]?.replace(/\|/g,"\\|")+" | "+x.source_sense_count+" | "+x.level+" | "+keys+" |\n";}
 fs.writeFileSync(root+"/lote-"+String(b+1).padStart(2,"0")+".md",body+"\n");
}
const candidates=results.filter(x=>x.level==="blocker"||x.level==="high").sort((a,b)=>b.score-a.score||a.ordinal-b.ordinal);
const shortlist="## Prioridades para conferência filológica\n\n"+
 "| ID | Lema | Prioridade | Achado | Evidência de definição original | Síntese existente |\n|---|---|---|---|---|---|\n"+
 candidates.slice(0,80).map(x=>"| \`"+x.id+"\` | "+x.source_headword[0]?.replace(/\|/g,"\\|")+" | "+x.level+" | "+x.flags.map(f=>f.key).join(", ")+" | "+(x.source_definition_excerpts[0]||"").replace(/\|/g,"\\|")+" | "+x.editorial_excerpt.slice(0,120).replace(/\|/g,"\\|")+" |").join("\n")+"\n\n";
fs.writeFileSync(root+"/README.md",intro+shortlist+"Relatórios de 50 entradas: \`lote-01.md\` até \`lote-12.md\`. A matriz analítica com excertos e achados por registro está em \`triagem-600.json\`.\n");
console.log("JASTROW_PHILOLOGICAL_SCREENING_COMPLETED",JSON.stringify({records:results.length,source_head:current,stats,report_files:14,priority: candidates.slice(0,24).map(x=>({id:x.id,lemma:x.source_headword[0],score:x.score,flags:x.flags.map(f=>f.key)}))}));
