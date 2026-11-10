/* UBS5 — Apocalipse de João, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μετὰ ταῦτα εἶδον, καὶ ἰδοὺ θύρα ἠνεῳγμένη ἐν τῷ οὐρανῷ, καὶ ἡ φωνὴ ἡ πρώτη ἣν ἤκουσα ὡς σάλπιγγος λαλούσης μετ᾽ ἐμοῦ λέγων, Ἀνάβα ὧδε, καὶ δείξω σοι ἃ δεῖ γενέσθαι μετὰ ταῦτα.",
    "2": "εὐθέως ἐγενόμην ἐν πνεύματι, καὶ ἰδοὺ θρόνος ἔκειτο ἐν τῷ οὐρανῷ, καὶ ἐπὶ τὸν θρόνον καθήμενος,",
    "3": "καὶ ὁ καθήμενος ὅμοιος ὁράσει λίθῳ ἰάσπιδι καὶ σαρδίῳ, καὶ ἶρις κυκλόθεν τοῦ θρόνου ὅμοιος ὁράσει σμαραγδίνῳ.",
    "4": "καὶ κυκλόθεν τοῦ θρόνου θρόνους εἴκοσι τέσσαρες, καὶ ἐπὶ τοὺς θρόνους εἴκοσι τέσσαρας πρεσβυτέρους καθημένους περιβεβλημένους ἐν ἱματίοις λευκοῖς καὶ ἐπὶ τὰς κεφαλὰς αὐτῶν στεφάνους χρυσοῦς.",
    "5": "καὶ ἐκ τοῦ θρόνου ἐκπορεύονται ἀστραπαὶ καὶ φωναὶ καὶ βρονταί, καὶ ἑπτὰ λαμπάδες πυρὸς καιόμεναι ἐνώπιον τοῦ θρόνου, ἅ εἰσιν τὰ ἑπτὰ πνεύματα τοῦ θεοῦ,",
    "6": "καὶ ἐνώπιον τοῦ θρόνου ὡς θάλασσα ὑαλίνη ὁμοία κρυστάλλῳ.\nΚαὶ ἐν μέσῳ τοῦ θρόνου καὶ κύκλῳ τοῦ θρόνου τέσσαρα ζῷα γέμοντα ὀφθαλμῶν ἔμπροσθεν καὶ ὄπισθεν.",
    "7": "καὶ τὸ ζῷον τὸ πρῶτον ὅμοιον λέοντι καὶ τὸ δεύτερον ζῷον ὅμοιον μόσχῳ καὶ τὸ τρίτον ζῷον ἔχων τὸ πρόσωπον ὡς ἀνθρώπου καὶ τὸ τέταρτον ζῷον ὅμοιον ἀετῷ πετομένῳ.",
    "8": "καὶ τὰ τέσσαρα ζῷα, ἓν καθ᾽ ἓν αὐτῶν ἔχων ἀνὰ πτέρυγας ἕξ, κυκλόθεν καὶ ἔσωθεν γέμουσιν ὀφθαλμῶν, καὶ ἀνάπαυσιν οὐκ ἔχουσιν ἡμέρας καὶ νυκτὸς λέγοντες,\nἍγιος ἅγιος ἅγιος\nκύριος ὁ θεὸς ὁ παντοκράτωρ,\nὁ ἦν καὶ ὁ ὢν καὶ ὁ ἐρχόμενος.",
    "9": "καὶ ὅταν δώσουσιν τὰ ζῷα δόξαν καὶ τιμὴν καὶ εὐχαριστίαν τῷ καθημένῳ ἐπὶ τῷ θρόνῳ τῷ ζῶντι εἰς τοὺς αἰῶνας τῶν αἰώνων,",
    "10": "πεσοῦνται οἱ εἴκοσιν τέσσαρες πρεσβύτεροι ἐνώπιον τοῦ καθημένου ἐπὶ τοῦ θρόνου καὶ προσκυνήσουσιν τῷ ζῶντι εἰς τοὺς αἰῶνας τῶν αἰώνων καὶ βαλοῦσιν τοὺς στεφάνους αὐτῶν ἐνώπιον τοῦ θρόνου λέγοντες,",
    "11": "Ἄξιος εἶ, ὁ κύριος καὶ ὁ θεὸς ἡμῶν,\nλαβεῖν τὴν δόξαν καὶ τὴν τιμὴν καὶ τὴν δύναμιν,\nὅτι σὺ ἔκτισας τὰ πάντα\nκαὶ διὰ τὸ θέλημά σου ἦσαν καὶ ἐκτίσθησαν."
};
    const paragraphEnds = [8,10,11];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A adoração celestial",
        "sourceTitle": "The Heavenly Worship"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[4] = unnumberedPassages;
})();
