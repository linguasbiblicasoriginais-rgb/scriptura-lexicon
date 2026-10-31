import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch({headless:true,args:["--no-sandbox"]});
const base = process.env.GREEK_BROWSER_URL || "http://127.0.0.1:8765";
const errors = [];
try {
  const page=await browser.newPage({viewport:{width:1280,height:850}});
  page.on("pageerror",error=>errors.push(error.message));
  await page.addInitScript(()=>{
    window.__externalReads=[];
    window.open=(url,target,features)=>{
      window.__externalReads.push({url,target,features});
      return {};
    };
  });
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  assert.equal((await page.locator("#site-section-title").textContent()).trim(),"Fílon de Alexandria");
  assert.match(await page.locator("#site-section-description").textContent(),/Perseus\/Scaife/);
  assert.equal(await page.locator("#greek-author").inputValue(),"filon");
  assert.equal(await page.locator("#greek-work").isDisabled(),false);
  assert.match(await page.locator("#greek-authors-status").textContent(),/Selecione uma obra/);
  const expected=new Map([
    ["De Opificio Mundi","tlg001"],
    ["De Abrahamo","tlg020"],
    ["Legatio Ad Gaium","tlg031"]
  ]);
  for (const [title,urn] of expected) {
    await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
    const list=page.locator("#lx-global-options");
    await list.waitFor({state:"visible"});
    assert.equal(await list.getByRole("option").count(),32);
    await list.getByRole("option",{name:title,exact:true}).click();
    assert.equal(await page.locator("#greek-work").inputValue(),"filon-"+urn);
    assert.match(await page.locator("#greek-authors-submit").textContent(),/Consultar no Perseus/);
    assert.equal(await page.locator("#greek-authors-reference-fields").locator("input").count(),0,
      "Obras externas não têm falsa referência de capítulo/seção local");
    assert.match(await page.locator("#greek-authors-status").textContent(),/não foi incorporado ao acervo local/i);
    await page.locator("#greek-authors-submit").click();
    const reads=await page.evaluate(()=>window.__externalReads);
    const last=reads.at(-1);
    assert.ok(last,"Clique não abriu a obra: "+title);
    assert.equal(last.url,"https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018."+urn+"/");
    assert.equal(last.target,"_blank");
    assert.match(last.features,/noopener/);
    assert.match(last.features,/noreferrer/);
  }
  await page.goto(base+"/#autores-gregos/filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  assert.equal(await page.locator("#greek-author").inputValue(),"filon");
  await page.goto(base+"/#autores-gregos/josefo",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===5);
  assert.equal(await page.locator("#greek-author").inputValue(),"josefo");
  assert.equal(await page.locator("#greek-work option").count(),5);
  assert.equal(await page.locator("#greek-work option[value^='filon-']").count(),0);
  await page.goto(base+"/#patristica",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===3);
  assert.equal(await page.locator("#greek-author").inputValue(),"clemente-alexandria");
  assert.equal(await page.locator("#greek-work option[value^='filon-']").count(),0);
  assert.deepEqual(errors,[]);
  console.log("FILON_EXTERNAL_CATALOG_PASS: 31 obras, links CTS, rotas, isolamento, origem Perseus, sem corpus simulado");
} finally {
  await browser.close();
}
