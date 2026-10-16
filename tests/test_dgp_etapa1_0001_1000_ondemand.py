#!/usr/bin/env python3
"""DGP Etapa 1, 0001-1000: regressao DOM real no frontend sob demanda.

Este teste NAO concede homologacao filologica. Todos os resultados, inclusive
falhas, sao escritos individualmente e publicados pelo workflow de CI.
"""
import functools
import http.server
import json
import pathlib
import threading
import unicodedata
from datetime import datetime, timezone
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parents[1]
SOURCE = ROOT / "auditorias/dgp-2026-10-14-cotejo-0001-1000.json"
OUTPUT = ROOT / "auditorias/dgp-etapa1-0001-1000-ondemand-ci.json"


def norm(value):
    return " ".join(unicodedata.normalize("NFC", str(value or "")).split())


def record_error(result, category, error):
    result["falhas"].append({"controle": category, "detalhe": str(error)[:300]})


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


def wait_row(page, row, lemma):
    candidates = [lemma]
    nucleus = lemma.split(",")[0].strip()
    if nucleus and nucleus != lemma:
        candidates.append(nucleus)
    for query in candidates:
        page.locator("#search-input").fill(query)
        try:
            row.first.wait_for(state="visible", timeout=5000)
            matches = row.count()
            if matches != 1:
                items = row.evaluate_all("""els => els.map(x => ({
                    lemma: x.querySelector(".table-lemma")?.textContent?.trim(),
                    technical_id: x.dataset.scripturaIndexId,
                    target: x.dataset.target
                }))""")
                raise AssertionError("COLISAO_DE_ID: " + json.dumps(items, ensure_ascii=False))
            return query
        except AssertionError:
            raise
        except Exception:
            pass
    diagnostics = page.evaluate("""() => ({
        consulta: document.getElementById("search-input")?.value,
        fonte: document.getElementById("source-filter")?.value,
        contador: document.getElementById("search-count")?.textContent,
        total_linhas: document.querySelectorAll(".search-row").length,
        amostra_ids: [...document.querySelectorAll(".search-row")].slice(0,8)
          .map(x => x.dataset.target)
    })""")
    raise AssertionError("Pesquisa pelo lema e pelo nucleo nao retornou a linha: " +
                         json.dumps(diagnostics, ensure_ascii=False))


def check_open(page, row, card, mode):
    if mode == "click":
        row.click(timeout=8000)
    else:
        row.focus()
        page.keyboard.press("Enter")
    card.wait_for(state="visible", timeout=12000)
    assert not card.evaluate("(el) => el.hidden"), "Cartao permaneceu oculto"


