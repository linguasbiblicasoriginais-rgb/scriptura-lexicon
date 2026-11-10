/* UBS5 — Primeira Epístola aos Coríntios 2.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Κἀγὼ ἐλθὼν πρὸς ὑμᾶς, ἀδελφοί, ἦλθον οὐ καθ᾽ ὑπεροχὴν λόγου ἢ σοφίας καταγγέλλων ὑμῖν τὸ μυστήριον τοῦ θεοῦ.",
    "2": "οὐ γὰρ ἔκρινά τι εἰδέναι ἐν ὑμῖν εἰ μὴ Ἰησοῦν Χριστὸν καὶ τοῦτον ἐσταυρωμένον.",
    "3": "κἀγὼ ἐν ἀσθενείᾳ καὶ ἐν φόβῳ καὶ ἐν τρόμῳ πολλῷ ἐγενόμην πρὸς ὑμᾶς,",
    "4": "καὶ ὁ λόγος μου καὶ τὸ κήρυγμά μου οὐκ ἐν πειθοῖ[ς] σοφίας [λόγοις] ἀλλ᾽ ἐν ἀποδείξει πνεύματος καὶ δυνάμεως,",
    "5": "ἵνα ἡ πίστις ὑμῶν μὴ ᾖ ἐν σοφίᾳ ἀνθρώπων ἀλλ᾽ ἐν δυνάμει θεοῦ.",
    "6": "Σοφίαν δὲ λαλοῦμεν ἐν τοῖς τελείοις, σοφίαν δὲ οὐ τοῦ αἰῶνος τούτου οὐδὲ τῶν ἀρχόντων τοῦ αἰῶνος τούτου τῶν καταργουμένων·",
    "7": "ἀλλὰ λαλοῦμεν θεοῦ σοφίαν ἐν μυστηρίῳ τὴν ἀποκεκρυμμένην, ἣν προώρισεν ὁ θεὸς πρὸ τῶν αἰώνων εἰς δόξαν ἡμῶν,",
    "8": "ἣν οὐδεὶς τῶν ἀρχόντων τοῦ αἰῶνος τούτου ἔγνωκεν· εἰ γὰρ ἔγνωσαν, οὐκ ἂν τὸν κύριον τῆς δόξης ἐσταύρωσαν.",
    "9": "ἀλλὰ καθὼς γέγραπται,\nἋ ὀφθαλμὸς οὐκ εἶδεν καὶ οὖς οὐκ ἤκουσεν\nκαὶ ἐπὶ καρδίαν ἀνθρώπου οὐκ ἀνέβη,\nἃ ἡτοίμασεν ὁ θεὸς τοῖς ἀγαπῶσιν αὐτόν.",
    "10": "ἡμῖν δὲ ἀπεκάλυψεν ὁ θεὸς διὰ τοῦ πνεύματος· τὸ γὰρ πνεῦμα πάντα ἐραυνᾷ, καὶ τὰ βάθη τοῦ θεοῦ.",
    "11": "τίς γὰρ οἶδεν ἀνθρώπων τὰ τοῦ ἀνθρώπου εἰ μὴ τὸ πνεῦμα τοῦ ἀνθρώπου τὸ ἐν αὐτῷ; οὕτως καὶ τὰ τοῦ θεοῦ οὐδεὶς ἔγνωκεν εἰ μὴ τὸ πνεῦμα τοῦ θεοῦ.",
    "12": "ἡμεῖς δὲ οὐ τὸ πνεῦμα τοῦ κόσμου ἐλάβομεν ἀλλὰ τὸ πνεῦμα τὸ ἐκ τοῦ θεοῦ, ἵνα εἰδῶμεν τὰ ὑπὸ τοῦ θεοῦ χαρισθέντα ἡμῖν·",
    "13": "ἃ καὶ λαλοῦμεν οὐκ ἐν διδακτοῖς ἀνθρωπίνης σοφίας λόγοις ἀλλ᾽ ἐν διδακτοῖς πνεύματος, πνευματικοῖς πνευματικὰ συγκρίνοντες.",
    "14": "ψυχικὸς δὲ ἄνθρωπος οὐ δέχεται τὰ τοῦ πνεύματος τοῦ θεοῦ· μωρία γὰρ αὐτῷ ἐστιν καὶ οὐ δύναται γνῶναι, ὅτι πνευματικῶς ἀνακρίνεται.",
    "15": "ὁ δὲ πνευματικὸς ἀνακρίνει [τὰ] πάντα, αὐτὸς δὲ ὑπ᾽ οὐδενὸς ἀνακρίνεται.",
    "16": "τίς γὰρ ἔγνω νοῦν κυρίου,\nὃς συμβιβάσει αὐτόν;\nἡμεῖς δὲ νοῦν Χριστοῦ ἔχομεν."
};
    const paragraphEnds = [5,9,15,16];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A proclamação de Cristo crucificado",
        "sourceTitle": "Proclaiming Christ Crucified"
    },
    {
        "beforeVerse": 6,
        "title": "A revelação pelo Espírito de Deus",
        "sourceTitle": "The Revelation by God’s Spirit"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][2] = unnumberedPassages;
})();
