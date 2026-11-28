"use strict";
/* BDB-H/PT: remissões lexicais internas (sem URLs relativos da Sefaria). */
(function(){
  document.addEventListener("click",function(event){
    const target=event.target instanceof Element
      ? event.target.closest(".bdbh-pt-section a.bdbh-pt-xref[data-bdbh-lemma]")
      : null;
    if(!target) return;
    event.preventDefault();
    const raw=target.dataset.bdbhLemma||"";
    const lemma=raw.replace(/[¹²³⁴⁵⁶⁷⁸⁹⁰]/gu,"").trim();
    const input=document.getElementById("search-input");
    const source=document.getElementById("source-filter");
    if(!lemma||!input||!source||!window.ScripturaRunSearch) return;
    const dictionary=target.dataset.bdbhDictionary==="aramaico"?"aramaico":"hebraico";
    const sourceId=dictionary==="aramaico"?"BDBA":"BDB";
    if(window.ScripturaGetActiveDictionary?.()!==dictionary){
      document.querySelector('[data-dictionary-target="'+dictionary+'"]')?.click();
    }
    if(Array.from(source.options).some(option=>option.value===sourceId)&&source.value!==sourceId){
      source.value=sourceId;
      source.dispatchEvent(new Event("change",{bubbles:true}));
    }
    input.value=lemma;
    window.ScripturaRunSearch();
    document.getElementById("search-table-wrapper")?.scrollIntoView({block:"start",behavior:"smooth"});
  });
})();