def check_card(page, card, rec, result):
    ordinal = rec["ordinal"]
    assert norm(card.locator(".entry-title").first.text_content()) == norm(rec["lemma"]), (
        "Lema do cartao divergente do registro documental"
    )
    definition = card.locator(".entry-section .entry-text").first
    assert norm(definition.text_content()), "Definicao nao publicada"
    assert card.get_attribute("data-source") == "DGP", "Fonte incorreta no cartao"
    result["lema_dom"] = True
    result["definicao_presente"] = True
    result["fonte_dgp"] = True

    # Compara a transcricao documental anterior, sem declarar nova leitura do XML.
    result["cotejo_documental_anterior"] = {
        "lema_coincide": bool(rec.get("lemma_coincide")),
        "definicao_coincide": bool(rec.get("definition_coincide")),
        "estado_estatico": rec.get("estado_estatico")
    }
    # Mantem o ponteiro fora das citacoes: o ensaio abaixo e de foco/teclado.
    page.mouse.move(1, 1)
    triggers = definition.locator(".tooltip-trigger")
    for position in range(triggers.count()):
        if not card.is_visible():
            record_error(result, "CARTAO_OCULTO",
                         "A navegacao saiu do artigo durante o teste de popups")
            break
        trigger = triggers.nth(position)
        label = trigger.get_attribute("data-tooltip-label") or norm(trigger.text_content())
        kind = trigger.get_attribute("data-tooltip-type") or "indefinido"
        result["popups_existentes"] += 1
        opened = False
        try:
            trigger.evaluate("(el) => el.blur()")
            trigger.focus()
            tip = page.locator("#lexical-tooltip")
            opened = tip.get_attribute("aria-hidden") == "false"
            assert opened, "Popup nao abriu pelo foco"
            message = norm(tip.text_content())
            assert message, "Conteudo vazio"
            if kind == "greek":
                translit = norm(trigger.get_attribute("data-transliteration"))
                assert translit and translit in message, "Transliteracao nao exibida"
                result["transliteracoes_testadas"] += 1
            elif kind == "abbr" and label == "ac. pl. n.":
                assert "acusativo plural neutro" in message.lower(), "Expansao composta incorreta"
            page.keyboard.press("Escape")
            assert tip.get_attribute("aria-hidden") == "true", "Escape nao fechou popup"
            result["popups_testados"] += 1
        except Exception as exc:
            record_error(result, "POPUP_" + kind, label + ": " + str(exc))
            # Nunca enviar Escape quando nenhum popup estiver ativo:
            # o frontend interpreta esse Escape como voltar aos resultados.
            if opened and page.locator("#lexical-tooltip").get_attribute("aria-hidden") == "false":
                page.locator("#search-input").focus()

    for ex in definition.locator(".dgp-example").all():
        result["exemplos_presentes"] += 1
        a = ex.locator(".dgp-citation-source")
        g = ex.locator(".dgp-example-greek")
        pt = ex.locator(".dgp-example-meaning")
        if not (a.count() and g.count() and pt.count() and
                norm(g.first.text_content()) and norm(pt.first.text_content())):
            record_error(result, "CITACAO", "Estrutura AUTOR/GREGO/PORTUGUES incompleta")
        elif a.first.get_attribute("data-dgp-work-status") == "nao-identificada":
            result["pendencias_etapa2"].append("Obra antiga nao identificada na fonte")

    for link in card.locator("a[href]").all():
        href = link.get_attribute("href") or ""
        result["links_existentes"] += 1
        if not href or href.lower().startswith(("javascript:", "data:")):
            record_error(result, "LINK", "Destino ausente ou inseguro: " + href)
        elif href.startswith("#") and not page.locator('[id="' + href[1:] + '"]').count():
            # Remissoes que exigem outra consulta nao sao dadas como testadas.
            result["links_pendentes"].append(href)
        else:
            result["links_estaticamente_validos"] += 1


