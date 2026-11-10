/* UBS5 — Epístola de Paulo aos Filipenses, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 segundo o projeto; sem cotejo independente da edição impressa.
 * Texto grego e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τὸ λοιπόν, ἀδελφοί μου, χαίρετε ἐν κυρίῳ. τὰ αὐτὰ γράφειν ὑμῖν ἐμοὶ μὲν οὐκ ὀκνηρόν, ὑμῖν δὲ ἀσφαλές.",
    "2": "Βλέπετε τοὺς κύνας, βλέπετε τοὺς κακοὺς ἐργάτας, βλέπετε τὴν κατατομήν.",
    "3": "ἡμεῖς γάρ ἐσμεν ἡ περιτομή, οἱ πνεύματι θεοῦ λατρεύοντες καὶ καυχώμενοι ἐν Χριστῷ Ἰησοῦ καὶ οὐκ ἐν σαρκὶ πεποιθότες,",
    "4": "καίπερ ἐγὼ ἔχων πεποίθησιν καὶ ἐν σαρκί. εἴ τις δοκεῖ ἄλλος πεποιθέναι ἐν σαρκί, ἐγὼ μᾶλλον·",
    "5": "περιτομῇ ὀκταήμερος, ἐκ γένους Ἰσραήλ, φυλῆς Βενιαμίν, Ἑβραῖος ἐξ Ἑβραίων, κατὰ νόμον Φαρισαῖος,",
    "6": "κατὰ ζῆλος διώκων τὴν ἐκκλησίαν, κατὰ δικαιοσύνην τὴν ἐν νόμῳ γενόμενος ἄμεμπτος.",
    "7": "[ἀλλ᾽] ἅτινα ἦν μοι κέρδη, ταῦτα ἥγημαι διὰ τὸν Χριστὸν ζημίαν.",
    "8": "ἀλλὰ μενοῦνγε καὶ ἡγοῦμαι πάντα ζημίαν εἶναι διὰ τὸ ὑπερέχον τῆς γνώσεως Χριστοῦ Ἰησοῦ τοῦ κυρίου μου, δι᾽ ὃν τὰ πάντα ἐζημιώθην, καὶ ἡγοῦμαι σκύβαλα, ἵνα Χριστὸν κερδήσω",
    "9": "καὶ εὑρεθῶ ἐν αὐτῷ, μὴ ἔχων ἐμὴν δικαιοσύνην τὴν ἐκ νόμου ἀλλὰ τὴν διὰ πίστεως Χριστοῦ, τὴν ἐκ θεοῦ δικαιοσύνην ἐπὶ τῇ πίστει,",
    "10": "τοῦ γνῶναι αὐτὸν καὶ τὴν δύναμιν τῆς ἀναστάσεως αὐτοῦ καὶ [τὴν] κοινωνίαν [τῶν] παθημάτων αὐτοῦ, συμμορφιζόμενος τῷ θανάτῳ αὐτοῦ,",
    "11": "εἴ πως καταντήσω εἰς τὴν ἐξανάστασιν τὴν ἐκ νεκρῶν.",
    "12": "Οὐχ ὅτι ἤδη ἔλαβον ἢ ἤδη τετελείωμαι, διώκω δὲ εἰ καὶ καταλάβω, ἐφ᾽ ᾧ καὶ κατελήμφθην ὑπὸ Χριστοῦ [Ἰησοῦ].",
    "13": "ἀδελφοί, ἐγὼ ἐμαυτὸν οὐ λογίζομαι κατειληφέναι· ἓν δέ, τὰ μὲν ὀπίσω ἐπιλανθανόμενος τοῖς δὲ ἔμπροσθεν ἐπεκτεινόμενος,",
    "14": "κατὰ σκοπὸν διώκω εἰς τὸ βραβεῖον τῆς ἄνω κλήσεως τοῦ θεοῦ ἐν Χριστῷ Ἰησοῦ.",
    "15": "Ὅσοι οὖν τέλειοι, τοῦτο φρονῶμεν· καὶ εἴ τι ἑτέρως φρονεῖτε, καὶ τοῦτο ὁ θεὸς ὑμῖν ἀποκαλύψει·",
    "16": "πλὴν εἰς ὃ ἐφθάσαμεν, τῷ αὐτῷ στοιχεῖν.",
    "17": "Συμμιμηταί μου γίνεσθε, ἀδελφοί, καὶ σκοπεῖτε τοὺς οὕτως περιπατοῦντας καθὼς ἔχετε τύπον ἡμᾶς.",
    "18": "πολλοὶ γὰρ περιπατοῦσιν οὓς πολλάκις ἔλεγον ὑμῖν, νῦν δὲ καὶ κλαίων λέγω, τοὺς ἐχθροὺς τοῦ σταυροῦ τοῦ Χριστοῦ,",
    "19": "ὧν τὸ τέλος ἀπώλεια, ὧν ὁ θεὸς ἡ κοιλία καὶ ἡ δόξα ἐν τῇ αἰσχύνῃ αὐτῶν, οἱ τὰ ἐπίγεια φρονοῦντες.",
    "20": "ἡμῶν γὰρ τὸ πολίτευμα ἐν οὐρανοῖς ὑπάρχει, ἐξ οὗ καὶ σωτῆρα ἀπεκδεχόμεθα κύριον Ἰησοῦν Χριστόν,",
    "21": "ὃς μετασχηματίσει τὸ σῶμα τῆς ταπεινώσεως ἡμῶν σύμμορφον τῷ σώματι τῆς δόξης αὐτοῦ κατὰ τὴν ἐνέργειαν τοῦ δύνασθαι αὐτὸν καὶ ὑποτάξαι αὐτῷ τὰ πάντα."
};
    const paragraphEnds = [1,11,16,21];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A verdadeira justiça",
        "sourceTitle": "The True Righteousness"
    },
    {
        "beforeVerse": 12,
        "title": "Prosseguindo para o alvo",
        "sourceTitle": "Pressing toward the Mark"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.PHP = window.ScripturaScriptureTexts.UBS5.PHP || {};
    window.ScripturaScriptureTexts.UBS5.PHP[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.PHP = window.ScripturaScriptureParagraphBreaks.UBS5.PHP || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.PHP[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.PHP = window.ScripturaScriptureHeadings.UBS5.PHP || {};
    window.ScripturaScriptureHeadings.UBS5.PHP[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.PHP = window.ScripturaScriptureUnnumberedPassages.UBS5.PHP || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.PHP[3] = unnumberedPassages;
})();
