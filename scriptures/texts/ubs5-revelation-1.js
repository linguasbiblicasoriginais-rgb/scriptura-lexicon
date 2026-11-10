/* UBS5 — Apocalipse de João, capítulo 1.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἀποκάλυψις Ἰησοῦ Χριστοῦ ἣν ἔδωκεν αὐτῷ ὁ θεὸς δεῖξαι τοῖς δούλοις αὐτοῦ ἃ δεῖ γενέσθαι ἐν τάχει, καὶ ἐσήμανεν ἀποστείλας διὰ τοῦ ἀγγέλου αὐτοῦ τῷ δούλῳ αὐτοῦ Ἰωάννῃ,",
    "2": "ὃς ἐμαρτύρησεν τὸν λόγον τοῦ θεοῦ καὶ τὴν μαρτυρίαν Ἰησοῦ Χριστοῦ ὅσα εἶδεν.",
    "3": "μακάριος ὁ ἀναγινώσκων καὶ οἱ ἀκούοντες τοὺς λόγους τῆς προφητείας καὶ τηροῦντες τὰ ἐν αὐτῇ γεγραμμένα, ὁ γὰρ καιρὸς ἐγγύς.",
    "4": "Ἰωάννης ταῖς ἑπτὰ ἐκκλησίαις ταῖς ἐν τῇ Ἀσίᾳ· χάρις ὑμῖν καὶ εἰρήνη ἀπὸ ὁ ὢν καὶ ὁ ἦν καὶ ὁ ἐρχόμενος καὶ ἀπὸ τῶν ἑπτὰ πνευμάτων ἃ ἐνώπιον τοῦ θρόνου αὐτοῦ",
    "5": "καὶ ἀπὸ Ἰησοῦ Χριστοῦ, ὁ μάρτυς, ὁ πιστός, ὁ πρωτότοκος τῶν νεκρῶν καὶ ὁ ἄρχων τῶν βασιλέων τῆς γῆς.\nΤῷ ἀγαπῶντι ἡμᾶς καὶ λύσαντι ἡμᾶς ἐκ τῶν ἁμαρτιῶν ἡμῶν ἐν τῷ αἵματι αὐτοῦ,",
    "6": "καὶ ἐποίησεν ἡμᾶς βασιλείαν, ἱερεῖς τῷ θεῷ καὶ πατρὶ αὐτοῦ, αὐτῷ ἡ δόξα καὶ τὸ κράτος εἰς τοὺς αἰῶνας [τῶν αἰώνων]· ἀμήν.",
    "7": "Ἰδοὺ ἔρχεται μετὰ τῶν νεφελῶν,\nκαὶ ὄψεται αὐτὸν πᾶς ὀφθαλμὸς\nκαὶ οἵτινες αὐτὸν ἐξεκέντησαν,\nκαὶ κόψονται ἐπ᾽ αὐτὸν πᾶσαι αἱ φυλαὶ τῆς γῆς.\nναί, ἀμήν.",
    "8": "Ἐγώ εἰμι τὸ Ἄλφα καὶ τὸ Ὦ, λέγει κύριος ὁ θεός, ὁ ὢν καὶ ὁ ἦν καὶ ὁ ἐρχόμενος, ὁ παντοκράτωρ.",
    "9": "Ἐγὼ Ἰωάννης, ὁ ἀδελφὸς ὑμῶν καὶ συγκοινωνὸς ἐν τῇ θλίψει καὶ βασιλείᾳ καὶ ὑπομονῇ ἐν Ἰησοῦ, ἐγενόμην ἐν τῇ νήσῳ τῇ καλουμένῃ Πάτμῳ διὰ τὸν λόγον τοῦ θεοῦ καὶ τὴν μαρτυρίαν Ἰησοῦ.",
    "10": "ἐγενόμην ἐν πνεύματι ἐν τῇ κυριακῇ ἡμέρᾳ καὶ ἤκουσα ὀπίσω μου φωνὴν μεγάλην ὡς σάλπιγγος",
    "11": "λεγούσης, Ὃ βλέπεις γράψον εἰς βιβλίον καὶ πέμψον ταῖς ἑπτὰ ἐκκλησίαις, εἰς Ἔφεσον καὶ εἰς Σμύρναν καὶ εἰς Πέργαμον καὶ εἰς Θυάτειρα καὶ εἰς Σάρδεις καὶ εἰς Φιλαδέλφειαν καὶ εἰς Λαοδίκειαν.",
    "12": "Καὶ ἐπέστρεψα βλέπειν τὴν φωνὴν ἥτις ἐλάλει μετ᾽ ἐμοῦ, καὶ ἐπιστρέψας εἶδον ἑπτὰ λυχνίας χρυσᾶς",
    "13": "καὶ ἐν μέσῳ τῶν λυχνιῶν ὅμοιον υἱὸν ἀνθρώπου ἐνδεδυμένον ποδήρη καὶ περιεζωσμένον πρὸς τοῖς μαστοῖς ζώνην χρυσᾶν.",
    "14": "ἡ δὲ κεφαλὴ αὐτοῦ καὶ αἱ τρίχες λευκαὶ ὡς ἔριον λευκὸν ὡς χιὼν καὶ οἱ ὀφθαλμοὶ αὐτοῦ ὡς φλὸξ πυρὸς",
    "15": "καὶ οἱ πόδες αὐτοῦ ὅμοιοι χαλκολιβάνῳ ὡς ἐν καμίνῳ πεπυρωμένης καὶ ἡ φωνὴ αὐτοῦ ὡς φωνὴ ὑδάτων πολλῶν,",
    "16": "καὶ ἔχων ἐν τῇ δεξιᾷ χειρὶ αὐτοῦ ἀστέρας ἑπτὰ καὶ ἐκ τοῦ στόματος αὐτοῦ ῥομφαία δίστομος ὀξεῖα ἐκπορευομένη καὶ ἡ ὄψις αὐτοῦ ὡς ὁ ἥλιος φαίνει ἐν τῇ δυνάμει αὐτοῦ.",
    "17": "Καὶ ὅτε εἶδον αὐτόν, ἔπεσα πρὸς τοὺς πόδας αὐτοῦ ὡς νεκρός, καὶ ἔθηκεν τὴν δεξιὰν αὐτοῦ ἐπ᾽ ἐμὲ λέγων, Μὴ φοβοῦ· ἐγώ εἰμι ὁ πρῶτος καὶ ὁ ἔσχατος",
    "18": "καὶ ὁ ζῶν, καὶ ἐγενόμην νεκρὸς καὶ ἰδοὺ ζῶν εἰμι εἰς τοὺς αἰῶνας τῶν αἰώνων καὶ ἔχω τὰς κλεῖς τοῦ θανάτου καὶ τοῦ ᾅδου.",
    "19": "γράψον οὖν ἃ εἶδες καὶ ἃ εἰσὶν καὶ ἃ μέλλει γενέσθαι μετὰ ταῦτα.",
    "20": "τὸ μυστήριον τῶν ἑπτὰ ἀστέρων οὓς εἶδες ἐπὶ τῆς δεξιᾶς μου καὶ τὰς ἑπτὰ λυχνίας τὰς χρυσᾶς· οἱ ἑπτὰ ἀστέρες ἄγγελοι τῶν ἑπτὰ ἐκκλησιῶν εἰσιν καὶ αἱ λυχνίαι αἱ ἑπτὰ ἑπτὰ ἐκκλησίαι εἰσίν."
};
    const paragraphEnds = [3,6,7,8,11,16,20];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Introdução e saudação",
        "sourceTitle": "Introduction and Salutation"
    },
    {
        "beforeVerse": 9,
        "title": "Uma visão de Cristo",
        "sourceTitle": "A Vision of Christ"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[1] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[1] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[1] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[1] = unnumberedPassages;
})();
