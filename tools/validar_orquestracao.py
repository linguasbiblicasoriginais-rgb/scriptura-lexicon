#!/usr/bin/env python3
"""Auditoria remota somente leitura do GDHAGP; Python 3.10+, biblioteca padrão.

Uso: python tools/validar_orquestracao.py --stage LEH
     python tools/validar_orquestracao.py --all
GITHUB_TOKEN opcional para repositórios públicos, recomendado para limites de API.
Não cria branches, commits, PRs nem modifica refs.
"""
import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request

REPO = "linguasbiblicasoriginais-rgb/scriptura-lexicon"
STAGES = {
    "BDAG": ("chat-gpt-bdag", "regras/Rbdag.txt", "fontes/fonte-bdag.pdf", "lexicons/bdag.js"),
    "DGP": ("chat-gpt-dgp", "regras/Rdgp.txt", None, "lexicons/dgp-batches.js"),
    "LEH": ("chat-gpt-leh", "regras/Rleh.txt", "fontes/fonte-leh.pdf", "lexicons/leh.js"),
    "PEREIRA": ("chat-gpt-pereira", "regras/Rpereira.txt", None, "lexicons/pereira.js"),
}
SHA40 = re.compile(r"^[0-9a-f]{40}$")
ORDER = tuple(STAGES)

def api(path):
    url = "https://api.github.com/repos/" + REPO + "/" + path
    headers = {"Accept": "application/vnd.github+json", "User-Agent": "scriptura-lexicon-validator"}
    if os.environ.get("GITHUB_TOKEN"):
        headers["Authorization"] = "Bearer " + os.environ["GITHUB_TOKEN"]
    request = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.load(response)

def require_sha(value, label):
    if not isinstance(value, str) or not SHA40.fullmatch(value):
        raise ValueError(label + ": SHA inválido (esperados 40 caracteres hexadecimais)")
    return value

def inspect(stage):
    branch, rule, pdf, lexicon = STAGES[stage]
    branch_ref = api("git/ref/heads/" + branch)
    head = require_sha(branch_ref["object"]["sha"], stage + " HEAD")
    entries = api("contents?ref=" + urllib.parse.quote(branch))
    names = {x["name"] for x in entries}
    if not {"regras", "lexicons", "README.md"}.issubset(names):
        raise ValueError(stage + ": arquivos/diretórios obrigatórios ausentes")
    rule_obj = api("contents/" + rule + "?ref=" + branch)
    require_sha(rule_obj["sha"], stage + " regras blob")
    lex_obj = api("contents/" + lexicon + "?ref=" + branch)
    require_sha(lex_obj["sha"], stage + " léxico blob")
    pdf_result = None
    if pdf:
        pdf_obj = api("contents/" + pdf + "?ref=" + branch)
        if pdf_obj["type"] != "file" or not pdf_obj["name"].endswith(".pdf"):
            raise ValueError(stage + ": fonte PDF inválida")
        pdf_result = {"path": pdf, "blob_sha": require_sha(pdf_obj["sha"], stage + " PDF")}
    # Protege contra atualização do HEAD durante a auditoria.
    head_after = require_sha(api("git/ref/heads/" + branch)["object"]["sha"], stage + " HEAD final")
    if head_after != head:
        raise RuntimeError(stage + ": HEAD alterado durante auditoria; reiniciar")
    return {"stage": stage, "branch": branch, "head": head,
            "rule": rule, "lexicon": lexicon, "pdf": pdf_result,
            "result": "preflight_ok", "lexical_audit": "not_performed"}

def main():
    p = argparse.ArgumentParser()
    group = p.add_mutually_exclusive_group(required=True)
    group.add_argument("--stage", choices=ORDER)
    group.add_argument("--all", action="store_true")
    args = p.parse_args()
    reports = []
    for stage in ORDER if args.all else (args.stage,):
        try:
            reports.append(inspect(stage))
        except (ValueError, KeyError, RuntimeError, urllib.error.URLError) as exc:
            reports.append({"stage": stage, "result": "blocked", "reason": str(exc)})
    print(json.dumps({"schema_version": 1, "reports": reports}, ensure_ascii=False, indent=2))
    return 1 if any(x["result"] == "blocked" for x in reports) else 0

if __name__ == "__main__":
    sys.exit(main())
