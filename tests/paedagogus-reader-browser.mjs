import assert from "node:assert/strict";
import {chromium} from "playwright";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1200,height:900}});
page.on("pageerror",e=>console.error("PAGEERROR",e.message));
async function ready(message) {
 await page.waitForFunction(()=>{
  const status=document.querySelector("#paedagogus-status");
  const reader=document.querySelector("#paedagogus-reader");
  return reader&&!reader.hidden&&status?.hidden&&!status.textContent.trim()&&
    document.querySelector("#paedagogus-text")?.textContent?.length>30;
 },null,{timeout:60000});
 const data=await page.evaluate(()=>{
  const text=document.querySelector("#paedagogus-text");
  const choices=n=>document.querySelector("#paedagogus-"+n).options.length;
  const chosen=Array.from(text.querySelectorAll("p.patristic-subsection-selected"));
  return {
   books:choices("book"),chapters:choices("chapter"),sections:choices("section"),
   subs:choices("subsection"),reference:document.querySelector("#paedagogus-reference").textContent,
   greek:text.textContent,selected:chosen.length,
   number:chosen[0]?.querySelector(".patristic-submark")?.textContent,
   background:chosen[0]?getComputedStyle(chosen[0].closest(".patristic-section-card")).backgroundColor:null,
   justified:chosen[0]?getComputedStyle(chosen[0]).textAlign:null
  };
 });
 assert.equal(await page.locator("#paedagogus-status").isVisible(),false,"Sem logs junto ao Pedagogo");
 assert.equal(data.books,3,"Três livros do Pedagogo");
 assert.ok(data.chapters>=12,"Capítulos da edição");
 assert.equal(await page.locator("#paedagogus-text .patristic-section-card--selected").count(),1);
 assert.equal(await page.locator("#paedagogus-text .patristic-section-card").count(),data.sections);
 assert.match(data.greek,/[\u0370-\u03ff\u1f00-\u1fff]/,"Texto grego");
 assert.equal(data.selected,1,"Uma única subseção em destaque");
 assert.equal(data.justified,"justify","Justificação herdada do leitor patrístico");
 console.log(message,{books:data.books,chapters:data.chapters,sections:data.sections,subsections:data.subs,reference:data.reference,textChars:data.greek.length});
 return data;
}
try {
 const base="http://127.0.0.1:8765";
 await page.goto(base+"/#patristica/paedagogus/1/1/1/1",{waitUntil:"domcontentloaded"});
 const first=await ready("Acesso à seção I.1.1");
 assert.equal(first.subs,4,"Na primeira seção da edição há quatro subseções");
 assert.equal(first.number,"1","Subseção inicial marcada");
 assert.notEqual(first.background,"rgba(0, 0, 0, 0)","Subseção com fundo de realce");
 const before=await page.locator("#paedagogus-text").textContent();
 assert.equal(await page.locator("#paedagogus-text .patristic-section-number").first().textContent(),"§ 1");
 const nextSection=page.locator('#paedagogus-text [data-patristic-section="2"]');
 if(await nextSection.count()){
  await nextSection.click();
  assert.equal(await page.locator("#paedagogus-section").inputValue(),"2");
  await page.locator("#paedagogus-section").selectOption("1");
 }
 await page.selectOption("#paedagogus-subsection","2");
 await page.waitForFunction(()=>document.querySelector("#paedagogus-reference")?.textContent.endsWith(".2"),null,{timeout:5000});
 const selected2=await page.evaluate(()=>{
  const ps=Array.from(document.querySelectorAll("#paedagogus-text p"));
  const active=ps.filter(p=>p.classList.contains("patristic-subsection-selected"));
  return {count:active.length,number:active[0]?.querySelector(".patristic-submark")?.textContent,aria:active[0]?.getAttribute("aria-current"),text:document.querySelector("#paedagogus-text").textContent};
 });
 assert.equal(selected2.count,1);
 assert.equal(selected2.number,"2");
 assert.equal(selected2.aria,"location");
 assert.equal(selected2.text,before,"Alterar seleção não pode alterar o texto");
 console.log("Realce e subseções OK");
 await page.selectOption("#paedagogus-chapter","2");
 const sec=await ready("Capítulo II do Livro I");
 assert.match(sec.reference,/2 · § 4/,"Seção original 4 no capítulo II");
 await page.selectOption("#paedagogus-chapter","argument");
 await page.waitForFunction(()=>document.querySelector("#paedagogus-reference")?.textContent.includes("argumento"),null,{timeout:5000});
 const argument=await page.evaluate(()=>({
  sectionHidden:document.querySelector("#paedagogus-section-label").hidden,
  text:document.querySelector("#paedagogus-text").textContent
 }));
 assert.ok(argument.sectionHidden,"Argumento editorial não tem seção inventada");
 assert.match(argument.text,/[\u0370-\u03ff\u1f00-\u1fff]/);
 await page.selectOption("#paedagogus-book","2");
 await ready("Navegação para Livro II");
 await page.selectOption("#paedagogus-book","3");
 await ready("Navegação para Livro III");
 await page.goto(base+"/#patristica",{waitUntil:"domcontentloaded"});
 assert.equal(await page.locator("#greek-author").inputValue(),"clemente-alexandria");
 assert.deepEqual(await page.evaluate(()=>window.ScripturaGreekAuthors.listAuthors().map(x=>x.id)),["clemente-alexandria"]);
 assert.equal(await page.locator("#greek-work option").count(),3,"Stromata, Pedagogo e opção vazia");
 await page.locator("#greek-work").selectOption("clemente-paedagogus");
 await page.locator("#greek-authors-submit").click();
 await ready("Seleção pelo combobox de Literatura patrística");
 assert.equal(await page.locator("#paedagogus-text .patristic-section-card--selected").count(),1);
 await page.locator("#paedagogus-reader [data-site-section='patristica']").click();
 await page.locator("#site-greek-authors-content").waitFor({state:"visible"});
 assert.match(page.url(),/#patristica$/);
 await page.goto(base+"/#autores-gregos/clemente-alexandria",{waitUntil:"domcontentloaded"});
 await page.locator("#site-greek-authors-content").waitFor({state:"visible"});
 assert.match(page.url(),/#patristica$/,"URL antiga de Clemente redireciona para Literatura patrística");
 assert.equal(await page.locator("#greek-author").inputValue(),"clemente-alexandria");
 await page.locator("#greek-work").selectOption("clemente-stromata");
 await page.locator("#greek-authors-submit").click();
 await page.waitForFunction(()=>{
  const status=document.querySelector("#stromata-status");
  return status?.hidden&&!status.textContent.trim()&&document.querySelector("#stromata-text")?.textContent?.length>30;
 },null,{timeout:60000});
 assert.equal(await page.locator("#paedagogus-reader").isVisible(),false,"Obras patrísticas isoladas entre si");
 console.log("PAEDAGOGUS_BROWSER_PASS");
}finally{await browser.close();}
