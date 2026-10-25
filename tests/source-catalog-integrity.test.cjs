"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
const source=fs.readFileSync("lexicons/source-catalog.js","utf8");
const keys=[...source.matchAll(/^\s*"([A-Z][A-Z0-9-]+)":\s*\{/gm)].map(x=>x[1]);
assert.equal(keys.length,new Set(keys).size,"Fontes bibliográficas duplicadas sobrescrevem metadados.");
const sandbox={window:{}};
vm.runInNewContext(source,sandbox);
const catalog=sandbox.window.ScripturaSourceCatalog;
assert.ok(catalog.LSJ && catalog.LSJ.publicationStatus==="source-only");
assert.equal(catalog.LSJ.dictionary,"grego");
assert.ok(catalog.LSJ.coverUrl,"LSJ perdeu a capa histórica cadastrada.");
for(const [code,entry] of Object.entries(catalog)) {
 if(!entry.coverUrl)continue;
 assert.ok(/^imagens\/capas\/[a-z0-9-]+\.png$/.test(entry.coverUrl),code+" caminho da capa");
 assert.ok(fs.existsSync(entry.coverUrl),code+": capa local ausente");
}
const searchModule=fs.readFileSync("lexicons/on-demand-search.js","utf8");
assert.ok(searchModule.includes("isAuxiliaryOnly(run.source)"),"Fonte auxiliar não pode aparecer na pesquisa geral.");
assert.ok(searchModule.includes("if (isAuxiliaryOnly(source)) return 0;"),"A contagem não distingue fonte auxiliar.");
console.log("OK: catálogo bibliográfico sem chaves duplicadas; capas locais, LSJ auxiliar e proteção editorial.");
