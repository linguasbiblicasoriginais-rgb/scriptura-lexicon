/* UBS5 — Primeira Epístola de Paulo a Timóteo, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e material editorial mantidos em camadas separadas.
 * Títulos intraversiculares registrados com sourcePlacement e afterCharacterOffset.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τὸ δὲ πνεῦμα ῥητῶς λέγει ὅτι ἐν ὑστέροις καιροῖς ἀποστήσονταί τινες τῆς πίστεως προσέχοντες πνεύμασιν πλάνοις καὶ διδασκαλίαις δαιμονίων,",
    "2": "ἐν ὑποκρίσει ψευδολόγων, κεκαυστηριασμένων τὴν ἰδίαν συνείδησιν,",
    "3": "κωλυόντων γαμεῖν, ἀπέχεσθαι βρωμάτων, ἃ ὁ θεὸς ἔκτισεν εἰς μετάλημψιν μετὰ εὐχαριστίας τοῖς πιστοῖς καὶ ἐπεγνωκόσιν τὴν ἀλήθειαν.",
    "4": "ὅτι πᾶν κτίσμα θεοῦ καλὸν καὶ οὐδὲν ἀπόβλητον μετὰ εὐχαριστίας λαμβανόμενον·",
    "5": "ἁγιάζεται γὰρ διὰ λόγου θεοῦ καὶ ἐντεύξεως.",
    "6": "Ταῦτα ὑποτιθέμενος τοῖς ἀδελφοῖς καλὸς ἔσῃ διάκονος Χριστοῦ Ἰησοῦ, ἐντρεφόμενος τοῖς λόγοις τῆς πίστεως καὶ τῆς καλῆς διδασκαλίας ᾗ παρηκολούθηκας·",
    "7": "τοὺς δὲ βεβήλους καὶ γραώδεις μύθους παραιτοῦ. γύμναζε δὲ σεαυτὸν πρὸς εὐσέβειαν·",
    "8": "ἡ γὰρ σωματικὴ γυμνασία πρὸς ὀλίγον ἐστὶν ὠφέλιμος, ἡ δὲ εὐσέβεια πρὸς πάντα ὠφέλιμός ἐστιν ἐπαγγελίαν ἔχουσα ζωῆς τῆς νῦν καὶ τῆς μελλούσης.",
    "9": "πιστὸς ὁ λόγος καὶ πάσης ἀποδοχῆς ἄξιος·",
    "10": "εἰς τοῦτο γὰρ κοπιῶμεν καὶ ἀγωνιζόμεθα, ὅτι ἠλπίκαμεν ἐπὶ θεῷ ζῶντι, ὅς ἐστιν σωτὴρ πάντων ἀνθρώπων μάλιστα πιστῶν.",
    "11": "Παράγγελλε ταῦτα καὶ δίδασκε.",
    "12": "μηδείς σου τῆς νεότητος καταφρονείτω, ἀλλὰ τύπος γίνου τῶν πιστῶν ἐν λόγῳ, ἐν ἀναστροφῇ, ἐν ἀγάπῃ, ἐν πίστει, ἐν ἁγνείᾳ.",
    "13": "ἕως ἔρχομαι πρόσεχε τῇ ἀναγνώσει, τῇ παρακλήσει, τῇ διδασκαλίᾳ.",
    "14": "μὴ ἀμέλει τοῦ ἐν σοὶ χαρίσματος, ὃ ἐδόθη σοι διὰ προφητείας μετὰ ἐπιθέσεως τῶν χειρῶν τοῦ πρεσβυτερίου.",
    "15": "ταῦτα μελέτα, ἐν τούτοις ἴσθι, ἵνα σου ἡ προκοπὴ φανερὰ ᾖ πᾶσιν.",
    "16": "ἔπεχε σεαυτῷ καὶ τῇ διδασκαλίᾳ, ἐπίμενε αὐτοῖς· τοῦτο γὰρ ποιῶν καὶ σεαυτὸν σώσεις καὶ τοὺς ἀκούοντάς σου."
};
    const paragraphEnds = [5,10,16];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Predição da apostasia",
        "sourceTitle": "Prediction of Apostasy"
    },
    {
        "beforeVerse": 6,
        "title": "Um bom ministro de Cristo Jesus",
        "sourceTitle": "A Good Minister of Christ Jesus"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TI"] = window.ScripturaScriptureTexts.UBS5["1TI"] || {};
    window.ScripturaScriptureTexts.UBS5["1TI"][4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"][4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"] = window.ScripturaScriptureHeadings.UBS5["1TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"][4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"][4] = unnumberedPassages;
})();
