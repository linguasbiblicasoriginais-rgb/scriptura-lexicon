/* Scriptura Lexicon — catálogo extensível de autores e obras de língua grega.
   Registre obras com níveis de referência específicos da obra/edição;
   nunca se pressupõe que toda obra possua livro, capítulo, seção etc. */
(function(){
"use strict";
const authors = new Map([
  ["filon", {id:"filon",name:"Fílon de Alexandria"}],
  ["josefo", {id:"josefo",name:"Flávio Josefo"}],
  ["clemente-alexandria", {id:"clemente-alexandria",name:"Clemente de Alexandria"}]
]);
const works = new Map(); // Sem obras fictícias; futuro preenchimento editorial.
let activeScope="autores-gregos";
const scopeAllowsAuthor=id=>activeScope==="patristica"?id==="clemente-alexandria":id!=="clemente-alexandria";
const ui = {
  form:document.getElementById("greek-authors-search"),
  author:document.getElementById("greek-author"),
  work:document.getElementById("greek-work"),
  fields:document.getElementById("greek-authors-reference-fields"),
  status:document.getElementById("greek-authors-status"),
  results:document.getElementById("greek-authors-results"),
  submit:document.getElementById("greek-authors-submit"),
  title:document.getElementById("greek-authors-search-title"),
  intro:document.querySelector("#site-greek-authors-content .greek-authors-intro")
};
function option(value,label){
  const node=document.createElement("option");
  node.value=value;node.textContent=label;
  return node;
}
function sorted(values){return values.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));}
function getWorks(authorId){
  return Array.from(works.values()).filter(w=>w.authorId===authorId&&scopeAllowsAuthor(w.authorId))
    .sort((a,b)=>authorId==="filon"?a.id.localeCompare(b.id,"en"):a.title.localeCompare(b.title,"pt-BR"));
}
function selectAuthor(authorId){
  if(!ui.author)return false;
  refreshAuthors();
  ui.author.value=authors.has(authorId)&&scopeAllowsAuthor(authorId)?authorId:"";
  refreshWorks();
  return !!ui.author.value;
}
function refreshAuthors(){
  if(!ui.author)return;
  const current=ui.author.value;
  const allowed=sorted(Array.from(authors.values()).filter(a=>scopeAllowsAuthor(a.id)));
  ui.author.replaceChildren(option("","Selecione um autor"),...allowed.map(a=>option(a.id,a.name)));
  if(allowed.some(a=>a.id===current))ui.author.value=current;
}
function setScope(scope){
 if(scope!=="patristica"&&scope!=="autores-gregos")return false;
 activeScope=scope;
 if(ui.title)ui.title.textContent=scope==="patristica"
  ?"Literatura patrística — obras cadastradas":"Escritores gregos — obras cadastradas";
 if(ui.intro)ui.intro.textContent=scope==="patristica"
  ?"Clemente de Alexandria: Stromata e Pedagogo. A numeração de cada edição é preservada."
  :"Selecione um escritor e uma obra para consultar o texto original e as divisões da edição.";
 refreshAuthors();
 if(scope==="patristica")ui.author.value="clemente-alexandria";
 else if(!scopeAllowsAuthor(ui.author.value))ui.author.value="";
 refreshWorks();
 return true;
}
function field(name,key,disabled){
  const wrap=document.createElement("div");wrap.className="greek-authors-field";
  const label=document.createElement("label");
  const input=document.createElement("input");
  input.type="text";input.id="greek-reference-"+key;
  input.name=key;input.autocomplete="off";input.placeholder="Qualquer "+name.toLowerCase();
  input.disabled=disabled;input.maxLength=100;
  label.htmlFor=input.id;label.textContent=name;
  wrap.append(label,input);
  return wrap;
}
function currentWork(){return works.get(ui.work?.value||"")||null;}
function renderFields(){
  if(!ui.fields)return;
  const work=currentWork();
  // As obras locais de Fílon abrem automaticamente, sem botão intermediário.
  // As outras obras mantêm seus controles de consulta intactos.
  if(ui.submit)ui.submit.hidden=!!work&&!!publishedOpeners[work.id]&&work.authorId!=="clemente-alexandria";
  if(work && (publishedOpeners[work.id] || externalPhiloLinks[work.id])){
    ui.fields.replaceChildren();
    if(ui.submit)ui.submit.textContent=externalPhiloLinks[work.id]
      ?"Consultar no Perseus ↗":"Abrir texto integral";
    return;
  }
  if(ui.submit)ui.submit.textContent="Pesquisar trechos";
  const defs=work?.levels?.length ? work.levels : [
    {key:"capitulo-secao",label:"Capítulo/Seção"},
    {key:"subsecao",label:"Subseção"}
  ];
  ui.fields.replaceChildren(...defs.map(level=>field(level.label,level.key,!work)));
}
function setStatus(message){
  if(ui.status)ui.status.textContent=message;
}
function refreshWorks(){
  if(!ui.work||!ui.author)return;
  const chosen=ui.work.value,author=ui.author.value;
  const available=getWorks(author);
  ui.work.replaceChildren(option("","Selecione uma obra"),...available.map(w=>option(w.id,w.title)));
  if(available.some(w=>w.id===chosen))ui.work.value=chosen;
  ui.work.disabled=!available.length;
  if(ui.submit)ui.submit.disabled=!ui.work.value;
  if(ui.results)ui.results.replaceChildren();
  renderFields();
  if(!author)setStatus("Selecione um autor para consultar as obras disponíveis.");
  else if(!available.length)setStatus("Nenhuma obra cadastrada para este autor. O catálogo será preenchido somente com textos e referências documentados.");
  else if(!ui.work.value)setStatus("Selecione uma obra; os níveis de referência serão adaptados à sua estrutura.");
  else if(ui.work.value==="filon-tlg020")setStatus("De Abrahamo: texto grego integral com notas da edição Cohn (1902).");
  else if(ui.work.value==="filon-tlg029")setStatus("De Aeternitate Mundi: texto grego integral com notas da edição Cohn–Reiter (1915).");
  else if(ui.work.value==="filon-tlg009")setStatus("De Agricultura: texto grego integral com notas da edição Wendland (1897).");
  else if(ui.work.value==="filon-tlg001")setStatus("De Opificio Mundi: texto grego integral com notas da edição Cohn (1896).");
  else if(ui.work.value==="filon-tlg002-l1")setStatus("Legum allegoriarum, Livro I: texto grego integral com notas da edição Cohn (1896).");
  else if(ui.work.value==="filon-tlg003")setStatus("De Cherubim: texto grego integral com notas da edição Cohn (1896).");
  else if(ui.work.value==="filon-tlg013")setStatus("De Confusione Linguarum: texto grego integral com notas da edição Wendland (1897).");
  else if(ui.work.value==="filon-tlg016")setStatus("De Congressu Eruditionis Gratia: texto grego integral com notas da edição Wendland (1898).");
  else if(ui.work.value==="filon-tlg023")setStatus("De Decalogo: texto grego integral com notas da edição Cohn (1902).");
  else if(ui.work.value==="filon-tlg011")setStatus("De Ebrietate: texto grego integral com notas da edição Wendland (1897).");
  else if(ui.work.value==="filon-tlg017")setStatus("De Fuga Et Inventione: texto grego integral com notas da edição Wendland (1898).");
  else if(ui.work.value==="filon-tlg007")setStatus("De Gigantibus: texto grego integral com notas da edição Wendland (1897).");
  else if(externalPhiloLinks[ui.work.value])setStatus("Consulta externa ao Perseus/Scaife: edições gregas disponíveis na biblioteca de origem; o texto ainda não foi incorporado ao acervo local.");
  else setStatus("Preencha os níveis desejados ou pesquise todos os trechos cadastrados desta obra.");
}
function registerAuthor(value){
  if(!value||typeof value.id!=="string"||!/^[a-z][a-z0-9-]*$/.test(value.id)||
     typeof value.name!=="string"||!value.name.trim())throw new Error("Autor inválido.");
  authors.set(value.id,{id:value.id,name:value.name.trim()});
  refreshAuthors();
  refreshWorks();
}
function registerWork(value){
  if(!value||typeof value.id!=="string"||!/^[a-z][a-z0-9-]*$/.test(value.id)||
     !authors.has(value.authorId)||typeof value.title!=="string"||!value.title.trim()||
     !Array.isArray(value.levels)||!value.levels.every(level=>
       level&&typeof level.key==="string"&&/^[a-z][a-z0-9-]*$/.test(level.key)&&
       typeof level.label==="string"&&level.label.trim()) ||
     new Set(value.levels.map(level=>level.key)).size!==value.levels.length||
     (value.passages!==undefined&&!Array.isArray(value.passages)))throw new Error("Obra ou esquema de referência inválido.");
  if(value.passages?.some(p=>!p||!p.reference||typeof p.reference!=="object"))throw new Error("Referência de trecho inválida.");
  works.set(value.id,{
    id:value.id,authorId:value.authorId,title:value.title.trim(),
    levels:value.levels.map(level=>({key:level.key,label:level.label.trim()})),
    passages:(value.passages||[]).map(p=>({
      reference:{...p.reference},text:typeof p.text==="string"?p.text:"",
      translation:typeof p.translation==="string"?p.translation:""
    }))
  });
  refreshWorks();
}
function search(event){
  event.preventDefault();
  const work=currentWork();
  if(!work||!scopeAllowsAuthor(work.authorId)){setStatus("Selecione uma obra cadastrada nesta área.");return;}
  if(publishedOpeners[work.id] || externalPhiloLinks[work.id]){
    if(!openWork(work.id))setStatus("Não foi possível abrir a consulta desta obra.");
    return;
  }
  if(ui.results)ui.results.replaceChildren();
  const terms=new Map();
  work.levels.forEach(level=>{
    const input=Array.from(ui.fields.querySelectorAll("input")).find(node=>node.name===level.key);
    const term=input?.value.trim();
    if(term)terms.set(level.key,term);
  });
  const matches=work.passages.filter(p=>Array.from(terms).every(([key,term])=>
    String(p.reference[key]??"").trim().toLocaleLowerCase("pt-BR")===term.toLocaleLowerCase("pt-BR")
  ));
  setStatus(!work.passages.length?"Esta obra ainda não possui trechos publicados no acervo.":
    !matches.length?"Nenhum trecho encontrado com estas referências.":
    matches.length+" trecho(s) encontrado(s).");
  if(!ui.results)return;
  matches.slice(0,100).forEach(p=>{
    const article=document.createElement("article");article.className="greek-authors-result";
    const heading=document.createElement("strong");
    const citation=work.levels.filter(x=>p.reference[x.key]!==undefined)
      .map(x=>x.label+" "+p.reference[x.key]).join(" · ");
    heading.textContent=work.title+(citation?" · "+citation:"");
    article.append(heading);
    if(p.text){const source=document.createElement("p");source.lang="grc";source.textContent=p.text;article.append(source);}
    if(p.translation){const translation=document.createElement("p");translation.className="greek-authors-translation";translation.textContent=p.translation;article.append(translation);}
    ui.results.append(article);
  });
  if(matches.length>100)setStatus(matches.length+" trechos encontrados; mostrando os primeiros 100. Refine a referência.");
}
/* Índice bibliográfico documentado no Perseus/Scaife (TLG 0018).
 * Não confundir links externos de leitura com corpora já publicados no site.
 * Fonte: https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0018/
 * O portal de origem oferece as edições gregas e respectivas traduções. */
