# BDB-H/PT — correção de bloqueio pós-merge, ordinais 482–483

Data: 17/11/2026. A implantação do HEAD integrado `6f52ae1ca123d54f98a6b2d19cb5bb383ed2c29b`, tentativa Vercel `dpl_DuwGkicsFQMb5FhbL7DD6uCXYix4`, falhou com BUILD_UTILS_SPAWN_1 após lançamento de `BDB-H/PT: referência sem mapeamento certificado: I Samuel 4-5`.

## Diagnóstico exaustivo dos novos links
- Varredura de todas as referências clicáveis da apresentação portuguesa 482–500 encontrou três intervalos de capítulos não mapeáveis pelo leitor, todos no ordinal 482: `I Samuel 4-5`, `II Samuel 6-7`, `Psalms 42-86`. Não converter a âncora para o primeiro versículo, nem inventar URL para o intervalo.
- O ordinal 483 contém uma remissão lexical divergente: texto visível `יְדִידְיָה`, `data-ref=BDB, יְדָיָה`. Destino não certificado; suspensão segura, sem supor que o alvo deva ser substituído.
- Fonte inglesa módulo 005 blob `38ffe6df0040a2ab08f08aaa86d34cf123aa1613` permanece inteiramente inalterada.

## Remissões suspensas somente na tradução
| Ordinal | data-ref original | Texto visível PT | Situação |
|---:|---|---|---|
| 482 | `I Samuel 4-5` | 1Sm 4–5 | intervalo de capítulos não roteável |
| 482 | `II Samuel 6-7` | 2Sm 6–7 | intervalo de capítulos não roteável |
| 482 | `Psalms 42-86` | Sl 42–86 | intervalo de capítulos não roteável |
| 483 | `BDB, יְדָיָה` | יְדִידְיָה | lema visível diverge do destino digital |

Cada âncora foi substituída por `span role=note` não clicável, preservando o valor original de `data-ref` e `href` no atributo `data-bdbh-source-href`. Os quatro tokens continuam visíveis, com sigla portuguesa para os três intervalos; todos os demais links permanecem com seus dados e a infraestrutura global de popup. Não alterar origem inglesa nem reinterpretar os intervalos históricos.

## Regressão estática
- **OK**: nenhuma alteração em qualquer registro 401–481 ou 484–500; em 482/483 somente quatro substituições de âncoras por `span` rastreáveis.
- **OK**: sequência de `data-ref` documental anterior/posterior inalterada; todos os hebraísmos originais permanecem.
- **OK**: zero `data-ref` de link bíblico novo com sintaxe não aceita pelo formatador; nenhuma rota relativa Sefaria adicionada.
- **OK**: checkpoint 500/11015, próximo 501, `audit_completed=0`, `audit_status=BLOQUEADA`. Histórico 351, 395/397, 430 e referências suspensas anteriores preservado.
- **NÃO TESTADOS**: fac-símile, navegador real, teclado, toque e acessibilidade. Novo build Vercel será verificado independentemente após integração.
