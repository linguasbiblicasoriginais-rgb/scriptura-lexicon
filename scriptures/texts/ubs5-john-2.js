/* UBS5 — João 2. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Referência editorial UBS5 conforme o projeto, sem cotejo independente com edição impressa.
 * Texto grego, títulos de seção e remissões editoriais armazenados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ τῇ ἡμέρᾳ τῇ τρίτῃ γάμος ἐγένετο ἐν Κανὰ τῆς Γαλιλαίας, καὶ ἦν ἡ μήτηρ τοῦ Ἰησοῦ ἐκεῖ·",
    "2": "ἐκλήθη δὲ καὶ ὁ Ἰησοῦς καὶ οἱ μαθηταὶ αὐτοῦ εἰς τὸν γάμον.",
    "3": "καὶ ὑστερήσαντος οἴνου λέγει ἡ μήτηρ τοῦ Ἰησοῦ πρὸς αὐτόν, Οἶνον οὐκ ἔχουσιν.",
    "4": "[καὶ] λέγει αὐτῇ ὁ Ἰησοῦς, Τί ἐμοὶ καὶ σοί, γύναι; οὔπω ἥκει ἡ ὥρα μου.",
    "5": "λέγει ἡ μήτηρ αὐτοῦ τοῖς διακόνοις, Ὅ τι ἂν λέγῃ ὑμῖν ποιήσατε.",
    "6": "ἦσαν δὲ ἐκεῖ λίθιναι ὑδρίαι ἓξ κατὰ τὸν καθαρισμὸν τῶν Ἰουδαίων κείμεναι, χωροῦσαι ἀνὰ μετρητὰς δύο ἢ τρεῖς.",
    "7": "λέγει αὐτοῖς ὁ Ἰησοῦς, Γεμίσατε τὰς ὑδρίας ὕδατος. καὶ ἐγέμισαν αὐτὰς ἕως ἄνω.",
    "8": "καὶ λέγει αὐτοῖς, Ἀντλήσατε νῦν καὶ φέρετε τῷ ἀρχιτρικλίνῳ· οἱ δὲ ἤνεγκαν.",
    "9": "ὡς δὲ ἐγεύσατο ὁ ἀρχιτρίκλινος τὸ ὕδωρ οἶνον γεγενημένον καὶ οὐκ ᾔδει πόθεν ἐστίν, οἱ δὲ διάκονοι ᾔδεισαν οἱ ἠντληκότες τὸ ὕδωρ, φωνεῖ τὸν νυμφίον ὁ ἀρχιτρίκλινος",
    "10": "καὶ λέγει αὐτῷ, Πᾶς ἄνθρωπος πρῶτον τὸν καλὸν οἶνον τίθησιν καὶ ὅταν μεθυσθῶσιν τὸν ἐλάσσω· σὺ τετήρηκας τὸν καλὸν οἶνον ἕως ἄρτι.",
    "11": "Ταύτην ἐποίησεν ἀρχὴν τῶν σημείων ὁ Ἰησοῦς ἐν Κανὰ τῆς Γαλιλαίας καὶ ἐφανέρωσεν τὴν δόξαν αὐτοῦ, καὶ ἐπίστευσαν εἰς αὐτὸν οἱ μαθηταὶ αὐτοῦ.",
    "12": "Μετὰ τοῦτο κατέβη εἰς Καφαρναοὺμ αὐτὸς καὶ ἡ μήτηρ αὐτοῦ καὶ οἱ ἀδελφοὶ [αὐτοῦ] καὶ οἱ μαθηταὶ αὐτοῦ καὶ ἐκεῖ ἔμειναν οὐ πολλὰς ἡμέρας.",
    "13": "Καὶ ἐγγὺς ἦν τὸ πάσχα τῶν Ἰουδαίων, καὶ ἀνέβη εἰς Ἱεροσόλυμα ὁ Ἰησοῦς.",
    "14": "καὶ εὗρεν ἐν τῷ ἱερῷ τοὺς πωλοῦντας βόας καὶ πρόβατα καὶ περιστερὰς καὶ τοὺς κερματιστὰς καθημένους,",
    "15": "καὶ ποιήσας φραγέλλιον ἐκ σχοινίων πάντας ἐξέβαλεν ἐκ τοῦ ἱεροῦ τά τε πρόβατα καὶ τοὺς βόας, καὶ τῶν κολλυβιστῶν ἐξέχεεν τὸ κέρμα καὶ τὰς τραπέζας ἀνέτρεψεν,",
    "16": "καὶ τοῖς τὰς περιστερὰς πωλοῦσιν εἶπεν, Ἄρατε ταῦτα ἐντεῦθεν, μὴ ποιεῖτε τὸν οἶκον τοῦ πατρός μου οἶκον ἐμπορίου.",
    "17": "Ἐμνήσθησαν οἱ μαθηταὶ αὐτοῦ ὅτι γεγραμμένον ἐστίν, Ὁ ζῆλος τοῦ οἴκου σου καταφάγεταί με.",
    "18": "ἀπεκρίθησαν οὖν οἱ Ἰουδαῖοι καὶ εἶπαν αὐτῷ, Τί σημεῖον δεικνύεις ἡμῖν ὅτι ταῦτα ποιεῖς;",
    "19": "ἀπεκρίθη Ἰησοῦς καὶ εἶπεν αὐτοῖς, Λύσατε τὸν ναὸν τοῦτον καὶ ἐν τρισὶν ἡμέραις ἐγερῶ αὐτόν.",
    "20": "εἶπαν οὖν οἱ Ἰουδαῖοι, Τεσσεράκοντα καὶ ἓξ ἔτεσιν οἰκοδομήθη ὁ ναὸς οὗτος, καὶ σὺ ἐν τρισὶν ἡμέραις ἐγερεῖς αὐτόν;",
    "21": "ἐκεῖνος δὲ ἔλεγεν περὶ τοῦ ναοῦ τοῦ σώματος αὐτοῦ.",
    "22": "ὅτε οὖν ἠγέρθη ἐκ νεκρῶν, ἐμνήσθησαν οἱ μαθηταὶ αὐτοῦ ὅτι τοῦτο ἔλεγεν, καὶ ἐπίστευσαν τῇ γραφῇ καὶ τῷ λόγῳ ὃν εἶπεν ὁ Ἰησοῦς.",
    "23": "Ὡς δὲ ἦν ἐν τοῖς Ἱεροσολύμοις ἐν τῷ πάσχα ἐν τῇ ἑορτῇ, πολλοὶ ἐπίστευσαν εἰς τὸ ὄνομα αὐτοῦ θεωροῦντες αὐτοῦ τὰ σημεῖα ἃ ἐποίει·",
    "24": "αὐτὸς δὲ Ἰησοῦς οὐκ ἐπίστευεν αὐτὸν αὐτοῖς διὰ τὸ αὐτὸν γινώσκειν πάντας",
    "25": "καὶ ὅτι οὐ χρείαν εἶχεν ἵνα τις μαρτυρήσῃ περὶ τοῦ ἀνθρώπου· αὐτὸς γὰρ ἐγίνωσκεν τί ἦν ἐν τῷ ἀνθρώπῳ."
};
    const paragraphEnds = [11,12,22,25];
    const headings = [
    {
        "beforeVerse": 13,
        "title": "A purificação do templo",
        "sourceTitle": "The Cleansing of the Temple",
        "parallel": "(Mt 21.12–13; Mc 11.15–17; Lc 19.45–46)"
    },
    {
        "beforeVerse": 23,
        "title": "Jesus conhece todos os homens",
        "sourceTitle": "Jesus Knows All Men"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.JHN = window.ScripturaScriptureTexts.UBS5.JHN || {};
    window.ScripturaScriptureTexts.UBS5.JHN[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JHN = window.ScripturaScriptureParagraphBreaks.UBS5.JHN || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JHN[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.JHN = window.ScripturaScriptureHeadings.UBS5.JHN || {};
    window.ScripturaScriptureHeadings.UBS5.JHN[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JHN = window.ScripturaScriptureUnnumberedPassages.UBS5.JHN || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JHN[2] = unnumberedPassages;
})();
