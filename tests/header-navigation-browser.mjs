import assert from "node:assert/strict";
import {chromium} from "playwright";

const base=process.env.AUDIT_URL||"http://127.0.0.1:8765/";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const errors=[];
try{
 for(const viewport of [{width:1280,height:900},{width:390,height:760}]){
  const page=await browser.newPage({viewport});
  page.on("pageerror",e=>errors.push(e.message));
  await page.goto(base+"#inicio",{waitUntil:"domcontentloaded"});
  const header=page.locator("main > header.header");
  const menu=page.locator("#menu-toggle");
  const home=page.locator("#home-button");
  const logo=page.locator("#site-brand-logo");
  assert.equal(await header.count(),1);
  assert.equal(await menu.count(),1);
  assert.equal(await home.count(),1);
  assert.equal(await home.getAttribute("aria-label"),"Voltar à página inicial");
  assert.equal(await home.evaluate(node=>node.previousElementSibling?.id),"menu-toggle",
   "Ícone Início deve ficar imediatamente à direita do menu");
  assert.equal(await logo.count(),1);
  assert.equal(await logo.evaluate(node=>node.complete&&node.naturalWidth>0),true,
   "SVG de identidade visual deve carregar");
  assert.equal(await home.locator("img").evaluate(node=>node.complete&&node.naturalWidth>0),true,
   "SVG do botão Início deve carregar");
  assert.equal(await page.locator(".project-name,.project-subtitle,.project-short").count(),0,
   "Textos antigos do cabeçalho foram removidos");
  assert.equal(await page.getByText("← Página inicial",{exact:true}).count(),0);
  assert.equal(await header.evaluate(node=>getComputedStyle(node).position),"sticky");
  assert.equal(await page.locator('#site-section-cards .site-section-card').count(),7,
   "Página inicial deve conservar seus sete atalhos de biblioteca");

  await page.goto(base+"#autores-gregos",{waitUntil:"domcontentloaded"});
  await page.locator("#site-greek-authors-content").waitFor({state:"visible"});
  assert.equal(await page.locator("#site-section-cards").isVisible(),false,
   "Nenhum card deve ser exibido acima dos seletores de Escritores gregos");
  assert.equal(await page.locator("#site-section-cards").getAttribute("hidden"),"",
   "A ocultação dos cards deve acontecer no DOM, não só no CSS");
  assert.equal(await page.locator("#greek-author option[value='clemente-alexandria']").count(),0);
  assert.equal(await page.locator("#greek-author option[value='josefo']").count(),1);

  // Abrir um capítulo longo: os leitores devem manter o cabeçalho disponível.
  await page.goto(base+"#escrituras/LXX/GEN.1.1",{waitUntil:"domcontentloaded"});
  await page.locator("#scripture-text .scripture-paragraph").first().waitFor({state:"visible",timeout:30000});
  await page.evaluate(()=>window.scrollTo({top:Math.max(800,document.documentElement.scrollHeight-500),behavior:"instant"}));
  await page.waitForTimeout(180);
  const scroll=await page.evaluate(()=>{
    const el=document.querySelector(".header");
    return {top:el.getBoundingClientRect().top,y:scrollY,height:document.documentElement.scrollHeight};
  });
  assert.ok(scroll.height>viewport.height+140,"Capítulo de Gênesis deve permitir rolar o leitor");
  assert.ok(scroll.y>100,"A rolagem não deve ficar bloqueada");
  assert.ok(Math.abs(scroll.top)<2,"Cabeçalho deve acompanhar a rolagem: "+JSON.stringify(scroll));
  await menu.click();
  assert.equal(await page.locator("#dictionary-menu").getAttribute("aria-hidden"),"false",
   "Menu sanduíche deve funcionar enquanto o cabeçalho está fixado");
  await page.locator("#menu-close").click();
  await home.click();
  assert.match(page.url(),/#inicio$/,"Botão Início deve abrir a homepage");
  assert.equal(await page.locator("#site-section-title").textContent(),"Biblioteca Scriptura Lexicon");
  assert.equal(await page.locator("#site-section-cards").isVisible(),true,
   "Cartões de seções aparecem somente na homepage");
  await page.waitForFunction(()=>window.scrollY<5);

  await page.goto(base+"#patristica",{waitUntil:"domcontentloaded"});
  await page.locator("#site-greek-authors-content").waitFor({state:"visible"});
  assert.equal(await page.locator("#site-section-cards").isVisible(),false,
   "Literatura patrística não deve mostrar cartões de autores");
  assert.equal(await page.locator("#greek-author").inputValue(),"clemente-alexandria");
  assert.equal(await page.locator("#greek-work option[value='clemente-stromata']").count(),1);
  assert.equal(await page.locator("#greek-work option[value='clemente-paedagogus']").count(),1);
  await page.goto(base+"#escrituras",{waitUntil:"domcontentloaded"});
  assert.equal(await page.locator("#site-section-cards").isVisible(),true,
   "Cartões de edições bíblicas devem continuar funcionando");
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
  assert.ok(overflow<=1,"Não deve haver overflow horizontal no viewport "+viewport.width);
  await page.close();
 }
 assert.deepEqual(errors,[],"Erros JavaScript durante testes de cabeçalho e navegação");
 console.log("HEADER_NAVIGATION_PASS: sticky header, uploaded SVGs, home navigation, no author cards, desktop/mobile, 2 scopes");
}finally{
 await browser.close();
}
