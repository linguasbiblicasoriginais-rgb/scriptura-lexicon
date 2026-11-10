/* UBS5 — Primeira Epístola de Paulo a Timóteo, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e material editorial mantidos em camadas separadas.
 * Títulos intraversiculares registrados com sourcePlacement e afterCharacterOffset.
 */
(function () {
    "use strict";
    const verses = {
    "1": "πιστὸς ὁ λόγος.\nΕἴ τις ἐπισκοπῆς ὀρέγεται, καλοῦ ἔργου ἐπιθυμεῖ.",
    "2": "δεῖ οὖν τὸν ἐπίσκοπον ἀνεπίλημπτον εἶναι, μιᾶς γυναικὸς ἄνδρα, νηφάλιον σώφρονα κόσμιον φιλόξενον διδακτικόν,",
    "3": "μὴ πάροινον μὴ πλήκτην, ἀλλ᾽ ἐπιεικῆ ἄμαχον ἀφιλάργυρον,",
    "4": "τοῦ ἰδίου οἴκου καλῶς προϊστάμενον, τέκνα ἔχοντα ἐν ὑποταγῇ, μετὰ πάσης σεμνότητος",
    "5": "(εἰ δέ τις τοῦ ἰδίου οἴκου προστῆναι οὐκ οἶδεν, πῶς ἐκκλησίας θεοῦ ἐπιμελήσεται;),",
    "6": "μὴ νεόφυτον, ἵνα μὴ τυφωθεὶς εἰς κρίμα ἐμπέσῃ τοῦ διαβόλου.",
    "7": "δεῖ δὲ καὶ μαρτυρίαν καλὴν ἔχειν ἀπὸ τῶν ἔξωθεν, ἵνα μὴ εἰς ὀνειδισμὸν ἐμπέσῃ καὶ παγίδα τοῦ διαβόλου.",
    "8": "Διακόνους ὡσαύτως σεμνούς, μὴ διλόγους, μὴ οἴνῳ πολλῷ προσέχοντας, μὴ αἰσχροκερδεῖς,",
    "9": "ἔχοντας τὸ μυστήριον τῆς πίστεως ἐν καθαρᾷ συνειδήσει.",
    "10": "καὶ οὗτοι δὲ δοκιμαζέσθωσαν πρῶτον, εἶτα διακονείτωσαν ἀνέγκλητοι ὄντες.",
    "11": "γυναῖκας ὡσαύτως σεμνάς, μὴ διαβόλους, νηφαλίους, πιστὰς ἐν πᾶσιν.",
    "12": "διάκονοι ἔστωσαν μιᾶς γυναικὸς ἄνδρες, τέκνων καλῶς προϊστάμενοι καὶ τῶν ἰδίων οἴκων.",
    "13": "οἱ γὰρ καλῶς διακονήσαντες βαθμὸν ἑαυτοῖς καλὸν περιποιοῦνται καὶ πολλὴν παρρησίαν ἐν πίστει τῇ ἐν Χριστῷ Ἰησοῦ.",
    "14": "Ταῦτά σοι γράφω ἐλπίζων ἐλθεῖν πρὸς σὲ ἐν τάχει·",
    "15": "ἐὰν δὲ βραδύνω, ἵνα εἰδῇς πῶς δεῖ ἐν οἴκῳ θεοῦ ἀναστρέφεσθαι, ἥτις ἐστὶν ἐκκλησία θεοῦ ζῶντος, στῦλος καὶ ἑδραίωμα τῆς ἀληθείας.",
    "16": "καὶ ὁμολογουμένως μέγα ἐστὶν τὸ τῆς εὐσεβείας μυστήριον·\nὋς ἐφανερώθη ἐν σαρκί,\nἐδικαιώθη ἐν πνεύματι,\nὤφθη ἀγγέλοις,\nἐκηρύχθη ἐν ἔθνεσιν,\nἐπιστεύθη ἐν κόσμῳ,\nἀνελήμφθη ἐν δόξῃ."
};
    const paragraphEnds = [1,7,13,16];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Requisitos para os bispos",
        "sourceTitle": "Qualifications of Bishops",
        "sourcePlacement": "intraVerse",
        "afterCharacterOffset": 15
    },
    {
        "beforeVerse": 8,
        "title": "Requisitos para os diáconos",
        "sourceTitle": "Qualifications of Deacons"
    },
    {
        "beforeVerse": 14,
        "title": "O mistério da nossa religião",
        "sourceTitle": "The Mystery of Our Religion"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TI"] = window.ScripturaScriptureTexts.UBS5["1TI"] || {};
    window.ScripturaScriptureTexts.UBS5["1TI"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"] = window.ScripturaScriptureHeadings.UBS5["1TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"][3] = unnumberedPassages;
})();
