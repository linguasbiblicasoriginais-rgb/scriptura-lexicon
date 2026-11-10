/* UBS5 — Epístola de Paulo a Tito, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὑπομίμνῃσκε αὐτοὺς ἀρχαῖς ἐξουσίαις ὑποτάσσεσθαι, πειθαρχεῖν, πρὸς πᾶν ἔργον ἀγαθὸν ἑτοίμους εἶναι,",
    "2": "μηδένα βλασφημεῖν, ἀμάχους εἶναι, ἐπιεικεῖς, πᾶσαν ἐνδεικνυμένους πραΰτητα πρὸς πάντας ἀνθρώπους.",
    "3": "Ἦμεν γάρ ποτε καὶ ἡμεῖς ἀνόητοι, ἀπειθεῖς, πλανώμενοι, δουλεύοντες ἐπιθυμίαις καὶ ἡδοναῖς ποικίλαις, ἐν κακίᾳ καὶ φθόνῳ διάγοντες, στυγητοί, μισοῦντες ἀλλήλους.",
    "4": "ὅτε δὲ ἡ χρηστότης καὶ ἡ φιλανθρωπία ἐπεφάνη τοῦ σωτῆρος ἡμῶν θεοῦ,",
    "5": "οὐκ ἐξ ἔργων τῶν ἐν δικαιοσύνῃ ἃ ἐποιήσαμεν ἡμεῖς ἀλλὰ κατὰ τὸ αὐτοῦ ἔλεος ἔσωσεν ἡμᾶς διὰ λουτροῦ παλιγγενεσίας καὶ ἀνακαινώσεως πνεύματος ἁγίου,",
    "6": "οὗ ἐξέχεεν ἐφ᾽ ἡμᾶς πλουσίως διὰ Ἰησοῦ Χριστοῦ τοῦ σωτῆρος ἡμῶν,",
    "7": "ἵνα δικαιωθέντες τῇ ἐκείνου χάριτι κληρονόμοι γενηθῶμεν κατ᾽ ἐλπίδα ζωῆς αἰωνίου.",
    "8": "Πιστὸς ὁ λόγος· καὶ περὶ τούτων βούλομαί σε διαβεβαιοῦσθαι, ἵνα φροντίζωσιν καλῶν ἔργων προΐστασθαι οἱ πεπιστευκότες θεῷ· ταῦτά ἐστιν καλὰ καὶ ὠφέλιμα τοῖς ἀνθρώποις.",
    "9": "μωρὰς δὲ ζητήσεις καὶ γενεαλογίας καὶ ἔρεις καὶ μάχας νομικὰς περιΐστασο· εἰσὶν γὰρ ἀνωφελεῖς καὶ μάταιοι.",
    "10": "αἱρετικὸν ἄνθρωπον μετὰ μίαν καὶ δευτέραν νουθεσίαν παραιτοῦ,",
    "11": "εἰδὼς ὅτι ἐξέστραπται ὁ τοιοῦτος καὶ ἁμαρτάνει ὢν αὐτοκατάκριτος.",
    "12": "Ὅταν πέμψω Ἀρτεμᾶν πρὸς σὲ ἢ Τύχικον, σπούδασον ἐλθεῖν πρός με εἰς Νικόπολιν, ἐκεῖ γὰρ κέκρικα παραχειμάσαι.",
    "13": "Ζηνᾶν τὸν νομικὸν καὶ Ἀπολλῶν σπουδαίως πρόπεμψον, ἵνα μηδὲν αὐτοῖς λείπῃ.",
    "14": "μανθανέτωσαν δὲ καὶ οἱ ἡμέτεροι καλῶν ἔργων προΐστασθαι εἰς τὰς ἀναγκαίας χρείας, ἵνα μὴ ὦσιν ἄκαρποι.",
    "15": "Ἀσπάζονταί σε οἱ μετ᾽ ἐμοῦ πάντες. Ἄσπασαι τοὺς φιλοῦντας ἡμᾶς ἐν πίστει. ἡ χάρις μετὰ πάντων ὑμῶν."
};
    const paragraphEnds = [7,11,14,15];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A prática das boas obras",
        "sourceTitle": "Maintain Good Deeds"
    },
    {
        "beforeVerse": 12,
        "title": "Instruções pessoais e saudações",
        "sourceTitle": "Personal Instructions and Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.TIT = window.ScripturaScriptureTexts.UBS5.TIT || {};
    window.ScripturaScriptureTexts.UBS5.TIT[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT = window.ScripturaScriptureParagraphBreaks.UBS5.TIT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.TIT = window.ScripturaScriptureHeadings.UBS5.TIT || {};
    window.ScripturaScriptureHeadings.UBS5.TIT[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT = window.ScripturaScriptureUnnumberedPassages.UBS5.TIT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT[3] = unnumberedPassages;
})();
