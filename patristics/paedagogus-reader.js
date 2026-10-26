/* Scriptura Lexicon — leitor do Παιδαγωγός de Clemente de Alexandria.
 * Fonte: OpenGreekAndLatin/First1KGreek, Otto Stählin (1905).
 * CTS urn:cts:greekLit:tlg0555.tlg002.1st1K-grc1; licença CC BY-SA 4.0.
 * O XML canônico permanece intacto. Seções são milestones, não divs.
 */
(function(){
"use strict";
const SOURCE_URL="https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/03776b39f4047c5cff06f5296fae4b2bae4b08fb/data/tlg0555/tlg002/tlg0555.tlg002.1st1K-grc1.xml";
const LOCAL_URL="patristics/data/paedagogus.xml";
const CTS="urn:cts:greekLit:tlg0555.tlg002.1st1K-grc1";
const hub=document.getElementById("site-section-hub");
const cards=document.getElementById("site-section-cards");
if(!hub||!cards)return;
const root=document.createElement("section");
root.id="paedagogus-reader";
root.className="patristic-reader";
root.hidden=true;
root.setAttribute("aria-label","Leitor do Pedagogo");
root.innerHTML=[
'<button type="button" class="site-back-link" data-site-section="patristica">← Literatura patrística</button>',
'<h2 class="patristic-heading"><span lang="grc">Παιδαγωγός</span> · Pedagogo</h2>',
'<p class="patristic-context">Clemente de Alexandria · Texto grego · Edição Otto Stählin (1905)</p>',
'<div class="patristic-controls" role="group" aria-label="Navegação do Pedagogo">',
'<label>Livro<select id="paedagogus-book"></select></label>',
'<label>Capítulo<select id="paedagogus-chapter"></select></label>',
'<label id="paedagogus-section-label">Seção<select id="paedagogus-section"></select></label>',
'<label id="paedagogus-subsection-label">Subseção<select id="paedagogus-subsection"></select></label>',
'</div>',
'<div class="patristic-steps">',
'<button type="button" id="paedagogus-prev">← Anterior</button>',
'<span id="paedagogus-reference" aria-live="polite"></span>',
'<button type="button" id="paedagogus-next">Próxima →</button>',
'</div>',
'<p id="paedagogus-status" role="status" aria-live="polite"></p>',
'<article id="paedagogus-text" class="patristic-text greek" lang="grc"></article>',
'<p class="patristic-source"><strong>Fonte:</strong> ',
'<a target="_blank" rel="noopener noreferrer" href="https://atlas.perseus.tufts.edu/library/urn:cts:greekLit:tlg0555.tlg002/">Perseus Digital Library</a> · ',
'<a target="_blank" rel="noopener noreferrer" href="'+SOURCE_URL+'">TEI-XML integral</a> · ',
'<a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. ',
'Ed. Otto Stählin, 1905. Texto original grego; sem tradução portuguesa. ',
'A numeração de seção é preservada conforme a fonte; títulos, argumentos e intervenções editoriais permanecem identificáveis no XML.</p>'
].join("");
hub.append(root);
const el=id=>root.querySelector("#"+id);
const control={book:el("paedagogus-book"),chapter:el("paedagogus-chapter"),section:el("paedagogus-section"),sub:el("paedagogus-subsection")};
const text=el("paedagogus-text"),status=el("paedagogus-status"),reference=el("paedagogus-reference");
const prev=el("paedagogus-prev"),next=el("paedagogus-next");
let books=[],selected={b:1,c:"1",s:null,sub:1},loading=null,sequence=0,remote=false;
const roman=n=>["","I","II","III"][Number(n)]||String(n);
const parts=(node,type)=>Array.from(node?.children||[]).filter(x=>x.localName==="div"&&x.getAttribute("subtype")===type);
const book=n=>books.find(x=>x.getAttribute("n")===String(n));
const chapters=n=>parts(book(n),"chapter");
const chapter=(b,c)=>chapters(b).find(x=>x.getAttribute("n")===String(c));
const secValues=(b,c)=>Array.from(chapter(b,c)?.querySelectorAll('milestone[unit="section"]')||[])
 .map(x=>x.getAttribute("n")).filter(Boolean).filter((s,i,a)=>a.indexOf(s)===i);
function subsections(b,c,s) {
 const ch=chapter(b,c);
 if(!ch||!s)return [];
 const events=Array.from(ch.querySelectorAll("milestone"));
 const first=events.findIndex(x=>x.getAttribute("unit")==="section"&&x.getAttribute("n")===s);
 if(first<0)return [];
 const result=[1];
 for(let i=first+1;i<events.length;i++){
  const item=events[i],unit=item.getAttribute("unit");
  if(unit==="section")break;
  if(unit==="subsection"){
   const n=Number(item.getAttribute("n"));
   if(Number.isInteger(n)&&n>1&&!result.includes(n))result.push(n);
  }
 }
 return result;
}
function choices(select,ids,format) {
 select.replaceChildren();
 for(const id of ids){const option=document.createElement("option");option.value=String(id);option.textContent=format(id);select.append(option);}
}
function choose(list,request) {const val=String(request??"");return list.includes(val)?val:list[0];}
function sync(b,c,s,sub) {
 const bList=books.map(x=>x.getAttribute("n"));
 b=choose(bList,b);choices(control.book,bList,x=>"Livro "+roman(x));
 const cList=chapters(b).map(x=>x.getAttribute("n"));
 c=choose(cList,c);choices(control.chapter,cList,x=>x==="argument"?"Argumento":"Capítulo "+x);
 const sList=secValues(b,c);
 s=choose(sList,s);choices(control.section,sList,x=>"Seção "+x);
 el("paedagogus-section-label").hidden=!sList.length;
 const subList=subsections(b,c,s);
 sub=subList.includes(Number(sub))?Number(sub):(subList[0]||1);
 choices(control.sub,subList,x=>"Subseção "+x);
 el("paedagogus-subsection-label").hidden=subList.length<2;
 control.book.value=b;control.chapter.value=c;
 if(sList.length)control.section.value=s;
 if(subList.length)control.sub.value=String(sub);
 selected={b:Number(b),c,s:s||null,sub};
}
function editor(textValue,klass,title) {
 const span=document.createElement("span");span.className=klass;span.textContent=textValue;span.title=title;return span;
}
function render(node,parent) {
 if(node.nodeType===3){parent.append(document.createTextNode(node.nodeValue));return;}
 if(node.nodeType!==1)return;
 const tag=node.localName;
 if(tag==="pb"||tag==="cb"){parent.append(document.createTextNode(" "));return;}
 if(tag==="lb"){parent.append(document.createElement("br"));return;}
 if(tag==="note")return; // permanece intacto no XML original
 if(tag==="gap"){parent.append(editor("⟦lacuna⟧","patristic-gap","Lacuna no testemunho"));return;}
 if(tag==="milestone"){
  const unit=node.getAttribute("unit"), n=node.getAttribute("n");
  if(unit==="section"){const span=editor("","paedagogus-section-boundary","Seção "+n);span.dataset.n=n;parent.append(span);}
  else if(unit==="subsection"){
   const span=editor(String(n),"patristic-submark","Subseção "+n);
   span.id="paedagogus-subsection-"+n;parent.append(span);
  }
  return;
 }
 const inline=["add","del","supplied","unclear","foreign","hi","q","num"].includes(tag);
 const wrapper=tag==="p"?document.createElement("p"):inline?document.createElement("span"):parent;
 if(tag==="p")parent.append(wrapper);
 if(inline){wrapper.className="patristic-tei-"+tag;parent.append(wrapper);}
 Array.from(node.childNodes).forEach(x=>render(x,wrapper));
}
function addLine(fragment) {
 if(!fragment.textContent?.trim())return;
 const p=document.createElement("p");p.className="patristic-subsection";
 p.append(fragment);text.append(p);
}
function splitParagraph(p) {
 const markers=Array.from(p.querySelectorAll(".patristic-submark"));
 if(!markers.length){if(p.textContent?.trim())text.append(p);return;}
 for(const mark of markers){
  const range=document.createRange();range.selectNodeContents(p);range.setEndBefore(mark);
  addLine(range.extractContents());
 }
 const remainder=document.createDocumentFragment();
 while(p.firstChild)remainder.append(p.firstChild);
 addLine(remainder);
}
function renderCurrent(){
 const {b,c,s,sub}=selected, ch=chapter(b,c);
 text.replaceChildren();
 if(!ch){status.textContent="Capítulo não encontrado.";return;}
 const head=Array.from(ch.children).find(x=>x.localName==="head");
 if(head){
  const title=document.createElement("h3");title.className="patristic-chapter-title";
  title.textContent=head.textContent?.trim()||"";
  text.append(title);
 }
 // Renderiza o capítulo preservando todas as marcas; cada seção é
 // extraída por Range, inclusive se começar dentro de um parágrafo TEI.
 const rendered=document.createElement("div");
 for(const item of ch.childNodes){if(item.nodeType===1&&item.localName==="head")continue;render(item,rendered);}
 let fragment;
 if(s){
  const boundaries=Array.from(rendered.querySelectorAll(".paedagogus-section-boundary"));
  const at=boundaries.findIndex(x=>x.dataset.n===s);
  if(at<0){status.textContent="Seção não encontrada na edição.";return;}
  const range=document.createRange();range.selectNodeContents(rendered);
  range.setStartAfter(boundaries[at]);
  if(boundaries[at+1])range.setEndBefore(boundaries[at+1]);
  fragment=range.cloneContents();
 }else{
  fragment=document.createDocumentFragment();
  while(rendered.firstChild)fragment.append(rendered.firstChild);
 }
 const slice=document.createElement("div");slice.append(fragment);
 for(const item of Array.from(slice.childNodes)){
  if(item.nodeType===1&&item.localName==="p"){splitParagraph(item);continue;}
  if(item.nodeType===1&&item.localName==="br"){text.append(item);continue;}
  const p=document.createElement("p");
  p.append(item);splitParagraph(p);
 }
 if(s){
  // A subseção 1 é implícita no TEI: não há milestone n="1".
  if(!text.querySelector("#paedagogus-subsection-1")){
   const first=text.querySelector("p");
   if(first){const mark=editor("1","patristic-submark","Subseção 1");mark.id="paedagogus-subsection-1";first.prepend(mark);}
  }
  const marker=text.querySelector("#paedagogus-subsection-"+sub);
  const paragraph=marker?.closest("p");
  if(paragraph){paragraph.classList.add("patristic-subsection-selected");paragraph.setAttribute("aria-current","location");}
  if(sub>1)paragraph?.scrollIntoView({block:"center",behavior:"smooth"});
 }
 reference.textContent="Pedagogo "+roman(b)+", "+(c==="argument"?"argumento":c)+(s?"."+s+(sub>1?"."+sub:""):"");
 const sequenceList=allPassages();
 const idx=sequenceList.findIndex(x=>x.b===b&&x.c===c&&x.s===s);
 prev.disabled=idx<1;next.disabled=idx<0||idx===sequenceList.length-1;
 status.textContent=remote?"Texto integral carregado da fonte First1KGreek (cópia local indisponível).":"Texto integral carregado do acervo Scriptura Lexicon.";
}
function allPassages() {
 const list=[];
 books.forEach(b=>{
  const bookNum=Number(b.getAttribute("n"));
  parts(b,"chapter").forEach(ch=>{
   const c=ch.getAttribute("n");
   const sections=secValues(bookNum,c);
   if(!sections.length)list.push({b:bookNum,c,s:null});
   else sections.forEach(s=>list.push({b:bookNum,c,s}));
  });
 });
 return list;
}
function setSelection(b,c,s,sub,hash) {
 sync(b,c,s,sub);renderCurrent();
 if(hash){
  const {b,c,s,sub}=selected;
  const route="#patristica/paedagogus/"+b+"/"+c+(s?"/"+s+"/"+sub:"");
  if(location.hash!==route)history.pushState(null,"",route);
 }
}
async function fetchXml(url){
 const response=await fetch(url);
 if(!response.ok)throw Error("HTTP "+response.status);
 const xmlText=await response.text();
 if(xmlText.length<300000)throw Error("Fonte incompleta");
 const doc=new DOMParser().parseFromString(xmlText,"application/xml");
 if(doc.querySelector("parsererror"))throw Error("XML inválido");
 const edition=Array.from(doc.getElementsByTagName("div")).find(x=>x.getAttribute("type")==="edition");
 const books=parts(edition,"book");
 if(books.length!==3||books.map(x=>x.getAttribute("n")).join(",")!=="1,2,3")throw Error("Esperados os três livros da edição Stählin");
 if(!books.every(x=>parts(x,"chapter").length>=12))throw Error("Edição sem capítulos íntegros");
 return books;
}
async function load(){
 if(books.length===3)return;
 if(!loading)loading=(async()=>{
  try{books=await fetchXml(LOCAL_URL);remote=false;}
  catch(e){books=await fetchXml(SOURCE_URL);remote=true;}
 })().catch(e=>{loading=null;throw e;});
 await loading;
}
async function show(b=1,c="1",s=null,sub=1,push=false){
 window.ScripturaSections?.showHub("patristica");
 const request=++sequence;
 cards.hidden=true;root.hidden=false;text.replaceChildren();
 status.textContent="Carregando edição grega integral...";
 try{
  await load();
  if(request!==sequence||root.hidden)return false;
  setSelection(b,c,s,sub,push);return true;
 }catch(e){
  if(request!==sequence)return false;
  status.textContent="Erro ao carregar o Pedagogo: "+e.message;
  text.replaceChildren();return false;
 }
}
function hide(){sequence++;root.hidden=true;cards.hidden=false;}
function isPaedagogusHash(){return /^#patristica\/paedagogus(?:\/[1-3](?:\/(?:argument|\d+)(?:\/\d+(?:\/\d+)?)?)?)?$/.test(location.hash);}
function showFromHash(){
 const m=/^#patristica\/paedagogus(?:\/([1-3])(?:\/(argument|\d+)(?:\/(\d+)(?:\/(\d+))?)?)?)?$/.exec(location.hash);
 if(!m)return false;
 show(Number(m[1]||1),m[2]||"1",m[3]||null,Number(m[4]||1),false);
 return true;
}
control.book.addEventListener("change",()=>setSelection(Number(control.book.value),"1",null,1,true));
control.chapter.addEventListener("change",()=>setSelection(selected.b,control.chapter.value,null,1,true));
control.section.addEventListener("change",()=>setSelection(selected.b,selected.c,control.section.value,1,true));
control.sub.addEventListener("change",()=>setSelection(selected.b,selected.c,selected.s,Number(control.sub.value),true));
function move(delta) {
 const list=allPassages(),i=list.findIndex(x=>x.b===selected.b&&x.c===selected.c&&x.s===selected.s);
 const target=list[i+delta];
 if(target)setSelection(target.b,target.c,target.s,1,true);
}
prev.addEventListener("click",()=>move(-1));
next.addEventListener("click",()=>move(1));
window.ScripturaPaedagogus={show,hide,isPaedagogusHash,showFromHash};
})();