/* NA28 — Primeira Epístola aos Tessalonicenses, capítulo 5.
 * Fonte: transcrição integral fornecida pelo mantenedor nesta conversa em 12/11/2026.
 * Edição declarada: NA28; sem cotejo independente com a edição impressa.
 * Preservadas acentuação, pontuação, grafia, colchetes e disposição versicular.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Περὶ δὲ τῶν χρόνων καὶ τῶν καιρῶν, ἀδελφοί, οὐ χρείαν ἔχετε ὑμῖν γράφεσθαι,",
    "2": "αὐτοὶ γὰρ ἀκριβῶς οἴδατε ὅτι ἡμέρα κυρίου ὡς κλέπτης ἐν νυκτὶ οὕτως ἔρχεται.",
    "3": "ὅταν λέγωσιν· εἰρήνη καὶ ἀσφάλεια, τότε αἰφνίδιος αὐτοῖς ἐφίσταται ὄλεθρος ὥσπερ ἡ ὠδὶν τῇ ἐν γαστρὶ ἐχούσῃ, καὶ οὐ μὴ ἐκφύγωσιν.",
    "4": "ὑμεῖς δέ, ἀδελφοί, οὐκ ἐστὲ ἐν σκότει, ἵνα ἡ ἡμέρα ὑμᾶς ὡς κλέπτης καταλάβῃ·",
    "5": "πάντες γὰρ ὑμεῖς υἱοὶ φωτός ἐστε καὶ υἱοὶ ἡμέρας. Οὐκ ἐσμὲν νυκτὸς οὐδὲ σκότους·",
    "6": "ἄρα οὖν μὴ καθεύδωμεν ὡς οἱ λοιποὶ ἀλλὰ γρηγορῶμεν καὶ νήφωμεν.",
    "7": "Οἱ γὰρ καθεύδοντες νυκτὸς καθεύδουσιν καὶ οἱ μεθυσκόμενοι νυκτὸς μεθύουσιν·",
    "8": "ἡμεῖς δὲ ἡμέρας ὄντες νήφωμεν ἐνδυσάμενοι θώρακα πίστεως καὶ ἀγάπης καὶ περικεφαλαίαν ἐλπίδα σωτηρίας·",
    "9": "ὅτι οὐκ ἔθετο ἡμᾶς ὁ θεὸς εἰς ὀργὴν ἀλλ’ εἰς περιποίησιν σωτηρίας διὰ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ",
    "10": "τοῦ ἀποθανόντος ὑπὲρ ἡμῶν, ἵνα εἴτε γρηγορῶμεν εἴτε καθεύδωμεν ἅμα σὺν αὐτῷ ζήσωμεν.",
    "11": "Διὸ παρακαλεῖτε ἀλλήλους καὶ οἰκοδομεῖτε εἷς τὸν ἕνα, καθὼς καὶ ποιεῖτε.",
    "12": "Ἐρωτῶμεν δὲ ὑμᾶς, ἀδελφοί, εἰδέναι τοὺς κοπιῶντας ἐν ὑμῖν καὶ προϊσταμένους ὑμῶν ἐν κυρίῳ καὶ νουθετοῦντας ὑμᾶς",
    "13": "καὶ ἡγεῖσθαι αὐτοὺς ὑπερεκπερισσοῦ ἐν ἀγάπῃ διὰ τὸ ἔργον αὐτῶν. εἰρηνεύετε ἐν ἑαυτοῖς.",
    "14": "Παρακαλοῦμεν δὲ ὑμᾶς, ἀδελφοί, νουθετεῖτε τοὺς ἀτάκτους, παραμυθεῖσθε τοὺς ὀλιγοψύχους, ἀντέχεσθε τῶν ἀσθενῶν, μακροθυμεῖτε πρὸς πάντας.",
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
    "28": "Ἡ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μεθ’ ὑμῶν."
};
    const paragraphEnds = [11,13,15,16,17,18,19,20,21,22,24,25,27,28];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.NA28 = window.ScripturaScriptureTexts.NA28 || {};
    window.ScripturaScriptureTexts.NA28["1TH"] = window.ScripturaScriptureTexts.NA28["1TH"] || {};
    window.ScripturaScriptureTexts.NA28["1TH"][5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.NA28 = window.ScripturaScriptureParagraphBreaks.NA28 || {};
    window.ScripturaScriptureParagraphBreaks.NA28["1TH"] = window.ScripturaScriptureParagraphBreaks.NA28["1TH"] || {};
    window.ScripturaScriptureParagraphBreaks.NA28["1TH"][5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.NA28 = window.ScripturaScriptureHeadings.NA28 || {};
    window.ScripturaScriptureHeadings.NA28["1TH"] = window.ScripturaScriptureHeadings.NA28["1TH"] || {};
    window.ScripturaScriptureHeadings.NA28["1TH"][5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.NA28 = window.ScripturaScriptureUnnumberedPassages.NA28 || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["1TH"] = window.ScripturaScriptureUnnumberedPassages.NA28["1TH"] || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["1TH"][5] = unnumberedPassages;
})();
