/* UBS5 — Apocalipse de João, capítulo 7.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μετὰ τοῦτο εἶδον τέσσαρας ἀγγέλους ἑστῶτας ἐπὶ τὰς τέσσαρας γωνίας τῆς γῆς, κρατοῦντας τοὺς τέσσαρας ἀνέμους τῆς γῆς ἵνα μὴ πνέῃ ἄνεμος ἐπὶ τῆς γῆς μήτε ἐπὶ τῆς θαλάσσης μήτε ἐπὶ πᾶν δένδρον.",
    "2": "καὶ εἶδον ἄλλον ἄγγελον ἀναβαίνοντα ἀπὸ ἀνατολῆς ἡλίου ἔχοντα σφραγῖδα θεοῦ ζῶντος, καὶ ἔκραξεν φωνῇ μεγάλῃ τοῖς τέσσαρσιν ἀγγέλοις οἷς ἐδόθη αὐτοῖς ἀδικῆσαι τὴν γῆν καὶ τὴν θάλασσαν",
    "3": "λέγων, Μὴ ἀδικήσητε τὴν γῆν μήτε τὴν θάλασσαν μήτε τὰ δένδρα, ἄχρι σφραγίσωμεν τοὺς δούλους τοῦ θεοῦ ἡμῶν ἐπὶ τῶν μετώπων αὐτῶν.",
    "4": "καὶ ἤκουσα τὸν ἀριθμὸν τῶν ἐσφραγισμένων, ἑκατὸν τεσσεράκοντα τέσσαρες χιλιάδες, ἐσφραγισμένοι ἐκ πάσης φυλῆς υἱῶν Ἰσραήλ·",
    "5": "ἐκ φυλῆς Ἰούδα δώδεκα χιλιάδες ἐσφραγισμένοι,\nἐκ φυλῆς Ῥουβὴν δώδεκα χιλιάδες,\nἐκ φυλῆς Γὰδ δώδεκα χιλιάδες,",
    "6": "ἐκ φυλῆς Ἀσὴρ δώδεκα χιλιάδες,\nἐκ φυλῆς Νεφθαλὶμ δώδεκα χιλιάδες,\nἐκ φυλῆς Μανασσῆ δώδεκα χιλιάδες,",
    "7": "ἐκ φυλῆς Συμεὼν δώδεκα χιλιάδες,\nἐκ φυλῆς Λευὶ δώδεκα χιλιάδες,\nἐκ φυλῆς Ἰσσαχὰρ δώδεκα χιλιάδες,",
    "8": "ἐκ φυλῆς Ζαβουλὼν δώδεκα χιλιάδες,\nἐκ φυλῆς Ἰωσὴφ δώδεκα χιλιάδες,\nἐκ φυλῆς Βενιαμὶν δώδεκα χιλιάδες ἐσφραγισμένοι.",
    "9": "Μετὰ ταῦτα εἶδον, καὶ ἰδοὺ ὄχλος πολύς, ὃν ἀριθμῆσαι αὐτὸν οὐδεὶς ἐδύνατο, ἐκ παντὸς ἔθνους καὶ φυλῶν καὶ λαῶν καὶ γλωσσῶν ἑστῶτες ἐνώπιον τοῦ θρόνου καὶ ἐνώπιον τοῦ ἀρνίου περιβεβλημένους στολὰς λευκὰς καὶ φοίνικες ἐν ταῖς χερσὶν αὐτῶν,",
    "10": "καὶ κράζουσιν φωνῇ μεγάλῃ λέγοντες,\nἩ σωτηρία τῷ θεῷ ἡμῶν τῷ καθημένῳ ἐπὶ\nτῷ θρόνῳ καὶ τῷ ἀρνίῳ.",
    "11": "καὶ πάντες οἱ ἄγγελοι εἱστήκεισαν κύκλῳ τοῦ θρόνου καὶ τῶν πρεσβυτέρων καὶ τῶν τεσσάρων ζῴων καὶ ἔπεσαν ἐνώπιον τοῦ θρόνου ἐπὶ τὰ πρόσωπα αὐτῶν καὶ προσεκύνησαν τῷ θεῷ",
    "12": "λέγοντες,\nἈμήν, ἡ εὐλογία καὶ ἡ δόξα καὶ ἡ σοφία καὶ\nἡ εὐχαριστία καὶ ἡ τιμὴ καὶ ἡ δύναμις καὶ ἡ\nἰσχὺς τῷ θεῷ ἡμῶν εἰς τοὺς αἰῶνας τῶν αἰώνων·\nἀμήν.",
    "13": "Καὶ ἀπεκρίθη εἷς ἐκ τῶν πρεσβυτέρων λέγων μοι, Οὗτοι οἱ περιβεβλημένοι τὰς στολὰς τὰς λευκὰς τίνες εἰσὶν καὶ πόθεν ἦλθον;",
    "14": "καὶ εἴρηκα αὐτῷ, Κύριέ μου, σὺ οἶδας. καὶ εἶπέν μοι, Οὗτοί εἰσιν οἱ ἐρχόμενοι ἐκ τῆς θλίψεως τῆς μεγάλης καὶ ἔπλυναν τὰς στολὰς αὐτῶν καὶ ἐλεύκαναν αὐτὰς ἐν τῷ αἵματι τοῦ ἀρνίου.",
    "15": "διὰ τοῦτό εἰσιν ἐνώπιον τοῦ θρόνου τοῦ θεοῦ\nκαὶ λατρεύουσιν αὐτῷ ἡμέρας καὶ νυκτὸς ἐν τῷ ναῷ αὐτοῦ,\nκαὶ ὁ καθήμενος ἐπὶ τοῦ θρόνου σκηνώσει ἐπ᾽ αὐτούς.",
    "16": "οὐ πεινάσουσιν ἔτι οὐδὲ διψήσουσιν ἔτι\nοὐδὲ μὴ πέσῃ ἐπ᾽ αὐτοὺς ὁ ἥλιος\nοὐδὲ πᾶν καῦμα,",
    "17": "ὅτι τὸ ἀρνίον τὸ ἀνὰ μέσον τοῦ θρόνου ποιμανεῖ αὐτοὺς\nκαὶ ὁδηγήσει αὐτοὺς ἐπὶ ζωῆς πηγὰς ὑδάτων,\nκαὶ ἐξαλείψει ὁ θεὸς πᾶν δάκρυον ἐκ τῶν ὀφθαλμῶν αὐτῶν."
};
    const paragraphEnds = [4,5,6,7,8,10,12,14,15,16,17];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Os 144 mil de Israel selados",
        "sourceTitle": "The 144,000 of Israel Sealed"
    },
    {
        "beforeVerse": 9,
        "title": "A multidão de todas as nações",
        "sourceTitle": "The Multitude from Every Nation"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[7] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[7] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[7] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[7] = unnumberedPassages;
})();
