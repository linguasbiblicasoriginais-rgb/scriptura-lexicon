import assert from "node:assert/strict";
import {chromium} from "playwright";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.AUDIT_URL||"http://127.0.0.1:8765/";
const errors=[];
try{
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",err=>errors.push(err.message));
 const fixtures=[
  ["UXLC","GEN","he"],["LXX","GEN","grc"],["TR","MAT","grc"],
  ["SBLGNT","MAT","grc"],["NA28","MAT","grc"],["UBS5","MAT","grc"],
  ["VUL","GEN","la"],["VULJ","GEN","la"]
 ];
 for(const [edition,book,lang] of fixtures){
  await page.goto(base+"#escrituras/"+edition+"/"+book+".1.1",{waitUntil:"domcontentloaded"});
  const paragraphs=page.locator("#scripture-text .scripture-paragraph");
  const verses=page.locator("#scripture-text [data-scripture-verse]");
  await verses.first().waitFor({state:"visible",timeout:30000});
  const count=await verses.count(),pCount=await paragraphs.count();
  assert.ok(pCount>0&&pCount<count,edition+" não agrupou versículos em parágrafos");
  assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
  assert.equal(await verses.first().locator("bdi").getAttribute("lang"),lang);
  assert.equal(await paragraphs.first().evaluate(node=>getComputedStyle(node).textAlign),"justify");
  assert.equal(await verses.first().evaluate(node=>getComputedStyle(node).cursor),"pointer");
  assert.equal(await page.locator("#scripture-text .scripture-verse-selected").evaluate(node=>getComputedStyle(node).borderInlineStartStyle),"solid");
  const second=page.locator('#scripture-text [data-scripture-verse="2"]');
  if(await second.count()){
   // A passagem do mouse não deve produzir uma segunda seleção.
   await second.locator(".scripture-word").first().hover();
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1,
    edition+" hover não deve selecionar outro versículo");
   assert.equal(await verses.first().getAttribute("aria-pressed"),"true");
   assert.equal(await second.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" hover de versículo não deve preencher o fundo");
   const word=second.locator(".scripture-word").first();
   assert.equal(await word.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" hover de palavra não deve preencher o fundo");
   // Clicar no corpo do versículo, e não no numeral, deve selecioná-lo.
   await second.locator("bdi").click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2",
    edition+" clicar no conteúdo deve selecionar o versículo");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   // O clique no elemento bdi pode abrir o popup se atingir uma palavra.
   if(await page.locator(".scripture-word-popup").isVisible())
    await page.locator(".scripture-word-popup-close").click();
   await word.click();
   assert.equal(await page.locator(".scripture-word-popup").isVisible(),true,
    edition+" minidicionário deve continuar abrindo ao clicar na palavra");
   assert.equal(await word.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" palavra com popup aberto não deve receber preenchimento");
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   await page.locator(".scripture-word-popup-close").click();
   // Ao clicar noutra palavra a seleção migra e continua única.
   await verses.first().locator(".scripture-word").first().click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"1",
    edition+" clique numa palavra também deve selecionar o versículo");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").getAttribute("data-scripture-verse"),"1");
   await page.locator(".scripture-word-popup-close").click();
   // Seleção pelo número permanece disponível.
   await second.locator(".scripture-verse-number").click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").getAttribute("data-scripture-verse"),"2");
   assert.match(page.url(),new RegExp(book+"\\.1\\.2$"));
   assert.equal(await page.locator("#scripture-reference").textContent(),book==="GEN"?"Gênesis 1:2":"Mateus 1:2");
   const initial=await second.locator("bdi").textContent();
   if(edition==="LXX")assert.ok(initial.startsWith("ἡ δὲ"),"LXX: segunda seção dentro do mesmo parágrafo deve começar com minúscula");
   if(lang==="grc"){
    assert.equal(await second.locator(".scripture-word").count()>0,true,"Popups gregos preservados");
    await second.locator(".scripture-word").first().click();
    assert.equal(await page.locator(".scripture-word-popup").isVisible(),true,edition+" perdeu minidicionário");
    assert.equal(await page.locator("#scripture-verse").inputValue(),"2","Popup deve preservar o versículo já selecionado");
    await page.locator(".scripture-word-popup-close").click();
   }
  }
  if(edition==="UXLC"){
   assert.equal(pCount,6,"Gênesis 1: divisões parashah registradas no UXLC");
   assert.equal(await page.locator(".scripture-parashah-open").count(),6);
   assert.equal(await paragraphs.first().getAttribute("data-paragraph-origin"),"fonte");
  }
 }
 await page.goto(base+"#escrituras/TR/MAT.1.2",{waitUntil:"domcontentloaded"});
 await page.locator("#scripture-text .scripture-paragraph").first().waitFor();
 assert.match(await page.locator('#scripture-text [data-scripture-verse="2"] bdi').textContent(),/^Ἀβρα/,"Nomes próprios não podem perder maiúscula");
 await page.goto(base+"#apocrifos/LXX/TOB.1.1",{waitUntil:"domcontentloaded"});
 await page.locator("#scripture-text .scripture-paragraph").first().waitFor();
 assert.ok(await page.locator(".scripture-paragraph").count()>0,"Apócrifos devem usar o mesmo leitor");
 const phone=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await phone.goto(base+"#escrituras/LXX/GEN.1.1",{waitUntil:"domcontentloaded"});
 await phone.locator(".scripture-paragraph").first().waitFor();
 assert.ok(await phone.evaluate(()=>document.documentElement.scrollWidth-innerWidth)<=1,"Sem overflow horizontal no celular");
 assert.deepEqual(errors,[],"Erros JavaScript no navegador");
 console.log("SCRIPTURE_PARAGRAPHS_BROWSER_PASS: 8 editions, source paragraphs, Greek case, word popups, click, apocrypha, mobile");
 await phone.close();
}finally{await browser.close();}
