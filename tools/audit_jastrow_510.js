#!/usr/bin/env node
"use strict";
/* Auditoria estática cumulativa, sem tradução editorial ou DOM de navegador. */
const fs=require("node:fs"), vm=require("node:vm"),assert=require("node:assert/strict");
const html=fs.readFileSync("index.html","utf8");
const progress=JSON.parse(fs.readFileSync("lexicons/jastrow-progress.json","utf8"));
const names=[...html.matchAll(/<script src="([^"]+)"/g)].map(m=>m[1]);
const modules=names.filter(x=>/^lexicons\/jastrow.*\.js$/.test(x));
assert.ok(modules.length>=5,"Nenhum módulo JASTROW");
assert.ok(modules.every(f=>fs.existsSync(f)),"JS JASTROW inexistente");
assert.ok(names.indexOf("script.js")>names.indexOf(modules.at(-1)),"Scripts carregados depois do agregador");
global.window={ScripturaLexicons:{}};
for(const name of modules)vm.runInThisContext(fs.readFileSync(name,"utf8"),{filename:name});
const lex=window.ScripturaLexicons.JASTROW;
assert.ok(lex,"Registro JASTROW ausente");
const rows=[...lex.rowsHtml.matchAll(/<tr class="search-row"[^>]*>[\s\S]*?<\/tr>/g)].map(x=>x[0]);
const cards=[...lex.cardsHtml.matchAll(/<article class="entry-card"[^>]*>[\s\S]*?<\/article>/g)].map(x=>x[0]);
const count=progress.scope.total_published;
assert.equal(rows.length,count,"Linhas de pesquisa");
assert.equal(cards.length,count,"Cartões lexicais");
let sources=[];
for(let n=1;n<=Math.ceil(count/200);n++){
 const path="lexicons/jastrow-source-lote-"+String(n).padStart(4,"0")+".json";
 const o=JSON.parse(fs.readFileSync(path,"utf8"));
 assert.equal(o.entry_count,200,path);
 sources.push(...o.records);
}
function escape(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
const targets=new Set(),cardIds=new Set();
for(let i=0;i<count;i++){
 const src=sources[i], expectedSid="A"+String(i).padStart(5,"0");
 const sid=src.source_xml.match(/<entry id="([^"]+)"/)?.[1];
 assert.equal(sid,expectedSid,"ID canônico no ordinal "+i);
 const id="entry-jastrow-"+sid.toLowerCase();
 const target=rows[i].match(/data-target="([^"]+)"/)?.[1];
 const cardId=cards[i].match(/\bid="([^"]+)"/)?.[1];
 assert.equal(target,id,"data-target no ordinal "+i);
 assert.equal(cardId,id,"ID de cartão no ordinal "+i);
 assert.ok(cards[i].includes('data-source-entry="'+sid+'"'),"source entry "+sid);
 assert.ok(rows[i].includes(">"+escape(src.headword)+"</td>"),"Lema da busca "+sid);
 assert.ok(cards[i].includes(">"+escape(src.headword)+"</h1>"),"Lema do cartão "+sid);
 assert.ok(!targets.has(target),"Target duplicado: "+target);targets.add(target);
 assert.ok(!cardIds.has(cardId),"Card duplicado: "+cardId);cardIds.add(cardId);
}
const popups=lex.bibliographicTerms||[];
assert.equal(new Set(popups.map(t=>t.key.toLocaleLowerCase("pt-BR"))).size,popups.length,"Chaves dos popups duplicadas");
assert.ok(html.includes('id="jastrow-search-anchor"')&&html.includes('id="jastrow-entry-anchor"'),"Âncoras ausentes");
assert.equal(progress.scope.next_ordinal,count+1,"Próximo ordinal");
assert.equal(progress.scope.next_source_id,"A"+String(count).padStart(5,"0"),"Próximo ID");
assert.equal(progress.scope.next_lemma,sources[count].headword,"Próximo lema da fonte");
assert.ok(html.includes('src="lexicons/dgp-batch-076.js"')||!fs.existsSync("lexicons/dgp-batch-076.js"),"DGP76 omitido em HTML da origem");
console.log("JASTROW_CUMULATIVE_AUDIT_PASS",JSON.stringify({rows:rows.length,cards:cards.length,matchedIDs:count,sourceRecords:sources.length,popupDefinitions:popups.length,modules:modules.length,next:progress.scope.next_source_id,review:"static only; philological audit and browser pending"}));
