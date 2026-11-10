/* UBS5 — Lucas 3. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Atribuição editorial de edição conforme o projeto; sem cotejo independente com UBS5 impressa.
 * Camada Fonte e metadados editoriais mantidos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἐν ἔτει δὲ πεντεκαιδεκάτῳ τῆς ἡγεμονίας Τιβερίου Καίσαρος, ἡγεμονεύοντος Ποντίου Πιλάτου τῆς Ἰουδαίας, καὶ τετρααρχοῦντος τῆς Γαλιλαίας Ἡρῴδου, Φιλίππου δὲ τοῦ ἀδελφοῦ αὐτοῦ τετρααρχοῦντος τῆς Ἰτουραίας καὶ Τραχωνίτιδος χώρας, καὶ Λυσανίου τῆς Ἀβιληνῆς τετρααρχοῦντος,",
    "2": "ἐπὶ ἀρχιερέως Ἅννα καὶ Καϊάφα, ἐγένετο ῥῆμα θεοῦ ἐπὶ Ἰωάννην τὸν Ζαχαρίου υἱὸν ἐν τῇ ἐρήμῳ.",
    "3": "καὶ ἦλθεν εἰς πᾶσαν [τὴν] περίχωρον τοῦ Ἰορδάνου κηρύσσων βάπτισμα μετανοίας εἰς ἄφεσιν ἁμαρτιῶν,",
    "4": "ὡς γέγραπται ἐν βίβλῳ λόγων Ἠσαΐου τοῦ προφήτου,\nΦωνὴ βοῶντος ἐν τῇ ἐρήμῳ,\nἙτοιμάσατε τὴν ὁδὸν κυρίου,\nεὐθείας ποιεῖτε τὰς τρίβους αὐτοῦ·",
    "5": "πᾶσα φάραγξ πληρωθήσεται\nκαὶ πᾶν ὄρος καὶ βουνὸς ταπεινωθήσεται,\nκαὶ ἔσται τὰ σκολιὰ εἰς εὐθεῖαν\nκαὶ αἱ τραχεῖαι εἰς ὁδοὺς λεῖας·",
    "6": "καὶ ὄψεται πᾶσα σὰρξ τὸ σωτήριον τοῦ θεοῦ.",
    "7": "Ἔλεγεν οὖν τοῖς ἐκπορευομένοις ὄχλοις βαπτισθῆναι ὑπ᾽ αὐτοῦ, Γεννήματα ἐχιδνῶν, τίς ὑπέδειξεν ὑμῖν φυγεῖν ἀπὸ τῆς μελλούσης ὀργῆς;",
    "8": "ποιήσατε οὖν καρποὺς ἀξίους τῆς μετανοίας καὶ μὴ ἄρξησθε λέγειν ἐν ἑαυτοῖς, Πατέρα ἔχομεν τὸν Ἀβραάμ. λέγω γὰρ ὑμῖν ὅτι δύναται ὁ θεὸς ἐκ τῶν λίθων τούτων ἐγεῖραι τέκνα τῷ Ἀβραάμ.",
    "9": "ἤδη δὲ καὶ ἡ ἀξίνη πρὸς τὴν ῥίζαν τῶν δένδρων κεῖται· πᾶν οὖν δένδρον μὴ ποιοῦν καρπὸν καλὸν ἐκκόπτεται καὶ εἰς πῦρ βάλλεται.",
    "10": "Καὶ ἐπηρώτων αὐτὸν οἱ ὄχλοι λέγοντες, Τί οὖν ποιήσωμεν;",
    "11": "ἀποκριθεὶς δὲ ἔλεγεν αὐτοῖς, Ὁ ἔχων δύο χιτῶνας μεταδότω τῷ μὴ ἔχοντι, καὶ ὁ ἔχων βρώματα ὁμοίως ποιείτω.",
    "12": "ἦλθον δὲ καὶ τελῶναι βαπτισθῆναι καὶ εἶπαν πρὸς αὐτόν, Διδάσκαλε, τί ποιήσωμεν;",
    "13": "ὁ δὲ εἶπεν πρὸς αὐτούς, Μηδὲν πλέον παρὰ τὸ διατεταγμένον ὑμῖν πράσσετε.",
    "14": "ἐπηρώτων δὲ αὐτὸν καὶ στρατευόμενοι λέγοντες, Τί ποιήσωμεν καὶ ἡμεῖς; καὶ εἶπεν αὐτοῖς, Μηδένα διασείσητε μηδὲ συκοφαντήσητε καὶ ἀρκεῖσθε τοῖς ὀψωνίοις ὑμῶν.",
    "15": "Προσδοκῶντος δὲ τοῦ λαοῦ καὶ διαλογιζομένων πάντων ἐν ταῖς καρδίαις αὐτῶν περὶ τοῦ Ἰωάννου, μήποτε αὐτὸς εἴη ὁ Χριστός,",
    "16": "ἀπεκρίνατο λέγων πᾶσιν ὁ Ἰωάννης, Ἐγὼ μὲν ὕδατι βαπτίζω ὑμᾶς· ἔρχεται δὲ ὁ ἰσχυρότερός μου, οὗ οὐκ εἰμὶ ἱκανὸς λῦσαι τὸν ἱμάντα τῶν ὑποδημάτων αὐτοῦ· αὐτὸς ὑμᾶς βαπτίσει ἐν πνεύματι ἁγίῳ καὶ πυρί·",
    "17": "οὗ τὸ πτύον ἐν τῇ χειρὶ αὐτοῦ διακαθᾶραι τὴν ἅλωνα αὐτοῦ καὶ συναγαγεῖν τὸν σῖτον εἰς τὴν ἀποθήκην αὐτοῦ, τὸ δὲ ἄχυρον κατακαύσει πυρὶ ἀσβέστῳ.",
    "18": "Πολλὰ μὲν οὖν καὶ ἕτερα παρακαλῶν εὐηγγελίζετο τὸν λαόν.",
    "19": "ὁ δὲ Ἡρῴδης ὁ τετραάρχης, ἐλεγχόμενος ὑπ᾽ αὐτοῦ περὶ Ἡρῳδιάδος τῆς γυναικὸς τοῦ ἀδελφοῦ αὐτοῦ καὶ περὶ πάντων ὧν ἐποίησεν πονηρῶν ὁ Ἡρῴδης,",
    "20": "προσέθηκεν καὶ τοῦτο ἐπὶ πᾶσιν [καὶ] κατέκλεισεν τὸν Ἰωάννην ἐν φυλακῇ.",
    "21": "Ἐγένετο δὲ ἐν τῷ βαπτισθῆναι ἅπαντα τὸν λαὸν καὶ Ἰησοῦ βαπτισθέντος καὶ προσευχομένου ἀνεῳχθῆναι τὸν οὐρανὸν",
    "22": "καὶ καταβῆναι τὸ πνεῦμα τὸ ἅγιον σωματικῷ εἴδει ὡς περιστερὰν ἐπ᾽ αὐτόν, καὶ φωνὴν ἐξ οὐρανοῦ γενέσθαι, Σὺ εἶ ὁ υἱός μου ὁ ἀγαπητός, ἐν σοὶ εὐδόκησα.",
    "23": "Καὶ αὐτὸς ἦν Ἰησοῦς ἀρχόμενος ὡσεὶ ἐτῶν τριάκοντα, ὢν υἱός, ὡς ἐνομίζετο, Ἰωσὴφ τοῦ Ἠλὶ",
    "24": "τοῦ Μαθθὰτ τοῦ Λευὶ τοῦ Μελχὶ τοῦ Ἰανναὶ τοῦ Ἰωσὴφ",
    "25": "τοῦ Ματταθίου τοῦ Ἀμὼς τοῦ Ναοὺμ τοῦ Ἑσλὶ τοῦ Ναγγαὶ",
    "26": "τοῦ Μάαθ τοῦ Ματταθίου τοῦ Σεμεῒν τοῦ Ἰωσὴχ τοῦ Ἰωδὰ",
    "27": "τοῦ Ἰωανὰν τοῦ Ῥησὰ τοῦ Ζοροβαβὲλ τοῦ Σαλαθιὴλ τοῦ Νηρὶ",
    "28": "τοῦ Μελχὶ τοῦ Ἀδδὶ τοῦ Κωσὰμ τοῦ Ἐλμαδὰμ τοῦ Ἢρ",
    "29": "τοῦ Ἰησοῦ τοῦ Ἐλιέζερ τοῦ Ἰωρὶμ τοῦ Μαθθὰτ τοῦ Λευὶ",
    "30": "τοῦ Συμεὼν τοῦ Ἰούδα τοῦ Ἰωσὴφ τοῦ Ἰωνὰμ τοῦ Ἐλιακὶμ",
    "31": "τοῦ Μελεὰ τοῦ Μεννὰ τοῦ Ματταθὰ τοῦ Ναθὰμ τοῦ Δαυὶδ",
    "32": "τοῦ Ἰεσσαὶ τοῦ Ἰωβὴδ τοῦ Βόος τοῦ Σαλὰ τοῦ Ναασσὼν",
    "33": "τοῦ Ἀμιναδὰβ τοῦ Ἀδμὶν τοῦ Ἀρνὶ τοῦ Ἑσρὼμ τοῦ Φάρες τοῦ Ἰούδα",
    "34": "τοῦ Ἰακὼβ τοῦ Ἰσαὰκ τοῦ Ἀβραὰμ τοῦ Θάρα τοῦ Ναχὼρ",
    "35": "τοῦ Σεροὺχ τοῦ Ῥαγαὺ τοῦ Φάλεκ τοῦ Ἔβερ τοῦ Σαλὰ",
    "36": "τοῦ Καϊνὰμ τοῦ Ἀρφαξὰδ τοῦ Σὴμ τοῦ Νῶε τοῦ Λάμεχ",
    "37": "τοῦ Μαθουσαλὰ τοῦ Ἑνὼχ τοῦ Ἰάρετ τοῦ Μαλελεὴλ τοῦ Καϊνὰμ",
    "38": "τοῦ Ἐνὼς τοῦ Σὴθ τοῦ Ἀδὰμ τοῦ θεοῦ."
};
    const paragraphEnds = [4,5,6,14,20,22,38];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A pregação de João Batista",
        "sourceTitle": "The Preaching of John the Baptist",
        "parallel": "(Mt 3.1–12; Mc 1.1–8; Jo 1.19–28)"
    },
    {
        "beforeVerse": 21,
        "title": "O batismo de Jesus",
        "sourceTitle": "The Baptism of Jesus",
        "parallel": "(Mt 3.13–17; Mc 1.9–11)"
    },
    {
        "beforeVerse": 23,
        "title": "A genealogia de Jesus",
        "sourceTitle": "The Genealogy of Jesus",
        "parallel": "(Mt 1.1–17)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.LUK = window.ScripturaScriptureTexts.UBS5.LUK || {};
    window.ScripturaScriptureTexts.UBS5.LUK[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK = window.ScripturaScriptureParagraphBreaks.UBS5.LUK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.LUK[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.LUK = window.ScripturaScriptureHeadings.UBS5.LUK || {};
    window.ScripturaScriptureHeadings.UBS5.LUK[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK = window.ScripturaScriptureUnnumberedPassages.UBS5.LUK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.LUK[3] = unnumberedPassages;
})();
