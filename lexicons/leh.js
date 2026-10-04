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
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-a-leh" data-source="LEH" data-search="ἆ a interjeição ah ai Juízes Jgs KRAFT WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">ἆ</td><td>Interjeição</td><td>ah!; ai!</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-aar-leh" data-source="LEH" data-search="ααρ aar substantivo אחר outro Neemias Neh Ναβι-ααρ Nabiar נבו MT LEH" tabindex="0">
    <td class="table-lemma greek">ααρ</td><td>Substantivo</td><td>outro</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abak-leh" data-source="LEH" data-search="αβακ abak substantivo בץ linho branco fino bissus 1 Crônicas ALLEN LEH" tabindex="0">
    <td class="table-lemma greek">αβακ</td><td>Substantivo</td><td>bíssus; linho branco fino</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abama-leh" data-source="LEH" data-search="Αβαμα Abama substantivo במה lugar alto cultual topônimo Ezequiel LEH" tabindex="0">
    <td class="table-lemma greek">Αβαμα</td><td>Substantivo</td><td>lugar alto cultual; topônimo</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abarkenin-leh" data-source="LEH" data-search="αβαρκηνιν abarkenin substantivo ברקנין ברקנים espinheiros arbustos espinhosos βαρακηνιμ βαρκοννιμ Juízes LEH" tabindex="0">
    <td class="table-lemma greek">αβαρκηνιν</td><td>Substantivo</td><td>arbustos espinhosos</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abasileutos-leh" data-source="LEH" data-search="ἀβασίλευτος abasileutos adjetivo sem rei Provérbios LEH" tabindex="0">
    <td class="table-lemma greek">ἀβασίλευτος</td><td>Adjetivo</td><td>sem rei</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatoomai-leh" data-source="LEH" data-search="ἀβατόομαι abatoomai verbo ser devastado neologismo Jeremias LEH" tabindex="0">
    <td class="table-lemma greek">ἀβατόομαι</td><td>Verbo</td><td>ser devastado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abatos-leh" data-source="LEH" data-search="ἄβατος abatos adjetivo não trilhado inacessível intransitável desolado terra erma deserto Levítico Jeremias Jó Ester Amós 3 Macabeus LSJ LEH" tabindex="0">
    <td class="table-lemma greek">ἄβατος</td><td>Adjetivo</td><td>não trilhado; inacessível; intransitável; desolado</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abedirin-leh" data-source="LEH" data-search="αβεδηριν abedirin substantivo הבדרין דברים palavras registros 1 Crônicas LEH" tabindex="0">
    <td class="table-lemma greek">αβεδηριν</td><td>Substantivo</td><td>palavras; registros</td><td><span class="source-pill">LEH</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-abira-leh" data-source="LEH" data-search="αβιρα abira substantivo בירה cidade fortificada cidadela Neemias WALTERS LEH" tabindex="0">
    <td class="table-lemma greek">αβιρα</td><td>Substantivo</td><td>cidade fortificada; cidadela</td><td><span class="source-pill">LEH</span></td>
</tr>
`,

    cardsHtml: String.raw`
<article id="entry-a-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἆ</h1><div class="entry-meta"><span class="greek">ἆ</span><span class="separator">·</span><span>interjeição (I)</span><span class="separator">·</span><span>frequência LEH: 0-6-0-0-0=6</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ah!; ai!</strong></p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.6.22" target="_blank" rel="noopener noreferrer">Jgs 6,22</a> (bis); <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.11.35" target="_blank" rel="noopener noreferrer">Jgs<sup>B</sup> 11,35</a> (bis).</p>
        <p class="entry-text"><strong>Cf.</strong> KRAFT 1972b, 160-162; WALTERS 1973, 341.</p>
    </section>
</article>

<article id="entry-aar-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ααρ</h1><div class="entry-meta"><span class="greek">ααρ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-2-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">אחר</bdi>, <strong>outro</strong>.</p>
        <p class="entry-text"><strong>Ocorrências citadas:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Neh 7,33</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">7,34</a>.</p>
        <p class="entry-text">*<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.33" target="_blank" rel="noopener noreferrer">Neh 7,33</a> <span class="greek">Ναβι-ααρ</span>, <em>Nabiar</em>, por MT <bdi class="hebrew hebrew-token" lang="he" dir="rtl">אחר נבו</bdi>, <em>o outro Nebo</em>; ver também <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.7.34" target="_blank" rel="noopener noreferrer">Neh 7,34</a>. O asterisco é o da fonte e assinala um caso em que o grego difere do hebraico e a diferença pode ser explicada no nível da escrita, leitura ou audição da palavra hebraica, ou como erro na transmissão do texto grego.</p>
    </section>
</article>

<article id="entry-abak-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβακ</h1><div class="entry-meta"><span class="greek">αβακ</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">בץ/ה</bdi>, <strong>bíssus, linho branco fino</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.21" target="_blank" rel="noopener noreferrer">1 Chr 4,21</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> ALLEN, L.C. 1974b, 62.</p>
    </section>
