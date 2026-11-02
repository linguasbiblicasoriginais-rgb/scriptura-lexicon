/* Fílon — De Opificio Mundi: integridade TEI, edição, leitor, §1–§172. */
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {chromium} from "playwright";

const path="filon/data/tlg0018.tlg001.1st1K-grc1.xml";
const raw=readFileSync(path);
const sha=createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
assert.equal(sha,"b7a7546f5a27cc30a79976f29ff86c6afb297e5d","O corpus TEI difere da fonte original");
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const errors=[];
try {
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",error=>errors.push(error.message));
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Opificio Mundi",exact:true}).click();
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg001");
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
 assert.equal(await page.locator("#greek-authors-status").textContent(),
   "De Opificio Mundi: texto grego integral com notas da edição Cohn (1896).");
 await page.locator('#philo-op-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.match(page.url(),/#filon\/de-opificio-mundi\/1$/);
 assert.equal(await page.locator("#philo-op-section option").count(),172);
 assert.equal(await page.locator("#philo-op-text .philo-section").count(),12);
 assert.match(await page.locator('#philo-op-text [data-philo-section="1"]').textContent(),/Τῶν ἄλλων νομοθετῶν/);
 assert.equal(await page.locator("#philo-op-prev").isDisabled(),true);

 const metadata=await page.evaluate(async()=>{
  const response=await fetch("filon/data/tlg0018.tlg001.1st1K-grc1.xml");
  const doc=new DOMParser().parseFromString(await response.text(),"application/xml");
  const ns="http://www.tei-c.org/ns/1.0";
  const sections=[...doc.getElementsByTagNameNS(ns,"div")].filter(x=>x.getAttribute("type")==="textpart"&&x.getAttribute("subtype")==="section");
  const notes=[...doc.getElementsByTagNameNS(ns,"note")];
  return {
   error:!!doc.querySelector("parsererror"),
   count:sections.length,
   sequential:sections.every((s,i)=>s.getAttribute("n")===String(i+1)),
   title:doc.getElementsByTagNameNS(ns,"title")[0].textContent.trim(),
   year:doc.getElementsByTagNameNS(ns,"sourceDesc")[0].getElementsByTagNameNS(ns,"date")[0].textContent.trim(),
   volume:doc.getElementsByTagNameNS(ns,"biblScope")[0].textContent.trim(),
   notes:notes.length,
   notesMarginal:notes.filter(n=>n.getAttribute("type")==="marginal").length,
   notesFootnote:notes.filter(n=>n.getAttribute("type")==="footnote").length
  };
 });
 assert.deepEqual(metadata,{error:false,count:172,sequential:true,title:"De opificio mundi",
  year:"1896",volume:"1",notes:97,notesMarginal:2,notesFootnote:95});
 assert.ok(await page.locator("#philo-op-text .philo-notes").count()>0);
 await page.locator("#philo-op-text .philo-notes summary").first().click();
 assert.ok((await page.locator("#philo-op-text .philo-notes[open] p").first().textContent()).trim().length>5);
 for(const theme of ["dark","light"]){
  await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
  const css=await page.locator("#philo-op-text .philo-section-selected").evaluate(el=>{
   const cs=getComputedStyle(el);
   return {bg:cs.backgroundColor,border:cs.borderStyle,shadow:cs.boxShadow};
  });
  assert.notEqual(css.bg,"rgba(0, 0, 0, 0)");
  assert.equal(css.border,"none");
  assert.equal(css.shadow,"none");
 }
 await page.evaluate(()=>document.documentElement.dataset.theme="dark");
 await page.locator("#philo-op-next").click();
 assert.match(page.url(),/#filon\/de-opificio-mundi\/13$/);
 assert.equal(await page.locator('#philo-op-text [data-philo-section="13"]').count(),1);
 await page.locator("#philo-op-prev").click();
 assert.match(page.url(),/#filon\/de-opificio-mundi\/1$/);
 await page.locator("#philo-op-section").evaluate(node=>{
  node.value="172";node.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-op-text [data-philo-section="172"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-opificio-mundi\/172$/);
 assert.equal(await page.locator("#philo-op-text .philo-section").count(),4);
 assert.match(await page.locator("#philo-op-heading").textContent(),/172–172/);
 assert.equal(await page.locator("#philo-op-next").isDisabled(),true);
 assert.match(await page.locator('#philo-op-text [data-philo-section="172"]').textContent(),/ὁ δὴ ταῦτα/);
 assert.match(await page.locator("#filon-agricultura-reader .philo-credit").textContent(),/Cohn/);
 assert.match(await page.locator("#filon-agricultura-reader .philo-credit").textContent(),/1896/);
 assert.match(await page.locator("#filon-agricultura-reader .philo-credit").textContent(),/CC BY-SA 4.0/);
 await page.reload({waitUntil:"domcontentloaded"});
 await page.locator('#philo-op-text [data-philo-section="172"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#philo-op-section").inputValue(),"172");
 await page.locator('#filon-agricultura-reader [data-greek-author="filon"]').click();
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Abrahamo",exact:true}).click();
 await page.locator('#philo-text [data-philo-section="1"]').waitFor({state:"visible"});
 assert.equal(await page.locator("#filon-agricultura-reader").isVisible(),false,
 "O leitor de De Opificio Mundi não deve se sobrepor ao de De Abrahamo");
 assert.deepEqual(errors,[]);
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on("pageerror",error=>errors.push(error.message));
 await mobile.goto(base+"/#filon/de-opificio-mundi/172",{waitUntil:"domcontentloaded"});
 await mobile.locator('#philo-op-text [data-philo-section="172"]').waitFor({state:"visible",timeout:30000});
 assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),
  "Texto grego não deve exceder a largura móvel");
 assert.deepEqual(errors,[]);
 console.log("FILON_OPIFICIO_PASS: SHA original, 172 seções, metadados 1896, aparato, rotas, temas, mobile");
 await mobile.close();
}finally{
 await browser.close();
}
