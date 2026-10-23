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
    "scriptures/texts/bhs-genesis-3.js",
    "scriptures/texts/bhs-genesis-4.js",
    "scriptures/texts/bhs-genesis-5.js",
    "scriptures/texts/bhs-genesis-6.js",
    "scriptures/texts/bhs-genesis-7.js",
    "scriptures/texts/bhs-genesis-8.js",
    "scriptures/texts/bhs-genesis-9.js",
    "scriptures/texts/bhs-genesis-10.js",
    "scriptures/texts/bhs-genesis-11.js",
    "scriptures/texts/bhs-genesis-12.js",
    "scriptures/texts/bhs-genesis-13.js",
    "scriptures/texts/bhs-genesis-14.js",
    "scriptures/texts/bhs-genesis-15.js",
    "scriptures/texts/bhs-genesis-16.js",
    "scriptures/texts/bhs-genesis-17.js",
    "scriptures/texts/bhs-genesis-18.js",
    "scriptures/texts/bhs-genesis-19.js",
    "scriptures/texts/bhs-genesis-20.js",
    "scriptures/texts/bhs-genesis-21.js",
    "scriptures/texts/bhs-genesis-22.js",
    "scriptures/texts/bhs-genesis-23.js",
    "scriptures/texts/bhs-genesis-24.js",
    "scriptures/texts/bhs-genesis-25.js",
    "scriptures/texts/bhs-genesis-26.js",
    "scriptures/texts/bhs-genesis-27.js",
    "scriptures/texts/bhs-genesis-28.js",
    "scriptures/texts/bhs-genesis-29.js",
    "scriptures/texts/bhs-genesis-30.js",
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
    ["BHS", "GEN", 3, 24],
    ["BHS", "GEN", 4, 26],
    ["BHS", "GEN", 5, 32],
    ["BHS", "GEN", 6, 22],
    ["BHS", "GEN", 7, 24],
    ["BHS", "GEN", 8, 22],
    ["BHS", "GEN", 9, 29],
    ["BHS", "GEN", 10, 32],
    ["BHS", "GEN", 11, 32],
    ["BHS", "GEN", 12, 20],
    ["BHS", "GEN", 13, 18],
    ["BHS", "GEN", 14, 24],
    ["BHS", "GEN", 15, 21],
    ["BHS", "GEN", 16, 16],
    ["BHS", "GEN", 17, 27],
    ["BHS", "GEN", 18, 33],
    ["BHS", "GEN", 19, 38],
    ["BHS", "GEN", 20, 18],
    ["BHS", "GEN", 21, 34],
    ["BHS", "GEN", 22, 24],
    ["BHS", "GEN", 23, 20],
    ["BHS", "GEN", 24, 67],
    ["BHS", "GEN", 25, 34],
    ["BHS", "GEN", 26, 35],
    ["BHS", "GEN", 27, 46],
    ["BHS", "GEN", 28, 22],
    ["BHS", "GEN", 29, 35],
    ["BHS", "GEN", 30, 43],
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

const expectedParashot = {
    3: {15:"ס",16:"ס",21:"פ",24:"ס"},
    4: {26:"פ"},
    5: {2:"ס",5:"ס",8:"ס",11:"ס",14:"ס",17:"ס",20:"פ",24:"פ",27:"פ",31:"ס"},
    6: {4:"פ",8:"פ",12:"ס",22:"ס"},
    7: {},
    8: {14:"ס"},
    9: {7:"ס",17:"פ",29:"פ"},
    10: {14:"ס",20:"ס",32:"פ"},
    11: {9:"פ",11:"ס",13:"ס",15:"ס",17:"ס",19:"ס",21:"ס",23:"ס",25:"ס",32:"ס"},
    12: {9:"פ"},
    13: {18:"פ"},
    14: {24:"ס"},
    15: {21:"ס"},
    16: {16:"ס"},
    17: {14:"ס",27:"פ"},
    18: {},
    19: {38:"ס"},
    20: {18:"ס"},
    21: {21:"פ",34:"פ"},
    22: {19:"פ",24:"ס"},
    23: {20:"ס"},
    24: {67:"פ"},
    25: {11:"ס",18:"פ",34:"ס"},
    26: {33:"ס",35:"ס"},
    27: {},
    28: {9:"ס"},
    29: {},
    30: {}
};
for (const [chapter, expected] of Object.entries(expectedParashot)) {
    const types = window.ScripturaScriptureParashahTypes.BHS.GEN[chapter];
    assert.equal(JSON.stringify(types), JSON.stringify(expected),
        "Tipos de parashah incorretos em Gênesis " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.GEN[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Gênesis " + chapter);
}
console.log("OK: " + chapters.length + " capítulos, " + words +
    " ocorrências vocabulares, integridade preservada.");
