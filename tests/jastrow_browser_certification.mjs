#!/usr/bin/env node
/**
 * JASTROW — browser regression evidence, NOT atomic certification by itself.
 * Execute on the published corpus (600 XML records, 600 cards).
 * Chromium performs DOM and real pointer/keyboard checks; the results must be
 * reconciled with the independent philological reviews and a verified merge.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "auditoria", "evidencias-jastrow-navegador");
fs.mkdirSync(OUT, { recursive: true });
const baseURL = process.env.JASTROW_TEST_URL || "http://127.0.0.1:8765/#aramaico";
const source = [];
for (let n = 1; n <= 3; n++) {
  const filename = "lexicons/jastrow-source-lote-" + String(n).padStart(4, "0") + ".json";
  const batch = JSON.parse(fs.readFileSync(filename, "utf8"));
  assert.equal(batch.entry_count, 200, filename);
  source.push(...batch.records);
}
assert.equal(source.length, 600, "Total canônico para o escopo publicado");
const ids = source.map((record, i) => {
  const id = "A" + String(i).padStart(5, "0");
  assert.match(record.source_xml, new RegExp('<entry id="' + id + '"'), "ID fonte ordinal " + (i + 1));
  const hash = crypto.createHash("sha256").update(record.source_xml, "utf8").digest("hex");
  assert.equal(hash, record.source_entry_sha256, "SHA-256 original " + id);
  return id;
});
const review = JSON.parse(fs.readFileSync("auditoria/jastrow-auditoria-unica-progresso.json", "utf8"));
assert.equal(review.records.length, 600, "Pareceres individuais existentes");
assert.equal(new Set(review.records.map(r => r.id)).size, 600, "Pareceres únicos");
assert.deepEqual(new Set(review.records.map(r => r.id)), new Set(ids), "Pareceres cobrem o mesmo corpus");
assert.equal(review.counts.A + review.counts.C + review.counts.P, 600);

let browser;
const summary = {
  scope: "JASTROW A00000–A00599",
  method: "Chromium DOM + real pointer/keyboard interactions + axe-core + textual hashes",
  source_record_count: 600, source_hashes_verified: 600,
  philological_opinions_found: review.records.length,
  browser_executed: false, atomic_certification: false,
  desktop: null, mobile: null, blocked: [],
  limitations: [
    "Navegador não colaciona por si só o texto filológico nem o fac-símile",
    "Inspeção de acessibilidade automatizada não substitui avaliação assistiva humana",
    "Certificação atômica depende de regressão individual, correções, evidências e integração confirmada"
  ]
};
let error = null;
try {
  browser = await chromium.launch({ headless: true });
  for (const device of [
    { name: "desktop", viewport: { width: 1440, height: 900 } },
    { name: "mobile", viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }
  ]) {
    const context = await browser.newContext({
      viewport: device.viewport, isMobile: Boolean(device.isMobile), hasTouch: Boolean(device.hasTouch),
      locale: "pt-BR", reducedMotion: "reduce"
    });
    const page = await context.newPage();
    const scriptErrors = [];
    page.on("pageerror", err => scriptErrors.push(err.message));
    await page.goto(baseURL, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.locator('tr.search-row[data-source="JASTROW"]').first().waitFor({ state: "attached" });
    const inventory = await page.evaluate((ids) => {
      const rows = [...document.querySelectorAll('tr.search-row[data-source="JASTROW"]')];
      const cards = [...document.querySelectorAll('article.entry-card[data-source="JASTROW"]')];
      const rowMap = new Map(rows.map(r => [r.dataset.target, r]));
      const cardMap = new Map(cards.map(c => [c.id, c]));
      const problems = [];
      const individuallyChecked = [];
      for (const id of ids) {
        const target = "entry-jastrow-" + id.toLowerCase();
        const row = rowMap.get(target), card = cardMap.get(target);
        const reasons = [];
        if (!row) reasons.push("row_missing");
        if (!card) reasons.push("card_missing");
        if (row && row.dataset.dictionary !== "aramaico") reasons.push("row_dictionary");
        if (card && card.dataset.dictionary !== "aramaico") reasons.push("card_dictionary");
        if (card && card.dataset.sourceEntry !== id) reasons.push("source_id");
        if (card && (!card.querySelector('h1.entry-title[lang="he"][dir="rtl"]'))) reasons.push("rtl_title");
        if (row && !row.querySelector('td[lang="he"][dir="rtl"]')) reasons.push("rtl_row");
        if (row && row.tabIndex !== 0) reasons.push("row_keyboard_focus");
        if (card && !card.textContent.trim()) reasons.push("card_empty");
        if (card && card.querySelector("script")) reasons.push("unexpected_script_in_card");
        individuallyChecked.push({ id, structural: reasons.length === 0, problems: reasons });
        if (reasons.length) problems.push({ id, reasons });
      }
      if (rows.length !== ids.length) problems.push({global: "row_count", actual: rows.length});
      if (cards.length !== ids.length) problems.push({global: "card_count", actual: cards.length});
      if (new Set(rows.map(x=>x.dataset.target)).size !== ids.length) problems.push({global:"target_collision"});
      if (new Set(cards.map(x=>x.id)).size !== ids.length) problems.push({global:"id_collision"});
      // Each original click listener must actually open its own card in a real browser DOM.
      for (const id of ids) {
        const target = "entry-jastrow-" + id.toLowerCase();
        const row = rowMap.get(target), card = cardMap.get(target);
        if (!row || !card) continue;
        row.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true }));
        const visible = cards.filter(x=>!x.hidden);
        if (card.hidden || visible.length !== 1 || visible[0] !== card) {
          problems.push({ id, reasons: ["click_event_did_not_open_unique_card"] });
        }
      }
      return {
        rows:rows.length, cards:cards.length, checked:individuallyChecked.length,
        click_events_dispatched: ids.length, tooltip_triggers: document.querySelectorAll('article.entry-card[data-source="JASTROW"] .tooltip-trigger').length,
        problems, per_entry: individuallyChecked
      };
    }, ids);
    assert.equal(inventory.problems.length, 0, "Falhas DOM de " + device.name + ": " + JSON.stringify(inventory.problems.slice(0, 12)));
    // Real Playwright input events, source filtering, pointer and keyboard selection.
    await page.locator("#search-input").fill("A00000");
    await page.locator("#source-filter").selectOption("JASTROW");
    let firstRow = page.locator('tr.search-row[data-source="JASTROW"][data-target="entry-jastrow-a00000"]');
    assert.equal(await firstRow.isVisible(), true, "A00000 aparece na pesquisa");
    await firstRow.click();
    assert.equal(await page.locator("#entry-jastrow-a00000").isVisible(), true, "A00000 aberto por ponteiro");
    await page.locator("#search-input").fill("A00599");
    let lastRow = page.locator('tr.search-row[data-source="JASTROW"][data-target="entry-jastrow-a00599"]');
    assert.equal(await lastRow.isVisible(), true, "A00599 aparece na pesquisa");
    await lastRow.focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.locator("#entry-jastrow-a00599").isVisible(), true, "A00599 aberto por teclado");
    const tooltip = page.locator('article.entry-card[data-source="JASTROW"] .tooltip-trigger').first();
    let popup = { count: inventory.tooltip_triggers, focus_opened: false };
    if (inventory.tooltip_triggers > 0) {
      // Temporarily reveal the owning card by searching its original ID.
      const t = await tooltip.evaluate(node=>node.closest("article").dataset.sourceEntry);
      await page.locator("#search-input").fill(t);
      const r = page.locator('tr.search-row[data-source="JASTROW"][data-target="entry-jastrow-' + t.toLowerCase() + '"]');
      await r.click();
      await tooltip.focus();
      popup.focus_opened = await page.locator('#lexical-tooltip.visible[aria-hidden="false"]').isVisible();
    }
    const aria = await new AxeBuilder({page})
      .include('article.entry-card[data-source="JASTROW"]:not([hidden])')
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    const seriousAxe = aria.violations.filter(x=>x.impact === "serious" || x.impact === "critical");
    const overflow = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth
    }));
    await page.screenshot({path:path.join(OUT,"jastrow-"+device.name+".png"), fullPage:false});
    summary[device.name] = {
      rows: inventory.rows, cards:inventory.cards, per_entry_checks:inventory.checked,
      click_events_dispatched:inventory.click_events_dispatched,
      real_pointer_and_keyboard:true,
      popup, axe_violations:aria.violations.map(x=>({id:x.id,impact:x.impact,description:x.help,nodes:x.nodes.length})),
      serious_axe:seriousAxe.length,
      overflow, script_errors:scriptErrors
    };
    fs.writeFileSync(path.join(OUT,"jastrow-"+device.name+"-individual.json"),JSON.stringify(inventory.per_entry,null,2));
    assert.deepEqual(scriptErrors, [], "Exceções JavaScript do navegador");
    assert.equal(seriousAxe.length, 0, "Violação axe séria/crítica: "+JSON.stringify(seriousAxe.map(x=>x.id)));
    assert.ok(overflow.scrollWidth <= overflow.viewport+5, "Excesso de largura em " + device.name);
    await context.close();
  }
  summary.browser_executed = true;
} catch (e) {
  error = e;
  summary.blocked.push(String(e.stack || e));
} finally {
  await browser?.close();
  fs.writeFileSync(path.join(OUT,"summary.json"), JSON.stringify(summary,null,2));
  console.log("JASTROW_BROWSER_EVIDENCE "+JSON.stringify({
    result:error?"BLOCKED":"PASS",
    source_hashes:summary.source_hashes_verified,
    desktop:summary.desktop, mobile:summary.mobile,
    errors:summary.blocked, atomic_certification:false
  }));
}
if(error) process.exitCode = 1;
