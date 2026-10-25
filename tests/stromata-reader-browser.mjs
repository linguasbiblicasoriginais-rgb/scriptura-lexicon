import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch({headless:true, args:["--no-sandbox"]});
const page = await browser.newPage();
const origin = "http://127.0.0.1:8765";
page.on("pageerror", e => console.error("BROWSER ERROR",e.message));
page.on("console", msg => {if(msg.type()==="error")console.error("CONSOLE ERROR",msg.text());});
async function verifyReady(context) {
  try {
    await page.waitForFunction(() => {
      const status = document.querySelector("#stromata-status")?.textContent||"";
      const text = document.querySelector("#stromata-text")?.textContent||"";
      return status.startsWith("Texto integral carregado") && text.trim().length > 30;
    },null,{timeout:60000});
  } catch (e) {
    console.error("Diagnóstico", context, await page.evaluate(()=>({
      status:document.querySelector("#stromata-status")?.textContent,
      options:[...document.querySelectorAll(".patristic-controls select")].map(e=>({id:e.id,options:e.options.length,value:e.value})),
      text:document.querySelector("#stromata-text")?.textContent?.slice(0,400)
    })));
    throw e;
  }
  const snapshot=await page.evaluate(()=>({
    bookOptions:document.querySelector("#stromata-book").options.length,
    chapterOptions:document.querySelector("#stromata-chapter").options.length,
    sectionOptions:document.querySelector("#stromata-section").options.length,
    text:document.querySelector("#stromata-text").textContent,
    reference:document.querySelector("#stromata-reference").textContent,
    articleAlign:getComputedStyle(document.querySelector(".patristic-text")).textAlign,
    paragraphAlign:getComputedStyle(document.querySelector(".patristic-text p")).textAlign
  }));
  assert.equal(snapshot.articleAlign,"justify","Todos os textos patrísticos devem ser justificados");
  assert.equal(snapshot.paragraphAlign,"justify","Os parágrafos patrísticos devem ser justificados");
  assert.equal(snapshot.bookOptions,8,"Oito livros devem ser selecionáveis");
  assert.ok(snapshot.chapterOptions>0,"Capítulos disponíveis");
  assert.ok(snapshot.sectionOptions>0,"Seções disponíveis");
  assert.match(snapshot.text,/[\u0370-\u03ff\u1f00-\u1fff]/,"Texto em grego original");
  console.log(context, "OK", {books:snapshot.bookOptions,chapters:snapshot.chapterOptions,sections:snapshot.sectionOptions,reference:snapshot.reference,textChars:snapshot.text.length});
}
try {
  await page.goto(origin+"/#patristica/stromata/1/1/1/1",{waitUntil:"domcontentloaded"});
  await verifyReady("Acesso por endereço direto");
  await page.selectOption("#stromata-book","2");
  await page.waitForFunction(()=>document.querySelector("#stromata-reference")?.textContent?.includes("II"),null,{timeout:5000});
  await verifyReady("Troca de livro I → II");
  await page.goto(origin+"/#patristica",{waitUntil:"domcontentloaded"});
  await page.locator('[data-patristic-work="stromata"]').click();
  await verifyReady("Acesso pelo cartão de Literatura patrística");
  console.log("STROMATA_BROWSE_SMOKE_PASS");
}finally{await browser.close();}
