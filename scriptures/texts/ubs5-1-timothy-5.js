/* UBS5 — Primeira Epístola de Paulo a Timóteo, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e material editorial mantidos em camadas separadas.
 * Títulos intraversiculares registrados com sourcePlacement e afterCharacterOffset.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πρεσβυτέρῳ μὴ ἐπιπλήξῃς ἀλλὰ παρακάλει ὡς πατέρα, νεωτέρους ὡς ἀδελφούς,",
    "2": "πρεσβυτέρας ὡς μητέρας, νεωτέρας ὡς ἀδελφὰς ἐν πάσῃ ἁγνείᾳ.",
    "3": "Χήρας τίμα τὰς ὄντως χήρας.",
    "4": "εἰ δέ τις χήρα τέκνα ἢ ἔκγονα ἔχει, μανθανέτωσαν πρῶτον τὸν ἴδιον οἶκον εὐσεβεῖν καὶ ἀμοιβὰς ἀποδιδόναι τοῖς προγόνοις· τοῦτο γάρ ἐστιν ἀπόδεκτον ἐνώπιον τοῦ θεοῦ.",
    "5": "ἡ δὲ ὄντως χήρα καὶ μεμονωμένη ἤλπικεν ἐπὶ θεὸν καὶ προσμένει ταῖς δεήσεσιν καὶ ταῖς προσευχαῖς νυκτὸς καὶ ἡμέρας,",
    "6": "ἡ δὲ σπαταλῶσα ζῶσα τέθνηκεν.",
    "7": "καὶ ταῦτα παράγγελλε, ἵνα ἀνεπίλημπτοι ὦσιν.",
    "8": "εἰ δέ τις τῶν ἰδίων καὶ μάλιστα οἰκείων οὐ προνοεῖ, τὴν πίστιν ἤρνηται καὶ ἔστιν ἀπίστου χείρων.",
    "9": "Χήρα καταλεγέσθω μὴ ἔλαττον ἐτῶν ἑξήκοντα γεγονυῖα, ἑνὸς ἀνδρὸς γυνή,",
    "10": "ἐν ἔργοις καλοῖς μαρτυρουμένη, εἰ ἐτεκνοτρόφησεν, εἰ ἐξενοδόχησεν, εἰ ἁγίων πόδας ἔνιψεν, εἰ θλιβομένοις ἐπήρκεσεν, εἰ παντὶ ἔργῳ ἀγαθῷ ἐπηκολούθησεν.",
    "11": "νεωτέρας δὲ χήρας παραιτοῦ· ὅταν γὰρ καταστρηνιάσωσιν τοῦ Χριστοῦ, γαμεῖν θέλουσιν",
    "12": "ἔχουσαι κρίμα ὅτι τὴν πρώτην πίστιν ἠθέτησαν·",
    "13": "ἅμα δὲ καὶ ἀργαὶ μανθάνουσιν περιερχόμεναι τὰς οἰκίας, οὐ μόνον δὲ ἀργαὶ ἀλλὰ καὶ φλύαροι καὶ περίεργοι, λαλοῦσαι τὰ μὴ δέοντα.",
    "14": "βούλομαι οὖν νεωτέρας γαμεῖν, τεκνογονεῖν, οἰκοδεσποτεῖν, μηδεμίαν ἀφορμὴν διδόναι τῷ ἀντικειμένῳ λοιδορίας χάριν·",
    "15": "ἤδη γάρ τινες ἐξετράπησαν ὀπίσω τοῦ Σατανᾶ.",
    "16": "εἴ τις πιστὴ ἔχει χήρας, ἐπαρκείτω αὐταῖς καὶ μὴ βαρείσθω ἡ ἐκκλησία, ἵνα ταῖς ὄντως χήραις ἐπαρκέσῃ.",
    "17": "Οἱ καλῶς προεστῶτες πρεσβύτεροι διπλῆς τιμῆς ἀξιούσθωσαν, μάλιστα οἱ κοπιῶντες ἐν λόγῳ καὶ διδασκαλίᾳ.",
    "18": "λέγει γὰρ ἡ γραφή, Βοῦν ἀλοῶντα οὐ φιμώσεις, καί, Ἄξιος ὁ ἐργάτης τοῦ μισθοῦ αὐτοῦ.",
    "19": "κατὰ πρεσβυτέρου κατηγορίαν μὴ παραδέχου, ἐκτὸς εἰ μὴ ἐπὶ δύο ἢ τριῶν μαρτύρων.",
    "20": "τοὺς ἁμαρτάνοντας ἐνώπιον πάντων ἔλεγχε, ἵνα καὶ οἱ λοιποὶ φόβον ἔχωσιν.",
    "21": "Διαμαρτύρομαι ἐνώπιον τοῦ θεοῦ καὶ Χριστοῦ Ἰησοῦ καὶ τῶν ἐκλεκτῶν ἀγγέλων, ἵνα ταῦτα φυλάξῃς χωρὶς προκρίματος, μηδὲν ποιῶν κατὰ πρόσκλισιν.",
    "22": "Χεῖρας ταχέως μηδενὶ ἐπιτίθει μηδὲ κοινώνει ἁμαρτίαις ἀλλοτρίαις· σεαυτὸν ἁγνὸν τήρει.",
    "23": "Μηκέτι ὑδροπότει, ἀλλ᾽ οἴνῳ ὀλίγῳ χρῶ διὰ τὸν στόμαχον καὶ τὰς πυκνάς σου ἀσθενείας.",
    "24": "Τινῶν ἀνθρώπων αἱ ἁμαρτίαι πρόδηλοί εἰσιν προάγουσαι εἰς κρίσιν, τισὶν δὲ καὶ ἐπακολουθοῦσιν·",
    "25": "ὡσαύτως καὶ τὰ ἔργα τὰ καλὰ πρόδηλα, καὶ τὰ ἄλλως ἔχοντα κρυβῆναι οὐ δύνανται."
};
    const paragraphEnds = [2,16,23,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Deveres para com os outros",
        "sourceTitle": "Duties toward Others"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TI"] = window.ScripturaScriptureTexts.UBS5["1TI"] || {};
    window.ScripturaScriptureTexts.UBS5["1TI"][5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"][5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"] = window.ScripturaScriptureHeadings.UBS5["1TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"][5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"][5] = unnumberedPassages;
})();
