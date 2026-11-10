/* UBS5 — Romanos 14. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τὸν δὲ ἀσθενοῦντα τῇ πίστει προσλαμβάνεσθε, μὴ εἰς διακρίσεις διαλογισμῶν.",
    "2": "ὃς μὲν πιστεύει φαγεῖν πάντα, ὁ δὲ ἀσθενῶν λάχανα ἐσθίει.",
    "3": "ὁ ἐσθίων τὸν μὴ ἐσθίοντα μὴ ἐξουθενείτω, ὁ δὲ μὴ ἐσθίων τὸν ἐσθίοντα μὴ κρινέτω, ὁ θεὸς γὰρ αὐτὸν προσελάβετο.",
    "4": "σὺ τίς εἶ ὁ κρίνων ἀλλότριον οἰκέτην; τῷ ἰδίῳ κυρίῳ στήκει ἢ πίπτει· σταθήσεται δέ, δυνατεῖ γὰρ ὁ κύριος στῆσαι αὐτόν.",
    "5": "ὃς μὲν [γὰρ] κρίνει ἡμέραν παρ᾽ ἡμέραν, ὃς δὲ κρίνει πᾶσαν ἡμέραν· ἕκαστος ἐν τῷ ἰδίῳ νοῒ πληροφορείσθω.",
    "6": "ὁ φρονῶν τὴν ἡμέραν κυρίῳ φρονεῖ· καὶ ὁ ἐσθίων κυρίῳ ἐσθίει, εὐχαριστεῖ γὰρ τῷ θεῷ· καὶ ὁ μὴ ἐσθίων κυρίῳ οὐκ ἐσθίει καὶ εὐχαριστεῖ τῷ θεῷ.",
    "7": "οὐδεὶς γὰρ ἡμῶν ἑαυτῷ ζῇ καὶ οὐδεὶς ἑαυτῷ ἀποθνῄσκει·",
    "8": "ἐάν τε γὰρ ζῶμεν, τῷ κυρίῳ ζῶμεν, ἐάν τε ἀποθνῄσκωμεν, τῷ κυρίῳ ἀποθνῄσκομεν. ἐάν τε οὖν ζῶμεν ἐάν τε ἀποθνῄσκωμεν, τοῦ κυρίου ἐσμέν.",
    "9": "εἰς τοῦτο γὰρ Χριστὸς ἀπέθανεν καὶ ἔζησεν, ἵνα καὶ νεκρῶν καὶ ζώντων κυριεύσῃ.",
    "10": "σὺ δὲ τί κρίνεις τὸν ἀδελφόν σου; ἢ καὶ σὺ τί ἐξουθενεῖς τὸν ἀδελφόν σου; πάντες γὰρ παραστησόμεθα τῷ βήματι τοῦ θεοῦ,",
    "11": "γέγραπται γάρ,\nΖῶ ἐγώ, λέγει κύριος, ὅτι ἐμοὶ κάμψει πᾶν γόνυ\nκαὶ πᾶσα γλῶσσα ἐξομολογήσεται τῷ θεῷ.",
    "12": "ἄρα [οὖν] ἕκαστος ἡμῶν περὶ ἑαυτοῦ λόγον δώσει [τῷ θεῷ].",
    "13": "Μηκέτι οὖν ἀλλήλους κρίνωμεν· ἀλλὰ τοῦτο κρίνατε μᾶλλον, τὸ μὴ τιθέναι πρόσκομμα τῷ ἀδελφῷ ἢ σκάνδαλον.",
    "14": "οἶδα καὶ πέπεισμαι ἐν κυρίῳ Ἰησοῦ ὅτι οὐδὲν κοινὸν δι᾽ ἑαυτοῦ, εἰ μὴ τῷ λογιζομένῳ τι κοινὸν εἶναι, ἐκείνῳ κοινόν.",
    "15": "εἰ γὰρ διὰ βρῶμα ὁ ἀδελφός σου λυπεῖται, οὐκέτι κατὰ ἀγάπην περιπατεῖς· μὴ τῷ βρώματί σου ἐκεῖνον ἀπόλλυε ὑπὲρ οὗ Χριστὸς ἀπέθανεν.",
    "16": "μὴ βλασφημείσθω οὖν ὑμῶν τὸ ἀγαθόν.",
    "17": "οὐ γάρ ἐστιν ἡ βασιλεία τοῦ θεοῦ βρῶσις καὶ πόσις ἀλλὰ δικαιοσύνη καὶ εἰρήνη καὶ χαρὰ ἐν πνεύματι ἁγίῳ·",
    "18": "ὁ γὰρ ἐν τούτῳ δουλεύων τῷ Χριστῷ εὐάρεστος τῷ θεῷ καὶ δόκιμος τοῖς ἀνθρώποις.",
    "19": "ἄρα οὖν τὰ τῆς εἰρήνης διώκωμεν καὶ τὰ τῆς οἰκοδομῆς τῆς εἰς ἀλλήλους.",
    "20": "μὴ ἕνεκεν βρώματος κατάλυε τὸ ἔργον τοῦ θεοῦ. πάντα μὲν καθαρά, ἀλλὰ κακὸν τῷ ἀνθρώπῳ τῷ διὰ προσκόμματος ἐσθίοντι.",
    "21": "καλὸν τὸ μὴ φαγεῖν κρέα μηδὲ πιεῖν οἶνον μηδὲ ἐν ᾧ ὁ ἀδελφός σου προσκόπτει.",
    "22": "σὺ πίστιν [ἣν] ἔχεις κατὰ σεαυτὸν ἔχε ἐνώπιον τοῦ θεοῦ. μακάριος ὁ μὴ κρίνων ἑαυτὸν ἐν ᾧ δοκιμάζει·",
    "23": "ὁ δὲ διακρινόμενος ἐὰν φάγῃ κατακέκριται, ὅτι οὐκ ἐκ πίστεως· πᾶν δὲ ὃ οὐκ ἐκ πίστεως ἁμαρτία ἐστίν."
};
    const paragraphEnds = [11,12,23];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Não julgueis vosso irmão",
        "sourceTitle": "Do Not Judge Your Brother"
    },
    {
        "beforeVerse": 13,
        "title": "Não façais vosso irmão tropeçar",
        "sourceTitle": "Do Not Make Your Brother Stumble"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[14] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[14] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[14] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[14] = unnumberedPassages;
})();
