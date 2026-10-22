/* Scriptura Lexicon — popups de palavras para o leitor de Escrituras.
 * Camadas independentes: superfície literal, transliteração algorítmica,
 * glossário editorial introdutório (não atribuído aos léxicos de fonte).
 * NÃO infere lema, morfologia ou acepção quando ainda não cadastrados.
 */
(function () {
    "use strict";
    const wordPattern = /[\p{L}\p{M}]+(?:[’᾽'][\p{L}\p{M}]+)*[’᾽']?/gu;
    const lexemes = Object.freeze({
        BHS: Object.freeze({
            "בראשית": "no princípio", "ברא": "criou", "ויברא": "e criou",
            "אלהים": "Deus (forma tradicionalmente plural)", "יהוה": "tetragrama; nome divino",
            "השמים": "os céus", "שמים": "céus", "והארץ": "e a terra", "הארץ": "a terra",
            "ארץ": "terra", "ואת": "e (marcador de objeto direto)", "את": "marcador de objeto direto",
            "כל": "todo; cada", "וכל": "e todo", "ויאמר": "e disse",
            "ויאמרו": "e disseram", "ויאמרה": "e disse", "ויעש": "e fez",
            "וירא": "e viu", "ויהי": "e houve; e aconteceu", "ויכלו": "e foram concluídos",
            "ויברך": "e abençoou", "ויקדש": "e santificou",
            "השביעי": "o sétimo", "יום": "dia", "ביום": "no dia",
            "היום": "o dia", "ימים": "dias", "לילה": "noite", "הלילה": "a noite",
            "אור": "luz", "האור": "a luz", "חשך": "trevas; escuridão",
            "החשך": "as trevas", "תהום": "abismo; profundidade", "רוח": "vento; espírito",
            "מים": "água(s)", "המים": "as águas", "הארץ": "a terra",
            "אדם": "ser humano; Adão (conforme o contexto)", "האדם": "o ser humano; o homem",
            "איש": "homem", "אשה": "mulher", "האשה": "a mulher",
            "גן": "jardim", "בגן": "no jardim", "עדן": "Éden",
            "הגן": "o jardim", "עץ": "árvore", "העץ": "a árvore",
            "עצים": "árvores", "חיים": "vida; vivente(s)",
            "טוב": "bom; bem", "טובה": "boa", "רע": "mau; mal",
            "ורע": "e mal", "לא": "não", "כי": "porque; pois; que",
            "אשר": "que; o qual", "שם": "ali; lá; nome (conforme vocalização)",
            "אלה": "estes; estas", "תולדות": "gerações; origens",
            "ויפח": "e soprou", "ויפקד": "e encarregou", "ויצר": "e formou",
            "ויקח": "e tomou", "ויקרא": "e chamou; deu nome",
            "ויקרא": "e chamou; deu nome", "ויקם": "e levantou",
            "עזר": "ajuda; auxílio", "לבדו": "sozinho; só",
            "ויבן": "e construiu; formou", "בשר": "carne",
            "וימת": "e morreu", "שמו": "seu nome", "שמות": "nomes",
            "רקיע": "firmamento; expansão", "האלהים": "Deus",
            "הים": "o mar", "היבשה": "a terra seca",
            "אחד": "um", "אחת": "uma"
        }),
        GRC: Object.freeze({
            "και": "e; também", "δε": "mas; e; por sua vez", "εν": "em",
            "εκ": "de; de dentro de", "εις": "para; em direção a", "απο": "de; desde",
            "θεος": "Deus; deus", "θεου": "de Deus; de um deus (genitivo)",
            "ιησους": "Jesus", "ιησου": "de Jesus (genitivo)",
            "χριστος": "Cristo; Ungido", "χριστου": "de Cristo (genitivo)",
            "υιος": "filho", "υιου": "de filho (genitivo)",
            "εγεννησεν": "gerou", "βιβλος": "livro; registro",
            "γενεσεως": "origem; geração (genitivo)", "ονομα": "nome",
            "ειπεν": "disse", "εποιησεν": "fez; produziu",
            "εστιν": "é; está", "ην": "era; estava",
            "πνευμα": "espírito; vento", "πνευματος": "de espírito (genitivo)",
            "αγιου": "santo (genitivo)", "αγιον": "santo",
            "ουρανος": "céu", "ουρανον": "céu (acusativo)",
            "γη": "terra", "γην": "terra (acusativo)",
            "φως": "luz", "ημερα": "dia", "νυξ": "noite",
            "γενηθητω": "haja; venha a existir",
            "ανθρωπος": "ser humano; homem",
            "λαος": "povo", "πατηρ": "pai", "μητηρ": "mãe",
            "αυτου": "dele; seu", "αυτης": "dela; sua",
            "παντα": "todos; todas as coisas", "πας": "todo; cada",
            "επι": "sobre; em; junto de",
            "κατα": "segundo; conforme; contra",
            "του": "de o (artigo, genitivo)", "την": "a (artigo, acusativo)",
            "τον": "o (artigo, acusativo)",
            "τουτο": "isto; isso", "ταυτα": "estas coisas",
            "κυριου": "do Senhor (genitivo)"
        }),
        VUL: Object.freeze({
            "in": "em; dentro de", "principio": "princípio; começo",
            "creavit": "criou", "deus": "Deus", "caelum": "céu",
            "terra": "terra", "terram": "terra (acusativo)",
            "et": "e", "autem": "porém; por sua vez",
            "erat": "era; estava", "tenebrae": "trevas",
            "super": "sobre", "faciem": "face; superfície (acusativo)",
            "aquas": "águas (acusativo)", "aquae": "águas",
            "aquis": "águas (dativo ou ablativo)",
            "spiritus": "espírito; sopro", "dixit": "disse",
            "fiat": "faça-se; haja", "lux": "luz",
            "facta": "feita", "factum": "feito; acontecido",
            "est": "é; está; foi (conforme a construção)",
            "vidit": "viu", "bona": "boa", "bonum": "bom",
            "lucem": "luz (acusativo)", "diem": "dia (acusativo)",
            "noctem": "noite (acusativo)", "dies": "dia",
            "unum": "um (acusativo)", "unus": "um",
            "dixitque": "e disse", "vocavit": "chamou",
            "appellavit": "denominou; chamou",
            "mare": "mar", "maria": "mares",
            "hominem": "ser humano; homem (acusativo)",
            "homo": "ser humano; homem", "herbam": "erva; planta (acusativo)",
            "lignum": "árvore; madeira", "semen": "semente",
            "fructum": "fruto (acusativo)",
            "fecit": "fez", "fecitque": "e fez",
            "sunt": "são; estão", "sint": "sejam; estejam",
            "non": "não", "quod": "que; porque; o qual",
            "cum": "com; quando", "per": "através de; por",
            "omnem": "todo; toda (acusativo)",
            "omnis": "todo; cada", "omnibus": "todos; todas (dativo ou ablativo)",
            "nocti": "noite (dativo)", "mane": "manhã",
            "vespere": "tarde; entardecer", "vobis": "a vós; para vós",
            "terrae": "da terra; à terra (genitivo ou dativo)"
        })
    });
    const hebrewLetters = Object.freeze({
        "א":"ʾ","ב":"v","ג":"g","ד":"d","ה":"h","ו":"w","ז":"z","ח":"ḥ",
        "ט":"ṭ","י":"y","כ":"ḵ","ך":"ḵ","ל":"l","מ":"m","ם":"m","נ":"n",
        "ן":"n","ס":"s","ע":"ʿ","פ":"f","ף":"f","צ":"ṣ","ץ":"ṣ","ק":"q",
        "ר":"r","ש":"š","ת":"ṯ"
    });
    const hebrewVowels = Object.freeze({
        "\u05b0":"ə","\u05b1":"ĕ","\u05b2":"ă","\u05b3":"ŏ",
        "\u05b4":"i","\u05b5":"ē","\u05b6":"e","\u05b7":"a",
        "\u05b8":"ā","\u05b9":"ō","\u05ba":"ō","\u05bb":"u",
        "\u05c7":"o"
    });
    const greekLetters = Object.freeze({
        "α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"ē",
        "θ":"th","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"x",
        "ο":"o","π":"p","ρ":"r","σ":"s","ς":"s","τ":"t","υ":"u",
        "φ":"ph","χ":"ch","ψ":"ps","ω":"ō"
    });
    function tokenize(text) {
        const fragments = [];
        wordPattern.lastIndex = 0;
        let offset = 0;
        for (const m of text.matchAll(wordPattern)) {
            if (m.index > offset) fragments.push({ text: text.slice(offset, m.index), word: false });
            fragments.push({ text: m[0], word: true });
            offset = m.index + m[0].length;
        }
        if (offset < text.length) fragments.push({ text: text.slice(offset), word: false });
        return fragments;
    }
    function stripHebrew(text) {
        return text.normalize("NFD").replace(/[\u0591-\u05c7]/gu, "").replace(/[’᾽']/gu, "");
    }
    function stripGreek(text) {
        return text.normalize("NFD").replace(/\p{M}/gu,"").toLowerCase()
            .replace(/[’᾽']/gu, "");
    }
    function transliterateHebrew(text) {
        let translit = "";
        const graphemes = text.normalize("NFD").match(/[\u05d0-\u05ea][\u0591-\u05c7]*/gu) || [];
        for (const g of graphemes) {
            const letter = g[0], marks = g.slice(1);
            const has = mark => marks.includes(mark);
            let consonant = hebrewLetters[letter] || letter;
            if (letter === "ש" && has("\u05c2")) consonant = "ś";
            if (has("\u05bc") && Object.prototype.hasOwnProperty.call({
                "ב":1,"כ":1,"ך":1,"פ":1,"ף":1,"ת":1
            }, letter)) {
                consonant = {"ב":"b","כ":"k","ך":"k","פ":"p","ף":"p","ת":"t"}[letter];
            }
            if (letter === "ו" && has("\u05bc") &&
                !/[\u05b0-\u05bb\u05c7]/u.test(marks)) consonant = "ū";
            else if (letter === "ו" && (has("\u05b9") || has("\u05ba"))) consonant = "";
            for (const mark of marks) {
                if (hebrewVowels[mark]) consonant += hebrewVowels[mark];
            }
            translit += consonant;
        }
        return translit || text;
    }
    function transliterateGreek(text) {
        let output = "";
        for (const m of text.normalize("NFD").matchAll(/(\p{L})(\p{M}*)/gu)) {
            const original = m[1], base = original.toLowerCase();
            const phoneme = greekLetters[base];
            if (!phoneme) { output += original; continue; }
            let latin = m[2].includes("\u0314") ? "h" + phoneme : phoneme;
            if (m[2].includes("\u0345")) latin += "i";
            if (original !== base) latin = latin[0].toUpperCase() + latin.slice(1);
            output += latin;
        }
        return output || text;
    }
    function getInfo(edition, form) {
        const group = edition === "BHS" ? "BHS" : edition === "VUL" ? "VUL" : "GRC";
        const key = group === "BHS" ? stripHebrew(form) :
            group === "GRC" ? stripGreek(form) : form.toLowerCase();
        const gloss = lexemes[group][key] || null;
        return {
            form, edition, transliteration: group === "BHS" ? transliterateHebrew(form) :
                group === "GRC" ? transliterateGreek(form) : form,
            meaning: gloss,
            label: group === "BHS" ? "Hebraico" : group === "GRC" ? "Grego" : "Latim",
            status: gloss ? "Glossa editorial preliminar" : "Acepção não cadastrada",
            note: gloss ?
                "Resumo editorial introdutório; não substitui análise morfológica nem verbete cotejado de BDAG, KBS, Clines ou outro léxico." :
                "A forma ainda não possui análise lexical validada. Não foi atribuída uma tradução por inferência."
        };
    }
    function attach(panel, textRegion) {
        const popup = document.createElement("aside");
        popup.className = "scripture-word-popup";
        popup.setAttribute("role", "dialog");
        popup.setAttribute("aria-label", "Minidicionário bíblico");
        popup.setAttribute("aria-modal", "false");
        popup.hidden = true;
        document.body.append(popup);
        let active = null;
        function close(restoreFocus) {
            if (popup.hidden) return;
            popup.hidden = true;
            popup.replaceChildren();
            if (active) {
                active.setAttribute("aria-expanded", "false");
                if (restoreFocus && active.isConnected) active.focus();
            }
            active = null;
        }
        function field(name, value, className) {
            const block = document.createElement("div");
            block.className = className || "scripture-word-popup-field";
            const heading = document.createElement("strong");
            heading.textContent = name;
            const text = document.createElement("span");
            text.textContent = value;
            block.append(heading, text);
            return block;
        }
        function open(button) {
            if (active === button && !popup.hidden) { close(true); return; }
            close(false);
            active = button;
            const info = getInfo(button.dataset.edition, button.dataset.word);
            const header = document.createElement("div");
            header.className = "scripture-word-popup-head";
            const title = document.createElement("strong");
            title.textContent = info.form;
            title.lang = info.label === "Hebraico" ? "he" : info.label === "Latim" ? "la" : "grc";
            title.dir = info.label === "Hebraico" ? "rtl" : "ltr";
            const dismiss = document.createElement("button");
            dismiss.type = "button";
            dismiss.className = "scripture-word-popup-close";
            dismiss.setAttribute("aria-label", "Fechar minidicionário");
            dismiss.textContent = "×";
            dismiss.addEventListener("click", () => close(true));
            header.append(title, dismiss);
            const sub = document.createElement("p");
            sub.className = "scripture-word-popup-ref";
            sub.textContent = button.dataset.reference + " · " + info.label;
            const meaning = field("Minidicionário", info.meaning || "Sem acepção cadastrada");
            const reading = field(
                info.label === "Latim" ? "Forma latina" : "Transliteração aproximada",
                info.transliteration
            );
            const status = document.createElement("p");
            status.className = "scripture-word-popup-status";
            status.textContent = info.status + ". " + info.note;
            popup.replaceChildren(header, sub, reading, meaning, status);
            popup.hidden = false;
            button.setAttribute("aria-expanded", "true");
            const r = button.getBoundingClientRect();
            const box = popup.getBoundingClientRect();
            popup.style.left = Math.max(10, Math.min(r.left, window.innerWidth - box.width - 10)) + "px";
            let top = r.bottom + 8;
            if (top + box.height > window.innerHeight - 10) top = Math.max(10, r.top - box.height - 8);
            popup.style.top = top + "px";
            dismiss.focus();
        }
        textRegion.addEventListener("click", function (event) {
            const button = event.target.closest(".scripture-word");
            if (button && textRegion.contains(button)) open(button);
        });
        document.addEventListener("pointerdown", function (event) {
            if (!popup.hidden && !popup.contains(event.target) &&
                !event.target.closest(".scripture-word")) close(false);
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && !popup.hidden) { event.preventDefault(); close(true); }
        });
        window.addEventListener("scroll", function () { close(false); }, { passive: true, capture: true });
        window.addEventListener("resize", function () { close(false); });
        function decorate(node, text, context) {
            const frag = document.createDocumentFragment();
            for (const token of tokenize(text)) {
                if (!token.word) { frag.append(document.createTextNode(token.text)); continue; }
                const button = document.createElement("button");
                button.type = "button";
                button.className = "scripture-word";
                button.textContent = token.text;
                button.dataset.word = token.text;
                button.dataset.edition = context.edition;
                button.dataset.reference = context.reference;
                button.setAttribute("aria-haspopup", "dialog");
                button.setAttribute("aria-expanded", "false");
                button.setAttribute("aria-label", token.text + ": consultar transliteração e minidicionário");
                frag.append(button);
            }
            node.replaceChildren(frag);
        }
        return Object.freeze({ decorate, close });
    }
    window.ScripturaWordPopups = Object.freeze({
        attach, tokenize, getInfo, transliterateHebrew, transliterateGreek
    });
})();
