/* UBS5 — Epístola aos Hebreus, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Πολυμερῶς καὶ πολυτρόπως πάλαι ὁ θεὸς λαλήσας τοῖς πατράσιν ἐν τοῖς προφήταις",
    "2": "ἐπ᾽ ἐσχάτου τῶν ἡμερῶν τούτων ἐλάλησεν ἡμῖν ἐν υἱῷ, ὃν ἔθηκεν κληρονόμον πάντων, δι᾽ οὗ καὶ ἐποίησεν τοὺς αἰῶνας·",
    "3": "ὃς ὢν ἀπαύγασμα τῆς δόξης καὶ χαρακτὴρ τῆς ὑποστάσεως αὐτοῦ, φέρων τε τὰ πάντα τῷ ῥήματι τῆς δυνάμεως αὐτοῦ, καθαρισμὸν τῶν ἁμαρτιῶν ποιησάμενος ἐκάθισεν ἐν δεξιᾷ τῆς μεγαλωσύνης ἐν ὑψηλοῖς,",
    "4": "τοσούτῳ κρείττων γενόμενος τῶν ἀγγέλων ὅσῳ διαφορώτερον παρ᾽ αὐτοὺς κεκληρονόμηκεν ὄνομα.",
    "5": "Τίνι γὰρ εἶπέν ποτε τῶν ἀγγέλων,\nΥἱός μου εἶ σύ,\nἐγὼ σήμερον γεγέννηκά σε;\nκαὶ πάλιν,\nἘγὼ ἔσομαι αὐτῷ εἰς πατέρα,\nκαὶ αὐτὸς ἔσται μοι εἰς υἱόν;",
    "6": "ὅταν δὲ πάλιν εἰσαγάγῃ τὸν πρωτότοκον εἰς τὴν οἰκουμένην, λέγει,\nΚαὶ προσκυνησάτωσαν αὐτῷ πάντες ἄγγελοι θεοῦ.",
    "7": "καὶ πρὸς μὲν τοὺς ἀγγέλους λέγει,\nὉ ποιῶν τοὺς ἀγγέλους αὐτοῦ πνεύματα\nκαὶ τοὺς λειτουργοὺς αὐτοῦ πυρὸς φλόγα,",
    "8": "πρὸς δὲ τὸν υἱόν,\nὉ θρόνος σου ὁ θεὸς εἰς τὸν αἰῶνα τοῦ αἰῶνος,\nκαὶ ἡ ῥάβδος τῆς εὐθύτητος ῥάβδος τῆς βασιλείας σου.",
    "9": "ἠγάπησας δικαιοσύνην καὶ ἐμίσησας ἀνομίαν·\nδιὰ τοῦτο ἔχρισέν σε ὁ θεὸς ὁ θεός σου\nἔλαιον ἀγαλλιάσεως παρὰ τοὺς μετόχους σου.",
    "10": "καί,\nΣὺ κατ᾽ ἀρχάς, κύριε, τὴν γῆν ἐθεμελίωσας,\nκαὶ ἔργα τῶν χειρῶν σού εἰσιν οἱ οὐρανοί·",
    "11": "αὐτοὶ ἀπολοῦνται, σὺ δὲ διαμένεις,\nκαὶ πάντες ὡς ἱμάτιον παλαιωθήσονται,",
    "12": "καὶ ὡσεὶ περιβόλαιον ἑλίξεις αὐτούς,\nὡς ἱμάτιον καὶ ἀλλαγήσονται·\nσὺ δὲ ὁ αὐτὸς εἶ\nκαὶ τὰ ἔτη σου οὐκ ἐκλείψουσιν.",
    "13": "πρὸς τίνα δὲ τῶν ἀγγέλων εἴρηκέν ποτε,\nΚάθου ἐκ δεξιῶν μου,\nἕως ἂν θῶ τοὺς ἐχθρούς σου ὑποπόδιον τῶν ποδῶν σου;",
    "14": "οὐχὶ πάντες εἰσὶν λειτουργικὰ πνεύματα εἰς διακονίαν ἀποστελλόμενα διὰ τοὺς μέλλοντας κληρονομεῖν σωτηρίαν;"
};
    const paragraphEnds = [4,14];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Deus falou por meio de seu Filho",
        "sourceTitle": "God Has Spoken by His Son"
    },
    {
        "beforeVerse": 5,
        "title": "O Filho é superior aos anjos",
        "sourceTitle": "The Son Superior to Angels"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[1] = unnumberedPassages;
})();
