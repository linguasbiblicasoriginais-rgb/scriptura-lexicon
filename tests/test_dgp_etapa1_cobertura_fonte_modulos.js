"use strict";
/*
 * DGP — diagnóstico somente leitura de identidade, origem e cobertura.
 * A similaridade entre verbetes não autoriza exclusão ou homologação.
 * Executar depois de scripts/build-on-demand.mjs.
 */
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const data = path.join(root, "lexicon-data");
const catalog = JSON.parse(fs.readFileSync(path.join(data,"catalog.json"),"utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(root,"lexicons/dgp-progress.json"),"utf8"));
const mods = JSON.parse(fs.readFileSync(path.join(root,"lexicon-modules.json"),"utf8"));
const expected = manifest.scope.total_dictionary_entries;
const normalize = value => String(value || "").normalize("NFC").replace(/\s+/g," ").trim();
const strip = html => normalize(String(html||"").replace(/<[^>]*>/g,""));
const entities = s => s.replace(/&(?:amp|lt|gt|quot|apos|nbsp);/g,m=>({
  "&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&apos;":"'","&nbsp;":" "
}[m]));
function entryText(markup) {
 const match = markup.match(/<(?:p|div)\b[^>]*class="[^"]*\bentry-text\b[^"]*"[^>]*>([\s\S]*?)<\/(?:p|div)>/i);
 return match ? entities(strip(match[1])) : null;
}
function lemma(markup) {
 const match=markup.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
 return match ? entities(strip(match[1])) : "";
}
const occurrences = new Map(), byOrdinal = new Map(), unusual = [];
let count = 0;
for (let n=0;n<Math.ceil(catalog.total/catalog.chunkSize);n++) {
 const file=String(n).padStart(4,"0")+".json";
 const meta=JSON.parse(fs.readFileSync(path.join(data,"meta",file),"utf8"));
 const cards=JSON.parse(fs.readFileSync(path.join(data,"cards",file),"utf8"));
 for (let j=0;j<meta.length;j++) {
  const record=meta[j],card=cards[j];
  if(record.source!=="DGP")continue;
  count++;
  const ordinal=/^entry-dgp-(\d+)$/.exec(record.target);
  const item={
   index_id:record.id,
   target:record.target,
   ordinal:ordinal?Number(ordinal[1]):null,
   lemma:lemma(record.row),
   definition:entryText(card?.html || ""),
   has_matching_card:!!card&&card.id===record.id&&card.target===record.target,
   row_length:record.row.length,
   card_length:card?.html?.length||0
  };
  if(!ordinal||item.ordinal<1||item.ordinal>expected)unusual.push(item);
  if (ordinal) {
    if(!byOrdinal.has(item.ordinal))byOrdinal.set(item.ordinal,[]);
    byOrdinal.get(item.ordinal).push(item);
  }
  if(!occurrences.has(record.target))occurrences.set(record.target,[]);
  occurrences.get(record.target).push(item);
 }
}
const collisions=[...occurrences.values()].filter(v=>v.length>1);
const numericalCollisions=[...byOrdinal.values()].filter(v=>v.length>1);
const alternateFormat=numericalCollisions.filter(v=>new Set(v.map(x=>x.target)).size>1);
const numericConflicts=numericalCollisions.filter(v=>!v.every(x=>x.definition!==null&&normalize(x.definition)===normalize(v[0].definition)));
const sameDefinition=collisions.filter(v=>v.every(x=>x.definition!==null&&
 normalize(x.definition)===normalize(v[0].definition)));
const differentDefinition=collisions.filter(v=>!v.every(x=>x.definition!==null&&
 normalize(x.definition)===normalize(v[0].definition)));
const numericIDs=new Set([...occurrences.values()].map(v=>v[0].ordinal).filter(Number.isInteger));
const missing=[];
for(let i=1;i<=expected;i++)if(!numericIDs.has(i))missing.push(i);
const recovery=mods.filter(s=>/^lexicons\/dgp-recovery-\d{4}-\d{4}\.js$/.test(s)).map(file=>{
 const match=/recovery-(\d{4})-(\d{4})/.exec(file);
 return {file,first:Number(match[1]),last:Number(match[2]),claimed_count:Number(match[2])-Number(match[1])+1};
});
const report={
 kind:"DGP_DIAGNOSTICO_ESTRUTURAL_NAO_HOMOLOGACAO",
 compiled_source:"lexicon-data built from lexicon-modules.json",
 expected_from_manifest:expected,
 rows_in_index:count,
 distinct_target_ids:occurrences.size,
 duplicate_target_groups:collisions.length,
 repeated_entries:collisions.reduce((sum,x)=>sum+x.length-1,0),
 unique_numeric_ordinals:byOrdinal.size,
 numerical_collision_groups:numericalCollisions.length,
 repeated_numeric_ordinals:numericalCollisions.reduce((sum,x)=>sum+x.length-1,0),
 differently_formatted_target_groups:alternateFormat.length,
 different_definition_numeric_groups:numericConflicts.length,
 alternate_format_samples:alternateFormat.slice(0,8),
 numeric_conflict_samples:numericConflicts.slice(0,16),
 identical_normalized_definition_groups:sameDefinition.length,
 conflicting_or_unavailable_definition_groups:differentDefinition.length,
 missing_ordinal_count:missing.length,
 missing_ordinals_sample:missing.slice(0,80),
 unusual_ordinal_count:unusual.length,
 unusual_ordinal_sample:unusual.slice(0,40),
 min_id:Math.min(...numericIDs),max_id:Math.max(...numericIDs),
 recovery_modules:recovery,
 recovered_ordinal_count_claimed:recovery.reduce((s,x)=>s+x.claimed_count,0),
 recovery_covers_1000_to_1630:recovery.some(x=>x.first<=1000&&x.last>=1000)&&recovery.some(x=>x.last===1630),
 collision_1000:collisions.find(x=>x[0].target==="entry-dgp-1000")||null,
 differing_definition_sample:differentDefinition.slice(0,30),
 matching_definition_sample:sameDefinition.slice(0,10)
};
const out=path.join(root,"auditorias/dgp-etapa1-modulos-identidade-ci.json");
fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n","utf8");
console.log("DGP ESTRUTURA RESUMO",JSON.stringify({...report,
 missing_ordinals_sample:report.missing_ordinals_sample.slice(0,20),
 alternate_format_samples:report.alternate_format_samples.slice(0,3),
 numeric_conflict_samples:report.numeric_conflict_samples.slice(0,3),
 unusual_ordinal_sample:report.unusual_ordinal_sample.slice(0,8),
 differing_definition_sample:report.differing_definition_sample.slice(0,4),
 matching_definition_sample:report.matching_definition_sample.slice(0,2)
}));
if(count===0||numericIDs.size===0)process.exitCode=1;
