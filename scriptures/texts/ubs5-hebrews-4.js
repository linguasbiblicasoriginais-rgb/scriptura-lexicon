/* UBS5 — Epístola aos Hebreus, capítulo 4.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Φοβηθῶμεν οὖν, μήποτε καταλειπομένης ἐπαγγελίας εἰσελθεῖν εἰς τὴν κατάπαυσιν αὐτοῦ δοκῇ τις ἐξ ὑμῶν ὑστερηκέναι.",
    "2": "καὶ γάρ ἐσμεν εὐηγγελισμένοι καθάπερ κἀκεῖνοι· ἀλλ᾽ οὐκ ὠφέλησεν ὁ λόγος τῆς ἀκοῆς ἐκείνους μὴ συγκεκερασμένους τῇ πίστει τοῖς ἀκούσασιν.",
    "3": "εἰσερχόμεθα γὰρ εἰς [τὴν] κατάπαυσιν οἱ πιστεύσαντες, καθὼς εἴρηκεν,\nὩς ὤμοσα ἐν τῇ ὀργῇ μου,\nΕἰ εἰσελεύσονται εἰς τὴν κατάπαυσίν μου,\nκαίτοι τῶν ἔργων ἀπὸ καταβολῆς κόσμου γενηθέντων.",
    "4": "εἴρηκεν γάρ που περὶ τῆς ἑβδόμης οὕτως, Καὶ κατέπαυσεν ὁ θεὸς ἐν τῇ ἡμέρᾳ τῇ ἑβδόμῃ ἀπὸ πάντων τῶν ἔργων αὐτοῦ,",
    "5": "καὶ ἐν τούτῳ πάλιν, Εἰ εἰσελεύσονται εἰς τὴν κατάπαυσίν μου.",
    "6": "ἐπεὶ οὖν ἀπολείπεται τινὰς εἰσελθεῖν εἰς αὐτήν, καὶ οἱ πρότερον εὐαγγελισθέντες οὐκ εἰσῆλθον δι᾽ ἀπείθειαν,",
    "7": "πάλιν τινὰ ὁρίζει ἡμέραν, Σήμερον, ἐν Δαυὶδ λέγων μετὰ τοσοῦτον χρόνον, καθὼς προείρηται,\nΣήμερον ἐὰν τῆς φωνῆς αὐτοῦ ἀκούσητε,\nμὴ σκληρύνητε τὰς καρδίας ὑμῶν.",
    "8": "εἰ γὰρ αὐτοὺς Ἰησοῦς κατέπαυσεν, οὐκ ἂν περὶ ἄλλης ἐλάλει μετὰ ταῦτα ἡμέρας.",
    "9": "ἄρα ἀπολείπεται σαββατισμὸς τῷ λαῷ τοῦ θεοῦ.",
    "10": "ὁ γὰρ εἰσελθὼν εἰς τὴν κατάπαυσιν αὐτοῦ καὶ αὐτὸς κατέπαυσεν ἀπὸ τῶν ἔργων αὐτοῦ ὥσπερ ἀπὸ τῶν ἰδίων ὁ θεός.",
    "11": "σπουδάσωμεν οὖν εἰσελθεῖν εἰς ἐκείνην τὴν κατάπαυσιν, ἵνα μὴ ἐν τῷ αὐτῷ τις ὑποδείγματι πέσῃ τῆς ἀπειθείας.",
    "12": "Ζῶν γὰρ ὁ λόγος τοῦ θεοῦ καὶ ἐνεργὴς καὶ τομώτερος ὑπὲρ πᾶσαν μάχαιραν δίστομον καὶ διϊκνούμενος ἄχρι μερισμοῦ ψυχῆς καὶ πνεύματος, ἁρμῶν τε καὶ μυελῶν, καὶ κριτικὸς ἐνθυμήσεων καὶ ἐννοιῶν καρδίας·",
    "13": "καὶ οὐκ ἔστιν κτίσις ἀφανὴς ἐνώπιον αὐτοῦ, πάντα δὲ γυμνὰ καὶ τετραχηλισμένα τοῖς ὀφθαλμοῖς αὐτοῦ, πρὸς ὃν ἡμῖν ὁ λόγος.",
    "14": "Ἔχοντες οὖν ἀρχιερέα μέγαν διεληλυθότα τοὺς οὐρανούς, Ἰησοῦν τὸν υἱὸν τοῦ θεοῦ, κρατῶμεν τῆς ὁμολογίας.",
    "15": "οὐ γὰρ ἔχομεν ἀρχιερέα μὴ δυνάμενον συμπαθῆσαι ταῖς ἀσθενείαις ἡμῶν, πεπειρασμένον δὲ κατὰ πάντα καθ᾽ ὁμοιότητα χωρὶς ἁμαρτίας.",
    "16": "προσερχώμεθα οὖν μετὰ παρρησίας τῷ θρόνῳ τῆς χάριτος, ἵνα λάβωμεν ἔλεος καὶ χάριν εὕρωμεν εἰς εὔκαιρον βοήθειαν."
};
    const paragraphEnds = [11,13,16];
    const headings = [
    {
        "beforeVerse": 14,
        "title": "Jesus, o grande sumo sacerdote",
        "sourceTitle": "Jesus the Great High Priest"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[4] = unnumberedPassages;
})();
