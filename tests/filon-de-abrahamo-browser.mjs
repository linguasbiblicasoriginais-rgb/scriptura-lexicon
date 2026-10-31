/* De Abrahamo integral — integridade do TEI e leitor Chromium. */
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {chromium} from "playwright";

const path="filon/data/tlg0018.tlg020.1st1K-grc1.xml";
const raw=readFileSync(path);
const blob=createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
assert.equal(blob,"5d578cf23afeae6a2fb2e5317eb712d6121e0af8","TEI foi modificado na incorporação");
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const errors=[];
try {
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",error=>errors.push(error.message));
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Abrahamo",exact:true}).click();
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg020");
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),false,
  "O leitor de De Abrahamo não deve exigir botão Abrir texto integral");
 assert.equal(await page.locator("#greek-authors-status").textContent(),
  "De Abrahamo: texto grego integral com notas da edição Cohn (1902).");
 // O clique na opção do menu deve ter aberto imediatamente o leitor.
 await page.locator("#filon-abrahamo-reader").waitFor({state:"visible"});
 await page.locator("#philo-text .philo-section").first().waitFor({state:"visible",timeout:30000});
 assert.match(page.url(),/#filon\/de-abrahamo\/1$/);
 assert.equal(await page.locator("#philo-section option").count(),276);
 assert.equal(await page.locator("#philo-text .philo-section").count(),12);
 assert.equal(await page.locator('#philo-text [data-philo-section="1"]').count(),1);
 assert.match(await page.locator('#philo-text [data-philo-section="1"]').textContent(),/Τῶν ἱερῶν νόμων/);
 assert.equal(await page.locator('#philo-text [data-philo-section="1"] .philo-number').textContent(),"§ 1");
 assert.equal(await page.locator("#philo-prev").isDisabled(),true);
 const sourceStats=await page.evaluate(async()=>{
   const response=await fetch("filon/data/tlg0018.tlg020.1st1K-grc1.xml");
   const doc=new DOMParser().parseFromString(await response.text(),"application/xml");
   const ns="http://www.tei-c.org/ns/1.0";
   const sections=[...doc.getElementsByTagNameNS(ns,"div")].filter(x=>x.getAttribute("type")==="section");
   return {
     count:sections.length,
     first:sections[0]?.getAttribute("n"),
     last:sections.at(-1)?.getAttribute("n"),
     notes:doc.getElementsByTagNameNS(ns,"note").length,
     additions:doc.getElementsByTagNameNS(ns,"add").length,
     margins:[...doc.getElementsByTagNameNS(ns,"note")].filter(x=>x.getAttribute("type")==="marginal").length,
     error:doc.querySelector("parsererror")?.textContent
   };
 });
 assert.equal(sourceStats.error,undefined,"TEI deve ser XML válido");
 assert.equal(sourceStats.count,276);
 assert.equal(sourceStats.first,"1");
 assert.equal(sourceStats.last,"276");
 assert.ok(sourceStats.notes>50&&sourceStats.margins>0&&sourceStats.additions>0);
 assert.ok(await page.locator("#philo-text .philo-notes").count()>0,
  "Aparato crítico das seções iniciais deve ser visível em detalhes");
 await page.locator("#philo-text .philo-notes summary").first().click();
 assert.ok((await page.locator("#philo-text .philo-notes[open] p").first().textContent()).trim().length>5,
  "Notas marginais curtas também precisam ser preservadas");
 assert.ok((await page.locator("#philo-text .philo-notes p").allTextContents()).some(text=>text.length>100),
  "Aparato crítico extenso deve permanecer integral");
 for(const theme of ["dark","light"]){
  await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
  const css=await page.locator(".philo-section-selected").evaluate(el=>{
   const s=getComputedStyle(el);
   return {background:s.backgroundColor,border:s.borderStyle,shadow:s.boxShadow};
  });
  assert.notEqual(css.background,"rgba(0, 0, 0, 0)");
  assert.equal(css.border,"none");
  assert.equal(css.shadow,"none");
 }
 await page.evaluate(()=>document.documentElement.dataset.theme="dark");
 await page.locator("#philo-next").click();
 assert.match(page.url(),/#filon\/de-abrahamo\/13$/);
 assert.equal(await page.locator('#philo-text [data-philo-section="13"]').count(),1);
 await page.locator("#philo-prev").click();
 assert.match(page.url(),/#filon\/de-abrahamo\/1$/);
 await page.locator("#philo-section").evaluate(node=>{
  node.value="276";
  node.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-text [data-philo-section="276"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-abrahamo\/276$/);
 assert.equal(await page.locator("#philo-text .philo-section").count(),12);
 assert.match(await page.locator("#philo-heading").textContent(),/265–276/);
 assert.equal(await page.locator("#philo-next").isDisabled(),true);
 const ending=await page.locator('#philo-text [data-philo-section="276"] .philo-greek-paragraph').textContent();
 assert.ok(ending.trim().length>30&&/[\u0370-\u03ff\u1f00-\u1fff]/u.test(ending),
 "A seção §276 deve exibir o texto original completo");
 await page.reload({waitUntil:"domcontentloaded"});
 await page.locator('#philo-text [data-philo-section="276"]').waitFor({state:"visible"});
 assert.equal(await page.locator("#philo-section").inputValue(),"276");
 assert.match(await page.locator("#filon-abrahamo-reader .philo-credit").textContent(),/1902/);
 assert.match(await page.locator("#filon-abrahamo-reader .philo-credit").textContent(),/CC BY-SA 4.0/);
 assert.deepEqual(errors,[],"Erros JavaScript no desktop");
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on("pageerror",error=>errors.push(error.message));
 await mobile.goto(base+"/#filon/de-abrahamo/276",{waitUntil:"domcontentloaded"});
 await mobile.locator('#philo-text [data-philo-section="276"]').waitFor({state:"visible",timeout:30000});
 assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),
  "Texto grego não pode provocar rolagem horizontal no celular");
 assert.deepEqual(errors,[]);
 console.log("FILON_ABRAHAMO_PASS: TEI idêntico por SHA, 276 §§, notas, início/fim, dois temas, rotas, mobile");
 await mobile.close();
} finally {await browser.close();}
