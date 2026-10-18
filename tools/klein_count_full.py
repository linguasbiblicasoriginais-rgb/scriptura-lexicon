#!/usr/bin/env python3
"""Inventário verificável e independente do Klein Dictionary da Sefaria.

Não incorpora verbetes. Conserva fronteiras de cada divisão e prova a
contagem pela travessia dos identificadores canônicos (campo 'next').
"""
from __future__ import annotations
import concurrent.futures
import hashlib
import json
import re
import subprocess
import sys
import time
import unicodedata
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

ROOT = Path(__file__).resolve().parents[1]
SOURCE = "Klein Dictionary"
BRANCH = "chat-gpt-klein"
API = "https://www.sefaria.org/api"
INVENTORY = ROOT / "lexicons/klein-source-inventory.json"
CHECKPOINT = ROOT / "lexicons/klein-progress.json"
LICENSE = "CC-BY-NC"
VERSION = "Carta Jerusalem; 1st edition, 1987"

def get(path):
    url = API + path
    for attempt in range(3):
        try:
            request = Request(url, headers={
                "User-Agent": "ScripturaLexicon-Klein-NonCommercial/1.0",
                "Accept": "application/json",
            })
            with urlopen(request, timeout=40) as response:
                return json.load(response)
        except (HTTPError, URLError, TimeoutError, ValueError) as exc:
            if isinstance(exc, HTTPError) and exc.code in (400, 401, 403, 404):
                raise RuntimeError("API Sefaria recusou " + url + ": " + str(exc)) from exc
            if attempt == 2:
                raise RuntimeError("API Sefaria indisponível após três tentativas: "
                                   + url + ": " + str(exc)) from exc
            time.sleep(4 * (attempt + 1))

def valid_version(payload):
    options = payload.get("versions") or []
    matching = [
        v for v in options if isinstance(v, dict)
        and VERSION.lower() in str(v.get("versionTitle", "")).lower()
    ]
    if not matching:
        raise RuntimeError("Edição Carta Jerusalem 1987 não confirmada nos metadados")
    result = matching[0]
    if str(result.get("license", "")).upper() != LICENSE:
        raise RuntimeError("Licença da edição inesperada: " + str(result.get("license")))
    return {
        "version_title": result.get("versionTitle"),
        "version_source": result.get("versionSource"),
        "license": result.get("license"),
        "digitized_by_sefaria": result.get("digitizedBySefaria"),
    }

def dictionary_node(index):
    candidates = []
    def scan(node):
        if isinstance(node, dict):
            if node.get("nodeType") == "DictionaryNode":
                candidates.append(node)
            for value in node.values():
                if isinstance(value, (dict, list)):
                    scan(value)
        elif isinstance(node, list):
            for child in node:
                scan(child)
    scan(index.get("schema", index))
    matches = [n for n in candidates
               if n.get("lexiconName") == SOURCE]
    if len(matches) != 1:
        raise RuntimeError("DictionaryNode Klein não identificado de modo unívoco: "
                           + repr([(n.get("lexiconName"), n.get("firstWord")) for n in candidates]))
    return matches[0]

def inventory_sections(node):
    first, last = node.get("firstWord"), node.get("lastWord")
    if not isinstance(first, str) or not first or not isinstance(last, str) or not last:
        raise RuntimeError("Índice do Klein sem firstWord/lastWord verificáveis")
    raw_map = node.get("headwordMap") or []
    sections, seen = [], set()
    for row in raw_map:
        if not isinstance(row, (list, tuple)) or len(row) != 2:
            raise RuntimeError("headwordMap malformado: " + repr(row))
        label, ref = row
        if not isinstance(ref, str) or not ref.startswith(SOURCE + ", "):
            raise RuntimeError("Ref de seção não pertence ao Klein: " + repr(row))
        if ref not in seen:
            sections.append({"letter": str(label), "start": ref})
            seen.add(ref)
    canonical_first = SOURCE + ", " + first
    if not sections:
        sections = [{"letter": "obra integral", "start": canonical_first}]
    elif sections[0]["start"] != canonical_first:
        sections.insert(0, {"letter": "início anterior ao mapa", "start": canonical_first})
    print("KLEIN ÍNDICE", len(sections), "divisões; primeiro", canonical_first,
          "último indicado", last, flush=True)
    return sections, first, last

def compact(s):
    return "".join(ch for ch in unicodedata.normalize("NFD", s)
                   if not unicodedata.combining(ch))

