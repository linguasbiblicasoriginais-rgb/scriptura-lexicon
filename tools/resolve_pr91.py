#!/usr/bin/env python3
"""Conciliação protegida do PR #91; escrita exclusiva em chat-gpt-commits."""
import json
import os
import subprocess
from pathlib import Path

BASE_BRANCH = "chat-gpt-commits"
SOURCE_BRANCH = "chat-gpt-jastrow"
EXPECTED_BASE = "9dab297e45e94bb5f6466f046c346a47407872af"
MERGE_BASE = "9940ff45eb41159124d4e6d02bc0d1502573f212"
SIXTH = "## JASTROW — sexta rodada: mais 100 verbetes (11/10/2026)"
FIFTH = "## JASTROW — quinta rodada: 100 verbetes (11/10/2026)"
NEW_MODULES = [
    "lexicons/jastrow-411-435.js", "lexicons/jastrow-436-460.js",
    "lexicons/jastrow-461-485.js", "lexicons/jastrow-486-510.js",
    "lexicons/jastrow-popups-411-510.js",
]
REPORT = "auditoria/JASTROW-2026-10-11-lote-006.md"

def command(*parts, check=True):
    p = subprocess.run(["git", *parts], capture_output=True, text=True)
    if check and p.returncode:
        raise RuntimeError("git " + " ".join(parts) + "\nstdout=" + p.stdout + "\nstderr=" + p.stderr)
    return p

def git(*parts):
    return command(*parts).stdout.strip()

def show(commit, path):
    return command("show", commit + ":" + path).stdout

