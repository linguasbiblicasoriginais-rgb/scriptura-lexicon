/* UBS5 — Apocalipse de João, capítulo 12.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ σημεῖον μέγα ὤφθη ἐν τῷ οὐρανῷ, γυνὴ περιβεβλημένη τὸν ἥλιον, καὶ ἡ σελήνη ὑποκάτω τῶν ποδῶν αὐτῆς καὶ ἐπὶ τῆς κεφαλῆς αὐτῆς στέφανος ἀστέρων δώδεκα,",
    "2": "καὶ ἐν γαστρὶ ἔχουσα, καὶ κράζει ὠδίνουσα καὶ βασανιζομένη τεκεῖν.",
    "3": "καὶ ὤφθη ἄλλο σημεῖον ἐν τῷ οὐρανῷ, καὶ ἰδοὺ δράκων μέγας πυρρὸς ἔχων κεφαλὰς ἑπτὰ καὶ κέρατα δέκα καὶ ἐπὶ τὰς κεφαλὰς αὐτοῦ ἑπτὰ διαδήματα,",
    "4": "καὶ ἡ οὐρὰ αὐτοῦ σύρει τὸ τρίτον τῶν ἀστέρων τοῦ οὐρανοῦ καὶ ἔβαλεν αὐτοὺς εἰς τὴν γῆν. καὶ ὁ δράκων ἕστηκεν ἐνώπιον τῆς γυναικὸς τῆς μελλούσης τεκεῖν, ἵνα ὅταν τέκῃ τὸ τέκνον αὐτῆς καταφάγῃ.",
    "5": "καὶ ἔτεκεν υἱὸν ἄρσεν, ὃς μέλλει ποιμαίνειν πάντα τὰ ἔθνη ἐν ῥάβδῳ σιδηρᾷ. καὶ ἡρπάσθη τὸ τέκνον αὐτῆς πρὸς τὸν θεὸν καὶ πρὸς τὸν θρόνον αὐτοῦ.",
    "6": "καὶ ἡ γυνὴ ἔφυγεν εἰς τὴν ἔρημον, ὅπου ἔχει ἐκεῖ τόπον ἡτοιμασμένον ἀπὸ τοῦ θεοῦ, ἵνα ἐκεῖ τρέφωσιν αὐτὴν ἡμέρας χιλίας διακοσίας ἑξήκοντα.",
    "7": "Καὶ ἐγένετο πόλεμος ἐν τῷ οὐρανῷ, ὁ Μιχαὴλ καὶ οἱ ἄγγελοι αὐτοῦ τοῦ πολεμῆσαι μετὰ τοῦ δράκοντος. καὶ ὁ δράκων ἐπολέμησεν καὶ οἱ ἄγγελοι αὐτοῦ,",
    "8": "καὶ οὐκ ἴσχυσεν οὐδὲ τόπος εὑρέθη αὐτῶν ἔτι ἐν τῷ οὐρανῷ.",
    "9": "καὶ ἐβλήθη ὁ δράκων ὁ μέγας, ὁ ὄφις ὁ ἀρχαῖος, ὁ καλούμενος Διάβολος καὶ ὁ Σατανᾶς, ὁ πλανῶν τὴν οἰκουμένην ὅλην, ἐβλήθη εἰς τὴν γῆν, καὶ οἱ ἄγγελοι αὐτοῦ μετ᾽ αὐτοῦ ἐβλήθησαν.",
    "10": "καὶ ἤκουσα φωνὴν μεγάλην ἐν τῷ οὐρανῷ λέγουσαν,\nἌρτι ἐγένετο ἡ σωτηρία καὶ ἡ δύναμις\nκαὶ ἡ βασιλεία τοῦ θεοῦ ἡμῶν\nκαὶ ἡ ἐξουσία τοῦ Χριστοῦ αὐτοῦ,\nὅτι ἐβλήθη ὁ κατήγωρ τῶν ἀδελφῶν ἡμῶν,\nὁ κατηγορῶν αὐτοὺς ἐνώπιον τοῦ θεοῦ ἡμῶν ἡμέρας καὶ νυκτός.",
    "11": "καὶ αὐτοὶ ἐνίκησαν αὐτὸν διὰ τὸ αἷμα τοῦ ἀρνίου\nκαὶ διὰ τὸν λόγον τῆς μαρτυρίας αὐτῶν\nκαὶ οὐκ ἠγάπησαν τὴν ψυχὴν αὐτῶν ἄχρι θανάτου.",
    "12": "διὰ τοῦτο εὐφραίνεσθε, [οἱ] οὐρανοὶ\nκαὶ οἱ ἐν αὐτοῖς σκηνοῦντες.\nοὐαὶ τὴν γῆν καὶ τὴν θάλασσαν,\nὅτι κατέβη ὁ διάβολος πρὸς ὑμᾶς\nἔχων θυμὸν μέγαν,\nεἰδὼς ὅτι ὀλίγον καιρὸν ἔχει.",
    "13": "Καὶ ὅτε εἶδεν ὁ δράκων ὅτι ἐβλήθη εἰς τὴν γῆν, ἐδίωξεν τὴν γυναῖκα ἥτις ἔτεκεν τὸν ἄρσενα.",
    "14": "καὶ ἐδόθησαν τῇ γυναικὶ αἱ δύο πτέρυγες τοῦ ἀετοῦ τοῦ μεγάλου, ἵνα πέτηται εἰς τὴν ἔρημον εἰς τὸν τόπον αὐτῆς, ὅπου τρέφεται ἐκεῖ καιρὸν καὶ καιροὺς καὶ ἥμισυ καιροῦ ἀπὸ προσώπου τοῦ ὄφεως.",
    "15": "καὶ ἔβαλεν ὁ ὄφις ἐκ τοῦ στόματος αὐτοῦ ὀπίσω τῆς γυναικὸς ὕδωρ ὡς ποταμόν, ἵνα αὐτὴν ποταμοφόρητον ποιήσῃ.",
    "16": "καὶ ἐβοήθησεν ἡ γῆ τῇ γυναικὶ καὶ ἤνοιξεν ἡ γῆ τὸ στόμα αὐτῆς καὶ κατέπιεν τὸν ποταμὸν ὃν ἔβαλεν ὁ δράκων ἐκ τοῦ στόματος αὐτοῦ.",
    "17": "καὶ ὠργίσθη ὁ δράκων ἐπὶ τῇ γυναικὶ καὶ ἀπῆλθεν ποιῆσαι πόλεμον μετὰ τῶν λοιπῶν τοῦ σπέρματος αὐτῆς τῶν τηρούντων τὰς ἐντολὰς τοῦ θεοῦ καὶ ἐχόντων τὴν μαρτυρίαν Ἰησοῦ.",
    "18": "καὶ ἐστάθη ἐπὶ τὴν ἄμμον τῆς θαλάσσης."
};
    const paragraphEnds = [6,10,11,12,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A mulher e o dragão",
        "sourceTitle": "The Woman and the Dragon"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[12] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[12] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[12] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[12] = unnumberedPassages;
})();
