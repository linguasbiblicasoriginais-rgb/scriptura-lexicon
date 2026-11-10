/* UBS5 — Segunda Epístola de Pedro, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego e paratexto editorial mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ταύτην ἤδη, ἀγαπητοί, δευτέραν ὑμῖν γράφω ἐπιστολὴν ἐν αἷς διεγείρω ὑμῶν ἐν ὑπομνήσει τὴν εἰλικρινῆ διάνοιαν",
    "2": "μνησθῆναι τῶν προειρημένων ῥημάτων ὑπὸ τῶν ἁγίων προφητῶν καὶ τῆς τῶν ἀποστόλων ὑμῶν ἐντολῆς τοῦ κυρίου καὶ σωτῆρος.",
    "3": "τοῦτο πρῶτον γινώσκοντες ὅτι ἐλεύσονται ἐπ᾽ ἐσχάτων τῶν ἡμερῶν ἐν ἐμπαιγμονῇ ἐμπαῖκται κατὰ τὰς ἰδίας ἐπιθυμίας αὐτῶν πορευόμενοι",
    "4": "καὶ λέγοντες, Ποῦ ἐστιν ἡ ἐπαγγελία τῆς παρουσίας αὐτοῦ; ἀφ᾽ ἧς γὰρ οἱ πατέρες ἐκοιμήθησαν, πάντα οὕτως διαμένει ἀπ᾽ ἀρχῆς κτίσεως.",
    "5": "λανθάνει γὰρ αὐτοὺς τοῦτο θέλοντας ὅτι οὐρανοὶ ἦσαν ἔκπαλαι καὶ γῆ ἐξ ὕδατος καὶ δι᾽ ὕδατος συνεστῶσα τῷ τοῦ θεοῦ λόγῳ",
    "6": "δι᾽ ὃν ὁ τότε κόσμος ὕδατι κατακλυσθεὶς ἀπώλετο·",
    "7": "οἱ δὲ νῦν οὐρανοὶ καὶ ἡ γῆ τῷ αὐτῷ λόγῳ τεθησαυρισμένοι εἰσὶν πυρὶ τηρούμενοι εἰς ἡμέραν κρίσεως καὶ ἀπωλείας τῶν ἀσεβῶν ἀνθρώπων.",
    "8": "Ἓν δὲ τοῦτο μὴ λανθανέτω ὑμᾶς, ἀγαπητοί, ὅτι μία ἡμέρα παρὰ κυρίῳ ὡς χίλια ἔτη καὶ χίλια ἔτη ὡς ἡμέρα μία.",
    "9": "οὐ βραδύνει κύριος τῆς ἐπαγγελίας, ὥς τινες βραδύτητα ἡγοῦνται, ἀλλὰ μακροθυμεῖ εἰς ὑμᾶς μὴ βουλόμενός τινας ἀπολέσθαι ἀλλὰ πάντας εἰς μετάνοιαν χωρῆσαι.",
    "10": "Ἥξει δὲ ἡμέρα κυρίου ὡς κλέπτης, ἐν ᾗ οἱ οὐρανοὶ ῥοιζηδὸν παρελεύσονται, στοιχεῖα δὲ καυσούμενα λυθήσεται, καὶ γῆ καὶ τὰ ἐν αὐτῇ ἔργα οὐχ εὑρεθήσεται.",
    "11": "τούτων οὕτως πάντων λυομένων ποταποὺς δεῖ ὑπάρχειν ὑμᾶς ἐν ἁγίαις ἀναστροφαῖς καὶ εὐσεβείαις",
    "12": "προσδοκῶντας καὶ σπεύδοντας τὴν παρουσίαν τῆς τοῦ θεοῦ ἡμέρας δι᾽ ἣν οὐρανοὶ πυρούμενοι λυθήσονται καὶ στοιχεῖα καυσούμενα τήκεται.",
    "13": "καινοὺς δὲ οὐρανοὺς καὶ γῆν καινὴν κατὰ τὸ ἐπάγγελμα αὐτοῦ προσδοκῶμεν ἐν οἷς δικαιοσύνη κατοικεῖ.",
    "14": "Διό, ἀγαπητοί, ταῦτα προσδοκῶντες σπουδάσατε ἄσπιλοι καὶ ἀμώμητοι αὐτῷ εὑρεθῆναι ἐν εἰρήνῃ",
    "15": "καὶ τὴν τοῦ κυρίου ἡμῶν μακροθυμίαν σωτηρίαν ἡγεῖσθε, καθὼς καὶ ὁ ἀγαπητὸς ἡμῶν ἀδελφὸς Παῦλος κατὰ τὴν δοθεῖσαν αὐτῷ σοφίαν ἔγραψεν ὑμῖν,",
    "16": "ὡς καὶ ἐν πάσαις ταῖς ἐπιστολαῖς λαλῶν ἐν αὐταῖς περὶ τούτων ἐν αἷς ἐστιν δυσνόητά τινα ἃ οἱ ἀμαθεῖς καὶ ἀστήρικτοι στρεβλώσουσιν ὡς καὶ τὰς λοιπὰς γραφὰς πρὸς τὴν ἰδίαν αὐτῶν ἀπώλειαν.",
    "17": "Ὑμεῖς οὖν, ἀγαπητοί, προγινώσκοντες φυλάσσεσθε, ἵνα μὴ τῇ τῶν ἀθέσμων πλάνῃ συναπαχθέντες ἐκπέσητε τοῦ ἰδίου στηριγμοῦ,",
    "18": "αὐξάνετε δὲ ἐν χάριτι καὶ γνώσει τοῦ κυρίου ἡμῶν καὶ σωτῆρος Ἰησοῦ Χριστοῦ. αὐτῷ ἡ δόξα καὶ νῦν καὶ εἰς ἡμέραν αἰῶνος."
};
    const paragraphEnds = [7,13,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A promessa da vinda do Senhor",
        "sourceTitle": "The Promise of the Lord’s Coming"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2PE"] = window.ScripturaScriptureTexts.UBS5["2PE"] || {};
    window.ScripturaScriptureTexts.UBS5["2PE"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["2PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2PE"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2PE"] = window.ScripturaScriptureHeadings.UBS5["2PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["2PE"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2PE"][3] = unnumberedPassages;
})();
