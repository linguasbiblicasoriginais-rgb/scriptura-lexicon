/* THAYER — ensaio funcional real com Chromium/Playwright.
 * Valida o DOM construído por script.js, NÃO substitui a colação filológica.
 */
import assert from "node:assert/strict";
import { chromium } from "playwright";

const origin = process.env.AUDIT_URL || "http://127.0.0.1:8765/";
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } });
const errors = [];
page.on("pageerror", error => errors.push(error.message));

try {
    await page.goto(origin, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForFunction(
        () => document.querySelectorAll('tr.search-row[data-source="THAYER"]').length === 512,
        undefined, { timeout: 45000 }
    );
    const result = await page.evaluate(() => {
        const rows = Array.from(document.querySelectorAll('tr.search-row[data-source="THAYER"]'));
        const cards = Array.from(document.querySelectorAll('article.entry-card'));
        const thayerCards = cards.filter(card =>
            /^entry-thayer-\d{4}$/.test(card.id) || card.id === "entry-aaron-thayer");
        const errors = [];
        const seen = new Set();
        let validatedLinks = 0;
        for (const row of rows) {
            const id = row.dataset.target;
            if (seen.has(id)) errors.push("ID duplicado: " + id);
            seen.add(id);
            const target = document.getElementById(id);
            if (!target || !target.classList.contains("entry-card")) {
                errors.push("Cartão inexistente: " + id);
                continue;
            }
            if (document.querySelectorAll('[id="' + id + '"]').length !== 1) {
                errors.push("Colisão no DOM: " + id);
            }
            if (row.dataset.dictionary !== target.dataset.dictionary) {
                errors.push("Dicionário divergente: " + id);
            }
            const rowLemma = row.querySelector("td.table-lemma")?.textContent.trim();
            const cardLemma = target.querySelector("h1.entry-title")?.textContent.trim();
            if (rowLemma !== cardLemma) errors.push("Lema divergente: " + id);
            if (!row.dataset.search.includes(rowLemma)) {
                errors.push("Pesquisa não indexa o lema: " + id);
            }
            if (id.startsWith("entry-thayer-05")) {
                const links = target.querySelectorAll(
                    'section.entry-section a.reference-link[href^="https://biblehub.com/"]:not([href*="/greek/"])'
                );
                for (const link of links) {
                    if (!/^https:\/\/biblehub\.com\/(?:john|luke|romans|acts|2_peter|mark)\/\d+-\d+\.htm$/.test(link.href)) {
                        errors.push("Link de passagem malformado: " + id + " " + link.href);
                    } else {
                        validatedLinks++;
                    }
                }
            }
        }
        return { rows: rows.length, cards: thayerCards.length, distinctTargets: seen.size, validatedLinks, errors };
    });
    assert.equal(result.rows, 512, "Deve haver exatamente 512 linhas THAYER no DOM");
    assert.equal(result.cards, 512, "Deve haver exatamente 512 cartões THAYER no DOM");
    assert.equal(result.distinctTargets, 512, "Todos os data-target devem ser únicos");
    assert.equal(result.validatedLinks, 15, "15 links bíblicos suplementares no DOM");
    assert.deepEqual(result.errors, [], "Índices, cartões, lemas e URLs devem concordar");

    // Pesquisa pelo lema, com seleção de fonte THAYER.
    await page.locator("#source-filter").evaluate(select => {
        // A UI usa um combobox visual; o select nativo permanece oculto.
        select.value = "THAYER";
        select.dispatchEvent(new Event("change", { bubbles: true }));
    });
    await page.locator("#search-input").fill("ἀγαθός");
    const agathosRow = page.locator('tr.search-row[data-target="entry-thayer-0017"]');
    assert.equal(await agathosRow.isVisible(), true, "Pesquisa por ἀγαθός");
    await agathosRow.click();
    assert.equal(await page.locator("#entry-thayer-0017").isVisible(), true, "Clique abre ἀγαθός");

    // Acessibilidade funcional: foco e Enter.
    await page.locator("#search-input").fill("ἀγγέλλω");
    const angelloRow = page.locator('tr.search-row[data-target="entry-thayer-0500"]');
    assert.equal(await angelloRow.isVisible(), true, "Pesquisa pelo suplemento");
    await angelloRow.focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#entry-thayer-0500").isVisible(), true, "Enter abre o suplemento");

    // Cartão histórico, sem impor-lhe o modelo novo de quatro seções.
    await page.locator("#search-input").fill("Ἀαρών");
    const aaronRow = page.locator('tr.search-row[data-target="entry-aaron-thayer"]');
    assert.equal(await aaronRow.isVisible(), true, "Pesquisa de Ἀαρών");
    await aaronRow.focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#entry-aaron-thayer").isVisible(), true, "Enter abre Ἀαρών");

    // Popup de lema: teste de foco, exibição e texto.
    await page.locator("#search-input").fill("ἀγγέλλω");
    await angelloRow.focus();
    await page.keyboard.press("Enter");
    await page.locator('#entry-thayer-0500 h1.tooltip-trigger').focus();
    assert.equal(
        await page.locator("#lexical-tooltip").getAttribute("aria-hidden"), "false",
        "Popup de lema deve ficar disponível ao receber foco"
    );
    assert.equal(errors.length, 0, "Nenhuma exceção JavaScript durante os ensaios");
    process.stdout.write(JSON.stringify({ status: "PASS", ...result,
        journeys: ["busca_lemma", "filtro_fonte", "click", "enter", "historico", "popup_foco"],
        browser: "Chromium" }, null, 2) + "\n");
} finally {
    await browser.close();
}
