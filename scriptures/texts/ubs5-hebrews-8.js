/* UBS5 — Epístola aos Hebreus, capítulo 8.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Atribuição à UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações poéticas com quebras internas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Κεφάλαιον δὲ ἐπὶ τοῖς λεγομένοις, τοιοῦτον ἔχομεν ἀρχιερέα, ὃς ἐκάθισεν ἐν δεξιᾷ τοῦ θρόνου τῆς μεγαλωσύνης ἐν τοῖς οὐρανοῖς,",
    "2": "τῶν ἁγίων λειτουργὸς καὶ τῆς σκηνῆς τῆς ἀληθινῆς, ἣν ἔπηξεν ὁ κύριος, οὐκ ἄνθρωπος.",
    "3": "πᾶς γὰρ ἀρχιερεὺς εἰς τὸ προσφέρειν δῶρά τε καὶ θυσίας καθίσταται· ὅθεν ἀναγκαῖον ἔχειν τι καὶ τοῦτον ὃ προσενέγκῃ.",
    "4": "εἰ μὲν οὖν ἦν ἐπὶ γῆς, οὐδ᾽ ἂν ἦν ἱερεύς, ὄντων τῶν προσφερόντων κατὰ νόμον τὰ δῶρα·",
    "5": "οἵτινες ὑποδείγματι καὶ σκιᾷ λατρεύουσιν τῶν ἐπουρανίων, καθὼς κεχρημάτισται Μωϋσῆς μέλλων ἐπιτελεῖν τὴν σκηνήν, Ὅρα γάρ φησιν, ποιήσεις πάντα κατὰ τὸν τύπον τὸν δειχθέντα σοι ἐν τῷ ὄρει·",
    "6": "νυν[ὶ] δὲ διαφορωτέρας τέτυχεν λειτουργίας, ὅσῳ καὶ κρείττονός ἐστιν διαθήκης μεσίτης, ἥτις ἐπὶ κρείττοσιν ἐπαγγελίαις νενομοθέτηται.",
    "7": "Εἰ γὰρ ἡ πρώτη ἐκείνη ἦν ἄμεμπτος, οὐκ ἂν δευτέρας ἐζητεῖτο τόπος.",
    "8": "μεμφόμενος γὰρ αὐτοὺς λέγει,\nἸδοὺ ἡμέραι ἔρχονται, λέγει κύριος,\nκαὶ συντελέσω ἐπὶ τὸν οἶκον Ἰσραὴλ\nκαὶ ἐπὶ τὸν οἶκον Ἰούδα διαθήκην καινήν,",
    "9": "οὐ κατὰ τὴν διαθήκην, ἣν ἐποίησα τοῖς πατράσιν αὐτῶν\nἐν ἡμέρᾳ ἐπιλαβομένου μου τῆς χειρὸς αὐτῶν ἐξαγαγεῖν αὐτοὺς ἐκ γῆς Αἰγύπτου,\nὅτι αὐτοὶ οὐκ ἐνέμειναν ἐν τῇ διαθήκῃ μου,\nκἀγὼ ἠμέλησα αὐτῶν, λέγει κύριος·",
    "10": "ὅτι αὕτη ἡ διαθήκη, ἣν διαθήσομαι τῷ οἴκῳ Ἰσραὴλ\nμετὰ τὰς ἡμέρας ἐκείνας, λέγει κύριος·\nδιδοὺς νόμους μου εἰς τὴν διάνοιαν αὐτῶν\nκαὶ ἐπὶ καρδίας αὐτῶν ἐπιγράψω αὐτούς,\nκαὶ ἔσομαι αὐτοῖς εἰς θεόν,\nκαὶ αὐτοὶ ἔσονταί μοι εἰς λαόν·",
    "11": "καὶ οὐ μὴ διδάξωσιν ἕκαστος τὸν πολίτην αὐτοῦ\nκαὶ ἕκαστος τὸν ἀδελφὸν αὐτοῦ λέγων, Γνῶθι τὸν κύριον,\nὅτι πάντες εἰδήσουσίν με\nἀπὸ μικροῦ ἕως μεγάλου αὐτῶν,",
    "12": "ὅτι ἵλεως ἔσομαι ταῖς ἀδικίαις αὐτῶν\nκαὶ τῶν ἁμαρτιῶν αὐτῶν οὐ μὴ μνησθῶ ἔτι.",
    "13": "ἐν τῷ λέγειν Καινὴν πεπαλαίωκεν τὴν πρώτην· τὸ δὲ παλαιούμενον καὶ γηράσκον ἐγγὺς ἀφανισμοῦ."
};
    const paragraphEnds = [6,13];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O sumo sacerdote de uma nova e melhor aliança",
        "sourceTitle": "The High Priest of a New and Better Covenant"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.HEB = window.ScripturaScriptureTexts.UBS5.HEB || {};
    window.ScripturaScriptureTexts.UBS5.HEB[8] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB = window.ScripturaScriptureParagraphBreaks.UBS5.HEB || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.HEB[8] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.HEB = window.ScripturaScriptureHeadings.UBS5.HEB || {};
    window.ScripturaScriptureHeadings.UBS5.HEB[8] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB = window.ScripturaScriptureUnnumberedPassages.UBS5.HEB || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.HEB[8] = unnumberedPassages;
})();
