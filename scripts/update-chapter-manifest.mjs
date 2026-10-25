/* Scriptura Lexicon: reconstrói o mapa de capítulos a partir dos inventários das fontes.
 * Verifica cada módulo sem alterar seu texto. Falha antes do deploy em caso de inconsistência.
 */
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(import.meta.dirname, "..");
const corpora = [
  ["UXLC","uxlc","uxlc-progress.json",929],
  ["LXX","lxx","lxx-brenton-progress.json",1104],
  ["TR","tr","tr-scrivener-progress.json",260],
  ["SBLGNT","sblgnt","sblgnt-progress.json",260],
  ["VUL","vul","vul-clementine-progress.json",1334],
  ["VULJ","vulj","vulj-crosswire-progress.json",1362]
];
const manifest = {}, covered = new Set();
for (const [edition, prefix, file, expected] of corpora) {
  const info = JSON.parse(fs.readFileSync(path.join(root,"scriptures",file),"utf8"));
  const records = {}, seen = new Set();
  let count = 0;
  for (const book of info.books) {
    if (!/^[A-Z0-9_]+$/.test(book.id) || !/^[a-z0-9-]+$/.test(book.slug) ||
        !Number.isSafeInteger(book.chapters) || book.chapters <= 0 || seen.has(book.id))
      throw Error("Metadados inválidos: " + edition + " " + book.id);
    seen.add(book.id);
    const base = prefix + "-" + book.slug;
    records[book.id] = [base, book.chapters];
    for (let chapter=1;chapter<=book.chapters;chapter++) {
      const relative = "scriptures/texts/" + base + "-" + chapter + ".js";
      if (covered.has(relative) || !fs.existsSync(path.join(root, relative)))
        throw Error("Capítulo duplicado ou inexistente: " + relative);
      const content = fs.readFileSync(path.join(root, relative),"utf8");
      if (!content.includes("ScripturaScriptureTexts." + edition) ||
          !content.includes('["' + book.id + '"][' + chapter + ']'))
        throw Error("Módulo incompatível com o catálogo: " + relative);
      covered.add(relative); count++;
    }
  }
  if (count !== expected || count !== Number(info.chapters ?? count))
    throw Error("Total incorreto: "+edition+" ("+count+" de "+expected+")");
  manifest[edition] = records;
}
// NA28 e UBS5 são amostras independentes: carregá-las apenas quando solicitadas.
for (const [edition, base] of [["NA28","na28-matthew"],["UBS5","ubs5-matthew"]]) {
  const relative="scriptures/texts/"+base+"-1.js";
  if (!fs.existsSync(path.join(root,relative)) || covered.has(relative))
    throw Error("Amostra ausente ou duplicada: "+relative);
  const content=fs.readFileSync(path.join(root,relative),"utf8");
  if (!content.includes("ScripturaScriptureTexts."+edition+".MAT[1]"))
    throw Error("Amostra com identificação editorial incorreta: "+relative);
  manifest[edition]={MAT:[base,1]};
  covered.add(relative);
}
const output = "/* Gerado automaticamente por scripts/update-chapter-manifest.mjs. Não editar manualmente. */\n"+
  "window.ScripturaChapterManifest = Object.freeze("+JSON.stringify(manifest)+");\n";
fs.writeFileSync(path.join(root,"scriptures/chapter-manifest.js"),output,"utf8");
const htmlFile = path.join(root,"index.html");
const html = fs.readFileSync(htmlFile,"utf8");
const cleaned = html.replace(/^[ \t]*<script defer src="scriptures\/texts\/(?:uxlc|lxx|vulj|vul|tr|sblgnt|na28|ubs5)-[^"]+\.js"><\/script>[ \t]*\r?\n/gm,"");
if (cleaned !== html) fs.writeFileSync(htmlFile,cleaned,"utf8");
console.log("MANIFESTO VALIDADO: "+covered.size+" módulos; zero capítulos bíblicos no HTML inicial.");
