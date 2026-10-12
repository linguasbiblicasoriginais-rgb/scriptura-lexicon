## Regressão executada — 12/10/2026

Workflow [Frontend — navegação e catálogo em Chromium](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38288709833), commit de teste `63f22edead6d5959e7f9e2775034da651c2da05a`: **PASS**, job `frontend-browser` concluído com sucesso em Chromium 141 / Playwright 1.56.1.

Cobertura reportada pelo próprio runner: dicionário grego **6 fontes testadas**, hebraico **1**, aramaico **1** e latim **0** (nenhuma fonte carregada). Cada fonte disponível foi exercitada pelo combobox visual, conferência do contador digital, pesquisa por lema indexado, abertura por Enter e Espaço, retorno por botão e Escape, preservação de consulta e filtro. Houve verificação de controle de busca em viewport de 375 px e de ausência de exceções JavaScript. A validação não abrangeu autenticidade de imagens de capa, destino HTTP externo, identidade entre edições, correção filológica ou aparência visual por captura de tela.

# Interface — ficha da fonte e leitura de verbetes

Atualização: 12/10/2026. Branch de trabalho: `chat-gpt-frontend`.

## Fonte bibliográfica selecionada

- O seletor nativo `#source-filter` permanece a única fonte de verdade; o combobox personalizado dispara o evento `change` do seletor. Com `Todas as fontes`, a ficha bibliográfica fica oculta.
- Ao selecionar uma fonte, `#source-details` aparece imediatamente abaixo da pesquisa com título, responsáveis, editora, edição, publicação, ISBN quando documentado, paginação do exemplar de referência e contagem **dinâmica** de linhas `.search-row` do dicionário ativo com `data-source` correspondente. Não se trata do número integral de lemas do livro histórico.
- O catálogo bibliográfico independente está em `lexicons/source-catalog.js`. Datas e paginações de edições diferentes não podem ser fundidas. Campos ainda não verificados são apresentados como não documentados.
- Para registros históricos de Robinson, Abbott-Smith e Thayer, a interface tenta carregar a capa do exemplar identificado no Internet Archive. Se o recurso estiver indisponível, apresenta uma **representação tipográfica explicitamente identificada como tal**, sem fingir ser a capa original. Nas outras fontes, utiliza essa representação até o cadastro de imagem verificada. As URLs de capa são opcionais e erros de rede não bloqueiam busca nem leitura.
- Identificação textual e notas de proveniência continuam subordinadas às regras de cada obra. Este catálogo não altera nem homologa o texto dos verbetes.

## Resultados e modo de leitura

- Digitar um termo mostra o índice filtrado e o contador. Selecionar uma linha por clique, Enter ou Espaço abre apenas o cartão cujo ID corresponda a `data-target` **e** cujo `data-dictionary` coincida com o dicionário atual.
- Ao abrir a ficha, `#search-table-wrapper` e `#no-results` ficam ocultos. O controle `#entry-navigation` expõe **Voltar aos resultados**; os outros cartões já permanecem ocultos como antes. Assim o cartão aparece imediatamente após a área da pesquisa sem uma lista extensa visível entre ambos.
- Voltar oculta o cartão, recompõe os resultados com o termo e filtro existentes e devolve foco à linha de origem. Alterar texto, fonte ou dicionário fecha a leitura automaticamente. A troca de dicionário continua zerando a consulta, como no comportamento anterior.
- Tooltip, formatação DGP, carregamento modular de fontes, seleção de idioma e tema não são modificados. A navegação funciona com linhas inseridas pelos módulos, inclusive para fontes hebraicas e aramaicas.

## Limitações / validação

- As capas remotas dependem da disponibilidade de serviços externos; fallback sem perda da interface.
- Quantidade digital é o total de linhas carregadas no DOM, não de manifestos, edições ou número de acepções.
- Verificação estática do código é distinta de prova funcional em navegador. Recomenda-se regressão Chromium: cada dicionário com corpus, cada opção do filtro, busca → cartão → voltar (mouse/teclado), alteração da busca no modo leitura, desktop/celular, temas e popups.
- Fonte bibliográfica do projeto: `regras/Rfontes-impressas.txt`, `regras/Rfontes-consulta.txt`, `regras/Rbdag.txt`, `regras/Rleh.txt`, `regras/Rdgp.txt`, `regras/Rpereira.txt`, `regras/Rjastrow.txt`, `regras/Rthayer.txt` e `regras/Rhalot.txt`.

Nenhum módulo lexical, checkpoint de progresso, PR ou arquivo de `main` é modificado por esta melhoria.
