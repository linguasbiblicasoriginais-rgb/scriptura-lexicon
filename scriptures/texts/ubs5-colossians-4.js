/* UBS5 — Epístola de Paulo aos Colossenses, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Οἱ κύριοι, τὸ δίκαιον καὶ τὴν ἰσότητα τοῖς δούλοις παρέχεσθε, εἰδότες ὅτι καὶ ὑμεῖς ἔχετε κύριον ἐν οὐρανῷ.",
    "2": "Τῇ προσευχῇ προσκαρτερεῖτε, γρηγοροῦντες ἐν αὐτῇ ἐν εὐχαριστίᾳ,",
    "3": "προσευχόμενοι ἅμα καὶ περὶ ἡμῶν, ἵνα ὁ θεὸς ἀνοίξῃ ἡμῖν θύραν τοῦ λόγου λαλῆσαι τὸ μυστήριον τοῦ Χριστοῦ, δι᾽ ὃ καὶ δέδεμαι,",
    "4": "ἵνα φανερώσω αὐτὸ ὡς δεῖ με λαλῆσαι.",
    "5": "Ἐν σοφίᾳ περιπατεῖτε πρὸς τοὺς ἔξω τὸν καιρὸν ἐξαγοραζόμενοι.",
    "6": "ὁ λόγος ὑμῶν πάντοτε ἐν χάριτι, ἅλατι ἠρτυμένος, εἰδέναι πῶς δεῖ ὑμᾶς ἑνὶ ἑκάστῳ ἀποκρίνεσθαι.",
    "7": "Τὰ κατ᾽ ἐμὲ πάντα γνωρίσει ὑμῖν Τύχικος ὁ ἀγαπητὸς ἀδελφὸς καὶ πιστὸς διάκονος καὶ σύνδουλος ἐν κυρίῳ,",
    "8": "ὃν ἔπεμψα πρὸς ὑμᾶς εἰς αὐτὸ τοῦτο, ἵνα γνῶτε τὰ περὶ ἡμῶν καὶ παρακαλέσῃ τὰς καρδίας ὑμῶν,",
    "9": "σὺν Ὀνησίμῳ τῷ πιστῷ καὶ ἀγαπητῷ ἀδελφῷ, ὅς ἐστιν ἐξ ὑμῶν· πάντα ὑμῖν γνωρίσουσιν τὰ ὧδε.",
    "10": "Ἀσπάζεται ὑμᾶς Ἀρίσταρχος ὁ συναιχμάλωτός μου καὶ Μᾶρκος ὁ ἀνεψιὸς Βαρναβᾶ (περὶ οὗ ἐλάβετε ἐντολάς, ἐὰν ἔλθῃ πρὸς ὑμᾶς, δέξασθε αὐτόν)",
    "11": "καὶ Ἰησοῦς ὁ λεγόμενος Ἰοῦστος, οἱ ὄντες ἐκ περιτομῆς, οὗτοι μόνοι συνεργοὶ εἰς τὴν βασιλείαν τοῦ θεοῦ, οἵτινες ἐγενήθησάν μοι παρηγορία.",
    "12": "ἀσπάζεται ὑμᾶς Ἐπαφρᾶς ὁ ἐξ ὑμῶν, δοῦλος Χριστοῦ [Ἰησοῦ], πάντοτε ἀγωνιζόμενος ὑπὲρ ὑμῶν ἐν ταῖς προσευχαῖς, ἵνα σταθῆτε τέλειοι καὶ πεπληροφορημένοι ἐν παντὶ θελήματι τοῦ θεοῦ.",
    "13": "μαρτυρῶ γὰρ αὐτῷ ὅτι ἔχει πολὺν πόνον ὑπὲρ ὑμῶν καὶ τῶν ἐν Λαοδικείᾳ καὶ τῶν ἐν Ἱεραπόλει.",
    "14": "ἀσπάζεται ὑμᾶς Λουκᾶς ὁ ἰατρὸς ὁ ἀγαπητὸς καὶ Δημᾶς.",
    "15": "Ἀσπάσασθε τοὺς ἐν Λαοδικείᾳ ἀδελφοὺς καὶ Νύμφαν καὶ τὴν κατ᾽ οἶκον αὐτῆς ἐκκλησίαν.",
    "16": "καὶ ὅταν ἀναγνωσθῇ παρ᾽ ὑμῖν ἡ ἐπιστολή, ποιήσατε ἵνα καὶ ἐν τῇ Λαοδικέων ἐκκλησίᾳ ἀναγνωσθῇ, καὶ τὴν ἐκ Λαοδικείας ἵνα καὶ ὑμεῖς ἀναγνῶτε.",
    "17": "καὶ εἴπατε Ἀρχίππῳ· Βλέπε τὴν διακονίαν ἣν παρέλαβες ἐν κυρίῳ, ἵνα αὐτὴν πληροῖς.",
    "18": "Ὁ ἀσπασμὸς τῇ ἐμῇ χειρὶ Παύλου. μνημονεύετέ μου τῶν δεσμῶν. ἡ χάρις μεθ᾽ ὑμῶν."
};
    const paragraphEnds = [1,6,9,17,18];
    const headings = [
    {
        "beforeVerse": 2,
        "title": "Exortações",
        "sourceTitle": "Exhortations"
    },
    {
        "beforeVerse": 7,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.COL = window.ScripturaScriptureTexts.UBS5.COL || {};
    window.ScripturaScriptureTexts.UBS5.COL[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.COL = window.ScripturaScriptureParagraphBreaks.UBS5.COL || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.COL[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.COL = window.ScripturaScriptureHeadings.UBS5.COL || {};
    window.ScripturaScriptureHeadings.UBS5.COL[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.COL = window.ScripturaScriptureUnnumberedPassages.UBS5.COL || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.COL[4] = unnumberedPassages;
})();
