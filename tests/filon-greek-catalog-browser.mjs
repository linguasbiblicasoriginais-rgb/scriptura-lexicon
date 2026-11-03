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
 // Metadados introdutórios: nunca exibir o total de seções da obra.
 const intros=await page.locator(".philo-reader .scripture-reader-intro").allTextContents();
 assert.equal(intros.length,11,"Cada um dos onze leitores locais deve apresentar uma introdução");
 for(const line of intros){
   assert.doesNotMatch(line,/divisão original em|\b\d+\s+seções\b|seções\s*\(§\)/i);
   assert.match(line,/ · edição .+\(\d{4}\)$/);
 }
 assert.ok(intros.includes("Sobre a criação do mundo · edição Leopold Cohn (1896)"));

 const groups={2:3,19:2,22:2,24:4};
 const expected=[];
 for(let n=1;n<=31;n++){
   const tag="filon-tlg"+String(n).padStart(3,"0"),count=groups[n]||1;
   for(let book=1;book<=count;book++)expected.push(tag+(count>1?"-l"+book:""));
 }
 assert.deepEqual(works.map(w=>w.id),expected,"A ordem deve respeitar a lista de 31 tratados e livros I–IV");
 assert.equal(works[0].title,"Περὶ τῆς κατὰ μωυσέα κοσμοποιίας [De opificio mundi]");
 assert.equal(works.at(-1).title,"Πρεσβεία πρὸς Γάιον [Legatio ad Gaium]");
 assert.equal(works.find(w=>w.id==="filon-tlg027").title,
  "Περὶ τοῦ πάντα σπουδαῖον ἐλεύθερον εἶναι [Quod omnis probus liber sit]");
 for(const w of works)assert.match(w.title,/\[[^\]]+\](?: · Livro (?:I|II|III|IV))?$/);
 assert.equal(works.find(w=>w.id==="filon-tlg002-l3").title,
  "Νόμων ἱερῶν ἀλληγορίας τῶν μετὰ τὴν ἑξαήμερον [Legum allegoriarum] · Livro III");
 assert.equal(works.find(w=>w.id==="filon-tlg019-l2").title,
  "Περὶ τοῦ θεοπέμπτους εἶναι τοὺς ὀνείρους [De somniis] · Livro II");
 assert.equal(works.find(w=>w.id==="filon-tlg022-l2").title,
  "Περὶ τοῦ βίου Μωυσέως [De vita Mosis] · Livro II");
 assert.equal(works.find(w=>w.id==="filon-tlg024-l4").title,
  "Περὶ τῶν ἐν μέρει διαταγμάτων εἰς δύο κεφάλαια τῶν δέκα λόγων [Specialibus legibus] · Livro IV");

 const expectedLatin=[
  "De opificio mundi","Legum allegoriarum","De cherubim",
  "De sacrificiis Abelis et Caini","Quod deterius potiori insidiari soleat",
  "De posteritate Caini","De gigantibus","Quod Deus sit immutabilis",
  "De agricultura","De plantatione","De ebrietate","De sobrietate",
  "De confusione linguarum","De migratione Abrahami",
  "Quis rerum divinarum heres sit","De congressu eruditionis gratia",
  "De fuga et inventione","De mutatione nominum","De somniis",
  "De Abrahamo","De Iosepho","De vita Mosis","De decalogo",
  "Specialibus legibus","De virtutibus",
  "De praemiis et poenis et exsecrationibus","Quod omnis probus liber sit",
  "De vita contemplativa","De aeternitate mundi","In Flaccum",
  "Legatio ad Gaium"
 ];
 const seenLatin=[];
 for(const w of works){
    const latin=/\[([^\]]+)\]/.exec(w.title)?.[1];
   if(!latin)throw new Error("Título sem latim: "+w.id);
   if(!seenLatin.includes(latin))seenLatin.push(latin);
 }
 assert.deepEqual(seenLatin,expectedLatin,"Capitalização exata dos 31 títulos latinos");

 // O seletor customizado conserva o valor do SELECT e aplica itálico
 // só ao elemento latino, mantendo o grego sem itálico.
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 const first=page.locator('#lx-global-options [role="option"]').nth(1);
 await first.waitFor({state:"visible"});
 assert.equal(await first.locator('em.lx-latin-title').textContent(),"De opificio mundi");
 assert.equal(await first.locator('[lang="grc"]').textContent(),"Περὶ τῆς κατὰ μωυσέα κοσμοποιίας");
 assert.equal(await first.locator('em.lx-latin-title').evaluate(el=>getComputedStyle(el).fontStyle),"italic");
 assert.notEqual(await first.locator('[lang="grc"]').evaluate(el=>getComputedStyle(el).fontStyle),"italic");
 await first.click();
 assert.equal(await page.locator('.lx-select[data-for="greek-work"] .lx-select-value em.lx-latin-title').textContent(),"De opificio mundi");
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===39);


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
  "Περὶ τῆς κατὰ μωυσέα κοσμοποιίας [De opificio mundi]");
 assert.equal(await page.locator('#filon-opificio-reader h1 em[lang="la"]').textContent(),"De opificio mundi");
 assert.equal(await page.locator('#filon-opificio-reader h1 em[lang="la"]').evaluate(el=>getComputedStyle(el).fontStyle),"italic");
 assert.notEqual(await page.locator('#filon-opificio-reader h1 [lang="grc"]').evaluate(el=>getComputedStyle(el).fontStyle),"italic");
 assert.equal(await page.locator('#filon-opificio-reader .scripture-reader-category em[lang="la"]').textContent(),"De opificio mundi");
 assert.equal(await page.locator('#philo-op-heading em[lang="la"]').textContent(),"De opificio mundi");
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
