#!/usr/bin/env python3
"""Resolver PR #92 no destino sem force push, após validação cumulativa."""
import json
import os
import subprocess
from pathlib import Path

DEST="chat-gpt-commits"
ORIGIN="chat-gpt-jastrow"
DEST_SHA="2403ac96138cf9714a6e38825e7767c7e00e9581"
SEVENTH="## JASTROW — sétima rodada: conclusão até o verbete 600 (11/10/2026)"
SIXTH="## JASTROW — sexta rodada: mais 100 verbetes (11/10/2026)"
MODULES=[
 "lexicons/jastrow-511-535.js", "lexicons/jastrow-536-560.js",
 "lexicons/jastrow-561-570.js", "lexicons/jastrow-571-580.js",
 "lexicons/jastrow-581-590.js", "lexicons/jastrow-591-600.js",
 "lexicons/jastrow-popups-511-600.js"]
REPORT="auditoria/JASTROW-2026-10-11-lote-007.md"

def run(*args,check=True):
    p=subprocess.run(["git",*args],capture_output=True,text=True)
    if check and p.returncode:
        raise RuntimeError("git "+repr(args)+": "+p.stdout+" "+p.stderr)
    return p.stdout.strip(),p.returncode

def git(*args):
    return run(*args)[0]

def read(ref,path):
    return run("show",ref+":"+path)[0]+"\n"

