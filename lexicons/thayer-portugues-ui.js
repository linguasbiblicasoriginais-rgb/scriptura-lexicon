"use strict";
/**
 * THAYER — apresentação em português.
 * O inglês do OCR é material documental da camada Fonte, não tradução.
 * O conteúdo original permanece inalterado nos arquivos source-facsimile-*.json.
 * Este módulo atua somente sobre os HTMLs de THAYER e THAYER_ALPHA.
 * NÃO afirma que traduções analíticas de trabalho tenham sido homologadas
 * como traduções integrais.
 *
 * Carregar DEPOIS de todos os módulos THAYER e ANTES de script.js.
 */
(function () {
    const lexicons = window.ScripturaLexicons;
    if (!lexicons || !lexicons.THAYER || !lexicons.THAYER_ALPHA) {
        throw new Error("THAYER: não é possível confirmar ambas as fontes para filtro de idioma.");
    }
    const ocrParagraph = /<p\b(?=[^>]*\bclass="entry-text")(?=[^>]*\bstyle="white-space:\s*pre-wrap")[^>]*>[\s\S]*?<\/p>/gi;
    let paragraphsRemoved = 0;
    let cardsChecked = 0;
    for (const name of ["THAYER_ALPHA", "THAYER"]) {
        const module = lexicons[name];
        if (typeof module.cardsHtml !== "string") {
            throw new Error("THAYER: HTML de cartões ausente no módulo " + name);
        }
        cardsChecked += (module.cardsHtml.match(/<article\b[^>]*\bclass="entry-card"/g) || []).length;
        let found = 0;
        const converted = module.cardsHtml.replace(ocrParagraph, function () {
            found++;
            return "";
        });
        paragraphsRemoved += found;
        if (/<p\b[^>]*style="white-space:\s*pre-wrap"/i.test(converted)) {
            throw new Error("THAYER: permaneceu um bloco de OCR inglês não removido em " + name);
        }
        module.cardsHtml = converted;
    }
    if (cardsChecked < 500 || paragraphsRemoved < 443) {
        throw new Error("THAYER: inventário inferior à linha de base já verificada (500 cartões e 443 blocos de OCR); encontrado " + cardsChecked + " e " + paragraphsRemoved);
    }
    lexicons.THAYER_LANGUAGE_CHECK = Object.freeze({
        dictionary: "THAYER",
        cardsChecked: cardsChecked,
        englishOcrParagraphsRemoved: paragraphsRemoved,
        originalEnglishPreservedInSourceJson: true,
        fullTranslationsCertified: false,
        status: "VISUALIZACAO_PORTUGUESA_OCR_OCULTO; COLACAO_FILOLÓGICA_INTEGRAL_PENDENTE"
    });
})();
