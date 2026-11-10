/* UBS5 — Segunda Epístola de Paulo aos Coríntios 10.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Αὐτὸς δὲ ἐγὼ Παῦλος παρακαλῶ ὑμᾶς διὰ τῆς πραΰτητος καὶ ἐπιεικείας τοῦ Χριστοῦ, ὃς κατὰ πρόσωπον μὲν ταπεινὸς ἐν ὑμῖν, ἀπὼν δὲ θαρρῶ εἰς ὑμᾶς·",
    "2": "δέομαι δὲ τὸ μὴ παρὼν θαρρῆσαι τῇ πεποιθήσει ᾗ λογίζομαι τολμῆσαι ἐπί τινας τοὺς λογιζομένους ἡμᾶς ὡς κατὰ σάρκα περιπατοῦντας.",
    "3": "ἐν σαρκὶ γὰρ περιπατοῦντες οὐ κατὰ σάρκα στρατευόμεθα,",
    "4": "τὰ γὰρ ὅπλα τῆς στρατείας ἡμῶν οὐ σαρκικὰ ἀλλὰ δυνατὰ τῷ θεῷ πρὸς καθαίρεσιν ὀχυρωμάτων, λογισμοὺς καθαιροῦντες",
    "5": "καὶ πᾶν ὕψωμα ἐπαιρόμενον κατὰ τῆς γνώσεως τοῦ θεοῦ, καὶ αἰχμαλωτίζοντες πᾶν νόημα εἰς τὴν ὑπακοὴν τοῦ Χριστοῦ,",
    "6": "καὶ ἐν ἑτοίμῳ ἔχοντες ἐκδικῆσαι πᾶσαν παρακοήν, ὅταν πληρωθῇ ὑμῶν ἡ ὑπακοή.",
    "7": "Τὰ κατὰ πρόσωπον βλέπετε. εἴ τις πέποιθεν ἑαυτῷ Χριστοῦ εἶναι, τοῦτο λογιζέσθω πάλιν ἐφ᾽ ἑαυτοῦ, ὅτι καθὼς αὐτὸς Χριστοῦ, οὕτως καὶ ἡμεῖς.",
    "8": "ἐάν [τε] γὰρ περισσότερόν τι καυχήσωμαι περὶ τῆς ἐξουσίας ἡμῶν ἧς ἔδωκεν ὁ κύριος εἰς οἰκοδομὴν καὶ οὐκ εἰς καθαίρεσιν ὑμῶν, οὐκ αἰσχυνθήσομαι.",
    "9": "ἵνα μὴ δόξω ὡς ἂν ἐκφοβεῖν ὑμᾶς διὰ τῶν ἐπιστολῶν·",
    "10": "ὅτι, Αἱ ἐπιστολαὶ μέν, φησίν, βαρεῖαι καὶ ἰσχυραί, ἡ δὲ παρουσία τοῦ σώματος ἀσθενὴς καὶ ὁ λόγος ἐξουθενημένος.",
    "11": "τοῦτο λογιζέσθω ὁ τοιοῦτος, ὅτι οἷοί ἐσμεν τῷ λόγῳ δι᾽ ἐπιστολῶν ἀπόντες, τοιοῦτοι καὶ παρόντες τῷ ἔργῳ.",
    "12": "Οὐ γὰρ τολμῶμεν ἐγκρῖναι ἢ συγκρῖναι ἑαυτούς τισιν τῶν ἑαυτοὺς συνιστανόντων, ἀλλ᾽ αὐτοὶ ἐν ἑαυτοῖς ἑαυτοὺς μετροῦντες καὶ συγκρίνοντες ἑαυτοὺς ἑαυτοῖς οὐ συνιᾶσιν.",
    "13": "ἡμεῖς δὲ οὐκ εἰς τὰ ἄμετρα καυχησόμεθα ἀλλὰ κατὰ τὸ μέτρον τοῦ κανόνος οὗ ἐμέρισεν ἡμῖν ὁ θεὸς μέτρου, ἐφικέσθαι ἄχρι καὶ ὑμῶν.",
    "14": "οὐ γὰρ ὡς μὴ ἐφικνούμενοι εἰς ὑμᾶς ὑπερεκτείνομεν ἑαυτούς, ἄχρι γὰρ καὶ ὑμῶν ἐφθάσαμεν ἐν τῷ εὐαγγελίῳ τοῦ Χριστοῦ,",
    "15": "οὐκ εἰς τὰ ἄμετρα καυχώμενοι ἐν ἀλλοτρίοις κόποις, ἐλπίδα δὲ ἔχοντες αὐξανομένης τῆς πίστεως ὑμῶν ἐν ὑμῖν μεγαλυνθῆναι κατὰ τὸν κανόνα ἡμῶν εἰς περισσείαν",
    "16": "εἰς τὰ ὑπερέκεινα ὑμῶν εὐαγγελίσασθαι, οὐκ ἐν ἀλλοτρίῳ κανόνι εἰς τὰ ἕτοιμα καυχήσασθαι.",
    "17": "Ὁ δὲ καυχώμενος ἐν κυρίῳ καυχάσθω·",
    "18": "οὐ γὰρ ὁ ἑαυτὸν συνιστάνων, ἐκεῖνός ἐστιν δόκιμος, ἀλλ᾽ ὃν ὁ κύριος συνίστησιν."
};
    const paragraphEnds = [6,11,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Paulo defende seu ministério",
        "sourceTitle": "Paul Defends His Ministry"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][10] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][10] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][10] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][10] = unnumberedPassages;
})();
