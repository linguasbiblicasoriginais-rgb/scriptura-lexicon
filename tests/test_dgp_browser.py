#!/usr/bin/env python3
"""DGP: homologacao real por Chromium, sem publicar/mesclar lotes lexicais.

Caso A: estado real da branch chat-gpt-correcoes (2.880 entradas).
Caso B: montagem temporaria de cinco modulos novos da branch chat-gpt-dgp,
verificando 3.300 entradas SEM as copiar para branches permanentes.
"""
import functools
import http.server
import pathlib
import subprocess
import threading
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
GLUED = {
    1114: ("aor.", "ἤϊξα"),
    1627: ("fut.", "ἀλείψω"),
    1683: ("aor.", "ἠλήθευσα"),
    2278: ("aor.", "ἠμύστισα"),
    2289: ("méd.", "ἀμφαφάομαι-ῶμαι"),
}


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass


def prepare_candidate():
    subprocess.run(["git", "fetch", "--no-tags", "origin", "chat-gpt-dgp"],
                   cwd=ROOT, check=True)
    scripts = []
    for batch in range(77, 82):
        filename = "lexicons/dgp-batch-%03d.js" % batch
        assert not (ROOT / filename).exists(), "Candidato ja esta incorporado: " + filename
        content = subprocess.run(
            ["git", "show", "FETCH_HEAD:" + filename],
            cwd=ROOT, capture_output=True, check=True
        ).stdout
        assert content, "Modulo novo vazio: " + filename
        (ROOT / filename).write_bytes(content)
        scripts.append('    <script src="' + filename + '"></script>')
    existing = (ROOT / "index.html").read_text(encoding="utf-8")
    marker = '    <script src="lexicons/dgp-format.js"></script>'
    assert existing.count(marker) == 1, "Marcador DGP no HTML nao e unico"
    patched = existing.replace(marker, "\n".join(scripts) + "\n" + marker)
    output = ROOT / "index.dgp-candidate.html"
    output.write_text(patched, encoding="utf-8")
    return output.name


def check(condition, message):
    if not condition:
        raise AssertionError(message)


