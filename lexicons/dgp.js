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
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0021" data-source="DGP" data-search="ἀβάστακτος, ος, ον intolerável DGP" tabindex="0">
    <td class="table-lemma greek">ἀβάστακτος, ος, ον</td>
    <td>—</td>
    <td>intolerável</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0022" data-source="DGP" data-search="ἁβατάς forma dórica de ἡβητής DGP" tabindex="0">
    <td class="table-lemma greek">ἁβατάς</td>
    <td>—</td>
    <td>forma dórica de ἡβητής</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0023" data-source="DGP" data-search="ἄβατος, ος inacessível; intransponível; inviolável DGP" tabindex="0">
    <td class="table-lemma greek">ἄβατος, ος</td>
    <td>—</td>
    <td>inacessível; intransponível; inviolável</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0024" data-source="DGP" data-search="ἀβαφής, ής, ές não tingido DGP" tabindex="0">
    <td class="table-lemma greek">ἀβαφής, ής, ές</td>
    <td>—</td>
    <td>não tingido</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0025" data-source="DGP" data-search="Ἄβδηρα, ων (τά) Abdera, cidade grega da Trácia DGP" tabindex="0">
    <td class="table-lemma greek">Ἄβδηρα, ων (τά)</td>
    <td>—</td>
    <td>Abdera, cidade grega da Trácia</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0026" data-source="DGP" data-search="Ἀβδηρίτης, ου de Abdera; abderita; tolo DGP" tabindex="0">
    <td class="table-lemma greek">Ἀβδηρίτης, ου</td>
    <td>—</td>
    <td>de Abdera; abderita; tolo</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0027" data-source="DGP" data-search="Ἀβδηριτικός, ή, όν próprio dos abderitas; tolo DGP" tabindex="0">
    <td class="table-lemma greek">Ἀβδηριτικός, ή, όν</td>
    <td>—</td>
    <td>próprio dos abderitas; tolo</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0028" data-source="DGP" data-search="Ἀβδηρόθεν de Abdera DGP" tabindex="0">
    <td class="table-lemma greek">Ἀβδηρόθεν</td>
    <td>—</td>
    <td>de Abdera</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0029" data-source="DGP" data-search="ἀβέβαιος, ος, ον não estável; incerto DGP" tabindex="0">
    <td class="table-lemma greek">ἀβέβαιος, ος, ον</td>
    <td>—</td>
    <td>não estável; incerto</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0030" data-source="DGP" data-search="ἀβέβηλος, ος, ον inviolável; sagrado DGP" tabindex="0">
    <td class="table-lemma greek">ἀβέβηλος, ος, ον</td>
    <td>—</td>
    <td>inviolável; sagrado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0031" data-source="DGP" data-search="ἀβελτερία, ας (ἡ) tolice; imbecilidade; ignorância DGP" tabindex="0">
    <td class="table-lemma greek">ἀβελτερία, ας (ἡ)</td>
    <td>—</td>
    <td>tolice; imbecilidade; ignorância</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0032" data-source="DGP" data-search="ἀβέλτερος, α, ον tolo; simplório; bobo DGP" tabindex="0">
    <td class="table-lemma greek">ἀβέλτερος, α, ον</td>
    <td>—</td>
    <td>tolo; simplório; bobo</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0033" data-source="DGP" data-search="ἀβελτέρως tolamente DGP" tabindex="0">
    <td class="table-lemma greek">ἀβελτέρως</td>
    <td>—</td>
    <td>tolamente</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0034" data-source="DGP" data-search="ἄβιος, ος, ον pobre; insuportável; nômade DGP" tabindex="0">
    <td class="table-lemma greek">ἄβιος, ος, ον</td>
    <td>—</td>
    <td>pobre; insuportável; nômade</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0035" data-source="DGP" data-search="ἀβίοτος, ος, ον ἀβίωτος DGP" tabindex="0">
    <td class="table-lemma greek">ἀβίοτος, ος, ον</td>
    <td>—</td>
    <td>ἀβίωτος</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0036" data-source="DGP" data-search="ἀβίωτος, ος, ον que não se pode viver; indigno de se viver DGP" tabindex="0">
    <td class="table-lemma greek">ἀβίωτος, ος, ον</td>
    <td>—</td>
    <td>que não se pode viver; indigno de se viver</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0037" data-source="DGP" data-search="ἀβιώτως de modo intolerável DGP" tabindex="0">
    <td class="table-lemma greek">ἀβιώτως</td>
    <td>—</td>
    <td>de modo intolerável</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0038" data-source="DGP" data-search="ἀβλάβεια, ας (ἡ) inocuidade; precaução; incolumidade DGP" tabindex="0">
    <td class="table-lemma greek">ἀβλάβεια, ας (ἡ)</td>
    <td>—</td>
    <td>inocuidade; precaução; incolumidade</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0039" data-source="DGP" data-search="ἀβλαβής, ής, ές não prejudicial; são e salvo; intacto DGP" tabindex="0">
    <td class="table-lemma greek">ἀβλαβής, ής, ές</td>
    <td>—</td>
    <td>não prejudicial; são e salvo; intacto</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0040" data-source="DGP" data-search="ἀβλαβῶς sem prejudicar DGP" tabindex="0">
    <td class="table-lemma greek">ἀβλαβῶς</td>
    <td>—</td>
    <td>sem prejudicar</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0041" data-source="DGP" data-search="ἀβλής, ῆτος não disparado; não lançado DGP" tabindex="0">
    <td class="table-lemma greek">ἀβλής, ῆτος</td>
    <td>—</td>
    <td>não disparado; não lançado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0042" data-source="DGP" data-search="ἄβλητος, ος, ον não atingido DGP" tabindex="0">
    <td class="table-lemma greek">ἄβλητος, ος, ον</td>
    <td>—</td>
    <td>não atingido</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0043" data-source="DGP" data-search="ἀβληχρός, ά, όν sem forças; fraco; sem violência DGP" tabindex="0">
    <td class="table-lemma greek">ἀβληχρός, ά, όν</td>
    <td>—</td>
    <td>sem forças; fraco; sem violência</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0044" data-source="DGP" data-search="ἀβοήθητος, ος, ον sem socorro; incurável; inútil DGP" tabindex="0">
    <td class="table-lemma greek">ἀβοήθητος, ος, ον</td>
    <td>—</td>
    <td>sem socorro; incurável; inútil</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0045" data-source="DGP" data-search="ἀβόσχητος, ος, ον sem pastagens DGP" tabindex="0">
    <td class="table-lemma greek">ἀβόσχητος, ος, ον</td>
    <td>—</td>
    <td>sem pastagens</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0046" data-source="DGP" data-search="ἀβουκόλητος, ος, ον negligenciado; que não desperta interesse DGP" tabindex="0">
    <td class="table-lemma greek">ἀβουκόλητος, ος, ον</td>
    <td>—</td>
    <td>negligenciado; que não desperta interesse</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0047" data-source="DGP" data-search="ἀβουλία, ας (ἡ) irreflexão; insensatez; indecisão DGP" tabindex="0">
    <td class="table-lemma greek">ἀβουλία, ας (ἡ)</td>
    <td>—</td>
    <td>irreflexão; insensatez; indecisão</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0048" data-source="DGP" data-search="ἄβουλος, ος, ον irrefletido; insensato; imprudente DGP" tabindex="0">
    <td class="table-lemma greek">ἄβουλος, ος, ον</td>
    <td>—</td>
    <td>irrefletido; insensato; imprudente</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0049" data-source="DGP" data-search="ἀβούλως irrefletidamente DGP" tabindex="0">
    <td class="table-lemma greek">ἀβούλως</td>
    <td>—</td>
    <td>irrefletidamente</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0050" data-source="DGP" data-search="ἄβρεκτος, ος, ον ἄβροχος DGP" tabindex="0">
    <td class="table-lemma greek">ἄβρεκτος, ος, ον</td>
    <td>—</td>
    <td>ἄβροχος</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0051" data-source="DGP" data-search="ἁβροβάτης, ου de andar delicado; efeminado DGP" tabindex="0">
    <td class="table-lemma greek">ἁβροβάτης, ου</td>
    <td>—</td>
    <td>de andar delicado; efeminado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0052" data-source="DGP" data-search="ἁβρόβιος, ος, ον de vida langorosa; efeminado DGP" tabindex="0">
    <td class="table-lemma greek">ἁβρόβιος, ος, ον</td>
    <td>—</td>
    <td>de vida langorosa; efeminado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0053" data-source="DGP" data-search="ἁβρόγοος, ος, ον que geme delicadamente DGP" tabindex="0">
    <td class="table-lemma greek">ἁβρόγοος, ος, ον</td>
    <td>—</td>
    <td>que geme delicadamente</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0054" data-source="DGP" data-search="ἁβροδίαιτα, ης (ἡ) vida efeminada DGP" tabindex="0">
    <td class="table-lemma greek">ἁβροδίαιτα, ης (ἡ)</td>
    <td>—</td>
    <td>vida efeminada</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0055" data-source="DGP" data-search="ἁβροδίαιτος, ος, ον de vida efeminada; vida efeminada DGP" tabindex="0">
    <td class="table-lemma greek">ἁβροδίαιτος, ος, ον</td>
    <td>—</td>
    <td>de vida efeminada; vida efeminada</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0056" data-source="DGP" data-search="ἄβρομος, ος, ον fragoroso ou silencioso; duvidoso DGP" tabindex="0">
    <td class="table-lemma greek">ἄβρομος, ος, ον</td>
    <td>—</td>
    <td>fragoroso ou silencioso; duvidoso</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0057" data-source="DGP" data-search="ἁβροπενθής, ής, ές entregue a uma dor langorosa DGP" tabindex="0">
    <td class="table-lemma greek">ἁβροπενθής, ής, ές</td>
    <td>—</td>
    <td>entregue a uma dor langorosa</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0058" data-source="DGP" data-search="ἁβρόπλουτος, ος, ον rico de viço; viçoso; sedoso DGP" tabindex="0">
    <td class="table-lemma greek">ἁβρόπλουτος, ος, ον</td>
    <td>—</td>
    <td>rico de viço; viçoso; sedoso</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0059" data-source="DGP" data-search="ἁβρός, ά, όν belo; atraente; terno; refinado DGP" tabindex="0">
    <td class="table-lemma greek">ἁβρός, ά, όν</td>
    <td>—</td>
    <td>belo; atraente; terno; refinado</td>
    <td><span class="source-pill">DGP</span></td>
