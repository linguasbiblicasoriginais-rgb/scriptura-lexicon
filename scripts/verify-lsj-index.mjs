"use strict";
/* Executado após a compilação Netlify para validar integração dos verbetes LSJ.
 * Não equivale à revisão filológica ou à confirmação de deploy público.
 */
import fs from "node:fs";
import path from "node:path";

const root=process.cwd();
const file=name=>JSON.parse(fs.readFileSync(path.join(root,name),"utf8"));
const progress=file("lexicons/lsj-progress.json");
const catalog=file("lexicon-data/catalog.json");
const expected=progress.full_pipeline?.article_cards_integrated||0;
const actual=catalog.counts?.grego?.LSJ||0;
if (expected!==actual) throw Error("LSJ: catálogo inclui "+actual+" artigos, esperado "+expected);
if (expected===0) {
  console.log("LSJ: nenhum artigo de apresentação incluído (zero declarado).");
  process.exit(0);
}
if (!catalog.chunkSize || !Array.isArray(catalog.runs)) throw Error("LSJ: catálogo sem estrutura válida.");
const indexes=[];
for (const run of catalog.runs) {
  if (run.dictionary==="grego" && run.source==="LSJ")
    for (let id=run.start;id<run.end;id++) indexes.push(id);
}
if (indexes.length!==expected) throw Error("LSJ: incoerência dos intervalos do índice: "+indexes.length+" / "+expected);
const loadedMeta=new Map(),loadedCards=new Map();
const checked=new Set(),seenIDs=new Set();
for (const id of indexes) {
  const chunk=Math.floor(id/catalog.chunkSize),sub=id%catalog.chunkSize,key=String(chunk).padStart(4,"0");
  if (!loadedMeta.has(key)) loadedMeta.set(key,file("lexicon-data/meta/"+key+".json"));
  if (!loadedCards.has(key)) loadedCards.set(key,file("lexicon-data/cards/"+key+".json"));
  const meta=loadedMeta.get(key)[sub],card=loadedCards.get(key)[sub];
  if (!meta||!card||meta.id!==id||card.id!==id||meta.source!=="LSJ"||
      meta.dictionary!=="grego"||meta.target!==card.target||
      !/class="entry-card"/.test(card.html)||!/data-source="LSJ"/.test(card.html))
    throw Error("LSJ: índice/cartão inconsistente na posição "+id);
  if (seenIDs.has(card.target)) throw Error("LSJ: cartão duplicado "+card.target);
  if (!card.html.includes("Tradução do artigo") &&
      !card.html.includes("Tradução portuguesa do artigo") &&
      !card.html.includes("Síntese portuguesa preliminar incompleta") &&
      !card.html.includes("Tradução portuguesa pendente"))
    throw Error("LSJ: cartão sem seção de tradução "+card.target);
  seenIDs.add(card.target);
  checked.add(id);
}
if (checked.size!==expected) throw Error("LSJ: cardinalidade incorreta.");
console.log("LSJ_BUILD_CHECK_OK "+JSON.stringify({expected,checked:checked.size,source:"LSJ"}));
