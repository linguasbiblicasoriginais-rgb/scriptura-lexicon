# Conciliação técnica — PR #119 — 12/10/2026

## Origem, destino e limites
- PR: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/119
- Origem: `chat-gpt-frontend`, HEAD antes da resolução: `95cec6975cf410f80b1319c9b63644ab42d1d185`.
- Destino: `chat-gpt-commits`, HEAD anterior: `4ca7fbc36dc3c96c9acdddfbdcf69e8dc9fc66f5`.
- Ponto comum: `f0cd00137ab1e25e85133e23e86e0efdba71ddf2`.
- O PR estava `mergeable=false`, `mergeable_state=dirty`; a origem possuía três commits exclusivos e a base dez.
- Integração orientada a componentes da interface. Nenhum conteúdo de verbete, ID lexical, camada Fonte, total de auditoria ou arquivo de regras foi reescrito.

## Critério de resolução
1. A árvore do destino foi mantida como base do resultado, conservando os dois PRs JASTROW (#117 e #118) e todos os outros léxicos.
2. Arquivos frontend independentes foram importados em seus blobs SHA originais: `.github/workflows/frontend-reader.yml`, `docs/FRONTEND-LEITURA.md`, `lexicons/source-catalog.js`, `script.js`, `style.css` e `tests/frontend-reader-browser.mjs`.
3. `index.html`: preservado o frontend da origem, inclusive ficha da fonte, botões e script do catálogo; reinseridos **oito scripts JASTROW** 601–1.000 provenientes do destino, imediatamente depois de `jastrow-popups-511-600.js` e antes da carga de THAYER, HALOT e da aplicação principal.
4. `README.md`: conservado sem perda o corpo e os registros anteriores de `chat-gpt-commits`; incorporada a documentação frontend da origem e uma entrada de reconciliação.
5. Verificações de construção: oito novos scripts mantidos; 73 referências `script src`, sem duplicação; IDs HTML únicos; `source-catalog.js` permanece imediatamente antes de `script.js`; as modificações de `script.js` e `style.css` vêm integralmente da branch frontend.

## Testes, provas e pendências
- O PR de frontend informa regressão Chromium bem-sucedida na execução https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38288709833, realizada **antes desta conciliação**.
- A conciliação garante a preservação estrutural de JASTROW 601–1.000, mas precisa de nova execução de navegador contra a árvore reconciliada antes de se declarar regressão funcional aprovada.
- Não há auditoria filológica, conferência de autenticidade das imagens de capas ou validação HTTP externa. O texto e as sínteses lexicográficas são mantidos, sem nova homologação.
- Confirmar separadamente `merged=true`, SHA do merge e arquivos remotos em `chat-gpt-commits`. Não modificar `main` nem excluir a branch `chat-gpt-frontend`.