</tr>
<tr class="search-row" data-dictionary="grego" data-target="entry-dgp-0060" data-source="DGP" data-search="ἀβροτάζω perder-se; extraviar-se DGP" tabindex="0">
    <td class="table-lemma greek">ἀβροτάζω</td>
    <td>—</td>
    <td>perder-se; extraviar-se</td>
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

<article id="entry-dgp-0021" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβάστακτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 21 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">intolerável. 〈ἀ-, βαστάζω〉</p>
    </section>
</article>

<article id="entry-dgp-0022" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβατάς</h1>
            <div class="entry-meta"><span>DGP · ordem 22 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">dór. = ἡβητής.</p>
    </section>
</article>

<article id="entry-dgp-0023" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβατος, ος</h1>
            <div class="entry-meta"><span>DGP · ordem 23 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">e η, ον 1 inacessível; intangível (montanha) 2 intransponível (rio); impenetrável (floresta) 3 inviolável; vedado; sagrado (lugar) 4 abandonado; deserto (lugar) 5 intacto; não montado (cavalo); não coberta, virgem (fêmea de animal) 6 tard. que impede de andar; paralisante (gota). 〈ἀ-, βαίνω〉</p>
    </section>
</article>

<article id="entry-dgp-0024" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβαφής, ής, ές</h1>
            <div class="entry-meta"><span>DGP · ordem 24 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">não tingido. 〈ἀ-, βάπτω〉</p>
    </section>
