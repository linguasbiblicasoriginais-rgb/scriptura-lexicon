/* UBS5 — Epístola de Paulo a Tito, capítulo 2.
 * Fonte: transcrição grega fornecida pelo mantenedor em 10/11/2026.
 * Edição de destino UBS5 conforme o projeto; sem cotejo independente da edição impressa.
 * Texto bíblico e títulos editoriais mantidos em camadas distintas.
 */
(function () {
    "use strict";
    const verses = {
    "1": "Σὺ δὲ λάλει ἃ πρέπει τῇ ὑγιαινούσῃ διδασκαλίᾳ.",
    "2": "πρεσβύτας νηφαλίους εἶναι, σεμνούς, σώφρονας, ὑγιαίνοντας τῇ πίστει, τῇ ἀγάπῃ, τῇ ὑπομονῇ·",
    "3": "πρεσβύτιδας ὡσαύτως ἐν καταστήματι ἱεροπρεπεῖς, μὴ διαβόλους μὴ οἴνῳ πολλῷ δεδουλωμένας, καλοδιδασκάλους,",
    "4": "ἵνα σωφρονίζωσιν τὰς νέας φιλάνδρους εἶναι, φιλοτέκνους",
    "5": "σώφρονας ἁγνὰς οἰκουργοὺς ἀγαθάς, ὑποτασσομένας τοῖς ἰδίοις ἀνδράσιν, ἵνα μὴ ὁ λόγος τοῦ θεοῦ βλασφημῆται.",
    "6": "τοὺς νεωτέρους ὡσαύτως παρακάλει σωφρονεῖν",
    "7": "περὶ πάντα, σεαυτὸν παρεχόμενος τύπον καλῶν ἔργων, ἐν τῇ διδασκαλίᾳ ἀφθορίαν, σεμνότητα,",
    "8": "λόγον ὑγιῆ ἀκατάγνωστον, ἵνα ὁ ἐξ ἐναντίας ἐντραπῇ μηδὲν ἔχων λέγειν περὶ ἡμῶν φαῦλον.",
    "9": "δούλους ἰδίοις δεσπόταις ὑποτάσσεσθαι ἐν πᾶσιν, εὐαρέστους εἶναι, μὴ ἀντιλέγοντας,",
    "10": "μὴ νοσφιζομένους, ἀλλὰ πᾶσαν πίστιν ἐνδεικνυμένους ἀγαθήν, ἵνα τὴν διδασκαλίαν τὴν τοῦ σωτῆρος ἡμῶν θεοῦ κοσμῶσιν ἐν πᾶσιν.",
    "11": "Ἐπεφάνη γὰρ ἡ χάρις τοῦ θεοῦ σωτήριος πᾶσιν ἀνθρώποις",
    "12": "παιδεύουσα ἡμᾶς, ἵνα ἀρνησάμενοι τὴν ἀσέβειαν καὶ τὰς κοσμικὰς ἐπιθυμίας σωφρόνως καὶ δικαίως καὶ εὐσεβῶς ζήσωμεν ἐν τῷ νῦν αἰῶνι,",
    "13": "προσδεχόμενοι τὴν μακαρίαν ἐλπίδα καὶ ἐπιφάνειαν τῆς δόξης τοῦ μεγάλου θεοῦ καὶ σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ,",
    "14": "ὃς ἔδωκεν ἑαυτὸν ὑπὲρ ἡμῶν, ἵνα λυτρώσηται ἡμᾶς ἀπὸ πάσης ἀνομίας καὶ καθαρίσῃ ἑαυτῷ λαὸν περιούσιον, ζηλωτὴν καλῶν ἔργων.",
    "15": "Ταῦτα λάλει καὶ παρακάλει καὶ ἔλεγχε μετὰ πάσης ἐπιταγῆς· μηδείς σου περιφρονείτω."
};
    const paragraphEnds = [10,15];
    const headings = [
    {
        "beforeVerse": 1,
        "title": "O ensino da sã doutrina",
        "sourceTitle": "The Teaching of Sound Doctrine"
    }
];
    const unnumberedPassages = [];
    window.ScripturaScriptureTexts = window.ScripturaScriptureTexts || {};
    window.ScripturaScriptureTexts.UBS5 = window.ScripturaScriptureTexts.UBS5 || {};
    window.ScripturaScriptureTexts.UBS5.TIT = window.ScripturaScriptureTexts.UBS5.TIT || {};
    window.ScripturaScriptureTexts.UBS5.TIT[2] = verses;
    window.ScripturaScriptureParagraphBreaks = window.ScripturaScriptureParagraphBreaks || {};
    window.ScripturaScriptureParagraphBreaks.UBS5 = window.ScripturaScriptureParagraphBreaks.UBS5 || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT = window.ScripturaScriptureParagraphBreaks.UBS5.TIT || {};
    window.ScripturaScriptureParagraphBreaks.UBS5.TIT[2] = paragraphEnds;
    window.ScripturaScriptureHeadings = window.ScripturaScriptureHeadings || {};
    window.ScripturaScriptureHeadings.UBS5 = window.ScripturaScriptureHeadings.UBS5 || {};
    window.ScripturaScriptureHeadings.UBS5.TIT = window.ScripturaScriptureHeadings.UBS5.TIT || {};
    window.ScripturaScriptureHeadings.UBS5.TIT[2] = headings;
    window.ScripturaScriptureUnnumberedPassages = window.ScripturaScriptureUnnumberedPassages || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5 = window.ScripturaScriptureUnnumberedPassages.UBS5 || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT = window.ScripturaScriptureUnnumberedPassages.UBS5.TIT || {};
    window.ScripturaScriptureUnnumberedPassages.UBS5.TIT[2] = unnumberedPassages;
})();
