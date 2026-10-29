/* Scriptura Lexicon — leitor patrístico de Stromata.
 * Texto grego original (Perseus, TEI/EpiDoc): https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/0189b9c8d8d1f148133f2f0af309b4ee90ea4332/data/tlg0555/tlg004/tlg0555.tlg004.perseus-grc2.xml
 * Edição-base: Otto Stählin, 1906–1909. CC BY-SA 4.0.
 * A fonte XML integral é preservada; a interface só apresenta a leitura corrente.
 */
(function () {
"use strict";
const SOURCE_URL = "https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/0189b9c8d8d1f148133f2f0af309b4ee90ea4332/data/tlg0555/tlg004/tlg0555.tlg004.perseus-grc2.xml";
const SOURCE_CTS = "urn:cts:greekLit:tlg0555.tlg004.perseus-grc2";
const LOCAL_URL = "patristics/data/stromata.xml";
const hub = document.getElementById("site-section-hub");
const cards = document.getElementById("site-section-cards");
if (!hub || !cards) return;
const root = document.createElement("section");
root.id = "patristic-reader";
root.className = "patristic-reader";
root.setAttribute("aria-label", "Leitor de Stromata");
root.hidden = true;
root.innerHTML = [
  '<button type="button" class="site-back-link" data-greek-author="clemente-alexandria">← Escritores gregos · Clemente de Alexandria</button>',
  '<h2 class="patristic-heading"><span lang="grc">Στρώματα</span> · Stromata</h2>',
  '<p class="patristic-context">Clemente de Alexandria · Texto grego · Edição Otto Stählin (1906–1909)</p>',
  '<div class="patristic-controls" role="group" aria-label="Navegação do texto">',
  '<label>Livro<select id="stromata-book"></select></label>',
  '<label>Capítulo<select id="stromata-chapter"></select></label>',
  '<label>Seção<select id="stromata-section"></select></label>',
  '<label id="stromata-subsection-label">Subseção<select id="stromata-subsection"></select></label>',
  '</div>',
  '<div class="patristic-steps"><button type="button" id="stromata-prev">← Anterior</button>',
  '<span id="stromata-reference" aria-live="polite"></span>',
  '<button type="button" id="stromata-next">Próxima →</button></div>',
  '<p id="stromata-status" role="status" aria-live="polite" hidden></p>',
  '<article id="stromata-text" class="patristic-text greek" lang="grc"></article>',
  '<p class="patristic-source"><strong>Fonte:</strong> <a id="stromata-perseus" target="_blank" rel="noopener noreferrer" href="https://atlas.perseus.tufts.edu/library/urn:cts:greekLit:tlg0555.tlg004/">Perseus Digital Library</a> · ',
  '<a id="stromata-xml" target="_blank" rel="noopener noreferrer" href="' + SOURCE_URL + '">TEI-XML integral</a> · ',
  '<a href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt-br" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. ',
  'Texto e marcação editorial provenientes da edição digital Perseus; sem tradução portuguesa. ',
  'Marcas de lacuna e de intervenção editorial são identificadas; consulte o XML para o aparato completo.</p>'
].join("");
hub.append(root);

const el = id => root.querySelector("#" + id);
const controls = {
  book: el("stromata-book"),
  chapter: el("stromata-chapter"),
  section: el("stromata-section"),
  subsection: el("stromata-subsection")
};
const content = el("stromata-text");
const status = el("stromata-status");
function setStatus(text){status.textContent=text||"";status.hidden=!status.textContent;}
const reference = el("stromata-reference");
const prev = el("stromata-prev"), next = el("stromata-next");
let books = [], selected = [1,1,1,1], loading = null, sequence = 0, externalSource = false;

function childParts(parent, subtype) {
  return Array.from(parent?.children || []).filter(x =>
    x.localName === "div" && x.getAttribute("subtype") === subtype);
}
function number(x) { return Number(x?.getAttribute("n")); }
function getBook(n) { return books.find(x => number(x) === Number(n)); }
function getChapter(b,c) { return childParts(getBook(b),"chapter").find(x => number(x)===Number(c)); }
function getSection(b,c,s) { return childParts(getChapter(b,c),"section").find(x => number(x)===Number(s)); }
function getSubsections(section) {
  if(!section) return [];
  const values = [1];
  section.querySelectorAll('milestone[unit="subsection"]').forEach(x=>{
    const n=number(x); if(Number.isInteger(n)&&n>1&&!values.includes(n))values.push(n);
  });
  return values;
}
function setOptions(select, numbers, label) {
  select.replaceChildren();
  numbers.forEach(n=>{
    const option=document.createElement("option");
    option.value=String(n);
    option.textContent=label(n);
    select.append(option);
  });
}
function choose(list, requested) { const n=Number(requested);return list.includes(n)?n:list[0]; }
function syncControls(b,c,s,sub) {
  const ids=books.map(number);
  b=choose(ids,b);
  setOptions(controls.book,ids,n=>"Livro "+roman(n));
  const chapters=childParts(getBook(b),"chapter").map(number);
  c=choose(chapters,c);
  setOptions(controls.chapter,chapters,n=>"Capítulo "+n);
  const secs=childParts(getChapter(b,c),"section").map(number);
  s=choose(secs,s);
  setOptions(controls.section,secs,n=>"Seção "+n);
  const subs=getSubsections(getSection(b,c,s));
  sub=choose(subs,sub);
  setOptions(controls.subsection,subs,n=>"Subseção "+n);
  root.querySelector("#stromata-subsection-label").hidden=subs.length<2;
  controls.book.value=String(b);
  controls.chapter.value=String(c);
  controls.section.value=String(s);
  controls.subsection.value=String(sub);
  selected=[b,c,s,sub];
}
function roman(n) {
  const v=["","I","II","III","IV","V","VI","VII","VIII"];
  return v[n]||String(n);
}
async function readXml(url) {
  const response=await fetch(url);
  if(!response.ok)throw new Error("HTTP "+response.status);
  const text=await response.text();
  if(text.length<1000000)throw new Error("Arquivo incompleto");
  const doc=new DOMParser().parseFromString(text,"application/xml");
  if(doc.querySelector("parsererror"))throw new Error("XML inválido");
  const edition=Array.from(doc.getElementsByTagName("div")).find(x=>x.getAttribute("type")==="edition");
  const parts=childParts(edition,"book");
  const nums=parts.map(number);
  if(nums.length!==8||nums.join(",")!=="1,2,3,4,5,6,7,8")throw new Error("Edição incompleta: esperados os oito livros");
  return parts;
}
function load() {
  if(books.length===8)return Promise.resolve();
  if(!loading)loading=(async()=>{
    try { books=await readXml(LOCAL_URL);externalSource=false; }
    catch(localError) {
      books=await readXml(SOURCE_URL);externalSource=true;
    }
  })().catch(err=>{loading=null;throw err;});
  return loading;
}
function editorial(text,klass,title) {
  const span=document.createElement("span");
  span.className=klass;span.title=title;
  span.textContent=text;return span;
}
function renderNode(node,parent) {
  if(node.nodeType===3){parent.append(document.createTextNode(node.nodeValue));return;}
  if(node.nodeType!==1)return;
  const tag=node.localName;
  if(tag==="pb"||tag==="lb"||tag==="cb"){parent.append(document.createTextNode(" "));return;}
  if(tag==="note")return; // preservado no XML, mas fora do corpo de leitura
  if(tag==="gap"){parent.append(editorial("⟦lacuna⟧","patristic-gap","Lacuna registrada na edição TEI"));return;}
  if(tag==="milestone") {
    if(node.getAttribute("unit")==="subsection") {
      const n=number(node);
      if(Number.isInteger(n)){
        const mark=editorial(String(n),"patristic-submark","Subseção "+n);
        mark.id="stromata-subsection-"+n;
        parent.append(mark);
      }
    }
    return;
  }
  if(tag==="app") {
    const lem=Array.from(node.children).find(x=>x.localName==="lem");
    if(lem){Array.from(lem.childNodes).forEach(child=>renderNode(child,parent));}
    return;
  }
  if(tag==="rdg")return;
  const special=tag==="add"||tag==="del"||tag==="supplied"||tag==="unclear"||tag==="foreign"||tag==="hi"||tag==="q";
  const host=special?document.createElement("span"):parent;
  if(special) {
    host.className="patristic-tei-"+tag;
    if(tag==="add")host.title="Acréscimo editorial";
    if(tag==="del")host.title="Supressão editorial";
    if(tag==="supplied")host.title="Texto suprido pelo editor";
    parent.append(host);
  }
  Array.from(node.childNodes).forEach(child=>renderNode(child,host));
}
// Milestones TEI são marcas posicionais, não parágrafos HTML. A fonte pode
// iniciar uma subseção dentro de um <p> ou de uma marca editorial inline.
// Recortamos o DOM já renderizado por Range, conservando a ordem do grego
// e os spans editoriais; cada subseção passa a ocupar um <p> independente.
function appendTextSegment(fragment) {
  if(!fragment.textContent?.trim())return;
  const paragraph=document.createElement("p");
  paragraph.className="patristic-subsection";
  paragraph.append(fragment);
  content.append(paragraph);
}
function appendSubsectionLines(paragraph) {
  const markers=Array.from(paragraph.querySelectorAll(".patristic-submark"));
  if(!markers.length){content.append(paragraph);return;}
  for(const marker of markers) {
    const range=document.createRange();
    range.selectNodeContents(paragraph);
    range.setEndBefore(marker);
    appendTextSegment(range.extractContents());
  }
  const remainder=document.createDocumentFragment();
  while(paragraph.firstChild)remainder.append(paragraph.firstChild);
  appendTextSegment(remainder);
}
function renderCurrent() {
  const [b,c,s,sub]=selected;
  const section=getSection(b,c,s);
  content.replaceChildren();
  if(!section){setStatus("Seção ausente na edição.");return;}
  const paragraphs=Array.from(section.children).filter(x=>x.localName==="p");
  if(paragraphs.length) {
    paragraphs.forEach(p=>{
      const out=document.createElement("p");
      Array.from(p.childNodes).forEach(node=>renderNode(node,out));
      appendSubsectionLines(out);
    });
  } else {
    const out=document.createElement("p");
    Array.from(section.childNodes).forEach(node=>renderNode(node,out));
    appendSubsectionLines(out);
  }
  // Em algumas passagens a primeira subseção é implícita no TEI.
  // Tornamos sua referência visível, sem alterar o texto da fonte.
  if(!content.querySelector("#stromata-subsection-1")){
    const first=content.querySelector("p");
    if(first){
      const mark=editorial("1","patristic-submark","Subseção 1");
      mark.id="stromata-subsection-1";
      first.prepend(mark);
    }
  }
  // Mesma indicação da linha selecionada usada nos versículos bíblicos.
  // O realce pertence à subseção renderizada, nunca ao XML-fonte.
  const activeMark=content.querySelector("#stromata-subsection-"+sub);
  const activeParagraph=activeMark?.closest("p");
  if(activeParagraph){
    activeParagraph.classList.add("patristic-subsection-selected");
    activeParagraph.setAttribute("aria-current","location");
  }
  reference.textContent="Stromata "+roman(b)+", "+c+"."+s+(sub>1?"."+sub:"");
  el("stromata-perseus").href="https://beta.perseus.tufts.edu/"+SOURCE_CTS+"/section:"+b+"."+c+"."+s+"/";
  const flat=allSections();
  const offset=flat.findIndex(x=>x[0]===b&&x[1]===c&&x[2]===s);
  prev.disabled=offset<1;
  next.disabled=offset<0||offset===flat.length-1;
  setStatus("");
  if(sub>1) {
    activeParagraph?.scrollIntoView({block:"center",behavior:"smooth"});
  }
}
function allSections() {
  const list=[];
  books.forEach(book=>childParts(book,"chapter").forEach(ch=>childParts(ch,"section").forEach(sec=>list.push([number(book),number(ch),number(sec)]))));
  return list;
}
function change(b,c,s,sub,push) {
  syncControls(b,c,s,sub);
  renderCurrent();
  if(push){
    const hash="#patristica/stromata/"+selected.join("/");
    if(location.hash!==hash)history.pushState(null,"",hash);
  }
}
async function show(book=1,chapter=1,section=1,subsection=1,push=false) {
  // showHub() hides the former reader and advances sequence.  Capture the
  // current request AFTER that reset, so the eventual XML result stays valid.
  window.ScripturaSections?.showHub("patristica");
  const request=++sequence;
  cards.hidden=true;
  root.hidden=false;
  content.replaceChildren();
  setStatus("Carregando edição grega integral...");
  try{
    await load();
    if(request!==sequence||root.hidden)return false;
    change(book,chapter,section,subsection,push);
    return true;
  }catch(e){
    if(request!==sequence)return false;
    setStatus("Não foi possível carregar o texto integral. Verifique a cópia local ou a ligação com a Perseus.");
    content.textContent="";
    return false;
  }
}
function hide(){ sequence++; root.hidden=true; cards.hidden=false; }
function isPatristicHash(){return /^#patristica\/stromata(?:\/\d+(?:\/\d+){0,3})?$/.test(location.hash);}
function showFromHash(){
  const match=/^#patristica\/stromata(?:\/(\d+)(?:\/(\d+)(?:\/(\d+)(?:\/(\d+))?)?)?)?$/.exec(location.hash);
  if(!match)return false;
  show(Number(match[1]||1),Number(match[2]||1),Number(match[3]||1),Number(match[4]||1),false);
  return true;
}
controls.book.addEventListener("change",()=>change(Number(controls.book.value),1,1,1,true));
controls.chapter.addEventListener("change",()=>change(selected[0],Number(controls.chapter.value),1,1,true));
controls.section.addEventListener("change",()=>change(selected[0],selected[1],Number(controls.section.value),1,true));
controls.subsection.addEventListener("change",()=>change(selected[0],selected[1],selected[2],Number(controls.subsection.value),true));
function step(delta){
  const list=allSections();
  const i=list.findIndex(x=>x[0]===selected[0]&&x[1]===selected[1]&&x[2]===selected[2]);
  const target=list[i+delta];
  if(target)change(target[0],target[1],target[2],1,true);
}
prev.addEventListener("click",()=>step(-1));
next.addEventListener("click",()=>step(1));
window.ScripturaPatristics={show,hide,isPatristicHash,showFromHash};
})();