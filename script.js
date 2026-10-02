"use strict";

const searchInput = document.getElementById("search-input");
const sourceFilter = document.getElementById("source-filter");
const searchTableWrapper = document.getElementById("search-table-wrapper");

const searchRows = Array.from(
    document.querySelectorAll(".search-row")
);

const entryCards = Array.from(
    document.querySelectorAll(".entry-card")
);

const searchCount = document.getElementById("search-count");
const noResults = document.getElementById("no-results");

const dictionaryTitle = document.getElementById("dictionary-title");
const dictionaryDescription = document.getElementById("dictionary-description");

const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const dictionaryMenu = document.getElementById("dictionary-menu");
const menuBackdrop = document.getElementById("menu-backdrop");

const dictionaryOptions = Array.from(
    document.querySelectorAll(".dictionary-option")
);

const lexicalTooltip = document.getElementById("lexical-tooltip");

const tooltipTriggers = Array.from(
    document.querySelectorAll(".tooltip-trigger")
);

const dictionaries = {
    hebraico: {
        title: "Hebraico–Português",
        description: "Léxico hebraico com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário hebraico–português..."
    },

    aramaico: {
        title: "Aramaico–Português",
        description: "Léxico aramaico com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário aramaico–português..."
    },

    grego: {
        title: "Grego–Português",
        description: "Léxico grego com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário grego–português..."
    },

    latim: {
        title: "Latim–Português",
        description: "Léxico latino com tradução, referências e análise em português.",
        placeholder: "Pesquisar no dicionário latim–português..."
    }
};

let activeDictionary = "grego";
let activeTooltipTrigger = null;


/* ==========================================================
   NORMALIZAÇÃO
   ========================================================== */

function normalizeText(text) {
    return text
        .toLocaleLowerCase("pt-BR")
        .normalize("NFD")
        .replace(/\p{M}/gu, "")
        .replace(/\s+/g, " ")
        .trim();
}


/* ==========================================================
   MENU
   ========================================================== */

function openDictionaryMenu() {
    dictionaryMenu.classList.add("open");
    dictionaryMenu.setAttribute("aria-hidden", "false");

    menuToggle.setAttribute("aria-expanded", "true");

    menuBackdrop.hidden = false;

    document.body.classList.add("menu-open");

    menuClose.focus();
}


function closeDictionaryMenu(returnFocus) {
    dictionaryMenu.classList.remove("open");
    dictionaryMenu.setAttribute("aria-hidden", "true");

    menuToggle.setAttribute("aria-expanded", "false");

    menuBackdrop.hidden = true;

    document.body.classList.remove("menu-open");

    if (returnFocus) {
        menuToggle.focus();
    }
}


/* ==========================================================
   DICIONÁRIOS
   ========================================================== */

