/* UBS5 — Marcos 16. Texto grego fornecido pelo usuário em 09/11/2026.
 * Fonte, títulos editoriais em português, referências e limites de parágrafo independentes.
 * Sem cotejo independente com a edição impressa da UBS5.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ διαγενομένου τοῦ σαββάτου Μαρία ἡ Μαγδαληνὴ καὶ Μαρία ἡ [τοῦ] Ἰακώβου καὶ Σαλώμη ἠγόρασαν ἀρώματα ἵνα ἐλθοῦσαι ἀλείψωσιν αὐτόν.",
    "2": "καὶ λίαν πρωῒ τῇ μιᾷ τῶν σαββάτων ἔρχονται ἐπὶ τὸ μνημεῖον ἀνατείλαντος τοῦ ἡλίου.",
    "3": "καὶ ἔλεγον πρὸς ἑαυτάς, Τίς ἀποκυλίσει ἡμῖν τὸν λίθον ἐκ τῆς θύρας τοῦ μνημείου;",
    "4": "καὶ ἀναβλέψασαι θεωροῦσιν ὅτι ἀποκεκύλισται ὁ λίθος· ἦν γὰρ μέγας σφόδρα.",
    "5": "καὶ εἰσελθοῦσαι εἰς τὸ μνημεῖον εἶδον νεανίσκον καθήμενον ἐν τοῖς δεξιοῖς περιβεβλημένον στολὴν λευκήν, καὶ ἐξεθαμβήθησαν.",
    "6": "ὁ δὲ λέγει αὐταῖς, Μὴ ἐκθαμβεῖσθε· Ἰησοῦν ζητεῖτε τὸν Ναζαρηνὸν τὸν ἐσταυρωμένον· ἠγέρθη, οὐκ ἔστιν ὧδε· ἴδε ὁ τόπος ὅπου ἔθηκαν αὐτόν.",
    "7": "ἀλλ᾽ ὑπάγετε εἴπατε τοῖς μαθηταῖς αὐτοῦ καὶ τῷ Πέτρῳ ὅτι Προάγει ὑμᾶς εἰς τὴν Γαλιλαίαν· ἐκεῖ αὐτὸν ὄψεσθε, καθὼς εἶπεν ὑμῖν.",
    "8": "καὶ ἐξελθοῦσαι ἔφυγον ἀπὸ τοῦ μνημείου, εἶχεν γὰρ αὐτὰς τρόμος καὶ ἔκστασις· καὶ οὐδενὶ οὐδὲν εἶπαν· ἐφοβοῦντο γάρ.",
    "9": "⟦ Ἀναστὰς δὲ πρωῒ πρώτῃ σαββάτου ἐφάνη πρῶτον Μαρίᾳ τῇ Μαγδαληνῇ, παρ᾽ ἧς ἐκβεβλήκει ἑπτὰ δαιμόνια.",
    "10": "ἐκείνη πορευθεῖσα ἀπήγγειλεν τοῖς μετ᾽ αὐτοῦ γενομένοις πενθοῦσιν καὶ κλαίουσιν·",
    "11": "κἀκεῖνοι ἀκούσαντες ὅτι ζῇ καὶ ἐθεάθη ὑπ᾽ αὐτῆς ἠπίστησαν.",
    "12": "Μετὰ δὲ ταῦτα δυσὶν ἐξ αὐτῶν περιπατοῦσιν ἐφανερώθη ἐν ἑτέρᾳ μορφῇ πορευομένοις εἰς ἀγρόν·",
    "13": "κἀκεῖνοι ἀπελθόντες ἀπήγγειλαν τοῖς λοιποῖς· οὐδὲ ἐκείνοις ἐπίστευσαν.",
    "14": "Ὕστερον [δὲ] ἀνακειμένοις αὐτοῖς τοῖς ἕνδεκα ἐφανερώθη καὶ ὠνείδισεν τὴν ἀπιστίαν αὐτῶν καὶ σκληροκαρδίαν ὅτι τοῖς θεασαμένοις αὐτὸν ἐγηγερμένον οὐκ ἐπίστευσαν.",
    "15": "καὶ εἶπεν αὐτοῖς, Πορευθέντες εἰς τὸν κόσμον ἅπαντα κηρύξατε τὸ εὐαγγέλιον πάσῃ τῇ κτίσει.",
    "16": "ὁ πιστεύσας καὶ βαπτισθεὶς σωθήσεται, ὁ δὲ ἀπιστήσας κατακριθήσεται.",
    "17": "σημεῖα δὲ τοῖς πιστεύσασιν ταῦτα παρακολουθήσει· ἐν τῷ ὀνόματί μου δαιμόνια ἐκβαλοῦσιν, γλώσσαις λαλήσουσιν καιναῖς,",
    "18": "[καὶ ἐν ταῖς χερσὶν] ὄφεις ἀροῦσιν κἂν θανάσιμόν τι πίωσιν οὐ μὴ αὐτοὺς βλάψῃ, ἐπὶ ἀρρώστους χεῖρας ἐπιθήσουσιν καὶ καλῶς ἕξουσιν.",
    "19": "Ὁ μὲν οὖν κύριος Ἰησοῦς μετὰ τὸ λαλῆσαι αὐτοῖς ἀνελήμφθη εἰς τὸν οὐρανὸν καὶ ἐκάθισεν ἐκ δεξιῶν τοῦ θεοῦ.",
    "20": "ἐκεῖνοι δὲ ἐξελθόντες ἐκήρυξαν πανταχοῦ, τοῦ κυρίου συνεργοῦντος καὶ τὸν λόγον βεβαιοῦντος διὰ τῶν ἐπακολουθούντων σημείων.⟧"
};
    const paragraphEnds = [11,13,18,20];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A ressurreição de Jesus",
        "sourceTitle": "The Resurrection of Jesus",
        "parallel": "(Mt 28.1–8; Lc 24.1–12; Jo 20.1–10)"
    },
    {
        "beforeVerse": 9,
        "title": "O final longo de Marcos",
        "sourceTitle": "The Longer Ending of Mark"
    },
    {
        "beforeVerse": 9,
        "title": "A aparição a Maria Madalena",
        "sourceTitle": "The Appearance to Mary Magdalene",
        "parallel": "(Mt 28.9–10; Jo 20.11–18)"
    },
    {
        "beforeVerse": 12,
        "title": "A aparição a dois discípulos",
        "sourceTitle": "The Appearance to Two Disciples",
        "parallel": "(Lc 24.13–35)"
    },
    {
        "beforeVerse": 14,
        "title": "A missão confiada aos discípulos",
        "sourceTitle": "The Commissioning of the Disciples",
        "parallel": "(Mt 28.16–20; Lc 24.36–49; Jo 20.19–23; At 1.6–8)"
    },
    {
        "beforeVerse": 19,
        "title": "A ascensão de Jesus",
        "sourceTitle": "The Ascension of Jesus",
        "parallel": "(Lc 24.50–53; At 1.9–11)"
    }
];
    const unnumberedPassages = [
    {
        "beforeVerse": 9,
        "title": "O final breve de Marcos",
        "text": "⟦Πάντα δὲ τὰ παρηγγελμένα τοῖς περὶ τὸν Πέτρον συντόμως ἐξήγγειλαν. Μετὰ δὲ ταῦτα καὶ αὐτὸς ὁ Ἰησοῦς ἀπὸ ἀνατολῆς καὶ ἄχρι δύσεως ἐξαπέστειλεν δι᾽ αὐτῶν τὸ ἱερὸν καὶ ἄφθαρτον κήρυγμα τῆς αἰωνίου σωτηρίας. ἀμήν.⟧"
    }
];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MRK = window.ScripturaScriptureTexts.UBS5.MRK || {};
    window.ScripturaScriptureTexts.UBS5.MRK[16] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK = window.ScripturaScriptureParagraphBreaks.UBS5.MRK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK[16] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MRK = window.ScripturaScriptureHeadings.UBS5.MRK || {};
    window.ScripturaScriptureHeadings.UBS5.MRK[16] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK = window.ScripturaScriptureUnnumberedPassages.UBS5.MRK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK[16] = unnumberedPassages;
})();
