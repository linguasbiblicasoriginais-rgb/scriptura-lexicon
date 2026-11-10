/* UBS5 — Marcos 11. Texto grego fornecido pelo usuário em 09/11/2026.
 * Fonte, títulos editoriais em português, referências e limites de parágrafo independentes.
 * Sem cotejo independente com a edição impressa da UBS5.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ὅτε ἐγγίζουσιν εἰς Ἱεροσόλυμα εἰς Βηθφαγὴ καὶ Βηθανίαν πρὸς τὸ Ὄρος τῶν Ἐλαιῶν, ἀποστέλλει δύο τῶν μαθητῶν αὐτοῦ",
    "2": "καὶ λέγει αὐτοῖς, Ὑπάγετε εἰς τὴν κώμην τὴν κατέναντι ὑμῶν, καὶ εὐθὺς εἰσπορευόμενοι εἰς αὐτὴν εὑρήσετε πῶλον δεδεμένον ἐφ᾽ ὃν οὐδεὶς οὔπω ἀνθρώπων ἐκάθισεν· λύσατε αὐτὸν καὶ φέρετε.",
    "3": "καὶ ἐάν τις ὑμῖν εἴπῃ, Τί ποιεῖτε τοῦτο; εἴπατε, Ὁ κύριος αὐτοῦ χρείαν ἔχει, καὶ εὐθὺς αὐτὸν ἀποστέλλει πάλιν ὧδε.",
    "4": "καὶ ἀπῆλθον καὶ εὗρον πῶλον δεδεμένον πρὸς θύραν ἔξω ἐπὶ τοῦ ἀμφόδου καὶ λύουσιν αὐτόν.",
    "5": "καί τινες τῶν ἐκεῖ ἑστηκότων ἔλεγον αὐτοῖς, Τί ποιεῖτε λύοντες τὸν πῶλον;",
    "6": "οἱ δὲ εἶπαν αὐτοῖς καθὼς εἶπεν ὁ Ἰησοῦς, καὶ ἀφῆκαν αὐτούς.",
    "7": "καὶ φέρουσιν τὸν πῶλον πρὸς τὸν Ἰησοῦν καὶ ἐπιβάλλουσιν αὐτῷ τὰ ἱμάτια αὐτῶν, καὶ ἐκάθισεν ἐπ᾽ αὐτόν.",
    "8": "καὶ πολλοὶ τὰ ἱμάτια αὐτῶν ἔστρωσαν εἰς τὴν ὁδόν, ἄλλοι δὲ στιβάδας κόψαντες ἐκ τῶν ἀγρῶν.",
    "9": "καὶ οἱ προάγοντες καὶ οἱ ἀκολουθοῦντες ἔκραζον,\nὩσαννά·\nΕὐλογημένος ὁ ἐρχόμενος ἐν ὀνόματι κυρίου·",
    "10": "Εὐλογημένη ἡ ἐρχομένη βασιλεία τοῦ πατρὸς ἡμῶν Δαυίδ·\nὩσαννὰ ἐν τοῖς ὑψίστοις.",
    "11": "Καὶ εἰσῆλθεν εἰς Ἱεροσόλυμα εἰς τὸ ἱερὸν καὶ περιβλεψάμενος πάντα, ὀψίας ἤδη οὔσης τῆς ὥρας, ἐξῆλθεν εἰς Βηθανίαν μετὰ τῶν δώδεκα.",
    "12": "Καὶ τῇ ἐπαύριον ἐξελθόντων αὐτῶν ἀπὸ Βηθανίας ἐπείνασεν.",
    "13": "καὶ ἰδὼν συκῆν ἀπὸ μακρόθεν ἔχουσαν φύλλα ἦλθεν, εἰ ἄρα τι εὑρήσει ἐν αὐτῇ, καὶ ἐλθὼν ἐπ᾽ αὐτὴν οὐδὲν εὗρεν εἰ μὴ φύλλα· ὁ γὰρ καιρὸς οὐκ ἦν σύκων.",
    "14": "καὶ ἀποκριθεὶς εἶπεν αὐτῇ, Μηκέτι εἰς τὸν αἰῶνα ἐκ σοῦ μηδεὶς καρπὸν φάγοι. καὶ ἤκουον οἱ μαθηταὶ αὐτοῦ.",
    "15": "Καὶ ἔρχονται εἰς Ἱεροσόλυμα. καὶ εἰσελθὼν εἰς τὸ ἱερὸν ἤρξατο ἐκβάλλειν τοὺς πωλοῦντας καὶ τοὺς ἀγοράζοντας ἐν τῷ ἱερῷ, καὶ τὰς τραπέζας τῶν κολλυβιστῶν καὶ τὰς καθέδρας τῶν πωλούντων τὰς περιστερὰς κατέστρεψεν,",
    "16": "καὶ οὐκ ἤφιεν ἵνα τις διενέγκῃ σκεῦος διὰ τοῦ ἱεροῦ.",
    "17": "καὶ ἐδίδασκεν καὶ ἔλεγεν αὐτοῖς, Οὐ γέγραπται ὅτι\nὉ οἶκός μου οἶκος προσευχῆς κληθήσεται πᾶσιν τοῖς ἔθνεσιν;\nὑμεῖς δὲ πεποιήκατε αὐτὸν σπήλαιον λῃστῶν.",
    "18": "καὶ ἤκουσαν οἱ ἀρχιερεῖς καὶ οἱ γραμματεῖς καὶ ἐζήτουν πῶς αὐτὸν ἀπολέσωσιν· ἐφοβοῦντο γὰρ αὐτόν, πᾶς γὰρ ὁ ὄχλος ἐξεπλήσσετο ἐπὶ τῇ διδαχῇ αὐτοῦ.",
    "19": "Καὶ ὅταν ὀψὲ ἐγένετο, ἐξεπορεύοντο ἔξω τῆς πόλεως.",
    "20": "Καὶ παραπορευόμενοι πρωῒ εἶδον τὴν συκῆν ἐξηραμμένην ἐκ ῥιζῶν.",
    "21": "καὶ ἀναμνησθεὶς ὁ Πέτρος λέγει αὐτῷ, Ῥαββί, ἴδε ἡ συκῆ ἣν κατηράσω ἐξήρανται.",
    "22": "καὶ ἀποκριθεὶς ὁ Ἰησοῦς λέγει αὐτοῖς, Ἔχετε πίστιν θεοῦ.",
    "23": "ἀμὴν λέγω ὑμῖν ὅτι ὃς ἂν εἴπῃ τῷ ὄρει τούτῳ, Ἄρθητι καὶ βλήθητι εἰς τὴν θάλασσαν, καὶ μὴ διακριθῇ ἐν τῇ καρδίᾳ αὐτοῦ ἀλλὰ πιστεύῃ ὅτι ὃ λαλεῖ γίνεται, ἔσται αὐτῷ.",
    "24": "διὰ τοῦτο λέγω ὑμῖν, πάντα ὅσα προσεύχεσθε καὶ αἰτεῖσθε, πιστεύετε ὅτι ἐλάβετε, καὶ ἔσται ὑμῖν.",
    "25": "καὶ ὅταν στήκετε προσευχόμενοι, ἀφίετε εἴ τι ἔχετε κατά τινος, ἵνα καὶ ὁ πατὴρ ὑμῶν ὁ ἐν τοῖς οὐρανοῖς ἀφῇ ὑμῖν τὰ παραπτώματα ὑμῶν.",
    "27": "Καὶ ἔρχονται πάλιν εἰς Ἱεροσόλυμα. καὶ ἐν τῷ ἱερῷ περιπατοῦντος αὐτοῦ ἔρχονται πρὸς αὐτὸν οἱ ἀρχιερεῖς καὶ οἱ γραμματεῖς καὶ οἱ πρεσβύτεροι",
    "28": "καὶ ἔλεγον αὐτῷ, Ἐν ποίᾳ ἐξουσίᾳ ταῦτα ποιεῖς; ἢ τίς σοι ἔδωκεν τὴν ἐξουσίαν ταύτην ἵνα ταῦτα ποιῇς;",
    "29": "ὁ δὲ Ἰησοῦς εἶπεν αὐτοῖς, Ἐπερωτήσω ὑμᾶς ἕνα λόγον, καὶ ἀποκρίθητέ μοι καὶ ἐρῶ ὑμῖν ἐν ποίᾳ ἐξουσίᾳ ταῦτα ποιῶ·",
    "30": "τὸ βάπτισμα τὸ Ἰωάννου ἐξ οὐρανοῦ ἦν ἢ ἐξ ἀνθρώπων; ἀποκρίθητέ μοι.",
    "31": "καὶ διελογίζοντο πρὸς ἑαυτοὺς λέγοντες, Ἐὰν εἴπωμεν, Ἐξ οὐρανοῦ, ἐρεῖ, Διὰ τί [οὖν] οὐκ ἐπιστεύσατε αὐτῷ;",
    "32": "ἀλλ᾽ εἴπωμεν, Ἐξ ἀνθρώπων; – ἐφοβοῦντο τὸν ὄχλον· ἅπαντες γὰρ εἶχον τὸν Ἰωάννην ὄντως ὅτι προφήτης ἦν.",
    "33": "καὶ ἀποκριθέντες τῷ Ἰησοῦ λέγουσιν, Οὐκ οἴδαμεν. καὶ ὁ Ἰησοῦς λέγει αὐτοῖς, Οὐδὲ ἐγὼ λέγω ὑμῖν ἐν ποίᾳ ἐξουσίᾳ ταῦτα ποιῶ."
};
    const paragraphEnds = [9,10,11,14,17,19,25,33];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A entrada triunfal em Jerusalém",
        "sourceTitle": "The Triumphal Entry into Jerusalem",
        "parallel": "(Mt 21.1–11; Lc 19.28–40; Jo 12.12–19)"
    },
    {
        "beforeVerse": 12,
        "title": "A maldição da figueira",
        "sourceTitle": "The Cursing of the Fig Tree",
        "parallel": "(Mt 21.18–19)"
    },
    {
        "beforeVerse": 15,
        "title": "A purificação do templo",
        "sourceTitle": "The Cleansing of the Temple",
        "parallel": "(Mt 21.12–17; Lc 19.45–48; Jo 2.13–22)"
    },
    {
        "beforeVerse": 20,
        "title": "A lição da figueira seca",
        "sourceTitle": "The Lesson from the Withered Fig Tree",
        "parallel": "(Mt 21.20–22)"
    },
    {
        "beforeVerse": 27,
        "title": "A autoridade de Jesus é questionada",
        "sourceTitle": "The Authority of Jesus Questioned",
        "parallel": "(Mt 21.23–27; Lc 20.1–8)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MRK = window.ScripturaScriptureTexts.UBS5.MRK || {};
    window.ScripturaScriptureTexts.UBS5.MRK[11] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK = window.ScripturaScriptureParagraphBreaks.UBS5.MRK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK[11] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MRK = window.ScripturaScriptureHeadings.UBS5.MRK || {};
    window.ScripturaScriptureHeadings.UBS5.MRK[11] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK = window.ScripturaScriptureUnnumberedPassages.UBS5.MRK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK[11] = unnumberedPassages;
})();
