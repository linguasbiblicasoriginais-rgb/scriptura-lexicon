## DGP: fragmentos técnicos do XML fora da busca — 19/10/2026

A captura da interface mostrou registros intitulados `⟦fragmento sem lema no XML · …⟧` como se fossem lemas. Nos módulos DGP há casos marcados com `data-source-fragment="true"`; por exemplo, `entry-dgp-26069` aparece após `μέγας`, com uma definição que parece continuação de acepções. Sem cotejar o XML e a edição impressa, não se pode recuperar automaticamente o verdadeiro cabeçalho, nem afirmar que todas as continuações pertencem ao item precedente.

**Tratamento conservador:** `scripts/build-on-demand.mjs` não publica como resultados independentes os registros DGP marcados explicitamente ou com o marcador canônico `⟦fragmento sem lema no XML …⟧`. Nenhum módulo lexical original é reescrito, e o conteúdo integral desses registros é preservado nos módulos de origem. Cada registro retido passa a constar em `lexicon-data/auditorias/dgp-fragmentos-sem-lema.json`, com ID, módulo de origem, cabeçalho e definição; o arquivo é produzido durante o build. Os demais verbetes e idiomas não recebem esse filtro. Uma revisão filológica posterior poderá localizar o verdadeiro lema e reintegrar definições, mediante evidência, sem inventar nem descartar material da fonte.

**Contagens separadas:** `lexicons/dgp-progress.json` conserva o número bruto de registros XML incorporados (44.590), enquanto `lexicon-data/catalog.json` passa a informar os artigos DGP pesquisáveis e o total de fragmentos em `quarantined.DGP`. O número pesquisável deve ser reduzido apenas na quantidade efetivamente identificada. A suíte Chromium compara `publicados + quarentena = 44590`, verifica o inventário, a ausência do marcador na busca e a navegação restante. O procedimento não é uma certificação global da qualidade do DGP: erros lexicais não marcados ainda podem exigir cotejo manual.

**Publicação:** o print do navegador ainda mostrava uma observação bibliográfica que já não consta nesta branch, indicando possível deploy defasado ou cache antigo. Confirmar que o ambiente público utiliza a revisão da branch após gerar o catálogo correspondente.

## Pesquisa rápida universal e paginação limitada — 19/10/2026

Aplicado uniformemente aos dicionários grego, hebraico, aramaico e latino (quando tiver registros publicados), sem exceções por fonte. A API `page(results,n,perPage)` rejeita pedidos acima de **10 linhas por página**. O número de correspondências permanece exato, no topo, e nenhum artigo completo é solicitado durante a pesquisa/paginação.

**Problema corrigido:** o catálogo v3 verificava falsos positivos de pesquisas amplas baixando até centenas de fragmentos `lookup/` (128 registros cada), mesmo quando um termo de 1–3 caracteres já era comprovado pelo próprio índice. O catálogo **v4** acrescenta uma ordenação compacta de lemas (`__lemmaRank` em `grams/`) para manter a precedência de lemas exatos/prefixos, sem ler nenhuma definição nessa situação. Todos os termos de até três caracteres são substrings exatas do respectivo índice de n-gramas; a interseção das listas determina o total, sem resultados falsos e sem requisições a `lookup/`. O custo proporcional ao tamanho das listas permanece, mas dispensa transferências de centenas de arquivos.

Para consultas que contenham palavras maiores, continuam sendo verificadas integralmente as ocorrências na transliteração, lema e texto de definições, sem perda semântica: quando existem mais de 32 blocos de candidatos, o navegador usa `lookup-large/` (grupos de 2.048 pares texto/lema) com concorrência limitada, reduzindo substancialmente o número de solicitações HTTP; consultas mais seletivas preservam os blocos pequenos `lookup/`. Ambos contêm somente texto normalizado de pesquisa, não linhas HTML nem cartões completos. As linhas são carregadas apenas pela página solicitada, os artigos integrais apenas quando abertos. As respostas antigas de pesquisas/páginas são desconsideradas. O processamento de indexação ocorre no build do Netlify e no GitHub Actions; é obrigatório gerar integralmente os arquivos do catálogo v4.

