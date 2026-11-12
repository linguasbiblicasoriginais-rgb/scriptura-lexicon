/* UBS5 — Evangelho segundo Mateus, capítulo 16.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ προσελθόντες οἱ Φαρισαῖοι καὶ Σαδδουκαῖοι πειράζοντες ἐπηρώτησαν αὐτὸν σημεῖον ἐκ τοῦ οὐρανοῦ ἐπιδεῖξαι αὐτοῖς.",
    "2": "ὁ δὲ ἀποκριθεὶς εἶπεν αὐτοῖς, [Ὀψίας γενομένης λέγετε, Εὐδία, πυρράζει γὰρ ὁ οὐρανός·",
    "3": "καὶ πρωΐ, Σήμερον χειμών, πυρράζει γὰρ στυγνάζων ὁ οὐρανός. τὸ μὲν πρόσωπον τοῦ οὐρανοῦ γινώσκετε διακρίνειν, τὰ δὲ σημεῖα τῶν καιρῶν οὐ δύνασθε;]",
    "4": "Γενεὰ πονηρὰ καὶ μοιχαλὶς σημεῖον ἐπιζητεῖ, καὶ σημεῖον οὐ δοθήσεται αὐτῇ εἰ μὴ τὸ σημεῖον Ἰωνᾶ. καὶ καταλιπὼν αὐτοὺς ἀπῆλθεν.",
    "5": "Καὶ ἐλθόντες οἱ μαθηταὶ εἰς τὸ πέραν ἐπελάθοντο ἄρτους λαβεῖν.",
    "6": "ὁ δὲ Ἰησοῦς εἶπεν αὐτοῖς, Ὁρᾶτε καὶ προσέχετε ἀπὸ τῆς ζύμης τῶν Φαρισαίων καὶ Σαδδουκαίων.",
    "7": "οἱ δὲ διελογίζοντο ἐν ἑαυτοῖς λέγοντες ὅτι Ἄρτους οὐκ ἐλάβομεν.",
    "8": "γνοὺς δὲ ὁ Ἰησοῦς εἶπεν, Τί διαλογίζεσθε ἐν ἑαυτοῖς, ὀλιγόπιστοι, ὅτι ἄρτους οὐκ ἔχετε;",
    "9": "οὔπω νοεῖτε, οὐδὲ μνημονεύετε τοὺς πέντε ἄρτους τῶν πεντακισχιλίων καὶ πόσους κοφίνους ἐλάβετε;",
    "10": "οὐδὲ τοὺς ἑπτὰ ἄρτους τῶν τετρακισχιλίων καὶ πόσας σπυρίδας ἐλάβετε;",
    "11": "πῶς οὐ νοεῖτε ὅτι οὐ περὶ ἄρτων εἶπον ὑμῖν; προσέχετε δὲ ἀπὸ τῆς ζύμης τῶν Φαρισαίων καὶ Σαδδουκαίων.",
    "12": "τότε συνῆκαν ὅτι οὐκ εἶπεν προσέχειν ἀπὸ τῆς ζύμης τῶν ἄρτων ἀλλ᾽ ἀπὸ τῆς διδαχῆς τῶν Φαρισαίων καὶ Σαδδουκαίων.",
    "13": "Ἐλθὼν δὲ ὁ Ἰησοῦς εἰς τὰ μέρη Καισαρείας τῆς Φιλίππου ἠρώτα τοὺς μαθητὰς αὐτοῦ λέγων, Τίνα λέγουσιν οἱ ἄνθρωποι εἶναι τὸν υἱὸν τοῦ ἀνθρώπου;",
    "14": "οἱ δὲ εἶπαν, Οἱ μὲν Ἰωάννην τὸν βαπτιστήν, ἄλλοι δὲ Ἠλίαν, ἕτεροι δὲ Ἰερεμίαν ἢ ἕνα τῶν προφητῶν.",
    "15": "λέγει αὐτοῖς, Ὑμεῖς δὲ τίνα με λέγετε εἶναι;",
    "16": "ἀποκριθεὶς δὲ Σίμων Πέτρος εἶπεν, Σὺ εἶ ὁ Χριστὸς ὁ υἱὸς τοῦ θεοῦ τοῦ ζῶντος.",
    "17": "ἀποκριθεὶς δὲ ὁ Ἰησοῦς εἶπεν αὐτῷ, Μακάριος εἶ, Σίμων Βαριωνᾶ, ὅτι σὰρξ καὶ αἷμα οὐκ ἀπεκάλυψέν σοι ἀλλ᾽ ὁ πατήρ μου ὁ ἐν τοῖς οὐρανοῖς.",
    "18": "κἀγὼ δέ σοι λέγω ὅτι σὺ εἶ Πέτρος, καὶ ἐπὶ ταύτῃ τῇ πέτρᾳ οἰκοδομήσω μου τὴν ἐκκλησίαν καὶ πύλαι ᾅδου οὐ κατισχύσουσιν αὐτῆς.",
    "19": "δώσω σοι τὰς κλεῖδας τῆς βασιλείας τῶν οὐρανῶν, καὶ ὃ ἐὰν δήσῃς ἐπὶ τῆς γῆς ἔσται δεδεμένον ἐν τοῖς οὐρανοῖς, καὶ ὃ ἐὰν λύσῃς ἐπὶ τῆς γῆς ἔσται λελυμένον ἐν τοῖς οὐρανοῖς.",
    "20": "τότε διεστείλατο τοῖς μαθηταῖς ἵνα μηδενὶ εἴπωσιν ὅτι αὐτός ἐστιν ὁ Χριστός.",
    "21": "Ἀπὸ τότε ἤρξατο ὁ Ἰησοῦς δεικνύειν τοῖς μαθηταῖς αὐτοῦ ὅτι δεῖ αὐτὸν εἰς Ἱεροσόλυμα ἀπελθεῖν καὶ πολλὰ παθεῖν ἀπὸ τῶν πρεσβυτέρων καὶ ἀρχιερέων καὶ γραμματέων καὶ ἀποκτανθῆναι καὶ τῇ τρίτῃ ἡμέρᾳ ἐγερθῆναι.",
    "22": "καὶ προσλαβόμενος αὐτὸν ὁ Πέτρος ἤρξατο ἐπιτιμᾶν αὐτῷ λέγων, Ἵλεώς σοι, κύριε· οὐ μὴ ἔσται σοι τοῦτο.",
    "23": "ὁ δὲ στραφεὶς εἶπεν τῷ Πέτρῳ, Ὕπαγε ὀπίσω μου, Σατανᾶ· σκάνδαλον εἶ ἐμοῦ, ὅτι οὐ φρονεῖς τὰ τοῦ θεοῦ ἀλλὰ τὰ τῶν ἀνθρώπων.",
    "24": "Τότε ὁ Ἰησοῦς εἶπεν τοῖς μαθηταῖς αὐτοῦ, Εἴ τις θέλει ὀπίσω μου ἐλθεῖν, ἀπαρνησάσθω ἑαυτὸν καὶ ἀράτω τὸν σταυρὸν αὐτοῦ καὶ ἀκολουθείτω μοι.",
    "25": "ὃς γὰρ ἐὰν θέλῃ τὴν ψυχὴν αὐτοῦ σῶσαι ἀπολέσει αὐτήν· ὃς δ᾽ ἂν ἀπολέσῃ τὴν ψυχὴν αὐτοῦ ἕνεκεν ἐμοῦ εὑρήσει αὐτήν.",
    "26": "τί γὰρ ὠφεληθήσεται ἄνθρωπος ἐὰν τὸν κόσμον ὅλον κερδήσῃ τὴν δὲ ψυχὴν αὐτοῦ ζημιωθῇ; ἢ τί δώσει ἄνθρωπος ἀντάλλαγμα τῆς ψυχῆς αὐτοῦ;",
    "27": "μέλλει γὰρ ὁ υἱὸς τοῦ ἀνθρώπου ἔρχεσθαι ἐν τῇ δόξῃ τοῦ πατρὸς αὐτοῦ μετὰ τῶν ἀγγέλων αὐτοῦ, καὶ τότε ἀποδώσει ἑκάστῳ κατὰ τὴν πρᾶξιν αὐτοῦ.",
    "28": "ἀμὴν λέγω ὑμῖν ὅτι εἰσίν τινες τῶν ὧδε ἑστώτων οἵτινες οὐ μὴ γεύσωνται θανάτου ἕως ἂν ἴδωσιν τὸν υἱὸν τοῦ ἀνθρώπου ἐρχόμενον ἐν τῇ βασιλείᾳ αὐτοῦ."
};
    const paragraphEnds = [4,12,20,28];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Demand for a Sign",
        "sourceTitle": "The Demand for a Sign",
        "parallel": "(Mk 8.11‑13; Lk 12.54‑56)"
    },
    {
        "beforeVerse": 5,
        "title": "The Leaven of the Pharisees and Sadducees",
        "sourceTitle": "The Leaven of the Pharisees and Sadducees",
        "parallel": "(Mk 8.14‑21)"
    },
    {
        "beforeVerse": 13,
        "title": "Peter’s Declaration about Jesus",
        "sourceTitle": "Peter’s Declaration about Jesus",
        "parallel": "(Mk 8.27‑30; Lk 9.18‑21)"
    },
    {
        "beforeVerse": 21,
        "title": "Jesus Foretells His Death and Resurrection",
        "sourceTitle": "Jesus Foretells His Death and Resurrection",
        "parallel": "(Mk 8.31–9.1; Lk 9.22‑27)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[16] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[16] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[16] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[16] = unnumberedPassages;
})();
