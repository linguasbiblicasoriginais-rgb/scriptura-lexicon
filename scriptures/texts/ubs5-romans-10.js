/* UBS5 — Romanos 10. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀδελφοί, ἡ μὲν εὐδοκία τῆς ἐμῆς καρδίας καὶ ἡ δέησις πρὸς τὸν θεὸν ὑπὲρ αὐτῶν εἰς σωτηρίαν.",
    "2": "μαρτυρῶ γὰρ αὐτοῖς ὅτι ζῆλον θεοῦ ἔχουσιν ἀλλ᾽ οὐ κατ᾽ ἐπίγνωσιν·",
    "3": "ἀγνοοῦντες γὰρ τὴν τοῦ θεοῦ δικαιοσύνην καὶ τὴν ἰδίαν [δικαιοσύνην] ζητοῦντες στῆσαι, τῇ δικαιοσύνῃ τοῦ θεοῦ οὐχ ὑπετάγησαν·",
    "4": "τέλος γὰρ νόμου Χριστὸς εἰς δικαιοσύνην παντὶ τῷ πιστεύοντι.",
    "5": "Μωϋσῆς γὰρ γράφει τὴν δικαιοσύνην τὴν ἐκ [τοῦ] νόμου ὅτι ὁ ποιήσας αὐτὰ ἄνθρωπος ζήσεται ἐν αὐτοῖς.",
    "6": "ἡ δὲ ἐκ πίστεως δικαιοσύνη οὕτως λέγει, Μὴ εἴπῃς ἐν τῇ καρδίᾳ σου, Τίς ἀναβήσεται εἰς τὸν οὐρανόν; τοῦτ᾽ ἔστιν Χριστὸν καταγαγεῖν·",
    "7": "ἤ, Τίς καταβήσεται εἰς τὴν ἄβυσσον; τοῦτ᾽ ἔστιν Χριστὸν ἐκ νεκρῶν ἀναγαγεῖν.",
    "8": "ἀλλὰ τί λέγει;\nἘγγύς σου τὸ ῥῆμά ἐστιν\nἐν τῷ στόματί σου καὶ ἐν τῇ καρδίᾳ σου,\nτοῦτ᾽ ἔστιν τὸ ῥῆμα τῆς πίστεως ὃ κηρύσσομεν.",
    "9": "ὅτι ἐὰν ὁμολογήσῃς ἐν τῷ στόματί σου κύριον Ἰησοῦν καὶ πιστεύσῃς ἐν τῇ καρδίᾳ σου ὅτι ὁ θεὸς αὐτὸν ἤγειρεν ἐκ νεκρῶν, σωθήσῃ·",
    "10": "καρδίᾳ γὰρ πιστεύεται εἰς δικαιοσύνην, στόματι δὲ ὁμολογεῖται εἰς σωτηρίαν.",
    "11": "λέγει γὰρ ἡ γραφή, Πᾶς ὁ πιστεύων ἐπ᾽ αὐτῷ οὐ καταισχυνθήσεται.",
    "12": "οὐ γάρ ἐστιν διαστολὴ Ἰουδαίου τε καὶ Ἕλληνος, ὁ γὰρ αὐτὸς κύριος πάντων, πλουτῶν εἰς πάντας τοὺς ἐπικαλουμένους αὐτόν·",
    "13": "Πᾶς γὰρ ὃς ἂν ἐπικαλέσηται τὸ ὄνομα κυρίου σωθήσεται.",
    "14": "Πῶς οὖν ἐπικαλέσωνται εἰς ὃν οὐκ ἐπίστευσαν; πῶς δὲ πιστεύσωσιν οὗ οὐκ ἤκουσαν; πῶς δὲ ἀκούσωσιν χωρὶς κηρύσσοντος;",
    "15": "πῶς δὲ κηρύξωσιν ἐὰν μὴ ἀποσταλῶσιν; καθὼς γέγραπται, Ὡς ὡραῖοι οἱ πόδες τῶν εὐαγγελιζομένων [τὰ] ἀγαθά.",
    "16": "Ἀλλ᾽ οὐ πάντες ὑπήκουσαν τῷ εὐαγγελίῳ. Ἠσαΐας γὰρ λέγει, Κύριε, τίς ἐπίστευσεν τῇ ἀκοῇ ἡμῶν;",
    "17": "ἄρα ἡ πίστις ἐξ ἀκοῆς, ἡ δὲ ἀκοὴ διὰ ῥήματος Χριστοῦ.",
    "18": "ἀλλὰ λέγω, μὴ οὐκ ἤκουσαν; μενοῦνγε·\nΕἰς πᾶσαν τὴν γῆν ἐξῆλθεν ὁ φθόγγος αὐτῶν\nκαὶ εἰς τὰ πέρατα τῆς οἰκουμένης τὰ ῥήματα αὐτῶν.",
    "19": "ἀλλὰ λέγω, μὴ Ἰσραὴλ οὐκ ἔγνω; πρῶτος Μωϋσῆς λέγει,\nἘγὼ παραζηλώσω ὑμᾶς ἐπ᾽ οὐκ ἔθνει,\nἐπ᾽ ἔθνει ἀσυνέτῳ παροργιῶ ὑμᾶς.",
    "20": "Ἠσαΐας δὲ ἀποτολμᾷ καὶ λέγει,\nΕὑρέθην [ἐν] τοῖς ἐμὲ μὴ ζητοῦσιν,\nἐμφανὴς ἐγενόμην τοῖς ἐμὲ μὴ ἐπερωτῶσιν.",
    "21": "πρὸς δὲ τὸν Ἰσραὴλ λέγει, Ὅλην τὴν ἡμέραν ἐξεπέτασα τὰς χεῖράς μου πρὸς λαὸν ἀπειθοῦντα καὶ ἀντιλέγοντα."
};
    const paragraphEnds = [4,13,18,19,20,21];
    const headings = [
    {
        "beforeVerse": 5,
        "title": "A salvação para todos",
        "sourceTitle": "Salvation for All"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[10] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[10] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[10] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[10] = unnumberedPassages;
})();
