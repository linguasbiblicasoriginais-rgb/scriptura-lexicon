/* Fílon — De Ebrietate: integridade TEI, edição, leitor, §1–§224. */
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {chromium} from "playwright";

const path="filon/data/tlg0018.tlg011.1st1K-grc1.xml";
const raw=readFileSync(path);
const sha=createHash("sha1").update("blob "+raw.length+"\0").update(raw).digest("hex");
assert.equal(sha,"db23b8d7901266863ba1203986d54c96604ce84f","O corpus TEI difere da fonte original");
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const errors=[];
try {
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",error=>errors.push(error.message));
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Ebrietate",exact:true}).click();
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg011");
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
 assert.equal(await page.locator("#greek-authors-status").textContent(),
   "De Ebrietate: texto grego integral com notas da edição Wendland (1897).");
 await page.locator('#philo-ebri-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.match(page.url(),/#filon\/de-ebrietate\/1$/);
 assert.equal(await page.locator("#philo-ebri-section option").count(),224);
 assert.equal(await page.locator("#philo-ebri-text .philo-section").count(),12);
 assert.match(await page.locator('#philo-ebri-text [data-philo-section="1"]').textContent(),/Τὰ μὲν τοῖς ἄλλοις φιλοσόφοις/);
 assert.equal(await page.locator("#philo-ebri-prev").isDisabled(),true);

 const metadata=await page.evaluate(async()=>{
  const response=await fetch("filon/data/tlg0018.tlg011.1st1K-grc1.xml");
  const doc=new DOMParser().parseFromString(await response.text(),"application/xml");
  const ns="http://www.tei-c.org/ns/1.0";
  const sections=[...doc.getElementsByTagNameNS(ns,"div")].filter(x=>x.getAttribute("type")==="section");
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
 assert.deepEqual(metadata,{error:false,count:224,sequential:true,title:"De ebrietate",
  year:"1897",volume:"2",notes:74,notesMarginal:2,notesFootnote:72});
 assert.ok(await page.locator("#philo-ebri-text .philo-notes").count()>0);
 await page.locator("#philo-ebri-text .philo-notes summary").first().click();
 assert.ok((await page.locator("#philo-ebri-text .philo-notes[open] p").first().textContent()).trim().length>5);
 for(const theme of ["dark","light"]){
  await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
  const css=await page.locator("#philo-ebri-text .philo-section-selected").evaluate(el=>{
   const cs=getComputedStyle(el);
   return {bg:cs.backgroundColor,border:cs.borderStyle,shadow:cs.boxShadow};
  });
  assert.notEqual(css.bg,"rgba(0, 0, 0, 0)");
  assert.equal(css.border,"none");
  assert.equal(css.shadow,"none");
 }
 await page.evaluate(()=>document.documentElement.dataset.theme="dark");
 await page.locator("#philo-ebri-next").click();
 assert.match(page.url(),/#filon\/de-ebrietate\/13$/);
 assert.equal(await page.locator('#philo-ebri-text [data-philo-section="13"]').count(),1);
 await page.locator("#philo-ebri-prev").click();
 assert.match(page.url(),/#filon\/de-ebrietate\/1$/);
 await page.locator("#philo-ebri-section").evaluate(node=>{
  node.value="224";node.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-ebri-text [data-philo-section="224"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-ebrietate\/224$/);
 assert.equal(await page.locator("#philo-ebri-text .philo-section").count(),8);
 assert.match(await page.locator("#philo-ebri-heading").textContent(),/217–224/);
 assert.equal(await page.locator("#philo-ebri-next").isDisabled(),true);
 assert.match(await page.locator('#philo-ebri-text [data-philo-section="224"]').textContent(),/ὧν ἀποτροπὴν/);
 assert.match(await page.locator("#filon-ebrietate-reader .philo-credit").textContent(),/Wendland/);
 assert.match(await page.locator("#filon-ebrietate-reader .philo-credit").textContent(),/1897/);
 assert.match(await page.locator("#filon-ebrietate-reader .philo-credit").textContent(),/CC BY-SA 4.0/);
 await page.reload({waitUntil:"domcontentloaded"});
 await page.locator('#philo-ebri-text [data-philo-section="224"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#philo-ebri-section").inputValue(),"224");
 await page.locator('#filon-ebrietate-reader [data-greek-author="filon"]').click();
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Abrahamo",exact:true}).click();
 await page.locator('#philo-text [data-philo-section="1"]').waitFor({state:"visible"});
 assert.equal(await page.locator("#filon-ebrietate-reader").isVisible(),false,
 "O leitor de De Ebrietate não deve se sobrepor ao de De Abrahamo");
 assert.deepEqual(errors,[]);
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on("pageerror",error=>errors.push(error.message));
 await mobile.goto(base+"/#filon/de-ebrietate/224",{waitUntil:"domcontentloaded"});
 await mobile.locator('#philo-ebri-text [data-philo-section="224"]').waitFor({state:"visible",timeout:30000});
 assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),
  "Texto grego não deve exceder a largura móvel");
 assert.deepEqual(errors,[]);
 console.log("FILON_EBRIETATE_PASS: SHA original, 224 seções, metadados 1897, aparato, rotas, temas, mobile");
 await mobile.close();
}finally{
 await browser.close();
}
