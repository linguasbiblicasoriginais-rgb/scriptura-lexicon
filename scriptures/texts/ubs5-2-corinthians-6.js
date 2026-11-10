/* UBS5 — Segunda Epístola de Paulo aos Coríntios 6.
 * Transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Identificação UBS5 conforme o projeto; sem cotejo independente com a edição impressa.
 * Textos gregos e paratextos editoriais conservados em campos separados.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Συνεργοῦντες δὲ καὶ παρακαλοῦμεν μὴ εἰς κενὸν τὴν χάριν τοῦ θεοῦ δέξασθαι ὑμᾶς·",
    "2": "λέγει γάρ,\nΚαιρῷ δεκτῷ ἐπήκουσά σου\nκαὶ ἐν ἡμέρᾳ σωτηρίας ἐβοήθησά σοι.\nἰδοὺ νῦν καιρὸς εὐπρόσδεκτος, ἰδοὺ νῦν ἡμέρα σωτηρίας·",
    "3": "μηδεμίαν ἐν μηδενὶ διδόντες προσκοπήν, ἵνα μὴ μωμηθῇ ἡ διακονία,",
    "4": "ἀλλ᾽ ἐν παντὶ συνιστάντες ἑαυτοὺς ὡς θεοῦ διάκονοι, ἐν ὑπομονῇ πολλῇ, ἐν θλίψεσιν, ἐν ἀνάγκαις, ἐν στενοχωρίαις,",
    "5": "ἐν πληγαῖς, ἐν φυλακαῖς, ἐν ἀκαταστασίαις, ἐν κόποις, ἐν ἀγρυπνίαις, ἐν νηστείαις,",
    "6": "ἐν ἁγνότητι, ἐν γνώσει, ἐν μακροθυμίᾳ, ἐν χρηστότητι, ἐν πνεύματι ἁγίῳ, ἐν ἀγάπῃ ἀνυποκρίτῳ,",
    "7": "ἐν λόγῳ ἀληθείας, ἐν δυνάμει θεοῦ· διὰ τῶν ὅπλων τῆς δικαιοσύνης τῶν δεξιῶν καὶ ἀριστερῶν,",
    "8": "διὰ δόξης καὶ ἀτιμίας, διὰ δυσφημίας καὶ εὐφημίας· ὡς πλάνοι καὶ ἀληθεῖς,",
    "9": "ὡς ἀγνοούμενοι καὶ ἐπιγινωσκόμενοι, ὡς ἀποθνῄσκοντες καὶ ἰδοὺ ζῶμεν, ὡς παιδευόμενοι καὶ μὴ θανατούμενοι,",
    "10": "ὡς λυπούμενοι ἀεὶ δὲ χαίροντες, ὡς πτωχοὶ πολλοὺς δὲ πλουτίζοντες, ὡς μηδὲν ἔχοντες καὶ πάντα κατέχοντες.",
    "11": "Τὸ στόμα ἡμῶν ἀνέῳγεν πρὸς ὑμᾶς, Κορίνθιοι, ἡ καρδία ἡμῶν πεπλάτυνται·",
    "12": "οὐ στενοχωρεῖσθε ἐν ἡμῖν, στενοχωρεῖσθε δὲ ἐν τοῖς σπλάγχνοις ὑμῶν·",
    "13": "τὴν δὲ αὐτὴν ἀντιμισθίαν, ὡς τέκνοις λέγω, πλατύνθητε καὶ ὑμεῖς.",
    "14": "Μὴ γίνεσθε ἑτεροζυγοῦντες ἀπίστοις· τίς γὰρ μετοχὴ δικαιοσύνῃ καὶ ἀνομίᾳ, ἢ τίς κοινωνία φωτὶ πρὸς σκότος;",
    "15": "τίς δὲ συμφώνησις Χριστοῦ πρὸς Βελιάρ, ἢ τίς μερὶς πιστῷ μετὰ ἀπίστου;",
    "16": "τίς δὲ συγκατάθεσις ναῷ θεοῦ μετὰ εἰδώλων; ἡμεῖς γὰρ ναὸς θεοῦ ἐσμεν ζῶντος, καθὼς εἶπεν ὁ θεὸς ὅτι\nἘνοικήσω ἐν αὐτοῖς καὶ ἐμπεριπατήσω\nκαὶ ἔσομαι αὐτῶν θεὸς\nκαὶ αὐτοὶ ἔσονταί μου λαός.",
    "17": "διὸ ἐξέλθατε ἐκ μέσου αὐτῶν\nκαὶ ἀφορίσθητε, λέγει κύριος,\nκαὶ ἀκαθάρτου μὴ ἅπτεσθε·\nκἀγὼ εἰσδέξομαι ὑμᾶς",
    "18": "καὶ ἔσομαι ὑμῖν εἰς πατέρα\nκαὶ ὑμεῖς ἔσεσθέ μοι εἰς υἱοὺς καὶ θυγατέρας,\nλέγει κύριος παντοκράτωρ."
};
    const paragraphEnds = [10,13,16,17,18];
    const headings = [
    {
        "beforeVerse": 14,
        "title": "O templo do Deus vivo",
        "sourceTitle": "The Temple of the Living God"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5["2CO"] = window.ScripturaScriptureTexts.UBS5["2CO"] || {};
    window.ScripturaScriptureTexts.UBS5["2CO"][6] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] = window.ScripturaScriptureParagraphBreaks.UBS5["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.UBS5["2CO"][6] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"] = window.ScripturaScriptureHeadings.UBS5["2CO"] || {};
    window.ScripturaScriptureHeadings.UBS5["2CO"][6] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] = window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5["2CO"][6] = unnumberedPassages;
})();
