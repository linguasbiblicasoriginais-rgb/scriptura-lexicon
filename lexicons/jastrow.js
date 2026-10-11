"use strict";

/* JASTROW — sublote traduzido 1–10 (A00000–A00009).
 * Fonte: Sefaria-Data/Jastrow-full.xml, commit
 * 947c1b91684df9f8b92f14cf0d281b5d4f29bfc7.
 * O arquivo de fonte integral dos registros 1–200 está no repositório:
 * lexicons/jastrow-source-lote-0001.json.
 *
 * Entrada-fonte, tradução editorial e interface são camadas independentes.
 * Os homógrafos א (A00000 a A00005) continuam separados.
 */
window.ScripturaLexicons = window.ScripturaLexicons || {};

(function () {
    const dictionary = "aramaico";
    const source = "JASTROW";
    const items = [
        {
            sid: "A00000", lemma: "א", type: "Letra", gloss: "álef; primeira letra",
            html: '<strong>Álef.</strong> Primeira letra do alfabeto; pode alternar com outras consoantes guturais. Exemplos de alternância: <bdi lang="he" dir="rtl">אבב, הבב, חבב, עבב; אליתא, עליתא</bdi>, entre outros.'
        },
        {
            sid: "A00001", lemma: "א", type: "Elemento radical", gloss: "formação de raízes secundárias",
            html: 'Frequentemente empregado na formação de raízes secundárias de verbos do tipo <bdi lang="he" dir="rtl">ע״ע</bdi> (com duplicação do segundo radical). Exemplos: <bdi lang="he" dir="rtl">אטם, טמם</bdi>.'
        },
        {
            sid: "A00002", lemma: "א", type: "Elemento protético", gloss: "álef protético",
            html: 'Frequentemente empregado como consoante <strong>protética</strong>, isto é, acrescentada ao início de uma palavra. Exemplos: <bdi lang="he" dir="rtl">אגודל, גודל</bdi>. Veja o prefixo <bdi lang="he" dir="rtl">אִ־</bdi> (JASTROW A00007).'
        },
        {
            sid: "A00003", lemma: "א", type: "Elemento radical", gloss: "substituição de radical",
            html: 'Às vezes é inserido em lugar de uma consoante radical, como em <bdi lang="he" dir="rtl">באגא = בגא</bdi>; especialmente em verbos do tipo <bdi lang="he" dir="rtl">ע״ו</bdi> (com <i>waw</i> como segundo radical), como <bdi lang="he" dir="rtl">דָּאִיךְ</bdi>, de <bdi lang="he" dir="rtl">דּוּךְ</bdi>, e <bdi lang="he" dir="rtl">קָאִים</bdi>, de <bdi lang="he" dir="rtl">קוּם</bdi>, entre outros.'
        },
        {
            sid: "A00004", lemma: "א", type: "Consoante inicial", gloss: "omissão do álef inicial",
            html: 'No <strong>Talmude de Jerusalém</strong>, o álef inicial é frequentemente omitido. Exemplos: <bdi lang="he" dir="rtl">בָּא = אַבָּא</bdi>; <bdi lang="he" dir="rtl">מַר = אֲמַר</bdi>.'
        },
        {
            sid: "A00005", lemma: "א", type: "Sufixo nominal", gloss: "álef final; estado enfático",
            html: 'Acrescentado ao final de substantivos caldaicos (aramaicos), corresponde ao <bdi lang="he" dir="rtl">ה</bdi> prefixado no hebraico, no chamado <strong>estado enfático</strong> (<i>status emphaticus</i>). Exemplo: <bdi lang="he" dir="rtl">אַבָּא = הָאָב</bdi>.'
        },
        {
            sid: "A00006", lemma: "א׳", type: "Letra numeral", gloss: "um; uma",
            html: 'Como <strong>letra numeral</strong>, significa <em>um</em> ou <em>uma</em>. Exemplo: <bdi lang="he" dir="rtl">אות א׳ = אות אחת</bdi>, “uma letra”. <strong>Referência:</strong> Shabbat 104a, entre outras. <strong>Nota sobre a tradição textual:</strong> conforme o espaço disponível, edições e manuscritos alternam a palavra numeral por extenso e a respectiva letra numeral: <bdi lang="he" dir="rtl">א׳</bdi> por <bdi lang="he" dir="rtl">אחד</bdi> ou <bdi lang="he" dir="rtl">אחת</bdi>; <bdi lang="he" dir="rtl">ב׳</bdi> por <bdi lang="he" dir="rtl">שנים</bdi>, <bdi lang="he" dir="rtl">שתים</bdi> ou <bdi lang="he" dir="rtl">שתי</bdi>, etc.'
        },
        {
            sid: "A00007", lemma: "אִ־, אִי־, אֶ־, אַ־", type: "Prefixos", gloss: "formativo; demonstrativo; eufônico",
            html: '<strong>Prefixo</strong> com as formas <bdi lang="he" dir="rtl">אִ־, אִי־, אֶ־, אַ־</bdi>, entre outras. <strong>1.</strong> Empregado para formar substantivos em <em>qal</em>, <em>piel</em>, <em>afel</em> (<em>hifil</em>) e outras formações. Exemplos: <bdi lang="he" dir="rtl">אִסְפְּקָא, אִיסְ׳, אַפְטָרָה, אַפְטַרְתָּא</bdi>. <strong>2.</strong> Com função demonstrativa. Exemplos: <bdi lang="he" dir="rtl">אִיהוּ</bdi>, correspondente ao hebraico <bdi lang="he" dir="rtl">הַהוּא</bdi>; <bdi lang="he" dir="rtl">אִנָּא, אִינָא</bdi>, entre outros. <strong>3.</strong> Com função eufônica (protética): <bdi lang="he" dir="rtl">אִדְמָא = דְּמָא</bdi>; <bdi lang="he" dir="rtl">אִית</bdi>, correspondente ao hebraico <bdi lang="he" dir="rtl">יֵשׁ</bdi>. Ocorre especialmente antes de palavras estrangeiras iniciadas por duas consoantes, como <bdi lang="he" dir="rtl">אִסְטְרָטֵיגוֹס, אִיסְ׳ = סְטַרְטֵיגֹוס</bdi>, entre outros casos.'
        },
        {
            sid: "A00008", lemma: "אַ־", type: "Prefixo", gloss: "sobre; por cima de",
            html: 'Prefixo seguido de <strong>dáguexe forte</strong>, equivalente a <bdi lang="he" dir="rtl">עַל</bdi>, “sobre, por cima de”. Exemplo: <bdi lang="he" dir="rtl">אַמָּרָא = עַל מָרָא</bdi>. Ocorre até mesmo diante de guturais, como em <bdi lang="he" dir="rtl">אַאַבְנָא</bdi>.'
        },
        {
            sid: "A00009", lemma: "אָאִין", type: "Forma flexionada", gloss: "forma plural (remissão)",
            html: 'Forma plural de <bdi lang="he" dir="rtl">אל״ף</bdi>. A entrada original consiste numa remissão ao verbete correspondente, que ainda não foi incorporado ao sublote traduzido.'
        }
    ];

    function escapeHtml(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
        });
    }

    const rows = items.map(function (e) {
        const id = "entry-jastrow-" + e.sid.toLowerCase();
        const search = [e.lemma, e.type, e.gloss, source, e.sid].join(" ");
        return '<tr class="search-row" data-dictionary="' + dictionary +
            '" data-target="' + id + '" data-source="' + source +
            '" data-search="' + escapeHtml(search) + '" tabindex="0">' +
            '<td class="table-lemma hebrew-table-lemma" lang="he" dir="rtl">' +
            escapeHtml(e.lemma) + '</td><td>' + escapeHtml(e.type) +
            '</td><td>' + escapeHtml(e.gloss) +
            '</td><td><span class="source-pill">JASTROW</span></td></tr>';
    }).join("\n");

    const cards = items.map(function (e) {
        const id = "entry-jastrow-" + e.sid.toLowerCase();
        return '<article id="' + id + '" class="entry-card" data-dictionary="' +
            dictionary + '" data-source="' + source + '" data-source-entry="' +
            e.sid + '" hidden><header class="entry-header"><div>' +
            '<h1 class="entry-title hebrew-title" lang="he" dir="rtl">' +
            escapeHtml(e.lemma) + '</h1>' +
            '<div class="entry-meta"><span>' + escapeHtml(e.type) +
            '</span><span class="separator">·</span><span>Jastrow, registro ' +
            e.sid + '</span></div></div><div class="source-tag">JASTROW</div>' +
            '</header><div class="entry-divider"></div>' +
            '<section class="entry-section"><div class="section-title">Tradução e análise da fonte</div>' +
            '<p class="entry-text">' + e.html + '</p></section>' +
            '<section class="entry-section"><div class="section-title">Proveniência</div>' +
            '<p class="entry-text">Marcus Jastrow, <em>A Dictionary of the Targumim, ' +
            'the Talmud Babli and Yerushalmi, and the Midrashic Literature</em> ' +
            '(edição de 1903), registro <strong>' + e.sid + '</strong>. ' +
            'Fonte original preservada no lote XML do projeto.</p></section></article>';
    }).join("\n");

    window.ScripturaLexicons.JASTROW = {
        source: source,
        searchAnchorId: "jastrow-search-anchor",
        entryAnchorId: "jastrow-entry-anchor",
        rowsHtml: rows,
        cardsHtml: cards,
        bibliographicTerms: [
            { key: "Shabbat 104a", type: "biblio",
              text: "Talmude Babilônico, tratado Shabbat (Sábado), folha 104, lado a." },
            { key: "Talmude de Jerusalém", type: "biblio",
              text: "Talmude de Jerusalém (Talmud Yerushalmi), corpus de tradições rabínicas." },
            { key: "qal", type: "abbr",
              text: "Qal: conjugação verbal simples (paʿal) das línguas semíticas." },
            { key: "piel", type: "abbr",
              text: "Piel: conjugação verbal tradicional do hebraico, frequentemente com intensificação ou factitividade conforme a raiz." },
            { key: "afel", type: "abbr",
              text: "Afel: conjugação causativa aramaica, comparável ao hifil hebraico." },
            { key: "hifil", type: "abbr",
              text: "Hifil: conjugação verbal hebraica, frequentemente causativa." },
            { key: "estado enfático", type: "abbr",
              text: "Estado enfático (também chamado determinado) na flexão nominal aramaica; sua distribuição varia conforme a fase da língua." },
            { key: "dáguexe forte", type: "abbr",
              text: "Sinal diacrítico hebraico tradicionalmente associado à geminação da consoante, conforme a análise gramatical." }
        ]
    };
})();
