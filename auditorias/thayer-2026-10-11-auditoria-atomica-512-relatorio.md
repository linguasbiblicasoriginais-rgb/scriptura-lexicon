# THAYER — auditoria atômica, textual, estrutural e filológico-documental (512 registros)

**Data:** 11/10/2026. **Escopo:** 512 fichas THAYER — 511 dinâmicas em 14 módulos e Ἀαρών estático. **Padrão de aceitação:** `regras/Rauditoria.txt`. **Base:** `chat-gpt-commits` em `d01dd7c6af9058557302c3c971687187ad4d090f`. **Tipo de entrega:** execução de auditoria e correção funcional localizada, **não homologação filológica integral**.

## 1. Parecer verificável

**512/512** registros passaram nos controles estáticos empregados: presença dos pares linha/cartão, correspondência de IDs, lema/glossa na busca, rubrica THAYER, seções, tooltip e balanceamento de tags HTML. O cartão estático Ἀαρών foi tratado com o padrão histórico próprio, sem presumir que necessita das quatro seções modernas.

**12/512** fichas do suplemento receberam cotejo filológico-documental **dirigido/preliminar**, sem transcrição e verificação integrais de todas as subdivisões de Thayer. As formas incluem artigos independentes, subentradas indexadas digitalmente, variantes textuais e remissões; **31a, 95a etc. não são números próprios de Strong**.

**0/512** fichas têm homologação integral comprovada segundo os dez controles da regra atômica, sobretudo porque a colação completa de todos os artigos e o teste real de navegador, teclado, popup e acessibilidade não foram demonstrados. **É proibido comunicar “THAYER 512/512 auditado” sem qualificar “somente estrutura estática”.**

## 2. Indicadores com barras

```text
Estrutura estática dos registros    512/512   100,00%  ████████████████████
Fonte: cotejo dirigido preliminar   12/512      2,34%  ▌░░░░░░░░░░░░░░░░░░░
Referências clicáveis nos cartões   12/511      2,35%  ▌░░░░░░░░░░░░░░░░░░░
Colação filológica INTEGRAL          0/512      0,00%  ░░░░░░░░░░░░░░░░░░░░
Testes reais de navegador            0/512      0,00%  ░░░░░░░░░░░░░░░░░░░░
AUDITORIA ATÔMICA CONCLUÍDA          0/512      0,00%  ░░░░░░░░░░░░░░░░░░░░
```

**Denominadores:** 512 inclui o histórico Ἀαρών; 511 refere-se somente aos cartões dinâmicos. Uma porcentagem de **cobertura de triagem** não é porcentagem de qualidade textual, nem uma porcentagem de homologação.

## 3. Contagens reproduzíveis e regressão

| Controle da matriz | Resultado |
|---|---:|
| 14 módulos com pares completos | 511 linhas / 511 cartões |
| Registro estático independente Ἀαρών | 1 |
| IDs únicos e correspondentes | 512/512 |
| Falhas estáticas de pares, tooltip, glossa, tags ou fonte detectadas | 0 |
| Cartões dinâmicos com links na seção de referências | 12/511 |
| URLs de passagens bíblicas verificadas e acrescentadas | **15**, distribuídas nos 12 cartões do suplemento |
| Cartões com padrão textual estrito de página impressa no campo Fonte | 12/511 |
| Descrições das acepções com menos de 120 caracteres | 335/511 |
| Descrições de acepções com caracteres gregos | 65/511 |
| Descrições de acepções sem caracteres gregos | 446/511 |
| Execução real do frontend em navegador | Não executada |
| Colação textual-filológica completa de cada ficha | Não homologada |

**Advertência técnica:** o teste de HTML é de marcação declarativa, e não um DOM construído por browser. A presença de 335 descrições curtas e de 446 sem grego é um *indicador de prioridade*, não prova automática de tradução errada. O contador de paginação usa o padrão estrito `p. impressa N` ou `Thayer, p. N`; não considera páginas simplesmente estimadas no inventário auxiliar, e não deve ser comparado sem método aos levantamentos históricos com regex diferente.

## 4. Correções efetivamente aplicadas nesta rodada

Foram incluídos **15 links de consulta bíblica**, previamente visitados e identificados, nas 12 seções `Referências e variantes textuais` de `lexicons/thayer-batch-007-suplemento.js`. A versão original não tinha hiperlinks nessas seções. Os endereços são do BibleHub; a ficha distingue explicitamente **consulta ao versículo** de **certificação de variante crítica**.

