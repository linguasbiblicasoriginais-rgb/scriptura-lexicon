# UBS5 — padrão canônico de títulos e referências clicáveis

**Aplicação:** Leitor bíblico do Scriptura Lexicon, coleção UBS5, de Mateus a Apocalipse.  
**Data de adoção:** 09/11/2026.  
**Branch de trabalho:** `chat-gpt-escrituras` (sem merge automático).

## Princípio editorial
A transcrição grega da UBS5 permanece **inalterada** e **independente** da NA28. Títulos, subtítulos, referências paralelas e notas inglesas são material **paratextual**; sua tradução para o português brasileiro ocorre exclusivamente na camada editorial, nunca dentro do texto de versículos.

### Contrato dos módulos de capítulos
Manter duas estruturas independentes:
- `window.ScripturaScriptureTexts.UBS5[BOOK][CHAPTER]` — versículos gregos, somente os versículos.
- `window.ScripturaScriptureHeadings.UBS5[BOOK][CHAPTER]` — `[{beforeVerse, bookTitle?, title?, parallel?}]`, com títulos e referências em **português**.

O campo `parallel` pode incluir uma ou várias remissões, separadas por ponto e vírgula; exemplos: `(Lc 3.23–38)`, `(Mc 1.1–8; Lc 3.1–18)`. Aceitar referências originais em inglês ou português no leitor, mas **publicar os novos verbetes editoriais traduzidos**. Converter `See` em `Ver`; `Cf.` em `Cf.`; livros ingleses em abreviaturas portuguesas; manter exatamente os números e intervalos originais.

### Hierarquia visual
1. **Título da passagem** — um cabeçalho distinto, tipografia serifada, fundo editorial discreto, borda lateral e rótulo explícito `Título editorial · UBS5 (não integra o texto bíblico)`. Não misturar o título aos versículos gregos nem acrescentar numeração bíblica ao paratexto.
2. **Referências paralelas** — abaixo do título, em corpo menor e cor secundária, com sublinhado pontilhado e foco acessível. A função de remissão é transmitida por `Referências:` e cada passagem por botão independente.
3. **Texto grego** — segue a tipografia e os blocos de leitura normais, sem modificação da fonte.

### Interação
- Clique/ativação por teclado numa referência abre o painel de leitura paralela.
- **Desktop:** duas colunas no espaço do leitor, na proporção **2:1** (⅔ à esquerda para a passagem principal, ⅓ à direita para a referência).
- **Telas estreitas (até 850 px):** empilhamento responsivo sem corte do texto nem barra horizontal de rolagem.
- O painel direito informa edição, livro, capítulo e faixa exata de versículos; mantém as quebras de linha internas aos versículos.
- Fechar por botão `×` ou tecla `Esc`, restaurando o foco à referência. Mudança de livro, capítulo, edição ou saída do leitor fecha o painel, sem alterar o endereço principal por um mero clique de remissão.
- Aberturas consecutivas cancelam respostas assíncronas anteriores; a edição principal e o versículo selecionado não são substituídos.
- **Referências do NT:** mostrar o texto da **UBS5**, carregado por demanda quando já incorporado.
- **Referências do AT:** a UBS5 não contém Antigo Testamento; quando existente, consultar a **LXX**, sempre explicitamente identificada como edição diferente. O leitor preserva a numeração recebida; diferenças de versificação, em especial em Salmos, requerem cautela e colação editorial.
- **Texto ausente:** apresentar aviso transparente de indisponibilidade, sem reutilizar silenciosamente a NA28 ou inventar versículos. Manter opção de nova tentativa por novo clique.

### Arquivos
- `scriptures/ubs5-references.js` — interpretação de remissões em inglês/português, identificação de livro/edição e normalização do rótulo.
- `scriptures/reader.js` — renderização semântica dos títulos e painel lateral, estado, carregamento e controles.
- `scriptures/reader.css` — hierarquia editorial e grade responsiva 2:1.
- `index.html` — inclusão do analisador antes do leitor.
- `scriptures/texts/ubs5-matthew-1.js` — amostra existente: `The Birth of Jesus Christ` traduzido para `O nascimento de Jesus Cristo`; `Lk 2.1‑7` para `Lc 2.1–7`. O texto grego deve permanecer idêntico ao blob anterior.

### Testes e pendências
- Verificar sintaxe JavaScript do analisador, do leitor e do módulo UBS5 de Mateus 1.
- Verificar parser para `Lc 3.23–38`, `Lk 2.1‑7`, `Mk 1:1–8`, `1 Cor 13.4–7`, `Ps 23.1–6`, `Is 7.14`, `Rev 22.1–21`, listas de referências e intervalo entre capítulos.
- Verificar disponibilidade e manifesto antes do carregamento e indicar claramente a edição do texto no painel direito.
- Inspeção visual e teste funcional em navegador real (desktop, tablet, celular, navegação por teclado, tema claro/escuro) **ainda necessários**. Não alegar que a interface foi testada visualmente apenas por compilar o código.
- Teste filológico de cada novo livro deverá cotejar separadamente fonte grega, tradução dos títulos e referências editoriais.
