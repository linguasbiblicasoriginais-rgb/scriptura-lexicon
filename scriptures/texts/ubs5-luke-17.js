/* UBS5 — Lucas 17. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Atribuição editorial de edição conforme o projeto; sem cotejo independente com UBS5 impressa.
 * Camada Fonte e metadados editoriais mantidos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Εἶπεν δὲ πρὸς τοὺς μαθητὰς αὐτοῦ, Ἀνένδεκτόν ἐστιν τοῦ τὰ σκάνδαλα μὴ ἐλθεῖν, πλὴν οὐαὶ δι᾽ οὗ ἔρχεται·",
    "2": "λυσιτελεῖ αὐτῷ εἰ λίθος μυλικὸς περίκειται περὶ τὸν τράχηλον αὐτοῦ καὶ ἔρριπται εἰς τὴν θάλασσαν ἢ ἵνα σκανδαλίσῃ τῶν μικρῶν τούτων ἕνα.",
    "3": "προσέχετε ἑαυτοῖς. ἐὰν ἁμάρτῃ ὁ ἀδελφός σου ἐπιτίμησον αὐτῷ, καὶ ἐὰν μετανοήσῃ ἄφες αὐτῷ.",
    "4": "καὶ ἐὰν ἑπτάκις τῆς ἡμέρας ἁμαρτήσῃ εἰς σὲ καὶ ἑπτάκις ἐπιστρέψῃ πρὸς σὲ λέγων, Μετανοῶ, ἀφήσεις αὐτῷ.",
    "5": "Καὶ εἶπαν οἱ ἀπόστολοι τῷ κυρίῳ, Πρόσθες ἡμῖν πίστιν.",
    "6": "εἶπεν δὲ ὁ κύριος, Εἰ ἔχετε πίστιν ὡς κόκκον σινάπεως, ἐλέγετε ἂν τῇ συκαμίνῳ [ταύτῃ], Ἐκριζώθητι καὶ φυτεύθητι ἐν τῇ θαλάσσῃ· καὶ ὑπήκουσεν ἂν ὑμῖν.",
    "7": "Τίς δὲ ἐξ ὑμῶν δοῦλον ἔχων ἀροτριῶντα ἢ ποιμαίνοντα, ὃς εἰσελθόντι ἐκ τοῦ ἀγροῦ ἐρεῖ αὐτῷ, Εὐθέως παρελθὼν ἀνάπεσε,",
    "8": "ἀλλ᾽ οὐχὶ ἐρεῖ αὐτῷ, Ἑτοίμασον τί δειπνήσω καὶ περιζωσάμενος διακόνει μοι ἕως φάγω καὶ πίω, καὶ μετὰ ταῦτα φάγεσαι καὶ πίεσαι σύ;",
    "9": "μὴ ἔχει χάριν τῷ δούλῳ ὅτι ἐποίησεν τὰ διαταχθέντα;",
    "10": "οὕτως καὶ ὑμεῖς, ὅταν ποιήσητε πάντα τὰ διαταχθέντα ὑμῖν, λέγετε ὅτι Δοῦλοι ἀχρεῖοί ἐσμεν, ὃ ὠφείλομεν ποιῆσαι πεποιήκαμεν.",
    "11": "Καὶ ἐγένετο ἐν τῷ πορεύεσθαι εἰς Ἰερουσαλὴμ καὶ αὐτὸς διήρχετο διὰ μέσον Σαμαρείας καὶ Γαλιλαίας.",
    "12": "καὶ εἰσερχομένου αὐτοῦ εἴς τινα κώμην ἀπήντησαν [αὐτῷ] δέκα λεπροὶ ἄνδρες, οἳ ἔστησαν πόρρωθεν",
    "13": "καὶ αὐτοὶ ἦραν φωνὴν λέγοντες, Ἰησοῦ ἐπιστάτα, ἐλέησον ἡμᾶς.",
    "14": "καὶ ἰδὼν εἶπεν αὐτοῖς, Πορευθέντες ἐπιδείξατε ἑαυτοὺς τοῖς ἱερεῦσιν. καὶ ἐγένετο ἐν τῷ ὑπάγειν αὐτοὺς ἐκαθαρίσθησαν.",
    "15": "εἷς δὲ ἐξ αὐτῶν, ἰδὼν ὅτι ἰάθη, ὑπέστρεψεν μετὰ φωνῆς μεγάλης δοξάζων τὸν θεόν,",
    "16": "καὶ ἔπεσεν ἐπὶ πρόσωπον παρὰ τοὺς πόδας αὐτοῦ εὐχαριστῶν αὐτῷ· καὶ αὐτὸς ἦν Σαμαρίτης.",
    "17": "ἀποκριθεὶς δὲ ὁ Ἰησοῦς εἶπεν, Οὐχὶ οἱ δέκα ἐκαθαρίσθησαν; οἱ δὲ ἐννέα ποῦ;",
    "18": "οὐχ εὑρέθησαν ὑποστρέψαντες δοῦναι δόξαν τῷ θεῷ εἰ μὴ ὁ ἀλλογενὴς οὗτος;",
    "19": "καὶ εἶπεν αὐτῷ, Ἀναστὰς πορεύου· ἡ πίστις σου σέσωκέν σε.",
    "20": "Ἐπερωτηθεὶς δὲ ὑπὸ τῶν Φαρισαίων πότε ἔρχεται ἡ βασιλεία τοῦ θεοῦ ἀπεκρίθη αὐτοῖς καὶ εἶπεν, Οὐκ ἔρχεται ἡ βασιλεία τοῦ θεοῦ μετὰ παρατηρήσεως,",
    "21": "οὐδὲ ἐροῦσιν, Ἰδοὺ ὧδε ἤ, Ἐκεῖ, ἰδοὺ γὰρ ἡ βασιλεία τοῦ θεοῦ ἐντὸς ὑμῶν ἐστιν.",
    "22": "Εἶπεν δὲ πρὸς τοὺς μαθητάς, Ἐλεύσονται ἡμέραι ὅτε ἐπιθυμήσετε μίαν τῶν ἡμερῶν τοῦ υἱοῦ τοῦ ἀνθρώπου ἰδεῖν καὶ οὐκ ὄψεσθε.",
    "23": "καὶ ἐροῦσιν ὑμῖν, Ἰδοὺ ἐκεῖ, [ἤ,] Ἰδοὺ ὧδε· μὴ ἀπέλθητε μηδὲ διώξητε.",
    "24": "ὥσπερ γὰρ ἡ ἀστραπὴ ἀστράπτουσα ἐκ τῆς ὑπὸ τὸν οὐρανὸν εἰς τὴν ὑπ᾽ οὐρανὸν λάμπει, οὕτως ἔσται ὁ υἱὸς τοῦ ἀνθρώπου [ἐν τῇ ἡμέρᾳ αὐτοῦ].",
    "25": "πρῶτον δὲ δεῖ αὐτὸν πολλὰ παθεῖν καὶ ἀποδοκιμασθῆναι ἀπὸ τῆς γενεᾶς ταύτης.",
    "26": "καὶ καθὼς ἐγένετο ἐν ταῖς ἡμέραις Νῶε, οὕτως ἔσται καὶ ἐν ταῖς ἡμέραις τοῦ υἱοῦ τοῦ ἀνθρώπου·",
    "27": "ἤσθιον, ἔπινον, ἐγάμουν, ἐγαμίζοντο, ἄχρι ἧς ἡμέρας εἰσῆλθεν Νῶε εἰς τὴν κιβωτὸν καὶ ἦλθεν ὁ κατακλυσμὸς καὶ ἀπώλεσεν πάντας.",
    "28": "ὁμοίως καθὼς ἐγένετο ἐν ταῖς ἡμέραις Λώτ· ἤσθιον, ἔπινον, ἠγόραζον, ἐπώλουν, ἐφύτευον, ᾠκοδόμουν·",
    "29": "ᾗ δὲ ἡμέρᾳ ἐξῆλθεν Λὼτ ἀπὸ Σοδόμων, ἔβρεξεν πῦρ καὶ θεῖον ἀπ᾽ οὐρανοῦ καὶ ἀπώλεσεν πάντας.",
    "30": "κατὰ τὰ αὐτὰ ἔσται ᾗ ἡμέρᾳ ὁ υἱὸς τοῦ ἀνθρώπου ἀποκαλύπτεται.",
    "31": "ἐν ἐκείνῃ τῇ ἡμέρᾳ ὃς ἔσται ἐπὶ τοῦ δώματος καὶ τὰ σκεύη αὐτοῦ ἐν τῇ οἰκίᾳ, μὴ καταβάτω ἆραι αὐτά, καὶ ὁ ἐν ἀγρῷ ὁμοίως μὴ ἐπιστρεψάτω εἰς τὰ ὀπίσω.",
    "32": "μνημονεύετε τῆς γυναικὸς Λώτ.",
    "33": "ὃς ἐὰν ζητήσῃ τὴν ψυχὴν αὐτοῦ περιποιήσασθαι ἀπολέσει αὐτήν, ὃς δ᾽ ἂν ἀπολέσῃ ζῳογονήσει αὐτήν.",
    "34": "λέγω ὑμῖν, ταύτῃ τῇ νυκτὶ ἔσονται δύο ἐπὶ κλίνης μιᾶς, ὁ εἷς παραλημφθήσεται καὶ ὁ ἕτερος ἀφεθήσεται·",
    "35": "ἔσονται δύο ἀλήθουσαι ἐπὶ τὸ αὐτό, ἡ μία παραλημφθήσεται, ἡ δὲ ἑτέρα ἀφεθήσεται.",
    "37": "καὶ ἀποκριθέντες λέγουσιν αὐτῷ, Ποῦ, κύριε; ὁ δὲ εἶπεν αὐτοῖς, Ὅπου τὸ σῶμα, ἐκεῖ καὶ οἱ ἀετοὶ ἐπισυναχθήσονται."
};
    const paragraphEnds = [4,6,10,19,37];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Alguns ensinamentos de Jesus",
        "sourceTitle": "Some Sayings of Jesus",
        "parallel": "(Mt 18.6–7, 21–22; Mc 9.42)"
    },
    {
        "beforeVerse": 11,
        "title": "A purificação de dez leprosos",
        "sourceTitle": "The Cleansing of Ten Lepers"
    },
    {
        "beforeVerse": 20,
        "title": "A vinda do Reino",
        "sourceTitle": "The Coming of the Kingdom",
        "parallel": "(Mt 24.23–28, 37–41)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.LUK = window.ScripturaScriptureTexts.UBS5.LUK || {};
    window.ScripturaScriptureTexts.UBS5.LUK[17] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK = window.ScripturaScriptureParagraphBreaks.UBS5.LUK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK[17] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.LUK = window.ScripturaScriptureHeadings.UBS5.LUK || {};
    window.ScripturaScriptureHeadings.UBS5.LUK[17] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK = window.ScripturaScriptureUnnumberedPassages.UBS5.LUK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK[17] = unnumberedPassages;
})();
