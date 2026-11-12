/* UBS5 — Evangelho segundo Mateus, capítulo 10.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ προσκαλεσάμενος τοὺς δώδεκα μαθητὰς αὐτοῦ ἔδωκεν αὐτοῖς ἐξουσίαν πνευμάτων ἀκαθάρτων ὥστε ἐκβάλλειν αὐτὰ καὶ θεραπεύειν πᾶσαν νόσον καὶ πᾶσαν μαλακίαν.",
    "2": "Τῶν δὲ δώδεκα ἀποστόλων τὰ ὀνόματά ἐστιν ταῦτα· πρῶτος Σίμων ὁ λεγόμενος Πέτρος καὶ Ἀνδρέας ὁ ἀδελφὸς αὐτοῦ, καὶ Ἰάκωβος ὁ τοῦ Ζεβεδαίου καὶ Ἰωάννης ὁ ἀδελφὸς αὐτοῦ,",
    "3": "Φίλιππος καὶ Βαρθολομαῖος, Θωμᾶς καὶ Μαθθαῖος ὁ τελώνης, Ἰάκωβος ὁ τοῦ Ἁλφαίου καὶ Θαδδαῖος,",
    "4": "Σίμων ὁ Καναναῖος καὶ Ἰούδας ὁ Ἰσκαριώτης ὁ καὶ παραδοὺς αὐτόν.",
    "5": "Τούτους τοὺς δώδεκα ἀπέστειλεν ὁ Ἰησοῦς παραγγείλας αὐτοῖς λέγων, Εἰς ὁδὸν ἐθνῶν μὴ ἀπέλθητε καὶ εἰς πόλιν Σαμαριτῶν μὴ εἰσέλθητε·",
    "6": "πορεύεσθε δὲ μᾶλλον πρὸς τὰ πρόβατα τὰ ἀπολωλότα οἴκου Ἰσραήλ.",
    "7": "πορευόμενοι δὲ κηρύσσετε λέγοντες ὅτι Ἤγγικεν ἡ βασιλεία τῶν οὐρανῶν.",
    "8": "ἀσθενοῦντας θεραπεύετε, νεκροὺς ἐγείρετε, λεπροὺς καθαρίζετε, δαιμόνια ἐκβάλλετε· δωρεὰν ἐλάβετε, δωρεὰν δότε.",
    "9": "Μὴ κτήσησθε χρυσὸν μηδὲ ἄργυρον μηδὲ χαλκὸν εἰς τὰς ζώνας ὑμῶν,",
    "10": "μὴ πήραν εἰς ὁδὸν μηδὲ δύο χιτῶνας μηδὲ ὑποδήματα μηδὲ ῥάβδον· ἄξιος γὰρ ὁ ἐργάτης τῆς τροφῆς αὐτοῦ.",
    "11": "εἰς ἣν δ᾽ ἂν πόλιν ἢ κώμην εἰσέλθητε, ἐξετάσατε τίς ἐν αὐτῇ ἄξιός ἐστιν· κἀκεῖ μείνατε ἕως ἂν ἐξέλθητε.",
    "12": "εἰσερχόμενοι δὲ εἰς τὴν οἰκίαν ἀσπάσασθε αὐτήν·",
    "13": "καὶ ἐὰν μὲν ᾖ ἡ οἰκία ἀξία, ἐλθάτω ἡ εἰρήνη ὑμῶν ἐπ᾽ αὐτήν, ἐὰν δὲ μὴ ᾖ ἀξία, ἡ εἰρήνη ὑμῶν πρὸς ὑμᾶς ἐπιστραφήτω.",
    "14": "καὶ ὃς ἂν μὴ δέξηται ὑμᾶς μηδὲ ἀκούσῃ τοὺς λόγους ὑμῶν, ἐξερχόμενοι ἔξω τῆς οἰκίας ἢ τῆς πόλεως ἐκείνης ἐκτινάξατε τὸν κονιορτὸν τῶν ποδῶν ὑμῶν.",
    "15": "ἀμὴν λέγω ὑμῖν, ἀνεκτότερον ἔσται γῇ Σοδόμων καὶ Γομόρρων ἐν ἡμέρᾳ κρίσεως ἢ τῇ πόλει ἐκείνῃ.",
    "16": "Ἰδοὺ ἐγὼ ἀποστέλλω ὑμᾶς ὡς πρόβατα ἐν μέσῳ λύκων· γίνεσθε οὖν φρόνιμοι ὡς οἱ ὄφεις καὶ ἀκέραιοι ὡς αἱ περιστεραί.",
    "17": "προσέχετε δὲ ἀπὸ τῶν ἀνθρώπων· παραδώσουσιν γὰρ ὑμᾶς εἰς συνέδρια καὶ ἐν ταῖς συναγωγαῖς αὐτῶν μαστιγώσουσιν ὑμᾶς·",
    "18": "καὶ ἐπὶ ἡγεμόνας δὲ καὶ βασιλεῖς ἀχθήσεσθε ἕνεκεν ἐμοῦ εἰς μαρτύριον αὐτοῖς καὶ τοῖς ἔθνεσιν.",
    "19": "ὅταν δὲ παραδῶσιν ὑμᾶς, μὴ μεριμνήσητε πῶς ἢ τί λαλήσητε· δοθήσεται γὰρ ὑμῖν ἐν ἐκείνῃ τῇ ὥρᾳ τί λαλήσητε·",
    "20": "οὐ γὰρ ὑμεῖς ἐστε οἱ λαλοῦντες ἀλλὰ τὸ πνεῦμα τοῦ πατρὸς ὑμῶν τὸ λαλοῦν ἐν ὑμῖν.",
    "21": "παραδώσει δὲ ἀδελφὸς ἀδελφὸν εἰς θάνατον καὶ πατὴρ τέκνον, καὶ ἐπαναστήσονται τέκνα ἐπὶ γονεῖς καὶ θανατώσουσιν αὐτούς.",
    "22": "καὶ ἔσεσθε μισούμενοι ὑπὸ πάντων διὰ τὸ ὄνομά μου· ὁ δὲ ὑπομείνας εἰς τέλος οὗτος σωθήσεται.",
    "23": "ὅταν δὲ διώκωσιν ὑμᾶς ἐν τῇ πόλει ταύτῃ, φεύγετε εἰς τὴν ἑτέραν· ἀμὴν γὰρ λέγω ὑμῖν, οὐ μὴ τελέσητε τὰς πόλεις τοῦ Ἰσραὴλ ἕως ἂν ἔλθῃ ὁ υἱὸς τοῦ ἀνθρώπου.",
    "24": "Οὐκ ἔστιν μαθητὴς ὑπὲρ τὸν διδάσκαλον οὐδὲ δοῦλος ὑπὲρ τὸν κύριον αὐτοῦ.",
    "25": "ἀρκετὸν τῷ μαθητῇ ἵνα γένηται ὡς ὁ διδάσκαλος αὐτοῦ καὶ ὁ δοῦλος ὡς ὁ κύριος αὐτοῦ. εἰ τὸν οἰκοδεσπότην Βεελζεβοὺλ ἐπεκάλεσαν, πόσῳ μᾶλλον τοὺς οἰκιακοὺς αὐτοῦ.",
    "26": "Μὴ οὖν φοβηθῆτε αὐτούς· οὐδὲν γάρ ἐστιν κεκαλυμμένον ὃ οὐκ ἀποκαλυφθήσεται καὶ κρυπτὸν ὃ οὐ γνωσθήσεται.",
    "27": "ὃ λέγω ὑμῖν ἐν τῇ σκοτίᾳ εἴπατε ἐν τῷ φωτί, καὶ ὃ εἰς τὸ οὖς ἀκούετε κηρύξατε ἐπὶ τῶν δωμάτων.",
    "28": "καὶ μὴ φοβεῖσθε ἀπὸ τῶν ἀποκτεννόντων τὸ σῶμα, τὴν δὲ ψυχὴν μὴ δυναμένων ἀποκτεῖναι· φοβεῖσθε δὲ μᾶλλον τὸν δυνάμενον καὶ ψυχὴν καὶ σῶμα ἀπολέσαι ἐν γεέννῃ.",
    "29": "οὐχὶ δύο στρουθία ἀσσαρίου πωλεῖται; καὶ ἓν ἐξ αὐτῶν οὐ πεσεῖται ἐπὶ τὴν γῆν ἄνευ τοῦ πατρὸς ὑμῶν.",
    "30": "ὑμῶν δὲ καὶ αἱ τρίχες τῆς κεφαλῆς πᾶσαι ἠριθμημέναι εἰσίν.",
    "31": "μὴ οὖν φοβεῖσθε· πολλῶν στρουθίων διαφέρετε ὑμεῖς.",
    "32": "Πᾶς οὖν ὅστις ὁμολογήσει ἐν ἐμοὶ ἔμπροσθεν τῶν ἀνθρώπων, ὁμολογήσω κἀγὼ ἐν αὐτῷ ἔμπροσθεν τοῦ πατρός μου τοῦ ἐν [τοῖς] οὐρανοῖς·",
    "33": "ὅστις δ᾽ ἂν ἀρνήσηταί με ἔμπροσθεν τῶν ἀνθρώπων, ἀρνήσομαι κἀγὼ αὐτὸν ἔμπροσθεν τοῦ πατρός μου τοῦ ἐν [τοῖς] οὐρανοῖς.",
    "34": "Μὴ νομίσητε ὅτι ἦλθον βαλεῖν εἰρήνην ἐπὶ τὴν γῆν· οὐκ ἦλθον βαλεῖν εἰρήνην ἀλλὰ μάχαιραν.",
    "35": "ἦλθον γὰρ διχάσαι\nἄνθρωπον κατὰ τοῦ πατρὸς αὐτοῦ\nκαὶ θυγατέρα κατὰ τῆς μητρὸς αὐτῆς\nκαὶ νύμφην κατὰ τῆς πενθερᾶς αὐτῆς,",
    "36": "καὶ ἐχθροὶ τοῦ ἀνθρώπου οἱ οἰκιακοὶ αὐτοῦ.",
    "37": "Ὁ φιλῶν πατέρα ἢ μητέρα ὑπὲρ ἐμὲ οὐκ ἔστιν μου ἄξιος, καὶ ὁ φιλῶν υἱὸν ἢ θυγατέρα ὑπὲρ ἐμὲ οὐκ ἔστιν μου ἄξιος·",
    "38": "καὶ ὃς οὐ λαμβάνει τὸν σταυρὸν αὐτοῦ καὶ ἀκολουθεῖ ὀπίσω μου, οὐκ ἔστιν μου ἄξιος.",
    "39": "ὁ εὑρὼν τὴν ψυχὴν αὐτοῦ ἀπολέσει αὐτήν, καὶ ὁ ἀπολέσας τὴν ψυχὴν αὐτοῦ ἕνεκεν ἐμοῦ εὑρήσει αὐτήν.",
    "40": "Ὁ δεχόμενος ὑμᾶς ἐμὲ δέχεται, καὶ ὁ ἐμὲ δεχόμενος δέχεται τὸν ἀποστείλαντά με.",
    "41": "ὁ δεχόμενος προφήτην εἰς ὄνομα προφήτου μισθὸν προφήτου λήμψεται, καὶ ὁ δεχόμενος δίκαιον εἰς ὄνομα δικαίου μισθὸν δικαίου λήμψεται.",
    "42": "καὶ ὃς ἂν ποτίσῃ ἕνα τῶν μικρῶν τούτων ποτήριον ψυχροῦ μόνον εἰς ὄνομα μαθητοῦ, ἀμὴν λέγω ὑμῖν, οὐ μὴ ἀπολέσῃ τὸν μισθὸν αὐτοῦ."
};
    const paragraphEnds = [4,15,25,31,33,39,42];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Mission of the Twelve",
        "sourceTitle": "The Mission of the Twelve",
        "parallel": "(Mk 3.13‑19; Lk 6.12‑16)"
    },
    {
        "beforeVerse": 5,
        "title": "The Commissioning of the Twelve",
        "sourceTitle": "The Commissioning of the Twelve",
        "parallel": "(Mk 6.7‑13; Lk 9.1‑6)"
    },
    {
        "beforeVerse": 16,
        "title": "Coming Persecutions",
        "sourceTitle": "Coming Persecutions",
        "parallel": "(Mk 13.9‑13; Lk 21.12‑17)"
    },
    {
        "beforeVerse": 26,
        "title": "Whom to Fear",
        "sourceTitle": "Whom to Fear",
        "parallel": "(Lk 12.2‑7)"
    },
    {
        "beforeVerse": 32,
        "title": "Confessing Christ before Men",
        "sourceTitle": "Confessing Christ before Men",
        "parallel": "(Lk 12.8‑9)"
    },
    {
        "beforeVerse": 34,
        "title": "Not Peace, but a Sword",
        "sourceTitle": "Not Peace, but a Sword",
        "parallel": "(Lk 12.51‑53; 14.26‑27)"
    },
    {
        "beforeVerse": 40,
        "title": "Rewards",
        "sourceTitle": "Rewards",
        "parallel": "(Mk 9.41)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[10] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[10] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[10] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[10] = unnumberedPassages;
})();
