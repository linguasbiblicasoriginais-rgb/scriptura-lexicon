/* NA28 — Segunda Epístola aos Coríntios, capítulo 6.
 * Fonte: transcrição grega integral fornecida pelo mantenedor em 06/11/2026.
 * Sem cotejo independente com a NA28 impressa ou seu aparato crítico.
 * Conservados sinais, acentuação, paragrafação e linhas citacionais; não inferidos itálicos ou recuos.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Συνεργοῦντες δὲ καὶ παρακαλοῦμεν μὴ εἰς κενὸν τὴν χάριν τοῦ θεοῦ δέξασθαι ὑμᾶς·",
    "2": "λέγει γάρ·\nκαιρῷ δεκτῷ ἐπήκουσά σου\nκαὶ ἐν ἡμέρᾳ σωτηρίας ἐβοήθησά σοι.\nἰδοὺ νῦν καιρὸς εὐπρόσδεκτος, ἰδοὺ νῦν ἡμέρα σωτηρίας.",
    "3": "Μηδεμίαν ἐν μηδενὶ διδόντες προσκοπήν, ἵνα μὴ μωμηθῇ ἡ διακονία,",
    "4": "ἀλλ’ ἐν παντὶ συνιστάντες ἑαυτοὺς ὡς θεοῦ διάκονοι, ἐν ὑπομονῇ πολλῇ, ἐν θλίψεσιν, ἐν ἀνάγκαις, ἐν στενοχωρίαις,",
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
    "16": "τίς δὲ συγκατάθεσις ναῷ θεοῦ μετὰ εἰδώλων; ἡμεῖς γὰρ ναὸς θεοῦ ἐσμεν ζῶντος, καθὼς εἶπεν ὁ θεὸς ὅτι\nἐνοικήσω ἐν αὐτοῖς καὶ ἐμπεριπατήσω\nκαὶ ἔσομαι αὐτῶν θεὸς καὶ αὐτοὶ ἔσονταί μου λαός.",
    "17": "διὸ ἐξέλθατε ἐκ μέσου αὐτῶν\nκαὶ ἀφορίσθητε, λέγει κύριος,\nκαὶ ἀκαθάρτου μὴ ἅπτεσθε·\nκἀγὼ εἰσδέξομαι ὑμᾶς",
    "18": "καὶ ἔσομαι ὑμῖν εἰς πατέρα\nκαὶ ὑμεῖς ἔσεσθέ μοι εἰς υἱοὺς καὶ θυγατέρας,\nλέγει κύριος παντοκράτωρ."
};
    const paragraphEnds = [10,13,16,17,18];
    const headings = [];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.NA28 = window.ScripturaScriptureTexts.NA28 || {};
    window.ScripturaScriptureTexts.NA28["2CO"] = window.ScripturaScriptureTexts.NA28["2CO"] || {};
    window.ScripturaScriptureTexts.NA28["2CO"][6] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.NA28 = window.ScripturaScriptureParagraphBreaks.NA28 || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"] = window.ScripturaScriptureParagraphBreaks.NA28["2CO"] || {};
    window.ScripturaScriptureParagraphBreaks.NA28["2CO"][6] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.NA28 = window.ScripturaScriptureHeadings.NA28 || {};
    window.ScripturaScriptureHeadings.NA28["2CO"] = window.ScripturaScriptureHeadings.NA28["2CO"] || {};
    window.ScripturaScriptureHeadings.NA28["2CO"][6] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.NA28 = window.ScripturaScriptureUnnumberedPassages.NA28 || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] = window.ScripturaScriptureUnnumberedPassages.NA28["2CO"] || {};
    window.ScripturaScriptureUnnumberedPassages.NA28["2CO"][6] = unnumberedPassages;
})();
