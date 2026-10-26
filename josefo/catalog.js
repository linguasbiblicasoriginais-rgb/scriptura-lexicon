/* Scriptura Lexicon — catálogo das Antiguidades Judaicas.
   Livros e capítulos seguem a divisão tradicional (Whiston); as seções são de Niese,
   numeradas continuamente em cada livro. Catálogo ≠ transcrição completa.
*/
(function () {
"use strict";
const chapterCounts=[22,16,15,8,11,14,15,15,14,11,8,11,16,16,11,11,13,9,9,11];
const roman=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"];
window.ScripturaJosephusCatalog=Object.freeze({
 key:"antiguidades",
 title:"Antiguidades Judaicas",
 original:"Ἰουδαϊκὴ ἀρχαιολογία",
 citation:"Ant.",
 edition:"Benedikt Niese, Flavii Iosephi Opera (1885–1890)",
 editionUrl:"https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0526.tlg001.perseus-grc2/",
 books:Object.freeze(chapterCounts.map((chapters,i)=>Object.freeze({
   number:i+1, name:"Livro "+roman[i], chapters:chapters
 })))
});
})();
