/* UBS5 — Segunda Epístola de Paulo aos Coríntios 1.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος ἀπόστολος Χριστοῦ Ἰησοῦ διὰ θελήματος θεοῦ καὶ Τιμόθεος ὁ ἀδελφὸς τῇ ἐκκλησίᾳ τοῦ θεοῦ τῇ οὔσῃ ἐν Κορίνθῳ σὺν τοῖς ἁγίοις πᾶσιν τοῖς οὖσιν ἐν ὅλῃ τῇ Ἀχαΐᾳ,",
    "2": "χάρις ὑμῖν καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ.",
    "3": "Εὐλογητὸς ὁ θεὸς καὶ πατὴρ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, ὁ πατὴρ τῶν οἰκτιρμῶν καὶ θεὸς πάσης παρακλήσεως,",
    "4": "ὁ παρακαλῶν ἡμᾶς ἐπὶ πάσῃ τῇ θλίψει ἡμῶν εἰς τὸ δύνασθαι ἡμᾶς παρακαλεῖν τοὺς ἐν πάσῃ θλίψει διὰ τῆς παρακλήσεως ἧς παρακαλούμεθα αὐτοὶ ὑπὸ τοῦ θεοῦ.",
    "5": "ὅτι καθὼς περισσεύει τὰ παθήματα τοῦ Χριστοῦ εἰς ἡμᾶς, οὕτως διὰ τοῦ Χριστοῦ περισσεύει καὶ ἡ παράκλησις ἡμῶν.",
    "6": "εἴτε δὲ θλιβόμεθα, ὑπὲρ τῆς ὑμῶν παρακλήσεως καὶ σωτηρίας· εἴτε παρακαλούμεθα, ὑπὲρ τῆς ὑμῶν παρακλήσεως τῆς ἐνεργουμένης ἐν ὑπομονῇ τῶν αὐτῶν παθημάτων ὧν καὶ ἡμεῖς πάσχομεν.",
    "7": "καὶ ἡ ἐλπὶς ἡμῶν βεβαία ὑπὲρ ὑμῶν εἰδότες ὅτι ὡς κοινωνοί ἐστε τῶν παθημάτων, οὕτως καὶ τῆς παρακλήσεως.",
    "8": "Οὐ γὰρ θέλομεν ὑμᾶς ἀγνοεῖν, ἀδελφοί, ὑπὲρ τῆς θλίψεως ἡμῶν τῆς γενομένης ἐν τῇ Ἀσίᾳ, ὅτι καθ᾽ ὑπερβολὴν ὑπὲρ δύναμιν ἐβαρήθημεν ὥστε ἐξαπορηθῆναι ἡμᾶς καὶ τοῦ ζῆν·",
    "9": "ἀλλ᾽ αὐτοὶ ἐν ἑαυτοῖς τὸ ἀπόκριμα τοῦ θανάτου ἐσχήκαμεν, ἵνα μὴ πεποιθότες ὦμεν ἐφ᾽ ἑαυτοῖς ἀλλ᾽ ἐπὶ τῷ θεῷ τῷ ἐγείροντι τοὺς νεκρούς·",
    "10": "ὃς ἐκ τηλικούτου θανάτου ἐρρύσατο ἡμᾶς καὶ ῥύσεται, εἰς ὃν ἠλπίκαμεν [ὅτι] καὶ ἔτι ῥύσεται,",
    "11": "συνυπουργούντων καὶ ὑμῶν ὑπὲρ ἡμῶν τῇ δεήσει, ἵνα ἐκ πολλῶν προσώπων τὸ εἰς ἡμᾶς χάρισμα διὰ πολλῶν εὐχαριστηθῇ ὑπὲρ ἡμῶν.",
    "12": "Ἡ γὰρ καύχησις ἡμῶν αὕτη ἐστίν, τὸ μαρτύριον τῆς συνειδήσεως ἡμῶν, ὅτι ἐν ἁπλότητι καὶ εἰλικρινείᾳ τοῦ θεοῦ, [καὶ] οὐκ ἐν σοφίᾳ σαρκικῇ ἀλλ᾽ ἐν χάριτι θεοῦ, ἀνεστράφημεν ἐν τῷ κόσμῳ, περισσοτέρως δὲ πρὸς ὑμᾶς.",
    "13": "οὐ γὰρ ἄλλα γράφομεν ὑμῖν ἀλλ᾽ ἢ ἃ ἀναγινώσκετε ἢ καὶ ἐπιγινώσκετε· ἐλπίζω δὲ ὅτι ἕως τέλους ἐπιγνώσεσθε,",
    "14": "καθὼς καὶ ἐπέγνωτε ἡμᾶς ἀπὸ μέρους, ὅτι καύχημα ὑμῶν ἐσμεν καθάπερ καὶ ὑμεῖς ἡμῶν ἐν τῇ ἡμέρᾳ τοῦ κυρίου [ἡμῶν] Ἰησοῦ.",
    "15": "Καὶ ταύτῃ τῇ πεποιθήσει ἐβουλόμην πρότερον πρὸς ὑμᾶς ἐλθεῖν, ἵνα δευτέραν χάριν σχῆτε,",
    "16": "καὶ δι᾽ ὑμῶν διελθεῖν εἰς Μακεδονίαν καὶ πάλιν ἀπὸ Μακεδονίας ἐλθεῖν πρὸς ὑμᾶς καὶ ὑφ᾽ ὑμῶν προπεμφθῆναι εἰς τὴν Ἰουδαίαν.",
    "17": "τοῦτο οὖν βουλόμενος μήτι ἄρα τῇ ἐλαφρίᾳ ἐχρησάμην; ἢ ἃ βουλεύομαι κατὰ σάρκα βουλεύομαι, ἵνα ᾖ παρ᾽ ἐμοὶ τὸ Ναὶ ναὶ καὶ τὸ Οὒ οὔ;",
    "18": "πιστὸς δὲ ὁ θεὸς ὅτι ὁ λόγος ἡμῶν ὁ πρὸς ὑμᾶς οὐκ ἔστιν Ναὶ καὶ Οὔ.",
    "19": "ὁ τοῦ θεοῦ γὰρ υἱὸς Ἰησοῦς Χριστὸς ὁ ἐν ὑμῖν δι᾽ ἡμῶν κηρυχθείς, δι᾽ ἐμοῦ καὶ Σιλουανοῦ καὶ Τιμοθέου, οὐκ ἐγένετο Ναὶ καὶ Οὒ ἀλλὰ Ναὶ ἐν αὐτῷ γέγονεν.",
    "20": "ὅσαι γὰρ ἐπαγγελίαι θεοῦ, ἐν αὐτῷ τὸ Ναί· διὸ καὶ δι᾽ αὐτοῦ τὸ Ἀμὴν τῷ θεῷ πρὸς δόξαν δι᾽ ἡμῶν.",
    "21": "ὁ δὲ βεβαιῶν ἡμᾶς σὺν ὑμῖν εἰς Χριστὸν καὶ χρίσας ἡμᾶς θεός,",
    "22": "ὁ καὶ σφραγισάμενος ἡμᾶς καὶ δοὺς τὸν ἀρραβῶνα τοῦ πνεύματος ἐν ταῖς καρδίαις ἡμῶν.",
    "23": "Ἐγὼ δὲ μάρτυρα τὸν θεὸν ἐπικαλοῦμαι ἐπὶ τὴν ἐμὴν ψυχήν, ὅτι φειδόμενος ὑμῶν οὐκέτι ἦλθον εἰς Κόρινθον.",
    "24": "οὐχ ὅτι κυριεύομεν ὑμῶν τῆς πίστεως ἀλλὰ συνεργοί ἐσμεν τῆς χαρᾶς ὑμῶν· τῇ γὰρ πίστει ἑστήκατε."
};
    const paragraphEnds = [2,7,11,14,22,24];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 3,
        "title": "A ação de graças de Paulo após a tribulação",
        "sourceTitle": "Paul’s Thanksgiving after Affliction"
    },
    {
        "beforeVerse": 12,
        "title": "O adiamento da visita de Paulo",
        "sourceTitle": "The Postponement of Paul’s Visit"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][1] = unnumberedPassages;
})();
