/* UBS5 — Primeira Epístola aos Coríntios 5.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὅλως ἀκούεται ἐν ὑμῖν πορνεία, καὶ τοιαύτη πορνεία ἥτις οὐδὲ ἐν τοῖς ἔθνεσιν, ὥστε γυναῖκά τινα τοῦ πατρὸς ἔχειν.",
    "2": "καὶ ὑμεῖς πεφυσιωμένοι ἐστὲ καὶ οὐχὶ μᾶλλον ἐπενθήσατε, ἵνα ἀρθῇ ἐκ μέσου ὑμῶν ὁ τὸ ἔργον τοῦτο πράξας;",
    "3": "ἐγὼ μὲν γάρ, ἀπὼν τῷ σώματι παρὼν δὲ τῷ πνεύματι, ἤδη κέκρικα ὡς παρὼν τὸν οὕτως τοῦτο κατεργασάμενον·",
    "4": "ἐν τῷ ὀνόματι τοῦ κυρίου [ἡμῶν] Ἰησοῦ συναχθέντων ὑμῶν καὶ τοῦ ἐμοῦ πνεύματος σὺν τῇ δυνάμει τοῦ κυρίου ἡμῶν Ἰησοῦ,",
    "5": "παραδοῦναι τὸν τοιοῦτον τῷ Σατανᾷ εἰς ὄλεθρον τῆς σαρκός, ἵνα τὸ πνεῦμα σωθῇ ἐν τῇ ἡμέρᾳ τοῦ κυρίου.",
    "6": "Οὐ καλὸν τὸ καύχημα ὑμῶν. οὐκ οἴδατε ὅτι μικρὰ ζύμη ὅλον τὸ φύραμα ζυμοῖ;",
    "7": "ἐκκαθάρατε τὴν παλαιὰν ζύμην, ἵνα ἦτε νέον φύραμα, καθώς ἐστε ἄζυμοι· καὶ γὰρ τὸ πάσχα ἡμῶν ἐτύθη Χριστός.",
    "8": "ὥστε ἑορτάζωμεν μὴ ἐν ζύμῃ παλαιᾷ μηδὲ ἐν ζύμῃ κακίας καὶ πονηρίας ἀλλ᾽ ἐν ἀζύμοις εἰλικρινείας καὶ ἀληθείας.",
    "9": "Ἔγραψα ὑμῖν ἐν τῇ ἐπιστολῇ μὴ συναναμίγνυσθαι πόρνοις,",
    "10": "οὐ πάντως τοῖς πόρνοις τοῦ κόσμου τούτου ἢ τοῖς πλεονέκταις καὶ ἅρπαξιν ἢ εἰδωλολάτραις, ἐπεὶ ὠφείλετε ἄρα ἐκ τοῦ κόσμου ἐξελθεῖν.",
    "11": "νῦν δὲ ἔγραψα ὑμῖν μὴ συναναμίγνυσθαι ἐάν τις ἀδελφὸς ὀνομαζόμενος ᾖ πόρνος ἢ πλεονέκτης ἢ εἰδωλολάτρης ἢ λοίδορος ἢ μέθυσος ἢ ἅρπαξ, τῷ τοιούτῳ μηδὲ συνεσθίειν.",
    "12": "τί γάρ μοι τοὺς ἔξω κρίνειν; οὐχὶ τοὺς ἔσω ὑμεῖς κρίνετε;",
    "13": "τοὺς δὲ ἔξω ὁ θεὸς κρινεῖ. ἐξάρατε τὸν πονηρὸν ἐξ ὑμῶν αὐτῶν."
};
    const paragraphEnds = [8,13];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O juízo contra a imoralidade",
        "sourceTitle": "Judgment against Immorality"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][5] = unnumberedPassages;
})();
