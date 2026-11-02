/* Scriptura Lexicon — seções principais e navegação acessível. */
(function(){
"use strict";
const hub=document.getElementById("site-section-hub");
const main=document.querySelector("main.container");
if(!hub||!main)return;
const title=document.getElementById("site-section-title");
const description=document.getElementById("site-section-description");
const philoProfile=document.getElementById("site-philo-profile");
const cards=document.getElementById("site-section-cards");
const dictionaryOptions=document.getElementById("site-dictionary-options");
const settings=document.getElementById("site-settings-content");
const greekAuthors=document.getElementById("site-greek-authors-content");
const greekInline=document.getElementById("greek-inline-reader");
const originalVisibility=new Map(Array.from(main.children).map(node=>[node,node.hidden]));
const pages={
 inicio:["Biblioteca Scriptura Lexicon","Escrituras, tradições textuais e instrumentos de pesquisa filológica, organizados em áreas independentes."],
 escrituras:["Escrituras Sagradas","Selecione a edição para consultar livros, capítulos, versículos e suas palavras originais."],
 apocrifos:["Literatura apócrifa","Livros e acréscimos separados conforme o cânon de 66 livros adotado neste projeto. A classificação não pretende ser universal às tradições cristãs."],
 patristica:["Literatura patrística","Obras dos antigos autores cristãos, em suas línguas originais e com identificação das edições utilizadas."],
 pseudepigrafos:["Textos pseudepigráficos","Área destinada aos textos pseudepigráficos, com identificação futura de obras, versões e testemunhos."],
 josefo:["Obras de Flávio Josefo","Antiguidades Judaicas (20 livros) e A Guerra dos Judeus (7 livros): edições gregas de Benedikt Niese, transcritas pela Perseus Digital Library."],
 filon:["Fílon de Alexandria",""],
 "autores-gregos":["Escritores gregos","Selecione um escritor e abra suas obras gregas nos leitores completos, com a numeração própria de cada edição."],
 dicionarios:["Dicionários e Léxicos","Escolha uma das tradições linguísticas abaixo para consultar as fontes lexicográficas."],
 configuracoes:["Configurações","Personalize a aparência. O tema selecionado aplica-se imediatamente e, quando possível, permanece salvo neste navegador."]
};
const categories=[
 ["escrituras","Escrituras Sagradas","Textos bíblicos organizados por edição e referência."],
 ["patristica","Literatura patrística","Stromata e Pedagogo, de Clemente de Alexandria, em grego."],
 ["apocrifos","Literatura apócrifa","Livros e acréscimos de Ester e Daniel em leitura própria."],
 ["pseudepigrafos","Textos pseudepigráficos","Biblioteca de escritos pseudepigráficos."],
 ["autores-gregos","Escritores gregos","Obras de Flávio Josefo e Fílon de Alexandria, com acesso aos textos e às edições de origem."],
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
 if(attrs.siteSection==="autores-gregos")button.classList.add("site-section-card--greek-authors");
 if(attrs.siteSection==="dicionarios")button.classList.add("site-section-card--lexicons");
 if(attrs.siteSection==="apocrifos")button.classList.add("site-section-card--apocrypha");
 if(attrs.siteSection==="pseudepigrafos")button.classList.add("site-section-card--pseudepigrapha");
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
 window.ScripturaPhilo?.hide();
 window.ScripturaPhiloAeternitate?.hide();
 window.ScripturaPhiloAgricultura?.hide();
 window.ScripturaPhiloCherubim?.hide();
 window.ScripturaPhiloConfusione?.hide();
 window.ScripturaPhiloCongressu?.hide();
 window.ScripturaPhiloDecalogo?.hide();
 window.ScripturaPhiloEbrietate?.hide();
 window.ScripturaPhiloFuga?.hide();
 window.ScripturaPhiloGigantibus?.hide();
 window.ScripturaJosephus?.hide();
 window.ScripturaJosephusHistory?.hide();
 window.ScripturaScriptures?.hide();
 for(const node of main.children){
   if(node.classList.contains("header"))continue;
   node.hidden=node!==hub;
 }
 hub.hidden=false;
 hub.dataset.activeSection=section;
 if(greekInline)greekInline.hidden=true;
 title.textContent=pages[section][0];description.textContent=pages[section][1];
 description.hidden=false;
 if(philoProfile)philoProfile.hidden=true;
 dictionaryOptions.hidden=section!=="dicionarios";
 settings.hidden=section!=="configuracoes";
 if(greekAuthors)greekAuthors.hidden=section!=="autores-gregos"&&section!=="patristica";
 if(section==="patristica"||section==="autores-gregos")
  window.ScripturaGreekAuthors?.setScope(section);
 cards.replaceChildren();
 // Escritores e patrísticos usam exclusivamente os comboboxes, nunca cartões.
 cards.hidden=section==="autores-gregos"||section==="patristica";
 cards.classList.toggle("site-section-cards--editions", Boolean(editions[section]));
 if(section==="inicio")for(const [code,name,desc] of categories)card(name,desc,{siteSection:code});
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
const greekAuthorNames=Object.freeze({
 josefo:"Flávio Josefo",
 "clemente-alexandria":"Clemente de Alexandria",
 filon:"Fílon de Alexandria"
});
function showGreekAuthor(authorId,push=true){
 if(!Object.prototype.hasOwnProperty.call(greekAuthorNames,authorId))return false;
 if(authorId==="clemente-alexandria"){
  if(!showHub("patristica"))return false;
  if(push&&location.hash!=="#patristica")history.pushState(null,"","#patristica");
  return true;
 }
 if(!showHub("autores-gregos"))return false;
 if(greekAuthors)greekAuthors.hidden=false;
 window.ScripturaGreekAuthors?.selectAuthor(authorId);
 title.textContent=greekAuthorNames[authorId];
 if(philoProfile)philoProfile.hidden=authorId!=="filon";
 description.hidden=authorId==="filon";
 description.textContent=authorId==="filon"?"":"Selecione a obra no formulário para abrir o leitor integral.";
 cards.replaceChildren();
 if(push&&location.hash!=="#autores-gregos/"+authorId)history.pushState(null,"","#autores-gregos/"+authorId);
 return true;
}
function showDictionary(){
 window.ScripturaPhilo?.hide();
 window.ScripturaPhiloAeternitate?.hide();
 window.ScripturaPhiloAgricultura?.hide();
 window.ScripturaPhiloCherubim?.hide();
 window.ScripturaPhiloConfusione?.hide();
 window.ScripturaPhiloCongressu?.hide();
 window.ScripturaPhiloDecalogo?.hide();
 window.ScripturaPhiloEbrietate?.hide();
 window.ScripturaPhiloFuga?.hide();
 window.ScripturaPhiloGigantibus?.hide();
 window.ScripturaJosephusHistory?.hide();
 window.ScripturaJosephus?.hide();
 window.ScripturaScriptures?.hide();
 for(const [node,wasHidden] of originalVisibility)node.hidden=wasHidden;
 hub.hidden=true;
 if(greekInline)greekInline.hidden=true;
 document.querySelectorAll(".site-menu-item").forEach(button=>{button.classList.remove("active");button.removeAttribute("aria-current")});
}
function openSection(section){
 if(section==="josefo"||section==="filon")return showGreekAuthor(section,true);
 if(!showHub(section))return false;
 closeMenu();
 if(window.location.hash!=="#"+section)history.pushState(null,"","#"+section);
 if(section==="inicio")window.scrollTo({top:0,behavior:"instant"});
 return true;
}
function handleHash(){
 if(window.ScripturaPhilo?.isPhiloHash())return window.ScripturaPhilo.showFromHash();
 if(window.ScripturaPhiloAeternitate?.isPhiloHash())return window.ScripturaPhiloAeternitate.showFromHash();
 if(window.ScripturaPhiloAgricultura?.isPhiloHash())return window.ScripturaPhiloAgricultura.showFromHash();
 if(window.ScripturaPhiloCherubim?.isPhiloHash())return window.ScripturaPhiloCherubim.showFromHash();
 if(window.ScripturaPhiloConfusione?.isPhiloHash())return window.ScripturaPhiloConfusione.showFromHash();
 if(window.ScripturaPhiloCongressu?.isPhiloHash())return window.ScripturaPhiloCongressu.showFromHash();
 if(window.ScripturaPhiloDecalogo?.isPhiloHash())return window.ScripturaPhiloDecalogo.showFromHash();
 if(window.ScripturaPhiloEbrietate?.isPhiloHash())return window.ScripturaPhiloEbrietate.showFromHash();
 if(window.ScripturaPhiloFuga?.isPhiloHash())return window.ScripturaPhiloFuga.showFromHash();
 if(window.ScripturaPhiloGigantibus?.isPhiloHash())return window.ScripturaPhiloGigantibus.showFromHash();
 if(window.ScripturaJosephusHistory?.isHistoryHash())return window.ScripturaJosephusHistory.showFromHash();
 window.ScripturaJosephusHistory?.hide();
 if(window.ScripturaJosephus?.isJosephusHash())return window.ScripturaJosephus.showFromHash();
 window.ScripturaJosephus?.hide();
 if(window.ScripturaPaedagogus?.isPaedagogusHash())return window.ScripturaPaedagogus.showFromHash();
 if(window.ScripturaPatristics?.isPatristicHash())return window.ScripturaPatristics.showFromHash();
 if(window.ScripturaScriptures?.isScriptureHash())return window.ScripturaScriptures.showFromHash();
 const greek=/^#autores-gregos\/(josefo|clemente-alexandria|filon)$/.exec(window.location.hash);
 if(greek){
  if(greek[1]==="clemente-alexandria"){
   history.replaceState(null,"","#patristica");
   return showHub("patristica");
  }
  return showGreekAuthor(greek[1],false);
 }
 if(window.location.hash==="#josefo")return showGreekAuthor("josefo",false);
 if(window.location.hash==="#filon")return showGreekAuthor("filon",false);
 const m=/^#(inicio|escrituras|apocrifos|patristica|pseudepigrafos|autores-gregos|dicionarios|configuracoes)$/.exec(window.location.hash);
 if(m)return showHub(m[1]);
 if(!window.location.hash)return showHub("inicio");
 return false;
}
document.addEventListener("click",function(event){
 const author=event.target.closest("[data-greek-author]");
 if(author){event.preventDefault();showGreekAuthor(author.dataset.greekAuthor,true);closeMenu();return;}
 const greekWork=event.target.closest("[data-greek-work]");
 if(greekWork){event.preventDefault();if(!window.ScripturaGreekAuthors?.openWork(greekWork.dataset.greekWork))description.textContent="Leitor não disponível.";return;}
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
window.ScripturaSections={openSection,showHub,showGreekAuthor,showDictionary,handleHash,pages};
})();
