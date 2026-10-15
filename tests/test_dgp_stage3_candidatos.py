#!/usr/bin/env python3
"""Auditoria Stage 3 — cinco casos individuais, sem antecipar integração.

Certifica apenas os controles apresentados, não reclassifica 995 outros artigos.
"""
import functools
import http.server
import json
import pathlib
import threading
import unicodedata
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT/"auditorias/dgp-2026-10-14-cotejo-0001-1000.json").read_text(encoding="utf-8"))["records"]
RECORDS = {r["ordinal"]: r for r in DATA}
CONTROLS = {
    2: ("ἁ", ("dór.", "fem.", "art.", "def.")),
    5: ("ᾇ", ("dór.", "dat.", "fem.")),
    6: ("ἄ, ἅ, ἇ", ("interj.",)),
    19: ("ἀβασανίστως", ("adv.",)),
    33: ("ἀβελτέρως", ("adv.",))
}

def norm(s):
    return " ".join(unicodedata.normalize("NFC", str(s or "")).split())

def ok(cond, msg):
    if not cond:
        raise AssertionError(msg)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass

def main():
    server=http.server.ThreadingHTTPServer(("127.0.0.1", 0), functools.partial(Quiet,directory=str(ROOT)))
    threading.Thread(target=server.serve_forever, daemon=True).start()
    passed=[]
    try:
        with sync_playwright() as pw:
            browser=pw.chromium.launch(headless=True)
            try:
                page=browser.new_page(viewport={"width":1365,"height":900})
                errors=[]
                page.on("pageerror", lambda e: errors.append(str(e)))
                page.goto("http://127.0.0.1:%d/index.html#grego"%server.server_port,
                          wait_until="load",timeout=180000)
                for number, (lemma, terms) in CONTROLS.items():
                    source=RECORDS[number]
                    ok(norm(source["lemma"])==norm(lemma), f"Fonte lema #{number}")
                    ok(source["lemma_coincide"] and source["definition_coincide"],
                       f"Cotejo documental #{number}")
                    page.locator("#search-input").fill(lemma)
                    row=page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-%04d"]'%number)
                    row.wait_for(state="visible",timeout=20000)
                    ok(row.count()==1 and row.is_visible(),f"Índice ou busca #{number}")
                    row.focus()
                    page.keyboard.press("Enter")
                    card=page.locator("#entry-dgp-%04d"%number)
                    card.wait_for(state="visible",timeout=20000)
                    ok(card.count()==1 and not card.evaluate("(e)=>e.hidden"),f"Enter #{number}")
                    ok(card.get_attribute("data-source")=="DGP",f"Fonte da ficha #{number}")
                    ok(norm(card.locator("h1.entry-title").text_content())==norm(lemma),
                       f"Lema no cartão #{number}")
                    text=norm(card.locator("p.entry-text").text_content())
                    ok(text==norm(source["definition_publicada_normalizada"]),
                       f"Definição DOM divergente #{number}: {text!r}")
                    ok(card.locator("a").count()==0, f"URLs no cartão exigem cotejo #{number}")
                    ok(card.locator(".dgp-example").count()==0, f"Citação precisa testemunho #{number}")
                    for term in terms:
                        trigger=card.locator('p.entry-text [data-tooltip-type="abbr"]')
                        matched=trigger.filter(has_text=term)
                        ok(matched.count()>0, f"Abreviatura sem popup #{number}: {term}")
                        # Explicit focus on matching exact label or a verified composite term.
                        exact=trigger.locator("xpath=.").filter(has_text=term).first
                        exact.focus()
                        tip=page.locator("#lexical-tooltip")
                        ok(tip.get_attribute("aria-hidden")=="false" and norm(tip.text_content()),
                           f"Popup não abre #{number}: {term}")
                        page.keyboard.press("Escape")
                        ok(tip.get_attribute("aria-hidden")=="true",f"Escape popup #{number}: {term}")
                    passed.append(number)
                    print("STAGE3 PASS #%04d %s source/HTML/search/keyboard/popup/links"%
                          (number,lemma),flush=True)
                # Shared UI on mobile and dark/light themes.
                page.set_viewport_size({"width":375,"height":812})
                ok(page.locator("#search-input").is_visible(),"Pesquisa não visível no celular")
                ok(not errors,"Erros JS: "+str(errors))
            finally:browser.close()
    finally:server.shutdown()
    ok(len(passed)==len(CONTROLS),"Cobertura dos controles")
    print("STAGE3 PASS: 5/5 fichas funcionais de homologação",flush=True)

if __name__=="__main__":
    main()
