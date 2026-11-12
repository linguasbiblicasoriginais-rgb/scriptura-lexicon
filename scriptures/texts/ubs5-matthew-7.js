/* UBS5 — Evangelho segundo Mateus, capítulo 7.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μὴ κρίνετε, ἵνα μὴ κριθῆτε·",
    "2": "ἐν ᾧ γὰρ κρίματι κρίνετε κριθήσεσθε, καὶ ἐν ᾧ μέτρῳ μετρεῖτε μετρηθήσεται ὑμῖν.",
    "3": "τί δὲ βλέπεις τὸ κάρφος τὸ ἐν τῷ ὀφθαλμῷ τοῦ ἀδελφοῦ σου, τὴν δὲ ἐν τῷ σῷ ὀφθαλμῷ δοκὸν οὐ κατανοεῖς;",
    "4": "ἢ πῶς ἐρεῖς τῷ ἀδελφῷ σου, Ἄφες ἐκβάλω τὸ κάρφος ἐκ τοῦ ὀφθαλμοῦ σου, καὶ ἰδοὺ ἡ δοκὸς ἐν τῷ ὀφθαλμῷ σοῦ;",
    "5": "ὑποκριτά, ἔκβαλε πρῶτον ἐκ τοῦ ὀφθαλμοῦ σοῦ τὴν δοκόν, καὶ τότε διαβλέψεις ἐκβαλεῖν τὸ κάρφος ἐκ τοῦ ὀφθαλμοῦ τοῦ ἀδελφοῦ σου.",
    "6": "Μὴ δῶτε τὸ ἅγιον τοῖς κυσὶν μηδὲ βάλητε τοὺς μαργαρίτας ὑμῶν ἔμπροσθεν τῶν χοίρων, μήποτε καταπατήσουσιν αὐτοὺς ἐν τοῖς ποσὶν αὐτῶν καὶ στραφέντες ῥήξωσιν ὑμᾶς.",
    "7": "Αἰτεῖτε καὶ δοθήσεται ὑμῖν, ζητεῖτε καὶ εὑρήσετε, κρούετε καὶ ἀνοιγήσεται ὑμῖν·",
    "8": "πᾶς γὰρ ὁ αἰτῶν λαμβάνει καὶ ὁ ζητῶν εὑρίσκει καὶ τῷ κρούοντι ἀνοιγήσεται.",
    "9": "ἢ τίς ἐστιν ἐξ ὑμῶν ἄνθρωπος, ὃν αἰτήσει ὁ υἱὸς αὐτοῦ ἄρτον, μὴ λίθον ἐπιδώσει αὐτῷ;",
    "10": "ἢ καὶ ἰχθὺν αἰτήσει, μὴ ὄφιν ἐπιδώσει αὐτῷ;",
    "11": "εἰ οὖν ὑμεῖς πονηροὶ ὄντες οἴδατε δόματα ἀγαθὰ διδόναι τοῖς τέκνοις ὑμῶν, πόσῳ μᾶλλον ὁ πατὴρ ὑμῶν ὁ ἐν τοῖς οὐρανοῖς δώσει ἀγαθὰ τοῖς αἰτοῦσιν αὐτόν.",
    "12": "Πάντα οὖν ὅσα ἐὰν θέλητε ἵνα ποιῶσιν ὑμῖν οἱ ἄνθρωποι, οὕτως καὶ ὑμεῖς ποιεῖτε αὐτοῖς· οὗτος γάρ ἐστιν ὁ νόμος καὶ οἱ προφῆται.",
    "13": "Εἰσέλθατε διὰ τῆς στενῆς πύλης· ὅτι πλατεῖα ἡ πύλη καὶ εὐρύχωρος ἡ ὁδὸς ἡ ἀπάγουσα εἰς τὴν ἀπώλειαν καὶ πολλοί εἰσιν οἱ εἰσερχόμενοι δι᾽ αὐτῆς·",
    "14": "τί στενὴ ἡ πύλη καὶ τεθλιμμένη ἡ ὁδὸς ἡ ἀπάγουσα εἰς τὴν ζωὴν καὶ ὀλίγοι εἰσὶν οἱ εὑρίσκοντες αὐτήν.",
    "15": "Προσέχετε ἀπὸ τῶν ψευδοπροφητῶν, οἵτινες ἔρχονται πρὸς ὑμᾶς ἐν ἐνδύμασιν προβάτων, ἔσωθεν δέ εἰσιν λύκοι ἅρπαγες.",
    "16": "ἀπὸ τῶν καρπῶν αὐτῶν ἐπιγνώσεσθε αὐτούς. μήτι συλλέγουσιν ἀπὸ ἀκανθῶν σταφυλὰς ἢ ἀπὸ τριβόλων σῦκα;",
    "17": "οὕτως πᾶν δένδρον ἀγαθὸν καρποὺς καλοὺς ποιεῖ, τὸ δὲ σαπρὸν δένδρον καρποὺς πονηροὺς ποιεῖ.",
    "18": "οὐ δύναται δένδρον ἀγαθὸν καρποὺς πονηροὺς ποιεῖν οὐδὲ δένδρον σαπρὸν καρποὺς καλοὺς ποιεῖν.",
    "19": "πᾶν δένδρον μὴ ποιοῦν καρπὸν καλὸν ἐκκόπτεται καὶ εἰς πῦρ βάλλεται.",
    "20": "ἄρα γε ἀπὸ τῶν καρπῶν αὐτῶν ἐπιγνώσεσθε αὐτούς.",
    "21": "Οὐ πᾶς ὁ λέγων μοι, Κύριε κύριε, εἰσελεύσεται εἰς τὴν βασιλείαν τῶν οὐρανῶν, ἀλλ᾽ ὁ ποιῶν τὸ θέλημα τοῦ πατρός μου τοῦ ἐν τοῖς οὐρανοῖς.",
    "22": "πολλοὶ ἐροῦσίν μοι ἐν ἐκείνῃ τῇ ἡμέρᾳ, Κύριε κύριε, οὐ τῷ σῷ ὀνόματι ἐπροφητεύσαμεν, καὶ τῷ σῷ ὀνόματι δαιμόνια ἐξεβάλομεν, καὶ τῷ σῷ ὀνόματι δυνάμεις πολλὰς ἐποιήσαμεν;",
    "23": "καὶ τότε ὁμολογήσω αὐτοῖς ὅτι Οὐδέποτε ἔγνων ὑμᾶς· ἀποχωρεῖτε ἀπ᾽ ἐμοῦ οἱ ἐργαζόμενοι τὴν ἀνομίαν.",
    "24": "Πᾶς οὖν ὅστις ἀκούει μου τοὺς λόγους τούτους καὶ ποιεῖ αὐτούς, ὁμοιωθήσεται ἀνδρὶ φρονίμῳ, ὅστις ᾠκοδόμησεν αὐτοῦ τὴν οἰκίαν ἐπὶ τὴν πέτραν·",
    "25": "καὶ κατέβη ἡ βροχὴ καὶ ἦλθον οἱ ποταμοὶ καὶ ἔπνευσαν οἱ ἄνεμοι καὶ προσέπεσαν τῇ οἰκίᾳ ἐκείνῃ, καὶ οὐκ ἔπεσεν, τεθεμελίωτο γὰρ ἐπὶ τὴν πέτραν.",
    "26": "καὶ πᾶς ὁ ἀκούων μου τοὺς λόγους τούτους καὶ μὴ ποιῶν αὐτοὺς ὁμοιωθήσεται ἀνδρὶ μωρῷ, ὅστις ᾠκοδόμησεν αὐτοῦ τὴν οἰκίαν ἐπὶ τὴν ἄμμον·",
    "27": "καὶ κατέβη ἡ βροχὴ καὶ ἦλθον οἱ ποταμοὶ καὶ ἔπνευσαν οἱ ἄνεμοι καὶ προσέκοψαν τῇ οἰκίᾳ ἐκείνῃ, καὶ ἔπεσεν καὶ ἦν ἡ πτῶσις αὐτῆς μεγάλη.",
    "28": "Καὶ ἐγένετο ὅτε ἐτέλεσεν ὁ Ἰησοῦς τοὺς λόγους τούτους, ἐξεπλήσσοντο οἱ ὄχλοι ἐπὶ τῇ διδαχῇ αὐτοῦ·",
    "29": "ἦν γὰρ διδάσκων αὐτοὺς ὡς ἐξουσίαν ἔχων καὶ οὐχ ὡς οἱ γραμματεῖς αὐτῶν."
};
    const paragraphEnds = [6,12,14,20,23,29];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Judging Others",
        "sourceTitle": "Judging Others",
        "parallel": "(Lk 6.37‑38, 41‑42)"
    },
    {
        "beforeVerse": 7,
        "title": "Ask, Seek, Knock",
        "sourceTitle": "Ask, Seek, Knock",
        "parallel": "(Lk 11.9‑13)"
    },
    {
        "beforeVerse": 13,
        "title": "The Narrow Gate",
        "sourceTitle": "The Narrow Gate",
        "parallel": "(Lk 13.24)"
    },
    {
        "beforeVerse": 15,
        "title": "A Tree Known by Its Fruit",
        "sourceTitle": "A Tree Known by Its Fruit",
        "parallel": "(Lk 6.43‑44)"
    },
    {
        "beforeVerse": 21,
        "title": "I Never Knew You",
        "sourceTitle": "I Never Knew You",
        "parallel": "(Lk 13.25‑27)"
    },
    {
        "beforeVerse": 24,
        "title": "The Two Foundations",
        "sourceTitle": "The Two Foundations",
        "parallel": "(Lk 6.47‑49)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[7] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[7] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[7] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[7] = unnumberedPassages;
})();
