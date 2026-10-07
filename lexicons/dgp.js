"use strict";

/*
 * DGP — Dicionário Grego-Português / Dicionário Digital Grego-Português.
 *
 * Branch de trabalho: chat-gpt-dgp
 *
 * Fonte de trabalho:
 * - interface pública: http://perseidas.fclar.unesp.br/
 * - repositório do projeto digital: aniseferreira/Grc-Por-DigDict
 * - snapshot fixado: deb54b426ead447d01ced7534736f3e77be7015b
 * - base primária para a letra α: arquivos_xml/01_Alfa.txt.xml
 * - base de dados de referência: DDGP-3x-files/ddgp3x-copia_8nov_22.sql
 *
 * Regras operacionais:
 * - inserir os verbetes em ordem da fonte;
 * - trabalhar inicialmente de α até o último verbete iniciado por α;
 * - usar lotes de 20 registros lexicográficos, salvo o último lote da letra;
 * - commits ordinários do DGP alteram somente este arquivo e o manifesto
 *   de progresso quando necessário;
 * - não editar lexicons/bdag.js nem lexicons/leh.js durante o trabalho DGP;
 * - não completar, corrigir ou harmonizar silenciosamente o DGP com
 *   BDAG, LEH ou qualquer outra fonte;
 * - abreviaturas gramaticais e editoriais recebem popup explicativo;
 * - autores, obras e corpora aparecem por extenso, em forma de rubrica,
 *   com popup biográfico ou descritivo;
 * - abreviaturas autorais ambíguas não são expandidas por conjectura.
 */

window.ScripturaLexicons =
    window.ScripturaLexicons || {};

