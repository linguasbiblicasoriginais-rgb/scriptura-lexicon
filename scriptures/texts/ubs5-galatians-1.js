/* UBS5 — Epístola de Paulo aos Gálatas, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente com exemplar impresso.
 * Texto grego e paratextos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος ἀπόστολος οὐκ ἀπ᾽ ἀνθρώπων οὐδὲ δι᾽ ἀνθρώπου ἀλλὰ διὰ Ἰησοῦ Χριστοῦ καὶ θεοῦ πατρὸς τοῦ ἐγείραντος αὐτὸν ἐκ νεκρῶν,",
    "2": "καὶ οἱ σὺν ἐμοὶ πάντες ἀδελφοὶ ταῖς ἐκκλησίαις τῆς Γαλατίας,",
    "3": "χάρις ὑμῖν καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ",
    "4": "τοῦ δόντος ἑαυτὸν ὑπὲρ τῶν ἁμαρτιῶν ἡμῶν, ὅπως ἐξέληται ἡμᾶς ἐκ τοῦ αἰῶνος τοῦ ἐνεστῶτος πονηροῦ κατὰ τὸ θέλημα τοῦ θεοῦ καὶ πατρὸς ἡμῶν,",
    "5": "ᾧ ἡ δόξα εἰς τοὺς αἰῶνας τῶν αἰώνων, ἀμήν.",
    "6": "Θαυμάζω ὅτι οὕτως ταχέως μετατίθεσθε ἀπὸ τοῦ καλέσαντος ὑμᾶς ἐν χάριτι [Χριστοῦ] εἰς ἕτερον εὐαγγέλιον,",
    "7": "ὃ οὐκ ἔστιν ἄλλο, εἰ μή τινές εἰσιν οἱ ταράσσοντες ὑμᾶς καὶ θέλοντες μεταστρέψαι τὸ εὐαγγέλιον τοῦ Χριστοῦ.",
    "8": "ἀλλὰ καὶ ἐὰν ἡμεῖς ἢ ἄγγελος ἐξ οὐρανοῦ εὐαγγελίζηται [ὑμῖν] παρ᾽ ὃ εὐηγγελισάμεθα ὑμῖν, ἀνάθεμα ἔστω.",
    "9": "ὡς προειρήκαμεν καὶ ἄρτι πάλιν λέγω, εἴ τις ὑμᾶς εὐαγγελίζεται παρ᾽ ὃ παρελάβετε, ἀνάθεμα ἔστω.",
    "10": "Ἄρτι γὰρ ἀνθρώπους πείθω ἢ τὸν θεόν; ἢ ζητῶ ἀνθρώποις ἀρέσκειν; εἰ ἔτι ἀνθρώποις ἤρεσκον, Χριστοῦ δοῦλος οὐκ ἂν ἤμην.",
    "11": "Γνωρίζω γὰρ ὑμῖν, ἀδελφοί, τὸ εὐαγγέλιον τὸ εὐαγγελισθὲν ὑπ᾽ ἐμοῦ ὅτι οὐκ ἔστιν κατὰ ἄνθρωπον·",
    "12": "οὐδὲ γὰρ ἐγὼ παρὰ ἀνθρώπου παρέλαβον αὐτὸ οὔτε ἐδιδάχθην ἀλλὰ δι᾽ ἀποκαλύψεως Ἰησοῦ Χριστοῦ.",
    "13": "Ἠκούσατε γὰρ τὴν ἐμὴν ἀναστροφήν ποτε ἐν τῷ Ἰουδαϊσμῷ, ὅτι καθ᾽ ὑπερβολὴν ἐδίωκον τὴν ἐκκλησίαν τοῦ θεοῦ καὶ ἐπόρθουν αὐτήν,",
    "14": "καὶ προέκοπτον ἐν τῷ Ἰουδαϊσμῷ ὑπὲρ πολλοὺς συνηλικιώτας ἐν τῷ γένει μου, περισσοτέρως ζηλωτὴς ὑπάρχων τῶν πατρικῶν μου παραδόσεων.",
    "15": "ὅτε δὲ εὐδόκησεν [ὁ θεὸς] ὁ ἀφορίσας με ἐκ κοιλίας μητρός μου καὶ καλέσας διὰ τῆς χάριτος αὐτοῦ",
    "16": "ἀποκαλύψαι τὸν υἱὸν αὐτοῦ ἐν ἐμοί, ἵνα εὐαγγελίζωμαι αὐτὸν ἐν τοῖς ἔθνεσιν, εὐθέως οὐ προσανεθέμην σαρκὶ καὶ αἵματι",
    "17": "οὐδὲ ἀνῆλθον εἰς Ἱεροσόλυμα πρὸς τοὺς πρὸ ἐμοῦ ἀποστόλους, ἀλλ᾽ ἀπῆλθον εἰς Ἀραβίαν καὶ πάλιν ὑπέστρεψα εἰς Δαμασκόν.",
    "18": "Ἔπειτα μετὰ ἔτη τρία ἀνῆλθον εἰς Ἱεροσόλυμα ἱστορῆσαι Κηφᾶν καὶ ἐπέμεινα πρὸς αὐτὸν ἡμέρας δεκαπέντε,",
    "19": "ἕτερον δὲ τῶν ἀποστόλων οὐκ εἶδον εἰ μὴ Ἰάκωβον τὸν ἀδελφὸν τοῦ κυρίου.",
    "20": "ἃ δὲ γράφω ὑμῖν, ἰδοὺ ἐνώπιον τοῦ θεοῦ ὅτι οὐ ψεύδομαι.",
    "21": "ἔπειτα ἦλθον εἰς τὰ κλίματα τῆς Συρίας καὶ τῆς Κιλικίας·",
    "22": "ἤμην δὲ ἀγνοούμενος τῷ προσώπῳ ταῖς ἐκκλησίαις τῆς Ἰουδαίας ταῖς ἐν Χριστῷ.",
    "23": "μόνον δὲ ἀκούοντες ἦσαν ὅτι Ὁ διώκων ἡμᾶς ποτε νῦν εὐαγγελίζεται τὴν πίστιν ἥν ποτε ἐπόρθει,",
    "24": "καὶ ἐδόξαζον ἐν ἐμοὶ τὸν θεόν."
};
    const paragraphEnds = [5,9,10,12,17,24];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 6,
        "title": "Não há outro evangelho",
        "sourceTitle": "There is No Other Gospel"
    },
    {
        "beforeVerse": 11,
        "title": "Como Paulo se tornou apóstolo",
        "sourceTitle": "How Paul Became an Apostle"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.GAL = window.ScripturaScriptureTexts.UBS5.GAL || {};
    window.ScripturaScriptureTexts.UBS5.GAL[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL = window.ScripturaScriptureParagraphBreaks.UBS5.GAL || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.GAL = window.ScripturaScriptureHeadings.UBS5.GAL || {};
    window.ScripturaScriptureHeadings.UBS5.GAL[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL = window.ScripturaScriptureUnnumberedPassages.UBS5.GAL || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL[1] = unnumberedPassages;
})();
