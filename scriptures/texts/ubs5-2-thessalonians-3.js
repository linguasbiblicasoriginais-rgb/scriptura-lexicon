/* UBS5 — Segunda Epístola de Paulo aos Tessalonicenses, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme a identificação do projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τὸ λοιπὸν προσεύχεσθε, ἀδελφοί, περὶ ἡμῶν, ἵνα ὁ λόγος τοῦ κυρίου τρέχῃ καὶ δοξάζηται καθὼς καὶ πρὸς ὑμᾶς,",
    "2": "καὶ ἵνα ῥυσθῶμεν ἀπὸ τῶν ἀτόπων καὶ πονηρῶν ἀνθρώπων· οὐ γὰρ πάντων ἡ πίστις.",
    "3": "πιστὸς δέ ἐστιν ὁ κύριος, ὃς στηρίξει ὑμᾶς καὶ φυλάξει ἀπὸ τοῦ πονηροῦ.",
    "4": "πεποίθαμεν δὲ ἐν κυρίῳ ἐφ᾽ ὑμᾶς, ὅτι ἃ παραγγέλλομεν [καὶ] ποιεῖτε καὶ ποιήσετε.",
    "5": "Ὁ δὲ κύριος κατευθύναι ὑμῶν τὰς καρδίας εἰς τὴν ἀγάπην τοῦ θεοῦ καὶ εἰς τὴν ὑπομονὴν τοῦ Χριστοῦ.",
    "6": "Παραγγέλλομεν δὲ ὑμῖν, ἀδελφοί, ἐν ὀνόματι τοῦ κυρίου [ἡμῶν] Ἰησοῦ Χριστοῦ στέλλεσθαι ὑμᾶς ἀπὸ παντὸς ἀδελφοῦ ἀτάκτως περιπατοῦντος καὶ μὴ κατὰ τὴν παράδοσιν ἣν παρελάβοσαν παρ᾽ ἡμῶν.",
    "7": "αὐτοὶ γὰρ οἴδατε πῶς δεῖ μιμεῖσθαι ἡμᾶς, ὅτι οὐκ ἠτακτήσαμεν ἐν ὑμῖν",
    "8": "οὐδὲ δωρεὰν ἄρτον ἐφάγομεν παρά τινος, ἀλλ᾽ ἐν κόπῳ καὶ μόχθῳ νυκτὸς καὶ ἡμέρας ἐργαζόμενοι πρὸς τὸ μὴ ἐπιβαρῆσαί τινα ὑμῶν·",
    "9": "οὐχ ὅτι οὐκ ἔχομεν ἐξουσίαν, ἀλλ᾽ ἵνα ἑαυτοὺς τύπον δῶμεν ὑμῖν εἰς τὸ μιμεῖσθαι ἡμᾶς.",
    "10": "καὶ γὰρ ὅτε ἦμεν πρὸς ὑμᾶς, τοῦτο παρηγγέλλομεν ὑμῖν, ὅτι εἴ τις οὐ θέλει ἐργάζεσθαι μηδὲ ἐσθιέτω.",
    "11": "ἀκούομεν γάρ τινας περιπατοῦντας ἐν ὑμῖν ἀτάκτως μηδὲν ἐργαζομένους ἀλλὰ περιεργαζομένους·",
    "12": "τοῖς δὲ τοιούτοις παραγγέλλομεν καὶ παρακαλοῦμεν ἐν κυρίῳ Ἰησοῦ Χριστῷ, ἵνα μετὰ ἡσυχίας ἐργαζόμενοι τὸν ἑαυτῶν ἄρτον ἐσθίωσιν.",
    "13": "Ὑμεῖς δέ, ἀδελφοί, μὴ ἐγκακήσητε καλοποιοῦντες.",
    "14": "εἰ δέ τις οὐχ ὑπακούει τῷ λόγῳ ἡμῶν διὰ τῆς ἐπιστολῆς, τοῦτον σημειοῦσθε μὴ συναναμίγνυσθαι αὐτῷ, ἵνα ἐντραπῇ·",
    "15": "καὶ μὴ ὡς ἐχθρὸν ἡγεῖσθε, ἀλλὰ νουθετεῖτε ὡς ἀδελφόν.",
    "16": "Αὐτὸς δὲ ὁ κύριος τῆς εἰρήνης δῴη ὑμῖν τὴν εἰρήνην διὰ παντὸς ἐν παντὶ τρόπῳ. ὁ κύριος μετὰ πάντων ὑμῶν.",
    "17": "Ὁ ἀσπασμὸς τῇ ἐμῇ χειρὶ Παύλου, ὅ ἐστιν σημεῖον ἐν πάσῃ ἐπιστολῇ· οὕτως γράφω.",
    "18": "ἡ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μετὰ πάντων ὑμῶν."
};
    const paragraphEnds = [5,15,16,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Orai por nós",
        "sourceTitle": "Pray for Us"
    },
    {
        "beforeVerse": 6,
        "title": "Advertência contra a ociosidade",
        "sourceTitle": "Warning against Idleness"
    },
    {
        "beforeVerse": 16,
        "title": "Bênção final",
        "sourceTitle": "Benediction"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TH"] = window.ScripturaScriptureTexts.UBS5["2TH"] || {};
    window.ScripturaScriptureTexts.UBS5["2TH"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"] = window.ScripturaScriptureHeadings.UBS5["2TH"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"][3] = unnumberedPassages;
})();
