"use strict";

/*
 * PEREIRA — Dicionário Grego-Português de Isidro Pereira.
 *
 * Branch de trabalho: chat-gpt-pereira
 *
 * Fonte exclusiva desta frente:
 * - interface pública: https://dicionariogrego.com/
 * - API pública usada pela aplicação web implantada:
 *   https://api.dicionariogrego.com/
 *
 * Regras operacionais:
 * - usar exclusivamente o conteúdo devolvido pelo site/API de dicionariogrego.com;
 * - inserir os verbetes na ordem devolvida pela fonte para a consulta da letra α;
 * - trabalhar de α até o último verbete iniciado por α;
 * - usar lotes de 20 registros lexicográficos, salvo o último lote da letra;
 * - não corrigir silenciosamente grafias, diacríticos, classificações,
 *   flexões, etimologias ou redação da fonte;
 * - não completar nem harmonizar o PEREIRA com BDAG, LEH, DGP ou outra fonte;
 * - commits ordinários desta frente alteram apenas os arquivos próprios do PEREIRA;
 * - a integração com index.html é feita separadamente para reduzir conflitos
 *   com as demais branches lexicográficas.
 *
 * Lote 001: 20 registros, Α, α → Ἀ-βασίλευτος, ον.
 */

window.ScripturaLexicons =
    window.ScripturaLexicons || {};

