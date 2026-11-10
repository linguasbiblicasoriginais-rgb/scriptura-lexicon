/* UBS5 — Epístola de Paulo aos Gálatas, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente com exemplar impresso.
 * Texto grego e paratextos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "τῇ ἐλευθερίᾳ ἡμᾶς Χριστὸς ἠλευθέρωσεν· στήκετε οὖν καὶ μὴ πάλιν ζυγῷ δουλείας ἐνέχεσθε.",
    "2": "Ἴδε ἐγὼ Παῦλος λέγω ὑμῖν ὅτι ἐὰν περιτέμνησθε, Χριστὸς ὑμᾶς οὐδὲν ὠφελήσει.",
    "3": "μαρτύρομαι δὲ πάλιν παντὶ ἀνθρώπῳ περιτεμνομένῳ ὅτι ὀφειλέτης ἐστὶν ὅλον τὸν νόμον ποιῆσαι.",
    "4": "κατηργήθητε ἀπὸ Χριστοῦ, οἵτινες ἐν νόμῳ δικαιοῦσθε, τῆς χάριτος ἐξεπέσατε.",
    "5": "ἡμεῖς γὰρ πνεύματι ἐκ πίστεως ἐλπίδα δικαιοσύνης ἀπεκδεχόμεθα.",
    "6": "ἐν γὰρ Χριστῷ Ἰησοῦ οὔτε περιτομή τι ἰσχύει οὔτε ἀκροβυστία ἀλλὰ πίστις δι᾽ ἀγάπης ἐνεργουμένη.",
    "7": "Ἐτρέχετε καλῶς· τίς ὑμᾶς ἐνέκοψεν [τῇ] ἀληθείᾳ μὴ πείθεσθαι;",
    "8": "ἡ πεισμονὴ οὐκ ἐκ τοῦ καλοῦντος ὑμᾶς.",
    "9": "μικρὰ ζύμη ὅλον τὸ φύραμα ζυμοῖ.",
    "10": "ἐγὼ πέποιθα εἰς ὑμᾶς ἐν κυρίῳ ὅτι οὐδὲν ἄλλο φρονήσετε· ὁ δὲ ταράσσων ὑμᾶς βαστάσει τὸ κρίμα, ὅστις ἐὰν ᾖ.",
    "11": "ἐγὼ δέ, ἀδελφοί, εἰ περιτομὴν ἔτι κηρύσσω, τί ἔτι διώκομαι; ἄρα κατήργηται τὸ σκάνδαλον τοῦ σταυροῦ.",
    "12": "ὄφελον καὶ ἀποκόψονται οἱ ἀναστατοῦντες ὑμᾶς.",
    "13": "Ὑμεῖς γὰρ ἐπ᾽ ἐλευθερίᾳ ἐκλήθητε, ἀδελφοί· μόνον μὴ τὴν ἐλευθερίαν εἰς ἀφορμὴν τῇ σαρκί, ἀλλὰ διὰ τῆς ἀγάπης δουλεύετε ἀλλήλοις.",
    "14": "ὁ γὰρ πᾶς νόμος ἐν ἑνὶ λόγῳ πεπλήρωται, ἐν τῷ· Ἀγαπήσεις τὸν πλησίον σου ὡς σεαυτόν.",
    "15": "εἰ δὲ ἀλλήλους δάκνετε καὶ κατεσθίετε, βλέπετε μὴ ὑπ᾽ ἀλλήλων ἀναλωθῆτε.",
    "16": "Λέγω δέ, πνεύματι περιπατεῖτε καὶ ἐπιθυμίαν σαρκὸς οὐ μὴ τελέσητε.",
    "17": "ἡ γὰρ σὰρξ ἐπιθυμεῖ κατὰ τοῦ πνεύματος, τὸ δὲ πνεῦμα κατὰ τῆς σαρκός, ταῦτα γὰρ ἀλλήλοις ἀντίκειται, ἵνα μὴ ἃ ἐὰν θέλητε ταῦτα ποιῆτε.",
    "18": "εἰ δὲ πνεύματι ἄγεσθε, οὐκ ἐστὲ ὑπὸ νόμον.",
    "19": "φανερὰ δέ ἐστιν τὰ ἔργα τῆς σαρκός, ἅτινά ἐστιν πορνεία, ἀκαθαρσία, ἀσέλγεια,",
    "20": "εἰδωλολατρία, φαρμακεία, ἔχθραι, ἔρις, ζῆλος, θυμοί, ἐριθεῖαι, διχοστασίαι, αἱρέσεις,",
    "21": "φθόνοι, μέθαι, κῶμοι καὶ τὰ ὅμοια τούτοις, ἃ προλέγω ὑμῖν, καθὼς προεῖπον ὅτι οἱ τὰ τοιαῦτα πράσσοντες βασιλείαν θεοῦ οὐ κληρονομήσουσιν.",
    "22": "Ὁ δὲ καρπὸς τοῦ πνεύματός ἐστιν ἀγάπη χαρὰ εἰρήνη, μακροθυμία χρηστότης ἀγαθωσύνη, πίστις",
    "23": "πραΰτης ἐγκράτεια· κατὰ τῶν τοιούτων οὐκ ἔστιν νόμος.",
    "24": "οἱ δὲ τοῦ Χριστοῦ [Ἰησοῦ] τὴν σάρκα ἐσταύρωσαν σὺν τοῖς παθήμασιν καὶ ταῖς ἐπιθυμίαις.",
    "25": "εἰ ζῶμεν πνεύματι, πνεύματι καὶ στοιχῶμεν.",
    "26": "μὴ γινώμεθα κενόδοξοι, ἀλλήλους προκαλούμενοι, ἀλλήλοις φθονοῦντες."
};
    const paragraphEnds = [1,6,12,15,21,26];
    const headings = [
    {
        "beforeVerse": 2,
        "title": "A liberdade cristã",
        "sourceTitle": "Christian Freedom"
    },
    {
        "beforeVerse": 16,
        "title": "O fruto do Espírito e as obras da carne",
        "sourceTitle": "The Fruit of the Spirit and the Works of the Flesh"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.GAL = window.ScripturaScriptureTexts.UBS5.GAL || {};
    window.ScripturaScriptureTexts.UBS5.GAL[5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL = window.ScripturaScriptureParagraphBreaks.UBS5.GAL || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.GAL[5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.GAL = window.ScripturaScriptureHeadings.UBS5.GAL || {};
    window.ScripturaScriptureHeadings.UBS5.GAL[5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL = window.ScripturaScriptureUnnumberedPassages.UBS5.GAL || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.GAL[5] = unnumberedPassages;
})();
