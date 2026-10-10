"""Testes isolados do motor DGP: nenhum GitHub/API, nenhuma alteração remota."""
import json
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "tools"))
import dgp_engine as engine


class EngineTests(unittest.TestCase):
    @staticmethod
    def fake_entries(n=2300):
        return [(i, "ἀμόθι" if i == 2180 else "λέμμα" + str(i),
                 "definição & exemplo «λόγος» " + str(i)) for i in range(1, n + 1)]

    def test_markup_exactly_one_hundred(self):
        chosen = self.fake_entries()[2080:2180]
        content = engine.markup(chosen, 70)
        report = engine.inspect(content, chosen, 70)
        self.assertTrue(report["approved_static"], report["errors"])
        self.assertEqual(report["rows"], 100)
        self.assertEqual(report["cards"], 100)
        self.assertIn("definição &amp; exemplo", content)

    def test_mutation_detected(self):
        chosen = self.fake_entries()[2080:2180]
        content = engine.markup(chosen, 70)
        content = content.replace("definição &amp; exemplo", "definição alterada", 1)
        report = engine.inspect(content, chosen, 70)
        self.assertFalse(report["approved_static"])

    def test_discontinuous_ordinals_rejected(self):
        chosen = self.fake_entries()[2080:2180]
        chosen[20] = (9999, "incorreto", "incorreto")
        with self.assertRaises(ValueError):
            engine.markup(chosen, 70)

    def test_xml_preserves_homographs(self):
        xml = ('<TEI xmlns="http://www.tei-c.org/ns/1.0"><text><body>'
               + '<entryFree>ἄλφα<def> sentido A </def></entryFree>' * 3602
               + '<entryFree>ἄλφα<def> sentido B </def></entryFree>' * 3602
               + '</body></text></TEI>').encode()
        records = engine.entries(xml)
        self.assertEqual(len(records), 7204)
        self.assertEqual(records[3601][1], records[3602][1])
        self.assertNotEqual(records[3601][2], records[3602][2])

    def test_ingest_then_preserve_history(self):
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder)
            (root / "lexicons").mkdir()
            (root / "regras").mkdir()
            (root / "lexicons/dgp-batches.js").write_text(
                "/* Histórico preservado 1–2080 */\n", encoding="utf-8"
            )
            old = {
                "scope": {"next_ordinal": 2081, "batch_size": 50, "status": "antigo"},
                "batches": [{"batch": 69, "end_ordinal": 2080}]
            }
            (root / "lexicons/dgp-progress.json").write_text(json.dumps(old), encoding="utf-8")
            (root / "regras/Rdgp.txt").write_text("REGRA HISTÓRICA\n", encoding="utf-8")
            result = engine.ingest(root, self.fake_entries())
            self.assertTrue(result["approved_static"])
            updated = json.loads((root / "lexicons/dgp-progress.json").read_text(encoding="utf-8"))
            self.assertEqual(updated["scope"]["next_ordinal"], 2181)
            self.assertEqual(updated["batches"][-1]["start_ordinal"], 2081)
            self.assertTrue((root / "lexicons/dgp-batches.js").read_text(encoding="utf-8").startswith(
                "/* Histórico preservado 1–2080 */\n"
            ))
            self.assertIn("REGRA HISTÓRICA",
                          (root / "regras/Rdgp.txt").read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
