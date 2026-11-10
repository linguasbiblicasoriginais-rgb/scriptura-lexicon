/* UBS5 — Epístola aos Hebreus, capítulo 5.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πᾶς γὰρ ἀρχιερεὺς ἐξ ἀνθρώπων λαμβανόμενος ὑπὲρ ἀνθρώπων καθίσταται τὰ πρὸς τὸν θεόν, ἵνα προσφέρῃ δῶρά τε καὶ θυσίας ὑπὲρ ἁμαρτιῶν,",
    "2": "μετριοπαθεῖν δυνάμενος τοῖς ἀγνοοῦσιν καὶ πλανωμένοις, ἐπεὶ καὶ αὐτὸς περίκειται ἀσθένειαν",
    "3": "καὶ δι᾽ αὐτὴν ὀφείλει, καθὼς περὶ τοῦ λαοῦ, οὕτως καὶ περὶ αὐτοῦ προσφέρειν περὶ ἁμαρτιῶν.",
    "4": "καὶ οὐχ ἑαυτῷ τις λαμβάνει τὴν τιμὴν ἀλλὰ καλούμενος ὑπὸ τοῦ θεοῦ καθώσπερ καὶ Ἀαρών.",
    "5": "Οὕτως καὶ ὁ Χριστὸς οὐχ ἑαυτὸν ἐδόξασεν γενηθῆναι ἀρχιερέα ἀλλ᾽ ὁ λαλήσας πρὸς αὐτόν,\nΥἱός μου εἶ σύ,\nἐγὼ σήμερον γεγέννηκά σε·",
    "6": "καθὼς καὶ ἐν ἑτέρῳ λέγει,\nΣὺ ἱερεὺς εἰς τὸν αἰῶνα\nκατὰ τὴν τάξιν Μελχισέδεκ,",
    "7": "ὃς ἐν ταῖς ἡμέραις τῆς σαρκὸς αὐτοῦ δεήσεις τε καὶ ἱκετηρίας πρὸς τὸν δυνάμενον σῴζειν αὐτὸν ἐκ θανάτου μετὰ κραυγῆς ἰσχυρᾶς καὶ δακρύων προσενέγκας καὶ εἰσακουσθεὶς ἀπὸ τῆς εὐλαβείας,",
    "8": "καίπερ ὢν υἱός, ἔμαθεν ἀφ᾽ ὧν ἔπαθεν τὴν ὑπακοήν,",
    "9": "καὶ τελειωθεὶς ἐγένετο πᾶσιν τοῖς ὑπακούουσιν αὐτῷ αἴτιος σωτηρίας αἰωνίου,",
    "10": "προσαγορευθεὶς ὑπὸ τοῦ θεοῦ ἀρχιερεὺς κατὰ τὴν τάξιν Μελχισέδεκ.",
    "11": "Περὶ οὗ πολὺς ἡμῖν ὁ λόγος καὶ δυσερμήνευτος λέγειν, ἐπεὶ νωθροὶ γεγόνατε ταῖς ἀκοαῖς.",
    "12": "καὶ γὰρ ὀφείλοντες εἶναι διδάσκαλοι διὰ τὸν χρόνον, πάλιν χρείαν ἔχετε τοῦ διδάσκειν ὑμᾶς τινὰ τὰ στοιχεῖα τῆς ἀρχῆς τῶν λογίων τοῦ θεοῦ καὶ γεγόνατε χρείαν ἔχοντες γάλακτος [καὶ] οὐ στερεᾶς τροφῆς.",
    "13": "πᾶς γὰρ ὁ μετέχων γάλακτος ἄπειρος λόγου δικαιοσύνης, νήπιος γάρ ἐστιν·",
    "14": "τελείων δέ ἐστιν ἡ στερεὰ τροφή, τῶν διὰ τὴν ἕξιν τὰ αἰσθητήρια γεγυμνασμένα ἐχόντων πρὸς διάκρισιν καλοῦ τε καὶ κακοῦ."
};
    const paragraphEnds = [4,10,14];
    const headings = [
    {
        "beforeVerse": 11,
        "title": "Advertência contra a apostasia",
        "sourceTitle": "Warning Against Apostasy"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[5] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[5] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[5] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[5] = unnumberedPassages;
})();
