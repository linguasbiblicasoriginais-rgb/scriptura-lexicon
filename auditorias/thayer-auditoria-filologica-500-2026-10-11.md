# THAYER — auditoria filológica de controle (500 registros)
Data: 11/10/2026. Branch auditada: `chat-gpt-thayer`. Commit-base: `50ba9828d31b5f3d5fbffc746f403f1e6f8cc1c0`.

## Parecer
**NÃO HOMOLOGADO FILOLOGICAMENTE.** O total de 500 é **contagem de cartões** (499 dinâmicos e o histórico `Ἀαρών`), e não certificação de 500 artigos independentes ou traduções fiéis. Não confundir auditoria estática da interface com revisão semântica do texto-fonte.

## Fontes e método
- **Autoridade primária**: Joseph Henry Thayer, *A Greek-English Lexicon of the New Testament*, fac-símile do arquivo `Thayer (parte 1, Α–Ι).pdf`, especialmente pp. impressas **1–51**.
- **Auxílio, não autoridade**: `nigelmsipa/thayers-greek-lexicon-dataset`, arquivo `data/thayer_lexicon.jsonl`, com extração inicial por Gemini, ainda **sem segunda revisão independente** segundo os próprios metadados. O corpus possui 530 registros de extração anteriores a `ἀντιπαρέρχομαι`. Inclui entradas, formas textuais, remissões e uma mesma entrada dividida entre páginas: 530 **não é** automaticamente quantidade de artigos canônicos.
- **Comparação realizada**: confronto normalizado dos lemas de **todos os 500 cartões**, com conferência visual no fac-símile de divergências relevantes. A associação por lema não prova acepções, flexões, regências, homógrafos ou referências corretas. O inventário completo é `auditorias/thayer-auditoria-filologica-500-inventario.csv`.
- Camadas preservadas: **Fonte** (redação inglesa de Thayer) / **Tradução** (equivalentes portugueses) / **Análise** (classificação do problema) / **GDHAGP** (não alterado).

## Contagem da revisão de lemas
| Situação | Quantidade |
|---|---:|
| Coincidência automática após normalização gráfica | 490 |
| **Divergência de lematização confirmada no impresso** | **7** |
| Cabeçalho atestado no impresso, não reconhecido pela transcrição auxiliar | 1 |
| Diferenças aparentes decorrentes de indicação de desinência no auxiliar | 2 |
| **Total do repositório examinado** | **500** |

**490 coincidências NÃO significam 490 traduções revisadas.** Nenhum dos 500 registros recebeu nesta auditoria homologação integral de sentidos, remissões, exemplos, regências, referências, variantes e interpretação.

## Sete divergências de cabeçalho comprovadas
| Cartão | Lema publicado | Como Thayer organiza a matéria | Pág. |
|---|---|---|---|
| `entry-thayer-0040` | ἅγιον | Ocorrências substantivadas de **ἅγιος**; não há artigo independente `ἅγιον` neste ponto | 6–7 |
| `entry-thayer-0139` | αἱρέομαι | Cabeçalho **αἱρέω**; a fonte explica emprego médio | 16 |
| `entry-thayer-0150` | αἰσχρόν | Forma neutra de **αἰσχρός**; a fonte não lhe dá artigo independente | 17 |
| `entry-thayer-0154` | αἰσχύνομαι | Cabeçalho **αἰσχύνω**, seguido de usos passivos `αἰσχύνομαι` | 17 |
| `entry-thayer-0197` | ἀκριβέστατος | Superlativo no artigo **ἀκριβής**, sem cabeçalho independente | 23–24 |
| `entry-thayer-0198` | ἀκριβέστερον | Comparativo adverbial no artigo **ἀκριβής**, sem cabeçalho independente | 23–24 |
| `entry-thayer-0207` | ἄκρον | O artigo-base é **ἄκρος**; `τὸ ἄκρον` é forma neutra substantivada | 24 |

**Providência**: distinguir artigo-fonte, forma flexionada, sentido substantivado e índice Strong. Não eliminar significados úteis, mas não apresentar derivados como artigos independentes de Thayer sem explicitar o estatuto editorial.

