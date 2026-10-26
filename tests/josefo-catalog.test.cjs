"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const path=require("node:path");
const fs=require("node:fs");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
function file(pathname){return fs.readFileSync(path.join(root,pathname),"utf8");}
function execute(pathname,window){
 vm.runInNewContext(file(pathname),{window},{filename:pathname});
}
test("Antiguidades Judaicas: 20 livros e 256 capítulos tradicionais",()=>{
 const window={};
 execute("josefo/catalog.js",window);
 const books=window.ScripturaJosephusCatalog.books;
 assert.equal(books.length,20);
 assert.equal(Array.from(books).reduce((total,b)=>total+b.chapters,0),256);
 assert.deepEqual(Array.from(books,b=>b.number),Array.from({length:20},(_,i)=>i+1));
});
test("Os dois exemplos do livro I estão assinalados como excertos",()=>{
 const window={};
 execute("josefo/texts/ant-1-1.js",window);
 const units=window.ScripturaJosephusTexts.antiguidades[1][1];
 assert.deepEqual(Array.from(units,u=>u.number),[27,28]);
 assert.ok(units.every(u=>u.complete===false));
});
test("Leitor usa seções de Niese e realce no texto inteiro",()=>{
 assert.match(file("josefo/reader.js"),/scripture-verse-selected/);
 assert.match(file("josefo/reader.js"),/row[s]?\.find/);
 assert.match(file("josefo/reader.css"),/josefo-section-line\.scripture-verse-selected/);
});
test("Menu, URL e carregamento estão integrados",()=>{
 const sections=file("scriptures/sections.js");
 const index=file("index.html");
 assert.match(sections,/ScripturaJosephus\?\.show/);
 assert.match(sections,/ScripturaJosephus\?\.isJosephusHash/);
 assert.match(index,/josefo\/reader\.css/);
 assert.match(index,/josefo\/reader\.js/);
});
