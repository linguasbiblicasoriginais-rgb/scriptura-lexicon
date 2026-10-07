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
 * - base de dados de referência: DDGP-3x-files/ddgp3x-copia_8nov_22.sql
 *
 * Regra operacional:
 * - inserir os verbetes em ordem da fonte;
 * - trabalhar inicialmente de α até o último verbete iniciado por α;
 * - usar lotes de 20 registros lexicográficos, salvo o último lote da letra;
 * - commits ordinários do DGP devem alterar somente este arquivo e,
 *   quando necessário, o manifesto de progresso do DGP;
 * - não editar lexicons/bdag.js nem lexicons/leh.js durante o trabalho DGP;
 * - não completar, corrigir ou harmonizar silenciosamente o DGP com
 *   BDAG, LEH ou qualquer outra fonte;
 * - abreviaturas gramaticais e editoriais do DGP devem receber popup
 *   explicativo sempre que sua expansão for segura;
 * - abreviaturas de autores, obras e corpora não permanecem abreviadas
 *   no texto exibido: devem ser expandidas em forma de rubrica e receber
 *   popup com minibiografia ou descrição breve, fundamentada prioritariamente
 *   na própria lista de abreviaturas do DGP;
 * - em caso de abreviatura autoral ou bibliográfica ambígua, não expandir
 *   por conjectura: preservar a forma da fonte até identificação segura.
 *
 * As abreviaturas específicas do DGP devem ser registradas em
 * bibliographicTerms somente quando sua expansão puder ser estabelecida
 * com segurança a partir da própria fonte ou de documentação verificável.
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
        { key: "tard.", type: "abbr", text: "tardio" }
    ],

    rowsHtml: `
`,

    cardsHtml: `
`
};
