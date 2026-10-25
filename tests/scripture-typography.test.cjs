"use strict";
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

class Node {
    constructor(tag, value = "") {
        this.tag = tag;
        this._value = value;
        this.childNodes = [];
        this.dataset = {};
        this.attrs = {};
        this.className = "";
        this.style = {};
    }
    set textContent(value) { this._value = String(value); this.childNodes = []; }
    get textContent() { return this._value + this.childNodes.map(node => node.textContent).join(""); }
    append(...nodes) {
        for (const node of nodes) {
            if (node.tag === "#fragment") this.childNodes.push(...node.childNodes);
            else this.childNodes.push(node);
        }
    }
    replaceChildren(...nodes) { this._value = ""; this.childNodes = []; this.append(...nodes); }
    setAttribute(key, value) { this.attrs[key] = String(value); }
    addEventListener() {}
}
const document = {
    body: new Node("body"),
    createElement: tag => new Node(tag),
    createTextNode: text => new Node("#text", text),
    createDocumentFragment: () => new Node("#fragment"),
    addEventListener() {}
};
const window = { addEventListener() {} };
vm.runInNewContext(fs.readFileSync("scriptures/word-popups.js", "utf8"), { document, window });
const target = new Node("bdi");
const popupUI = window.ScripturaWordPopups.attach(new Node("section"), new Node("div"));
const cases = [
    ["LXX", "Καὶ εἶπαν οἱ ἱερεῖς τοῦ Βὴλ, ἰδοὺ ἡμεῖς ἀποτρέχομεν ἔξω, σὺ δὲ."],
    ["LXX", "Καὶ εἶπεν ὁ βασιλεὺς, ὁρῶ τὰ ἴχνη ἀνδρῶν, καὶ γυναικῶν,"],
    ["LXX", "Ἡ δὲ γῆ ἦν ἀόρατος καὶ ἀκατασκεύαστος, ἐπάνω τοῦ ὕδατος.\nΚαὶ ἐγένετο φῶς."],
    ["UXLC", "בְּרֵאשִׁית בָּרָא אֱלֹהִים׃"],
    ["VUL", "In principio creavit Deus caelum et terram."]
];
for (const [edition, verse] of cases) {
    popupUI.decorate(target, verse, { edition, reference: "Teste 1:1" });
    assert.equal(target.textContent, verse, "os caracteres do texto-base foram alterados");
    const units = target.childNodes.filter(node => node.className === "scripture-word-unit");
    assert.ok(units.length > 0, "faltam unidades tipográficas");
    for (const unit of units) {
        assert.ok(!/\s/u.test(unit.textContent), "uma unidade contém espaço ou quebra");
        assert.ok(unit.childNodes.some(node => node.className === "scripture-word"), "popup lexical perdido");
    }
    for (const unit of units.filter(unit => /[,.׃]$/u.test(unit.textContent))) {
        assert.ok(unit.childNodes.some(node => node.className === "scripture-word"),
            "a pontuação final não foi mantida junto à palavra");
    }
    assert.ok(target.childNodes.some(node => node.tag === "#text" && /\s/u.test(node.textContent)),
        "os espaços entre as palavras foram perdidos");
}
const css = fs.readFileSync("scriptures/reader.css", "utf8");
assert.match(css, /\.scripture-word-unit\s*\{[^}]*white-space:\s*nowrap/s);
assert.match(css, /\.scripture-verse-line\s*\{[^}]*text-align:\s*justify/s);
assert.match(css, /\.scripture-verse-line\[dir="rtl"\]\s*\{[^}]*text-align:\s*justify/s);
assert.match(css, /\.scripture-verse-line\[dir="rtl"\]\s*\{[^}]*text-align-last:\s*right/s);
console.log("OK: pontuação inquebrável, conteúdo intacto, popups e justificação LTR/RTL");