def process():
    source=git("rev-parse","HEAD")
    assert source==os.environ["GITHUB_SHA"],"Trigger SHA differs from checkout"
    assert git("ls-remote","origin","refs/heads/"+ORIGIN).split()[0]==source,"Source branch moved"
    assert git("ls-remote","origin","refs/heads/"+DEST).split()[0]==DEST_SHA,"Destination branch moved"
    git("fetch","origin",DEST,ORIGIN,"chat-gpt-correcoes")
    readme_base=read(DEST_SHA,"README.md")
    readme_source=read(source,"README.md")
    assert SEVENTH in readme_source and SEVENTH not in readme_base
    assert SIXTH in readme_source and SIXTH in readme_base
    seventh=readme_source[readme_source.index(SEVENTH):readme_source.index(SIXTH)]
    assert seventh.startswith(SEVENTH) and "600" in seventh
    index_base=read(DEST_SHA,"index.html")
    index_source=read(source,"index.html")
    for path in MODULES:
        assert 'src="'+path+'"' in index_source, "Origin missing module "+path
        assert 'src="'+path+'"' not in index_base, "Destination already contains "+path
    anchor='    <script src="lexicons/jastrow-popups-411-510.js"></script>\n'
    assert index_base.count(anchor)==1,"JASTROW HTML anchor differs"
    index_new=index_base.replace(anchor,anchor+"".join('    <script src="'+p+'"></script>\n' for p in MODULES))
    assert index_new.index('src="lexicons/thayer.js"')>index_new.index('src="lexicons/jastrow-popups-511-600.js"')

    git("checkout","-B","pr92-reconciliation",DEST_SHA)
    output,status=run("merge","--no-commit","--no-ff",source,check=False)
    unresolved=set(git("diff","--name-only","--diff-filter=U").splitlines())
    assert unresolved.issubset({"README.md","index.html","lexicons/jastrow-progress.json"}),"Unexpected conflicts: "+str(unresolved)
    assert status==0 or unresolved,"Merge failed without identifiable conflicts: "+output
    note="""## PR #92 — JASTROW concluído até 600 verbetes (11/10/2026)

O [PR #92](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/92) incorpora os 90 registros JASTROW `A00510`–`A00599`, de ordinal 511 a 600, e preserva as incorporações anteriores de BDAG, LEH, DGP (lote 076), PEREIRA e THAYER (lotes 002–004). São **600 verbetes JASTROW integrados**, com originais XML `A00000`–`A00599` intactos. Próximo registro `A00600`, `אוּזִילָא`, não extraído e não traduzido.

A [auditoria cumulativa Actions #38117209491](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38117209491) aprovou 600 linhas, 600 cartões, 600 IDs/alvos únicos, 176 popups e 33 módulos. Os lemas antigos `A00006` e `A00007` possuem diferenças gráficas registradas; os 90 novos coincidem com o original. **Revisão filológica independente integral, tradução de todas as notas, testes reais em navegador e acessibilidade continuam pendentes**, portanto `total_audited=0`. Este é um merge Git de dois pais, com preservação das branches e de `main`.

"""
    hdr="# Scriptura Lexicon\n\n"
    assert readme_base.startswith(hdr)
    Path("README.md").write_text(hdr+note+seventh+readme_base[len(hdr):],encoding="utf-8")
    Path("index.html").write_text(index_new,encoding="utf-8")
    mpath=Path("lexicons/jastrow-progress.json")
    p=json.loads(read(source,"lexicons/jastrow-progress.json"))
    c=p["scope"]
    assert (c["total_published"],c["total_integrated"],c["total_audited"],c["next_source_id"])==(600,510,0,"A00600")
    basep=json.loads(read(DEST_SHA,"lexicons/jastrow-progress.json"))
    assert basep["scope"]["total_integrated"]==510
    c["total_integrated"]=600
    c["editorial_status"]="600 JASTROW integrados tecnicamente no PR #92. Revisão filológica integral e navegador pendentes; total_audited=0."
    history=list(basep.get("integration_history",[]))
    old=basep.get("last_integration")
    if old and old not in history:history.append(old)
    p["integration_history"]=history
    p["last_integration"]={"pr":92,"head_sha":source,"base_before":DEST_SHA,"total_integrated":600,"philological_audit":"pending","browser_audit":"pending"}
    for bt in p["batches"]:
        if bt.get("batch")==7:bt["integration_status"]="Mesclado no PR #92, revisão filológica pendente"
    mpath.write_text(json.dumps(p,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
    rule=Path("regras/Rintegracao.txt")
    content=rule.read_text(encoding="utf-8")
    assert "22. PR #92" not in content
    content+="\n22. PR #92 — JASTROW, conclusão ordinal 600 (11/10/2026)\n    Origem chat-gpt-jastrow, destino chat-gpt-commits. Preservar o conteúdo integral do destino BDAG/LEH/DGP/PEREIRA/THAYER; incorporar 90 verbetes A00510–A00599 em seis módulos, um de popups e auditoria Node. Inserir scripts após o popup JASTROW 411–510, antes de THAYER; preservar README histórico e registrar a rodada. Importar relatorio auditoria/JASTROW-2026-10-11-lote-007.md. Total 600 verbetes JASTROW, 600 originais XML, 176 popups únicos; próximo A00600 não extraído. Auditoria cumulativa Actions 38117209491 passou; revisão filológica integral e navegador pendentes. Não escrever em main nem excluir branches. Merge real com dois pais, sem force.\n"
    rule.write_text(content,encoding="utf-8")
    assert not Path(REPORT).exists(),"Audit already exists on base"
    audit=read("origin/chat-gpt-correcoes",REPORT)
    assert "38117209491" in audit and "600" in audit
    Path(REPORT).parent.mkdir(exist_ok=True)
    Path(REPORT).write_text(audit,encoding="utf-8")
    git("add","README.md","index.html","lexicons/jastrow-progress.json","regras/Rintegracao.txt",REPORT)
    assert not git("diff","--name-only","--diff-filter=U"),"Unresolved merge conflicts"
    git("diff","--cached","--check")
    html=Path("index.html").read_text(encoding="utf-8")
    for x in MODULES+["lexicons/dgp-batch-076.js","lexicons/thayer.js","lexicons/thayer-batch-002.js","lexicons/thayer-batch-003.js","lexicons/thayer-batch-004.js"]:
        assert Path(x).exists() and html.count('src="'+x+'"')==1,"Missing or duplicate script: "+x
    subprocess.run(["node","tools/audit_jastrow_600.js"],check=True)
    git("config","user.name","github-actions[bot]")
    git("config","user.email","41898282+github-actions[bot]@users.noreply.github.com")
    git("commit","-m","Mesclar PR #92: JASTROW 600 e preservar DGP/THAYER")
    merged=git("rev-parse","HEAD")
    parents=git("rev-list","--parents","-n","1","HEAD").split()
    assert len(parents)==3 and parents[1]==DEST_SHA and parents[2]==source,"Wrong merge parents"
    assert git("ls-remote","origin","refs/heads/"+DEST).split()[0]==DEST_SHA,"Destination moved before publication"
    git("push","origin","HEAD:refs/heads/"+DEST)
    print("PR92_MERGE_SHA="+merged)
    print("PR92_BASE_PARENT="+DEST_SHA)
    print("PR92_SOURCE_PARENT="+source)

if __name__=="__main__":
    process()