</article>

<article id="entry-abama-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">Αβαμα</h1><div class="entry-meta"><span class="greek">Αβαμα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-2-0-0=2</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">במה/ה</bdi>, <strong>o lugar alto cultual</strong> (interpretado como topônimo).</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/EZE.20.29" target="_blank" rel="noopener noreferrer">Ez 20,29</a> (bis).</p>
    </section>
</article>

<article id="entry-abarkenin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβαρκηνιν</h1><div class="entry-meta"><span class="greek">αβαρκηνιν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">ברקנין/ה</bdi>, por MT <bdi class="hebrew hebrew-token" lang="he" dir="rtl">ברקנים/ה</bdi>, <strong>os arbustos espinhosos</strong>; ver <span class="greek">βαρακηνιμ</span> e <span class="greek">βαρκοννιμ</span>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JDG.8.7" target="_blank" rel="noopener noreferrer">Jgs<sup>B</sup> 8,7</a>.</p>
    </section>
</article>

<article id="entry-abasileutos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβασίλευτος</h1><div class="entry-meta"><span class="greek">ἀβασίλευτος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>sem rei</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/PRO.30.27" target="_blank" rel="noopener noreferrer">Prv 30,27</a>.</p>
    </section>
</article>

<article id="entry-abatoomai-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἀβατόομαι</h1><div class="entry-meta"><span class="greek">ἀβατόομαι</span><span class="separator">·</span><span>verbo (V)</span><span class="separator">·</span><span>frequência LEH: 0-0-1-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>ser devastado</strong>; <em>neol.</em></p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.30.14" target="_blank" rel="noopener noreferrer">Jer 30,14(49,20)</a>.</p>
    </section>
</article>

<article id="entry-abatos-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">ἄβατος</h1><div class="entry-meta"><span class="greek">ἄβατος, -ος, -ον</span><span class="separator">·</span><span>adjetivo (A)</span><span class="separator">·</span><span>frequência LEH: 1-0-17-4-6=28</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text"><strong>não trilhado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JOB.38.27" target="_blank" rel="noopener noreferrer">Jb 38,27</a>); <strong>inacessível</strong> (Est 8,12x); <strong>intransitável</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/AMO.5.24" target="_blank" rel="noopener noreferrer">Am 5,24</a>); <strong>desolado</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">Jer 6,8</a>); <strong>que não deve ser pisado</strong> (3 Mc 5,43). <span class="greek">ἄβατον</span> (subentenda-se <span class="greek">γήν</span>): <strong>terra erma, deserto</strong> (<a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.33.18" target="_blank" rel="noopener noreferrer">Jer 33(26),18</a>).</p>
        <p class="entry-text"><strong>Ocorrências citadas inicialmente:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/LEV.16.22" target="_blank" rel="noopener noreferrer">Lv 16,22</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.2.6" target="_blank" rel="noopener noreferrer">Jer 2,6</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.6.8" target="_blank" rel="noopener noreferrer">6,8</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.12.10" target="_blank" rel="noopener noreferrer">12,10</a>; <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/JER.28.43" target="_blank" rel="noopener noreferrer">28(51),43</a>.</p>
        <p class="entry-text">→ LSJ RSuppl.</p>
    </section>
</article>

<article id="entry-abedirin-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβεδηριν</h1><div class="entry-meta"><span class="greek">αβεδηριν</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-1-0-0-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">-הבדרין</bdi>, por MT <bdi class="hebrew hebrew-token" lang="he" dir="rtl">דברים/ה</bdi>, <strong>as palavras, registros</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/1CH.4.22" target="_blank" rel="noopener noreferrer">1 Chr 4,22</a>.</p>
    </section>
</article>

<article id="entry-abira-leh" class="entry-card" data-dictionary="grego" data-source="LEH" hidden>
    <header class="entry-header"><div><h1 class="entry-title greek">αβιρα</h1><div class="entry-meta"><span class="greek">αβιρα</span><span class="separator">·</span><span>substantivo (N)</span><span class="separator">·</span><span>frequência LEH: 0-0-0-1-0=1</span></div></div><div class="source-tag">LEH</div></header>
    <div class="entry-divider"></div>
    <section class="entry-section"><div class="section-title">Tradução literal</div>
        <p class="entry-text">= <bdi class="hebrew hebrew-token" lang="he" dir="rtl">בירה/ה</bdi>, <strong>a cidade fortificada, a cidadela</strong>.</p>
        <p class="entry-text"><strong>Ocorrência citada:</strong> <a class="reference reference-link" href="https://www.die-bibel.de/en/bible/LXX/NEH.1.1" target="_blank" rel="noopener noreferrer">Neh 1,1</a>.</p>
        <p class="entry-text"><strong>Cf.</strong> WALTERS 1973, 304-305.</p>
    </section>
</article>
`
};