const externalPhiloCatalog=Object.freeze([
  [
    "tlg001",
    "Περὶ τῆς κατὰ μωυσέα κοσμοποιίας",
    "De opificio mundi"
  ],
  [
    "tlg002",
    "Νόμων ἱερῶν ἀλληγορίας τῶν μετὰ τὴν ἑξαήμερον",
    "Legum allegoriarum"
  ],
  [
    "tlg003",
    "Περὶ τῶν Χερουβὶμ καὶ τῆς φλογίνης ῥομφαίας καὶ τοῦ κτισθέντος πρώτου ἐξ ἀνθρώπου Κάιν",
    "De cherubim"
  ],
  [
    "tlg004",
    "Περὶ γενέσεως Ἄβελ καὶ ὧν αὐτός τε καὶ ὁ ἀδελφὸς αὐτοῦ Κάιν ἱερουργοῦσιν",
    "De sacrificiis Abelis et Caini"
  ],
  [
    "tlg005",
    "Περὶ τοῦ τὸ χεῖρον τῷ κρείττονι φιλεῖν ἐπιτίθεσθαι",
    "Quod deterius potiori insidiari soleat"
  ],
  [
    "tlg006",
    "Περὶ τῶν τοῦ δοκησισόφου Κάιν ἐγγόνων καὶ ὡς μετανάστης γίνεται",
    "De posteritate Caini"
  ],
  [
    "tlg007",
    "Περὶ γιγάντων",
    "De gigantibus"
  ],
  [
    "tlg008",
    "Ὅτι ἄτρεπτον τὸ θεῖον",
    "Quod Deus sit immutabilis"
  ],
  [
    "tlg009",
    "Περὶ γεωργίας",
    "De agricultura"
  ],
  [
    "tlg010",
    "Περὶ φυτουργίας Νῶε τὸ δεύτερον",
    "De plantatione"
  ],
  [
    "tlg011",
    "Περὶ μέθης",
    "De ebrietate"
  ],
  [
    "tlg012",
    "Περὶ ὧν νήψας ὁ Νῶε εὔχεται καὶ καταρᾶται",
    "De sobrietate"
  ],
  [
    "tlg013",
    "Περὶ συγχύσεως διαλέκτων",
    "De confusione linguarum"
  ],
  [
    "tlg014",
    "Περὶ ἀποικίας",
    "De migratione Abrahami"
  ],
  [
    "tlg015",
    "Περὶ τοῦ τίς ὁ τῶν θείων ἐστὶν κληρονόμος καὶ περὶ τῆς εἰς τὰ ἴσα καὶ ἐναντία τομῆς",
    "Quis rerum divinarum heres sit"
  ],
  [
    "tlg016",
    "Περὶ τῆς πρὸς τὰ προπαιδεύματα συνόδου",
    "De congressu eruditionis gratia"
  ],
  [
    "tlg017",
    "Περὶ φυγῆς καὶ εὑρέσεως",
    "De fuga et inventione"
  ],
  [
    "tlg018",
    "Περὶ τῶν μετονομαζομένων καὶ ὧν ἕνεκα μετονομάζονται",
    "De mutatione nominum"
  ],
  [
    "tlg019",
    "Περὶ τοῦ θεοπέμπτους εἶναι τοὺς ὀνείρους",
    "De somniis"
  ],
  [
    "tlg020",
    "Βίος σοφοῦ τοῦ κατὰ διδασκαλίαν τελειωθέντος ἢ νόμων ἀγράφων, ὅ ἐστι περὶ Ἀβραάμ",
    "De Abrahamo"
  ],
  [
    "tlg021",
    "Βίος πολιτικοῦ ὅπερ ἐστὶ περὶ Ἰωσήφ",
    "De Iosepho"
  ],
  [
    "tlg022",
    "Περὶ τοῦ βίου Μωυσέως",
    "De vita Mosis"
  ],
  [
    "tlg023",
    "Περὶ τῶν δέκα λόγων, οἳ κεφάλαια νόμων εἰσίν",
    "De decalogo"
  ],
  [
    "tlg024",
    "Περὶ τῶν ἐν μέρει διαταγμάτων εἰς δύο κεφάλαια τῶν δέκα λόγων",
    "Specialibus legibus"
  ],
  [
    "tlg025",
    "Περὶ ἀρετῶν ἃς σὺν ἄλλαις ἀνέγραψε Μωυσῆς",
    "De virtutibus"
  ],
  [
    "tlg026",
    "Περὶ ἄθλων καὶ ἐπιτιμίων καὶ ἀρῶν",
    "De praemiis et poenis et exsecrationibus"
  ],
  [
    "tlg027",
    "Περὶ τοῦ πάντα σπουδαῖον ἐλεύθερον εἶναι",
    "Quod omnis probus liber sit"
  ],
  [
    "tlg028",
    "Περὶ βίου θεωρητικοῦ",
    "De vita contemplativa"
  ],
  [
    "tlg029",
    "Περὶ ἀφθαρσίας κόσμου",
    "De aeternitate mundi"
  ],
  [
    "tlg030",
    "Εἰς Φλάκκον",
    "In Flaccum"
  ],
  [
    "tlg031",
    "Πρεσβεία πρὸς Γάιον",
    "Legatio ad Gaium"
  ]
]);
 // Livros distintos, sem fingir que esses textos já foram incorporados localmente.
 const philoBookCounts=Object.freeze({tlg002:3,tlg019:2,tlg022:2,tlg024:4});
 const romanBooks=Object.freeze(["I","II","III","IV"]);
 const philoLocalIds=new Set(["tlg001","tlg003","tlg007","tlg009","tlg011","tlg013","tlg016","tlg017","tlg020","tlg023","tlg029"]);
 const externalPhiloLinks=Object.freeze(Object.fromEntries(
   externalPhiloCatalog.filter(([urn])=>!philoLocalIds.has(urn)).flatMap(([urn])=>
     Array.from({length:philoBookCounts[urn]||1},(_,i)=>[
       "filon-"+urn+(philoBookCounts[urn]?"-l"+(i+1):""),
       "https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018."+urn+"/"
     ]).filter(([id])=>id!=="filon-tlg002-l1")
   )
 ));
 // Catálogo relacional: a obra aponta ao leitor original; corpora e IDs não são copiados.
