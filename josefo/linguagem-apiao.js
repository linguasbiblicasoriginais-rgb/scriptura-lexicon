/* Contra Ápio II: limites de idioma de <foreign xml:lang="lat"> no TEI Perseus.
 * Texto-fonte: tlg0526.tlg003.perseus-grc2.xml.
 * § 51 (final), §§ 52–112 (integrais), § 113 (início).
 * A segmentação nunca altera o texto do corpus nem reconstrói o grego.
 */
(function(root,factory){
"use strict";
const api=factory();
if(root)root.ScripturaJosephusLanguages=api;
if(typeof module==="object"&&module.exports)module.exports=api;
})(typeof window==="object"?window:null,function(){
"use strict";
const LATIN_51="et filios regis, ut ipse regnum iniuste sibimet applicaret;";
const GREEK_113="τὴν πορείαν ποιουμένων,";
function segments(work,book,section,text){
 if(typeof text!=="string")throw new TypeError("Texto-fonte inválido.");
 const n=Number(section);
 if(work==="apiao"&&Number(book)===2){
  if(n>=52&&n<=112)return [{lang:"la",text}];
  if(n===51){
   const at=text.indexOf(LATIN_51);
   if(at>0&&text.indexOf(LATIN_51,at+1)===-1)
    return [{lang:"grc",text:text.slice(0,at)},{lang:"la",text:text.slice(at)}];
   return [{lang:"und",text}]; // Não conjecturar limites em caso de fonte alterada.
  }
  if(n===113){
   const at=text.indexOf(GREEK_113);
   if(at>0&&text.indexOf(GREEK_113,at+1)===-1)
    return [{lang:"la",text:text.slice(0,at)},{lang:"grc",text:text.slice(at)}];
   return [{lang:"und",text}];
  }
 }
 return [{lang:"grc",text}];
}
return Object.freeze({segments});
});
