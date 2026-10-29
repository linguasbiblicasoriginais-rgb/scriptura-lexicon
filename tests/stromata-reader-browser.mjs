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
      const status = document.querySelector("#stromata-status");
      const text = document.querySelector("#stromata-text")?.textContent||"";
      const reader = document.querySelector("#patristic-reader");
      return reader && !reader.hidden && status?.hidden && !status.textContent.trim() && text.trim().length > 30;
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
    paragraphAlign:getComputedStyle(document.querySelector(".patristic-text p")).textAlign,
    totalBlocks:document.querySelectorAll("#stromata-text .patristic-section-card").length,
    selectedBlocks:document.querySelectorAll("#stromata-text .patristic-section-card--selected").length,
    active: Array.from(document.querySelectorAll("#stromata-text p.patristic-subsection-selected")).map(p=>({
      number:p.querySelector(".patristic-submark")?.textContent.trim(),
      aria:p.getAttribute("aria-current"),
      background:getComputedStyle(p.closest(".patristic-section-card")).backgroundColor
    }))
  }));
  assert.equal(snapshot.articleAlign,"justify","Todos os textos patrísticos devem ser justificados");
  assert.equal(snapshot.paragraphAlign,"justify","Os parágrafos patrísticos devem ser justificados");
  assert.equal(snapshot.active.length,1,"Uma única subseção deve permanecer realçada");
  assert.equal(snapshot.selectedBlocks,1,"Somente uma moldura ativa");
  assert.equal(snapshot.totalBlocks,snapshot.sectionOptions,"Mostrar todas as seções do capítulo");
  assert.equal(snapshot.active[0].number,"1","A primeira subseção deve começar selecionada");
  assert.equal(snapshot.active[0].aria,"location","O realce deve indicar a localização acessível");
  assert.notEqual(snapshot.active[0].background,"rgba(0, 0, 0, 0)","Subseção escolhida deve ter fundo visível");
  assert.equal(snapshot.bookOptions,8,"Oito livros devem ser selecionáveis");
  assert.ok(snapshot.chapterOptions>0,"Capítulos disponíveis");
  assert.ok(snapshot.sectionOptions>0,"Seções disponíveis");
  assert.match(snapshot.text,/[\u0370-\u03ff\u1f00-\u1fff]/,"Texto em grego original");
  assert.equal(await page.locator("#stromata-status").isVisible(),false,"Sem mensagens de carga junto a Stromata");
  console.log(context, "OK", {books:snapshot.bookOptions,chapters:snapshot.chapterOptions,sections:snapshot.sectionOptions,reference:snapshot.reference,textChars:snapshot.text.length});
}
try {
  await page.goto(origin+"/#patristica/stromata/1/1/1/1",{waitUntil:"domcontentloaded"});
  await verifyReady("Acesso por endereço direto");
  // A quebra entre subseções deve produzir parágrafos individuais, com
  // o número no início da mesma linha que o conteúdo original.
  let testedSplit=false;
  for(const sec of ["1","2","3","4","5","6","7","8","9","10"]) {
    const option=page.locator('#stromata-section option[value="'+sec+'"]');
    if(await option.count()===0)continue;
    await page.selectOption("#stromata-section",sec);
    const n=await page.locator("#stromata-subsection option").count();
    if(n<2)continue;
    const split=await page.evaluate(()=>{
      const marks=Array.from(document.querySelectorAll("#stromata-text .patristic-section-card--selected .patristic-submark"));
      const options=document.querySelector("#stromata-subsection").options.length;
      return {
        options,
        marks:marks.map(m=>({
          n:m.textContent.trim(),
          atStart:m.closest("p")?.textContent?.trim().startsWith(m.textContent.trim())===true,
          paragraphClass:m.closest("p")?.classList.contains("patristic-subsection")===true,
          top:m.getBoundingClientRect().top
        }))
      };
    });
    assert.equal(split.marks.length,split.options,"Cada subseção deve ter uma única marca visível");
    assert.ok(split.marks.every(x=>x.atStart && x.paragraphClass),"Cada subseção precisa iniciar seu próprio parágrafo, com número e texto juntos");
    assert.equal(new Set(split.marks.map(x=>x.top)).size,split.marks.length,"As subseções devem começar em linhas distintas");
    await page.selectOption("#stromata-subsection","2");
    await page.waitForFunction(()=>document.querySelector("#stromata-reference")?.textContent?.endsWith(".2"),null,{timeout:5000});
    assert.ok(await page.locator("#stromata-subsection-2").isVisible(),"O seletor deve localizar a subseção 2 no texto");
    const active=await page.evaluate(()=>{
      const rows=Array.from(document.querySelectorAll("#stromata-text .patristic-section-card--selected p"));
      const chosen=rows.filter(p=>p.classList.contains("patristic-subsection-selected"));
      return {
        count:chosen.length,
        number:chosen[0]?.querySelector(".patristic-submark")?.textContent.trim(),
        aria:chosen[0]?.getAttribute("aria-current"),
        background:chosen[0]?getComputedStyle(chosen[0].closest(".patristic-section-card")).backgroundColor:null,
        otherBackground:document.querySelector("#stromata-text .patristic-section-card:not(.patristic-section-card--selected)")?getComputedStyle(document.querySelector("#stromata-text .patristic-section-card:not(.patristic-section-card--selected)")).backgroundColor:null,
        text:document.querySelector("#stromata-text")?.textContent
      };
    });
    assert.equal(active.count,1,"Somente a subseção 2 deve ficar destacada");
    assert.equal(active.number,"2","O realce deve acompanhar o seletor");
    assert.equal(active.aria,"location","A subseção 2 deve indicar localização atual");
    assert.notEqual(active.background,active.otherBackground,"Realce visual deve diferir dos parágrafos vizinhos");
    assert.match(active.text,/[\u0370-\u03ff\u1f00-\u1fff]/,"Texto grego deve permanecer após a seleção");
    console.log("Realce da subseção selecionada OK",active.number);
    testedSplit=true;
    console.log("Subseções em linhas individuais OK",split);
    break;
  }
  assert.ok(testedSplit,"Não foi possível encontrar uma seção com múltiplas subseções para testar");
  const second=page.locator('#stromata-text [data-patristic-section="2"]');
  if(await second.count()){
    await second.click();
    assert.equal(await page.locator("#stromata-section").inputValue(),"2","Clique muda a seção");
    assert.equal(await page.locator("#stromata-text .patristic-section-card--selected").getAttribute("aria-pressed"),"true");
    assert.match(await page.locator("#stromata-reference").textContent(),/§ 2/);
  }
  await page.selectOption("#stromata-book","2");
  await page.waitForFunction(()=>document.querySelector("#stromata-reference")?.textContent?.includes("II"),null,{timeout:5000});
  await verifyReady("Troca de livro I → II");
  await page.goto(origin+"/#autores-gregos/clemente-alexandria",{waitUntil:"domcontentloaded"});
  await page.locator("#greek-work").selectOption("clemente-stromata");
  await page.locator("#greek-authors-submit").click();
  await verifyReady("Acesso pelo cartão de Literatura patrística");
  console.log("STROMATA_BROWSE_SMOKE_PASS");
}finally{await browser.close();}
