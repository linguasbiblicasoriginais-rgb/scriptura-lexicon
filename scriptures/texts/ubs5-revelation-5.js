/* UBS5 — Apocalipse de João, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ εἶδον ἐπὶ τὴν δεξιὰν τοῦ καθημένου ἐπὶ τοῦ θρόνου βιβλίον γεγραμμένον ἔσωθεν καὶ ὄπισθεν κατεσφραγισμένον σφραγῖσιν ἑπτά.",
    "2": "καὶ εἶδον ἄγγελον ἰσχυρὸν κηρύσσοντα ἐν φωνῇ μεγάλῃ, Τίς ἄξιος ἀνοῖξαι τὸ βιβλίον καὶ λῦσαι τὰς σφραγῖδας αὐτοῦ;",
    "3": "καὶ οὐδεὶς ἐδύνατο ἐν τῷ οὐρανῷ οὐδὲ ἐπὶ τῆς γῆς οὐδὲ ὑποκάτω τῆς γῆς ἀνοῖξαι τὸ βιβλίον οὔτε βλέπειν αὐτό.",
    "4": "καὶ ἔκλαιον πολύ, ὅτι οὐδεὶς ἄξιος εὑρέθη ἀνοῖξαι τὸ βιβλίον οὔτε βλέπειν αὐτό.",
    "5": "καὶ εἷς ἐκ τῶν πρεσβυτέρων λέγει μοι, Μὴ κλαῖε, ἰδοὺ ἐνίκησεν ὁ λέων ὁ ἐκ τῆς φυλῆς Ἰούδα, ἡ ῥίζα Δαυίδ, ἀνοῖξαι τὸ βιβλίον καὶ τὰς ἑπτὰ σφραγῖδας αὐτοῦ.",
    "6": "Καὶ εἶδον ἐν μέσῳ τοῦ θρόνου καὶ τῶν τεσσάρων ζῴων καὶ ἐν μέσῳ τῶν πρεσβυτέρων ἀρνίον ἑστηκὸς ὡς ἐσφαγμένον ἔχων κέρατα ἑπτὰ καὶ ὀφθαλμοὺς ἑπτὰ οἵ εἰσιν τὰ [ἑπτὰ] πνεύματα τοῦ θεοῦ ἀπεσταλμένοι εἰς πᾶσαν τὴν γῆν.",
    "7": "καὶ ἦλθεν καὶ εἴληφεν ἐκ τῆς δεξιᾶς τοῦ καθημένου ἐπὶ τοῦ θρόνου.",
    "8": "καὶ ὅτε ἔλαβεν τὸ βιβλίον, τὰ τέσσαρα ζῷα καὶ οἱ εἴκοσι τέσσαρες πρεσβύτεροι ἔπεσαν ἐνώπιον τοῦ ἀρνίου ἔχοντες ἕκαστος κιθάραν καὶ φιάλας χρυσᾶς γεμούσας θυμιαμάτων, αἵ εἰσιν αἱ προσευχαὶ τῶν ἁγίων,",
    "9": "καὶ ᾄδουσιν ᾠδὴν καινὴν λέγοντες,\nἌξιος εἶ λαβεῖν τὸ βιβλίον\nκαὶ ἀνοῖξαι τὰς σφραγῖδας αὐτοῦ,\nὅτι ἐσφάγης καὶ ἠγόρασας τῷ θεῷ ἐν τῷ αἵματί σου\nἐκ πάσης φυλῆς καὶ γλώσσης καὶ λαοῦ καὶ ἔθνους",
    "10": "καὶ ἐποίησας αὐτοὺς τῷ θεῷ ἡμῶν βασιλείαν καὶ ἱερεῖς,\nκαὶ βασιλεύσουσιν ἐπὶ τῆς γῆς.",
    "11": "Καὶ εἶδον, καὶ ἤκουσα φωνὴν ἀγγέλων πολλῶν κύκλῳ τοῦ θρόνου καὶ τῶν ζῴων καὶ τῶν πρεσβυτέρων, καὶ ἦν ὁ ἀριθμὸς αὐτῶν μυριάδες μυριάδων καὶ χιλιάδες χιλιάδων",
    "12": "λέγοντες φωνῇ μεγάλῃ,\nἌξιόν ἐστιν τὸ ἀρνίον τὸ ἐσφαγμένον λαβεῖν\nτὴν δύναμιν καὶ πλοῦτον καὶ σοφίαν καὶ ἰσχὺν\nκαὶ τιμὴν καὶ δόξαν καὶ εὐλογίαν.",
    "13": "καὶ πᾶν κτίσμα ὃ ἐν τῷ οὐρανῷ καὶ ἐπὶ τῆς γῆς καὶ ὑποκάτω τῆς γῆς καὶ ἐπὶ τῆς θαλάσσης καὶ τὰ ἐν αὐτοῖς πάντα ἤκουσα λέγοντας,\nΤῷ καθημένῳ ἐπὶ τῷ θρόνῳ καὶ τῷ ἀρνίῳ\nἡ εὐλογία καὶ ἡ τιμὴ καὶ ἡ δόξα καὶ τὸ κράτος\nεἰς τοὺς αἰῶνας τῶν αἰώνων.",
    "14": "καὶ τὰ τέσσαρα ζῷα ἔλεγον, Ἀμήν. καὶ οἱ πρεσβύτεροι ἔπεσαν καὶ προσεκύνησαν."
};
    const paragraphEnds = [5,9,10,12,13,14];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O rolo e o Cordeiro",
        "sourceTitle": "The Scroll and the Lamb"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[5] = unnumberedPassages;
})();
