/**
 * Incorporação literal da edição TEI de Παιδαγωγός (Paedagogus).
 * Fonte: OpenGreekAndLatin/First1KGreek, Otto Stählin 1905, CC BY-SA 4.0.
 * Verifica bytes, blob Git SHA e estrutura dos três livros; não altera o texto.
 */
import {mkdir,readFile,writeFile} from "node:fs/promises";
import {createHash} from "node:crypto";
const url="https://raw.githubusercontent.com/OpenGreekAndLatin/First1KGreek/03776b39f4047c5cff06f5296fae4b2bae4b08fb/data/tlg0555/tlg002/tlg0555.tlg002.1st1K-grc1.xml";
const path="patristics/data/paedagogus.xml";
const originalSize=841250;
const originalSha="f332e316c11153eee2f145aa34b0a5b1f1da265a";
const blobSha=data=>createHash("sha1").update("blob "+data.length+"\0").update(data).digest("hex");
function check(bytes){
 if(bytes.length!==originalSize||blobSha(bytes)!==originalSha)throw Error("Edição diferente do TEI-XML fixado; importação recusada");
 const xml=bytes.toString("utf8");
 const books=[...xml.matchAll(/<div\s+type="textpart"\s+subtype="book"\s+n="(\d+)"/g)].map(x=>x[1]);
 if(books.join(",")!=="1,2,3")throw Error("A edição não contém os três livros previstos");
 if(!xml.includes('unit="section"')||!xml.includes('unit="subsection"')||!xml.includes('n="argument"'))throw Error("Marcação de seções/argumentos ausente");
}
let local=null;
try{local=await readFile(path);}catch(e){if(e.code!=="ENOENT")throw e;}
if(local&&local.length===originalSize&&blobSha(local)===originalSha) {
 console.log("Pedagogo integral conferido:",path);
}else{
 const res=await fetch(url,{signal:AbortSignal.timeout(120000)});
 if(!res.ok)throw Error("HTTP "+res.status+" na importação da fonte");
 const bytes=Buffer.from(await res.arrayBuffer());
 check(bytes);
 await mkdir("patristics/data",{recursive:true});
 await writeFile(path,bytes);
 console.log("Pedagogo integral importado: "+bytes.length+" bytes, SHA blob "+blobSha(bytes));
}
