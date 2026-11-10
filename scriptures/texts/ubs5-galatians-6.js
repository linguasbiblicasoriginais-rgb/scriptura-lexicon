/* UBS5 — Epístola de Paulo aos Gálatas, capítulo 6.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente com exemplar impresso.
 * Texto grego e paratextos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀδελφοί, ἐὰν καὶ προλημφθῇ ἄνθρωπος ἔν τινι παραπτώματι, ὑμεῖς οἱ πνευματικοὶ καταρτίζετε τὸν τοιοῦτον ἐν πνεύματι πραΰτητος, σκοπῶν σεαυτὸν μὴ καὶ σὺ πειρασθῇς.",
    "2": "Ἀλλήλων τὰ βάρη βαστάζετε καὶ οὕτως ἀναπληρώσετε τὸν νόμον τοῦ Χριστοῦ.",
    "3": "εἰ γὰρ δοκεῖ τις εἶναί τι μηδὲν ὤν, φρεναπατᾷ ἑαυτόν.",
    "4": "τὸ δὲ ἔργον ἑαυτοῦ δοκιμαζέτω ἕκαστος, καὶ τότε εἰς ἑαυτὸν μόνον τὸ καύχημα ἕξει καὶ οὐκ εἰς τὸν ἕτερον·",
    "5": "ἕκαστος γὰρ τὸ ἴδιον φορτίον βαστάσει.",
    "6": "Κοινωνείτω δὲ ὁ κατηχούμενος τὸν λόγον τῷ κατηχοῦντι ἐν πᾶσιν ἀγαθοῖς.",
    "7": "Μὴ πλανᾶσθε, θεὸς οὐ μυκτηρίζεται. ὃ γὰρ ἐὰν σπείρῃ ἄνθρωπος, τοῦτο καὶ θερίσει·",
    "8": "ὅτι ὁ σπείρων εἰς τὴν σάρκα ἑαυτοῦ ἐκ τῆς σαρκὸς θερίσει φθοράν, ὁ δὲ σπείρων εἰς τὸ πνεῦμα ἐκ τοῦ πνεύματος θερίσει ζωὴν αἰώνιον.",
    "9": "τὸ δὲ καλὸν ποιοῦντες μὴ ἐγκακῶμεν, καιρῷ γὰρ ἰδίῳ θερίσομεν μὴ ἐκλυόμενοι.",
    "10": "ἄρα οὖν ὡς καιρὸν ἔχομεν, ἐργαζώμεθα τὸ ἀγαθὸν πρὸς πάντας, μάλιστα δὲ πρὸς τοὺς οἰκείους τῆς πίστεως.",
    "11": "Ἴδετε πηλίκοις ὑμῖν γράμμασιν ἔγραψα τῇ ἐμῇ χειρί.",
    "12": "ὅσοι θέλουσιν εὐπροσωπῆσαι ἐν σαρκί, οὗτοι ἀναγκάζουσιν ὑμᾶς περιτέμνεσθαι, μόνον ἵνα τῷ σταυρῷ τοῦ Χριστοῦ μὴ διώκωνται.",
    "13": "οὐδὲ γὰρ οἱ περιτεμνόμενοι αὐτοὶ νόμον φυλάσσουσιν ἀλλὰ θέλουσιν ὑμᾶς περιτέμνεσθαι, ἵνα ἐν τῇ ὑμετέρᾳ σαρκὶ καυχήσωνται.",
    "14": "ἐμοὶ δὲ μὴ γένοιτο καυχᾶσθαι εἰ μὴ ἐν τῷ σταυρῷ τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, δι᾽ οὗ ἐμοὶ κόσμος ἐσταύρωται κἀγὼ κόσμῳ.",
    "15": "οὔτε γὰρ περιτομή τί ἐστιν οὔτε ἀκροβυστία ἀλλὰ καινὴ κτίσις.",
    "16": "καὶ ὅσοι τῷ κανόνι τούτῳ στοιχήσουσιν, εἰρήνη ἐπ᾽ αὐτοὺς καὶ ἔλεος καὶ ἐπὶ τὸν Ἰσραὴλ τοῦ θεοῦ.",
    "17": "Τοῦ λοιποῦ κόπους μοι μηδεὶς παρεχέτω· ἐγὼ γὰρ τὰ στίγματα τοῦ Ἰησοῦ ἐν τῷ σώματί μου βαστάζω.",
    "18": "Ἡ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μετὰ τοῦ πνεύματος ὑμῶν, ἀδελφοί· ἀμήν."
};
    const paragraphEnds = [10,16,17,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Levai as cargas uns dos outros",
        "sourceTitle": "Bear One Another’s Burdens"
    },
    {
        "beforeVerse": 11,
        "title": "Advertência final e bênção",
        "sourceTitle": "Final Warning and Benediction"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.GAL = window.ScripturaScriptureTexts.UBS5.GAL || {};
    window.ScripturaScriptureTexts.UBS5.GAL[6] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL = window.ScripturaScriptureParagraphBreaks.UBS5.GAL || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL[6] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.GAL = window.ScripturaScriptureHeadings.UBS5.GAL || {};
    window.ScripturaScriptureHeadings.UBS5.GAL[6] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL = window.ScripturaScriptureUnnumberedPassages.UBS5.GAL || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL[6] = unnumberedPassages;
})();
