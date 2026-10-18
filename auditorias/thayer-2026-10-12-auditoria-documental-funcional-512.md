# THAYER — auditoria filológico-documental e funcional — 12/10/2026

**Norma canônica:** regras/Rauditoria.txt. **Escopo:** 512 verbetes, 511 dinâmicos e Ἀαρών histórico. **Merge comprovado do código:** PR #105, commit 2231a99909714b678c5caf945864d15dd1603ef6. **Total incorporado inalterado:** 512.

## Parecer

**ESTRUTURA E DOM REAL:** 512/512 linhas e cartões coerentes em Chromium; nenhum alvo órfão, lema divergente ou ID duplicado entre os 512. Foram exercitados 512 eventos DOM de clique e 512 eventos DOM de Enter em seus alvos correspondentes. Os eventos são sintéticos, executados *dentro de Chromium real*, além de fluxos representativos com cliques e teclado reais controlados por Playwright. NÃO são 512 sessões independentes de um usuário humano.

**CORREÇÃO DE FONTE:** artigo ἄλφα (entry-thayer-0001) cotejado dirigidamente na página 1 do fac-símile Thayer, com confronto auxiliar em Wikisource e BibleHub. O artigo neutro foi corrigido de το para τό; o exemplo ἀτιμόω foi reposto; Ap 11.17 foi registrada como referência comparativa; página e juízo histórico do autor sobre o prefixo intensivo foram identificados. Não houve substituição de acepções por outros léxicos.

**FILOLÓGICO-DOCUMENTAL:** 12 artigos do suplemento já possuíam cotejo dirigido preliminar; com ἄλφα, são 13/512 com confrontos dirigidos, **não** 13 artigos integralmente homologados. Os 512 ainda requerem prova de todas as acepções, formas, gramática, etimologias, referências e aparato documental do original.

**HOMOLOGAÇÃO ATÔMICA INTEGRAL:** 0/512. A regra canônica exige também verificação exaustiva de links e acessibilidade, colação textual integral, correções e evidência sem pendências. DOM estático e interação de rotas aprovados NÃO substituem fidelidade filológica.

## Painel percentual (evidência verificável)

| Dimensão | Comprovados | Progresso | Barra |
|---|---:|---:|---|
| Pares estruturais montados em Chromium | **512/512** | **100,00%** | ████████████████████ |
| Rotas abertas por clique no DOM | **512/512** | **100,00%** | ████████████████████ |
| Rotas abertas por Enter no DOM | **512/512** | **100,00%** | ████████████████████ |
| Cotejo documental dirigido, não integral | **13/512** | **2,54%** | ▌░░░░░░░░░░░░░░░░░░░ |
| Colação filológica integral homologada | **0/512** | **0,00%** | ░░░░░░░░░░░░░░░░░░░░ |
| Auditoria atômica concluída | **0/512** | **0,00%** | ░░░░░░░░░░░░░░░░░░░░ |

## Evidências e limites exatos

- Fonte primária: PDF Thayer (parte 1, Α–Ι), página impressa 1. Auxiliares explicitamente distintos: https://en.wikisource.org/wiki/Page:A_Greek_English_Lexicon_of_the_New_Testament.djvu/25 e https://biblehub.com/thayers/1.htm .
- Testes: tests/thayer-browser-audit.mjs e .github/workflows/thayer-browser-audit.yml .
- Workflow PASS em GitHub Actions, execução **38205220873**, job **114667101048**, commit testado **edf5239bd35c57baa1d8435f7c9e85ac7a63d02d**: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38205220873 . Log confirma rows=512, cards=512, validatedLinks=15, clickOpened=512, keyboardOpened=512.
- Exercícios visuais reais por Playwright de pesquisa/filtro/clique/Enter nos lemas ἀγαθός, ἀγγέλλω e Ἀαρών; popup por foco em ἀγγέλλω. As 512 rotas adicionais foram exercitadas por eventos DOM sintéticos, sem certificação exaustiva de 512 popups, responsividade ou acessibilidade.
- 15 URLs suplementares foram verificadas quanto ao padrão de endereço no DOM; NÃO se declarou que seus destinos HTTP ou respectivas variantes textuais foram individualmente certificados nesta execução.
- As primeiras duas execuções falharam por erros do teste: confusão entre URL de léxico e URL de versículo; tentativa de acionar select nativo invisível atrás do combobox. A terceira confirmou amostras; a quarta confirmou as 512 rotas.
- PR #105 efetivamente mesclado: https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/105 . Nenhum arquivo de outro léxico alterado e nenhum commit em main.

## Matriz individual e backlog

- auditorias/thayer-2026-10-12-matriz-atomica-512.json — 512 estados e evidências individuais.
- auditorias/thayer-2026-10-12-matriz-atomica-512.csv — inventário por verbete, 512 linhas.
- Todos permanecem BLOQUEADA para homologação atômica: exige-se o cotejo completo de cada artigo de Thayer, suas correções completas, páginas, bibliografia e variantes, verificações restantes de links e acessibilidade e integração final documentada.

**Próximo artigo para incorporação regular:** ἀντιπαρέρχομαι (G492). Esta sequência não constitui substituto da auditoria dos 512 verbetes já publicados.

**Conclusão:** estrutura e interação DOM verificadas na extensão descrita; revisão documental dirigida parcial; **homologação completa não alcançada**.
