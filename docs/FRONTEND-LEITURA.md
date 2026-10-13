## Capas locais fornecidas pelo mantenedor — 13/10/2026

Oito arquivos PNG localizados e verificados em `imagens/capas/` na branch `chat-gpt-frontend`. `lexicons/source-catalog.js` contém os caminhos relativos, e `style.css` mostra a imagem integral com proporção preservada. O teste Chromium verifica resposta HTTP e assinatura PNG dos oito arquivos e o carregamento visual das capas cujas fontes estão disponíveis no seletor.

## Regressão executada — 12/10/2026

Workflow [Frontend — navegação e catálogo em Chromium](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38288709833), commit de teste `63f22edead6d5959e7f9e2775034da651c2da05a`: **PASS**, job `frontend-browser` concluído com sucesso em Chromium 141 / Playwright 1.56.1.

Cobertura reportada pelo próprio runner: dicionário grego **6 fontes testadas**, hebraico **1**, aramaico **1** e latim **0** (nenhuma fonte carregada). Cada fonte disponível foi exercitada pelo combobox visual, conferência do contador digital, pesquisa por lema indexado, abertura por Enter e Espaço, retorno por botão e Escape, preservação de consulta e filtro. Houve verificação de controle de busca em viewport de 375 px e de ausência de exceções JavaScript. A validação não abrangeu autenticidade de imagens de capa, destino HTTP externo, identidade entre edições, correção filológica ou aparência visual por captura de tela.

# Interface — ficha da fonte e leitura de verbetes

Atualização: 12/10/2026. Branch de trabalho: `chat-gpt-frontend`.

## Fonte bibliográfica selecionada

- O seletor nativo `#source-filter` permanece a única fonte de verdade; o combobox personalizado dispara o evento `change` do seletor. Com `Todas as fontes`, a ficha bibliográfica fica oculta.
- Ao selecionar uma fonte, `#source-details` aparece imediatamente abaixo da pesquisa com título, responsáveis, editora, edição, publicação, ISBN quando documentado, paginação do exemplar de referência e contagem **dinâmica** de linhas `.search-row` do dicionário ativo com `data-source` correspondente. Não se trata do número integral de lemas do livro histórico.
- O catálogo bibliográfico independente está em `lexicons/source-catalog.js`. Datas e paginações de edições diferentes não podem ser fundidas. Campos ainda não verificados são apresentados como não documentados.
- As oito imagens fornecidas pelo mantenedor estão versionadas como PNG em `imagens/capas/` e foram vinculadas a THAYER, BDAG, LEH, DGP, ROBINSON, ABBOTT-SMITH, HALOT e JASTROW. O CSS utiliza dimensões proporcionais e `object-fit: contain`, sem recortes (inclusive na imagem horizontal do HALOT). O fallback tipográfico permanece disponível quando a imagem não carrega. As fontes PEREIRA, KBS e CLINES não foram modificadas.
- Identificação textual e notas de proveniência continuam subordinadas às regras de cada obra. Este catálogo não altera nem homologa o texto dos verbetes.

## Resultados e modo de leitura

- Digitar um termo mostra o índice filtrado e o contador. Selecionar uma linha por clique, Enter ou Espaço abre apenas o cartão cujo ID corresponda a `data-target` **e** cujo `data-dictionary` coincida com o dicionário atual.
- Ao abrir a ficha, `#search-table-wrapper` e `#no-results` ficam ocultos. O controle `#entry-navigation` expõe **Voltar aos resultados**; os outros cartões já permanecem ocultos como antes. Assim o cartão aparece imediatamente após a área da pesquisa sem uma lista extensa visível entre ambos.
- Voltar oculta o cartão, recompõe os resultados com o termo e filtro existentes e devolve foco à linha de origem. Alterar texto, fonte ou dicionário fecha a leitura automaticamente. A troca de dicionário continua zerando a consulta, como no comportamento anterior.
- Tooltip, formatação DGP, carregamento modular de fontes, seleção de idioma e tema não são modificados. A navegação funciona com linhas inseridas pelos módulos, inclusive para fontes hebraicas e aramaicas.

## Limitações / validação

- As oito imagens locais não dependem de serviços externos; falhas de imagem mantêm o fallback tipográfico. As imagens de THAYER e ROBINSON correspondem a folhas de rosto. Em ROBINSON, a imagem é da edição londrina de 1852 (William Tegg and Co.), enquanto a ficha mantém a referência americana de 1850 (Harper & Brothers). Em LEH, a imagem indica *Third Corrected Edition*, diferente da edição revisada de 2003 descrita na ficha. Não se deve inferir que a imagem determina a edição-texto-base dos verbetes.
- Quantidade digital é o total de linhas carregadas no DOM, não de manifestos, edições ou número de acepções.
- Verificação estática do código é distinta de prova funcional em navegador. Recomenda-se regressão Chromium: cada dicionário com corpus, cada opção do filtro, busca → cartão → voltar (mouse/teclado), alteração da busca no modo leitura, desktop/celular, temas e popups.
- Fonte bibliográfica do projeto: `regras/Rfontes-impressas.txt`, `regras/Rfontes-consulta.txt`, `regras/Rbdag.txt`, `regras/Rleh.txt`, `regras/Rdgp.txt`, `regras/Rpereira.txt`, `regras/Rjastrow.txt`, `regras/Rthayer.txt` e `regras/Rhalot.txt`.

Nenhum módulo lexical, checkpoint de progresso, PR ou arquivo de `main` é modificado por esta melhoria.
