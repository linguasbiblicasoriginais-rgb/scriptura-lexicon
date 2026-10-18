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
        const group = { dictionary, sources: sources.length, tested: 0, pending: 0 };
        if (dictionary === "grego") {
            assert.ok(sources.includes("LSJ"), "LSJ precisa aparecer no seletor grego");
            assert.equal(await page.locator('#source-filter option[value="LSJ"]').textContent(),
                "LSJ · em preparação");
        } else {
            assert.equal(sources.includes("LSJ"), false,
                "LSJ não pertence a um dicionário diferente do grego");
        }

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

            if (source === "LSJ") {
                assert.equal(count, 0, "LSJ ainda não tem cartões publicados");
                assert.match(await page.locator("#source-details-note").textContent(),
                    /camada FONTE|Fonte em preparação/i);
                assert.equal(await page.locator("#search-count").textContent(),
                    "Fonte em preparação");
                assert.match(await page.locator("#no-results").textContent(),
                    /nenhum verbete traduzido/i);
                await page.locator("#search-input").fill("ἀγαθός");
                await page.waitForFunction(() =>
                    document.getElementById("no-results")?.textContent?.includes("LSJ") &&
                    !document.getElementById("no-results").hidden);
                assert.equal(await page.locator("#search-results .search-row").count(), 0);
                group.pending++;
                continue;
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
            await page.locator("#no-results").waitFor({state:"visible", timeout:30000});
            assert.equal(await page.locator("#search-table-wrapper").isVisible(), true,
                "Mesmo um dicionário vazio deve exibir aviso da busca");
            assert.equal(await page.locator("#no-results").isVisible(), true,
                "Dicionário sem corpus deve exibir aviso");
        }
        report.push(group);
    }

    // Consulta no significado: o lema hebraico é encontrado por "prata".
    await page.goto(url + "#hebraico", {waitUntil:"domcontentloaded",timeout:180000});
    await page.waitForFunction(() => window.ScripturaLexiconSearch?.isReady);
    await page.locator("#search-input").fill("prata moeda metal branco");
    await page.locator('tr.search-row[data-target="entry-kesef-halot"]')
        .waitFor({state:"visible",timeout:60000});

    // Cenário controlado: vinte e três resultados devem renderizar 10/10/3.
    await page.evaluate(() => {
        const actual = window.ScripturaLexiconSearch;
        window.__scripturaRealSearch = actual;
        const fixtures = Array.from({length:23}, (_, id) => ({
            id: 100000 + id, target: "test-page-" + id, dictionary:"hebraico",
            source:"HALOT", search:"paginacao", lemma:"test",
            row: '<tr class="search-row" data-dictionary="hebraico" ' +
                'data-target="test-page-' + id + '" data-source="HALOT" tabindex="0">' +
                '<td class="table-lemma">Teste ' + id + '</td><td>Substantivo</td>' +
                '<td>significado</td><td><span class="source-pill">HALOT</span></td></tr>'
        }));
        window.__scripturaPageLoads = [];
        window.ScripturaLexiconSearch = Object.freeze({...actual,
            search: async () => ({ids:fixtures.map(item => item.id),total:fixtures.length}),
            page: async (results,number,perPage) => {
                const ids = results.ids.slice((number-1)*perPage,number*perPage);
                window.__scripturaPageLoads.push({number,perPage,requested:ids.length});
                return ids.map(id => fixtures[id-100000]);
            }});

    });
    await page.locator("#search-input").fill("paginacao");
    await page.waitForFunction(() =>
        document.querySelectorAll("#search-results .search-row").length === 10 &&
        document.querySelector("#search-pagination")?.hidden === false);
    assert.equal(await page.locator("#search-count").textContent(), "23 verbetes");
    assert.deepEqual(await page.evaluate(() => window.__scripturaPageLoads),
        [{number:1,perPage:10,requested:10}],
        "Primeira página deve solicitar somente dez linhas");
    await page.locator('#search-pagination button[aria-label="Página 2"]').click();
    assert.equal(await page.locator("#search-results .search-row").count(), 10);
    assert.equal(await page.locator("#search-results .search-row").first().getAttribute("data-target"),
        "test-page-10");
    await page.locator('#search-pagination button[aria-label="Página 3"]').click();
    assert.equal(await page.locator("#search-results .search-row").count(), 3);
    assert.equal(await page.locator("#search-results .search-row").first().getAttribute("data-target"),
        "test-page-20");
    await page.locator('#search-pagination button').filter({hasText:"Anterior"}).click();
    assert.equal(await page.locator("#search-results .search-row").count(), 10);
    assert.equal(await page.locator("#search-pagination [aria-current='page']").textContent(), "2");
    assert.equal(await page.locator("#search-count").textContent(), "23 verbetes",
        "O total deve permanecer visível em todas as páginas");
    assert.deepEqual(await page.evaluate(() => window.__scripturaPageLoads),
        [{number:1,perPage:10,requested:10}, {number:2,perPage:10,requested:10},
         {number:3,perPage:10,requested:3}, {number:2,perPage:10,requested:10}],
        "A navegação não deve requisitar as demais linhas");
    await page.evaluate(() => {
        window.ScripturaLexiconSearch = window.__scripturaRealSearch;
        delete window.__scripturaRealSearch;
        delete window.__scripturaPageLoads;
    });
    await page.locator("#search-input").fill("prata moeda metal branco");
    await page.locator('tr.search-row[data-target="entry-kesef-halot"]')
        .waitFor({state:"visible",timeout:60000});
    assert.equal(await page.locator("#search-results .search-row").count() <= 10, true);
    const glossLengths = await page.locator("#search-results td:nth-child(3)")
        .evaluateAll(nodes => nodes.map(node => node.textContent.length));
    assert.ok(glossLengths.every(n => n <= 125),
        "Os resumos da tabela não podem conter definições extensas");

    // IDs legados colidentes: ambas as ocorrências são recuperáveis
    // individualmente, preservando o ID original do verbete.
    const aliases = await page.evaluate(() =>
        window.ScripturaLexiconSearch.catalog.duplicateSamples || []);
    // A inexistência de duplicações não é falha; verificar o teste só
    // quando há colisões genuínas detectadas pelo compilador.
    if (aliases.length > 0) {
        const pair = aliases[0];
        const readAlias = async id => page.evaluate(async recordId => {
            const card = await window.ScripturaLexiconSearch.loadArticle(recordId);
            return {id:card.id, internal:card.dataset.scripturaIndexId,
                html:card.innerHTML};
        }, id);
        const first = await readAlias(pair.ids[0]);
        const second = await readAlias(pair.ids[1]);
        assert.equal(first.id, pair.target);
        assert.equal(second.id, pair.target);
        assert.notEqual(first.internal, second.internal,
            "As ocorrências originais não podem ser fundidas no índice");
        assert.notEqual(first.html, second.html,
            "Artigos distintos com o mesmo ID original não podem ser confundidos");

    } else {
        report.push({idLegadoColidente: 0, estado: "sem amostras reais"});
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
