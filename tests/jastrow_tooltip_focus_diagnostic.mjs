import { chromium } from "playwright";
import assert from "node:assert/strict";

const browser=await chromium.launch({headless:true});
const p=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:"reduce"});
let jsErrors=[];p.on("pageerror",e=>jsErrors.push(e.message));
const log=[];
try{
 await p.goto("http://127.0.0.1:8765/#aramaico",{waitUntil:"domcontentloaded"});
 await p.locator('tr.search-row[data-source="JASTROW"]').first().waitFor({state:"attached"});
 await p.locator("#source-filter-button").click();
 await p.locator('#source-filter-options [role="option"][data-source="JASTROW"]').click();
 for(let i of [0,1,3,4,5,6,7,8,10,14,16,21,42,58,83,95,98]){
  let id="A"+String(i).padStart(5,"0"),card=p.locator("#entry-jastrow-"+id.toLowerCase());
  await p.locator("#search-input").fill(id);
  await p.locator('tr.search-row[data-target="entry-jastrow-'+id.toLowerCase()+'"]').click();
  const trigger=card.locator(".tooltip-trigger").first();
  let count=await card.locator(".tooltip-trigger").count();
  if(count===0){log.push({id,trigger:false});continue;}
  let metadata=await trigger.evaluate(el=>({node:el.tagName,tabIndex:el.tabIndex,text:el.textContent,visible:!!el.offsetParent,html:el.outerHTML.slice(0,380)}));
  await trigger.focus();
  let afterFocus=await p.evaluate(()=>({
   focused:document.activeElement?.outerHTML.slice(0,120),
   tooltipClass:document.querySelector("#lexical-tooltip")?.className,
   tooltipAttribute:document.querySelector("#lexical-tooltip")?.getAttribute("aria-hidden"),
   tooltipStyle:document.querySelector("#lexical-tooltip")&&({
     visibility:getComputedStyle(document.querySelector("#lexical-tooltip")).visibility,
     display:getComputedStyle(document.querySelector("#lexical-tooltip")).display,
     opacity:getComputedStyle(document.querySelector("#lexical-tooltip")).opacity
   })
  }));
  await p.waitForTimeout(100);
  let afterDelay=await p.locator('#lexical-tooltip.visible[aria-hidden="false"]').isVisible();
  if(!afterDelay){
    await trigger.blur();
    await trigger.focus();
  }
  let afterRefocus=await p.locator('#lexical-tooltip.visible[aria-hidden="false"]').isVisible();
  if(!afterRefocus) await trigger.click();
  let afterClick=await p.locator('#lexical-tooltip.visible[aria-hidden="false"]').isVisible();
  log.push({id,count,metadata,afterFocus,afterDelay,afterRefocus,afterClick});
 }
 console.log("JASTROW_TOOLTIP_DIAGNOSTIC "+JSON.stringify({log,errors:jsErrors}));
}catch(e){console.log("JASTROW_TOOLTIP_ERROR "+String(e.stack||e));process.exitCode=1;}finally{await browser.close();}
