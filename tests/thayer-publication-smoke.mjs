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
assert.ok(files.length >= 7,"Faltam artigos aprovados do Thayer");
assert.equal(catalog.thayerReviewed?.approved,files.length,"Contagem de artigos aprovados não corresponde aos arquivos");
assert.equal(catalog.thayerReviewed?.approvedIds?.length,files.length,"Manifesto de publicação incompleto");

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
    const intro=pub.card.html.match(/<p\b[^>]*class="[^"]*\bentry-text\b[^"]*"[^>]*>([\s\S]*?)<\/p>/i)?.[1]?.replace(/<[^>]*>/g,"");
    assert.ok(intro,"Primeiro parágrafo ausente do cartão: "+file);
    const duplicateGrammar=/(?:^|[),;]\s+)(?:nome próprio(?: masculino)?,?\s+indeclinável|indeclinável|adjetivo de duas terminações|forma aramaica de tratamento,?\s+indeclinável|letra grega;\s*elemento formativo)(?=\s|[,;.(]|$)/iu;
    assert.ok(!duplicateGrammar.test(intro.slice(0,260)),
        "Classe gramatical repetida no corpo do cartão: "+file);

}
const expectedOpening = new Map([
    ["0001-alpha.json","A primeira letra do alfabeto grego"],
    ["0002-abaddon.json","Do hebraico אֲבַדּוֹן."],
    ["0003-abaries.json","(De βάρος, peso.)"],
    ["0004-abba.json","[WH -βά], do hebraico"],
    ["0005-aaron.json","(Em Josefo, ὁ Ἀαρών"],
    ["0006-abiathar.json","(Embora em Josefo, Antiguidades Judaicas"],
    ["0007-abel.json","(WH Ἅβ.; ver sua Introdução, § 408; em Josefo"]
]);
assert.equal(files.length,expectedOpening.size,"Inventário revisado não corresponde aos sete verbetes");
for (const [name,start] of expectedOpening) {
    const rec=JSON.parse(fs.readFileSync(path.join(sourceDir,name),"utf8"));
    assert.ok(rec.translation_portuguese_full[0].startsWith(start),
        "Abertura do verbete não corresponde à revisão aprovada: "+name);
}
const alfa=published.get("entry-thayer-reinicio-0001");
assert.ok(alfa,"Lema inicial ausente");
assert.ok(alfa.lookup?.[2]?.includes("alfa"),"Alias 'alfa' não entrou no índice");
// O artigo de Abel do acervo antigo continua arquivado em lexicons/thayer.js,
// mas não pode substituir o revisado na interface nem coexistir como duplicata.
assert.ok(fs.readFileSync(path.join(root,"lexicons/thayer.js"),"utf8").includes("entry-thayer-0006"),
    "Arquivo de Abel histórico foi indevidamente alterado");
assert.ok(published.has("entry-thayer-reinicio-0007"),"Abel revisado não foi publicado");
assert.ok(!published.has("entry-thayer-0006"),"Abel histórico ainda aparece na busca");
const reviewedIds = new Set(catalog.thayerReviewed.approvedIds);
for(const file of files){
    const record=JSON.parse(fs.readFileSync(path.join(sourceDir,file),"utf8"));
    assert.ok(reviewedIds.has(record.entry_id),"Arquivo não entrou no manifesto: "+file);
    assert.equal(record.publication?.approval,"approved_in_chat","Aprovação editorial ausente: "+file);
    assert.equal(record.publication?.requires_exact_card_match,true,"Validação obrigatória desativada: "+file);
    for(const old of record.publication.supersedes_legacy_targets){
        assert.equal(catalog.thayerReviewed.superseded[old],record.entry_id,
            "Substituição histórica divergente: "+file);
        assert.ok(!published.has(old),"Cartão antigo permaneceu na busca: "+old);
    }
}
const abel = published.get("entry-thayer-reinicio-0007");
assert.ok(abel?.card?.html.includes("הֶבֶל"),"Hebraico do Abel revisado não confere com o impresso");
assert.ok(!abel.card.html.includes("fonte fotográfica") &&
           !abel.card.html.includes("OCR"),"Metadados administrativos visíveis no cartão Abel");
const css=fs.readFileSync(path.join(root,"style.css"),"utf8");
for(const name of ["THAYER","ROBINSON","BDAG","DGP","PEREIRA"]){
    assert.ok(css.includes('.search-row[data-source="'+name+'"] .source-pill'),"Cor da etiqueta ausente: "+name);
    assert.ok(css.includes('.entry-card[data-source="'+name+'"] .source-tag'),"Cor do cartão ausente: "+name);
}
// Tipografia siríaca aplicada automaticamente aos spans lang="syr", sem reescrever a fonte.
assert.ok(css.includes('"Estrangelo Edessa", "Noto Sans Syriac"'),"Fonte siríaca preferencial ausente");
assert.equal(css.split(":lang(syr)").length - 1,2,"Falta tipografia ou isolamento direcional siríaco");
const aaron = published.get("entry-thayer-reinicio-0005");
assert.ok(aaron?.card?.html.includes('lang="syr"'),"Siríaco original ausente do verbete Ἀαρών");
assert.ok(aaron.card.html.includes("ܐܰܗܻܝܪܳܐ"),"Sinais vocálicos siríacos perdidos");

console.log(JSON.stringify({
    status:"OK",
    checkedNew:files.length,
    thayerPublished:published.size,
    alfaAlias:true,
    legacyAbelArchivedNotPublished:true,
    publicationGate:true,
    sourceColors:true
}));
