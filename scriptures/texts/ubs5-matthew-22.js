/* UBS5 — Evangelho segundo Mateus, capítulo 22.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἀποκριθεὶς ὁ Ἰησοῦς πάλιν εἶπεν ἐν παραβολαῖς αὐτοῖς λέγων,",
    "2": "Ὡμοιώθη ἡ βασιλεία τῶν οὐρανῶν ἀνθρώπῳ βασιλεῖ, ὅστις ἐποίησεν γάμους τῷ υἱῷ αὐτοῦ.",
    "3": "καὶ ἀπέστειλεν τοὺς δούλους αὐτοῦ καλέσαι τοὺς κεκλημένους εἰς τοὺς γάμους, καὶ οὐκ ἤθελον ἐλθεῖν.",
    "4": "πάλιν ἀπέστειλεν ἄλλους δούλους λέγων, Εἴπατε τοῖς κεκλημένοις, Ἰδοὺ τὸ ἄριστόν μου ἡτοίμακα, οἱ ταῦροί μου καὶ τὰ σιτιστὰ τεθυμένα καὶ πάντα ἕτοιμα· δεῦτε εἰς τοὺς γάμους.",
    "5": "οἱ δὲ ἀμελήσαντες ἀπῆλθον, ὃς μὲν εἰς τὸν ἴδιον ἀγρόν, ὃς δὲ ἐπὶ τὴν ἐμπορίαν αὐτοῦ·",
    "6": "οἱ δὲ λοιποὶ κρατήσαντες τοὺς δούλους αὐτοῦ ὕβρισαν καὶ ἀπέκτειναν.",
    "7": "ὁ δὲ βασιλεὺς ὠργίσθη καὶ πέμψας τὰ στρατεύματα αὐτοῦ ἀπώλεσεν τοὺς φονεῖς ἐκείνους καὶ τὴν πόλιν αὐτῶν ἐνέπρησεν.",
    "8": "τότε λέγει τοῖς δούλοις αὐτοῦ, Ὁ μὲν γάμος ἕτοιμός ἐστιν, οἱ δὲ κεκλημένοι οὐκ ἦσαν ἄξιοι·",
    "9": "πορεύεσθε οὖν ἐπὶ τὰς διεξόδους τῶν ὁδῶν καὶ ὅσους ἐὰν εὕρητε καλέσατε εἰς τοὺς γάμους.",
    "10": "καὶ ἐξελθόντες οἱ δοῦλοι ἐκεῖνοι εἰς τὰς ὁδοὺς συνήγαγον πάντας οὓς εὗρον, πονηρούς τε καὶ ἀγαθούς· καὶ ἐπλήσθη ὁ γάμος ἀνακειμένων.",
    "11": "εἰσελθὼν δὲ ὁ βασιλεὺς θεάσασθαι τοὺς ἀνακειμένους εἶδεν ἐκεῖ ἄνθρωπον οὐκ ἐνδεδυμένον ἔνδυμα γάμου,",
    "12": "καὶ λέγει αὐτῷ, Ἑταῖρε, πῶς εἰσῆλθες ὧδε μὴ ἔχων ἔνδυμα γάμου; ὁ δὲ ἐφιμώθη.",
    "13": "τότε ὁ βασιλεὺς εἶπεν τοῖς διακόνοις, Δήσαντες αὐτοῦ πόδας καὶ χεῖρας ἐκβάλετε αὐτὸν εἰς τὸ σκότος τὸ ἐξώτερον· ἐκεῖ ἔσται ὁ κλαυθμὸς καὶ ὁ βρυγμὸς τῶν ὀδόντων.",
    "14": "πολλοὶ γάρ εἰσιν κλητοί, ὀλίγοι δὲ ἐκλεκτοί.",
    "15": "Τότε πορευθέντες οἱ Φαρισαῖοι συμβούλιον ἔλαβον ὅπως αὐτὸν παγιδεύσωσιν ἐν λόγῳ.",
    "16": "καὶ ἀποστέλλουσιν αὐτῷ τοὺς μαθητὰς αὐτῶν μετὰ τῶν Ἡρῳδιανῶν λέγοντες, Διδάσκαλε, οἴδαμεν ὅτι ἀληθὴς εἶ καὶ τὴν ὁδὸν τοῦ θεοῦ ἐν ἀληθείᾳ διδάσκεις καὶ οὐ μέλει σοι περὶ οὐδενός· οὐ γὰρ βλέπεις εἰς πρόσωπον ἀνθρώπων.",
    "17": "εἰπὲ οὖν ἡμῖν τί σοι δοκεῖ· ἔξεστιν δοῦναι κῆνσον Καίσαρι ἢ οὔ;",
    "18": "γνοὺς δὲ ὁ Ἰησοῦς τὴν πονηρίαν αὐτῶν εἶπεν, Τί με πειράζετε, ὑποκριταί;",
    "19": "ἐπιδείξατέ μοι τὸ νόμισμα τοῦ κήνσου. οἱ δὲ προσήνεγκαν αὐτῷ δηνάριον.",
    "20": "καὶ λέγει αὐτοῖς, Τίνος ἡ εἰκὼν αὕτη καὶ ἡ ἐπιγραφή;",
    "21": "λέγουσιν αὐτῷ, Καίσαρος. τότε λέγει αὐτοῖς, Ἀπόδοτε οὖν τὰ Καίσαρος Καίσαρι καὶ τὰ τοῦ θεοῦ τῷ θεῷ.",
    "22": "καὶ ἀκούσαντες ἐθαύμασαν, καὶ ἀφέντες αὐτὸν ἀπῆλθαν.",
    "23": "Ἐν ἐκείνῃ τῇ ἡμέρᾳ προσῆλθον αὐτῷ Σαδδουκαῖοι, λέγοντες μὴ εἶναι ἀνάστασιν, καὶ ἐπηρώτησαν αὐτὸν",
    "24": "λέγοντες, Διδάσκαλε, Μωϋσῆς εἶπεν, Ἐάν τις ἀποθάνῃ μὴ ἔχων τέκνα, ἐπιγαμβρεύσει ὁ ἀδελφὸς αὐτοῦ τὴν γυναῖκα αὐτοῦ καὶ ἀναστήσει σπέρμα τῷ ἀδελφῷ αὐτοῦ.",
    "25": "ἦσαν δὲ παρ᾽ ἡμῖν ἑπτὰ ἀδελφοί· καὶ ὁ πρῶτος γήμας ἐτελεύτησεν, καὶ μὴ ἔχων σπέρμα ἀφῆκεν τὴν γυναῖκα αὐτοῦ τῷ ἀδελφῷ αὐτοῦ·",
    "26": "ὁμοίως καὶ ὁ δεύτερος καὶ ὁ τρίτος ἕως τῶν ἑπτά.",
    "27": "ὕστερον δὲ πάντων ἀπέθανεν ἡ γυνή.",
    "28": "ἐν τῇ ἀναστάσει οὖν τίνος τῶν ἑπτὰ ἔσται γυνή; πάντες γὰρ ἔσχον αὐτήν·",
    "29": "ἀποκριθεὶς δὲ ὁ Ἰησοῦς εἶπεν αὐτοῖς, Πλανᾶσθε μὴ εἰδότες τὰς γραφὰς μηδὲ τὴν δύναμιν τοῦ θεοῦ·",
    "30": "ἐν γὰρ τῇ ἀναστάσει οὔτε γαμοῦσιν οὔτε γαμίζονται, ἀλλ᾽ ὡς ἄγγελοι ἐν τῷ οὐρανῷ εἰσιν.",
    "31": "περὶ δὲ τῆς ἀναστάσεως τῶν νεκρῶν οὐκ ἀνέγνωτε τὸ ῥηθὲν ὑμῖν ὑπὸ τοῦ θεοῦ λέγοντος,",
    "32": "Ἐγώ εἰμι ὁ θεὸς Ἀβραὰμ καὶ ὁ θεὸς Ἰσαὰκ καὶ ὁ θεὸς Ἰακώβ; οὐκ ἔστιν [ὁ] θεὸς νεκρῶν ἀλλὰ ζώντων.",
    "33": "καὶ ἀκούσαντες οἱ ὄχλοι ἐξεπλήσσοντο ἐπὶ τῇ διδαχῇ αὐτοῦ.",
    "34": "Οἱ δὲ Φαρισαῖοι ἀκούσαντες ὅτι ἐφίμωσεν τοὺς Σαδδουκαίους συνήχθησαν ἐπὶ τὸ αὐτό,",
    "35": "καὶ ἐπηρώτησεν εἷς ἐξ αὐτῶν [νομικὸς] πειράζων αὐτόν,",
    "36": "Διδάσκαλε, ποία ἐντολὴ μεγάλη ἐν τῷ νόμῳ;",
    "37": "ὁ δὲ ἔφη αὐτῷ, Ἀγαπήσεις κύριον τὸν θεόν σου ἐν ὅλῃ τῇ καρδίᾳ σου καὶ ἐν ὅλῃ τῇ ψυχῇ σου καὶ ἐν ὅλῃ τῇ διανοίᾳ σου·",
    "38": "αὕτη ἐστὶν ἡ μεγάλη καὶ πρώτη ἐντολή.",
    "39": "δευτέρα δὲ ὁμοία αὐτῇ, Ἀγαπήσεις τὸν πλησίον σου ὡς σεαυτόν.",
    "40": "ἐν ταύταις ταῖς δυσὶν ἐντολαῖς ὅλος ὁ νόμος κρέμαται καὶ οἱ προφῆται.",
    "41": "Συνηγμένων δὲ τῶν Φαρισαίων ἐπηρώτησεν αὐτοὺς ὁ Ἰησοῦς",
    "42": "λέγων, Τί ὑμῖν δοκεῖ περὶ τοῦ Χριστοῦ; τίνος υἱός ἐστιν; λέγουσιν αὐτῷ, Τοῦ Δαυίδ.",
    "43": "λέγει αὐτοῖς, Πῶς οὖν Δαυὶδ ἐν πνεύματι καλεῖ αὐτὸν κύριον λέγων,",
    "44": "Εἶπεν κύριος τῷ κυρίῳ μου,\nΚάθου ἐκ δεξιῶν μου,\nἕως ἂν θῶ τοὺς ἐχθρούς σου ὑποκάτω τῶν ποδῶν σου;",
    "45": "εἰ οὖν Δαυὶδ καλεῖ αὐτὸν κύριον, πῶς υἱὸς αὐτοῦ ἐστιν;",
    "46": "καὶ οὐδεὶς ἐδύνατο ἀποκριθῆναι αὐτῷ λόγον οὐδὲ ἐτόλμησέν τις ἀπ᾽ ἐκείνης τῆς ἡμέρας ἐπερωτῆσαι αὐτὸν οὐκέτι."
};
    const paragraphEnds = [14,22,33,40,46];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Parable of the Marriage Feast",
        "sourceTitle": "The Parable of the Marriage Feast",
        "parallel": "(Lk 14.15‑24)"
    },
    {
        "beforeVerse": 15,
        "title": "Paying Taxes to Caesar",
        "sourceTitle": "Paying Taxes to Caesar",
        "parallel": "(Mk 12.13‑17; Lk 20.20‑26)"
    },
    {
        "beforeVerse": 23,
        "title": "The Question about the Resurrection",
        "sourceTitle": "The Question about the Resurrection",
        "parallel": "(Mk 12.18‑27; Lk 20.27‑40)"
    },
    {
        "beforeVerse": 34,
        "title": "The Great Commandment",
        "sourceTitle": "The Great Commandment",
        "parallel": "(Mk 12.28‑34; Lk 10.25‑28)"
    },
    {
        "beforeVerse": 41,
        "title": "The Question about David’s Son",
        "sourceTitle": "The Question about David’s Son",
        "parallel": "(Mk 12.35‑37; Lk 20.41‑44)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[22] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[22] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[22] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[22] = unnumberedPassages;
})();
