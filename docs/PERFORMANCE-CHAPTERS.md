# Arquitetura de performance — Scriptura Lexicon

## Diagnóstico e linha de base (estática)

Antes da otimização, o `index.html` continha **5.251** tags `<script defer>` para módulos bíblicos: 929 UXLC, 1.104 LXX, 1.334 VUL, 1.362 VULJ, 260 TR e 260 SBLGNT, mais duas amostras NA28/UBS5. O HTML tinha 575.372 caracteres na representação consultada pelo conector. Todos os capítulos integrais eram declarados como scripts iniciais. Isso não é uma medição HTTP ou Lighthouse.

Após a otimização, **todas as 5.251 tags bíblicas foram retiradas** do HTML inicial, incluindo as duas amostras NA28/UBS5 (também carregadas sob demanda). O HTML passou a ter **215.516 caracteres**, diferença de **359.856 caracteres (~62,5%)**. O arquivo HTML ainda contém material lexicográfico inline; sua otimização requer auditoria própria.

## Arquitetura atual

- `scriptures/chapter-manifest.js`: associa **edição → ID editorial do livro → [prefixo verificado, quantidade de capítulos]**. Cerca de 7,7 mil caracteres; inclui as amostras NA28 e UBS5. Não contém versículos.
- `scriptures/chapter-loader.js`: somente requisita um módulo ao visitar um capítulo; valida o registro global criado por ele, unifica pedidos concorrentes, rejeita módulos ausentes ou inválidos, remove falhas do cache e mantém até 16 capítulos em memória (LRU). A página inicial não requisita capítulos bíblicos sem navegação direta.
- `scriptures/reader.js`: continua responsável por navegação, versificação e popups. O token de navegação impede que uma resposta tardia substitua o capítulo vigente. Estados de carregamento e erro aparecem na área de texto, com ação de nova tentativa.
- `scripts/update-chapter-manifest.mjs`: durante o build, lê os seis arquivos `*-progress.json`, confere **todos os 5.249 caminhos em disco e os identificadores nos módulos** e regenera o manifesto. Remove tags antigas de capítulos que possam ter sido reinseridas.
- `netlify.toml`: executa a regeneração antes do compilador lexicográfico. Não utiliza Service Worker.
- `scripts/*_import.py`: não reinsere centenas ou milhares de tags bíblicas no `index.html`. Cada importador continua gerando seus módulos e inventários próprios.

## Integridade editorial

Os arquivos de `scriptures/texts/` não foram modificados: apenas sua inclusão e mecanismo de carga mudaram. Os catálogos e IDs de cada edição permanecem independentes. O leitor resolve `EST_ADD` em Ester 10–16 da fonte e recorta 10:4–13 em apócrifos; Ester 10:1–3 permanece no cânon. `DAN_SUS` e `DAN_BEL` referenciam, sem copiar/reescrever, os capítulos latinos 13 e 14.

As obras da LXX ausentes na fonte Brenton não são incorporadas artificialmente: o catálogo de apócrifos consulta o manifesto das obras efetivamente existentes.

## Cache e pré-carregamento

O cache LRU limita a retenção a 16 capítulos carregados por sessão. Promessas em andamento são compartilhadas; em erro são descartadas. O pré-carregamento limita-se aos capítulos anterior e seguinte do mesmo livro, durante ociosidade do navegador, e é desabilitado em conexões com economia de dados ou perfil 2G. As respostas de navegação antigas não são aplicadas ao DOM.

Não foram aplicadas mudanças em normalização Unicode, textos dos versículos, diacríticos, parágrafos, divisões editoriais ou transliteração.

## Testes e limites

- `tests/chapter-loader.test.cjs`: verifica arquivos, deduplicação, LRU, erro e retentativa, seis corpora, Ester e Daniel.
- `tests/chapter-loader-browser.mjs`: registra requisições reais em Chromium (viewport móvel), URLs diretas, edições e recortes.
- `tests/test_editorial_navigation.cjs` e `tests/test_editorial_browser.cjs`: regressão da navegação editorial.
- `.github/workflows/chapter-on-demand.yml`: executa tais verificações em cada atualização relevante na branch.

As contagens de tags e caracteres são análises estáticas. Tempo até interação, Core Web Vitals, bytes de transferência, memória de navegador e Lighthouse **não foram medidos** nesta etapa. Não inferir melhora de tempo apenas da redução do HTML. O frontend geral possui uma suíte Chromium independente, cuja aprovação deve ser acompanhada separadamente. A estratégia de cache HTTP e de fontes externas merece revisão por medição real.

## Testes, limitações e acompanhamento

A suíte de performance, integridade e Chromium móvel passou após as correções de idempotência: <https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/40153194042>. As validações das cinco importações automáticas (TR, LXX, VUL, SBLGNT, VULJ) foram aprovadas em suas execuções subsequentes. O leitor monta versículos em DocumentFragment antes de inseri-los no DOM.

O novo teste verifica zero requests para capítulos na página inicial, além de recuperar NA28 e UBS5 sob demanda. Medições de tempo, Lighthouse, Core Web Vitals, gzip/Brotli e memória em dispositivo real permanecem pendentes; **não medido** não é inferência de melhoria.

O HTML mantém 24 cartões lexicográficos legados ocultos; removê-los exige comprovação de equivalência com o índice compilado, evitando perda de dados. A suíte geral revelou duas inconsistências anteriores à otimização: uma definição duplicada de LSJ anulava sua capa local e o índice contabilizava 18.000 registros auxiliares como verbetes traduzidos publicados. A definição foi consolidada sem perda de referência; a pesquisa mantém os dados auxiliares no índice, mas respeita `publicationStatus: "source-only"` para contagem, amostras e resultados. Foi incluído teste estático de unicidade das fontes e existência das capas.
