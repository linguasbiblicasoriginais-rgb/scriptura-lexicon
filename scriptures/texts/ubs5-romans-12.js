/* UBS5 — Romanos 12. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παρακαλῶ οὖν ὑμᾶς, ἀδελφοί, διὰ τῶν οἰκτιρμῶν τοῦ θεοῦ παραστῆσαι τὰ σώματα ὑμῶν θυσίαν ζῶσαν ἁγίαν εὐάρεστον τῷ θεῷ, τὴν λογικὴν λατρείαν ὑμῶν·",
    "2": "καὶ μὴ συσχηματίζεσθε τῷ αἰῶνι τούτῳ, ἀλλὰ μεταμορφοῦσθε τῇ ἀνακαινώσει τοῦ νοὸς εἰς τὸ δοκιμάζειν ὑμᾶς τί τὸ θέλημα τοῦ θεοῦ, τὸ ἀγαθὸν καὶ εὐάρεστον καὶ τέλειον.",
    "3": "Λέγω γὰρ διὰ τῆς χάριτος τῆς δοθείσης μοι παντὶ τῷ ὄντι ἐν ὑμῖν μὴ ὑπερφρονεῖν παρ᾽ ὃ δεῖ φρονεῖν ἀλλὰ φρονεῖν εἰς τὸ σωφρονεῖν, ἑκάστῳ ὡς ὁ θεὸς ἐμέρισεν μέτρον πίστεως.",
    "4": "καθάπερ γὰρ ἐν ἑνὶ σώματι πολλὰ μέλη ἔχομεν, τὰ δὲ μέλη πάντα οὐ τὴν αὐτὴν ἔχει πρᾶξιν,",
    "5": "οὕτως οἱ πολλοὶ ἓν σῶμά ἐσμεν ἐν Χριστῷ, τὸ δὲ καθ᾽ εἷς ἀλλήλων μέλη.",
    "6": "ἔχοντες δὲ χαρίσματα κατὰ τὴν χάριν τὴν δοθεῖσαν ἡμῖν διάφορα, εἴτε προφητείαν κατὰ τὴν ἀναλογίαν τῆς πίστεως,",
    "7": "εἴτε διακονίαν ἐν τῇ διακονίᾳ, εἴτε ὁ διδάσκων ἐν τῇ διδασκαλίᾳ,",
    "8": "εἴτε ὁ παρακαλῶν ἐν τῇ παρακλήσει· ὁ μεταδιδοὺς ἐν ἁπλότητι, ὁ προϊστάμενος ἐν σπουδῇ, ὁ ἐλεῶν ἐν ἱλαρότητι.",
    "9": "Ἡ ἀγάπη ἀνυπόκριτος. ἀποστυγοῦντες τὸ πονηρόν, κολλώμενοι τῷ ἀγαθῷ,",
    "10": "τῇ φιλαδελφίᾳ εἰς ἀλλήλους φιλόστοργοι, τῇ τιμῇ ἀλλήλους προηγούμενοι,",
    "11": "τῇ σπουδῇ μὴ ὀκνηροί, τῷ πνεύματι ζέοντες, τῷ κυρίῳ δουλεύοντες,",
    "12": "τῇ ἐλπίδι χαίροντες, τῇ θλίψει ὑπομένοντες, τῇ προσευχῇ προσκαρτεροῦντες,",
    "13": "ταῖς χρείαις τῶν ἁγίων κοινωνοῦντες, τὴν φιλοξενίαν διώκοντες.",
    "14": "εὐλογεῖτε τοὺς διώκοντας [ὑμᾶς], εὐλογεῖτε καὶ μὴ καταρᾶσθε.",
    "15": "χαίρειν μετὰ χαιρόντων, κλαίειν μετὰ κλαιόντων.",
    "16": "τὸ αὐτὸ εἰς ἀλλήλους φρονοῦντες, μὴ τὰ ὑψηλὰ φρονοῦντες ἀλλὰ τοῖς ταπεινοῖς συναπαγόμενοι. μὴ γίνεσθε φρόνιμοι παρ᾽ ἑαυτοῖς.",
    "17": "μηδενὶ κακὸν ἀντὶ κακοῦ ἀποδιδόντες, προνοούμενοι καλὰ ἐνώπιον πάντων ἀνθρώπων·",
    "18": "εἰ δυνατὸν τὸ ἐξ ὑμῶν, μετὰ πάντων ἀνθρώπων εἰρηνεύοντες·",
    "19": "μὴ ἑαυτοὺς ἐκδικοῦντες, ἀγαπητοί, ἀλλὰ δότε τόπον τῇ ὀργῇ, γέγραπται γάρ, Ἐμοὶ ἐκδίκησις, ἐγὼ ἀνταποδώσω, λέγει κύριος.",
    "20": "ἀλλ᾽ ἐὰν πεινᾷ ὁ ἐχθρός σου, ψώμιζε αὐτόν· ἐὰν διψᾷ, πότιζε αὐτόν· τοῦτο γὰρ ποιῶν ἄνθρακας πυρὸς σωρεύσεις ἐπὶ τὴν κεφαλὴν αὐτοῦ.",
    "21": "μὴ νικῶ ὑπὸ τοῦ κακοῦ ἀλλὰ νίκα ἐν τῷ ἀγαθῷ τὸ κακόν."
};
    const paragraphEnds = [2,8,21];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A nova vida em Cristo",
        "sourceTitle": "The New Life in Christ"
    },
    {
        "beforeVerse": 9,
        "title": "Princípios da vida cristã",
        "sourceTitle": "Rules of the Christian Life"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[12] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[12] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[12] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[12] = unnumberedPassages;
})();
