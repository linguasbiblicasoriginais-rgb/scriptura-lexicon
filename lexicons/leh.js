"use strict";

/*
 * LEH — Lust–Eynikel–Hauspie, A Greek-English Lexicon of the Septuagint.
 *
 * Branch de trabalho: chat-gpt-leh
 *
 * Esta fonte começa vazia nesta refatoração. A conversa LEH deve iniciar
 * pelo primeiro verbete do léxico e acrescentar somente conteúdo desta
 * fonte aqui.
 *
 * Não editar lexicons/bdag.js durante trabalho paralelo.
 *
 * Novas abreviaturas específicas do LEH devem ser acrescentadas em
 * bibliographicTerms. Elas serão aplicadas somente aos cartões LEH e
 * prevalecem, por chave, sobre definições comuns de script.js.
 */

window.ScripturaLexicons =
    window.ScripturaLexicons || {};

window.ScripturaLexicons.LEH = {
    source: "LEH",
    searchAnchorId: "leh-search-anchor",
    entryAnchorId: "leh-entry-anchor",

    bibliographicTerms: [
        {
            key: "KRAFT 1972b",
            type: "biblio",
            text: "R. A. Kraft, “Prefatory Remarks to the Lexical ‘Probes’. Towards a Lexicon of Jewish Translation Greek”, em R. A. Kraft (ed.), Septuagintal Lexicography (SCS 1), Missoula, MT, 1972, pp. 157–178"
        },
        {
            key: "WALTERS 1973",
            type: "biblio",
            text: "P. Walters [= P. Katz], The Text of the Septuagint. Its Corruptions and Their Emendation, Cambridge, 1973"
        },
        {
            key: "ALLEN, L.C. 1974b",
            type: "biblio",
            text: "L. C. Allen, The Greek Chronicles. The Relation of I and II Chronicles to the Massoretic Text. Part II. Textual Criticism (SVT 27), Leiden, 1974"
        },
        {
            key: "LSJ RSuppl",
            type: "biblio",
            text: "Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)"
        },
        {
            key: "MT",
            type: "abbr",
            text: "Masoretic Text — Texto massorético"
        },
        {
            key: "neol.",
            type: "abbr",
            text: "neologismo; no LEH, indicação usada para palavra considerada provavelmente não anterior ao período de composição da Septuaginta"
        }
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-a-leh" data-source="LEH" data-search="ἆ a interjeição ah ai Juízes Jz KRAFT WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">ἆ</td><td>Interjeição</td><td>ah!; ai!</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aar-leh" data-source="LEH" data-search="ααρ aar substantivo אחר outro Neemias Ne Ναβι-ααρ Nabiar נבו MT LEH" tabindex="0">
    <td class="table-lemma greek">ααρ</td><td>Substantivo</td><td>outro</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abak-leh" data-source="LEH" data-search="αβακ abak substantivo בץ linho branco fino bissus 1Crônicas ALLEN LEH" tabindex="0">
    <td class="table-lemma greek">αβακ</td><td>Substantivo</td><td>bíssus; linho branco fino</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abama-leh" data-source="LEH" data-search="Αβαμα Abama substantivo במה lugar alto cultual topônimo Ezequiel LEH" tabindex="0">
    <td class="table-lemma greek">Αβαμα</td><td>Substantivo</td><td>lugar alto cultual; topônimo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abarkenin-leh" data-source="LEH" data-search="αβαρκηνιν abarkenin substantivo ברקנין ברקנים espinheiros arbustos espinhosos βαρακηνιμ βαρκοννιμ Juízes Jz LEH" tabindex="0">
    <td class="table-lemma greek">αβαρκηνιν</td><td>Substantivo</td><td>arbustos espinhosos</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abasileutos-leh" data-source="LEH" data-search="ἀβασίλευτος abasileutos adjetivo sem rei Provérbios Pv LEH" tabindex="0">
    <td class="table-lemma greek">ἀβασίλευτος</td><td>Adjetivo</td><td>sem rei</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatoomai-leh" data-source="LEH" data-search="ἀβατόομαι abatoomai verbo ser devastado neologismo Jeremias Jr LEH" tabindex="0">
    <td class="table-lemma greek">ἀβατόομαι</td><td>Verbo</td><td>ser devastado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatos-leh" data-source="LEH" data-search="ἄβατος abatos adjetivo não trilhado inacessível intransitável desolado terra erma deserto Levítico Jeremias Jr Jó Ester Amós 3 Macabeus LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἄβατος</td><td>Adjetivo</td><td>não trilhado; inacessível; intransitável; desolado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abedirin-leh" data-source="LEH" data-search="αβεδηριν abedirin substantivo הבדרין דברים palavras registros 1Crônicas LEH" tabindex="0">
    <td class="table-lemma greek">αβεδηριν</td><td>Substantivo</td><td>palavras; registros</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abira-leh" data-source="LEH" data-search="αβιρα abira substantivo בירה cidade fortificada cidadela Neemias Ne WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">αβιρα</td><td>Substantivo</td><td>cidade fortificada; cidadela</td><td><span class="source-pill">LEH</span></td>
</tr>
`,

    cardsHtml: String.raw`
<article id="entry-a-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἆ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἆ · â" data-transliteration="â" data-meanings="ah!|ai!">ἆ</span><span class="separator">·</span><span>interjeição (I)</span><span class="separator">·</span><span>frequência LEH: 0-6-0-0-0=6</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ah!; ai!</strong></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.6.22" target="_blank" rel="noopener noreferrer">Jz 6.22</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.11.35" target="_blank" rel="noopener noreferrer">Jz<sup>B</sup> 11.35</a> (bis).</p>
        <p class="entry-text"><strong>Cf.</strong> KRAFT 1972b, 160-162; WALTERS 1973, 341.</p>
    </section>
</article>

<article id="entry-aar-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ααρ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ααρ · aar" data-transliteration="aar" data-meanings="outro">ααρ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-2-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אחר" data-transliteration="ʾḥr" data-meanings="outro">אחר</bdi>, <strong>outro</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Ne 7.33</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">7.34</a>.</p>
        <p class="entry-text">*<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Ne 7.33</a> <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="Ναβι-ααρ · Nabi-aar" data-transliteration="Nabi-aar" data-meanings="Nabiar|forma do texto grego em Ne 7.33">Ναβι-ααρ</span>, <em>Nabiar</em>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="אחר נבו" data-transliteration="ʾḥr nbw" data-meanings="o outro Nebo">אחר נבו</bdi>, <em>o outro Nebo</em>; ver também <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">Ne 7.34</a>. O asterisco é o da fonte e assinala um caso em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição da palavra hebraica, ou como erro na transmissão do texto grego.</p>
    </section>
</article>

<article id="entry-abak-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβακ</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβακ · abak" data-transliteration="abak" data-meanings="bíssus|linho branco fino">αβακ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="בץ/ה" data-transliteration="bṣ/h" data-meanings="bíssus|linho branco fino">בץ/ה</bdi>, <strong>bíssus, linho branco fino</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.21" target="_blank" rel="noopener noreferrer">1Cr 4.21</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> ALLEN, L.C. 1974b, 62.</p>
    </section>
</article>

<article id="entry-abama-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Αβαμα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="Αβαμα · Abama" data-transliteration="Abama" data-meanings="lugar alto cultual|topônimo">Αβαμα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-0-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="במה/ה" data-transliteration="bmh/h" data-meanings="lugar alto cultual">במה/ה</bdi>, <strong>o lugar alto cultual</strong> (interpretado como topônimo).</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.20.29" target="_blank" rel="noopener noreferrer">Ez 20.29</a> (bis).</p>
    </section>
</article>

<article id="entry-abarkenin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβαρκηνιν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβαρκηνιν · abarkēnin" data-transliteration="abarkēnin" data-meanings="arbustos espinhosos">αβαρκηνιν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ברקנין/ה" data-transliteration="brqnyn/h" data-meanings="arbustos espinhosos">ברקנין/ה</bdi>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="ברקנים/ה" data-transliteration="brqnym/h" data-meanings="arbustos espinhosos">ברקנים/ה</bdi>, <strong>os arbustos espinhosos</strong>; ver <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βαρακηνιμ · barakēnim" data-transliteration="barakēnim" data-meanings="forma remetida pelo LEH; veja o respectivo verbete">βαρακηνιμ</span> e <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="βαρκοννιμ · barkonnim" data-transliteration="barkonnim" data-meanings="forma remetida pelo LEH; veja o respectivo verbete">βαρκοννιμ</span>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.8.7" target="_blank" rel="noopener noreferrer">Jz<sup>B</sup> 8.7</a>.</p>
    </section>
</article>

<article id="entry-abasileutos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβασίλευτος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβασίλευτος, -ος, -ον · abasileutos" data-transliteration="abasileutos" data-meanings="sem rei">ἀβασίλευτος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>sem rei</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.30.27" target="_blank" rel="noopener noreferrer">Pv 30.27</a>.</p>
    </section>
</article>

<article id="entry-abatoomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβατόομαι</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἀβατόομαι · abatoomai" data-transliteration="abatoomai" data-meanings="ser devastado">ἀβατόομαι</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-0-1-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ser devastado</strong>; <em>neol.</em></p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.30.14" target="_blank" rel="noopener noreferrer">Jr 30.14(49.20)</a>.</p>
    </section>
</article>

<article id="entry-abatos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄβατος</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβατος, -ος, -ον · abatos" data-transliteration="abatos" data-meanings="não trilhado|inacessível|intransitável|desolado">ἄβατος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 1-0-17-4-6=28</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>não trilhado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.38.27" target="_blank" rel="noopener noreferrer">Jó 38.27</a>); <strong>inacessível</strong> (Et 8.12x); <strong>intransitável</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.5.24" target="_blank" rel="noopener noreferrer">Am 5.24</a>); <strong>desolado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">Jr 6.8</a>); <strong>que não deve ser pisado</strong> (3Mc 5.43). <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="ἄβατον · abaton" data-transliteration="abaton" data-meanings="terra erma|deserto; neutro substantivado no contexto">ἄβατον</span> (subentenda-se <span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="γήν · gēn" data-transliteration="gēn" data-meanings="terra; acusativo singular de γῆ">γήν</span>): <strong>terra erma, deserto</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.33.18" target="_blank" rel="noopener noreferrer">Jr 33(26).18</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.16.22" target="_blank" rel="noopener noreferrer">Lv 16.22</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.2.6" target="_blank" rel="noopener noreferrer">Jr 2.6</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">6.8</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.12.10" target="_blank" rel="noopener noreferrer">12.10</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.28.43" target="_blank" rel="noopener noreferrer">28(51).43</a>.</p>
        <p class="entry-text">→ <span class="biblio-ref tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="LSJ RSuppl" data-tooltip-text="Liddell–Scott–Jones, Revised Supplement; ed. P. G. W. Glare, com assistência de A. A. Thompson, 1996 (→ LIDDELL)">LSJ RSuppl</span>.</p>
    </section>
</article>

<article id="entry-abedirin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβεδηριν</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβεδηριν · abedērin" data-transliteration="abedērin" data-meanings="palavras|registros">αβεδηριν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="-הבדרין" data-transliteration="-hbdrin" data-meanings="forma hebraica subjacente registrada pelo LEH">-הבדרין</bdi>, por MT <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="דברים/ה" data-transliteration="dbrim/h" data-meanings="palavras|registros">דברים/ה</bdi>, <strong>as palavras, registros</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.22" target="_blank" rel="noopener noreferrer">1Cr 4.22</a>.</p>
    </section>
</article>

<article id="entry-abira-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβιρα</h1><div class="entry-meta"><span class="greek greek-term tooltip-trigger" tabindex="0" data-tooltip-type="greek" data-tooltip-label="αβιρα · abira" data-transliteration="abira" data-meanings="cidade fortificada|cidadela">αβιρα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token tooltip-trigger" lang="he" dir="rtl" tabindex="0" data-tooltip-type="hebrew" data-tooltip-label="בירה/ה" data-transliteration="byrh/h" data-meanings="cidade fortificada|cidadela">בירה/ה</bdi>, <strong>a cidade fortificada, a cidadela</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.1.1" target="_blank" rel="noopener noreferrer">Ne 1.1</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> WALTERS 1973, 304-305.</p>
    </section>
</article>
`
};
