"use strict";
/* Teste real de navegação em Chromium: procura, priorização e cartão público.
 * Nunca confundir validação estrutural de JSON com apresentação ao leitor.
 */
import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1280,height:900}});
const url=process.env.AUDIT_URL||"http://127.0.0.1:8765/";
const errors=[];
page.on("pageerror",err=>errors.push(err.message));

try {
    await page.goto(url+"#grego",{waitUntil:"domcontentloaded",timeout:180000});
    await page.waitForFunction(()=>window.ScripturaLexiconSearch?.isReady,{timeout:180000});
    const read=async (q,id) => page.evaluate(async ({q,id})=>{
        const api=window.ScripturaLexiconSearch;
        const results=await api.search(q,"grego","THAYER");
        const firstPage=await api.page(results,1,10);
        const first=firstPage[0];
        if(!first) return {query:q,total:0};
        const card=await api.loadArticle(first.id);
        card.hidden=false;
        const actual=card.querySelector(".entry-section .entry-text")?.textContent||"";
        return {
            query:q,total:results.total,firstTarget:first.target,cardId:card.id,
            h1:card.querySelector("h1")?.textContent,
            subtitle:card.querySelector(".entry-meta")?.textContent,
            body:actual,
            adminSections:[...card.querySelectorAll(".section-title")].map(x=>x.textContent),
            titleTag:card.querySelector(".source-tag")?.textContent?.trim()
        };
    },{q,id});

    const alfa=await read("alfa");
    assert.equal(alfa.firstTarget,"entry-thayer-reinicio-0001","Pesquisa alfa abriu verbete histórico diferente");
    assert.ok(alfa.body.includes("A primeira letra do alfabeto grego"),"Texto integral do alfa não apareceu");
    assert.equal(alfa.subtitle,"Letra grega; elemento formativo");
    assert.deepEqual(alfa.adminSections,[],"Seções técnicas apareceram na tradução alfa");

    const abel=await read("abel");
    assert.equal(abel.firstTarget,"entry-thayer-reinicio-0007","Pesquisa Abel não priorizou o revisado");
    assert.equal(abel.cardId,abel.firstTarget);
    assert.ok(abel.body.includes("הֶבֶל"),"Abel exibiu leitura hebraica divergente do impresso");
    assert.ok(!abel.body.includes("חֶבֶל"),"Transcrição digital incorreta foi exibida");
    assert.equal(abel.subtitle,"Nome próprio indeclinável");
    assert.deepEqual(abel.adminSections,[],"Cartão Abel exibiu notas internas");

    const aaron=await page.evaluate(async ()=>{
        const api=window.ScripturaLexiconSearch;
        const results=await api.search("arao","grego","THAYER");
        const rows=await api.page(results,1,10);
        const match=rows.find(row=>row.target==="entry-thayer-reinicio-0005");
        if (!match)return {error:"Arão revisado não encontrado"};
        const card=await api.loadArticle(match.id);
        const word=card.querySelector('[lang="syr"]');
        return word?{text:word.textContent,css:getComputedStyle(word).fontFamily,dir:getComputedStyle(word).direction}:null;
    });
    assert.ok(aaron&&!aaron.error,"A escrita siríaca do cartão de Arão não foi encontrada");
    assert.equal(aaron.text,"ܐܰܗܻܝܪܳܐ");
    assert.match(aaron.css,/Estrangelo Edessa/);
    assert.equal(aaron.dir,"rtl");
    assert.deepEqual(errors,[],"Erros JS no navegador: "+errors.join(" | "));
    console.log(JSON.stringify({status:"PASS",alfa:alfa.firstTarget,abel:abel.firstTarget,syriac:aaron.text,jsErrors:0}));
}finally{await browser.close();}
