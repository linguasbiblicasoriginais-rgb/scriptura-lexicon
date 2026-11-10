/* UBS5 — Lucas 13. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Atribuição editorial de edição conforme o projeto; sem cotejo independente com UBS5 impressa.
 * Camada Fonte e metadados editoriais mantidos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Παρῆσαν δέ τινες ἐν αὐτῷ τῷ καιρῷ ἀπαγγέλλοντες αὐτῷ περὶ τῶν Γαλιλαίων ὧν τὸ αἷμα Πιλᾶτος ἔμιξεν μετὰ τῶν θυσιῶν αὐτῶν.",
    "2": "καὶ ἀποκριθεὶς εἶπεν αὐτοῖς, Δοκεῖτε ὅτι οἱ Γαλιλαῖοι οὗτοι ἁμαρτωλοὶ παρὰ πάντας τοὺς Γαλιλαίους ἐγένοντο, ὅτι ταῦτα πεπόνθασιν;",
    "3": "οὐχί, λέγω ὑμῖν, ἀλλ᾽ ἐὰν μὴ μετανοῆτε πάντες ὁμοίως ἀπολεῖσθε.",
    "4": "ἢ ἐκεῖνοι οἱ δεκαοκτὼ ἐφ᾽ οὓς ἔπεσεν ὁ πύργος ἐν τῷ Σιλωὰμ καὶ ἀπέκτεινεν αὐτούς, δοκεῖτε ὅτι αὐτοὶ ὀφειλέται ἐγένοντο παρὰ πάντας τοὺς ἀνθρώπους τοὺς κατοικοῦντας Ἰερουσαλήμ;",
    "5": "οὐχί, λέγω ὑμῖν, ἀλλ᾽ ἐὰν μὴ μετανοῆτε πάντες ὡσαύτως ἀπολεῖσθε.",
    "6": "Ἔλεγεν δὲ ταύτην τὴν παραβολήν· Συκῆν εἶχέν τις πεφυτευμένην ἐν τῷ ἀμπελῶνι αὐτοῦ, καὶ ἦλθεν ζητῶν καρπὸν ἐν αὐτῇ καὶ οὐχ εὗρεν.",
    "7": "εἶπεν δὲ πρὸς τὸν ἀμπελουργόν, Ἰδοὺ τρία ἔτη ἀφ᾽ οὗ ἔρχομαι ζητῶν καρπὸν ἐν τῇ συκῇ ταύτῃ καὶ οὐχ εὑρίσκω· ἔκκοψον [οὖν] αὐτήν, ἱνατί καὶ τὴν γῆν καταργεῖ;",
    "8": "ὁ δὲ ἀποκριθεὶς λέγει αὐτῷ, Κύριε, ἄφες αὐτὴν καὶ τοῦτο τὸ ἔτος, ἕως ὅτου σκάψω περὶ αὐτὴν καὶ βάλω κόπρια,",
    "9": "κἂν μὲν ποιήσῃ καρπὸν εἰς τὸ μέλλον· εἰ δὲ μή γε, ἐκκόψεις αὐτήν.",
    "10": "Ἦν δὲ διδάσκων ἐν μιᾷ τῶν συναγωγῶν ἐν τοῖς σάββασιν.",
    "11": "καὶ ἰδοὺ γυνὴ πνεῦμα ἔχουσα ἀσθενείας ἔτη δεκαοκτὼ καὶ ἦν συγκύπτουσα καὶ μὴ δυναμένη ἀνακύψαι εἰς τὸ παντελές.",
    "12": "ἰδὼν δὲ αὐτὴν ὁ Ἰησοῦς προσεφώνησεν καὶ εἶπεν αὐτῇ, Γύναι, ἀπολέλυσαι τῆς ἀσθενείας σου,",
    "13": "καὶ ἐπέθηκεν αὐτῇ τὰς χεῖρας· καὶ παραχρῆμα ἀνωρθώθη καὶ ἐδόξαζεν τὸν θεόν.",
    "14": "ἀποκριθεὶς δὲ ὁ ἀρχισυνάγωγος, ἀγανακτῶν ὅτι τῷ σαββάτῳ ἐθεράπευσεν ὁ Ἰησοῦς, ἔλεγεν τῷ ὄχλῳ ὅτι Ἓξ ἡμέραι εἰσὶν ἐν αἷς δεῖ ἐργάζεσθαι· ἐν αὐταῖς οὖν ἐρχόμενοι θεραπεύεσθε καὶ μὴ τῇ ἡμέρᾳ τοῦ σαββάτου.",
    "15": "ἀπεκρίθη δὲ αὐτῷ ὁ κύριος καὶ εἶπεν, Ὑποκριταί, ἕκαστος ὑμῶν τῷ σαββάτῳ οὐ λύει τὸν βοῦν αὐτοῦ ἢ τὸν ὄνον ἀπὸ τῆς φάτνης καὶ ἀπαγαγὼν ποτίζει;",
    "16": "ταύτην δὲ θυγατέρα Ἀβραὰμ οὖσαν, ἣν ἔδησεν ὁ Σατανᾶς ἰδοὺ δέκα καὶ ὀκτὼ ἔτη, οὐκ ἔδει λυθῆναι ἀπὸ τοῦ δεσμοῦ τούτου τῇ ἡμέρᾳ τοῦ σαββάτου;",
    "17": "καὶ ταῦτα λέγοντος αὐτοῦ κατῃσχύνοντο πάντες οἱ ἀντικείμενοι αὐτῷ, καὶ πᾶς ὁ ὄχλος ἔχαιρεν ἐπὶ πᾶσιν τοῖς ἐνδόξοις τοῖς γινομένοις ὑπ᾽ αὐτοῦ.",
    "18": "Ἔλεγεν οὖν, Τίνι ὁμοία ἐστὶν ἡ βασιλεία τοῦ θεοῦ καὶ τίνι ὁμοιώσω αὐτήν;",
    "19": "ὁμοία ἐστὶν κόκκῳ σινάπεως, ὃν λαβὼν ἄνθρωπος ἔβαλεν εἰς κῆπον ἑαυτοῦ, καὶ ηὔξησεν καὶ ἐγένετο εἰς δένδρον, καὶ τὰ πετεινὰ τοῦ οὐρανοῦ κατεσκήνωσεν ἐν τοῖς κλάδοις αὐτοῦ.",
    "20": "Καὶ πάλιν εἶπεν, Τίνι ὁμοιώσω τὴν βασιλείαν τοῦ θεοῦ;",
    "21": "ὁμοία ἐστὶν ζύμῃ, ἣν λαβοῦσα γυνὴ [ἐν]έκρυψεν εἰς ἀλεύρου σάτα τρία ἕως οὗ ἐζυμώθη ὅλον.",
    "22": "Καὶ διεπορεύετο κατὰ πόλεις καὶ κώμας διδάσκων καὶ πορείαν ποιούμενος εἰς Ἱεροσόλυμα.",
    "23": "εἶπεν δέ τις αὐτῷ, Κύριε, εἰ ὀλίγοι οἱ σῳζόμενοι; ὁ δὲ εἶπεν πρὸς αὐτούς,",
    "24": "Ἀγωνίζεσθε εἰσελθεῖν διὰ τῆς στενῆς θύρας, ὅτι πολλοί, λέγω ὑμῖν, ζητήσουσιν εἰσελθεῖν καὶ οὐκ ἰσχύσουσιν.",
    "25": "ἀφ᾽ οὗ ἂν ἐγερθῇ ὁ οἰκοδεσπότης καὶ ἀποκλείσῃ τὴν θύραν καὶ ἄρξησθε ἔξω ἑστάναι καὶ κρούειν τὴν θύραν λέγοντες, Κύριε, ἄνοιξον ἡμῖν, καὶ ἀποκριθεὶς ἐρεῖ ὑμῖν, Οὐκ οἶδα ὑμᾶς πόθεν ἐστέ.",
    "26": "τότε ἄρξεσθε λέγειν, Ἐφάγομεν ἐνώπιόν σου καὶ ἐπίομεν καὶ ἐν ταῖς πλατείαις ἡμῶν ἐδίδαξας·",
    "27": "καὶ ἐρεῖ λέγων ὑμῖν, Οὐκ οἶδα [ὑμᾶς] πόθεν ἐστέ· ἀπόστητε ἀπ᾽ ἐμοῦ πάντες ἐργάται ἀδικίας.",
    "28": "ἐκεῖ ἔσται ὁ κλαυθμὸς καὶ ὁ βρυγμὸς τῶν ὀδόντων, ὅταν ὄψησθε Ἀβραὰμ καὶ Ἰσαὰκ καὶ Ἰακὼβ καὶ πάντας τοὺς προφήτας ἐν τῇ βασιλείᾳ τοῦ θεοῦ, ὑμᾶς δὲ ἐκβαλλομένους ἔξω.",
    "29": "καὶ ἥξουσιν ἀπὸ ἀνατολῶν καὶ δυσμῶν καὶ ἀπὸ βορρᾶ καὶ νότου καὶ ἀνακλιθήσονται ἐν τῇ βασιλείᾳ τοῦ θεοῦ.",
    "30": "καὶ ἰδοὺ εἰσὶν ἔσχατοι οἳ ἔσονται πρῶτοι καὶ εἰσὶν πρῶτοι οἳ ἔσονται ἔσχατοι.",
    "31": "Ἐν αὐτῇ τῇ ὥρᾳ προσῆλθάν τινες Φαρισαῖοι λέγοντες αὐτῷ, Ἔξελθε καὶ πορεύου ἐντεῦθεν, ὅτι Ἡρῴδης θέλει σε ἀποκτεῖναι.",
    "32": "καὶ εἶπεν αὐτοῖς, Πορευθέντες εἴπατε τῇ ἀλώπεκι ταύτῃ, Ἰδοὺ ἐκβάλλω δαιμόνια καὶ ἰάσεις ἀποτελῶ σήμερον καὶ αὔριον καὶ τῇ τρίτῃ τελειοῦμαι.",
    "33": "πλὴν δεῖ με σήμερον καὶ αὔριον καὶ τῇ ἐχομένῃ πορεύεσθαι, ὅτι οὐκ ἐνδέχεται προφήτην ἀπολέσθαι ἔξω Ἰερουσαλήμ.",
    "34": "Ἰερουσαλὴμ Ἰερουσαλήμ, ἡ ἀποκτείνουσα τοὺς προφήτας καὶ λιθοβολοῦσα τοὺς ἀπεσταλμένους πρὸς αὐτήν, ποσάκις ἠθέλησα ἐπισυνάξαι τὰ τέκνα σου ὃν τρόπον ὄρνις τὴν ἑαυτῆς νοσσιὰν ὑπὸ τὰς πτέρυγας, καὶ οὐκ ἠθελήσατε.",
    "35": "ἰδοὺ ἀφίεται ὑμῖν ὁ οἶκος ὑμῶν. λέγω [δὲ] ὑμῖν, οὐ μὴ ἴδητέ με ἕως [ἥξει ὅτε] εἴπητε, Εὐλογημένος ὁ ἐρχόμενος ἐν ὀνόματι κυρίου."
};
    const paragraphEnds = [5,9,17,19,21,30,35];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Arrepender-se ou perecer",
        "sourceTitle": "Repent or Perish"
    },
    {
        "beforeVerse": 6,
        "title": "A parábola da figueira estéril",
        "sourceTitle": "The Parable of the Barren Fig Tree"
    },
    {
        "beforeVerse": 10,
        "title": "A cura de uma mulher encurvada no sábado",
        "sourceTitle": "The Healing of a Crippled Woman on the Sabbath"
    },
    {
        "beforeVerse": 18,
        "title": "As parábolas do grão de mostarda e do fermento",
        "sourceTitle": "The Parables of the Mustard Seed and the Leaven",
        "parallel": "(Mt 13.31–33; Mc 4.30–32)"
    },
    {
        "beforeVerse": 22,
        "title": "A porta estreita",
        "sourceTitle": "The Narrow Door",
        "parallel": "(Mt 7.13–14, 21–23)"
    },
    {
        "beforeVerse": 31,
        "title": "O lamento sobre Jerusalém",
        "sourceTitle": "The Lament over Jerusalem",
        "parallel": "(Mt 23.37–39)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.LUK = window.ScripturaScriptureTexts.UBS5.LUK || {};
    window.ScripturaScriptureTexts.UBS5.LUK[13] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK = window.ScripturaScriptureParagraphBreaks.UBS5.LUK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK[13] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.LUK = window.ScripturaScriptureHeadings.UBS5.LUK || {};
    window.ScripturaScriptureHeadings.UBS5.LUK[13] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK = window.ScripturaScriptureUnnumberedPassages.UBS5.LUK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK[13] = unnumberedPassages;
})();
