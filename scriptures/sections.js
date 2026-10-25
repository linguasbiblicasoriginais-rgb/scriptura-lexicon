/* Scriptura Lexicon — seções principais e navegação acessível. */
(function(){
"use strict";
const hub=document.getElementById("site-section-hub");
const main=document.querySelector("main.container");
if(!hub||!main)return;
const title=document.getElementById("site-section-title");
const description=document.getElementById("site-section-description");
const cards=document.getElementById("site-section-cards");
const back=hub.querySelector(".site-back-link");
const dictionaryOptions=document.getElementById("site-dictionary-options");
const settings=document.getElementById("site-settings-content");
const originalVisibility=new Map(Array.from(main.children).map(node=>[node,node.hidden]));
const pages={
 inicio:["Biblioteca Scriptura Lexicon","Escrituras, tradições textuais e instrumentos de pesquisa filológica, organizados em áreas independentes."],
 escrituras:["Escrituras Sagradas","Selecione a edição para consultar livros, capítulos, versículos e suas palavras originais."],
 apocrifos:["Literatura apócrifa","Livros e acréscimos separados conforme o cânon de 66 livros adotado neste projeto. A classificação não pretende ser universal às tradições cristãs."],
 patristica:["Literatura patrística","Obras dos antigos autores cristãos, em suas línguas originais e com identificação das edições utilizadas."],
 pseudepigrafos:["Textos pseudepigráficos","Área destinada aos textos pseudepigráficos, com identificação futura de obras, versões e testemunhos."],
 dicionarios:["Dicionários e Léxicos","Escolha uma das tradições linguísticas abaixo para consultar as fontes lexicográficas."],
 configuracoes:["Configurações","Personalize a aparência. O tema selecionado aplica-se imediatamente e, quando possível, permanece salvo neste navegador."]
};
const categories=[
 ["escrituras","Escrituras Sagradas","Textos bíblicos organizados por edição e referência."],
 ["patristica","Literatura patrística","Stromata, de Clemente de Alexandria, em grego."],
 ["apocrifos","Literatura apócrifa","Livros e acréscimos de Ester e Daniel em leitura própria."],
 ["pseudepigrafos","Textos pseudepigráficos","Biblioteca de escritos pseudepigráficos."],
 ["dicionarios","Dicionários e Léxicos","Pesquisa em hebraico, aramaico, grego e latim."],
 ["configuracoes","Configurações","Alternância de temas claro e escuro."]
];
const editions={
 escrituras:[
  ["UXLC","Códice de Leningrado [L/Firkovich B19A]"],
  ["LXX","Septuaginta — Brenton (1851)"],
  ["SBLGNT","SBL Greek New Testament — Holmes (2010)"],
  ["TR","Textus Receptus — Scrivener (1894)"],
  ["VUL","Vulgata Clementina (1598)"],
  ["VULJ","Vulgata latina — tradição de Jerônimo (CrossWire)"],
  ["NA28","Texto crítico — NA28 (somente amostra)"],
  ["UBS5","Texto crítico — UBS5 (somente amostra)"]
 ],
 apocrifos:[
  ["LXX","Septuaginta — Brenton (1851)"],
  ["VUL","Vulgata Clementina (1598)"],
  ["VULJ","Vulgata latina — tradição de Jerônimo (CrossWire)"]
 ]
};
function closeMenu(){
 const drawer=document.getElementById("dictionary-menu");
 if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
}
function card(name,desc,attrs){
 const button=document.createElement("button");
 button.type="button";button.className="site-section-card";
 if(attrs.siteSection==="escrituras")button.classList.add("site-section-card--scriptures");
 const heading=document.createElement("strong");heading.textContent=name;
 const info=document.createElement("span");info.textContent=desc;
 button.append(heading,info);
 for(const [key,value] of Object.entries(attrs))button.dataset[key]=value;
 cards.append(button);
}
function showHub(section){
 if(!pages[section])return false;
 window.ScripturaPatristics?.hide();
 window.ScripturaScriptures?.hide();
 for(const node of main.children){
   if(node.classList.contains("header"))continue;
   node.hidden=node!==hub;
 }
 hub.hidden=false;
 title.textContent=pages[section][0];description.textContent=pages[section][1];
 back.hidden=section==="inicio";
 dictionaryOptions.hidden=section!=="dicionarios";
 settings.hidden=section!=="configuracoes";
 cards.replaceChildren();
 if(section==="inicio")for(const [code,name,desc] of categories)card(name,desc,{siteSection:code});
 if(section==="patristica")card("Stromata — Στρώματα","Clemente de Alexandria · texto grego integral · edição Otto Stählin (1906–1909)",{patristicWork:"stromata"});
 if(editions[section])for(const [code,name] of editions[section])
   card(name,section==="apocrifos"?"Consultar os livros apócrifos e os acréscimos disponíveis":"Consultar o texto desta edição",{siteEdition:code,siteEditionScope:section});
 for(const button of document.querySelectorAll(".site-menu-item")){
   const active=button.dataset.siteSection===section;
   button.classList.toggle("active",active);
   if(active)button.setAttribute("aria-current","page");
   else button.removeAttribute("aria-current");
 }
 return true;
}
function showDictionary(){
 window.ScripturaScriptures?.hide();
 for(const [node,wasHidden] of originalVisibility)node.hidden=wasHidden;
 hub.hidden=true;
 document.querySelectorAll(".site-menu-item").forEach(button=>{button.classList.remove("active");button.removeAttribute("aria-current")});
}
function openSection(section){
 if(!showHub(section))return false;
 closeMenu();
 if(window.location.hash!=="#"+section)history.pushState(null,"","#"+section);
 return true;
}
function handleHash(){
 if(window.ScripturaPatristics?.isPatristicHash())return window.ScripturaPatristics.showFromHash();
 if(window.ScripturaScriptures?.isScriptureHash())return window.ScripturaScriptures.showFromHash();
 const m=/^#(inicio|escrituras|apocrifos|patristica|pseudepigrafos|dicionarios|configuracoes)$/.exec(window.location.hash);
 if(m)return showHub(m[1]);
 if(!window.location.hash)return showHub("inicio");
 return false;
}
document.addEventListener("click",function(event){
 const section=event.target.closest("[data-site-section]");
 if(section){event.preventDefault();openSection(section.dataset.siteSection);return;}
 const work=event.target.closest("[data-patristic-work]");
 if(work?.dataset.patristicWork==="stromata"){event.preventDefault();window.ScripturaPatristics?.show(1,1,1,1,true);return;}
 const edition=event.target.closest("[data-site-edition]");
 if(edition){window.ScripturaScriptures?.show(edition.dataset.siteEdition,null,1,1,true,edition.dataset.siteEditionScope);}
});
window.ScripturaSections={openSection,showHub,showDictionary,handleHash,pages};
})();
