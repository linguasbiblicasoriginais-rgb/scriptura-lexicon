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
    // Testar o cartão que o navegador realmente abre, não apenas o JSON-fonte.
    const publicationAudit=await page.evaluate(async (specs)=>{
        const api=window.ScripturaLexiconSearch;
        const audit=[];
        for(const spec of specs){
            const results=await api.search(spec.term,"grego","THAYER");
            let row=null;
            // Contrato do frontend: no máximo 10 linhas por página.
            for(let pageNo=1;pageNo<=Math.min(20,Math.ceil(results.total/10));pageNo++){
                const pageRows=await api.page(results,pageNo,10);
                row=pageRows.find(entry=>entry.target===spec.target);
                if(row) break;
            }
            if (!row){audit.push({term:spec.term,target:spec.target,error:"não encontrado entre os resultados"});continue;}
            const article=await api.loadArticle(row.id);
            const body=article.querySelector(".entry-section .entry-text")?.textContent?.trim();
            const sub=article.querySelector(".entry-meta")?.textContent?.trim();
            audit.push({term:spec.term,target:spec.target,title:article.querySelector("h1")?.textContent?.trim(),
                subtitle:sub,firstParagraph:body?.slice(0,280),technical:article.querySelectorAll(".section-title").length});
        }
        return audit;
    },[
        {term:"alfa",target:"entry-thayer-reinicio-0001"},
        {term:"abadom",target:"entry-thayer-reinicio-0002"},
        {term:"ἀβαρής",target:"entry-thayer-reinicio-0003"},
        {term:"abba",target:"entry-thayer-reinicio-0004"},
        {term:"arao",target:"entry-thayer-reinicio-0005"},
        {term:"abiatar",target:"entry-thayer-reinicio-0006"},
        {term:"abel",target:"entry-thayer-reinicio-0007"}
    ]);
    assert.equal(publicationAudit.length,7);
    const grammar=/(?:^|[),;]\s+)(?:nome próprio(?: masculino)?,?\s+indeclinável|indeclinável|adjetivo de duas terminações|forma aramaica de tratamento,?\s+indeclinável|letra grega;\s*elemento formativo)(?=\s|[,;.(]|$)/iu;
    for(const item of publicationAudit){
        assert.ok(!item.error,"Cartão não encontrado para "+item.term+": "+item.error);
        assert.ok(item.title && item.subtitle && item.firstParagraph,
            "Título, subtítulo ou definição ausente em "+item.term);
        assert.equal(item.technical,0,"Seções administrativas expostas em "+item.term);
        assert.ok(!grammar.test(item.firstParagraph),"Redundância gramatical visível em "+item.term);
    }

    assert.deepEqual(errors,[],"Erros JS no navegador: "+errors.join(" | "));
    console.log(JSON.stringify({status:"PASS",alfa:alfa.firstTarget,abel:abel.firstTarget,syriac:aaron.text,jsErrors:0}));
}finally{await browser.close();}
