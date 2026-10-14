"use strict";
/* Interface utilizável antes da carga; módulos lexicográficos preservados. */
(function () {
    const groups = new Map();
    document.querySelectorAll("script[data-src]").forEach(node => {
        const path = node.dataset.src;
        const name = path.split("/").pop().replace(/\.js$/, "").split("-")[0];
        if (!groups.has(name)) groups.set(name, {paths: [], done: 0});
        groups.get(name).paths.push(path);
    });
    const priorities = {
        grego: ["bdag", "leh", "pereira", "thayer", "dgp"],
        hebraico: ["halot"],
        aramaico: ["jastrow"],
        latim: []
    };
    const status = document.getElementById("lexicon-load-status");
    const errors = [];
    let busy = false;
    const active = () => window.ScripturaGetActiveDictionary?.() || "grego";
    const loaded = dictionary => (priorities[dictionary] || []).every(name =>
        !groups.has(name) || groups.get(name).done === groups.get(name).paths.length);
    const paint = () => new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
    function update() {
        const names = priorities[active()] || [];
        const total = names.reduce((v, name) => v + (groups.get(name)?.paths.length || 0), 0);
        const done = names.reduce((v, name) => v + (groups.get(name)?.done || 0), 0);
        status.textContent = errors.length ? "Falha ao carregar " + errors.length + " módulos." :
            done < total ? "Carregando acervo: " + done + "/" + total : "";
    }
    function load(path) {
        return new Promise(resolve => {
            const el = document.createElement("script");
            el.async = false;  // execução em ordem, inclusive lotes dependentes
            el.src = path;
            el.onload = () => resolve(true);
            el.onerror = () => {errors.push(path); console.error("Módulo indisponível:", path); resolve(false);};
            document.body.appendChild(el);
        });
    }
    async function pump() {
        if (busy) return;
        busy = true;
        try {
            while (true) {
                const selected = (priorities[active()] || [])
                    .map(name => ({name, group: groups.get(name)}))
                    .find(x => x.group && x.group.done < x.group.paths.length);
                if (!selected) break;
                const {name, group} = selected;
                const end = Math.min(group.done + 4, group.paths.length);
                await Promise.all(group.paths.slice(group.done, end).map(load));
                group.done = end;
                // A recuperação histórica do DGP insere verbetes no MEIO do
                // HTML acumulado. Não é um append: cortar o texto pelo tamanho
                // anterior corromperia as tags e mostraria cartões fora da busca.
                // Só montar o DGP após o último módulo de recuperação; a partir
                // do primeiro dgp-batch-NNN.js, os lotes são acrescentados ao fim.
                const firstAppendOnly = name === "dgp"
                    ? group.paths.findIndex(path => /\/dgp-batch-[0-9]+\.js$/.test(path))
                    : -1;
                const dgpIsStable = name !== "dgp" ||
                    (firstAppendOnly >= 0 && group.done > firstAppendOnly);
                // THAYER só pode ser exibido após retirar o OCR inglês da
                // apresentação (os dados documentais continuam preservados).
                if (dgpIsStable && (name !== "thayer" ||
                        group.done === group.paths.length)) {
                    window.ScripturaIngestLexicons?.();
                }
                update();
                await paint();
            }
        } finally {
            busy = false;
            update();
            if (!loaded(active())) pump();
        }
    }
    window.ScripturaLexiconLoader = Object.freeze({
        isLoaded: loaded,
        getErrors: () => errors.slice(),
        progress: name => (priorities[name] || []).map(source => ({
            source,
            loaded: groups.get(source)?.done || 0,
            total: groups.get(source)?.paths.length || 0
        }))
    });
    document.addEventListener("scriptura:dictionary-changed", () => {
        update();
        if (!busy) pump();
    });
    update();
    requestAnimationFrame(() => setTimeout(pump, 0));
})();