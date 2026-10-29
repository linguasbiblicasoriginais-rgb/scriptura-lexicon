"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const {group,displayGreek,sourceGreekInitials,greekEditions}=require("../scriptures/paragraphs.js");
const read=p=>fs.readFileSync(p,"utf8");
function sample(path,edition,book){
 const window={};
 vm.runInNewContext(read(path),{window},{filename:path});
 const verses=window.ScripturaScriptureTexts[edition][book][1];
 const breaks=window.ScripturaScriptureParagraphBreaks?.[edition]?.[book]?.[1]||[];
 return {verses,breaks};
}
const fixtures=[
 ["UXLC","GEN","uxlc-genesis-1"],
 ["LXX","GEN","lxx-gen-1"],
 ["TR","MAT","tr-matthew-1"],
 ["SBLGNT","MAT","sblgnt-matthew-1"],
 ["NA28","MAT","na28-matthew-1"],
 ["UBS5","MAT","ubs5-matthew-1"],
 ["VUL","GEN","vul-genesis-1"],
 ["VULJ","GEN","vulj-genesis-1"]
];
test("Todas as oito edições: parágrafos cobrem os versículos sem perda nem duplicação",()=>{
 for(const [edition,book,module]of fixtures){
  const {verses,breaks}=sample("scriptures/texts/"+module+".js",edition,book);
  const entries=Object.entries(verses);
  const original=JSON.stringify(verses);
  const plan=group(entries,{sourceEnds:breaks});
  assert.ok(plan.length>0,edition+": nenhum parágrafo");
  assert.ok(plan.length<entries.length,edition+": versículos continuam como parágrafos isolados");
  const flattened=plan.flatMap(p=>p.verses);
  assert.deepEqual(flattened.map(v=>v.number),entries.map(x=>Number(x[0])).sort((a,b)=>a-b),edition+": ordem");
  for(const item of flattened)assert.equal(item.text,typeof verses[item.number]==="string"?verses[item.number]:verses[item.number].text,edition+": fonte");
  assert.equal(JSON.stringify(verses),original,edition+": corpus alterado");
  const protectedWords=sourceGreekInitials(entries);
  if(greekEditions.has(edition)){
   for(const p of plan)for(let i=0;i<p.verses.length;i++){
    const row=p.verses[i];
    const display=displayGreek(row.text,{paragraphStart:i===0,protectedWords});
    assert.equal(typeof display,"string");
    assert.equal(display.length,row.text.length,edition+": transformação de caixa não pode eliminar sinais");
   }
  }
 }
});
test("UXLC: preservar as divisões פ e ס documentadas pela fonte",()=>{
 const {verses,breaks}=sample("scriptures/texts/uxlc-genesis-1.js","UXLC","GEN");
 assert.deepEqual(Array.from(breaks),[5,8,13,19,23,31]);
 const plan=group(Object.entries(verses),{sourceEnds:breaks});
 assert.deepEqual(plan.map(p=>p.verses.at(-1).number),Array.from(breaks));
 assert.ok(plan.every(p=>p.origin==="fonte"));
});
test("Grego: não capitalizar cada versículo; preservar nomes próprios e dados de origem",()=>{
 const {verses}=sample("scriptures/texts/lxx-gen-1.js","LXX","GEN");
 const before=JSON.stringify(verses);
 const groups=group(Object.entries(verses));
 assert.deepEqual(groups[0].verses.map(x=>x.number),[1,2,3]);
 const names=sourceGreekInitials(Object.entries(verses));
 assert.equal(displayGreek(verses[2],{paragraphStart:false,protectedWords:names}).slice(0,1),"ἡ");
 assert.equal(displayGreek(verses[3],{paragraphStart:false,protectedWords:names}).slice(0,3),"καὶ");
 const nt=sample("scriptures/texts/tr-matthew-1.js","TR","MAT").verses;
 const ntNames=sourceGreekInitials(Object.entries(nt));
 assert.match(displayGreek(nt[2],{paragraphStart:false,protectedWords:ntNames}),/^Ἀβρα/);
 assert.equal(displayGreek("καὶ εἶπεν",{paragraphStart:true}).slice(0,3),"Καὶ");
 assert.equal(displayGreek("Ἡ δὲ",{paragraphStart:false,protectedWords:new Set()}),"ἡ δὲ");
 assert.equal(JSON.stringify(verses),before,"Texto-fonte não é substituído pela apresentação");
});
test("CSS, controles clicáveis, popups e módulos carregados na ordem correta",()=>{
 const html=read("index.html"),reader=read("scriptures/reader.js"),css=read("scriptures/reader.css");
 assert.ok(html.indexOf('src="scriptures/paragraphs.js"')<html.indexOf('src="scriptures/reader.js"'));
 assert.match(reader,/window\.ScripturaScriptureParagraphs/);
 assert.match(reader,/dataset\.scriptureVerse/);
 assert.match(reader,/event\.target\.closest\("\.scripture-word"\)/);
 assert.match(reader,/wordUI\.decorate\(passage,display,options\)/);
 assert.match(css,/\.scripture-paragraph\s*\{[^}]*text-align:\s*justify/s);
 assert.match(css,/\.scripture-verse-line\.scripture-verse-selected\s*\{[^}]*border-inline-start:/s);
});
