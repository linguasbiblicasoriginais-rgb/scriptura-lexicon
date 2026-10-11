"use strict";

/*
 * DGP — apresentação editorial independente da fonte lexicográfica.
 *
 * Executado depois da inserção dos cartões e da criação dos popups.
 * Preserva o texto das definições em dgp.js/dgp-batches.js, fazendo apenas
 * transformações de apresentação no DOM: numeração, versalete e citações.
 *
 * O rearranjo é conservador: só move a atribuição quando há, imediatamente
 * antes dela, um segmento grego contínuo e, depois, uma tradução portuguesa.
 * Referências isoladas, etimologias e sequências ambíguas ficam intocadas.
 */
(function () {
    const source = window.ScripturaLexicons && window.ScripturaLexicons.DGP;

    if (!source) {
        return;
    }

    function hasGreek(value) {
        return /\p{Script=Greek}/u.test(value);
    }

    function greekSuffix(value) {
        const tokens = Array.from(value.matchAll(/\S+/gu));
        let first = tokens.length;
        let count = 0;

        for (let index = tokens.length - 1; index >= 0; index -= 1) {
            const token = tokens[index][0];

            if (
                hasGreek(token) &&
                !/\p{Script=Latin}/u.test(token)
            ) {
                first = index;
                count += 1;
            } else {
                break;
            }
        }

        if (!count) {
            return null;
        }

        const start = tokens[first].index;
        const quotation = value.slice(start).trim();

        if (!quotation || !hasGreek(quotation)) {
            return null;
        }

        return { start: start, quotation: quotation };
    }

    function translationEnd(value) {
        const boundaries = [
            /,\s*(?=\p{Script=Greek})/u,
            /;\s*(?=\p{Script=Greek})/u,
            /\s+(?=[1-9]\d?\s+\p{L})/u,
            /\s*♦/u,
            /\s*〈/u
        ];

        let end = value.length;

        boundaries.forEach(function (pattern) {
            const match = pattern.exec(value);

            if (match && match.index < end) {
                end = match.index;
            }
        });

        return end;
    }

    function rearrangeExamples(root, audit) {
        const citations = Array.from(
            root.querySelectorAll('[data-tooltip-type="biblio"]')
        );

        citations.forEach(function (author) {
            author.classList.add("dgp-citation-source");
            audit.sources += 1;

            if (author.closest(".dgp-example")) {
                return;
            }

            const previous = author.previousSibling;
            const next = author.nextSibling;

            if (
                !previous || previous.nodeType !== 3 ||
                !next || next.nodeType !== 3
            ) {
                return;
            }

            const greek = greekSuffix(previous.nodeValue);

            if (!greek) {
                return;
            }

            const following = next.nodeValue;

            if (
                !/^\s*(?:\[[^\]]{1,40}\]\s*)?\p{Script=Latin}/u.test(
                    following
                )
            ) {
                audit.ambiguous += 1;
                return;
            }

            const end = translationEnd(following);
            const translation = following.slice(0, end).trim();

            if (!translation) {
                audit.ambiguous += 1;
                return;
            }

            const wrapper = document.createElement("span");
            wrapper.className = "dgp-example";

            const content = document.createElement("span");
            content.className = "dgp-example-content";

            const original = document.createElement("span");
            original.className = "dgp-example-greek";
            original.lang = "grc";
            original.textContent = greek.quotation;

            const meaning = document.createElement("span");
            meaning.className = "dgp-example-meaning";
            meaning.lang = "pt-BR";
            meaning.textContent = translation;

            previous.nodeValue = previous.nodeValue.slice(0, greek.start);
            next.nodeValue = following.slice(end);

            const position = document.createTextNode("");
            author.parentNode.insertBefore(position, author);

            content.appendChild(original);
            content.appendChild(meaning);

            wrapper.appendChild(author);
            wrapper.appendChild(document.createTextNode(" "));
            wrapper.appendChild(content);
            position.replaceWith(wrapper);

            audit.examples += 1;
        });
    }

    function emphasizeSenses(root, audit) {
        const walker = document.createTreeWalker(
            root,
            NodeFilter.SHOW_TEXT
        );
        const textNodes = [];
        let current;

        while ((current = walker.nextNode())) {
            if (
                current.parentElement &&
                !current.parentElement.closest(
                    ".dgp-example, .tooltip-trigger, .dgp-sense-number"
                )
            ) {
                textNodes.push(current);
            }
        }

        let previousSense = 0;

        textNodes.forEach(function (node) {
            const value = node.nodeValue;
            const pattern = /(^|[\s♦])([1-9]\d?)(?=\s)/gu;
            const fragment = document.createDocumentFragment();
            let previousIndex = 0;
            let changed = false;
            let match;

            while ((match = pattern.exec(value)) !== null) {
                const number = Number(match[2]);

                /*
                 * A sequência evita destacar números cardinais usados
                 * dentro de exemplos (como "1 ou 1º"). Não renumera nem
                 * corrige saltos ou repetições que existam na fonte.
                 */
                if (
                    (previousSense === 0 && number !== 1) ||
                    (previousSense !== 0 &&
                        (number < previousSense ||
                            number > previousSense + 2))
                ) {
                    continue;
                }

                const numberStart =
                    match.index + match[1].length;

                fragment.appendChild(document.createTextNode(
                    value.slice(previousIndex, numberStart)
                ));

                const label = document.createElement("span");
                label.className = "dgp-sense-number";
                label.textContent = match[2];
                fragment.appendChild(label);

                previousIndex = numberStart + match[2].length;
                previousSense = number;
                changed = true;
                audit.senses += 1;
            }

            if (changed) {
                fragment.appendChild(document.createTextNode(
                    value.slice(previousIndex)
                ));
                node.replaceWith(fragment);
            }
        });
    }

    source.formatCards = function () {
        const roots = document.querySelectorAll(
            '.entry-card[data-source="DGP"] .entry-text'
        );
        const audit = {
            cards: 0,
            senses: 0,
            sources: 0,
            examples: 0,
            ambiguous: 0
        };

        roots.forEach(function (root) {
            if (root.dataset.dgpFormatted === "true") {
                return;
            }

            rearrangeExamples(root, audit);
            emphasizeSenses(root, audit);
            root.dataset.dgpFormatted = "true";
            audit.cards += 1;
        });

        /*
         * Correção de apresentação (não altera o XML canônico):
         * no ordinal 1627, o original traz fut.ἀλείψω sem espaço.
         * A abreviatura já foi identificada por enrichBibliographicTooltips.
         */
        /*
         * Colações verificadas no XML fixado: cinco encontros exatos
         * abreviatura+grego sem espaço. O reconhecedor geral evita
         * envolver abreviaturas diante de uma letra; aqui temos a
         * testemunha concreta e tratamos somente essas cinco grafias.
         */
        const gluedAbbreviations = [
            { n: 1114, label: "aor.", form: "ἤϊξα", meaning: "aoristo" },
            { n: 1627, label: "fut.", form: "ἀλείψω", meaning: "futuro (tempo verbal)" },
            { n: 1683, label: "aor.", form: "ἠλήθευσα", meaning: "aoristo" },
            { n: 2278, label: "aor.", form: "ἠμύστισα", meaning: "aoristo" },
            { n: 2289, label: "méd.", form: "ἀμφαφάομαι-ῶμαι", meaning: "voz média" }
        ];
        audit.gluedAbbreviationsFixed = [];
        gluedAbbreviations.forEach(function (item) {
            const card = document.getElementById(
                "entry-dgp-" + String(item.n).padStart(4, "0")
            );
            if (!card || card.dataset.dgpSpacingFixed === "true") {
                return;
            }
            const root = card.querySelector(".entry-section .entry-text");
            if (!root) {
                return;
            }
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            let node;
            while ((node = walker.nextNode())) {
                if (!node.parentElement ||
                        node.parentElement.closest(".tooltip-trigger")) {
                    continue;
                }
                const value = node.nodeValue || "";
                const needle = item.label + item.form;
                const pos = value.indexOf(needle);
                if (pos === -1) {
                    continue;
                }
                const fragment = document.createDocumentFragment();
                fragment.appendChild(document.createTextNode(value.slice(0, pos)));
                const popup = document.createElement("span");
                popup.className = "abbr-help tooltip-trigger";
                popup.tabIndex = 0;
                popup.dataset.tooltipType = "abbr";
                popup.dataset.tooltipLabel = item.label;
                popup.dataset.tooltipText = item.meaning;
                popup.textContent = item.label;
                fragment.appendChild(popup);
                fragment.appendChild(document.createTextNode(
                    " " + item.form + value.slice(pos + needle.length)
                ));
                node.replaceWith(fragment);
                card.dataset.dgpSpacingFixed = "true";
                audit.gluedAbbreviationsFixed.push(item.n);
                break;
            }
        });
        audit.futureSpacingFixed =
            audit.gluedAbbreviationsFixed.includes(1627);
        audit.futureTooltipCreated = audit.futureSpacingFixed;

        /*
         * Proveniência: nos ordinais 2311 e 2483 o XML inicia diretamente
         * com <def>; o lema exibido foi inferido da própria definição.
         * Registrar isso numa seção distinta, sem alterar a definição DGP.
         */
        audit.recoveredHeadwordsNoted = 0;
        ["entry-dgp-2311", "entry-dgp-2483"].forEach(function (id) {
            const card = document.getElementById(id);
            if (!card || card.dataset.dgpSourceHeadwordNote === "true") {
                return;
            }
            const section = document.createElement("section");
            section.className = "entry-section dgp-editorial-note";
            section.setAttribute("data-editorial-layer", "GDHAGP");
            const heading = document.createElement("div");
            heading.className = "section-title";
            heading.textContent = "Nota editorial do Scriptura Lexicon";
            const paragraph = document.createElement("p");
            paragraph.className = "entry-text";
            paragraph.textContent =
                "O XML do DGP não apresenta lema antes de <def> neste registro. " +
                "O cabeçalho exibido foi recuperado do início da própria definição, " +
                "não transcrito de um campo de lema da fonte.";
            section.appendChild(heading);
            section.appendChild(paragraph);
            card.appendChild(section);
            card.dataset.dgpSourceHeadwordNote = "true";
            audit.recoveredHeadwordsNoted++;
        });

        /*
         * Os primeiros módulos indexavam somente lema + glosa abreviada.
         * Completar cada índice com a definição efetivamente publicada,
         * após montagem dos cartões. Não adicionar HTML nem alterar a fonte.
         * A consulta em script.js usa data-search, portanto a ampliação
         * atende toda pesquisa DGP sem afetar os demais dicionários.
         */
        /*
         * Numeração estranha mas autêntica: advertência fora da camada
         * Fonte. Não renumerar o testemunho do DGP.
         */
        audit.sourceNumberingNotes = 0;
        ["entry-dgp-0434", "entry-dgp-0543"].forEach(function (id) {
            const card = document.getElementById(id);
            if (!card || card.dataset.dgpNumberingNoted === "true") {
                return;
            }
            const section = document.createElement("section");
            section.className = "entry-section dgp-editorial-note";
            section.dataset.editorialLayer = "GDHAGP";
            const heading = document.createElement("div");
            heading.className = "section-title";
            heading.textContent = "Nota editorial do Scriptura Lexicon";
            const paragraph = document.createElement("p");
            paragraph.className = "entry-text";
            paragraph.textContent =
                "A numeração de acepções da fonte original repete o número 3. " +
                "A leitura foi preservada deliberadamente, sem emenda conjectural.";
            section.appendChild(heading);
            section.appendChild(paragraph);
            card.appendChild(section);
            card.dataset.dgpNumberingNoted = "true";
            audit.sourceNumberingNotes++;
        });

        /*
         * Aparato documental direcionado: nunca substituir o testemunho
         * original por conjectura; separar ressalvas editoriais do DGP.
         */
        audit.sourceCautionsAdded = 0;
        [
            [1, "O marcador final [hebr.] figura literalmente no XML, mas o registro não explica seu escopo. Sua presença não estabelece origem hebraica da letra ou empréstimo lexical."],
            [86, "O DGP relaciona etimologicamente ἀγαθός a ἄγαμαι. Esta indicação é hipótese da fonte, não etimologia demonstrada: LSJ assinala dúvida e o IE-CoR, com referência a Chantraine e Beekes, registra origem incerta."],
            [288, "O texto original do DGP numera duas acepções consecutivas com 4, incluindo o plural «suspeitas infundadas; mal-entendidos». A numeração é mantida sem emenda."],
            [303, "A grafia «resgastados» encontra-se no XML do DGP. A leitura é conservada na definição como testemunho; uma normalização para «resgatados» requer decisão de edição, não correção silenciosa da fonte."],
            [335, "A grafia «passáro» encontra-se no XML do DGP. O dado editorial é assinalado aqui, sem substituí-lo silenciosamente por «pássaro» na definição."]
        ].forEach(function (item) {
            const card = document.getElementById(
                "entry-dgp-" + String(item[0]).padStart(4, "0")
            );
            if (!card || card.dataset.dgpDocumentaryCaution === "true") {
                return;
            }
            const section = document.createElement("section");
            section.className = "entry-section dgp-editorial-note";
            section.dataset.editorialLayer = "GDHAGP";
            const heading = document.createElement("div");
            heading.className = "section-title";
            heading.textContent = "Nota documental do Scriptura Lexicon";
            const paragraph = document.createElement("p");
            paragraph.className = "entry-text";
            paragraph.textContent = item[1];
            section.appendChild(heading);
            section.appendChild(paragraph);
            card.appendChild(section);
            card.dataset.dgpDocumentaryCaution = "true";
            audit.sourceCautionsAdded++;
        });

        audit.searchRowsIndexed = 0;
        audit.searchRowsMissingCard = 0;
        document.querySelectorAll(
            '.search-row[data-source="DGP"][data-target]'
        ).forEach(function (row) {
            if (row.dataset.dgpFullTextIndexed === "true") {
                return;
            }
            const card = document.getElementById(row.dataset.target);
            const text = card && card.dataset.source === "DGP" &&
                card.querySelector(".entry-section .entry-text");
            if (!text) {
                audit.searchRowsMissingCard++;
                return;
            }
            const sourceText = (text.textContent || "").trim();
            if (sourceText) {
                row.dataset.search =
                    ((row.dataset.search || "") + " " + sourceText).trim();
                row.dataset.dgpFullTextIndexed = "true";
                audit.searchRowsIndexed++;
            }
        });

        source.presentationAudit = audit;
        return audit;
    };
})();
