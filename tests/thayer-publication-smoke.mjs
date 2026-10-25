"use strict";
// Verifica a publicação dos artigos revisados do Thayer em lexicon-data,
// preservando artigos históricos distintos e garantindo o ranking de "alfa".
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";

const root = process.cwd();
const catalog = JSON.parse(fs.readFileSync(path.join(root,"lexicon-data/catalog.json"),"utf8"));
assert.equal(catalog.version,4);
assert.ok(catalog.total > 5000,"O índice integral não foi gerado");

const sourceDir = path.join(root,"lexicons/thayer-reinicio-2026-10-25");
const files = fs.readdirSync(sourceDir).filter(name => /^\d{4}-[a-z0-9-]+\.json$/i.test(name)).sort();
assert.ok(files.length >= 6,"Faltam artigos aprovados do reinício");

const metas = new Map(), cards = new Map(), lookups = new Map();
for(const run of catalog.runs.filter(run => run.dictionary === "grego" && run.source === "THAYER")) {
    for(let id=run.start;id<run.end;id++){
        const chunk=String(Math.floor(id/catalog.chunkSize)).padStart(4,"0")+".json";
        if(!metas.has(chunk)){
            metas.set(chunk,JSON.parse(fs.readFileSync(path.join(root,"lexicon-data/meta",chunk),"utf8")));
            cards.set(chunk,JSON.parse(fs.readFileSync(path.join(root,"lexicon-data/cards",chunk),"utf8")));
            lookups.set(chunk,JSON.parse(fs.readFileSync(path.join(root,"lexicon-data/lookup",chunk),"utf8")));
        }
    }
}
const published = new Map();
for(const [chunk, rows] of metas){
    const sourceCards = cards.get(chunk), sourceLookups = lookups.get(chunk);
    for(let offset=0;offset<rows.length;offset++){
        const row = rows[offset];
        if(row?.source !== "THAYER")continue;
        published.set(row.target,{row,card:sourceCards[offset],lookup:sourceLookups[offset]});
    }
}
assert.ok(published.size >= files.length,"O catálogo Thayer está incompleto");
for(const file of files){
    const record=JSON.parse(fs.readFileSync(path.join(sourceDir,file),"utf8"));
    const pub=published.get(record.entry_id);
    assert.ok(pub,"Verbete ausente no catálogo: "+file);
    assert.equal(pub.card?.target,record.entry_id,"Card e índice divergentes: "+file);
    assert.equal(pub.card?.html,record.render.entry_card_html,"O cartão publicado difere do texto aprovado: "+file);
    assert.ok(pub.row?.row?.includes('data-source="THAYER"'),"Falta origem THAYER: "+file);
    assert.ok(!pub.card.html.includes("reinício 2026-10-25"),"Rótulo editorial no cabeçalho: "+file);
}
const alfa=published.get("entry-thayer-reinicio-0001");
assert.ok(alfa,"Lema inicial ausente");
assert.ok(alfa.lookup?.[2]?.includes("alfa"),"Alias 'alfa' não entrou no índice");
// As entradas independentes do Thayer devem coexistir.
assert.ok(published.has("entry-thayer-0006"),"O artigo histórico de Abel foi removido");
const css=fs.readFileSync(path.join(root,"style.css"),"utf8");
for(const name of ["THAYER","ROBINSON","BDAG","DGP","PEREIRA"]){
    assert.ok(css.includes('.search-row[data-source="'+name+'"] .source-pill'),"Cor da etiqueta ausente: "+name);
    assert.ok(css.includes('.entry-card[data-source="'+name+'"] .source-tag'),"Cor do cartão ausente: "+name);
}
// Tipografia siríaca aplicada automaticamente aos spans lang="syr", sem reescrever a fonte.
assert.ok(css.includes('"Estrangelo Edessa", "Noto Sans Syriac"'),"Fonte siríaca preferencial ausente");
assert.equal((css.match(/:lang\\(syr\\)/g)||[]).length,2,"Falta tipografia ou isolamento direcional siríaco");
const aaron = published.get("entry-thayer-reinicio-0005");
assert.ok(aaron?.card?.html.includes('lang="syr"'),"Siríaco original ausente do verbete Ἀαρών");
assert.ok(aaron.card.html.includes("ܐܰܗܻܝܪܳܐ"),"Sinais vocálicos siríacos perdidos");

console.log(JSON.stringify({
    status:"OK",
    checkedNew:files.length,
    thayerPublished:published.size,
    alfaAlias:true,
    legacyAbelPreserved:true,
    sourceColors:true
}));
