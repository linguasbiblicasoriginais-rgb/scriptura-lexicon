"use strict";
/*
 * Scriptura Lexicon — índice remoto e artigos sob demanda.
 * A página abre sem baixar qualquer módulo de fonte ou artigo.
 */
(function () {
    const root = "lexicon-data/";
    const blocks = new Map(), gramFiles = new Map(), cardBlocks = new Map();
    const targetIds = new Map();
    const searchLimit = 250;
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
        if (!cache.has(key)) {
            const request = fetch(root + relative).then(response => {
                if (!response.ok) throw Error("Índice indisponível: " + relative + " (HTTP " + response.status + ")");
                return response.json();
            });
            cache.set(key, request);
        }
        return cache.get(key);
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
        return data[gram] || [];
    }
    async function search(query, dictionary, source) {
        await ready;
        if (!query) return {rows:[], truncated:false};
        const chars = Array.from(query);
        const grams = [];
        const width = Math.min(3, chars.length);
        for (let n = 0; n <= chars.length-width; n++) {
            grams.push(chars.slice(n,n+width).join(""));
        }
        const distinct = [...new Set(grams)];
        const sets = await Promise.all(distinct.map(posting));
        if (sets.some(x => !x.length)) return {rows:[], truncated:false};
        sets.sort((a,b)=>a.length-b.length);
        const other = sets.slice(1).map(values=>new Set(values));
        const ids = sets[0].filter(id=>other.every(group=>group.has(id)));
        const rows = [];
        let truncated = false;
        // Os arquivos de metadados são carregados só para candidatos. Para
        // consultas amplas, a visualização é limitada; o usuário pode refinar.
        for (const id of ids) {
            const record = await getMeta(id);
            if (!record || record.dictionary !== dictionary ||
                    (source && source !== record.source) ||
                    !record.search.includes(query)) continue;
            rows.push(record);
            if (rows.length >= searchLimit) {
                truncated = ids.length > rows.length;
                break;
            }
        }
        return {rows, truncated};
    }
    async function loadArticle(target) {
        await ready;
        let id = targetIds.get(target);
        if (id === undefined) throw Error("O artigo não está no índice: " + target);
        const chunk = Math.floor(id / catalog.chunkSize);
        const articles = await json("cards/" + pad(chunk,4) + ".json", cardBlocks, chunk);
        const data = articles[id % catalog.chunkSize];
        if (!data || data.target !== target) throw Error("Artigo não corresponde à pesquisa: " + target);
        let card = document.getElementById(target);
        if (card) return card;
        const fragment = document.createElement("template");
        fragment.innerHTML = data.html.trim();
        card = fragment.content.firstElementChild;
        if (!card || card.tagName !== "ARTICLE" || card.id !== target) throw Error("HTML de artigo inválido: " + target);
        card.hidden = true;
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
        return catalog?.counts?.[dictionary]?.[source] || 0;
    }
    function sample(dictionary, source) {
        return catalog?.samples?.[dictionary]?.[source] || null;
    }
    const ready = fetch(root + "catalog.json").then(async response => {
        if (!response.ok) throw Error("Catálogo indisponível (HTTP " + response.status + ")");
        catalog = await response.json();
        if (!catalog || !catalog.chunkSize || catalog.version !== 1) {
            throw Error("Catálogo incompatível");
        }
        const lexicons = window.ScripturaLexicons ||= {};
        for (const [name, terms] of Object.entries(catalog.sourceTerms || {})) {
            let slot = Object.values(lexicons).find(x=>x && x.source === name);
            if (!slot) {
                slot = {source:name, bibliographicTerms:terms};
                lexicons["SEARCH_" + name.replace(/[^A-Z0-9]/gi,"_")] = slot;
            } else {
                slot.bibliographicTerms = terms;
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
        ready, search, loadArticle, count, sample,
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