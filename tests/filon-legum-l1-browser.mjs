/* Fílon — Legum allegoriarum I: leitura do grego original, 108 seções, aparato e navegação. */
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {chromium} from "playwright";

const path="filon/data/tlg0018.tlg002.1st1K-grc1.book1.xml";
const raw=readFileSync(path);
const sha=createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
assert.equal(sha,"92ef99aa4a9f16e6071d9d4d51defda58585cb2e","O extrato TEI não corresponde à versão verificada.");
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const errors=[];
try {
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 page.on("pageerror",error=>errors.push(error.message));
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===39);
 await page.locator("#greek-work").evaluate(el=>{
   el.value="filon-tlg002-l1";
   el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-leg1-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg002-l1");
 assert.equal(await page.locator("#greek-author").inputValue(),"filon");
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
 assert.match(page.url(),/#filon\/legum-allegoriarum-i\/1$/);
 assert.equal(await page.locator("#site-greek-authors-content").isVisible(),true);
 assert.equal(await page.locator("#greek-inline-reader").isVisible(),true);
 assert.equal(await page.locator("#filon-legum-l1-reader").evaluate(el=>el.parentElement.id),"greek-inline-reader");
 assert.equal(await page.locator("#philo-leg1-section option").count(),108);
 assert.equal(await page.locator("#philo-leg1-text .philo-section").count(),25);
 assert.match(await page.locator('#philo-leg1-text [data-philo-section="1"]').textContent(),/Καὶ συνετελέσθησαν ὁ οὐρανὸς/);
 assert.equal(await page.locator("#philo-leg1-prev").isDisabled(),true);
 const meta=await page.evaluate(async()=>{
   const response=await fetch("filon/data/tlg0018.tlg002.1st1K-grc1.book1.xml");
   const doc=new DOMParser().parseFromString(await response.text(),"application/xml");
   const ns="http://www.tei-c.org/ns/1.0";
   const divs=[...doc.getElementsByTagNameNS(ns,"div")];
   const books=divs.filter(x=>x.getAttribute("subtype")==="book");
   const sections=divs.filter(x=>x.getAttribute("subtype")==="section");
   const notes=[...doc.getElementsByTagNameNS(ns,"note")];
   return {
     error:!!doc.querySelector("parsererror"),
     books:books.map(x=>x.getAttribute("n")),
     sections:sections.length,
     sequential:sections.every((s,i)=>s.getAttribute("n")===String(i+1)),
     title:doc.getElementsByTagNameNS(ns,"title")[0].textContent.trim(),
     year:doc.getElementsByTagNameNS(ns,"sourceDesc")[0].getElementsByTagNameNS(ns,"date")[0].textContent.trim(),
     volume:doc.getElementsByTagNameNS(ns,"biblScope")[0].textContent.trim(),
     notes:notes.length,
     marginal:notes.filter(n=>n.getAttribute("type")==="marginal").length,
     footnote:notes.filter(n=>n.getAttribute("type")==="footnote").length
   };
 });
 assert.deepEqual(meta,{
   error:false,books:["1"],sections:108,sequential:true,
   title:"Legum allegoriarum libri i‑iii",year:"1896",volume:"1",
   notes:41,marginal:1,footnote:40
 });
 assert.ok(await page.locator("#philo-leg1-text .philo-notes").count()>0);
 await page.locator("#philo-leg1-text .philo-notes summary").first().click();
 assert.ok((await page.locator("#philo-leg1-text .philo-notes[open] p").first().textContent()).trim().length>5);
 for(const theme of ["dark","light"]){
   await page.evaluate(v=>document.documentElement.dataset.theme=v,theme);
   const c=await page.locator("#philo-leg1-text .philo-section-selected").evaluate(el=>getComputedStyle(el).backgroundColor);
   assert.notEqual(c,"rgba(0, 0, 0, 0)");
 }
 await page.locator("#philo-leg1-next").click();
 await page.locator('#philo-leg1-text [data-philo-section="26"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/legum-allegoriarum-i\/26$/);
 await page.locator("#philo-leg1-prev").click();
 await page.locator('#philo-leg1-text [data-philo-section="1"]').waitFor({state:"visible"});
 await page.locator("#philo-leg1-section").evaluate(el=>{
   el.value="108";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-leg1-text [data-philo-section="108"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/legum-allegoriarum-i\/108$/);
 assert.match(await page.locator('#philo-leg1-text [data-philo-section="108"]').textContent(),/ὁ Ἡράκλειτος/);
 assert.equal(await page.locator("#philo-leg1-text .philo-section").count(),8);
 assert.match(await page.locator("#philo-leg1-heading").textContent(),/101–108/);
 assert.equal(await page.locator("#philo-leg1-next").isDisabled(),true);
 await page.reload({waitUntil:"domcontentloaded"});
 await page.locator('#philo-leg1-text [data-philo-section="108"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#philo-leg1-section").inputValue(),"108");
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg002-l1");
 await page.locator("#greek-work").evaluate(el=>{
   el.value="filon-tlg001";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-op-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#filon-legum-l1-reader").isVisible(),false);
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on("pageerror",e=>errors.push(e.message));
 await mobile.goto(base+"/#filon/legum-allegoriarum-i/108",{waitUntil:"domcontentloaded"});
 await mobile.locator('#philo-leg1-text [data-philo-section="108"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await mobile.locator("#site-greek-authors-content").isVisible(),true);
 assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await mobile.close();
 assert.deepEqual(errors,[]);
 console.log("FILON_LEGUM_I_PASS: corpus, 108 seções, 41 notas, reader, URL, temas e mobile");
}finally{await browser.close();}