</article>

<article id="entry-dgp-0025" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἄβδηρα, ων (τά)</h1>
            <div class="entry-meta"><span>DGP · ordem 25 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">Abdera, cidade grega da Trácia.</p>
    </section>
</article>

<article id="entry-dgp-0026" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβδηρίτης, ου</h1>
            <div class="entry-meta"><span>DGP · ordem 26 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(masc.) 1 de Abdera; abderita 2 tolo (como um abderita). 〈Ἄβδηρα〉</p>
    </section>
</article>

<article id="entry-dgp-0027" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβδηριτικός, ή, όν</h1>
            <div class="entry-meta"><span>DGP · ordem 27 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 próprio dos abderitas 2 tolo. 〈Ἀβδηρίτης〉</p>
    </section>
</article>

<article id="entry-dgp-0028" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">Ἀβδηρόθεν</h1>
            <div class="entry-meta"><span>DGP · ordem 28 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. de Abdera. 〈Ἄβδηρα〉</p>
    </section>
</article>

<article id="entry-dgp-0029" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβέβαιος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 29 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 não estável; móvel 2 sem fundamento; incerto 3 instável (doença). 〈ἀ-, βέβαιος〉</p>
    </section>
</article>

<article id="entry-dgp-0030" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβέβηλος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 30 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">inviolável; sagrado. 〈ἀ-, βέβηλος〉</p>
    </section>
</article>

<article id="entry-dgp-0031" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβελτερία, ας (ἡ)</h1>
            <div class="entry-meta"><span>DGP · ordem 31 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">tolice; imbecilidade; ignorância. 〈ἀβέλτερος〉</p>
    </section>
