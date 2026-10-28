/* Regressão dos escritores gregos — 6 obras, aliases, texto grego e integridade dos corpora. */
import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {createHash} from "node:crypto";
import {chromium} from "playwright";

const originalBlobs={
 "josefo/texts/ant-group-1.js":"1c73057ff076a21c0a5e76bb7c4374001175ecb7",
 "josefo/texts/ant-group-2.js":"63e30bd65d740707d61c3bd0fb54efdf4aa6dca5",
 "josefo/texts/ant-group-3.js":"2b943eb0d553a8b27a38273a2aba955a48406c35",
 "josefo/texts/ant-group-4.js":"83f07b695ca9c728a2c5d69baf865e584b0e24bb",
 "josefo/texts/ant-group-5.js":"71e45830ec34dd7b648535637c057dd014742ec5",
 "josefo/texts/apiao-1.js":"f1f733bde30029e2329ce716f86c9514b780e649",
 "josefo/texts/apiao-2.js":"f8594b8822223647d5459995cbed79c88dd4aa44",
 "josefo/texts/guerra-1.js":"5a282f5c938f65a47ce4c7091747acb7902db263",
 "josefo/texts/guerra-2.js":"50d83e04f76cd4477eac1a2689a13157dcf628a0",
 "josefo/texts/guerra-3.js":"9faeeae55237a3fd8173ad1ea124514778b297ed",
 "josefo/texts/guerra-4.js":"f9639b896c9cc2d94d67c4d545298b98e043b2ee",
 "josefo/texts/guerra-5.js":"287a53d9ea28d498ad0c08705a191857f6be5965",
 "josefo/texts/guerra-6.js":"88b2ea248ed4938344340fe3b712cdb456e9305e",
 "josefo/texts/guerra-7.js":"b296c1a4fe1edf1adf591071c96e355658493079",
 "josefo/texts/vida-1.js":"d97f699a3192977822e49f9e9a389344e9895351",
 "patristics/data/stromata.xml":"8faa61c8ff0f691071031c7c7a57bd8af9eee4ec",
 "patristics/data/paedagogus.xml":"f332e316c11153eee2f145aa34b0a5b1f1da265a"
};
for(const [path,expected] of Object.entries(originalBlobs)){
 const data=readFileSync(path);
 const actual=createHash("sha1").update("blob "+data.length+"\0").update(data).digest("hex");
 assert.equal(actual,expected,"Arquivo grego alterado: "+path);
}
console.log("PASS: 17 arquivos canônicos preservados por hash Git.");

const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const page=await browser.newPage({viewport:{width:1280,height:900}});
const errors=[];
page.on("pageerror",e=>errors.push(e.message));
const base=process.env.GREEK_BROWSER_URL||"http://127.0.0.1:8765";
const works=[
 ["josefo","josefo-antiguidades","#josefo-text"],
 ["josefo","josefo-guerra","#josefo-historia-text"],
 ["josefo","josefo-vida","#josefo-historia-text"],
 ["josefo","josefo-apiao","#josefo-historia-text"],
 ["clemente-alexandria","clemente-stromata","#stromata-text"],
 ["clemente-alexandria","clemente-paedagogus","#paedagogus-text"]
];
try{
 await page.goto(base+"/#autores-gregos",{waitUntil:"domcontentloaded"});
 assert.equal((await page.locator("#site-section-title").textContent()).trim(),"Escritores gregos");
 assert.equal(await page.locator('#site-section-cards [data-greek-author]').count(),3);
 assert.equal(await page.locator('nav.site-menu-nav [data-site-section="josefo"]').count(),0);
 assert.equal(await page.locator('nav.site-menu-nav [data-site-section="filon"]').count(),0);
 for(const [author,work,selector] of works){
  await page.goto(base+"/#autores-gregos/"+author,{waitUntil:"domcontentloaded"});
  await page.locator('#site-section-cards [data-greek-work="'+work+'"]').click();
  await page.waitForFunction(sel=>{
   const el=document.querySelector(sel);
   const text=el?.textContent||"";
   return el&&!el.closest(".josefo-reader, .patristic-reader")?.hidden
       &&text.trim().length>35&&/[\u0370-\u03ff\u1f00-\u1fff]/.test(text);
  },selector,{timeout:60000});
  const chars=(await page.locator(selector).textContent()).length;
  assert.ok(chars>35,"Texto grego ausente: "+work);
  console.log("PASS:",work,"texto grego visível, caracteres:",chars);
 }
 await page.goto(base+"/#josefo",{waitUntil:"domcontentloaded"});
 assert.equal(await page.locator('#site-section-cards [data-greek-work]').count(),4,"Alias de Josefo");
 await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
 assert.match(await page.locator("#site-section-description").textContent(),/não há obras/i);
 await page.goto(base+"/#josefo/antiguidades/1/1/27",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#josefo-text")?.textContent?.length>50,null,{timeout:60000});
 await page.goto(base+"/#patristica/stromata/1/1/1/1",{waitUntil:"domcontentloaded"});
 await page.waitForFunction(()=>document.querySelector("#stromata-text")?.textContent?.length>50,null,{timeout:60000});
 assert.deepEqual(errors,[],"Exceções de JavaScript na navegação");
 console.log("ESCRITORES_GREGOS_BROWSER_PASS: seis obras, 17 hashes, rotas e aliases.");
}finally{await browser.close();}
