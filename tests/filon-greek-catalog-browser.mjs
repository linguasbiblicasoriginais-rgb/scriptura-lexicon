/* Catálogo Fílon: ordem TLG, títulos gregos/latinos, livros e navegação de 25 seções. */
import assert from "node:assert/strict";
import {chromium} from "playwright";

const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const errors=[];
try{
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",e=>errors.push(e.message));
 await page.addInitScript(()=>{
   window.__philoExternal=[];
   window.open=(url,target,features)=>{window.__philoExternal.push({url,target,features});return {};};
 });
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===39);
 const works=await page.evaluate(()=>window.ScripturaGreekAuthors.listWorks("filon"));
 assert.equal(works.length,38);
 const groups={2:3,19:2,22:2,24:4};
 const expected=[];
 for(let n=1;n<=31;n++){
   const tag="filon-tlg"+String(n).padStart(3,"0"),count=groups[n]||1;
   for(let book=1;book<=count;book++)expected.push(tag+(count>1?"-l"+book:""));
 }
 assert.deepEqual(works.map(w=>w.id),expected,"A ordem deve respeitar a lista de 31 tratados e livros I–IV");
 assert.equal(works[0].title,"Περὶ τῆς κατὰ μωυσέα κοσμοποιίας [De Opificio Mundi]");
 assert.equal(works.at(-1).title,"Πρεσβεία πρὸς Γάιον [Embaixada a Gaio]");
 for(const w of works)assert.match(w.title,/\[[^\]]+\](?: · Livro (?:I|II|III|IV))?$/);
 assert.equal(works.find(w=>w.id==="filon-tlg002-l3").title,
  "Νόμων ἱερῶν ἀλληγορίας τῶν μετὰ τὴν ἑξαήμερον [Legum Allegoriarum] · Livro III");
 assert.equal(works.find(w=>w.id==="filon-tlg019-l2").title,
  "Περὶ τοῦ θεοπέμπτους εἶναι τοὺς ὀνείρους [De Somniis] · Livro II");
 assert.equal(works.find(w=>w.id==="filon-tlg022-l2").title,
  "Περὶ τοῦ βίου Μωυσέως [De Vita Mosis] · Livro II");
 assert.equal(works.find(w=>w.id==="filon-tlg024-l4").title,
  "Περὶ τῶν ἐν μέρει διαταγμάτων εἰς δύο κεφάλαια τῶν δέκα λόγων [Specialibus Legibus] · Livro IV");

 // Textos ainda externos permanecem externos, sem falsa incorporação por livro.
 await page.locator("#greek-work").evaluate(el=>{
   el.value="filon-tlg024-l4";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg024-l4");
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),true);
 assert.match(await page.locator("#greek-authors-status").textContent(),/não foi incorporado/);
 await page.locator("#greek-authors-submit").click();
 const opened=await page.evaluate(()=>window.__philoExternal);
 assert.equal(opened.length,1);
 assert.equal(opened[0].url,"https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg024/");

 await page.goto(base+"/#filon/de-opificio-mundi/1",{waitUntil:"domcontentloaded"});
 await page.locator('#philo-op-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#filon-opificio-reader h1").textContent(),
  "Περὶ τῆς κατὰ μωυσέα κοσμοποιίας [De Opificio Mundi]");
 assert.equal(await page.locator("#philo-op-text .philo-section").count(),25);
 assert.equal(await page.locator("#filon-opificio-reader .scripture-reader-navigation").count(),2);
 assert.equal(await page.locator("#philo-op-prev").isDisabled(),true);
 assert.equal(await page.locator("#philo-op-prev-bottom").isDisabled(),true);
 assert.equal(await page.locator("#philo-op-next").isDisabled(),false);
 assert.equal(await page.locator("#philo-op-next-bottom").isDisabled(),false);
 await page.locator("#philo-op-next-bottom").click();
 await page.locator('#philo-op-text [data-philo-section="26"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-opificio-mundi\/26$/);
 assert.equal(await page.locator("#philo-op-text .philo-section").count(),25);
 assert.match(await page.locator("#philo-op-heading").textContent(),/26–50/);
 await page.locator("#philo-op-prev-bottom").click();
 await page.locator('#philo-op-text [data-philo-section="1"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-opificio-mundi\/1$/);
 await page.locator("#philo-op-section").evaluate(el=>{
   el.value="172";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-op-text [data-philo-section="172"]').waitFor({state:"visible"});
 assert.equal(await page.locator("#philo-op-text .philo-section").count(),22);
 assert.equal(await page.locator("#philo-op-next-bottom").isDisabled(),true);
 assert.equal(await page.locator("#philo-op-next").isDisabled(),true);
 assert.match(await page.locator("#philo-op-heading").textContent(),/151–172/);
 assert.deepEqual(errors,[]);
 console.log("FILON_GREEK_CATALOG_PASS: 31 tratados, 38 entradas, 11 leitores, títulos gregos, livros I–IV, 25 seções, dupla navegação");
}finally{await browser.close();}
