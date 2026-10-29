/* Scriptura Lexicon — parágrafos e capitalização de leitura, sem alterar o corpus.
 * Divisões declaradas nas fontes têm prioridade; agrupamentos de recurso
 * usam pontuação e limites de extensão, não são atribuídos à fonte.
 */
(function(root,factory){
 "use strict";
 const api=factory();
 if(root)root.ScripturaScriptureParagraphs=api;
 if(typeof module==="object"&&module.exports)module.exports=api;
})(typeof window==="object"?window:null,function(){
 "use strict";
 const greekEditions=new Set(["LXX","SBLGNT","TR","NA28","UBS5"]);
 const firstGreek=/[\p{Script=Greek}][\p{Script=Greek}\p{M}᾽’'\-]*/u;
 const greekGrapheme=/[\p{Script=Greek}]\p{M}*/u;
 // Nomes próprios com capitalização significativa: nunca alterar automaticamente.
 const properGreek=new Set(("Ἰησοῦς Ἰησοῦ Ἰησοῦν Χριστός Χριστοῦ Χριστόν " +
  "Ἀβραάμ Ἀβραὰμ Ἰσαάκ Ἰσαὰκ Ἰακώβ Ἰακὼβ Ἰούδας Ἰούδαν " +
  "Δαυίδ Δαυὶδ Δαβίδ Δαβὶδ Ἰωσήφ Ἰωσὴφ Μαρία Μαρίας Μαρίαν " +
  "Πέτρος Παῦλος Ἰωάννης Μωϋσῆς Ἰσραήλ Ἰσραὴλ Ἱερουσαλήμ " +
  "Γαλιλαία Ἀδάμ Σολομῶντα Σολομὼν Ἰεχονίας").split(/\s+/u)
  .map(w=>w.toLocaleLowerCase("el")));
 function textOf(value){return typeof value==="string"?value:value?.text;}
 function isSentenceEnding(text){return /[.!?;;··]["”'»)]*\s*$/u.test(text);}
 function group(entries,options={}){
  const verses=entries.filter(x=>Number.isSafeInteger(Number(x[0]))&&Number(x[0])>0&&
   typeof textOf(x[1])==="string"&&textOf(x[1]).length)
   .sort((a,b)=>Number(a[0])-Number(b[0]));
  const sourceEnd=new Set((options.sourceEnds||[]).map(Number));
  const separatorEnd=new Set((options.separatorEnds||[]).map(Number));
  const headingBefore=new Set((options.headingBefore||[]).map(Number));
  const haveSource=sourceEnd.size>0;
  const result=[];
  let current=[];
  let origin="editorial";
  const flush=()=>{if(current.length)result.push({verses:current,origin});current=[];origin="editorial";};
  for(const entry of verses){
   const number=Number(entry[0]);
   if(current.length&&headingBefore.has(number))flush();
   current.push({number,text:textOf(entry[1])});
   if(sourceEnd.has(number)){origin="fonte";flush();}
   else if(separatorEnd.has(number)){origin="editorial";flush();}
   else if(!haveSource&&current.length>=3&&
    (isSentenceEnding(textOf(entry[1]))||current.length>=8))flush();
  }
  flush();
  return result;
 }
 function sourceGreekInitials(verses){
  // Detectar nomes próprios capitalizados também dentro dos versículos.
  const protectedWords=new Set(properGreek);
  for(const [,value] of verses){
   const text=textOf(value)||"";
   for(const m of text.matchAll(/\p{Script=Greek}[\p{Script=Greek}\p{M}᾽’'\-]*/gu)){
    if(m.index===0)continue;
    const token=m[0];
    const letter=token.match(greekGrapheme)?.[0];
    if(letter&&letter!==letter.toLocaleLowerCase("el")&&
       token!==token.toLocaleUpperCase("el"))
      protectedWords.add(token.toLocaleLowerCase("el"));
   }
  }
  return protectedWords;
 }
 function displayGreek(text,{paragraphStart,protectedWords}={}){
  if(typeof text!=="string")return text;
  const m=firstGreek.exec(text);
  if(!m)return text;
  const token=m[0],start=m.index,lower=token.toLocaleLowerCase("el");
  let display=token;
  const first=token.match(greekGrapheme);
  if(!first)return text;
  if(paragraphStart){
   // Capitalizar somente o início editorial do parágrafo.
   if(first[0]===first[0].toLocaleLowerCase("el"))
    display=token.replace(first[0],first[0].toLocaleUpperCase("el"));
  }else if(!protectedWords?.has(lower)){
   // Reduzir apenas a maiúscula inicial de versificação, não os nomes.
   display=token===token.toLocaleUpperCase("el")
    ?lower:token.replace(first[0],first[0].toLocaleLowerCase("el"));
  }
  return text.slice(0,start)+display+text.slice(start+token.length);
 }
 return Object.freeze({group,displayGreek,sourceGreekInitials,greekEditions});
});
