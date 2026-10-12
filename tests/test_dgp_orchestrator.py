"""Reconciliação do estado do DGP sem Git, rede ou escrita remota."""
import sys
import unittest
from pathlib import Path
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import dgp_orchestrator as runner


class ResumeTests(unittest.TestCase):
    def test_pending_audit_is_not_discarded(self):
        integrated = {"scope":{"next_ordinal":2281}, "batches":[{
            "batch":70, "start_ordinal":2181,
            "status":"lote 70 incorporado; auditoria pendente"
        }]}
        dgp = {"scope":{"next_ordinal":2281}, "batches":[{
            "batch":70,"start_ordinal":2181,"status":"aguardando auditoria independente"
        }]}
        with patch.object(runner, "refresh"), patch.object(
            runner, "load_progress", side_effect=[integrated,dgp]
        ), patch.object(runner, "head", return_value="source-sha"), patch.object(
            runner, "checkout"
        ) as checkout:
            state = runner.stage_ingest([])
        self.assertEqual(state["status"], "REUSED_PENDING_AUDIT")
        checkout.assert_not_called()

    def test_unmerged_lot_is_reused_not_duplicated(self):
        integrated = {"scope":{"next_ordinal":2181},"batches":[{"batch":69}]}
        dgp = {"scope":{"next_ordinal":2281},"batches":[{
            "batch":70,"start_ordinal":2181, "end_ordinal":2280
        }]}
        with patch.object(runner, "refresh"), patch.object(
            runner, "load_progress", side_effect=[integrated,dgp]
        ), patch.object(runner, "head", return_value="source-sha"), patch.object(
            runner, "checkout"
        ) as checkout:
            state = runner.stage_ingest([])
        self.assertEqual(state["status"], "REUSED")
        checkout.assert_not_called()

    def test_discontinuous_remote_progress_blocks(self):
        integrated = {"scope":{"next_ordinal":2181},"batches":[{"batch":69}]}
        dgp = {"scope":{"next_ordinal":2481},"batches":[{"batch":72}]}
        with patch.object(runner, "refresh"), patch.object(
            runner, "load_progress", side_effect=[integrated,dgp]
        ), patch.object(runner, "checkout") as checkout:
            with self.assertRaises(RuntimeError):
                runner.stage_ingest([])
        checkout.assert_not_called()


if __name__ == "__main__":
    unittest.main()
