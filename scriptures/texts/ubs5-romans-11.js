/* UBS5 — Romanos 11. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Λέγω οὖν, μὴ ἀπώσατο ὁ θεὸς τὸν λαὸν αὐτοῦ; μὴ γένοιτο· καὶ γὰρ ἐγὼ Ἰσραηλίτης εἰμί, ἐκ σπέρματος Ἀβραάμ, φυλῆς Βενιαμίν.",
    "2": "οὐκ ἀπώσατο ὁ θεὸς τὸν λαὸν αὐτοῦ ὃν προέγνω. ἢ οὐκ οἴδατε ἐν Ἠλίᾳ τί λέγει ἡ γραφή, ὡς ἐντυγχάνει τῷ θεῷ κατὰ τοῦ Ἰσραήλ;",
    "3": "Κύριε, τοὺς προφήτας σου ἀπέκτειναν, τὰ θυσιαστήριά σου κατέσκαψαν, κἀγὼ ὑπελείφθην μόνος καὶ ζητοῦσιν τὴν ψυχήν μου.",
    "4": "ἀλλὰ τί λέγει αὐτῷ ὁ χρηματισμός; Κατέλιπον ἐμαυτῷ ἑπτακισχιλίους ἄνδρας, οἵτινες οὐκ ἔκαμψαν γόνυ τῇ Βάαλ.",
    "5": "οὕτως οὖν καὶ ἐν τῷ νῦν καιρῷ λεῖμμα κατ᾽ ἐκλογὴν χάριτος γέγονεν·",
    "6": "εἰ δὲ χάριτι, οὐκέτι ἐξ ἔργων, ἐπεὶ ἡ χάρις οὐκέτι γίνεται χάρις.",
    "7": "τί οὖν; ὃ ἐπιζητεῖ Ἰσραήλ, τοῦτο οὐκ ἐπέτυχεν, ἡ δὲ ἐκλογὴ ἐπέτυχεν· οἱ δὲ λοιποὶ ἐπωρώθησαν,",
    "8": "καθὼς γέγραπται,\nἜδωκεν αὐτοῖς ὁ θεὸς πνεῦμα κατανύξεως,\nὀφθαλμοὺς τοῦ μὴ βλέπειν\nκαὶ ὦτα τοῦ μὴ ἀκούειν,\nἕως τῆς σήμερον ἡμέρας.",
    "9": "καὶ Δαυὶδ λέγει,\nΓενηθήτω ἡ τράπεζα αὐτῶν εἰς παγίδα καὶ εἰς θήραν\nκαὶ εἰς σκάνδαλον καὶ εἰς ἀνταπόδομα αὐτοῖς,",
    "10": "σκοτισθήτωσαν οἱ ὀφθαλμοὶ αὐτῶν τοῦ μὴ βλέπειν\nκαὶ τὸν νῶτον αὐτῶν διὰ παντὸς σύγκαμψον.",
    "11": "Λέγω οὖν, μὴ ἔπταισαν ἵνα πέσωσιν; μὴ γένοιτο· ἀλλὰ τῷ αὐτῶν παραπτώματι ἡ σωτηρία τοῖς ἔθνεσιν εἰς τὸ παραζηλῶσαι αὐτούς.",
    "12": "εἰ δὲ τὸ παράπτωμα αὐτῶν πλοῦτος κόσμου καὶ τὸ ἥττημα αὐτῶν πλοῦτος ἐθνῶν, πόσῳ μᾶλλον τὸ πλήρωμα αὐτῶν.",
    "13": "Ὑμῖν δὲ λέγω τοῖς ἔθνεσιν· ἐφ᾽ ὅσον μὲν οὖν εἰμι ἐγὼ ἐθνῶν ἀπόστολος, τὴν διακονίαν μου δοξάζω,",
    "14": "εἴ πως παραζηλώσω μου τὴν σάρκα καὶ σώσω τινὰς ἐξ αὐτῶν.",
    "15": "εἰ γὰρ ἡ ἀποβολὴ αὐτῶν καταλλαγὴ κόσμου, τίς ἡ πρόσλημψις εἰ μὴ ζωὴ ἐκ νεκρῶν;",
    "16": "εἰ δὲ ἡ ἀπαρχὴ ἁγία, καὶ τὸ φύραμα· καὶ εἰ ἡ ῥίζα ἁγία, καὶ οἱ κλάδοι.",
    "17": "Εἰ δέ τινες τῶν κλάδων ἐξεκλάσθησαν, σὺ δὲ ἀγριέλαιος ὢν ἐνεκεντρίσθης ἐν αὐτοῖς καὶ συγκοινωνὸς τῆς ῥίζης τῆς πιότητος τῆς ἐλαίας ἐγένου,",
    "18": "μὴ κατακαυχῶ τῶν κλάδων· εἰ δὲ κατακαυχᾶσαι οὐ σὺ τὴν ῥίζαν βαστάζεις ἀλλ᾽ ἡ ῥίζα σέ.",
    "19": "ἐρεῖς οὖν, Ἐξεκλάσθησαν κλάδοι ἵνα ἐγὼ ἐγκεντρισθῶ.",
    "20": "καλῶς· τῇ ἀπιστίᾳ ἐξεκλάσθησαν, σὺ δὲ τῇ πίστει ἕστηκας. μὴ ὑψηλὰ φρόνει ἀλλὰ φοβοῦ·",
    "21": "εἰ γὰρ ὁ θεὸς τῶν κατὰ φύσιν κλάδων οὐκ ἐφείσατο, [μή πως] οὐδὲ σοῦ φείσεται.",
    "22": "ἴδε οὖν χρηστότητα καὶ ἀποτομίαν θεοῦ· ἐπὶ μὲν τοὺς πεσόντας ἀποτομία, ἐπὶ δὲ σὲ χρηστότης θεοῦ, ἐὰν ἐπιμένῃς τῇ χρηστότητι, ἐπεὶ καὶ σὺ ἐκκοπήσῃ.",
    "23": "κἀκεῖνοι δέ, ἐὰν μὴ ἐπιμένωσιν τῇ ἀπιστίᾳ, ἐγκεντρισθήσονται· δυνατὸς γάρ ἐστιν ὁ θεὸς πάλιν ἐγκεντρίσαι αὐτούς.",
    "24": "εἰ γὰρ σὺ ἐκ τῆς κατὰ φύσιν ἐξεκόπης ἀγριελαίου καὶ παρὰ φύσιν ἐνεκεντρίσθης εἰς καλλιέλαιον, πόσῳ μᾶλλον οὗτοι οἱ κατὰ φύσιν ἐγκεντρισθήσονται τῇ ἰδίᾳ ἐλαίᾳ.",
    "25": "Οὐ γὰρ θέλω ὑμᾶς ἀγνοεῖν, ἀδελφοί, τὸ μυστήριον τοῦτο, ἵνα μὴ ἦτε [παρ᾽] ἑαυτοῖς φρόνιμοι, ὅτι πώρωσις ἀπὸ μέρους τῷ Ἰσραὴλ γέγονεν ἄχρι οὗ τὸ πλήρωμα τῶν ἐθνῶν εἰσέλθῃ",
    "26": "καὶ οὕτως πᾶς Ἰσραὴλ σωθήσεται, καθὼς γέγραπται,\nἭξει ἐκ Σιὼν ὁ ῥυόμενος,\nἀποστρέψει ἀσεβείας ἀπὸ Ἰακώβ.",
    "27": "καὶ αὕτη αὐτοῖς ἡ παρ᾽ ἐμοῦ διαθήκη,\nὅταν ἀφέλωμαι τὰς ἁμαρτίας αὐτῶν.",
    "28": "κατὰ μὲν τὸ εὐαγγέλιον ἐχθροὶ δι᾽ ὑμᾶς, κατὰ δὲ τὴν ἐκλογὴν ἀγαπητοὶ διὰ τοὺς πατέρας·",
    "29": "ἀμεταμέλητα γὰρ τὰ χαρίσματα καὶ ἡ κλῆσις τοῦ θεοῦ.",
    "30": "ὥσπερ γὰρ ὑμεῖς ποτε ἠπειθήσατε τῷ θεῷ, νῦν δὲ ἠλεήθητε τῇ τούτων ἀπειθείᾳ,",
    "31": "οὕτως καὶ οὗτοι νῦν ἠπείθησαν τῷ ὑμετέρῳ ἐλέει, ἵνα καὶ αὐτοὶ [νῦν] ἐλεηθῶσιν.",
    "32": "συνέκλεισεν γὰρ ὁ θεὸς τοὺς πάντας εἰς ἀπείθειαν, ἵνα τοὺς πάντας ἐλεήσῃ.",
    "33": "Ὦ βάθος πλούτου καὶ σοφίας καὶ γνώσεως θεοῦ· ὡς ἀνεξεραύνητα τὰ κρίματα αὐτοῦ καὶ ἀνεξιχνίαστοι αἱ ὁδοὶ αὐτοῦ.",
    "34": "Τίς γὰρ ἔγνω νοῦν κυρίου;\nἢ τίς σύμβουλος αὐτοῦ ἐγένετο;",
    "35": "ἢ τίς προέδωκεν αὐτῷ,\nκαὶ ἀνταποδοθήσεται αὐτῷ;",
    "36": "ὅτι ἐξ αὐτοῦ καὶ δι᾽ αὐτοῦ καὶ εἰς αὐτὸν τὰ πάντα· αὐτῷ ἡ δόξα εἰς τοὺς αἰῶνας, ἀμήν."
};
    const paragraphEnds = [8,9,10,12,16,24,26,27,32,33,34,35,36];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O remanescente de Israel",
        "sourceTitle": "The Remnant of Israel"
    },
    {
        "beforeVerse": 11,
        "title": "A salvação dos gentios",
        "sourceTitle": "The Salvation of the Gentiles"
    },
    {
        "beforeVerse": 25,
        "title": "A restauração de Israel",
        "sourceTitle": "The Restoration of Israel"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[11] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[11] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[11] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[11] = unnumberedPassages;
})();
