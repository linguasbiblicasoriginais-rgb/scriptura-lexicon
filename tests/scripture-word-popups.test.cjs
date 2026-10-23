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
    "scriptures/texts/bhs-genesis-31.js",
    "scriptures/texts/bhs-genesis-32.js",
    "scriptures/texts/bhs-genesis-33.js",
    "scriptures/texts/bhs-genesis-34.js",
    "scriptures/texts/bhs-genesis-35.js",
    "scriptures/texts/bhs-genesis-36.js",
    "scriptures/texts/bhs-genesis-37.js",
    "scriptures/texts/bhs-genesis-38.js",
    "scriptures/texts/bhs-genesis-39.js",
    "scriptures/texts/bhs-genesis-40.js",
    "scriptures/texts/bhs-genesis-41.js",
    "scriptures/texts/bhs-genesis-42.js",
    "scriptures/texts/bhs-genesis-43.js",
    "scriptures/texts/bhs-genesis-44.js",
    "scriptures/texts/bhs-genesis-45.js",
    "scriptures/texts/bhs-genesis-46.js",
    "scriptures/texts/bhs-genesis-47.js",
    "scriptures/texts/bhs-genesis-48.js",
    "scriptures/texts/bhs-genesis-49.js",
    "scriptures/texts/bhs-genesis-50.js",
    "scriptures/texts/bhs-exodus-1.js",
    "scriptures/texts/bhs-exodus-2.js",
    "scriptures/texts/bhs-exodus-3.js",
    "scriptures/texts/bhs-exodus-4.js",
    "scriptures/texts/bhs-exodus-5.js",
    "scriptures/texts/bhs-exodus-6.js",
    "scriptures/texts/bhs-exodus-7.js",
    "scriptures/texts/bhs-exodus-8.js",
    "scriptures/texts/bhs-exodus-9.js",
    "scriptures/texts/bhs-exodus-10.js",
    "scriptures/texts/bhs-exodus-11.js",
    "scriptures/texts/bhs-exodus-12.js",
    "scriptures/texts/bhs-exodus-13.js",
    "scriptures/texts/bhs-exodus-14.js",
    "scriptures/texts/bhs-exodus-15.js",
    "scriptures/texts/bhs-exodus-16.js",
    "scriptures/texts/bhs-exodus-17.js",
    "scriptures/texts/bhs-exodus-18.js",
    "scriptures/texts/bhs-exodus-19.js",
    "scriptures/texts/bhs-exodus-20.js",
    "scriptures/texts/bhs-exodus-21.js",
    "scriptures/texts/bhs-exodus-22.js",
    "scriptures/texts/bhs-exodus-23.js",
    "scriptures/texts/bhs-exodus-24.js",
    "scriptures/texts/bhs-exodus-25.js",
    "scriptures/texts/bhs-exodus-26.js",
    "scriptures/texts/bhs-exodus-27.js",
    "scriptures/texts/bhs-exodus-28.js",
    "scriptures/texts/bhs-exodus-29.js",
    "scriptures/texts/bhs-exodus-30.js",
    "scriptures/texts/bhs-exodus-31.js",
    "scriptures/texts/bhs-exodus-32.js",
    "scriptures/texts/bhs-exodus-33.js",
    "scriptures/texts/bhs-exodus-34.js",
    "scriptures/texts/bhs-exodus-35.js",
    "scriptures/texts/bhs-exodus-36.js",
    "scriptures/texts/bhs-exodus-37.js",
    "scriptures/texts/bhs-exodus-38.js",
    "scriptures/texts/bhs-exodus-39.js",
    "scriptures/texts/bhs-exodus-40.js",
    "scriptures/texts/bhs-leviticus-1.js",
    "scriptures/texts/bhs-leviticus-2.js",
    "scriptures/texts/bhs-leviticus-3.js",
    "scriptures/texts/bhs-leviticus-4.js",
    "scriptures/texts/bhs-leviticus-5.js",
    "scriptures/texts/bhs-leviticus-6.js",
    "scriptures/texts/bhs-leviticus-7.js",
    "scriptures/texts/bhs-leviticus-8.js",
    "scriptures/texts/bhs-leviticus-9.js",
    "scriptures/texts/bhs-leviticus-10.js",
    "scriptures/texts/bhs-leviticus-11.js",
    "scriptures/texts/bhs-leviticus-12.js",
    "scriptures/texts/bhs-leviticus-13.js",
    "scriptures/texts/bhs-leviticus-14.js",
    "scriptures/texts/bhs-leviticus-15.js",
    "scriptures/texts/bhs-leviticus-16.js",
    "scriptures/texts/bhs-leviticus-17.js",
    "scriptures/texts/bhs-leviticus-18.js",
    "scriptures/texts/bhs-leviticus-19.js",
    "scriptures/texts/bhs-leviticus-20.js",
    "scriptures/texts/bhs-leviticus-21.js",
    "scriptures/texts/bhs-leviticus-22.js",
    "scriptures/texts/bhs-leviticus-23.js",
    "scriptures/texts/bhs-leviticus-24.js",
    "scriptures/texts/bhs-leviticus-25.js",
    "scriptures/texts/bhs-leviticus-26.js",
    "scriptures/texts/bhs-leviticus-27.js",
    "scriptures/texts/bhs-numbers-1.js",
    "scriptures/texts/bhs-numbers-2.js",
    "scriptures/texts/bhs-numbers-3.js",
    "scriptures/texts/bhs-numbers-4.js",
    "scriptures/texts/bhs-numbers-5.js",
    "scriptures/texts/bhs-numbers-6.js",
    "scriptures/texts/bhs-numbers-7.js",
    "scriptures/texts/bhs-numbers-8.js",
    "scriptures/texts/bhs-numbers-9.js",
    "scriptures/texts/bhs-numbers-10.js",
    "scriptures/texts/bhs-numbers-11.js",
    "scriptures/texts/bhs-numbers-12.js",
    "scriptures/texts/bhs-numbers-13.js",
    "scriptures/texts/bhs-numbers-14.js",
    "scriptures/texts/bhs-numbers-15.js",
    "scriptures/texts/bhs-numbers-16.js",
    "scriptures/texts/bhs-numbers-17.js",
    "scriptures/texts/bhs-numbers-18.js",
    "scriptures/texts/bhs-numbers-19.js",
    "scriptures/texts/bhs-numbers-20.js",
    "scriptures/texts/bhs-numbers-21.js",
    "scriptures/texts/bhs-numbers-22.js",
    "scriptures/texts/bhs-numbers-23.js",
    "scriptures/texts/bhs-numbers-24.js",
    "scriptures/texts/bhs-numbers-25.js",
    "scriptures/texts/bhs-numbers-26.js",
    "scriptures/texts/bhs-numbers-27.js",
    "scriptures/texts/bhs-numbers-28.js",
    "scriptures/texts/bhs-numbers-29.js",
    "scriptures/texts/bhs-numbers-30.js",
    "scriptures/texts/bhs-numbers-31.js",
    "scriptures/texts/bhs-numbers-32.js",
    "scriptures/texts/bhs-numbers-33.js",
    "scriptures/texts/bhs-numbers-34.js",
    "scriptures/texts/bhs-numbers-35.js",
    "scriptures/texts/bhs-numbers-36.js",
    "scriptures/texts/bhs-deuteronomy-1.js",
    "scriptures/texts/bhs-deuteronomy-2.js",
    "scriptures/texts/bhs-deuteronomy-3.js",
    "scriptures/texts/bhs-deuteronomy-4.js",
    "scriptures/texts/bhs-deuteronomy-5.js",
    "scriptures/texts/bhs-deuteronomy-6.js",
    "scriptures/texts/bhs-deuteronomy-7.js",
    "scriptures/texts/bhs-deuteronomy-8.js",
    "scriptures/texts/bhs-deuteronomy-9.js",
    "scriptures/texts/bhs-deuteronomy-10.js",
    "scriptures/texts/bhs-deuteronomy-11.js",
    "scriptures/texts/bhs-deuteronomy-12.js",
    "scriptures/texts/bhs-deuteronomy-13.js",
    "scriptures/texts/bhs-deuteronomy-14.js",
    "scriptures/texts/bhs-deuteronomy-15.js",
    "scriptures/texts/bhs-deuteronomy-16.js",
    "scriptures/texts/bhs-deuteronomy-17.js",
    "scriptures/texts/bhs-deuteronomy-18.js",
    "scriptures/texts/bhs-deuteronomy-19.js",
    "scriptures/texts/bhs-deuteronomy-20.js",
    "scriptures/texts/bhs-deuteronomy-21.js",
    "scriptures/texts/bhs-deuteronomy-22.js",
    "scriptures/texts/bhs-deuteronomy-23.js",
    "scriptures/texts/bhs-deuteronomy-24.js",
    "scriptures/texts/bhs-deuteronomy-25.js",
    "scriptures/texts/bhs-deuteronomy-26.js",
    "scriptures/texts/bhs-deuteronomy-27.js",
    "scriptures/texts/bhs-deuteronomy-28.js",
    "scriptures/texts/bhs-deuteronomy-29.js",
    "scriptures/texts/bhs-deuteronomy-30.js",
    "scriptures/texts/bhs-deuteronomy-31.js",
    "scriptures/texts/bhs-deuteronomy-32.js",
    "scriptures/texts/bhs-deuteronomy-33.js",
    "scriptures/texts/bhs-deuteronomy-34.js",
    "scriptures/texts/bhs-joshua-1.js",
    "scriptures/texts/bhs-joshua-2.js",
    "scriptures/texts/bhs-joshua-3.js",
    "scriptures/texts/bhs-joshua-4.js",
    "scriptures/texts/bhs-joshua-5.js",
    "scriptures/texts/bhs-joshua-6.js",
    "scriptures/texts/bhs-joshua-7.js",
    "scriptures/texts/bhs-joshua-8.js",
    "scriptures/texts/bhs-joshua-9.js",
    "scriptures/texts/bhs-joshua-10.js",
    "scriptures/texts/bhs-joshua-11.js",
    "scriptures/texts/bhs-joshua-12.js",
    "scriptures/texts/bhs-joshua-13.js",
    "scriptures/texts/bhs-joshua-14.js",
    "scriptures/texts/bhs-joshua-15.js",
    "scriptures/texts/bhs-joshua-16.js",
    "scriptures/texts/bhs-joshua-17.js",
    "scriptures/texts/bhs-joshua-18.js",
    "scriptures/texts/bhs-joshua-19.js",
    "scriptures/texts/bhs-joshua-20.js",
    "scriptures/texts/bhs-joshua-21.js",
    "scriptures/texts/bhs-joshua-22.js",
    "scriptures/texts/bhs-joshua-23.js",
    "scriptures/texts/bhs-joshua-24.js",
    "scriptures/texts/bhs-judges-1.js",
    "scriptures/texts/bhs-judges-2.js",
    "scriptures/texts/bhs-judges-3.js",
    "scriptures/texts/bhs-judges-4.js",
    "scriptures/texts/bhs-judges-5.js",
    "scriptures/texts/bhs-judges-6.js",
    "scriptures/texts/bhs-judges-7.js",
    "scriptures/texts/bhs-judges-8.js",
    "scriptures/texts/bhs-judges-9.js",
    "scriptures/texts/bhs-judges-10.js",
    "scriptures/texts/bhs-judges-11.js",
    "scriptures/texts/bhs-judges-12.js",
    "scriptures/texts/bhs-judges-13.js",
    "scriptures/texts/bhs-judges-14.js",
    "scriptures/texts/bhs-judges-15.js",
    "scriptures/texts/bhs-judges-16.js",
    "scriptures/texts/bhs-judges-17.js",
    "scriptures/texts/bhs-judges-18.js",
    "scriptures/texts/bhs-judges-19.js",
    "scriptures/texts/bhs-judges-20.js",
    "scriptures/texts/bhs-judges-21.js",
    "scriptures/texts/bhs-1-samuel-1.js",
    "scriptures/texts/bhs-1-samuel-2.js",
    "scriptures/texts/bhs-1-samuel-3.js",
    "scriptures/texts/bhs-1-samuel-4.js",
    "scriptures/texts/bhs-1-samuel-5.js",
    "scriptures/texts/bhs-1-samuel-6.js",
    "scriptures/texts/bhs-1-samuel-7.js",
    "scriptures/texts/bhs-1-samuel-8.js",
    "scriptures/texts/bhs-1-samuel-9.js",
    "scriptures/texts/bhs-1-samuel-10.js",
    "scriptures/texts/bhs-1-samuel-11.js",
    "scriptures/texts/bhs-1-samuel-12.js",
    "scriptures/texts/bhs-1-samuel-13.js",
    "scriptures/texts/bhs-1-samuel-14.js",
    "scriptures/texts/bhs-1-samuel-15.js",
    "scriptures/texts/bhs-1-samuel-16.js",
    "scriptures/texts/bhs-1-samuel-17.js",
    "scriptures/texts/bhs-1-samuel-18.js",
    "scriptures/texts/bhs-1-samuel-19.js",
    "scriptures/texts/bhs-1-samuel-20.js",
    "scriptures/texts/bhs-1-samuel-21.js",
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
    ["BHS", "GEN", 31, 54],
    ["BHS", "GEN", 32, 33],
    ["BHS", "GEN", 33, 20],
    ["BHS", "GEN", 34, 31],
    ["BHS", "GEN", 35, 29],
    ["BHS", "GEN", 36, 43],
    ["BHS", "GEN", 37, 36],
    ["BHS", "GEN", 38, 30],
    ["BHS", "GEN", 39, 23],
    ["BHS", "GEN", 40, 23],
    ["BHS", "GEN", 41, 57],
    ["BHS", "GEN", 42, 38],
    ["BHS", "GEN", 43, 34],
    ["BHS", "GEN", 44, 34],
    ["BHS", "GEN", 45, 28],
    ["BHS", "GEN", 46, 34],
    ["BHS", "GEN", 47, 31],
    ["BHS", "GEN", 48, 22],
    ["BHS", "GEN", 49, 33],
    ["BHS", "GEN", 50, 26],
    ["BHS", "EXO", 1, 22],
    ["BHS", "EXO", 2, 25],
    ["BHS", "EXO", 3, 22],
    ["BHS", "EXO", 4, 31],
    ["BHS", "EXO", 5, 23],
    ["BHS", "EXO", 6, 30],
    ["BHS", "EXO", 7, 29],
    ["BHS", "EXO", 8, 28],
    ["BHS", "EXO", 9, 35],
    ["BHS", "EXO", 10, 29],
    ["BHS", "EXO", 11, 10],
    ["BHS", "EXO", 12, 51],
    ["BHS", "EXO", 13, 22],
    ["BHS", "EXO", 14, 31],
    ["BHS", "EXO", 15, 27],
    ["BHS", "EXO", 16, 36],
    ["BHS", "EXO", 17, 16],
    ["BHS", "EXO", 18, 27],
    ["BHS", "EXO", 19, 25],
    ["BHS", "EXO", 20, 26],
    ["BHS", "EXO", 21, 37],
    ["BHS", "EXO", 22, 30],
    ["BHS", "EXO", 23, 33],
    ["BHS", "EXO", 24, 18],
    ["BHS", "EXO", 25, 40],
    ["BHS", "EXO", 26, 37],
    ["BHS", "EXO", 27, 21],
    ["BHS", "EXO", 28, 43],
    ["BHS", "EXO", 29, 46],
    ["BHS", "EXO", 30, 38],
    ["BHS", "EXO", 31, 18],
    ["BHS", "EXO", 32, 35],
    ["BHS", "EXO", 33, 23],
    ["BHS", "EXO", 34, 35],
    ["BHS", "EXO", 35, 35],
    ["BHS", "EXO", 36, 38],
    ["BHS", "EXO", 37, 29],
    ["BHS", "EXO", 38, 31],
    ["BHS", "EXO", 39, 43],
    ["BHS", "EXO", 40, 38],
    ["BHS", "LEV", 1, 17],
    ["BHS", "LEV", 2, 16],
    ["BHS", "LEV", 3, 17],
    ["BHS", "LEV", 4, 35],
    ["BHS", "LEV", 5, 26],
    ["BHS", "LEV", 6, 23],
    ["BHS", "LEV", 7, 38],
    ["BHS", "LEV", 8, 36],
    ["BHS", "LEV", 9, 24],
    ["BHS", "LEV", 10, 20],
    ["BHS", "LEV", 11, 47],
    ["BHS", "LEV", 12, 8],
    ["BHS", "LEV", 13, 59],
    ["BHS", "LEV", 14, 57],
    ["BHS", "LEV", 15, 33],
    ["BHS", "LEV", 16, 34],
    ["BHS", "LEV", 17, 16],
    ["BHS", "LEV", 18, 30],
    ["BHS", "LEV", 19, 37],
    ["BHS", "LEV", 20, 27],
    ["BHS", "LEV", 21, 24],
    ["BHS", "LEV", 22, 33],
    ["BHS", "LEV", 23, 44],
    ["BHS", "LEV", 24, 23],
    ["BHS", "LEV", 25, 55],
    ["BHS", "LEV", 26, 46],
    ["BHS", "LEV", 27, 34],
    ["BHS", "NUM", 1, 54],
    ["BHS", "NUM", 2, 34],
    ["BHS", "NUM", 3, 51],
    ["BHS", "NUM", 4, 49],
    ["BHS", "NUM", 5, 31],
    ["BHS", "NUM", 6, 27],
    ["BHS", "NUM", 7, 89],
    ["BHS", "NUM", 8, 26],
    ["BHS", "NUM", 9, 23],
    ["BHS", "NUM", 10, 36],
    ["BHS", "NUM", 11, 35],
    ["BHS", "NUM", 12, 16],
    ["BHS", "NUM", 13, 33],
    ["BHS", "NUM", 14, 45],
    ["BHS", "NUM", 15, 41],
    ["BHS", "NUM", 16, 35],
    ["BHS", "NUM", 17, 28],
    ["BHS", "NUM", 18, 32],
    ["BHS", "NUM", 19, 22],
    ["BHS", "NUM", 20, 29],
    ["BHS", "NUM", 21, 35],
    ["BHS", "NUM", 22, 41],
    ["BHS", "NUM", 23, 30],
    ["BHS", "NUM", 24, 25],
    ["BHS", "NUM", 25, 19],
    ["BHS", "NUM", 26, 65],
    ["BHS", "NUM", 27, 23],
    ["BHS", "NUM", 28, 31],
    ["BHS", "NUM", 29, 39],
    ["BHS", "NUM", 30, 17],
    ["BHS", "NUM", 31, 54],
    ["BHS", "NUM", 32, 42],
    ["BHS", "NUM", 33, 56],
    ["BHS", "NUM", 34, 29],
    ["BHS", "NUM", 35, 34],
    ["BHS", "NUM", 36, 13],
    ["BHS", "DEU", 1, 46],
    ["BHS", "DEU", 2, 37],
    ["BHS", "DEU", 3, 29],
    ["BHS", "DEU", 4, 49],
    ["BHS", "DEU", 5, 33],
    ["BHS", "DEU", 6, 25],
    ["BHS", "DEU", 7, 26],
    ["BHS", "DEU", 8, 20],
    ["BHS", "DEU", 9, 29],
    ["BHS", "DEU", 10, 22],
    ["BHS", "DEU", 11, 32],
    ["BHS", "DEU", 12, 31],
    ["BHS", "DEU", 13, 19],
    ["BHS", "DEU", 14, 29],
    ["BHS", "DEU", 15, 23],
    ["BHS", "DEU", 16, 22],
    ["BHS", "DEU", 17, 20],
    ["BHS", "DEU", 18, 22],
    ["BHS", "DEU", 19, 21],
    ["BHS", "DEU", 20, 20],
    ["BHS", "DEU", 21, 23],
    ["BHS", "DEU", 22, 29],
    ["BHS", "DEU", 23, 26],
    ["BHS", "DEU", 24, 22],
    ["BHS", "DEU", 25, 19],
    ["BHS", "DEU", 26, 19],
    ["BHS", "DEU", 27, 26],
    ["BHS", "DEU", 28, 69],
    ["BHS", "DEU", 29, 28],
    ["BHS", "DEU", 30, 20],
    ["BHS", "DEU", 31, 30],
    ["BHS", "DEU", 32, 52],
    ["BHS", "DEU", 33, 29],
    ["BHS", "DEU", 34, 12],
    ["BHS", "JOS", 1, 18],
    ["BHS", "JOS", 2, 24],
    ["BHS", "JOS", 3, 17],
    ["BHS", "JOS", 4, 24],
    ["BHS", "JOS", 5, 15],
    ["BHS", "JOS", 6, 27],
    ["BHS", "JOS", 7, 26],
    ["BHS", "JOS", 8, 35],
    ["BHS", "JOS", 9, 27],
    ["BHS", "JOS", 10, 43],
    ["BHS", "JOS", 11, 23],
    ["BHS", "JOS", 12, 24],
    ["BHS", "JOS", 13, 33],
    ["BHS", "JOS", 14, 15],
    ["BHS", "JOS", 15, 63],
    ["BHS", "JOS", 16, 10],
    ["BHS", "JOS", 17, 18],
    ["BHS", "JOS", 18, 28],
    ["BHS", "JOS", 19, 51],
    ["BHS", "JOS", 20, 9],
    ["BHS", "JOS", 21, 45],
    ["BHS", "JOS", 22, 34],
    ["BHS", "JOS", 23, 16],
    ["BHS", "JOS", 24, 33],
    ["BHS", "JDG", 1, 36],
    ["BHS", "JDG", 2, 23],
    ["BHS", "JDG", 3, 31],
    ["BHS", "JDG", 4, 24],
    ["BHS", "JDG", 5, 31],
    ["BHS", "JDG", 6, 40],
    ["BHS", "JDG", 7, 25],
    ["BHS", "JDG", 8, 35],
    ["BHS", "JDG", 9, 57],
    ["BHS", "JDG", 10, 18],
    ["BHS", "JDG", 11, 40],
    ["BHS", "JDG", 12, 15],
    ["BHS", "JDG", 13, 25],
    ["BHS", "JDG", 14, 20],
    ["BHS", "JDG", 15, 20],
    ["BHS", "JDG", 16, 31],
    ["BHS", "JDG", 17, 13],
    ["BHS", "JDG", 18, 31],
    ["BHS", "JDG", 19, 30],
    ["BHS", "JDG", 20, 48],
    ["BHS", "JDG", 21, 25],
    ["BHS", "1SA", 1, 28],
    ["BHS", "1SA", 2, 36],
    ["BHS", "1SA", 3, 21],
    ["BHS", "1SA", 4, 22],
    ["BHS", "1SA", 5, 12],
    ["BHS", "1SA", 6, 21],
    ["BHS", "1SA", 7, 17],
    ["BHS", "1SA", 8, 22],
    ["BHS", "1SA", 9, 27],
    ["BHS", "1SA", 10, 27],
    ["BHS", "1SA", 11, 15],
    ["BHS", "1SA", 12, 25],
    ["BHS", "1SA", 13, 23],
    ["BHS", "1SA", 14, 52],
    ["BHS", "1SA", 15, 35],
    ["BHS", "1SA", 16, 23],
    ["BHS", "1SA", 17, 58],
    ["BHS", "1SA", 18, 30],
    ["BHS", "1SA", 19, 24],
    ["BHS", "1SA", 20, 42],
    ["BHS", "1SA", 21, 16],
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
    30: {},
    31: {},
    32: {"3":"פ"},
    33: {"17":"ס","20":"ס"},
    34: {"31":"פ"},
    35: {"8":"פ","29":"פ"},
    36: {"19":"ס","30":"פ","43":"פ"},
    37: {"36":"פ"},
    38: {"30":"ס"},
    39: {"23":"ס"},
    40: {"23":"פ"},
    41: {},
    42: {},
    43: {},
    44: {"17":"פ"},
    45: {},
    46: {"7":"ס","27":"פ"},
    47: {"31":"פ"},
    48: {"22":"פ"},
    49: {"4":"פ","7":"ס","12":"פ","13":"ס","15":"ס","19":"ס","20":"ס","21":"ס","26":"פ"},
    50: {}
};
for (const [chapter, expected] of Object.entries(expectedParashot)) {
    const types = window.ScripturaScriptureParashahTypes.BHS.GEN[chapter];
    assert.equal(JSON.stringify(types), JSON.stringify(expected),
        "Tipos de parashah incorretos em Gênesis " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.GEN[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Gênesis " + chapter);
}
const expectedExodusParashot = {
    1: {"7":"פ","22":"ס"},
    2: {"22":"פ","25":"ס"},
    3: {},
    4: {"17":"פ","26":"פ"},
    5: {},
    6: {"1":"ס","9":"פ","12":"פ","13":"ס","28":"פ","30":"פ"},
    7: {"7":"פ","13":"פ","18":"ס","25":"פ"},
    8: {"11":"ס","15":"ס","28":"פ"},
    9: {"7":"פ","12":"ס","21":"פ","35":"פ"},
    10: {"11":"פ","20":"פ","29":"פ"},
    11: {"3":"ס","8":"ס","10":"פ"},
    12: {"20":"פ","28":"ס","36":"פ","42":"פ","50":"ס","51":"פ"},
    13: {"10":"ס","16":"ס","22":"פ"},
    14: {"14":"פ","25":"פ","31":"פ"},
    15: {"19":"פ","21":"ס","26":"ס"},
    16: {"3":"ס","5":"ס","10":"פ","27":"ס","36":"פ"},
    17: {"7":"פ","13":"פ","16":"פ"},
    18: {"27":"פ"},
    19: {"25":"ס"},
    20: {"1":"ס","6":"ס","7":"פ","11":"ס","12":"ס","13":"ס","14":"ס","15":"ס","16":"ס","17":"פ","21":"פ","26":"פ"},
    21: {"6":"ס","11":"ס","13":"ס","14":"ס","16":"ס","17":"ס","19":"ס","21":"ס","25":"ס","26":"ס","27":"פ","32":"ס","34":"ס","36":"ס"},
    22: {"3":"ס","4":"ס","5":"ס","8":"ס","12":"פ","14":"ס","16":"ס","17":"ס","18":"ס","23":"פ","26":"ס","30":"ס"},
    23: {"1":"ס","3":"ס","4":"ס","5":"ס","19":"ס","33":"פ"},
    24: {"11":"ס","18":"פ"},
    25: {"9":"ס","22":"פ","30":"פ","40":"ס"},
    26: {"6":"פ","14":"פ","30":"ס","37":"ס"},
    27: {"8":"ס","19":"ס","21":"ס"},
    28: {"5":"פ","12":"ס","14":"ס","30":"ס","35":"ס","43":"ס"},
    29: {"37":"ס","46":"פ"},
    30: {"10":"פ","16":"פ","21":"פ","33":"ס","38":"ס"},
    31: {"11":"פ","17":"ס"},
    32: {"6":"פ","14":"פ","35":"ס"},
    33: {"11":"ס","16":"פ","23":"ס"},
    34: {"26":"פ","35":"ס"},
    35: {"3":"פ","29":"פ"},
    36: {"7":"ס","13":"ס","19":"ס","38":"פ"},
    37: {"9":"פ","16":"פ","24":"פ","29":"פ"},
    38: {"7":"ס","8":"ס","20":"ס","23":"ס"},
    39: {"1":"פ","7":"פ","26":"ס","29":"ס","31":"ס","32":"פ","43":"פ"},
    40: {"16":"ס","19":"ס","21":"ס","23":"ס","25":"ס","27":"פ","29":"ס","32":"ס","33":"פ"}
};
for (const [chapter, expected] of Object.entries(expectedExodusParashot)) {
    const typeMap = window.ScripturaScriptureParashahTypes.BHS.EXO[chapter];
    assert.equal(JSON.stringify(typeMap), JSON.stringify(expected),
        "Tipos de parashah incorretos em Êxodo " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.EXO[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Êxodo " + chapter);
}

const expectedLeviticusParashot = {
    1: {"9":"ס","13":"פ","17":"ס"},
    2: {"3":"ס","4":"ס","6":"ס","13":"ס","16":"פ"},
    3: {"5":"פ","11":"פ","17":"פ"},
    4: {"12":"פ","21":"פ","26":"פ","31":"פ","35":"פ"},
    5: {"10":"ס","13":"ס","16":"פ","19":"פ","26":"פ"},
    6: {"6":"ס","11":"פ","16":"פ","23":"פ"},
    7: {"10":"פ","21":"פ","27":"פ","38":"פ"},
    8: {"36":"ס"},
    9: {},
    10: {"7":"פ","11":"פ","20":"פ"},
    11: {"20":"ס","28":"ס","38":"ס","47":"פ"},
    12: {"8":"פ"},
    13: {"8":"פ","17":"פ","23":"ס","28":"פ","37":"ס","39":"ס","46":"ס","59":"פ"},
    14: {"20":"ס","32":"פ","57":"ס"},
    15: {"15":"ס","17":"פ","24":"פ","33":"פ"},
    16: {"34":"פ"},
    17: {"12":"ס","16":"פ"},
    18: {"5":"ס","6":"ס","7":"ס","8":"ס","9":"ס","10":"ס","11":"ס","12":"ס","13":"ס","14":"ס","15":"ס","16":"ס","30":"פ"},
    19: {"19":"פ","22":"פ","32":"פ","37":"פ"},
    20: {"27":"פ"},
    21: {"9":"ס","15":"פ","24":"פ"},
    22: {"13":"ס","16":"פ","25":"פ","33":"פ"},
    23: {"3":"פ","8":"פ","14":"ס","22":"ס","25":"ס","32":"פ","44":"פ"},
    24: {"4":"פ","9":"ס","12":"פ","23":"פ"},
    25: {"7":"ס","24":"ס","34":"ס","38":"ס","46":"ס"},
    26: {"2":"ס","13":"פ","17":"ס","26":"ס","46":"פ"},
    27: {"8":"ס","25":"ס"}
};
for (const [chapter, expected] of Object.entries(expectedLeviticusParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS.LEV[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em Levítico " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.LEV[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Levítico " + chapter);
}

const expectedNumbersParashot = {
    1: {"19":"פ","21":"פ","23":"פ","25":"פ","27":"פ","29":"פ","31":"פ","33":"פ","35":"פ","37":"פ","39":"פ","41":"פ","43":"פ","47":"פ","54":"פ"},
    2: {"6":"ס","9":"ס","16":"ס","17":"ס","24":"ס","31":"פ"},
    3: {"4":"פ","10":"פ","13":"ס","39":"ס","43":"פ","51":"פ"},
    4: {"16":"ס","20":"פ","28":"פ","37":"ס","49":"פ"},
    5: {"4":"פ","10":"פ","31":"פ"},
    6: {"21":"פ","23":"ס","24":"ס","25":"ס","26":"ס","27":"פ"},
    7: {"11":"ס","17":"פ","23":"פ","29":"פ","35":"פ","41":"פ","47":"פ","53":"פ","59":"פ","65":"פ","71":"פ","77":"פ","83":"פ","89":"פ"},
    8: {"4":"פ","22":"ס","26":"פ"},
    9: {"8":"פ","14":"פ","23":"פ"},
    10: {"10":"פ","17":"ס","21":"ס","24":"ס","28":"ס","34":"ס","36":"פ"},
    11: {"15":"פ","22":"פ","35":"פ"},
    12: {"3":"ס","13":"פ","16":"פ"},
    13: {},
    14: {"10":"פ","25":"פ","45":"פ"},
    15: {"16":"פ","21":"ס","26":"ס","31":"פ","34":"ס","36":"פ","41":"פ"},
    16: {"19":"פ","22":"פ","35":"פ"},
    17: {"8":"פ","15":"פ","24":"ס","26":"ס","28":"ס"},
    18: {"7":"ס","20":"ס","24":"פ","32":"פ"},
    19: {"22":"פ"},
    20: {"6":"פ","11":"ס","13":"ס","21":"פ","29":"ס"},
    21: {"3":"פ","16":"ס","20":"פ"},
    22: {"1":"ס"},
    23: {},
    24: {"25":"פ"},
    25: {"9":"פ","15":"פ","19":"פ"},
    26: {"11":"ס","14":"ס","18":"ס","22":"ס","25":"ס","27":"ס","34":"ס","37":"ס","41":"ס","43":"ס","47":"ס","51":"פ","56":"ס","65":"ס"},
    27: {"5":"ס","11":"ס","14":"פ","23":"פ"},
    28: {"8":"פ","10":"ס","15":"ס","25":"ס","31":"פ"},
    29: {"6":"ס","11":"פ","16":"ס","19":"ס","22":"ס","25":"ס","28":"ס","31":"פ","34":"פ"},
    30: {"1":"פ","17":"פ"},
    31: {"12":"ס","20":"ס","24":"פ","54":"פ"},
    32: {"4":"ס","15":"ס","19":"פ","42":"פ"},
    33: {"39":"ס","49":"ס","56":"פ"},
    34: {"15":"פ","29":"פ"},
    35: {"8":"פ","34":"פ"},
    36: {}
};
for (const [chapter, expected] of Object.entries(expectedNumbersParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS.NUM[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em Números " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.NUM[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Números " + chapter);
}
assert.equal(JSON.stringify(window.ScripturaScriptureInvertedNuns.BHS.NUM[10]), "[34,36]",
    "Posições do nun invertido incorretas em Números 10");
assert.equal(window.ScripturaScriptureTexts.BHS.NUM[10][34].endsWith("׃ ׆"), true);
assert.equal(window.ScripturaScriptureTexts.BHS.NUM[10][36].endsWith("׃ ׆"), true);

const expectedDeuteronomyParashot = {
    1: {},
    2: {"1":"ס","16":"ס","30":"ס"},
    3: {"22":"ס","29":"פ"},
    4: {"24":"פ","40":"פ","49":"פ"},
    5: {"5":"ס","11":"ס","15":"ס","16":"ס","17":"ס","18":"ס","19":"ס","20":"ס","21":"ס"},
    6: {"3":"פ","9":"ס","15":"ס","19":"ס","25":"ס"},
    7: {"6":"ס","11":"פ","16":"ס","26":"פ"},
    8: {"18":"פ","20":"פ"},
    9: {"29":"פ"},
    10: {"11":"פ"},
    11: {"9":"ס","12":"ס","21":"ס","25":"ס","28":"ס"},
    12: {"19":"ס","28":"ס"},
    13: {"1":"פ","12":"ס","19":"ס"},
    14: {"2":"ס","8":"ס","10":"ס","21":"פ","27":"ס","29":"ס"},
    15: {"6":"ס","11":"ס","18":"פ","23":"פ"},
    16: {"8":"ס","12":"פ","17":"ס","20":"ס","21":"ס","22":"ס"},
    17: {"1":"ס","7":"פ","13":"ס","20":"ס"},
    18: {"2":"ס","5":"ס","8":"ס","13":"ס","22":"ס"},
    19: {"7":"ס","10":"ס","13":"ס","14":"ס","21":"ס"},
    20: {"9":"ס","18":"ס","20":"פ"},
    21: {"9":"ס","14":"ס","17":"ס","21":"ס","23":"ס"},
    22: {"3":"ס","4":"ס","5":"פ","7":"ס","8":"ס","9":"ס","10":"ס","11":"ס","12":"ס","19":"ס","21":"ס","22":"ס","24":"ס","27":"ס","29":"ס"},
    23: {"1":"ס","2":"ס","3":"ס","7":"ס","9":"ס","15":"ס","17":"ס","21":"ס","24":"ס","25":"ס","26":"ס"},
    24: {"4":"ס","5":"ס","6":"ס","8":"ס","9":"ס","13":"ס","15":"ס","16":"ס","18":"ס","20":"ס","22":"ס"},
    25: {"3":"ס","4":"ס","10":"ס","12":"ס","13":"ס","16":"פ","19":"פ"},
    26: {"11":"ס","15":"ס","19":"ס"},
    27: {"8":"ס","10":"ס","14":"ס","15":"ס","16":"ס","17":"ס","18":"ס","19":"ס","20":"ס","21":"ס","22":"ס","23":"ס","24":"ס","25":"ס","26":"פ"},
    28: {"14":"ס","68":"ס","69":"פ"},
    29: {"8":"פ","28":"ס"},
    30: {"10":"פ","14":"ס","20":"פ"},
    31: {"6":"פ","13":"פ","15":"ס","30":"פ"},
    32: {"43":"פ","47":"פ","52":"פ"},
    33: {"6":"ס","7":"ס","11":"ס","12":"ס","17":"ס","19":"ס","21":"ס","23":"ס","29":"ס"},
    34: {}
};
for (const [chapter, expected] of Object.entries(expectedDeuteronomyParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS.DEU[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em Deuteronômio " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.DEU[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Deuteronômio " + chapter);
}
const expectedDeuteronomyInline = {
    2: {"8":[{"offset":125,"type":"ס"}]},
    5: {"21":[{"offset":31,"type":"ס"}]},
    23: {"8":[{"offset":43,"type":"ס"}]}
};
const originalDeuteronomyInlineVerses = {
    "2:8": "וַֽנַּעֲבֹ֞ר מֵאֵ֧ת אַחֵ֣ינוּ בְנֵי־עֵשָׂ֗ו הַיֹּֽשְׁבִים֙ בְּשֵׂעִ֔יר מִדֶּ֨רֶךְ֙ הָֽעֲרָבָ֔ה מֵאֵילַ֖ת וּמֵעֶצְיֹ֣ן גָּ֑בֶר ס\nוַנֵּ֨פֶן֙ וַֽנַּעֲבֹ֔ר דֶּ֖רֶךְ מִדְבַּ֥ר מוֹאָֽב׃",
    "5:21": "וְלֹ֥א תַחְמֹ֖ד אֵ֣שֶׁת רֵעֶ֑ךָ ס\nוְלֹ֨א תִתְאַוֶּ֜ה בֵּ֣ית רֵעֶ֗ךָ שָׂדֵ֜הוּ וְעַבְדּ֤וֹ וַאֲמָתוֹ֙ שֹׁור֣וֹ וַחֲמֹר֔וֹ וְכֹ֖ל אֲשֶׁ֥ר לְרֵעֶֽךָ׃",
    "23:8": "לֹֽא־תְתַעֵ֣ב אֲדֹמִ֔י כִּ֥י אָחִ֖יךָ ה֑וּא ס\nלֹא־תְתַעֵ֣ב מִצְרִ֔י כִּי־גֵ֖ר הָיִ֥יתָ בְאַרְצֽוֹ׃"
};
for (const [chapter, versesMap] of Object.entries(expectedDeuteronomyInline)) {
    const actual = window.ScripturaScriptureInlineParashahTypes.BHS.DEU[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(versesMap),
        "Marcadores internos incorretos em Deuteronômio " + chapter);
    for (const [verse, marks] of Object.entries(versesMap)) {
        let reconstructed = window.ScripturaScriptureTexts.BHS.DEU[chapter][verse];
        for (let index = marks.length - 1; index >= 0; index--) {
            const mark = marks[index];
            reconstructed = reconstructed.slice(0, mark.offset) + " " + mark.type + reconstructed.slice(mark.offset);
        }
        assert.equal(reconstructed, originalDeuteronomyInlineVerses[chapter + ":" + verse],
            "Reconstrução massorética interna alterada em Deuteronômio " + chapter + ":" + verse);
    }
}

const expectedJoshuaParashot = {
    1: {"9":"פ","11":"ס","18":"פ"},
    2: {"24":"ס"},
    3: {"4":"ס","6":"ס","8":"פ"},
    4: {"3":"ס","13":"ס","14":"פ","24":"ס"},
    5: {"1":"ס","8":"פ","12":"ס"},
    6: {"1":"ס","11":"פ","25":"פ"},
    7: {"9":"ס","26":"פ"},
    8: {"17":"פ","29":"פ","35":"פ"},
    9: {"2":"פ","27":"פ"},
    10: {"7":"פ","11":"ס","14":"פ","27":"פ","30":"ס","32":"פ","35":"פ","37":"ס","43":"פ"},
    11: {"5":"פ","9":"ס","20":"ס","23":"פ"},
    12: {"6":"ס","8":"פ","24":"פ"},
    13: {"14":"ס","23":"פ","32":"ס"},
    14: {"5":"פ","15":"פ"},
    15: {"19":"פ","32":"ס","41":"ס","47":"ס","54":"ס","60":"ס","63":"פ"},
    16: {"10":"פ"},
    17: {"13":"ס","18":"פ"},
    18: {"10":"פ","28":"פ"},
    19: {"9":"פ","16":"פ","23":"פ","31":"פ","39":"פ","48":"פ","51":"פ"},
    20: {"9":"פ"},
    21: {"4":"ס","5":"ס","6":"ס","8":"פ","12":"ס","16":"פ","19":"ס","22":"ס","24":"ס","26":"ס","27":"ס","29":"ס","31":"ס","33":"ס","37":"ס","42":"ס","45":"פ"},
    22: {"6":"ס","8":"פ","12":"פ","20":"פ","29":"פ","34":"פ"},
    23: {"16":"פ"},
    24: {"15":"פ","18":"ס","26":"ס","28":"פ"}
};
for (const [chapter, expected] of Object.entries(expectedJoshuaParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS.JOS[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em Josué " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.JOS[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Josué " + chapter);
}
const expectedJoshuaInline = {
    4: {"1":[{"offset":67,"type":"פ"}]}
};
const originalJoshuaInlineVerses = {
    "4:1": "וַיְהִי֙ כַּאֲשֶׁר־תַּ֣מּוּ כָל־הַגּ֔וֹי לַעֲב֖וֹר אֶת־הַיַּרְדֵּ֑ן פ\nוַיֹּ֣אמֶר יְהוָ֔ה אֶל־יְהוֹשֻׁ֖עַ לֵאמֹֽר׃"
};
for (const [chapter, versesMap] of Object.entries(expectedJoshuaInline)) {
    const actual = window.ScripturaScriptureInlineParashahTypes.BHS.JOS[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(versesMap),
        "Marcadores internos incorretos em Josué " + chapter);
    for (const [verse, marks] of Object.entries(versesMap)) {
        let reconstructed = window.ScripturaScriptureTexts.BHS.JOS[chapter][verse];
        for (let index = marks.length - 1; index >= 0; index--) {
            const mark = marks[index];
            reconstructed = reconstructed.slice(0, mark.offset) + " " + mark.type + reconstructed.slice(mark.offset);
        }
        assert.equal(reconstructed, originalJoshuaInlineVerses[chapter + ":" + verse],
            "Reconstrução massorética interna alterada em Josué " + chapter + ":" + verse);
    }
}

const expectedJudgesParashot = {
    1: {"7":"פ","15":"פ","21":"ס","26":"פ","28":"ס","29":"פ","30":"ס","32":"ס","33":"ס","36":"פ"},
    2: {"5":"פ","10":"ס","23":"פ"},
    3: {"6":"פ","11":"פ","14":"ס","30":"ס","31":"ס"},
    4: {"3":"ס","12":"ס","24":"פ"},
    5: {"31":"פ"},
    6: {"6":"פ","10":"פ","19":"ס","24":"פ","32":"פ","40":"פ"},
    7: {"3":"ס","6":"ס","8":"פ","14":"פ","18":"פ"},
    8: {"9":"פ","28":"פ","32":"פ","35":"פ"},
    9: {"5":"ס","21":"פ","25":"פ","33":"ס","36":"ס","38":"ס","45":"פ","49":"פ","57":"פ"},
    10: {"2":"פ","5":"פ","10":"פ","16":"פ","18":"פ"},
    11: {"3":"פ","11":"פ","28":"פ","31":"פ","33":"פ","40":"ס"},
    12: {"7":"פ","10":"פ","12":"פ","15":"פ"},
    13: {"1":"פ","7":"פ","18":"ס","25":"פ"},
    14: {"4":"פ","19":"פ"},
    15: {"8":"ס","20":"פ"},
    16: {"3":"פ","22":"פ","31":"פ"},
    17: {"6":"פ"},
    18: {"1":"ס","6":"פ","31":"פ"},
    19: {"30":"פ"},
    20: {"2":"פ","11":"פ","16":"פ","19":"פ","23":"פ","29":"פ","34":"פ","48":"פ"},
    21: {"4":"פ","12":"ס","18":"ס","22":"ס"}
};
for (const [chapter, expected] of Object.entries(expectedJudgesParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS.JDG[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em Juízes " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS.JDG[chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em Juízes " + chapter);
}
const expectedJudgesInline = {
    2: {"1":[{"offset":58,"type":"פ"}]},
    6: {"22":[{"offset":50,"type":"ס"}]},
    7: {"5":[{"offset":35,"type":"ס"}]}
};
const originalJudgesInlineVerses = {
    "2:1": "וַיַּ֧עַל מַלְאַךְ־יְהוָ֛ה מִן־הַגִּלְגָּ֖ל אֶל־הַבֹּכִ֑ים פ\nוַיֹּאמֶר֩ אַעֲלֶ֨ה אֶתְכֶ֜ם מִמִּצְרַ֗יִם וָאָבִ֤יא אֶתְכֶם֙ אֶל־הָאָ֗רֶץ אֲשֶׁ֤ר נִשְׁבַּ֨עְתִּי֙ לַאֲבֹ֣תֵיכֶ֔ם וָאֹמַ֕ר לֹֽא־אָפֵ֧ר בְּרִיתִ֛י אִתְּכֶ֖ם לְעוֹלָֽם׃",
    "6:22": "וַיַּ֣רְא גִּדְע֔וֹן כִּֽי־מַלְאַ֥ךְ יְהוָ֖ה ה֑וּא ס\nוַיֹּ֣אמֶר גִּדְע֗וֹן אֲהָהּ֙ אֲדֹנָ֣י יְהוִ֔ה כִּֽי־עַל־כֵּ֤ן רָאִ֨יתִי֙ מַלְאַ֣ךְ יְהוָ֔ה פָּנִ֖ים אֶל־פָּנִֽים׃",
    "7:5": "וַיּ֥וֹרֶד אֶת־הָעָ֖ם אֶל־הַמָּ֑יִם ס\nוַיֹּ֨אמֶר יְהוָ֜ה אֶל־גִּדְע֗וֹן כֹּ֣ל אֲשֶׁר־יָלֹק֩ בִּלְשֹׁונ֨וֹ מִן־הַמַּ֜יִם כַּאֲשֶׁ֧ר יָלֹ֣ק הַכֶּ֗לֶב תַּצִּ֤יג אוֹתוֹ֙ לְבָ֔ד וְכֹ֛ל אֲשֶׁר־יִכְרַ֥ע עַל־בִּרְכָּ֖יו לִשְׁתּֽוֹת׃"
};
for (const [chapter, versesMap] of Object.entries(expectedJudgesInline)) {
    const actual = window.ScripturaScriptureInlineParashahTypes.BHS.JDG[chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(versesMap),
        "Marcadores internos incorretos em Juízes " + chapter);
    for (const [verse, marks] of Object.entries(versesMap)) {
        let reconstructed = window.ScripturaScriptureTexts.BHS.JDG[chapter][verse];
        for (let index = marks.length - 1; index >= 0; index--) {
            const mark = marks[index];
            reconstructed = reconstructed.slice(0, mark.offset) + " " + mark.type + reconstructed.slice(mark.offset);
        }
        assert.equal(reconstructed, originalJudgesInlineVerses[chapter + ":" + verse],
            "Reconstrução massorética interna alterada em Juízes " + chapter + ":" + verse);
    }
}

const expectedFirstSamuelParashot = {
    1: {"28":"פ"},
    2: {"10":"פ","21":"ס","26":"ס","36":"ס"},
    3: {"1":"ס","3":"פ","5":"ס","10":"פ","18":"פ","21":"פ"},
    4: {"17":"פ","22":"פ"},
    5: {"5":"ס","8":"ס"},
    6: {"14":"ס","16":"ס","17":"ס","20":"ס"},
    7: {"1":"פ","2":"ס","4":"פ","17":"פ"},
    8: {"3":"פ","6":"פ","9":"ס","10":"ס","21":"פ","22":"פ"},
    9: {"14":"ס","20":"ס","21":"ס","27":"פ"},
    10: {"9":"ס","16":"פ","24":"פ","27":"פ"},
    11: {"10":"ס","13":"ס","15":"פ"},
    12: {"5":"פ","17":"ס","19":"ס","25":"פ"},
    13: {"12":"ס","14":"פ","18":"ס","23":"ס"},
    14: {"5":"ס","7":"ס","16":"פ","24":"ס","35":"פ","40":"ס","45":"ס","48":"ס","51":"ס","52":"ס"},
    15: {"1":"ס","3":"ס","9":"פ","15":"ס","16":"ס","19":"ס","23":"ס","26":"ס","31":"ס","32":"ס","33":"ס","35":"פ"},
    16: {"13":"ס","16":"פ","23":"פ"},
    17: {"11":"פ","14":"ס","16":"פ","33":"ס","36":"ס","44":"ס","54":"ס","56":"ס"},
    18: {"5":"פ","9":"ס","13":"פ","16":"פ","17":"ס","24":"פ","27":"ס","29":"ס","30":"ס"},
    19: {"3":"ס","7":"ס","10":"פ","13":"ס","14":"פ","24":"פ"},
    20: {"4":"פ","8":"פ","9":"ס","10":"ס","11":"ס","17":"ס","23":"ס","26":"ס","29":"ס","31":"ס","33":"ס","34":"ס","42":"פ"},
    21: {"5":"פ","9":"ס","16":"ס"}
};
for (const [chapter, expected] of Object.entries(expectedFirstSamuelParashot)) {
    const actual = window.ScripturaScriptureParashahTypes.BHS["1SA"][chapter];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected),
        "Parashah incorreta em 1º Samuel " + chapter);
    assert.equal(JSON.stringify(window.ScripturaScriptureParagraphBreaks.BHS["1SA"][chapter]),
        JSON.stringify(Object.keys(expected).map(Number)),
        "Posições de parashah incorretas em 1º Samuel " + chapter);
}
const expectedFirstSamuelInline = {
    10: {"18":[{"offset":36,"type":"פ"}],"22":[{"offset":57,"type":"ס"}]},
    14: {"12":[{"offset":133,"type":"פ"}],"19":[{"offset":118,"type":"פ"}],"36":[{"offset":184,"type":"ס"}]},
    16: {"2":[{"offset":68,"type":"ס"}],"12":[{"offset":83,"type":"פ"}]},
    17: {"37":[{"offset":133,"type":"ס"}]},
    20: {"27":[{"offset":72,"type":"ס"}]}
};
const originalFirstSamuelInlineVerses = {
    "10:18": "וַיֹּ֣אמֶר ׀ אֶל־בְּנֵ֣י יִשְׂרָאֵ֗ל פ\nכֹּֽה־אָמַ֤ר יְהוָה֙ אֱלֹהֵ֣י יִשְׂרָאֵ֔ל אָנֹכִ֛י הֶעֱלֵ֥יתִי אֶת־יִשְׂרָאֵ֖ל מִמִּצְרָ֑יִם וָאַצִּ֤יל אֶתְכֶם֙ מִיַּ֣ד מִצְרַ֔יִם וּמִיַּד֙ כָּל־הַמַּמְלָכ֔וֹת הַלֹּחֲצִ֖ים אֶתְכֶֽם׃",
    "10:22": "וַיִּשְׁאֲלוּ־עוֹד֙ בַּֽיהוָ֔ה הֲבָ֥א ע֖וֹד הֲלֹ֣ם אִ֑ישׁ ס\nוַיֹּ֣אמֶר יְהוָ֔ה הִנֵּה־ה֥וּא נֶחְבָּ֖א אֶל־הַכֵּלִֽים׃",
    "14:12": "וַיַּעֲנוּ֩ אַנְשֵׁ֨י הַמַּצָּבָ֜ה אֶת־יוֹנָתָ֣ן ׀ וְאֶת־נֹשֵׂ֣א כֵלָ֗יו וַיֹּֽאמְרוּ֙ עֲל֣וּ אֵלֵ֔ינוּ וְנוֹדִ֥יעָה אֶתְכֶ֖ם דָּבָ֑ר פ\nוַיֹּ֨אמֶר יוֹנָתָ֜ן אֶל־נֹשֵׂ֤א כֵלָיו֙ עֲלֵ֣ה אַחֲרַ֔י כִּֽי־נְתָנָ֥ם יְהוָ֖ה בְּיַ֥ד יִשְׂרָאֵֽל׃",
    "14:19": "וַיְהִ֗י עַ֣ד דִּבֶּ֤ר שָׁאוּל֙ אֶל־הַכֹּהֵ֔ן וְהֶהָמ֗וֹן אֲשֶׁר֙ בְּמַחֲנֵ֣ה פְלִשְׁתִּ֔ים וַיֵּ֥לֶךְ הָל֖וֹךְ וָרָ֑ב פ\nוַיֹּ֧אמֶר שָׁא֛וּל אֶל־הַכֹּהֵ֖ן אֱסֹ֥ף יָדֶֽךָ׃",
    "14:36": "וַיֹּ֣אמֶר שָׁא֡וּל נֵרְדָ֣ה אַחֲרֵי֩ פְלִשְׁתִּ֨ים ׀ לַ֜יְלָה וְֽנָבֹ֥זָה בָהֶ֣ם ׀ עַד־א֣וֹר הַבֹּ֗קֶר וְלֹֽא־נַשְׁאֵ֤ר בָּהֶם֙ אִ֔ישׁ וַיֹּ֣אמְר֔וּ כָּל־הַטּ֥וֹב בְּעֵינֶ֖יךָ עֲשֵׂ֑ה ס\nוַיֹּ֨אמֶר֙ הַכֹּהֵ֔ן נִקְרְבָ֥ה הֲלֹ֖ם אֶל־הָאֱלֹהִֽים׃",
    "16:2": "וַיֹּ֤אמֶר שְׁמוּאֵל֙ אֵ֣יךְ אֵלֵ֔ךְ וְשָׁמַ֥ע שָׁא֖וּל וַהֲרָגָ֑נִי ס\nוַיֹּ֣אמֶר יְהוָ֗ה עֶגְלַ֤ת בָּקָר֙ תִּקַּ֣ח בְּיָדֶ֔ךָ וְאָ֣מַרְתָּ֔ לִזְבֹּ֥חַ לַֽיהוָ֖ה בָּֽאתִי׃",
    "16:12": "וַיִּשְׁלַ֤ח וַיְבִיאֵ֨הוּ֙ וְה֣וּא אַדְמוֹנִ֔י עִם־יְפֵ֥ה עֵינַ֖יִם וְט֣וֹב רֹ֑אִי פ\nוַיֹּ֧אמֶר יְהוָ֛ה ק֥וּם מְשָׁחֵ֖הוּ כִּֽי־זֶ֥ה הֽוּא׃",
    "17:37": "וַיֹּאמֶר֮ דָּוִד֒ יְהוָ֗ה אֲשֶׁ֨ר הִצִּלַ֜נִי מִיַּ֤ד הָֽאֲרִי֙ וּמִיַּ֣ד הַדֹּ֔ב ה֣וּא יַצִּילֵ֔נִי מִיַּ֥ד הַפְּלִשְׁתִּ֖י הַזֶּ֑ה ס\nוַיֹּ֨אמֶר שָׁא֤וּל אֶל־דָּוִד֙ לֵ֔ךְ וַֽיהוָ֖ה יִהְיֶ֥ה עִמָּֽךְ׃",
    "20:27": "וַיְהִ֗י מִֽמָּחֳרַ֤ת הַחֹ֨דֶשׁ֙ הַשֵּׁנִ֔י וַיִּפָּקֵ֖ד מְק֣וֹם דָּוִ֑ד ס\nוַיֹּ֤אמֶר שָׁאוּל֙ אֶל־יְהוֹנָתָ֣ן בְּנ֔וֹ מַדּ֜וּעַ לֹא־בָ֧א בֶן־יִשַׁ֛י גַּם־תְּמ֥וֹל גַּם־הַיּ֖וֹם אֶל־הַלָּֽחֶם׃"
};
for (const [chapter, byVerse] of Object.entries(expectedFirstSamuelInline)) {
    assert.equal(JSON.stringify(window.ScripturaScriptureInlineParashahTypes.BHS["1SA"][chapter]),
        JSON.stringify(byVerse), "Marcadores internos incorretos em 1º Samuel " + chapter);
    for (const [verse, markers] of Object.entries(byVerse)) {
        let restored = window.ScripturaScriptureTexts.BHS["1SA"][chapter][verse];
        for (let i = markers.length - 1; i >= 0; i--) {
            const mark = markers[i];
            restored = restored.slice(0, mark.offset) + " " + mark.type + restored.slice(mark.offset);
        }
        assert.equal(restored, originalFirstSamuelInlineVerses[chapter + ":" + verse],
            "Quebra interna alterada em 1º Samuel " + chapter + ":" + verse);
    }
}

const inlineGen35 = window.ScripturaScriptureInlineParashahTypes.BHS.GEN[35][22];
assert.equal(inlineGen35.length, 1);
assert.equal(inlineGen35[0].type, "פ");
const verse35_22 = window.ScripturaScriptureTexts.BHS.GEN[35][22];
const reconstructed35_22 = verse35_22.slice(0, inlineGen35[0].offset) +
    " פ" + verse35_22.slice(inlineGen35[0].offset);
assert.ok(reconstructed35_22.includes("וַיִּשְׁמַ֖ע יִשְׂרָאֵֽ֑ל פ\\nוַיִּֽהְי֥וּ בְנֵֽי־יַעֲקֹ֖ב".replace("\\n", "\n")),
    "Posição interna da parashah Gênesis 35:22 alterada");

console.log("OK: " + chapters.length + " capítulos, " + words +
    " ocorrências vocabulares, integridade preservada.");
