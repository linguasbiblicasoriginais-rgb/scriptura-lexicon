/* Scriptura Lexicon — Antiguidades Judaicas, texto grego integral Perseus/Niese.
 * Todos os livros são arquivos locais carregados por grupos de quatro conforme a navegação.
 * Capítulos: marcadores Whiston na fonte; §§: contínuos por livro na edição Niese.
 */
(function(){
"use strict";
const catalog=window.ScripturaJosephusCatalog;
const anchor=document.querySelector(".dictionary-context");
if(!catalog||!anchor)return;
const main=anchor.parentElement;
const panel=document.createElement("section");
panel.id="josefo-reader";
panel.className="scripture-reader josefo-reader";
panel.hidden=true;
panel.setAttribute("aria-labelledby","josefo-reader-title");
panel.innerHTML=[
'<div class="scripture-reader-kicker">Obras de Flávio Josefo · Texto grego</div>',
'<h1 id="josefo-reader-title">Antiguidades Judaicas</h1>',
'<p class="scripture-reader-intro" lang="grc">Ἰουδαϊκὴ ἀρχαιολογία</p>',
'<div class="scripture-reader-controls josefo-reader-controls">',
'<label>Obra<select id="josefo-work"><option value="antiguidades">Antiguidades Judaicas</option></select></label>',
'<label>Livro<select id="josefo-book"></select></label>',
'<label>Capítulo<select id="josefo-chapter"></select></label>',
'<label>Seção (§ de Niese)<select id="josefo-section"></select></label>',
'</div>',
'<div class="scripture-reader-navigation">',
'<button type="button" id="josefo-prev">← Capítulo anterior</button>',
'<button type="button" id="josefo-next">Próximo capítulo →</button>',
'</div>',
'<div class="scripture-reader-result" aria-live="polite">',
'<div class="scripture-reader-category">Flávio Josefo · Antiguidades Judaicas</div>',
'<h2 id="josefo-reference"></h2>',
'<div id="josefo-text" class="scripture-text"></div>',
'<p id="josefo-message" class="josefo-message" role="status"></p>',
'<button type="button" id="josefo-retry" hidden>Tentar carregar novamente</button>',
'</div>',
'<p class="scripture-limit-note">As seções (§) são numeradas continuamente por livro. A sinopse de cada livro não possui número de seção. O Livro I contém também o prefácio (§§ 1–26).</p>',
'<div class="scripture-reader-actions">',
'<a id="josefo-source" target="_blank" rel="noopener noreferrer">Consultar a edição grega de referência ↗</a>',
'<button type="button" id="josefo-copy">Copiar referência</button>',
'</div>',
'<p id="josefo-feedback" class="scripture-reader-feedback" role="status"></p>',
'<p class="josefo-credit">Fonte: Flávio Josefo, <em>Antiguidades Judaicas</em>, ed. Benedikt Niese (1885–1890), transcrição TEI do Perseus Digital Library. Texto distribuído sob <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Formatação XML adaptada, mantendo as divisões da fonte. Sem tradução.</p>'
].join("");
main.insertBefore(panel,anchor);
const bookSelect=panel.querySelector("#josefo-book");
const chapterSelect=panel.querySelector("#josefo-chapter");
const sectionSelect=panel.querySelector("#josefo-section");
const textArea=panel.querySelector("#josefo-text");
const heading=panel.querySelector("#josefo-reference");
const message=panel.querySelector("#josefo-message");
const retry=panel.querySelector("#josefo-retry");
const feedback=panel.querySelector("#josefo-feedback");
const copy=panel.querySelector("#josefo-copy");
panel.querySelector("#josefo-source").href=catalog.editionUrl;
const state={book:1,chapter:1,section:27};
const loads=new Map();
let generation=0;
const positive=(v,fallback)=>{const n=Number(v);return Number.isSafeInteger(n)&&n>=1?n:fallback;};
const book=()=>catalog.books[state.book-1];
const sourceData=b=>window.ScripturaJosephusTexts?.antiguidades?.[b];
function option(value,label){
 const el=document.createElement("option");el.value=String(value);el.textContent=label;return el;
}
catalog.books.forEach(b=>bookSelect.append(option(b.number,b.name)));
function chaptersFor(b){
 const out=["arg"];
 if(b===1)out.push(0);
 for(let i=1;i<=catalog.books[b-1].chapters;i++)out.push(i);
 return out;
}
function normalizeChapter(value,b){
 if(value==="arg")return "arg";
 if(String(value)==="0"&&b===1)return 0;
 const n=positive(value,1);
 return Math.min(n,catalog.books[b-1].chapters);
}
function chapterLabel(c){
 return c==="arg"?"Sinopse do livro":c===0?"Prefácio (§§ 1–26)":"Capítulo "+c;
}
function buildChapters(){
 chapterSelect.replaceChildren();
 for(const c of chaptersFor(state.book))chapterSelect.append(option(c,chapterLabel(c)));
 chapterSelect.value=String(state.chapter);
}
function rows(){
 const data=sourceData(state.book);
 if(!data||state.chapter==="arg")return [];
 return data.chapters?.[String(state.chapter)]||[];
}
function reference(){
 if(state.chapter==="arg")return "Ant. "+state.book+" · sinopse";
 if(state.chapter===0)return "Ant. 1.1–26 · prefácio";
 return state.section===null?"Ant. "+state.book+", cap. "+state.chapter:
   "Ant. "+state.book+"."+state.section;
}
function syncHash(method){
 const hash="#josefo/antiguidades/"+state.book+"/"+state.chapter+
   (state.section===null?"":"/"+state.section);
 if(window.location.hash===hash)return;
 if(method==="replace")history.replaceState(null,"",hash);
 else history.pushState(null,"",hash);
}
function navigationState(){
 const chapters=chaptersFor(state.book),index=chapters.indexOf(state.chapter);
 panel.querySelector("#josefo-prev").disabled=state.book===1&&index===0;
 panel.querySelector("#josefo-next").disabled=state.book===catalog.books.length&&index===chapters.length-1;
}
function clearResult(note){
 heading.textContent="Livro "+state.book+" · "+chapterLabel(state.chapter);
 textArea.replaceChildren();
 message.textContent=note||"";
 sectionSelect.replaceChildren(option("","A carregar…"));
 sectionSelect.disabled=true;
 copy.disabled=true;
 retry.hidden=true;
 navigationState();
 feedback.textContent="";
}
function loadBook(b){
 if(sourceData(b))return Promise.resolve(sourceData(b));
 const group=Math.ceil(b/4);
 if(loads.has(group))return loads.get(group);
 const promise=new Promise((resolve,reject)=>{
  const script=document.createElement("script");
  script.src="josefo/texts/ant-group-"+group+".js";
  script.async=true;
  script.onload=()=>{
   const data=sourceData(b);
   if(!data){reject(new Error("O grupo foi carregado sem o livro solicitado."));return;}
   resolve(data);
  };
  script.onerror=()=>{script.remove();reject(new Error("Não foi possível obter o arquivo de texto."));};
  document.head.append(script);
 });
 loads.set(group,promise);
 promise.catch(()=>loads.delete(group));
 return promise;
}
function renderArgument(data){
 sectionSelect.replaceChildren(option("","Sinopse sem numeração"));
 sectionSelect.disabled=true;
 const block=document.createElement("div");
 block.className="josefo-argument";
 block.lang="grc";
 const bookTitle=document.createElement("h3");bookTitle.textContent=data.title;
 const argTitle=document.createElement("h4");argTitle.textContent=data.argument.title;
 const text=document.createElement("p");text.textContent=data.argument.text;
 block.append(bookTitle);
 if(data.argument.title)block.append(argTitle);
 block.append(text);textArea.append(block);
 message.textContent="Sinopse grega reproduzida do texto-fonte; não corresponde a uma seção numerada.";
 copy.disabled=false;
}
function renderSections(data){
 const selectedRows=rows();
 if(!selectedRows.length){
  sectionSelect.replaceChildren(option("","Não há seções na fonte"));
  sectionSelect.disabled=true;
  message.textContent="Não foram encontradas seções para esta divisão na fonte.";
  return;
 }
 if(!selectedRows.some(r=>r.number===state.section))state.section=selectedRows[0].number;
 sectionSelect.replaceChildren();
 selectedRows.forEach(r=>sectionSelect.append(option(r.number,"§ "+r.number)));
 sectionSelect.value=String(state.section);
 sectionSelect.disabled=false;
 for(const r of selectedRows){
  const line=document.createElement("button");
  line.type="button";
  line.className="scripture-verse-line josefo-section-line";
  line.dataset.josefoSection=String(r.number);
  const selected=r.number===state.section;
  line.classList.toggle("scripture-verse-selected",selected);
  line.setAttribute("aria-pressed",String(selected));
  line.setAttribute("aria-label","Seção "+r.number);
  const num=document.createElement("span");num.className="scripture-verse-number";num.textContent="§ "+r.number;
  const greek=document.createElement("span");greek.className="josefo-greek";greek.lang="grc";greek.textContent=r.text;
  line.append(num,greek);
  line.addEventListener("click",()=>{
   state.section=r.number;
   render();syncHash("push");
   const target=textArea.querySelector('[data-josefo-section="'+r.number+'"]');
   target?.focus({preventScroll:true});
  });
  textArea.append(line);
 }
 message.textContent=selectedRows.length+" seções da edição grega carregadas neste "+(state.chapter===0?"prefácio":"capítulo")+".";
 copy.disabled=false;
}
function render(){
 const data=sourceData(state.book);
 bookSelect.value=String(state.book);
 buildChapters();
 heading.textContent="Livro "+state.book+" · "+chapterLabel(state.chapter);
 textArea.replaceChildren();
 retry.hidden=true;
 if(!data){clearResult("A carregar o texto grego…");return;}
 if(state.chapter==="arg"){state.section=null;renderArgument(data);}
 else renderSections(data);
 navigationState();
 feedback.textContent="";
}
function show(bookNumber,chapterNumber,sectionNumber,writeHash){
 state.book=Math.min(positive(bookNumber,1),catalog.books.length);
 state.chapter=normalizeChapter(chapterNumber,state.book);
 state.section=state.chapter==="arg"?null:positive(sectionNumber,null);
 const current=++generation;
 window.ScripturaScriptures?.hide();
 window.ScripturaPatristics?.hide();
 window.ScripturaPaedagogus?.hide();
 window.ScripturaJosephusHistory?.hide();
 const workChooser=panel.querySelector("#josefo-work");
 if(workChooser)workChooser.value="antiguidades";
 for(const node of main.children)if(node!==panel&&!node.classList.contains("header"))node.hidden=true;
 panel.hidden=false;
 bookSelect.value=String(state.book);
 buildChapters();
 clearResult("A carregar o texto grego…");
 if(writeHash)syncHash("push");
 const requestBook=state.book;
 loadBook(requestBook).then(()=>{
  if(current!==generation)return;
  render();
  if(writeHash)syncHash("replace");
 }).catch(()=>{
  if(current!==generation)return;
  clearResult("Não foi possível carregar este grupo de livros. Verifique a conexão e tente novamente.");
  retry.hidden=false;
 });
 const drawer=document.getElementById("dictionary-menu");
 if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
 return true;
}
function hide(){panel.hidden=true;generation++;}
function isJosephusHash(){return /^#josefo\//.test(window.location.hash);}
function showFromHash(){
 const match=/^#josefo\/antiguidades\/(\d{1,2})\/(arg|\d{1,2})(?:\/(\d+))?$/.exec(window.location.hash);
 if(!match)return false;
 return show(match[1],match[2],match[3]??null,false);
}
function navigate(b,c){
 show(b,c,null,true);
}
function adjacent(direction){
 const list=chaptersFor(state.book),idx=list.indexOf(state.chapter),target=idx+direction;
 if(target>=0&&target<list.length){navigate(state.book,list[target]);return;}
 const neighbor=state.book+direction;
 if(neighbor<1||neighbor>catalog.books.length)return;
 const next=chaptersFor(neighbor);
 navigate(neighbor,direction===1?next[0]:next[next.length-1]);
}
bookSelect.addEventListener("change",()=>navigate(positive(bookSelect.value,1),"arg"));
chapterSelect.addEventListener("change",()=>navigate(state.book,chapterSelect.value));
sectionSelect.addEventListener("change",()=>{
 if(!sectionSelect.disabled){
  state.section=positive(sectionSelect.value,null);
  render();syncHash("push");
  const target=textArea.querySelector('[data-josefo-section="'+state.section+'"]');
  target?.scrollIntoView({block:"nearest",behavior:"smooth"});
 }
});
panel.querySelector("#josefo-prev").addEventListener("click",()=>adjacent(-1));
panel.querySelector("#josefo-next").addEventListener("click",()=>adjacent(1));
retry.addEventListener("click",()=>show(state.book,state.chapter,state.section,false));
copy.addEventListener("click",()=>{
 const value=reference()+" (Antiguidades Judaicas, "+chapterLabel(state.chapter).toLowerCase()+")";
 if(!navigator.clipboard?.writeText){feedback.textContent="Copie a referência: "+value;return;}
 navigator.clipboard.writeText(value).then(()=>feedback.textContent="Referência copiada.")
  .catch(()=>feedback.textContent="Copie a referência: "+value);
});
window.ScripturaJosephus={show,hide,isJosephusHash,showFromHash,catalog};
})();