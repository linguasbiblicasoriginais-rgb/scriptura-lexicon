/* UBS5 — Apocalipse de João, capítulo 15.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ εἶδον ἄλλο σημεῖον ἐν τῷ οὐρανῷ μέγα καὶ θαυμαστόν, ἀγγέλους ἑπτὰ ἔχοντας πληγὰς ἑπτὰ τὰς ἐσχάτας, ὅτι ἐν αὐταῖς ἐτελέσθη ὁ θυμὸς τοῦ θεοῦ.",
    "2": "Καὶ εἶδον ὡς θάλασσαν ὑαλίνην μεμιγμένην πυρὶ καὶ τοὺς νικῶντας ἐκ τοῦ θηρίου καὶ ἐκ τῆς εἰκόνος αὐτοῦ καὶ ἐκ τοῦ ἀριθμοῦ τοῦ ὀνόματος αὐτοῦ ἑστῶτας ἐπὶ τὴν θάλασσαν τὴν ὑαλίνην ἔχοντας κιθάρας τοῦ θεοῦ.",
    "3": "καὶ ᾄδουσιν τὴν ᾠδὴν Μωϋσέως τοῦ δούλου τοῦ θεοῦ καὶ τὴν ᾠδὴν τοῦ ἀρνίου λέγοντες,\nΜεγάλα καὶ θαυμαστὰ τὰ ἔργα σου,\nκύριε ὁ θεὸς ὁ παντοκράτωρ·\nδίκαιαι καὶ ἀληθιναὶ αἱ ὁδοί σου,\nὁ βασιλεὺς τῶν ἐθνῶν·",
    "4": "τίς οὐ μὴ φοβηθῇ, κύριε,\nκαὶ δοξάσει τὸ ὄνομά σου;\nὅτι μόνος ὅσιος,\nὅτι πάντα τὰ ἔθνη ἥξουσιν\nκαὶ προσκυνήσουσιν ἐνώπιόν σου,\nὅτι τὰ δικαιώματά σου ἐφανερώθησαν.",
    "5": "Καὶ μετὰ ταῦτα εἶδον, καὶ ἠνοίγη ὁ ναὸς τῆς σκηνῆς τοῦ μαρτυρίου ἐν τῷ οὐρανῷ,",
    "6": "καὶ ἐξῆλθον οἱ ἑπτὰ ἄγγελοι [οἱ] ἔχοντες τὰς ἑπτὰ πληγὰς ἐκ τοῦ ναοῦ ἐνδεδυμένοι λίνον καθαρὸν λαμπρὸν καὶ περιεζωσμένοι περὶ τὰ στήθη ζώνας χρυσᾶς.",
    "7": "καὶ ἓν ἐκ τῶν τεσσάρων ζῴων ἔδωκεν τοῖς ἑπτὰ ἀγγέλοις ἑπτὰ φιάλας χρυσᾶς γεμούσας τοῦ θυμοῦ τοῦ θεοῦ τοῦ ζῶντος εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    "8": "καὶ ἐγεμίσθη ὁ ναὸς καπνοῦ ἐκ τῆς δόξης τοῦ θεοῦ καὶ ἐκ τῆς δυνάμεως αὐτοῦ, καὶ οὐδεὶς ἐδύνατο εἰσελθεῖν εἰς τὸν ναὸν ἄχρι τελεσθῶσιν αἱ ἑπτὰ πληγαὶ τῶν ἑπτὰ ἀγγέλων."
};
    const paragraphEnds = [1,3,4,8];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "Os anjos com as últimas pragas",
        "sourceTitle": "The Angels with the Last Plagues"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[15] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[15] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[15] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[15] = unnumberedPassages;
})();
