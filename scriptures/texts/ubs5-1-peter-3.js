/* UBS5 — Primeira Epístola de Pedro, capítulo 3.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Texto bíblico e títulos editoriais separados; citações mantidas nos versículos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὁμοίως αἱ γυναῖκες, ὑποτασσόμεναι τοῖς ἰδίοις ἀνδράσιν, ἵνα καὶ εἴ τινες ἀπειθοῦσιν τῷ λόγῳ, διὰ τῆς τῶν γυναικῶν ἀναστροφῆς ἄνευ λόγου κερδηθήσονται",
    "2": "ἐποπτεύσαντες τὴν ἐν φόβῳ ἁγνὴν ἀναστροφὴν ὑμῶν.",
    "3": "ὧν ἔστω οὐχ ὁ ἔξωθεν ἐμπλοκῆς τριχῶν καὶ περιθέσεως χρυσίων ἢ ἐνδύσεως ἱματίων κόσμος,",
    "4": "ἀλλ᾽ ὁ κρυπτὸς τῆς καρδίας ἄνθρωπος ἐν τῷ ἀφθάρτῳ τοῦ πραέως καὶ ἡσυχίου πνεύματος ὅ ἐστιν ἐνώπιον τοῦ θεοῦ πολυτελές.",
    "5": "οὕτως γάρ ποτε καὶ αἱ ἅγιαι γυναῖκες αἱ ἐλπίζουσαι εἰς θεὸν ἐκόσμουν ἑαυτὰς ὑποτασσόμεναι τοῖς ἰδίοις ἀνδράσιν,",
    "6": "ὡς Σάρρα ὑπήκουσεν τῷ Ἀβραὰμ κύριον αὐτὸν καλοῦσα ἧς ἐγενήθητε τέκνα ἀγαθοποιοῦσαι καὶ μὴ φοβούμεναι μηδεμίαν πτόησιν.",
    "7": "Οἱ ἄνδρες ὁμοίως, συνοικοῦντες κατὰ γνῶσιν ὡς ἀσθενεστέρῳ σκεύει τῷ γυναικείῳ, ἀπονέμοντες τιμὴν ὡς καὶ συγκληρονόμοις χάριτος ζωῆς εἰς τὸ μὴ ἐγκόπτεσθαι τὰς προσευχὰς ὑμῶν.",
    "8": "Τὸ δὲ τέλος πάντες ὁμόφρονες, συμπαθεῖς, φιλάδελφοι, εὔσπλαγχνοι, ταπεινόφρονες,",
    "9": "μὴ ἀποδιδόντες κακὸν ἀντὶ κακοῦ ἢ λοιδορίαν ἀντὶ λοιδορίας, τοὐναντίον δὲ εὐλογοῦντες, ὅτι εἰς τοῦτο ἐκλήθητε, ἵνα εὐλογίαν κληρονομήσητε.",
    "10": "ὁ γὰρ θέλων ζωὴν ἀγαπᾶν\nκαὶ ἰδεῖν ἡμέρας ἀγαθὰς\nπαυσάτω τὴν γλῶσσαν ἀπὸ κακοῦ\nκαὶ χείλη τοῦ μὴ λαλῆσαι δόλον,",
    "11": "ἐκκλινάτω δὲ ἀπὸ κακοῦ καὶ ποιησάτω ἀγαθόν,\nζητησάτω εἰρήνην καὶ διωξάτω αὐτήν·",
    "12": "ὅτι ὀφθαλμοὶ κυρίου ἐπὶ δικαίους\nκαὶ ὦτα αὐτοῦ εἰς δέησιν αὐτῶν,\nπρόσωπον δὲ κυρίου ἐπὶ ποιοῦντας κακά.",
    "13": "Καὶ τίς ὁ κακώσων ὑμᾶς, ἐὰν τοῦ ἀγαθοῦ ζηλωταὶ γένησθε;",
    "14": "ἀλλ᾽ εἰ καὶ πάσχοιτε διὰ δικαιοσύνην, μακάριοι. τὸν δὲ φόβον αὐτῶν μὴ φοβηθῆτε μηδὲ ταραχθῆτε,",
    "15": "κύριον δὲ τὸν Χριστὸν ἁγιάσατε ἐν ταῖς καρδίαις ὑμῶν, ἕτοιμοι ἀεὶ πρὸς ἀπολογίαν παντὶ τῷ αἰτοῦντι ὑμᾶς λόγον περὶ τῆς ἐν ὑμῖν ἐλπίδος,",
    "16": "ἀλλὰ μετὰ πραΰτητος καὶ φόβου, συνείδησιν ἔχοντες ἀγαθήν, ἵνα ἐν ᾧ καταλαλεῖσθε καταισχυνθῶσιν οἱ ἐπηρεάζοντες ὑμῶν τὴν ἀγαθὴν ἐν Χριστῷ ἀναστροφήν.",
    "17": "κρεῖττον γὰρ ἀγαθοποιοῦντας, εἰ θέλοι τὸ θέλημα τοῦ θεοῦ, πάσχειν ἢ κακοποιοῦντας.",
    "18": "ὅτι καὶ Χριστὸς ἅπαξ περὶ ἁμαρτιῶν ἔπαθεν, δίκαιος ὑπὲρ ἀδίκων, ἵνα ὑμᾶς προσαγάγῃ τῷ θεῷ θανατωθεὶς μὲν σαρκί, ζῳοποιηθεὶς δὲ πνεύματι·",
    "19": "ἐν ᾧ καὶ τοῖς ἐν φυλακῇ πνεύμασιν πορευθεὶς ἐκήρυξεν",
    "20": "ἀπειθήσασίν ποτε, ὅτε ἀπεξεδέχετο ἡ τοῦ θεοῦ μακροθυμία ἐν ἡμέραις Νῶε κατασκευαζομένης κιβωτοῦ εἰς ἣν ὀλίγοι, τοῦτ᾽ ἔστιν ὀκτὼ ψυχαί, διεσώθησαν δι᾽ ὕδατος",
    "21": "ὃ καὶ ὑμᾶς ἀντίτυπον νῦν σῴζει βάπτισμα, οὐ σαρκὸς ἀπόθεσις ῥύπου ἀλλὰ συνειδήσεως ἀγαθῆς ἐπερώτημα εἰς θεόν, δι᾽ ἀναστάσεως Ἰησοῦ Χριστοῦ",
    "22": "ὅς ἐστιν ἐν δεξιᾷ τοῦ θεοῦ πορευθεὶς εἰς οὐρανὸν ὑποταγέντων αὐτῷ ἀγγέλων καὶ ἐξουσιῶν καὶ δυνάμεων."
};
    const paragraphEnds = [6,7,9,22];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Esposas e maridos",
        "sourceTitle": "Wives and Husbands"
    },
    {
        "beforeVerse": 8,
        "title": "Sofrer por causa da justiça",
        "sourceTitle": "Suffering for Righteousness’ Sake"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["1PE"] = window.ScripturaScriptureTexts.UBS5["1PE"] || {};
    window.ScripturaScriptureTexts.UBS5["1PE"][3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] = window.ScripturaScriptureParagraphBreaks.UBS5["1PE"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["1PE"][3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"] = window.ScripturaScriptureHeadings.UBS5["1PE"] || {};
    window.ScripturaScriptureHeadings.UBS5["1PE"][3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] = window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["1PE"][3] = unnumberedPassages;
})();
