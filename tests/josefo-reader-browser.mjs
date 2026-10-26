import assert from "node:assert/strict";
import {chromium,devices} from "playwright";
const base=process.env.JOSEFO_BROWSER_URL||"http://127.0.0.1:8765";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const errors=[];
async function ready(page,work){
 const selector=work==="guerra"?"#josefo-historia-text":"#josefo-text";
 await page.waitForFunction((sel)=>{
  const area=document.querySelector(sel);
  return area && !area.closest(".josefo-reader").hidden &&
   area.querySelectorAll(".josefo-section-line").length>0;
 },selector,{timeout:30000});
 return selector;
}
async function selected(page,selector,section){
 const s=page.locator(selector+" .josefo-section-line.scripture-verse-selected");
 assert.equal(await s.count(),1,"Exactly one highlighted section");
 assert.equal(await s.getAttribute("aria-pressed"),"true");
 assert.equal(await s.getAttribute("data-josefo-history-section")||await s.getAttribute("data-josefo-section"),String(section));
 const style=await s.evaluate(el=>({
  background:getComputedStyle(el).backgroundColor,
  border:getComputedStyle(el).borderInlineStartWidth,
  greek:el.querySelector(".josefo-greek")?.textContent||"",
  bounds:el.getBoundingClientRect().height
 }));
 assert.ok(style.greek.length>10);
 assert.ok(style.bounds>0);
 assert.notEqual(style.background,"rgba(0, 0, 0, 0)","Entire selected line must be highlighted");
 assert.ok(parseInt(style.border)>0);
}
try{
 const context=await browser.newContext({viewport:{width:1280,height:900},permissions:["clipboard-read","clipboard-write"]});
 const page=await context.newPage();page.on("pageerror",e=>errors.push(e.message));
 await page.goto(base+"/#josefo",{waitUntil:"domcontentloaded"});
 const cards=page.locator('[data-josefo-work]');
 await cards.first().waitFor();
 assert.equal(await cards.count(),2,"Exactly two Josefo cards");
 assert.equal(await cards.nth(0).getAttribute("data-josefo-work"),"antiguidades");
 assert.equal(await cards.nth(1).getAttribute("data-josefo-work"),"guerra");
 await cards.nth(0).click();
 await ready(page,"antiguidades");
 assert.equal(await page.locator("#josefo-book").locator("option").count(),20);
 assert.equal(await page.locator("#josefo-chapter").locator("option").count(),24,"Synopsis + preface + 22 chapters");
 assert.equal(await page.locator("#josefo-historia-reader").isVisible(),false);
 await selected(page,"#josefo-text",27);
 await page.locator('#josefo-text [data-josefo-section="28"]').click();
 await selected(page,"#josefo-text",28);
 assert.match(page.url(),/#josefo\/antiguidades\/1\/1\/28$/);
 assert.equal(await page.locator("#josefo-section").inputValue(),"28");
 const refAnt=await page.locator("#josefo-reference").textContent();
 assert.match(refAnt,/Ant\. 1\.28/);
 await page.locator("#josefo-copy").click();
 assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/Ant\. 1\.28/,"Antiquities citation copied into clipboard");
 await page.reload({waitUntil:"domcontentloaded"});
 await ready(page,"antiguidades");await selected(page,"#josefo-text",28);
 await page.goto(base+"/#josefo/antiguidades/1/22",{waitUntil:"domcontentloaded"});
 await ready(page,"antiguidades");
 await page.locator("#josefo-next").click();
 await page.waitForFunction(()=>document.querySelector("#josefo-book")?.value==="2" && document.querySelector("#josefo-chapter")?.value==="1");
 assert.match(page.url(),/#josefo\/antiguidades\/2\/1\//);
 await page.goto(base+"/#josefo/antiguidades/20/12/268",{waitUntil:"domcontentloaded"});
 await ready(page,"antiguidades");await selected(page,"#josefo-text",268);
 assert.match(await page.locator('#josefo-text [data-josefo-section="268"]').textContent(),/κεκώλυται/);
 await page.goto(base+"/#josefo/guerra/1/1/31",{waitUntil:"domcontentloaded"});
 await ready(page,"guerra");
 assert.equal(await page.locator("#josefo-historia-book").locator("option").count(),7);
 assert.equal(await page.locator("#josefo-historia-chapter").locator("option").count(),34,"Preface + 33 chapters");
 assert.equal(await page.locator("#josefo-reader").isVisible(),false);
 await selected(page,"#josefo-historia-text",31);
 await page.locator('#josefo-historia-text [data-josefo-history-section="32"]').click();
 await selected(page,"#josefo-historia-text",32);
 assert.match(page.url(),/#josefo\/guerra\/1\/1\/32$/);
 assert.equal(await page.locator("#josefo-historia-section").inputValue(),"32");
 assert.match(await page.locator("#josefo-historia-reference").textContent(),/Bell\. 1\.32/);
 await page.locator("#josefo-historia-copy").click();
 assert.match(await page.evaluate(()=>navigator.clipboard.readText()),/Bell\. 1\.32/,"War citation copied into clipboard");
 await page.reload({waitUntil:"domcontentloaded"});
 await ready(page,"guerra");await selected(page,"#josefo-historia-text",32);
 await page.goto(base+"/#josefo/historia/guerra/1/0/1",{waitUntil:"domcontentloaded"});
 await ready(page,"guerra");await selected(page,"#josefo-historia-text",1);
 await page.goto(base+"/#josefo/guerra/1/33",{waitUntil:"domcontentloaded"});
 await ready(page,"guerra");await page.locator("#josefo-historia-next").click();
 await page.waitForFunction(()=>document.querySelector("#josefo-historia-book")?.value==="2" && document.querySelector("#josefo-historia-chapter")?.value==="1");
 await page.goto(base+"/#josefo/guerra/7/11/455",{waitUntil:"domcontentloaded"});
 await ready(page,"guerra");await selected(page,"#josefo-historia-text",455);
 assert.match(await page.locator('#josefo-historia-text [data-josefo-history-section="455"]').textContent(),/ἐστοχασάμην/);
 await page.goto(base+"/#escrituras/UXLC/GEN.1.1",{waitUntil:"domcontentloaded"});
 await page.locator("#scripture-reader").waitFor({state:"visible",timeout:30000});
 assert.equal(await page.locator("#josefo-historia-reader").isVisible(),false);
 await context.close();
 const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 const phone=await mobile.newPage();phone.on("pageerror",e=>errors.push(e.message));
 await phone.goto(base+"/#josefo/guerra/7/11/455",{waitUntil:"domcontentloaded"});
 await ready(phone,"guerra");await selected(phone,"#josefo-historia-text",455);
 assert.equal(await phone.locator("#josefo-historia-book").inputValue(),"7");
 assert.equal(await phone.locator("#josefo-historia-chapter").inputValue(),"11");
 await phone.goto(base+"/#josefo/antiguidades/20/12/268",{waitUntil:"domcontentloaded"});
 await ready(phone,"antiguidades");await selected(phone,"#josefo-text",268);
 assert.equal(await phone.locator("#josefo-book").inputValue(),"20");
 assert.equal(await phone.locator("#josefo-chapter").inputValue(),"12");
 await mobile.close();
 assert.deepEqual(errors,[],"JavaScript errors in Chromium");
 console.log("JOSEFO_BROWSER_PASS: two cards, 27 books, direct URLs, whole-paragraph highlight, citation clipboard, chapter boundaries, both readers mobile, biblical regression");
}finally{await browser.close();}
