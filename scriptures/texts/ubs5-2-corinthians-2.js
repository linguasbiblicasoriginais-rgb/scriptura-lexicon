/* UBS5 — Segunda Epístola de Paulo aos Coríntios 2.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "ἔκρινα γὰρ ἐμαυτῷ τοῦτο τὸ μὴ πάλιν ἐν λύπῃ πρὸς ὑμᾶς ἐλθεῖν.",
    "2": "εἰ γὰρ ἐγὼ λυπῶ ὑμᾶς, καὶ τίς ὁ εὐφραίνων με εἰ μὴ ὁ λυπούμενος ἐξ ἐμοῦ;",
    "3": "καὶ ἔγραψα τοῦτο αὐτό, ἵνα μὴ ἐλθὼν λύπην σχῶ ἀφ᾽ ὧν ἔδει με χαίρειν, πεποιθὼς ἐπὶ πάντας ὑμᾶς ὅτι ἡ ἐμὴ χαρὰ πάντων ὑμῶν ἐστιν.",
    "4": "ἐκ γὰρ πολλῆς θλίψεως καὶ συνοχῆς καρδίας ἔγραψα ὑμῖν διὰ πολλῶν δακρύων, οὐχ ἵνα λυπηθῆτε ἀλλὰ τὴν ἀγάπην ἵνα γνῶτε ἣν ἔχω περισσοτέρως εἰς ὑμᾶς.",
    "5": "Εἰ δέ τις λελύπηκεν, οὐκ ἐμὲ λελύπηκεν, ἀλλ᾽ ἀπὸ μέρους, ἵνα μὴ ἐπιβαρῶ, πάντας ὑμᾶς.",
    "6": "ἱκανὸν τῷ τοιούτῳ ἡ ἐπιτιμία αὕτη ἡ ὑπὸ τῶν πλειόνων,",
    "7": "ὥστε τοὐναντίον μᾶλλον ὑμᾶς χαρίσασθαι καὶ παρακαλέσαι, μή πως τῇ περισσοτέρᾳ λύπῃ καταποθῇ ὁ τοιοῦτος.",
    "8": "διὸ παρακαλῶ ὑμᾶς κυρῶσαι εἰς αὐτὸν ἀγάπην·",
    "9": "εἰς τοῦτο γὰρ καὶ ἔγραψα, ἵνα γνῶ τὴν δοκιμὴν ὑμῶν, εἰ εἰς πάντα ὑπήκοοί ἐστε.",
    "10": "ᾧ δέ τι χαρίζεσθε, κἀγώ· καὶ γὰρ ἐγὼ ὃ κεχάρισμαι, εἴ τι κεχάρισμαι, δι᾽ ὑμᾶς ἐν προσώπῳ Χριστοῦ,",
    "11": "ἵνα μὴ πλεονεκτηθῶμεν ὑπὸ τοῦ Σατανᾶ· οὐ γὰρ αὐτοῦ τὰ νοήματα ἀγνοοῦμεν.",
    "12": "Ἐλθὼν δὲ εἰς τὴν Τρῳάδα εἰς τὸ εὐαγγέλιον τοῦ Χριστοῦ καὶ θύρας μοι ἀνεῳγμένης ἐν κυρίῳ,",
    "13": "οὐκ ἔσχηκα ἄνεσιν τῷ πνεύματί μου τῷ μὴ εὑρεῖν με Τίτον τὸν ἀδελφόν μου, ἀλλ᾽ ἀποταξάμενος αὐτοῖς ἐξῆλθον εἰς Μακεδονίαν.",
    "14": "Τῷ δὲ θεῷ χάρις τῷ πάντοτε θριαμβεύοντι ἡμᾶς ἐν τῷ Χριστῷ καὶ τὴν ὀσμὴν τῆς γνώσεως αὐτοῦ φανεροῦντι δι᾽ ἡμῶν ἐν παντὶ τόπῳ·",
    "15": "ὅτι Χριστοῦ εὐωδία ἐσμὲν τῷ θεῷ ἐν τοῖς σῳζομένοις καὶ ἐν τοῖς ἀπολλυμένοις,",
    "16": "οἷς μὲν ὀσμὴ ἐκ θανάτου εἰς θάνατον, οἷς δὲ ὀσμὴ ἐκ ζωῆς εἰς ζωήν. καὶ πρὸς ταῦτα τίς ἱκανός;",
    "17": "οὐ γάρ ἐσμεν ὡς οἱ πολλοὶ καπηλεύοντες τὸν λόγον τοῦ θεοῦ, ἀλλ᾽ ὡς ἐξ εἰλικρινείας, ἀλλ᾽ ὡς ἐκ θεοῦ κατέναντι θεοῦ ἐν Χριστῷ λαλοῦμεν."
};
    const paragraphEnds = [4,11,13,17];
    const headings = [
    {
        "beforeVerse": 5,
        "title": "O perdão ao ofensor",
        "sourceTitle": "Forgiveness for the Offender"
    },
    {
        "beforeVerse": 12,
        "title": "A ansiedade e o alívio de Paulo",
        "sourceTitle": "Paul’s Anxiety and Relief"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][2] = unnumberedPassages;
})();
