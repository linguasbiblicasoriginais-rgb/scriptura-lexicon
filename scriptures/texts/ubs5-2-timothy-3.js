/* UBS5 — Segunda Epístola de Paulo a Timóteo, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τοῦτο δὲ γίνωσκε, ὅτι ἐν ἐσχάταις ἡμέραις ἐνστήσονται καιροὶ χαλεποί·",
    "2": "ἔσονται γὰρ οἱ ἄνθρωποι φίλαυτοι φιλάργυροι ἀλαζόνες ὑπερήφανοι βλάσφημοι, γονεῦσιν ἀπειθεῖς, ἀχάριστοι ἀνόσιοι",
    "3": "ἄστοργοι ἄσπονδοι διάβολοι ἀκρατεῖς ἀνήμεροι ἀφιλάγαθοι",
    "4": "προδόται προπετεῖς τετυφωμένοι, φιλήδονοι μᾶλλον ἢ φιλόθεοι,",
    "5": "ἔχοντες μόρφωσιν εὐσεβείας τὴν δὲ δύναμιν αὐτῆς ἠρνημένοι· καὶ τούτους ἀποτρέπου.",
    "6": "ἐκ τούτων γάρ εἰσιν οἱ ἐνδύνοντες εἰς τὰς οἰκίας καὶ αἰχμαλωτίζοντες γυναικάρια σεσωρευμένα ἁμαρτίαις, ἀγόμενα ἐπιθυμίαις ποικίλαις,",
    "7": "πάντοτε μανθάνοντα καὶ μηδέποτε εἰς ἐπίγνωσιν ἀληθείας ἐλθεῖν δυνάμενα.",
    "8": "ὃν τρόπον δὲ Ἰάννης καὶ Ἰαμβρῆς ἀντέστησαν Μωϋσεῖ, οὕτως καὶ οὗτοι ἀνθίστανται τῇ ἀληθείᾳ, ἄνθρωποι κατεφθαρμένοι τὸν νοῦν, ἀδόκιμοι περὶ τὴν πίστιν.",
    "9": "ἀλλ᾽ οὐ προκόψουσιν ἐπὶ πλεῖον· ἡ γὰρ ἄνοια αὐτῶν ἔκδηλος ἔσται πᾶσιν, ὡς καὶ ἡ ἐκείνων ἐγένετο.",
    "10": "Σὺ δὲ παρηκολούθησάς μου τῇ διδασκαλίᾳ, τῇ ἀγωγῇ, τῇ προθέσει, τῇ πίστει, τῇ μακροθυμίᾳ, τῇ ἀγάπῃ, τῇ ὑπομονῇ,",
    "11": "τοῖς διωγμοῖς, τοῖς παθήμασιν, οἷά μοι ἐγένετο ἐν Ἀντιοχείᾳ, ἐν Ἰκονίῳ, ἐν Λύστροις, οἵους διωγμοὺς ὑπήνεγκα καὶ ἐκ πάντων με ἐρρύσατο ὁ κύριος.",
    "12": "καὶ πάντες δὲ οἱ θέλοντες εὐσεβῶς ζῆν ἐν Χριστῷ Ἰησοῦ διωχθήσονται.",
    "13": "πονηροὶ δὲ ἄνθρωποι καὶ γόητες προκόψουσιν ἐπὶ τὸ χεῖρον πλανῶντες καὶ πλανώμενοι.",
    "14": "σὺ δὲ μένε ἐν οἷς ἔμαθες καὶ ἐπιστώθης, εἰδὼς παρὰ τίνων ἔμαθες,",
    "15": "καὶ ὅτι ἀπὸ βρέφους [τὰ] ἱερὰ γράμματα οἶδας, τὰ δυνάμενά σε σοφίσαι εἰς σωτηρίαν διὰ πίστεως τῆς ἐν Χριστῷ Ἰησοῦ.",
    "16": "πᾶσα γραφὴ θεόπνευστος καὶ ὠφέλιμος πρὸς διδασκαλίαν, πρὸς ἐλεγμόν, πρὸς ἐπανόρθωσιν, πρὸς παιδείαν τὴν ἐν δικαιοσύνῃ,",
    "17": "ἵνα ἄρτιος ᾖ ὁ τοῦ θεοῦ ἄνθρωπος, πρὸς πᾶν ἔργον ἀγαθὸν ἐξηρτισμένος."
};
    const paragraphEnds = [9,17];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O caráter dos homens nos últimos dias",
        "sourceTitle": "The Character of Men in the Last Days"
    },
    {
        "beforeVerse": 10,
        "title": "Últimas instruções a Timóteo",
        "sourceTitle": "Last Charge to Timothy"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2TI"] = window.ScripturaScriptureTexts.UBS5["2TI"] || {};
    window.ScripturaScriptureTexts.UBS5["2TI"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["2TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2TI"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"] = window.ScripturaScriptureHeadings.UBS5["2TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["2TI"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2TI"][3] = unnumberedPassages;
})();
