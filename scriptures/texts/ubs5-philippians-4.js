/* UBS5 — Epístola de Paulo aos Filipenses, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὥστε, ἀδελφοί μου ἀγαπητοὶ καὶ ἐπιπόθητοι, χαρὰ καὶ στέφανός μου, οὕτως στήκετε ἐν κυρίῳ, ἀγαπητοί.",
    "2": "Εὐοδίαν παρακαλῶ καὶ Συντύχην παρακαλῶ τὸ αὐτὸ φρονεῖν ἐν κυρίῳ.",
    "3": "ναὶ ἐρωτῶ καὶ σέ, γνήσιε σύζυγε, συλλαμβάνου αὐταῖς, αἵτινες ἐν τῷ εὐαγγελίῳ συνήθλησάν μοι μετὰ καὶ Κλήμεντος καὶ τῶν λοιπῶν συνεργῶν μου, ὧν τὰ ὀνόματα ἐν βίβλῳ ζωῆς.",
    "4": "Χαίρετε ἐν κυρίῳ πάντοτε· πάλιν ἐρῶ, χαίρετε.",
    "5": "τὸ ἐπιεικὲς ὑμῶν γνωσθήτω πᾶσιν ἀνθρώποις. ὁ κύριος ἐγγύς.",
    "6": "μηδὲν μεριμνᾶτε, ἀλλ᾽ ἐν παντὶ τῇ προσευχῇ καὶ τῇ δεήσει μετὰ εὐχαριστίας τὰ αἰτήματα ὑμῶν γνωριζέσθω πρὸς τὸν θεόν.",
    "7": "καὶ ἡ εἰρήνη τοῦ θεοῦ ἡ ὑπερέχουσα πάντα νοῦν φρουρήσει τὰς καρδίας ὑμῶν καὶ τὰ νοήματα ὑμῶν ἐν Χριστῷ Ἰησοῦ.",
    "8": "Τὸ λοιπόν, ἀδελφοί, ὅσα ἐστὶν ἀληθῆ, ὅσα σεμνά, ὅσα δίκαια, ὅσα ἁγνά, ὅσα προσφιλῆ, ὅσα εὔφημα, εἴ τις ἀρετὴ καὶ εἴ τις ἔπαινος, ταῦτα λογίζεσθε·",
    "9": "ἃ καὶ ἐμάθετε καὶ παρελάβετε καὶ ἠκούσατε καὶ εἴδετε ἐν ἐμοί, ταῦτα πράσσετε· καὶ ὁ θεὸς τῆς εἰρήνης ἔσται μεθ᾽ ὑμῶν.",
    "10": "Ἐχάρην δὲ ἐν κυρίῳ μεγάλως ὅτι ἤδη ποτὲ ἀνεθάλετε τὸ ὑπὲρ ἐμοῦ φρονεῖν, ἐφ᾽ ᾧ καὶ ἐφρονεῖτε, ἠκαιρεῖσθε δέ.",
    "11": "οὐχ ὅτι καθ᾽ ὑστέρησιν λέγω, ἐγὼ γὰρ ἔμαθον ἐν οἷς εἰμι αὐτάρκης εἶναι.",
    "12": "οἶδα καὶ ταπεινοῦσθαι, οἶδα καὶ περισσεύειν· ἐν παντὶ καὶ ἐν πᾶσιν μεμύημαι, καὶ χορτάζεσθαι καὶ πεινᾶν καὶ περισσεύειν καὶ ὑστερεῖσθαι·",
    "13": "πάντα ἰσχύω ἐν τῷ ἐνδυναμοῦντί με.",
    "14": "πλὴν καλῶς ἐποιήσατε συγκοινωνήσαντές μου τῇ θλίψει.",
    "15": "Οἴδατε δὲ καὶ ὑμεῖς, Φιλιππήσιοι, ὅτι ἐν ἀρχῇ τοῦ εὐαγγελίου, ὅτε ἐξῆλθον ἀπὸ Μακεδονίας, οὐδεμία μοι ἐκκλησία ἐκοινώνησεν εἰς λόγον δόσεως καὶ λήμψεως εἰ μὴ ὑμεῖς μόνοι,",
    "16": "ὅτι καὶ ἐν Θεσσαλονίκῃ καὶ ἅπαξ καὶ δὶς εἰς τὴν χρείαν μοι ἐπέμψατε.",
    "17": "οὐχ ὅτι ἐπιζητῶ τὸ δόμα, ἀλλ᾽ ἐπιζητῶ τὸν καρπὸν τὸν πλεονάζοντα εἰς λόγον ὑμῶν.",
    "18": "ἀπέχω δὲ πάντα καὶ περισσεύω· πεπλήρωμαι δεξάμενος παρὰ Ἐπαφροδίτου τὰ παρ᾽ ὑμῶν, ὀσμὴν εὐωδίας, θυσίαν δεκτήν, εὐάρεστον τῷ θεῷ.",
    "19": "ὁ δὲ θεός μου πληρώσει πᾶσαν χρείαν ὑμῶν κατὰ τὸ πλοῦτος αὐτοῦ ἐν δόξῃ ἐν Χριστῷ Ἰησοῦ.",
    "20": "τῷ δὲ θεῷ καὶ πατρὶ ἡμῶν ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων, ἀμήν.",
    "21": "Ἀσπάσασθε πάντα ἅγιον ἐν Χριστῷ Ἰησοῦ. ἀσπάζονται ὑμᾶς οἱ σὺν ἐμοὶ ἀδελφοί.",
    "22": "ἀσπάζονται ὑμᾶς πάντες οἱ ἅγιοι, μάλιστα δὲ οἱ ἐκ τῆς Καίσαρος οἰκίας.",
    "23": "ἡ χάρις τοῦ κυρίου Ἰησοῦ Χριστοῦ μετὰ τοῦ πνεύματος ὑμῶν."
};
    const paragraphEnds = [1,7,9,14,20,23];
    const headings = [
    {
        "beforeVerse": 2,
        "title": "Exortações",
        "sourceTitle": "Exhortations"
    },
    {
        "beforeVerse": 10,
        "title": "Agradecimento pela oferta dos filipenses",
        "sourceTitle": "Acknowledgment of the Philippians’ Gift"
    },
    {
        "beforeVerse": 21,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.PHP = window.ScripturaScriptureTexts.UBS5.PHP || {};
    window.ScripturaScriptureTexts.UBS5.PHP[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.PHP = window.ScripturaScriptureParagraphBreaks.UBS5.PHP || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.PHP[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.PHP = window.ScripturaScriptureHeadings.UBS5.PHP || {};
    window.ScripturaScriptureHeadings.UBS5.PHP[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.PHP = window.ScripturaScriptureUnnumberedPassages.UBS5.PHP || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.PHP[4] = unnumberedPassages;
})();
