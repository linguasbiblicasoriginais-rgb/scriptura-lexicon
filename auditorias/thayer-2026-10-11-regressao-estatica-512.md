# THAYER — regressão estática de integridade e cobertura editorial (512 registros)

**Data:** 11/10/2026. **Escopo:** 14 módulos JavaScript THAYER (`thayer.js`, lotes 002–006e e suplemento 007), mais registro histórico Ἀαρών em `index.html`. O teste foi executado sobre os módulos publicados na branch consolidada após PR #101 (HEAD-base `bdbfc33c765e80f1739c76d8c8f4ecd33a2c561c`).

## Contagem e integridade

| Verificação | Resultado |
|---|---:|
| Linhas de busca modulares | **511/511** |
| Cartões modulares correspondentes | **511/511** |
| Registro estático Ἀαρών | **1** |
| **Total geral** | **512** |
| IDs próprios por módulo e correspondência alvo → cartão | **511/511** |
| Fragmentos com tag desequilibrada no parser estático conservador | **0** |
| Atributos `data-tooltip-label` com HTML embutido | **0** |
| Novo módulo suplementar: linhas/cartões com quatro seções | **12/12** |
| Presença do suplemento antes de `script.js` | **OK** |
| Cinco referências de Ἀαρών no `data-search` | **OK** |

## Levantamento de rastreabilidade e qualidade — observações, não homologações

Os seguintes indicadores foram **extraídos mecanicamente** dos 511 cartões dinâmicos usando os mesmos padrões em todos os 14 módulos:

| Indicador detectável por texto do HTML | Contagem |
|---|---:|
| Cartões com algum hiperlink | **109/511** |
| Cartões com hiperlink na seção intitulada `Referências...` | **0/511** |
| Cartões cujo campo `Fonte` contém padrão reconhecido de menção numérica de página | **19/511** |
| Descrições da seção de acepções com menos de 120 caracteres, após remoção de tags | **264/511** |
| Descrições da seção de acepções com caracteres gregos | **65/511** |
| Descrições da seção de acepções sem caracteres gregos | **446/511** |

**Limitações dos contadores:** `<120 caracteres` não comprova erro de definição: alguns artigos-fonte são curtos. Da mesma forma, ausência de grego no desenvolvimento não comprova imprecisão; significa que não há expressão grega diretamente visível naquela seção. Os **19 padrões de página** não equivalem a 19 páginas homologadas: há diferenças de formatação entre os módulos e referências a faixas; a paginação integral exige comparação independente com o impresso. Hiperlinks em outras seções não tornam referências bíblicas clicáveis. O cartão estático de Ἀαρών tem **6 hyperlinks** e não foi incluído nos denominadores dinâmicos.

## Conclusão da auditoria

**Integridade estática do registro declarativo: aprovada nos testes empregados, sem novos defeitos detectados.**

**Revisão filológica integral: PENDENTE.** A chegada a 512 não constitui prova de que 512 textos portugueses correspondam em todas as divisões semânticas, morfológicas, sintáticas e de variantes aos artigos de Thayer. O suplemento de 12 foi cotejado para existência, estatuto, sentido básico e aparato essencial, mas não para transcrição integral de toda a bibliografia da fonte. É inadequado declarar 512/512 traduções homologadas.

**Testes de navegador:** não se executaram carregamento da aplicação em ambiente real, inspeção da árvore DOM, pesquisa interativa por forma/versículo, operação de tooltips, acessibilidade de teclado e checagem HTTP de todos os links. A contagem `0` de desequilíbrio HTML refere-se a um parser estático simples, não a esses ensaios.

## Backlog verificável

1. **Colação filológica dos 512:** página real, transcrição de cada acepção, construções, flexões, variantes, siglas textuais e referências; marcar estado por ficha e não aprovar globalmente sem cobertura completa.
2. **Referências navegáveis:** ligar somente citações cujos livros/capítulos/versículos forem individualmente normalizados, sem inventar URLs; as referências em 511 cartões dinâmicos não têm links na seção própria.
3. **Paginação:** criar metadado de página impresso somente após confronto com o fac-símile; não converter automaticamente páginas do inventário auxiliar em homologação.
4. **Teste real:** abrir a versão publicada, pesquisar todos os 512 IDs, verificar tooltips, links, âncoras e acessibilidade.
5. **Próxima incorporação regular:** ἀντιπαρέρχομαι (G492). Não a confundir com o suplemento retrospectivo 0500–0511.

**Rastreabilidade:** os relatórios das cinco rodadas de 100, a auditoria integral anterior, a errata de paginação e o relatório do suplemento foram preservados no repositório. O presente relatório atualiza o estado **estrutural**, não certifica todas as traduções.
