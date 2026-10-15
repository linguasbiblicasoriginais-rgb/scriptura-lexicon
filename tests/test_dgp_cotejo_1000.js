"use strict";
// Rodar: node tests/test_dgp_cotejo_1000.js
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const j = JSON.parse(fs.readFileSync(path.join(root,"auditorias/dgp-2026-10-14-cotejo-0001-1000.json"),"utf8"));
assert.equal(j.records.length,1000);
assert.equal(j.stats.localizados,1000);
assert.equal(j.stats.lemas_correspondentes,1000);
assert.equal(j.stats.definicoes_equivalentes,985);
assert.equal(j.stats.diferencas_apresentacao,15);
assert.equal(new Set(j.records.map(x=>x.ordinal)).size,1000);
for(const r of j.records) {
  assert.ok(r.lemma_original_xml && r.definition_original_xml);
  assert.equal(r.estado_auditoria,"EM_EXECUCAO");
}
const js = fs.readFileSync(path.join(root,"lexicons/dgp-format.js"),"utf8");
const css = fs.readFileSync(path.join(root,"lexicons/dgp-format.css"),"utf8");
assert.match(js,/function dgpTransliterateGreek\(/);
assert.match(js,/decorateDgpCitationExamples\(root, audit\)/);
assert.match(js,/greek\.dataset\.tooltipType = "greek"/);
assert.match(js,/Ilíada 9\.537/);
assert.match(js,/Coríntios 11\.9/);
assert.match(css,/\.dgp-greek-quotation/);
new (require("node:vm").Script)(js,{filename:"lexicons/dgp-format.js"});
console.log("PASS: cotejo estático DGP 1–1000, rastreabilidade e sintaxe JS");
