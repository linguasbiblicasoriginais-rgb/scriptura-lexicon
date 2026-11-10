/* UBS5 — Epístola aos Hebreus, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Διὰ τοῦτο δεῖ περισσοτέρως προσέχειν ἡμᾶς τοῖς ἀκουσθεῖσιν, μήποτε παραρυῶμεν.",
    "2": "εἰ γὰρ ὁ δι᾽ ἀγγέλων λαληθεὶς λόγος ἐγένετο βέβαιος καὶ πᾶσα παράβασις καὶ παρακοὴ ἔλαβεν ἔνδικον μισθαποδοσίαν,",
    "3": "πῶς ἡμεῖς ἐκφευξόμεθα τηλικαύτης ἀμελήσαντες σωτηρίας, ἥτις ἀρχὴν λαβοῦσα λαλεῖσθαι διὰ τοῦ κυρίου ὑπὸ τῶν ἀκουσάντων εἰς ἡμᾶς ἐβεβαιώθη,",
    "4": "συνεπιμαρτυροῦντος τοῦ θεοῦ σημείοις τε καὶ τέρασιν καὶ ποικίλαις δυνάμεσιν καὶ πνεύματος ἁγίου μερισμοῖς κατὰ τὴν αὐτοῦ θέλησιν;",
    "5": "Οὐ γὰρ ἀγγέλοις ὑπέταξεν τὴν οἰκουμένην τὴν μέλλουσαν, περὶ ἧς λαλοῦμεν.",
    "6": "διεμαρτύρατο δέ πού τις λέγων,\nΤί ἐστιν ἄνθρωπος ὅτι μιμνῄσκῃ αὐτοῦ,\nἢ υἱὸς ἀνθρώπου ὅτι ἐπισκέπτῃ αὐτόν;",
    "7": "ἠλάττωσας αὐτὸν βραχύ τι παρ᾽ ἀγγέλους,\nδόξῃ καὶ τιμῇ ἐστεφάνωσας αὐτόν,",
    "8": "πάντα ὑπέταξας ὑποκάτω τῶν ποδῶν αὐτοῦ.\nἐν τῷ γὰρ ὑποτάξαι [αὐτῷ] τὰ πάντα οὐδὲν ἀφῆκεν αὐτῷ ἀνυπότακτον. νῦν δὲ οὔπω ὁρῶμεν αὐτῷ τὰ πάντα ὑποτεταγμένα·",
    "9": "τὸν δὲ βραχύ τι παρ᾽ ἀγγέλους ἠλαττωμένον βλέπομεν Ἰησοῦν διὰ τὸ πάθημα τοῦ θανάτου δόξῃ καὶ τιμῇ ἐστεφανωμένον, ὅπως χάριτι θεοῦ ὑπὲρ παντὸς γεύσηται θανάτου.",
    "10": "Ἔπρεπεν γὰρ αὐτῷ, δι᾽ ὃν τὰ πάντα καὶ δι᾽ οὗ τὰ πάντα, πολλοὺς υἱοὺς εἰς δόξαν ἀγαγόντα τὸν ἀρχηγὸν τῆς σωτηρίας αὐτῶν διὰ παθημάτων τελειῶσαι.",
    "11": "ὅ τε γὰρ ἁγιάζων καὶ οἱ ἁγιαζόμενοι ἐξ ἑνὸς πάντες· δι᾽ ἣν αἰτίαν οὐκ ἐπαισχύνεται ἀδελφοὺς αὐτοὺς καλεῖν",
    "12": "λέγων,\nἈπαγγελῶ τὸ ὄνομά σου τοῖς ἀδελφοῖς μου,\nἐν μέσῳ ἐκκλησίας ὑμνήσω σε,",
    "13": "καὶ πάλιν,\nἘγὼ ἔσομαι πεποιθὼς ἐπ᾽ αὐτῷ,\nκαὶ πάλιν,\nἸδοὺ ἐγὼ καὶ τὰ παιδία ἅ μοι ἔδωκεν ὁ θεός.",
    "14": "ἐπεὶ οὖν τὰ παιδία κεκοινώνηκεν αἵματος καὶ σαρκός, καὶ αὐτὸς παραπλησίως μετέσχεν τῶν αὐτῶν, ἵνα διὰ τοῦ θανάτου καταργήσῃ τὸν τὸ κράτος ἔχοντα τοῦ θανάτου, τοῦτ᾽ ἔστιν τὸν διάβολον,",
    "15": "καὶ ἀπαλλάξῃ τούτους, ὅσοι φόβῳ θανάτου διὰ παντὸς τοῦ ζῆν ἔνοχοι ἦσαν δουλείας.",
    "16": "οὐ γὰρ δήπου ἀγγέλων ἐπιλαμβάνεται ἀλλὰ σπέρματος Ἀβραὰμ ἐπιλαμβάνεται.",
    "17": "ὅθεν ὤφειλεν κατὰ πάντα τοῖς ἀδελφοῖς ὁμοιωθῆναι, ἵνα ἐλεήμων γένηται καὶ πιστὸς ἀρχιερεὺς τὰ πρὸς τὸν θεὸν εἰς τὸ ἱλάσκεσθαι τὰς ἁμαρτίας τοῦ λαοῦ.",
    "18": "ἐν ᾧ γὰρ πέπονθεν αὐτὸς πειρασθείς, δύναται τοῖς πειραζομένοις βοηθῆσαι."
};
    const paragraphEnds = [4,9,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A grande salvação",
        "sourceTitle": "The Great Salvation"
    },
    {
        "beforeVerse": 5,
        "title": "O pioneiro da salvação",
        "sourceTitle": "The Pioneer of Salvation"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[2] = unnumberedPassages;
})();
