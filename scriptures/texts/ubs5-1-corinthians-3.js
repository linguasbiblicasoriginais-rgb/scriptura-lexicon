/* UBS5 — Primeira Epístola aos Coríntios 3.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Κἀγώ, ἀδελφοί, οὐκ ἠδυνήθην λαλῆσαι ὑμῖν ὡς πνευματικοῖς ἀλλ᾽ ὡς σαρκίνοις, ὡς νηπίοις ἐν Χριστῷ.",
    "2": "γάλα ὑμᾶς ἐπότισα, οὐ βρῶμα· οὔπω γὰρ ἐδύνασθε. ἀλλ᾽ οὐδὲ ἔτι νῦν δύνασθε,",
    "3": "ἔτι γὰρ σαρκικοί ἐστε. ὅπου γὰρ ἐν ὑμῖν ζῆλος καὶ ἔρις, οὐχὶ σαρκικοί ἐστε καὶ κατὰ ἄνθρωπον περιπατεῖτε;",
    "4": "ὅταν γὰρ λέγῃ τις, Ἐγὼ μέν εἰμι Παύλου, ἕτερος δέ, Ἐγὼ Ἀπολλῶ, οὐκ ἄνθρωποί ἐστε;",
    "5": "τί οὖν ἐστιν Ἀπολλῶς; τί δέ ἐστιν Παῦλος; διάκονοι δι᾽ ὧν ἐπιστεύσατε, καὶ ἑκάστῳ ὡς ὁ κύριος ἔδωκεν.",
    "6": "ἐγὼ ἐφύτευσα, Ἀπολλῶς ἐπότισεν, ἀλλ᾽ ὁ θεὸς ηὔξανεν·",
    "7": "ὥστε οὔτε ὁ φυτεύων ἐστίν τι οὔτε ὁ ποτίζων ἀλλ᾽ ὁ αὐξάνων θεός.",
    "8": "ὁ φυτεύων δὲ καὶ ὁ ποτίζων ἕν εἰσιν, ἕκαστος δὲ τὸν ἴδιον μισθὸν λήμψεται κατὰ τὸν ἴδιον κόπον·",
    "9": "θεοῦ γάρ ἐσμεν συνεργοί, θεοῦ γεώργιον, θεοῦ οἰκοδομή ἐστε.",
    "10": "Κατὰ τὴν χάριν τοῦ θεοῦ τὴν δοθεῖσάν μοι ὡς σοφὸς ἀρχιτέκτων θεμέλιον ἔθηκα, ἄλλος δὲ ἐποικοδομεῖ. ἕκαστος δὲ βλεπέτω πῶς ἐποικοδομεῖ.",
    "11": "θεμέλιον γὰρ ἄλλον οὐδεὶς δύναται θεῖναι παρὰ τὸν κείμενον, ὅς ἐστιν Ἰησοῦς Χριστός.",
    "12": "εἰ δέ τις ἐποικοδομεῖ ἐπὶ τὸν θεμέλιον χρυσόν, ἄργυρον, λίθους τιμίους, ξύλα, χόρτον, καλάμην,",
    "13": "ἑκάστου τὸ ἔργον φανερὸν γενήσεται, ἡ γὰρ ἡμέρα δηλώσει, ὅτι ἐν πυρὶ ἀποκαλύπτεται· καὶ ἑκάστου τὸ ἔργον ὁποῖόν ἐστιν τὸ πῦρ [αὐτὸ] δοκιμάσει.",
    "14": "εἴ τινος τὸ ἔργον μενεῖ ὃ ἐποικοδόμησεν, μισθὸν λήμψεται·",
    "15": "εἴ τινος τὸ ἔργον κατακαήσεται, ζημιωθήσεται, αὐτὸς δὲ σωθήσεται, οὕτως δὲ ὡς διὰ πυρός.",
    "16": "οὐκ οἴδατε ὅτι ναὸς θεοῦ ἐστε καὶ τὸ πνεῦμα τοῦ θεοῦ οἰκεῖ ἐν ὑμῖν;",
    "17": "εἴ τις τὸν ναὸν τοῦ θεοῦ φθείρει, φθερεῖ τοῦτον ὁ θεός· ὁ γὰρ ναὸς τοῦ θεοῦ ἅγιός ἐστιν, οἵτινές ἐστε ὑμεῖς.",
    "18": "Μηδεὶς ἑαυτὸν ἐξαπατάτω· εἴ τις δοκεῖ σοφὸς εἶναι ἐν ὑμῖν ἐν τῷ αἰῶνι τούτῳ, μωρὸς γενέσθω, ἵνα γένηται σοφός.",
    "19": "ἡ γὰρ σοφία τοῦ κόσμου τούτου μωρία παρὰ τῷ θεῷ ἐστιν. γέγραπται γάρ,\nὉ δρασσόμενος τοὺς σοφοὺς ἐν τῇ πανουργίᾳ αὐτῶν·",
    "20": "καὶ πάλιν,\nΚύριος γινώσκει τοὺς διαλογισμοὺς τῶν σοφῶν\nὅτι εἰσὶν μάταιοι.",
    "21": "ὥστε μηδεὶς καυχάσθω ἐν ἀνθρώποις· πάντα γὰρ ὑμῶν ἐστιν,",
    "22": "εἴτε Παῦλος εἴτε Ἀπολλῶς εἴτε Κηφᾶς, εἴτε κόσμος εἴτε ζωὴ εἴτε θάνατος, εἴτε ἐνεστῶτα εἴτε μέλλοντα· πάντα ὑμῶν,",
    "23": "ὑμεῖς δὲ Χριστοῦ, Χριστὸς δὲ θεοῦ."
};
    const paragraphEnds = [9,17,19,20,23];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Cooperadores de Deus",
        "sourceTitle": "Fellow Workmen for God"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][3] = unnumberedPassages;
})();
