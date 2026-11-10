/* UBS5 — Apocalipse de João, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τῷ ἀγγέλῳ τῆς ἐν Ἐφέσῳ ἐκκλησίας γράψον·\nΤάδε λέγει ὁ κρατῶν τοὺς ἑπτὰ ἀστέρας ἐν τῇ δεξιᾷ αὐτοῦ, ὁ περιπατῶν ἐν μέσῳ τῶν ἑπτὰ λυχνιῶν τῶν χρυσῶν·",
    "2": "Οἶδα τὰ ἔργα σου καὶ τὸν κόπον καὶ τὴν ὑπομονήν σου καὶ ὅτι οὐ δύνῃ βαστάσαι κακούς, καὶ ἐπείρασας τοὺς λέγοντας ἑαυτοὺς ἀποστόλους καὶ οὐκ εἰσὶν καὶ εὗρες αὐτοὺς ψευδεῖς,",
    "3": "καὶ ὑπομονὴν ἔχεις καὶ ἐβάστασας διὰ τὸ ὄνομά μου καὶ οὐ κεκοπίακες.",
    "4": "ἀλλ᾽ ἔχω κατὰ σοῦ ὅτι τὴν ἀγάπην σου τὴν πρώτην ἀφῆκες.",
    "5": "μνημόνευε οὖν πόθεν πέπτωκας καὶ μετανόησον καὶ τὰ πρῶτα ἔργα ποίησον· εἰ δὲ μή, ἔρχομαί σοι καὶ κινήσω τὴν λυχνίαν σου ἐκ τοῦ τόπου αὐτῆς, ἐὰν μὴ μετανοήσῃς.",
    "6": "ἀλλὰ τοῦτο ἔχεις, ὅτι μισεῖς τὰ ἔργα τῶν Νικολαϊτῶν ἃ κἀγὼ μισῶ.",
    "7": "ὁ ἔχων οὖς ἀκουσάτω τί τὸ πνεῦμα λέγει ταῖς ἐκκλησίαις. τῷ νικῶντι δώσω αὐτῷ φαγεῖν ἐκ τοῦ ξύλου τῆς ζωῆς, ὅ ἐστιν ἐν τῷ παραδείσῳ τοῦ θεοῦ.",
    "8": "Καὶ τῷ ἀγγέλῳ τῆς ἐν Σμύρνῃ ἐκκλησίας γράψον·\nΤάδε λέγει ὁ πρῶτος καὶ ὁ ἔσχατος, ὃς ἐγένετο νεκρὸς καὶ ἔζησεν·",
    "9": "Οἶδά σου τὴν θλῖψιν καὶ τὴν πτωχείαν, ἀλλὰ πλούσιος εἶ, καὶ τὴν βλασφημίαν ἐκ τῶν λεγόντων Ἰουδαίους εἶναι ἑαυτοὺς καὶ οὐκ εἰσὶν ἀλλὰ συναγωγὴ τοῦ Σατανᾶ.",
    "10": "μηδὲν φοβοῦ ἃ μέλλεις πάσχειν. ἰδοὺ μέλλει βάλλειν ὁ διάβολος ἐξ ὑμῶν εἰς φυλακὴν ἵνα πειρασθῆτε καὶ ἕξετε θλῖψιν ἡμερῶν δέκα. γίνου πιστὸς ἄχρι θανάτου, καὶ δώσω σοι τὸν στέφανον τῆς ζωῆς.",
    "11": "ὁ ἔχων οὖς ἀκουσάτω τί τὸ πνεῦμα λέγει ταῖς ἐκκλησίαις. ὁ νικῶν οὐ μὴ ἀδικηθῇ ἐκ τοῦ θανάτου τοῦ δευτέρου.",
    "12": "Καὶ τῷ ἀγγέλῳ τῆς ἐν Περγάμῳ ἐκκλησίας γράψον·\nΤάδε λέγει ὁ ἔχων τὴν ῥομφαίαν τὴν δίστομον τὴν ὀξεῖαν·",
    "13": "Οἶδα ποῦ κατοικεῖς, ὅπου ὁ θρόνος τοῦ Σατανᾶ, καὶ κρατεῖς τὸ ὄνομά μου καὶ οὐκ ἠρνήσω τὴν πίστιν μου καὶ ἐν ταῖς ἡμέραις Ἀντιπᾶς ὁ μάρτυς μου ὁ πιστός μου, ὃς ἀπεκτάνθη παρ᾽ ὑμῖν, ὅπου ὁ Σατανᾶς κατοικεῖ.",
    "14": "ἀλλ᾽ ἔχω κατὰ σοῦ ὀλίγα ὅτι ἔχεις ἐκεῖ κρατοῦντας τὴν διδαχὴν Βαλαάμ, ὃς ἐδίδασκεν τῷ Βαλὰκ βαλεῖν σκάνδαλον ἐνώπιον τῶν υἱῶν Ἰσραὴλ φαγεῖν εἰδωλόθυτα καὶ πορνεῦσαι.",
    "15": "οὕτως ἔχεις καὶ σὺ κρατοῦντας τὴν διδαχὴν [τῶν] Νικολαϊτῶν ὁμοίως.",
    "16": "μετανόησον οὖν· εἰ δὲ μή, ἔρχομαί σοι ταχὺ καὶ πολεμήσω μετ᾽ αὐτῶν ἐν τῇ ῥομφαίᾳ τοῦ στόματός μου.",
    "17": "ὁ ἔχων οὖς ἀκουσάτω τί τὸ πνεῦμα λέγει ταῖς ἐκκλησίαις. τῷ νικῶντι δώσω αὐτῷ τοῦ μάννα τοῦ κεκρυμμένου καὶ δώσω αὐτῷ ψῆφον λευκήν, καὶ ἐπὶ τὴν ψῆφον ὄνομα καινὸν γεγραμμένον ὃ οὐδεὶς οἶδεν εἰ μὴ ὁ λαμβάνων.",
    "18": "Καὶ τῷ ἀγγέλῳ τῆς ἐν Θυατείροις ἐκκλησίας γράψον·\nΤάδε λέγει ὁ υἱὸς τοῦ θεοῦ, ὁ ἔχων τοὺς ὀφθαλμοὺς αὐτοῦ ὡς φλόγα πυρὸς καὶ οἱ πόδες αὐτοῦ ὅμοιοι χαλκολιβάνῳ·",
    "19": "Οἶδά σου τὰ ἔργα καὶ τὴν ἀγάπην καὶ τὴν πίστιν καὶ τὴν διακονίαν καὶ τὴν ὑπομονήν σου, καὶ τὰ ἔργα σου τὰ ἔσχατα πλείονα τῶν πρώτων.",
    "20": "ἀλλ᾽ ἔχω κατὰ σοῦ ὅτι ἀφεῖς τὴν γυναῖκα Ἰεζάβελ, ἡ λέγουσα ἑαυτὴν προφῆτιν καὶ διδάσκει καὶ πλανᾷ τοὺς ἐμοὺς δούλους πορνεῦσαι καὶ φαγεῖν εἰδωλόθυτα.",
    "21": "καὶ ἔδωκα αὐτῇ χρόνον ἵνα μετανοήσῃ, καὶ οὐ θέλει μετανοῆσαι ἐκ τῆς πορνείας αὐτῆς.",
    "22": "ἰδοὺ βάλλω αὐτὴν εἰς κλίνην καὶ τοὺς μοιχεύοντας μετ᾽ αὐτῆς εἰς θλῖψιν μεγάλην, ἐὰν μὴ μετανοήσωσιν ἐκ τῶν ἔργων αὐτῆς,",
    "23": "καὶ τὰ τέκνα αὐτῆς ἀποκτενῶ ἐν θανάτῳ. καὶ γνώσονται πᾶσαι αἱ ἐκκλησίαι ὅτι ἐγώ εἰμι ὁ ἐραυνῶν νεφροὺς καὶ καρδίας, καὶ δώσω ὑμῖν ἑκάστῳ κατὰ τὰ ἔργα ὑμῶν.",
    "24": "ὑμῖν δὲ λέγω τοῖς λοιποῖς τοῖς ἐν Θυατείροις, ὅσοι οὐκ ἔχουσιν τὴν διδαχὴν ταύτην, οἵτινες οὐκ ἔγνωσαν τὰ βαθέα τοῦ Σατανᾶ ὡς λέγουσιν· οὐ βάλλω ἐφ᾽ ὑμᾶς ἄλλο βάρος,",
    "25": "πλὴν ὃ ἔχετε κρατήσατε ἄχρι[ς] οὗ ἂν ἥξω.",
    "26": "καὶ ὁ νικῶν καὶ ὁ τηρῶν ἄχρι τέλους τὰ ἔργα μου,\nδώσω αὐτῷ ἐξουσίαν ἐπὶ τῶν ἐθνῶν",
    "27": "καὶ ποιμανεῖ αὐτοὺς ἐν ῥάβδῳ σιδηρᾷ\nὡς τὰ σκεύη τὰ κεραμικὰ συντρίβεται,",
    "28": "ὡς κἀγὼ εἴληφα παρὰ τοῦ πατρός μου, καὶ δώσω αὐτῷ τὸν ἀστέρα τὸν πρωϊνόν.",
    "29": "ὁ ἔχων οὖς ἀκουσάτω τί τὸ πνεῦμα λέγει ταῖς ἐκκλησίαις."
};
    const paragraphEnds = [7,11,17,26,27,29];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A mensagem à igreja de Éfeso",
        "sourceTitle": "The Message to Ephesus"
    },
    {
        "beforeVerse": 8,
        "title": "A mensagem à igreja de Esmirna",
        "sourceTitle": "The Message to Smyrna"
    },
    {
        "beforeVerse": 12,
        "title": "A mensagem à igreja de Pérgamo",
        "sourceTitle": "The Message to Pergamum"
    },
    {
        "beforeVerse": 18,
        "title": "A mensagem à igreja de Tiatira",
        "sourceTitle": "The Message to Thyatira"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[2] = unnumberedPassages;
})();
