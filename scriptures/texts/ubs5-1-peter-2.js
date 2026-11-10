/* UBS5 — Primeira Epístola de Pedro, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações mantidas nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀποθέμενοι οὖν πᾶσαν κακίαν καὶ πάντα δόλον καὶ ὑποκρίσεις καὶ φθόνους καὶ πάσας καταλαλιὰς",
    "2": "ὡς ἀρτιγέννητα βρέφη τὸ λογικὸν ἄδολον γάλα ἐπιποθήσατε, ἵνα ἐν αὐτῷ αὐξηθῆτε εἰς σωτηρίαν,",
    "3": "εἰ ἐγεύσασθε ὅτι χρηστὸς ὁ κύριος.",
    "4": "πρὸς ὃν προσερχόμενοι λίθον ζῶντα ὑπὸ ἀνθρώπων μὲν ἀποδεδοκιμασμένον, παρὰ δὲ θεῷ ἐκλεκτὸν ἔντιμον,",
    "5": "καὶ αὐτοὶ ὡς λίθοι ζῶντες οἰκοδομεῖσθε οἶκος πνευματικὸς εἰς ἱεράτευμα ἅγιον ἀνενέγκαι πνευματικὰς θυσίας εὐπροσδέκτους θεῷ διὰ Ἰησοῦ Χριστοῦ.",
    "6": "διότι περιέχει ἐν γραφῇ,\nἸδοὺ τίθημι ἐν Σιὼν λίθον\nἀκρογωνιαῖον ἐκλεκτὸν ἔντιμον,\nκαὶ ὁ πιστεύων ἐπ᾽ αὐτῷ οὐ μὴ καταισχυνθῇ.",
    "7": "ὑμῖν οὖν ἡ τιμὴ τοῖς πιστεύουσιν, ἀπιστοῦσιν δὲ\nλίθος ὃν ἀπεδοκίμασαν οἱ οἰκοδομοῦντες,\nοὗτος ἐγενήθη εἰς κεφαλὴν γωνίας",
    "8": "καὶ\nλίθος προσκόμματος\nκαὶ πέτρα σκανδάλου·\nοἳ προσκόπτουσιν τῷ λόγῳ ἀπειθοῦντες εἰς ὃ καὶ ἐτέθησαν.",
    "9": "Ὑμεῖς δὲ γένος ἐκλεκτόν, βασίλειον ἱεράτευμα, ἔθνος ἅγιον, λαὸς εἰς περιποίησιν, ὅπως τὰς ἀρετὰς ἐξαγγείλητε τοῦ ἐκ σκότους ὑμᾶς καλέσαντος εἰς τὸ θαυμαστὸν αὐτοῦ φῶς·",
    "10": "οἵ ποτε οὐ λαός,\nνῦν δὲ λαὸς θεοῦ,\nοἱ οὐκ ἠλεημένοι,\nνῦν δὲ ἐλεηθέντες.",
    "11": "Ἀγαπητοί, παρακαλῶ ὡς παροίκους καὶ παρεπιδήμους ἀπέχεσθαι τῶν σαρκικῶν ἐπιθυμιῶν αἵτινες στρατεύονται κατὰ τῆς ψυχῆς·",
    "12": "τὴν ἀναστροφὴν ὑμῶν ἐν τοῖς ἔθνεσιν ἔχοντες καλήν, ἵνα ἐν ᾧ καταλαλοῦσιν ὑμῶν ὡς κακοποιῶν ἐκ τῶν καλῶν ἔργων ἐποπτεύοντες δοξάσωσιν τὸν θεὸν ἐν ἡμέρᾳ ἐπισκοπῆς.",
    "13": "Ὑποτάγητε πάσῃ ἀνθρωπίνῃ κτίσει διὰ τὸν κύριον, εἴτε βασιλεῖ ὡς ὑπερέχοντι",
    "14": "εἴτε ἡγεμόσιν ὡς δι᾽ αὐτοῦ πεμπομένοις εἰς ἐκδίκησιν κακοποιῶν, ἔπαινον δὲ ἀγαθοποιῶν,",
    "15": "ὅτι οὕτως ἐστὶν τὸ θέλημα τοῦ θεοῦ ἀγαθοποιοῦντας φιμοῦν τὴν τῶν ἀφρόνων ἀνθρώπων ἀγνωσίαν,",
    "16": "ὡς ἐλεύθεροι καὶ μὴ ὡς ἐπικάλυμμα ἔχοντες τῆς κακίας τὴν ἐλευθερίαν ἀλλ᾽ ὡς θεοῦ δοῦλοι.",
    "17": "πάντας τιμήσατε, τὴν ἀδελφότητα ἀγαπᾶτε, τὸν θεὸν φοβεῖσθε, τὸν βασιλέα τιμᾶτε.",
    "18": "Οἱ οἰκέται ὑποτασσόμενοι ἐν παντὶ φόβῳ τοῖς δεσπόταις, οὐ μόνον τοῖς ἀγαθοῖς καὶ ἐπιεικέσιν ἀλλὰ καὶ τοῖς σκολιοῖς.",
    "19": "τοῦτο γὰρ χάρις, εἰ διὰ συνείδησιν θεοῦ ὑποφέρει τις λύπας πάσχων ἀδίκως.",
    "20": "ποῖον γὰρ κλέος, εἰ ἁμαρτάνοντες καὶ κολαφιζόμενοι ὑπομενεῖτε; ἀλλ᾽ εἰ ἀγαθοποιοῦντες καὶ πάσχοντες ὑπομενεῖτε, τοῦτο χάρις παρὰ θεῷ.",
    "21": "εἰς τοῦτο γὰρ ἐκλήθητε, ὅτι καὶ Χριστὸς ἔπαθεν ὑπὲρ ὑμῶν ὑμῖν ὑπολιμπάνων ὑπογραμμόν, ἵνα ἐπακολουθήσητε τοῖς ἴχνεσιν αὐτοῦ,",
    "22": "ὃς ἁμαρτίαν οὐκ ἐποίησεν\nοὐδὲ εὑρέθη δόλος ἐν τῷ στόματι αὐτοῦ,",
    "23": "ὃς λοιδορούμενος οὐκ ἀντελοιδόρει, πάσχων οὐκ ἠπείλει, παρεδίδου δὲ τῷ κρίνοντι δικαίως,",
    "24": "ὃς τὰς ἁμαρτίας ἡμῶν αὐτὸς ἀνήνεγκεν ἐν τῷ σώματι αὐτοῦ ἐπὶ τὸ ξύλον, ἵνα ταῖς ἁμαρτίαις ἀπογενόμενοι τῇ δικαιοσύνῃ ζήσωμεν, οὗ τῷ μώλωπι ἰάθητε.",
    "25": "ἦτε γὰρ ὡς πρόβατα πλανώμενοι, ἀλλ᾽ ἐπεστράφητε νῦν ἐπὶ τὸν ποιμένα καὶ ἐπίσκοπον τῶν ψυχῶν ὑμῶν."
};
    const paragraphEnds = [9,10,12,17,21,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A pedra viva e a nação santa",
        "sourceTitle": "The Living Stone and the Holy Nation"
    },
    {
        "beforeVerse": 11,
        "title": "Viver como servos de Deus",
        "sourceTitle": "Live as Servants of God"
    },
    {
        "beforeVerse": 18,
        "title": "O exemplo do sofrimento de Cristo",
        "sourceTitle": "The Example of Christ’s Suffering"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1PE"] = window.ScripturaScriptureTexts.UBS5["1PE"] || {};
    window.ScripturaScriptureTexts.UBS5["1PE"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"] = window.ScripturaScriptureHeadings.UBS5["1PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"][2] = unnumberedPassages;
})();
