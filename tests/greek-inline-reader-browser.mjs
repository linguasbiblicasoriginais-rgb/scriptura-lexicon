/* Escritores gregos: troca de autor, obra e seção com o leitor na MESMA tela. */
import assert from "node:assert/strict";
import {chromium} from "playwright";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const errors=[];
try{
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 page.on("pageerror",e=>errors.push(e.message));
 await page.goto(base+"/#autores-gregos/filon",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
 await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
 await page.locator("#lx-global-options").getByRole("option",{name:"De Gigantibus",exact:true}).click();
 await page.locator('#philo-gig-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#site-section-hub").isVisible(),true);
 assert.equal(await page.locator("#site-greek-authors-content").isVisible(),true);
 assert.equal(await page.locator("#greek-author").inputValue(),"filon");
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg007");
 assert.equal(await page.locator("#greek-inline-reader").isVisible(),true);
 assert.equal(await page.locator("#filon-gigantibus-reader").isVisible(),true);
 assert.equal(await page.locator("#filon-gigantibus-reader").evaluate(el=>el.parentElement.id),"greek-inline-reader");
 assert.match(await page.locator('#philo-gig-text [data-philo-section="1"]').textContent(),/Καὶ δὴ ἐγένετο/);
 await page.locator("#philo-gig-section").evaluate(el=>{
   el.value="67";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-gig-text [data-philo-section="67"]').waitFor({state:"visible"});
 assert.match(page.url(),/#filon\/de-gigantibus\/67$/);
 assert.equal(await page.locator("#site-section-hub").isVisible(),true);
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg007");
 await page.locator("#greek-work").evaluate(el=>{
   el.value="filon-tlg017";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-fuga-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#filon-gigantibus-reader").isVisible(),false);
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg017");
 assert.equal(await page.locator("#site-greek-authors-content").isVisible(),true);
 await page.locator("#greek-author").evaluate(el=>{
   el.value="josefo";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 assert.equal(await page.locator("#greek-author").inputValue(),"josefo");
 assert.equal(await page.locator("#greek-work option").count(),5);
 assert.equal(await page.locator("#greek-inline-reader").isVisible(),false);
 await page.locator("#greek-work").evaluate(el=>{
   el.value="josefo-vida";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator("#josefo-historia-reader").waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#josefo-historia-reader").evaluate(el=>el.parentElement.id),"greek-inline-reader");
 assert.equal(await page.locator("#greek-author").inputValue(),"josefo");
 assert.equal(await page.locator("#greek-work").inputValue(),"josefo-vida");
 assert.equal(await page.locator("#site-section-hub").isVisible(),true);
 await page.locator("#greek-author").evaluate(el=>{
   el.value="filon";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 assert.equal(await page.locator("#greek-inline-reader").isVisible(),false);
 assert.equal(await page.locator("#greek-work").inputValue(),"");
 await page.locator("#greek-work").evaluate(el=>{
   el.value="filon-tlg001";el.dispatchEvent(new Event("change",{bubbles:true}));
 });
 await page.locator('#philo-op-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#greek-inline-reader").isVisible(),true);
 assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
 assert.equal(await page.locator("#filon-opificio-reader").evaluate(el=>el.parentElement.id),"greek-inline-reader");
 assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg001");
 assert.match(page.url(),/#filon\/de-opificio-mundi\/1$/);
 // Um endereço compartilhado deve abrir a seção correta E manter a seleção.
 const direct=await browser.newPage({viewport:{width:1280,height:900}});
 direct.on("pageerror",e=>errors.push(e.message));
 await direct.goto(base+"/#filon/de-gigantibus/67",{waitUntil:"domcontentloaded"});
 await direct.locator('#philo-gig-text [data-philo-section="67"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await direct.locator("#site-section-hub").isVisible(),true);
 assert.equal(await direct.locator("#greek-author").inputValue(),"filon");
 assert.equal(await direct.locator("#greek-work").inputValue(),"filon-tlg007");
 assert.equal(await direct.locator("#philo-gig-section").inputValue(),"67");
 assert.equal(await direct.locator("#filon-gigantibus-reader").evaluate(el=>el.parentElement.id),"greek-inline-reader");
 await direct.close();
 const mobile=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 mobile.on("pageerror",e=>errors.push(e.message));
 await mobile.goto(base+"/#filon/de-gigantibus/67",{waitUntil:"domcontentloaded"});
 await mobile.locator('#philo-gig-text [data-philo-section="67"]').waitFor({state:"visible",timeout:30000});
 assert.equal(await mobile.locator("#site-greek-authors-content").isVisible(),true);
 assert.ok(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 await mobile.close();
 assert.deepEqual(errors,[]);
 console.log("GREEK_INLINE_PASS: mesmo painel, 2 autores, troca de obras/seções, URL direta, responsividade");
}finally{await browser.close();}
