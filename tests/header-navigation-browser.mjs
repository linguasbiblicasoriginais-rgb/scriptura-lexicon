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
  const backToTop=page.locator("#back-to-top");
  assert.equal(await backToTop.count(),1,"Botão de retorno deve existir em todas as rotas");
  assert.equal(await backToTop.getAttribute("aria-label"),"Voltar ao topo da página");
  assert.equal(await backToTop.isVisible(),false,
   "Seta de retorno deve começar oculta no topo da página");
  assert.equal(await page.locator(".site-section-kicker").count(),0,
   "O rótulo Scriptura Lexicon · Biblioteca não deve existir em nenhuma seção");
  assert.equal(await page.getByText("Scriptura Lexicon · Biblioteca",{exact:true}).count(),0,
   "O rótulo redundante não deve aparecer na interface");
  assert.equal(await header.count(),1);
  assert.equal(await menu.count(),1);
  assert.equal(await home.count(),1);
  assert.equal(await home.getAttribute("aria-label"),"Voltar à página inicial");
  assert.equal(await home.evaluate(node=>node.previousElementSibling?.id),"menu-toggle",
   "Ícone Início deve ficar imediatamente à direita do menu");
  assert.equal(await logo.count(),1);
  assert.equal(await logo.evaluate(node=>node.complete&&node.naturalWidth>0),true,
   "SVG de identidade visual deve carregar");
  assert.equal(await home.locator(".home-icon").count(),1,
   "Botão Início deve conservar o SVG original aplicado como máscara");
  assert.notEqual(await home.locator(".home-icon").evaluate(node=>getComputedStyle(node).maskImage),"none",
   "SVG do Início deve acompanhar currentColor");
  const brandBounds=await page.locator(".site-brand").boundingBox();
  const actionsBounds=await page.locator(".header-actions").boundingBox();
  assert.ok(brandBounds&&actionsBounds&&brandBounds.y+brandBounds.height<=actionsBounds.y,
   "A logomarca deve ficar acima dos botões de navegação");
  assert.equal(await header.evaluate(node=>getComputedStyle(node).borderBottomWidth),"0px",
   "Cabeçalho sem moldura/borda");
  assert.equal(await header.evaluate(node=>getComputedStyle(node).boxShadow),"none",
   "Cabeçalho sem sombra de moldura");
  for(const theme of ["dark","light"]){
   await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
   const headerStyle=await header.evaluate(node=>({
    color:getComputedStyle(node).backgroundColor,
    image:getComputedStyle(node).backgroundImage
   }));
   assert.deepEqual(headerStyle,{color:"rgba(0, 0, 0, 0)",image:"none"},
    "Cabeçalho não deve ter preenchimento em tema "+theme);
   const logoVariant=page.locator(".site-brand-logo--"+theme);
   assert.equal(await logoVariant.isVisible(),true,"Logotipo do tema "+theme+" deve aparecer");
   assert.equal(await logoVariant.evaluate(node=>node.complete&&node.naturalWidth>0),true,
    "SVG do tema "+theme+" deve carregar");
  }
  await page.evaluate(()=>document.documentElement.dataset.theme="dark");
  assert.equal(await page.locator(".project-name,.project-subtitle,.project-short").count(),0,
   "Textos antigos do cabeçalho foram removidos");
  assert.equal(await page.getByText("← Página inicial",{exact:true}).count(),0);
  assert.equal(await header.evaluate(node=>getComputedStyle(node).position),"static",
   "Cabeçalho deve rolar naturalmente com a página");
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

  // Num capítulo longo, o cabeçalho deve sair da tela e o atalho deve surgir.
  await page.goto(base+"#escrituras/LXX/GEN.1.1",{waitUntil:"domcontentloaded"});
  await page.locator("#scripture-text .scripture-paragraph").first().waitFor({state:"visible",timeout:30000});
  await page.evaluate(()=>window.scrollTo({top:Math.max(800,document.documentElement.scrollHeight-500),behavior:"instant"}));
  await page.waitForFunction(()=>window.scrollY>320,{timeout:10000});
  const scroll=await page.evaluate(()=>{
    const el=document.querySelector(".header");
    return {bottom:el.getBoundingClientRect().bottom,y:scrollY,height:document.documentElement.scrollHeight};
  });
  assert.ok(scroll.height>viewport.height+140,"Capítulo de Gênesis deve permitir rolar o leitor");
  assert.ok(scroll.y>320,"A rolagem não deve ficar bloqueada");
  assert.ok(scroll.bottom<0,"Cabeçalho deve sair da tela: "+JSON.stringify(scroll));
  await backToTop.waitFor({state:"visible"});
  assert.equal(await backToTop.evaluate(node=>getComputedStyle(node).position),"fixed");
  const arrowBounds=await backToTop.boundingBox();
  assert.ok(arrowBounds &&
   arrowBounds.x>=viewport.width-100 &&
   arrowBounds.y>=viewport.height-100 &&
   arrowBounds.x+arrowBounds.width<=viewport.width &&
   arrowBounds.y+arrowBounds.height<=viewport.height,
   "Seta deve permanecer no canto inferior direito da tela");
  await backToTop.click();
  await page.waitForFunction(()=>window.scrollY<5,null,{timeout:10000});
  await backToTop.waitFor({state:"hidden"});
  assert.equal(await page.locator(".header").isVisible(),true,
   "Cabeçalho deve reaparecer no topo após retorno");
  await menu.click();
  assert.equal(await page.locator("#dictionary-menu").getAttribute("aria-hidden"),"false",
   "Menu sanduíche continua funcional ao voltar ao topo");
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
 console.log("HEADER_NAVIGATION_PASS: normal-flow header, floating back-to-top, uploaded SVGs, navigation, no author cards, desktop/mobile, 2 themes");
}finally{
 await browser.close();
}
