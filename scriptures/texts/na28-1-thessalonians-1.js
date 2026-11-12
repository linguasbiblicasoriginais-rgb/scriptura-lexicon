/* NA28 — Primeira Epístola aos Tessalonicenses, capítulo 1.
 * Fonte: transcrição integral fornecida pelo mantenedor nesta conversa em 12/11/2026.
 * Edição declarada pelo mantenedor: NA28; ainda sem cotejo independente com exemplar autorizado.
 * Preservados grafia grega, pontuação e sinais críticos da transcrição recebida.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος καὶ Σιλουανὸς καὶ Τιμόθεος τῇ ἐκκλησίᾳ Θεσσαλονικέων ἐν θεῷ πατρὶ καὶ κυρίῳ Ἰησοῦ Χριστῷ, χάρις ὑμῖν καὶ εἰρήνη.",
    "2": "Εὐχαριστοῦμεν τῷ θεῷ πάντοτε περὶ πάντων ὑμῶν μνείαν ποιούμενοι ἐπὶ τῶν προσευχῶν ἡμῶν, ἀδιαλείπτως",
    "3": "μνημονεύοντες ὑμῶν τοῦ ἔργου τῆς πίστεως καὶ τοῦ κόπου τῆς ἀγάπης καὶ τῆς ὑπομονῆς τῆς ἐλπίδος τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ ἔμπροσθεν τοῦ θεοῦ καὶ πατρὸς ἡμῶν,",
    "4": "εἰδότες, ἀδελφοὶ ἠγαπημένοι ὑπὸ [τοῦ] θεοῦ, τὴν ἐκλογὴν ὑμῶν,",
    "5": "ὅτι τὸ εὐαγγέλιον ἡμῶν οὐκ ἐγενήθη εἰς ὑμᾶς ἐν λόγῳ μόνον ἀλλὰ καὶ ἐν δυνάμει καὶ ἐν πνεύματι ἁγίῳ καὶ [ἐν] πληροφορίᾳ πολλῇ, καθὼς οἴδατε οἷοι ἐγενήθημεν [ἐν] ὑμῖν δι’ ὑμᾶς.",
    "6": "Καὶ ὑμεῖς μιμηταὶ ἡμῶν ἐγενήθητε καὶ τοῦ κυρίου, δεξάμενοι τὸν λόγον ἐν θλίψει πολλῇ μετὰ χαρᾶς πνεύματος ἁγίου,",
    "7": "ὥστε γενέσθαι ὑμᾶς τύπον πᾶσιν τοῖς πιστεύουσιν ἐν τῇ Μακεδονίᾳ καὶ ἐν τῇ Ἀχαΐᾳ.",
    "8": "ἀφ’ ὑμῶν γὰρ ἐξήχηται ὁ λόγος τοῦ κυρίου οὐ μόνον ἐν τῇ Μακεδονίᾳ καὶ [ἐν τῇ] Ἀχαΐᾳ, ἀλλ’ ἐν παντὶ τόπῳ ἡ πίστις ὑμῶν ἡ πρὸς τὸν θεὸν ἐξελήλυθεν, ὥστε μὴ χρείαν ἔχειν ἡμᾶς λαλεῖν τι.",
    "9": "αὐτοὶ γὰρ περὶ ἡμῶν ἀπαγγέλλουσιν ὁποίαν εἴσοδον ἔσχομεν πρὸς ὑμᾶς, καὶ πῶς ἐπεστρέψατε πρὸς τὸν θεὸν ἀπὸ τῶν εἰδώλων δουλεύειν θεῷ ζῶντι καὶ ἀληθινῷ",
    "10": "καὶ ἀναμένειν τὸν υἱὸν αὐτοῦ ἐκ τῶν οὐρανῶν, ὃν ἤγειρεν ἐκ [τῶν] νεκρῶν, Ἰησοῦν τὸν ῥυόμενον ἡμᾶς ἐκ τῆς ὀργῆς τῆς ἐρχομένης."
};
    const paragraphEnds = [1,10];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.NA28 = window.ScripturaScriptureTexts.NA28 || {};
    window.ScripturaScriptureTexts.NA28["1TH"] = window.ScripturaScriptureTexts.NA28["1TH"] || {};
    window.ScripturaScriptureTexts.NA28["1TH"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.NA28 = window.ScripturaScriptureParagraphBreaks.NA28 || {};
    window.ScripturaScriptureParagraphBreaks.NA28["1TH"] = window.ScripturaScriptureParagraphBreaks.NA28["1TH"] || {};
    window.ScripturaScriptureParagraphBreaks.NA28["1TH"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.NA28 = window.ScripturaScriptureHeadings.NA28 || {};
    window.ScripturaScriptureHeadings.NA28["1TH"] = window.ScripturaScriptureHeadings.NA28["1TH"] || {};
    window.ScripturaScriptureHeadings.NA28["1TH"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.NA28 = window.ScripturaScriptureUnnumberedPassages.NA28 || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["1TH"] = window.ScripturaScriptureUnnumberedPassages.NA28["1TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["1TH"][1] = unnumberedPassages;
})();
