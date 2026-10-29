/* Obras de Flávio Josefo — leitor da transcrição grega com suplemento latino em Contra Ápio II.
 * Guerra, Vida e Contra Ápio usam dados integrais locais da transcrição TEI Perseus;
 * Antiguidades Judaicas conserva seu leitor independente, acessível pelo seletor Obra.
 */
(function(){
"use strict";
const catalog=window.ScripturaJosephusHistoryCatalog;
const anchor=document.querySelector(".dictionary-context");
if(!catalog||!anchor)return;
const main=anchor.parentElement;
const panel=document.createElement("section");
panel.id="josefo-historia-reader";
panel.className="scripture-reader josefo-reader josefo-history-reader";
panel.hidden=true;
panel.setAttribute("aria-labelledby","josefo-historia-title");
panel.innerHTML=[
'<button type="button" class="site-back-link" data-greek-author="josefo">← Escritores gregos · Flávio Josefo</button>',
'<div class="scripture-reader-kicker">Obras de Flávio Josefo · texto grego</div>',
'<h1 id="josefo-historia-title"></h1>',
'<p id="josefo-historia-original" class="scripture-reader-intro" lang="grc"></p>',
'<div class="scripture-reader-controls josefo-reader-controls">',
'<label>Obra<select id="josefo-historia-work"></select></label>',
'<label>Livro<select id="josefo-historia-book"></select></label>',
'<label>Capítulo<select id="josefo-historia-chapter"></select></label>',
'<label>Seção (§)<select id="josefo-historia-section"></select></label>',
'</div>',
'<div class="scripture-reader-navigation">',
'<button type="button" id="josefo-historia-prev">← Capítulo anterior</button>',
'<button type="button" id="josefo-historia-next">Próximo capítulo →</button>',
'</div>',
'<div class="scripture-reader-result" aria-live="polite">',
'<div class="scripture-reader-category">Flávio Josefo · transcrição Niese / Perseus</div>',
'<h2 id="josefo-historia-reference"></h2>',
'<div id="josefo-historia-text" class="scripture-text"></div>',
'<p id="josefo-historia-message" class="josefo-message" role="status"></p>',
'<button type="button" id="josefo-historia-retry" hidden>Tentar carregar novamente</button>',
'</div>',
'<p id="josefo-historia-division" class="scripture-limit-note"></p>',
'<p id="josefo-historia-languages-note" class="josefo-message" hidden></p>',
'<div class="scripture-reader-actions">',
'<a id="josefo-historia-source" target="_blank" rel="noopener noreferrer">Consultar o texto de referência ↗</a>',
'<button type="button" id="josefo-historia-copy">Copiar referência</button>',
'</div>',
'<p id="josefo-historia-feedback" class="scripture-reader-feedback" role="status"></p>',
'<p class="josefo-credit">Fonte: Flávio Josefo, edição de Benedikt Niese, transcrição TEI da Perseus Digital Library. <em>Contra Ápio</em> II inclui suplência latina antiga de uma lacuna do texto grego, assinalada na fonte por <code>xml:lang="lat"</code>. Para <em>A Guerra dos Judeus</em>: <em>Flavii Iosephi Opera</em>, vol. 6 (Berlim: Weidmann, 1895). Licença <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. Conversão TEI/XML com remoção da marcação e normalização de espaços; não é reprodução diplomática. Sem tradução portuguesa.</p>'
].join("");
main.insertBefore(panel,anchor);
const el=id=>panel.querySelector("#josefo-historia-"+id);
const controls={work:el("work"),book:el("book"),chapter:el("chapter"),section:el("section")};
const textArea=el("text"),heading=el("reference"),message=el("message");
const retry=el("retry"),feedback=el("feedback"),copy=el("copy");
const prev=el("prev"),next=el("next"),source=el("source");
const kicker=panel.querySelector(".scripture-reader-kicker");
const category=panel.querySelector(".scripture-reader-category");
const languageNote=el("languages-note");
languageNote.textContent="Nota textual — Contra Ápio II: a § 51 passa do grego ao latim; as §§ 52–112 são latinas; a § 113 retorna do latim ao grego. O testemunho latino antigo supre uma lacuna da transmissão grega. A divisão dos idiomas segue a marcação do TEI Perseus, não uma reconstrução do texto grego.";

const state={work:"guerra",book:1,chapter:0,section:1};
const loads=new Map();
let generation=0;
const work=()=>catalog.works.find(w=>w.key===state.work);
const dataFor=(w,b)=>window.ScripturaJosephusWorks?.[w]?.[b];
const positive=(v,fallback)=>{const n=Number(v);return Number.isSafeInteger(n)&&n>=1?n:fallback;};
function option(value,label){
 const node=document.createElement("option");node.value=String(value);node.textContent=label;return node;
}
for(const w of catalog.works)controls.work.append(option(w.key,w.title));
/* A mesma escolha de obra também fica acessível pelo leitor de Antiguidades. */
const antiquitiesSelect=document.querySelector("#josefo-work");
if(antiquitiesSelect){
 for(const w of catalog.works.filter(w=>!w.delegated))
   if(!antiquitiesSelect.querySelector('option[value="'+w.key+'"]'))
     antiquitiesSelect.append(option(w.key,w.title));
 antiquitiesSelect.addEventListener("change",()=>{
   const chosen=antiquitiesSelect.value;
   if(chosen!=="antiguidades"){
     antiquitiesSelect.value="antiguidades";
     show(chosen,1,chosen==="guerra"?0:1,1,true);
   }
 });
}
function chaptersFor(w,b){
 if(!w.chapterMarked)return [1];
 const result=[];
 if(w.preface&&b===1)result.push(0);
 for(let c=1;c<=w.chapters[b-1];c++)result.push(c);
 return result;
}
function normalizeChapter(w,b,v){
 const items=chaptersFor(w,b),num=Number(v);
 return Number.isSafeInteger(num)&&items.includes(num)?num:items[0];
}
function chapterLabel(w,c){
 if(!w.chapterMarked)return "Texto contínuo (sem capítulos na fonte)";
 return c===0?"Prefácio":"Capítulo "+c;
}
function fillSelections(){
 const w=work();
 controls.work.value=state.work;
 controls.book.replaceChildren();
 for(let b=1;b<=w.books;b++)
   controls.book.append(option(b,w.books===1?"Livro único":"Livro "+b));
 controls.book.value=String(state.book);
 controls.chapter.replaceChildren();
 for(const c of chaptersFor(w,state.book))controls.chapter.append(option(c,chapterLabel(w,c)));
 controls.chapter.value=String(state.chapter);
 controls.chapter.disabled=!w.chapterMarked;
 el("title").textContent=w.title;
 el("original").textContent=w.original;
 el("division").textContent=w.chapterMarked
   ?"Capítulos segundo os marcadores Whiston na transcrição Perseus; as seções numeradas são contínuas dentro de cada livro."
   :"A transcrição TEI consultada não delimita capítulos nesta obra. O leitor conserva o texto integral e a seleção das seções, sem criar capítulos artificiais.";
 const mixed=state.work==="apiao"&&state.book===2;
 kicker.textContent=mixed?"Obras de Flávio Josefo · grego e latim":"Obras de Flávio Josefo · texto grego";
 category.textContent=mixed?"Flávio Josefo · grego e versão latina · Niese / Perseus":"Flávio Josefo · texto grego · Niese / Perseus";
 languageNote.hidden=!mixed;
 source.href="https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0526."+w.cts+".perseus-grc2/";
 prev.textContent=w.chapterMarked?"← Capítulo anterior":"← Livro anterior";
 next.textContent=w.chapterMarked?"Próximo capítulo →":"Próximo livro →";
}
function updateNav(){
 const w=work(),ch=chaptersFor(w,state.book),idx=ch.indexOf(state.chapter);
 prev.disabled=state.book===1&&idx===0;
 next.disabled=state.book===w.books&&idx===ch.length-1;
}
function caption(){
 const w=work();
 return (w.books>1?"Livro "+state.book+" · ":"") +chapterLabel(w,state.chapter);
}
function reference(){
 const w=work();
 const prefix=w.unit+(w.key==="vida"?" ":" "+state.book+".");
 return state.section==null?w.title+": "+caption():prefix+state.section;
}
function syncHash(mode){
 const hash=(state.work==="guerra"?"#josefo/guerra/":"#josefo/historia/"+state.work+"/")+state.book+"/"+state.chapter+
  (state.section==null?"":"/"+state.section);
 if(window.location.hash===hash)return;
 if(mode==="replace")history.replaceState(null,"",hash);
 else history.pushState(null,"",hash);
}
function readRows(){
 return dataFor(state.work,state.book)?.chapters?.[String(state.chapter)]||[];
}
function displayedReference(){
 return work().title+" · "+caption()+(state.section==null?"":" · § "+state.section)+" ("+reference()+")";
}
function activateSection(number,shouldScroll){
 if(!readRows().some(row=>row.number===number))return;
 state.section=number;
 controls.section.value=String(number);
 for(const line of textArea.querySelectorAll("[data-josefo-history-section]")){
   const selected=Number(line.dataset.josefoHistorySection)===number;
   line.classList.toggle("scripture-verse-selected",selected);
   line.setAttribute("aria-pressed",String(selected));
 }
 heading.textContent=displayedReference();
 syncHash("push");
 if(shouldScroll){
   const target=textArea.querySelector('[data-josefo-history-section="'+number+'"]');
   target?.scrollIntoView({block:"center",behavior:"smooth"});
   target?.focus({preventScroll:true});
 }
}
function clear(note){
 fillSelections();updateNav();heading.textContent=caption();
 textArea.replaceChildren();
 controls.section.replaceChildren(option("","A carregar…"));
 controls.section.disabled=true;message.textContent=note;retry.hidden=true;
 copy.disabled=true;feedback.textContent="";
}
function load(w,b){
 if(dataFor(w,b))return Promise.resolve(dataFor(w,b));
 const id=w+":"+b;
 if(loads.has(id))return loads.get(id);
 const p=new Promise((resolve,reject)=>{
   const script=document.createElement("script");
   script.src="josefo/texts/"+w+"-"+b+".js";
   script.async=true;
   script.onload=()=>{
     const loaded=dataFor(w,b);
     if(loaded)resolve(loaded);
     else reject(new Error("Arquivo carregado sem texto do livro solicitado."));
   };
   script.onerror=()=>{
     script.remove();reject(new Error("Falha na transferência do texto de referência."));
   };
   document.head.append(script);
 });
 loads.set(id,p);
 p.catch(()=>loads.delete(id));
 return p;
}
function render(){
 const list=readRows();
 fillSelections();updateNav();heading.textContent=caption();
 textArea.replaceChildren();retry.hidden=true;
 if(!list.length){
   message.textContent="O arquivo deste livro não apresentou seções para esta divisão.";
   controls.section.replaceChildren(option("","Sem seções"));
   controls.section.disabled=true;copy.disabled=true;return;
 }
 if(!list.some(r=>r.number===state.section))state.section=list[0].number;
 controls.section.replaceChildren();
 for(const row of list)controls.section.append(option(row.number,"§ "+row.number));
 controls.section.value=String(state.section);
 controls.section.disabled=false;
 heading.textContent=displayedReference();
 let uncertainLanguages=0;
 for(const row of list){
   const button=document.createElement("button");
   button.type="button";
   button.className="scripture-verse-line josefo-section-line";
   button.dataset.josefoHistorySection=String(row.number);
   const active=row.number===state.section;
   button.classList.toggle("scripture-verse-selected",active);
   button.setAttribute("aria-pressed",String(active));
   button.setAttribute("aria-label","Seção "+row.number);
   const num=document.createElement("span");
   num.className="scripture-verse-number";num.textContent="§ "+row.number;
   const sourceText=document.createElement("span");
   sourceText.className="josefo-greek";
   const parts=window.ScripturaJosephusLanguages.segments(state.work,state.book,row.number,row.text);
   for(const part of parts){
     const span=document.createElement("span");
     span.lang=part.lang;
     span.textContent=part.text;
     sourceText.append(span);
     if(part.lang==="und")uncertainLanguages++;
   }
   button.append(num,sourceText);
   button.addEventListener("click",()=>activateSection(row.number,true));
   textArea.append(button);
 }
 message.textContent=(state.work==="apiao"&&state.book===2?"Transcrição grega e latina":"Texto grego")+" · "+list.length+" seções nesta divisão."+(uncertainLanguages?" Atenção: limites linguísticos não confirmados em "+uncertainLanguages+" seção(ões).":"");
 copy.disabled=false;feedback.textContent="";
}
function show(workKey,bookNumber,chapterNumber,sectionNumber,writeHash){
 if(workKey==="antiguidades"){
   hide();return window.ScripturaJosephus?.show(1,1,27,writeHash)??false;
 }
 const w=catalog.works.find(item=>item.key===workKey&&!item.delegated);
 if(!w)return false;
 state.work=w.key;
 state.book=Math.min(positive(bookNumber,1),w.books);
 state.chapter=normalizeChapter(w,state.book,chapterNumber);
 state.section=positive(sectionNumber,null);
 const mine=++generation;
 const requestedSection=state.section;
 window.ScripturaScriptures?.hide();
 window.ScripturaJosephus?.hide();
 window.ScripturaPatristics?.hide();
 window.ScripturaPaedagogus?.hide();
 for(const node of main.children)if(node!==panel&&!node.classList.contains("header"))node.hidden=true;
 panel.hidden=false;
 clear("Carregando texto de referência…");
 if(writeHash)syncHash("push");
 load(state.work,state.book).then(()=>{
   if(generation!==mine)return;
   render();if(writeHash)syncHash("replace");
   if(requestedSection!==null)textArea.querySelector('[data-josefo-history-section="'+state.section+'"]')?.scrollIntoView({block:"center"});
 }).catch(()=>{
   if(generation!==mine)return;
   clear("Não foi possível carregar o texto de referência. Verifique a conexão e tente novamente.");
   retry.hidden=false;
 });
 const drawer=document.getElementById("dictionary-menu");
 if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
 return true;
}
function hide(){panel.hidden=true;generation++;}
function isHistoryHash(){return /^#josefo\/(?:historia\/|guerra\/)/.test(window.location.hash);}
function showFromHash(){
 const direct=/^#josefo\/guerra\/(\d+)\/(\d+)(?:\/(\d+))?$/.exec(window.location.hash);
 if(direct)return show("guerra",direct[1],direct[2],direct[3]??null,false);
 const match=/^#josefo\/historia\/(guerra|vida|apiao)\/(\d+)\/(\d+)(?:\/(\d+))?$/.exec(window.location.hash);
 if(!match)return false;
 return show(match[1],match[2],match[3],match[4]??null,false);
}
function navigate(w,b,c){show(w,b,c,null,true);}
controls.work.addEventListener("change",()=>{
 const chosen=controls.work.value;
 if(chosen==="antiguidades"){show("antiguidades",1,1,27,true);return;}
 navigate(chosen,1,chosen==="guerra"?0:1);
});
controls.book.addEventListener("change",()=>{
 const b=positive(controls.book.value,1);navigate(state.work,b,chaptersFor(work(),b)[0]);
});
controls.chapter.addEventListener("change",()=>navigate(state.work,state.book,controls.chapter.value));
controls.section.addEventListener("change",()=>{
 if(controls.section.disabled)return;
 activateSection(positive(controls.section.value,null),true);
});
function adjacent(delta){
 const w=work(),chapters=chaptersFor(w,state.book),i=chapters.indexOf(state.chapter)+delta;
 if(i>=0&&i<chapters.length){navigate(w.key,state.book,chapters[i]);return;}
 const b=state.book+delta;
 if(b<1||b>w.books)return;
 const list=chaptersFor(w,b);
 navigate(w.key,b,delta===1?list[0]:list[list.length-1]);
}
prev.addEventListener("click",()=>adjacent(-1));
next.addEventListener("click",()=>adjacent(1));
retry.addEventListener("click",()=>show(state.work,state.book,state.chapter,state.section,false));
copy.addEventListener("click",()=>{
 const w=work();
 const value=reference()+" — Flávio Josefo, "+w.title+"; "+(w.edition||"ed. Benedikt Niese, Flavii Iosephi Opera")+"; Perseus Digital Library (urn:cts:greekLit:tlg0526."+w.cts+".perseus-grc2).";
 if(!navigator.clipboard?.writeText){feedback.textContent="Copie a referência: "+value;return;}
 navigator.clipboard.writeText(value).then(()=>feedback.textContent="Referência copiada.")
  .catch(()=>feedback.textContent="Copie a referência: "+value);
});
window.ScripturaJosephusHistory={show,hide,isHistoryHash,showFromHash,catalog};
})();