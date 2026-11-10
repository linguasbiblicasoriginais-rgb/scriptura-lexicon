/* UBS5 — Apocalipse de João, capítulo 8.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ὅταν ἤνοιξεν τὴν σφραγῖδα τὴν ἑβδόμην, ἐγένετο σιγὴ ἐν τῷ οὐρανῷ ὡς ἡμιώριον.",
    "2": "καὶ εἶδον τοὺς ἑπτὰ ἀγγέλους οἳ ἐνώπιον τοῦ θεοῦ ἑστήκασιν, καὶ ἐδόθησαν αὐτοῖς ἑπτὰ σάλπιγγες.",
    "3": "Καὶ ἄλλος ἄγγελος ἦλθεν καὶ ἐστάθη ἐπὶ τοῦ θυσιαστηρίου ἔχων λιβανωτὸν χρυσοῦν, καὶ ἐδόθη αὐτῷ θυμιάματα πολλά, ἵνα δώσει ταῖς προσευχαῖς τῶν ἁγίων πάντων ἐπὶ τὸ θυσιαστήριον τὸ χρυσοῦν τὸ ἐνώπιον τοῦ θρόνου.",
    "4": "καὶ ἀνέβη ὁ καπνὸς τῶν θυμιαμάτων ταῖς προσευχαῖς τῶν ἁγίων ἐκ χειρὸς τοῦ ἀγγέλου ἐνώπιον τοῦ θεοῦ.",
    "5": "καὶ εἴληφεν ὁ ἄγγελος τὸν λιβανωτὸν καὶ ἐγέμισεν αὐτὸν ἐκ τοῦ πυρὸς τοῦ θυσιαστηρίου καὶ ἔβαλεν εἰς τὴν γῆν, καὶ ἐγένοντο βρονταὶ καὶ φωναὶ καὶ ἀστραπαὶ καὶ σεισμός.",
    "6": "Καὶ οἱ ἑπτὰ ἄγγελοι οἱ ἔχοντες τὰς ἑπτὰ σάλπιγγας ἡτοίμασαν αὐτοὺς ἵνα σαλπίσωσιν.",
    "7": "Καὶ ὁ πρῶτος ἐσάλπισεν· καὶ ἐγένετο χάλαζα καὶ πῦρ μεμιγμένα ἐν αἵματι καὶ ἐβλήθη εἰς τὴν γῆν, καὶ τὸ τρίτον τῆς γῆς κατεκάη καὶ τὸ τρίτον τῶν δένδρων κατεκάη καὶ πᾶς χόρτος χλωρὸς κατεκάη.",
    "8": "Καὶ ὁ δεύτερος ἄγγελος ἐσάλπισεν· καὶ ὡς ὄρος μέγα πυρὶ καιόμενον ἐβλήθη εἰς τὴν θάλασσαν, καὶ ἐγένετο τὸ τρίτον τῆς θαλάσσης αἷμα",
    "9": "καὶ ἀπέθανεν τὸ τρίτον τῶν κτισμάτων τῶν ἐν τῇ θαλάσσῃ τὰ ἔχοντα ψυχὰς καὶ τὸ τρίτον τῶν πλοίων διεφθάρησαν.",
    "10": "Καὶ ὁ τρίτος ἄγγελος ἐσάλπισεν· καὶ ἔπεσεν ἐκ τοῦ οὐρανοῦ ἀστὴρ μέγας καιόμενος ὡς λαμπὰς καὶ ἔπεσεν ἐπὶ τὸ τρίτον τῶν ποταμῶν καὶ ἐπὶ τὰς πηγὰς τῶν ὑδάτων,",
    "11": "καὶ τὸ ὄνομα τοῦ ἀστέρος λέγεται ὁ Ἄψινθος, καὶ ἐγένετο τὸ τρίτον τῶν ὑδάτων εἰς ἄψινθον καὶ πολλοὶ τῶν ἀνθρώπων ἀπέθανον ἐκ τῶν ὑδάτων ὅτι ἐπικράνθησαν.",
    "12": "Καὶ ὁ τέταρτος ἄγγελος ἐσάλπισεν· καὶ ἐπλήγη τὸ τρίτον τοῦ ἡλίου καὶ τὸ τρίτον τῆς σελήνης καὶ τὸ τρίτον τῶν ἀστέρων, ἵνα σκοτισθῇ τὸ τρίτον αὐτῶν καὶ ἡ ἡμέρα μὴ φάνῃ τὸ τρίτον αὐτῆς καὶ ἡ νὺξ ὁμοίως.",
    "13": "Καὶ εἶδον, καὶ ἤκουσα ἑνὸς ἀετοῦ πετομένου ἐν μεσουρανήματι λέγοντος φωνῇ μεγάλῃ, Οὐαὶ οὐαὶ οὐαὶ τοὺς κατοικοῦντας ἐπὶ τῆς γῆς ἐκ τῶν λοιπῶν φωνῶν τῆς σάλπιγγος τῶν τριῶν ἀγγέλων τῶν μελλόντων σαλπίζειν."
};
    const paragraphEnds = [2,5,6,7,9,11,12,13];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O sétimo selo e o incensário de ouro",
        "sourceTitle": "The Seventh Seal and the Golden Censer"
    },
    {
        "beforeVerse": 6,
        "title": "As trombetas",
        "sourceTitle": "The Trumpets"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[8] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[8] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[8] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[8] = unnumberedPassages;
})();
