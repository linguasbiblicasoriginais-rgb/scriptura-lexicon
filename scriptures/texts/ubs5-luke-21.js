/* UBS5 — Lucas 21. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Atribuição editorial de edição conforme o projeto; sem cotejo independente com UBS5 impressa.
 * Camada Fonte e metadados editoriais mantidos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀναβλέψας δὲ εἶδεν τοὺς βάλλοντας εἰς τὸ γαζοφυλάκιον τὰ δῶρα αὐτῶν πλουσίους.",
    "2": "εἶδεν δέ τινα χήραν πενιχρὰν βάλλουσαν ἐκεῖ λεπτὰ δύο,",
    "3": "καὶ εἶπεν, Ἀληθῶς λέγω ὑμῖν ὅτι ἡ χήρα αὕτη ἡ πτωχὴ πλεῖον πάντων ἔβαλεν·",
    "4": "πάντες γὰρ οὗτοι ἐκ τοῦ περισσεύοντος αὐτοῖς ἔβαλον εἰς τὰ δῶρα, αὕτη δὲ ἐκ τοῦ ὑστερήματος αὐτῆς πάντα τὸν βίον ὃν εἶχεν ἔβαλεν.",
    "5": "Καί τινων λεγόντων περὶ τοῦ ἱεροῦ ὅτι λίθοις καλοῖς καὶ ἀναθήμασιν κεκόσμηται εἶπεν,",
    "6": "Ταῦτα ἃ θεωρεῖτε ἐλεύσονται ἡμέραι ἐν αἷς οὐκ ἀφεθήσεται λίθος ἐπὶ λίθῳ ὃς οὐ καταλυθήσεται.",
    "7": "Ἐπηρώτησαν δὲ αὐτὸν λέγοντες, Διδάσκαλε, πότε οὖν ταῦτα ἔσται καὶ τί τὸ σημεῖον ὅταν μέλλῃ ταῦτα γίνεσθαι;",
    "8": "ὁ δὲ εἶπεν, Βλέπετε μὴ πλανηθῆτε· πολλοὶ γὰρ ἐλεύσονται ἐπὶ τῷ ὀνόματί μου λέγοντες, Ἐγώ εἰμι, καί, Ὁ καιρὸς ἤγγικεν. μὴ πορευθῆτε ὀπίσω αὐτῶν.",
    "9": "ὅταν δὲ ἀκούσητε πολέμους καὶ ἀκαταστασίας, μὴ πτοηθῆτε· δεῖ γὰρ ταῦτα γενέσθαι πρῶτον, ἀλλ᾽ οὐκ εὐθέως τὸ τέλος.",
    "10": "Τότε ἔλεγεν αὐτοῖς, Ἐγερθήσεται ἔθνος ἐπ᾽ ἔθνος καὶ βασιλεία ἐπὶ βασιλείαν,",
    "11": "σεισμοί τε μεγάλοι καὶ κατὰ τόπους λιμοὶ καὶ λοιμοὶ ἔσονται, φόβητρά τε καὶ ἀπ᾽ οὐρανοῦ σημεῖα μεγάλα ἔσται.",
    "12": "πρὸ δὲ τούτων πάντων ἐπιβαλοῦσιν ἐφ᾽ ὑμᾶς τὰς χεῖρας αὐτῶν καὶ διώξουσιν, παραδιδόντες εἰς τὰς συναγωγὰς καὶ φυλακάς, ἀπαγομένους ἐπὶ βασιλεῖς καὶ ἡγεμόνας ἕνεκεν τοῦ ὀνόματός μου·",
    "13": "ἀποβήσεται ὑμῖν εἰς μαρτύριον.",
    "14": "θέτε οὖν ἐν ταῖς καρδίαις ὑμῶν μὴ προμελετᾶν ἀπολογηθῆναι·",
    "15": "ἐγὼ γὰρ δώσω ὑμῖν στόμα καὶ σοφίαν ᾗ οὐ δυνήσονται ἀντιστῆναι ἢ ἀντειπεῖν ἅπαντες οἱ ἀντικείμενοι ὑμῖν.",
    "16": "παραδοθήσεσθε δὲ καὶ ὑπὸ γονέων καὶ ἀδελφῶν καὶ συγγενῶν καὶ φίλων, καὶ θανατώσουσιν ἐξ ὑμῶν,",
    "17": "καὶ ἔσεσθε μισούμενοι ὑπὸ πάντων διὰ τὸ ὄνομά μου.",
    "18": "καὶ θρὶξ ἐκ τῆς κεφαλῆς ὑμῶν οὐ μὴ ἀπόληται.",
    "19": "ἐν τῇ ὑπομονῇ ὑμῶν κτήσασθε τὰς ψυχὰς ὑμῶν.",
    "20": "Ὅταν δὲ ἴδητε κυκλουμένην ὑπὸ στρατοπέδων Ἰερουσαλήμ, τότε γνῶτε ὅτι ἤγγικεν ἡ ἐρήμωσις αὐτῆς.",
    "21": "τότε οἱ ἐν τῇ Ἰουδαίᾳ φευγέτωσαν εἰς τὰ ὄρη καὶ οἱ ἐν μέσῳ αὐτῆς ἐκχωρείτωσαν καὶ οἱ ἐν ταῖς χώραις μὴ εἰσερχέσθωσαν εἰς αὐτήν,",
    "22": "ὅτι ἡμέραι ἐκδικήσεως αὗταί εἰσιν τοῦ πλησθῆναι πάντα τὰ γεγραμμένα.",
    "23": "οὐαὶ ταῖς ἐν γαστρὶ ἐχούσαις καὶ ταῖς θηλαζούσαις ἐν ἐκείναις ταῖς ἡμέραις· ἔσται γὰρ ἀνάγκη μεγάλη ἐπὶ τῆς γῆς καὶ ὀργὴ τῷ λαῷ τούτῳ,",
    "24": "καὶ πεσοῦνται στόματι μαχαίρης καὶ αἰχμαλωτισθήσονται εἰς τὰ ἔθνη πάντα, καὶ Ἰερουσαλὴμ ἔσται πατουμένη ὑπὸ ἐθνῶν, ἄχρι οὗ πληρωθῶσιν καιροὶ ἐθνῶν.",
    "25": "Καὶ ἔσονται σημεῖα ἐν ἡλίῳ καὶ σελήνῃ καὶ ἄστροις, καὶ ἐπὶ τῆς γῆς συνοχὴ ἐθνῶν ἐν ἀπορίᾳ ἤχους θαλάσσης καὶ σάλου,",
    "26": "ἀποψυχόντων ἀνθρώπων ἀπὸ φόβου καὶ προσδοκίας τῶν ἐπερχομένων τῇ οἰκουμένῃ, αἱ γὰρ δυνάμεις τῶν οὐρανῶν σαλευθήσονται.",
    "27": "καὶ τότε ὄψονται τὸν υἱὸν τοῦ ἀνθρώπου ἐρχόμενον ἐν νεφέλῃ μετὰ δυνάμεως καὶ δόξης πολλῆς.",
    "28": "ἀρχομένων δὲ τούτων γίνεσθαι ἀνακύψατε καὶ ἐπάρατε τὰς κεφαλὰς ὑμῶν, διότι ἐγγίζει ἡ ἀπολύτρωσις ὑμῶν.",
    "29": "Καὶ εἶπεν παραβολὴν αὐτοῖς· Ἴδετε τὴν συκῆν καὶ πάντα τὰ δένδρα·",
    "30": "ὅταν προβάλωσιν ἤδη, βλέποντες ἀφ᾽ ἑαυτῶν γινώσκετε ὅτι ἤδη ἐγγὺς τὸ θέρος ἐστίν·",
    "31": "οὕτως καὶ ὑμεῖς, ὅταν ἴδητε ταῦτα γινόμενα, γινώσκετε ὅτι ἐγγύς ἐστιν ἡ βασιλεία τοῦ θεοῦ.",
    "32": "ἀμὴν λέγω ὑμῖν ὅτι οὐ μὴ παρέλθῃ ἡ γενεὰ αὕτη ἕως ἂν πάντα γένηται.",
    "33": "ὁ οὐρανὸς καὶ ἡ γῆ παρελεύσονται, οἱ δὲ λόγοι μου οὐ μὴ παρελεύσονται.",
    "34": "Προσέχετε δὲ ἑαυτοῖς μήποτε βαρηθῶσιν ὑμῶν αἱ καρδίαι ἐν κραιπάλῃ καὶ μέθῃ καὶ μερίμναις βιωτικαῖς καὶ ἐπιστῇ ἐφ᾽ ὑμᾶς αἰφνίδιος ἡ ἡμέρα ἐκείνη",
    "35": "ὡς παγίς· ἐπεισελεύσεται γὰρ ἐπὶ πάντας τοὺς καθημένους ἐπὶ πρόσωπον πάσης τῆς γῆς.",
    "36": "ἀγρυπνεῖτε δὲ ἐν παντὶ καιρῷ δεόμενοι ἵνα κατισχύσητε ἐκφυγεῖν ταῦτα πάντα τὰ μέλλοντα γίνεσθαι καὶ σταθῆναι ἔμπροσθεν τοῦ υἱοῦ τοῦ ἀνθρώπου.",
    "37": "Ἦν δὲ τὰς ἡμέρας ἐν τῷ ἱερῷ διδάσκων, τὰς δὲ νύκτας ἐξερχόμενος ηὐλίζετο εἰς τὸ ὄρος τὸ καλούμενον Ἐλαιῶν·",
    "38": "καὶ πᾶς ὁ λαὸς ὤρθριζεν πρὸς αὐτὸν ἐν τῷ ἱερῷ ἀκούειν αὐτοῦ."
};
    const paragraphEnds = [4,6,19,24,28,33,36,38];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A oferta da viúva",
        "sourceTitle": "The Widow’s Offering",
        "parallel": "(Mc 12.41–44)"
    },
    {
        "beforeVerse": 5,
        "title": "Jesus anuncia a destruição do templo",
        "sourceTitle": "The Destruction of the Temple Foretold",
        "parallel": "(Mt 24.1–2; Mc 13.1–2)"
    },
    {
        "beforeVerse": 7,
        "title": "Sinais e perseguições",
        "sourceTitle": "Signs and Persecutions",
        "parallel": "(Mt 24.3–14; Mc 13.3–13)"
    },
    {
        "beforeVerse": 20,
        "title": "O anúncio da destruição de Jerusalém",
        "sourceTitle": "The Destruction of Jerusalem Foretold",
        "parallel": "(Mt 24.15–21; Mc 13.14–19)"
    },
    {
        "beforeVerse": 25,
        "title": "A vinda do Filho do Homem",
        "sourceTitle": "The Coming of the Son of Man",
        "parallel": "(Mt 24.29–31; Mc 13.24–27)"
    },
    {
        "beforeVerse": 29,
        "title": "A lição da figueira",
        "sourceTitle": "The Lesson of the Fig Tree",
        "parallel": "(Mt 24.32–35; Mc 13.28–31)"
    },
    {
        "beforeVerse": 34,
        "title": "Exortação à vigilância",
        "sourceTitle": "Exhortation to Watch"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.LUK = window.ScripturaScriptureTexts.UBS5.LUK || {};
    window.ScripturaScriptureTexts.UBS5.LUK[21] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK = window.ScripturaScriptureParagraphBreaks.UBS5.LUK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK[21] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.LUK = window.ScripturaScriptureHeadings.UBS5.LUK || {};
    window.ScripturaScriptureHeadings.UBS5.LUK[21] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK = window.ScripturaScriptureUnnumberedPassages.UBS5.LUK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK[21] = unnumberedPassages;
})();