window.ScripturaLexicons.DGP = {
    source: "DGP",
    searchAnchorId: "dgp-search-anchor",
    entryAnchorId: "dgp-entry-anchor",

    bibliographicTerms: [
        { key: "indecl.", type: "abbr", text: "indeclinável" },
        { key: "num.", type: "abbr", text: "numeral" },
        { key: "hebr.", type: "abbr", text: "hebraico" },
        { key: "dór.", type: "abbr", text: "dórico" },
        { key: "fem.", type: "abbr", text: "feminino" },
        { key: "art.", type: "abbr", text: "artigo" },
        { key: "def.", type: "abbr", text: "definido" },
        { key: "pron.", type: "abbr", text: "pronome" },
        { key: "pos.", type: "abbr", text: "possessivo" },
        { key: "rel.", type: "abbr", text: "relativo; relação" },
        { key: "pl.", type: "abbr", text: "plural" },
        { key: "n.", type: "abbr", text: "nome; neutro" },
        { key: "dat.", type: "abbr", text: "dativo" },
        { key: "interj.", type: "abbr", text: "interjeição" },
        { key: "cf.", type: "abbr", text: "confira" },
        { key: "sing.", type: "abbr", text: "singular" },
        { key: "pres.", type: "abbr", text: "presente" },
        { key: "méd.", type: "abbr", text: "médio, média; em formas verbais, voz média" },
        { key: "gen.", type: "abbr", text: "genitivo" },
        { key: "aor.", type: "abbr", text: "aoristo" },
        { key: "pas.", type: "abbr", text: "passivo" },
        { key: "tr.", type: "abbr", text: "transitivo" },
        { key: "intr.", type: "abbr", text: "intransitivo" },
        { key: "at.", type: "abbr", text: "ativo" },
        { key: "crist.", type: "abbr", text: "cristão" },
        { key: "adv.", type: "abbr", text: "advérbio" },
        { key: "masc.", type: "abbr", text: "masculino" },
        { key: "tard.", type: "abbr", text: "tardio" },
        { key: "duv.", type: "abbr", text: "duvidoso" },
        { key: "intens.", type: "abbr", text: "intensivo" },
        { key: "priv.", type: "abbr", text: "privativo" },
        { key: "subj.", type: "abbr", text: "subjuntivo" }
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0001" data-source="DGP" data-search="Α, α (ἄλφα) (τό) alfa DGP" tabindex="0">
    <td class="table-lemma greek">Α, α (ἄλφα) (τό)</td>
    <td>—</td>
    <td>alfa</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0002" data-source="DGP" data-search="ἁ forma dórica do artigo definido feminino DGP" tabindex="0">
    <td class="table-lemma greek">ἁ</td>
    <td>—</td>
    <td>forma dórica do artigo definido feminino</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0003" data-source="DGP" data-search="ἅ1 forma dórica do pronome possessivo ou relativo DGP" tabindex="0">
    <td class="table-lemma greek">ἅ1</td>
    <td>—</td>
    <td>forma dórica do pronome possessivo ou relativo</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0004" data-source="DGP" data-search="ἅ2 plural neutro do pronome possessivo ou relativo DGP" tabindex="0">
    <td class="table-lemma greek">ἅ2</td>
    <td>—</td>
    <td>plural neutro do pronome possessivo ou relativo</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0005" data-source="DGP" data-search="ᾇ dativo feminino de ὅς DGP" tabindex="0">
    <td class="table-lemma greek">ᾇ</td>
    <td>—</td>
    <td>dativo feminino de ὅς</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0006" data-source="DGP" data-search="ἄ, ἅ, ἇ ah! DGP" tabindex="0">
    <td class="table-lemma greek">ἄ, ἅ, ἇ</td>
    <td>—</td>
    <td>ah!</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0007" data-source="DGP" data-search="ἀάατος, ος, ον inviolável; invencível DGP" tabindex="0">
    <td class="table-lemma greek">ἀάατος, ος, ον</td>
    <td>—</td>
    <td>inviolável; invencível</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0008" data-source="DGP" data-search="ἀαγής, ής, ές inquebrável; sólido DGP" tabindex="0">
    <td class="table-lemma greek">ἀαγής, ής, ές</td>
    <td>—</td>
    <td>inquebrável; sólido</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0009" data-source="DGP" data-search="ἄαπτος, ος, ον que não pode ser tocado ou vencido DGP" tabindex="0">
    <td class="table-lemma greek">ἄαπτος, ος, ον</td>
    <td>—</td>
    <td>que não pode ser tocado ou vencido</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0010" data-source="DGP" data-search="ἄασα, ἀασάμην, ἀάσθην cf. ἀάω DGP" tabindex="0">
    <td class="table-lemma greek">ἄασα, ἀασάμην, ἀάσθην</td>
    <td>—</td>
    <td>cf. ἀάω</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0011" data-source="DGP" data-search="ἀάσχετος, ος, ον ἄσχετος DGP" tabindex="0">
    <td class="table-lemma greek">ἀάσχετος, ος, ον</td>
    <td>—</td>
    <td>ἄσχετος</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0012" data-source="DGP" data-search="ἀᾶται 3ª singular do presente médio de ἀάω DGP" tabindex="0">
    <td class="table-lemma greek">ἀᾶται</td>
    <td>—</td>
    <td>3ª singular do presente médio de ἀάω</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0013" data-source="DGP" data-search="ἄατος insaciável DGP" tabindex="0">
    <td class="table-lemma greek">ἄατος</td>
    <td>—</td>
    <td>insaciável</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0014" data-source="DGP" data-search="ἀάω agitar o espírito; perturbar; desorientar DGP" tabindex="0">
    <td class="table-lemma greek">ἀάω</td>
    <td>—</td>
    <td>agitar o espírito; perturbar; desorientar</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0015" data-source="DGP" data-search="ἀβακέω-ῶ ficar em silêncio DGP" tabindex="0">
    <td class="table-lemma greek">ἀβακέω-ῶ</td>
    <td>—</td>
    <td>ficar em silêncio</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0016" data-source="DGP" data-search="ἀβάπτιστος, ος, ον não submergido; sóbrio; não batizado DGP" tabindex="0">
    <td class="table-lemma greek">ἀβάπτιστος, ος, ον</td>
    <td>—</td>
    <td>não submergido; sóbrio; não batizado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0017" data-source="DGP" data-search="ἀβαρής, ής, ές sem peso; leve; sem ônus DGP" tabindex="0">
    <td class="table-lemma greek">ἀβαρής, ής, ές</td>
    <td>—</td>
    <td>sem peso; leve; sem ônus</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0018" data-source="DGP" data-search="ἀβασάνιστος, ος, ον não submetido a tortura ou exame DGP" tabindex="0">
    <td class="table-lemma greek">ἀβασάνιστος, ος, ον</td>
    <td>—</td>
    <td>não submetido a tortura ou exame</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0019" data-source="DGP" data-search="ἀβασανίστως sem tortura; sem exame acurado DGP" tabindex="0">
    <td class="table-lemma greek">ἀβασανίστως</td>
    <td>—</td>
    <td>sem tortura; sem exame acurado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0020" data-source="DGP" data-search="ἀβασίλευτος, ος, ον sem governo; sem guia; independente DGP" tabindex="0">
    <td class="table-lemma greek">ἀβασίλευτος, ος, ον</td>
    <td>—</td>
    <td>sem governo; sem guia; independente</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
`,

    cardsHtml: String.raw`
<article id="entry-dgp-0001" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Α, α (ἄλφα) (τό)</h1>
            <div class="entry-meta"><span>DGP · ordem 1 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">indecl. 1 alfa, 1ª letra do alfabeto grego ♦ num. 2 αʹ = 1 ou 1º 3 ͵α = 1000 ou 1000º. [hebr.]</p>
    </section>
</article>

<article id="entry-dgp-0002" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁ</h1>
            <div class="entry-meta"><span>DGP · ordem 2 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">dór. = ἡ, fem. do art. def. ὁ.</p>
    </section>
</article>

<article id="entry-dgp-0003" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἅ1</h1>
            <div class="entry-meta"><span>DGP · ordem 3 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">dór. = ἥ, fem. do pron. pos. ou do rel. ὅς.</p>
    </section>
</article>

<article id="entry-dgp-0004" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἅ2</h1>
            <div class="entry-meta"><span>DGP · ordem 4 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">pl. n. do pron. pos. ou do rel. ὅς.</p>
    </section>
</article>

<article id="entry-dgp-0005" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ᾇ</h1>
            <div class="entry-meta"><span>DGP · ordem 5 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">dór. = ᾗ, dat. fem. de ὅς.</p>
    </section>
</article>

<article id="entry-dgp-0006" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄ, ἅ, ἇ</h1>
            <div class="entry-meta"><span>DGP · ordem 6 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">e ἆ interj. (de espanto, dor, indignação) ah!</p>
    </section>
</article>

<article id="entry-dgp-0007" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀάατος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 7 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 inviolável 2 invencível. 〈ἀ-, ἀάω〉</p>
    </section>
</article>

<article id="entry-dgp-0008" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀαγής, ής, ές</h1>
            <div class="entry-meta"><span>DGP · ordem 8 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">inquebrável; sólido. 〈ἀ-, ἄγνυμι〉</p>
    </section>
</article>

<article id="entry-dgp-0009" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄαπτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 9 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">que não pode ser tocado ou vencido. 〈ἀ-, ἅπτω〉</p>
    </section>
</article>

<article id="entry-dgp-0010" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄασα, ἀασάμην, ἀάσθην</h1>
            <div class="entry-meta"><span>DGP · ordem 10 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">cf. ἀάω.</p>
    </section>
</article>

<article id="entry-dgp-0011" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀάσχετος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 11 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">ἄσχετος.</p>
    </section>
</article>

<article id="entry-dgp-0012" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀᾶται</h1>
            <div class="entry-meta"><span>DGP · ordem 12 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">3ª sing. pres. méd. de ἀάω.</p>
    </section>
</article>

<article id="entry-dgp-0013" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄατος</h1>
            <div class="entry-meta"><span>DGP · ordem 13 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">e ἆτος, ος, ον insaciável de algo, gen. 〈ἀ-, ἄω〉</p>
    </section>
</article>

<article id="entry-dgp-0014" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀάω</h1>
            <div class="entry-meta"><span>DGP · ordem 14 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(só aor. ἄασα e ἆσα, aor. pas. ἀάσθην; méd. tr. só pres. e aor. ἀασάμην e ἀσάμην, méd. intr. só aor.) at. e méd. 1 agitar o espírito; perturbar; desorientar ♦ méd. 2 estar cego de espírito; cometer um erro por cegueira de espírito: ἀάσατο μέγα θυμῷ <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico; a lista de abreviaturas do DGP o situa no séc. IX ou VIII a.C."><strong>Homero</strong></span> grande foi o desatino em seu íntimo.</p>
    </section>
</article>

<article id="entry-dgp-0015" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβακέω-ῶ</h1>
            <div class="entry-meta"><span>DGP · ordem 15 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(só 3ª pl. aor. ἀβάκησαν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico; a lista de abreviaturas do DGP o situa no séc. IX ou VIII a.C."><strong>Homero</strong></span>) ficar em silêncio. 〈ἀ-, βάζω〉</p>
    </section>
</article>

<article id="entry-dgp-0016" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβάπτιστος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 16 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 que não afunda; que não pode ser submergido 2 que não está embriagado; sóbrio 3 crist. não batizado. 〈ἀ-, βαπτίζω〉</p>
    </section>
</article>

<article id="entry-dgp-0017" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβαρής, ής, ές</h1>
            <div class="entry-meta"><span>DGP · ordem 17 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 sem peso: γῆ ἀ. terra leve, ἀ. ἀήρ ar sem peso 2 leve; fraco; suave: ἀ. χρῆμα matéria sem gravidade 3 que não é ônus; que não é um peso para alguém, dat.: ἐν παντὶ ἀβαρῆ ἐμαυτὸν ὑμῖν ἐτήρησα καὶ τηρήσω <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Novo Testamento" data-tooltip-text="Novo Testamento — corpus citado pelo DGP sob a abreviatura n.t.; a rubrica foi expandida por extenso."><strong>Novo Testamento</strong></span> em tudo evitei e evitarei ser-vos pesado. 〈ἀ-, βάρος〉</p>
    </section>
</article>

<article id="entry-dgp-0018" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβασάνιστος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 18 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 não submetido a tortura ou sofrimento 2 não submetido a exame, a prova (pessoa) 3 não verificado; não examinado; não pesquisado (coisa). 〈ἀ-, βασανίζω〉</p>
    </section>
</article>

<article id="entry-dgp-0019" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβασανίστως</h1>
            <div class="entry-meta"><span>DGP · ordem 19 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. 1 sem tortura; sem sofrimento 2 sem exame acurado; sem fundamento; ao acaso.</p>
    </section>
</article>

<article id="entry-dgp-0020" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβασίλευτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 20 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">sem governo; sem guia; independente. 〈ἀ-, βασιλεύω〉</p>
    </section>
</article>
`
};
