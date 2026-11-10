/* UBS5 — Segunda Epístola de Paulo aos Coríntios 8.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Γνωρίζομεν δὲ ὑμῖν, ἀδελφοί, τὴν χάριν τοῦ θεοῦ τὴν δεδομένην ἐν ταῖς ἐκκλησίαις τῆς Μακεδονίας,",
    "2": "ὅτι ἐν πολλῇ δοκιμῇ θλίψεως ἡ περισσεία τῆς χαρᾶς αὐτῶν καὶ ἡ κατὰ βάθους πτωχεία αὐτῶν ἐπερίσσευσεν εἰς τὸ πλοῦτος τῆς ἁπλότητος αὐτῶν·",
    "3": "ὅτι κατὰ δύναμιν, μαρτυρῶ, καὶ παρὰ δύναμιν, αὐθαίρετοι",
    "4": "μετὰ πολλῆς παρακλήσεως δεόμενοι ἡμῶν τὴν χάριν καὶ τὴν κοινωνίαν τῆς διακονίας τῆς εἰς τοὺς ἁγίους,",
    "5": "καὶ οὐ καθὼς ἠλπίσαμεν ἀλλ᾽ ἑαυτοὺς ἔδωκαν πρῶτον τῷ κυρίῳ καὶ ἡμῖν διὰ θελήματος θεοῦ",
    "6": "εἰς τὸ παρακαλέσαι ἡμᾶς Τίτον, ἵνα καθὼς προενήρξατο οὕτως καὶ ἐπιτελέσῃ εἰς ὑμᾶς καὶ τὴν χάριν ταύτην.",
    "7": "ἀλλ᾽ ὥσπερ ἐν παντὶ περισσεύετε, πίστει καὶ λόγῳ καὶ γνώσει καὶ πάσῃ σπουδῇ καὶ τῇ ἐξ ἡμῶν ἐν ὑμῖν ἀγάπῃ, ἵνα καὶ ἐν ταύτῃ τῇ χάριτι περισσεύητε.",
    "8": "Οὐ κατ᾽ ἐπιταγὴν λέγω ἀλλὰ διὰ τῆς ἑτέρων σπουδῆς καὶ τὸ τῆς ὑμετέρας ἀγάπης γνήσιον δοκιμάζων·",
    "9": "γινώσκετε γὰρ τὴν χάριν τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ, ὅτι δι᾽ ὑμᾶς ἐπτώχευσεν πλούσιος ὤν, ἵνα ὑμεῖς τῇ ἐκείνου πτωχείᾳ πλουτήσητε.",
    "10": "καὶ γνώμην ἐν τούτῳ δίδωμι· τοῦτο γὰρ ὑμῖν συμφέρει, οἵτινες οὐ μόνον τὸ ποιῆσαι ἀλλὰ καὶ τὸ θέλειν προενήρξασθε ἀπὸ πέρυσι·",
    "11": "νυνὶ δὲ καὶ τὸ ποιῆσαι ἐπιτελέσατε, ὅπως καθάπερ ἡ προθυμία τοῦ θέλειν, οὕτως καὶ τὸ ἐπιτελέσαι ἐκ τοῦ ἔχειν.",
    "12": "εἰ γὰρ ἡ προθυμία πρόκειται, καθὸ ἐὰν ἔχῃ εὐπρόσδεκτος, οὐ καθὸ οὐκ ἔχει.",
    "13": "οὐ γὰρ ἵνα ἄλλοις ἄνεσις, ὑμῖν θλῖψις, ἀλλ᾽ ἐξ ἰσότητος·",
    "14": "ἐν τῷ νῦν καιρῷ τὸ ὑμῶν περίσσευμα εἰς τὸ ἐκείνων ὑστέρημα, ἵνα καὶ τὸ ἐκείνων περίσσευμα γένηται εἰς τὸ ὑμῶν ὑστέρημα, ὅπως γένηται ἰσότης,",
    "15": "καθὼς γέγραπται,\nὉ τὸ πολὺ οὐκ ἐπλεόνασεν,\nκαὶ ὁ τὸ ὀλίγον οὐκ ἠλαττόνησεν.",
    "16": "Χάρις δὲ τῷ θεῷ τῷ δόντι τὴν αὐτὴν σπουδὴν ὑπὲρ ὑμῶν ἐν τῇ καρδίᾳ Τίτου,",
    "17": "ὅτι τὴν μὲν παράκλησιν ἐδέξατο, σπουδαιότερος δὲ ὑπάρχων αὐθαίρετος ἐξῆλθεν πρὸς ὑμᾶς.",
    "18": "συνεπέμψαμεν δὲ μετ᾽ αὐτοῦ τὸν ἀδελφὸν οὗ ὁ ἔπαινος ἐν τῷ εὐαγγελίῳ διὰ πασῶν τῶν ἐκκλησιῶν,",
    "19": "οὐ μόνον δέ, ἀλλὰ καὶ χειροτονηθεὶς ὑπὸ τῶν ἐκκλησιῶν συνέκδημος ἡμῶν σὺν τῇ χάριτι ταύτῃ τῇ διακονουμένῃ ὑφ᾽ ἡμῶν πρὸς τὴν [αὐτοῦ] τοῦ κυρίου δόξαν καὶ προθυμίαν ἡμῶν,",
    "20": "στελλόμενοι τοῦτο, μή τις ἡμᾶς μωμήσηται ἐν τῇ ἁδρότητι ταύτῃ τῇ διακονουμένῃ ὑφ᾽ ἡμῶν·",
    "21": "προνοοῦμεν γὰρ καλὰ οὐ μόνον ἐνώπιον κυρίου ἀλλὰ καὶ ἐνώπιον ἀνθρώπων.",
    "22": "συνεπέμψαμεν δὲ αὐτοῖς τὸν ἀδελφὸν ἡμῶν ὃν ἐδοκιμάσαμεν ἐν πολλοῖς πολλάκις σπουδαῖον ὄντα, νυνὶ δὲ πολὺ σπουδαιότερον πεποιθήσει πολλῇ τῇ εἰς ὑμᾶς.",
    "23": "εἴτε ὑπὲρ Τίτου, κοινωνὸς ἐμὸς καὶ εἰς ὑμᾶς συνεργός· εἴτε ἀδελφοὶ ἡμῶν, ἀπόστολοι ἐκκλησιῶν, δόξα Χριστοῦ.",
    "24": "τὴν οὖν ἔνδειξιν τῆς ἀγάπης ὑμῶν καὶ ἡμῶν καυχήσεως ὑπὲρ ὑμῶν εἰς αὐτοὺς ἐνδεικνύμενοι εἰς πρόσωπον τῶν ἐκκλησιῶν."
};
    const paragraphEnds = [7,15,24];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A generosidade nas contribuições",
        "sourceTitle": "Liberal Giving"
    },
    {
        "beforeVerse": 16,
        "title": "Tito e seus companheiros",
        "sourceTitle": "Titus and His Companions"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][8] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][8] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][8] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][8] = unnumberedPassages;
})();
