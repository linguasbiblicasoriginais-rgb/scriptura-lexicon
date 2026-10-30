import assert from "node:assert/strict";
import {chromium} from "playwright";
const browser=await chromium.launch({headless:true,args:["--no-sandbox"]});
const base=process.env.AUDIT_URL||"http://127.0.0.1:8765/";
const errors=[];
try{
 const page=await browser.newPage({viewport:{width:1280,height:850}});
 page.on("pageerror",err=>errors.push(err.message));
 const fixtures=[
  ["UXLC","GEN","he"],["LXX","GEN","grc"],["TR","MAT","grc"],
  ["SBLGNT","MAT","grc"],["NA28","MAT","grc"],["UBS5","MAT","grc"],
  ["VUL","GEN","la"],["VULJ","GEN","la"]
 ];
 for(const [edition,book,lang] of fixtures){
  await page.goto(base+"#escrituras/"+edition+"/"+book+".1.1",{waitUntil:"domcontentloaded"});
  const paragraphs=page.locator("#scripture-text .scripture-paragraph");
  const verses=page.locator("#scripture-text [data-scripture-verse]");
  await verses.first().waitFor({state:"visible",timeout:30000});
  const count=await verses.count(),pCount=await paragraphs.count();
  assert.ok(pCount>0&&pCount<count,edition+" não agrupou versículos em parágrafos");
  assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
  assert.equal(await verses.first().locator(".scripture-verse-lead bdi").getAttribute("lang"),lang);
  const numberSpacing=await verses.first().evaluate(node=>{
   const numeral=node.querySelector(".scripture-verse-number");
   const style=getComputedStyle(numeral);
   const rtl=node.dir==="rtl";
   const gap=parseFloat(rtl?style.marginLeft:style.marginRight);
   return {gap,paddingStart:getComputedStyle(node).paddingInlineStart,
     paddingEnd:getComputedStyle(node).paddingInlineEnd};
  });
  assert.ok(numberSpacing.gap>=4,edition+" número colado à primeira palavra");
  assert.equal(numberSpacing.paddingStart,"0px",edition+" recuo lateral do início");
  assert.equal(numberSpacing.paddingEnd,"0px",edition+" recuo lateral do fim");
  // O número integra uma faixa da borda, com contraste e sem sobreposição.
  // O tamanho da numeração não pode mudar quando a seleção troca de versículo.
  for(const theme of ["dark","light"]){
   await page.evaluate(value=>document.documentElement.dataset.theme=value,theme);
   const badge=await verses.first().evaluate(line=>{
    const number=line.querySelector(".scripture-verse-number");
    const read=()=>({
     background:getComputedStyle(number).backgroundColor,
     color:getComputedStyle(number).color,
     width:number.getBoundingClientRect().width,
     left:number.getBoundingClientRect().left,
     right:number.getBoundingClientRect().right,
     position:getComputedStyle(number).position,
     zIndex:getComputedStyle(number).zIndex,
     height:number.getBoundingClientRect().height,
     top:number.getBoundingClientRect().top,
     bottom:number.getBoundingClientRect().bottom,
     verseTop:line.getClientRects()[0].top,
     verseBottom:line.getClientRects()[0].bottom
    });
    const selected=read();
    line.classList.remove("scripture-verse-selected");
    const normal=read();
    line.classList.add("scripture-verse-selected");
    return {selected,normal};
   });
   assert.notEqual(badge.selected.background,"rgba(0, 0, 0, 0)",
    edition+" numeral selecionado precisa de faixa colorida no tema "+theme);
   assert.notEqual(badge.selected.color,badge.selected.background,
    edition+" numeral precisa de contraste no tema "+theme);
   assert.equal(badge.normal.background,"rgba(0, 0, 0, 0)",
    edition+" numeral não selecionado não deve ter faixa");
   assert.equal(badge.selected.position,"relative");
   assert.equal(badge.selected.zIndex,"1","Faixa do numeral deve ficar acima da moldura");
   // O emblema não deve superar a altura do contorno nem ficar desalinhado.
   const topDelta=Math.abs(badge.selected.top-badge.selected.verseTop);
   const bottomDelta=Math.abs(badge.selected.bottom-badge.selected.verseBottom);
   assert.ok(topDelta<=3&&bottomDelta<=3,
    edition+" faixa numérica com altura diferente da moldura, tema "+theme+
    ": "+JSON.stringify({topDelta,bottomDelta,selected:badge.selected}));
   assert.ok(Math.abs(badge.selected.width-badge.normal.width)<1,
    edition+" largura da faixa mudou com seleção");
   assert.ok(Math.abs(badge.selected.left-badge.normal.left)<1 &&
    Math.abs(badge.selected.right-badge.normal.right)<1,
    edition+" faixa deslocou a posição do número");
  }
  await page.evaluate(()=>document.documentElement.dataset.theme="dark");
  // Todo número deve formar uma unidade de quebra com a primeira palavra.
  assert.equal(await verses.locator(".scripture-verse-lead").count(),count,
   edition+" todos os versículos devem agrupar número e primeira palavra");
  await page.locator("#scripture-text").evaluate(node=>node.style.maxWidth="230px");
  const third=page.locator('#scripture-text [data-scripture-verse="3"]');
  if(await third.count()){
   const metrics=await third.evaluate(node=>{
    const lead=node.querySelector(".scripture-verse-lead");
    const number=lead?.querySelector(".scripture-verse-number");
    const firstWord=lead?.querySelector(".scripture-word-unit");
    const n=number?.getBoundingClientRect(),w=firstWord?.getBoundingClientRect();
    return {lead:lead?getComputedStyle(lead).display:null,
      whitespace:lead?getComputedStyle(lead).whiteSpace:null,
      grouped:!!(n&&w&&Math.max(n.top,w.top)<Math.min(n.bottom,w.bottom)),
      width:lead?.getBoundingClientRect().width||0,
      original:node.textContent};
   });
   assert.equal(metrics.lead,"inline-block",edition+" número não está em bloco inquebrável");
   assert.equal(metrics.whitespace,"nowrap",edition+" agrupamento permite quebra");
   assert.equal(metrics.grouped,true,edition+" capítulo 1:3 apresenta número órfão");
   assert.ok(metrics.width<=230,edition+" agrupamento transborda largura estreita");
  }
  await page.locator("#scripture-text").evaluate(node=>node.style.removeProperty("max-width"));
  assert.equal(await paragraphs.first().evaluate(node=>getComputedStyle(node).textAlign),"justify");
  // Uma quebra forçada permite comparar a posição inicial de dois versículos.
  // A marcação de seleção não pode modificar a margem de entrada da linha.
  const alignment=await paragraphs.first().evaluate(paragraph=>{
   const verses=[...paragraph.querySelectorAll(".scripture-verse-line")];
   if(verses.length<2)return null;
   const first=verses[0],last=verses.at(-1);
   const br=document.createElement("br");
   last.before(br);
   const rtl=paragraph.dir==="rtl";
   const position=node=>{
    const r=node.querySelector(".scripture-verse-lead").getBoundingClientRect();
    return rtl?r.right:r.left;
   };
   const original=[position(first),position(last)];
   const firstSelected=first.classList.contains("scripture-verse-selected");
   const lastSelected=last.classList.contains("scripture-verse-selected");
   first.classList.remove("scripture-verse-selected");
   last.classList.add("scripture-verse-selected");
   const switched=[position(first),position(last)];
   first.classList.toggle("scripture-verse-selected",firstSelected);
   last.classList.toggle("scripture-verse-selected",lastSelected);
   br.remove();
   return {original,switched};
  });
  assert.ok(alignment,edition+" sem versículos consecutivos para conferir alinhamento");
  for(const coords of [alignment.original,alignment.switched])
   assert.ok(Math.abs(coords[0]-coords[1])<=3,
    edition+" início irregular entre versículos: "+JSON.stringify(alignment));
  assert.equal(await verses.first().evaluate(node=>getComputedStyle(node).cursor),"pointer");
  assert.notEqual(await page.locator("#scripture-text .scripture-verse-selected").evaluate(node=>getComputedStyle(node).boxShadow),"none","Realce selecionado não deve deslocar o alinhamento");
  const second=page.locator('#scripture-text [data-scripture-verse="2"]');
  if(await second.count()){
   // A passagem do mouse não deve produzir uma segunda seleção.
   await second.locator(".scripture-word").first().hover();
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1,
    edition+" hover não deve selecionar outro versículo");
   assert.equal(await verses.first().getAttribute("aria-pressed"),"true");
   assert.equal(await second.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" hover de versículo não deve preencher o fundo");
   const word=second.locator(".scripture-word").first();
   assert.equal(await word.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" hover de palavra não deve preencher o fundo");
   // Clicar no corpo do versículo, e não no numeral, deve selecioná-lo.
   await second.locator(".scripture-verse-lead bdi").click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2",
    edition+" clicar no conteúdo deve selecionar o versículo");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   // O clique no elemento bdi pode abrir o popup se atingir uma palavra.
   if(await page.locator(".scripture-word-popup").isVisible())
    await page.locator(".scripture-word-popup-close").click();
   await word.click();
   assert.equal(await page.locator(".scripture-word-popup").isVisible(),true,
    edition+" minidicionário deve continuar abrindo ao clicar na palavra");
   assert.equal(await word.evaluate(node=>getComputedStyle(node).backgroundColor),"rgba(0, 0, 0, 0)",
    edition+" palavra com popup aberto não deve receber preenchimento");
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   await page.locator(".scripture-word-popup-close").click();
   // Ao clicar noutra palavra a seleção migra e continua única.
   await verses.first().locator(".scripture-word").first().click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"1",
    edition+" clique numa palavra também deve selecionar o versículo");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").count(),1);
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").getAttribute("data-scripture-verse"),"1");
   await page.locator(".scripture-word-popup-close").click();
   // Seleção pelo número permanece disponível.
   await second.locator(".scripture-verse-number").click();
   assert.equal(await page.locator("#scripture-verse").inputValue(),"2");
   assert.equal(await page.locator("#scripture-text .scripture-verse-selected").getAttribute("data-scripture-verse"),"2");
   assert.match(page.url(),new RegExp(book+"\\.1\\.2$"));
   assert.equal(await page.locator("#scripture-reference").textContent(),book==="GEN"?"Gênesis 1:2":"Mateus 1:2");
   const initial=await second.evaluate(node=>Array.from(node.querySelectorAll("bdi"),bdi=>bdi.textContent).join(""));
   if(edition==="LXX")assert.ok(initial.startsWith("ἡ δὲ"),"LXX: segunda seção dentro do mesmo parágrafo deve começar com minúscula");
   if(lang==="grc"){
    assert.equal(await second.locator(".scripture-word").count()>0,true,"Popups gregos preservados");
    await second.locator(".scripture-word").first().click();
    assert.equal(await page.locator(".scripture-word-popup").isVisible(),true,edition+" perdeu minidicionário");
    assert.equal(await page.locator("#scripture-verse").inputValue(),"2","Popup deve preservar o versículo já selecionado");
    await page.locator(".scripture-word-popup-close").click();
   }
  }
  if(edition==="UXLC"){
   assert.equal(pCount,6,"Gênesis 1: divisões parashah registradas no UXLC");
   assert.equal(await page.locator(".scripture-parashah-open").count(),6);
   assert.equal(await paragraphs.first().getAttribute("data-paragraph-origin"),"fonte");
  }
 }
 await page.goto(base+"#escrituras/TR/MAT.1.2",{waitUntil:"domcontentloaded"});
 await page.locator("#scripture-text .scripture-paragraph").first().waitFor();
 assert.match(await page.locator('#scripture-text [data-scripture-verse="2"] .scripture-verse-lead bdi').textContent(),/^Ἀβρα/,"Nomes próprios não podem perder maiúscula");
 await page.goto(base+"#apocrifos/LXX/TOB.1.1",{waitUntil:"domcontentloaded"});
 await page.locator("#scripture-text .scripture-paragraph").first().waitFor();
 assert.ok(await page.locator(".scripture-paragraph").count()>0,"Apócrifos devem usar o mesmo leitor");
 const phone=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
 await phone.goto(base+"#escrituras/LXX/GEN.1.1",{waitUntil:"domcontentloaded"});
 await phone.locator(".scripture-paragraph").first().waitFor();
 assert.ok(await phone.evaluate(()=>document.documentElement.scrollWidth-innerWidth)<=1,"Sem overflow horizontal no celular");
 assert.deepEqual(errors,[],"Erros JavaScript no navegador");
 console.log("SCRIPTURE_PARAGRAPHS_BROWSER_PASS: 8 editions, non-orphan numbers in RTL/LTR, source paragraphs, popups, click, apocrypha, mobile");
 await phone.close();
}finally{await browser.close();}