**Validação:** a suíte Chromium verifica, além das regressões de todas as fontes, pesquisas curtas reais em DGP/greco, BDB/hebraico e JASTROW/aramaico: total acima de dez, só dez linhas em página, navegação e contador persistentes, nenhuma requisição `lookup/` ou `lookup-large/` e nenhum `cards/` enquanto nenhum artigo estiver aberto. Consulta mais extensa continua passando pelos testes de definições e termos independentes. A medição de desempenho em rede real depende do ambiente, da distribuição CDN e do dispositivo; não se presume tempo absoluto de carregamento.

## Citações, popups e ficha do DGP — 18/10/2026

A regra exclusiva `lexicons/dgp-format.css` que aplicava `text-decoration: underline dotted` a `.dgp-greek-quotation` passou a `text-decoration: none`. Os elementos, classes, eventos de foco e popup grego/bibliográfico não foram removidos. A cor, a interação por teclado, os popups de transliteração e os rótulos de autor/obra são preservados. Em `style.css`, o conteúdo do componente `.lexical-tooltip` e de seus títulos, rótulos, valores e etiquetas usa `text-align: justify` (`text-justify: inter-word`), independentemente da fonte ou do tema.

A ficha bibliográfica DGP descreve a **2ª edição em volume único**, conforme os metadados informados pelo mantenedor: Ateliê Editorial (Cotia/SP) e Editora Mnēma (Araçoiaba da Serra/SP), publicação em 27/09/2022, 1.264 páginas, ISBN 978-6599195198. Isto não altera a redação da transcrição digital nem certifica a identidade textual integral entre ela e o exemplar comercial.

Testes de regressão do Chromium acrescentados: campos bibliográficos apresentados, ausência de sublinhado na citação grega DGP, manutenção dos popups grego e bibliográfico com foco e texto justificado. Os testes existentes de busca/paginação, fontes, teclados, leitura de cartão e retorno permanecem.

## Identificação visual e capa do LSJ — 18/10/2026

Na lista suspensa do dicionário grego, o rótulo passa a ser exclusivamente `LSJ`, sem o sufixo “em preparação”. A ficha bibliográfica utiliza `imagens/capas/lsj.png` (imagem existente no repositório). Foi retirada somente a advertência inicial solicitada pelo mantenedor da **observação** exibida na ficha, preservando a informação de proveniência, atribuição e licença da transcrição auxiliar. O estado interno `source-only`, a indisponibilidade de artigos pesquisáveis e o aviso contextual da pesquisa não foram alterados. O teste Chromium valida o rótulo, a observação remanescente e o PNG local, além da imagem exibida.

## Paginação verdadeiramente sob demanda — 18/10/2026

A consulta foi dividida em **busca/contagem** e **materialização de página**. O índice gerado por `scripts/build-on-demand.mjs` passou ao **catálogo v3**. Arquivos `lexicon-data/lookup/*.json` armazenam exclusivamente as cadeias normalizadas usadas para confirmar correspondências e priorizar lemas, sem HTML de lista ou de cartões. O resultado da busca em `lexicons/on-demand-search.js` contém somente IDs ordenados e `total`. A contagem corresponde às correspondências verificadas (não é estimativa ou truncamento). Para manter buscas por substrings, termos independentes, transliterações e definições, é necessário ler os segmentos leves do índice correspondentes aos candidatos, **mas nunca os verbetes completos para contá-los**.

A API `ScripturaLexiconSearch.page(resultado, número, 10)` baixa metadados da página solicitada e devolve, no máximo, **dez linhas**. Metadados de outras páginas não são requisitados na busca; os cartões completos ficam em `cards/` e são recuperados apenas na abertura de verbete. O título da busca atualiza imediatamente para `N verbetes` após terminar a contagem, antes de baixar as linhas. Trocas de página preservam o total e invalidam respostas atrasadas por identificador de geração. A interface mantém dez linhas visíveis, navegação, filtro, retorno ao cartão e aviso de fontes ainda em preparação. O cache de blocos de busca e linhas tem limites de retenção.

O teste do navegador agora verifica formalmente uma pesquisa de 23 ocorrências: páginas 1, 2, 3, 2 baixam respectivamente **10, 10, 3 e 10 linhas**, preservando o total `23 verbetes`. A compilação no Netlify ou no GitHub Actions é **obrigatória** para gerar os novos arquivos `lookup/` e o `catalog.json` de versão 3; misturar catálogo v3 com arquivos de outra compilação não é suportado. Como o servidor publica um site estático, a contagem é calculada no índice do navegador, não por uma API externa de busca. O carregamento pode continuar custoso para consultas extremamente amplas; a implementação evita, no entanto, transportar todos os resultados e cartões.

