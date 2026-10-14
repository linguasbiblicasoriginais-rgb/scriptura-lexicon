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
