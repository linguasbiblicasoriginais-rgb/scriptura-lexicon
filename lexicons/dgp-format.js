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

    /* Fonte DGP: abreviatura composta atestada em ἀδεᾶ (#466).
       Evita dividir “acusativo plural neutro” em duas janelas isoladas. */
    if (!source.bibliographicTerms.some(function (item) {
        return item.key === "ac. pl. n.";
    })) {
        source.bibliographicTerms.push({
            key: "ac. pl. n.",
            type: "abbr",
            text: "acusativo plural neutro"
        });
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


    /* Auditoria DGP 1–1000. Somente apresentação; preservar a fonte. */
    function dgpTransliterateGreek(input) {
        const alphabet = {
            "α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z",
            "η":"ē","θ":"th","ι":"i","κ":"k","λ":"l","μ":"m",
            "ν":"n","ξ":"x","ο":"o","π":"p","ρ":"r","σ":"s",
            "ς":"s","τ":"t","υ":"y","φ":"ph","χ":"kh","ψ":"ps",
            "ω":"ō","ϝ":"w"
        };
        return (input || "").normalize("NFD").replace(
            /[\u0391-\u03A9\u03B1-\u03C9\u03C2\u03DD][\u0300-\u036F]*/gu,
            function (part) {
                const base = part[0], lower = base.toLowerCase();
                let result = alphabet[lower];
                if (!result) { return part; }
                if (base !== lower) {
                    result = result[0].toUpperCase() + result.slice(1);
                }
                const signs = part.slice(1);
                if (signs.includes("\u0314")) { result = "h" + result; }
                if (signs.includes("\u0345")) { result += "i"; }
                if (signs.includes("\u0301")) { result += "\u0301"; }
                else if (signs.includes("\u0300")) { result += "\u0300"; }
                else if (signs.includes("\u0342")) { result += "\u0302"; }
                if (signs.includes("\u0308")) { result += "\u0308"; }
                return result;
            }
        ).normalize("NFC");
    }

    /* Referências verificadas externamente, NÃO deduzidas da sigla. */
    const dgpVerifiedWorks = {
        14: { greek: "ἀάσατο μέγα θυμῷ",
              author: "Homero", work: "Ilíada 9.537" },
        17: { greek: "ἐν παντὶ ἀβαρῆ ἐμαυτὸν ὑμῖν ἐτήρησα καὶ τηρήσω",
              author: "Novo Testamento",
              work: "Segunda Epístola aos Coríntios 11.9" },
        60: { greek: "μή πως ἀβροτάξομεν ἀλλήλοιιν ἐρχομένω",
              author: "Homero", work: "Ilíada 10.65–66" },
        78: { greek: "τὰ θεῶν μηδὲν ἀγάζειν",
              author: "Ésquilo", work: "Suplicantes 1061" }
    };

    function decorateDgpCitationExamples(root, audit) {
        const card = root.closest(".entry-card[data-source='DGP']");
        const id = card ? Number(
            (card.id.match(/^entry-dgp-0*(\d+)$/) || [])[1]
        ) : 0;
        if (id < 1 || id > 1000) { return; }

        root.querySelectorAll(".dgp-example").forEach(function (example) {
            const author = example.querySelector(".dgp-citation-source");
            const greek = example.querySelector(".dgp-example-greek");
            if (!author || !greek) { return; }

            if (greek.dataset.dgpTransliterated !== "true") {
                const original = greek.textContent.trim();
                const roman = dgpTransliterateGreek(original);
                if (original && roman) {
                    greek.classList.add("tooltip-trigger", "dgp-greek-quotation");
                    greek.tabIndex = 0;
                    greek.dataset.tooltipType = "greek";
                    greek.dataset.tooltipLabel = original;
                    greek.dataset.transliteration = roman;
                    greek.dataset.dgpTransliterated = "true";
                    greek.setAttribute("aria-label",
                        "Citação em grego: consultar transliteração");
                    audit.greekPopups += 1;
                }
            }

            if (author.dataset.dgpCitationReviewed === "true") { return; }
            author.dataset.dgpCitationReviewed = "true";
            const locus = dgpVerifiedWorks[id];
            const name = author.dataset.tooltipLabel ||
                author.textContent.trim();
            if (locus && name === locus.author &&
                greek.textContent.normalize("NFC").includes(
                    locus.greek.normalize("NFC"))) {
                const work = document.createElement("span");
                work.className = "dgp-citation-work";
                work.dataset.editorialLayer = "GDHAGP";
                work.textContent = " — " + locus.work;
                author.appendChild(work);
                audit.verifiedWorks += 1;
            } else {
                author.dataset.dgpWorkStatus = "nao-identificada";
                author.title = "O DGP não identifica a obra nesta abonação. " +
                    "É necessário cotejar o autor e o texto antigo.";
                audit.unspecifiedWorks += 1;
            }
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
            ambiguous: 0,
            greekPopups: 0,
            verifiedWorks: 0,
            unspecifiedWorks: 0
        };

        roots.forEach(function (root) {
            if (root.dataset.dgpFormatted === "true") {
                return;
            }

            rearrangeExamples(root, audit);
            decorateDgpCitationExamples(root, audit);
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
            [335, "A grafia «passáro» encontra-se no XML do DGP. O dado editorial é assinalado aqui, sem substituí-lo silenciosamente por «pássaro» na definição."],
            [822, "O DGP cita ὦτα ἄτρυπτα κολακείᾳ. Em Plutarco, De recta ratione audiendi 2 (ed. G. N. Vernardakēs, Teubner 1888), a leitura grega é ἄθρυπτα κολακείᾳ, coerente com ἄθρυπτος. Divergência confirmada; o testemunho do DGP foi preservado sem substituição silenciosa."],
            [878, "O DGP verte αἰγίθαλλος como «abelheiro», que em português designa Merops apiaster. Aristófanes, Aves 881, e o Cambridge Greek Lexicon identificam αἰγίθαλλος com um tipo de chapim (tit), não com o abelharuco. Esta é uma nota editorial de retificação zoológica, preservando a glosa literal da fonte."],
            [879, "A análise 〈αἴξ, κορέννυμι〉 é transmitida pelo DGP. Pauly-Wissowa (s.v. Aigikoreis) documenta etimologias e interpretações históricas concorrentes; não apresentar a análise da fonte como consenso estabelecido."],
            [891, "O DGP glosa a acepção botânica como «nó de pinho»; LSJ, com referência a Teofrasto, HP 3.9.3, descreve o cerne do pinheiro (heartwood). A equivalência técnica precisa de exame da passagem grega e não deve ser presumida."],
            [919, "O XML do DGP repete o número de acepção 3 em ἀΐδηλος, entre «invisível; secreto» e «sombrio; obscuro». A leitura foi preservada e a duplicação assinalada documentalmente."],
            [957, "A análise de αἰθεροειδής no DGP registra εἷδος (espírito áspero), mas LSJ e Bailly atestam εἶδος (espírito brando) no sentido «forma/aspecto». A advertência não modifica a fonte."],
            [936, "A citação clássica de αἰδώς traz a abreviatura «el.» no DGP sem identificação segura de autor nesta auditoria. Preservar a sigla até comprovação do locus."],
            [949, "O próprio DGP assinala «duv.» para αἴητος. A semelhança formal com ἄητος não comprova identidade nem os sentidos indicados sem testemunho antigo específico."],
            [991, "A proposta etimológica αἰόλος + οὐρά para αἴλουρος é transmitida pelo DGP, mas a variante αἰέλουρος levanta problemas fonéticos. Não apresentar a composição como etimologia demonstrada."],
            [1015, "O DGP traz o elemento etimológico ῥεω em αἱμόρροος. O verbo clássico «correr, fluir» é ῥέω, com acento agudo, segundo LSJ. A grafia original é mantida na Fonte; corrigida somente por esta nota GDHAGP."],
            [1034, "O XML dá αἰνιγματώδης, ης, εν. LSJ registra αἰνιγματώδης, ες e confirma o neutro -ες da classe em -ώδης; a divergência de flexão é sinalizada sem substituir o cabeçalho original."],
            [1100, "O DGP oferece a derivação 〈αἰσθάναομαι〉 de αἴσθημα. A grafia documentada no LSJ é αἰσθάνομαι; a incongruência foi reparada em nota editorial, preservando a redação do XML."],
            [1022, "αἵμων¹ está marcado «duv.» no DGP. Cunliffe/Ilíada 5.49 atestam valor de destreza em caça; a variante semântica «apaixonado» precisa de decisão contextual e não é inferida como certeza."],
            [1087, "O DGP lista nove sentidos de αἵρεσις. LSJ também registra na Septuaginta o sentido específico de «oferta voluntária» em Levítico 22.18 e paralelos; falta adjudicação contra edição crítica LXX e LEH. Nota independente do DGP."]
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
