#!/usr/bin/env python3
"""DGP: 10 candidatos individuais, sem selo até merge e CI no destino."""
import functools, http.server, json, pathlib, threading, unicodedata
from playwright.sync_api import sync_playwright
ROOT=pathlib.Path(__file__).resolve().parents[1]
r=lambda p:json.loads((ROOT/p).read_text(encoding="utf-8"))
data=r("auditorias/dgp-etapa3-candidatos-08-64.json")
source={r["ordinal"]:r for r in r("auditorias/dgp-2026-10-14-cotejo-0001-1000.json")["records"]}
historic={r["ordinal"]:r for r in r("auditorias/dgp-2026-10-15-consolidacao-historica-0001-1000.json")["records"]}
IDs=[8,21,26,30,32,44,48,59,61,64]
assert [e["ordinal"] for e in data["entries"]]==IDs
norm=lambda x:" ".join(unicodedata.normalize("NFC",str(x or "")).split())
def check(x,msg):
    if not x:raise AssertionError(msg)
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*args):pass
def open_card(page,n,q):
    page.locator("#search-input").fill(q)
    row=page.locator('.search-row[data-source="DGP"][data-target="entry-dgp-%04d"]'%n)
    row.wait_for(state="visible",timeout=30000)
    check(row.count()==1,"Linha duplicada #%d"%n)
    row.focus();page.keyboard.press("Enter")
    card=page.locator("#entry-dgp-%04d"%n)
    card.wait_for(state="visible",timeout=22000)
    check(card.get_attribute("data-source")=="DGP","Fonte errada #%d"%n)
    return card
def main():
    server=http.server.ThreadingHTTPServer(("127.0.0.1",0),functools.partial(Quiet,directory=str(ROOT)))
    threading.Thread(target=server.serve_forever,daemon=True).start()
    completed=[]
    try:
        with sync_playwright() as pw:
            browser=pw.chromium.launch(headless=True)
            try:
                page=browser.new_page(viewport={"width":1365,"height":900})
                errors=[];page.on("pageerror",lambda e:errors.append(str(e)))
                page.goto("http://127.0.0.1:%d/index.html#grego"%server.server_port,
                    wait_until="load",timeout=180000)
                page.wait_for_function("() => window.ScripturaLexiconSearch?.isReady === true",
                    timeout=120000)
                for e in data["entries"]:
                    n=e["ordinal"];s=source[n];h=historic[n]
                    check(s["lemma_coincide"] and s["definition_coincide"],
                        "Cotejo documental não aceito #%d"%n)
                    check(h["classe_historica"]=="A" and not h["pendencia_historica"],
                        "Histórico com pendência #%d"%n)
                    check(norm(s["lemma"])==norm(e["lemma"]),"Lema-fonte errado #%d"%n)
                    card=open_card(page,n,e["lemma"].split(",")[0].strip())
                    check(norm(card.locator("h1.entry-title").text_content())==
                        norm(e["lemma"]),"Lema DOM errado #%d"%n)
                    definition=card.locator("p.entry-text")
                    check(definition.count()==1 and
                        norm(definition.text_content())==
                        norm(s["definition_publicada_normalizada"]),
                        "Texto incompleto/divergente #%d"%n)
                    check(card.locator(".dgp-example").count()==0,
                        "Abonação não analisada #%d"%n)
                    check(card.locator("a[href]").count()==0,
                        "Link externo exige verificação #%d"%n)
                    triggers=definition.locator(".tooltip-trigger")
                    for i in range(triggers.count()):
                        triggers.nth(i).focus()
                        tip=page.locator("#lexical-tooltip")
                        check(tip.get_attribute("aria-hidden")=="false" and norm(tip.text_content()),
                            "Popup não funciona #%d"%n)
                        page.keyboard.press("Escape")
                        check(tip.get_attribute("aria-hidden")=="true",
                            "Escape não fecha popup #%d"%n)
                    for ref in e["remissions"]:
                        check(norm(ref["lemma"]) in norm(definition.text_content()),
                            "Remissão original ausente #%d"%n)
                        target=open_card(page,ref["target"],ref["lemma"])
                        check(norm(ref["lemma"]) in norm(target.locator("h1.entry-title").text_content()),
                            "Remissão não recuperável #%d"%n)
                    completed.append(n)
                    print("DGP ETAPA3 PASS #%04d lemas/acepções/HTML/Enter/popups/remissões"%n,flush=True)
                page.set_viewport_size({"width":375,"height":812})
                check(page.locator("#search-input").is_visible(),"Busca móvel não visível")
                check(not errors,"Exceções JS: "+repr(errors))
            finally:browser.close()
    finally:server.shutdown()
    check(completed==IDs,"Cobertura individual incompleta: "+str(completed))
    print("DGP ETAPA3 PASS 10/10 candidatos",flush=True)
if __name__=="__main__":main()
