/* Testes reais de leitura de arquivos, VM e fila de módulos, sem pacotes externos. */
"use strict";
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm");
const read=path=>fs.readFileSync(path,"utf8");
const html=read("index.html");
assert.equal([...html.matchAll(/<script\b[^>]+src="scriptures\/texts\//g)].length,0);
assert.ok(html.includes('src="scriptures/chapter-manifest.js"'));
assert.ok(html.includes('src="scriptures/chapter-loader.js"'));
let browserWindow={},failPath=null,requests=[];
let sandbox,ctx;
const document={
 visibilityState:"visible",
 createElement(name){assert.equal(name,"script");return {async:false,src:"",remove(){}};},
 head:{append(script){requests.push(script.src);queueMicrotask(()=>{
   if(failPath===script.src){failPath=null;script.onerror();return;}
   try{vm.runInContext(read(script.src),ctx,{filename:script.src});script.onload();}
   catch(error){script.onerror();throw error;}
 });}}
};
sandbox={window:browserWindow,document,navigator:{connection:{saveData:true}},Promise,console};
ctx=vm.createContext(sandbox);
vm.runInContext(read("scriptures/chapter-manifest.js"),ctx);
const m=browserWindow.ScripturaChapterManifest;
const expected={UXLC:929,LXX:1104,TR:260,SBLGNT:260,VUL:1334,VULJ:1362};
let seen=new Set();
for(const [edition,count] of Object.entries(expected)){
 let n=0;for(const [id,[base,total]] of Object.entries(m[edition])){
   assert.ok(/^[A-Z0-9_]+$/.test(id));
   for(let c=1;c<=total;c++){
     const path="scriptures/texts/"+base+"-"+c+".js";
     assert.ok(fs.existsSync(path),path);
     assert.ok(!seen.has(path),path);seen.add(path);n++;
   }
 }
 assert.equal(n,count,edition+" módulos"); 
}
assert.equal(seen.size,5249);
assert.deepEqual(JSON.parse(JSON.stringify(m.NA28)),{MAT:["na28-matthew",1]});
assert.deepEqual(JSON.parse(JSON.stringify(m.UBS5)),{MAT:["ubs5-matthew",1]});
vm.runInContext(read("scriptures/chapter-loader.js"),ctx);
const loader=browserWindow.ScripturaChapterLoader;
assert.equal(loader.location("LXX","GEN",1),"scriptures/texts/lxx-gen-1.js");
assert.equal(loader.location("LXX","JOS_A",1),null);
assert.equal(loader.location("VULJ","EST",10),"scriptures/texts/vulj-esther-10.js");
async function run(){
 const a=loader.load("UXLC","GEN",1),b=loader.load("UXLC","GEN",1);
 assert.equal(a,b,"Promessas simultâneas devem ser compartilhadas");
 const [one,two]=await Promise.all([a,b]);
 assert.equal(one,two);
 assert.ok(one["1"].includes("בְּרֵאשִׁ֖ית"));
 assert.equal(requests.filter(s=>s==="scriptures/texts/uxlc-genesis-1.js").length,1);
 await loader.load("UXLC","GEN",1);
 assert.equal(requests.filter(s=>s==="scriptures/texts/uxlc-genesis-1.js").length,1,"Cache não utilizado");
 for(const [ed,id,c] of [["LXX","GEN",1],["TR","MAT",1],["SBLGNT","MAT",1],
                          ["VUL","GEN",1],["VULJ","GEN",1]]){
   const verses=await loader.load(ed,id,c);
   assert.ok(Object.keys(verses).length>=10,ed);
 }
 for(const edition of ["NA28","UBS5"]){
   assert.equal(Object.keys(await loader.load(edition,"MAT",1)).length,25,edition+" amostra");
 }
 for(const ed of ["VUL","VULJ"]){
   const est=await loader.load(ed,"EST",10),sus=await loader.load(ed,"DAN",13),
         bel=await loader.load(ed,"DAN",14);
   assert.ok(est["1"]&&est["3"]&&est["4"]&&est["13"],"Ester íntegra "+ed);
   assert.ok(/Susann/i.test(Object.values(sus).slice(0,7).join(" ")),ed+" Susanna");
   assert.ok(/Bel|Babylon/i.test(Object.values(bel).slice(0,7).join(" ")),ed+" Bel");
 }
 failPath="scriptures/texts/uxlc-genesis-2.js";
 await assert.rejects(loader.load("UXLC","GEN",2),e=>e.code==="NETWORK_ERROR");
 assert.ok((await loader.load("UXLC","GEN",2))["1"],"Falha de rede não pode bloquear retentativa");
 await assert.rejects(loader.load("LXX","JOS_A",1),e=>e.code==="NOT_FOUND");
 for(let c=3;c<=20;c++)await loader.load("UXLC","GEN",c);
 const n=requests.filter(s=>s==="scriptures/texts/uxlc-genesis-1.js").length;
 await loader.load("UXLC","GEN",1);
 assert.equal(requests.filter(s=>s==="scriptures/texts/uxlc-genesis-1.js").length,n+1,"LRU não limitou memória");
 console.log("OK: 5249 caminhos, 6 corpora, cache/deduplicação, LRU, recuperação, Ester e Daniel.");
}
run().catch(error=>{console.error(error);process.exitCode=1;});
