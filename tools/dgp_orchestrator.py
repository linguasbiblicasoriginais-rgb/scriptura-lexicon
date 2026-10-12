#!/usr/bin/env python3
"""Executor GitHub Actions DGP.

Três commits/etapas recuperáveis. Nunca cria branch remota, força push ou
altera main. O controle de qualidade filológico é distinto da checagem estática.
"""
import argparse
import json
import os
import re
import subprocess
import sys
import time
from pathlib import Path

import dgp_engine as engine

DGP = "chat-gpt-dgp"
CORRECTIONS = "chat-gpt-correcoes"
INTEGRATED = "chat-gpt-commits"
ALLOWED_DGP = {
    "lexicons/dgp-batches.js", "lexicons/dgp-progress.json", "regras/Rdgp.txt"
}
ALLOWED_AUDIT = {
    "regras/Rcorrecoes.txt"
}


def git(*parts, check=True):
    p = subprocess.run(["git", *parts], capture_output=True, text=True)
    if check and p.returncode:
        raise RuntimeError("git " + " ".join(parts) + ": " + p.stderr.strip())
    return p.stdout.strip()


def gh(*parts, check=True):
    p = subprocess.run(["gh", *parts], capture_output=True, text=True)
    if check and p.returncode:
        raise RuntimeError("gh " + " ".join(parts) + ": " + p.stderr.strip())
    return p.stdout.strip()


def refresh():
    for branch in (DGP, CORRECTIONS, INTEGRATED):
        git("fetch", "--no-tags", "origin",
            "+refs/heads/" + branch + ":refs/remotes/origin/" + branch)


def head(branch):
    return git("rev-parse", "refs/remotes/origin/" + branch)


def read(ref, path):
    p = subprocess.run(["git", "show", ref + ":" + path],
                       capture_output=True, text=True)
    if p.returncode:
        raise RuntimeError("Git object não encontrado: " + ref + ":" + path)
    return p.stdout


def load_progress(ref):
    return json.loads(read(ref, "lexicons/dgp-progress.json"))


def checkout(branch):
    git("checkout", "--detach", head(branch))
    if git("status", "--porcelain"):
        raise RuntimeError("Checkout de branch deixou alterações pendentes")


def commit_push(branch, files, message):
    for path in files:
        git("add", "--", path)
    staged = git("diff", "--cached", "--name-only").splitlines()
    if sorted(staged) != sorted(files):
        raise RuntimeError("Arquivos staged diferem do escopo autorizado: " + repr(staged))
    git("commit", "-m", message)
    created = git("rev-parse", "HEAD")
    p = subprocess.run(["git", "push", "origin", "HEAD:refs/heads/" + branch],
                       capture_output=True, text=True)
    refresh()
    if head(branch) == created:
        return created
    if p.returncode:
        raise RuntimeError("Push falhou sem publicação confirmada: " + p.stderr)
    raise RuntimeError("HEAD remoto divergiu após push: " + branch)


def source_report_path(batch):
    return "auditorias/dgp-auto-lote-" + str(batch).zfill(4) + ".md"


def source_meta_path(batch):
    return "auditorias/dgp-auto-lote-" + str(batch).zfill(4) + ".json"


def full_diff(parent, source):
    return set(git("diff", "--name-only", parent, source).splitlines())


def create_pr(branch, batch):
    existing = gh("pr", "list", "--base", INTEGRATED, "--head", branch,
                  "--state", "open", "--json", "number", "--jq", ".[0].number", check=False)
    if existing:
        return int(existing)
    number = gh("pr", "create", "--base", INTEGRATED, "--head", branch,
                "--title", "DGP lote " + str(batch) + ": " + branch,
                "--body", "Integração com checkpoints independentes, sem alterações em main.")
    m = re.search(r"/pull/(\d+)", number)
    if not m:
        raise RuntimeError("PR criado, número não confirmado: " + number)
    return int(m.group(1))


def stage_ingest(corpus):
    refresh()
    target_progress = load_progress(head(INTEGRATED))
    source_progress = load_progress(head(DGP))
    target_next = int(target_progress["scope"]["next_ordinal"])
    source_next = int(source_progress["scope"]["next_ordinal"])
    if source_next == target_next + engine.SIZE:
        batch = source_progress["batches"][-1]
        return {"status": "REUSED", "sha": head(DGP), "batch": batch}
    if source_next != target_next:
        raise RuntimeError("DGP/integração diferem em mais de um lote; requer reconciliação")
    # Se a incorporação foi mesclada, mas a auditoria não, retomar o lote.
    last_target = target_progress["batches"][-1]
    last_source = source_progress["batches"][-1]
    state = str(last_target.get("status", "")).lower()
    finished = ("auditoria" in state and
                ("integrado" in state or "integrada" in state))
    if last_target["batch"] == last_source["batch"] and not finished:
        return {"status": "REUSED_PENDING_AUDIT", "sha": head(DGP), "batch": last_source}
    checkout(DGP)
    result = engine.ingest(Path("."), corpus)
    created = commit_push(
        DGP, sorted(ALLOWED_DGP),
        "DGP: incorporar 100 registros " + str(result["start"]) + "–" + str(result["end"])
    )
    return {"status": "PUBLISHED", "sha": created, "batch": load_progress(created)["batches"][-1]}