function dictionaryFromHash() {
    const value =
        window.location.hash
            .replace(/^#/, "")
            .trim();

    return dictionaries[value]
        ? value
        : "grego";
}


function rowsForActiveDictionary() {
    return searchRows.filter(function (row) {
        return row.dataset.dictionary === activeDictionary;
    });
}


function cardsForActiveDictionary() {
    return entryCards.filter(function (card) {
        return card.dataset.dictionary === activeDictionary;
    });
}


function resetSearchState() {
    searchInput.value = "";

    searchRows.forEach(function (row) {
        row.hidden = true;
    });

    entryCards.forEach(function (card) {
        card.hidden = true;
    });

    searchTableWrapper.hidden = true;
    noResults.hidden = true;

    searchCount.textContent = "Digite para pesquisar";
}


function populateSourceFilter() {
    const previousValue = sourceFilter.value;

    sourceFilter.innerHTML =
        '<option value="">Todas as fontes</option>';

    const sources = [
        ...new Set(
            rowsForActiveDictionary()
                .map(function (row) {
                    return row.dataset.source;
                })
                .filter(Boolean)
        )
    ].sort(function (a, b) {
        return a.localeCompare(b, "pt-BR");
    });

    sources.forEach(function (source) {
        const option =
            document.createElement("option");

        option.value = source;
        option.textContent = source;

        sourceFilter.appendChild(option);
    });

    const stillAvailable =
        sources.includes(previousValue);

    sourceFilter.value =
        stillAvailable
            ? previousValue
            : "";
}


function selectDictionary(dictionary, options) {
    const settings =
        Object.assign(
            {
                updateHash: true,
                focusSearch: false
            },
            options || {}
        );

    if (!dictionaries[dictionary]) {
        dictionary = "grego";
    }

    activeDictionary = dictionary;

    const config =
        dictionaries[activeDictionary];

    dictionaryTitle.textContent =
        config.title;

    dictionaryDescription.textContent =
        config.description;

    searchInput.placeholder =
        config.placeholder;

    dictionaryOptions.forEach(function (option) {
        const isActive =
            option.dataset.dictionaryTarget ===
            activeDictionary;

        option.classList.toggle(
            "active",
            isActive
        );

        if (isActive) {
            option.setAttribute(
                "aria-current",
                "page"
            );
        } else {
            option.removeAttribute(
                "aria-current"
            );
        }
    });

    resetSearchState();
    populateSourceFilter();

    closeDictionaryMenu(false);

    if (
        settings.updateHash &&
        window.location.hash !==
            "#" + activeDictionary
    ) {
        history.replaceState(
            null,
            "",
            "#" + activeDictionary
        );
    }

    if (settings.focusSearch) {
        searchInput.focus();
    }
}


/* ==========================================================
   CONTADOR
   ========================================================== */

function updateCounter(count) {
    searchCount.textContent =
        count === 1
            ? "1 verbete"
            : String(count) + " verbetes";
}


/* ==========================================================
   PESQUISA
   ========================================================== */

function filterEntries() {
    const rawQuery =
        searchInput.value.trim();

    const query =
        normalizeText(rawQuery);

    const selectedSource =
        sourceFilter.value;

    entryCards.forEach(function (card) {
        card.hidden = true;
    });

    if (query === "") {
        searchRows.forEach(function (row) {
            row.hidden = true;
        });

        searchTableWrapper.hidden = true;
        noResults.hidden = true;

        searchCount.textContent =
            "Digite para pesquisar";

        return;
    }

    searchTableWrapper.hidden = false;

    let visibleCount = 0;
    const activeRows =
        rowsForActiveDictionary();

    searchRows.forEach(function (row) {
        if (
            row.dataset.dictionary !==
            activeDictionary
        ) {
            row.hidden = true;
            return;
        }

        const rawSearchText =
            row.dataset.search ||
            row.textContent;

        const searchableText =
            normalizeText(
                rawSearchText
            );

        const rowSource =
            row.dataset.source || "";

        const matchesText =
            searchableText.includes(query);

        const matchesSource =
            selectedSource === "" ||
            rowSource === selectedSource;

        const visible =
            matchesText &&
            matchesSource;

        row.hidden = !visible;

        if (visible) {
            visibleCount++;
        }
    });

    updateCounter(visibleCount);

    if (
        visibleCount === 0 &&
        activeRows.length === 0
    ) {
        noResults.textContent =
            "Nenhum verbete cadastrado neste dicionário.";
    } else {
        noResults.textContent =
            "Nenhum verbete encontrado.";
    }

    noResults.hidden =
        visibleCount !== 0;
}


/* ==========================================================
   ABRIR VERBETE
   ========================================================== */

function openEntry(row) {
    if (
        row.dataset.dictionary !==
        activeDictionary
    ) {
        return;
    }

    const targetId =
        row.dataset.target;

    if (!targetId) {
        return;
    }

    const target =
        document.getElementById(
            targetId
        );

    if (
        !target ||
        target.dataset.dictionary !==
            activeDictionary
    ) {
        return;
    }

    entryCards.forEach(function (card) {
        card.hidden = card !== target;
    });

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    target.classList.remove(
        "entry-highlight"
    );

    void target.offsetWidth;

    target.classList.add(
        "entry-highlight"
    );
}


/* ==========================================================
   UTILIDADES
   ========================================================== */

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


function parseMeanings(value) {
    return String(value || "")
        .split("|")
        .map(function (item) {
            return item.trim();
        })
        .filter(Boolean);
}


function buildMeaningsHtml(meanings) {
    return meanings
        .map(function (meaning) {
            return (
                '<span class="tooltip-meaning">' +
                escapeHtml(meaning) +
                "</span>"
            );
        })
        .join("");
}


/* ==========================================================
   CONTEÚDO DO POPUP
   ========================================================== */

function buildTooltipContent(trigger) {
    const type =
        trigger.dataset.tooltipType ||
        "generic";

    const label =
        trigger.dataset.tooltipLabel ||
        trigger.textContent.trim();

    if (type === "abbr") {
        const text =
            trigger.dataset.tooltipText || "";

        return (
            '<div class="tooltip-heading">' +
            escapeHtml(label) +
            "</div>" +
            '<div class="tooltip-block">' +
            '<span class="tooltip-label">Expansão</span>' +
            '<div class="tooltip-value">' +
            escapeHtml(text) +
            "</div>" +
            "</div>"
        );
    }

    if (type === "biblio") {
        const text =
            trigger.dataset.tooltipText || "";

        return (
            '<div class="tooltip-heading biblio-heading">' +
            escapeHtml(label) +
            "</div>" +
            '<div class="tooltip-block">' +
            '<span class="tooltip-label">Referência</span>' +
            '<div class="tooltip-value">' +
            escapeHtml(text) +
            "</div>" +
            "</div>"
        );
    }

    if (
        type === "hebrew" ||
        type === "syriac"
    ) {
        const transliteration =
            trigger.dataset.transliteration || "";

        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        const headingClass =
            type === "hebrew"
                ? "hebrew-heading"
                : "syriac-heading";

        let html =
            '<div class="tooltip-heading ' +
            headingClass +
            '">' +
            escapeHtml(label) +
            "</div>";

        if (transliteration) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Transliteração</span>' +
                '<div class="tooltip-value">' +
                escapeHtml(transliteration) +
                "</div>" +
                "</div>";
        }

        if (meanings.length) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Significados</span>' +
                '<div class="tooltip-meanings">' +
                buildMeaningsHtml(meanings) +
                "</div>" +
                "</div>";
        }

        return html;
    }

    if (type === "greek") {
        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        let html =
            '<div class="tooltip-heading greek-heading">' +
            escapeHtml(label) +
            "</div>";

        if (meanings.length) {
            html +=
                '<div class="tooltip-block">' +
                '<span class="tooltip-label">Significados</span>' +
                '<div class="tooltip-meanings">' +
                buildMeaningsHtml(meanings) +
                "</div>" +
                "</div>";
        }

        return html;
    }

    return (
        '<div class="tooltip-heading">' +
        escapeHtml(label) +
        "</div>"
    );
}