def test_page(browser, base, path, expected):
    errors = []
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    page.on("pageerror", lambda exc: errors.append(str(exc)))
    page.goto(base + "/" + path + "#grego", wait_until="load", timeout=180000)
    counts = page.evaluate("""() => {
        const rows = [...document.querySelectorAll('.search-row[data-source="DGP"]')];
        const cards = [...document.querySelectorAll('.entry-card[data-source="DGP"]')];
        const map = new Map(cards.map(c => [c.id, c]));
        const seen = new Set();
        const issues = [];
        let indexed = 0;
        for (const row of rows) {
            const id = row.dataset.target;
            const card = map.get(id);
            if (seen.has(id)) issues.push("ID repetido: " + id);
            seen.add(id);
            if (!card) { issues.push("Cartao ausente: " + id); continue; }
            const head = card.querySelector(".entry-title");
            const lem = row.querySelector(".table-lemma");
            const definition = card.querySelector(".entry-section .entry-text");
            if (!head || !lem || head.textContent.trim() !== lem.textContent.trim())
                issues.push("Lema linha/cartao: " + id);
            if (!definition || !definition.textContent.trim())
                issues.push("Definicao ausente: " + id);
            else if (!(row.dataset.search || "").includes(definition.textContent.trim()))
                issues.push("Indice incompleto: " + id);
            else indexed++;
        }
        const audit = window.ScripturaLexicons?.DGP?.presentationAudit || null;
        return {rows:rows.length, cards:cards.length, unique:seen.size,
                indexed, issues:issues.slice(0,30), issuesCount:issues.length,
                presentationAudit:audit};
    }""")
    check(counts["rows"] == expected, "Linhas: %s, esperado %s" % (counts["rows"], expected))
    check(counts["cards"] == expected, "Cartoes: %s, esperado %s" % (counts["cards"], expected))
    check(counts["unique"] == expected, "IDs de destino repetidos")
    check(counts["issuesCount"] == 0, "Integridade/indexacao: " + str(counts["issues"]))
    check(counts["indexed"] == expected, "Falta indice completo")
    audit = counts["presentationAudit"]
    check(audit is not None, "DGP.presentationAudit nao executou")
    check(audit["cards"] == expected, "Formatador nao percorreu todos os cartoes")
    check(audit["searchRowsMissingCard"] == 0, "Cartoes sem par na busca")
    check(audit["searchRowsIndexed"] == expected, "Indice nao processou todos os cartoes")
    check(audit["recoveredHeadwordsNoted"] == 2, "Faltam notas de lemas recuperados")
    check(audit["sourceNumberingNotes"] == 2, "Faltam notas sobre numeracao original")
    check(sorted(audit["gluedAbbreviationsFixed"]) == list(GLUED),
          "Falha nas cinco abreviaturas coladas: " + str(audit["gluedAbbreviationsFixed"]))

    for n, (abbr, form) in GLUED.items():
        fixed = page.locator("#entry-dgp-%04d" % n).evaluate("""(card, arg) => {
            const [label, form] = arg;
            const matches = [...card.querySelectorAll('[data-tooltip-type="abbr"]')]
              .filter(n => n.dataset.tooltipLabel === label && n.nextSibling &&
                        n.nextSibling.nodeType === 3 &&
                        n.nextSibling.nodeValue.startsWith(' ' + form));
            return matches.length;
        }""", [abbr, form])
        check(fixed == 1, "Espaco/popup do ordinal %s: %s" % (n, fixed))

    notes = page.evaluate("""() => [2311, 2483, 434, 543].map(n => {
        const card = document.getElementById('entry-dgp-' + String(n).padStart(4,'0'));
        return [n, card?.querySelectorAll('[data-editorial-layer="GDHAGP"]').length];
    })""")
    check(all(count == 1 for _, count in notes), "Notas editoriais: " + str(notes))

    page.locator("#search-input").fill("ser ginasta")
    target = page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-1627"]')
    check(target.evaluate("(el) => !el.hidden"), "Pesquisa integral nao encontra ἀλείφω")
    target.focus()
    page.keyboard.press("Enter")
    check(page.locator("#entry-dgp-1627").evaluate("(el) => !el.hidden"),
          "Enter nao abriu o verbete correto")
    future = page.locator('#entry-dgp-1627 [data-tooltip-type="abbr"][data-tooltip-label="fut."]')
    check(future.count() >= 1, "Tooltip de futuro ausente")
    future.first.focus()
    tooltip = page.locator("#lexical-tooltip")
    check(tooltip.get_attribute("aria-hidden") == "false",
          "Tooltip nao abriu pelo teclado")
    tip_snapshot = page.evaluate("""() => ({
        visible:document.getElementById('lexical-tooltip').className,
        aria:document.getElementById('lexical-tooltip').getAttribute('aria-hidden'),
        text:document.getElementById('lexical-tooltip').textContent,
        focus:document.activeElement?.outerHTML?.slice(0,300),
        trigger:[...document.querySelectorAll('#entry-dgp-1627 [data-tooltip-label="fut."]')]
          .map(e => e.dataset.tooltipText)
    })""")
    check("futuro" in (tip_snapshot["text"] or "").lower(),
          "Texto do popup futuro incorreto: " + repr(tip_snapshot))
    page.locator("#search-input").focus()
    check(tooltip.get_attribute("aria-hidden") == "true",
          "Tooltip nao fechou ao mover o foco para a pesquisa")

    source = page.locator("#source-filter")
    values = source.locator("option").evaluate_all("(opts) => opts.map(o => o.value)")
    check("DGP" in values, "Fonte DGP ausente do seletor")
    for theme in ("light", "dark"):
        inp = page.locator('input[name="site-theme"][value="%s"]' % theme)
        check(inp.count() > 0, "Comando de tema ausente " + theme)
        inp.check(force=True)
        check(page.locator("html").get_attribute("data-theme") == theme,
              "Tema nao alternou para " + theme)
    page.set_viewport_size({"width": 375, "height": 812})
    check(page.locator("#search-input").is_visible(), "Pesquisa invisivel em tela estreita")
    check(not errors, "Erros JS no navegador: " + repr(errors[:8]))
    print("APROVADO: %s, %s pares, %s indices completos, 5 popups, 4 notas, pesquisa/teclado/temas/mobile" %
          (path, expected, expected), flush=True)
    page.close()


def main():
    candidate = prepare_candidate()
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        address = "http://127.0.0.1:%d" % server.server_port
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            try:
                test_page(browser, address, "index.html", 2880)
                test_page(browser, address, candidate, 3300)
            finally:
                browser.close()
    finally:
        server.shutdown()


if __name__ == "__main__":
    main()
