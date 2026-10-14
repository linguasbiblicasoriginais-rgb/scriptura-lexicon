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
const localCovers = {"THAYER":"imagens/capas/thayer.png","BDAG":"imagens/capas/bdag.png","LEH":"imagens/capas/leh.png","DGP":"imagens/capas/dgp.png","ROBINSON":"imagens/capas/robinson.png","ABBOTT-SMITH":"imagens/capas/abbott-smith.png","HALOT":"imagens/capas/halot.png","JASTROW":"imagens/capas/jastrow.png"};
const renderedCovers = new Set();

async function assertNoLeakedEntries(phase) {
    const state = await page.evaluate(() => {
        const anchor = document.getElementById("dgp-entry-anchor");
        const unexpectedText = Array.from(anchor.parentElement.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE &&
                node.textContent.trim().length > 0)
            .slice(0, 3)
            .map(node => node.textContent.trim().slice(0, 180));
        const visibleCards = Array.from(document.querySelectorAll(".entry-card"))
            .filter(card => getComputedStyle(card).display !== "none")
            .slice(0, 5)
            .map(card => card.id);
        return { query: document.getElementById("search-input").value,
            unexpectedText, visibleCards };
    });
    assert.equal(state.query, "", "Pesquisa não estava vazia: " + phase);
    assert.deepEqual(state.unexpectedText, [],
        "HTML/texto indevido apareceu fora de cartões: " + phase);
    assert.deepEqual(state.visibleCards, [],
        "Verbetes visíveis antes de qualquer pesquisa: " + phase);
}

try {
    // As oito imagens precisam ser PNG íntegros e estar acessíveis pelo servidor local.
    for (const [source, path] of Object.entries(localCovers)) {
        const response = await page.request.get(new URL(path, url).toString());
        assert.equal(response.status(), 200, "Capa não encontrada: " + source);
        const bytes = await response.body();
        assert.ok(bytes.length > 1024, "Arquivo de capa vazio: " + source);
        assert.equal(bytes.subarray(0, 8).toString("hex"), "89504e470d0a1a0a",
            "Arquivo de capa inválido (esperado PNG): " + source);
    }

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
        await assertNoLeakedEntries("interface inicial — " + dictionary);

        await page.waitForFunction(() => window.ScripturaLexiconSearch?.isReady,
            null, {timeout: 30000});
        await assertNoLeakedEntries("início sob demanda — " + dictionary);

        const unloaded = await page.evaluate(() => ({
            cards: document.querySelectorAll(".entry-card").length,
            rows: document.querySelectorAll(".search-row").length
        }));
        assert.equal(unloaded.rows, 0, "Não deve haver resultados antes da pesquisa");
        if (dictionary === "grego") {
            assert.equal(unloaded.cards, 0,
                "A primeira abertura da página não deve carregar artigos");
        }
        // Navegar entre #grego/#hebraico/#aramaico não recarrega o documento.
        // Cartões explicitamente abertos anteriormente podem permanecer no cache,
        // mas assertNoLeakedEntries garante que estejam invisíveis.
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
            const count = await page.evaluate(
                ({dictionary,source}) => window.ScripturaLexiconSearch.count(dictionary,source),
                {dictionary,source}
            );
            const shown = await page.locator("#source-details-entries").textContent();
            assert.equal(Number(shown.replace(/\D/g, "")), count,
                "Contagem bibliográfica deve corresponder ao corpus carregado");

            if (Object.hasOwn(localCovers, source)) {
                const expected = localCovers[source];
                await page.waitForFunction(path => {
                    const image = document.getElementById("source-cover-image");
                    return image && !image.hidden && image.complete &&
                        image.naturalWidth > 0 && image.naturalHeight > 0 &&
                        image.getAttribute("src") === path;
                }, expected, { timeout: 20000 });

                const fit = await page.locator("#source-cover-image").evaluate(
                    image => getComputedStyle(image).objectFit
                );
                assert.equal(fit, "contain", "Imagem não deve ser cortada: " + source);
                renderedCovers.add(source);
            }

            const sample = await page.evaluate(({dictionary,source}) =>
                window.ScripturaLexiconSearch.sample(dictionary,source),
                {dictionary,source}
            );

            assert.ok(sample, dictionary + "/" + source + ": nenhuma amostra pesquisável");
            await page.locator("#search-input").fill(sample.lemma);
            const row = page.locator('tr.search-row[data-target="' + sample.target + '"]');
            await row.waitFor({state:"visible",timeout:60000});
            assert.equal(await row.isVisible(), true, "Linha não visível após busca: " + source);

            await row.focus();
            await page.keyboard.press("Enter");
            await page.locator("#entry-navigation").waitFor({state:"visible",timeout:60000});
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
    report.push({ pngLocais: Object.keys(localCovers).length,
        exibidasNaInterface: [...renderedCovers].sort() });
    assert.equal(pageErrors.length, 0,
        "Exceções JavaScript: " + pageErrors.slice(0, 5).join("; "));
    process.stdout.write(JSON.stringify({status:"PASS",browser:"Chromium",report},null,2)+"\n");
} finally {
    await browser.close();
}
