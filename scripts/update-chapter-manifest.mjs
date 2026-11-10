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
// Os corpora críticos são independentes, mas não são meras amostras.
// Preservar o inventário versionado antes de reescrever o manifesto de saída.
// Não inferir que um capítulo foi incorporado por constar apenas no catálogo.
const previousManifestFile = path.join(root, "scriptures", "chapter-manifest.js");
const previousSource = fs.readFileSync(previousManifestFile, "utf8");
const signature = "window.ScripturaChapterManifest = Object.freeze(";
const signatureStart = previousSource.indexOf(signature);
const signatureEnd = previousSource.indexOf(");", signatureStart + signature.length);
if (signatureStart === -1 || signatureEnd === -1)
  throw Error("Inventário NA28/UBS5 indisponível no manifesto versionado.");
const previous = JSON.parse(previousSource.slice(signatureStart + signature.length, signatureEnd));

for (const edition of ["NA28", "UBS5"]) {
  const inventory = previous[edition];
  if (!inventory || typeof inventory !== "object" || !Object.keys(inventory).length)
    throw Error("Inventário crítico vazio: " + edition);
  const entries = {}, registered = new Set();
  for (const [bookId, record] of Object.entries(inventory)) {
    if (!/^[A-Z0-9]{3}$/.test(bookId) || !Array.isArray(record) || record.length !== 2)
      throw Error("Entrada crítica inválida: " + edition + "/" + bookId);
    const [base, chapters] = record;
    if (typeof base !== "string" ||
        !new RegExp("^" + edition.toLowerCase() + "-[a-z0-9-]+$").test(base) ||
        !Number.isSafeInteger(chapters) || chapters < 1)
      throw Error("Inventário crítico incompatível: " + edition + "/" + bookId);
    for (let chapter = 1; chapter <= chapters; chapter++) {
      const filename = base + "-" + chapter + ".js";
      const relative = "scriptures/texts/" + filename;
      if (covered.has(relative) || registered.has(filename) ||
          !fs.existsSync(path.join(root, relative)))
        throw Error("Módulo crítico inexistente ou duplicado: " + relative);
      const content = fs.readFileSync(path.join(root, relative), "utf8");
      // Aceitar os dois modos de serialização do código canônico: MAT e ["1CO"].
      const accessor = '(?:\\\\.' + bookId + '|\\\\["' + bookId + '"\\\\])';
      const pattern = new RegExp('ScripturaScriptureTexts\\\\.' + edition + accessor +
        '\\\\[' + chapter + '\\\\]\\\\s*=');
      if (!pattern.test(content))
        throw Error("Módulo crítico não registra o versículo esperado: " + relative);
      registered.add(filename);
      covered.add(relative);
    }
    entries[bookId] = [base, chapters];
  }
  // Nunca passar no build omitindo silenciosamente capítulos existentes.
  const filesOnDisk = fs.readdirSync(path.join(root, "scriptures", "texts"))
    .filter(name => name.startsWith(edition.toLowerCase() + "-") && name.endsWith(".js"));
  const notRegistered = filesOnDisk.filter(name => !registered.has(name));
  if (notRegistered.length)
    throw Error("Capítulos " + edition + " fora do inventário: " + notRegistered.join(", "));
  manifest[edition] = entries;
  console.log("CORPUS_CRITICO_VALIDADO " + edition + ": " +
    registered.size + " capítulos em " + Object.keys(entries).length + " livros.");
}
const output = "/* Gerado automaticamente por scripts/update-chapter-manifest.mjs. Não editar manualmente. */\n"+
  "window.ScripturaChapterManifest = Object.freeze("+JSON.stringify(manifest)+");\n";
fs.writeFileSync(path.join(root,"scriptures/chapter-manifest.js"),output,"utf8");
const htmlFile = path.join(root,"index.html");
const html = fs.readFileSync(htmlFile,"utf8");
const cleaned = html.replace(/^[ \t]*<script defer src="scriptures\/texts\/(?:uxlc|lxx|vulj|vul|tr|sblgnt|na28|ubs5)-[^"]+\.js"><\/script>[ \t]*\r?\n/gm,"");
if (cleaned !== html) fs.writeFileSync(htmlFile,cleaned,"utf8");
console.log("MANIFESTO VALIDADO: "+covered.size+" módulos; zero capítulos bíblicos no HTML inicial.");