def stage_audit(corpus, dgp):
    refresh()
    batch = dgp["batch"]
    batch_n = int(batch["batch"])
    start = int(batch["start_ordinal"])
    dgp_sha = dgp["sha"]
    if head(DGP) != dgp_sha:
        raise RuntimeError("HEAD do DGP mudou durante a auditoria")
    report_file = source_report_path(batch_n)
    meta_file = source_meta_path(batch_n)
    corrections_sha = head(CORRECTIONS)
    probe = subprocess.run(["git", "cat-file", "-e", corrections_sha + ":" + meta_file],
                           capture_output=True)
    if probe.returncode == 0:
        metadata = json.loads(read(corrections_sha, meta_file))
        if metadata["dgp_commit"] != dgp_sha:
            raise RuntimeError("Relatório anterior pertence a outro commit do DGP")
        return metadata
    text = read(dgp_sha, "lexicons/dgp-batches.js")
    result, document = engine.audit(text, corpus, start, batch_n)
    result["dgp_commit"] = dgp_sha
    if not result["approved_static"]:
        # Ainda persistiremos a reprovação no relatório de auditoria.
        result["state"] = "REPROVED"
    else:
        result["state"] = "STATIC_AUDITED"
    checkout(CORRECTIONS)
    Path("auditorias").mkdir(exist_ok=True)
    Path(report_file).write_text(document, encoding="utf-8")
    Path(meta_file).write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    with Path("regras/Rcorrecoes.txt").open("a", encoding="utf-8") as f:
        f.write("\nAuditoria automatizada DGP lote " + str(batch_n) + ", origens "
                + str(result["start"]) + "–" + str(result["end"])
                + ": " + result["state"] + "; revisão editorial/DOM não certificada.\n")
    created = commit_push(
        CORRECTIONS, [report_file, meta_file, "regras/Rcorrecoes.txt"],
        "CORREÇÕES: auditoria estática do lote DGP " + str(batch_n)
    )
    result["audit_commit"] = created
    return result


def ensure_pr_merge_status(pr_number):
    # GitHub pode atualizar o status do PR alguns segundos após a nova ancestralidade.
    for attempt in range(6):
        state = gh("pr", "view", str(pr_number), "--json", "state,mergedAt",
                   "--jq", ".state")
        if state == "MERGED":
            return
        if attempt < 5:
            time.sleep(2)
    raise RuntimeError("PR não confirmado como merged: " + str(pr_number))


def merge_with_parents(branch, changes, batch):
    """Conserva árvore do destino e acrescenta somente alterações verificadas.

    O novo commit possui dois pais, preservando a ancestralidade do PR. GitHub
    identifica o PR como mesclado quando seu head se torna ancestral do destino.
    """
    refresh()
    base = head(INTEGRATED)
    source = head(branch)
    already = subprocess.run(
        ["git", "merge-base", "--is-ancestor", source, base],
        capture_output=True
    )
    if already.returncode == 0:
        return {"status": "ALREADY_MERGED", "sha": base}
    pr = create_pr(branch, batch)
    checkout(INTEGRATED)
    updated_files = []
    for path, content in changes.items():
        output = Path(path)
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(content, encoding="utf-8")
        updated_files.append(path)
    for path in updated_files:
        git("add", "--", path)
    observed = set(git("diff", "--cached", "--name-only").splitlines())
    if observed != set(updated_files):
        raise RuntimeError("Merge não atômico: arquivos divergentes " + repr(observed))
    tree = git("write-tree")
    new_commit = git("commit-tree", tree, "-p", base, "-p", source,
                     "-m", "Merge DGP lote " + str(batch) + " de " + branch
                     + " (resolução conservadora)")
    git("reset", "--hard", new_commit)
    p = subprocess.run(["git", "push", "origin", "HEAD:refs/heads/" + INTEGRATED],
                       capture_output=True, text=True)
    refresh()
    if head(INTEGRATED) != new_commit:
        raise RuntimeError("Merge não confirmado: " + p.stderr)
    ensure_pr_merge_status(pr)
    return {"status": "MERGED", "sha": new_commit, "pr": pr}


