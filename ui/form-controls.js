/* Scriptura Lexicon — controles temáticos de formulário.
 * Melhoria progressiva: os elementos nativos mantêm valor, eventos e fallback.
 * As listas visuais são DOM normal, permitindo tipografia e scrollbars temáticas.
 */
(() => {
    "use strict";

    let nextId = 0;
    let active = null;
    const pending = new Set();
    const dropdown = document.createElement("div");
    dropdown.className = "lx-options";
    dropdown.setAttribute("role", "listbox");
    dropdown.hidden = true;
    document.body.append(dropdown);

    function labelFor(control) {
        const label = control.closest("label");
        const direct = label && [...label.childNodes].find(node =>
            node.nodeType === Node.TEXT_NODE && node.textContent.trim());
        return direct?.textContent.trim() || control.getAttribute("aria-label") ||
            control.id.replace(/[-_]/g, " ") || "campo";
    }
    function isHebrewBook(select) {
        return select.id === "scripture-book" &&
            document.getElementById("scripture-edition")?.value === "UXLC";
    }
    function optionText(label, target, hebrew) {
        const text = document.createElement("span");
        text.className = "lx-option-text";
        if (hebrew && label.includes(" · ")) {
            const split = label.lastIndexOf(" · ");
            const portuguese = document.createElement("span");
            portuguese.textContent = label.slice(0, split);
            const separator = document.createElement("span");
            separator.textContent = "·";
            const original = document.createElement("bdi");
            original.lang = "he";
            original.dir = "rtl";
            original.className = "lx-hebrew";
            original.textContent = label.slice(split + 3);
            text.append(portuguese, separator, original);
        } else {
            text.textContent = label;
        }
        target.replaceChildren(text);
    }
    function sync(select) {
        if (!select.isConnected || !select._lx) return;
        const {button, text} = select._lx;
        const current = select.selectedOptions[0];
        optionText(current?.textContent || "Selecione uma opção", text,
            isHebrewBook(select));
        button.disabled = select.disabled;
        button.setAttribute("aria-label", labelFor(select) + ": " +
            (current?.textContent || "Selecione uma opção"));
        if (active?.select === select) close(false);
    }
    function schedule(select) {
        if (pending.has(select)) return;
        pending.add(select);
        queueMicrotask(() => {
            pending.delete(select);
            sync(select);
        });
    }
    function close(restoreFocus) {
        if (!active) return;
        const {button} = active;
        active = null;
        dropdown.hidden = true;
        dropdown.replaceChildren();
        dropdown.removeAttribute("aria-label");
        button.setAttribute("aria-expanded", "false");
        button.removeAttribute("aria-activedescendant");
        if (restoreFocus && button.isConnected) button.focus();
    }
    function positionDropdown() {
        if (!active) return;
        const rect = active.button.getBoundingClientRect();
        const bottomRoom = window.innerHeight - rect.bottom - 12;
        const topRoom = rect.top - 12;
        const above = bottomRoom < 180 && topRoom > bottomRoom;
        const room = Math.max(90, above ? topRoom - 7 : bottomRoom - 7);
        const width = Math.min(window.innerWidth - 16, Math.max(rect.width, 190));
        dropdown.style.width = width + "px";
        dropdown.style.left = Math.max(8, Math.min(rect.left, window.innerWidth - width - 8)) + "px";
        dropdown.style.maxHeight = Math.min(380, room) + "px";
        if (above) {
            dropdown.style.top = "auto";
            dropdown.style.bottom = (window.innerHeight - rect.top + 5) + "px";
        } else {
            dropdown.style.bottom = "auto";
            dropdown.style.top = (rect.bottom + 5) + "px";
        }
    }
    function setActive(index) {
        if (!active || !active.rows.length) return;
        const n = Math.max(0, Math.min(active.rows.length - 1, index));
        active.index = n;
        for (let i = 0; i < active.rows.length; i++) {
            const row = active.rows[i];
            row.classList.toggle("is-active", i === n);
            if (i === n) {
                active.button.setAttribute("aria-activedescendant", row.id);
                // Rolagem restrita à lista: scrollIntoView pode rolar a página
                // e disparar o listener global de fechamento do próprio menu.
                const item=row.getBoundingClientRect();
                const viewport=dropdown.getBoundingClientRect();
                if(item.top<viewport.top)dropdown.scrollTop-=viewport.top-item.top;
                else if(item.bottom>viewport.bottom)
                    dropdown.scrollTop+=item.bottom-viewport.bottom;
            }
        }
    }
    function commit(index) {
        if (!active) return;
        const {select, rows} = active;
        const option = rows[index]?._lxOption;
        if (!option || option.disabled) return;
        const changed = select.value !== option.value;
        select.value = option.value;
        close(true);
        if (changed) {
            select.dispatchEvent(new Event("input", {bubbles: true}));
            select.dispatchEvent(new Event("change", {bubbles: true}));
        }
        schedule(select);
    }
    function open(select) {
        if (active) close(false);
        if (select.disabled) return;
        const {button} = select._lx;
        const rows = [];
        const hebrew = isHebrewBook(select);
        dropdown.replaceChildren();
        dropdown.setAttribute("aria-label", labelFor(select));
        for (const node of select.children) {
            if (node.tagName === "OPTGROUP") {
                const group = document.createElement("div");
                group.className = "lx-group";
                group.setAttribute("role", "group");
                group.setAttribute("aria-label", node.label);
                const heading = document.createElement("div");
                heading.className = "lx-group-title";
                heading.textContent = node.label;
                group.append(heading);
                for (const opt of node.children) appendOption(opt, group);
                dropdown.append(group);
            } else if (node.tagName === "OPTION") {
                appendOption(node, dropdown);
            }
        }
        function appendOption(option, parent) {
            const row = document.createElement("div");
            const index = rows.length;
            row.id = "lx-option-" + select._lx.id + "-" + index;
            row.className = "lx-option";
            row.setAttribute("role", "option");
            row.setAttribute("aria-selected", String(option.selected));
            row.setAttribute("aria-disabled", String(option.disabled));
            row._lxOption = option;
            optionText(option.textContent, row, hebrew);
            row.addEventListener("pointermove", () => {
                if (active?.select === select && active.index !== index) setActive(index);
            });
            row.addEventListener("click", () => commit(index));
            if (option.disabled) row.classList.add("is-disabled");
            rows.push(row);
            parent.append(row);
        }
        active = {select, button, rows, index: Math.max(0,
            rows.findIndex(row => row._lxOption.selected))};
        dropdown.hidden = false;
        button.setAttribute("aria-expanded", "true");
        positionDropdown();
        setActive(active.index);
    }
    function onSelectKey(event, select) {
        const key = event.key;
        if (key === "Tab") { close(false); return; }
        if (key === "Escape") {
            if (active?.select === select) {
                event.preventDefault();
                event.stopPropagation();
                close(true);
            }
            return;
        }
        if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(key)) {
            event.preventDefault();
            if (active?.select !== select) {
                open(select);
                return;
            }
            if (key === "Enter" || key === " ") commit(active.index);
            else if (key === "Home") setActive(0);
            else if (key === "End") setActive(active.rows.length - 1);
            else setActive(active.index + (key === "ArrowDown" ? 1 : -1));
            return;
        }
        if (key.length === 1 && !event.ctrlKey && !event.altKey && !event.metaKey) {
            if (active?.select !== select) open(select);
            if (!active) return;
            const now = Date.now();
            const prefix = (now - (active.typedAt || 0) < 700 ?
                active.prefix || "" : "") + key.toLocaleLowerCase("pt-BR");
            active.prefix = prefix;
            active.typedAt = now;
            const at = active.rows.findIndex(row =>
                row.textContent.toLocaleLowerCase("pt-BR").startsWith(prefix));
            if (at >= 0) { event.preventDefault(); setActive(at); }
        }
    }
    function enhanceSelect(select) {
        if (select._lx || select.id === "source-filter" ||
            select.closest(".source-filter-box")) return;
        const wrapper = document.createElement("div");
        wrapper.className = "lx-select";
        wrapper.dataset.for = select.id || "";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "lx-select-button";
        button.setAttribute("aria-haspopup", "listbox");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "lx-global-options");
        const text = document.createElement("span");
        text.className = "lx-select-value";
        const arrow = document.createElement("span");
        arrow.className = "lx-select-chevron";
        arrow.setAttribute("aria-hidden", "true");
        button.append(text, arrow);
        select.before(wrapper);
        wrapper.append(select, button);
        select.classList.add("lx-native-select");
        select.tabIndex = -1;
        select.setAttribute("aria-hidden", "true");
        select._lx = {wrapper, button, text, id: ++nextId};
        button.addEventListener("click", () => {
            if (active?.select === select) close(false);
            else open(select);
        });
        button.addEventListener("keydown", e => onSelectKey(e, select));
        select.addEventListener("change", () => schedule(select));
        select.addEventListener("input", () => schedule(select));
        sync(select);
    }
    function enhanceNumber(input) {
        if (input._lxNumber) return;
        const wrapper = document.createElement("div");
        wrapper.className = "lx-number";
        const steppers = document.createElement("span");
        steppers.className = "lx-number-steps";
        const text = labelFor(input);
        input.before(wrapper);
        wrapper.append(input, steppers);
        for (const direction of ["up", "down"]) {
            const button = document.createElement("button");
            button.type = "button";
            button.className = "lx-step lx-step-" + direction;
            // Chevron vetorial centralizado: não depende do alinhamento da fonte
            // (os caracteres ⌃/⌄ ficavam visualmente junto às bordas).
            const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            icon.setAttribute("viewBox", "0 0 16 16");
            icon.setAttribute("aria-hidden", "true");
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", direction === "up" ? "M3 10 L8 5 L13 10" : "M3 6 L8 11 L13 6");
            icon.append(path);
            button.append(icon);
            button.setAttribute("aria-label", (direction === "up" ?
                "Aumentar " : "Diminuir ") + text);
            button.addEventListener("click", () => {
                if (input.disabled || input.readOnly) return;
                try {
                    if (input.value === "") {
                        input.value = direction === "up" ?
                            String(input.min || 1) : String(input.min || 0);
                    } else {
                        input[direction === "up" ? "stepUp" : "stepDown"]();
                    }
                } catch (_) { return; }
                input.dispatchEvent(new Event("input", {bubbles: true}));
                input.dispatchEvent(new Event("change", {bubbles: true}));
                input.focus({preventScroll: true});
            });
            steppers.append(button);
        }
        input._lxNumber = {wrapper, buttons: [...steppers.children]};
        syncNumber(input);
    }
    function syncNumber(input) {
        if (!input._lxNumber) return;
        const num = Number(input.value);
        const hasValue = input.value !== "" && Number.isFinite(num);
        const min = input.min === "" ? -Infinity : Number(input.min);
        const max = input.max === "" ? Infinity : Number(input.max);
        const disabled = input.disabled || input.readOnly;
        const [up, down] = input._lxNumber.buttons;
        up.disabled = disabled || (hasValue && num >= max);
        down.disabled = disabled || (hasValue && num <= min);
    }
    function scan(root) {
        if (root.nodeType !== 1 && root.nodeType !== 9) return;
        const selects = root.matches?.("select") ? [root] :
            [...root.querySelectorAll("select")];
        const numbers = root.matches?.('input[type="number"]') ? [root] :
            [...root.querySelectorAll('input[type="number"]')];
        for (const select of selects) enhanceSelect(select);
        for (const number of numbers) enhanceNumber(number);
    }
    function init() {
        dropdown.id = "lx-global-options";
        scan(document);
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === "attributes") {
                    const el = mutation.target;
                    if (el.tagName === "SELECT") schedule(el);
                    if (el.matches?.('input[type="number"]')) syncNumber(el);
                    continue;
                }
                if (mutation.target.closest?.("select")) {
                    schedule(mutation.target.closest("select"));
                } else if (mutation.target.tagName === "SELECT") {
                    schedule(mutation.target);
                }
                for (const node of mutation.addedNodes) scan(node);
            }
        });
        observer.observe(document.body, {
            subtree: true, childList: true, attributes: true,
            attributeFilter: ["disabled", "min", "max", "readonly"]
        });
        document.addEventListener("pointerdown", event => {
            if (active && !dropdown.contains(event.target) &&
                !active.button.contains(event.target)) close(false);
        });
        document.addEventListener("keydown", event => {
            if (active && event.key === "Escape") {
                event.preventDefault();
                close(true);
            }
        });
        window.addEventListener("resize", positionDropdown);
        window.addEventListener("scroll", event => {
            if (!active || event.target === dropdown || dropdown.contains(event.target)) return;
            close(false);
        }, {passive: true, capture: true});
        document.addEventListener("change", event => {
            if (event.target.matches?.('input[type="number"]')) {
                syncNumber(event.target);
            }
            if (event.target.id === "scripture-edition") {
                const book = document.getElementById("scripture-book");
                if (book) schedule(book);
            }
        });
    }
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, {once: true});
    } else init();
})();
