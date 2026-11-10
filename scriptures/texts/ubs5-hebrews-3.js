/* UBS5 — Epístola aos Hebreus, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὅθεν, ἀδελφοὶ ἅγιοι, κλήσεως ἐπουρανίου μέτοχοι, κατανοήσατε τὸν ἀπόστολον καὶ ἀρχιερέα τῆς ὁμολογίας ἡμῶν Ἰησοῦν,",
    "2": "πιστὸν ὄντα τῷ ποιήσαντι αὐτὸν ὡς καὶ Μωϋσῆς ἐν [ὅλῳ] τῷ οἴκῳ αὐτοῦ.",
    "3": "πλείονος γὰρ οὗτος δόξης παρὰ Μωϋσῆν ἠξίωται, καθ᾽ ὅσον πλείονα τιμὴν ἔχει τοῦ οἴκου ὁ κατασκευάσας αὐτόν·",
    "4": "πᾶς γὰρ οἶκος κατασκευάζεται ὑπό τινος, ὁ δὲ πάντα κατασκευάσας θεός.",
    "5": "καὶ Μωϋσῆς μὲν πιστὸς ἐν ὅλῳ τῷ οἴκῳ αὐτοῦ ὡς θεράπων εἰς μαρτύριον τῶν λαληθησομένων,",
    "6": "Χριστὸς δὲ ὡς υἱὸς ἐπὶ τὸν οἶκον αὐτοῦ· οὗ οἶκός ἐσμεν ἡμεῖς, ἐάν[περ] τὴν παρρησίαν καὶ τὸ καύχημα τῆς ἐλπίδος κατάσχωμεν.",
    "7": "Διό, καθὼς λέγει τὸ πνεῦμα τὸ ἅγιον,\nΣήμερον ἐὰν τῆς φωνῆς αὐτοῦ ἀκούσητε,",
    "8": "μὴ σκληρύνητε τὰς καρδίας ὑμῶν ὡς ἐν τῷ παραπικρασμῷ\nκατὰ τὴν ἡμέραν τοῦ πειρασμοῦ ἐν τῇ ἐρήμῳ,",
    "9": "οὗ ἐπείρασαν οἱ πατέρες ὑμῶν ἐν δοκιμασίᾳ\nκαὶ εἶδον τὰ ἔργα μου",
    "10": "τεσσεράκοντα ἔτη·\nδιὸ προσώχθισα τῇ γενεᾷ ταύτῃ\nκαὶ εἶπον, Ἀεὶ πλανῶνται τῇ καρδίᾳ,\nαὐτοὶ δὲ οὐκ ἔγνωσαν τὰς ὁδούς μου,",
    "11": "ὡς ὤμοσα ἐν τῇ ὀργῇ μου·\nΕἰ εἰσελεύσονται εἰς τὴν κατάπαυσίν μου.",
    "12": "Βλέπετε, ἀδελφοί, μήποτε ἔσται ἔν τινι ὑμῶν καρδία πονηρὰ ἀπιστίας ἐν τῷ ἀποστῆναι ἀπὸ θεοῦ ζῶντος,",
    "13": "ἀλλὰ παρακαλεῖτε ἑαυτοὺς καθ᾽ ἑκάστην ἡμέραν, ἄχρις οὗ τὸ Σήμερον καλεῖται, ἵνα μὴ σκληρυνθῇ τις ἐξ ὑμῶν ἀπάτῃ τῆς ἁμαρτίας–",
    "14": "μέτοχοι γὰρ τοῦ Χριστοῦ γεγόναμεν, ἐάνπερ τὴν ἀρχὴν τῆς ὑποστάσεως μέχρι τέλους βεβαίαν κατάσχωμεν –",
    "15": "ἐν τῷ λέγεσθαι,\nΣήμερον ἐὰν τῆς φωνῆς αὐτοῦ ἀκούσητε,\nΜὴ σκληρύνητε τὰς καρδίας ὑμῶν ὡς ἐν τῷ παραπικρασμῷ.",
    "16": "τίνες γὰρ ἀκούσαντες παρεπίκραναν; ἀλλ᾽ οὐ πάντες οἱ ἐξελθόντες ἐξ Αἰγύπτου διὰ Μωϋσέως;",
    "17": "τίσιν δὲ προσώχθισεν τεσσεράκοντα ἔτη; οὐχὶ τοῖς ἁμαρτήσασιν, ὧν τὰ κῶλα ἔπεσεν ἐν τῇ ἐρήμῳ;",
    "18": "τίσιν δὲ ὤμοσεν μὴ εἰσελεύσεσθαι εἰς τὴν κατάπαυσιν αὐτοῦ εἰ μὴ τοῖς ἀπειθήσασιν;",
    "19": "καὶ βλέπομεν ὅτι οὐκ ἠδυνήθησαν εἰσελθεῖν δι᾽ ἀπιστίαν."
};
    const paragraphEnds = [6,19];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Jesus é superior a Moisés",
        "sourceTitle": "Jesus Superior to Moses"
    },
    {
        "beforeVerse": 7,
        "title": "O descanso para o povo de Deus",
        "sourceTitle": "A Rest for the People of God"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[3] = unnumberedPassages;
})();
