/* Scriptura Lexicon — referências editoriais da UBS5.
 * Citações do NT leem UBS5; alusões ao AT leem LXX, sempre identificada.
 * Nunca substituir silenciosamente leituras ainda indisponíveis.
 */
(function () {
  "use strict";
  const books=[
    ["MAT","Mt","UBS5","Mt","Matt","Matthew","Mateus"],
    ["MRK","Mc","UBS5","Mc","Mk","Mark","Marcos"],
    ["LUK","Lc","UBS5","Lc","Lk","Luke","Lucas"],
    ["JHN","Jo","UBS5","Jo","Jn","John","João"],
    ["ACT","At","UBS5","At","Ac","Acts","Atos"],
    ["ROM","Rm","UBS5","Rm","Rom","Romans","Romanos"],
    ["1CO","1Co","UBS5","1Co","1 Cor","1Cor","1 Corinthians","1 Coríntios"],
    ["2CO","2Co","UBS5","2Co","2 Cor","2Cor","2 Corinthians","2 Coríntios"],
    ["GAL","Gl","UBS5","Gl","Gal","Galatians","Gálatas"],
    ["EPH","Ef","UBS5","Ef","Eph","Ephesians","Efésios"],
    ["PHP","Fp","UBS5","Fp","Phil","Php","Philippians","Filipenses"],
    ["COL","Cl","UBS5","Cl","Col","Colossians","Colossenses"],
    ["1TH","1Ts","UBS5","1Ts","1 Thess","1Thess","1 Thessalonians","1 Tessalonicenses"],
    ["2TH","2Ts","UBS5","2Ts","2 Thess","2Thess","2 Thessalonians","2 Tessalonicenses"],
    ["1TI","1Tm","UBS5","1Tm","1 Tim","1Tim","1 Timothy","1 Timóteo"],
    ["2TI","2Tm","UBS5","2Tm","2 Tim","2Tim","2 Timothy","2 Timóteo"],
    ["TIT","Tt","UBS5","Tt","Tit","Titus","Tito"],
    ["PHM","Fm","UBS5","Fm","Phm","Philemon","Filemom"],
    ["HEB","Hb","UBS5","Hb","Heb","Hebrews","Hebreus"],
    ["JAS","Tg","UBS5","Tg","Jas","James","Tiago"],
    ["1PE","1Pe","UBS5","1Pe","1 Pet","1Pet","1 Peter","1 Pedro"],
    ["2PE","2Pe","UBS5","2Pe","2 Pet","2Pet","2 Peter","2 Pedro"],
    ["1JN","1Jo","UBS5","1Jo","1 Jn","1Jn","1 John","1 João"],
    ["2JN","2Jo","UBS5","2Jo","2 Jn","2Jn","2 John","2 João"],
    ["3JN","3Jo","UBS5","3Jo","3 Jn","3Jn","3 John","3 João"],
    ["JUD","Jd","UBS5","Jd","Jude","Judas"],
    ["REV","Ap","UBS5","Ap","Rev","Revelation","Apocalipse"],
    ["GEN","Gn","LXX","Gn","Gen","Genesis","Gênesis"],
    ["EXO","Êx","LXX","Êx","Ex","Exod","Exodus","Êxodo"],
    ["LEV","Lv","LXX","Lv","Lev","Leviticus","Levítico"],
    ["NUM","Nm","LXX","Nm","Num","Numbers","Números"],
    ["DEU","Dt","LXX","Dt","Deut","Deuteronomy","Deuteronômio"],
    ["JOS","Js","LXX","Js","Josh","Joshua","Josué"],
    ["JDG","Jz","LXX","Jz","Judg","Judges","Juízes"],
    ["RUT","Rt","LXX","Rt","Ruth","Rute"],
    ["1SA","1Sm","LXX","1Sm","1 Sam","1Sam","1 Samuel"],
    ["2SA","2Sm","LXX","2Sm","2 Sam","2Sam","2 Samuel"],
    ["1KI","1Rs","LXX","1Rs","1 Kgs","1Kgs","1 Kings","1 Reis"],
    ["2KI","2Rs","LXX","2Rs","2 Kgs","2Kgs","2 Kings","2 Reis"],
    ["1CH","1Cr","LXX","1Cr","1 Chr","1Chr","1 Chronicles","1 Crônicas"],
    ["2CH","2Cr","LXX","2Cr","2 Chr","2Chr","2 Chronicles","2 Crônicas"],
    ["EZR","Ed","LXX","Ed","Ezr","Ezra","Esdras"],
    ["NEH","Ne","LXX","Ne","Neh","Nehemiah","Neemias"],
    ["EST","Et","LXX","Et","Est","Esther","Ester"],
    ["JOB","Jó","LXX","Jó","Job"],
    ["PSA","Sl","LXX","Sl","Ps","Psa","Psalm","Psalms","Salmos"],
    ["PRO","Pv","LXX","Pv","Prov","Proverbs","Provérbios"],
    ["ECC","Ec","LXX","Ec","Ecc","Eccl","Ecclesiastes","Eclesiastes"],
    ["SNG","Ct","LXX","Ct","Song","Song of Songs","Cântico dos Cânticos"],
    ["ISA","Is","LXX","Is","Isa","Isaiah","Isaías"],
    ["JER","Jr","LXX","Jr","Jer","Jeremiah","Jeremias"],
    ["LAM","Lm","LXX","Lm","Lam","Lamentations","Lamentações"],
    ["EZK","Ez","LXX","Ez","Ezek","Ezekiel","Ezequiel"],
    ["DAN","Dn","LXX","Dn","Dan","Daniel"],
    ["HOS","Os","LXX","Os","Hos","Hosea","Oseias"],
    ["JOL","Jl","LXX","Jl","Joel"],
    ["AMO","Am","LXX","Am","Amos","Amós"],
    ["OBA","Ob","LXX","Ob","Obad","Obadiah","Obadias"],
    ["JON","Jn","LXX","Jon","Jonah","Jonas"],
    ["MIC","Mq","LXX","Mq","Mic","Micah","Miqueias"],
    ["NAM","Na","LXX","Na","Nah","Nahum","Naum"],
    ["HAB","Hc","LXX","Hc","Hab","Habakkuk","Habacuque"],
    ["ZEP","Sf","LXX","Sf","Zeph","Zephaniah","Sofonias"],
    ["HAG","Ag","LXX","Ag","Hag","Haggai","Ageu"],
    ["ZEC","Zc","LXX","Zc","Zech","Zechariah","Zacarias"],
    ["MAL","Ml","LXX","Ml","Mal","Malachi","Malaquias"]
  ];
  const normalizeAlias=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[\s.]/g,"").toLowerCase();
  const bookMap=new Map();
  const spellings=[];
  for(const [book,short,edition,...aliases] of books){
    for(const spelling of aliases){
      const key=normalizeAlias(spelling);
      if(!bookMap.has(key))bookMap.set(key,{book,short,edition});
      spellings.push(spelling);
    }
  }
  // O ponto da referência pode ser ":" ou "."; o traço pode ser tipográfico.
  const escape=s=>s.replace(/[.*+?^\x24{}()|[\]\\]/g,"\\$&");
  const alternatives=[...new Set(spellings)].sort((a,b)=>b.length-a.length)
    .map(s=>escape(s).replace(/\s+/g,"\\s*"));
  const matchRefs=new RegExp("(^|[^\\p{L}\\p{N}])("+alternatives.join("|")+")\\.?\\s+(\\d{1,3})\\s*[.:]\\s*(\\d{1,3})(?:\\s*[-\\u2010-\\u2015\\u2212]\\s*(?:(\\d{1,3})\\s*[.:]\\s*)?(\\d{1,3}))?","giu");
  // Remissões compostas, elisões de livro/capítulo e sufixos parciais a/b.
  const bookPrefix = new RegExp("^("+alternatives.join("|")+")\\.?\\s+","iu");
  const rangeDash = "[-\\u2010-\\u2015\\u2212]";
  const fullReference = new RegExp("^(\\d{1,3})\\s*[.:]\\s*(\\d{1,3})([ab])?(?:\\s*"+rangeDash+"\\s*(?:(\\d{1,3})\\s*[.:]\\s*)?(\\d{1,3})([ab])?)?$","iu");
  const relativeReference = new RegExp("^(\\d{1,3})([ab])?(?:\\s*"+rangeDash+"\\s*(\\d{1,3})([ab])?)?$","iu");
  function parse(source){
    if(typeof source!=="string"||!source.trim())return [];
    const refs=[];
    let currentBook=null, currentChapter=null;
    const clauses=source.replace(/[\u2000-\u200b\u202f]/g," ")
      .replace(/\b(?:See|Ver|Cf)\.?\s+/giu,"").replace(/[()]/g,"").split(";");
    for(const clause of clauses){
      let remaining=clause.trim();
      if(!remaining)continue;
      const named=bookPrefix.exec(remaining);
      if(named){
        currentBook=bookMap.get(normalizeAlias(named[1]))||null;
        currentChapter=null;
        remaining=remaining.slice(named[0].length).trim();
      }
      if(!currentBook)continue;
      for(const segment of remaining.split(/\s*,\s*/)){
        if(!segment)continue;
        const full=fullReference.exec(segment),relative=full?null:relativeReference.exec(segment);
        if(!full&&!relative)continue;
        const chapter=full?Number(full[1]):currentChapter;
        const verse=full?Number(full[2]):Number(relative[1]);
        if(!Number.isSafeInteger(chapter)||chapter<1||verse<1)continue;
        const endChapter=full&&full[5]?Number(full[4]||chapter):chapter;
        const endVerse=full?(full[5]?Number(full[5]):verse):(relative[3]?Number(relative[3]):verse);
        const startPart=full?(full[3]||""):(relative[2]||"");
        const endPart=full?(full[6]||""):(relative[4]||"");
        if(endChapter<chapter||(endChapter===chapter&&endVerse<verse))continue;
        currentChapter=chapter;
        const last=full?Boolean(full[5]):Boolean(relative[3]);
        const ending=last?(endChapter===chapter?
            "–"+endVerse+endPart:"–"+endChapter+"."+endVerse+endPart):"";
        const label=currentBook.short+" "+chapter+"."+verse+startPart+ending;
        refs.push(Object.freeze({...currentBook,chapter,verse,startPart,endChapter,endVerse,endPart,
          label,raw:segment.trim()}));
      }
    }
    return refs;
  }
  window.ScripturaUBS5References=Object.freeze({parse});
})();
