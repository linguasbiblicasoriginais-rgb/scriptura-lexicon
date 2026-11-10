/* UBS5 — Primeira Epístola de Paulo a Timóteo, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e material editorial mantidos em camadas separadas.
 * Títulos intraversiculares registrados com sourcePlacement e afterCharacterOffset.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παρακαλῶ οὖν πρῶτον πάντων ποιεῖσθαι δεήσεις προσευχὰς ἐντεύξεις εὐχαριστίας ὑπὲρ πάντων ἀνθρώπων,",
    "2": "ὑπὲρ βασιλέων καὶ πάντων τῶν ἐν ὑπεροχῇ ὄντων, ἵνα ἤρεμον καὶ ἡσύχιον βίον διάγωμεν ἐν πάσῃ εὐσεβείᾳ καὶ σεμνότητι.",
    "3": "τοῦτο καλὸν καὶ ἀπόδεκτον ἐνώπιον τοῦ σωτῆρος ἡμῶν θεοῦ,",
    "4": "ὃς πάντας ἀνθρώπους θέλει σωθῆναι καὶ εἰς ἐπίγνωσιν ἀληθείας ἐλθεῖν.",
    "5": "εἷς γὰρ θεός, εἷς καὶ μεσίτης θεοῦ καὶ ἀνθρώπων, ἄνθρωπος Χριστὸς Ἰησοῦς,",
    "6": "ὁ δοὺς ἑαυτὸν ἀντίλυτρον ὑπὲρ πάντων, τὸ μαρτύριον καιροῖς ἰδίοις.",
    "7": "εἰς ὃ ἐτέθην ἐγὼ κῆρυξ καὶ ἀπόστολος, ἀλήθειαν λέγω οὐ ψεύδομαι, διδάσκαλος ἐθνῶν ἐν πίστει καὶ ἀληθείᾳ.",
    "8": "Βούλομαι οὖν προσεύχεσθαι τοὺς ἄνδρας ἐν παντὶ τόπῳ ἐπαίροντας ὁσίους χεῖρας χωρὶς ὀργῆς καὶ διαλογισμοῦ.",
    "9": "ὡσαύτως [καὶ] γυναῖκας ἐν καταστολῇ κοσμίῳ μετὰ αἰδοῦς καὶ σωφροσύνης κοσμεῖν ἑαυτάς, μὴ ἐν πλέγμασιν καὶ χρυσίῳ ἢ μαργαρίταις ἢ ἱματισμῷ πολυτελεῖ,",
    "10": "ἀλλ᾽ ὃ πρέπει γυναιξὶν ἐπαγγελλομέναις θεοσέβειαν, δι᾽ ἔργων ἀγαθῶν.",
    "11": "γυνὴ ἐν ἡσυχίᾳ μανθανέτω ἐν πάσῃ ὑποταγῇ·",
    "12": "διδάσκειν δὲ γυναικὶ οὐκ ἐπιτρέπω οὐδὲ αὐθεντεῖν ἀνδρός, ἀλλ᾽ εἶναι ἐν ἡσυχίᾳ.",
    "13": "Ἀδὰμ γὰρ πρῶτος ἐπλάσθη, εἶτα Εὕα.",
    "14": "καὶ Ἀδὰμ οὐκ ἠπατήθη, ἡ δὲ γυνὴ ἐξαπατηθεῖσα ἐν παραβάσει γέγονεν·",
    "15": "σωθήσεται δὲ διὰ τῆς τεκνογονίας, ἐὰν μείνωσιν ἐν πίστει καὶ ἀγάπῃ καὶ ἁγιασμῷ μετὰ σωφροσύνης·"
};
    const paragraphEnds = [7,15];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Instruções acerca da oração",
        "sourceTitle": "Instructions concerning Prayer"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1TI"] = window.ScripturaScriptureTexts.UBS5["1TI"] || {};
    window.ScripturaScriptureTexts.UBS5["1TI"][2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] = window.ScripturaScriptureParagraphBreaks.UBS5["1TI"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1TI"][2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"] = window.ScripturaScriptureHeadings.UBS5["1TI"] || {};
    window.ScripturaScriptureHeadings.UBS5["1TI"][2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1TI"][2] = unnumberedPassages;
})();
