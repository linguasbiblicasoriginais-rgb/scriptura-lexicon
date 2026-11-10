/* UBS5 — Apocalipse de João, capítulo 19.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μετὰ ταῦτα ἤκουσα ὡς φωνὴν μεγάλην ὄχλου πολλοῦ ἐν τῷ οὐρανῷ λεγόντων,\nἉλληλουϊά·\nἡ σωτηρία καὶ ἡ δόξα καὶ ἡ δύναμις τοῦ θεοῦ ἡμῶν,",
    "2": "ὅτι ἀληθιναὶ καὶ δίκαιαι αἱ κρίσεις αὐτοῦ·\nὅτι ἔκρινεν τὴν πόρνην τὴν μεγάλην\nἥτις ἔφθειρεν τὴν γῆν ἐν τῇ πορνείᾳ αὐτῆς,\nκαὶ ἐξεδίκησεν τὸ αἷμα τῶν δούλων αὐτοῦ\nἐκ χειρὸς αὐτῆς.",
    "3": "καὶ δεύτερον εἴρηκαν,\nἉλληλουϊά·\nκαὶ ὁ καπνὸς αὐτῆς ἀναβαίνει εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    "4": "καὶ ἔπεσαν οἱ πρεσβύτεροι οἱ εἴκοσι τέσσαρες καὶ τὰ τέσσαρα ζῷα καὶ προσεκύνησαν τῷ θεῷ τῷ καθημένῳ ἐπὶ τῷ θρόνῳ λέγοντες,\nἈμὴν Ἁλληλουϊά.",
    "5": "Καὶ φωνὴ ἀπὸ τοῦ θρόνου ἐξῆλθεν λέγουσα,\nΑἰνεῖτε τῷ θεῷ ἡμῶν\nπάντες οἱ δοῦλοι αὐτοῦ\n[καὶ] οἱ φοβούμενοι αὐτόν,\nοἱ μικροὶ καὶ οἱ μεγάλοι.",
    "6": "καὶ ἤκουσα ὡς φωνὴν ὄχλου πολλοῦ καὶ ὡς φωνὴν ὑδάτων πολλῶν καὶ ὡς φωνὴν βροντῶν ἰσχυρῶν λεγόντων,\nἉλληλουϊά,\nὅτι ἐβασίλευσεν κύριος\nὁ θεὸς [ἡμῶν] ὁ παντοκράτωρ.",
    "7": "χαίρωμεν καὶ ἀγαλλιῶμεν\nκαὶ δώσωμεν τὴν δόξαν αὐτῷ,\nὅτι ἦλθεν ὁ γάμος τοῦ ἀρνίου\nκαὶ ἡ γυνὴ αὐτοῦ ἡτοίμασεν ἑαυτὴν",
    "8": "καὶ ἐδόθη αὐτῇ ἵνα περιβάληται\nβύσσινον λαμπρὸν καθαρόν·\nτὸ γὰρ βύσσινον τὰ δικαιώματα τῶν ἁγίων ἐστίν.",
    "9": "Καὶ λέγει μοι, Γράψον· Μακάριοι οἱ εἰς τὸ δεῖπνον τοῦ γάμου τοῦ ἀρνίου κεκλημένοι. καὶ λέγει μοι, Οὗτοι οἱ λόγοι ἀληθινοὶ τοῦ θεοῦ εἰσιν.",
    "10": "καὶ ἔπεσα ἔμπροσθεν τῶν ποδῶν αὐτοῦ προσκυνῆσαι αὐτῷ. καὶ λέγει μοι, Ὅρα μή· σύνδουλός σού εἰμι καὶ τῶν ἀδελφῶν σου τῶν ἐχόντων τὴν μαρτυρίαν Ἰησοῦ· τῷ θεῷ προσκύνησον. ἡ γὰρ μαρτυρία Ἰησοῦ ἐστιν τὸ πνεῦμα τῆς προφητείας.",
    "11": "Καὶ εἶδον τὸν οὐρανὸν ἠνεῳγμένον, καὶ ἰδοὺ ἵππος λευκὸς καὶ ὁ καθήμενος ἐπ᾽ αὐτὸν [καλούμενος] πιστὸς καὶ ἀληθινός, καὶ ἐν δικαιοσύνῃ κρίνει καὶ πολεμεῖ.",
    "12": "οἱ δὲ ὀφθαλμοὶ αὐτοῦ [ὡς] φλὸξ πυρός, καὶ ἐπὶ τὴν κεφαλὴν αὐτοῦ διαδήματα πολλά, ἔχων ὄνομα γεγραμμένον ὃ οὐδεὶς οἶδεν εἰ μὴ αὐτός,",
    "13": "καὶ περιβεβλημένος ἱμάτιον βεβαμμένον αἵματι, καὶ κέκληται τὸ ὄνομα αὐτοῦ ὁ λόγος τοῦ θεοῦ.",
    "14": "καὶ τὰ στρατεύματα [τὰ] ἐν τῷ οὐρανῷ ἠκολούθει αὐτῷ ἐφ᾽ ἵπποις λευκοῖς, ἐνδεδυμένοι βύσσινον λευκὸν καθαρόν.",
    "15": "καὶ ἐκ τοῦ στόματος αὐτοῦ ἐκπορεύεται ῥομφαία ὀξεῖα, ἵνα ἐν αὐτῇ πατάξῃ τὰ ἔθνη, καὶ αὐτὸς ποιμανεῖ αὐτοὺς ἐν ῥάβδῳ σιδηρᾷ, καὶ αὐτὸς πατεῖ τὴν ληνὸν τοῦ οἴνου τοῦ θυμοῦ τῆς ὀργῆς τοῦ θεοῦ τοῦ παντοκράτορος,",
    "16": "καὶ ἔχει ἐπὶ τὸ ἱμάτιον καὶ ἐπὶ τὸν μηρὸν αὐτοῦ ὄνομα γεγραμμένον· Βασιλεὺς βασιλέων καὶ κύριος κυρίων.",
    "17": "Καὶ εἶδον ἕνα ἄγγελον ἑστῶτα ἐν τῷ ἡλίῳ καὶ ἔκραξεν [ἐν] φωνῇ μεγάλῃ λέγων πᾶσιν τοῖς ὀρνέοις τοῖς πετομένοις ἐν μεσουρανήματι, Δεῦτε συνάχθητε εἰς τὸ δεῖπνον τὸ μέγα τοῦ θεοῦ",
    "18": "ἵνα φάγητε σάρκας βασιλέων καὶ σάρκας χιλιάρχων καὶ σάρκας ἰσχυρῶν καὶ σάρκας ἵππων καὶ τῶν καθημένων ἐπ᾽ αὐτῶν καὶ σάρκας πάντων ἐλευθέρων τε καὶ δούλων καὶ μικρῶν καὶ μεγάλων.",
    "19": "Καὶ εἶδον τὸ θηρίον καὶ τοὺς βασιλεῖς τῆς γῆς καὶ τὰ στρατεύματα αὐτῶν συνηγμένα ποιῆσαι τὸν πόλεμον μετὰ τοῦ καθημένου ἐπὶ τοῦ ἵππου καὶ μετὰ τοῦ στρατεύματος αὐτοῦ.",
    "20": "καὶ ἐπιάσθη τὸ θηρίον καὶ μετ᾽ αὐτοῦ ὁ ψευδοπροφήτης ὁ ποιήσας τὰ σημεῖα ἐνώπιον αὐτοῦ, ἐν οἷς ἐπλάνησεν τοὺς λαβόντας τὸ χάραγμα τοῦ θηρίου καὶ τοὺς προσκυνοῦντας τῇ εἰκόνι αὐτοῦ· ζῶντες ἐβλήθησαν οἱ δύο εἰς τὴν λίμνην τοῦ πυρὸς τῆς καιομένης ἐν θείῳ.",
    "21": "καὶ οἱ λοιποὶ ἀπεκτάνθησαν ἐν τῇ ῥομφαίᾳ τοῦ καθημένου ἐπὶ τοῦ ἵππου τῇ ἐξελθούσῃ ἐκ τοῦ στόματος αὐτοῦ, καὶ πάντα τὰ ὄρνεα ἐχορτάσθησαν ἐκ τῶν σαρκῶν αὐτῶν."
};
    const paragraphEnds = [1,2,3,4,5,6,7,8,10,16,21];
    const headings = [
    {
        "beforeVerse": 5,
        "title": "A ceia das bodas do Cordeiro",
        "sourceTitle": "The Marriage Supper of the Lamb"
    },
    {
        "beforeVerse": 11,
        "title": "O cavaleiro do cavalo branco",
        "sourceTitle": "The Rider on the White Horse"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[19] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[19] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[19] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[19] = unnumberedPassages;
})();
