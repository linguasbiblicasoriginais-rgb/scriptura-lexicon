/* UBS5 — Apocalipse de João, capítulo 11.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Καὶ ἐδόθη μοι κάλαμος ὅμοιος ῥάβδῳ, λέγων, Ἔγειρε καὶ μέτρησον τὸν ναὸν τοῦ θεοῦ καὶ τὸ θυσιαστήριον καὶ τοὺς προσκυνοῦντας ἐν αὐτῷ.",
    "2": "καὶ τὴν αὐλὴν τὴν ἔξωθεν τοῦ ναοῦ ἔκβαλε ἔξωθεν καὶ μὴ αὐτὴν μετρήσῃς, ὅτι ἐδόθη τοῖς ἔθνεσιν, καὶ τὴν πόλιν τὴν ἁγίαν πατήσουσιν μῆνας τεσσεράκοντα [καὶ] δύο.",
    "3": "καὶ δώσω τοῖς δυσὶν μάρτυσίν μου καὶ προφητεύσουσιν ἡμέρας χιλίας διακοσίας ἑξήκοντα περιβεβλημένοι σάκκους.",
    "4": "οὗτοί εἰσιν αἱ δύο ἐλαῖαι καὶ αἱ δύο λυχνίαι αἱ ἐνώπιον τοῦ κυρίου τῆς γῆς ἑστῶτες.",
    "5": "καὶ εἴ τις αὐτοὺς θέλει ἀδικῆσαι πῦρ ἐκπορεύεται ἐκ τοῦ στόματος αὐτῶν καὶ κατεσθίει τοὺς ἐχθροὺς αὐτῶν· καὶ εἴ τις θελήσῃ αὐτοὺς ἀδικῆσαι, οὕτως δεῖ αὐτὸν ἀποκτανθῆναι.",
    "6": "οὗτοι ἔχουσιν τὴν ἐξουσίαν κλεῖσαι τὸν οὐρανόν, ἵνα μὴ ὑετὸς βρέχῃ τὰς ἡμέρας τῆς προφητείας αὐτῶν, καὶ ἐξουσίαν ἔχουσιν ἐπὶ τῶν ὑδάτων στρέφειν αὐτὰ εἰς αἷμα καὶ πατάξαι τὴν γῆν ἐν πάσῃ πληγῇ ὁσάκις ἐὰν θελήσωσιν.",
    "7": "καὶ ὅταν τελέσωσιν τὴν μαρτυρίαν αὐτῶν, τὸ θηρίον τὸ ἀναβαῖνον ἐκ τῆς ἀβύσσου ποιήσει μετ᾽ αὐτῶν πόλεμον καὶ νικήσει αὐτοὺς καὶ ἀποκτενεῖ αὐτούς.",
    "8": "καὶ τὸ πτῶμα αὐτῶν ἐπὶ τῆς πλατείας τῆς πόλεως τῆς μεγάλης, ἥτις καλεῖται πνευματικῶς Σόδομα καὶ Αἴγυπτος, ὅπου καὶ ὁ κύριος αὐτῶν ἐσταυρώθη.",
    "9": "καὶ βλέπουσιν ἐκ τῶν λαῶν καὶ φυλῶν καὶ γλωσσῶν καὶ ἐθνῶν τὸ πτῶμα αὐτῶν ἡμέρας τρεῖς καὶ ἥμισυ καὶ τὰ πτώματα αὐτῶν οὐκ ἀφίουσιν τεθῆναι εἰς μνῆμα.",
    "10": "καὶ οἱ κατοικοῦντες ἐπὶ τῆς γῆς χαίρουσιν ἐπ᾽ αὐτοῖς καὶ εὐφραίνονται καὶ δῶρα πέμψουσιν ἀλλήλοις, ὅτι οὗτοι οἱ δύο προφῆται ἐβασάνισαν τοὺς κατοικοῦντας ἐπὶ τῆς γῆς.",
    "11": "καὶ μετὰ τὰς τρεῖς ἡμέρας καὶ ἥμισυ πνεῦμα ζωῆς ἐκ τοῦ θεοῦ εἰσῆλθεν ἐν αὐτοῖς, καὶ ἔστησαν ἐπὶ τοὺς πόδας αὐτῶν, καὶ φόβος μέγας ἐπέπεσεν ἐπὶ τοὺς θεωροῦντας αὐτούς.",
    "12": "καὶ ἤκουσαν φωνῆς μεγάλης ἐκ τοῦ οὐρανοῦ λεγούσης αὐτοῖς, Ἀνάβατε ὧδε. καὶ ἀνέβησαν εἰς τὸν οὐρανὸν ἐν τῇ νεφέλῃ, καὶ ἐθεώρησαν αὐτοὺς οἱ ἐχθροὶ αὐτῶν.",
    "13": "Καὶ ἐν ἐκείνῃ τῇ ὥρᾳ ἐγένετο σεισμὸς μέγας καὶ τὸ δέκατον τῆς πόλεως ἔπεσεν καὶ ἀπεκτάνθησαν ἐν τῷ σεισμῷ ὀνόματα ἀνθρώπων χιλιάδες ἑπτὰ καὶ οἱ λοιποὶ ἔμφοβοι ἐγένοντο καὶ ἔδωκαν δόξαν τῷ θεῷ τοῦ οὐρανοῦ.",
    "14": "Ἡ οὐαὶ ἡ δευτέρα ἀπῆλθεν· ἰδοὺ ἡ οὐαὶ ἡ τρίτη ἔρχεται ταχύ.",
    "15": "Καὶ ὁ ἕβδομος ἄγγελος ἐσάλπισεν· καὶ ἐγένοντο φωναὶ μεγάλαι ἐν τῷ οὐρανῷ λέγοντες,\nἘγένετο ἡ βασιλεία τοῦ κόσμου τοῦ κυρίου ἡμῶν\nκαὶ τοῦ χριστοῦ αὐτοῦ,\nκαὶ βασιλεύσει εἰς τοὺς αἰῶνας τῶν αἰώνων.",
    "16": "καὶ οἱ εἴκοσι τέσσαρες πρεσβύτεροι [οἱ] ἐνώπιον τοῦ θεοῦ καθήμενοι ἐπὶ τοὺς θρόνους αὐτῶν ἔπεσαν ἐπὶ τὰ πρόσωπα αὐτῶν καὶ προσεκύνησαν τῷ θεῷ",
    "17": "λέγοντες,\nΕὐχαριστοῦμέν σοι, κύριε ὁ θεὸς ὁ παντοκράτωρ,\nὁ ὢν καὶ ὁ ἦν,\nὅτι εἴληφας τὴν δύναμίν σου τὴν μεγάλην\nκαὶ ἐβασίλευσας.",
    "18": "καὶ τὰ ἔθνη ὠργίσθησαν,\nκαὶ ἦλθεν ἡ ὀργή σου\nκαὶ ὁ καιρὸς τῶν νεκρῶν κριθῆναι\nκαὶ δοῦναι τὸν μισθὸν τοῖς δούλοις σου τοῖς προφήταις\nκαὶ τοῖς ἁγίοις καὶ τοῖς φοβουμένοις τὸ ὄνομά σου,\nτοὺς μικροὺς καὶ τοὺς μεγάλους,\nκαὶ διαφθεῖραι τοὺς διαφθείροντας τὴν γῆν.",
    "19": "καὶ ἠνοίγη ὁ ναὸς τοῦ θεοῦ ὁ ἐν τῷ οὐρανῷ καὶ ὤφθη ἡ κιβωτὸς τῆς διαθήκης αὐτοῦ ἐν τῷ ναῷ αὐτοῦ, καὶ ἐγένοντο ἀστραπαὶ καὶ φωναὶ καὶ βρονταὶ καὶ σεισμὸς καὶ χάλαζα μεγάλη."
};
    const paragraphEnds = [13,14,15,17,18,19];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "As duas testemunhas",
        "sourceTitle": "The Two Witnesses"
    },
    {
        "beforeVerse": 15,
        "title": "A sétima trombeta",
        "sourceTitle": "The Seventh Trumpet"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[11] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[11] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[11] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[11] = unnumberedPassages;
})();
