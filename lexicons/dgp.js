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
 *   BDAG, LEH ou qualquer outra fonte.
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

    bibliographicTerms: [],

    rowsHtml: `
`,

    cardsHtml: `
`
};
