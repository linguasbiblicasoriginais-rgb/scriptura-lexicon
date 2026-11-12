/* NA28 — Segunda Epístola aos Coríntios, capítulo 13.
 * Fonte: transcrição grega integral fornecida pelo mantenedor em 06/11/2026.
 * Sem cotejo independente com a NA28 impressa ou seu aparato crítico.
 * Conservados sinais, acentuação, paragrafação e linhas citacionais; não inferidos itálicos ou recuos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τρίτον τοῦτο ἔρχομαι πρὸς ὑμᾶς· ἐπὶ στόματος δύο μαρτύρων καὶ τριῶν σταθήσεται πᾶν ῥῆμα.",
    "2": "προείρηκα καὶ προλέγω, ὡς παρὼν τὸ δεύτερον καὶ ἀπὼν νῦν, τοῖς προημαρτηκόσιν καὶ τοῖς λοιποῖς πᾶσιν, ὅτι ἐὰν ἔλθω εἰς τὸ πάλιν οὐ φείσομαι,",
    "3": "ἐπεὶ δοκιμὴν ζητεῖτε τοῦ ἐν ἐμοὶ λαλοῦντος Χριστοῦ, ὃς εἰς ὑμᾶς οὐκ ἀσθενεῖ ἀλλὰ δυνατεῖ ἐν ὑμῖν.",
    "4": "καὶ γὰρ ἐσταυρώθη ἐξ ἀσθενείας, ἀλλὰ ζῇ ἐκ δυνάμεως θεοῦ. καὶ γὰρ ἡμεῖς ἀσθενοῦμεν ἐν αὐτῷ, ἀλλὰ ζήσομεν σὺν αὐτῷ ἐκ δυνάμεως θεοῦ εἰς ὑμᾶς.",
    "5": "Ἑαυτοὺς πειράζετε εἰ ἐστὲ ἐν τῇ πίστει, ἑαυτοὺς δοκιμάζετε· ἢ οὐκ ἐπιγινώσκετε ἑαυτοὺς ὅτι Ἰησοῦς Χριστὸς ἐν ὑμῖν; εἰ μήτι ἀδόκιμοί ἐστε.",
    "6": "ἐλπίζω δὲ ὅτι γνώσεσθε ὅτι ἡμεῖς οὐκ ἐσμὲν ἀδόκιμοι.",
    "7": "εὐχόμεθα δὲ πρὸς τὸν θεὸν μὴ ποιῆσαι ὑμᾶς κακὸν μηδέν, οὐχ ἵνα ἡμεῖς δόκιμοι φανῶμεν, ἀλλ’ ἵνα ὑμεῖς τὸ καλὸν ποιῆτε, ἡμεῖς δὲ ὡς ἀδόκιμοι ὦμεν.",
    "8": "οὐ γὰρ δυνάμεθά τι κατὰ τῆς ἀληθείας ἀλλ’ ὑπὲρ τῆς ἀληθείας.",
    "9": "χαίρομεν γὰρ ὅταν ἡμεῖς ἀσθενῶμεν, ὑμεῖς δὲ δυνατοὶ ἦτε· τοῦτο καὶ εὐχόμεθα, τὴν ὑμῶν κατάρτισιν.",
    "10": "Διὰ τοῦτο ταῦτα ἀπὼν γράφω, ἵνα παρὼν μὴ ἀποτόμως χρήσωμαι κατὰ τὴν ἐξουσίαν ἣν ὁ κύριος ἔδωκέν μοι εἰς οἰκοδομὴν καὶ οὐκ εἰς καθαίρεσιν.",
    "11": "Λοιπόν, ἀδελφοί, χαίρετε, καταρτίζεσθε, παρακαλεῖσθε, τὸ αὐτὸ φρονεῖτε, εἰρηνεύετε, καὶ ὁ θεὸς τῆς ἀγάπης καὶ εἰρήνης ἔσται μεθ’ ὑμῶν.",
    "12": "Ἀσπάσασθε ἀλλήλους ἐν ἁγίῳ φιλήματι. Ἀσπάζονται ὑμᾶς οἱ ἅγιοι πάντες.",
    "13": "Ἡ χάρις τοῦ κυρίου Ἰησοῦ Χριστοῦ καὶ ἡ ἀγάπη τοῦ θεοῦ καὶ ἡ κοινωνία τοῦ ἁγίου πνεύματος μετὰ πάντων ὑμῶν."
};
    const paragraphEnds = [4,10,12,13];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.NA28 = window.ScripturaScriptureTexts.NA28 || {};
    window.ScripturaScriptureTexts.NA28["2CO"] = window.ScripturaScriptureTexts.NA28["2CO"] || {};
    window.ScripturaScriptureTexts.NA28["2CO"][13] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.NA28 = window.ScripturaScriptureParagraphBreaks.NA28 || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"] = window.ScripturaScriptureParagraphBreaks.NA28["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"][13] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.NA28 = window.ScripturaScriptureHeadings.NA28 || {};
    window.ScripturaScriptureHeadings.NA28["2CO"] = window.ScripturaScriptureHeadings.NA28["2CO"] || {};
    window.ScripturaScriptureHeadings.NA28["2CO"][13] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.NA28 = window.ScripturaScriptureUnnumberedPassages.NA28 || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] = window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"][13] = unnumberedPassages;
})();
