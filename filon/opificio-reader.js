/* Fílon de Alexandria — De Opificio Mundi, §§ 1–172.
 * Fonte TEI original imutável: First1KGreek / Perseus, edição Leopold Cohn (1896).
 * https://creativecommons.org/licenses/by-sa/4.0/
 * Nenhuma tradução, conjectura ou completamento é aplicado ao texto.
 */
(function () {
  "use strict";
  const TEI="http://www.tei-c.org/ns/1.0";
  const FILE="filon/data/tlg0018.tlg001.1st1K-grc1.xml";
  const CTS="urn:cts:greekLit:tlg0018.tlg001.1st1K-grc1";
  const SOURCE="https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/master/data/tlg0018/tlg001/tlg0018.tlg001.1st1K-grc1.xml";
  const main=document.querySelector("main.container");
  const anchor=document.querySelector(".dictionary-context");
  if(!main||!anchor)return;
  const panel=document.createElement("section");
  panel.id="filon-opificio-reader";
  panel.className="scripture-reader philo-reader";
  panel.setAttribute("aria-labelledby","philo-op-title");
  panel.hidden=true;
  panel.innerHTML=[
    '<button type="button" class="site-back-link" data-greek-author="filon">← Escritores gregos · Fílon de Alexandria</button>',
    '<div class="scripture-reader-kicker">Fílon de Alexandria · texto grego integral</div>',
    '<h1 id="philo-op-title"><span lang="la">De Opificio Mundi</span></h1>',
    '<p class="scripture-reader-intro">Sobre a criação do mundo · edição Leopold Cohn (1896) · divisão original em 172 seções (§)</p>',
    '<div class="scripture-reader-controls philo-controls">',
    '<label for="philo-op-section">Seção (§)<select id="philo-op-section"></select></label>',
    '</div>',
    '<div class="scripture-reader-navigation">',
    '<button type="button" id="philo-op-prev">← Seções anteriores</button>',
    '<button type="button" id="philo-op-next">Próximas seções →</button>',
    '</div>',
    '<div class="scripture-reader-result">',
    '<div class="scripture-reader-category">De Opificio Mundi · Fílon · Cohn, Opera quae supersunt, vol. I</div>',
    '<h2 id="philo-op-heading"></h2>',
    '<p id="philo-op-status" class="philo-status" role="status"></p>',
    '<div id="philo-op-text" class="philo-text" lang="grc"></div>',
    '<button id="philo-op-retry" type="button" hidden>Tentar carregar novamente</button>',
    '</div>',
    '<div class="scripture-reader-actions">',
    '<a href="'+SOURCE+'" target="_blank" rel="noopener noreferrer">Consultar TEI-XML original ↗</a>',
    '<a href="https://scaife.perseus.org/library/urn%3Acts%3AgreekLit%3Atlg0018.tlg001/" target="_blank" rel="noopener noreferrer">Perseus / Scaife ↗</a>',
    '<button id="philo-op-copy" type="button">Copiar referência</button>',
    '</div>',
    '<p id="philo-op-feedback" class="scripture-reader-feedback" role="status"></p>',
    '<p class="philo-credit">Fonte: Fílon de Alexandria, <em>De Opificio Mundi</em>, em <em>Philonis Alexandrini Opera quae supersunt</em>, vol. I, ed. Leopold Cohn (Berlim: Reimer, 1896); transcrição TEI do First1KGreek / Perseus Digital Library, URI <code>'+CTS+'</code>. Licença <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>. O TEI original é preservado no repositório, incluindo notas, marcadores de página, linha e variantes. A leitura dispõe o texto em seções e apresenta as notas separadamente; não constitui reprodução diplomática nem tradução portuguesa.</p>'
  ].join("");
  main.insertBefore(panel,anchor);
  const el=name=>panel.querySelector("#philo-op-"+name);
  const sectionSelect=el("section"),area=el("text"),heading=el("heading");
  const status=el("status"),prev=el("prev"),next=el("next");
  const retry=el("retry"),copy=el("copy"),feedback=el("feedback");
  const BATCH=12;
  let sections=null;
  let loading=null;
  let generation=0;
  let selected=1;
  const clean=value=>String(value||"").replace(/\s+/gu," ").trim();
  const option=(value,label)=>{
    const element=document.createElement("option");
    element.value=String(value);
    element.textContent=label;
    return element;
  };
  function extractSections(xml){
    const doc=new DOMParser().parseFromString(xml,"application/xml");
    if(doc.querySelector("parsererror"))throw new Error("XML original inválido.");
    const entries=Array.from(doc.getElementsByTagNameNS(TEI,"div"))
      .filter(node=>node.getAttribute("type")==="textpart"&&node.getAttribute("subtype")==="section");
    if(entries.length!==172||entries.some((node,i)=>node.getAttribute("n")!==String(i+1)))
      throw new Error("Integridade da divisão §1–172 não confirmada.");
    return entries;
  }
  function ensureSource(){
    if(sections)return Promise.resolve(sections);
    if(loading)return loading;
    loading=fetch(FILE).then(response=>{
      if(!response.ok)throw new Error("HTTP "+response.status);
      return response.text();
    }).then(xml=>{
      sections=extractSections(xml);
      return sections;
    }).finally(()=>{loading=null;});
    return loading;
  }
  function readInline(source,target){
    for(const child of source.childNodes){
      if(child.nodeType===Node.TEXT_NODE){
        target.append(document.createTextNode(child.nodeValue));
        continue;
      }
      if(child.nodeType!==Node.ELEMENT_NODE)continue;
      const tag=child.localName;
      if(tag==="note"||tag==="milestone"||tag==="pb"||tag==="lb")continue;
      if(tag==="add"||tag==="sic"){
        const marked=document.createElement("span");
        marked.className="philo-editorial-"+tag;
        marked.title=tag==="add"?"Aditamento indicado no XML da edição":"Forma assinalada como sic no XML";
        readInline(child,marked);
        target.append(marked);
      } else readInline(child,target);
    }
  }
  function renderSection(div){
    const number=Number(div.getAttribute("n"));
    const article=document.createElement("article");
    article.className="philo-section";
    article.dataset.philoSection=String(number);
    article.tabIndex=0;
    article.setAttribute("aria-label","De Opificio Mundi, seção "+number);
    const top=document.createElement("div");
    top.className="philo-section-reading";
    const numeral=document.createElement("span");
    numeral.className="philo-number";
    numeral.textContent="§ "+number;
    const paragraphs=Array.from(div.getElementsByTagNameNS(TEI,"p"));
    top.append(numeral);
    for(const p of paragraphs){
      const paragraph=document.createElement("p");
      paragraph.className="philo-greek-paragraph";
      paragraph.lang="grc";
      readInline(p,paragraph);
      top.append(paragraph);
    }
    article.append(top);
    const notes=Array.from(div.getElementsByTagNameNS(TEI,"note"));
    if(notes.length){
      const details=document.createElement("details");
      details.className="philo-notes";
      const summary=document.createElement("summary");
      summary.textContent=notes.length===1?"1 nota da edição":notes.length+" notas da edição";
      details.append(summary);
      for(const note of notes){
        const p=document.createElement("p");
        const category=note.getAttribute("type")||"nota";
        const strong=document.createElement("strong");
        strong.textContent=(category==="footnote"?"Aparato crítico":category==="marginal"?"Nota marginal":category)+": ";
        p.append(strong,document.createTextNode(clean(note.textContent)));
        details.append(p);
      }
      article.append(details);
    }
    article.addEventListener("click",event=>{
      if(event.target.closest("details")||event.target.closest("a"))return;
      activate(number,true);
    });
    article.addEventListener("keydown",event=>{
      if(event.target===article&&(event.key==="Enter"||event.key===" ")){
        event.preventDefault();activate(number,true);
      }
    });
    return article;
  }
  function rangeStart(num){return Math.floor((num-1)/BATCH)*BATCH+1;}
  function updateSelection(){
    for(const node of area.querySelectorAll("[data-philo-section]")){
      const active=Number(node.dataset.philoSection)===selected;
      node.classList.toggle("philo-section-selected",active);
      node.setAttribute("aria-current",active?"true":"false");
    }
    heading.textContent="De Opificio Mundi · §§ "+rangeStart(selected)+"–"+
      Math.min(172,rangeStart(selected)+BATCH-1);
    sectionSelect.value=String(selected);
    prev.disabled=rangeStart(selected)===1;
    next.disabled=rangeStart(selected)+BATCH>172;
  }
  function render(){
    const start=rangeStart(selected),end=Math.min(172,start+BATCH-1);
    const fragment=document.createDocumentFragment();
    for(let i=start;i<=end;i++)fragment.append(renderSection(sections[i-1]));
    area.replaceChildren(fragment);
    status.textContent="";
    retry.hidden=true;
    updateSelection();
  }
  function syncHash(mode){
    const target="#filon/de-opificio-mundi/"+selected;
    if(location.hash===target)return;
    if(mode==="replace")history.replaceState(null,"",target);
    else history.pushState(null,"",target);
  }
  function activate(value,push){
    const n=Number(value);
    if(!Number.isInteger(n)||n<1||n>172)return false;
    const rerender=rangeStart(n)!==rangeStart(selected)||!area.children.length;
    selected=n;
    if(sections){
      if(rerender)render();
      else updateSelection();
    }
    if(push)syncHash("push");
    return true;
  }
  function displayError(message){
    area.replaceChildren();
    status.textContent=message;
    retry.hidden=false;
  }
  function show(section=1,writeHash=true){
    const n=Number(section);
    selected=Number.isInteger(n)&&n>=1&&n<=172?n:1;
    const token=++generation;
    window.ScripturaPhilo?.hide();
    window.ScripturaPhiloAeternitate?.hide();
    window.ScripturaPhiloCherubim?.hide();
    window.ScripturaPhiloConfusione?.hide();
    window.ScripturaPhiloCongressu?.hide();
    window.ScripturaPhiloDecalogo?.hide();
    window.ScripturaPhiloEbrietate?.hide();
    window.ScripturaScriptures?.hide();
    window.ScripturaJosephus?.hide();
    window.ScripturaJosephusHistory?.hide();
    window.ScripturaPatristics?.hide();
    window.ScripturaPaedagogus?.hide();
    for(const node of main.children)
      if(node!==panel&&!node.contains(panel)&&!node.classList.contains("header"))node.hidden=true;
    panel.hidden=false;
    sectionSelect.replaceChildren(...Array.from({length:172},(_,i)=>option(i+1,"§ "+(i+1))));
    sectionSelect.value=String(selected);
    status.textContent="Carregando texto grego de referência…";
    area.replaceChildren();
    retry.hidden=true;
    if(writeHash)syncHash("push");
    ensureSource().then(()=>{
      if(token!==generation||panel.hidden)return;
      render();
    }).catch(error=>{
      if(token!==generation||panel.hidden)return;
      displayError("Não foi possível carregar a fonte TEI: "+error.message);
    });
    const drawer=document.getElementById("dictionary-menu");
    if(drawer?.classList.contains("open"))document.getElementById("menu-close")?.click();
    return true;
  }
  function hide(){panel.hidden=true;generation++;}
  function isPhiloHash(){return /^#filon\/de-opificio-mundi(?:\/\d+)?$/.test(location.hash);}
  function showFromHash(){
    const match=/^#filon\/de-opificio-mundi(?:\/(\d+))?$/.exec(location.hash);
    return !!match&&show(match[1]||1,false);
  }
  sectionSelect.addEventListener("change",()=>{
    const n=Number(sectionSelect.value);
    if(activate(n,true))area.querySelector('[data-philo-section="'+n+'"]')?.
      scrollIntoView({behavior:"smooth",block:"center"});
  });
  prev.addEventListener("click",()=>{if(selected>1)activate(Math.max(1,rangeStart(selected)-BATCH),true);});
  next.addEventListener("click",()=>{if(selected<172)activate(Math.min(172,rangeStart(selected)+BATCH),true);});
  retry.addEventListener("click",()=>show(selected,false));
  copy.addEventListener("click",()=>{
    const citation="Fílon de Alexandria, De Opificio Mundi § "+selected+
      "; ed. Leopold Cohn, Philonis Alexandrini Opera quae supersunt, vol. I (Berlim: Reimer, 1896). "+CTS+":"+selected+".";
    if(!navigator.clipboard?.writeText){feedback.textContent="Copie a referência: "+citation;return;}
    navigator.clipboard.writeText(citation).then(()=>feedback.textContent="Referência copiada.")
      .catch(()=>feedback.textContent="Copie a referência: "+citation);
  });
  window.ScripturaPhiloOpificio={show,hide,isPhiloHash,showFromHash,source:SOURCE,cts:CTS};
})();