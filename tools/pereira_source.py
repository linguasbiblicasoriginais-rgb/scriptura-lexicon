#!/usr/bin/env python3
"""Sonda somente leitura de metadados da API PEREIRA; não republica verbetes."""
from __future__ import annotations
import argparse
import json
import time
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
API = "https://api.dicionariogrego.com/"
def query(prefix):
    url = API + quote(prefix, safe="")
    body = json.dumps({"payload": prefix}, ensure_ascii=False).encode("utf-8")
    error = None
    for i in range(3):
        try:
            req = Request(url, data=body,
                          headers={"Content-Type": "application/json;charset=UTF-8",
                                   "Accept": "application/json",
                                   "User-Agent": "ScripturaLexicon-PereiraPreflight/1.0"},
                          method="POST")
            with urlopen(req, timeout=25) as response:
                if response.status != 200:
                    raise RuntimeError("HTTP inesperado")
                return json.load(response)
        except HTTPError as exc:
            if exc.code in (400, 401, 403, 404, 405, 429):
                raise RuntimeError(f"API recusou HTTP {exc.code}; não repetir nem contornar") from exc
            error = exc
        except (URLError, TimeoutError, ValueError, OSError) as exc:
            error = exc
        if i < 2:
            time.sleep(2 * (i + 1))
    raise RuntimeError(f"Falha de consulta da API após três tentativas: {error}")

def unpack(obj):
    if isinstance(obj, list):
        return obj
    if isinstance(obj, dict):
        for key in ("data", "entries", "results", "items", "records", "result", "value"):
            if isinstance(obj.get(key), list):
                return obj[key]
        # Dicionários de envelope com campo aninhado são aceitos somente se a lista for inequívoca.
        arrays = [v for v in obj.values() if isinstance(v, list)]
        if len(arrays) == 1:
            return arrays[0]
    raise RuntimeError("Formato de resposta não identificado; nenhuma inferência lexical")

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check-next", action="store_true", required=True)
    ap.parse_args()
    state = json.loads((ROOT / "lexicons/pereira-progress.json").read_text(encoding="utf-8"))
    next_entry = state["next_entry"]
    prefix = next_entry["searchable"]
    records = unpack(query(prefix))
    if len(records) == 30:
        print("AVISO: resposta de 30 registros é potencialmente truncada")
    if not all(isinstance(x, dict) for x in records):
        raise RuntimeError("Resposta contém registros inesperados")
    matching = [x for x in records if str(x.get("id")) == str(next_entry["source_id"])]
    if len(matching) != 1:
        raise RuntimeError("O ID esperado não apareceu exatamente uma vez; nenhuma incorporação")
    if matching[0].get("searchable") != prefix:
        raise RuntimeError("O searchable do registro esperado não coincide com o checkpoint")
    print(json.dumps({
        "status": "api_conectada_e_id_conferido",
        "prefixo": prefix, "id_fonte": next_entry["source_id"],
        "resultados_na_consulta": len(records),
        "resposta_potencialmente_truncada": len(records) >= 30,
        "contagem_total_do_dicionario": "nao_verificada",
        "redistruibuicao_dos_textos": "nao_autorizada_por_este_teste",
        "novos_verbetes_publicados": 0
    }, ensure_ascii=False))
if __name__ == "__main__":
    main()
