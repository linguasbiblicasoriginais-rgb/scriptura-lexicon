/* UBS5 — Epístola de Tiago, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme identificação do projeto; sem cotejo independente com a edição impressa.
 * Texto grego e cabeçalhos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μὴ πολλοὶ διδάσκαλοι γίνεσθε, ἀδελφοί μου, εἰδότες ὅτι μεῖζον κρίμα λημψόμεθα.",
    "2": "πολλὰ γὰρ πταίομεν ἅπαντες. εἴ τις ἐν λόγῳ οὐ πταίει, οὗτος τέλειος ἀνὴρ δυνατὸς χαλιναγωγῆσαι καὶ ὅλον τὸ σῶμα.",
    "3": "εἰ δὲ τῶν ἵππων τοὺς χαλινοὺς εἰς τὰ στόματα βάλλομεν εἰς τὸ πείθεσθαι αὐτοὺς ἡμῖν, καὶ ὅλον τὸ σῶμα αὐτῶν μετάγομεν.",
    "4": "ἰδοὺ καὶ τὰ πλοῖα τηλικαῦτα ὄντα καὶ ὑπὸ ἀνέμων σκληρῶν ἐλαυνόμενα μετάγεται ὑπὸ ἐλαχίστου πηδαλίου ὅπου ἡ ὁρμὴ τοῦ εὐθύνοντος βούλεται.",
    "5": "οὕτως καὶ ἡ γλῶσσα μικρὸν μέλος ἐστὶν καὶ μεγάλα αὐχεῖ.\nἸδοὺ ἡλίκον πῦρ ἡλίκην ὕλην ἀνάπτει.",
    "6": "καὶ ἡ γλῶσσα πῦρ. ὁ κόσμος τῆς ἀδικίας ἡ γλῶσσα καθίσταται ἐν τοῖς μέλεσιν ἡμῶν ἡ σπιλοῦσα ὅλον τὸ σῶμα καὶ φλογίζουσα τὸν τροχὸν τῆς γενέσεως καὶ φλογιζομένη ὑπὸ τῆς γεέννης.",
    "7": "πᾶσα γὰρ φύσις θηρίων τε καὶ πετεινῶν, ἑρπετῶν τε καὶ ἐναλίων δαμάζεται καὶ δεδάμασται τῇ φύσει τῇ ἀνθρωπίνῃ,",
    "8": "τὴν δὲ γλῶσσαν οὐδεὶς δαμάσαι δύναται ἀνθρώπων, ἀκατάστατον κακόν, μεστὴ ἰοῦ θανατηφόρου.",
    "9": "ἐν αὐτῇ εὐλογοῦμεν τὸν κύριον καὶ πατέρα καὶ ἐν αὐτῇ καταρώμεθα τοὺς ἀνθρώπους τοὺς καθ᾽ ὁμοίωσιν θεοῦ γεγονότας·",
    "10": "ἐκ τοῦ αὐτοῦ στόματος ἐξέρχεται εὐλογία καὶ κατάρα. οὐ χρή, ἀδελφοί μου, ταῦτα οὕτως γίνεσθαι.",
    "11": "μήτι ἡ πηγὴ ἐκ τῆς αὐτῆς ὀπῆς βρύει τὸ γλυκὺ καὶ τὸ πικρόν;",
    "12": "μὴ δύναται, ἀδελφοί μου, συκῆ ἐλαίας ποιῆσαι ἢ ἄμπελος σῦκα; οὔτε ἁλυκὸν γλυκὺ ποιῆσαι ὕδωρ.",
    "13": "Τίς σοφὸς καὶ ἐπιστήμων ἐν ὑμῖν; δειξάτω ἐκ τῆς καλῆς ἀναστροφῆς τὰ ἔργα αὐτοῦ ἐν πραΰτητι σοφίας.",
    "14": "εἰ δὲ ζῆλον πικρὸν ἔχετε καὶ ἐριθείαν ἐν τῇ καρδίᾳ ὑμῶν, μὴ κατακαυχᾶσθε καὶ ψεύδεσθε κατὰ τῆς ἀληθείας.",
    "15": "οὐκ ἔστιν αὕτη ἡ σοφία ἄνωθεν κατερχομένη ἀλλ᾽ ἐπίγειος, ψυχική, δαιμονιώδης.",
    "16": "ὅπου γὰρ ζῆλος καὶ ἐριθεία, ἐκεῖ ἀκαταστασία καὶ πᾶν φαῦλον πρᾶγμα.",
    "17": "ἡ δὲ ἄνωθεν σοφία πρῶτον μὲν ἁγνή ἐστιν, ἔπειτα εἰρηνική, ἐπιεικής, εὐπειθής, μεστὴ ἐλέους καὶ καρπῶν ἀγαθῶν, ἀδιάκριτος, ἀνυπόκριτος.",
    "18": "καρπὸς δὲ δικαιοσύνης ἐν εἰρήνῃ σπείρεται τοῖς ποιοῦσιν εἰρήνην."
};
    const paragraphEnds = [12,18];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A língua",
        "sourceTitle": "The Tongue"
    },
    {
        "beforeVerse": 13,
        "title": "A sabedoria do alto",
        "sourceTitle": "The Wisdom from Above"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.JAS = window.ScripturaScriptureTexts.UBS5.JAS || {};
    window.ScripturaScriptureTexts.UBS5.JAS[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS = window.ScripturaScriptureParagraphBreaks.UBS5.JAS || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.JAS = window.ScripturaScriptureHeadings.UBS5.JAS || {};
    window.ScripturaScriptureHeadings.UBS5.JAS[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS = window.ScripturaScriptureUnnumberedPassages.UBS5.JAS || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS[3] = unnumberedPassages;
})();
