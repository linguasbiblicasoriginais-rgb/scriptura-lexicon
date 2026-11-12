/* UBS5 — Evangelho segundo Mateus, capítulo 9.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἐμβὰς εἰς πλοῖον διεπέρασεν καὶ ἦλθεν εἰς τὴν ἰδίαν πόλιν.",
    "2": "καὶ ἰδοὺ προσέφερον αὐτῷ παραλυτικὸν ἐπὶ κλίνης βεβλημένον. καὶ ἰδὼν ὁ Ἰησοῦς τὴν πίστιν αὐτῶν εἶπεν τῷ παραλυτικῷ, Θάρσει, τέκνον, ἀφίενταί σου αἱ ἁμαρτίαι.",
    "3": "καὶ ἰδού τινες τῶν γραμματέων εἶπαν ἐν ἑαυτοῖς, Οὗτος βλασφημεῖ.",
    "4": "καὶ ἰδὼν ὁ Ἰησοῦς τὰς ἐνθυμήσεις αὐτῶν εἶπεν, Ἱνατί ἐνθυμεῖσθε πονηρὰ ἐν ταῖς καρδίαις ὑμῶν;",
    "5": "τί γάρ ἐστιν εὐκοπώτερον, εἰπεῖν, Ἀφίενταί σου αἱ ἁμαρτίαι, ἢ εἰπεῖν, Ἔγειρε καὶ περιπάτει;",
    "6": "ἵνα δὲ εἰδῆτε ὅτι ἐξουσίαν ἔχει ὁ υἱὸς τοῦ ἀνθρώπου ἐπὶ τῆς γῆς ἀφιέναι ἁμαρτίας – τότε λέγει τῷ παραλυτικῷ, Ἐγερθεὶς ἆρόν σου τὴν κλίνην καὶ ὕπαγε εἰς τὸν οἶκόν σου.",
    "7": "καὶ ἐγερθεὶς ἀπῆλθεν εἰς τὸν οἶκον αὐτοῦ.",
    "8": "ἰδόντες δὲ οἱ ὄχλοι ἐφοβήθησαν καὶ ἐδόξασαν τὸν θεὸν τὸν δόντα ἐξουσίαν τοιαύτην τοῖς ἀνθρώποις.",
    "9": "Καὶ παράγων ὁ Ἰησοῦς ἐκεῖθεν εἶδεν ἄνθρωπον καθήμενον ἐπὶ τὸ τελώνιον, Μαθθαῖον λεγόμενον, καὶ λέγει αὐτῷ, Ἀκολούθει μοι. καὶ ἀναστὰς ἠκολούθησεν αὐτῷ.",
    "10": "Καὶ ἐγένετο αὐτοῦ ἀνακειμένου ἐν τῇ οἰκίᾳ, καὶ ἰδοὺ πολλοὶ τελῶναι καὶ ἁμαρτωλοὶ ἐλθόντες συνανέκειντο τῷ Ἰησοῦ καὶ τοῖς μαθηταῖς αὐτοῦ.",
    "11": "καὶ ἰδόντες οἱ Φαρισαῖοι ἔλεγον τοῖς μαθηταῖς αὐτοῦ, Διὰ τί μετὰ τῶν τελωνῶν καὶ ἁμαρτωλῶν ἐσθίει ὁ διδάσκαλος ὑμῶν;",
    "12": "ὁ δὲ ἀκούσας εἶπεν, Οὐ χρείαν ἔχουσιν οἱ ἰσχύοντες ἰατροῦ ἀλλ᾽ οἱ κακῶς ἔχοντες.",
    "13": "πορευθέντες δὲ μάθετε τί ἐστιν, Ἔλεος θέλω καὶ οὐ θυσίαν· οὐ γὰρ ἦλθον καλέσαι δικαίους ἀλλ᾽ ἁμαρτωλούς.",
    "14": "Τότε προσέρχονται αὐτῷ οἱ μαθηταὶ Ἰωάννου λέγοντες, Διὰ τί ἡμεῖς καὶ οἱ Φαρισαῖοι νηστεύομεν [πολλά], οἱ δὲ μαθηταί σου οὐ νηστεύουσιν;",
    "15": "καὶ εἶπεν αὐτοῖς ὁ Ἰησοῦς, Μὴ δύνανται οἱ υἱοὶ τοῦ νυμφῶνος πενθεῖν ἐφ᾽ ὅσον μετ᾽ αὐτῶν ἐστιν ὁ νυμφίος; ἐλεύσονται δὲ ἡμέραι ὅταν ἀπαρθῇ ἀπ᾽ αὐτῶν ὁ νυμφίος, καὶ τότε νηστεύσουσιν.",
    "16": "οὐδεὶς δὲ ἐπιβάλλει ἐπίβλημα ῥάκους ἀγνάφου ἐπὶ ἱματίῳ παλαιῷ· αἴρει γὰρ τὸ πλήρωμα αὐτοῦ ἀπὸ τοῦ ἱματίου καὶ χεῖρον σχίσμα γίνεται.",
    "17": "οὐδὲ βάλλουσιν οἶνον νέον εἰς ἀσκοὺς παλαιούς· εἰ δὲ μή γε, ῥήγνυνται οἱ ἀσκοὶ καὶ ὁ οἶνος ἐκχεῖται καὶ οἱ ἀσκοὶ ἀπόλλυνται· ἀλλὰ βάλλουσιν οἶνον νέον εἰς ἀσκοὺς καινούς, καὶ ἀμφότεροι συντηροῦνται.",
    "18": "Ταῦτα αὐτοῦ λαλοῦντος αὐτοῖς, ἰδοὺ ἄρχων εἷς ἐλθὼν προσεκύνει αὐτῷ λέγων ὅτι Ἡ θυγάτηρ μου ἄρτι ἐτελεύτησεν· ἀλλ᾽ ἐλθὼν ἐπίθες τὴν χεῖρά σου ἐπ᾽ αὐτήν, καὶ ζήσεται.",
    "19": "καὶ ἐγερθεὶς ὁ Ἰησοῦς ἠκολούθησεν αὐτῷ καὶ οἱ μαθηταὶ αὐτοῦ.",
    "20": "Καὶ ἰδοὺ γυνὴ αἱμορροοῦσα δώδεκα ἔτη προσελθοῦσα ὄπισθεν ἥψατο τοῦ κρασπέδου τοῦ ἱματίου αὐτοῦ·",
    "21": "ἔλεγεν γὰρ ἐν ἑαυτῇ, Ἐὰν μόνον ἅψωμαι τοῦ ἱματίου αὐτοῦ σωθήσομαι.",
    "22": "ὁ δὲ Ἰησοῦς στραφεὶς καὶ ἰδὼν αὐτὴν εἶπεν, Θάρσει, θύγατερ· ἡ πίστις σου σέσωκέν σε. καὶ ἐσώθη ἡ γυνὴ ἀπὸ τῆς ὥρας ἐκείνης.",
    "23": "Καὶ ἐλθὼν ὁ Ἰησοῦς εἰς τὴν οἰκίαν τοῦ ἄρχοντος καὶ ἰδὼν τοὺς αὐλητὰς καὶ τὸν ὄχλον θορυβούμενον",
    "24": "ἔλεγεν, Ἀναχωρεῖτε, οὐ γὰρ ἀπέθανεν τὸ κοράσιον ἀλλὰ καθεύδει. καὶ κατεγέλων αὐτοῦ.",
    "25": "ὅτε δὲ ἐξεβλήθη ὁ ὄχλος εἰσελθὼν ἐκράτησεν τῆς χειρὸς αὐτῆς, καὶ ἠγέρθη τὸ κοράσιον.",
    "26": "καὶ ἐξῆλθεν ἡ φήμη αὕτη εἰς ὅλην τὴν γῆν ἐκείνην.",
    "27": "Καὶ παράγοντι ἐκεῖθεν τῷ Ἰησοῦ ἠκολούθησαν [αὐτῷ] δύο τυφλοὶ κράζοντες καὶ λέγοντες, Ἐλέησον ἡμᾶς, υἱὸς Δαυίδ.",
    "28": "ἐλθόντι δὲ εἰς τὴν οἰκίαν προσῆλθον αὐτῷ οἱ τυφλοί, καὶ λέγει αὐτοῖς ὁ Ἰησοῦς, Πιστεύετε ὅτι δύναμαι τοῦτο ποιῆσαι; λέγουσιν αὐτῷ, Ναὶ κύριε.",
    "29": "τότε ἥψατο τῶν ὀφθαλμῶν αὐτῶν λέγων, Κατὰ τὴν πίστιν ὑμῶν γενηθήτω ὑμῖν.",
    "30": "καὶ ἠνεῴχθησαν αὐτῶν οἱ ὀφθαλμοί. καὶ ἐνεβριμήθη αὐτοῖς ὁ Ἰησοῦς λέγων, Ὁρᾶτε μηδεὶς γινωσκέτω.",
    "31": "οἱ δὲ ἐξελθόντες διεφήμισαν αὐτὸν ἐν ὅλῃ τῇ γῇ ἐκείνῃ.",
    "32": "Αὐτῶν δὲ ἐξερχομένων ἰδοὺ προσήνεγκαν αὐτῷ ἄνθρωπον κωφὸν δαιμονιζόμενον.",
    "33": "καὶ ἐκβληθέντος τοῦ δαιμονίου ἐλάλησεν ὁ κωφός. καὶ ἐθαύμασαν οἱ ὄχλοι λέγοντες, Οὐδέποτε ἐφάνη οὕτως ἐν τῷ Ἰσραήλ.",
    "34": "οἱ δὲ Φαρισαῖοι ἔλεγον, Ἐν τῷ ἄρχοντι τῶν δαιμονίων ἐκβάλλει τὰ δαιμόνια.",
    "35": "Καὶ περιῆγεν ὁ Ἰησοῦς τὰς πόλεις πάσας καὶ τὰς κώμας διδάσκων ἐν ταῖς συναγωγαῖς αὐτῶν καὶ κηρύσσων τὸ εὐαγγέλιον τῆς βασιλείας καὶ θεραπεύων πᾶσαν νόσον καὶ πᾶσαν μαλακίαν.",
    "36": "Ἰδὼν δὲ τοὺς ὄχλους ἐσπλαγχνίσθη περὶ αὐτῶν, ὅτι ἦσαν ἐσκυλμένοι καὶ ἐρριμμένοι ὡσεὶ πρόβατα μὴ ἔχοντα ποιμένα.",
    "37": "τότε λέγει τοῖς μαθηταῖς αὐτοῦ, Ὁ μὲν θερισμὸς πολύς, οἱ δὲ ἐργάται ὀλίγοι·",
    "38": "δεήθητε οὖν τοῦ κυρίου τοῦ θερισμοῦ ὅπως ἐκβάλῃ ἐργάτας εἰς τὸν θερισμὸν αὐτοῦ."
};
    const paragraphEnds = [8,13,17,26,31,34,38];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Healing of a Paralytic",
        "sourceTitle": "The Healing of a Paralytic",
        "parallel": "(Mk 2.1‑12; Lk 5.17‑26)"
    },
    {
        "beforeVerse": 9,
        "title": "The Calling of Matthew",
        "sourceTitle": "The Calling of Matthew",
        "parallel": "(Mk 2.13‑17; Lk 5.27‑32)"
    },
    {
        "beforeVerse": 14,
        "title": "The Question about Fasting",
        "sourceTitle": "The Question about Fasting",
        "parallel": "(Mk 2.18‑22; Lk 5.33‑39)"
    },
    {
        "beforeVerse": 18,
        "title": "The Ruler’s Daughter and the Woman Who Touched Jesus’ Garment",
        "sourceTitle": "The Ruler’s Daughter and the Woman Who Touched Jesus’ Garment",
        "parallel": "(Mk 5.21‑43; Lk 8.40‑56)"
    },
    {
        "beforeVerse": 27,
        "title": "The Healing of Two Blind Men",
        "sourceTitle": "The Healing of Two Blind Men"
    },
    {
        "beforeVerse": 32,
        "title": "The Healing of a Dumb Man",
        "sourceTitle": "The Healing of a Dumb Man"
    },
    {
        "beforeVerse": 35,
        "title": "The Compassion of Jesus",
        "sourceTitle": "The Compassion of Jesus"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[9] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[9] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[9] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[9] = unnumberedPassages;
})();
