/* UBS5 — Marcos 8. Texto grego fornecido pelo usuário em 09/11/2026.
 * Fonte, títulos editoriais em português, referências e limites de parágrafo independentes.
 * Sem cotejo independente com a edição impressa da UBS5.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἐν ἐκείναις ταῖς ἡμέραις πάλιν πολλοῦ ὄχλου ὄντος καὶ μὴ ἐχόντων τί φάγωσιν, προσκαλεσάμενος τοὺς μαθητὰς λέγει αὐτοῖς,",
    "2": "Σπλαγχνίζομαι ἐπὶ τὸν ὄχλον, ὅτι ἤδη ἡμέραι τρεῖς προσμένουσίν μοι καὶ οὐκ ἔχουσιν τί φάγωσιν·",
    "3": "καὶ ἐὰν ἀπολύσω αὐτοὺς νήστεις εἰς οἶκον αὐτῶν, ἐκλυθήσονται ἐν τῇ ὁδῷ· καί τινες αὐτῶν ἀπὸ μακρόθεν ἥκασιν.",
    "4": "καὶ ἀπεκρίθησαν αὐτῷ οἱ μαθηταὶ αὐτοῦ ὅτι Πόθεν τούτους δυνήσεταί τις ὧδε χορτάσαι ἄρτων ἐπ᾽ ἐρημίας;",
    "5": "καὶ ἠρώτα αὐτούς, Πόσους ἔχετε ἄρτους; οἱ δὲ εἶπαν, Ἑπτά.",
    "6": "καὶ παραγγέλλει τῷ ὄχλῳ ἀναπεσεῖν ἐπὶ τῆς γῆς· καὶ λαβὼν τοὺς ἑπτὰ ἄρτους εὐχαριστήσας ἔκλασεν καὶ ἐδίδου τοῖς μαθηταῖς αὐτοῦ ἵνα παρατιθῶσιν, καὶ παρέθηκαν τῷ ὄχλῳ.",
    "7": "καὶ εἶχον ἰχθύδια ὀλίγα· καὶ εὐλογήσας αὐτὰ εἶπεν καὶ ταῦτα παρατιθέναι.",
    "8": "καὶ ἔφαγον καὶ ἐχορτάσθησαν, καὶ ἦραν περισσεύματα κλασμάτων ἑπτὰ σπυρίδας.",
    "9": "ἦσαν δὲ ὡς τετρακισχίλιοι. καὶ ἀπέλυσεν αὐτούς.",
    "10": "Καὶ εὐθὺς ἐμβὰς εἰς τὸ πλοῖον μετὰ τῶν μαθητῶν αὐτοῦ ἦλθεν εἰς τὰ μέρη Δαλμανουθά.",
    "11": "Καὶ ἐξῆλθον οἱ Φαρισαῖοι καὶ ἤρξαντο συζητεῖν αὐτῷ, ζητοῦντες παρ᾽ αὐτοῦ σημεῖον ἀπὸ τοῦ οὐρανοῦ, πειράζοντες αὐτόν.",
    "12": "καὶ ἀναστενάξας τῷ πνεύματι αὐτοῦ λέγει, Τί ἡ γενεὰ αὕτη ζητεῖ σημεῖον; ἀμὴν λέγω ὑμῖν, εἰ δοθήσεται τῇ γενεᾷ ταύτῃ σημεῖον.",
    "13": "καὶ ἀφεὶς αὐτοὺς πάλιν ἐμβὰς ἀπῆλθεν εἰς τὸ πέραν.",
    "14": "Καὶ ἐπελάθοντο λαβεῖν ἄρτους καὶ εἰ μὴ ἕνα ἄρτον οὐκ εἶχον μεθ᾽ ἑαυτῶν ἐν τῷ πλοίῳ.",
    "15": "καὶ διεστέλλετο αὐτοῖς λέγων, Ὁρᾶτε, βλέπετε ἀπὸ τῆς ζύμης τῶν Φαρισαίων καὶ τῆς ζύμης Ἡρῴδου.",
    "16": "καὶ διελογίζοντο πρὸς ἀλλήλους ὅτι ἄρτους οὐκ ἔχουσιν.",
    "17": "καὶ γνοὺς λέγει αὐτοῖς, Τί διαλογίζεσθε ὅτι ἄρτους οὐκ ἔχετε; οὔπω νοεῖτε οὐδὲ συνίετε; πεπωρωμένην ἔχετε τὴν καρδίαν ὑμῶν;",
    "18": "ὀφθαλμοὺς ἔχοντες οὐ βλέπετε καὶ ὦτα ἔχοντες οὐκ ἀκούετε; καὶ οὐ μνημονεύετε,",
    "19": "ὅτε τοὺς πέντε ἄρτους ἔκλασα εἰς τοὺς πεντακισχιλίους, πόσους κοφίνους κλασμάτων πλήρεις ἤρατε; λέγουσιν αὐτῷ, Δώδεκα.",
    "20": "Ὅτε τοὺς ἑπτὰ εἰς τοὺς τετρακισχιλίους, πόσων σπυρίδων πληρώματα κλασμάτων ἤρατε; καὶ λέγουσιν [αὐτῷ], Ἑπτά.",
    "21": "καὶ ἔλεγεν αὐτοῖς, Οὔπω συνίετε;",
    "22": "Καὶ ἔρχονται εἰς Βηθσαϊδάν. καὶ φέρουσιν αὐτῷ τυφλὸν καὶ παρακαλοῦσιν αὐτὸν ἵνα αὐτοῦ ἅψηται.",
    "23": "καὶ ἐπιλαβόμενος τῆς χειρὸς τοῦ τυφλοῦ ἐξήνεγκεν αὐτὸν ἔξω τῆς κώμης καὶ πτύσας εἰς τὰ ὄμματα αὐτοῦ, ἐπιθεὶς τὰς χεῖρας αὐτῷ ἐπηρώτα αὐτόν, Εἴ τι βλέπεις;",
    "24": "καὶ ἀναβλέψας ἔλεγεν, Βλέπω τοὺς ἀνθρώπους ὅτι ὡς δένδρα ὁρῶ περιπατοῦντας.",
    "25": "εἶτα πάλιν ἐπέθηκεν τὰς χεῖρας ἐπὶ τοὺς ὀφθαλμοὺς αὐτοῦ, καὶ διέβλεψεν καὶ ἀπεκατέστη καὶ ἐνέβλεπεν τηλαυγῶς ἅπαντα.",
    "26": "καὶ ἀπέστειλεν αὐτὸν εἰς οἶκον αὐτοῦ λέγων, Μηδὲ εἰς τὴν κώμην εἰσέλθῃς.",
    "27": "Καὶ ἐξῆλθεν ὁ Ἰησοῦς καὶ οἱ μαθηταὶ αὐτοῦ εἰς τὰς κώμας Καισαρείας τῆς Φιλίππου· καὶ ἐν τῇ ὁδῷ ἐπηρώτα τοὺς μαθητὰς αὐτοῦ λέγων αὐτοῖς, Τίνα με λέγουσιν οἱ ἄνθρωποι εἶναι;",
    "28": "οἱ δὲ εἶπαν αὐτῷ λέγοντες [ὅτι] Ἰωάννην τὸν βαπτιστήν, καὶ ἄλλοι, Ἠλίαν, ἄλλοι δὲ ὅτι εἷς τῶν προφητῶν.",
    "29": "καὶ αὐτὸς ἐπηρώτα αὐτούς, Ὑμεῖς δὲ τίνα με λέγετε εἶναι; ἀποκριθεὶς ὁ Πέτρος λέγει αὐτῷ, Σὺ εἶ ὁ Χριστός.",
    "30": "καὶ ἐπετίμησεν αὐτοῖς ἵνα μηδενὶ λέγωσιν περὶ αὐτοῦ.",
    "31": "Καὶ ἤρξατο διδάσκειν αὐτοὺς ὅτι δεῖ τὸν υἱὸν τοῦ ἀνθρώπου πολλὰ παθεῖν καὶ ἀποδοκιμασθῆναι ὑπὸ τῶν πρεσβυτέρων καὶ τῶν ἀρχιερέων καὶ τῶν γραμματέων καὶ ἀποκτανθῆναι καὶ μετὰ τρεῖς ἡμέρας ἀναστῆναι·",
    "32": "καὶ παρρησίᾳ τὸν λόγον ἐλάλει. καὶ προσλαβόμενος ὁ Πέτρος αὐτὸν ἤρξατο ἐπιτιμᾶν αὐτῷ.",
    "33": "ὁ δὲ ἐπιστραφεὶς καὶ ἰδὼν τοὺς μαθητὰς αὐτοῦ ἐπετίμησεν Πέτρῳ καὶ λέγει, Ὕπαγε ὀπίσω μου, Σατανᾶ, ὅτι οὐ φρονεῖς τὰ τοῦ θεοῦ ἀλλὰ τὰ τῶν ἀνθρώπων.",
    "34": "Καὶ προσκαλεσάμενος τὸν ὄχλον σὺν τοῖς μαθηταῖς αὐτοῦ εἶπεν αὐτοῖς, Εἴ τις θέλει ὀπίσω μου ἀκολουθεῖν, ἀπαρνησάσθω ἑαυτὸν καὶ ἀράτω τὸν σταυρὸν αὐτοῦ καὶ ἀκολουθείτω μοι.",
    "35": "ὃς γὰρ ἐὰν θέλῃ τὴν ψυχὴν αὐτοῦ σῶσαι ἀπολέσει αὐτήν· ὃς δ᾽ ἂν ἀπολέσει τὴν ψυχὴν αὐτοῦ ἕνεκεν ἐμοῦ καὶ τοῦ εὐαγγελίου σώσει αὐτήν.",
    "36": "τί γὰρ ὠφελεῖ ἄνθρωπον κερδῆσαι τὸν κόσμον ὅλον καὶ ζημιωθῆναι τὴν ψυχὴν αὐτοῦ;",
    "37": "τί γὰρ δοῖ ἄνθρωπος ἀντάλλαγμα τῆς ψυχῆς αὐτοῦ;",
    "38": "ὃς γὰρ ἐὰν ἐπαισχυνθῇ με καὶ τοὺς ἐμοὺς λόγους ἐν τῇ γενεᾷ ταύτῃ τῇ μοιχαλίδι καὶ ἁμαρτωλῷ, καὶ ὁ υἱὸς τοῦ ἀνθρώπου ἐπαισχυνθήσεται αὐτόν, ὅταν ἔλθῃ ἐν τῇ δόξῃ τοῦ πατρὸς αὐτοῦ μετὰ τῶν ἀγγέλων τῶν ἁγίων."
};
    const paragraphEnds = [10,13,21,26,30,38];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A alimentação dos quatro mil",
        "sourceTitle": "The Feeding of the Four Thousand",
        "parallel": "(Mt 15.32–39)"
    },
    {
        "beforeVerse": 11,
        "title": "A exigência de um sinal",
        "sourceTitle": "The Demand for a Sign",
        "parallel": "(Mt 16.1–4)"
    },
    {
        "beforeVerse": 14,
        "title": "O fermento dos fariseus e de Herodes",
        "sourceTitle": "The Leaven of the Pharisees and of Herod",
        "parallel": "(Mt 16.5–12)"
    },
    {
        "beforeVerse": 22,
        "title": "A cura de um cego em Betsaida",
        "sourceTitle": "The Healing of a Blind Man at Bethsaida"
    },
    {
        "beforeVerse": 27,
        "title": "A declaração de Pedro acerca de Jesus",
        "sourceTitle": "Peter’s Declaration about Jesus",
        "parallel": "(Mt 16.13–20; Lc 9.18–21)"
    },
    {
        "beforeVerse": 31,
        "title": "Jesus anuncia sua morte e ressurreição",
        "sourceTitle": "Jesus Foretells His Death and Resurrection",
        "parallel": "(Mt 16.21–28; Lc 9.22–27)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MRK = window.ScripturaScriptureTexts.UBS5.MRK || {};
    window.ScripturaScriptureTexts.UBS5.MRK[8] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK = window.ScripturaScriptureParagraphBreaks.UBS5.MRK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK[8] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MRK = window.ScripturaScriptureHeadings.UBS5.MRK || {};
    window.ScripturaScriptureHeadings.UBS5.MRK[8] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK = window.ScripturaScriptureUnnumberedPassages.UBS5.MRK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK[8] = unnumberedPassages;
})();
