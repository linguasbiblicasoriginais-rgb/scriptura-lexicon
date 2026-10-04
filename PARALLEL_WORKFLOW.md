# Trabalho paralelo por fonte

Este repositório está preparado para que BDAG e LEH sejam desenvolvidos em paralelo sem disputar os mesmos blocos de conteúdo.

## Branches

- `chat-gpt-commits`: **integração**. Não usar como branch de produção diária de uma fonte enquanto BDAG e LEH estiverem rodando em paralelo.
- `chat-gpt-bdag`: trabalho exclusivo do BDAG.
- `chat-gpt-leh`: trabalho exclusivo de Lust–Eynikel–Hauspie (LEH).
- `main`: não é alterada automaticamente por este fluxo.

As três branches de trabalho foram alinhadas no commit-base comum desta refatoração antes de divergirem.

## Arquivos de propriedade de cada fonte

### BDAG

Durante o trabalho normal na branch `chat-gpt-bdag`, alterar conteúdo lexicográfico somente em:

- `lexicons/bdag.js`

Novos verbetes devem acrescentar:
- uma `search-row` em `rowsHtml`;
- um `entry-card` correspondente em `cardsHtml`;
- quando necessário, abreviaturas seguras em `bibliographicTerms`.

Não editar `lexicons/leh.js`.

### LEH

Durante o trabalho normal na branch `chat-gpt-leh`, alterar conteúdo lexicográfico somente em:

- `lexicons/leh.js`

Novos verbetes devem acrescentar:
- uma `search-row` em `rowsHtml`;
- um `entry-card` correspondente em `cardsHtml`;
- quando necessário, abreviaturas seguras em `bibliographicTerms`.

Não editar `lexicons/bdag.js`.

## Infraestrutura compartilhada

Os arquivos abaixo são compartilhados:

- `index.html`
- `script.js`
- `style.css`

Durante execuções simultâneas, as conversas BDAG e LEH **não devem modificá-los**.

Se surgir uma necessidade real de alterar infraestrutura:
1. interromper o trabalho paralelo;
2. integrar o estado atual das duas fontes;
3. fazer a alteração em `chat-gpt-commits`;
4. atualizar as duas branches de fonte para o novo commit-base comum;
5. somente então retomar o paralelismo.

## Popups bibliográficos

`script.js` mantém definições comuns/legadas.

Cada fonte possui também seu próprio array `bibliographicTerms`.

Ao enriquecer um cartão, o sistema:
1. lê as definições comuns;
2. identifica a fonte do `entry-card`;
3. adiciona as definições daquela fonte;
4. se a mesma chave existir nos dois lugares, a definição específica da fonte prevalece.

Isso impede que uma sigla idêntica usada de modo diferente no BDAG e no LEH cause harmonização indevida.

## Integração

Quando for desejado integrar os trabalhos:

1. levar `chat-gpt-bdag` para `chat-gpt-commits`;
2. levar `chat-gpt-leh` para `chat-gpt-commits`;
3. executar auditoria global;
4. somente depois promover o estado integrado conforme o fluxo do projeto.

Como cada branch modifica normalmente um arquivo diferente, os merges devem ser simples e, na maior parte dos casos, automáticos.

## Auditoria obrigatória por fonte

Antes de cada commit lexicográfico:

- quantidade esperada de `search-row`;
- quantidade esperada de `entry-card`;
- cada `data-target` corresponde a exatamente um `id`;
- nenhum `id` duplicado;
- nenhum `data-target` duplicado;
- nenhuma linha órfã;
- nenhum cartão órfão;
- nenhuma ocorrência de `beta.perseus.tufts.edu`;
- nenhuma expansão bibliográfica conjectural.

A fidelidade à fonte continua tendo prioridade sobre o tamanho do lote.
