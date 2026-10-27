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
 josefo:["Obras de Flávio Josefo","Antiguidades Judaicas (20 livros) e A Guerra dos Judeus (7 livros): edições gregas de Benedikt Niese, transcritas pela Perseus Digital Library."],
 filon:["Obras de Fílon de Alexandria","Área destinada aos escritos filosóficos e exegéticos de Fílon de Alexandria. Ainda não há obras publicadas nesta seção."],
 dicionarios:["Dicionários e Léxicos","Escolha uma das tradições linguísticas abaixo para consultar as fontes lexicográficas."],
 configuracoes:["Configurações","Personalize a aparência. O tema selecionado aplica-se imediatamente e, quando possível, permanece salvo neste navegador."]
};
const categories=[
 ["escrituras","Escrituras Sagradas","Textos bíblicos organizados por edição e referência."],
 ["patristica","Literatura patrística","Stromata e Pedagogo, de Clemente de Alexandria, em grego."],
 ["apocrifos","Literatura apócrifa","Livros e acréscimos de Ester e Daniel em leitura própria."],
 ["pseudepigrafos","Textos pseudepigráficos","Biblioteca de escritos pseudepigráficos."],
 ["josefo","Obras de Flávio Josefo","Escritos históricos de Flávio Josefo."],
 ["filon","Obras de Fílon de Alexandria","Escritos filosóficos e exegéticos de Fílon de Alexandria."],
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
  ["VULJ","Vulgata latina — tradição de Jerônimo"],
  ["NA28","Novum Testamentum Graece — 28ª edição"],
  ["UBS5","The Greek New Testament — 5ª edição"]
 ],
 apocrifos:[
  ["LXX","Septuaginta — Brenton (1851)"],
  ["VUL","Vulgata Clementina (1598)"],
  ["VULJ","Vulgata latina — tradição de Jerônimo"]
 ]
};
/* Apresentação editorial das edições, sem alterar seus identificadores de leitura. */
const editionVisuals = {
  UXLC: {
    sigla: "L",
    titulo: "Códice de Leningrado",
    subtitulo: "Firkovich B19A",
    descricao: "Texto massorético da Bíblia Hebraica, com vocalização e acentuação tiberianas."
  },
  LXX: {
    sigla: "LXX",
    titulo: "Septuaginta",
    subtitulo: "Brenton (1851)",
    descricao: "Texto grego do Antigo Testamento na edição de Brenton."
  },
  SBLGNT: {
    sigla: "SBLGNT",
    titulo: "SBL Greek New Testament",
    subtitulo: "Holmes (2010)",
    descricao: "Edição do Novo Testamento grego organizada por Michael W. Holmes."
  },
  TR: {
    sigla: "TR",
    titulo: "Textus Receptus",
    subtitulo: "Scrivener (1894)",
    descricao: "Edição do texto grego do Novo Testamento associada à tradição do Textus Receptus."
  },
  VUL: {
    sigla: "VUL",
    titulo: "Vulgata Clementina",
    subtitulo: "Edição de 1598",
    descricao: "Texto bíblico latino da edição clementina."
  },
  VULJ: {
    sigla: "VULJ",
    titulo: "Vulgata latina",
    subtitulo: "Tradição de Jerônimo",
    descricao: "Texto latino da tradição da Vulgata disponibilizado por CrossWire."
  },
  NA28: {
    sigla: "NA28",
    titulo: "Novum Testamentum Graece",
    subtitulo: "28ª edição",
    descricao: "Texto crítico do Novo Testamento grego. Somente amostra."
  },
  UBS5: {
    sigla: "UBS5",
    titulo: "The Greek New Testament",
    subtitulo: "5ª edição",
    descricao: "Texto crítico do Novo Testamento grego. Somente amostra."
  }
};

function editionCard(code, name, scope) {
  const visual = editionVisuals[code];
  if (!visual) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "site-section-card site-section-card--edition";
  button.dataset.siteEdition = code;
  button.dataset.siteEditionScope = scope;
  button.setAttribute("aria-label", "Consultar " + name);

  const sigla = document.createElement("strong");
  sigla.className = "edition-sigla";
  sigla.textContent = visual.sigla;

  const titulo = document.createElement("span");
  titulo.className = "edition-name";
  titulo.textContent = visual.titulo;

  const subtitulo = document.createElement("span");
  subtitulo.className = "edition-subtitle";
  subtitulo.textContent = visual.subtitulo;

  const descricao = document.createElement("small");
  descricao.className = "edition-description";
  descricao.textContent = visual.descricao;

  button.append(sigla, titulo, subtitulo, descricao);
  cards.append(button);
}

