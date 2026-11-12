/* UBS5 — Evangelho segundo Mateus, capítulo 3.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Ἐν δὲ ταῖς ἡμέραις ἐκείναις παραγίνεται Ἰωάννης ὁ βαπτιστὴς κηρύσσων ἐν τῇ ἐρήμῳ τῆς Ἰουδαίας",
    "2": "[καὶ] λέγων, Μετανοεῖτε· ἤγγικεν γὰρ ἡ βασιλεία τῶν οὐρανῶν.",
    "3": "οὗτος γάρ ἐστιν ὁ ῥηθεὶς διὰ Ἠσαΐου τοῦ προφήτου λέγοντος,\nΦωνὴ βοῶντος ἐν τῇ ἐρήμῳ·\nἙτοιμάσατε τὴν ὁδὸν κυρίου,\nεὐθείας ποιεῖτε τὰς τρίβους αὐτοῦ.",
    "4": "Αὐτὸς δὲ ὁ Ἰωάννης εἶχεν τὸ ἔνδυμα αὐτοῦ ἀπὸ τριχῶν καμήλου καὶ ζώνην δερματίνην περὶ τὴν ὀσφὺν αὐτοῦ, ἡ δὲ τροφὴ ἦν αὐτοῦ ἀκρίδες καὶ μέλι ἄγριον.",
    "5": "τότε ἐξεπορεύετο πρὸς αὐτὸν Ἱεροσόλυμα καὶ πᾶσα ἡ Ἰουδαία καὶ πᾶσα ἡ περίχωρος τοῦ Ἰορδάνου,",
    "6": "καὶ ἐβαπτίζοντο ἐν τῷ Ἰορδάνῃ ποταμῷ ὑπ᾽ αὐτοῦ ἐξομολογούμενοι τὰς ἁμαρτίας αὐτῶν.",
    "7": "Ἰδὼν δὲ πολλοὺς τῶν Φαρισαίων καὶ Σαδδουκαίων ἐρχομένους ἐπὶ τὸ βάπτισμα αὐτοῦ εἶπεν αὐτοῖς, Γεννήματα ἐχιδνῶν, τίς ὑπέδειξεν ὑμῖν φυγεῖν ἀπὸ τῆς μελλούσης ὀργῆς;",
    "8": "ποιήσατε οὖν καρπὸν ἄξιον τῆς μετανοίας",
    "9": "καὶ μὴ δόξητε λέγειν ἐν ἑαυτοῖς, Πατέρα ἔχομεν τὸν Ἀβραάμ. λέγω γὰρ ὑμῖν ὅτι δύναται ὁ θεὸς ἐκ τῶν λίθων τούτων ἐγεῖραι τέκνα τῷ Ἀβραάμ.",
    "10": "ἤδη δὲ ἡ ἀξίνη πρὸς τὴν ῥίζαν τῶν δένδρων κεῖται· πᾶν οὖν δένδρον μὴ ποιοῦν καρπὸν καλὸν ἐκκόπτεται καὶ εἰς πῦρ βάλλεται.",
    "11": "ἐγὼ μὲν ὑμᾶς βαπτίζω ἐν ὕδατι εἰς μετάνοιαν, ὁ δὲ ὀπίσω μου ἐρχόμενος ἰσχυρότερός μού ἐστιν, οὗ οὐκ εἰμὶ ἱκανὸς τὰ ὑποδήματα βαστάσαι· αὐτὸς ὑμᾶς βαπτίσει ἐν πνεύματι ἁγίῳ καὶ πυρί·",
    "12": "οὗ τὸ πτύον ἐν τῇ χειρὶ αὐτοῦ καὶ διακαθαριεῖ τὴν ἅλωνα αὐτοῦ καὶ συνάξει τὸν σῖτον αὐτοῦ εἰς τὴν ἀποθήκην, τὸ δὲ ἄχυρον κατακαύσει πυρὶ ἀσβέστῳ.",
    "13": "Τότε παραγίνεται ὁ Ἰησοῦς ἀπὸ τῆς Γαλιλαίας ἐπὶ τὸν Ἰορδάνην πρὸς τὸν Ἰωάννην τοῦ βαπτισθῆναι ὑπ᾽ αὐτοῦ.",
    "14": "ὁ δὲ Ἰωάννης διεκώλυεν αὐτὸν λέγων, Ἐγὼ χρείαν ἔχω ὑπὸ σοῦ βαπτισθῆναι, καὶ σὺ ἔρχῃ πρός με;",
    "15": "ἀποκριθεὶς δὲ ὁ Ἰησοῦς εἶπεν πρὸς αὐτόν, Ἄφες ἄρτι, οὕτως γὰρ πρέπον ἐστὶν ἡμῖν πληρῶσαι πᾶσαν δικαιοσύνην. τότε ἀφίησιν αὐτόν.",
    "16": "βαπτισθεὶς δὲ ὁ Ἰησοῦς εὐθὺς ἀνέβη ἀπὸ τοῦ ὕδατος· καὶ ἰδοὺ ἠνεῴχθησαν [αὐτῷ] οἱ οὐρανοί, καὶ εἶδεν [τὸ] πνεῦμα [τοῦ] θεοῦ καταβαῖνον ὡσεὶ περιστερὰν [καὶ] ἐρχόμενον ἐπ᾽ αὐτόν·",
    "17": "καὶ ἰδοὺ φωνὴ ἐκ τῶν οὐρανῶν λέγουσα, Οὗτός ἐστιν ὁ υἱός μου ὁ ἀγαπητός, ἐν ᾧ εὐδόκησα."
};
    const paragraphEnds = [12,17];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Preaching of John the Baptist",
        "sourceTitle": "The Preaching of John the Baptist",
        "parallel": "(Mk 1.1‑8; Lk 3.1‑9, 15‑17; Jn 1.19‑28)"
    },
    {
        "beforeVerse": 13,
        "title": "The Baptism of Jesus",
        "sourceTitle": "The Baptism of Jesus",
        "parallel": "(Mk 1.9‑11; Lk 3.21‑22)"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[3] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[3] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[3] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[3] = unnumberedPassages;
})();