</article>

<article id="entry-dgp-0032" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβέλτερος, α, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 32 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">tolo; simplório; bobo.</p>
    </section>
</article>

<article id="entry-dgp-0033" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβελτέρως</h1>
            <div class="entry-meta"><span>DGP · ordem 33 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. tolamente.</p>
    </section>
</article>

<article id="entry-dgp-0034" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβιος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 34 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 sem recursos para viver; pobre 2 que não é vida; insuportável (vida) 3 cujo meio de vida não é a agricultura; nômade. 〈ἀ, βίος〉</p>
    </section>
</article>

<article id="entry-dgp-0035" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβίοτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 35 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">ἀβίωτος.</p>
    </section>
</article>

<article id="entry-dgp-0036" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβίωτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 36 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">que não se pode viver; indigno de se viver: ἀ. βίος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Demóstenes" data-tooltip-text="Demóstenes — orador ateniense; a lista de abreviaturas do DGP o situa no séc. IV a.C."><strong>Demóstenes</strong></span> vida intolerável, ἀβίωτον ζῆν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo; a lista de abreviaturas do DGP o situa no séc. IV a.C."><strong>Platão</strong></span> viver uma vida intolerável, ἀβίωτον ou ἀβίωτα [ἐστί] não vale a pena viver, é impossível viver. 〈ἀ-, βιόω〉</p>
    </section>
</article>

<article id="entry-dgp-0037" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβιώτως</h1>
            <div class="entry-meta"><span>DGP · ordem 37 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. de modo intolerável; ἀ. ἔχειν ou διατεθῆναι ser intolerável.</p>
    </section>
</article>

<article id="entry-dgp-0038" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβλάβεια, ας (ἡ)</h1>
            <div class="entry-meta"><span>DGP · ordem 38 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 inocuidade 2 precaução; cautela 3 au- sência de mal; incolumidade; bom estado. 〈ἀβλαβής〉</p>
    </section>
</article>

<article id="entry-dgp-0039" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβλαβής, ής, ές</h1>
            <div class="entry-meta"><span>DGP · ordem 39 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 que previne ou afasta o mal; não prejudicial; inofensivo 2 que não é atingido pelo mal; são e salvo; intacto: ἀβλαβὴς τοῦ δρᾶσαὶ τε καὶ παθεῖν <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Platão" data-tooltip-text="Platão — filósofo; a lista de abreviaturas do DGP o situa no séc. IV a.C."><strong>Platão</strong></span> preservado de fazer e de sofrer o dano. 〈ἀ-, βλάβος〉</p>
    </section>
</article>

<article id="entry-dgp-0040" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβλαβῶς</h1>
            <div class="entry-meta"><span>DGP · ordem 40 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. sem prejudicar.</p>
    </section>
</article>

<article id="entry-dgp-0041" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβλής, ῆτος</h1>
            <div class="entry-meta"><span>DGP · ordem 41 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(masc., fem.) não disparado; não lançado. 〈ἀ-, βάλλω〉</p>
    </section>
</article>

<article id="entry-dgp-0042" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβλητος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 42 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">não atingido. 〈ἀ-, βάλλω〉</p>
    </section>
</article>

<article id="entry-dgp-0043" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβληχρός, ά, όν</h1>
            <div class="entry-meta"><span>DGP · ordem 43 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 sem forças; fraco: ἀ. τείχεα <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico; a lista de abreviaturas do DGP o situa no séc. IX ou VIII a.C."><strong>Homero</strong></span> muralhas frágeis, ἀ. κῶμα <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Aristófanes" data-tooltip-text="Aristófanes — poeta cômico ateniense; a lista de abreviaturas do DGP o situa no séc. V a.C."><strong>Aristófanes</strong></span> sono leve, ἀ. νόσος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Plutarco" data-tooltip-text="Plutarco — polígrafo; a lista de abreviaturas do DGP o situa nos sécs. I–II d.C."><strong>Plutarco</strong></span> doença branda 2 sem violência: ἀ. θάνατος <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico; a lista de abreviaturas do DGP o situa no séc. IX ou VIII a.C."><strong>Homero</strong></span> doce morte. 〈ἀ- intens., βληχρός〉</p>
    </section>
</article>

<article id="entry-dgp-0044" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβοήθητος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 44 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 sem socorro possível; incurável; irremediável (doença); fatal (veneno) 2 sem socorro; desamparado, necessitado (pessoa) 3 inútil; ineficaz. 〈ἀ-, βοηθέω〉</p>
    </section>
