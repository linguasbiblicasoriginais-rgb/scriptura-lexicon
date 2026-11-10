/* UBS5 — Primeira Epístola de Paulo aos Tessalonicenses, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme a identificação do projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Περὶ δὲ τῶν χρόνων καὶ τῶν καιρῶν, ἀδελφοί, οὐ χρείαν ἔχετε ὑμῖν γράφεσθαι,",
    "2": "αὐτοὶ γὰρ ἀκριβῶς οἴδατε ὅτι ἡμέρα κυρίου ὡς κλέπτης ἐν νυκτὶ οὕτως ἔρχεται.",
    "3": "ὅταν λέγωσιν, Εἰρήνη καὶ ἀσφάλεια, τότε αἰφνίδιος αὐτοῖς ἐφίσταται ὄλεθρος ὥσπερ ἡ ὠδὶν τῇ ἐν γαστρὶ ἐχούσῃ, καὶ οὐ μὴ ἐκφύγωσιν.",
    "4": "ὑμεῖς δέ, ἀδελφοί, οὐκ ἐστὲ ἐν σκότει, ἵνα ἡ ἡμέρα ὑμᾶς ὡς κλέπτης καταλάβῃ·",
    "5": "πάντες γὰρ ὑμεῖς υἱοὶ φωτός ἐστε καὶ υἱοὶ ἡμέρας. οὐκ ἐσμὲν νυκτὸς οὐδὲ σκότους·",
    "6": "ἄρα οὖν μὴ καθεύδωμεν ὡς οἱ λοιποὶ ἀλλὰ γρηγορῶμεν καὶ νήφωμεν.",
    "7": "οἱ γὰρ καθεύδοντες νυκτὸς καθεύδουσιν καὶ οἱ μεθυσκόμενοι νυκτὸς μεθύουσιν·",
    "8": "ἡμεῖς δὲ ἡμέρας ὄντες νήφωμεν ἐνδυσάμενοι θώρακα πίστεως καὶ ἀγάπης καὶ περικεφαλαίαν ἐλπίδα σωτηρίας·",
    "9": "ὅτι οὐκ ἔθετο ἡμᾶς ὁ θεὸς εἰς ὀργὴν ἀλλ᾽ εἰς περιποίησιν σωτηρίας διὰ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ",
    "10": "τοῦ ἀποθανόντος ὑπὲρ ἡμῶν, ἵνα εἴτε γρηγορῶμεν εἴτε καθεύδωμεν ἅμα σὺν αὐτῷ ζήσωμεν.",
    "11": "Διὸ παρακαλεῖτε ἀλλήλους καὶ οἰκοδομεῖτε εἷς τὸν ἕνα, καθὼς καὶ ποιεῖτε.",
    "12": "Ἐρωτῶμεν δὲ ὑμᾶς, ἀδελφοί, εἰδέναι τοὺς κοπιῶντας ἐν ὑμῖν καὶ προϊσταμένους ὑμῶν ἐν κυρίῳ καὶ νουθετοῦντας ὑμᾶς",
    "13": "καὶ ἡγεῖσθαι αὐτοὺς ὑπερεκπερισσοῦ ἐν ἀγάπῃ διὰ τὸ ἔργον αὐτῶν. εἰρηνεύετε ἐν ἑαυτοῖς.",
    "14": "παρακαλοῦμεν δὲ ὑμᾶς, ἀδελφοί, νουθετεῖτε τοὺς ἀτάκτους, παραμυθεῖσθε τοὺς ὀλιγοψύχους, ἀντέχεσθε τῶν ἀσθενῶν, μακροθυμεῖτε πρὸς πάντας.",
    "15": "ὁρᾶτε μή τις κακὸν ἀντὶ κακοῦ τινι ἀποδῷ, ἀλλὰ πάντοτε τὸ ἀγαθὸν διώκετε [καὶ] εἰς ἀλλήλους καὶ εἰς πάντας.",
    "16": "Πάντοτε χαίρετε,",
    "17": "ἀδιαλείπτως προσεύχεσθε,",
    "18": "ἐν παντὶ εὐχαριστεῖτε· τοῦτο γὰρ θέλημα θεοῦ ἐν Χριστῷ Ἰησοῦ εἰς ὑμᾶς.",
    "19": "τὸ πνεῦμα μὴ σβέννυτε,",
    "20": "προφητείας μὴ ἐξουθενεῖτε,",
    "21": "πάντα δὲ δοκιμάζετε, τὸ καλὸν κατέχετε,",
    "22": "ἀπὸ παντὸς εἴδους πονηροῦ ἀπέχεσθε.",
    "23": "Αὐτὸς δὲ ὁ θεὸς τῆς εἰρήνης ἁγιάσαι ὑμᾶς ὁλοτελεῖς, καὶ ὁλόκληρον ὑμῶν τὸ πνεῦμα καὶ ἡ ψυχὴ καὶ τὸ σῶμα ἀμέμπτως ἐν τῇ παρουσίᾳ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ τηρηθείη.",
    "24": "πιστὸς ὁ καλῶν ὑμᾶς, ὃς καὶ ποιήσει.",
    "25": "Ἀδελφοί, προσεύχεσθε [καὶ] περὶ ἡμῶν.",
    "26": "Ἀσπάσασθε τοὺς ἀδελφοὺς πάντας ἐν φιλήματι ἁγίῳ.",
    "27": "Ἐνορκίζω ὑμᾶς τὸν κύριον ἀναγνωσθῆναι τὴν ἐπιστολὴν πᾶσιν τοῖς ἀδελφοῖς.",
    "28": "Ἡ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μεθ᾽ ὑμῶν."
};
    const paragraphEnds = [11,15,22,24,25,27,28];
    const headings = [
    {
        "beforeVerse": 12,
        "title": "Exortações e saudações finais",
        "sourceTitle": "Final Exhortations and Greetings"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TH"] = window.ScripturaScriptureTexts.UBS5["1TH"] || {};
    window.ScripturaScriptureTexts.UBS5["1TH"][5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TH"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TH"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TH"][5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TH"] = window.ScripturaScriptureHeadings.UBS5["1TH"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TH"][5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TH"][5] = unnumberedPassages;
})();
