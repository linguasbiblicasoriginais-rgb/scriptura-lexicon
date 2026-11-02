/* Scriptura Lexicon — consulta contínua das obras de Fílon e Josefo.
 * Move o painel do leitor original para o catálogo, sem duplicar o texto. */
(function(){
"use strict";
const hub=document.getElementById("site-section-hub");
const form=document.getElementById("site-greek-authors-content");
const host=document.getElementById("greek-inline-reader");
const author=document.getElementById("greek-author");
const work=document.getElementById("greek-work");
const title=document.getElementById("site-section-title");
const description=document.getElementById("site-section-description");
const profile=document.getElementById("site-philo-profile");
if(!hub||!form||!host||!author||!work)return;
const specs=[
 ["ScripturaPhilo","filon-abrahamo-reader","filon-tlg020"],
 ["ScripturaPhiloAeternitate","filon-aeternitate-reader","filon-tlg029"],
 ["ScripturaPhiloAgricultura","filon-agricultura-reader","filon-tlg009"],
 ["ScripturaPhiloCherubim","filon-cherubim-reader","filon-tlg003"],
 ["ScripturaPhiloConfusione","filon-confusione-reader","filon-tlg013"],
 ["ScripturaPhiloCongressu","filon-congressu-reader","filon-tlg016"],
 ["ScripturaPhiloDecalogo","filon-decalogo-reader","filon-tlg023"],
 ["ScripturaPhiloEbrietate","filon-ebrietate-reader","filon-tlg011"],
 ["ScripturaPhiloFuga","filon-fuga-reader","filon-tlg017"],
 ["ScripturaPhiloGigantibus","filon-gigantibus-reader","filon-tlg007"],
 ["ScripturaJosephus","josefo-reader","josefo-antiguidades"],
 ["ScripturaJosephusHistory","josefo-historia-reader",null]
];
const historyMap={guerra:"josefo-guerra",vida:"josefo-vida",apiao:"josefo-apiao"};
let active=null;
function deactivate(){
 if(active)window[active.api]?.hide();
 active=null;
 host.hidden=true;
}
function identify(spec,args){
 if(spec[0]!=="ScripturaJosephusHistory")return spec[2];
 let key=args[0];
 if(!key){
   const match=/^#josefo\/(?:historia\/)?(guerra|vida|apiao)\//.exec(location.hash);
   key=match?.[1];
 }
 return historyMap[key]||null;
}
function activate(spec,workId){
 const [api,panelId]=spec;
 const panel=document.getElementById(panelId);
 if(!panel||panel.hidden)return false;
 // Um único leitor ativo; os demais permanecem ocultos.
 for(const item of specs)if(item[0]!==api)window[item[0]]?.hide();
 if(panel.parentElement!==host)host.append(panel);
 active={api,workId};
 host.hidden=false;
 hub.hidden=false;
 hub.dataset.activeSection="autores-gregos";
 form.hidden=false;
 const cards=document.getElementById("site-section-cards");
 if(cards)cards.hidden=true;
 title.textContent="Escritores gregos";
 description.hidden=false;
 description.textContent="Selecione o autor, a obra e a referência. O texto original aparece abaixo.";
 if(profile)profile.hidden=true;
 window.ScripturaGreekAuthors?.setScope("autores-gregos");
 window.ScripturaGreekAuthors?.syncReaderSelection(workId);
 return true;
}
for(const spec of specs){
 const api=window[spec[0]];
 if(!api||typeof api.show!=="function")continue;
 const originalShow=api.show.bind(api);
 api.show=function(...args){
   const result=originalShow(...args);
   if(result!==false){
     const id=identify(spec,args);
     if(id)activate(spec,id);
   }
   return result;
 };
 if(typeof api.showFromHash==="function"){
   const originalHash=api.showFromHash.bind(api);
   api.showFromHash=function(...args){
     const result=originalHash(...args);
     if(result!==false){
       const id=identify(spec,[]);
       if(id)activate(spec,id);
     }
     return result;
   };
 }
}
// A mudança da obra limpa o leitor anterior antes de abrir o novo.
document.addEventListener("change",event=>{
 if(event.target!==work)return;
 deactivate();
 if(location.hash.startsWith("#filon/")||location.hash.startsWith("#josefo/")){
   const next=author.value?"#autores-gregos/"+author.value:"#autores-gregos";
   history.replaceState(null,"",next);
 }
},true);
// Permitir alternância de autores sem recarregar o documento.
author.addEventListener("change",()=>{
 deactivate();
 const id=author.value;
 if(id)window.ScripturaSections?.showGreekAuthor(id,false);
 else window.ScripturaSections?.showHub("autores-gregos");
 const hash=id?"#autores-gregos/"+id:"#autores-gregos";
 if(location.hash!==hash)history.pushState(null,"",hash);
});
window.ScripturaGreekInline={deactivate,get activeWork(){return active?.workId||null;}};
})();