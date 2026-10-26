/* História dos Hebreus — coletânea editorial; obras originais independentes.
 * Fonte grega PerseusDL / ed. Benedikt Niese; divisões Whiston apenas onde presentes no TEI.
 */
(function(){
"use strict";
const warCounts=[33,22,10,11,13,10,11];
const entries=[
 {key:"antiguidades",title:"Antiguidades Judaicas",original:"Ἰουδαϊκὴ ἀρχαιολογία",books:20,delegated:true,unit:"Ant."},
 {key:"guerra",title:"Guerra dos Judeus",original:"Ἱστορία Ἰουδαϊκοῦ πολέμου πρὸς Ῥωμαίους",books:7,chapters:warCounts,chapterMarked:true,preface:true,unit:"Bell.",sections:4001,cts:"tlg004"},
 {key:"vida",title:"Vida de Flávio Josefo",original:"Ἰωσήπου βίος",books:1,chapters:[1],chapterMarked:false,preface:false,unit:"Vita",sections:430,cts:"tlg002"},
 {key:"apiao",title:"Contra Ápio",original:"Περὶ ἀρχαιότητος Ἰουδαίων",books:2,chapters:[1,1],chapterMarked:false,preface:false,unit:"C. Ap.",sections:616,cts:"tlg003"}
];
window.ScripturaJosephusHistoryCatalog=Object.freeze({
 name:"História dos Hebreus",
 edition:"Benedikt Niese, Flavii Iosephi Opera — Perseus Digital Library",
 attribution:"Texto TEI Perseus, CC BY-SA 4.0",
 works:Object.freeze(entries.map(w=>Object.freeze(w)))
});
})();