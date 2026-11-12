/* UBS5 — Evangelho segundo Mateus, capítulo 19.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἐγένετο ὅτε ἐτέλεσεν ὁ Ἰησοῦς τοὺς λόγους τούτους, μετῆρεν ἀπὸ τῆς Γαλιλαίας καὶ ἦλθεν εἰς τὰ ὅρια τῆς Ἰουδαίας πέραν τοῦ Ἰορδάνου.",
    "2": "καὶ ἠκολούθησαν αὐτῷ ὄχλοι πολλοί, καὶ ἐθεράπευσεν αὐτοὺς ἐκεῖ.",
    "3": "Καὶ προσῆλθον αὐτῷ Φαρισαῖοι πειράζοντες αὐτὸν καὶ λέγοντες, Εἰ ἔξεστιν ἀνθρώπῳ ἀπολῦσαι τὴν γυναῖκα αὐτοῦ κατὰ πᾶσαν αἰτίαν;",
    "4": "ὁ δὲ ἀποκριθεὶς εἶπεν, Οὐκ ἀνέγνωτε ὅτι ὁ κτίσας ἀπ᾽ ἀρχῆς ἄρσεν καὶ θῆλυ ἐποίησεν αὐτούς;",
    "5": "καὶ εἶπεν, Ἕνεκα τούτου καταλείψει ἄνθρωπος τὸν πατέρα καὶ τὴν μητέρα καὶ κολληθήσεται τῇ γυναικὶ αὐτοῦ, καὶ ἔσονται οἱ δύο εἰς σάρκα μίαν.",
    "6": "ὥστε οὐκέτι εἰσὶν δύο ἀλλὰ σὰρξ μία. ὃ οὖν ὁ θεὸς συνέζευξεν ἄνθρωπος μὴ χωριζέτω.",
    "7": "λέγουσιν αὐτῷ, Τί οὖν Μωϋσῆς ἐνετείλατο δοῦναι βιβλίον ἀποστασίου καὶ ἀπολῦσαι [αὐτήν];",
    "8": "λέγει αὐτοῖς ὅτι Μωϋσῆς πρὸς τὴν σκληροκαρδίαν ὑμῶν ἐπέτρεψεν ὑμῖν ἀπολῦσαι τὰς γυναῖκας ὑμῶν, ἀπ᾽ ἀρχῆς δὲ οὐ γέγονεν οὕτως.",
    "9": "λέγω δὲ ὑμῖν ὅτι ὃς ἂν ἀπολύσῃ τὴν γυναῖκα αὐτοῦ μὴ ἐπὶ πορνείᾳ καὶ γαμήσῃ ἄλλην μοιχᾶται.",
    "10": "λέγουσιν αὐτῷ οἱ μαθηταὶ [αὐτοῦ], Εἰ οὕτως ἐστὶν ἡ αἰτία τοῦ ἀνθρώπου μετὰ τῆς γυναικός, οὐ συμφέρει γαμῆσαι.",
    "11": "ὁ δὲ εἶπεν αὐτοῖς, Οὐ πάντες χωροῦσιν τὸν λόγον [τοῦτον] ἀλλ᾽ οἷς δέδοται.",
    "12": "εἰσὶν γὰρ εὐνοῦχοι οἵτινες ἐκ κοιλίας μητρὸς ἐγεννήθησαν οὕτως, καὶ εἰσὶν εὐνοῦχοι οἵτινες εὐνουχίσθησαν ὑπὸ τῶν ἀνθρώπων, καὶ εἰσὶν εὐνοῦχοι οἵτινες εὐνούχισαν ἑαυτοὺς διὰ τὴν βασιλείαν τῶν οὐρανῶν. ὁ δυνάμενος χωρεῖν χωρείτω.",
    "13": "Τότε προσηνέχθησαν αὐτῷ παιδία ἵνα τὰς χεῖρας ἐπιθῇ αὐτοῖς καὶ προσεύξηται· οἱ δὲ μαθηταὶ ἐπετίμησαν αὐτοῖς.",
    "14": "ὁ δὲ Ἰησοῦς εἶπεν, Ἄφετε τὰ παιδία καὶ μὴ κωλύετε αὐτὰ ἐλθεῖν πρός με, τῶν γὰρ τοιούτων ἐστὶν ἡ βασιλεία τῶν οὐρανῶν.",
    "15": "καὶ ἐπιθεὶς τὰς χεῖρας αὐτοῖς ἐπορεύθη ἐκεῖθεν.",
    "16": "Καὶ ἰδοὺ εἷς προσελθὼν αὐτῷ εἶπεν, Διδάσκαλε, τί ἀγαθὸν ποιήσω ἵνα σχῶ ζωὴν αἰώνιον;",
    "17": "ὁ δὲ εἶπεν αὐτῷ, Τί με ἐρωτᾷς περὶ τοῦ ἀγαθοῦ; εἷς ἐστιν ὁ ἀγαθός· εἰ δὲ θέλεις εἰς τὴν ζωὴν εἰσελθεῖν, τήρησον τὰς ἐντολάς.",
    "18": "λέγει αὐτῷ, Ποίας; ὁ δὲ Ἰησοῦς εἶπεν, Τὸ Οὐ φονεύσεις, Οὐ μοιχεύσεις, Οὐ κλέψεις, Οὐ ψευδομαρτυρήσεις,",
    "19": "Τίμα τὸν πατέρα καὶ τὴν μητέρα, καί, Ἀγαπήσεις τὸν πλησίον σου ὡς σεαυτόν.",
    "20": "λέγει αὐτῷ ὁ νεανίσκος, Πάντα ταῦτα ἐφύλαξα· τί ἔτι ὑστερῶ;",
    "21": "ἔφη αὐτῷ ὁ Ἰησοῦς, Εἰ θέλεις τέλειος εἶναι, ὕπαγε πώλησόν σου τὰ ὑπάρχοντα καὶ δὸς [τοῖς] πτωχοῖς, καὶ ἕξεις θησαυρὸν ἐν οὐρανοῖς, καὶ δεῦρο ἀκολούθει μοι.",
    "22": "ἀκούσας δὲ ὁ νεανίσκος τὸν λόγον ἀπῆλθεν λυπούμενος· ἦν γὰρ ἔχων κτήματα πολλά.",
    "23": "Ὁ δὲ Ἰησοῦς εἶπεν τοῖς μαθηταῖς αὐτοῦ, Ἀμὴν λέγω ὑμῖν ὅτι πλούσιος δυσκόλως εἰσελεύσεται εἰς τὴν βασιλείαν τῶν οὐρανῶν.",
    "24": "πάλιν δὲ λέγω ὑμῖν, εὐκοπώτερόν ἐστιν κάμηλον διὰ τρυπήματος ῥαφίδος διελθεῖν ἢ πλούσιον εἰσελθεῖν εἰς τὴν βασιλείαν τοῦ θεοῦ.",
    "25": "ἀκούσαντες δὲ οἱ μαθηταὶ ἐξεπλήσσοντο σφόδρα λέγοντες, Τίς ἄρα δύναται σωθῆναι;",
    "26": "ἐμβλέψας δὲ ὁ Ἰησοῦς εἶπεν αὐτοῖς, Παρὰ ἀνθρώποις τοῦτο ἀδύνατόν ἐστιν, παρὰ δὲ θεῷ πάντα δυνατά.",
    "27": "Τότε ἀποκριθεὶς ὁ Πέτρος εἶπεν αὐτῷ, Ἰδοὺ ἡμεῖς ἀφήκαμεν πάντα καὶ ἠκολουθήσαμέν σοι· τί ἄρα ἔσται ἡμῖν;",
    "28": "ὁ δὲ Ἰησοῦς εἶπεν αὐτοῖς, Ἀμὴν λέγω ὑμῖν ὅτι ὑμεῖς οἱ ἀκολουθήσαντές μοι ἐν τῇ παλιγγενεσίᾳ, ὅταν καθίσῃ ὁ υἱὸς τοῦ ἀνθρώπου ἐπὶ θρόνου δόξης αὐτοῦ, καθήσεσθε καὶ ὑμεῖς ἐπὶ δώδεκα θρόνους κρίνοντες τὰς δώδεκα φυλὰς τοῦ Ἰσραήλ.",
    "29": "καὶ πᾶς ὅστις ἀφῆκεν οἰκίας ἢ ἀδελφοὺς ἢ ἀδελφὰς ἢ πατέρα ἢ μητέρα ἢ τέκνα ἢ ἀγροὺς ἕνεκεν τοῦ ὀνόματός μου, ἑκατονταπλασίονα λήμψεται καὶ ζωὴν αἰώνιον κληρονομήσει.",
    "30": "Πολλοὶ δὲ ἔσονται πρῶτοι ἔσχατοι καὶ ἔσχατοι πρῶτοι."
};
    const paragraphEnds = [12,15,30];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Teaching about Divorce",
        "sourceTitle": "Teaching about Divorce",
        "parallel": "(Mk 10.1‑12)"
    },
    {
        "beforeVerse": 13,
        "title": "Little Children Blessed",
        "sourceTitle": "Little Children Blessed",
        "parallel": "(Mk 10.13‑16; Lk 18.15‑17)"
    },
    {
        "beforeVerse": 16,
        "title": "The Rich Young Man",
        "sourceTitle": "The Rich Young Man",
        "parallel": "(Mk 10.17‑31; Lk 18.18‑30)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[19] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[19] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[19] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[19] = unnumberedPassages;
})();