## LSJ no seletor de fontes — 18/10/2026

A interface reconhece agora o LSJ exclusivamente como fonte **em preparação**, no dicionário grego, pelo registro `publicationStatus: "source-only"` do catálogo bibliográfico `lexicons/source-catalog.js`. O seletor é preenchido pela união das fontes publicadas no índice com os registros declaradamente pendentes. Isso impede que o LSJ desapareça do menu quando o catálogo `lexicon-data/catalog.json` terminar de carregar.

**Situação documental:** os arquivos `lexicons/lsj-source-batch-*.xml` são transcrições na camada FONTE (inglês), e não traduções portuguesas. O estado `lexicons/lsj-progress.json` e as regras em `regras/Rlsj.txt` distinguem extração da fonte, tradução, revisão e publicação. A inclusão do nome LSJ **não** incorpora seus registros ao índice nem implica aprovação filológica. Quando selecionado, a interface mostra zero cartões publicados, ficha bibliográfica e aviso contextual. Consultas para fontes sem registros retornam imediatamente, sem buscar os blocos do índice invertido. Os dicionários hebraico, aramaico e latino não listam o LSJ.

A suíte em Chromium verifica: presença e anotação do LSJ no seletor grego, ausência nos demais, contagem 0, informação bibliográfica, aviso de indisponibilidade, inexistência de linhas falsas, além das regressões funcionais de todas as outras fontes. Para torná-lo pesquisável será necessário publicar artigos portugueses de acordo com a metodologia do projeto.

## Busca paginada, ampla e leve — 18/10/2026

Branch de trabalho: `chat-gpt-melhorias`.

- Cada consulta encontra substrings normalizadas, sem exigir o lema completo. Termos separados por espaços, vírgulas ou ponto e vírgula podem ocorrer em campos distintos: lema, transliteração, glosas ou definições indexadas. A ordem de relevância prioriza lemas exatos, prefixos, correspondência parcial no lema e, por fim, ocorrências nas definições.
- O limite anterior de 250 resultados foi retirado. O total corresponde aos registros confirmados pelo índice, filtrados por dicionário/fonte. A lista apresenta dez registros por página, controle Anterior/Próxima e números de página. Somente dez linhas são inseridas no DOM.
- Os resumos da tabela são derivados da glosa histórica (até aproximadamente 120 caracteres), sem pretensão de conservar nela a redação integral. O cartão preserva o artigo original e aparece sozinho; o botão de retorno conserva os resultados e a página.
- O compilador de índice gera `catalog.json` v2 com intervalos compactos por dicionário/fonte e versões abreviadas das linhas HTML. O texto original dos artigos continua em `cards/`; o texto de busca fica em `meta/`. Não há alterações nos módulos filológicos.
- Otimizações: descarte de IDs de outras fontes antes de carregar metadados; concorrência limitada a seis blocos; cache LRU com limites; descarte de falhas transitórias do cache; debounce de 180 ms; invalidação de pesquisas obsoletas. O desempenho depende também do tamanho do corpus, comprimento da consulta e rede do navegador.
- O teste `tests/frontend-reader-browser.mjs` ganhou verificações de pesquisa por significado, resumos compactos e paginação determinística de 23 registros (10/10/3), além das verificações existentes de abertura/retorno, teclado, fontes, capas e IDs colidentes. A execução de validação está configurada para a branch `chat-gpt-melhorias`; seu resultado deve ser verificado no GitHub Actions.

## Homologação funcional das capas — 13/10/2026

GitHub Actions [frontend-reader #38402737323](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38402737323), commit de correção CSS `ef5804cba8ec6a1a59a17b8e84a4f1be66f38abd`: **PASS em Chromium**. Confirmados HTTP 200 e assinatura PNG de **8/8 arquivos**, carregamento efetivo de **8/8 imagens** nos filtros de fontes, `object-fit: contain` aplicado ao elemento correto `#source-cover-image`; regressão funcional de 6 fontes gregas, 1 hebraica e 1 aramaica. Latim permanece sem corpus. A execução não valida fidelidade filológica ou identidade entre edições.

A primeira execução do teste ampliado (#38402501104) identificou que o CSS anterior mirava uma classe ausente no HTML. O seletor foi corrigido em `style.css` e a regressão completa foi repetida com sucesso; não se considerou o teste falho como aprovação.

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
