/* UBS5 — Segunda Epístola de João, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὁ πρεσβύτερος ἐκλεκτῇ κυρίᾳ καὶ τοῖς τέκνοις αὐτῆς, οὓς ἐγὼ ἀγαπῶ ἐν ἀληθείᾳ, καὶ οὐκ ἐγὼ μόνος ἀλλὰ καὶ πάντες οἱ ἐγνωκότες τὴν ἀλήθειαν,",
    "2": "διὰ τὴν ἀλήθειαν τὴν μένουσαν ἐν ἡμῖν καὶ μεθ᾽ ἡμῶν ἔσται εἰς τὸν αἰῶνα.",
    "3": "ἔσται μεθ᾽ ἡμῶν χάρις ἔλεος εἰρήνη παρὰ θεοῦ πατρὸς καὶ παρὰ Ἰησοῦ Χριστοῦ τοῦ υἱοῦ τοῦ πατρὸς ἐν ἀληθείᾳ καὶ ἀγάπῃ.",
    "4": "Ἐχάρην λίαν ὅτι εὕρηκα ἐκ τῶν τέκνων σου περιπατοῦντας ἐν ἀληθείᾳ, καθὼς ἐντολὴν ἐλάβομεν παρὰ τοῦ πατρός.",
    "5": "καὶ νῦν ἐρωτῶ σε, κυρία, οὐχ ὡς ἐντολὴν γράφων σοι καινὴν ἀλλ᾽ ἣν εἴχομεν ἀπ᾽ ἀρχῆς, ἵνα ἀγαπῶμεν ἀλλήλους.",
    "6": "καὶ αὕτη ἐστὶν ἡ ἀγάπη, ἵνα περιπατῶμεν κατὰ τὰς ἐντολὰς αὐτοῦ· αὕτη ἡ ἐντολή ἐστιν, καθὼς ἠκούσατε ἀπ᾽ ἀρχῆς, ἵνα ἐν αὐτῇ περιπατῆτε.",
    "7": "ὅτι πολλοὶ πλάνοι ἐξῆλθον εἰς τὸν κόσμον, οἱ μὴ ὁμολογοῦντες Ἰησοῦν Χριστὸν ἐρχόμενον ἐν σαρκί· οὗτός ἐστιν ὁ πλάνος καὶ ὁ ἀντίχριστος.",
    "8": "βλέπετε ἑαυτούς, ἵνα μὴ ἀπολέσητε ἃ εἰργασάμεθα ἀλλὰ μισθὸν πλήρη ἀπολάβητε.",
    "9": "πᾶς ὁ προάγων καὶ μὴ μένων ἐν τῇ διδαχῇ τοῦ Χριστοῦ θεὸν οὐκ ἔχει· ὁ μένων ἐν τῇ διδαχῇ, οὗτος καὶ τὸν πατέρα καὶ τὸν υἱὸν ἔχει.",
    "10": "εἴ τις ἔρχεται πρὸς ὑμᾶς καὶ ταύτην τὴν διδαχὴν οὐ φέρει, μὴ λαμβάνετε αὐτὸν εἰς οἰκίαν καὶ χαίρειν αὐτῷ μὴ λέγετε·",
    "11": "ὁ λέγων γὰρ αὐτῷ χαίρειν κοινωνεῖ τοῖς ἔργοις αὐτοῦ τοῖς πονηροῖς.",
    "12": "Πολλὰ ἔχων ὑμῖν γράφειν οὐκ ἐβουλήθην διὰ χάρτου καὶ μέλανος, ἀλλ᾽ ἐλπίζω γενέσθαι πρὸς ὑμᾶς καὶ στόμα πρὸς στόμα λαλῆσαι, ἵνα ἡ χαρὰ ἡμῶν ᾖ πεπληρωμένη.",
    "13": "Ἀσπάζεταί σε τὰ τέκνα τῆς ἀδελφῆς σου τῆς ἐκλεκτῆς."
};
    const paragraphEnds = [3,11,13];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação",
        "sourceTitle": "Salutation"
    },
    {
        "beforeVerse": 4,
        "title": "Verdade e amor",
        "sourceTitle": "Truth and Love"
    },
    {
        "beforeVerse": 12,
        "title": "Saudações finais",
        "sourceTitle": "Final Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2JN"] = window.ScripturaScriptureTexts.UBS5["2JN"] || {};
    window.ScripturaScriptureTexts.UBS5["2JN"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2JN"] = window.ScripturaScriptureParagraphBreaks.UBS5["2JN"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2JN"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2JN"] = window.ScripturaScriptureHeadings.UBS5["2JN"] || {};
    window.ScripturaScriptureHeadings.UBS5["2JN"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2JN"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2JN"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2JN"][1] = unnumberedPassages;
})();
