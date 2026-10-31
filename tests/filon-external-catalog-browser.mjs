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
  assert.equal(await page.locator("#site-section-description").isVisible(),false);
  assert.equal(await page.locator("#site-philo-profile").isVisible(),true);
  assert.match(await page.locator(".site-philo-profile__bio").textContent(),/filósofo e exegeta judeu/);
  assert.match(await page.locator(".site-philo-profile__bio").textContent(),/Calígula/);
  assert.doesNotMatch(await page.locator(".site-philo-profile__bio").textContent(),/\d+ seções/);
  const portrait=page.locator(".site-philo-profile__portrait img");
  assert.match(await portrait.getAttribute("src"),/PhiloThevet\.jpg$/);
  assert.match(await portrait.getAttribute("alt"),/Representação artística/);
  assert.match(await page.locator(".site-philo-profile__portrait figcaption").textContent(),/1584/);
  assert.equal(await page.locator(".site-philo-profile__portrait a").getAttribute("href"),
    "https://commons.wikimedia.org/wiki/File:PhiloThevet.jpg");
  assert.equal(await page.locator("#greek-author").inputValue(),"filon");
  assert.equal(await page.locator("#greek-work").isDisabled(),false);
  assert.match(await page.locator("#greek-authors-status").textContent(),/Selecione uma obra/);
  const expected=new Map([
    ["De Opificio Mundi","tlg001"],
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
    assert.equal(await page.locator("#greek-authors-submit").isVisible(),true,
      "As demais obras de Fílon devem conservar o botão de consulta externa");
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
  // Dez obras gregas de Fílon são locais; as outras 21 permanecem externas.
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Abrahamo",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg020");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false,
    "De Abrahamo não deve exibir o botão intermediário");
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Abrahamo: texto grego integral com notas da edição Cohn (1902).");
  const externalCount=await page.evaluate(()=>window.__externalReads.length);
  // A seleção no menu já abre o texto, sem clique adicional.
  await page.locator('#philo-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Abrahamo deve abrir dentro do site, sem consulta externa");
  assert.match(page.url(),/#filon\/de-abrahamo\/1$/);
  // A segunda obra interna é aberta ao ser selecionada, sem botão intermediário.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Aeternitate Mundi",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg029");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Aeternitate Mundi: texto grego integral com notas da edição Cohn–Reiter (1915).");
  await page.locator('#philo-aet-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-aeternitate-mundi\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "A nova obra incorporada deve abrir localmente, sem consulta externa");
  // De Agricultura também abre no próprio site e mantém seu texto integral.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Agricultura",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg009");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Agricultura: texto grego integral com notas da edição Wendland (1897).");
  await page.locator('#philo-agr-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-agricultura\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Agricultura deve abrir como obra local, sem janela externa");
  // De Cherubim abre imediatamente o quarto leitor interno, sem botão.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Cherubim",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg003");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Cherubim: texto grego integral com notas da edição Cohn (1896).");
  await page.locator('#philo-cher-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-cherubim\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Cherubim não deve abrir consulta externa");
  // De Confusione Linguarum abre no leitor local imediatamente.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Confusione Linguarum",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg013");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Confusione Linguarum: texto grego integral com notas da edição Wendland (1897).");
  await page.locator('#philo-conf-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-confusione-linguarum\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Confusione Linguarum deve ser obra local, sem consulta externa");
  // De Congressu Eruditionis Gratia também abre imediatamente dentro do site.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Congressu Eruditionis Gratia",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg016");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Congressu Eruditionis Gratia: texto grego integral com notas da edição Wendland (1898).");
  await page.locator('#philo-cong-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-congressu-eruditionis-gratia\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Congressu não deve abrir consulta externa");
  // De Decalogo abre imediatamente o leitor integral sem janela externa.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Decalogo",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg023");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Decalogo: texto grego integral com notas da edição Cohn (1902).");
  await page.locator('#philo-deca-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-decalogo\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Decalogo deve ser obra interna, sem consulta externa");
  // De Ebrietate abre automaticamente o oitavo leitor interno.
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
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Ebrietate abre dentro do site, sem consulta externa");
  // De Fuga Et Inventione é a nona obra integrada, com acesso imediato.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Fuga Et Inventione",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg017");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Fuga Et Inventione: texto grego integral com notas da edição Wendland (1898).");
  await page.locator('#philo-fuga-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.match(page.url(),/#filon\/de-fuga-et-inventione\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount,
    "De Fuga Et Inventione abre dentro do site, sem consulta externa");
  // De Gigantibus também abre imediatamente no leitor local.
  await page.goto(base+"/#filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  await page.locator('.lx-select[data-for="greek-work"] .lx-select-button').click();
  await page.locator("#lx-global-options").getByRole("option",{name:"De Gigantibus",exact:true}).click();
  assert.equal(await page.locator("#greek-work").inputValue(),"filon-tlg007");
  assert.equal(await page.locator("#greek-authors-submit").isVisible(),false);
  assert.equal(await page.locator("#greek-authors-status").textContent(),
    "De Gigantibus: texto grego integral com notas da edição Wendland (1897).");
  await page.locator('#philo-gig-text [data-philo-section="1"]').waitFor({state:"visible",timeout:30000});
  assert.equal(await page.locator("#filon-gigantibus-reader").isVisible(),true);
  assert.match(await page.locator('#philo-gig-text [data-philo-section="1"]').innerText(),/Καὶ δὴ ἐγένετο/);
  assert.match(page.url(),/#filon\/de-gigantibus\/1$/);
  assert.equal(await page.evaluate(()=>window.__externalReads.length),externalCount);
  await page.goto(base+"/#autores-gregos/filon",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===32);
  assert.equal(await page.locator("#greek-author").inputValue(),"filon");
  await page.goto(base+"/#autores-gregos/josefo",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===5);
  assert.equal(await page.locator("#greek-author").inputValue(),"josefo");
  assert.equal(await page.locator("#greek-work option").count(),5);
  assert.equal(await page.locator("#greek-work option[value^='filon-']").count(),0);
  assert.equal(await page.locator("#site-philo-profile").isVisible(),false);
  await page.goto(base+"/#patristica",{waitUntil:"domcontentloaded"});
  await page.waitForFunction(()=>document.querySelector("#greek-work")?.options.length===3);
  assert.equal(await page.locator("#greek-author").inputValue(),"clemente-alexandria");
  assert.equal(await page.locator("#greek-work option[value^='filon-']").count(),0);
  assert.deepEqual(errors,[]);
  console.log("FILON_CATALOG_PASS: 31 obras, 10 internas, 21 externas, rotas, isolamento e proveniência");
} finally {
  await browser.close();
}
