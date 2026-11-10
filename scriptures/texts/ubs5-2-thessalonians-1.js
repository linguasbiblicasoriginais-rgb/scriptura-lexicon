/* UBS5 — Segunda Epístola de Paulo aos Tessalonicenses, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme a identificação do projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος καὶ Σιλουανὸς καὶ Τιμόθεος τῇ ἐκκλησίᾳ Θεσσαλονικέων ἐν θεῷ πατρὶ ἡμῶν καὶ κυρίῳ Ἰησοῦ Χριστῷ,",
    "2": "χάρις ὑμῖν καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς [ἡμῶν] καὶ κυρίου Ἰησοῦ Χριστοῦ.",
    "3": "Εὐχαριστεῖν ὀφείλομεν τῷ θεῷ πάντοτε περὶ ὑμῶν, ἀδελφοί, καθὼς ἄξιόν ἐστιν, ὅτι ὑπεραυξάνει ἡ πίστις ὑμῶν καὶ πλεονάζει ἡ ἀγάπη ἑνὸς ἑκάστου πάντων ὑμῶν εἰς ἀλλήλους,",
    "4": "ὥστε αὐτοὺς ἡμᾶς ἐν ὑμῖν ἐγκαυχᾶσθαι ἐν ταῖς ἐκκλησίαις τοῦ θεοῦ ὑπὲρ τῆς ὑπομονῆς ὑμῶν καὶ πίστεως ἐν πᾶσιν τοῖς διωγμοῖς ὑμῶν καὶ ταῖς θλίψεσιν αἷς ἀνέχεσθε,",
    "5": "ἔνδειγμα τῆς δικαίας κρίσεως τοῦ θεοῦ εἰς τὸ καταξιωθῆναι ὑμᾶς τῆς βασιλείας τοῦ θεοῦ, ὑπὲρ ἧς καὶ πάσχετε,",
    "6": "εἴπερ δίκαιον παρὰ θεῷ ἀνταποδοῦναι τοῖς θλίβουσιν ὑμᾶς θλῖψιν",
    "7": "καὶ ὑμῖν τοῖς θλιβομένοις ἄνεσιν μεθ᾽ ἡμῶν, ἐν τῇ ἀποκαλύψει τοῦ κυρίου Ἰησοῦ ἀπ᾽ οὐρανοῦ μετ᾽ ἀγγέλων δυνάμεως αὐτοῦ",
    "8": "ἐν πυρὶ φλογός, διδόντος ἐκδίκησιν τοῖς μὴ εἰδόσιν θεὸν καὶ τοῖς μὴ ὑπακούουσιν τῷ εὐαγγελίῳ τοῦ κυρίου ἡμῶν Ἰησοῦ,",
    "9": "οἵτινες δίκην τίσουσιν ὄλεθρον αἰώνιον ἀπὸ προσώπου τοῦ κυρίου καὶ ἀπὸ τῆς δόξης τῆς ἰσχύος αὐτοῦ,",
    "10": "ὅταν ἔλθῃ ἐνδοξασθῆναι ἐν τοῖς ἁγίοις αὐτοῦ καὶ θαυμασθῆναι ἐν πᾶσιν τοῖς πιστεύσασιν, ὅτι ἐπιστεύθη τὸ μαρτύριον ἡμῶν ἐφ᾽ ὑμᾶς, ἐν τῇ ἡμέρᾳ ἐκείνῃ.",
    "11": "εἰς ὃ καὶ προσευχόμεθα πάντοτε περὶ ὑμῶν, ἵνα ὑμᾶς ἀξιώσῃ τῆς κλήσεως ὁ θεὸς ἡμῶν καὶ πληρώσῃ πᾶσαν εὐδοκίαν ἀγαθωσύνης καὶ ἔργον πίστεως ἐν δυνάμει,",
    "12": "ὅπως ἐνδοξασθῇ τὸ ὄνομα τοῦ κυρίου ἡμῶν Ἰησοῦ ἐν ὑμῖν, καὶ ὑμεῖς ἐν αὐτῷ, κατὰ τὴν χάριν τοῦ θεοῦ ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ."
};
    const paragraphEnds = [2,12];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 3,
        "title": "O juízo na vinda de Cristo",
        "sourceTitle": "The Judgment at Christ’s Coming"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TH"] = window.ScripturaScriptureTexts.UBS5["2TH"] || {};
    window.ScripturaScriptureTexts.UBS5["2TH"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TH"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TH"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"] = window.ScripturaScriptureHeadings.UBS5["2TH"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TH"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TH"][1] = unnumberedPassages;
})();
