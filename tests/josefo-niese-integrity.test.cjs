"use strict";
// Source-derived fingerprints: see josefo/niese-integrity.json.
// No network dependency: all primary Greek texts are local to this repository.
const {test}=require("node:test");
const assert=require("node:assert/strict");
const fs=require("node:fs");
const path=require("node:path");
const vm=require("node:vm");
const root=path.join(__dirname,"..");
const manifest=require("../josefo/niese-integrity.json");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const run=(p,w)=>vm.runInNewContext(read(p),{window:w},{filename:p});
const norm=t=>t.replace(/\s+/g," ").trim();
function fingerprint(text) {
 let value=0xcbf29ce484222325n;
 for(let i=0;i<text.length;i++)
  value=((value^BigInt(text.charCodeAt(i)))*0x100000001b3n)&0xffffffffffffffffn;
 return value.toString(16).padStart(16,"0");
}
function audit(work){
 const w={};
 run("josefo/catalog.js",w);
 run("josefo/historia-catalog.js",w);
 const source=manifest.works[work];
 const count=source.bookCount;
 if(work==="antiguidades")
  for(let i=1;i<=5;i++)run("josefo/texts/ant-group-"+i+".js",w);
 else
  for(let i=1;i<=7;i++)run("josefo/texts/guerra-"+i+".js",w);
 const all=work==="antiguidades"?w.ScripturaJosephusTexts.antiguidades:w.ScripturaJosephusWorks.guerra;
 const meta=work==="antiguidades"?w.ScripturaJosephusCatalog.books:
   w.ScripturaJosephusHistoryCatalog.works.find(x=>x.key==="guerra").chapters.map((chapters,i)=>({number:i+1,chapters}));
 assert.equal(Object.keys(all).length,count);
 assert.equal(meta.length,count);
 let allSections=0,allChapters=0;
 for(let i=1;i<=count;i++){
  const book=all[i],expected=source.books[i];
  assert.ok(book,"Missing book "+work+" "+i);
  assert.equal(book.book,i);
  assert.ok(book.title && book.title.trim());
  const keys=Object.keys(book.chapters).map(Number).filter(k=>k>0).sort((a,b)=>a-b);
  const chapterNumbers=Array.from({length:expected.chapters},(_,j)=>j+1);
  assert.deepEqual(keys,chapterNumbers,"Invalid Whiston chapters in "+work+" "+i);
  assert.equal(meta[i-1].chapters,expected.chapters);
  assert.equal(Boolean(book.chapters[0]),i===1,"Preface only in book I");
  if(i===1)assert.equal(book.chapters[0].length,work==="guerra"?30:26);
  const rows=Object.entries(book.chapters).flatMap(([c,items])=>{
   assert.ok(items.length>0,"Empty chapter "+work+" "+i+"."+c);
   return items.map(row=>({chapter:Number(c),number:row.number,text:norm(row.text)}));
  });
  assert.equal(rows.length,expected.sections);
  assert.equal(book.count,expected.sections);
  assert.equal(rows[0].number,expected.first);
  assert.equal(rows.at(-1).number,expected.last);
  for(let j=0;j<rows.length;j++){
   const row=rows[j];
   assert.equal(row.number,j+1,"Missing or duplicate section "+work+" "+i+"."+(j+1));
   assert.ok(row.text.length>0,"Empty Greek section "+work+" "+i+"."+(j+1));
  }
  const text=rows.map(row=>row.chapter+":"+row.number+"\t"+row.text+"\n").join("");
  assert.equal(fingerprint(text),expected.fingerprint,"TEI source fingerprint mismatch "+work+" "+i);
  if(work==="antiguidades"){
   assert.ok(book.argument && book.argument.text.trim(),"Missing argument "+i);
   assert.equal(fingerprint(norm(book.argument.title||"")+"\n"+norm(book.argument.text)),
     expected.argumentFingerprint,"Greek argument mismatch "+i);
  }
  allSections+=rows.length;allChapters+=keys.length;
 }
 assert.equal(allChapters,source.chapterCount);
 assert.equal(allSections,source.sectionCount);
}
test("Perseus/Niese: Antiguidades — 20 livros, 257 capítulos, 7.376 seções e 20 sinopses integrais",()=>audit("antiguidades"));
test("Perseus/Niese: Guerra — 7 livros, 110 capítulos, 4.001 seções integrais",()=>audit("guerra"));
test("Interface: quatro obras de Josefo em Escritores gregos e leitores independentes",()=>{
 const hub=read("scriptures/sections.js");
 const greek=read("scriptures/greek-authors.js");
 const war=read("josefo/historia-reader.js");
 const ant=read("josefo/reader.js");
 const css=read("josefo/reader.css");
 const html=read("index.html");
 assert.match(hub,/window\.ScripturaGreekAuthors\?\.setScope\(section\)/);
 assert.match(hub,/if\(authorId==="clemente-alexandria"\)/);
 assert.match(greek,/function setScope\(scope\)/);
 assert.match(greek,/activeScope==="patristica"/);
 assert.doesNotMatch(hub,/card\("Flávio Josefo"/);
 assert.doesNotMatch(hub,/card\("Clemente de Alexandria"/);
 assert.match(greek,/function openWork/);
 for(const name of ["josefo-antiguidades","josefo-guerra","josefo-vida","josefo-apiao"]){
   assert.ok(greek.includes('id:"'+name+'"'),"Obra não registrada: "+name);
   assert.ok(greek.includes('"'+name+'":'),"Abertura da obra não registrada: "+name);
 }
 assert.ok(war.includes('#josefo/guerra/'));
 assert.ok(war.includes('#josefo/historia/'));
 assert.ok(ant.includes('#josefo/antiguidades/'));
 for(const js of [war,ant]){
  assert.match(js,/scripture-verse-selected/);
  assert.match(js,/scrollIntoView/);
  assert.match(js,/function activateSection/);
  assert.match(js,/aria-pressed/);
  assert.match(js,/navigator.clipboard/);
  assert.match(js,/function adjacent/);
 }
 assert.match(css,/josefo-section-line\.scripture-verse-selected/);
 for(const script of ["josefo/catalog.js","josefo/reader.js","josefo/historia-catalog.js","josefo/historia-reader.js"])
  assert.ok(html.includes('src="'+script+'"'),"Missing script "+script);
});
