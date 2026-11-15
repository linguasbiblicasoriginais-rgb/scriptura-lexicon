"use strict";
/* BDB-H/PT — normalização canônica da APRESENTAÇÃO, sem alterar a fonte inglesa.
 * Ativa durante scripts/build-on-demand.mjs (não depende de DOM).
 * Fonte, tradução, análise e regras editoriais permanecem camadas distintas.
 */
(function(){
  const bookEntries=[
    ["Genesis","GEN","Gn","Gênesis"],["Exodus","EXO","Êx","Êxodo"],
    ["Leviticus","LEV","Lv","Levítico"],["Numbers","NUM","Nm","Números"],
    ["Deuteronomy","DEU","Dt","Deuteronômio"],["Joshua","JOS","Js","Josué"],
    ["Judges","JDG","Jz","Juízes"],["Ruth","RUT","Rt","Rute"],
    ["I Samuel","1SA","1Sm","Primeiro Livro de Samuel"],
    ["II Samuel","2SA","2Sm","Segundo Livro de Samuel"],
    ["I Kings","1KI","1Rs","Primeiro Livro dos Reis"],
    ["II Kings","2KI","2Rs","Segundo Livro dos Reis"],
    ["I Chronicles","1CH","1Cr","Primeiro Livro de Crônicas"],
    ["II Chronicles","2CH","2Cr","Segundo Livro de Crônicas"],
    ["Ezra","EZR","Ed","Esdras"],["Nehemiah","NEH","Ne","Neemias"],
    ["Esther","EST","Et","Ester"],["Job","JOB","Jó","Jó"],
    ["Psalms","PSA","Sl","Salmos"],["Proverbs","PRO","Pv","Provérbios"],
    ["Ecclesiastes","ECC","Ec","Eclesiastes"],
    ["Song of Songs","SNG","Ct","Cântico dos Cânticos"],
    ["Isaiah","ISA","Is","Isaías"],["Jeremiah","JER","Jr","Jeremias"],
    ["Lamentations","LAM","Lm","Lamentações"],["Ezekiel","EZK","Ez","Ezequiel"],
    ["Daniel","DAN","Dn","Daniel"],["Hosea","HOS","Os","Oseias"],
    ["Joel","JOL","Jl","Joel"],["Amos","AMO","Am","Amós"],
    ["Obadiah","OBA","Ob","Obadias"],["Jonah","JON","Jn","Jonas"],
    ["Micah","MIC","Mq","Miqueias"],["Nahum","NAM","Na","Naum"],
    ["Habakkuk","HAB","Hc","Habacuque"],["Zephaniah","ZEP","Sf","Sofonias"],
    ["Haggai","HAG","Ag","Ageu"],["Zechariah","ZEC","Zc","Zacarias"],
    ["Malachi","MAL","Ml","Malaquias"],
    ["The Book of Maccabees I (Kahana Translation)","1MA","1Mc","Primeiro Livro dos Macabeus"]
  ];
  const books=new Map(bookEntries.map(row=>[row[0],{id:row[1],abbr:row[2],full:row[3],apocryphal:row[1]==="1MA"}]));
  const encode=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;")
     .replace(/</g,"&lt;").replace(/>/g,"&gt;");
  const hebrewTip="Forma hebraica citada pelo BDB-H; examine a acepção e o contexto para determinar seu sentido.";
  const syriacTip="Forma siríaca preservada da fonte comparativa do BDB-H; consulte o contexto da discussão etimológica.";
  function transformAnchors(html){
    return html.replace(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi,function(original,attrs,label){
      const refMatch=attrs.match(/\bdata-ref="([^"]*)"/),urlMatch=attrs.match(/\bhref="([^"]*)"/);
      if(!refMatch||!urlMatch) return original;
      const ref=refMatch[1],sourceHref=urlMatch[1],originalLabel=label.replace(/<[^>]*>/g,"").trim();
      if(ref.startsWith("BDB, ")){
        const lemma=ref.slice(5);
        const lexicalTip="Remissão ao verbete BDB-H "+lemma+". Ativar para pesquisar a entrada no próprio Scriptura Lexicon.";
        return '<a class="reference-link bdbh-pt-link bdbh-pt-xref tooltip-trigger" href="#hebraico"'
          +' data-ref="'+encode(ref)+'" data-bdbh-lemma="'+encode(lemma)+'"'
          +' data-bdbh-source-href="'+encode(sourceHref)+'"'
          +' data-tooltip-type="hebrew" data-tooltip-label="'+encode(originalLabel)+'"'
          +' data-meanings="'+encode(lexicalTip)+'" lang="he" dir="rtl">'
          +label+'</a>';
      }
      const match=/^(.+?) (\d+)(?::(\d+))?$/.exec(ref);
      if(!match||!books.has(match[1])){
        throw Error("BDB-H/PT: referência sem mapeamento certificado: "+ref);
      }
      const book=books.get(match[1]),chapter=Number(match[2]),verse=match[3]?Number(match[3]):null;
      if(!Number.isSafeInteger(chapter)||chapter<1||(verse!==null&&(!Number.isSafeInteger(verse)||verse<1))){
        throw Error("BDB-H/PT: capítulo/versículo inválido: "+ref);
      }
      const readable=book.abbr+" "+chapter+(verse===null?"":"."+verse);
      const full=book.full+", capítulo "+chapter+(verse===null?"":", versículo "+verse);
      const note=book.apocryphal
        ? ". A passagem é aberta no leitor da Septuaginta, não na tradução de Kahana citada na fonte BDB."
        : ". Ativar para abrir a passagem no leitor hebraico UXLC do Scriptura Lexicon.";
      const prefix=book.apocryphal?"#apocrifos/LXX/":"#escrituras/UXLC/";
      const target=prefix+book.id+"."+chapter+"."+(verse===null?1:verse);
      return '<a class="reference-link bdbh-pt-link bdbh-pt-bible-link tooltip-trigger"'
         +' href="'+target+'" data-ref="'+encode(ref)+'"'
         +' data-bdbh-source-href="'+encode(sourceHref)+'"'
         +' data-bdbh-citation="'+encode(readable)+'"'
         +' aria-label="'+encode(full)+'"'
         +' data-tooltip-type="abbr" data-tooltip-label="'+encode(readable)+'"'
         +' data-tooltip-text="'+encode(full+note)+'">'+encode(readable)+'</a>';
    });
  }
  function enrichScriptTokens(html){
    // Primeiro, preservar a direção da escrita original em cada span existente.
    html=html.replace(/<span\s+dir="rtl">([\s\S]*?)<\/span>/gi,function(original,content){
      if(/[\u0590-\u05ff]/u.test(content)){
        return '<span class="hebrew hebrew-token bdbh-pt-hebrew tooltip-trigger" lang="he" dir="rtl"'
          +' tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="'+encode(content.replace(/<[^>]*>/g,""))+'"'
          +' data-meanings="'+encode(hebrewTip)+'">'+content+'</span>';
      }
      if(/[\u0700-\u074f]/u.test(content)){
        return '<span class="syriac syriac-token bdbh-pt-syriac tooltip-trigger" lang="syr" dir="rtl"'
          +' tabindex="0" data-tooltip-type="syriac" data-tooltip-label="'+encode(content.replace(/<[^>]*>/g,""))+'"'
          +' data-meanings="'+encode(syriacTip)+'">'+content+'</span>';
      }
      return original;
    });
    // Termos hebraicos fora de spans também recebem gatilhos, sem duplicar
    // os já tratados e sem inserir elementos dentro de atributos ou âncoras.
    const pieces=html.match(/<[^>]*>|[^<]+/g)||[],stack=[];
    const safeTag=(tag)=>tag.toLowerCase();
    const out=[];
    for(const piece of pieces){
      if(piece[0]==="<"){
        const match=/^<\s*(\/?)\s*([a-z][\w-]*)\b/i.exec(piece);
        if(match){
          const closing=!!match[1],name=safeTag(match[2]);
          if(closing){
            for(let i=stack.length-1;i>=0;i--){if(stack[i].name===name){stack.length=i;break;}}
          }else if(!/^(?:br|hr|img|input|meta|link|wbr)$/i.test(name)&&!piece.endsWith("/>")){
            stack.push({name,protected:(name==="a"||/\bbdbh-pt-hebrew\b/.test(piece)||/\bbdbh-pt-syriac\b/.test(piece))});
          }
        }
        out.push(piece);
      }else if(/[\u0590-\u05ff]/u.test(piece)&&!stack.some(item=>item.protected)){
        out.push(piece.replace(/[\u0590-\u05ff]+(?:\s+[\u0590-\u05ff]+)*/gu,function(word){
          return '<bdi class="hebrew hebrew-token bdbh-pt-hebrew tooltip-trigger" lang="he" dir="rtl"'
            +' tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="'+encode(word)+'"'
            +' data-meanings="'+encode(hebrewTip)+'">'+word+'</bdi>';
        }));
      }else out.push(piece);
    }
    return out.join("");
  }
  function format(html,record){
    if(!record||record.translation_status!=="TRADUCAO_INTEGRAL")throw Error("BDB-H/PT: tradução não integral");
    const converted=enrichScriptTokens(transformAnchors(String(html)));
    if(/<a\b[^>]*\shref="\//.test(converted))throw Error("BDB-H/PT: rota importada não corrigida");
    return converted;
  }
  window.ScripturaBDBHptFormat=Object.freeze({format,bookEntries});
})();
