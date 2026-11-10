/* UBS5 — Romanos 7. Texto grego fornecido pelo usuário em 09/11/2026.
 * Referência UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto grego, títulos traduzidos e divisões editoriais conservados em campos distintos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἢ ἀγνοεῖτε, ἀδελφοί, γινώσκουσιν γὰρ νόμον λαλῶ, ὅτι ὁ νόμος κυριεύει τοῦ ἀνθρώπου ἐφ᾽ ὅσον χρόνον ζῇ;",
    "2": "ἡ γὰρ ὕπανδρος γυνὴ τῷ ζῶντι ἀνδρὶ δέδεται νόμῳ· ἐὰν δὲ ἀποθάνῃ ὁ ἀνήρ, κατήργηται ἀπὸ τοῦ νόμου τοῦ ἀνδρός.",
    "3": "ἄρα οὖν ζῶντος τοῦ ἀνδρὸς μοιχαλὶς χρηματίσει ἐὰν γένηται ἀνδρὶ ἑτέρῳ· ἐὰν δὲ ἀποθάνῃ ὁ ἀνήρ, ἐλευθέρα ἐστὶν ἀπὸ τοῦ νόμου, τοῦ μὴ εἶναι αὐτὴν μοιχαλίδα γενομένην ἀνδρὶ ἑτέρῳ.",
    "4": "ὥστε, ἀδελφοί μου, καὶ ὑμεῖς ἐθανατώθητε τῷ νόμῳ διὰ τοῦ σώματος τοῦ Χριστοῦ, εἰς τὸ γενέσθαι ὑμᾶς ἑτέρῳ, τῷ ἐκ νεκρῶν ἐγερθέντι, ἵνα καρποφορήσωμεν τῷ θεῷ.",
    "5": "ὅτε γὰρ ἦμεν ἐν τῇ σαρκί, τὰ παθήματα τῶν ἁμαρτιῶν τὰ διὰ τοῦ νόμου ἐνηργεῖτο ἐν τοῖς μέλεσιν ἡμῶν, εἰς τὸ καρποφορῆσαι τῷ θανάτῳ·",
    "6": "νυνὶ δὲ κατηργήθημεν ἀπὸ τοῦ νόμου ἀποθανόντες ἐν ᾧ κατειχόμεθα, ὥστε δουλεύειν ἡμᾶς ἐν καινότητι πνεύματος καὶ οὐ παλαιότητι γράμματος.",
    "7": "Τί οὖν ἐροῦμεν; ὁ νόμος ἁμαρτία; μὴ γένοιτο· ἀλλὰ τὴν ἁμαρτίαν οὐκ ἔγνων εἰ μὴ διὰ νόμου· τήν τε γὰρ ἐπιθυμίαν οὐκ ᾔδειν εἰ μὴ ὁ νόμος ἔλεγεν, Οὐκ ἐπιθυμήσεις.",
    "8": "ἀφορμὴν δὲ λαβοῦσα ἡ ἁμαρτία διὰ τῆς ἐντολῆς κατειργάσατο ἐν ἐμοὶ πᾶσαν ἐπιθυμίαν· χωρὶς γὰρ νόμου ἁμαρτία νεκρά.",
    "9": "ἐγὼ δὲ ἔζων χωρὶς νόμου ποτέ, ἐλθούσης δὲ τῆς ἐντολῆς ἡ ἁμαρτία ἀνέζησεν,",
    "10": "ἐγὼ δὲ ἀπέθανον καὶ εὑρέθη μοι ἡ ἐντολὴ ἡ εἰς ζωήν, αὕτη εἰς θάνατον·",
    "11": "ἡ γὰρ ἁμαρτία ἀφορμὴν λαβοῦσα διὰ τῆς ἐντολῆς ἐξηπάτησέν με καὶ δι᾽ αὐτῆς ἀπέκτεινεν.",
    "12": "ὥστε ὁ μὲν νόμος ἅγιος καὶ ἡ ἐντολὴ ἁγία καὶ δικαία καὶ ἀγαθή.",
    "13": "Τὸ οὖν ἀγαθὸν ἐμοὶ ἐγένετο θάνατος; μὴ γένοιτο· ἀλλ᾽ ἡ ἁμαρτία, ἵνα φανῇ ἁμαρτία, διὰ τοῦ ἀγαθοῦ μοι κατεργαζομένη θάνατον, ἵνα γένηται καθ᾽ ὑπερβολὴν ἁμαρτωλὸς ἡ ἁμαρτία διὰ τῆς ἐντολῆς.",
    "14": "οἴδαμεν γὰρ ὅτι ὁ νόμος πνευματικός ἐστιν, ἐγὼ δὲ σάρκινός εἰμι πεπραμένος ὑπὸ τὴν ἁμαρτίαν.",
    "15": "ὃ γὰρ κατεργάζομαι οὐ γινώσκω· οὐ γὰρ ὃ θέλω τοῦτο πράσσω, ἀλλ᾽ ὃ μισῶ τοῦτο ποιῶ.",
    "16": "εἰ δὲ ὃ οὐ θέλω τοῦτο ποιῶ, σύμφημι τῷ νόμῳ ὅτι καλός.",
    "17": "νυνὶ δὲ οὐκέτι ἐγὼ κατεργάζομαι αὐτὸ ἀλλ᾽ ἡ οἰκοῦσα ἐν ἐμοὶ ἁμαρτία.",
    "18": "οἶδα γὰρ ὅτι οὐκ οἰκεῖ ἐν ἐμοί, τοῦτ᾽ ἔστιν ἐν τῇ σαρκί μου, ἀγαθόν· τὸ γὰρ θέλειν παράκειταί μοι, τὸ δὲ κατεργάζεσθαι τὸ καλὸν οὔ·",
    "19": "οὐ γὰρ ὃ θέλω ποιῶ ἀγαθόν, ἀλλ᾽ ὃ οὐ θέλω κακὸν τοῦτο πράσσω.",
    "20": "εἰ δὲ ὃ οὐ θέλω [ἐγὼ] τοῦτο ποιῶ, οὐκέτι ἐγὼ κατεργάζομαι αὐτὸ ἀλλ᾽ ἡ οἰκοῦσα ἐν ἐμοὶ ἁμαρτία.",
    "21": "Εὑρίσκω ἄρα τὸν νόμον, τῷ θέλοντι ἐμοὶ ποιεῖν τὸ καλόν, ὅτι ἐμοὶ τὸ κακὸν παράκειται·",
    "22": "συνήδομαι γὰρ τῷ νόμῳ τοῦ θεοῦ κατὰ τὸν ἔσω ἄνθρωπον,",
    "23": "βλέπω δὲ ἕτερον νόμον ἐν τοῖς μέλεσίν μου ἀντιστρατευόμενον τῷ νόμῳ τοῦ νοός μου καὶ αἰχμαλωτίζοντά με ἐν τῷ νόμῳ τῆς ἁμαρτίας τῷ ὄντι ἐν τοῖς μέλεσίν μου.",
    "24": "ταλαίπωρος ἐγὼ ἄνθρωπος· τίς με ῥύσεται ἐκ τοῦ σώματος τοῦ θανάτου τούτου;",
    "25": "χάρις δὲ τῷ θεῷ διὰ Ἰησοῦ Χριστοῦ τοῦ κυρίου ἡμῶν. ἄρα οὖν αὐτὸς ἐγὼ τῷ μὲν νοῒ δουλεύω νόμῳ θεοῦ τῇ δὲ σαρκὶ νόμῳ ἁμαρτίας."
};
    const paragraphEnds = [6,12,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Uma analogia com o casamento",
        "sourceTitle": "An Analogy from Marriage"
    },
    {
        "beforeVerse": 7,
        "title": "O problema do pecado que habita em nós",
        "sourceTitle": "The Problem of Indwelling Sin"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ROM = window.ScripturaScriptureTexts.UBS5.ROM || {};
    window.ScripturaScriptureTexts.UBS5.ROM[7] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM = window.ScripturaScriptureParagraphBreaks.UBS5.ROM || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ROM[7] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ROM = window.ScripturaScriptureHeadings.UBS5.ROM || {};
    window.ScripturaScriptureHeadings.UBS5.ROM[7] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM = window.ScripturaScriptureUnnumberedPassages.UBS5.ROM || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ROM[7] = unnumberedPassages;
})();
