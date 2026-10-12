#!/usr/bin/env node
"use strict";
/**
 * Evidence-based browser review of the 100 published JASTROW source IDs A00000..A00099.
 * Never issues AUDITORIA_CONCLUIDA: independent editorial/lexical and final merge
 * checks remain mandatory under regras/Rauditoria.txt.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const root=process.cwd(), out=path.join(root,"auditoria","evidencias-jastrow-lote-001");
fs.mkdirSync(out,{recursive:true});
const origin=JSON.parse(fs.readFileSync("lexicons/jastrow-source-lote-0001.json","utf8"));
const source=origin.records.slice(0,100);
const first=JSON.parse(fs.readFileSync("auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json","utf8")).records;
const second=JSON.parse(fs.readFileSync("auditoria/JASTROW-2026-10-11-lote-002-100-evidencias.json","utf8")).records;
const historical=[...first,...second], map=new Map(historical.map(e=>[e.id,e]));
const records=[];
for(let i=0;i<100;i++){
  const s=source[i],id="A"+String(i).padStart(5,"0"),e=map.get(id);
  assert.ok(e,"Parecer histórico faltando "+id);
  assert.ok(s.source_xml.includes('<entry id="'+id+'"'),"ID original "+id);
  const sha=crypto.createHash("sha256").update(s.source_xml,"utf8").digest("hex");
  assert.equal(sha,s.source_entry_sha256,"hash canônico "+id);
  assert.equal(sha,e.source_entry_sha256,"hash do parecer "+id);
  const xrefs=[...s.source_xml.matchAll(/<xref\b[^>]*rid="([^"]+)"/g)].map(x=>x[1]);
  records.push({
    id, ordinal:i+1,headword:s.headword,source_sha256:sha,
    historical_result:e.status??e.decision,
    historical_evidence_file:first.some(x=>x.id===id)?"auditoria/JASTROW-2026-10-11-auditoria-unica-100-evidencias.json":"auditoria/JASTROW-2026-10-11-lote-002-100-evidencias.json",
    source_xrefs:xrefs,
    source_has_notes:/<notes\b/.test(s.source_xml),
    source_has_pagebreak:/<pgbrk\b/.test(s.source_xml),
    source_multi_headword:(s.source_xml.match(/<head-word>/g)||[]).length>1,
    browser:{},
    atomic_status:"BLOQUEADA",
    mandatory_pending:[
      "ficha individual A-J com auditoria de referências e exemplos, preservando parecer filológico anterior",
      "prova de integração e conteúdo corrigido em chat-gpt-commits"
    ]
  });
}
const summary={schema:"JASTROW-100-atomic-attempt/1",date:"2026-10-12",scope:"A00000–A00099",
 source_commit:origin.source_commit,source_originals:100,source_hashes_verified:100,
 historical_reviews:100,historical_counts:{
 A:records.filter(r=>r.historical_result==="A").length,
 C:records.filter(r=>r.historical_result==="C").length,
 P:records.filter(r=>r.historical_result==="P").length
 },chrome_started:false,desktop:{},mobile:{},certified:0,errors:[],unverified:[]};
const base=process.env.JASTROW_TEST_URL || "http://127.0.0.1:8765/#aramaico";
let browser;
try{
 browser=await chromium.launch({headless:true});
 for(const device of [
  {name:"desktop",viewport:{width:1440,height:900},mobile:false},
  {name:"mobile",viewport:{width:390,height:844},mobile:true}
 ]){
  const context=await browser.newContext({viewport:device.viewport,isMobile:device.mobile,hasTouch:device.mobile,locale:"pt-BR",reducedMotion:"reduce"});
  const page=await context.newPage(),errors=[];
  page.on("pageerror",err=>errors.push(err.message));
  await page.goto(base,{waitUntil:"domcontentloaded",timeout:60000});
  await page.locator('tr.search-row[data-source="JASTROW"]').first().waitFor({state:"attached"});
  assert.equal(await page.locator('tr.search-row[data-source="JASTROW"]').count(),600);
  assert.equal(await page.locator('article.entry-card[data-source="JASTROW"]').count(),600);
  await page.locator("#source-filter-button").click();
  await page.locator('#source-filter-options [role="option"][data-source="JASTROW"]').click();
  const report={cards:0,pointer_opened:0,keyboard_opened:0,valid_source_rtl:0,tooltip_focus_tested:0,tooltip_focus_success:0,
   hrefs:0,broken_local_hrefs:[],suspicious_hrefs:[],axe_checked:0,axe_violations:[],runtime_errors:[],horizontal_overflows:[],failures:[]};
  for(const [i,record] of records.entries()){
   const id=record.id,target="entry-jastrow-"+id.toLowerCase(),row=page.locator('tr.search-row[data-target="'+target+'"]'),card=page.locator("#"+target);
   await page.locator("#search-input").fill(id);
   let ok={visibleInSearch:await row.isVisible(),pointer:false,keyboard:false,rtl:false,tooltipTriggerCount:0,htmlLinks:0,axeVerified:false};
   if(!ok.visibleInSearch)report.failures.push({id,problem:"search_missing"});
   else{
    await row.click();
    ok.pointer=await card.isVisible();
    if(ok.pointer)report.pointer_opened++;else report.failures.push({id,problem:"pointer_open_failed"});
    await row.focus();
    await page.keyboard.press("Enter");
    ok.keyboard=await card.isVisible();
    if(ok.keyboard)report.keyboard_opened++;else report.failures.push({id,problem:"keyboard_open_failed"});
   }
   if(ok.pointer&&ok.keyboard)report.cards++;
   const extra=await card.evaluate((el)=>{
    const title=el.querySelector("h1.entry-title");
    const rtls=el.querySelectorAll('bdi[dir="rtl"],[lang="he"][dir="rtl"]');
    const triggers=[...el.querySelectorAll(".tooltip-trigger")];
    const anchors=[...el.querySelectorAll("a[href]")].map(a=>a.getAttribute("href"));
    const invalid=anchors.filter(x=>!x || /^(?:javascript|data):/i.test(x));
    const local=anchors.filter(x=>x.startsWith("#") && x.length>1 && !document.getElementById(x.slice(1)));
    const overflow=el.scrollWidth>document.documentElement.clientWidth+5;
    return {rtl:!!title && title.lang==="he" && title.dir==="rtl" && rtls.length>0,
      triggerCount:triggers.length,anchors,invalid,local,overflow};
   });
   ok.rtl=extra.rtl;ok.tooltipTriggerCount=extra.triggerCount;ok.htmlLinks=extra.anchors.length;
   if(ok.rtl)report.valid_source_rtl++;else report.failures.push({id,problem:"rtl_or_lang"});
   report.hrefs+=extra.anchors.length;
   for(const x of extra.invalid)report.suspicious_hrefs.push({id,href:x});
   for(const x of extra.local)report.broken_local_hrefs.push({id,href:x});
   if(extra.overflow)report.horizontal_overflows.push(id);
   // Representative functionality for a tooltip *on every article that has one*.
   if(extra.triggerCount){
     const tooltip=card.locator(".tooltip-trigger").first();
     if(await tooltip.isVisible()){
       report.tooltip_focus_tested++;
       await tooltip.focus();
       if(await page.locator('#lexical-tooltip.visible[aria-hidden="false"]').isVisible())report.tooltip_focus_success++;
       else report.failures.push({id,problem:"tooltip_focus_did_not_open"});
     }
   }
   // Axe is expensive: representative sample at systematic 1-in-10 interval
   // on each viewport. The remaining 90 must NOT be marked as axe-tested.
   if(i%10===0){
    const axe=await new AxeBuilder({page}).include("#"+target)
      .withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa"]).analyze();
    ok.axeVerified=true;report.axe_checked++;
    for(const v of axe.violations)report.axe_violations.push({id,rule:v.id,impact:v.impact,nodes:v.nodes.length});
   }
   record.browser[device.name]=ok;
  }
  report.runtime_errors=errors;
  summary[device.name]=report;
  await page.screenshot({path:path.join(out,"jastrow-100-"+device.name+".png"),fullPage:false});
  await context.close();
  assert.equal(report.pointer_opened,100,"Faltam aberturas por ponteiro "+device.name);
  assert.equal(report.keyboard_opened,100,"Faltam aberturas por teclado "+device.name);
  assert.equal(report.valid_source_rtl,100,"RTL incorreto "+device.name);
  assert.deepEqual(report.runtime_errors,[],"Exceções JavaScript "+device.name);
  assert.equal(report.failures.length,0,"Falhas de navegação "+JSON.stringify(report.failures.slice(0,4)));
  assert.equal(report.suspicious_hrefs.length,0,"URLs proibidas");
  assert.equal(report.broken_local_hrefs.length,0,"Âncoras locais sem destino");
  assert.equal(report.axe_violations.filter(x=>x.impact==="critical"||x.impact==="serious").length,0,"Violações axe graves");
 }
 summary.chrome_started=true;
 summary.unverified=[
 "Axe-core amostra 10/100 por perfil: outros 90 não são WCAG certificados",
 "Verificação bibliográfica de URLs externas e páginas não executada",
 "Referências rabínicas, hipóteses e testemunhos externos não foram todos adjudicados",
 "Correções dos pareceres históricos não comprovadamente integradas",
 "Sem fichas editoriais A–J plenamente concluídas e sem PR merge confirmado"
 ];
}catch(e){summary.errors.push(String(e.stack||e));}finally{
 await browser?.close();
 fs.writeFileSync(path.join(out,"jastrow-100-matriz.json"),JSON.stringify({summary,records},null,2));
 console.log("JASTROW_100_ATOMIC_ATTEMPT "+JSON.stringify({summary,atomic:0}));
}
if(summary.errors.length)process.exitCode=1;
