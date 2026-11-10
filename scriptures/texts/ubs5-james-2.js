/* UBS5 — Epístola de Tiago, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme identificação do projeto; sem cotejo independente com a edição impressa.
 * Texto grego e cabeçalhos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀδελφοί μου, μὴ ἐν προσωπολημψίαις ἔχετε τὴν πίστιν τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ τῆς δόξης.",
    "2": "ἐὰν γὰρ εἰσέλθῃ εἰς συναγωγὴν ὑμῶν ἀνὴρ χρυσοδακτύλιος ἐν ἐσθῆτι λαμπρᾷ, εἰσέλθῃ δὲ καὶ πτωχὸς ἐν ῥυπαρᾷ ἐσθῆτι,",
    "3": "ἐπιβλέψητε δὲ ἐπὶ τὸν φοροῦντα τὴν ἐσθῆτα τὴν λαμπρὰν καὶ εἴπητε, Σὺ κάθου ὧδε καλῶς, καὶ τῷ πτωχῷ εἴπητε, Σὺ στῆθι ἢ κάθου ἐκεῖ ὑπὸ τὸ ὑποπόδιόν μου,",
    "4": "καὶ οὐ διεκρίθητε ἐν ἑαυτοῖς καὶ ἐγένεσθε κριταὶ διαλογισμῶν πονηρῶν;",
    "5": "Ἀκούσατε, ἀδελφοί μου ἀγαπητοί· οὐχ ὁ θεὸς ἐξελέξατο τοὺς πτωχοὺς τῷ κόσμῳ πλουσίους ἐν πίστει καὶ κληρονόμους τῆς βασιλείας ἧς ἐπηγγείλατο τοῖς ἀγαπῶσιν αὐτόν;",
    "6": "ὑμεῖς δὲ ἠτιμάσατε τὸν πτωχόν. οὐχ οἱ πλούσιοι καταδυναστεύουσιν ὑμῶν καὶ αὐτοὶ ἕλκουσιν ὑμᾶς εἰς κριτήρια;",
    "7": "οὐκ αὐτοὶ βλασφημοῦσιν τὸ καλὸν ὄνομα τὸ ἐπικληθὲν ἐφ᾽ ὑμᾶς;",
    "8": "εἰ μέντοι νόμον τελεῖτε βασιλικὸν κατὰ τὴν γραφήν, Ἀγαπήσεις τὸν πλησίον σου ὡς σεαυτόν, καλῶς ποιεῖτε·",
    "9": "εἰ δὲ προσωπολημπτεῖτε, ἁμαρτίαν ἐργάζεσθε ἐλεγχόμενοι ὑπὸ τοῦ νόμου ὡς παραβάται.",
    "10": "ὅστις γὰρ ὅλον τὸν νόμον τηρήσῃ, πταίσῃ δὲ ἐν ἑνί, γέγονεν πάντων ἔνοχος.",
    "11": "ὁ γὰρ εἰπών, Μὴ μοιχεύσῃς, εἶπεν καί, Μὴ φονεύσῃς· εἰ δὲ οὐ μοιχεύεις, φονεύεις δέ, γέγονας παραβάτης νόμου.",
    "12": "οὕτως λαλεῖτε καὶ οὕτως ποιεῖτε ὡς διὰ νόμου ἐλευθερίας μέλλοντες κρίνεσθαι.",
    "13": "ἡ γὰρ κρίσις ἀνέλεος τῷ μὴ ποιήσαντι ἔλεος· κατακαυχᾶται ἔλεος κρίσεως.",
    "14": "Τί τὸ ὄφελος, ἀδελφοί μου, ἐὰν πίστιν λέγῃ τις ἔχειν, ἔργα δὲ μὴ ἔχῃ; μὴ δύναται ἡ πίστις σῶσαι αὐτόν;",
    "15": "ἐὰν ἀδελφὸς ἢ ἀδελφὴ γυμνοὶ ὑπάρχωσιν καὶ λειπόμενοι ὦσιν τῆς ἐφημέρου τροφῆς,",
    "16": "εἴπῃ δέ τις αὐτοῖς ἐξ ὑμῶν, Ὑπάγετε ἐν εἰρήνῃ, θερμαίνεσθε καὶ χορτάζεσθε, μὴ δῶτε δὲ αὐτοῖς τὰ ἐπιτήδεια τοῦ σώματος, τί τὸ ὄφελος;",
    "17": "οὕτως καὶ ἡ πίστις, ἐὰν μὴ ἔχῃ ἔργα, νεκρά ἐστιν καθ᾽ ἑαυτήν.",
    "18": "Ἀλλ᾽ ἐρεῖ τις, Σὺ πίστιν ἔχεις, κἀγὼ ἔργα ἔχω. δεῖξόν μοι τὴν πίστιν σου χωρὶς τῶν ἔργων, κἀγώ σοι δείξω ἐκ τῶν ἔργων μου τὴν πίστιν.",
    "19": "σὺ πιστεύεις ὅτι εἷς ἐστιν ὁ θεός, καλῶς ποιεῖς· καὶ τὰ δαιμόνια πιστεύουσιν καὶ φρίσσουσιν.",
    "20": "θέλεις δὲ γνῶναι, ὦ ἄνθρωπε κενέ, ὅτι ἡ πίστις χωρὶς τῶν ἔργων ἀργή ἐστιν;",
    "21": "Ἀβραὰμ ὁ πατὴρ ἡμῶν οὐκ ἐξ ἔργων ἐδικαιώθη ἀνενέγκας Ἰσαὰκ τὸν υἱὸν αὐτοῦ ἐπὶ τὸ θυσιαστήριον;",
    "22": "βλέπεις ὅτι ἡ πίστις συνήργει τοῖς ἔργοις αὐτοῦ καὶ ἐκ τῶν ἔργων ἡ πίστις ἐτελειώθη,",
    "23": "καὶ ἐπληρώθη ἡ γραφὴ ἡ λέγουσα, Ἐπίστευσεν δὲ Ἀβραὰμ τῷ θεῷ, καὶ ἐλογίσθη αὐτῷ εἰς δικαιοσύνην καὶ φίλος θεοῦ ἐκλήθη.",
    "24": "ὁρᾶτε ὅτι ἐξ ἔργων δικαιοῦται ἄνθρωπος καὶ οὐκ ἐκ πίστεως μόνον.",
    "25": "ὁμοίως δὲ καὶ Ῥαὰβ ἡ πόρνη οὐκ ἐξ ἔργων ἐδικαιώθη ὑποδεξαμένη τοὺς ἀγγέλους καὶ ἑτέρᾳ ὁδῷ ἐκβαλοῦσα;",
    "26": "ὥσπερ γὰρ τὸ σῶμα χωρὶς πνεύματος νεκρόν ἐστιν, οὕτως καὶ ἡ πίστις χωρὶς ἔργων νεκρά ἐστιν."
};
    const paragraphEnds = [4,13,17,26];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Advertência contra a parcialidade",
        "sourceTitle": "Warning against Partiality"
    },
    {
        "beforeVerse": 14,
        "title": "Fé e obras",
        "sourceTitle": "Faith and Works"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.JAS = window.ScripturaScriptureTexts.UBS5.JAS || {};
    window.ScripturaScriptureTexts.UBS5.JAS[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS = window.ScripturaScriptureParagraphBreaks.UBS5.JAS || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.JAS[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.JAS = window.ScripturaScriptureHeadings.UBS5.JAS || {};
    window.ScripturaScriptureHeadings.UBS5.JAS[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS = window.ScripturaScriptureUnnumberedPassages.UBS5.JAS || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.JAS[2] = unnumberedPassages;
})();
