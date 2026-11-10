/* UBS5 — Apocalipse de João, capítulo 16.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἤκουσα μεγάλης φωνῆς ἐκ τοῦ ναοῦ λεγούσης τοῖς ἑπτὰ ἀγγέλοις, Ὑπάγετε καὶ ἐκχέετε τὰς ἑπτὰ φιάλας τοῦ θυμοῦ τοῦ θεοῦ εἰς τὴν γῆν.",
    "2": "Καὶ ἀπῆλθεν ὁ πρῶτος καὶ ἐξέχεεν τὴν φιάλην αὐτοῦ εἰς τὴν γῆν, καὶ ἐγένετο ἕλκος κακὸν καὶ πονηρὸν ἐπὶ τοὺς ἀνθρώπους τοὺς ἔχοντας τὸ χάραγμα τοῦ θηρίου καὶ τοὺς προσκυνοῦντας τῇ εἰκόνι αὐτοῦ.",
    "3": "Καὶ ὁ δεύτερος ἐξέχεεν τὴν φιάλην αὐτοῦ εἰς τὴν θάλασσαν, καὶ ἐγένετο αἷμα ὡς νεκροῦ, καὶ πᾶσα ψυχὴ ζωῆς ἀπέθανεν τὰ ἐν τῇ θαλάσσῃ.",
    "4": "Καὶ ὁ τρίτος ἐξέχεεν τὴν φιάλην αὐτοῦ εἰς τοὺς ποταμοὺς καὶ τὰς πηγὰς τῶν ὑδάτων, καὶ ἐγένετο αἷμα.",
    "5": "καὶ ἤκουσα τοῦ ἀγγέλου τῶν ὑδάτων λέγοντος,\nΔίκαιος εἶ, ὁ ὢν καὶ ὁ ἦν, ὁ ὅσιος,\nὅτι ταῦτα ἔκρινας,",
    "6": "ὅτι αἷμα ἁγίων καὶ προφητῶν ἐξέχεαν\nκαὶ αἷμα αὐτοῖς [δ]έδωκας πιεῖν,\nἄξιοί εἰσιν.",
    "7": "καὶ ἤκουσα τοῦ θυσιαστηρίου λέγοντος,\nΝαὶ κύριε ὁ θεὸς ὁ παντοκράτωρ,\nἀληθιναὶ καὶ δίκαιαι αἱ κρίσεις σου.",
    "8": "Καὶ ὁ τέταρτος ἐξέχεεν τὴν φιάλην αὐτοῦ ἐπὶ τὸν ἥλιον, καὶ ἐδόθη αὐτῷ καυματίσαι τοὺς ἀνθρώπους ἐν πυρί.",
    "9": "καὶ ἐκαυματίσθησαν οἱ ἄνθρωποι καῦμα μέγα καὶ ἐβλασφήμησαν τὸ ὄνομα τοῦ θεοῦ τοῦ ἔχοντος τὴν ἐξουσίαν ἐπὶ τὰς πληγὰς ταύτας καὶ οὐ μετενόησαν δοῦναι αὐτῷ δόξαν.",
    "10": "Καὶ ὁ πέμπτος ἐξέχεεν τὴν φιάλην αὐτοῦ ἐπὶ τὸν θρόνον τοῦ θηρίου, καὶ ἐγένετο ἡ βασιλεία αὐτοῦ ἐσκοτωμένη, καὶ ἐμασῶντο τὰς γλώσσας αὐτῶν ἐκ τοῦ πόνου,",
    "11": "καὶ ἐβλασφήμησαν τὸν θεὸν τοῦ οὐρανοῦ ἐκ τῶν πόνων αὐτῶν καὶ ἐκ τῶν ἑλκῶν αὐτῶν καὶ οὐ μετενόησαν ἐκ τῶν ἔργων αὐτῶν.",
    "12": "Καὶ ὁ ἕκτος ἐξέχεεν τὴν φιάλην αὐτοῦ ἐπὶ τὸν ποταμὸν τὸν μέγαν τὸν Εὐφράτην, καὶ ἐξηράνθη τὸ ὕδωρ αὐτοῦ, ἵνα ἑτοιμασθῇ ἡ ὁδὸς τῶν βασιλέων τῶν ἀπὸ ἀνατολῆς ἡλίου.",
    "13": "Καὶ εἶδον ἐκ τοῦ στόματος τοῦ δράκοντος καὶ ἐκ τοῦ στόματος τοῦ θηρίου καὶ ἐκ τοῦ στόματος τοῦ ψευδοπροφήτου πνεύματα τρία ἀκάθαρτα ὡς βάτραχοι·",
    "14": "εἰσὶν γὰρ πνεύματα δαιμονίων ποιοῦντα σημεῖα, ἃ ἐκπορεύεται ἐπὶ τοὺς βασιλεῖς τῆς οἰκουμένης ὅλης συναγαγεῖν αὐτοὺς εἰς τὸν πόλεμον τῆς ἡμέρας τῆς μεγάλης τοῦ θεοῦ τοῦ παντοκράτορος.",
    "15": "Ἰδοὺ ἔρχομαι ὡς κλέπτης. μακάριος ὁ γρηγορῶν καὶ τηρῶν τὰ ἱμάτια αὐτοῦ, ἵνα μὴ γυμνὸς περιπατῇ καὶ βλέπωσιν τὴν ἀσχημοσύνην αὐτοῦ.",
    "16": "καὶ συνήγαγεν αὐτοὺς εἰς τὸν τόπον τὸν καλούμενον Ἑβραϊστὶ Ἁρμαγεδών.",
    "17": "Καὶ ὁ ἕβδομος ἐξέχεεν τὴν φιάλην αὐτοῦ ἐπὶ τὸν ἀέρα, καὶ ἐξῆλθεν φωνὴ μεγάλη ἐκ τοῦ ναοῦ ἀπὸ τοῦ θρόνου λέγουσα, Γέγονεν.",
    "18": "καὶ ἐγένοντο ἀστραπαὶ καὶ φωναὶ καὶ βρονταὶ καὶ σεισμὸς ἐγένετο μέγας, οἷος οὐκ ἐγένετο ἀφ᾽ οὗ ἄνθρωπος ἐγένετο ἐπὶ τῆς γῆς τηλικοῦτος σεισμὸς οὕτως μέγας.",
    "19": "καὶ ἐγένετο ἡ πόλις ἡ μεγάλη εἰς τρία μέρη καὶ αἱ πόλεις τῶν ἐθνῶν ἔπεσαν. καὶ Βαβυλὼν ἡ μεγάλη ἐμνήσθη ἐνώπιον τοῦ θεοῦ δοῦναι αὐτῇ τὸ ποτήριον τοῦ οἴνου τοῦ θυμοῦ τῆς ὀργῆς αὐτοῦ.",
    "20": "καὶ πᾶσα νῆσος ἔφυγεν καὶ ὄρη οὐχ εὑρέθησαν.",
    "21": "καὶ χάλαζα μεγάλη ὡς ταλαντιαία καταβαίνει ἐκ τοῦ οὐρανοῦ ἐπὶ τοὺς ἀνθρώπους, καὶ ἐβλασφήμησαν οἱ ἄνθρωποι τὸν θεὸν ἐκ τῆς πληγῆς τῆς χαλάζης, ὅτι μεγάλη ἐστὶν ἡ πληγὴ αὐτῆς σφόδρα."
};
    const paragraphEnds = [1,2,3,5,6,7,9,11,16,21];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "As taças da ira de Deus",
        "sourceTitle": "The Bowls of God’s Wrath"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[16] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[16] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[16] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[16] = unnumberedPassages;
})();
