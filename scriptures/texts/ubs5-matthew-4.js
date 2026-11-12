/* UBS5 — Evangelho segundo Mateus, capítulo 4.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τότε ὁ Ἰησοῦς ἀνήχθη εἰς τὴν ἔρημον ὑπὸ τοῦ πνεύματος πειρασθῆναι ὑπὸ τοῦ διαβόλου.",
    "2": "καὶ νηστεύσας ἡμέρας τεσσεράκοντα καὶ νύκτας τεσσεράκοντα, ὕστερον ἐπείνασεν.",
    "3": "Καὶ προσελθὼν ὁ πειράζων εἶπεν αὐτῷ, Εἰ υἱὸς εἶ τοῦ θεοῦ, εἰπὲ ἵνα οἱ λίθοι οὗτοι ἄρτοι γένωνται.",
    "4": "ὁ δὲ ἀποκριθεὶς εἶπεν, Γέγραπται,\nΟὐκ ἐπ᾽ ἄρτῳ μόνῳ ζήσεται ὁ ἄνθρωπος,\nἀλλ᾽ ἐπὶ παντὶ ῥήματι ἐκπορευομένῳ\nδιὰ στόματος θεοῦ.",
    "5": "Τότε παραλαμβάνει αὐτὸν ὁ διάβολος εἰς τὴν ἁγίαν πόλιν καὶ ἔστησεν αὐτὸν ἐπὶ τὸ πτερύγιον τοῦ ἱεροῦ",
    "6": "καὶ λέγει αὐτῷ, Εἰ υἱὸς εἶ τοῦ θεοῦ, βάλε σεαυτὸν κάτω· γέγραπται γὰρ ὅτι\nΤοῖς ἀγγέλοις αὐτοῦ ἐντελεῖται περὶ σοῦ\nκαὶ ἐπὶ χειρῶν ἀροῦσίν σε,\nμήποτε προσκόψῃς πρὸς λίθον τὸν πόδα σου.",
    "7": "ἔφη αὐτῷ ὁ Ἰησοῦς, Πάλιν γέγραπται, Οὐκ ἐκπειράσεις κύριον τὸν θεόν σου.",
    "8": "Πάλιν παραλαμβάνει αὐτὸν ὁ διάβολος εἰς ὄρος ὑψηλὸν λίαν καὶ δείκνυσιν αὐτῷ πάσας τὰς βασιλείας τοῦ κόσμου καὶ τὴν δόξαν αὐτῶν",
    "9": "καὶ εἶπεν αὐτῷ, Ταῦτά σοι πάντα δώσω, ἐὰν πεσὼν προσκυνήσῃς μοι.",
    "10": "τότε λέγει αὐτῷ ὁ Ἰησοῦς, Ὕπαγε, Σατανᾶ· γέγραπται γάρ,\nΚύριον τὸν θεόν σου προσκυνήσεις\nκαὶ αὐτῷ μόνῳ λατρεύσεις.",
    "11": "Τότε ἀφίησιν αὐτὸν ὁ διάβολος, καὶ ἰδοὺ ἄγγελοι προσῆλθον καὶ διηκόνουν αὐτῷ.",
    "12": "Ἀκούσας δὲ ὅτι Ἰωάννης παρεδόθη ἀνεχώρησεν εἰς τὴν Γαλιλαίαν.",
    "13": "καὶ καταλιπὼν τὴν Ναζαρὰ ἐλθὼν κατῴκησεν εἰς Καφαρναοὺμ τὴν παραθαλασσίαν ἐν ὁρίοις Ζαβουλὼν καὶ Νεφθαλίμ·",
    "14": "ἵνα πληρωθῇ τὸ ῥηθὲν διὰ Ἠσαΐου τοῦ προφήτου λέγοντος,",
    "15": "Γῆ Ζαβουλὼν καὶ γῆ Νεφθαλίμ,\nὁδὸν θαλάσσης, πέραν τοῦ Ἰορδάνου,\nΓαλιλαία τῶν ἐθνῶν,",
    "16": "ὁ λαὸς ὁ καθήμενος ἐν σκότει\nφῶς εἶδεν μέγα,\nκαὶ τοῖς καθημένοις ἐν χώρᾳ καὶ σκιᾷ θανάτου\nφῶς ἀνέτειλεν αὐτοῖς.",
    "17": "Ἀπὸ τότε ἤρξατο ὁ Ἰησοῦς κηρύσσειν καὶ λέγειν, Μετανοεῖτε· ἤγγικεν γὰρ ἡ βασιλεία τῶν οὐρανῶν.",
    "18": "Περιπατῶν δὲ παρὰ τὴν θάλασσαν τῆς Γαλιλαίας εἶδεν δύο ἀδελφούς, Σίμωνα τὸν λεγόμενον Πέτρον καὶ Ἀνδρέαν τὸν ἀδελφὸν αὐτοῦ, βάλλοντας ἀμφίβληστρον εἰς τὴν θάλασσαν· ἦσαν γὰρ ἁλιεῖς.",
    "19": "καὶ λέγει αὐτοῖς, Δεῦτε ὀπίσω μου, καὶ ποιήσω ὑμᾶς ἁλιεῖς ἀνθρώπων.",
    "20": "οἱ δὲ εὐθέως ἀφέντες τὰ δίκτυα ἠκολούθησαν αὐτῷ.",
    "21": "Καὶ προβὰς ἐκεῖθεν εἶδεν ἄλλους δύο ἀδελφούς, Ἰάκωβον τὸν τοῦ Ζεβεδαίου καὶ Ἰωάννην τὸν ἀδελφὸν αὐτοῦ, ἐν τῷ πλοίῳ μετὰ Ζεβεδαίου τοῦ πατρὸς αὐτῶν καταρτίζοντας τὰ δίκτυα αὐτῶν, καὶ ἐκάλεσεν αὐτούς.",
    "22": "οἱ δὲ εὐθέως ἀφέντες τὸ πλοῖον καὶ τὸν πατέρα αὐτῶν ἠκολούθησαν αὐτῷ.",
    "23": "Καὶ περιῆγεν ἐν ὅλῃ τῇ Γαλιλαίᾳ διδάσκων ἐν ταῖς συναγωγαῖς αὐτῶν καὶ κηρύσσων τὸ εὐαγγέλιον τῆς βασιλείας καὶ θεραπεύων πᾶσαν νόσον καὶ πᾶσαν μαλακίαν ἐν τῷ λαῷ.",
    "24": "καὶ ἀπῆλθεν ἡ ἀκοὴ αὐτοῦ εἰς ὅλην τὴν Συρίαν· καὶ προσήνεγκαν αὐτῷ πάντας τοὺς κακῶς ἔχοντας ποικίλαις νόσοις καὶ βασάνοις συνεχομένους [καὶ] δαιμονιζομένους καὶ σεληνιαζομένους καὶ παραλυτικούς, καὶ ἐθεράπευσεν αὐτούς.",
    "25": "καὶ ἠκολούθησαν αὐτῷ ὄχλοι πολλοὶ ἀπὸ τῆς Γαλιλαίας καὶ Δεκαπόλεως καὶ Ἱεροσολύμων καὶ Ἰουδαίας καὶ πέραν τοῦ Ἰορδάνου."
};
    const paragraphEnds = [11,17,22,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Temptation of Jesus",
        "sourceTitle": "The Temptation of Jesus",
        "parallel": "(Mk 1.12‑13; Lk 4.1‑13)"
    },
    {
        "beforeVerse": 12,
        "title": "The Beginning of the Galilean Ministry",
        "sourceTitle": "The Beginning of the Galilean Ministry",
        "parallel": "(Mk 1.14‑15; Lk 4.14‑15)"
    },
    {
        "beforeVerse": 18,
        "title": "The Calling of Four Fishermen",
        "sourceTitle": "The Calling of Four Fishermen",
        "parallel": "(Mk 1.16‑20; Lk 5.1‑11)"
    },
    {
        "beforeVerse": 23,
        "title": "Ministering to a Great Multitude",
        "sourceTitle": "Ministering to a Great Multitude",
        "parallel": "(Lk 6.17‑19)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[4] = unnumberedPassages;
})();