def merge_dgp(dgp):
    source = dgp["sha"]
    parent = git("rev-parse", source + "^")
    actual = full_diff(parent, source)
    if actual != ALLOWED_DGP:
        raise RuntimeError("Diff DGP fora do escopo: " + repr(actual))
    old_source = read(parent, "lexicons/dgp-batches.js")
    new_source = read(source, "lexicons/dgp-batches.js")
    target_sha = head(INTEGRATED)
    target = read(target_sha, "lexicons/dgp-batches.js")
    if not new_source.startswith(old_source):
        raise RuntimeError("Módulo DGP não é extensão do próprio predecessor")
    suffix = new_source[len(old_source):]
    batch = dgp["batch"]
    batch_n = int(batch["batch"])
    if len(re.findall(r'<tr class="search-row"', suffix)) != engine.SIZE:
        raise RuntimeError("Diff não contém exatamente 100 linhas")
    if len(re.findall(r'<article id="entry-dgp-', suffix)) != engine.SIZE:
        raise RuntimeError("Diff não contém exatamente 100 cartões")
    if "/* DGP AUTO LOTE " + str(batch_n) in target:
        raise RuntimeError("Lote já se encontra no destino sem ancestralidade de merge")
    target_progress = load_progress(target_sha)
    source_progress = load_progress(source)
    if int(target_progress["scope"]["next_ordinal"]) != batch["start_ordinal"]:
        raise RuntimeError("Ordinal de destino diferente do lote")
    new_progress = target_progress.copy()
    new_progress["scope"] = source_progress["scope"]
    new_progress["batches"] = target_progress["batches"] + [batch]
    old_rules = read(parent, "regras/Rdgp.txt")
    new_rules = read(source, "regras/Rdgp.txt")
    if not new_rules.startswith(old_rules):
        raise RuntimeError("Regras DGP alteradas de forma não aditiva")
    rules = read(target_sha, "regras/Rdgp.txt") + new_rules[len(old_rules):]
    changes = {
        "lexicons/dgp-batches.js": target + suffix,
        "lexicons/dgp-progress.json": json.dumps(new_progress, ensure_ascii=False, indent=2) + "\n",
        "regras/Rdgp.txt": rules,
    }
    return merge_with_parents(DGP, changes, batch_n)


def merge_audit(result):
    batch = int(result["batch"])
    source = head(CORRECTIONS)
    parent = git("rev-parse", source + "^")
    report_path, meta_path = source_report_path(batch), source_meta_path(batch)
    expected = ALLOWED_AUDIT | {report_path, meta_path}
    actual = full_diff(parent, source)
    if actual != expected:
        raise RuntimeError("Diff CORREÇÕES fora do escopo: " + repr(actual))
    old_rules = read(parent, "regras/Rcorrecoes.txt")
    new_rules = read(source, "regras/Rcorrecoes.txt")
    if not new_rules.startswith(old_rules):
        raise RuntimeError("Rcorrecoes não é aditivo")
    target_sha = head(INTEGRATED)
    target_progress = load_progress(target_sha)
    if target_progress["batches"][-1]["batch"] != batch:
        raise RuntimeError("Checkpoint integrado não corresponde à auditoria")
    target_progress["batches"][-1]["status"] = "auditoria computacional integrada; revisão editorial/DOM pendente"
    target_progress["scope"]["status"] = "lote " + str(batch) + " integrado; revisão editorial pendente"
    changes = {
        report_path: read(source, report_path),
        meta_path: read(source, meta_path),
        "regras/Rcorrecoes.txt": read(target_sha, "regras/Rcorrecoes.txt") + new_rules[len(old_rules):],
        "lexicons/dgp-progress.json": json.dumps(target_progress, ensure_ascii=False, indent=2) + "\n",
    }
    return merge_with_parents(CORRECTIONS, changes, batch)


def execute():
    if os.environ.get("GITHUB_ACTIONS") != "true":
        raise RuntimeError("Execução com escrita limitada ao ambiente GitHub Actions")
    payload = engine.source_bytes()
    corpus = engine.entries(payload)
    result = stage_ingest(corpus)
    report = stage_audit(corpus, result)
    print(json.dumps({"ingest": result, "audit": report}, ensure_ascii=False))
    if not report["approved_static"]:
        raise RuntimeError("Auditoria estática reprovada; commits preservados, integração bloqueada")
    # Não declarar certificação filológica por um comparador de strings.
    if os.environ.get("DGP_ALLOW_STATIC_INTEGRATION") != "true":
        print("Integração aguardando revisão editorial: DGP_ALLOW_STATIC_INTEGRATION não autorizado.")
        return
    done1 = merge_dgp(result)
    done2 = merge_audit(report)
    print(json.dumps({"dgp_merge":done1, "audit_merge":done2}, ensure_ascii=False))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("mode", choices=["run", "preflight"])
    args = parser.parse_args()
    git("config", "user.name", "github-actions[bot]")
    git("config", "user.email", "41898282+github-actions[bot]@users.noreply.github.com")
    refresh()
    if args.mode == "preflight":
        dgp = load_progress(head(DGP))
        target = load_progress(head(INTEGRATED))
        print(json.dumps({
            "dgp_next":dgp["scope"]["next_ordinal"],
            "integrated_next":target["scope"]["next_ordinal"],
            "diff":dgp["scope"]["next_ordinal"] - target["scope"]["next_ordinal"],
            "automated_quality": "textual/structural only"
        }, ensure_ascii=False, indent=2))
    else:
        execute()


if __name__ == "__main__":
    main()
