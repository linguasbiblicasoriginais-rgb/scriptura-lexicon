/* Regressão funcional de frontend — DOM real, Playwright/Chromium.
 * Não é auditoria filológica e não valida os destinos HTTP das capas.
 */
import assert from "node:assert/strict";
import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const url = process.env.AUDIT_URL || "http://127.0.0.1:8765/";
const page = await browser.newPage({ viewport: { width: 1320, height: 900 } });
const pageErrors = [];
page.on("pageerror", e => pageErrors.push(e.message));

const report = [];
try {
    for (const dictionary of ["grego", "hebraico", "aramaico", "latim"]) {
        await page.goto(url + "#" + dictionary, {
            waitUntil: "domcontentloaded", timeout: 180000
        });
        assert.equal(
            await page.locator("#dictionary-title").textContent() !== "",
            true, "Título do dicionário vazio"
        );
        assert.equal(await page.locator("#source-details").isVisible(), false,
            "Ficha bibliográfica deve estar oculta ao escolher todas as fontes");
        assert.equal(await page.locator("#entry-navigation").isVisible(), false,
            "A página deve iniciar sem um verbete aberto");

        const sources = await page.locator("#source-filter option").evaluateAll(options =>
            options.map(o => o.value).filter(Boolean)
        );
        const group = { dictionary, sources: sources.length, tested: 0 };

        for (const source of sources) {
            // Testa a interface visual do combobox, não apenas o select auxiliar.
            await page.locator("#source-filter-button").click();
            await page.locator(".source-filter-option").filter({ hasText: source }).first().click();
            assert.equal(await page.locator("#source-filter").inputValue(), source,
                "O combobox visual deve atualizar o seletor nativo");

            assert.equal(await page.locator("#source-details").isVisible(), true,
                "Selecionar uma fonte deve mostrar sua ficha bibliográfica");
            const count = await page.locator("#search-results tr.search-row").evaluateAll(
                (rows, current) => rows.filter(r =>
                    r.dataset.dictionary === current.dictionary &&
                    r.dataset.source === current.source
                ).length, {dictionary,source}
            );
            const shown = await page.locator("#source-details-entries").textContent();
            assert.equal(Number(shown.replace(/\D/g, "")), count,
                "Contagem bibliográfica deve corresponder ao corpus carregado");

            const sample = await page.evaluate(({dictionary,source}) => {
                return [...document.querySelectorAll("tr.search-row")]
                    .filter(r => r.dataset.dictionary === dictionary && r.dataset.source === source)
                    .map(r => ({
                        target: r.dataset.target,
                        lemma: r.querySelector(".table-lemma")?.textContent?.trim() || "",
                        indexed: r.dataset.search || ""
                    }))
                    .find(r => r.target && r.lemma &&
                        normalizeText(r.indexed).includes(normalizeText(r.lemma)));
            }, {dictionary,source});

            assert.ok(sample, dictionary + "/" + source + ": nenhuma amostra pesquisável");
            await page.locator("#search-input").fill(sample.lemma);
            const row = page.locator('tr.search-row[data-target="' + sample.target + '"]');
            assert.equal(await row.isVisible(), true, "Linha não visível após busca: " + source);

            await row.focus();
            await page.keyboard.press("Enter");
            assert.equal(await page.locator("#search-table-wrapper").isVisible(), false,
                "Abrir verbete deve ocultar a tabela");
            assert.equal(await page.locator("#entry-navigation").isVisible(), true,
                "Falta controle de retorno");
            assert.equal(await page.locator("#" + sample.target).isVisible(), true,
                "Verbetes da fonte não abriram: " + source);

            await page.locator("#back-to-results").click();
            assert.equal(await page.locator("#search-table-wrapper").isVisible(), true,
                "Voltar deve restaurar resultados");
            assert.equal(await page.locator("#" + sample.target).isVisible(), false,
                "Voltar deve ocultar o cartão");
            assert.equal(await page.locator("#search-input").inputValue(), sample.lemma,
                "Voltar deve preservar a consulta");
            assert.equal(await page.locator("#source-filter").inputValue(), source,
                "Voltar deve preservar a fonte");
            assert.equal(await page.locator("#entry-navigation").isVisible(), false,
                "Botão de retorno deve desaparecer");

            await row.focus();
            await page.keyboard.press(" ");
            assert.equal(await page.locator("#" + sample.target).isVisible(), true,
                "Espaço deve abrir a ficha");
            await page.keyboard.press("Escape");
            assert.equal(await page.locator("#search-table-wrapper").isVisible(), true,
                "Escape deve retornar aos resultados");
            group.tested++;
        }

        // A mudança para todas as fontes não pode deixar um cartão bibliográfico antigo.
        await page.locator("#source-filter").evaluate(el => {
            el.value = "";
            el.dispatchEvent(new Event("change", {bubbles:true}));
        });
        assert.equal(await page.locator("#source-details").isVisible(), false,
            "Limpar o filtro deve ocultar a ficha");

        if (sources.length === 0) {
            await page.locator("#search-input").fill("teste");
            assert.equal(await page.locator("#search-table-wrapper").isVisible(), true,
                "Mesmo um dicionário vazio deve exibir aviso da busca");
            assert.equal(await page.locator("#no-results").isVisible(), true,
                "Dicionário sem corpus deve exibir aviso");
        }
        report.push(group);
    }

    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(url + "#grego", { waitUntil: "domcontentloaded", timeout:180000 });
    assert.equal(await page.locator("#search-input").isVisible(), true,
        "Caixa de pesquisa não está disponível em telefone");
    assert.equal(pageErrors.length, 0,
        "Exceções JavaScript: " + pageErrors.slice(0, 5).join("; "));
    process.stdout.write(JSON.stringify({status:"PASS",browser:"Chromium",report},null,2)+"\n");
} finally {
    await browser.close();
}
