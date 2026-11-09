/* UBS5 — Atos dos Apóstolos 12. Transcrição grega fornecida pelo usuário em 09/11/2026.
 * Identificação UBS5 conforme o projeto, sem cotejo independente com exemplar impresso.
 * O texto grego e os metadados editoriais permanecem em estruturas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Κατ᾽ ἐκεῖνον δὲ τὸν καιρὸν ἐπέβαλεν Ἡρῴδης ὁ βασιλεὺς τὰς χεῖρας κακῶσαί τινας τῶν ἀπὸ τῆς ἐκκλησίας.",
    "2": "ἀνεῖλεν δὲ Ἰάκωβον τὸν ἀδελφὸν Ἰωάννου μαχαίρῃ.",
    "3": "ἰδὼν δὲ ὅτι ἀρεστόν ἐστιν τοῖς Ἰουδαίοις, προσέθετο συλλαβεῖν καὶ Πέτρον, – ἦσαν δὲ [αἱ] ἡμέραι τῶν ἀζύμων –",
    "4": "ὃν καὶ πιάσας ἔθετο εἰς φυλακὴν παραδοὺς τέσσαρσιν τετραδίοις στρατιωτῶν φυλάσσειν αὐτόν, βουλόμενος μετὰ τὸ πάσχα ἀναγαγεῖν αὐτὸν τῷ λαῷ.",
    "5": "ὁ μὲν οὖν Πέτρος ἐτηρεῖτο ἐν τῇ φυλακῇ· προσευχὴ δὲ ἦν ἐκτενῶς γινομένη ὑπὸ τῆς ἐκκλησίας πρὸς τὸν θεὸν περὶ αὐτοῦ.",
    "6": "Ὅτε δὲ ἤμελλεν προαγαγεῖν αὐτὸν ὁ Ἡρῴδης, τῇ νυκτὶ ἐκείνῃ ἦν ὁ Πέτρος κοιμώμενος μεταξὺ δύο στρατιωτῶν δεδεμένος ἁλύσεσιν δυσὶν φύλακές τε πρὸ τῆς θύρας ἐτήρουν τὴν φυλακήν.",
    "7": "καὶ ἰδοὺ ἄγγελος κυρίου ἐπέστη καὶ φῶς ἔλαμψεν ἐν τῷ οἰκήματι· πατάξας δὲ τὴν πλευρὰν τοῦ Πέτρου ἤγειρεν αὐτὸν λέγων, Ἀνάστα ἐν τάχει. καὶ ἐξέπεσαν αὐτοῦ αἱ ἁλύσεις ἐκ τῶν χειρῶν.",
    "8": "εἶπεν δὲ ὁ ἄγγελος πρὸς αὐτόν, Ζῶσαι καὶ ὑπόδησαι τὰ σανδάλιά σου. ἐποίησεν δὲ οὕτως. καὶ λέγει αὐτῷ, Περιβαλοῦ τὸ ἱμάτιόν σου καὶ ἀκολούθει μοι.",
    "9": "καὶ ἐξελθὼν ἠκολούθει καὶ οὐκ ᾔδει ὅτι ἀληθές ἐστιν τὸ γινόμενον διὰ τοῦ ἀγγέλου· ἐδόκει δὲ ὅραμα βλέπειν.",
    "10": "διελθόντες δὲ πρώτην φυλακὴν καὶ δευτέραν ἦλθαν ἐπὶ τὴν πύλην τὴν σιδηρᾶν τὴν φέρουσαν εἰς τὴν πόλιν, ἥτις αὐτομάτη ἠνοίγη αὐτοῖς καὶ ἐξελθόντες προῆλθον ῥύμην μίαν, καὶ εὐθέως ἀπέστη ὁ ἄγγελος ἀπ᾽ αὐτοῦ.",
    "11": "καὶ ὁ Πέτρος ἐν ἑαυτῷ γενόμενος εἶπεν, Νῦν οἶδα ἀληθῶς ὅτι ἐξαπέστειλεν [ὁ] κύριος τὸν ἄγγελον αὐτοῦ καὶ ἐξείλατό με ἐκ χειρὸς Ἡρῴδου καὶ πάσης τῆς προσδοκίας τοῦ λαοῦ τῶν Ἰουδαίων.",
    "12": "συνιδών τε ἦλθεν ἐπὶ τὴν οἰκίαν τῆς Μαρίας τῆς μητρὸς Ἰωάννου τοῦ ἐπικαλουμένου Μάρκου, οὗ ἦσαν ἱκανοὶ συνηθροισμένοι καὶ προσευχόμενοι.",
    "13": "κρούσαντος δὲ αὐτοῦ τὴν θύραν τοῦ πυλῶνος προσῆλθεν παιδίσκη ὑπακοῦσαι ὀνόματι Ῥόδη,",
    "14": "καὶ ἐπιγνοῦσα τὴν φωνὴν τοῦ Πέτρου ἀπὸ τῆς χαρᾶς οὐκ ἤνοιξεν τὸν πυλῶνα, εἰσδραμοῦσα δὲ ἀπήγγειλεν ἑστάναι τὸν Πέτρον πρὸ τοῦ πυλῶνος.",
    "15": "οἱ δὲ πρὸς αὐτὴν εἶπαν, Μαίνῃ. ἡ δὲ διϊσχυρίζετο οὕτως ἔχειν. οἱ δὲ ἔλεγον, Ὁ ἄγγελός ἐστιν αὐτοῦ.",
    "16": "ὁ δὲ Πέτρος ἐπέμενεν κρούων· ἀνοίξαντες δὲ εἶδαν αὐτὸν καὶ ἐξέστησαν.",
    "17": "κατασείσας δὲ αὐτοῖς τῇ χειρὶ σιγᾶν διηγήσατο [αὐτοῖς] πῶς ὁ κύριος αὐτὸν ἐξήγαγεν ἐκ τῆς φυλακῆς εἶπέν τε, Ἀπαγγείλατε Ἰακώβῳ καὶ τοῖς ἀδελφοῖς ταῦτα. καὶ ἐξελθὼν ἐπορεύθη εἰς ἕτερον τόπον.",
    "18": "Γενομένης δὲ ἡμέρας ἦν τάραχος οὐκ ὀλίγος ἐν τοῖς στρατιώταις τί ἄρα ὁ Πέτρος ἐγένετο.",
    "19": "Ἡρῴδης δὲ ἐπιζητήσας αὐτὸν καὶ μὴ εὑρών, ἀνακρίνας τοὺς φύλακας ἐκέλευσεν ἀπαχθῆναι, καὶ κατελθὼν ἀπὸ τῆς Ἰουδαίας εἰς Καισάρειαν διέτριβεν.",
    "20": "Ἦν δὲ θυμομαχῶν Τυρίοις καὶ Σιδωνίοις· ὁμοθυμαδὸν δὲ παρῆσαν πρὸς αὐτὸν καὶ πείσαντες Βλάστον, τὸν ἐπὶ τοῦ κοιτῶνος τοῦ βασιλέως, ᾐτοῦντο εἰρήνην διὰ τὸ τρέφεσθαι αὐτῶν τὴν χώραν ἀπὸ τῆς βασιλικῆς.",
    "21": "τακτῇ δὲ ἡμέρᾳ ὁ Ἡρῴδης ἐνδυσάμενος ἐσθῆτα βασιλικὴν [καὶ] καθίσας ἐπὶ τοῦ βήματος ἐδημηγόρει πρὸς αὐτούς,",
    "22": "ὁ δὲ δῆμος ἐπεφώνει, Θεοῦ φωνὴ καὶ οὐκ ἀνθρώπου.",
    "23": "παραχρῆμα δὲ ἐπάταξεν αὐτὸν ἄγγελος κυρίου ἀνθ᾽ ὧν οὐκ ἔδωκεν τὴν δόξαν τῷ θεῷ, καὶ γενόμενος σκωληκόβρωτος ἐξέψυξεν.",
    "24": "Ὁ δὲ λόγος τοῦ θεοῦ ηὔξανεν καὶ ἐπληθύνετο.",
    "25": "Βαρναβᾶς δὲ καὶ Σαῦλος ὑπέστρεψαν εἰς Ἰερουσαλὴμ πληρώσαντες τὴν διακονίαν, συμπαραλαβόντες Ἰωάννην τὸν ἐπικληθέντα Μᾶρκον."
};
    const paragraphEnds = [5,17,19,23,25];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Tiago é morto e Pedro é preso",
        "sourceTitle": "James Killed and Peter Imprisoned"
    },
    {
        "beforeVerse": 6,
        "title": "Pedro é libertado da prisão",
        "sourceTitle": "Peter Delivered from Prison"
    },
    {
        "beforeVerse": 20,
        "title": "A morte de Herodes",
        "sourceTitle": "The Death of Herod"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.ACT = window.ScripturaScriptureTexts.UBS5.ACT || {};
    window.ScripturaScriptureTexts.UBS5.ACT[12] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ACT = window.ScripturaScriptureParagraphBreaks.UBS5.ACT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.ACT[12] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.ACT = window.ScripturaScriptureHeadings.UBS5.ACT || {};
    window.ScripturaScriptureHeadings.UBS5.ACT[12] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ACT = window.ScripturaScriptureUnnumberedPassages.UBS5.ACT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.ACT[12] = unnumberedPassages;
})();
