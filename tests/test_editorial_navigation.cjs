/* Testes automáticos da navegação e da migração editorial dos apócrifos. */
"use strict";
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict");
const cp=require("node:child_process");
const read=p=>fs.readFileSync(p,"utf8");
const html=read("index.html"),reader=read("scriptures/reader.js"),siteJS=read("script.js");
const controller=read("scriptures/sections.js");
const css=read("style.css"),readerCss=read("scriptures/reader.css");
const files=["script.js","scriptures/reader.js","scriptures/sections.js",
             "scriptures/word-popups.js"];
for(const f of files){
 const result=cp.spawnSync(process.execPath,["--check",f],{encoding:"utf8"});
 assert.equal(result.status,0,"JavaScript inválido em "+f+"\n"+result.stderr);
}
const drawer=html.split('<aside')[1]?.split("</aside>")[0]||"";
const expected=[
 ["escrituras","Escrituras Sagradas"],
 ["patristica","Literatura patrística"],
 ["apocrifos","Literatura apócrifa"],
 ["pseudepigrafos","Textos pseudepigráficos"],
 ["dicionarios","Dicionários e Léxicos"],
 ["configuracoes","Configurações"]
];
const mainMenu=[...drawer.matchAll(/class="site-menu-item"\s+data-site-section="([^"]+)"/g)]
.map(m=>m[1]);
assert.deepEqual(mainMenu,expected.map(x=>x[0]),"O menu sanduíche deve conter apenas 6 itens");
assert.ok(!/dictionary-option|scripture-menu-option|name="site-theme"/.test(drawer),
          "Subitens ou controles de tema vazaram para o menu sanduíche");
for(const [key,title] of expected){
 assert.ok(drawer.includes(title),title+" faltando");
 assert.ok(controller.includes(key+":"),key+" sem rota");
}
const hub=html.split('id="site-section-hub"')[1]?.split("</section>")[0]||"";
assert.ok(hub.includes('id="site-settings-content"'));
assert.ok(hub.includes('id="site-dictionary-options"'));
assert.ok(hub.includes('name="site-theme" value="light"'));
assert.ok(hub.includes('name="site-theme" value="dark"'));
assert.ok(siteJS.includes('applyTheme(input.value, true)'),"Alternância de tema não ligada");
assert.ok(html.includes('localStorage.getItem("scriptura-lexicon-theme")'));
assert.ok(html.includes('src="scriptures/sections.js"'));
assert.ok(siteJS.includes('window.ScripturaSections?.handleHash()'));
assert.ok(siteJS.includes('window.ScripturaSections?.showDictionary()'));
assert.ok(reader.includes('ScripturaWordPopups?.attach(panel, textRegion)'));
assert.ok(/\.scripture-word\s*\{[^}]*text-decoration:\s*none/.test(readerCss));
assert.ok(css.includes(".site-menu-item svg"));
assert.ok(reader.includes('scope === "apocrifos"'));
assert.ok(reader.includes('id:"EST",chapter:state.chapter+9'));
assert.ok(reader.includes('id:"DAN",chapter:13'));
assert.ok(reader.includes('id:"DAN",chapter:14'));
assert.ok(reader.includes('Number(v)<=3'));
assert.ok(reader.includes('Number(v)>=4'));
assert.ok(reader.includes('const canonical = new Set('));
assert.ok(reader.includes('apocryphaCatalog[edition] = originals.filter('));
assert.ok(reader.includes('const raw=window.ScripturaScriptureTexts'));
assert.ok(reader.includes('isApocrypha?"apocrifos":scope'));
assert.ok(reader.includes('"Acréscimos a Ester"'));
assert.ok(reader.includes('"Susanna"'));
assert.ok(reader.includes('"Bel et Draco"'));
const parseText=(edition,slug,chapter,source)=>{
 const path="scriptures/texts/"+slug+"-"+source+"-"+chapter+".js";
 assert.ok(fs.existsSync(path),"Módulo-fonte ausente "+path);
 const w={},context=vm.createContext({window:w});
 vm.runInContext(read(path),context,{filename:path});
 return Object.values(w.ScripturaScriptureTexts[edition])[0][chapter];
};
for(const [edition,pref] of [["VUL","vul"],["VULJ","vulj"]]){
 const est=parseText(edition,pref,10,"esther");
 assert.ok(est["1"] && est["3"] && est["4"] && est["13"],edition+" Ester 10 incompleta");
 const d13=parseText(edition,pref,13,"daniel"),d14=parseText(edition,pref,14,"daniel");
 assert.ok(/Susann/i.test(Object.values(d13).slice(0,7).join(" ")),
           edition+" Daniel 13 deve corresponder a Susanna");
 assert.ok(/Bel|Babylon/i.test(Object.values(d14).slice(0,7).join(" ")),
           edition+" Daniel 14 deve corresponder a Bel et Draco");
 for(const name of ["scriptures/texts/"+pref+"-esther-11.js",
                     "scriptures/texts/"+pref+"-esther-16.js",
                     "scriptures/texts/"+pref+"-daniel-12.js"])
  assert.ok(fs.existsSync(name),name+" ausente");
}
const moduleLists=cp.execFileSync("git",["ls-files","scriptures/texts"],{encoding:"utf8"}).split("\n");
for(const [pref,count] of [["uxlc",929],["lxx",1104],["vul",1334],
                           ["vulj",1362],["tr",260],["sblgnt",260]]){
 const arr=moduleLists.filter(f=>f.startsWith("scriptures/texts/"+pref+"-"));
 assert.equal(arr.length,count,pref+" corpus foi modificado/excluído");
}
const refs=[...html.matchAll(/src="(scriptures\/texts\/[^"]+\.js)"/g)].map(x=>x[1]);
assert.equal(refs.length,new Set(refs).size,"Scripts bíblicos duplicados no HTML");
console.log("OK: 6 itens principais; subitens no painel; tema em configurações;");
console.log("   separação dinâmica de Ester e Daniel, fonte preservada, 6 corpora íntegros.");