function closeMenu(){
 const drawer=document.getElementById("dictionary-menu");
 if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
}
function card(name,desc,attrs){
 const button=document.createElement("button");
 button.type="button";button.className="site-section-card";
 if(attrs.siteSection==="escrituras")button.classList.add("site-section-card--scriptures");
 if(attrs.siteSection==="patristica")button.classList.add("site-section-card--patristic");
 if(attrs.siteSection==="configuracoes")button.classList.add("site-section-card--settings");
 if(attrs.siteSection==="josefo")button.classList.add("site-section-card--josephus");
 const heading=document.createElement("strong");heading.textContent=name;
 const info=document.createElement("span");info.textContent=desc;
 button.append(heading,info);
 for(const [key,value] of Object.entries(attrs))button.dataset[key]=value;
 cards.append(button);
}
function showHub(section){
 if(!pages[section])return false;
 window.ScripturaPatristics?.hide();
 window.ScripturaPaedagogus?.hide();
 window.ScripturaJosephus?.hide();
 window.ScripturaJosephusHistory?.hide();
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
 cards.classList.toggle("site-section-cards--editions", Boolean(editions[section]));
 if(section==="inicio")for(const [code,name,desc] of categories)card(name,desc,{siteSection:code});
 if(section==="patristica"){
  card("Stromata — Στρώματα","Clemente de Alexandria · texto grego integral · edição Otto Stählin (1906–1909)",{patristicWork:"stromata"});
  card("Pedagogo — Παιδαγωγός","Clemente de Alexandria · texto grego integral · edição Otto Stählin (1905)",{patristicWork:"paedagogus"});
 }
 if(section==="josefo"){
  card("Antiguidades Judaicas — Ἰουδαϊκὴ ἀρχαιολογία","20 livros · 257 capítulos · 7.376 seções · texto grego integral · Niese / Perseus",{josefoWork:"antiguidades"});
  card("A Guerra dos Judeus — Ἰουδαϊκοῦ πολέμου πρὸς Ῥωμαίους","7 livros · 110 capítulos · 4.001 seções · texto grego integral · Niese / Perseus",{josefoWork:"guerra"});
 }
 if(editions[section])for(const [code,name] of editions[section])
   editionCard(code,name,section);
 for(const button of document.querySelectorAll(".site-menu-item")){
   const active=button.dataset.siteSection===section;
   button.classList.toggle("active",active);
   if(active)button.setAttribute("aria-current","page");
   else button.removeAttribute("aria-current");
 }
 return true;
}
function showDictionary(){
 window.ScripturaJosephusHistory?.hide();
 window.ScripturaJosephus?.hide();
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
 if(window.ScripturaJosephusHistory?.isHistoryHash())return window.ScripturaJosephusHistory.showFromHash();
 window.ScripturaJosephusHistory?.hide();
 if(window.ScripturaJosephus?.isJosephusHash())return window.ScripturaJosephus.showFromHash();
 window.ScripturaJosephus?.hide();
 if(window.ScripturaPaedagogus?.isPaedagogusHash())return window.ScripturaPaedagogus.showFromHash();
 if(window.ScripturaPatristics?.isPatristicHash())return window.ScripturaPatristics.showFromHash();
 if(window.ScripturaScriptures?.isScriptureHash())return window.ScripturaScriptures.showFromHash();
 const m=/^#(inicio|escrituras|apocrifos|patristica|pseudepigrafos|josefo|filon|dicionarios|configuracoes)$/.exec(window.location.hash);
 if(m)return showHub(m[1]);
 if(!window.location.hash)return showHub("inicio");
 return false;
}
document.addEventListener("click",function(event){
 const section=event.target.closest("[data-site-section]");
 if(section){event.preventDefault();openSection(section.dataset.siteSection);return;}
 const work=event.target.closest("[data-patristic-work]");
 if(work?.dataset.patristicWork==="stromata"){event.preventDefault();window.ScripturaPatristics?.show(1,1,1,1,true);return;}
 if(work?.dataset.patristicWork==="paedagogus"){event.preventDefault();window.ScripturaPaedagogus?.show(1,"1",null,1,true);return;}
 const josefo=event.target.closest("[data-josefo-work]");
 if(josefo){
  event.preventDefault();
  if(josefo.dataset.josefoWork==="antiguidades")window.ScripturaJosephus?.show(1,1,27,true);
  else window.ScripturaJosephusHistory?.show(josefo.dataset.josefoWork,1,josefo.dataset.josefoWork==="guerra"?0:1,1,true);
  return;
 }
 const edition=event.target.closest("[data-site-edition]");
 if(edition){window.ScripturaScriptures?.show(edition.dataset.siteEdition,null,1,1,true,edition.dataset.siteEditionScope);}
});
window.ScripturaSections={openSection,showHub,showDictionary,handleHash,pages};
})();
