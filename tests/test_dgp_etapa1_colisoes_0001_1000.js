"use strict";
/* Diagnóstico somente leitura: distingue IDs colididos de verbetes realmente duplicados. */
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const base = path.join(root, "lexicon-data");
const catalog = JSON.parse(fs.readFileSync(path.join(base,"catalog.json"),"utf8"));
const manifest = JSON.parse(fs.readFileSync(path.join(root,"lexicons/dgp-progress.json"),"utf8"));
const byTarget = new Map();
const all = [];
function lemma(row) {
  const m = row.match(/<td\b[^>]*class="[^"]*\btable-lemma\b[^"]*"[^>]*>([\s\S]*?)<\/td>/i);
  return (m ? m[1] : "").replace(/<[^>]*>/g,"").replace(/&nbsp;/g," ").trim();
}
function norm(s) {return s.normalize("NFC").replace(/\s+/g," ").trim();}
for (let part=0; part<Math.ceil(catalog.total/catalog.chunkSize);part++) {
  const file = path.join(base,"meta",String(part).padStart(4,"0")+".json");
  const list = JSON.parse(fs.readFileSync(file,"utf8"));
  for (const rec of list) {
    if (rec.source!=="DGP") continue;
    const row = {id:rec.id,target:rec.target,lemma:lemma(rec.row),
      search:rec.search,row_html:rec.row};
    all.push(row);
    if (!byTarget.has(rec.target)) byTarget.set(rec.target,[]);
    byTarget.get(rec.target).push(row);
  }
}
const collisions = [...byTarget].filter(([id,items])=>items.length>1).map(([id,items])=>({
  target:id, count:items.length,
  same_lemma:items.every(x=>norm(x.lemma)===norm(items[0].lemma)),
  same_row_html:items.every(x=>x.row_html===items[0].row_html),
  same_search:items.every(x=>x.search===items[0].search),
  occurrences:items.map(x=>({index_id:x.id,lemma:x.lemma,
    normalized_search_preview:x.search.slice(0,120)}))
}));
const report={
  kind:"DGP_ETAPA1_DIAGNOSTICO_DE_COLISOES_NAO_HOMOLOGACAO",
  source:"lexicon-data/meta (compilação do HEAD testado)",
  manifest_total:manifest.scope.total_dictionary_entries,
  compiled_dgp_rows:all.length,
  distinct_targets:byTarget.size,
  colliding_targets:collisions.length,
  duplicate_occurrences:collisions.reduce((sum,x)=>sum+x.count-1,0),
  same_lemma_groups:collisions.filter(x=>x.same_lemma).length,
  different_lemma_groups:collisions.filter(x=>!x.same_lemma).length,
  same_row_html_groups:collisions.filter(x=>x.same_row_html).length,
  ordinal_1000:collisions.find(x=>x.target==="entry-dgp-1000")||null,
  collisions
};
const output=path.join(root,"auditorias/dgp-etapa1-0001-1000-colisoes-ci.json");
fs.writeFileSync(output,JSON.stringify(report,null,2)+"\n","utf8");
console.log("DGP COLISOES RESUMO:",JSON.stringify({
  manifest_total:report.manifest_total,compiled_dgp_rows:report.compiled_dgp_rows,
  distinct_targets:report.distinct_targets,colliding_targets:report.colliding_targets,
  duplicate_occurrences:report.duplicate_occurrences,
  same_lemma_groups:report.same_lemma_groups,
  different_lemma_groups:report.different_lemma_groups,
  same_row_html_groups:report.same_row_html_groups,
  ordinal_1000:report.ordinal_1000
}));
