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

const lexicalTooltip = document.getElementById("lexical-tooltip");

const tooltipTriggers = Array.from(
    document.querySelectorAll(".tooltip-trigger")
);

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
   CONTADOR
   ========================================================== */

function updateCounter(count) {
    searchCount.textContent =
        count === 1
            ? "1 verbete"
            : String(count) + " verbetes";
}


/* ==========================================================
   FONTES
   ========================================================== */

function populateSourceFilter() {
    const sources = [
        ...new Set(
            searchRows
                .map(function (row) {
                    return row.dataset.source;
                })
                .filter(Boolean)
        )
    ].sort(function (a, b) {
        return a.localeCompare(b, "pt-BR");
    });


    sources.forEach(function (source) {
        const option = document.createElement("option");

        option.value = source;
        option.textContent = source;

        sourceFilter.appendChild(option);
    });
}


/* ==========================================================
   PESQUISA
   ========================================================== */

function filterEntries() {
    const rawQuery = searchInput.value.trim();
    const query = normalizeText(rawQuery);

    const selectedSource = sourceFilter.value;

    /*
     * Ao alterar a busca, fecha qualquer verbete anteriormente aberto.
     * Os cartões só são revelados quando o usuário escolhe um resultado.
     */
    entryCards.forEach(function (card) {
        card.hidden = true;
    });


    /*
     * Sem texto digitado:
     * nenhum resultado deve aparecer,
     * independentemente da fonte selecionada.
     */

    if (query === "") {
        searchRows.forEach(function (row) {
            row.hidden = true;
        });

        searchTableWrapper.hidden = true;
        noResults.hidden = true;

        searchCount.textContent = "Digite para pesquisar";

        return;
    }


    /*
     * Há texto digitado:
     * aplica-se busca textual + filtro opcional de fonte.
     */

    searchTableWrapper.hidden = false;

    let visibleCount = 0;


    searchRows.forEach(function (row) {
        const rawSearchText =
            row.dataset.search ||
            row.textContent;

        const searchableText =
            normalizeText(rawSearchText);

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

    noResults.hidden =
        visibleCount !== 0;
}


/* ==========================================================
   ABRIR VERBETE
   ========================================================== */

function openEntry(row) {
    const targetId = row.dataset.target;

    if (!targetId) {
        return;
    }

    const target =
        document.getElementById(targetId);

    if (!target) {
        return;
    }

    /*
     * Exibe somente o verbete selecionado.
     */
    entryCards.forEach(function (card) {
        card.hidden = card !== target;
    });

    target.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    target.classList.remove("entry-highlight");

    void target.offsetWidth;

    target.classList.add("entry-highlight");
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


    if (type === "hebrew") {
        const transliteration =
            trigger.dataset.transliteration || "";

        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        let html =
            '<div class="tooltip-heading hebrew-heading">' +
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


    if (type === "syriac") {
        const transliteration =
            trigger.dataset.transliteration || "";

        const meanings =
            parseMeanings(
                trigger.dataset.meanings
            );

        let html =
            '<div class="tooltip-heading syriac-heading">' +
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
   MOSTRAR / ESCONDER
   ========================================================== */

function showTooltip(trigger) {
    if (!lexicalTooltip) {
        return;
    }

    activeTooltipTrigger = trigger;

    lexicalTooltip.innerHTML =
        buildTooltipContent(trigger);

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

    activeTooltipTrigger = null;

    lexicalTooltip.classList.remove(
        "visible"
    );

    lexicalTooltip.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* ==========================================================
   EVENTOS DA PESQUISA
   ========================================================== */

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


/* ==========================================================
   EVENTOS DOS POPUPS
   ========================================================== */

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
        if (event.key === "Escape") {
            hideTooltip();
        }
    }
);


/* ==========================================================
   INICIALIZAÇÃO
   ========================================================== */

populateSourceFilter();
filterEntries();
