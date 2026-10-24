"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const manifest=JSON.parse(fs.readFileSync("scriptures/uxlc-progress.json","utf8"));
assert.equal(manifest.books.length,39);
const window={};
const context=vm.createContext({window});
vm.runInContext(fs.readFileSync("scriptures/word-popups.js","utf8"),context);
let chapters=0,verses=0,reversedNuns=0;
for (const book of manifest.books) {
  for (let c=1;c<=book.chapters;c++) {
    const path="scriptures/texts/uxlc-"+book.slug+"-"+c+".js";
    vm.runInContext(fs.readFileSync(path,"utf8"),context,{filename:path});
    const data=window.ScripturaScriptureTexts.UXLC[book.id][c];
    assert.equal(Object.keys(data).length,book.perChapter[c-1],path);
    for (const value of Object.values(data)) {
      assert.ok(value);
      assert.equal(window.ScripturaWordPopups.tokenize(value).map(t=>t.text).join(""),value);
      verses++;
    }
    const perChapter=window.ScripturaScriptureUXLCReversedNunPositions?.UXLC?.[book.id]?.[c] || {};
    for (const [verse,offsets] of Object.entries(perChapter)) {
      for (const offset of offsets) {
        assert.equal(data[verse].slice(offset,offset+1),"׆",path+" nun invertido");
        reversedNuns++;
      }
    }
    chapters++;
  }
}
assert.equal(chapters,929);
assert.equal(verses,manifest.verses);
assert.equal(reversedNuns,manifest.reversedNuns);
assert.equal(window.ScripturaScriptureTexts.BHS,undefined);
assert.equal(window.ScripturaWordPopups.getInfo("UXLC","בְּרֵאשִׁ֖ית").meaning,"no princípio");
console.log("OK: UXLC",chapters,"capítulos,",verses,"versículos");