/* ==========================================================
   POSICIONAMENTO
   ========================================================== */

function positionTooltip(trigger) {
    if (!lexicalTooltip) {
        return;
    }

    const triggerRect =
        trigger.getBoundingClientRect();

    const tooltipRect =
        lexicalTooltip.getBoundingClientRect();

    const viewportWidth =
        window.innerWidth;

    const viewportHeight =
        window.innerHeight;

    const spacing = 10;

    let left =
        triggerRect.left +
        (
            triggerRect.width -
            tooltipRect.width
        ) / 2;

    left =
        Math.max(
            8,
            Math.min(
                left,
                viewportWidth -
                tooltipRect.width -
                8
            )
        );

    let top =
        triggerRect.top -
        tooltipRect.height -
        spacing;

    if (top < 8) {
        top =
            triggerRect.bottom +
            spacing;
    }

    if (
        top +
        tooltipRect.height >
        viewportHeight - 8
    ) {
        top =
            Math.max(
                8,
                viewportHeight -
                tooltipRect.height -
                8
            );
    }

    lexicalTooltip.style.left =
        String(left) + "px";

    lexicalTooltip.style.top =
        String(top) + "px";
}


/* ==========================================================
   MOSTRAR / ESCONDER POPUP
   ========================================================== */

function showTooltip(trigger) {
    if (!lexicalTooltip) {
        return;
    }

    activeTooltipTrigger =
        trigger;

    lexicalTooltip.innerHTML =
        buildTooltipContent(
            trigger
        );

    lexicalTooltip.classList.add(
        "visible"
    );

    lexicalTooltip.setAttribute(
        "aria-hidden",
        "false"
    );

    positionTooltip(trigger);
}


