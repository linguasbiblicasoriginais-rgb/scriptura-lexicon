/* UBS5 — Apocalipse de João, capítulo 10.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ εἶδον ἄλλον ἄγγελον ἰσχυρὸν καταβαίνοντα ἐκ τοῦ οὐρανοῦ περιβεβλημένον νεφέλην, καὶ ἡ ἶρις ἐπὶ τῆς κεφαλῆς αὐτοῦ καὶ τὸ πρόσωπον αὐτοῦ ὡς ὁ ἥλιος καὶ οἱ πόδες αὐτοῦ ὡς στῦλοι πυρός,",
    "2": "καὶ ἔχων ἐν τῇ χειρὶ αὐτοῦ βιβλαρίδιον ἠνεῳγμένον. καὶ ἔθηκεν τὸν πόδα αὐτοῦ τὸν δεξιὸν ἐπὶ τῆς θαλάσσης, τὸν δὲ εὐώνυμον ἐπὶ τῆς γῆς,",
    "3": "καὶ ἔκραξεν φωνῇ μεγάλῃ ὥσπερ λέων μυκᾶται. καὶ ὅτε ἔκραξεν, ἐλάλησαν αἱ ἑπτὰ βρονταὶ τὰς ἑαυτῶν φωνάς.",
    "4": "καὶ ὅτε ἐλάλησαν αἱ ἑπτὰ βρονταί, ἤμελλον γράφειν, καὶ ἤκουσα φωνὴν ἐκ τοῦ οὐρανοῦ λέγουσαν, Σφράγισον ἃ ἐλάλησαν αἱ ἑπτὰ βρονταί, καὶ μὴ αὐτὰ γράψῃς.",
    "5": "Καὶ ὁ ἄγγελος, ὃν εἶδον ἑστῶτα ἐπὶ τῆς θαλάσσης καὶ ἐπὶ τῆς γῆς,\nἦρεν τὴν χεῖρα αὐτοῦ τὴν δεξιὰν εἰς τὸν οὐρανὸν",
    "6": "καὶ ὤμοσεν ἐν τῷ ζῶντι εἰς τοὺς αἰῶνας τῶν αἰώνων,\nὃς ἔκτισεν τὸν οὐρανὸν καὶ τὰ ἐν αὐτῷ καὶ τὴν γῆν καὶ τὰ ἐν αὐτῇ καὶ τὴν θάλασσαν καὶ τὰ ἐν αὐτῇ, ὅτι χρόνος οὐκέτι ἔσται,",
    "7": "ἀλλ᾽ ἐν ταῖς ἡμέραις τῆς φωνῆς τοῦ ἑβδόμου ἀγγέλου, ὅταν μέλλῃ σαλπίζειν, καὶ ἐτελέσθη τὸ μυστήριον τοῦ θεοῦ, ὡς εὐηγγέλισεν τοὺς ἑαυτοῦ δούλους τοὺς προφήτας.",
    "8": "Καὶ ἡ φωνὴ ἣν ἤκουσα ἐκ τοῦ οὐρανοῦ πάλιν λαλοῦσαν μετ᾽ ἐμοῦ καὶ λέγουσαν, Ὕπαγε λάβε τὸ βιβλίον τὸ ἠνεῳγμένον ἐν τῇ χειρὶ τοῦ ἀγγέλου τοῦ ἑστῶτος ἐπὶ τῆς θαλάσσης καὶ ἐπὶ τῆς γῆς.",
    "9": "καὶ ἀπῆλθα πρὸς τὸν ἄγγελον λέγων αὐτῷ δοῦναί μοι τὸ βιβλαρίδιον. καὶ λέγει μοι, Λάβε καὶ κατάφαγε αὐτό, καὶ πικρανεῖ σου τὴν κοιλίαν, ἀλλ᾽ ἐν τῷ στόματί σου ἔσται γλυκὺ ὡς μέλι.",
    "10": "καὶ ἔλαβον τὸ βιβλαρίδιον ἐκ τῆς χειρὸς τοῦ ἀγγέλου καὶ κατέφαγον αὐτό, καὶ ἦν ἐν τῷ στόματί μου ὡς μέλι γλυκὺ καὶ ὅτε ἔφαγον αὐτό, ἐπικράνθη ἡ κοιλία μου.",
    "11": "καὶ λέγουσίν μοι, Δεῖ σε πάλιν προφητεῦσαι ἐπὶ λαοῖς καὶ ἔθνεσιν καὶ γλώσσαις καὶ βασιλεῦσιν πολλοῖς."
};
    const paragraphEnds = [5,7,11];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O anjo e o livrinho",
        "sourceTitle": "The Angel and the Little Scroll"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[10] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[10] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[10] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[10] = unnumberedPassages;
})();
