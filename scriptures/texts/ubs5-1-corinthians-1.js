/* UBS5 — Primeira Epístola aos Coríntios 1.
 * Transcrição grega fornecida pelo mantenedor em 09/11/2026.
 * Edição UBS5 por identificação do projeto; sem cotejo independente com exemplar impresso.
 * Versículos, títulos e remissões editoriais são conservados separadamente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παῦλος κλητὸς ἀπόστολος Χριστοῦ Ἰησοῦ διὰ θελήματος θεοῦ καὶ Σωσθένης ὁ ἀδελφὸς",
    "2": "τῇ ἐκκλησίᾳ τοῦ θεοῦ τῇ οὔσῃ ἐν Κορίνθῳ, ἡγιασμένοις ἐν Χριστῷ Ἰησοῦ, κλητοῖς ἁγίοις, σὺν πᾶσιν τοῖς ἐπικαλουμένοις τὸ ὄνομα τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ ἐν παντὶ τόπῳ, αὐτῶν καὶ ἡμῶν·",
    "3": "χάρις ὑμῖν καὶ εἰρήνη ἀπὸ θεοῦ πατρὸς ἡμῶν καὶ κυρίου Ἰησοῦ Χριστοῦ.",
    "4": "Εὐχαριστῶ τῷ θεῷ μου πάντοτε περὶ ὑμῶν ἐπὶ τῇ χάριτι τοῦ θεοῦ τῇ δοθείσῃ ὑμῖν ἐν Χριστῷ Ἰησοῦ,",
    "5": "ὅτι ἐν παντὶ ἐπλουτίσθητε ἐν αὐτῷ, ἐν παντὶ λόγῳ καὶ πάσῃ γνώσει,",
    "6": "καθὼς τὸ μαρτύριον τοῦ Χριστοῦ ἐβεβαιώθη ἐν ὑμῖν,",
    "7": "ὥστε ὑμᾶς μὴ ὑστερεῖσθαι ἐν μηδενὶ χαρίσματι ἀπεκδεχομένους τὴν ἀποκάλυψιν τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ·",
    "8": "ὃς καὶ βεβαιώσει ὑμᾶς ἕως τέλους ἀνεγκλήτους ἐν τῇ ἡμέρᾳ τοῦ κυρίου ἡμῶν Ἰησοῦ [Χριστοῦ].",
    "9": "πιστὸς ὁ θεός, δι᾽ οὗ ἐκλήθητε εἰς κοινωνίαν τοῦ υἱοῦ αὐτοῦ Ἰησοῦ Χριστοῦ τοῦ κυρίου ἡμῶν.",
    "10": "Παρακαλῶ δὲ ὑμᾶς, ἀδελφοί, διὰ τοῦ ὀνόματος τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, ἵνα τὸ αὐτὸ λέγητε πάντες καὶ μὴ ᾖ ἐν ὑμῖν σχίσματα, ἦτε δὲ κατηρτισμένοι ἐν τῷ αὐτῷ νοῒ καὶ ἐν τῇ αὐτῇ γνώμῃ.",
    "11": "ἐδηλώθη γάρ μοι περὶ ὑμῶν, ἀδελφοί μου, ὑπὸ τῶν Χλόης ὅτι ἔριδες ἐν ὑμῖν εἰσιν.",
    "12": "λέγω δὲ τοῦτο ὅτι ἕκαστος ὑμῶν λέγει, Ἐγὼ μέν εἰμι Παύλου, Ἐγὼ δὲ Ἀπολλῶ, Ἐγὼ δὲ Κηφᾶ, Ἐγὼ δὲ Χριστοῦ.",
    "13": "μεμέρισται ὁ Χριστός; μὴ Παῦλος ἐσταυρώθη ὑπὲρ ὑμῶν, ἢ εἰς τὸ ὄνομα Παύλου ἐβαπτίσθητε;",
    "14": "εὐχαριστῶ [τῷ θεῷ] ὅτι οὐδένα ὑμῶν ἐβάπτισα εἰ μὴ Κρίσπον καὶ Γάϊον,",
    "15": "ἵνα μή τις εἴπῃ ὅτι εἰς τὸ ἐμὸν ὄνομα ἐβαπτίσθητε.",
    "16": "ἐβάπτισα δὲ καὶ τὸν Στεφανᾶ οἶκον, λοιπὸν οὐκ οἶδα εἴ τινα ἄλλον ἐβάπτισα.",
    "17": "οὐ γὰρ ἀπέστειλέν με Χριστὸς βαπτίζειν ἀλλ᾽ εὐαγγελίζεσθαι, οὐκ ἐν σοφίᾳ λόγου, ἵνα μὴ κενωθῇ ὁ σταυρὸς τοῦ Χριστοῦ.",
    "18": "Ὁ λόγος γὰρ ὁ τοῦ σταυροῦ τοῖς μὲν ἀπολλυμένοις μωρία ἐστίν, τοῖς δὲ σῳζομένοις ἡμῖν δύναμις θεοῦ ἐστιν.",
    "19": "γέγραπται γάρ,\nἈπολῶ τὴν σοφίαν τῶν σοφῶν\nκαὶ τὴν σύνεσιν τῶν συνετῶν ἀθετήσω.",
    "20": "ποῦ σοφός; ποῦ γραμματεύς; ποῦ συζητητὴς τοῦ αἰῶνος τούτου; οὐχὶ ἐμώρανεν ὁ θεὸς τὴν σοφίαν τοῦ κόσμου;",
    "21": "ἐπειδὴ γὰρ ἐν τῇ σοφίᾳ τοῦ θεοῦ οὐκ ἔγνω ὁ κόσμος διὰ τῆς σοφίας τὸν θεόν, εὐδόκησεν ὁ θεὸς διὰ τῆς μωρίας τοῦ κηρύγματος σῶσαι τοὺς πιστεύοντας·",
    "22": "ἐπειδὴ καὶ Ἰουδαῖοι σημεῖα αἰτοῦσιν καὶ Ἕλληνες σοφίαν ζητοῦσιν,",
    "23": "ἡμεῖς δὲ κηρύσσομεν Χριστὸν ἐσταυρωμένον, Ἰουδαίοις μὲν σκάνδαλον, ἔθνεσιν δὲ μωρίαν,",
    "24": "αὐτοῖς δὲ τοῖς κλητοῖς, Ἰουδαίοις τε καὶ Ἕλλησιν, Χριστὸν θεοῦ δύναμιν καὶ θεοῦ σοφίαν·",
    "25": "ὅτι τὸ μωρὸν τοῦ θεοῦ σοφώτερον τῶν ἀνθρώπων ἐστὶν καὶ τὸ ἀσθενὲς τοῦ θεοῦ ἰσχυρότερον τῶν ἀνθρώπων.",
    "26": "Βλέπετε γὰρ τὴν κλῆσιν ὑμῶν, ἀδελφοί, ὅτι οὐ πολλοὶ σοφοὶ κατὰ σάρκα, οὐ πολλοὶ δυνατοί, οὐ πολλοὶ εὐγενεῖς·",
    "27": "ἀλλὰ τὰ μωρὰ τοῦ κόσμου ἐξελέξατο ὁ θεός, ἵνα καταισχύνῃ τοὺς σοφούς, καὶ τὰ ἀσθενῆ τοῦ κόσμου ἐξελέξατο ὁ θεός, ἵνα καταισχύνῃ τὰ ἰσχυρά,",
    "28": "καὶ τὰ ἀγενῆ τοῦ κόσμου καὶ τὰ ἐξουθενημένα ἐξελέξατο ὁ θεός, τὰ μὴ ὄντα, ἵνα τὰ ὄντα καταργήσῃ,",
    "29": "ὅπως μὴ καυχήσηται πᾶσα σὰρξ ἐνώπιον τοῦ θεοῦ.",
    "30": "ἐξ αὐτοῦ δὲ ὑμεῖς ἐστε ἐν Χριστῷ Ἰησοῦ, ὃς ἐγενήθη σοφία ἡμῖν ἀπὸ θεοῦ, δικαιοσύνη τε καὶ ἁγιασμὸς καὶ ἀπολύτρωσις,",
    "31": "ἵνα καθὼς γέγραπται, Ὁ καυχώμενος ἐν κυρίῳ καυχάσθω."
};
    const paragraphEnds = [3,9,17,19,25,31];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Saudação e ação de graças",
        "sourceTitle": "Greeting and Thanksgiving"
    },
    {
        "beforeVerse": 10,
        "title": "Divisões na igreja",
        "sourceTitle": "Divisions in the Church"
    },
    {
        "beforeVerse": 18,
        "title": "Cristo, poder e sabedoria de Deus",
        "sourceTitle": "Christ the Power and Wisdom of God"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1CO"] = window.ScripturaScriptureTexts.UBS5["1CO"] || {};
    window.ScripturaScriptureTexts.UBS5["1CO"][1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["1CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1CO"][1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"] = window.ScripturaScriptureHeadings.UBS5["1CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["1CO"][1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1CO"][1] = unnumberedPassages;
})();
