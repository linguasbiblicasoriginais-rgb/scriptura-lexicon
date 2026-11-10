/* UBS5 — Segunda Epístola de Paulo a Timóteo, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Διαμαρτύρομαι ἐνώπιον τοῦ θεοῦ καὶ Χριστοῦ Ἰησοῦ τοῦ μέλλοντος κρίνειν ζῶντας καὶ νεκρούς, καὶ τὴν ἐπιφάνειαν αὐτοῦ καὶ τὴν βασιλείαν αὐτοῦ·",
    "2": "κήρυξον τὸν λόγον, ἐπίστηθι εὐκαίρως ἀκαίρως, ἔλεγξον, ἐπιτίμησον, παρακάλεσον, ἐν πάσῃ μακροθυμίᾳ καὶ διδαχῇ.",
    "3": "ἔσται γὰρ καιρὸς ὅτε τῆς ὑγιαινούσης διδασκαλίας οὐκ ἀνέξονται ἀλλὰ κατὰ τὰς ἰδίας ἐπιθυμίας ἑαυτοῖς ἐπισωρεύσουσιν διδασκάλους κνηθόμενοι τὴν ἀκοὴν",
    "4": "καὶ ἀπὸ μὲν τῆς ἀληθείας τὴν ἀκοὴν ἀποστρέψουσιν, ἐπὶ δὲ τοὺς μύθους ἐκτραπήσονται.",
    "5": "σὺ δὲ νῆφε ἐν πᾶσιν, κακοπάθησον, ἔργον ποίησον εὐαγγελιστοῦ, τὴν διακονίαν σου πληροφόρησον.",
    "6": "Ἐγὼ γὰρ ἤδη σπένδομαι, καὶ ὁ καιρὸς τῆς ἀναλύσεώς μου ἐφέστηκεν.",
    "7": "τὸν καλὸν ἀγῶνα ἠγώνισμαι, τὸν δρόμον τετέλεκα, τὴν πίστιν τετήρηκα·",
    "8": "λοιπὸν ἀπόκειταί μοι ὁ τῆς δικαιοσύνης στέφανος, ὃν ἀποδώσει μοι ὁ κύριος ἐν ἐκείνῃ τῇ ἡμέρᾳ, ὁ δίκαιος κριτής, οὐ μόνον δὲ ἐμοὶ ἀλλὰ καὶ πᾶσιν τοῖς ἠγαπηκόσιν τὴν ἐπιφάνειαν αὐτοῦ.",
    "9": "Σπούδασον ἐλθεῖν πρός με ταχέως·",
    "10": "Δημᾶς γάρ με ἐγκατέλιπεν ἀγαπήσας τὸν νῦν αἰῶνα καὶ ἐπορεύθη εἰς Θεσσαλονίκην, Κρήσκης εἰς Γαλατίαν, Τίτος εἰς Δαλματίαν·",
    "11": "Λουκᾶς ἐστιν μόνος μετ᾽ ἐμοῦ. Μᾶρκον ἀναλαβὼν ἄγε μετὰ σεαυτοῦ, ἔστιν γάρ μοι εὔχρηστος εἰς διακονίαν.",
    "12": "Τύχικον δὲ ἀπέστειλα εἰς Ἔφεσον.",
    "13": "τὸν φαιλόνην ὃν ἀπέλιπον ἐν Τρῳάδι παρὰ Κάρπῳ ἐρχόμενος φέρε, καὶ τὰ βιβλία μάλιστα τὰς μεμβράνας.",
    "14": "Ἀλέξανδρος ὁ χαλκεὺς πολλά μοι κακὰ ἐνεδείξατο· ἀποδώσει αὐτῷ ὁ κύριος κατὰ τὰ ἔργα αὐτοῦ·",
    "15": "ὃν καὶ σὺ φυλάσσου, λίαν γὰρ ἀντέστη τοῖς ἡμετέροις λόγοις.",
    "16": "Ἐν τῇ πρώτῃ μου ἀπολογίᾳ οὐδείς μοι παρεγένετο, ἀλλὰ πάντες με ἐγκατέλιπον· μὴ αὐτοῖς λογισθείη·",
    "17": "ὁ δὲ κύριός μοι παρέστη καὶ ἐνεδυνάμωσέν με, ἵνα δι᾽ ἐμοῦ τὸ κήρυγμα πληροφορηθῇ καὶ ἀκούσωσιν πάντα τὰ ἔθνη, καὶ ἐρρύσθην ἐκ στόματος λέοντος.",
    "18": "ῥύσεταί με ὁ κύριος ἀπὸ παντὸς ἔργου πονηροῦ καὶ σώσει εἰς τὴν βασιλείαν αὐτοῦ τὴν ἐπουράνιον· ᾧ ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων, ἀμήν.",
    "19": "Ἄσπασαι Πρίσκαν καὶ Ἀκύλαν καὶ τὸν Ὀνησιφόρου οἶκον.",
    "20": "Ἔραστος ἔμεινεν ἐν Κορίνθῳ, Τρόφιμον δὲ ἀπέλιπον ἐν Μιλήτῳ ἀσθενοῦντα.",
    "21": "Σπούδασον πρὸ χειμῶνος ἐλθεῖν. Ἀσπάζεταί σε Εὔβουλος καὶ Πούδης καὶ Λίνος καὶ Κλαυδία καὶ οἱ ἀδελφοὶ πάντες.",
    "22": "Ὁ κύριος μετὰ τοῦ πνεύματός σου. ἡ χάρις μεθ᾽ ὑμῶν."
};
    const paragraphEnds = [5,8,15,18,22];
    const headings = [
    {
        "beforeVerse": 9,
        "title": "Instruções pessoais",
        "sourceTitle": "Personal Instructions"
    },
    {
        "beforeVerse": 19,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TI"] = window.ScripturaScriptureTexts.UBS5["2TI"] || {};
    window.ScripturaScriptureTexts.UBS5["2TI"][4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"][4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"] = window.ScripturaScriptureHeadings.UBS5["2TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"][4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"][4] = unnumberedPassages;
})();
