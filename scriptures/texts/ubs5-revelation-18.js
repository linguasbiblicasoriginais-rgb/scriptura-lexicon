/* UBS5 — Apocalipse de João, capítulo 18.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente com edição impressa.
 * Texto e títulos editoriais separados; linhas poéticas mantidas no versículo correspondente.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Μετὰ ταῦτα εἶδον ἄλλον ἄγγελον καταβαίνοντα ἐκ τοῦ οὐρανοῦ ἔχοντα ἐξουσίαν μεγάλην, καὶ ἡ γῆ ἐφωτίσθη ἐκ τῆς δόξης αὐτοῦ.",
    "2": "καὶ ἔκραξεν ἐν ἰσχυρᾷ φωνῇ λέγων,\nἜπεσεν ἔπεσεν Βαβυλὼν ἡ μεγάλη,\nκαὶ ἐγένετο κατοικητήριον δαιμονίων\nκαὶ φυλακὴ παντὸς πνεύματος ἀκαθάρτου\nκαὶ φυλακὴ παντὸς ὀρνέου ἀκαθάρτου\n[καὶ φυλακὴ παντὸς θηρίου ἀκαθάρτου] καὶ μεμισημένου,",
    "3": "ὅτι ἐκ τοῦ οἴνου τοῦ θυμοῦ τῆς πορνείας αὐτῆς\nπέπωκαν πάντα τὰ ἔθνη\nκαὶ οἱ βασιλεῖς τῆς γῆς μετ᾽ αὐτῆς ἐπόρνευσαν\nκαὶ οἱ ἔμποροι τῆς γῆς ἐκ τῆς δυνάμεως τοῦ στρήνους αὐτῆς ἐπλούτησαν.",
    "4": "Καὶ ἤκουσα ἄλλην φωνὴν ἐκ τοῦ οὐρανοῦ λέγουσαν,\nἘξέλθατε ὁ λαός μου ἐξ αὐτῆς\nἵνα μὴ συγκοινωνήσητε ταῖς ἁμαρτίαις αὐτῆς,\nκαὶ ἐκ τῶν πληγῶν αὐτῆς\nἵνα μὴ λάβητε,",
    "5": "ὅτι ἐκολλήθησαν αὐτῆς αἱ ἁμαρτίαι ἄχρι τοῦ οὐρανοῦ\nκαὶ ἐμνημόνευσεν ὁ θεὸς τὰ ἀδικήματα αὐτῆς.",
    "6": "ἀπόδοτε αὐτῇ ὡς καὶ αὐτὴ ἀπέδωκεν\nκαὶ διπλώσατε τὰ διπλᾶ κατὰ τὰ ἔργα αὐτῆς,\nἐν τῷ ποτηρίῳ ᾧ ἐκέρασεν κεράσατε αὐτῇ διπλοῦν,",
    "7": "ὅσα ἐδόξασεν αὐτὴν καὶ ἐστρηνίασεν,\nτοσοῦτον δότε αὐτῇ βασανισμὸν καὶ πένθος.\nὅτι ἐν τῇ καρδίᾳ αὐτῆς λέγει ὅτι\nΚάθημαι βασίλισσα\nκαὶ χήρα οὐκ εἰμὶ\nκαὶ πένθος οὐ μὴ ἴδω.",
    "8": "διὰ τοῦτο ἐν μιᾷ ἡμέρᾳ ἥξουσιν αἱ πληγαὶ αὐτῆς,\nθάνατος καὶ πένθος καὶ λιμός,\nκαὶ ἐν πυρὶ κατακαυθήσεται,\nὅτι ἰσχυρὸς κύριος ὁ θεὸς ὁ κρίνας αὐτήν.",
    "9": "Καὶ κλαύσουσιν καὶ κόψονται ἐπ᾽ αὐτὴν οἱ βασιλεῖς τῆς γῆς οἱ μετ᾽ αὐτῆς πορνεύσαντες καὶ στρηνιάσαντες, ὅταν βλέπωσιν τὸν καπνὸν τῆς πυρώσεως αὐτῆς,",
    "10": "ἀπὸ μακρόθεν ἑστηκότες διὰ τὸν φόβον τοῦ βασανισμοῦ αὐτῆς λέγοντες,\nΟὐαὶ οὐαί, ἡ πόλις ἡ μεγάλη,\nΒαβυλὼν ἡ πόλις ἡ ἰσχυρά,\nὅτι μιᾷ ὥρᾳ ἦλθεν ἡ κρίσις σου.",
    "11": "Καὶ οἱ ἔμποροι τῆς γῆς κλαίουσιν καὶ πενθοῦσιν ἐπ᾽ αὐτήν, ὅτι τὸν γόμον αὐτῶν οὐδεὶς ἀγοράζει οὐκέτι",
    "12": "γόμον χρυσοῦ καὶ ἀργύρου καὶ λίθου τιμίου καὶ μαργαριτῶν καὶ βυσσίνου καὶ πορφύρας καὶ σιρικοῦ καὶ κοκκίνου, καὶ πᾶν ξύλον θύϊνον καὶ πᾶν σκεῦος ἐλεφάντινον καὶ πᾶν σκεῦος ἐκ ξύλου τιμιωτάτου καὶ χαλκοῦ καὶ σιδήρου καὶ μαρμάρου,",
    "13": "καὶ κιννάμωμον καὶ ἄμωμον καὶ θυμιάματα καὶ μύρον καὶ λίβανον καὶ οἶνον καὶ ἔλαιον καὶ σεμίδαλιν καὶ σῖτον καὶ κτήνη καὶ πρόβατα, καὶ ἵππων καὶ ῥεδῶν καὶ σωμάτων, καὶ ψυχὰς ἀνθρώπων.",
    "14": "καὶ ἡ ὀπώρα σου τῆς ἐπιθυμίας τῆς ψυχῆς\nἀπῆλθεν ἀπὸ σοῦ,\nκαὶ πάντα τὰ λιπαρὰ καὶ τὰ λαμπρὰ\nἀπώλετο ἀπὸ σοῦ\nκαὶ οὐκέτι οὐ μὴ αὐτὰ εὑρήσουσιν.",
    "15": "οἱ ἔμποροι τούτων οἱ πλουτήσαντες ἀπ᾽ αὐτῆς ἀπὸ μακρόθεν στήσονται διὰ τὸν φόβον τοῦ βασανισμοῦ αὐτῆς κλαίοντες καὶ πενθοῦντες",
    "16": "λέγοντες,\nΟὐαὶ οὐαί, ἡ πόλις ἡ μεγάλη,\nἡ περιβεβλημένη βύσσινον\nκαὶ πορφυροῦν καὶ κόκκινον\nκαὶ κεχρυσωμένη [ἐν] χρυσίῳ\nκαὶ λίθῳ τιμίῳ καὶ μαργαρίτῃ,",
    "17": "ὅτι μιᾷ ὥρᾳ ἠρημώθη ὁ τοσοῦτος πλοῦτος.\nΚαὶ πᾶς κυβερνήτης καὶ πᾶς ὁ ἐπὶ τόπον πλέων καὶ ναῦται καὶ ὅσοι τὴν θάλασσαν ἐργάζονται, ἀπὸ μακρόθεν ἔστησαν",
    "18": "καὶ ἔκραζον βλέποντες τὸν καπνὸν τῆς πυρώσεως αὐτῆς λέγοντες, Τίς ὁμοία τῇ πόλει τῇ μεγάλῃ;",
    "19": "καὶ ἔβαλον χοῦν ἐπὶ τὰς κεφαλὰς αὐτῶν καὶ ἔκραζον κλαίοντες καὶ πενθοῦντες λέγοντες,\nΟὐαὶ οὐαί, ἡ πόλις ἡ μεγάλη,\nἐν ᾗ ἐπλούτησαν πάντες οἱ ἔχοντες τὰ πλοῖα\nἐν τῇ θαλάσσῃ ἐκ τῆς τιμιότητος αὐτῆς,\nὅτι μιᾷ ὥρᾳ ἠρημώθη.",
    "20": "Εὐφραίνου ἐπ᾽ αὐτῇ, οὐρανὲ\nκαὶ οἱ ἅγιοι καὶ οἱ ἀπόστολοι καὶ οἱ προφῆται,\nὅτι ἔκρινεν ὁ θεὸς τὸ κρίμα ὑμῶν ἐξ αὐτῆς.",
    "21": "Καὶ ἦρεν εἷς ἄγγελος ἰσχυρὸς λίθον ὡς μύλινον μέγαν καὶ ἔβαλεν εἰς τὴν θάλασσαν λέγων,\nΟὕτως ὁρμήματι βληθήσεται\nΒαβυλὼν ἡ μεγάλη πόλις\nκαὶ οὐ μὴ εὑρεθῇ ἔτι.",
    "22": "καὶ φωνὴ κιθαρῳδῶν καὶ μουσικῶν\nκαὶ αὐλητῶν καὶ σαλπιστῶν\nοὐ μὴ ἀκουσθῇ ἐν σοὶ ἔτι,\nκαὶ πᾶς τεχνίτης πάσης τέχνης\nοὐ μὴ εὑρεθῇ ἐν σοὶ ἔτι,\nκαὶ φωνὴ μύλου\nοὐ μὴ ἀκουσθῇ ἐν σοὶ ἔτι,",
    "23": "καὶ φῶς λύχνου\nοὐ μὴ φάνῃ ἐν σοὶ ἔτι,\nκαὶ φωνὴ νυμφίου καὶ νύμφης\nοὐ μὴ ἀκουσθῇ ἐν σοὶ ἔτι·\nὅτι οἱ ἔμποροί σου ἦσαν οἱ μεγιστᾶνες τῆς γῆς,\nὅτι ἐν τῇ φαρμακείᾳ σου ἐπλανήθησαν πάντα τὰ ἔθνη,",
    "24": "καὶ ἐν αὐτῇ αἷμα προφητῶν καὶ ἁγίων εὑρέθη\nκαὶ πάντων τῶν ἐσφαγμένων ἐπὶ τῆς γῆς."
};
    const paragraphEnds = [2,3,4,5,6,7,8,10,13,14,16,19,20,21,22,23,24];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "A queda da Babilônia",
        "sourceTitle": "The Fall of Babylon"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.REV = window.ScripturaScriptureTexts.UBS5.REV || {};
    window.ScripturaScriptureTexts.UBS5.REV[18] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV = window.ScripturaScriptureParagraphBreaks.UBS5.REV || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.REV[18] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.REV = window.ScripturaScriptureHeadings.UBS5.REV || {};
    window.ScripturaScriptureHeadings.UBS5.REV[18] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV = window.ScripturaScriptureUnnumberedPassages.UBS5.REV || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.REV[18] = unnumberedPassages;
})();
