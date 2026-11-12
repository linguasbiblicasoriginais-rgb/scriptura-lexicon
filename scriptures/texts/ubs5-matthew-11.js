/* UBS5 — Evangelho segundo Mateus, capítulo 11.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἐγένετο ὅτε ἐτέλεσεν ὁ Ἰησοῦς διατάσσων τοῖς δώδεκα μαθηταῖς αὐτοῦ, μετέβη ἐκεῖθεν τοῦ διδάσκειν καὶ κηρύσσειν ἐν ταῖς πόλεσιν αὐτῶν.",
    "2": "Ὁ δὲ Ἰωάννης ἀκούσας ἐν τῷ δεσμωτηρίῳ τὰ ἔργα τοῦ Χριστοῦ πέμψας διὰ τῶν μαθητῶν αὐτοῦ",
    "3": "εἶπεν αὐτῷ, Σὺ εἶ ὁ ἐρχόμενος ἢ ἕτερον προσδοκῶμεν;",
    "4": "καὶ ἀποκριθεὶς ὁ Ἰησοῦς εἶπεν αὐτοῖς, Πορευθέντες ἀπαγγείλατε Ἰωάννῃ ἃ ἀκούετε καὶ βλέπετε·",
    "5": "τυφλοὶ ἀναβλέπουσιν καὶ χωλοὶ περιπατοῦσιν, λεπροὶ καθαρίζονται καὶ κωφοὶ ἀκούουσιν, καὶ νεκροὶ ἐγείρονται καὶ πτωχοὶ εὐαγγελίζονται·",
    "6": "καὶ μακάριός ἐστιν ὃς ἐὰν μὴ σκανδαλισθῇ ἐν ἐμοί.",
    "7": "Τούτων δὲ πορευομένων ἤρξατο ὁ Ἰησοῦς λέγειν τοῖς ὄχλοις περὶ Ἰωάννου, Τί ἐξήλθατε εἰς τὴν ἔρημον θεάσασθαι; κάλαμον ὑπὸ ἀνέμου σαλευόμενον;",
    "8": "ἀλλὰ τί ἐξήλθατε ἰδεῖν; ἄνθρωπον ἐν μαλακοῖς ἠμφιεσμένον; ἰδοὺ οἱ τὰ μαλακὰ φοροῦντες ἐν τοῖς οἴκοις τῶν βασιλέων εἰσίν.",
    "9": "ἀλλὰ τί ἐξήλθατε ἰδεῖν; προφήτην; ναὶ λέγω ὑμῖν, καὶ περισσότερον προφήτου.",
    "10": "οὗτός ἐστιν περὶ οὗ γέγραπται,\nἸδοὺ ἐγὼ ἀποστέλλω τὸν ἄγγελόν μου πρὸ προσώπου σου,\nὃς κατασκευάσει τὴν ὁδόν σου ἔμπροσθέν σου.",
    "11": "ἀμὴν λέγω ὑμῖν· οὐκ ἐγήγερται ἐν γεννητοῖς γυναικῶν μείζων Ἰωάννου τοῦ βαπτιστοῦ· ὁ δὲ μικρότερος ἐν τῇ βασιλείᾳ τῶν οὐρανῶν μείζων αὐτοῦ ἐστιν.",
    "12": "ἀπὸ δὲ τῶν ἡμερῶν Ἰωάννου τοῦ βαπτιστοῦ ἕως ἄρτι ἡ βασιλεία τῶν οὐρανῶν βιάζεται καὶ βιασταὶ ἁρπάζουσιν αὐτήν.",
    "13": "πάντες γὰρ οἱ προφῆται καὶ ὁ νόμος ἕως Ἰωάννου ἐπροφήτευσαν·",
    "14": "καὶ εἰ θέλετε δέξασθαι, αὐτός ἐστιν Ἠλίας ὁ μέλλων ἔρχεσθαι.",
    "15": "ὁ ἔχων ὦτα ἀκουέτω.",
    "16": "Τίνι δὲ ὁμοιώσω τὴν γενεὰν ταύτην; ὁμοία ἐστὶν παιδίοις καθημένοις ἐν ταῖς ἀγοραῖς ἃ προσφωνοῦντα τοῖς ἑτέροις",
    "17": "λέγουσιν,\nΗὐλήσαμεν ὑμῖν καὶ οὐκ ὠρχήσασθε,\nἐθρηνήσαμεν καὶ οὐκ ἐκόψασθε.",
    "18": "ἦλθεν γὰρ Ἰωάννης μήτε ἐσθίων μήτε πίνων, καὶ λέγουσιν, Δαιμόνιον ἔχει.",
    "19": "ἦλθεν ὁ υἱὸς τοῦ ἀνθρώπου ἐσθίων καὶ πίνων, καὶ λέγουσιν, Ἰδοὺ ἄνθρωπος φάγος καὶ οἰνοπότης, τελωνῶν φίλος καὶ ἁμαρτωλῶν. καὶ ἐδικαιώθη ἡ σοφία ἀπὸ τῶν ἔργων αὐτῆς.",
    "20": "Τότε ἤρξατο ὀνειδίζειν τὰς πόλεις ἐν αἷς ἐγένοντο αἱ πλεῖσται δυνάμεις αὐτοῦ, ὅτι οὐ μετενόησαν·",
    "21": "Οὐαί σοι, Χοραζίν, οὐαί σοι, Βηθσαϊδά· ὅτι εἰ ἐν Τύρῳ καὶ Σιδῶνι ἐγένοντο αἱ δυνάμεις αἱ γενόμεναι ἐν ὑμῖν, πάλαι ἂν ἐν σάκκῳ καὶ σποδῷ μετενόησαν.",
    "22": "πλὴν λέγω ὑμῖν, Τύρῳ καὶ Σιδῶνι ἀνεκτότερον ἔσται ἐν ἡμέρᾳ κρίσεως ἢ ὑμῖν.",
    "23": "καὶ σύ, Καφαρναούμ,\nμὴ ἕως οὐρανοῦ ὑψωθήσῃ;\nἕως ᾅδου καταβήσῃ·\nὅτι εἰ ἐν Σοδόμοις ἐγενήθησαν αἱ δυνάμεις αἱ γενόμεναι ἐν σοί, ἔμεινεν ἂν μέχρι τῆς σήμερον. ",
    "24": "πλὴν λέγω ὑμῖν ὅτι γῇ Σοδόμων ἀνεκτότερον ἔσται ἐν ἡμέρᾳ κρίσεως ἢ σοί.",
    "25": "Ἐν ἐκείνῳ τῷ καιρῷ ἀποκριθεὶς ὁ Ἰησοῦς εἶπεν, Ἐξομολογοῦμαί σοι, πάτερ, κύριε τοῦ οὐρανοῦ καὶ τῆς γῆς, ὅτι ἔκρυψας ταῦτα ἀπὸ σοφῶν καὶ συνετῶν καὶ ἀπεκάλυψας αὐτὰ νηπίοις·",
    "26": "ναὶ ὁ πατήρ, ὅτι οὕτως εὐδοκία ἐγένετο ἔμπροσθέν σου.",
    "27": "Πάντα μοι παρεδόθη ὑπὸ τοῦ πατρός μου, καὶ οὐδεὶς ἐπιγινώσκει τὸν υἱὸν εἰ μὴ ὁ πατήρ, οὐδὲ τὸν πατέρα τις ἐπιγινώσκει εἰ μὴ ὁ υἱὸς καὶ ᾧ ἐὰν βούληται ὁ υἱὸς ἀποκαλύψαι.",
    "28": "Δεῦτε πρός με πάντες οἱ κοπιῶντες καὶ πεφορτισμένοι, κἀγὼ ἀναπαύσω ὑμᾶς.",
    "29": "ἄρατε τὸν ζυγόν μου ἐφ᾽ ὑμᾶς καὶ μάθετε ἀπ᾽ ἐμοῦ, ὅτι πραΰς εἰμι καὶ ταπεινὸς τῇ καρδίᾳ, καὶ εὑρήσετε ἀνάπαυσιν ταῖς ψυχαῖς ὑμῶν·",
    "30": "ὁ γὰρ ζυγός μου χρηστὸς καὶ τὸ φορτίον μου ἐλαφρόν ἐστιν."
};
    const paragraphEnds = [1,19,24,30];
    const headings = [
    {
        "beforeVerse": 2,
        "title": "The Messengers from John the Baptist",
        "sourceTitle": "The Messengers from John the Baptist",
        "parallel": "(Lk 7.18‑35)"
    },
    {
        "beforeVerse": 20,
        "title": "Woes to Unrepentant Cities",
        "sourceTitle": "Woes to Unrepentant Cities",
        "parallel": "(Lk 10.13‑15)"
    },
    {
        "beforeVerse": 25,
        "title": "Come to Me and Rest",
        "sourceTitle": "Come to Me and Rest",
        "parallel": "(Lk 10.21‑22)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[11] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[11] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[11] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[11] = unnumberedPassages;
})();
