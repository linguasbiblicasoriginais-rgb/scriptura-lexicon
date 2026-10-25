"use strict";
/*
 * Scriptura Lexicon — índice remoto e artigos sob demanda.
 * A página abre sem baixar qualquer módulo de fonte ou artigo.
 */
(function () {
    const root = "lexicon-data/";
    const blocks = new Map(), lookups = new Map(), largeLookups = new Map(), gramFiles = new Map(), cardBlocks = new Map();
    const targetIds = new Map();
    let catalog = null;
    let initialized = false;
    let failMessage = "";
    const searchInput = document.getElementById("search-input");
    const body = document.getElementById("search-results");
    const status = document.getElementById("lexicon-load-status");
    // O HTML histórico contém algumas linhas/cartões embutidos. Esses artigos
    // também estão no índice compilado e deixam o DOM até serem solicitados.
    document.querySelectorAll(".search-row, .entry-card").forEach(node=>node.remove());
    searchRows.length = 0;
    entryCards.length = 0;
    rowsByDictionary.clear();

    async function json(relative, cache, key) {
        if (cache.has(key)) {
            const cached = cache.get(key);
            cache.delete(key);
            cache.set(key, cached);
            return cached;
        }
        const request = fetch(root + relative).then(response => {
            if (!response.ok) throw Error("Índice indisponível: " + relative + " (HTTP " + response.status + ")");
            return response.json();
        }).catch(error => {
            cache.delete(key);
            throw error;
        });
        cache.set(key, request);
        const limit = cache === blocks ? 16 : cache === lookups ? 24 : cache === largeLookups ? 6 : cache === gramFiles ? 16 : 12;
        while (cache.size > limit) cache.delete(cache.keys().next().value);
        return request;
    }
    function hashGram(value) {
        let hash = 2166136261;
        for (const ch of value) {
            hash = Math.imul(hash ^ ch.codePointAt(0), 16777619);
        }
        return (hash >>> 0) % 256;
    }
    function pad(value, width) {
        return String(value).padStart(width, "0");
    }
    async function getMeta(id) {
        const part = Math.floor(id / catalog.chunkSize);
        const data = await json("meta/" + pad(part,4) + ".json", blocks, part);
        return data[id % catalog.chunkSize];
    }
    async function posting(gram) {
        const part = hashGram(gram);
        const data = await json("grams/" + pad(part,3) + ".json", gramFiles, part);
        return {ids:data[gram] || [], lemmaRank:data.__lemmaRank?.[gram] || [[],[],[]]};
    }
    // Os registros auxiliares são preservados no índice, mas não publicados como tradução.
    function isAuxiliaryOnly(source) {
        return Boolean(source &&
            window.ScripturaSourceCatalog?.[source]?.publicationStatus === "source-only");
    }
    // Localização binária do dicionário e da fonte, sem baixar metadados.
    function inSelectedSource(id, dictionary, source) {
        const runs = catalog.runs;
        if (!runs?.length) return true;
        let left = 0, right = runs.length - 1;
        while (left <= right) {
            const middle = (left + right) >> 1, run = runs[middle];
            if (id < run.start) right = middle - 1;
            else if (id >= run.end) left = middle + 1;
            else return run.dictionary === dictionary && !isAuxiliaryOnly(run.source) &&
                    (!source || run.source === source);
        }
        return false;
    }
    // A contagem e a ordenação usam SOMENTE o índice de busca (lookup),
    // sem transferir HTML de resultados ou de artigos ao navegador.
    async function search(query, dictionary, source) {
        await ready;
        if (!query || isAuxiliaryOnly(source) ||
            (source && !(catalog.counts?.[dictionary]?.[source] > 0))) {
            return {ids:[], total:0};
        }
        const terms = query.split(/[\s,;]+/u).filter(Boolean);
        if (!terms.length) return {ids:[], total:0};
        const grams = new Set();
        for (const term of terms) {
            const chars = Array.from(term), width = Math.min(3, chars.length);
            for (let n = 0; n <= chars.length - width; n++) {
                grams.add(chars.slice(n, n + width).join(""));
            }
        }
        const found = await Promise.all([...grams].map(posting));
        if (found.some(result => !result.ids.length)) return {ids:[], total:0};
        const sets = found.map(result => result.ids);
        sets.sort((a,b) => a.length - b.length);
        const other = sets.slice(1).map(list => new Set(list));
        const candidateIds = sets[0].filter(id => inSelectedSource(id, dictionary, source) &&
            other.every(list => list.has(id)));
        if (!candidateIds.length) return {ids:[], total:0};

        // Gram de 1, 2 ou 3 caracteres corresponde EXATAMENTE a uma
        // substring. Não existe falso positivo a verificar no texto completo.
        // Essa via cobre lemas curtos e consultas amplas em todos os idiomas.
        if (terms.every(term => Array.from(term).length <= 3)) {
            const gramNames = [...grams];
            const ranks = new Map(gramNames.map((gram,i)=>[gram,found[i].lemmaRank]));
            const lemmaIncludes = terms.map(term => new Set(ranks.get(term)?.[0] || []));
            const oneTerm = terms.length === 1 ? ranks.get(terms[0]) : null;
            const exact = new Set(oneTerm?.[2] || []);
            const prefix = new Set(oneTerm?.[1] || []);
            const ranked = [[],[],[],[],[]];
            for (const id of candidateIds) {
                const rank = exact.has(id) ? 0 : prefix.has(id) ? 1 :
                    lemmaIncludes.every(set => set.has(id)) ? 2 :
                    lemmaIncludes.some(set => set.has(id)) ? 3 : 4;
                ranked[rank].push(id);
            }
            const ids = ranked.flat();
            return {ids,total:ids.length};
        }

        // Para termos longos, o cruzamento de gramas ainda pode conter
        // falsos positivos. Validar o texto normalizado, sem ler nenhum
        // cartão e sem transportar as linhas HTML das outras páginas.
        const smallParts = new Set(candidateIds.map(id => Math.floor(id / catalog.chunkSize)));
        // Consultas genéricas deixavam o DGP abrir centenas de arquivos.
        // Acima do limiar, usar blocos compactados grandes (~2 mil chaves).
        const useLarge = smallParts.size > 32;
        const size = useLarge ? catalog.lookupLargeSize : catalog.chunkSize;
        const groups = new Map();
        for (const id of candidateIds) {
            const part = Math.floor(id / size);
            if (!groups.has(part)) groups.set(part, []);
            groups.get(part).push(id);
        }
        const ranked = [];
        const chunks = [...groups];
        const concurrency = useLarge ? 4 : 6;
        for (let i=0;i<chunks.length;i+=concurrency) {
            const batches = await Promise.all(chunks.slice(i,i+concurrency).map(async ([part,ids]) => {
                const name = (useLarge ? "lookup-large/" : "lookup/") + pad(part,4) + ".json";
                const data = await json(name,useLarge ? largeLookups : lookups,part);
                const valid = [];
                for (const id of ids) {
                    const pair = data[id % size];
                    if (!pair || !terms.every(term => pair[0].includes(term))) continue;
                    const lemma = pair[1];
                    const rank = lemma === query ? 0 : lemma.startsWith(query) ? 1 :
                        terms.every(term => lemma.includes(term)) ? 2 :
                        terms.some(term => lemma.includes(term)) ? 3 : 4;
                    valid.push([id,rank]);
                }
                return valid;
            }));
            for (const batch of batches) ranked.push(...batch);
        }
        ranked.sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
        const ids=ranked.map(item=>item[0]);
        return {ids,total:ids.length};
    }
    // Cada troca de página transfere apenas 10 linhas do índice de metadados.
    // Cartões integrais continuam sendo baixados somente quando selecionados.
    async function page(results, pageNumber, perPage = 10) {
        await ready;
        if (!Number.isSafeInteger(pageNumber) || pageNumber < 1 ||
                !Number.isSafeInteger(perPage) || perPage < 1 || perPage > 10) {
            throw Error("Página de resultados inválida");
        }
        const offset = (pageNumber - 1) * perPage;
        const ids = results.ids.slice(offset, offset + perPage);
        return Promise.all(ids.map(async id => {
            const row = await getMeta(id);
            if (!row || row.id !== id) throw Error("Linha não corresponde ao índice: " + id);
            return row;
        }));
    }
    async function loadArticle(recordId) {
        await ready;
        let id = Number(recordId);
        if (!Number.isSafeInteger(id) || id < 0) id = targetIds.get(recordId);
        if (!Number.isSafeInteger(id) || id < 0) {
            throw Error("Resultado não encontrado no índice: " + recordId);
        }
        const chunk = Math.floor(id / catalog.chunkSize);
        const articles = await json("cards/" + pad(chunk,4) + ".json", cardBlocks, chunk);
        const data = articles[id % catalog.chunkSize];
        if (!data || data.id !== id) throw Error("Artigo não corresponde ao índice: " + recordId);
        let card = document.getElementById(data.target);
        if (card && card.dataset.scripturaIndexId === String(id)) return card;
        // IDs repetidos na fonte permanecem originais. Quando outra ocorrência
        // é aberta, a anterior sai do DOM para não duplicar identificadores.
        if (card) card.remove();
        const fragment = document.createElement("template");
        fragment.innerHTML = data.html.trim();
        card = fragment.content.firstElementChild;
        if (!card || card.tagName !== "ARTICLE" || card.id !== data.target) {
            throw Error("HTML de artigo inválido: " + data.target);
        }
        card.hidden = true;
        card.dataset.scripturaIndexId = String(id);
        const insertion = document.getElementById(
            data.html.includes('data-dictionary="hebraico"') ? "halot-entry-anchor" :
            data.html.includes('data-dictionary="aramaico"') ? "jastrow-entry-anchor" :
            "dgp-entry-anchor"
        );
        if (!insertion) throw Error("Âncora do dicionário não encontrada");
        insertion.before(card);
        return card;
    }
    function count(dictionary, source) {
        if (isAuxiliaryOnly(source)) return 0;
        return catalog?.counts?.[dictionary]?.[source] || 0;
    }
    function sample(dictionary, source) {
        if (isAuxiliaryOnly(source)) return null;
        return catalog?.samples?.[dictionary]?.[source] || null;
    }
    const ready = fetch(root + "catalog.json").then(async response => {
        if (!response.ok) throw Error("Catálogo indisponível (HTTP " + response.status + ")");
        catalog = await response.json();
        if (!catalog || !catalog.chunkSize || catalog.version !== 4) {
            throw Error("Catálogo incompatível");
        }
        const lexicons = window.ScripturaLexicons ||= {};
        for (const [name, terms] of Object.entries(catalog.sourceTerms || {})) {
            const effectiveTerms = name === "DGP" &&
                !terms.some(item => item.key === "ac. pl. n.")
                ? [...terms, {key:"ac. pl. n.", type:"abbr", text:"acusativo plural neutro"}]
                : terms;
            let slot = Object.values(lexicons).find(x=>x && x.source === name);
            if (!slot) {
                slot = {source:name, bibliographicTerms:effectiveTerms};
                lexicons["SEARCH_" + name.replace(/[^A-Z0-9]/gi,"_")] = slot;
            } else {
                slot.bibliographicTerms = effectiveTerms;
            }
            if (!externalLexiconSources.includes(slot)) externalLexiconSources.push(slot);
        }
        window.ScripturaRefreshSources?.();
        initialized = true;
        status.textContent = "";
        if (searchInput.value.trim()) window.ScripturaRunSearch?.();
        return catalog;
    }).catch(error => {
        failMessage = error.message;
        status.textContent = "Não foi possível abrir o índice de pesquisa.";
        console.error("Scriptura Lexicon:", error);
        throw error;
    });
    // A promessa não aguardada deve ter observador para evitar rejection global.
    ready.catch(() => {});
    window.ScripturaLexiconSearch = Object.freeze({
        ready, search, page, loadArticle, count, sample,
        get isReady() {return initialized;},
        get error() {return failMessage;},
        get catalog() {return catalog;},
        track(results) {
            targetIds.clear();
            results.forEach(x=>targetIds.set(x.target,x.id));
        },
        reset() {targetIds.clear();}
    });
    status.textContent = "Preparando índice de pesquisa...";
})();