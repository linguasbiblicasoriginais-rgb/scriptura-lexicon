#!/usr/bin/env python3
"""Pré-voo somente leitura da estrutura PEREIRA e de seu checkpoint."""
from __future__ import annotations
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
def main():
    data = (ROOT / "lexicons/pereira.js").read_text(encoding="utf-8")
    state = json.loads((ROOT / "lexicons/pereira-progress.json").read_text(encoding="utf-8"))
    assert state["source"] == "PEREIRA"
    assert state["work_branch"] == "chat-gpt-pereira"
    targets = re.findall(r'<tr\b[^>]*\bclass="search-row"[^>]*\bdata-target="(entry-pereira-\d+)"', data)
    cards = re.findall(r'<article\b[^>]*\bid="(entry-pereira-\d+)"[^>]*\bclass="entry-card"', data)
    assert targets and len(targets) == len(cards), "Quantidade de search-rows e entry-cards divergente"
    assert len(set(targets)) == len(targets), "Data-targets repetidos"
    assert len(set(cards)) == len(cards), "IDs repetidos"
    assert targets == cards, "IDs ou ordem dos cartões divergentes"
    assert targets == [f"entry-pereira-{i:04d}" for i in range(1, len(cards) + 1)], "Ordinais internos não contínuos"
    total = sum(batch["entry_count"] for batch in state["batches"])
    assert total == len(cards), "Checkpoint e cartões divergem"
    assert state["scope"]["next_ordinal"] == total + 1
    assert state["next_entry"]["ordinal"] == total + 1
    assert state["batches"][-1]["end_ordinal"] == total
    print(json.dumps({
        "status": "checkpoint_validado", "source": "PEREIRA",
        "incorporados": total, "lotes": len(state["batches"]),
        "proximo_ordinal": state["next_entry"]["ordinal"],
        "proximo_id_fonte": state["next_entry"]["source_id"],
        "total_integral": "nao_verificado",
        "publicacao_lexical": False
    }, ensure_ascii=False))
if __name__ == "__main__":
    main()
