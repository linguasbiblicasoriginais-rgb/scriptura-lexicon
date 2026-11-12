/* UBS5 — Evangelho segundo Mateus, capítulo 28.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ὀψὲ δὲ σαββάτων, τῇ ἐπιφωσκούσῃ εἰς μίαν σαββάτων ἦλθεν Μαριὰμ ἡ Μαγδαληνὴ καὶ ἡ ἄλλη Μαρία θεωρῆσαι τὸν τάφον.",
    "2": "καὶ ἰδοὺ σεισμὸς ἐγένετο μέγας· ἄγγελος γὰρ κυρίου καταβὰς ἐξ οὐρανοῦ καὶ προσελθὼν ἀπεκύλισεν τὸν λίθον καὶ ἐκάθητο ἐπάνω αὐτοῦ.",
    "3": "ἦν δὲ ἡ εἰδέα αὐτοῦ ὡς ἀστραπὴ καὶ τὸ ἔνδυμα αὐτοῦ λευκὸν ὡς χιών.",
    "4": "ἀπὸ δὲ τοῦ φόβου αὐτοῦ ἐσείσθησαν οἱ τηροῦντες καὶ ἐγενήθησαν ὡς νεκροί.",
    "5": "ἀποκριθεὶς δὲ ὁ ἄγγελος εἶπεν ταῖς γυναιξίν, Μὴ φοβεῖσθε ὑμεῖς, οἶδα γὰρ ὅτι Ἰησοῦν τὸν ἐσταυρωμένον ζητεῖτε·",
    "6": "οὐκ ἔστιν ὧδε, ἠγέρθη γὰρ καθὼς εἶπεν· δεῦτε ἴδετε τὸν τόπον ὅπου ἔκειτο.",
    "7": "καὶ ταχὺ πορευθεῖσαι εἴπατε τοῖς μαθηταῖς αὐτοῦ ὅτι Ἠγέρθη ἀπὸ τῶν νεκρῶν, καὶ ἰδοὺ προάγει ὑμᾶς εἰς τὴν Γαλιλαίαν, ἐκεῖ αὐτὸν ὄψεσθε· ἰδοὺ εἶπον ὑμῖν.",
    "8": "καὶ ἀπελθοῦσαι ταχὺ ἀπὸ τοῦ μνημείου μετὰ φόβου καὶ χαρᾶς μεγάλης ἔδραμον ἀπαγγεῖλαι τοῖς μαθηταῖς αὐτοῦ.",
    "9": "καὶ ἰδοὺ Ἰησοῦς ὑπήντησεν αὐταῖς λέγων, Χαίρετε. αἱ δὲ προσελθοῦσαι ἐκράτησαν αὐτοῦ τοὺς πόδας καὶ προσεκύνησαν αὐτῷ.",
    "10": "τότε λέγει αὐταῖς ὁ Ἰησοῦς, Μὴ φοβεῖσθε· ὑπάγετε ἀπαγγείλατε τοῖς ἀδελφοῖς μου ἵνα ἀπέλθωσιν εἰς τὴν Γαλιλαίαν, κἀκεῖ με ὄψονται.",
    "11": "Πορευομένων δὲ αὐτῶν ἰδού τινες τῆς κουστωδίας ἐλθόντες εἰς τὴν πόλιν ἀπήγγειλαν τοῖς ἀρχιερεῦσιν ἅπαντα τὰ γενόμενα.",
    "12": "καὶ συναχθέντες μετὰ τῶν πρεσβυτέρων συμβούλιόν τε λαβόντες ἀργύρια ἱκανὰ ἔδωκαν τοῖς στρατιώταις",
    "13": "λέγοντες, Εἴπατε ὅτι Οἱ μαθηταὶ αὐτοῦ νυκτὸς ἐλθόντες ἔκλεψαν αὐτὸν ἡμῶν κοιμωμένων.",
    "14": "καὶ ἐὰν ἀκουσθῇ τοῦτο ἐπὶ τοῦ ἡγεμόνος, ἡμεῖς πείσομεν [αὐτὸν] καὶ ὑμᾶς ἀμερίμνους ποιήσομεν.",
    "15": "οἱ δὲ λαβόντες τὰ ἀργύρια ἐποίησαν ὡς ἐδιδάχθησαν. Καὶ διεφημίσθη ὁ λόγος οὗτος παρὰ Ἰουδαίοις μέχρι τῆς σήμερον [ἡμέρας].",
    "16": "Οἱ δὲ ἕνδεκα μαθηταὶ ἐπορεύθησαν εἰς τὴν Γαλιλαίαν εἰς τὸ ὄρος οὗ ἐτάξατο αὐτοῖς ὁ Ἰησοῦς,",
    "17": "καὶ ἰδόντες αὐτὸν προσεκύνησαν, οἱ δὲ ἐδίστασαν.",
    "18": "καὶ προσελθὼν ὁ Ἰησοῦς ἐλάλησεν αὐτοῖς λέγων, Ἐδόθη μοι πᾶσα ἐξουσία ἐν οὐρανῷ καὶ ἐπὶ [τῆς] γῆς.",
    "19": "πορευθέντες οὖν μαθητεύσατε πάντα τὰ ἔθνη, βαπτίζοντες αὐτοὺς εἰς τὸ ὄνομα τοῦ πατρὸς καὶ τοῦ υἱοῦ καὶ τοῦ ἁγίου πνεύματος,",
    "20": "διδάσκοντες αὐτοὺς τηρεῖν πάντα ὅσα ἐνετειλάμην ὑμῖν· καὶ ἰδοὺ ἐγὼ μεθ᾽ ὑμῶν εἰμι πάσας τὰς ἡμέρας ἕως τῆς συντελείας τοῦ αἰῶνος."
};
    const paragraphEnds = [10,15,20];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Resurrection of Jesus",
        "sourceTitle": "The Resurrection of Jesus",
        "parallel": "(Mk 16.1‑8; Lk 24.1‑12; Jn 20.1‑10)"
    },
    {
        "beforeVerse": 11,
        "title": "The Report of the Guard",
        "sourceTitle": "The Report of the Guard"
    },
    {
        "beforeVerse": 16,
        "title": "The Commissioning of the Disciples",
        "sourceTitle": "The Commissioning of the Disciples",
        "parallel": "(Mk 16.14‑18; Lk 24.36‑49; Jn 20.19‑23; Ac 1.6‑8)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[28] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[28] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[28] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[28] = unnumberedPassages;
})();
