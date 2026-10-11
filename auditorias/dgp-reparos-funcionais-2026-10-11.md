# DGP — resolução conservadora de defeitos funcionais e proveniência (11/10/2026)

## Fonte, escopo e invariantes

- Branch de publicação: `chat-gpt-correcoes`; branch lexical de referência: `chat-gpt-dgp` (HEAD `59d497c25c0a9bbc0a15a2d49d6586e5d6892500`).
- Fonte primária fixada: `aniseferreira/Grc-Por-DigDict`, `arquivos_xml/01_Alfa.txt.xml`, commit `deb54b426ead447d01ced7534736f3e77be7015b`, blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`.
- Universo lexical do ramo de origem: 3.300 verbetes. A branch de correções mantém módulos até 076 (2.880), sem os módulos 077–081. Não copiar nem simular 420 novos registros numa correção.

## Defeitos reparados (código, sujeitos à execução no navegador)

1. **Busca parcial**. O `data-search` histórico de lotes do DGP indexa lema e glosa abreviada. `dgp-format.js` passa a acrescentar o texto integral da seção **Definição do DGP** ao índice da linha `search-row` correspondente pelo `data-target`, sem modificar a glosa nem as entradas da fonte. Restringe-se a `[data-source="DGP"]`; evita duplicação ao repetir o formatador.
2. **`ἀλείφω` (#1627)**. O XML contém literalmente `(fut.ἀλείψω, ...)`. `dgp.js` recebe a expansão segura `fut.` = **futuro (tempo verbal)**; a formatação insere, apenas no DOM e apenas quando falta, o espaço entre o tooltip `fut.` e a forma grega. A leitura do XML e os dados JS continuam intactos.
3. **Lemas inferidos #2311 `ἀμφί` e #2483 `ἀνά`**. A fonte original começa esses dois `entryFree` com `<def>`; o início da definição fornece a forma grega, não um campo de lema. Uma seção editorial marcada como GDHAGP explicita o procedimento de recuperação. A definição DGP continua inalterada e é usada para a busca.

## Auditorias e limites

- Colação prévia de 3.300 registros: 3.300 `search-row` e 3.300 `entry-card`, sem duplicações/orfandades, registrada em `auditorias/dgp-2026-10-11-integral-3300.md`.
- Anomalias fonte/editor previamente corrigidas no ramo de correções: #95, #124 e #150; índices 61–140 já normalizados no ramo de correções. **Não** reverter essas correções.
- Números de acepção duplicados, grafias tradicionais, hífens suaves e siglas de identificação incerta que constam no XML permanecem como testemunho: não são `bugs` aptos a correção silenciosa.
- Novos módulos DGP 077–081 publicados apenas em `chat-gpt-dgp`, pendentes de reconciliação para `chat-gpt-commits`. A integração é etapa separada por PR, não publicada por esta correção.
- Código estático: sintaxe das alterações delimitada pelos pontos de extensão já usados (`formatCards`, `bibliographicTerms`); o escopo da seleção DGP e o pareamento de IDs foram verificados no fonte. **Ainda não executados:** navegador real, interações de tooltip, teclado, tema, inspeção do DOM pós-renderização, revisão autor por autor, URL externa e reconciliação de branches. Não declarar homologação global.

## Critérios de aceitação para o integrador/testador

- Carregar DGP completo (3.300) e validar 3.300 pares únicos de linha/cartão no DOM, sem órfãos.
- Buscar palavras presentes apenas no corpo da definição de um verbete dos lotes 61–1630, confirmar correspondência e abrir o cartão correto.
- Abrir `ἀλείφω` e confirmar tooltip `fut.` com significado `futuro (tempo verbal)` e espaço visual antes de `ἀλείψω`.
- Abrir `ἀμφί` e `ἀνά` e confirmar a nota editorial separada da definição DGP.
- Confirmar nenhuma mudança de quantidade no DGP, nem nos índices das demais fontes; preservar `main`.
