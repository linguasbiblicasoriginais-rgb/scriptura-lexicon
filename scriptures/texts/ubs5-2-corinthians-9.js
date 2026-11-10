/* UBS5 — Segunda Epístola de Paulo aos Coríntios 9.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Περὶ μὲν γὰρ τῆς διακονίας τῆς εἰς τοὺς ἁγίους περισσόν μοί ἐστιν τὸ γράφειν ὑμῖν·",
    "2": "οἶδα γὰρ τὴν προθυμίαν ὑμῶν ἣν ὑπὲρ ὑμῶν καυχῶμαι Μακεδόσιν, ὅτι Ἀχαΐα παρεσκεύασται ἀπὸ πέρυσι, καὶ τὸ ὑμῶν ζῆλος ἠρέθισεν τοὺς πλείονας.",
    "3": "ἔπεμψα δὲ τοὺς ἀδελφούς, ἵνα μὴ τὸ καύχημα ἡμῶν τὸ ὑπὲρ ὑμῶν κενωθῇ ἐν τῷ μέρει τούτῳ, ἵνα καθὼς ἔλεγον παρεσκευασμένοι ἦτε,",
    "4": "μή πως ἐὰν ἔλθωσιν σὺν ἐμοὶ Μακεδόνες καὶ εὕρωσιν ὑμᾶς ἀπαρασκευάστους καταισχυνθῶμεν ἡμεῖς, ἵνα μὴ λέγω ὑμεῖς, ἐν τῇ ὑποστάσει ταύτῃ.",
    "5": "ἀναγκαῖον οὖν ἡγησάμην παρακαλέσαι τοὺς ἀδελφούς, ἵνα προέλθωσιν εἰς ὑμᾶς καὶ προκαταρτίσωσιν τὴν προεπηγγελμένην εὐλογίαν ὑμῶν, ταύτην ἑτοίμην εἶναι οὕτως ὡς εὐλογίαν καὶ μὴ ὡς πλεονεξίαν.",
    "6": "Τοῦτο δέ, ὁ σπείρων φειδομένως φειδομένως καὶ θερίσει, καὶ ὁ σπείρων ἐπ᾽ εὐλογίαις ἐπ᾽ εὐλογίαις καὶ θερίσει.",
    "7": "ἕκαστος καθὼς προῄρηται τῇ καρδίᾳ, μὴ ἐκ λύπης ἢ ἐξ ἀνάγκης· ἱλαρὸν γὰρ δότην ἀγαπᾷ ὁ θεός.",
    "8": "δυνατεῖ δὲ ὁ θεὸς πᾶσαν χάριν περισσεῦσαι εἰς ὑμᾶς, ἵνα ἐν παντὶ πάντοτε πᾶσαν αὐτάρκειαν ἔχοντες περισσεύητε εἰς πᾶν ἔργον ἀγαθόν,",
    "9": "καθὼς γέγραπται,\nἘσκόρπισεν, ἔδωκεν τοῖς πένησιν,\nἡ δικαιοσύνη αὐτοῦ μένει εἰς τὸν αἰῶνα.",
    "10": "ὁ δὲ ἐπιχορηγῶν σπόρον τῷ σπείροντι καὶ ἄρτον εἰς βρῶσιν χορηγήσει καὶ πληθυνεῖ τὸν σπόρον ὑμῶν καὶ αὐξήσει τὰ γενήματα τῆς δικαιοσύνης ὑμῶν·",
    "11": "ἐν παντὶ πλουτιζόμενοι εἰς πᾶσαν ἁπλότητα, ἥτις κατεργάζεται δι᾽ ἡμῶν εὐχαριστίαν τῷ θεῷ·",
    "12": "ὅτι ἡ διακονία τῆς λειτουργίας ταύτης οὐ μόνον ἐστὶν προσαναπληροῦσα τὰ ὑστερήματα τῶν ἁγίων, ἀλλὰ καὶ περισσεύουσα διὰ πολλῶν εὐχαριστιῶν τῷ θεῷ.",
    "13": "διὰ τῆς δοκιμῆς τῆς διακονίας ταύτης δοξάζοντες τὸν θεὸν ἐπὶ τῇ ὑποταγῇ τῆς ὁμολογίας ὑμῶν εἰς τὸ εὐαγγέλιον τοῦ Χριστοῦ καὶ ἁπλότητι τῆς κοινωνίας εἰς αὐτοὺς καὶ εἰς πάντας,",
    "14": "καὶ αὐτῶν δεήσει ὑπὲρ ὑμῶν ἐπιποθούντων ὑμᾶς διὰ τὴν ὑπερβάλλουσαν χάριν τοῦ θεοῦ ἐφ᾽ ὑμῖν.",
    "15": "χάρις τῷ θεῷ ἐπὶ τῇ ἀνεκδιηγήτῳ αὐτοῦ δωρεᾷ."
};
    const paragraphEnds = [5,9,15];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A oferta para os santos",
        "sourceTitle": "The Offering for the Saints"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][9] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][9] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][9] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][9] = unnumberedPassages;
})();