def count_one(section, after, is_final):
    cur = section["start"]
    observed = set()
    refs = []
    while cur is not None and cur != after:
        if not isinstance(cur, str) or not cur.startswith(SOURCE + ", "):
            raise RuntimeError("Saiu da fonte Klein: " + repr(cur))
        if cur in observed:
            raise RuntimeError("Ciclo na sequência Klein: " + repr(cur))
        answer = get("/texts/" + quote(cur, safe="") + "?context=0&commentary=0")
        ref = answer.get("ref")
        if answer.get("indexTitle") != SOURCE or not isinstance(ref, str) or not ref.startswith(SOURCE + ", "):
            raise RuntimeError("Resposta textual não é Klein: " + repr(cur) + " -> " + repr(ref))
        if ref in observed:
            raise RuntimeError("Referência canônica duplicada: " + ref)
        observed.add(ref)
        observed.add(cur)
        refs.append(ref)
        successor = answer.get("next")
        if successor is not None and (not isinstance(successor, str) or
                                      not successor.startswith(SOURCE + ", ")):
            raise RuntimeError("Campo next extrapolou Klein: " + repr(successor))
        cur = successor
        if len(refs) % 200 == 0:
            print("KLEIN CONTAGEM", section["letter"], len(refs), ref, flush=True)
        if len(refs) > 100000:
            raise RuntimeError("Limite de segurança por divisão excedido")
        time.sleep(0.03)
    if after is not None and cur != after:
        raise RuntimeError("Fronteira não alcançada: " + str(section["letter"])
                           + " terminando em " + repr(cur) + ", esperada " + repr(after))
    if is_final and cur is not None:
        raise RuntimeError("Último campo next da obra não é nulo: " + repr(cur))
    if not refs:
        raise RuntimeError("Divisão vazia: " + str(section["letter"]))
    meta = {
        "letter": section["letter"],
        "start_ref": section["start"],
        "first_ref": refs[0],
        "last_ref": refs[-1],
        "count": len(refs),
        "refs_sha256": hashlib.sha256("\n".join(refs).encode()).hexdigest(),
        "next_boundary": after,
        "terminal_next_is_null": bool(is_final),
    }
    return meta, refs

def main():
    index = get("/index/" + quote(SOURCE, safe=""))
    node = dictionary_node(index)
    segments, first_word, last_word = inventory_sections(node)
    if INVENTORY.exists() and CHECKPOINT.exists():
        old = json.loads(INVENTORY.read_text(encoding="utf-8"))
        cp = json.loads(CHECKPOINT.read_text(encoding="utf-8"))
        if (old.get("total_entries") == cp.get("source_total")
                and old.get("first_ref") == SOURCE + ", " + first_word
                and old.get("last_word_from_index") == last_word
                and old.get("count_verified") is True):
            print("KLEIN INVENTÁRIO JÁ CONFIRMADO", old["total_entries"], flush=True)
            return
        raise RuntimeError("Inventário existente não combina com índice/checkpoint; não sobrescrever")
    # Teste da edição e licença da entrada inicial, antes de percorrer a obra.
    first_payload = get("/texts/" + quote(segments[0]["start"], safe="")
                        + "?context=0&commentary=0")
    edition = valid_version(first_payload)
    metadata = [None] * len(segments)
    lists = [None] * len(segments)
    with concurrent.futures.ThreadPoolExecutor(max_workers=min(6, len(segments))) as pool:
        futures = {
            pool.submit(count_one, segment,
                        segments[i + 1]["start"] if i + 1 < len(segments) else None,
                        i == len(segments) - 1): i
            for i, segment in enumerate(segments)
        }
        for task in concurrent.futures.as_completed(futures):
            i = futures[task]
            meta, refs = task.result()
            metadata[i], lists[i] = meta, refs
            print("KLEIN SEÇÃO COMPROVADA", i + 1, meta["letter"], meta["count"], flush=True)
    refs = [ref for division in lists for ref in division]
    if len(refs) != len(set(refs)):
        raise RuntimeError("Referências repetidas entre divisões; contagem rejeitada")
    last_ref = refs[-1]
    last_from_ref = last_ref.partition(", ")[2]
    matching_final = compact(last_from_ref) == compact(last_word)
    if not matching_final:
        print("ATENÇÃO: lastWord não coincide graficamente com a última ref; "
              "campo next nulo foi comprovado; verificar homógrafos", flush=True)
    inventory = {
        "source": SOURCE,
        "source_url": "https://www.sefaria.org/Klein_Dictionary?tab=contents",
        "api_index_url": "https://www.sefaria.org/api/index/Klein%20Dictionary",
        "edition": edition,
        "count_verified": True,
        "counted_at_utc": datetime.now(timezone.utc).isoformat(),
        "method": "DictionaryNode.headwordMap; /api/texts sequenciado por next até cada fronteira; sem API de pesquisa",
        "first_word_from_index": first_word,
        "last_word_from_index": last_word,
        "last_word_matches_terminal_ref": matching_final,
        "first_ref": refs[0],
        "last_ref": last_ref,
        "sections": metadata,
        "total_entries": len(refs),
        "unique_references": len(set(refs)),
        "refs_sha256_sorted": hashlib.sha256("\n".join(sorted(refs)).encode()).hexdigest(),
        "last_next": None,
    }
    checkpoint = {
        "source": SOURCE,
        "source_url": inventory["source_url"],
        "source_total": len(refs),
        "source_total_inventory_path": "lexicons/klein-source-inventory.json",
        "total_incorporated": 0,
        "next_ref": refs[0],
        "last_ref": None,
        "last_headword": None,
        "seen_refs": [],
        "batches": [],
    }
    INVENTORY.write_text(json.dumps(inventory, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    CHECKPOINT.write_text(json.dumps(checkpoint, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    subprocess.run(["git", "add", "--", str(INVENTORY.relative_to(ROOT)),
                    str(CHECKPOINT.relative_to(ROOT))], cwd=ROOT, check=True)
    subprocess.run(["git", "commit", "-m",
                    "KLEIN: registrar inventário canônico de " + str(len(refs)) + " entradas da Sefaria"],
                   cwd=ROOT, check=True)
    subprocess.run(["git", "push", "origin", "HEAD:" + BRANCH], cwd=ROOT, check=True)
    print("KLEIN INVENTÁRIO FINAL", len(refs), refs[0], last_ref, flush=True)

if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print("KLEIN INVENTÁRIO INTERROMPIDO", type(exc).__name__, exc, file=sys.stderr, flush=True)
        sys.exit(1)
