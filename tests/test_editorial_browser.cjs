/* Teste de interação DOM (sem servidor ou APIs externas). */
"use strict";
const fs=require("node:fs"),vm=require("node:vm"),assert=require("node:assert/strict");
const {JSDOM}=require("jsdom");
const read=p=>fs.readFileSync(p,"utf8");
const markup=[
'<!doctype html><html lang="pt-BR"><body>',
'<aside id="dictionary-menu"><button id="menu-close" type="button"></button>',
'<nav class="site-menu-nav"><button class="site-menu-item" data-site-section="escrituras"></button>',
'<button class="site-menu-item" data-site-section="apocrifos"></button>',
'<button class="site-menu-item" data-site-section="configuracoes"></button></nav></aside>',
'<main class="container"><header class="header"></header>',
'<section id="site-section-hub" hidden>',
'<button class="site-back-link" data-site-section="inicio"></button>',
'<h1 id="site-section-title"></h1><p id="site-section-description"></p>',
'<div id="site-section-cards"></div>',
'<div id="site-dictionary-options" hidden></div>',
'<div id="site-settings-content" hidden><input type="radio" name="site-theme" value="light"><input type="radio" name="site-theme" value="dark"></div>',
'</section><section class="dictionary-context"></section>',
'<section class="search-section"></section></main></body></html>'
].join("");
const dom=new JSDOM(markup,{url:"https://example.test/",runScripts:"outside-only",pretendToBeVisual:true});
const w=dom.window,doc=w.document,context=dom.getInternalVMContext();
function script(path){vm.runInContext(read(path),context,{filename:path});}
script("scriptures/catalog-vul.js");script("scriptures/catalog-vulj.js");
for(const path of [
"scriptures/texts/vul-genesis-1.js",
"scriptures/texts/vulj-genesis-1.js",
"scriptures/texts/lxx-gen-1.js",
"scriptures/texts/lxx-tob-1.js",
"scriptures/texts/lxx-wis-1.js",
"scriptures/texts/vul-esther-10.js",
"scriptures/texts/vul-esther-11.js",
"scriptures/texts/vulj-esther-10.js",
"scriptures/texts/vulj-esther-11.js",
"scriptures/texts/vul-daniel-12.js",
"scriptures/texts/vul-daniel-13.js",
"scriptures/texts/vul-daniel-14.js",
"scriptures/texts/vulj-daniel-12.js",
"scriptures/texts/vulj-daniel-13.js",
"scriptures/texts/vulj-daniel-14.js",
"scriptures/texts/vul-tobit-1.js",
"scriptures/texts/vulj-tobit-1.js"
])script(path);
script("scriptures/paragraphs.js");
script("scriptures/reader.js");
script("scriptures/sections.js");
const api=w.ScripturaScriptures,nav=w.ScripturaSections;
assert.ok(api&&nav,"Leitor e navegação devem inicializar");
assert.ok(nav.showHub("inicio"));assert.equal(doc.getElementById("site-section-hub").hidden,false);
assert.equal(doc.querySelector(".dictionary-context").hidden,true);
assert.equal(doc.querySelectorAll(".site-section-card").length,6);
nav.openSection("configuracoes");
assert.equal(doc.getElementById("site-settings-content").hidden,false);
assert.equal(doc.getElementById("site-dictionary-options").hidden,true);
nav.openSection("apocrifos");
assert.equal(doc.querySelectorAll(".site-section-card[data-site-edition]").length,3);
doc.querySelector(".site-section-card[data-site-edition='VUL']").click();
assert.equal(doc.getElementById("site-section-hub").hidden,true);
assert.equal(doc.getElementById("scripture-reader").hidden,false);
const selectEdition=doc.getElementById("scripture-edition");
assert.deepEqual([...selectEdition.options].map(x=>x.value),["LXX","VUL","VULJ"]);
function lines(){return [...doc.querySelectorAll("#scripture-text .scripture-verse-line")];}
function numbers(){return lines().map(x=>Number(x.querySelector(".scripture-verse-number").textContent.trim()));}
function output(){return doc.getElementById("scripture-text").textContent;}
function reference(){return doc.getElementById("scripture-reference").textContent;}
for(const ed of ["VUL","VULJ"]){
 api.show(ed,"EST_ADD",1,1,true,"apocrifos");
 assert.deepEqual(numbers(),[4,5,6,7,8,9,10,11,12,13],ed+" Ester 10:4–13");
 assert.equal(doc.getElementById("scripture-verse").value,"4");
 assert.ok(reference().includes("Ester 10:4"));
 assert.equal(doc.getElementById("scripture-chapter").options.length,7);
 api.show(ed,"EST_ADD",2,1,true,"apocrifos");
 assert.ok(reference().includes("Ester 11:1"));
 api.show(ed,"DAN_SUS",1,1,true,"apocrifos");
 assert.ok(/Susann/i.test(output()),ed+" Daniel 13 deve ser Susanna");
 assert.ok(reference().includes("Daniel 13:1"));
 api.show(ed,"DAN_BEL",1,1,true,"apocrifos");
 assert.ok(/Bel|Babylon/i.test(output()),ed+" Daniel 14 deve ser Bel et Draco");
 assert.ok(reference().includes("Daniel 14:1"));
 api.show(ed,"EST",10,1,true,"escrituras");
 assert.deepEqual(numbers(),[1,2,3],ed+" Ester canônico 10:1–3");
 const bookValues=[...doc.getElementById("scripture-book").options].map(x=>x.value);
 assert.ok(!bookValues.includes("TOB")&&!bookValues.includes("EST_ADD")&&!bookValues.includes("DAN_SUS"));
 api.show(ed,"DAN",12,1,true,"escrituras");
 assert.equal(doc.getElementById("scripture-chapter").options.length,12);
}
api.show("LXX","TOB",1,1,true,"apocrifos");
assert.equal(doc.getElementById("scripture-book").value,"TOB");
assert.ok(lines().length>0,"Livro grego apócrifo deve apresentar versos");
api.show("LXX","GEN",1,1,true,"escrituras");
assert.equal(doc.getElementById("scripture-book").value,"GEN");
assert.ok(![...doc.getElementById("scripture-book").options].some(x=>x.value==="WIS"));
w.history.replaceState(null,"","#escrituras/VUL/EST.10.4");
assert.ok(nav.handleHash());
assert.equal(w.location.hash,"#apocrifos/VUL/EST_ADD.1.4");
w.history.replaceState(null,"","#escrituras/VULJ/DAN.13.1");
assert.ok(nav.handleHash());
assert.equal(w.location.hash,"#apocrifos/VULJ/DAN_SUS.1.1");
w.history.replaceState(null,"","#escrituras/VUL/DAN.14.1");
assert.ok(nav.handleHash());
assert.equal(w.location.hash,"#apocrifos/VUL/DAN_BEL.1.1");
nav.showDictionary();
assert.equal(doc.querySelector(".dictionary-context").hidden,false);
assert.equal(doc.getElementById("scripture-reader").hidden,true);
console.log("OK DOM: seis áreas, seleção de edição, Ester 10:4-13/11-16, Susanna, Bel et Draco e redirecionamentos.");
dom.window.close();