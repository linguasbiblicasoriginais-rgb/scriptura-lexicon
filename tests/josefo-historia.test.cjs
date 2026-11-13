"use strict";
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const root=path.resolve(__dirname,"..");
function read(file){return fs.readFileSync(path.join(root,file),"utf8");}
function exec(file,win){vm.runInNewContext(read(file),{window:win},{filename:file});}
test("História dos Hebreus: todas as obras e todas as 5.047 seções da fonte (com suplência latina em Contra Ápio II)",()=>{
 const w={};exec("josefo/historia-catalog.js",w);
 const expected={guerra:{books:7,sections:[673,654,542,663,572,442,455],chapters:[33,22,10,11,13,10,11]},vida:{books:1,sections:[430],chapters:[]},apiao:{books:2,sections:[320,296],chapters:[]}};
 assert.deepEqual(Array.from(w.ScripturaJosephusHistoryCatalog.works,x=>x.key),["antiguidades","guerra","vida","apiao"]);
 for(const name of Object.keys(expected)){
  const e=expected[name];
  for(let i=1;i<=e.books;i++)exec("josefo/texts/"+name+"-"+i+".js",w);
  const data=w.ScripturaJosephusWorks[name];
  assert.equal(Object.keys(data).length,e.books);
  let total=0;
  for(let i=1;i<=e.books;i++){
   const book=data[i];
   assert.ok(book.title,"Título grego ausente "+name+"."+i);
   const rows=Object.values(book.chapters).flat();
   assert.equal(rows.length,e.sections[i-1]);
   assert.equal(book.count,e.sections[i-1]);
   if(name==="guerra"){
    assert.equal(Object.keys(book.chapters).filter(c=>Number(c)>0).length,e.chapters[i-1]);
    if(i===1)assert.equal(book.chapters[0].length,30);
    else assert.equal(book.chapters[0],undefined);
   }else{
    assert.equal(book.chapterMarkers,false);
    assert.deepEqual(Object.keys(book.chapters),["1"]);
   }
   for(let n=0;n<rows.length;n++){
    assert.equal(rows[n].number,n+1,"Seção faltante em "+name+" "+i+"."+(n+1));
    assert.ok(rows[n].text.trim(),"Seção sem texto em "+name+" "+i+"."+(n+1));
   }
   total+=book.count;
  }
  assert.equal(total,e.sections.reduce((x,y)=>x+y,0));
 }
 assert.equal(4001+430+616,5047);
});
test("Navegação e realce nos quatro textos gregos com preservação da biblioteca",()=>{
 const js=read("josefo/historia-reader.js");
 const sections=read("scriptures/sections.js");
 const html=read("index.html");
 const old=read("josefo/reader.js");
 assert.match(js,/scripture-verse-selected/);
 assert.match(js,/aria-pressed/);
 assert.match(js,/function chaptersFor/);
 assert.match(js,/function isHistoryHash/);
 assert.match(js,/function showFromHash/);
 assert.match(js,/script\.onerror/);
 assert.match(js,/josefo\/texts\//);
 assert.match(js,/if\(!w\.chapterMarked\)return \[1\]/);
 assert.match(js,/window\.ScripturaJosephus\?\.show/);
 assert.match(old,/ScripturaJosephusHistory\?\.hide/);
 assert.match(sections,/ScripturaJosephusHistory\?\.show/);
 assert.match(sections,/ScripturaJosephusHistory\?\.isHistoryHash/);
 assert.match(html,/josefo\/historia-catalog\.js/);
 assert.match(html,/josefo\/historia-reader\.js/);
 assert.match(read("josefo/reader.css"),/josefo-section-line\.scripture-verse-selected/);
});
