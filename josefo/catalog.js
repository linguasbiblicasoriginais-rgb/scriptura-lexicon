/* Flávio Josefo, Antiguidades Judaicas: divisão capitular atestada no TEI Perseus.
 * 20 livros, 257 capítulos Whiston (incluindo 12 no Livro XX); §§ Niese contínuos por livro.
 */
(function() {
"use strict";
const counts=[22,16,15,8,11,14,15,15,14,11,8,11,16,16,11,11,13,9,9,12];
const roman=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX"];
window.ScripturaJosephusCatalog=Object.freeze({
 key:"antiguidades",
 title:"Antiguidades Judaicas",
 original:"Ἰουδαϊκὴ ἀρχαιολογία",
 citation:"Ant.",
 edition:"Benedikt Niese, Flavii Iosephi Opera (1885–1890), texto TEI PerseusDL",
 editionUrl:"https://atlas.perseus.tufts.edu/library/urn%3Acts%3AgreekLit%3Atlg0526.tlg001.perseus-grc2/",
 sourceUrl:"https://github.com/PerseusDL/canonical-greekLit/blob/master/data/tlg0526/tlg001/tlg0526.tlg001.perseus-grc2.xml",
 sourceSha:"b7311f2559afeb84a9f95484d8d02d",
 licenseUrl:"https://creativecommons.org/licenses/by-sa/4.0/",
 books:Object.freeze(counts.map((chapters,i)=>Object.freeze({number:i+1,name:"Livro "+roman[i],chapters})))
});
})();