/* UBS5 — Romanos 3. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τί οὖν τὸ περισσὸν τοῦ Ἰουδαίου ἢ τίς ἡ ὠφέλεια τῆς περιτομῆς;",
    "2": "πολὺ κατὰ πάντα τρόπον. πρῶτον μὲν [γὰρ] ὅτι ἐπιστεύθησαν τὰ λόγια τοῦ θεοῦ.",
    "3": "τί γάρ; εἰ ἠπίστησάν τινες, μὴ ἡ ἀπιστία αὐτῶν τὴν πίστιν τοῦ θεοῦ καταργήσει;",
    "4": "μὴ γένοιτο· γινέσθω δὲ ὁ θεὸς ἀληθής, πᾶς δὲ ἄνθρωπος ψεύστης, καθὼς γέγραπται,\nὍπως ἂν δικαιωθῇς ἐν τοῖς λόγοις σου\nκαὶ νικήσεις ἐν τῷ κρίνεσθαί σε.",
    "5": "εἰ δὲ ἡ ἀδικία ἡμῶν θεοῦ δικαιοσύνην συνίστησιν, τί ἐροῦμεν; μὴ ἄδικος ὁ θεὸς ὁ ἐπιφέρων τὴν ὀργήν; κατὰ ἄνθρωπον λέγω.",
    "6": "μὴ γένοιτο· ἐπεὶ πῶς κρινεῖ ὁ θεὸς τὸν κόσμον;",
    "7": "εἰ δὲ ἡ ἀλήθεια τοῦ θεοῦ ἐν τῷ ἐμῷ ψεύσματι ἐπερίσσευσεν εἰς τὴν δόξαν αὐτοῦ, τί ἔτι κἀγὼ ὡς ἁμαρτωλὸς κρίνομαι;",
    "8": "καὶ μὴ καθὼς βλασφημούμεθα καὶ καθώς φασίν τινες ἡμᾶς λέγειν ὅτι Ποιήσωμεν τὰ κακά, ἵνα ἔλθῃ τὰ ἀγαθά; ὧν τὸ κρίμα ἔνδικόν ἐστιν.",
    "9": "Τί οὖν; προεχόμεθα; οὐ πάντως· προῃτιασάμεθα γὰρ Ἰουδαίους τε καὶ Ἕλληνας πάντας ὑφ᾽ ἁμαρτίαν εἶναι,",
    "10": "καθὼς γέγραπται ὅτι\nΟὐκ ἔστιν δίκαιος οὐδὲ εἷς,",
    "11": "οὐκ ἔστιν ὁ συνίων,\nοὐκ ἔστιν ὁ ἐκζητῶν τὸν θεόν.",
    "12": "πάντες ἐξέκλιναν ἅμα ἠχρεώθησαν·\nοὐκ ἔστιν ὁ ποιῶν χρηστότητα,\n[οὐκ ἔστιν] ἕως ἑνός.",
    "13": "τάφος ἀνεῳγμένος ὁ λάρυγξ αὐτῶν,\nταῖς γλώσσαις αὐτῶν ἐδολιοῦσαν,\nἰὸς ἀσπίδων ὑπὸ τὰ χείλη αὐτῶν·",
    "14": "ὧν τὸ στόμα ἀρᾶς καὶ πικρίας γέμει,",
    "15": "ὀξεῖς οἱ πόδες αὐτῶν ἐκχέαι αἷμα,",
    "16": "σύντριμμα καὶ ταλαιπωρία ἐν ταῖς ὁδοῖς αὐτῶν,",
    "17": "καὶ ὁδὸν εἰρήνης οὐκ ἔγνωσαν.",
    "18": "οὐκ ἔστιν φόβος θεοῦ ἀπέναντι τῶν ὀφθαλμῶν αὐτῶν.",
    "19": "Οἴδαμεν δὲ ὅτι ὅσα ὁ νόμος λέγει τοῖς ἐν τῷ νόμῳ λαλεῖ, ἵνα πᾶν στόμα φραγῇ καὶ ὑπόδικος γένηται πᾶς ὁ κόσμος τῷ θεῷ·",
    "20": "διότι ἐξ ἔργων νόμου οὐ δικαιωθήσεται πᾶσα σὰρξ ἐνώπιον αὐτοῦ, διὰ γὰρ νόμου ἐπίγνωσις ἁμαρτίας.",
    "21": "Νυνὶ δὲ χωρὶς νόμου δικαιοσύνη θεοῦ πεφανέρωται μαρτυρουμένη ὑπὸ τοῦ νόμου καὶ τῶν προφητῶν,",
    "22": "δικαιοσύνη δὲ θεοῦ διὰ πίστεως Ἰησοῦ Χριστοῦ εἰς πάντας τοὺς πιστεύοντας. οὐ γάρ ἐστιν διαστολή,",
    "23": "πάντες γὰρ ἥμαρτον καὶ ὑστεροῦνται τῆς δόξης τοῦ θεοῦ",
    "24": "δικαιούμενοι δωρεὰν τῇ αὐτοῦ χάριτι διὰ τῆς ἀπολυτρώσεως τῆς ἐν Χριστῷ Ἰησοῦ·",
    "25": "ὃν προέθετο ὁ θεὸς ἱλαστήριον διὰ [τῆς] πίστεως ἐν τῷ αὐτοῦ αἵματι εἰς ἔνδειξιν τῆς δικαιοσύνης αὐτοῦ διὰ τὴν πάρεσιν τῶν προγεγονότων ἁμαρτημάτων",
    "26": "ἐν τῇ ἀνοχῇ τοῦ θεοῦ, πρὸς τὴν ἔνδειξιν τῆς δικαιοσύνης αὐτοῦ ἐν τῷ νῦν καιρῷ, εἰς τὸ εἶναι αὐτὸν δίκαιον καὶ δικαιοῦντα τὸν ἐκ πίστεως Ἰησοῦ.",
    "27": "Ποῦ οὖν ἡ καύχησις; ἐξεκλείσθη. διὰ ποίου νόμου; τῶν ἔργων; οὐχί, ἀλλὰ διὰ νόμου πίστεως.",
    "28": "λογιζόμεθα γὰρ δικαιοῦσθαι πίστει ἄνθρωπον χωρὶς ἔργων νόμου.",
    "29": "ἢ Ἰουδαίων ὁ θεὸς μόνον; οὐχὶ καὶ ἐθνῶν; ναὶ καὶ ἐθνῶν,",
    "30": "εἴπερ εἷς ὁ θεὸς ὃς δικαιώσει περιτομὴν ἐκ πίστεως καὶ ἀκροβυστίαν διὰ τῆς πίστεως.",
    "31": "νόμον οὖν καταργοῦμεν διὰ τῆς πίστεως; μὴ γένοιτο· ἀλλὰ νόμον ἱστάνομεν."
};
    const paragraphEnds = [4,8,10,11,12,13,14,15,16,17,18,20,26,31];
    const headings = [
    {
        "beforeVerse": 9,
        "title": "Não há um justo sequer",
        "sourceTitle": "There is None Righteous"
    },
    {
        "beforeVerse": 21,
        "title": "A justiça mediante a fé",
        "sourceTitle": "Righteousness through Faith"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[3] = unnumberedPassages;
})();
