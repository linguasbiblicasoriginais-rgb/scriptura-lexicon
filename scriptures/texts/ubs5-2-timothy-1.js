/* UBS5 — Segunda Epístola de Paulo a Timóteo, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος ἀπόστολος Χριστοῦ Ἰησοῦ διὰ θελήματος θεοῦ κατ᾽ ἐπαγγελίαν ζωῆς τῆς ἐν Χριστῷ Ἰησοῦ",
    "2": "Τιμοθέῳ ἀγαπητῷ τέκνῳ, χάρις ἔλεος εἰρήνη ἀπὸ θεοῦ πατρὸς καὶ Χριστοῦ Ἰησοῦ τοῦ κυρίου ἡμῶν.",
    "3": "Χάριν ἔχω τῷ θεῷ, ᾧ λατρεύω ἀπὸ προγόνων ἐν καθαρᾷ συνειδήσει, ὡς ἀδιάλειπτον ἔχω τὴν περὶ σοῦ μνείαν ἐν ταῖς δεήσεσίν μου νυκτὸς καὶ ἡμέρας,",
    "4": "ἐπιποθῶν σε ἰδεῖν, μεμνημένος σου τῶν δακρύων, ἵνα χαρᾶς πληρωθῶ,",
    "5": "ὑπόμνησιν λαβὼν τῆς ἐν σοὶ ἀνυποκρίτου πίστεως, ἥτις ἐνῴκησεν πρῶτον ἐν τῇ μάμμῃ σου Λωΐδι καὶ τῇ μητρί σου Εὐνίκῃ, πέπεισμαι δὲ ὅτι καὶ ἐν σοί.",
    "6": "δι᾽ ἣν αἰτίαν ἀναμιμνῄσκω σε ἀναζωπυρεῖν τὸ χάρισμα τοῦ θεοῦ, ὅ ἐστιν ἐν σοὶ διὰ τῆς ἐπιθέσεως τῶν χειρῶν μου.",
    "7": "οὐ γὰρ ἔδωκεν ἡμῖν ὁ θεὸς πνεῦμα δειλίας ἀλλὰ δυνάμεως καὶ ἀγάπης καὶ σωφρονισμοῦ.",
    "8": "μὴ οὖν ἐπαισχυνθῇς τὸ μαρτύριον τοῦ κυρίου ἡμῶν μηδὲ ἐμὲ τὸν δέσμιον αὐτοῦ, ἀλλὰ συγκακοπάθησον τῷ εὐαγγελίῳ κατὰ δύναμιν θεοῦ,",
    "9": "τοῦ σώσαντος ἡμᾶς καὶ καλέσαντος κλήσει ἁγίᾳ, οὐ κατὰ τὰ ἔργα ἡμῶν ἀλλὰ κατὰ ἰδίαν πρόθεσιν καὶ χάριν, τὴν δοθεῖσαν ἡμῖν ἐν Χριστῷ Ἰησοῦ πρὸ χρόνων αἰωνίων,",
    "10": "φανερωθεῖσαν δὲ νῦν διὰ τῆς ἐπιφανείας τοῦ σωτῆρος ἡμῶν Χριστοῦ Ἰησοῦ, καταργήσαντος μὲν τὸν θάνατον φωτίσαντος δὲ ζωὴν καὶ ἀφθαρσίαν διὰ τοῦ εὐαγγελίου",
    "11": "εἰς ὃ ἐτέθην ἐγὼ κῆρυξ καὶ ἀπόστολος καὶ διδάσκαλος,",
    "12": "δι᾽ ἣν αἰτίαν καὶ ταῦτα πάσχω· ἀλλ᾽ οὐκ ἐπαισχύνομαι, οἶδα γὰρ ᾧ πεπίστευκα καὶ πέπεισμαι ὅτι δυνατός ἐστιν τὴν παραθήκην μου φυλάξαι εἰς ἐκείνην τὴν ἡμέραν.",
    "13": "ὑποτύπωσιν ἔχε ὑγιαινόντων λόγων ὧν παρ᾽ ἐμοῦ ἤκουσας ἐν πίστει καὶ ἀγάπῃ τῇ ἐν Χριστῷ Ἰησοῦ·",
    "14": "τὴν καλὴν παραθήκην φύλαξον διὰ πνεύματος ἁγίου τοῦ ἐνοικοῦντος ἐν ἡμῖν.",
    "15": "Οἶδας τοῦτο, ὅτι ἀπεστράφησάν με πάντες οἱ ἐν τῇ Ἀσίᾳ, ὧν ἐστιν Φύγελος καὶ Ἑρμογένης.",
    "16": "δῴη ἔλεος ὁ κύριος τῷ Ὀνησιφόρου οἴκῳ, ὅτι πολλάκις με ἀνέψυξεν καὶ τὴν ἅλυσίν μου οὐκ ἐπαισχύνθη,",
    "17": "ἀλλὰ γενόμενος ἐν Ῥώμῃ σπουδαίως ἐζήτησέν με καὶ εὗρεν·",
    "18": "δῴη αὐτῷ ὁ κύριος εὑρεῖν ἔλεος παρὰ κυρίου ἐν ἐκείνῃ τῇ ἡμέρᾳ. καὶ ὅσα ἐν Ἐφέσῳ διηκόνησεν, βέλτιον σὺ γινώσκεις."
};
    const paragraphEnds = [2,14,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 3,
        "title": "Fidelidade ao evangelho",
        "sourceTitle": "Loyalty to the Gospel"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TI"] = window.ScripturaScriptureTexts.UBS5["2TI"] || {};
    window.ScripturaScriptureTexts.UBS5["2TI"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"] = window.ScripturaScriptureHeadings.UBS5["2TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"][1] = unnumberedPassages;
})();
