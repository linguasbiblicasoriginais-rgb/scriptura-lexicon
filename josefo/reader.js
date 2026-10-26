/* Scriptura Lexicon — leitor de Flávio Josefo.
 * O destaque recai sobre a seção (§) de Niese; numeração contínua por livro.
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
'<p id="josefo-message" class="josefo-message"></p>',
'</div>',
'<p class="scripture-limit-note">A numeração das seções de Niese é contínua dentro de cada livro e não recomeça em cada capítulo. Não confundir com versículos bíblicos.</p>',
'<div class="scripture-reader-actions">',
'<a id="josefo-source" target="_blank" rel="noopener noreferrer">Consultar a edição grega de referência ↗</a>',
'<button type="button" id="josefo-copy">Copiar referência</button>',
'</div>',
'<p id="josefo-feedback" class="scripture-reader-feedback" role="status"></p>',
'<p class="josefo-credit">Edição grega de referência: Benedikt Niese, Flavii Iosephi Opera (1885–1890). A amostra do livro I, capítulo 1, ainda aguarda cotejo independente.</p>'
].join("");
main.insertBefore(panel,anchor);
const bookSelect=panel.querySelector("#josefo-book");
const chapterSelect=panel.querySelector("#josefo-chapter");
const sectionSelect=panel.querySelector("#josefo-section");
const textArea=panel.querySelector("#josefo-text");
const heading=panel.querySelector("#josefo-reference");
const message=panel.querySelector("#josefo-message");
const feedback=panel.querySelector("#josefo-feedback");
const copy=panel.querySelector("#josefo-copy");
panel.querySelector("#josefo-source").href=catalog.editionUrl;
const state={book:1,chapter:1,section:27};
const positive=(v,defaultValue)=>{const n=Number(v);return Number.isSafeInteger(n)&&n>=1?n:defaultValue;};
const book=()=>catalog.books[state.book-1];
function option(value,label){
 const el=document.createElement("option");
 el.value=String(value);el.textContent=label;return el;
}
catalog.books.forEach(b=>bookSelect.append(option(b.number,b.name)));
function readRows(b,c){
 const raw=window.ScripturaJosephusTexts?.antiguidades?.[b]?.[c];
 return Array.isArray(raw)?raw.filter(r=>Number.isSafeInteger(r.number)&&r.number>=1&&typeof r.text==="string")
  .slice().sort((a,b)=>a.number-b.number):[];
}
function ref(){return "Ant. "+state.book+"."+(state.section??"—");}
function syncHash(){
 const hash="#josefo/antiguidades/"+state.book+"/"+state.chapter+
    (state.section==null?"":"/"+state.section);
 if(window.location.hash!==hash)history.pushState(null,"",hash);
}
function buildChapters(){
 chapterSelect.replaceChildren();
 for(let c=1;c<=book().chapters;c++)chapterSelect.append(option(c,"Capítulo "+c));
 chapterSelect.value=String(state.chapter);
}
function render(){
 bookSelect.value=String(state.book);
 buildChapters();
 const rows=readRows(state.book,state.chapter);
 const selected=rows.find(r=>r.number===state.section);
 sectionSelect.replaceChildren();
 if(!rows.length){
   sectionSelect.append(option("","Nenhuma seção incorporada"));
   sectionSelect.disabled=true;
 }else{
   rows.forEach(r=>sectionSelect.append(option(r.number,"§ "+r.number)));
   if(state.section!==null&&!selected)
     sectionSelect.append(option(state.section,"§ "+state.section+" (sem transcrição)"));
   sectionSelect.disabled=false;
   sectionSelect.value=state.section==null?"":String(state.section);
 }
 heading.textContent="Livro "+state.book+", capítulo "+state.chapter+
     (state.section!==null?" · § "+state.section:"");
 textArea.replaceChildren();
 if(!rows.length){
   const empty=document.createElement("p");
   empty.className="scripture-empty-text";
   empty.textContent="O texto deste capítulo ainda não foi incorporado. A numeração das seções permanece pendente de conferência.";
   textArea.append(empty);
   message.textContent="O catálogo dos capítulos não comprova a existência ou os limites de cada seção.";
 }else{
   rows.forEach(r=>{
     const line=document.createElement("button");
     line.type="button";
     line.className="scripture-verse-line josefo-section-line";
     line.dataset.josefoSection=String(r.number);
     const selectedLine=r.number===state.section;
     line.classList.toggle("scripture-verse-selected",selectedLine);
     line.setAttribute("aria-pressed",String(selectedLine));
     line.setAttribute("aria-label","Seção "+r.number+(r.complete?"":" — excerto parcial"));
     const num=document.createElement("span");
     num.className="scripture-verse-number";
     num.textContent="§ "+r.number;
     const text=document.createElement("span");
     text.lang="grc";
     text.className="josefo-greek";
     text.textContent=r.text;
     line.append(num,text);
     if(!r.complete){
       const flag=document.createElement("span");
       flag.className="josefo-excerpt";flag.textContent="… (excerto)";
       line.append(flag);
     }
     line.addEventListener("click",()=>{
       state.section=r.number;render();syncHash();
       const target=textArea.querySelector('[data-josefo-section="'+r.number+'"]');
       if(target)target.focus({preventScroll:true});
     });
     textArea.append(line);
   });
   message.textContent=!selected?"Esta seção não está transcrita neste capítulo.":
     rows.some(r=>!r.complete)?"Amostra parcial: os trechos são apenas o início das seções indicadas, não a transcrição integral. Cotejo filológico pendente.":
     "Texto grego incorporado para as unidades indicadas.";
 }
 copy.disabled=!selected;
 panel.querySelector("#josefo-prev").disabled=state.book===1&&state.chapter===1;
 panel.querySelector("#josefo-next").disabled=state.book===20&&state.chapter===book().chapters;
 feedback.textContent="";
}
function show(bookNumber,chapterNumber,sectionNumber,writeHash){
 state.book=Math.min(positive(bookNumber,1),catalog.books.length);
 state.chapter=Math.min(positive(chapterNumber,1),book().chapters);
 const rows=readRows(state.book,state.chapter);
 state.section=sectionNumber==null?(rows[0]?.number??null):positive(sectionNumber,null);
 window.ScripturaScriptures?.hide();
 for(const node of main.children){
   if(node!==panel&&!node.classList.contains("header"))node.hidden=true;
 }
 panel.hidden=false;
 render();
 if(writeHash)syncHash();
 const drawer=document.getElementById("dictionary-menu");
 if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
 return true;
}
function hide(){panel.hidden=true;}
function isJosephusHash(){return /^#josefo\//.test(window.location.hash);}
function showFromHash(){
 const match=/^#josefo\/antiguidades\/(\d{1,2})\/(\d{1,2})(?:\/(\d+))?$/.exec(window.location.hash);
 if(!match)return false;
 return show(match[1],match[2],match[3]??null,false);
}
function navigate(b,c){
 const rows=readRows(b,c);
 show(b,c,rows[0]?.number??null,true);
}
bookSelect.addEventListener("change",()=>navigate(positive(bookSelect.value,1),1));
chapterSelect.addEventListener("change",()=>navigate(state.book,positive(chapterSelect.value,1)));
sectionSelect.addEventListener("change",()=>{
 if(!sectionSelect.disabled){
   state.section=positive(sectionSelect.value,null);render();syncHash();
 }
});
panel.querySelector("#josefo-prev").addEventListener("click",()=>{
 if(state.chapter>1)navigate(state.book,state.chapter-1);
 else if(state.book>1)navigate(state.book-1,catalog.books[state.book-2].chapters);
});
panel.querySelector("#josefo-next").addEventListener("click",()=>{
 if(state.chapter<book().chapters)navigate(state.book,state.chapter+1);
 else if(state.book<20)navigate(state.book+1,1);
});
copy.addEventListener("click",()=>{
 const value=ref()+" (Antiguidades Judaicas, livro "+state.book+", capítulo "+state.chapter+")";
 if(!navigator.clipboard?.writeText){feedback.textContent="Copie a referência: "+value;return;}
 navigator.clipboard.writeText(value).then(()=>feedback.textContent="Referência copiada.")
   .catch(()=>feedback.textContent="Copie a referência: "+value);
});
window.ScripturaJosephus={show,hide,isJosephusHash,showFromHash,catalog};
})();