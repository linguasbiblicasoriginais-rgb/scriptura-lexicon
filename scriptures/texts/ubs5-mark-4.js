/* UBS5 — Marcos 4. Texto grego fornecido pelo usuário em 09/11/2026.
 * Fonte, títulos editoriais em português, referências e limites de parágrafo independentes.
 * Sem cotejo independente com a edição impressa da UBS5.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ πάλιν ἤρξατο διδάσκειν παρὰ τὴν θάλασσαν· καὶ συνάγεται πρὸς αὐτὸν ὄχλος πλεῖστος, ὥστε αὐτὸν εἰς πλοῖον ἐμβάντα καθῆσθαι ἐν τῇ θαλάσσῃ, καὶ πᾶς ὁ ὄχλος πρὸς τὴν θάλασσαν ἐπὶ τῆς γῆς ἦσαν.",
    "2": "καὶ ἐδίδασκεν αὐτοὺς ἐν παραβολαῖς πολλὰ καὶ ἔλεγεν αὐτοῖς ἐν τῇ διδαχῇ αὐτοῦ,",
    "3": "Ἀκούετε. ἰδοὺ ἐξῆλθεν ὁ σπείρων σπεῖραι.",
    "4": "καὶ ἐγένετο ἐν τῷ σπείρειν ὃ μὲν ἔπεσεν παρὰ τὴν ὁδόν, καὶ ἦλθεν τὰ πετεινὰ καὶ κατέφαγεν αὐτό.",
    "5": "καὶ ἄλλο ἔπεσεν ἐπὶ τὸ πετρῶδες ὅπου οὐκ εἶχεν γῆν πολλήν, καὶ εὐθὺς ἐξανέτειλεν διὰ τὸ μὴ ἔχειν βάθος γῆς·",
    "6": "καὶ ὅτε ἀνέτειλεν ὁ ἥλιος ἐκαυματίσθη καὶ διὰ τὸ μὴ ἔχειν ῥίζαν ἐξηράνθη.",
    "7": "καὶ ἄλλο ἔπεσεν εἰς τὰς ἀκάνθας, καὶ ἀνέβησαν αἱ ἄκανθαι καὶ συνέπνιξαν αὐτό, καὶ καρπὸν οὐκ ἔδωκεν.",
    "8": "καὶ ἄλλα ἔπεσεν εἰς τὴν γῆν τὴν καλὴν καὶ ἐδίδου καρπὸν ἀναβαίνοντα καὶ αὐξανόμενα καὶ ἔφερεν ἓν τριάκοντα καὶ ἓν ἑξήκοντα καὶ ἓν ἑκατόν.",
    "9": "καὶ ἔλεγεν, Ὃς ἔχει ὦτα ἀκούειν ἀκουέτω.",
    "10": "Καὶ ὅτε ἐγένετο κατὰ μόνας, ἠρώτων αὐτὸν οἱ περὶ αὐτὸν σὺν τοῖς δώδεκα τὰς παραβολάς.",
    "11": "καὶ ἔλεγεν αὐτοῖς, Ὑμῖν τὸ μυστήριον δέδοται τῆς βασιλείας τοῦ θεοῦ· ἐκείνοις δὲ τοῖς ἔξω ἐν παραβολαῖς τὰ πάντα γίνεται,",
    "12": "ἵνα\nβλέποντες βλέπωσιν καὶ μὴ ἴδωσιν,\nκαὶ ἀκούοντες ἀκούωσιν καὶ μὴ συνιῶσιν,\nμήποτε ἐπιστρέψωσιν καὶ ἀφεθῇ αὐτοῖς.",
    "13": "Καὶ λέγει αὐτοῖς, Οὐκ οἴδατε τὴν παραβολὴν ταύτην, καὶ πῶς πάσας τὰς παραβολὰς γνώσεσθε;",
    "14": "ὁ σπείρων τὸν λόγον σπείρει.",
    "15": "οὗτοι δέ εἰσιν οἱ παρὰ τὴν ὁδόν· ὅπου σπείρεται ὁ λόγος καὶ ὅταν ἀκούσωσιν, εὐθὺς ἔρχεται ὁ Σατανᾶς καὶ αἴρει τὸν λόγον τὸν ἐσπαρμένον εἰς αὐτούς.",
    "16": "καὶ οὗτοί εἰσιν οἱ ἐπὶ τὰ πετρώδη σπειρόμενοι, οἳ ὅταν ἀκούσωσιν τὸν λόγον εὐθὺς μετὰ χαρᾶς λαμβάνουσιν αὐτόν,",
    "17": "καὶ οὐκ ἔχουσιν ῥίζαν ἐν ἑαυτοῖς ἀλλὰ πρόσκαιροί εἰσιν, εἶτα γενομένης θλίψεως ἢ διωγμοῦ διὰ τὸν λόγον εὐθὺς σκανδαλίζονται.",
    "18": "καὶ ἄλλοι εἰσὶν οἱ εἰς τὰς ἀκάνθας σπειρόμενοι· οὗτοί εἰσιν οἱ τὸν λόγον ἀκούσαντες,",
    "19": "καὶ αἱ μέριμναι τοῦ αἰῶνος καὶ ἡ ἀπάτη τοῦ πλούτου καὶ αἱ περὶ τὰ λοιπὰ ἐπιθυμίαι εἰσπορευόμεναι συμπνίγουσιν τὸν λόγον καὶ ἄκαρπος γίνεται.",
    "20": "καὶ ἐκεῖνοί εἰσιν οἱ ἐπὶ τὴν γῆν τὴν καλὴν σπαρέντες, οἵτινες ἀκούουσιν τὸν λόγον καὶ παραδέχονται καὶ καρποφοροῦσιν ἓν τριάκοντα καὶ ἓν ἑξήκοντα καὶ ἓν ἑκατόν.",
    "21": "Καὶ ἔλεγεν αὐτοῖς, Μήτι ἔρχεται ὁ λύχνος ἵνα ὑπὸ τὸν μόδιον τεθῇ ἢ ὑπὸ τὴν κλίνην; οὐχ ἵνα ἐπὶ τὴν λυχνίαν τεθῇ;",
    "22": "οὐ γάρ ἐστιν κρυπτὸν ἐὰν μὴ ἵνα φανερωθῇ, οὐδὲ ἐγένετο ἀπόκρυφον ἀλλ᾽ ἵνα ἔλθῃ εἰς φανερόν.",
    "23": "εἴ τις ἔχει ὦτα ἀκούειν ἀκουέτω.",
    "24": "Καὶ ἔλεγεν αὐτοῖς, Βλέπετε τί ἀκούετε. ἐν ᾧ μέτρῳ μετρεῖτε μετρηθήσεται ὑμῖν καὶ προστεθήσεται ὑμῖν.",
    "25": "ὃς γὰρ ἔχει, δοθήσεται αὐτῷ· καὶ ὃς οὐκ ἔχει, καὶ ὃ ἔχει ἀρθήσεται ἀπ᾽ αὐτοῦ.",
    "26": "Καὶ ἔλεγεν, Οὕτως ἐστὶν ἡ βασιλεία τοῦ θεοῦ ὡς ἄνθρωπος βάλῃ τὸν σπόρον ἐπὶ τῆς γῆς",
    "27": "καὶ καθεύδῃ καὶ ἐγείρηται νύκτα καὶ ἡμέραν, καὶ ὁ σπόρος βλαστᾷ καὶ μηκύνηται ὡς οὐκ οἶδεν αὐτός.",
    "28": "αὐτομάτη ἡ γῆ καρποφορεῖ, πρῶτον χόρτον εἶτα στάχυν εἶτα πλήρη[ς] σῖτον ἐν τῷ στάχυϊ.",
    "29": "ὅταν δὲ παραδοῖ ὁ καρπός, εὐθὺς ἀποστέλλει τὸ δρέπανον, ὅτι παρέστηκεν ὁ θερισμός.",
    "30": "Καὶ ἔλεγεν, Πῶς ὁμοιώσωμεν τὴν βασιλείαν τοῦ θεοῦ ἢ ἐν τίνι αὐτὴν παραβολῇ θῶμεν;",
    "31": "ὡς κόκκῳ σινάπεως, ὃς ὅταν σπαρῇ ἐπὶ τῆς γῆς, μικρότερον ὂν πάντων τῶν σπερμάτων τῶν ἐπὶ τῆς γῆς,",
    "32": "καὶ ὅταν σπαρῇ, ἀναβαίνει καὶ γίνεται μεῖζον πάντων τῶν λαχάνων καὶ ποιεῖ κλάδους μεγάλους, ὥστε δύνασθαι ὑπὸ τὴν σκιὰν αὐτοῦ τὰ πετεινὰ τοῦ οὐρανοῦ κατασκηνοῦν.",
    "33": "Καὶ τοιαύταις παραβολαῖς πολλαῖς ἐλάλει αὐτοῖς τὸν λόγον καθὼς ἠδύναντο ἀκούειν·",
    "34": "χωρὶς δὲ παραβολῆς οὐκ ἐλάλει αὐτοῖς, κατ᾽ ἰδίαν δὲ τοῖς ἰδίοις μαθηταῖς ἐπέλυεν πάντα.",
    "35": "Καὶ λέγει αὐτοῖς ἐν ἐκείνῃ τῇ ἡμέρᾳ ὀψίας γενομένης, Διέλθωμεν εἰς τὸ πέραν.",
    "36": "καὶ ἀφέντες τὸν ὄχλον παραλαμβάνουσιν αὐτὸν ὡς ἦν ἐν τῷ πλοίῳ, καὶ ἄλλα πλοῖα ἦν μετ᾽ αὐτοῦ.",
    "37": "καὶ γίνεται λαῖλαψ μεγάλη ἀνέμου καὶ τὰ κύματα ἐπέβαλλεν εἰς τὸ πλοῖον, ὥστε ἤδη γεμίζεσθαι τὸ πλοῖον.",
    "38": "καὶ αὐτὸς ἦν ἐν τῇ πρύμνῃ ἐπὶ τὸ προσκεφάλαιον καθεύδων. καὶ ἐγείρουσιν αὐτὸν καὶ λέγουσιν αὐτῷ, Διδάσκαλε, οὐ μέλει σοι ὅτι ἀπολλύμεθα;",
    "39": "καὶ διεγερθεὶς ἐπετίμησεν τῷ ἀνέμῳ καὶ εἶπεν τῇ θαλάσσῃ, Σιώπα, πεφίμωσο. καὶ ἐκόπασεν ὁ ἄνεμος καὶ ἐγένετο γαλήνη μεγάλη.",
    "40": "καὶ εἶπεν αὐτοῖς, Τί δειλοί ἐστε; οὔπω ἔχετε πίστιν;",
    "41": "καὶ ἐφοβήθησαν φόβον μέγαν καὶ ἔλεγον πρὸς ἀλλήλους, Τίς ἄρα οὗτός ἐστιν ὅτι καὶ ὁ ἄνεμος καὶ ἡ θάλασσα ὑπακούει αὐτῷ;"
};
    const paragraphEnds = [9,12,20,23,25,29,32,34,41];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A parábola do semeador",
        "sourceTitle": "The Parable of the Sower",
        "parallel": "(Mt 13.1–9; Lc 8.4–8)"
    },
    {
        "beforeVerse": 10,
        "title": "O propósito das parábolas",
        "sourceTitle": "The Purpose of the Parables",
        "parallel": "(Mt 13.10–17; Lc 8.9–10)"
    },
    {
        "beforeVerse": 13,
        "title": "A explicação da parábola do semeador",
        "sourceTitle": "The Parable of the Sower Explained",
        "parallel": "(Mt 13.18–23; Lc 8.11–15)"
    },
    {
        "beforeVerse": 21,
        "title": "A candeia debaixo do alqueire",
        "sourceTitle": "A Light under a Bushel",
        "parallel": "(Lc 8.16–18)"
    },
    {
        "beforeVerse": 26,
        "title": "A parábola da semente que cresce",
        "sourceTitle": "The Parable of the Growing Seed"
    },
    {
        "beforeVerse": 30,
        "title": "A parábola do grão de mostarda",
        "sourceTitle": "The Parable of the Mustard Seed",
        "parallel": "(Mt 13.31–32; Lc 13.18–19)"
    },
    {
        "beforeVerse": 33,
        "title": "O uso das parábolas",
        "sourceTitle": "The Use of Parables",
        "parallel": "(Mt 13.34–35)"
    },
    {
        "beforeVerse": 35,
        "title": "Jesus acalma a tempestade",
        "sourceTitle": "The Calming of a Storm",
        "parallel": "(Mt 8.23–27; Lc 8.22–25)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MRK = window.ScripturaScriptureTexts.UBS5.MRK || {};
    window.ScripturaScriptureTexts.UBS5.MRK[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK = window.ScripturaScriptureParagraphBreaks.UBS5.MRK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MRK = window.ScripturaScriptureHeadings.UBS5.MRK || {};
    window.ScripturaScriptureHeadings.UBS5.MRK[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK = window.ScripturaScriptureUnnumberedPassages.UBS5.MRK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK[4] = unnumberedPassages;
})();