| ID | Forma | Passagens com link |
|---|---|---|
| 0500 | ἀγγέλλω | Jo 4.51; Jo 20.18 |
| 0501 | Ἀδμείν | Lc 3.33 |
| 0502 | ἀηδία | Lc 23.12 |
| 0503 | ἀθροίζω | Lc 24.33 |
| 0504 | αἰτιάομαι | Rm 3.9 |
| 0505 | αἰτίωμα | At 25.7 |
| 0506 | ἀκατάπαστος | 2Pe 2.14 |
| 0507 | Ἄλασσα | At 27.8 |
| 0508 | ἀνάγαιον | Mc 14.15; Lc 22.12 |
| 0509 | ἀνακυλίω | Mc 16.4 |
| 0510 | ἀνάπειρος | Lc 14.13; Lc 14.21 |
| 0511 | ἀναπηδάω | Mc 10.50 |

**Persistência:** todos os 12 IDs, lemas e glosas foram mantidos; a regressão pós-alteração confirmou 12/12 pares e os 15 links declarados. A validação real de clique no frontend ainda não foi executada. A confirmação remota do PR/merge consta dos registros do GitHub e deve ser verificada antes de encerrar esta rodada.

## 5. Filologia e cautelas na fonte

A fonte principal é o fac-símile `Thayer (parte 1, Α–Ι).pdf`. Foram inspecionadas visualmente páginas selecionadas da primeira parte, incluindo as páginas de `ἀγγέλλω`, `ἀηδία`, `ἀθροίζω`, `αἰτιάομαι`, `ἀκατάπαστος`, `ἀνάγαιον`, `ἀνακυλίω` e `ἀναπηδάω`, entre outras. A transcrição indexada em BibleHub foi consultada como **auxiliar**, sem substituir o impresso.

Caso de risco especialmente importante: `ἀκατάπαστος` registra possível interpretação «insaciável» baseada em etimologia conjectural, distinta de `ἀκατάπαυστος` («que não cessa»). Não converter essa hipótese em certeza nem omitir a variante de 2Pe 2.14.

**Não se transcreveram nem cotejaram integralmente todos os testemunhos, autores, abreviaturas, regências, formas e hipóteses dos 512 artigos.** As 12 fichas suplementares são preliminarmente verificadas quanto a natureza, localização e sentido essencial, e não homologadas palavra por palavra.

## 6. Matriz individual obrigatória

- `auditorias/thayer-2026-10-11-auditoria-atomica-512-matriz.json` — todos os **512 IDs**, controles e flags por entrada, indicadores e estado `BLOQUEADA` quando faltar homologação.
- `auditorias/thayer-2026-10-11-auditoria-atomica-512-matriz.csv` — exportação nominal filtrável para revisão humana.

Cada linha apresenta `BLOQUEADA`, de acordo com a norma, porque **a colação filológica integral e os testes funcionais obrigatórios ainda não foram completados**. Os indicadores automáticos nunca são promovidos a selo de conclusão.

## 7. Trabalho obrigatório para a homologação completa

1. **512 artigos, um a um:** verificar cabeçalho, paginação impressa, texto inglês integral, todas as acepções e subdivisões, construções gregas, morfologia, regência, notas e etimologias.
2. **Testemunhos:** verificar cada citação bíblica, texto crítico, Septuaginta, autor clássico, fonte patrística, obra e edição; atribuir hipóteses e variantes ao responsável original.
3. **Correções editoriais:** aplicar e retestar integralmente as diferenças comprovadas em cada cartão, mantendo separadas Fonte, Tradução, Análise e GDHAGP.
4. **Links e pesquisa:** converter citações em links somente após validar os destinos e as próprias referências; atualizar índices/páginas verificadas por artigo; não simular consultas HTTP nem atribuir Strong suplementar.
5. **Navegador e acessibilidade:** executar efetivamente a aplicação e testar navegação, busca, correspondência, tooltip, foco, teclado, responsividade e links.
6. **Integração por verbete:** produzir ficha atômica conforme `regras/modelo-auditoria-atomica.json`, publicar alterações sustentadas, testar, abrir PR e confirmar `merged=true`; só então mudar para `AUDITORIA_CONCLUIDA`.

**Veredito rigoroso:** estrutura aprovada no escopo estático; correção funcional de links executada no código; suplemento com cotejo dirigido; **homologação completa do THAYER pendente**. Nenhuma porcentagem de triagem substitui a conclusão prevista na regra canônica.