window.ScripturaLexicons.PEREIRA = {
    source: "PEREIRA",
    searchAnchorId: "pereira-search-anchor",
    entryAnchorId: "pereira-entry-anchor",

    bibliographicTerms: [
        { key: "v.", type: "abbr", text: "veja" },
        { key: "interj.", type: "abbr", text: "interjeição" },
        { key: "fut.", type: "abbr", text: "futuro" },
        { key: "aor.", type: "abbr", text: "aoristo" },
        { key: "pf.", type: "abbr", text: "perfeito" },
        { key: "act.", type: "abbr", text: "ativo" },
        { key: "méd.", type: "abbr", text: "médio; voz média" },
        { key: "tr.", type: "abbr", text: "transitivo" },
        { key: "intr.", type: "abbr", text: "intransitivo" },
        { key: "pass.", type: "abbr", text: "passivo; voz passiva" },
        { key: "fig.", type: "abbr", text: "figurado" },
        { key: "contr.", type: "abbr", text: "contraído" }
    ],

    rowsHtml: String.raw`
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0001" data-source="PEREIRA" data-search="Α, α α alfa; primeira letra do alfabeto grego PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Α, α</td>
    <td>—</td>
    <td>alfa; primeira letra do alfabeto grego</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0002" data-source="PEREIRA" data-search="Ἀ- α prefixo privativo; copulativo; aumentativo PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-</td>
    <td>—</td>
    <td>prefixo privativo; copulativo; aumentativo</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0003" data-source="PEREIRA" data-search="Α α ah!; ai! PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Α</td>
    <td>—</td>
    <td>ah!; ai!</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0004" data-source="PEREIRA" data-search="Ἅ α ah!; oh! PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἅ</td>
    <td>—</td>
    <td>ah!; oh!</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0005" data-source="PEREIRA" data-search="Ἀ-άατος, ον ααατος inviolável; invencível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άατος, ον</td>
    <td>Adjetivo</td>
    <td>inviolável; invencível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0006" data-source="PEREIRA" data-search="Ἀ-αγής, ές ααγης sólido; inquebrável PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-αγής, ές</td>
    <td>Adjetivo</td>
    <td>sólido; inquebrável</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0007" data-source="PEREIRA" data-search="ΑἈνα-τρέχω αανατρεχω correr para cima; lançar-se; crescer com força; retroceder PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">ΑἈνα-τρέχω</td>
    <td>Verbo</td>
    <td>correr para cima; lançar-se; crescer com força; retroceder</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0008" data-source="PEREIRA" data-search="Ἄ-απτος, ον ααπτος intangível; temível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-απτος, ον</td>
    <td>Adjetivo</td>
    <td>intangível; temível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0009" data-source="PEREIRA" data-search="Ἀ-άπτω ααπτω juntar; colar; suspender PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άπτω</td>
    <td>Verbo</td>
    <td>juntar; colar; suspender</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0010" data-source="PEREIRA" data-search="Ἀ-άσχετος, ον αασχετος v. ἄσχετος PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-άσχετος, ον</td>
    <td>—</td>
    <td>v. ἄσχετος</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0011" data-source="PEREIRA" data-search="Ἄ-ατος, ον αατος insanciável de PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄ-ατος, ον</td>
    <td>Adjetivo</td>
    <td>insanciável de</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0012" data-source="PEREIRA" data-search="Ἀάω ααω transtornar o juízo; enlouquecer; enganar PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀάω</td>
    <td>Verbo</td>
    <td>transtornar o juízo; enlouquecer; enganar</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0013" data-source="PEREIRA" data-search="Ἀ-βακέω αβακεω desconhecer; ignorar; não reconhecer PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βακέω</td>
    <td>—</td>
    <td>desconhecer; ignorar; não reconhecer</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0014" data-source="PEREIRA" data-search="Ἀβάκιον, ου αβακιον tabuleta; tabuleiro de damas PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀβάκιον, ου</td>
    <td>Substantivo neutro</td>
    <td>tabuleta; tabuleiro de damas</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0015" data-source="PEREIRA" data-search="Ἀ-βάκχευτος, ον αβακχευτος não inspirado de Baco; privado do furor báquico PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βάκχευτος, ον</td>
    <td>Adjetivo</td>
    <td>não inspirado de Baco; privado do furor báquico</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0016" data-source="PEREIRA" data-search="Ἄβαξ, κος αβαξ ábaco; prancha; placa; mesa PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἄβαξ, κος</td>
    <td>Substantivo masculino</td>
    <td>ábaco; prancha; placa; mesa</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0017" data-source="PEREIRA" data-search="Ἀ-βάπτιστος, ον αβαπτιστος insubmergível PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βάπτιστος, ον</td>
    <td>Adjetivo</td>
    <td>insubmergível</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0018" data-source="PEREIRA" data-search="Ἀ-βαρής, ές αβαρης que não pesa; que não molesta PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βαρής, ές</td>
    <td>Adjetivo</td>
    <td>que não pesa; que não molesta</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0019" data-source="PEREIRA" data-search="Ἀ-βασάνιστος, ον αβασανιστος não provado; não examinado; não investigado PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βασάνιστος, ον</td>
    <td>Adjetivo</td>
    <td>não provado; não examinado; não investigado</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-pereira-0020" data-source="PEREIRA" data-search="Ἀ-βασίλευτος, ον αβασιλευτος sem rei; independente PEREIRA Isidro Pereira" tabindex="0">
    <td class="table-lemma greek">Ἀ-βασίλευτος, ον</td>
    <td>Adjetivo</td>
    <td>sem rei; independente</td>
    <td><span class="source-pill">PEREIRA</span></td>
</tr>
`,

    cardsHtml: String.raw`
<article id="entry-pereira-0001" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Α, α</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 1 na letra α · ID 29573</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">alfa, primeira letra do alfabeto grego; como numerala' =1, x =1.000</p>
    </section>
</article>

<article id="entry-pereira-0002" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 2 na letra α · ID 29574</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">prefixo.privativo: ἄ-θυμος, | copulativo: ἄ-λοχος | aumentativo: ἀ-τενής</p>
    </section>
</article>

<article id="entry-pereira-0003" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Α</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 3 na letra α · ID 29575</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">interj. que designa admiração, dor, etc., ah! ai!</p>
    </section>
</article>

<article id="entry-pereira-0004" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἅ</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 4 na letra α · ID 29576</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">interj. que designa alegria, ah! oh!</p>
    </section>
</article>

<article id="entry-pereira-0005" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άατος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 5 na letra α · ID 29577</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἀάω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">inviolável | invencível</p>
    </section>
</article>

<article id="entry-pereira-0006" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-αγής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 6 na letra α · ID 29578</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἄγνυμι)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sólido, inquebrável</p>
    </section>
</article>

<article id="entry-pereira-0007" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ΑἈνα-τρέχω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 7 na letra α · ID 31094</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀναδραμοῦμαι, aor. 2 ἀνέδραμον, pf. ἀναδεδράμηχκα)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">correr para cima, lançar-se à. | saltar || crescer com força || retirar-se rapidamente, retroceder retratar (o dito) emendar</p>
    </section>
</article>

<article id="entry-pereira-0008" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-απτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 8 na letra α · ID 29579</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἅπτω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">intangível, temível</p>
    </section>
</article>

<article id="entry-pereira-0009" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άπτω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 9 na letra α · ID 34125</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(fut. ἀφάψω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">juntar, colar | suspender</p>
    </section>
</article>

<article id="entry-pereira-0010" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-άσχετος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 10 na letra α · ID 29580</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">v. ἄσχετος</p>
    </section>
</article>

<article id="entry-pereira-0011" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄ-ατος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 11 na letra α · ID 29581</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, ἄω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">insanciável de</p>
    </section>
</article>

<article id="entry-pereira-0012" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀάω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 12 na letra α · ID 29582</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Inflecção</div>
        <p class="entry-text greek">(aor. 1. ἄασα, contr. ἄσα, aor. 1. méd. ἀασάμην, aor. 1. pass. ἀάσθην)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">I act. transtornar o juízo, enlouquecer, dar vertigens || causar uma desgraça. II méd. | tr. perturbar o juízo, extraviar, enganar || intr. cometer uma falta por perturbação. III pass. | ser enganado, enganar-se</p>
    </section>
</article>

<article id="entry-pereira-0013" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βακέω</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 13 na letra α · ID 29583</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">desconhecer, ignorar, não reconhecer</p>
    </section>
</article>

<article id="entry-pereira-0014" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβάκιον, ου</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 14 na letra α · ID 29584</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">tabuleta || tabuleiro de damas</p>
    </section>
</article>

<article id="entry-pereira-0015" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βάκχευτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 15 na letra α · ID 29585</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não inspirado de Baco, privado do furor báquico</p>
    </section>
</article>

<article id="entry-pereira-0016" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβαξ, κος</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 16 na letra α · ID 29586</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">ábaco, prancha, placa, mesa</p>
    </section>
</article>

<article id="entry-pereira-0017" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βάπτιστος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 17 na letra α · ID 29587</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βαπτίζω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">insubmergível</p>
    </section>
</article>

<article id="entry-pereira-0018" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βαρής, ές</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 18 na letra α · ID 29588</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">que não pesa | fig. que não molesta</p>
    </section>
</article>

<article id="entry-pereira-0019" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βασάνιστος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 19 na letra α · ID 29589</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βασανίζω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">não provado, sem sofrimento || não averiguado por meio de tortura, não examinado, não investigado</p>
    </section>
</article>

<article id="entry-pereira-0020" class="entry-card" data-dictionary="grego" data-source="PEREIRA" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀ-βασίλευτος, ον</h1>
            <div class="entry-meta"><span>PEREIRA · ordem 20 na letra α · ID 29590</span></div>
        </div>
        <div class="source-tag">PEREIRA</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Etimologia</div>
        <p class="entry-text greek">(ἀ, βασιλεύω)</p>
    </section>
    <section class="entry-section">
        <div class="section-title">Definição do PEREIRA</div>
        <p class="entry-text">sem rei | independente</p>
    </section>
</article>
`
};
