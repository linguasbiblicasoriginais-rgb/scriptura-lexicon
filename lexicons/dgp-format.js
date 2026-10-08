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

        source.presentationAudit = audit;
        return audit;
    };
})();
