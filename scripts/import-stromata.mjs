/**
 * Importa INTACTO o arquivo TEI-XML de Stromata para a edição digital do Scriptura Lexicon.
 * Fonte: PerseusDL/canonical-greekLit (CC BY-SA 4.0), Otto Stählin (1906–1909).
 * Sem normalização, OCR, interpretação ou tradução.
 */
import {mkdir, readFile, writeFile} from "node:fs/promises";
import {createHash} from "node:crypto";
const url="https://raw.githubusercontent.com/PerseusDL/canonical-greekLit/0189b9c8d8d1f148133f2f0af309b4ee90ea4332/data/tlg0555/tlg004/tlg0555.tlg004.perseus-grc2.xml";
const expectedBlob="8faa61c8ff0f691071031c7c7a57bd8af9eee4ec";
const expectedSize=2314941;
const path="patristics/data/stromata.xml";
function blobSha(bytes) {
  return createHash("sha1").update("blob "+bytes.length+"\0").update(bytes).digest("hex");
}
function validate(bytes) {
  if(bytes.length!==expectedSize||blobSha(bytes)!==expectedBlob)
    throw new Error("O XML não corresponde à edição Perseus fixada (tamanho/SHA do blob)");
  const text=bytes.toString("utf8");
  const books=[...text.matchAll(/<div\s+type="textpart"\s+subtype="book"\s+n="(\d+)"/g)].map(m=>Number(m[1]));
  if(books.join(",")!=="1,2,3,4,5,6,7,8")
    throw new Error("A fonte não possui exatamente os livros I–VIII esperados");
  if(!text.includes('subtype="section"')||!text.includes('unit="subsection"'))
    throw new Error("Estrutura de citação TEI-XML não encontrada");
}
let existing=null;
try {existing=await readFile(path);}catch(e){if(e.code!=="ENOENT")throw e;}
if(existing&&blobSha(existing)===expectedBlob) {
  console.log("Stromata integral já conferido: "+path);
}else{
  const response=await fetch(url,{signal:AbortSignal.timeout(120000)});
  if(!response.ok)throw new Error("HTTP "+response.status+" ao baixar Stromata");
  const bytes=Buffer.from(await response.arrayBuffer());
  validate(bytes);
  await mkdir("patristics/data",{recursive:true});
  await writeFile(path,bytes);
  console.log("Stromata integral preservado: "+path+" ("+bytes.length+" bytes; blob "+blobSha(bytes)+")");
}
