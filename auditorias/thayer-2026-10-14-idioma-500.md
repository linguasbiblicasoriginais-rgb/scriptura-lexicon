# THAYER — Auditoria do idioma de apresentação (14/10/2026)

## Escopo efetivamente verificado
- Branch: `chat-gpt-thayer`; ponto inicial: `3d2d8497fd783ccff421f0b75ea1699860efe25c`.
- Todos os **46 módulos** de apresentação THAYER foram consultados na branch remota.
- Contagem: **500 cartões `entry-card`**, cada um com seção de tradução/análise em português.
- Problema real: **443 parágrafos de OCR inglês eram inseridos nos cartões e ficavam visíveis**. Os outros 57 cartões não continham parágrafo desse formato. Identificação pelo elemento `<p class="entry-text" style="white-space:pre-wrap">…</p>`.
- Este é um inventário técnico da interface, não uma prova de correção exaustiva das traduções.

## Correção aplicada
`lexicons/thayer-portugues-ui.js` é executado depois de todos os módulos THAYER e antes de `script.js`. Remove da string de cartões apenas os 443 parágrafos OCR, sem eliminar parágrafos de tradução portuguesa, notas, formas gregas, referências ou metadados. O inglês da fonte permanece nos documentos `thayer-source-facsimile-*.json` para rastreabilidade. A checagem de contagem usa uma linha de base mínima (500/443): acusa erro em caso de regressão; lotes futuros devem ser auditados separadamente. Um erro JavaScript neste módulo não impede automaticamente a execução dos demais scripts do documento.

## Duas garantias diferentes
1. **Idioma da interface:** a correção remove os **443 blocos de OCR inglês conhecidos**. O texto de acepções em português permanece, assim como nomes, fórmulas originais e títulos bibliográficos.
2. **Integralidade de cada tradução:** **NÃO CERTIFICADA.** Os 500 registros incluem traduções analíticas, resumos e materiais provisórios. Não se verificou cada linha do original inglês contra cada linha portuguesa, nem a totalidade das remissões e variantes. Portanto, **não** afirmar «500 verbetes completamente traduzidos». Uma revisão filológica integral, artigo por artigo, permanece necessária.

## Restrições
- O verificador não traduz automaticamente trechos que ainda estejam ausentes.
- Um teste por padrão de OCR não atesta ausência universal de qualquer expressão em inglês em citações bibliográficas ou remissões.
- A presença de texto português não significa correspondência integral entre a fonte e a tradução.
- Nenhum outro léxico deve ser alterado. Não abrir PR, mesclar, homologar ou escrever em `main` no escopo desta rotina.

## Verificação estática pós-correção — 500 cartões reais

A regra exata de exclusão do módulo `lexicons/thayer-portugues-ui.js` foi aplicada, em simulação determinística, ao HTML decodificado dos **46 módulos** THAYER consultados no GitHub. Resultados:

| IDs | Cartões preservados | Parágrafos OCR removidos | Parágrafos OCR restantes |
| --- | ---: | ---: | ---: |
| 0001–0169 | 169 | 169 | 0 |
| 0170–0350 | 181 | 181 | 0 |
| 0351–0500 | 150 | 93 | 0 |
| **TOTAL** | **500** | **443** | **0** |

Em todos os 500 cartões foi localizada uma seção contendo tradução ou exposição lexical em português. Nenhum dos 500 cartões foi eliminado pela transformação. **Critério precisamente verificado:** ausência de parágrafos de OCR inglês daquele formato após o filtro. **Critérios não verificados:** inexistência absoluta de toda palavra inglesa incidental (por exemplo, títulos bibliográficos), teste do DOM no navegador e tradução integral e fiel de todos os artigos. Não transformar o teste sintático de idioma em homologação filológica.
