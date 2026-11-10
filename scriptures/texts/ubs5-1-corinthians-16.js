/* UBS5 — Primeira Epístola aos Coríntios 16.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Περὶ δὲ τῆς λογείας τῆς εἰς τοὺς ἁγίους ὥσπερ διέταξα ταῖς ἐκκλησίαις τῆς Γαλατίας, οὕτως καὶ ὑμεῖς ποιήσατε.",
    "2": "κατὰ μίαν σαββάτου ἕκαστος ὑμῶν παρ᾽ ἑαυτῷ τιθέτω θησαυρίζων ὅ τι ἐὰν εὐοδῶται, ἵνα μὴ ὅταν ἔλθω τότε λογεῖαι γίνωνται.",
    "3": "ὅταν δὲ παραγένωμαι, οὓς ἐὰν δοκιμάσητε, δι᾽ ἐπιστολῶν τούτους πέμψω ἀπενεγκεῖν τὴν χάριν ὑμῶν εἰς Ἰερουσαλήμ·",
    "4": "ἐὰν δὲ ἄξιον ᾖ τοῦ κἀμὲ πορεύεσθαι, σὺν ἐμοὶ πορεύσονται.",
    "5": "Ἐλεύσομαι δὲ πρὸς ὑμᾶς ὅταν Μακεδονίαν διέλθω· Μακεδονίαν γὰρ διέρχομαι,",
    "6": "πρὸς ὑμᾶς δὲ τυχὸν παραμενῶ ἢ καὶ παραχειμάσω, ἵνα ὑμεῖς με προπέμψητε οὗ ἐὰν πορεύωμαι.",
    "7": "οὐ θέλω γὰρ ὑμᾶς ἄρτι ἐν παρόδῳ ἰδεῖν, ἐλπίζω γὰρ χρόνον τινὰ ἐπιμεῖναι πρὸς ὑμᾶς ἐὰν ὁ κύριος ἐπιτρέψῃ.",
    "8": "ἐπιμενῶ δὲ ἐν Ἐφέσῳ ἕως τῆς πεντηκοστῆς·",
    "9": "θύρα γάρ μοι ἀνέῳγεν μεγάλη καὶ ἐνεργής, καὶ ἀντικείμενοι πολλοί.",
    "10": "Ἐὰν δὲ ἔλθῃ Τιμόθεος, βλέπετε, ἵνα ἀφόβως γένηται πρὸς ὑμᾶς· τὸ γὰρ ἔργον κυρίου ἐργάζεται ὡς κἀγώ·",
    "11": "μή τις οὖν αὐτὸν ἐξουθενήσῃ. προπέμψατε δὲ αὐτὸν ἐν εἰρήνῃ, ἵνα ἔλθῃ πρός με· ἐκδέχομαι γὰρ αὐτὸν μετὰ τῶν ἀδελφῶν.",
    "12": "Περὶ δὲ Ἀπολλῶ τοῦ ἀδελφοῦ, πολλὰ παρεκάλεσα αὐτόν, ἵνα ἔλθῃ πρὸς ὑμᾶς μετὰ τῶν ἀδελφῶν· καὶ πάντως οὐκ ἦν θέλημα ἵνα νῦν ἔλθῃ· ἐλεύσεται δὲ ὅταν εὐκαιρήσῃ.",
    "13": "Γρηγορεῖτε, στήκετε ἐν τῇ πίστει, ἀνδρίζεσθε, κραταιοῦσθε.",
    "14": "πάντα ὑμῶν ἐν ἀγάπῃ γινέσθω.",
    "15": "Παρακαλῶ δὲ ὑμᾶς, ἀδελφοί· οἴδατε τὴν οἰκίαν Στεφανᾶ, ὅτι ἐστὶν ἀπαρχὴ τῆς Ἀχαΐας καὶ εἰς διακονίαν τοῖς ἁγίοις ἔταξαν ἑαυτούς·",
    "16": "ἵνα καὶ ὑμεῖς ὑποτάσσησθε τοῖς τοιούτοις καὶ παντὶ τῷ συνεργοῦντι καὶ κοπιῶντι.",
    "17": "χαίρω δὲ ἐπὶ τῇ παρουσίᾳ Στεφανᾶ καὶ Φορτουνάτου καὶ Ἀχαϊκοῦ, ὅτι τὸ ὑμέτερον ὑστέρημα οὗτοι ἀνεπλήρωσαν·",
    "18": "ἀνέπαυσαν γὰρ τὸ ἐμὸν πνεῦμα καὶ τὸ ὑμῶν. ἐπιγινώσκετε οὖν τοὺς τοιούτους.",
    "19": "Ἀσπάζονται ὑμᾶς αἱ ἐκκλησίαι τῆς Ἀσίας. ἀσπάζεται ὑμᾶς ἐν κυρίῳ πολλὰ Ἀκύλας καὶ Πρίσκα σὺν τῇ κατ᾽ οἶκον αὐτῶν ἐκκλησίᾳ.",
    "20": "ἀσπάζονται ὑμᾶς οἱ ἀδελφοὶ πάντες. Ἀσπάσασθε ἀλλήλους ἐν φιλήματι ἁγίῳ.",
    "21": "Ὁ ἀσπασμὸς τῇ ἐμῇ χειρὶ Παύλου.",
    "22": "εἴ τις οὐ φιλεῖ τὸν κύριον, ἤτω ἀνάθεμα. Μαρανα θα.",
    "23": "ἡ χάρις τοῦ κυρίου Ἰησοῦ μεθ᾽ ὑμῶν.",
    "24": "ἡ ἀγάπη μου μετὰ πάντων ὑμῶν ἐν Χριστῷ Ἰησοῦ."
};
    const paragraphEnds = [4,9,11,12,14,18,20,24];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A coleta para os santos",
        "sourceTitle": "The Contribution for the Saints"
    },
    {
        "beforeVerse": 5,
        "title": "Planos de viagem",
        "sourceTitle": "Plans for Travel"
    },
    {
        "beforeVerse": 13,
        "title": "Exortações finais e saudações",
        "sourceTitle": "Final Request and Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][16] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][16] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][16] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][16] = unnumberedPassages;
})();