function hideTooltip() {
    if (!lexicalTooltip) {
        return;
    }

    activeTooltipTrigger =
        null;

    lexicalTooltip.classList.remove(
        "visible"
    );

    lexicalTooltip.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* ==========================================================
   EVENTOS
   ========================================================== */

menuToggle.addEventListener(
    "click",
    openDictionaryMenu
);

menuClose.addEventListener(
    "click",
    function () {
        closeDictionaryMenu(true);
    }
);

menuBackdrop.addEventListener(
    "click",
    function () {
        closeDictionaryMenu(true);
    }
);

dictionaryOptions.forEach(function (option) {
    option.addEventListener(
        "click",
        function () {
            selectDictionary(
                option.dataset.dictionaryTarget,
                {
                    updateHash: true,
                    focusSearch: true
                }
            );
        }
    );
});

searchInput.addEventListener(
    "input",
    filterEntries
);

sourceFilter.addEventListener(
    "change",
    filterEntries
);

searchRows.forEach(function (row) {
    row.addEventListener(
        "click",
        function () {
            openEntry(row);
        }
    );

    row.addEventListener(
        "keydown",
        function (event) {
            if (
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openEntry(row);
            }
        }
    );
});

tooltipTriggers.forEach(function (trigger) {
    trigger.addEventListener(
        "mouseenter",
        function () {
            showTooltip(trigger);
        }
    );

    trigger.addEventListener(
        "mouseleave",
        hideTooltip
    );

    trigger.addEventListener(
        "focus",
        function () {
            showTooltip(trigger);
        }
    );

    trigger.addEventListener(
        "blur",
        hideTooltip
    );

    trigger.addEventListener(
        "click",
        function (event) {
            event.stopPropagation();

            if (
                activeTooltipTrigger === trigger &&
                lexicalTooltip.classList.contains("visible")
            ) {
                hideTooltip();
            } else {
                showTooltip(trigger);
            }
        }
    );
});

window.addEventListener(
    "resize",
    function () {
        if (activeTooltipTrigger) {
            positionTooltip(
                activeTooltipTrigger
            );
        }
    }
);

window.addEventListener(
    "scroll",
    function () {
        if (activeTooltipTrigger) {
            positionTooltip(
                activeTooltipTrigger
            );
        }
    },
    {
        passive: true
    }
);

window.addEventListener(
    "hashchange",
    function () {
        selectDictionary(
            dictionaryFromHash(),
            {
                updateHash: false,
                focusSearch: false
            }
        );
    }
);

document.addEventListener(
    "click",
    function (event) {
        if (
            activeTooltipTrigger &&
            !event.target.closest(".tooltip-trigger")
        ) {
            hideTooltip();
        }
    }
);

document.addEventListener(
    "keydown",
    function (event) {
        if (event.key !== "Escape") {
            return;
        }

        if (
            dictionaryMenu.classList.contains("open")
        ) {
            closeDictionaryMenu(true);
            return;
        }

        hideTooltip();
    }
);


/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

searchRows.forEach(function (row) {
    if (!row.dataset.dictionary) {
        row.dataset.dictionary = "grego";
    }
});

entryCards.forEach(function (card) {
    if (!card.dataset.dictionary) {
        card.dataset.dictionary = "grego";
    }
});

selectDictionary(
    dictionaryFromHash(),
    {
        updateHash: true,
        focusSearch: false
    }
);
