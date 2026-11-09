/* UBS5 — Marcos 2. Texto grego fornecido pelo usuário em 09/11/2026.
 * Fonte, títulos editoriais em português, referências e limites de parágrafo independentes.
 * Sem cotejo independente com a edição impressa da UBS5.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ εἰσελθὼν πάλιν εἰς Καφαρναοὺμ δι᾽ ἡμερῶν ἠκούσθη ὅτι ἐν οἴκῳ ἐστίν.",
    "2": "καὶ συνήχθησαν πολλοὶ ὥστε μηκέτι χωρεῖν μηδὲ τὰ πρὸς τὴν θύραν, καὶ ἐλάλει αὐτοῖς τὸν λόγον.",
    "3": "καὶ ἔρχονται φέροντες πρὸς αὐτὸν παραλυτικὸν αἰρόμενον ὑπὸ τεσσάρων.",
    "4": "καὶ μὴ δυνάμενοι προσενέγκαι αὐτῷ διὰ τὸν ὄχλον ἀπεστέγασαν τὴν στέγην ὅπου ἦν, καὶ ἐξορύξαντες χαλῶσιν τὸν κράβαττον ὅπου ὁ παραλυτικὸς κατέκειτο.",
    "5": "καὶ ἰδὼν ὁ Ἰησοῦς τὴν πίστιν αὐτῶν λέγει τῷ παραλυτικῷ, Τέκνον, ἀφίενταί σου αἱ ἁμαρτίαι.",
    "6": "ἦσαν δέ τινες τῶν γραμματέων ἐκεῖ καθήμενοι καὶ διαλογιζόμενοι ἐν ταῖς καρδίαις αὐτῶν,",
    "7": "Τί οὗτος οὕτως λαλεῖ; βλασφημεῖ· τίς δύναται ἀφιέναι ἁμαρτίας εἰ μὴ εἷς ὁ θεός;",
    "8": "καὶ εὐθὺς ἐπιγνοὺς ὁ Ἰησοῦς τῷ πνεύματι αὐτοῦ ὅτι οὕτως διαλογίζονται ἐν ἑαυτοῖς λέγει αὐτοῖς, Τί ταῦτα διαλογίζεσθε ἐν ταῖς καρδίαις ὑμῶν;",
    "9": "τί ἐστιν εὐκοπώτερον, εἰπεῖν τῷ παραλυτικῷ, Ἀφίενταί σου αἱ ἁμαρτίαι, ἢ εἰπεῖν, Ἔγειρε καὶ ἆρον τὸν κράβαττόν σου καὶ περιπάτει;",
    "10": "ἵνα δὲ εἰδῆτε ὅτι ἐξουσίαν ἔχει ὁ υἱὸς τοῦ ἀνθρώπου ἀφιέναι ἁμαρτίας ἐπὶ τῆς γῆς – λέγει τῷ παραλυτικῷ,",
    "11": "Σοὶ λέγω, ἔγειρε ἆρον τὸν κράβαττόν σου καὶ ὕπαγε εἰς τὸν οἶκόν σου.",
    "12": "καὶ ἠγέρθη καὶ εὐθὺς ἄρας τὸν κράβαττον ἐξῆλθεν ἔμπροσθεν πάντων, ὥστε ἐξίστασθαι πάντας καὶ δοξάζειν τὸν θεὸν λέγοντας ὅτι Οὕτως οὐδέποτε εἴδομεν.",
    "13": "Καὶ ἐξῆλθεν πάλιν παρὰ τὴν θάλασσαν· καὶ πᾶς ὁ ὄχλος ἤρχετο πρὸς αὐτόν, καὶ ἐδίδασκεν αὐτούς.",
    "14": "καὶ παράγων εἶδεν Λευὶν τὸν τοῦ Ἁλφαίου καθήμενον ἐπὶ τὸ τελώνιον, καὶ λέγει αὐτῷ, Ἀκολούθει μοι. καὶ ἀναστὰς ἠκολούθησεν αὐτῷ.",
    "15": "Καὶ γίνεται κατακεῖσθαι αὐτὸν ἐν τῇ οἰκίᾳ αὐτοῦ, καὶ πολλοὶ τελῶναι καὶ ἁμαρτωλοὶ συνανέκειντο τῷ Ἰησοῦ καὶ τοῖς μαθηταῖς αὐτοῦ· ἦσαν γὰρ πολλοὶ καὶ ἠκολούθουν αὐτῷ.",
    "16": "καὶ οἱ γραμματεῖς τῶν Φαρισαίων ἰδόντες ὅτι ἐσθίει μετὰ τῶν ἁμαρτωλῶν καὶ τελωνῶν ἔλεγον τοῖς μαθηταῖς αὐτοῦ, Ὅτι μετὰ τῶν τελωνῶν καὶ ἁμαρτωλῶν ἐσθίει;",
    "17": "καὶ ἀκούσας ὁ Ἰησοῦς λέγει αὐτοῖς [ὅτι] Οὐ χρείαν ἔχουσιν οἱ ἰσχύοντες ἰατροῦ ἀλλ᾽ οἱ κακῶς ἔχοντες· οὐκ ἦλθον καλέσαι δικαίους ἀλλ᾽ ἁμαρτωλούς.",
    "18": "Καὶ ἦσαν οἱ μαθηταὶ Ἰωάννου καὶ οἱ Φαρισαῖοι νηστεύοντες. καὶ ἔρχονται καὶ λέγουσιν αὐτῷ, Διὰ τί οἱ μαθηταὶ Ἰωάννου καὶ οἱ μαθηταὶ τῶν Φαρισαίων νηστεύουσιν, οἱ δὲ σοὶ μαθηταὶ οὐ νηστεύουσιν;",
    "19": "καὶ εἶπεν αὐτοῖς ὁ Ἰησοῦς, Μὴ δύνανται οἱ υἱοὶ τοῦ νυμφῶνος ἐν ᾧ ὁ νυμφίος μετ᾽ αὐτῶν ἐστιν νηστεύειν; ὅσον χρόνον ἔχουσιν τὸν νυμφίον μετ᾽ αὐτῶν οὐ δύνανται νηστεύειν.",
    "20": "ἐλεύσονται δὲ ἡμέραι ὅταν ἀπαρθῇ ἀπ᾽ αὐτῶν ὁ νυμφίος, καὶ τότε νηστεύσουσιν ἐν ἐκείνῃ τῇ ἡμέρᾳ.",
    "21": "Οὐδεὶς ἐπίβλημα ῥάκους ἀγνάφου ἐπιράπτει ἐπὶ ἱμάτιον παλαιόν· εἰ δὲ μή, αἴρει τὸ πλήρωμα ἀπ᾽ αὐτοῦ τὸ καινὸν τοῦ παλαιοῦ καὶ χεῖρον σχίσμα γίνεται.",
    "22": "καὶ οὐδεὶς βάλλει οἶνον νέον εἰς ἀσκοὺς παλαιούς· εἰ δὲ μή, ῥήξει ὁ οἶνος τοὺς ἀσκοὺς καὶ ὁ οἶνος ἀπόλλυται καὶ οἱ ἀσκοί· ἀλλ᾽ οἶνον νέον εἰς ἀσκοὺς καινούς.",
    "23": "Καὶ ἐγένετο αὐτὸν ἐν τοῖς σάββασιν παραπορεύεσθαι διὰ τῶν σπορίμων, καὶ οἱ μαθηταὶ αὐτοῦ ἤρξαντο ὁδὸν ποιεῖν τίλλοντες τοὺς στάχυας.",
    "24": "καὶ οἱ Φαρισαῖοι ἔλεγον αὐτῷ, Ἴδε τί ποιοῦσιν τοῖς σάββασιν ὃ οὐκ ἔξεστιν;",
    "25": "καὶ λέγει αὐτοῖς, Οὐδέποτε ἀνέγνωτε τί ἐποίησεν Δαυὶδ ὅτε χρείαν ἔσχεν καὶ ἐπείνασεν αὐτὸς καὶ οἱ μετ᾽ αὐτοῦ,",
    "26": "πῶς εἰσῆλθεν εἰς τὸν οἶκον τοῦ θεοῦ ἐπὶ Ἀβιαθὰρ ἀρχιερέως καὶ τοὺς ἄρτους τῆς προθέσεως ἔφαγεν, οὓς οὐκ ἔξεστιν φαγεῖν εἰ μὴ τοὺς ἱερεῖς, καὶ ἔδωκεν καὶ τοῖς σὺν αὐτῷ οὖσιν;",
    "27": "καὶ ἔλεγεν αὐτοῖς, Τὸ σάββατον διὰ τὸν ἄνθρωπον ἐγένετο καὶ οὐχ ὁ ἄνθρωπος διὰ τὸ σάββατον·",
    "28": "ὥστε κύριός ἐστιν ὁ υἱὸς τοῦ ἀνθρώπου καὶ τοῦ σαββάτου."
};
    const paragraphEnds = [12,17,20,22,28];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A cura de um paralítico",
        "sourceTitle": "The Healing of a Paralytic",
        "parallel": "(Mt 9.1–8; Lc 5.17–26)"
    },
    {
        "beforeVerse": 13,
        "title": "O chamado de Levi",
        "sourceTitle": "The Calling of Levi",
        "parallel": "(Mt 9.9–13; Lc 5.27–32)"
    },
    {
        "beforeVerse": 18,
        "title": "A questão do jejum",
        "sourceTitle": "The Question about Fasting",
        "parallel": "(Mt 9.14–17; Lc 5.33–39)"
    },
    {
        "beforeVerse": 23,
        "title": "Os discípulos colhem espigas no sábado",
        "sourceTitle": "Plucking Grain on the Sabbath",
        "parallel": "(Mt 12.1–8; Lc 6.1–5)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MRK = window.ScripturaScriptureTexts.UBS5.MRK || {};
    window.ScripturaScriptureTexts.UBS5.MRK[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK = window.ScripturaScriptureParagraphBreaks.UBS5.MRK || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MRK[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MRK = window.ScripturaScriptureHeadings.UBS5.MRK || {};
    window.ScripturaScriptureHeadings.UBS5.MRK[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK = window.ScripturaScriptureUnnumberedPassages.UBS5.MRK || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MRK[2] = unnumberedPassages;
})();
