/* UBS5 — Atos dos Apóstolos 1. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Identificação UBS5 conforme o projeto, sem cotejo independente com exemplar impresso.
 * O texto grego e os metadados editoriais permanecem em estruturas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τὸν μὲν πρῶτον λόγον ἐποιησάμην περὶ πάντων, ὦ Θεόφιλε, ὧν ἤρξατο ὁ Ἰησοῦς ποιεῖν τε καὶ διδάσκειν,",
    "2": "ἄχρι ἧς ἡμέρας ἐντειλάμενος τοῖς ἀποστόλοις διὰ πνεύματος ἁγίου οὓς ἐξελέξατο ἀνελήμφθη·",
    "3": "οἷς καὶ παρέστησεν ἑαυτὸν ζῶντα μετὰ τὸ παθεῖν αὐτὸν ἐν πολλοῖς τεκμηρίοις, δι᾽ ἡμερῶν τεσσεράκοντα ὀπτανόμενος αὐτοῖς καὶ λέγων τὰ περὶ τῆς βασιλείας τοῦ θεοῦ·",
    "4": "καὶ συναλιζόμενος παρήγγειλεν αὐτοῖς ἀπὸ Ἱεροσολύμων μὴ χωρίζεσθαι ἀλλὰ περιμένειν τὴν ἐπαγγελίαν τοῦ πατρὸς ἣν ἠκούσατέ μου,",
    "5": "ὅτι Ἰωάννης μὲν ἐβάπτισεν ὕδατι, ὑμεῖς δὲ ἐν πνεύματι βαπτισθήσεσθε ἁγίῳ οὐ μετὰ πολλὰς ταύτας ἡμέρας.",
    "6": "Οἱ μὲν οὖν συνελθόντες ἠρώτων αὐτὸν λέγοντες, Κύριε, εἰ ἐν τῷ χρόνῳ τούτῳ ἀποκαθιστάνεις τὴν βασιλείαν τῷ Ἰσραήλ;",
    "7": "εἶπεν δὲ πρὸς αὐτούς, Οὐχ ὑμῶν ἐστιν γνῶναι χρόνους ἢ καιροὺς οὓς ὁ πατὴρ ἔθετο ἐν τῇ ἰδίᾳ ἐξουσίᾳ,",
    "8": "ἀλλὰ λήμψεσθε δύναμιν ἐπελθόντος τοῦ ἁγίου πνεύματος ἐφ᾽ ὑμᾶς καὶ ἔσεσθέ μου μάρτυρες ἔν τε Ἰερουσαλὴμ καὶ [ἐν] πάσῃ τῇ Ἰουδαίᾳ καὶ Σαμαρείᾳ καὶ ἕως ἐσχάτου τῆς γῆς.",
    "9": "καὶ ταῦτα εἰπὼν βλεπόντων αὐτῶν ἐπήρθη καὶ νεφέλη ὑπέλαβεν αὐτὸν ἀπὸ τῶν ὀφθαλμῶν αὐτῶν.",
    "10": "καὶ ὡς ἀτενίζοντες ἦσαν εἰς τὸν οὐρανὸν πορευομένου αὐτοῦ, καὶ ἰδοὺ ἄνδρες δύο παρειστήκεισαν αὐτοῖς ἐν ἐσθήσεσιν λευκαῖς,",
    "11": "οἳ καὶ εἶπαν, Ἄνδρες Γαλιλαῖοι, τί ἑστήκατε [ἐμ]βλέποντες εἰς τὸν οὐρανόν; οὗτος ὁ Ἰησοῦς ὁ ἀναλημφθεὶς ἀφ᾽ ὑμῶν εἰς τὸν οὐρανὸν οὕτως ἐλεύσεται ὃν τρόπον ἐθεάσασθε αὐτὸν πορευόμενον εἰς τὸν οὐρανόν.",
    "12": "Τότε ὑπέστρεψαν εἰς Ἰερουσαλὴμ ἀπὸ ὄρους τοῦ καλουμένου Ἐλαιῶνος, ὅ ἐστιν ἐγγὺς Ἰερουσαλὴμ σαββάτου ἔχον ὁδόν.",
    "13": "καὶ ὅτε εἰσῆλθον, εἰς τὸ ὑπερῷον ἀνέβησαν οὗ ἦσαν καταμένοντες, ὅ τε Πέτρος καὶ Ἰωάννης καὶ Ἰάκωβος καὶ Ἀνδρέας, Φίλιππος καὶ Θωμᾶς, Βαρθολομαῖος καὶ Μαθθαῖος, Ἰάκωβος Ἁλφαίου καὶ Σίμων ὁ ζηλωτὴς καὶ Ἰούδας Ἰακώβου.",
    "14": "οὗτοι πάντες ἦσαν προσκαρτεροῦντες ὁμοθυμαδὸν τῇ προσευχῇ σὺν γυναιξὶν καὶ Μαριὰμ τῇ μητρὶ τοῦ Ἰησοῦ καὶ τοῖς ἀδελφοῖς αὐτοῦ.",
    "15": "Καὶ ἐν ταῖς ἡμέραις ταύταις ἀναστὰς Πέτρος ἐν μέσῳ τῶν ἀδελφῶν εἶπεν· ἦν τε ὄχλος ὀνομάτων ἐπὶ τὸ αὐτὸ ὡσεὶ ἑκατὸν εἴκοσι·",
    "16": "Ἄνδρες ἀδελφοί, ἔδει πληρωθῆναι τὴν γραφὴν ἣν προεῖπεν τὸ πνεῦμα τὸ ἅγιον διὰ στόματος Δαυὶδ περὶ Ἰούδα τοῦ γενομένου ὁδηγοῦ τοῖς συλλαβοῦσιν Ἰησοῦν,",
    "17": "ὅτι κατηριθμημένος ἦν ἐν ἡμῖν καὶ ἔλαχεν τὸν κλῆρον τῆς διακονίας ταύτης.",
    "18": "Οὗτος μὲν οὖν ἐκτήσατο χωρίον ἐκ μισθοῦ τῆς ἀδικίας καὶ πρηνὴς γενόμενος ἐλάκησεν μέσος καὶ ἐξεχύθη πάντα τὰ σπλάγχνα αὐτοῦ·",
    "19": "καὶ γνωστὸν ἐγένετο πᾶσιν τοῖς κατοικοῦσιν Ἰερουσαλήμ, ὥστε κληθῆναι τὸ χωρίον ἐκεῖνο τῇ ἰδίᾳ διαλέκτῳ αὐτῶν Ἁκελδαμάχ, τοῦτ᾽ ἔστιν Χωρίον Αἵματος.",
    "20": "Γέγραπται γὰρ ἐν βίβλῳ ψαλμῶν,\nΓενηθήτω ἡ ἔπαυλις αὐτοῦ ἔρημος\nκαὶ μὴ ἔστω ὁ κατοικῶν ἐν αὐτῇ,\nκαί,\nΤὴν ἐπισκοπὴν αὐτοῦ λαβέτω ἕτερος.",
    "21": "δεῖ οὖν τῶν συνελθόντων ἡμῖν ἀνδρῶν ἐν παντὶ χρόνῳ ᾧ εἰσῆλθεν καὶ ἐξῆλθεν ἐφ᾽ ἡμᾶς ὁ κύριος Ἰησοῦς,",
    "22": "ἀρξάμενος ἀπὸ τοῦ βαπτίσματος Ἰωάννου ἕως τῆς ἡμέρας ἧς ἀνελήμφθη ἀφ᾽ ἡμῶν, μάρτυρα τῆς ἀναστάσεως αὐτοῦ σὺν ἡμῖν γενέσθαι ἕνα τούτων.",
    "23": "καὶ ἔστησαν δύο, Ἰωσὴφ τὸν καλούμενον Βαρσαββᾶν ὃς ἐπεκλήθη Ἰοῦστος, καὶ Μαθθίαν.",
    "24": "καὶ προσευξάμενοι εἶπαν, Σὺ κύριε καρδιογνῶστα πάντων, ἀνάδειξον ὃν ἐξελέξω ἐκ τούτων τῶν δύο ἕνα",
    "25": "λαβεῖν τὸν τόπον τῆς διακονίας ταύτης καὶ ἀποστολῆς ἀφ᾽ ἧς παρέβη Ἰούδας πορευθῆναι εἰς τὸν τόπον τὸν ἴδιον.",
    "26": "καὶ ἔδωκαν κλήρους αὐτοῖς καὶ ἔπεσεν ὁ κλῆρος ἐπὶ Μαθθίαν καὶ συγκατεψηφίσθη μετὰ τῶν ἕνδεκα ἀποστόλων."
};
    const paragraphEnds = [5,11,14,20,26];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A promessa do Espírito Santo",
        "sourceTitle": "The Promise of the Holy Spirit"
    },
    {
        "beforeVerse": 6,
        "title": "A ascensão de Jesus",
        "sourceTitle": "The Ascension of Jesus"
    },
    {
        "beforeVerse": 12,
        "title": "A escolha do sucessor de Judas",
        "sourceTitle": "The Choice of Judas’ Successor"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ACT = window.ScripturaScriptureTexts.UBS5.ACT || {};
    window.ScripturaScriptureTexts.UBS5.ACT[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ACT = window.ScripturaScriptureParagraphBreaks.UBS5.ACT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ACT[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ACT = window.ScripturaScriptureHeadings.UBS5.ACT || {};
    window.ScripturaScriptureHeadings.UBS5.ACT[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ACT = window.ScripturaScriptureUnnumberedPassages.UBS5.ACT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ACT[1] = unnumberedPassages;
})();
