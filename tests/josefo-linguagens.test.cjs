"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const {segments}=require("../josefo/linguagem-apiao.js");
const root=path.resolve(__dirname,"..");
function read(file){return fs.readFileSync(path.join(root,file),"utf8");}
function load(file,window){vm.runInNewContext(read(file),{window},{filename:file});}
test("Contra Ápio: 616 seções preservadas e idiomas do TEI verificados",()=>{
 const window={};
 load("josefo/texts/apiao-1.js",window);
 load("josefo/texts/apiao-2.js",window);
 let count=0,latinSections=0;
 for(const book of [1,2]){
  const rows=Object.values(window.ScripturaJosephusWorks.apiao[book].chapters).flat();
  assert.equal(rows.length,book===1?320:296);
  for(const row of rows){
   const parts=segments("apiao",book,row.number,row.text);
   assert.equal(parts.map(p=>p.text).join(""),row.text,
     "Conteúdo alterado em C. Ap. "+book+"."+row.number);
   assert.ok(parts.every(p=>p.text.length>0));
   assert.ok(parts.every(p=>["grc","la"].includes(p.lang)),
     "Limite não confirmado em C. Ap. "+book+"."+row.number);
   let expected=["grc"];
   if(book===2){
    if(row.number===51)expected=["grc","la"];
    else if(row.number>=52&&row.number<=112)expected=["la"];
    else if(row.number===113)expected=["la","grc"];
   }
   assert.deepEqual(parts.map(p=>p.lang),expected);
   if(parts.some(p=>p.lang==="la"))latinSections++;
   count++;
  }
 }
 assert.equal(count,616);
 assert.equal(latinSections,63);
});
test("Âncoras desconhecidas ficam com idioma indeterminado, sem reconstrução",()=>{
 for(const section of [51,113])
  assert.deepEqual(segments("apiao",2,section,"Trecho substituído"),
    [{lang:"und",text:"Trecho substituído"}]);
 assert.deepEqual(segments("guerra",1,51,"ὁ λόγος"),[{lang:"grc",text:"ὁ λόγος"}]);
});
test("Leitor possui segmentos por idioma, nota e ordem de carregamento",()=>{
 const reader=read("josefo/historia-reader.js");
 const html=read("index.html");
 assert.match(reader,/ScripturaJosephusLanguages\.segments/);
 assert.match(reader,/span\.lang=part\.lang/);
 assert.match(reader,/span\.textContent=part\.text/);
 assert.match(reader,/languageNote\.hidden=!mixed/);
 assert.match(html,/josefo\/linguagem-apiao\.js/);
 assert.ok(html.indexOf("josefo/linguagem-apiao.js")<html.indexOf("josefo/historia-reader.js"));
});
