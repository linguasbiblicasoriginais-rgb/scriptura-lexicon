/* UBS5 — Epístola aos Hebreus, capítulo 13.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἡ φιλαδελφία μενέτω.",
    "2": "τῆς φιλοξενίας μὴ ἐπιλανθάνεσθε, διὰ ταύτης γὰρ ἔλαθόν τινες ξενίσαντες ἀγγέλους.",
    "3": "μιμνῄσκεσθε τῶν δεσμίων ὡς συνδεδεμένοι, τῶν κακουχουμένων ὡς καὶ αὐτοὶ ὄντες ἐν σώματι.",
    "4": "Τίμιος ὁ γάμος ἐν πᾶσιν καὶ ἡ κοίτη ἀμίαντος, πόρνους γὰρ καὶ μοιχοὺς κρινεῖ ὁ θεός.",
    "5": "Ἀφιλάργυρος ὁ τρόπος, ἀρκούμενοι τοῖς παροῦσιν. αὐτὸς γὰρ εἴρηκεν, Οὐ μή σε ἀνῶ οὐδ᾽ οὐ μή σε ἐγκαταλίπω,",
    "6": "ὥστε θαρροῦντας ἡμᾶς λέγειν,\nΚύριος ἐμοὶ βοηθός,\n[καὶ] οὐ φοβηθήσομαι,\nτί ποιήσει μοι ἄνθρωπος;",
    "7": "Μνημονεύετε τῶν ἡγουμένων ὑμῶν, οἵτινες ἐλάλησαν ὑμῖν τὸν λόγον τοῦ θεοῦ, ὧν ἀναθεωροῦντες τὴν ἔκβασιν τῆς ἀναστροφῆς μιμεῖσθε τὴν πίστιν.",
    "8": "Ἰησοῦς Χριστὸς ἐχθὲς καὶ σήμερον ὁ αὐτὸς καὶ εἰς τοὺς αἰῶνας.",
    "9": "διδαχαῖς ποικίλαις καὶ ξέναις μὴ παραφέρεσθε· καλὸν γὰρ χάριτι βεβαιοῦσθαι τὴν καρδίαν, οὐ βρώμασιν ἐν οἷς οὐκ ὠφελήθησαν οἱ περιπατοῦντες.",
    "10": "ἔχομεν θυσιαστήριον ἐξ οὗ φαγεῖν οὐκ ἔχουσιν ἐξουσίαν οἱ τῇ σκηνῇ λατρεύοντες.",
    "11": "ὧν γὰρ εἰσφέρεται ζῴων τὸ αἷμα περὶ ἁμαρτίας εἰς τὰ ἅγια διὰ τοῦ ἀρχιερέως, τούτων τὰ σώματα κατακαίεται ἔξω τῆς παρεμβολῆς.",
    "12": "διὸ καὶ Ἰησοῦς, ἵνα ἁγιάσῃ διὰ τοῦ ἰδίου αἵματος τὸν λαόν, ἔξω τῆς πύλης ἔπαθεν.",
    "13": "τοίνυν ἐξερχώμεθα πρὸς αὐτὸν ἔξω τῆς παρεμβολῆς τὸν ὀνειδισμὸν αὐτοῦ φέροντες·",
    "14": "οὐ γὰρ ἔχομεν ὧδε μένουσαν πόλιν ἀλλὰ τὴν μέλλουσαν ἐπιζητοῦμεν.",
    "15": "δι᾽ αὐτοῦ [οὖν] ἀναφέρωμεν θυσίαν αἰνέσεως διὰ παντὸς τῷ θεῷ, τοῦτ᾽ ἔστιν καρπὸν χειλέων ὁμολογούντων τῷ ὀνόματι αὐτοῦ.",
    "16": "τῆς δὲ εὐποιΐας καὶ κοινωνίας μὴ ἐπιλανθάνεσθε· τοιαύταις γὰρ θυσίαις εὐαρεστεῖται ὁ θεός.",
    "17": "Πείθεσθε τοῖς ἡγουμένοις ὑμῶν καὶ ὑπείκετε, αὐτοὶ γὰρ ἀγρυπνοῦσιν ὑπὲρ τῶν ψυχῶν ὑμῶν ὡς λόγον ἀποδώσοντες, ἵνα μετὰ χαρᾶς τοῦτο ποιῶσιν καὶ μὴ στενάζοντες· ἀλυσιτελὲς γὰρ ὑμῖν τοῦτο.",
    "18": "Προσεύχεσθε περὶ ἡμῶν· πειθόμεθα γὰρ ὅτι καλὴν συνείδησιν ἔχομεν, ἐν πᾶσιν καλῶς θέλοντες ἀναστρέφεσθαι.",
    "19": "περισσοτέρως δὲ παρακαλῶ τοῦτο ποιῆσαι, ἵνα τάχιον ἀποκατασταθῶ ὑμῖν.",
    "20": "Ὁ δὲ θεὸς τῆς εἰρήνης, ὁ ἀναγαγὼν ἐκ νεκρῶν τὸν ποιμένα τῶν προβάτων τὸν μέγαν ἐν αἵματι διαθήκης αἰωνίου, τὸν κύριον ἡμῶν Ἰησοῦν,",
    "21": "καταρτίσαι ὑμᾶς ἐν παντὶ ἀγαθῷ εἰς τὸ ποιῆσαι τὸ θέλημα αὐτοῦ, ποιῶν ἐν ἡμῖν τὸ εὐάρεστον ἐνώπιον αὐτοῦ διὰ Ἰησοῦ Χριστοῦ, ᾧ ἡ δόξα εἰς τοὺς αἰῶνας [τῶν αἰώνων], ἀμήν.",
    "22": "Παρακαλῶ δὲ ὑμᾶς, ἀδελφοί, ἀνέχεσθε τοῦ λόγου τῆς παρακλήσεως, καὶ γὰρ διὰ βραχέων ἐπέστειλα ὑμῖν.",
    "23": "Γινώσκετε τὸν ἀδελφὸν ἡμῶν Τιμόθεον ἀπολελυμένον, μεθ᾽ οὗ ἐὰν τάχιον ἔρχηται ὄψομαι ὑμᾶς.",
    "24": "Ἀσπάσασθε πάντας τοὺς ἡγουμένους ὑμῶν καὶ πάντας τοὺς ἁγίους. ἀσπάζονται ὑμᾶς οἱ ἀπὸ τῆς Ἰταλίας.",
    "25": "ἡ χάρις μετὰ πάντων ὑμῶν."
};
    const paragraphEnds = [16,17,19,21,23,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O serviço agradável a Deus",
        "sourceTitle": "Service Well-Pleasing to God"
    },
    {
        "beforeVerse": 20,
        "title": "Bênção e saudações finais",
        "sourceTitle": "Benediction and Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[13] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[13] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[13] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[13] = unnumberedPassages;
})();
