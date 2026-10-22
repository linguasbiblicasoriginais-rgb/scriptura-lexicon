"use strict";
/* Testes de regressão do leitor bíblico; executar da raiz do repositório:
 * node tests/scripture-word-popups.test.cjs
 */
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const window = {};
const context = vm.createContext({ window });
function load(path) {
    vm.runInContext(fs.readFileSync(path, "utf8"), context, { filename: path });
}
load("scriptures/word-popups.js");
const sourceFiles = [
    "scriptures/texts/bhs-genesis-1.js",
    "scriptures/texts/bhs-genesis-2.js",
    "scriptures/texts/lxx-genesis-1.js",
    "scriptures/texts/na28-matthew-1.js",
    "scriptures/texts/ubs5-matthew-1.js",
    "scriptures/texts/vul-genesis-1.js"
];
sourceFiles.forEach(load);
const ui = window.ScripturaWordPopups;
assert.ok(ui && typeof ui.tokenize === "function");
const examples = [
    "בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת׃",
    "וְכָל־צְבָאָֽם׃ פ",
    "Ἰησοῦ Χριστοῦ, κατ’ ὄναρ·",
    "In principio creavit Deus caelum et terram\net erat"
];
for (const text of examples) {
    const fragments = ui.tokenize(text);
    assert.equal(fragments.map(p => p.text).join(""), text, "Segmentação alterou caracteres");
    assert.ok(fragments.some(p => p.word), "Nenhuma palavra encontrada");
}
assert.equal(ui.getInfo("BHS", "בְּרֵאשִׁ֖ית").meaning, "no princípio");
assert.equal(ui.getInfo("NA28", "Ἰησοῦ").transliteration, "Iēsou");
assert.equal(ui.getInfo("VUL", "creavit").meaning, "criou");
assert.equal(ui.getInfo("BHS", "עָפָר֙").meaning, null, "Nunca inventar glossas ausentes");
const chapters = [
    ["BHS", "GEN", 1, 31],
    ["BHS", "GEN", 2, 25],
    ["LXX", "GEN", 1, 31],
    ["NA28", "MAT", 1, 25],
    ["UBS5", "MAT", 1, 25],
    ["VUL", "GEN", 1, 31]
];
let words = 0;
for (const [edition, book, chapter, size] of chapters) {
    const verses = window.ScripturaScriptureTexts[edition][book][chapter];
    assert.equal(Object.keys(verses).length, size, edition + ":" + book + chapter);
    for (let number = 1; number <= size; number++) {
        const original = verses[number];
        assert.equal(typeof original, "string");
        const fragments = ui.tokenize(original);
        assert.equal(fragments.map(t => t.text).join(""), original,
            edition + " " + book + ":" + chapter + ":" + number);
        for (const token of fragments.filter(t => t.word)) {
            words++;
            const info = ui.getInfo(edition, token.text);
            assert.ok(info.transliteration, "Transliteração vazia em " + token.text);
            assert.equal(info.form, token.text, "Forma bíblica alterada");
            if (!info.meaning) assert.equal(info.status, "Acepção não cadastrada");
        }
    }
}
assert.equal(JSON.stringify(Array.from(window.ScripturaScriptureParagraphBreaks.BHS.GEN[2])), "[3]");
console.log("OK: " + chapters.length + " capítulos, " + words +
    " ocorrências vocabulares, integridade preservada.");