</article>

<article id="entry-dgp-0045" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβόσχητος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 45 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">sem pastagens. 〈ἀ-, βόσχω〉</p>
    </section>
</article>

<article id="entry-dgp-0046" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβουκόλητος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 46 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">que não preocupa; que não desperta interesse; negligenciado. 〈ἀ-, βουκολέω〉</p>
    </section>
</article>

<article id="entry-dgp-0047" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβουλία, ας (ἡ)</h1>
            <div class="entry-meta"><span>DGP · ordem 47 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 irreflexão; insensatez 2 indecisão. 〈ἄβουλος〉</p>
    </section>
</article>

<article id="entry-dgp-0048" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβουλος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 48 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 irrefletido; insensato; imprudente 2 despreocupado de; indiferente a, dat. 3 que não resulta da reflexão; fruto da imprudência 4 absurdo (coisa). 〈ἀ-, βουλή〉</p>
    </section>
</article>

<article id="entry-dgp-0049" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβούλως</h1>
            <div class="entry-meta"><span>DGP · ordem 49 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">adv. irrefletidamente.</p>
    </section>
</article>

<article id="entry-dgp-0050" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβρεκτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 50 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">ἄβροχος.</p>
    </section>
</article>

<article id="entry-dgp-0051" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβροβάτης, ου</h1>
            <div class="entry-meta"><span>DGP · ordem 51 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(masc.) de andar delicado; efeminado. 〈ἁβρός, βαίνω〉</p>
    </section>
</article>

<article id="entry-dgp-0052" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβρόβιος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 52 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">de vida langorosa; efeminado. 〈ἁβρός, βίος〉</p>
    </section>
</article>

<article id="entry-dgp-0053" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβρόγοος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 53 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">que geme delicadamente, como mulher. 〈ἁβρός, γόος〉</p>
    </section>
</article>

<article id="entry-dgp-0054" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβροδίαιτα, ης (ἡ)</h1>
            <div class="entry-meta"><span>DGP · ordem 54 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">vida efeminada. 〈ἁβρός, δίαιτα〉</p>
    </section>
</article>

<article id="entry-dgp-0055" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβροδίαιτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 55 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 de vida efeminada ♦ τὸ ἁβροδίαιτον 2 vida efeminada. 〈ἁβρός, δίαιτα〉</p>
    </section>
</article>

<article id="entry-dgp-0056" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἄβρομος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 56 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">duv. fragoroso; clamoroso; ou sem rumor; silencioso. 〈ἀ- intens. ou priv., βρέμω〉</p>
    </section>
</article>

<article id="entry-dgp-0057" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβροπενθής, ής, ές</h1>
            <div class="entry-meta"><span>DGP · ordem 57 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">entregue a uma dor langorosa. 〈ἁβρός, πένθος〉</p>
    </section>
</article>

<article id="entry-dgp-0058" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβρόπλουτος, ος, ον</h1>
            <div class="entry-meta"><span>DGP · ordem 58 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">rico de viço; viçoso; sedoso (cabelo). 〈ἁβρός, πλοῦτος〉</p>
    </section>
</article>

<article id="entry-dgp-0059" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἁβρός, ά, όν</h1>
            <div class="entry-meta"><span>DGP · ordem 59 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">1 belo; atraente 2 terno; delicado 3 indolente; efeminado 4 fino; refinado; precioso (coisa).</p>
    </section>
</article>

<article id="entry-dgp-0060" class="entry-card" data-dictionary="grego" data-source="DGP" hidden>
    <header class="entry-header">
        <div>
            <h1 class="entry-title greek">ἀβροτάζω</h1>
            <div class="entry-meta"><span>DGP · ordem 60 na letra α</span></div>
        </div>
        <div class="source-tag">DGP</div>
    </header>
    <div class="entry-divider"></div>
    <section class="entry-section">
        <div class="section-title">Definição do DGP</div>
        <p class="entry-text">(só 1ª pl. subj. aor.) perder-se; extraviar-se: μή πως ἀβροτάξομεν ἀλλήλοιιν ἐρχομένω <span class="author-rubric tooltip-trigger" tabindex="0" data-tooltip-type="biblio" data-tooltip-label="Homero" data-tooltip-text="Homero — poeta épico; a lista de abreviaturas do DGP o situa no séc. IX ou VIII a.C."><strong>Homero</strong></span> para que não nos percamos uns dos outros no caminho. 〈ἀμβροτεῖν〉</p>
    </section>
</article>
`
};
