/* UBS5 — Primeira Epístola de Pedro, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações mantidas nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Χριστοῦ οὖν παθόντος σαρκὶ καὶ ὑμεῖς τὴν αὐτὴν ἔννοιαν ὁπλίσασθε, ὅτι ὁ παθὼν σαρκὶ πέπαυται ἁμαρτίας",
    "2": "εἰς τὸ μηκέτι ἀνθρώπων ἐπιθυμίαις ἀλλὰ θελήματι θεοῦ τὸν ἐπίλοιπον ἐν σαρκὶ βιῶσαι χρόνον.",
    "3": "ἀρκετὸς γὰρ ὁ παρεληλυθὼς χρόνος τὸ βούλημα τῶν ἐθνῶν κατειργάσθαι πεπορευμένους ἐν ἀσελγείαις, ἐπιθυμίαις, οἰνοφλυγίαις, κώμοις, πότοις καὶ ἀθεμίτοις εἰδωλολατρίαις.",
    "4": "ἐν ᾧ ξενίζονται μὴ συντρεχόντων ὑμῶν εἰς τὴν αὐτὴν τῆς ἀσωτίας ἀνάχυσιν βλασφημοῦντες,",
    "5": "οἳ ἀποδώσουσιν λόγον τῷ ἑτοίμως ἔχοντι κρῖναι ζῶντας καὶ νεκρούς.",
    "6": "εἰς τοῦτο γὰρ καὶ νεκροῖς εὐηγγελίσθη, ἵνα κριθῶσιν μὲν κατὰ ἀνθρώπους σαρκί, ζῶσιν δὲ κατὰ θεὸν πνεύματι.",
    "7": "Πάντων δὲ τὸ τέλος ἤγγικεν. σωφρονήσατε οὖν καὶ νήψατε εἰς προσευχὰς",
    "8": "πρὸ πάντων τὴν εἰς ἑαυτοὺς ἀγάπην ἐκτενῆ ἔχοντες, ὅτι ἀγάπη καλύπτει πλῆθος ἁμαρτιῶν,",
    "9": "φιλόξενοι εἰς ἀλλήλους ἄνευ γογγυσμοῦ,",
    "10": "ἕκαστος καθὼς ἔλαβεν χάρισμα εἰς ἑαυτοὺς αὐτὸ διακονοῦντες ὡς καλοὶ οἰκονόμοι ποικίλης χάριτος θεοῦ.",
    "11": "εἴ τις λαλεῖ, ὡς λόγια θεοῦ· εἴ τις διακονεῖ, ὡς ἐξ ἰσχύος ἧς χορηγεῖ ὁ θεός, ἵνα ἐν πᾶσιν δοξάζηται ὁ θεὸς διὰ Ἰησοῦ Χριστοῦ ᾧ ἐστιν ἡ δόξα καὶ τὸ κράτος εἰς τοὺς αἰῶνας τῶν αἰώνων, ἀμήν.",
    "12": "Ἀγαπητοί, μὴ ξενίζεσθε τῇ ἐν ὑμῖν πυρώσει πρὸς πειρασμὸν ὑμῖν γινομένῃ ὡς ξένου ὑμῖν συμβαίνοντος,",
    "13": "ἀλλὰ καθὸ κοινωνεῖτε τοῖς τοῦ Χριστοῦ παθήμασιν, χαίρετε, ἵνα καὶ ἐν τῇ ἀποκαλύψει τῆς δόξης αὐτοῦ χαρῆτε ἀγαλλιώμενοι.",
    "14": "εἰ ὀνειδίζεσθε ἐν ὀνόματι Χριστοῦ, μακάριοι, ὅτι τὸ τῆς δόξης καὶ τὸ τοῦ θεοῦ πνεῦμα ἐφ᾽ ὑμᾶς ἀναπαύεται.",
    "15": "μὴ γάρ τις ὑμῶν πασχέτω ὡς φονεὺς ἢ κλέπτης ἢ κακοποιὸς ἢ ὡς ἀλλοτριεπίσκοπος·",
    "16": "εἰ δὲ ὡς Χριστιανός, μὴ αἰσχυνέσθω, δοξαζέτω δὲ τὸν θεὸν ἐν τῷ μέρει τούτῳ.",
    "17": "ὅτι ὁ καιρὸς τοῦ ἄρξασθαι τὸ κρίμα ἀπὸ τοῦ οἴκου τοῦ θεοῦ· εἰ δὲ πρῶτον ἀφ᾽ ἡμῶν, τί τὸ τέλος τῶν ἀπειθούντων τῷ τοῦ θεοῦ εὐαγγελίῳ;",
    "18": "καὶ εἰ ὁ δίκαιος μόλις σῴζεται,\nὁ ἀσεβὴς καὶ ἁμαρτωλὸς ποῦ φανεῖται;",
    "19": "ὥστε καὶ οἱ πάσχοντες κατὰ τὸ θέλημα τοῦ θεοῦ πιστῷ κτίστῃ παρατιθέσθωσαν τὰς ψυχὰς αὐτῶν ἐν ἀγαθοποιΐᾳ."
};
    const paragraphEnds = [6,11,17,19];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Bons despenseiros da graça de Deus",
        "sourceTitle": "Good Stewards of God’s Grace"
    },
    {
        "beforeVerse": 12,
        "title": "Sofrer como cristão",
        "sourceTitle": "Suffering as a Christian"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1PE"] = window.ScripturaScriptureTexts.UBS5["1PE"] || {};
    window.ScripturaScriptureTexts.UBS5["1PE"][4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"][4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"] = window.ScripturaScriptureHeadings.UBS5["1PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"][4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"][4] = unnumberedPassages;
})();