def main():
    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    entries = data["records"]
    assert len(entries) == 1000 and [r["ordinal"] for r in entries] == list(range(1, 1001))
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    server = http.server.ThreadingHTTPServer(
        ("127.0.0.1", 0), functools.partial(QuietHandler, directory=str(ROOT)))
    thread = threading.Thread(target=server.serve_forever, daemon=True)
    thread.start()
    results, errors = [], []
    try:
        with sync_playwright() as pw:
            browser = pw.chromium.launch(headless=True)
            page = browser.new_page(viewport={"width": 1365, "height": 900})
            page.on("pageerror", lambda err: errors.append(str(err)))
            page.goto("http://127.0.0.1:%d/index.html#grego" % server.server_port,
                      wait_until="load", timeout=180000)
            page.wait_for_function(
                "() => window.ScripturaLexiconSearch?.isReady === true", timeout=120000)
            assert page.evaluate("window.ScripturaGetActiveDictionary()") == "grego"
            # A busca por lemas gregos curtos deve ser avaliada no filtro DGP,
            # evitando truncamento por resultados dos demais lexicos.
            # O <select> nativo fica oculto; usar o combobox visível,
            # reproduzindo a seleção efetiva de um usuário.
            page.locator("#source-filter-button").click()
            page.locator('.source-filter-option[data-source="DGP"]').click()
            assert page.locator("#source-filter").input_value() == "DGP"
            try:
                for rec in entries:
                    n = rec["ordinal"]
                    result = {
                        "ordinal": n, "id": "entry-dgp-%04d" % n,
                        "lema": rec["lemma"], "estado": "EM_EXECUCAO",
                        "consulta": None, "pesquisa": False, "abertura_click": False,
                        "abertura_enter": False, "lema_dom": False,
                        "definicao_presente": False, "fonte_dgp": False,
                        "popups_existentes": 0, "popups_testados": 0,
                        "transliteracoes_testadas": 0, "exemplos_presentes": 0,
                        "links_existentes": 0, "links_estaticamente_validos": 0,
                        "links_pendentes": [], "mobile_visivel": False,
                        "pendencias_etapa2": [], "falhas": []
                    }
                    try:
                        row = page.locator(
                            '.search-row[data-source="DGP"][data-target="' + result["id"] + '"]')
                        card = page.locator("#" + result["id"])
                        result["consulta"] = wait_row(page, row, rec["lemma"])
                        result["pesquisa"] = True
                        assert row.count() == 1, "Linha duplicada"
                        check_open(page, row, card, "click")
                        result["abertura_click"] = True
                        check_card(page, card, rec, result)
                        page.set_viewport_size({"width":375, "height":812})
                        result["mobile_visivel"] = card.is_visible() and page.locator("#search-input").count() == 1
                        if not result["mobile_visivel"]:
                            record_error(result, "MOBILE", "Cartao nao visivel a 375 pixels")
                        page.set_viewport_size({"width":1365,"height":900})
                        page.locator("#back-to-results").click()
                        row.wait_for(state="visible", timeout=10000)
                        check_open(page, row, card, "enter")
                        result["abertura_enter"] = True
                    except Exception as exc:
                        record_error(result, "INTERACAO", exc)
                        page.set_viewport_size({"width":1365,"height":900})
                    # A validacao de destino externo e a cotejacao filologica
                    # exaustiva sao controles separados, nunca presumidos.
                    result["testes_dom_executados_sem_falhas"] = not bool(result["falhas"])
                    # Controles documentais e destinos externos ainda exigem exame.
                    # Nenhum teste parcial promove a ficha a FUNCIONAL_APROVADO.
                    result["estado"] = (
                        "PENDENTE_CORRECAO" if result["falhas"] else "EM_EXECUCAO"
                    )
                    results.append(result)
                    if result["falhas"]:
                        print("DGP ETAPA1 FALHA %04d: %s" % (
                            n, json.dumps({
                                "lema": result["lema"],
                                "consulta": result["consulta"],
                                "falhas": result["falhas"],
                                "popups_existentes": result["popups_existentes"],
                                "popups_testados": result["popups_testados"]
                            }, ensure_ascii=False)), flush=True)
                    if n % 25 == 0:
                        print("DGP ETAPA1 REGRESSAO: %d/1000" % n, flush=True)
                page.locator("#menu-toggle").click()
                for theme in ("light", "dark"):
                    page.locator('input[name="site-theme"][value="' + theme + '"]').locator("xpath=..").click()
                    if page.locator("html").get_attribute("data-theme") != theme:
                        errors.append("Tema " + theme + " nao aplicado")
                page.locator("#menu-close").click()
            finally:
                browser.close()
    finally:
        server.shutdown()
        counts = {
            "verbetes_exercitados": len(results),
            "sem_falhas_tecnicas_nesta_regressao": sum(not x["falhas"] for x in results),
            "com_falhas": sum(bool(x["falhas"]) for x in results),
            "popups_existentes": sum(x["popups_existentes"] for x in results),
            "popups_testados": sum(x["popups_testados"] for x in results),
            "exemplos": sum(x["exemplos_presentes"] for x in results),
            "links_pendentes": sum(len(x["links_pendentes"]) for x in results),
            "erros_javascript": errors
        }
        OUTPUT.write_text(json.dumps({
            "kind": "DGP_ETAPA1_REGRESSAO_DOM_REAL_NAO_HOMOLOGACAO",
            "timestamp_utc": datetime.now(timezone.utc).isoformat(),
            "batch": [1, 1000], "dictionary_total": 44590,
            "note": "Resultados desta suite, sem inferir aprovacao integral ou homologacao.",
            "source_reference": data.get("source"), "summary": counts,
            "entries": results
        }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("RESULTADO ETAPA1:", json.dumps(counts, ensure_ascii=False), flush=True)
    if len(results) != 1000 or counts["com_falhas"] or errors:
        raise SystemExit("Regressao nao aprovada. Consultar artefato por ordinal.")
    print("PASS: interacoes exercitadas, com pendencias documentais preservadas.")


if __name__ == "__main__":
    main()
