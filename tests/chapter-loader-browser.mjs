/* Playwright: verifica tráfego efetivo e navegação por URLs profundas. */
import assert from "node:assert/strict";
import {chromium} from "playwright";
const base=process.env.AUDIT_URL||"http://127.0.0.1:8765/";
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:390,height:844}});
const requests=[],errors=[];
page.on("request",request=>{if(new URL(request.url()).pathname.startsWith("/scriptures/texts/"))requests.push(new URL(request.url()).pathname);});
page.on("pageerror",error=>errors.push(error.message));
async function show(hash,edition,book,chapter){
 await page.goto(base+hash,{waitUntil:"domcontentloaded",timeout:45000});
 await page.locator("#scripture-text .scripture-verse-line").first().waitFor({timeout:20000});
 assert.equal(await page.locator("#scripture-edition").inputValue(),edition);
 assert.equal(await page.locator("#scripture-book").inputValue(),book);
 assert.equal(await page.locator("#scripture-chapter").inputValue(),String(chapter));
 const names=requests.filter(path=>path.startsWith("/scriptures/texts/"));
 assert.ok(names.length<=3,"Prefetch excessivo: "+JSON.stringify(names));
 requests.length=0;
}
try{
 await page.goto(base,{waitUntil:"domcontentloaded",timeout:45000});
 await page.waitForTimeout(500);
 assert.equal(requests.length,0,"Abertura inicial não deve baixar capítulos, inclusive NA28/UBS5");
 requests.length=0;
 await show("#escrituras/NA28/MAT.1.1","NA28","MAT",1);
 await show("#escrituras/UBS5/MAT.1.1","UBS5","MAT",1);
 await show("#escrituras/UXLC/GEN.1.1","UXLC","GEN",1);
 await show("#escrituras/LXX/GEN.1.1","LXX","GEN",1);
 await show("#escrituras/TR/MAT.1.1","TR","MAT",1);
 await show("#escrituras/SBLGNT/MAT.1.1","SBLGNT","MAT",1);
 await show("#escrituras/VUL/GEN.1.1","VUL","GEN",1);
 await show("#escrituras/VULJ/GEN.1.1","VULJ","GEN",1);
 await show("#apocrifos/LXX/TOB.1.1","LXX","TOB",1);
 await show("#apocrifos/VUL/EST_ADD.1.4","VUL","EST_ADD",1);
 let vv=await page.locator("#scripture-text .scripture-verse-number").allTextContents();
 assert.equal(vv[0].trim(),"4");assert.equal(vv.at(-1).trim(),"13");
 await show("#escrituras/VUL/EST.10.1","VUL","EST",10);
 vv=await page.locator("#scripture-text .scripture-verse-number").allTextContents();
 assert.deepEqual(vv.map(v=>v.trim()),["1","2","3"]);
 await show("#apocrifos/VULJ/DAN_SUS.1.1","VULJ","DAN_SUS",1);
 await show("#apocrifos/VULJ/DAN_BEL.1.1","VULJ","DAN_BEL",1);
 assert.deepEqual(errors,[],"Erros JS no navegador");
 console.log("OK: rede sob demanda, 6 edições, apócrifos, Ester, Daniel e navegador móvel.");
}finally{await browser.close();}
