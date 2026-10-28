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
const ui = {
  form:document.getElementById("greek-authors-search"),
  author:document.getElementById("greek-author"),
  work:document.getElementById("greek-work"),
  fields:document.getElementById("greek-authors-reference-fields"),
  status:document.getElementById("greek-authors-status"),
  results:document.getElementById("greek-authors-results"),
  submit:document.getElementById("greek-authors-submit")
};
function option(value,label){
  const node=document.createElement("option");
  node.value=value;node.textContent=label;
  return node;
}
function sorted(values){return values.sort((a,b)=>a.name.localeCompare(b.name,"pt-BR"));}
function getWorks(authorId){
  return Array.from(works.values()).filter(w=>w.authorId===authorId)
    .sort((a,b)=>a.title.localeCompare(b.title,"pt-BR"));
}
function selectAuthor(authorId){
  if(!ui.author)return false;
  refreshAuthors();
  ui.author.value=authors.has(authorId)?authorId:"";
  refreshWorks();
  return !!ui.author.value;
}
function refreshAuthors(){
  if(!ui.author)return;
  const current=ui.author.value;
  ui.author.replaceChildren(option("","Selecione um autor"),
    ...sorted(Array.from(authors.values())).map(a=>option(a.id,a.name)));
  if(authors.has(current))ui.author.value=current;
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
  if(work && publishedOpeners[work.id]){
    ui.fields.replaceChildren();
    if(ui.submit)ui.submit.textContent="Abrir texto integral";
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
  if(!work){setStatus("Selecione uma obra cadastrada.");return;}
  if(publishedOpeners[work.id]){
    if(!openWork(work.id))setStatus("Não foi possível abrir o leitor desta obra.");
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
// Catálogo relacional: a obra aponta ao leitor original; corpora e IDs não são copiados.
const publishedOpeners=Object.freeze({
  "josefo-antiguidades":()=>window.ScripturaJosephus?.show(1,1,27,true),
  "josefo-guerra":()=>window.ScripturaJosephusHistory?.show("guerra",1,0,1,true),
  "josefo-vida":()=>window.ScripturaJosephusHistory?.show("vida",1,1,1,true),
  "josefo-apiao":()=>window.ScripturaJosephusHistory?.show("apiao",1,1,1,true),
  "clemente-stromata":()=>window.ScripturaPatristics?.show(1,1,1,1,true),
  "clemente-paedagogus":()=>window.ScripturaPaedagogus?.show(1,"1",null,1,true)
});
function openWork(id){
  if(!Object.prototype.hasOwnProperty.call(publishedOpeners,id))return false;
  const ready={
    "josefo-antiguidades":window.ScripturaJosephus?.show,
    "josefo-guerra":window.ScripturaJosephusHistory?.show,
    "josefo-vida":window.ScripturaJosephusHistory?.show,
    "josefo-apiao":window.ScripturaJosephusHistory?.show,
    "clemente-stromata":window.ScripturaPatristics?.show,
    "clemente-paedagogus":window.ScripturaPaedagogus?.show
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
publishedWorks.forEach(registerWork);
if(ui.form&&ui.author&&ui.work&&ui.fields){
  refreshAuthors();
  refreshWorks();
  ui.author.addEventListener("change",refreshWorks);
  ui.work.addEventListener("change",()=>{renderFields();if(ui.submit)ui.submit.disabled=!currentWork();ui.results?.replaceChildren();setStatus(currentWork()?"Preencha a referência desejada ou pesquise todos os trechos publicados.":"Selecione uma obra.");});
  ui.form.addEventListener("submit",search);
}
window.ScripturaGreekAuthors={registerAuthor,registerWork,selectAuthor,openWork,
  listAuthors:()=>sorted(Array.from(authors.values())).map(a=>({...a})),
  listWorks:authorId=>getWorks(authorId).map(w=>({id:w.id,authorId:w.authorId,title:w.title,levels:w.levels.map(x=>({...x})),passageCount:w.passages.length}))
};
})();
