"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const path=require("node:path");
const fs=require("node:fs");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
function file(name){return fs.readFileSync(path.join(root,name),"utf8");}
function execute(name,win){
 vm.runInNewContext(file(name),{window:win},{filename:name});
}
test("Perseus/Niese: 20 livros, 257 capítulos e 7.376 seções numeradas",()=>{
 const win={};
 execute("josefo/catalog.js",win);
 for(let group=1;group<=5;group++)execute("josefo/texts/ant-group-"+group+".js",win);
 const books=win.ScripturaJosephusCatalog.books;
 const all=win.ScripturaJosephusTexts.antiguidades;
 assert.equal(books.length,20);
 assert.equal(Array.from(books).reduce((n,b)=>n+b.chapters,0),257);
 assert.equal(books[19].chapters,12);
 assert.deepEqual(Array.from(books,b=>b.number),Array.from({length:20},(_,i)=>i+1));
 assert.equal(Object.keys(all).length,20);
 let total=0;
 for(const meta of books){
  const data=all[meta.number];
  assert.ok(data,"Falta livro "+meta.number);
  assert.equal(data.book,meta.number);
  assert.ok(data.title,"Falta título grego");
  if(meta.number===1)assert.ok(data.argument?.title,"Falta cabeçalho do prefácio");
  assert.ok(data.argument?.text,"Falta texto da sinopse");
  assert.equal(Object.keys(data.chapters).filter(k=>Number(k)>0).length,meta.chapters);
  if(meta.number===1)assert.equal(data.chapters[0].length,26);
  else assert.equal(data.chapters[0],undefined);
  const sections=Object.values(data.chapters).flat();
  assert.equal(sections.length,data.count);
  let counter=0;
  for(const section of sections){
   counter++;
   assert.equal(section.number,counter,"Seção ausente em Ant. "+meta.number+"."+counter);
   assert.ok(section.text.trim().length>0,"Texto vazio em Ant. "+meta.number+"."+counter);
  }
  total+=data.count;
 }
 assert.equal(total,7376);
 assert.match(all[1].chapters[1][0].text,/Ἐν ἀρχῇ ἔκτισεν/);
 assert.equal(all[1].chapters[1][0].number,27);
 assert.equal(all[20].chapters[12][0].number,259);
 assert.equal(all[20].chapters[12].at(-1).number,268);
});
test("Leitor preserva navegação de capítulos, sinopses, prefácio, seções e carregamento local",()=>{
 const reader=file("josefo/reader.js");
 const sections=file("scriptures/sections.js");
 const index=file("index.html");
 assert.match(reader,/scripture-verse-selected/);
 assert.match(reader,/scripture-verse-selected",selected/);
 assert.match(reader,/function chaptersFor/);
 assert.match(reader,/chaptersFor\(state\.book\)/);
 assert.match(reader,/Math\.ceil\(b\/4\)/);
 assert.match(reader,/ant-group-/);
 assert.match(reader,/script\.onerror/);
 assert.match(reader,/sourceData\(b\)/);
 assert.match(reader,/isJosephusHash/);
 assert.match(sections,/ScripturaJosephus\?\.show/);
 assert.match(sections,/ScripturaJosephus\?\.isJosephusHash/);
 assert.match(index,/josefo\/reader\.css/);
 assert.match(index,/josefo\/reader\.js/);
 assert.doesNotMatch(index,/josefo\/texts\/ant-1-1\.js/);
 assert.match(file("josefo/reader.css"),/josefo-section-line\.scripture-verse-selected/);
});