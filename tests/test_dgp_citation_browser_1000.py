#!/usr/bin/env python3
"""Smoke funcional DGP: citações 14/17, popup grego e gramatical (Chromium)."""
import functools
import http.server
import pathlib
import threading
import unicodedata
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass


def check(value, reason):
    if not value:
        raise AssertionError(reason)


def exercise(page, ordinal, query, location, original, roman):
    page.locator("#search-input").fill(query)
    selector = '.search-row[data-source="DGP"][data-target="entry-dgp-%04d"]' % ordinal
    row = page.locator(selector)
    check(row.count() == 1, "Linha DGP ausente: %d" % ordinal)
    # Interacao real pelo teclado, sem reescrever a interface.
    row.focus()
    page.keyboard.press("Enter")
    article = page.locator("#entry-dgp-%04d" % ordinal)
    check(article.evaluate("(el) => !el.hidden"), "Cartao nao aberto: %d" % ordinal)
    work = article.locator(".dgp-citation-work")
    check(work.count() >= 1, "Obra nao identificada: %d" % ordinal)
    check(location in work.first.inner_text(), "Localizacao incorreta: %d" % ordinal)
    cite = article.locator(".dgp-greek-quotation")
    check(cite.count() >= 1, "Citação grega sem popup: %d" % ordinal)
    actual_greek = cite.first.inner_text()
    print("CITACAO #%d: %r" % (ordinal, actual_greek), flush=True)
    check(unicodedata.normalize("NFC", original) in unicodedata.normalize("NFC", actual_greek),
          "Grego divergente #%d: fonte=%r, DOM=%r" % (ordinal, original, actual_greek))
    check(cite.first.get_attribute("data-tooltip-type") == "greek", "Tipo grego incorreto")
    cite.first.focus()
    tip = page.locator("#lexical-tooltip")
    check(tip.get_attribute("aria-hidden") == "false", "Popup grego nao abriu: %d" % ordinal)
    check("Transliteração" in tip.inner_text(), "Popup sem campo de transliteracao")
    check(unicodedata.normalize("NFC", roman) in unicodedata.normalize("NFC", tip.inner_text()),
          "Transliteração incorreta: %d (%r)" % (ordinal, tip.inner_text()))
    page.keyboard.press("Escape")
    check(tip.get_attribute("aria-hidden") == "true", "Escape nao fechou popup: %d" % ordinal)
    print("PASS: exemplo, obra, grego, transliteração e teclado #%d" % ordinal, flush=True)


def main():
    handler = functools.partial(QuietHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    try:
        address = "http://127.0.0.1:%d" % server.server_port
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)
            try:
                page = browser.new_page(viewport={"width": 1365, "height": 900})
                errors = []
                page.on("pageerror", lambda err: errors.append(str(err)))
                page.goto(address + "/index.html#grego", wait_until="load", timeout=180000)
                exercise(page, 14, "ἀάω", "Ilíada 9.537", "ἀάσατο", "aásato")
                exercise(page, 17, "ἀβαρής", "Coríntios 11.9", "ἐν παντὶ", "en pantì")
                # Pelo menos um tooltip gramatical da fonte deve funcionar.
                article = page.locator("#entry-dgp-0017")
                abbr = article.locator('[data-tooltip-type="abbr"]')
                check(abbr.count() >= 1, "Classe ou abreviatura sem popup (#17)")
                abbr.first.focus()
                check(page.locator("#lexical-tooltip").get_attribute("aria-hidden") == "false",
                      "Popup gramatical não acionado")
                check(not errors, "Excecoes JS: " + str(errors[:10]))
                print("PASS: popups DGP 14/17, gramatical e ausencia de erros JS", flush=True)
            finally:
                browser.close()
    finally:
        server.shutdown()


if __name__ == "__main__":
    main()