const publishedOpeners=Object.freeze({
  "josefo-antiguidades":()=>window.ScripturaJosephus?.show(1,1,27,true),
  "josefo-guerra":()=>window.ScripturaJosephusHistory?.show("guerra",1,0,1,true),
  "josefo-vida":()=>window.ScripturaJosephusHistory?.show("vida",1,1,1,true),
  "josefo-apiao":()=>window.ScripturaJosephusHistory?.show("apiao",1,1,1,true),
  "clemente-stromata":()=>window.ScripturaPatristics?.show(1,1,1,1,true),
  "clemente-paedagogus":()=>window.ScripturaPaedagogus?.show(1,"1",null,1,true),
  "filon-tlg020":()=>window.ScripturaPhilo?.show(1,true),
  "filon-tlg029":()=>window.ScripturaPhiloAeternitate?.show(1,true),
  "filon-tlg009":()=>window.ScripturaPhiloAgricultura?.show(1,true),
  "filon-tlg001":()=>window.ScripturaPhiloOpificio?.show(1,true),
  "filon-tlg002-l1":()=>window.ScripturaPhiloLegumI?.show(1,true),
  "filon-tlg003":()=>window.ScripturaPhiloCherubim?.show(1,true),
  "filon-tlg013":()=>window.ScripturaPhiloConfusione?.show(1,true),
  "filon-tlg016":()=>window.ScripturaPhiloCongressu?.show(1,true),
  "filon-tlg023":()=>window.ScripturaPhiloDecalogo?.show(1,true),
  "filon-tlg011":()=>window.ScripturaPhiloEbrietate?.show(1,true),
  "filon-tlg017":()=>window.ScripturaPhiloFuga?.show(1,true),
  "filon-tlg007":()=>window.ScripturaPhiloGigantibus?.show(1,true)
});
function openWork(id){
  const chosen=works.get(id);
  if(!chosen||!scopeAllowsAuthor(chosen.authorId))return false;
  if(Object.prototype.hasOwnProperty.call(externalPhiloLinks,id)){
    // Apenas URNs verificadas do autor no catálogo Perseus; sem conteúdo simulado.
    const url=externalPhiloLinks[id];
    window.open(url,"_blank","noopener,noreferrer");
    setStatus("Obra aberta em nova aba no Perseus/Scaife. Se o navegador bloquear a aba, permita pop-ups para este site.");
    return true;
  }
  if(!Object.prototype.hasOwnProperty.call(publishedOpeners,id))return false;
  const ready={
    "josefo-antiguidades":window.ScripturaJosephus?.show,
    "josefo-guerra":window.ScripturaJosephusHistory?.show,
    "josefo-vida":window.ScripturaJosephusHistory?.show,
    "josefo-apiao":window.ScripturaJosephusHistory?.show,
    "clemente-stromata":window.ScripturaPatristics?.show,
    "clemente-paedagogus":window.ScripturaPaedagogus?.show,
    "filon-tlg020":window.ScripturaPhilo?.show,
    "filon-tlg029":window.ScripturaPhiloAeternitate?.show,
    "filon-tlg009":window.ScripturaPhiloAgricultura?.show,
    "filon-tlg001":window.ScripturaPhiloOpificio?.show,
    "filon-tlg002-l1":window.ScripturaPhiloLegumI?.show,
    "filon-tlg003":window.ScripturaPhiloCherubim?.show,
    "filon-tlg013":window.ScripturaPhiloConfusione?.show,
    "filon-tlg016":window.ScripturaPhiloCongressu?.show,
    "filon-tlg023":window.ScripturaPhiloDecalogo?.show,
    "filon-tlg011":window.ScripturaPhiloEbrietate?.show,
    "filon-tlg017":window.ScripturaPhiloFuga?.show,
    "filon-tlg007":window.ScripturaPhiloGigantibus?.show
  };
  if(typeof ready[id]!=="function")return false;
  publishedOpeners[id]();return true;
}
const publishedWorks=[
  {id:"josefo-antiguidades",authorId:"josefo",title:"Antiguidades Judaicas — Ἰουδαϊκὴ ἀρχαιολογία",levels:[{key:"livro",label:"Livro"},{key:"capitulo",label:"Capítulo"},{key:"secao",label:"Seção"}]},
  {id:"josefo-guerra",authorId:"josefo",title:"A Guerra dos Judeus — Ἰουδαϊκοῦ πολέμου πρὸς Ῥωμαίους",levels:[{key:"livro",label:"Livro"},{key:"capitulo",label:"Capítulo"},{key:"secao",label:"Seção"}]},
  {id:"josefo-vida",authorId:"josefo",title:"Vida de Flávio Josefo — Ἰωσήπου βίος",levels:[{key:"livro",label:"Livro"},{key:"secao",label:"Seção"}]},
  {id:"josefo-apiao",authorId:"josefo",title:"Contra Ápio — Περὶ ἀρχαιότητος Ἰουδαίων",levels:[{key:"livro",label:"Livro"},{key:"secao",label:"Seção"}]},
  {id:"clemente-stromata",authorId:"clemente-alexandria",title:"Stromata — Στρώματα",levels:[{key:"livro",label:"Livro"},{key:"capitulo",label:"Capítulo"},{key:"secao",label:"Seção"},{key:"subsecao",label:"Subseção"}]},
  {id:"clemente-paedagogus",authorId:"clemente-alexandria",title:"Pedagogo — Παιδαγωγός",levels:[{key:"livro",label:"Livro"},{key:"capitulo",label:"Capítulo"},{key:"secao",label:"Seção"},{key:"subsecao",label:"Subseção"}]}
];
// Doze entradas de Fílon possuem leitores internos e XMLs próprios; as demais permanecem externas.
publishedWorks.forEach(registerWork);
externalPhiloCatalog.forEach(([urn,greek,latin])=>{
 const count=philoBookCounts[urn]||1;
 for(let book=1;book<=count;book++){
   registerWork({
     id:"filon-"+urn+(count>1?"-l"+book:""),
     authorId:"filon",
     title:greek+" ["+latin+"]"+(count>1?" · Livro "+romanBooks[book-1]:""),
     levels:[]
   });
 }
});
if(ui.form&&ui.author&&ui.work&&ui.fields){
  refreshAuthors();
  refreshWorks();
  ui.author.addEventListener("change",refreshWorks);
  ui.work.addEventListener("change",()=>{
    renderFields();
    const selected=currentWork();
    if(ui.submit)ui.submit.disabled=!selected;
    ui.results?.replaceChildren();
    setStatus(!selected?"Selecione uma obra.":
      selected.id==="filon-tlg001"?
      "De Opificio Mundi: texto grego integral com notas da edição Cohn (1896).":
      selected.id==="filon-tlg002-l1"?
      "Legum allegoriarum, Livro I: texto grego integral com notas da edição Cohn (1896).":
      selected.id==="filon-tlg020"?
      "De Abrahamo: texto grego integral com notas da edição Cohn (1902).":
      selected.id==="filon-tlg029"?
      "De Aeternitate Mundi: texto grego integral com notas da edição Cohn–Reiter (1915).":
      selected.id==="filon-tlg009"?
      "De Agricultura: texto grego integral com notas da edição Wendland (1897).":
      selected.id==="filon-tlg003"?
      "De Cherubim: texto grego integral com notas da edição Cohn (1896).":
      selected.id==="filon-tlg013"?
      "De Confusione Linguarum: texto grego integral com notas da edição Wendland (1897).":
      selected.id==="filon-tlg016"?
      "De Congressu Eruditionis Gratia: texto grego integral com notas da edição Wendland (1898).":
      selected.id==="filon-tlg023"?
      "De Decalogo: texto grego integral com notas da edição Cohn (1902).":
      selected.id==="filon-tlg011"?
      "De Ebrietate: texto grego integral com notas da edição Wendland (1897).":
      selected.id==="filon-tlg017"?
      "De Fuga Et Inventione: texto grego integral com notas da edição Wendland (1898).":
      selected.id==="filon-tlg007"?
      "De Gigantibus: texto grego integral com notas da edição Wendland (1897).":
      externalPhiloLinks[selected.id]?
      "Consulta externa ao Perseus/Scaife. O texto grego ainda não foi incorporado ao acervo local.":
      "Preencha a referência desejada ou pesquise todos os trechos publicados.");
    if(selected&&selected.authorId!=="clemente-alexandria"&&publishedOpeners[selected.id]&&!openWork(selected.id)){
      setStatus("Não foi possível abrir o leitor de "+selected.title+".");
    }
  });
  ui.form.addEventListener("submit",search);
}
function syncReaderSelection(workId){
 const item=works.get(workId);
 if(!item||!scopeAllowsAuthor(item.authorId))return false;
 if(ui.author.value!==item.authorId)selectAuthor(item.authorId);
 if(ui.work.value!==item.id)ui.work.value=item.id;
 renderFields();
 if(ui.submit)ui.submit.disabled=false;
 // Atualizar a superfície temática sem disparar um segundo "change".
 ui.author.dispatchEvent(new Event("input",{bubbles:true}));
 ui.work.dispatchEvent(new Event("input",{bubbles:true}));
 return true;
}
window.ScripturaGreekAuthors={registerAuthor,registerWork,selectAuthor,setScope,openWork,syncReaderSelection,
  listAuthors:()=>sorted(Array.from(authors.values()).filter(a=>scopeAllowsAuthor(a.id))).map(a=>({...a})),
  listWorks:authorId=>getWorks(authorId).map(w=>({id:w.id,authorId:w.authorId,title:w.title,levels:w.levels.map(x=>({...x})),passageCount:w.passages.length}))
};
})();
