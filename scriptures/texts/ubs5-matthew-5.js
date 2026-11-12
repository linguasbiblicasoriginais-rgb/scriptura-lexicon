/* UBS5 — Evangelho segundo Mateus, capítulo 5.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἰδὼν δὲ τοὺς ὄχλους ἀνέβη εἰς τὸ ὄρος, καὶ καθίσαντος αὐτοῦ προσῆλθαν αὐτῷ οἱ μαθηταὶ αὐτοῦ·",
    "2": "καὶ ἀνοίξας τὸ στόμα αὐτοῦ ἐδίδασκεν αὐτοὺς λέγων,",
    "3": "Μακάριοι οἱ πτωχοὶ τῷ πνεύματι,\nὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.",
    "4": "μακάριοι οἱ πενθοῦντες,\nὅτι αὐτοὶ παρακληθήσονται.",
    "5": "μακάριοι οἱ πραεῖς,\nὅτι αὐτοὶ κληρονομήσουσιν τὴν γῆν.",
    "6": "μακάριοι οἱ πεινῶντες καὶ διψῶντες τὴν δικαιοσύνην,\nὅτι αὐτοὶ χορτασθήσονται.",
    "7": "μακάριοι οἱ ἐλεήμονες,\nὅτι αὐτοὶ ἐλεηθήσονται.",
    "8": "μακάριοι οἱ καθαροὶ τῇ καρδίᾳ,\nὅτι αὐτοὶ τὸν θεὸν ὄψονται.",
    "9": "μακάριοι οἱ εἰρηνοποιοί,\nὅτι αὐτοὶ υἱοὶ θεοῦ κληθήσονται.",
    "10": "μακάριοι οἱ δεδιωγμένοι ἕνεκεν δικαιοσύνης,\nὅτι αὐτῶν ἐστιν ἡ βασιλεία τῶν οὐρανῶν.",
    "11": "μακάριοί ἐστε ὅταν ὀνειδίσωσιν ὑμᾶς καὶ διώξωσιν καὶ εἴπωσιν πᾶν πονηρὸν καθ᾽ ὑμῶν [ψευδόμενοι] ἕνεκεν ἐμοῦ.",
    "12": "χαίρετε καὶ ἀγαλλιᾶσθε, ὅτι ὁ μισθὸς ὑμῶν πολὺς ἐν τοῖς οὐρανοῖς· οὕτως γὰρ ἐδίωξαν τοὺς προφήτας τοὺς πρὸ ὑμῶν.",
    "13": "Ὑμεῖς ἐστε τὸ ἅλας τῆς γῆς· ἐὰν δὲ τὸ ἅλας μωρανθῇ, ἐν τίνι ἁλισθήσεται; εἰς οὐδὲν ἰσχύει ἔτι εἰ μὴ βληθὲν ἔξω καταπατεῖσθαι ὑπὸ τῶν ἀνθρώπων.",
    "14": "Ὑμεῖς ἐστε τὸ φῶς τοῦ κόσμου. οὐ δύναται πόλις κρυβῆναι ἐπάνω ὄρους κειμένη·",
    "15": "οὐδὲ καίουσιν λύχνον καὶ τιθέασιν αὐτὸν ὑπὸ τὸν μόδιον ἀλλ᾽ ἐπὶ τὴν λυχνίαν, καὶ λάμπει πᾶσιν τοῖς ἐν τῇ οἰκίᾳ.",
    "16": "οὕτως λαμψάτω τὸ φῶς ὑμῶν ἔμπροσθεν τῶν ἀνθρώπων, ὅπως ἴδωσιν ὑμῶν τὰ καλὰ ἔργα καὶ δοξάσωσιν τὸν πατέρα ὑμῶν τὸν ἐν τοῖς οὐρανοῖς.",
    "17": "Μὴ νομίσητε ὅτι ἦλθον καταλῦσαι τὸν νόμον ἢ τοὺς προφήτας· οὐκ ἦλθον καταλῦσαι ἀλλὰ πληρῶσαι.",
    "18": "ἀμὴν γὰρ λέγω ὑμῖν· ἕως ἂν παρέλθῃ ὁ οὐρανὸς καὶ ἡ γῆ, ἰῶτα ἓν ἢ μία κεραία οὐ μὴ παρέλθῃ ἀπὸ τοῦ νόμου, ἕως ἂν πάντα γένηται.",
    "19": "ὃς ἐὰν οὖν λύσῃ μίαν τῶν ἐντολῶν τούτων τῶν ἐλαχίστων καὶ διδάξῃ οὕτως τοὺς ἀνθρώπους, ἐλάχιστος κληθήσεται ἐν τῇ βασιλείᾳ τῶν οὐρανῶν· ὃς δ᾽ ἂν ποιήσῃ καὶ διδάξῃ, οὗτος μέγας κληθήσεται ἐν τῇ βασιλείᾳ τῶν οὐρανῶν.",
    "20": "λέγω γὰρ ὑμῖν ὅτι ἐὰν μὴ περισσεύσῃ ὑμῶν ἡ δικαιοσύνη πλεῖον τῶν γραμματέων καὶ Φαρισαίων, οὐ μὴ εἰσέλθητε εἰς τὴν βασιλείαν τῶν οὐρανῶν.",
    "21": "Ἠκούσατε ὅτι ἐρρέθη τοῖς ἀρχαίοις, Οὐ φονεύσεις· ὃς δ᾽ ἂν φονεύσῃ, ἔνοχος ἔσται τῇ κρίσει.",
    "22": "ἐγὼ δὲ λέγω ὑμῖν ὅτι πᾶς ὁ ὀργιζόμενος τῷ ἀδελφῷ αὐτοῦ ἔνοχος ἔσται τῇ κρίσει· ὃς δ᾽ ἂν εἴπῃ τῷ ἀδελφῷ αὐτοῦ, Ῥακά, ἔνοχος ἔσται τῷ συνεδρίῳ· ὃς δ᾽ ἂν εἴπῃ, Μωρέ, ἔνοχος ἔσται εἰς τὴν γέενναν τοῦ πυρός.",
    "23": "ἐὰν οὖν προσφέρῃς τὸ δῶρόν σου ἐπὶ τὸ θυσιαστήριον κἀκεῖ μνησθῇς ὅτι ὁ ἀδελφός σου ἔχει τι κατὰ σοῦ,",
    "24": "ἄφες ἐκεῖ τὸ δῶρόν σου ἔμπροσθεν τοῦ θυσιαστηρίου καὶ ὕπαγε πρῶτον διαλλάγηθι τῷ ἀδελφῷ σου, καὶ τότε ἐλθὼν πρόσφερε τὸ δῶρόν σου.",
    "25": "ἴσθι εὐνοῶν τῷ ἀντιδίκῳ σου ταχύ, ἕως ὅτου εἶ μετ᾽ αὐτοῦ ἐν τῇ ὁδῷ, μήποτέ σε παραδῷ ὁ ἀντίδικος τῷ κριτῇ καὶ ὁ κριτὴς τῷ ὑπηρέτῃ καὶ εἰς φυλακὴν βληθήσῃ·",
    "26": "ἀμὴν λέγω σοι, οὐ μὴ ἐξέλθῃς ἐκεῖθεν, ἕως ἂν ἀποδῷς τὸν ἔσχατον κοδράντην.",
    "27": "Ἠκούσατε ὅτι ἐρρέθη, Οὐ μοιχεύσεις.",
    "28": "ἐγὼ δὲ λέγω ὑμῖν ὅτι πᾶς ὁ βλέπων γυναῖκα πρὸς τὸ ἐπιθυμῆσαι αὐτὴν ἤδη ἐμοίχευσεν αὐτὴν ἐν τῇ καρδίᾳ αὐτοῦ.",
    "29": "εἰ δὲ ὁ ὀφθαλμός σου ὁ δεξιὸς σκανδαλίζει σε, ἔξελε αὐτὸν καὶ βάλε ἀπὸ σοῦ· συμφέρει γάρ σοι ἵνα ἀπόληται ἓν τῶν μελῶν σου καὶ μὴ ὅλον τὸ σῶμά σου βληθῇ εἰς γέενναν.",
    "30": "καὶ εἰ ἡ δεξιά σου χεὶρ σκανδαλίζει σε, ἔκκοψον αὐτὴν καὶ βάλε ἀπὸ σοῦ· συμφέρει γάρ σοι ἵνα ἀπόληται ἓν τῶν μελῶν σου καὶ μὴ ὅλον τὸ σῶμά σου εἰς γέενναν ἀπέλθῃ.",
    "31": "Ἐρρέθη δέ, Ὃς ἂν ἀπολύσῃ τὴν γυναῖκα αὐτοῦ, δότω αὐτῇ ἀποστάσιον.",
    "32": "ἐγὼ δὲ λέγω ὑμῖν ὅτι πᾶς ὁ ἀπολύων τὴν γυναῖκα αὐτοῦ παρεκτὸς λόγου πορνείας ποιεῖ αὐτὴν μοιχευθῆναι, καὶ ὃς ἐὰν ἀπολελυμένην γαμήσῃ, μοιχᾶται.",
    "33": "Πάλιν ἠκούσατε ὅτι ἐρρέθη τοῖς ἀρχαίοις, Οὐκ ἐπιορκήσεις, ἀποδώσεις δὲ τῷ κυρίῳ τοὺς ὅρκους σου.",
    "34": "ἐγὼ δὲ λέγω ὑμῖν μὴ ὀμόσαι ὅλως· μήτε ἐν τῷ οὐρανῷ, ὅτι θρόνος ἐστὶν τοῦ θεοῦ,",
    "35": "μήτε ἐν τῇ γῇ, ὅτι ὑποπόδιόν ἐστιν τῶν ποδῶν αὐτοῦ, μήτε εἰς Ἱεροσόλυμα, ὅτι πόλις ἐστὶν τοῦ μεγάλου βασιλέως,",
    "36": "μήτε ἐν τῇ κεφαλῇ σου ὀμόσῃς, ὅτι οὐ δύνασαι μίαν τρίχα λευκὴν ποιῆσαι ἢ μέλαιναν.",
    "37": "ἔστω δὲ ὁ λόγος ὑμῶν ναὶ ναί, οὒ οὔ· τὸ δὲ περισσὸν τούτων ἐκ τοῦ πονηροῦ ἐστιν.",
    "38": "Ἠκούσατε ὅτι ἐρρέθη, Ὀφθαλμὸν ἀντὶ ὀφθαλμοῦ καὶ ὀδόντα ἀντὶ ὀδόντος.",
    "39": "ἐγὼ δὲ λέγω ὑμῖν μὴ ἀντιστῆναι τῷ πονηρῷ· ἀλλ᾽ ὅστις σε ῥαπίζει εἰς τὴν δεξιὰν σιαγόνα [σου], στρέψον αὐτῷ καὶ τὴν ἄλλην·",
    "40": "καὶ τῷ θέλοντί σοι κριθῆναι καὶ τὸν χιτῶνά σου λαβεῖν, ἄφες αὐτῷ καὶ τὸ ἱμάτιον·",
    "41": "καὶ ὅστις σε ἀγγαρεύσει μίλιον ἕν, ὕπαγε μετ᾽ αὐτοῦ δύο.",
    "42": "τῷ αἰτοῦντί σε δός, καὶ τὸν θέλοντα ἀπὸ σοῦ δανίσασθαι μὴ ἀποστραφῇς.",
    "43": "Ἠκούσατε ὅτι ἐρρέθη, Ἀγαπήσεις τὸν πλησίον σου καὶ μισήσεις τὸν ἐχθρόν σου.",
    "44": "ἐγὼ δὲ λέγω ὑμῖν, ἀγαπᾶτε τοὺς ἐχθροὺς ὑμῶν καὶ προσεύχεσθε ὑπὲρ τῶν διωκόντων ὑμᾶς,",
    "45": "ὅπως γένησθε υἱοὶ τοῦ πατρὸς ὑμῶν τοῦ ἐν οὐρανοῖς, ὅτι τὸν ἥλιον αὐτοῦ ἀνατέλλει ἐπὶ πονηροὺς καὶ ἀγαθοὺς καὶ βρέχει ἐπὶ δικαίους καὶ ἀδίκους.",
    "46": "ἐὰν γὰρ ἀγαπήσητε τοὺς ἀγαπῶντας ὑμᾶς, τίνα μισθὸν ἔχετε; οὐχὶ καὶ οἱ τελῶναι τὸ αὐτὸ ποιοῦσιν;",
    "47": "καὶ ἐὰν ἀσπάσησθε τοὺς ἀδελφοὺς ὑμῶν μόνον, τί περισσὸν ποιεῖτε; οὐχὶ καὶ οἱ ἐθνικοὶ τὸ αὐτὸ ποιοῦσιν;",
    "48": "Ἔσεσθε οὖν ὑμεῖς τέλειοι ὡς ὁ πατὴρ ὑμῶν ὁ οὐράνιος τέλειός ἐστιν."
};
    const paragraphEnds = [2,12,16,20,26,30,32,37,42,48];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Sermon on the Mount",
        "sourceTitle": "The Sermon on the Mount",
        "section": "Matthew 5–7"
    },
    {
        "beforeVerse": 3,
        "title": "The Beatitudes",
        "sourceTitle": "The Beatitudes",
        "parallel": "(Lk 6.20‑23)"
    },
    {
        "beforeVerse": 13,
        "title": "Salt and Light",
        "sourceTitle": "Salt and Light",
        "parallel": "(Mk 9.50; Lk 14.34‑35)"
    },
    {
        "beforeVerse": 17,
        "title": "Teaching about the Law",
        "sourceTitle": "Teaching about the Law"
    },
    {
        "beforeVerse": 21,
        "title": "Teaching about Anger",
        "sourceTitle": "Teaching about Anger"
    },
    {
        "beforeVerse": 27,
        "title": "Teaching about Adultery",
        "sourceTitle": "Teaching about Adultery"
    },
    {
        "beforeVerse": 31,
        "title": "Teaching about Divorce",
        "sourceTitle": "Teaching about Divorce",
        "parallel": "(Mt 19.9; Mk 10.11‑12; Lk 16.18)"
    },
    {
        "beforeVerse": 33,
        "title": "Teaching about Oaths",
        "sourceTitle": "Teaching about Oaths"
    },
    {
        "beforeVerse": 38,
        "title": "Teaching about Retaliation",
        "sourceTitle": "Teaching about Retaliation",
        "parallel": "(Lk 6.29‑30)"
    },
    {
        "beforeVerse": 43,
        "title": "Love for Enemies",
        "sourceTitle": "Love for Enemies",
        "parallel": "(Lk 6.27‑28, 32‑36)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[5] = unnumberedPassages;
})();
