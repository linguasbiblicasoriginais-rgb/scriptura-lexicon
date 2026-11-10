/* UBS5 — Primeira Epístola de João, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego e paratexto separados; disposição poética mantida nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὃ ἦν ἀπ᾽ ἀρχῆς, ὃ ἀκηκόαμεν, ὃ ἑωράκαμεν τοῖς ὀφθαλμοῖς ἡμῶν, ὃ ἐθεασάμεθα καὶ αἱ χεῖρες ἡμῶν ἐψηλάφησαν περὶ τοῦ λόγου τῆς ζωῆς –",
    "2": "καὶ ἡ ζωὴ ἐφανερώθη, καὶ ἑωράκαμεν καὶ μαρτυροῦμεν καὶ ἀπαγγέλλομεν ὑμῖν τὴν ζωὴν τὴν αἰώνιον ἥτις ἦν πρὸς τὸν πατέρα καὶ ἐφανερώθη ἡμῖν –",
    "3": "ὃ ἑωράκαμεν καὶ ἀκηκόαμεν, ἀπαγγέλλομεν καὶ ὑμῖν, ἵνα καὶ ὑμεῖς κοινωνίαν ἔχητε μεθ᾽ ἡμῶν. καὶ ἡ κοινωνία δὲ ἡ ἡμετέρα μετὰ τοῦ πατρὸς καὶ μετὰ τοῦ υἱοῦ αὐτοῦ Ἰησοῦ Χριστοῦ.",
    "4": "καὶ ταῦτα γράφομεν ἡμεῖς, ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη.",
    "5": "Καὶ ἔστιν αὕτη ἡ ἀγγελία ἣν ἀκηκόαμεν ἀπ᾽ αὐτοῦ καὶ ἀναγγέλλομεν ὑμῖν, ὅτι ὁ θεὸς φῶς ἐστιν καὶ σκοτία ἐν αὐτῷ οὐκ ἔστιν οὐδεμία.",
    "6": "Ἐὰν εἴπωμεν ὅτι κοινωνίαν ἔχομεν μετ᾽ αὐτοῦ καὶ ἐν τῷ σκότει περιπατῶμεν, ψευδόμεθα καὶ οὐ ποιοῦμεν τὴν ἀλήθειαν·",
    "7": "ἐὰν ἐν τῷ φωτὶ περιπατῶμεν, ὡς αὐτός ἐστιν ἐν τῷ φωτί, κοινωνίαν ἔχομεν μετ᾽ ἀλλήλων, καὶ τὸ αἷμα Ἰησοῦ τοῦ υἱοῦ αὐτοῦ καθαρίζει ἡμᾶς ἀπὸ πάσης ἁμαρτίας.",
    "8": "ἐὰν εἴπωμεν ὅτι ἁμαρτίαν οὐκ ἔχομεν, ἑαυτοὺς πλανῶμεν καὶ ἡ ἀλήθεια οὐκ ἔστιν ἐν ἡμῖν.",
    "9": "ἐὰν ὁμολογῶμεν τὰς ἁμαρτίας ἡμῶν, πιστός ἐστιν καὶ δίκαιος, ἵνα ἀφῇ ἡμῖν τὰς ἁμαρτίας καὶ καθαρίσῃ ἡμᾶς ἀπὸ πάσης ἀδικίας.",
    "10": "ἐὰν εἴπωμεν ὅτι οὐχ ἡμαρτήκαμεν, ψεύστην ποιοῦμεν αὐτόν, καὶ ὁ λόγος αὐτοῦ οὐκ ἔστιν ἐν ἡμῖν."
};
    const paragraphEnds = [4,10];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A Palavra da vida",
        "sourceTitle": "The Word of Life"
    },
    {
        "beforeVerse": 5,
        "title": "Deus é luz",
        "sourceTitle": "God is Light"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1JN"] = window.ScripturaScriptureTexts.UBS5["1JN"] || {};
    window.ScripturaScriptureTexts.UBS5["1JN"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1JN"] = window.ScripturaScriptureParagraphBreaks.UBS5["1JN"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1JN"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1JN"] = window.ScripturaScriptureHeadings.UBS5["1JN"] || {};
    window.ScripturaScriptureHeadings.UBS5["1JN"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1JN"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1JN"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1JN"][1] = unnumberedPassages;
})();
