import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../script.js', import.meta.url), 'utf8');
const alpha = html.match(/<article id="entry-alpha-robinson"[\s\S]*?<\/article>/)?.[0];
assert.ok(alpha, 'Artigo alfa de ROBINSON deve existir');
assert.match(alpha, /<h1 class="entry-title greek">Α, α<\/h1>/);
assert.match(alpha, /<p class="entry-text">\s*alfa, a primeira letra/);
assert.doesNotMatch(alpha, /<strong>A, α<\/strong>/);
for (const s of ['Buttm.', 'Kühner', 'Strom.', 'c. ed. Sylb.', 'Clem. Alex.', 'data-tooltip-label="Ap"']) {
  assert.ok(alpha.includes(s), 'Popup obrigatório ausente: ' + s);
}
assert.ok(alpha.includes('data-tooltip-label="Tradução do trecho grego'), 'Tradução do grego deve usar popup');
assert.ok(alpha.includes('Stromata04.html?#:~:text='), 'Link para Stromata com tentativa de destaque ausente');
assert.ok(script.includes('trigger.dataset.tooltipTitle'), 'Títulos bibliográficos em itálico não habilitados');
console.log('ROBINSON: verificações estruturais do verbete Α, α aprovadas.');
