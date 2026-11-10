/* UBS5 — Primeira Epístola de Pedro, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações mantidas nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πρεσβυτέρους τοὺς ἐν ὑμῖν παρακαλῶ ὁ συμπρεσβύτερος καὶ μάρτυς τῶν τοῦ Χριστοῦ παθημάτων, ὁ καὶ τῆς μελλούσης ἀποκαλύπτεσθαι δόξης κοινωνός·",
    "2": "ποιμάνατε τὸ ἐν ὑμῖν ποίμνιον τοῦ θεοῦ ἐπισκοποῦντες μὴ ἀναγκαστῶς ἀλλ᾽ ἑκουσίως κατὰ θεόν, μηδὲ αἰσχροκερδῶς ἀλλὰ προθύμως,",
    "3": "μηδ᾽ ὡς κατακυριεύοντες τῶν κλήρων ἀλλὰ τύποι γινόμενοι τοῦ ποιμνίου·",
    "4": "καὶ φανερωθέντος τοῦ ἀρχιποίμενος κομιεῖσθε τὸν ἀμαράντινον τῆς δόξης στέφανον.",
    "5": "Ὁμοίως, νεώτεροι, ὑποτάγητε πρεσβυτέροις· πάντες δὲ ἀλλήλοις τὴν ταπεινοφροσύνην ἐγκομβώσασθε, ὅτι\nὉ θεὸς ὑπερηφάνοις ἀντιτάσσεται,\nταπεινοῖς δὲ δίδωσιν χάριν.",
    "6": "Ταπεινώθητε οὖν ὑπὸ τὴν κραταιὰν χεῖρα τοῦ θεοῦ, ἵνα ὑμᾶς ὑψώσῃ ἐν καιρῷ,",
    "7": "πᾶσαν τὴν μέριμναν ὑμῶν ἐπιρίψαντες ἐπ᾽ αὐτόν, ὅτι αὐτῷ μέλει περὶ ὑμῶν.",
    "8": "Νήψατε, γρηγορήσατε. ὁ ἀντίδικος ὑμῶν διάβολος ὡς λέων ὠρυόμενος περιπατεῖ ζητῶν τινα καταπιεῖν·",
    "9": "ᾧ ἀντίστητε στερεοὶ τῇ πίστει εἰδότες τὰ αὐτὰ τῶν παθημάτων τῇ ἐν κόσμῳ ὑμῶν ἀδελφότητι ἐπιτελεῖσθαι.",
    "10": "Ὁ δὲ θεὸς πάσης χάριτος, ὁ καλέσας ὑμᾶς εἰς τὴν αἰώνιον αὐτοῦ δόξαν ἐν Χριστῷ ὀλίγον παθόντας αὐτὸς καταρτίσει, στηρίξει, σθενώσει, θεμελιώσει.",
    "11": "αὐτῷ τὸ κράτος εἰς τοὺς αἰῶνας, ἀμήν.",
    "12": "Διὰ Σιλουανοῦ ὑμῖν τοῦ πιστοῦ ἀδελφοῦ, ὡς λογίζομαι, δι᾽ ὀλίγων ἔγραψα παρακαλῶν καὶ ἐπιμαρτυρῶν ταύτην εἶναι ἀληθῆ χάριν τοῦ θεοῦ εἰς ἣν στῆτε.",
    "13": "Ἀσπάζεται ὑμᾶς ἡ ἐν Βαβυλῶνι συνεκλεκτὴ καὶ Μᾶρκος ὁ υἱός μου.",
    "14": "ἀσπάσασθε ἀλλήλους ἐν φιλήματι ἀγάπης. εἰρήνη ὑμῖν πᾶσιν τοῖς ἐν Χριστῷ."
};
    const paragraphEnds = [4,7,11,14];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Apascentando o rebanho de Deus",
        "sourceTitle": "Tending the Flock of God"
    },
    {
        "beforeVerse": 12,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1PE"] = window.ScripturaScriptureTexts.UBS5["1PE"] || {};
    window.ScripturaScriptureTexts.UBS5["1PE"][5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"][5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"] = window.ScripturaScriptureHeadings.UBS5["1PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"][5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"][5] = unnumberedPassages;
})();
