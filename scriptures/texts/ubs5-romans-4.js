/* UBS5 — Romanos 4. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τί οὖν ἐροῦμεν εὑρηκέναι Ἀβραὰμ τὸν προπάτορα ἡμῶν κατὰ σάρκα;",
    "2": "εἰ γὰρ Ἀβραὰμ ἐξ ἔργων ἐδικαιώθη, ἔχει καύχημα, ἀλλ᾽ οὐ πρὸς θεόν.",
    "3": "τί γὰρ ἡ γραφὴ λέγει; Ἐπίστευσεν δὲ Ἀβραὰμ τῷ θεῷ καὶ ἐλογίσθη αὐτῷ εἰς δικαιοσύνην.",
    "4": "τῷ δὲ ἐργαζομένῳ ὁ μισθὸς οὐ λογίζεται κατὰ χάριν ἀλλὰ κατὰ ὀφείλημα,",
    "5": "τῷ δὲ μὴ ἐργαζομένῳ πιστεύοντι δὲ ἐπὶ τὸν δικαιοῦντα τὸν ἀσεβῆ λογίζεται ἡ πίστις αὐτοῦ εἰς δικαιοσύνην·",
    "6": "καθάπερ καὶ Δαυὶδ λέγει τὸν μακαρισμὸν τοῦ ἀνθρώπου ᾧ ὁ θεὸς λογίζεται δικαιοσύνην χωρὶς ἔργων,",
    "7": "Μακάριοι ὧν ἀφέθησαν αἱ ἀνομίαι\nκαὶ ὧν ἐπεκαλύφθησαν αἱ ἁμαρτίαι·",
    "8": "μακάριος ἀνὴρ οὗ οὐ μὴ λογίσηται κύριος ἁμαρτίαν.",
    "9": "ὁ μακαρισμὸς οὖν οὗτος ἐπὶ τὴν περιτομὴν ἢ καὶ ἐπὶ τὴν ἀκροβυστίαν; λέγομεν γάρ, Ἐλογίσθη τῷ Ἀβραὰμ ἡ πίστις εἰς δικαιοσύνην.",
    "10": "πῶς οὖν ἐλογίσθη; ἐν περιτομῇ ὄντι ἢ ἐν ἀκροβυστίᾳ; οὐκ ἐν περιτομῇ ἀλλ᾽ ἐν ἀκροβυστίᾳ·",
    "11": "καὶ σημεῖον ἔλαβεν περιτομῆς σφραγῖδα τῆς δικαιοσύνης τῆς πίστεως τῆς ἐν τῇ ἀκροβυστίᾳ, εἰς τὸ εἶναι αὐτὸν πατέρα πάντων τῶν πιστευόντων δι᾽ ἀκροβυστίας, εἰς τὸ λογισθῆναι [καὶ] αὐτοῖς [τὴν] δικαιοσύνην,",
    "12": "καὶ πατέρα περιτομῆς τοῖς οὐκ ἐκ περιτομῆς μόνον ἀλλὰ καὶ τοῖς στοιχοῦσιν τοῖς ἴχνεσιν τῆς ἐν ἀκροβυστίᾳ πίστεως τοῦ πατρὸς ἡμῶν Ἀβραάμ.",
    "13": "Οὐ γὰρ διὰ νόμου ἡ ἐπαγγελία τῷ Ἀβραὰμ ἢ τῷ σπέρματι αὐτοῦ, τὸ κληρονόμον αὐτὸν εἶναι κόσμου, ἀλλὰ διὰ δικαιοσύνης πίστεως.",
    "14": "εἰ γὰρ οἱ ἐκ νόμου κληρονόμοι, κεκένωται ἡ πίστις καὶ κατήργηται ἡ ἐπαγγελία·",
    "15": "ὁ γὰρ νόμος ὀργὴν κατεργάζεται· οὗ δὲ οὐκ ἔστιν νόμος οὐδὲ παράβασις.",
    "16": "διὰ τοῦτο ἐκ πίστεως, ἵνα κατὰ χάριν, εἰς τὸ εἶναι βεβαίαν τὴν ἐπαγγελίαν παντὶ τῷ σπέρματι, οὐ τῷ ἐκ τοῦ νόμου μόνον ἀλλὰ καὶ τῷ ἐκ πίστεως Ἀβραάμ, ὅς ἐστιν πατὴρ πάντων ἡμῶν,",
    "17": "καθὼς γέγραπται ὅτι Πατέρα πολλῶν ἐθνῶν τέθεικά σε, κατέναντι οὗ ἐπίστευσεν θεοῦ τοῦ ζῳοποιοῦντος τοὺς νεκροὺς καὶ καλοῦντος τὰ μὴ ὄντα ὡς ὄντα·",
    "18": "ὃς παρ᾽ ἐλπίδα ἐπ᾽ ἐλπίδι ἐπίστευσεν εἰς τὸ γενέσθαι αὐτὸν πατέρα πολλῶν ἐθνῶν κατὰ τὸ εἰρημένον· Οὕτως ἔσται τὸ σπέρμα σου,",
    "19": "καὶ μὴ ἀσθενήσας τῇ πίστει κατενόησεν τὸ ἑαυτοῦ σῶμα [ἤδη] νενεκρωμένον, ἑκατονταετής που ὑπάρχων, καὶ τὴν νέκρωσιν τῆς μήτρας Σάρρας·",
    "20": "εἰς δὲ τὴν ἐπαγγελίαν τοῦ θεοῦ οὐ διεκρίθη τῇ ἀπιστίᾳ ἀλλ᾽ ἐνεδυναμώθη τῇ πίστει, δοὺς δόξαν τῷ θεῷ",
    "21": "καὶ πληροφορηθεὶς ὅτι ὃ ἐπήγγελται δυνατός ἐστιν καὶ ποιῆσαι.",
    "22": "διὸ [καὶ] ἐλογίσθη αὐτῷ εἰς δικαιοσύνην.",
    "23": "Οὐκ ἐγράφη δὲ δι᾽ αὐτὸν μόνον ὅτι ἐλογίσθη αὐτῷ",
    "24": "ἀλλὰ καὶ δι᾽ ἡμᾶς, οἷς μέλλει λογίζεσθαι, τοῖς πιστεύουσιν ἐπὶ τὸν ἐγείραντα Ἰησοῦν τὸν κύριον ἡμῶν ἐκ νεκρῶν,",
    "25": "ὃς παρεδόθη διὰ τὰ παραπτώματα ἡμῶν καὶ ἠγέρθη διὰ τὴν δικαίωσιν ἡμῶν."
};
    const paragraphEnds = [6,7,8,12,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O exemplo de Abraão",
        "sourceTitle": "The Example of Abraham"
    },
    {
        "beforeVerse": 13,
        "title": "A promessa cumprida mediante a fé",
        "sourceTitle": "The Promise Realized through Faith"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[4] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[4] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[4] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[4] = unnumberedPassages;
})();
