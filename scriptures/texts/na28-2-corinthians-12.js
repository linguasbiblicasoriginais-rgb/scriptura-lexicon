/* NA28 — Segunda Epístola aos Coríntios, capítulo 12.
 * Fonte: transcrição grega integral fornecida pelo mantenedor em 06/11/2026.
 * Sem cotejo independente com a NA28 impressa ou seu aparato crítico.
 * Conservados sinais, acentuação, paragrafação e linhas citacionais; não inferidos itálicos ou recuos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καυχᾶσθαι δεῖ, οὐ συμφέρον μέν, ἐλεύσομαι δὲ εἰς ὀπτασίας καὶ ἀποκαλύψεις κυρίου.",
    "2": "οἶδα ἄνθρωπον ἐν Χριστῷ πρὸ ἐτῶν δεκατεσσάρων, εἴτε ἐν σώματι οὐκ οἶδα, εἴτε ἐκτὸς τοῦ σώματος οὐκ οἶδα, ὁ θεὸς οἶδεν, ἁρπαγέντα τὸν τοιοῦτον ἕως τρίτου οὐρανοῦ.",
    "3": "καὶ οἶδα τὸν τοιοῦτον ἄνθρωπον, εἴτε ἐν σώματι εἴτε χωρὶς τοῦ σώματος οὐκ οἶδα, ὁ θεὸς οἶδεν,",
    "4": "ὅτι ἡρπάγη εἰς τὸν παράδεισον καὶ ἤκουσεν ἄρρητα ῥήματα ἃ οὐκ ἐξὸν ἀνθρώπῳ λαλῆσαι.",
    "5": "ὑπὲρ τοῦ τοιούτου καυχήσομαι, ὑπὲρ δὲ ἐμαυτοῦ οὐ καυχήσομαι εἰ μὴ ἐν ταῖς ἀσθενείαις.",
    "6": "Ἐὰν γὰρ θελήσω καυχήσασθαι, οὐκ ἔσομαι ἄφρων, ἀλήθειαν γὰρ ἐρῶ· φείδομαι δέ, μή τις εἰς ἐμὲ λογίσηται ὑπὲρ ὃ βλέπει με ἢ ἀκούει [τι] ἐξ ἐμοῦ",
    "7": "καὶ τῇ ὑπερβολῇ τῶν ἀποκαλύψεων. διὸ ἵνα μὴ ὑπεραίρωμαι, ἐδόθη μοι σκόλοψ τῇ σαρκί, ἄγγελος σατανᾶ, ἵνα με κολαφίζῃ, ἵνα μὴ ὑπεραίρωμαι.",
    "8": "ὑπὲρ τούτου τρὶς τὸν κύριον παρεκάλεσα ἵνα ἀποστῇ ἀπ’ ἐμοῦ.",
    "9": "καὶ εἴρηκέν μοι· ἀρκεῖ σοι ἡ χάρις μου, ἡ γὰρ δύναμις ἐν ἀσθενείᾳ τελεῖται. Ἥδιστα οὖν μᾶλλον καυχήσομαι ἐν ταῖς ἀσθενείαις μου, ἵνα ἐπισκηνώσῃ ἐπ’ ἐμὲ ἡ δύναμις τοῦ Χριστοῦ.",
    "10": "διὸ εὐδοκῶ ἐν ἀσθενείαις, ἐν ὕβρεσιν, ἐν ἀνάγκαις, ἐν διωγμοῖς καὶ στενοχωρίαις, ὑπὲρ Χριστοῦ· ὅταν γὰρ ἀσθενῶ, τότε δυνατός εἰμι.",
    "11": "Γέγονα ἄφρων, ὑμεῖς με ἠναγκάσατε. ἐγὼ γὰρ ὤφειλον ὑφ’ ὑμῶν συνίστασθαι· οὐδὲν γὰρ ὑστέρησα τῶν ὑπερλίαν ἀποστόλων εἰ καὶ οὐδέν εἰμι.",
    "12": "τὰ μὲν σημεῖα τοῦ ἀποστόλου κατειργάσθη ἐν ὑμῖν ἐν πάσῃ ὑπομονῇ, σημείοις τε καὶ τέρασιν καὶ δυνάμεσιν.",
    "13": "τί γάρ ἐστιν ὃ ἡσσώθητε ὑπὲρ τὰς λοιπὰς ἐκκλησίας, εἰ μὴ ὅτι αὐτὸς ἐγὼ οὐ κατενάρκησα ὑμῶν; χαρίσασθέ μοι τὴν ἀδικίαν ταύτην.",
    "14": "Ἰδοὺ τρίτον τοῦτο ἑτοίμως ἔχω ἐλθεῖν πρὸς ὑμᾶς, καὶ οὐ καταναρκήσω· οὐ γὰρ ζητῶ τὰ ὑμῶν ἀλλ’ ὑμᾶς. οὐ γὰρ ὀφείλει τὰ τέκνα τοῖς γονεῦσιν θησαυρίζειν ἀλλ’ οἱ γονεῖς τοῖς τέκνοις.",
    "15": "ἐγὼ δὲ ἥδιστα δαπανήσω καὶ ἐκδαπανηθήσομαι ὑπὲρ τῶν ψυχῶν ὑμῶν. εἰ περισσοτέρως ὑμᾶς ἀγαπῶ[ν], ἧσσον ἀγαπῶμαι;",
    "16": "Ἔστω δέ, ἐγὼ οὐ κατεβάρησα ὑμᾶς· ἀλλ’ ὑπάρχων πανοῦργος δόλῳ ὑμᾶς ἔλαβον.",
    "17": "μή τινα ὧν ἀπέσταλκα πρὸς ὑμᾶς, δι’ αὐτοῦ ἐπλεονέκτησα ὑμᾶς;",
    "18": "παρεκάλεσα Τίτον καὶ συναπέστειλα τὸν ἀδελφόν· μήτι ἐπλεονέκτησεν ὑμᾶς Τίτος; οὐ τῷ αὐτῷ πνεύματι περιεπατήσαμεν; οὐ τοῖς αὐτοῖς ἴχνεσιν;",
    "19": "Πάλαι δοκεῖτε ὅτι ὑμῖν ἀπολογούμεθα. κατέναντι θεοῦ ἐν Χριστῷ λαλοῦμεν· τὰ δὲ πάντα, ἀγαπητοί, ὑπὲρ τῆς ὑμῶν οἰκοδομῆς.",
    "20": "φοβοῦμαι γὰρ μή πως ἐλθὼν οὐχ οἵους θέλω εὕρω ὑμᾶς κἀγὼ εὑρεθῶ ὑμῖν οἷον οὐ θέλετε· μή πως ἔρις, ζῆλος, θυμοί, ἐριθεῖαι, καταλαλιαί, ψιθυρισμοί, φυσιώσεις, ἀκαταστασίαι·",
    "21": "μὴ πάλιν ἐλθόντος μου ταπεινώσῃ με ὁ θεός μου πρὸς ὑμᾶς καὶ πενθήσω πολλοὺς τῶν προημαρτηκότων καὶ μὴ μετανοησάντων ἐπὶ τῇ ἀκαθαρσίᾳ καὶ πορνείᾳ καὶ ἀσελγείᾳ ᾗ ἔπραξαν."
};
    const paragraphEnds = [10,13,18,21];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.NA28 = window.ScripturaScriptureTexts.NA28 || {};
    window.ScripturaScriptureTexts.NA28["2CO"] = window.ScripturaScriptureTexts.NA28["2CO"] || {};
    window.ScripturaScriptureTexts.NA28["2CO"][12] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.NA28 = window.ScripturaScriptureParagraphBreaks.NA28 || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"] = window.ScripturaScriptureParagraphBreaks.NA28["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"][12] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.NA28 = window.ScripturaScriptureHeadings.NA28 || {};
    window.ScripturaScriptureHeadings.NA28["2CO"] = window.ScripturaScriptureHeadings.NA28["2CO"] || {};
    window.ScripturaScriptureHeadings.NA28["2CO"][12] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.NA28 = window.ScripturaScriptureUnnumberedPassages.NA28 || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] = window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"][12] = unnumberedPassages;
})();
