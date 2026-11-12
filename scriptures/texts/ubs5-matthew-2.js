/* UBS5 — Evangelho segundo Mateus, capítulo 2.
 * Fonte: transcrição fornecida pelo mantenedor (Texto colado(20261112-174536).txt), 12/11/2026.
 * Edição atribuída pelo mantenedor: UBS5. Colação literal com o texto fornecido,
 * sem verificação independente contra exemplar impresso ou licença de redistribuição.
 * Omissões de numeração textual (quando houver) e sinais editoriais preservados.
 * Títulos e referências paralelas separados do texto grego.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Τοῦ δὲ Ἰησοῦ γεννηθέντος ἐν Βηθλέεμ τῆς Ἰουδαίας ἐν ἡμέραις Ἡρῴδου τοῦ βασιλέως, ἰδοὺ μάγοι ἀπὸ ἀνατολῶν παρεγένοντο εἰς Ἱεροσόλυμα",
    "2": "λέγοντες, Ποῦ ἐστιν ὁ τεχθεὶς βασιλεὺς τῶν Ἰουδαίων; εἴδομεν γὰρ αὐτοῦ τὸν ἀστέρα ἐν τῇ ἀνατολῇ καὶ ἤλθομεν προσκυνῆσαι αὐτῷ.",
    "3": "ἀκούσας δὲ ὁ βασιλεὺς Ἡρῴδης ἐταράχθη καὶ πᾶσα Ἱεροσόλυμα μετ᾽ αὐτοῦ,",
    "4": "καὶ συναγαγὼν πάντας τοὺς ἀρχιερεῖς καὶ γραμματεῖς τοῦ λαοῦ ἐπυνθάνετο παρ᾽ αὐτῶν ποῦ ὁ Χριστὸς γεννᾶται.",
    "5": "οἱ δὲ εἶπαν αὐτῷ, Ἐν Βηθλέεμ τῆς Ἰουδαίας· οὕτως γὰρ γέγραπται διὰ τοῦ προφήτου·",
    "6": "Καὶ σὺ Βηθλέεμ, γῆ Ἰούδα,\nοὐδαμῶς ἐλαχίστη εἶ ἐν τοῖς ἡγεμόσιν Ἰούδα·\nἐκ σοῦ γὰρ ἐξελεύσεται ἡγούμενος,\nὅστις ποιμανεῖ τὸν λαόν μου τὸν Ἰσραήλ.",
    "7": "Τότε Ἡρῴδης λάθρᾳ καλέσας τοὺς μάγους ἠκρίβωσεν παρ᾽ αὐτῶν τὸν χρόνον τοῦ φαινομένου ἀστέρος,",
    "8": "καὶ πέμψας αὐτοὺς εἰς Βηθλέεμ εἶπεν, Πορευθέντες ἐξετάσατε ἀκριβῶς περὶ τοῦ παιδίου· ἐπὰν δὲ εὕρητε, ἀπαγγείλατέ μοι, ὅπως κἀγὼ ἐλθὼν προσκυνήσω αὐτῷ.",
    "9": "οἱ δὲ ἀκούσαντες τοῦ βασιλέως ἐπορεύθησαν καὶ ἰδοὺ ὁ ἀστήρ, ὃν εἶδον ἐν τῇ ἀνατολῇ, προῆγεν αὐτούς, ἕως ἐλθὼν ἐστάθη ἐπάνω οὗ ἦν τὸ παιδίον.",
    "10": "ἰδόντες δὲ τὸν ἀστέρα ἐχάρησαν χαρὰν μεγάλην σφόδρα.",
    "11": "καὶ ἐλθόντες εἰς τὴν οἰκίαν εἶδον τὸ παιδίον μετὰ Μαρίας τῆς μητρὸς αὐτοῦ, καὶ πεσόντες προσεκύνησαν αὐτῷ καὶ ἀνοίξαντες τοὺς θησαυροὺς αὐτῶν προσήνεγκαν αὐτῷ δῶρα, χρυσὸν καὶ λίβανον καὶ σμύρναν.",
    "12": "καὶ χρηματισθέντες κατ᾽ ὄναρ μὴ ἀνακάμψαι πρὸς Ἡρῴδην, δι᾽ ἄλλης ὁδοῦ ἀνεχώρησαν εἰς τὴν χώραν αὐτῶν.",
    "13": "Ἀναχωρησάντων δὲ αὐτῶν ἰδοὺ ἄγγελος κυρίου φαίνεται κατ᾽ ὄναρ τῷ Ἰωσὴφ λέγων, Ἐγερθεὶς παράλαβε τὸ παιδίον καὶ τὴν μητέρα αὐτοῦ καὶ φεῦγε εἰς Αἴγυπτον καὶ ἴσθι ἐκεῖ ἕως ἂν εἴπω σοι· μέλλει γὰρ Ἡρῴδης ζητεῖν τὸ παιδίον τοῦ ἀπολέσαι αὐτό.",
    "14": "ὁ δὲ ἐγερθεὶς παρέλαβεν τὸ παιδίον καὶ τὴν μητέρα αὐτοῦ νυκτὸς καὶ ἀνεχώρησεν εἰς Αἴγυπτον,",
    "15": "καὶ ἦν ἐκεῖ ἕως τῆς τελευτῆς Ἡρῴδου· ἵνα πληρωθῇ τὸ ῥηθὲν ὑπὸ κυρίου διὰ τοῦ προφήτου λέγοντος, Ἐξ Αἰγύπτου ἐκάλεσα τὸν υἱόν μου.",
    "16": "Τότε Ἡρῴδης ἰδὼν ὅτι ἐνεπαίχθη ὑπὸ τῶν μάγων ἐθυμώθη λίαν, καὶ ἀποστείλας ἀνεῖλεν πάντας τοὺς παῖδας τοὺς ἐν Βηθλέεμ καὶ ἐν πᾶσιν τοῖς ὁρίοις αὐτῆς ἀπὸ διετοῦς καὶ κατωτέρω, κατὰ τὸν χρόνον ὃν ἠκρίβωσεν παρὰ τῶν μάγων.",
    "17": "τότε ἐπληρώθη τὸ ῥηθὲν διὰ Ἰερεμίου τοῦ προφήτου λέγοντος,",
    "18": "Φωνὴ ἐν Ῥαμὰ ἠκούσθη,\nκλαυθμὸς καὶ ὀδυρμὸς πολύς·\nῬαχὴλ κλαίουσα τὰ τέκνα αὐτῆς,\nκαὶ οὐκ ἤθελεν παρακληθῆναι, ὅτι οὐκ εἰσίν.",
    "19": "Τελευτήσαντος δὲ τοῦ Ἡρῴδου ἰδοὺ ἄγγελος κυρίου φαίνεται κατ᾽ ὄναρ τῷ Ἰωσὴφ ἐν Αἰγύπτῳ",
    "20": "λέγων, Ἐγερθεὶς παράλαβε τὸ παιδίον καὶ τὴν μητέρα αὐτοῦ καὶ πορεύου εἰς γῆν Ἰσραήλ· τεθνήκασιν γὰρ οἱ ζητοῦντες τὴν ψυχὴν τοῦ παιδίου.",
    "21": "ὁ δὲ ἐγερθεὶς παρέλαβεν τὸ παιδίον καὶ τὴν μητέρα αὐτοῦ καὶ εἰσῆλθεν εἰς γῆν Ἰσραήλ.",
    "22": "ἀκούσας δὲ ὅτι Ἀρχέλαος βασιλεύει τῆς Ἰουδαίας ἀντὶ τοῦ πατρὸς αὐτοῦ Ἡρῴδου ἐφοβήθη ἐκεῖ ἀπελθεῖν· χρηματισθεὶς δὲ κατ᾽ ὄναρ ἀνεχώρησεν εἰς τὰ μέρη τῆς Γαλιλαίας,",
    "23": "καὶ ἐλθὼν κατῴκησεν εἰς πόλιν λεγομένην Ναζαρέτ· ὅπως πληρωθῇ τὸ ῥηθὲν διὰ τῶν προφητῶν ὅτι Ναζωραῖος κληθήσεται."
};
    const paragraphEnds = [12,15,18,23];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "The Visit of the Wise Men",
        "sourceTitle": "The Visit of the Wise Men"
    },
    {
        "beforeVerse": 13,
        "title": "The Flight to Egypt",
        "sourceTitle": "The Flight to Egypt"
    },
    {
        "beforeVerse": 16,
        "title": "The Slaying of the Infants",
        "sourceTitle": "The Slaying of the Infants"
    },
    {
        "beforeVerse": 19,
        "title": "The Return from Egypt",
        "sourceTitle": "The Return from Egypt"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.MAT = window.ScripturaScriptureTexts.UBS5.MAT || {};
    window.ScripturaScriptureTexts.UBS5.MAT[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT = window.ScripturaScriptureParagraphBreaks.UBS5.MAT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.MAT[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.MAT = window.ScripturaScriptureHeadings.UBS5.MAT || {};
    window.ScripturaScriptureHeadings.UBS5.MAT[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT = window.ScripturaScriptureUnnumberedPassages.UBS5.MAT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.MAT[2] = unnumberedPassages;
})();