## Falsos positivos do comparador
- `entry-thayer-0159` **αἴτιον**: existe como cabeçalho na **p. 18**; o extrator auxiliar não segmentou corretamente essa ocorrência.
- `entry-thayer-0240` **ἀλληγορέω**: no auxiliar aparece `ἀλληγορέω, -ῶ`, mera indicação de desinência.
- `entry-thayer-0243` **ἀλλογενής**: no auxiliar aparece `ἀλλογενής, -ές`, mera indicação da segunda terminação.
- O cabeçalho `Α, α, ἄλφα` já é representado pelo lema `ἄλφα` no site; seu uso prefixal requer descrição própria, não duplicação indiscriminada.

## Vinte e cinco registros do auxiliar sem correspondência literal no site
**Doze candidatos a inclusão ou representação autônoma, sujeitos a decisão editorial após conferência do fac-símile**:

| Forma | Pág. | Observação |
|---|---:|---|
| ἀγγέλλω | 5 | Artigo próprio; variantes Jo 4.51 e 20.18 |
| Ἀδμείν | 12 | Nome próprio em variante genealógica de Lc 3.33 |
| ἀηδία | 13 | Variante de Lc 23.12 |
| ἀθροίζω | 14 | Forma textual de Lc 24.33 |
| αἰτιάομαι | 18 | Forma variante de Rm 3.9 |
| αἰτίωμα | 18 | Variante de At 25.7 |
| ἀκατάπαστος | 21 | Variante de 2Pe 2.14 |
| Ἄλασσα | 25 | Variante onomástica de At 27.8 |
| ἀνάγαιον | 35 | Quarto superior, Mc 14.15 e Lc 22.12 |
| ἀνακυλίω | 39 | Variante de Mc 16.4 |
| ἀνάπειρος | 41 | Variante de ἀνάπηρος, Lc 14.13,21 |
| ἀναπηδάω | 41 | Forma textual de Mc 10.50 |

**Treze outros casos não devem virar 13 novos cartões automaticamente:**
- Já representados/necessitam mudança de lema: `Α, α, ἄλφα`, `αἱρέω`, `αἰσχύνω`, `ἄκρος`.
- Remissões ou variantes de forma sem artigo expositivo próprio: `ἀγαλλιάομαι`, `ἅλα`, `[ἀναλόω`, `[ἀνα-μέρος`, `[ἀνά-μεσον`.
- Fragmento da **mesma** entrada em duas páginas: `ἀκριβής` (duas unidades de extração).
- Falsas ausências por desinência: `ἀλληγορέω, -ῶ`, `ἀλλογενής, -ές`.

A fonte contém remissões e variantes sem números Strong autônomos; Thayer não deve ser reduzido a uma lista de números Strong. Em sentido inverso, índices editoriais com sufixos (`G415a` etc.) não devem ser chamados de números Strong oficiais sem prova bibliográfica.

## Verificações ainda pendentes — não certificadas
1. **Acepções e polissemia, 500/500:** confirmar cada subdivisão semântica, equivalentes, restrições de uso, litotes, diferenças entre sentido literal, figurado, teológico e histórico.
2. **Morfologia e sintaxe, 500/500:** classe, gênero, flexão, voz, tempos, regência de casos, preposições e construções particulares.
3. **Referências, 500/500:** cotejar cada passagem efetivamente citada na fonte, variantes `TR/L/T/Tr/WH`, AT/LXX, edição e localização; eliminar referências presumidas.
4. **Etimologia, nomes e remissões, 500/500:** separar o que Thayer afirma do que especula; preservar grafias e variantes como variantes, sem homogeneização silenciosa.
5. **Interface:** conferir popups e indexação após futuras correções, inclusive remissões e formas secundárias.

## Encaminhamento editorial
- **Nenhuma acepção, lema ou cartão foi alterado nesta etapa.** O relatório conserva evidência e evita corrigir silenciosamente o acervo.
- Revisar primeiro os sete casos comprovados; em seguida decidir os 12 candidatos à luz do impresso e registrar `Fonte / Tradução / Análise` por artigo.
- **Checkpoint continua 500**, próximo lema indexado **ἀντιπαρέρχομαι (G492)**, mas **não homologado filologicamente**.
- Só declarar homologação integral quando 500/500 artigos tiverem cotejo individual de conteúdo, não apenas de cabeçalho.
- Registrar a auditoria apenas em `chat-gpt-thayer`; não modificar `main` nem `chat-gpt-commits`.
