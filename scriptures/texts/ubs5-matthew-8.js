/* UBS5 — Evangelho segundo Mateus, capítulo 8.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καταβάντος δὲ αὐτοῦ ἀπὸ τοῦ ὄρους ἠκολούθησαν αὐτῷ ὄχλοι πολλοί.",
    "2": "καὶ ἰδοὺ λεπρὸς προσελθὼν προσεκύνει αὐτῷ λέγων, Κύριε, ἐὰν θέλῃς δύνασαί με καθαρίσαι.",
    "3": "καὶ ἐκτείνας τὴν χεῖρα ἥψατο αὐτοῦ λέγων, Θέλω, καθαρίσθητι· καὶ εὐθέως ἐκαθαρίσθη αὐτοῦ ἡ λέπρα.",
    "4": "καὶ λέγει αὐτῷ ὁ Ἰησοῦς, Ὅρα μηδενὶ εἴπῃς, ἀλλ᾽ ὕπαγε σεαυτὸν δεῖξον τῷ ἱερεῖ καὶ προσένεγκον τὸ δῶρον ὃ προσέταξεν Μωϋσῆς, εἰς μαρτύριον αὐτοῖς.",
    "5": "Εἰσελθόντος δὲ αὐτοῦ εἰς Καφαρναοὺμ προσῆλθεν αὐτῷ ἑκατόνταρχος παρακαλῶν αὐτὸν",
    "6": "καὶ λέγων, Κύριε, ὁ παῖς μου βέβληται ἐν τῇ οἰκίᾳ παραλυτικός, δεινῶς βασανιζόμενος.",
    "7": "καὶ λέγει αὐτῷ, Ἐγὼ ἐλθὼν θεραπεύσω αὐτόν.",
    "8": "καὶ ἀποκριθεὶς ὁ ἑκατόνταρχος ἔφη, Κύριε, οὐκ εἰμὶ ἱκανὸς ἵνα μου ὑπὸ τὴν στέγην εἰσέλθῃς, ἀλλὰ μόνον εἰπὲ λόγῳ, καὶ ἰαθήσεται ὁ παῖς μου.",
    "9": "καὶ γὰρ ἐγὼ ἄνθρωπός εἰμι ὑπὸ ἐξουσίαν, ἔχων ὑπ᾽ ἐμαυτὸν στρατιώτας, καὶ λέγω τούτῳ, Πορεύθητι, καὶ πορεύεται, καὶ ἄλλῳ, Ἔρχου, καὶ ἔρχεται, καὶ τῷ δούλῳ μου, Ποίησον τοῦτο, καὶ ποιεῖ.",
    "10": "ἀκούσας δὲ ὁ Ἰησοῦς ἐθαύμασεν καὶ εἶπεν τοῖς ἀκολουθοῦσιν, Ἀμὴν λέγω ὑμῖν, παρ᾽ οὐδενὶ τοσαύτην πίστιν ἐν τῷ Ἰσραὴλ εὗρον.",
    "11": "λέγω δὲ ὑμῖν ὅτι πολλοὶ ἀπὸ ἀνατολῶν καὶ δυσμῶν ἥξουσιν καὶ ἀνακλιθήσονται μετὰ Ἀβραὰμ καὶ Ἰσαὰκ καὶ Ἰακὼβ ἐν τῇ βασιλείᾳ τῶν οὐρανῶν,",
    "12": "οἱ δὲ υἱοὶ τῆς βασιλείας ἐκβληθήσονται εἰς τὸ σκότος τὸ ἐξώτερον· ἐκεῖ ἔσται ὁ κλαυθμὸς καὶ ὁ βρυγμὸς τῶν ὀδόντων.",
    "13": "καὶ εἶπεν ὁ Ἰησοῦς τῷ ἑκατοντάρχῃ, Ὕπαγε, ὡς ἐπίστευσας γενηθήτω σοι. καὶ ἰάθη ὁ παῖς [αὐτοῦ] ἐν τῇ ὥρᾳ ἐκείνῃ.",
    "14": "Καὶ ἐλθὼν ὁ Ἰησοῦς εἰς τὴν οἰκίαν Πέτρου εἶδεν τὴν πενθερὰν αὐτοῦ βεβλημένην καὶ πυρέσσουσαν·",
    "15": "καὶ ἥψατο τῆς χειρὸς αὐτῆς, καὶ ἀφῆκεν αὐτὴν ὁ πυρετός, καὶ ἠγέρθη καὶ διηκόνει αὐτῷ.",
    "16": "Ὀψίας δὲ γενομένης προσήνεγκαν αὐτῷ δαιμονιζομένους πολλούς· καὶ ἐξέβαλεν τὰ πνεύματα λόγῳ καὶ πάντας τοὺς κακῶς ἔχοντας ἐθεράπευσεν,",
    "17": "ὅπως πληρωθῇ τὸ ῥηθὲν διὰ Ἠσαΐου τοῦ προφήτου λέγοντος,\nΑὐτὸς τὰς ἀσθενείας ἡμῶν ἔλαβεν\nκαὶ τὰς νόσους ἐβάστασεν.",
    "18": "Ἰδὼν δὲ ὁ Ἰησοῦς ὄχλον περὶ αὐτὸν ἐκέλευσεν ἀπελθεῖν εἰς τὸ πέραν.",
    "19": "καὶ προσελθὼν εἷς γραμματεὺς εἶπεν αὐτῷ, Διδάσκαλε, ἀκολουθήσω σοι ὅπου ἐὰν ἀπέρχῃ.",
    "20": "καὶ λέγει αὐτῷ ὁ Ἰησοῦς, Αἱ ἀλώπεκες φωλεοὺς ἔχουσιν καὶ τὰ πετεινὰ τοῦ οὐρανοῦ κατασκηνώσεις, ὁ δὲ υἱὸς τοῦ ἀνθρώπου οὐκ ἔχει ποῦ τὴν κεφαλὴν κλίνῃ.",
    "21": "ἕτερος δὲ τῶν μαθητῶν [αὐτοῦ] εἶπεν αὐτῷ, Κύριε, ἐπίτρεψόν μοι πρῶτον ἀπελθεῖν καὶ θάψαι τὸν πατέρα μου.",
    "22": "ὁ δὲ Ἰησοῦς λέγει αὐτῷ, Ἀκολούθει μοι καὶ ἄφες τοὺς νεκροὺς θάψαι τοὺς ἑαυτῶν νεκρούς.",
    "23": "Καὶ ἐμβάντι αὐτῷ εἰς τὸ πλοῖον ἠκολούθησαν αὐτῷ οἱ μαθηταὶ αὐτοῦ.",
    "24": "καὶ ἰδοὺ σεισμὸς μέγας ἐγένετο ἐν τῇ θαλάσσῃ, ὥστε τὸ πλοῖον καλύπτεσθαι ὑπὸ τῶν κυμάτων, αὐτὸς δὲ ἐκάθευδεν.",
    "25": "καὶ προσελθόντες ἤγειραν αὐτὸν λέγοντες, Κύριε, σῶσον, ἀπολλύμεθα.",
    "26": "καὶ λέγει αὐτοῖς, Τί δειλοί ἐστε, ὀλιγόπιστοι; τότε ἐγερθεὶς ἐπετίμησεν τοῖς ἀνέμοις καὶ τῇ θαλάσσῃ, καὶ ἐγένετο γαλήνη μεγάλη.",
    "27": "οἱ δὲ ἄνθρωποι ἐθαύμασαν λέγοντες, Ποταπός ἐστιν οὗτος ὅτι καὶ οἱ ἄνεμοι καὶ ἡ θάλασσα αὐτῷ ὑπακούουσιν;",
    "28": "Καὶ ἐλθόντος αὐτοῦ εἰς τὸ πέραν εἰς τὴν χώραν τῶν Γαδαρηνῶν ὑπήντησαν αὐτῷ δύο δαιμονιζόμενοι ἐκ τῶν μνημείων ἐξερχόμενοι, χαλεποὶ λίαν, ὥστε μὴ ἰσχύειν τινὰ παρελθεῖν διὰ τῆς ὁδοῦ ἐκείνης.",
    "29": "καὶ ἰδοὺ ἔκραξαν λέγοντες, Τί ἡμῖν καὶ σοί, υἱὲ τοῦ θεοῦ; ἦλθες ὧδε πρὸ καιροῦ βασανίσαι ἡμᾶς;",
    "30": "ἦν δὲ μακρὰν ἀπ᾽ αὐτῶν ἀγέλη χοίρων πολλῶν βοσκομένη.",
    "31": "οἱ δὲ δαίμονες παρεκάλουν αὐτὸν λέγοντες, Εἰ ἐκβάλλεις ἡμᾶς, ἀπόστειλον ἡμᾶς εἰς τὴν ἀγέλην τῶν χοίρων.",
    "32": "καὶ εἶπεν αὐτοῖς, Ὑπάγετε. οἱ δὲ ἐξελθόντες ἀπῆλθον εἰς τοὺς χοίρους· καὶ ἰδοὺ ὥρμησεν πᾶσα ἡ ἀγέλη κατὰ τοῦ κρημνοῦ εἰς τὴν θάλασσαν καὶ ἀπέθανον ἐν τοῖς ὕδασιν.",
    "33": "οἱ δὲ βόσκοντες ἔφυγον, καὶ ἀπελθόντες εἰς τὴν πόλιν ἀπήγγειλαν πάντα καὶ τὰ τῶν δαιμονιζομένων.",
    "34": "καὶ ἰδοὺ πᾶσα ἡ πόλις ἐξῆλθεν εἰς ὑπάντησιν τῷ Ἰησοῦ καὶ ἰδόντες αὐτὸν παρεκάλεσαν ὅπως μεταβῇ ἀπὸ τῶν ὁρίων αὐτῶν."
};
    const paragraphEnds = [4,13,17,22,27,34];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Cleansing of a Leper",
        "sourceTitle": "The Cleansing of a Leper",
        "parallel": "(Mk 1.40‑45; Lk 5.12‑16)"
    },
    {
        "beforeVerse": 5,
        "title": "The Healing of a Centurion’s Servant",
        "sourceTitle": "The Healing of a Centurion’s Servant",
        "parallel": "(Lk 7.1‑10; Jn 4.43‑54)"
    },
    {
        "beforeVerse": 14,
        "title": "The Healing of Many People",
        "sourceTitle": "The Healing of Many People",
        "parallel": "(Mk 1.29‑34; Lk 4.38‑41)"
    },
    {
        "beforeVerse": 18,
        "title": "The Would-be Followers of Jesus",
        "sourceTitle": "The Would-be Followers of Jesus",
        "parallel": "(Lk 9.57‑62)"
    },
    {
        "beforeVerse": 23,
        "title": "The Calming of a Storm",
        "sourceTitle": "The Calming of a Storm",
        "parallel": "(Mk 4.35‑41; Lk 8.22‑25)"
    },
    {
        "beforeVerse": 28,
        "title": "The Healing of the Gadarene Demoniacs",
        "sourceTitle": "The Healing of the Gadarene Demoniacs",
        "parallel": "(Mk 5.1‑20; Lk 8.26‑39)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[8] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[8] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[8] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[8] = unnumberedPassages;
})();
