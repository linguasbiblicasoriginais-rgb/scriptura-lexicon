/* UBS5 — Segunda Epístola de Paulo aos Tessalonicenses, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme a identificação do projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἐρωτῶμεν δὲ ὑμᾶς, ἀδελφοί, ὑπὲρ τῆς παρουσίας τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ καὶ ἡμῶν ἐπισυναγωγῆς ἐπ᾽ αὐτὸν",
    "2": "εἰς τὸ μὴ ταχέως σαλευθῆναι ὑμᾶς ἀπὸ τοῦ νοὸς μηδὲ θροεῖσθαι, μήτε διὰ πνεύματος μήτε διὰ λόγου μήτε δι᾽ ἐπιστολῆς ὡς δι᾽ ἡμῶν, ὡς ὅτι ἐνέστηκεν ἡ ἡμέρα τοῦ κυρίου·",
    "3": "μή τις ὑμᾶς ἐξαπατήσῃ κατὰ μηδένα τρόπον. ὅτι ἐὰν μὴ ἔλθῃ ἡ ἀποστασία πρῶτον καὶ ἀποκαλυφθῇ ὁ ἄνθρωπος τῆς ἀνομίας, ὁ υἱὸς τῆς ἀπωλείας,",
    "4": "ὁ ἀντικείμενος καὶ ὑπεραιρόμενος ἐπὶ πάντα λεγόμενον θεὸν ἢ σέβασμα, ὥστε αὐτὸν εἰς τὸν ναὸν τοῦ θεοῦ καθίσαι ἀποδεικνύντα ἑαυτὸν ὅτι ἔστιν θεός.",
    "5": "Οὐ μνημονεύετε ὅτι ἔτι ὢν πρὸς ὑμᾶς ταῦτα ἔλεγον ὑμῖν;",
    "6": "καὶ νῦν τὸ κατέχον οἴδατε εἰς τὸ ἀποκαλυφθῆναι αὐτὸν ἐν τῷ ἑαυτοῦ καιρῷ.",
    "7": "τὸ γὰρ μυστήριον ἤδη ἐνεργεῖται τῆς ἀνομίας· μόνον ὁ κατέχων ἄρτι ἕως ἐκ μέσου γένηται.",
    "8": "καὶ τότε ἀποκαλυφθήσεται ὁ ἄνομος, ὃν ὁ κύριος [Ἰησοῦς] ἀνελεῖ τῷ πνεύματι τοῦ στόματος αὐτοῦ καὶ καταργήσει τῇ ἐπιφανείᾳ τῆς παρουσίας αὐτοῦ,",
    "9": "οὗ ἐστιν ἡ παρουσία κατ᾽ ἐνέργειαν τοῦ Σατανᾶ ἐν πάσῃ δυνάμει καὶ σημείοις καὶ τέρασιν ψεύδους",
    "10": "καὶ ἐν πάσῃ ἀπάτῃ ἀδικίας τοῖς ἀπολλυμένοις, ἀνθ᾽ ὧν τὴν ἀγάπην τῆς ἀληθείας οὐκ ἐδέξαντο εἰς τὸ σωθῆναι αὐτούς.",
    "11": "καὶ διὰ τοῦτο πέμπει αὐτοῖς ὁ θεὸς ἐνέργειαν πλάνης εἰς τὸ πιστεῦσαι αὐτοὺς τῷ ψεύδει,",
    "12": "ἵνα κριθῶσιν πάντες οἱ μὴ πιστεύσαντες τῇ ἀληθείᾳ ἀλλ᾽ εὐδοκήσαντες τῇ ἀδικίᾳ.",
    "13": "Ἡμεῖς δὲ ὀφείλομεν εὐχαριστεῖν τῷ θεῷ πάντοτε περὶ ὑμῶν, ἀδελφοὶ ἠγαπημένοι ὑπὸ κυρίου, ὅτι εἵλατο ὑμᾶς ὁ θεὸς ἀπαρχὴν εἰς σωτηρίαν ἐν ἁγιασμῷ πνεύματος καὶ πίστει ἀληθείας,",
    "14": "εἰς ὃ [καὶ] ἐκάλεσεν ὑμᾶς διὰ τοῦ εὐαγγελίου ἡμῶν εἰς περιποίησιν δόξης τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ.",
    "15": "ἄρα οὖν, ἀδελφοί, στήκετε, καὶ κρατεῖτε τὰς παραδόσεις ἃς ἐδιδάχθητε εἴτε διὰ λόγου εἴτε δι᾽ ἐπιστολῆς ἡμῶν.",
    "16": "Αὐτὸς δὲ ὁ κύριος ἡμῶν Ἰησοῦς Χριστὸς καὶ [ὁ] θεὸς ὁ πατὴρ ἡμῶν ὁ ἀγαπήσας ἡμᾶς καὶ δοὺς παράκλησιν αἰωνίαν καὶ ἐλπίδα ἀγαθὴν ἐν χάριτι,",
    "17": "παρακαλέσαι ὑμῶν τὰς καρδίας καὶ στηρίξαι ἐν παντὶ ἔργῳ καὶ λόγῳ ἀγαθῷ."
};
    const paragraphEnds = [12,17];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O homem da iniquidade",
        "sourceTitle": "The Man of Lawlessness"
    },
    {
        "beforeVerse": 13,
        "title": "Escolhidos para a salvação",
        "sourceTitle": "Chosen for Salvation"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TH"] = window.ScripturaScriptureTexts.UBS5["2TH"] || {};
    window.ScripturaScriptureTexts.UBS5["2TH"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"] = window.ScripturaScriptureHeadings.UBS5["2TH"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"][2] = unnumberedPassages;
})();
