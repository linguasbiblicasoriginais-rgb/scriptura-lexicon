/* UBS5 — Segunda Epístola de Paulo aos Coríntios 4.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Διὰ τοῦτο, ἔχοντες τὴν διακονίαν ταύτην καθὼς ἠλεήθημεν, οὐκ ἐγκακοῦμεν",
    "2": "ἀλλ᾽ ἀπειπάμεθα τὰ κρυπτὰ τῆς αἰσχύνης, μὴ περιπατοῦντες ἐν πανουργίᾳ μηδὲ δολοῦντες τὸν λόγον τοῦ θεοῦ ἀλλὰ τῇ φανερώσει τῆς ἀληθείας συνιστάνοντες ἑαυτοὺς πρὸς πᾶσαν συνείδησιν ἀνθρώπων ἐνώπιον τοῦ θεοῦ.",
    "3": "εἰ δὲ καὶ ἔστιν κεκαλυμμένον τὸ εὐαγγέλιον ἡμῶν, ἐν τοῖς ἀπολλυμένοις ἐστὶν κεκαλυμμένον,",
    "4": "ἐν οἷς ὁ θεὸς τοῦ αἰῶνος τούτου ἐτύφλωσεν τὰ νοήματα τῶν ἀπίστων εἰς τὸ μὴ αὐγάσαι τὸν φωτισμὸν τοῦ εὐαγγελίου τῆς δόξης τοῦ Χριστοῦ, ὅς ἐστιν εἰκὼν τοῦ θεοῦ.",
    "5": "οὐ γὰρ ἑαυτοὺς κηρύσσομεν ἀλλ᾽ Ἰησοῦν Χριστὸν κύριον, ἑαυτοὺς δὲ δούλους ὑμῶν διὰ Ἰησοῦν.",
    "6": "ὅτι ὁ θεὸς ὁ εἰπών, Ἐκ σκότους φῶς λάμψει, ὃς ἔλαμψεν ἐν ταῖς καρδίαις ἡμῶν πρὸς φωτισμὸν τῆς γνώσεως τῆς δόξης τοῦ θεοῦ ἐν προσώπῳ [Ἰησοῦ] Χριστοῦ.",
    "7": "Ἔχομεν δὲ τὸν θησαυρὸν τοῦτον ἐν ὀστρακίνοις σκεύεσιν, ἵνα ἡ ὑπερβολὴ τῆς δυνάμεως ᾖ τοῦ θεοῦ καὶ μὴ ἐξ ἡμῶν·",
    "8": "ἐν παντὶ θλιβόμενοι ἀλλ᾽ οὐ στενοχωρούμενοι, ἀπορούμενοι ἀλλ᾽ οὐκ ἐξαπορούμενοι,",
    "9": "διωκόμενοι ἀλλ᾽ οὐκ ἐγκαταλειπόμενοι, καταβαλλόμενοι ἀλλ᾽ οὐκ ἀπολλύμενοι,",
    "10": "πάντοτε τὴν νέκρωσιν τοῦ Ἰησοῦ ἐν τῷ σώματι περιφέροντες, ἵνα καὶ ἡ ζωὴ τοῦ Ἰησοῦ ἐν τῷ σώματι ἡμῶν φανερωθῇ.",
    "11": "ἀεὶ γὰρ ἡμεῖς οἱ ζῶντες εἰς θάνατον παραδιδόμεθα διὰ Ἰησοῦν, ἵνα καὶ ἡ ζωὴ τοῦ Ἰησοῦ φανερωθῇ ἐν τῇ θνητῇ σαρκὶ ἡμῶν.",
    "12": "ὥστε ὁ θάνατος ἐν ἡμῖν ἐνεργεῖται, ἡ δὲ ζωὴ ἐν ὑμῖν.",
    "13": "ἔχοντες δὲ τὸ αὐτὸ πνεῦμα τῆς πίστεως κατὰ τὸ γεγραμμένον, Ἐπίστευσα, διὸ ἐλάλησα, καὶ ἡμεῖς πιστεύομεν, διὸ καὶ λαλοῦμεν,",
    "14": "εἰδότες ὅτι ὁ ἐγείρας τὸν κύριον Ἰησοῦν καὶ ἡμᾶς σὺν Ἰησοῦ ἐγερεῖ καὶ παραστήσει σὺν ὑμῖν.",
    "15": "τὰ γὰρ πάντα δι᾽ ὑμᾶς, ἵνα ἡ χάρις πλεονάσασα διὰ τῶν πλειόνων τὴν εὐχαριστίαν περισσεύσῃ εἰς τὴν δόξαν τοῦ θεοῦ.",
    "16": "Διὸ οὐκ ἐγκακοῦμεν, ἀλλ᾽ εἰ καὶ ὁ ἔξω ἡμῶν ἄνθρωπος διαφθείρεται, ἀλλ᾽ ὁ ἔσω ἡμῶν ἀνακαινοῦται ἡμέρᾳ καὶ ἡμέρᾳ.",
    "17": "τὸ γὰρ παραυτίκα ἐλαφρὸν τῆς θλίψεως ἡμῶν καθ᾽ ὑπερβολὴν εἰς ὑπερβολὴν αἰώνιον βάρος δόξης κατεργάζεται ἡμῖν,",
    "18": "μὴ σκοπούντων ἡμῶν τὰ βλεπόμενα ἀλλὰ τὰ μὴ βλεπόμενα· τὰ γὰρ βλεπόμενα πρόσκαιρα, τὰ δὲ μὴ βλεπόμενα αἰώνια."
};
    const paragraphEnds = [6,15,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O tesouro em vasos de barro",
        "sourceTitle": "Treasure in Earthen Vessels"
    },
    {
        "beforeVerse": 16,
        "title": "Vivendo pela fé",
        "sourceTitle": "Living by Faith"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][4] = unnumberedPassages;
})();