def execute():
    source = git("rev-parse", "HEAD")
    assert source == os.environ["GITHUB_SHA"], "Checkout head differs from triggering commit"
    assert git("ls-remote", "origin", "refs/heads/"+SOURCE_BRANCH).split()[0] == source, "Source branch moved"
    assert git("ls-remote", "origin", "refs/heads/"+BASE_BRANCH).split()[0] == EXPECTED_BASE, "Base branch moved"
    git("fetch", "--no-tags", "origin", BASE_BRANCH, SOURCE_BRANCH, "chat-gpt-correcoes")
    base_readme = show(EXPECTED_BASE, "README.md")
    source_readme = show(source, "README.md")
    original_readme = show(MERGE_BASE, "README.md")
    assert SIXTH in source_readme and SIXTH not in base_readme, "README range changed"
    assert FIFTH in source_readme and FIFTH in base_readme
    assert source_readme[source_readme.index(FIFTH):] == original_readme[original_readme.index(FIFTH):], "Source historical README unexpectedly altered"
    sixth_section = source_readme[source_readme.index(SIXTH):source_readme.index(FIFTH)]
    assert sixth_section.startswith(SIXTH) and "510" in sixth_section

    base_index = show(EXPECTED_BASE, "index.html")
    source_index = show(source, "index.html")
    assert all(('src="'+x+'"') in source_index and ('src="'+x+'"') not in base_index for x in NEW_MODULES)
    anchor='    <script src="lexicons/jastrow-popups-311-410.js"></script>\n'
    assert base_index.count(anchor)==1
    consolidated_index=base_index.replace(anchor,anchor+"".join('    <script src="'+x+'"></script>\n' for x in NEW_MODULES))
    assert all(('src="'+x+'"') in consolidated_index for x in NEW_MODULES)
    assert consolidated_index.index('src="lexicons/thayer.js"') > consolidated_index.index('src="lexicons/jastrow-popups-411-510.js"')

    git("checkout", "-B", "pr91-reconciled", EXPECTED_BASE)
    p=command("merge", "--no-commit", "--no-ff", source, check=False)
    conflicts=set(git("diff", "--name-only", "--diff-filter=U").splitlines())
    assert conflicts.issubset({"README.md","index.html","lexicons/jastrow-progress.json"}), "Unrecognized conflicts: "+str(conflicts)+"\n"+p.stderr
    assert p.returncode == 0 or conflicts, "Merge failed for reason other than conflicts: "+p.stderr

    announcement="""## PR #91 — JASTROW 510 verbetes integrados (11/10/2026)

O [PR #91](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/91) integra 100 novos verbetes (`A00410`–`A00509`) de JASTROW, perfazendo **510 entradas e cartões**, mantendo todos os módulos anteriores de BDAG, LEH, DGP (inclusive lote 076), PEREIRA, THAYER (inclusive PR #90), seus relatórios e checkpoints. A fonte original XML totaliza 600 registros preservados. Próximo JASTROW `A00510` (`אֲהָן`).

A auditoria cumulativa [Actions 38115928600](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38115928600) aprovou **510 linhas, 510 cartões, 510 alvos, 159 popups únicos e 26 módulos**. Duas diferenças legadas de grafia (`A00006`, `A00007`) estão registradas; os 100 lemas novos coincidem literalmente com o XML. A revisão filológica integral, a tradução exaustiva de notas e exemplos e os testes de navegador ainda estão **pendentes**: `total_audited=0`. O merge é técnico, sem exclusão de branches nem mudanças em `main`.

"""
    assert base_readme.startswith("# Scriptura Lexicon\n\n")
    Path("README.md").write_text("# Scriptura Lexicon\n\n"+announcement+sixth_section+base_readme[len("# Scriptura Lexicon\n\n"):],encoding="utf-8")
    Path("index.html").write_text(consolidated_index,encoding="utf-8")
    manifest_path=Path("lexicons/jastrow-progress.json")
    progress=json.loads(show(source,"lexicons/jastrow-progress.json"))
    scope=progress["scope"]
    assert (scope["total_published"],scope["total_integrated"],scope["total_audited"],scope["next_source_id"]) == (510,410,0,"A00510")
    scope["total_integrated"]=510
    scope["editorial_status"]="510 registros JASTROW integrados tecnicamente via PR #91, ainda sem revisão filológica integral ou teste de navegador; total_audited=0."
    base_progress=json.loads(show(EXPECTED_BASE,"lexicons/jastrow-progress.json"))
    assert base_progress["scope"]["total_integrated"]==410
    old_integration=base_progress.get("last_integration")
    progress["integration_history"]=list(base_progress.get("integration_history",[]))
    if old_integration and old_integration not in progress["integration_history"]:
        progress["integration_history"].append(old_integration)
    progress["last_integration"]={"pr":91,"head_sha":source,"base_before":EXPECTED_BASE,"total_integrated":510,"philological_audit":"pending","browser_audit":"pending"}
    for item in progress["batches"]:
        if item.get("batch")==6:
            item["integration_status"]="Mesclado tecnicamente pelo PR #91; revisão filológica integral pendente"
    manifest_path.write_text(json.dumps(progress,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    rules_path=Path("regras/Rintegracao.txt")
    rules=rules_path.read_text(encoding="utf-8")
    assert "PR #91 — JASTROW" not in rules
    rules+="\n21. PR #91 — JASTROW, sexta rodada (11/10/2026)\n    Origem chat-gpt-jastrow; base chat-gpt-commits. Preservar destino DGP76, THAYER PR90 e outros léxicos; incorporar 100 verbetes A00410–A00509 e seus popups com base no XML fixo, mantendo total JASTROW 510, originais 600, próximo A00510 e total_audited=0. Resolver index.html acrescentando somente cinco scripts de JASTROW depois do popup 311–410. Conservar README inteiro da base, acrescentando sexta rodada e nota da integração. Importar relatório auditoria/JASTROW-2026-10-11-lote-006.md da branch correcoes. Executar auditoria em Node antes do merge de dois pais; não editar main nem eliminar branches. Revisão filológica e browser pendentes.\n"
    rules_path.write_text(rules,encoding="utf-8")
    assert not Path(REPORT).exists(), "Audit report already on integration base"
    audit_content=show("origin/chat-gpt-correcoes",REPORT)
    assert "38115928600" in audit_content and "510" in audit_content
    Path(REPORT).parent.mkdir(exist_ok=True)
    Path(REPORT).write_text(audit_content,encoding="utf-8")

    git("add","README.md","index.html","lexicons/jastrow-progress.json","regras/Rintegracao.txt",REPORT)
    assert not git("diff","--name-only","--diff-filter=U"),"Unresolved paths"
    git("diff","--cached","--check")
    html=Path("index.html").read_text(encoding="utf-8")
    for path in NEW_MODULES + ["lexicons/dgp-batch-076.js","lexicons/thayer.js","lexicons/thayer-batch-002.js"]:
        assert Path(path).is_file() and html.count('src="'+path+'"')==1, "Missing or duplicate script "+path
    assert html.index('src="script.js"')>html.index('src="lexicons/thayer.js"')
    subprocess.run(["node","tools/audit_jastrow_510.js"],check=True)
    git("config","user.name","github-actions[bot]")
    git("config","user.email","41898282+github-actions[bot]@users.noreply.github.com")
    git("commit","-m","Resolver e mesclar PR #91: 510 JASTROW + THAYER/DGP preservados")
    merged=git("rev-parse","HEAD")
    parents=git("rev-list","--parents","-n","1","HEAD").split()
    assert len(parents)==3 and parents[1]==EXPECTED_BASE and parents[2]==source, "Merge parents incorrect"
    assert git("ls-remote","origin","refs/heads/"+BASE_BRANCH).split()[0]==EXPECTED_BASE, "Base moved during reconciliation"
    git("push","origin","HEAD:refs/heads/"+BASE_BRANCH)
    print("PR91_MERGE_SHA="+merged)
    print("PR91_BASE_PARENT="+EXPECTED_BASE)
    print("PR91_SOURCE_PARENT="+source)

if __name__=="__main__":
    execute()
