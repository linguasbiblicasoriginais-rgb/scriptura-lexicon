# BDB-H/PT — Correção editorial e funcional dos 60 primeiros verbetes

**Data:** 15/11/2026  
**Escopo:** ordinais 1–60 (0 traduções novas).  
**Branch de origem:** `chat-gpt-bdbh-pt`  
**HEAD inicial:** `70827fd686a77884d103ab7d29b884d6586bcb27`  
**Fonte original (imutável):** `02bfca678ac8b6f778306aaabd3f88fe0addd926` (`lexicons/bdbh-batch-001.js`).

## Diagnóstico

A camada portuguesa estava INSERIDA antes da seção inglesa, deixando a
transcrição inglesa original exibida mesmo nos verbetes traduzidos.
As referências usavam URLs relativas importadas da Sefaria, por exemplo
/Nehemiah.9.7, que o Vercel resolvia como rota inexistente (404).
As abreviações eram inglesas (1 Ch, 1 S) e separavam capítulo/versículo por
dois-pontos. O hebraico não possuía classe, fonte ou popup apropriados.
Os links não possuíam os estados de cor comuns aos outros léxicos.

## Correções canônicas

1. **Substituir, não sobrepor**, o bloco inglês de cada um dos 60 cartões
   pela seção portuguesa. A fonte inglesa permanece intacta em `sourceRecords`.
2. Normalizar referências bíblicas como `1Cr 1.2`, `Gn 11.26`,
   `Ne 9.7`, sempre com ponto e sigla compacta.
3. Converter destinos para `#escrituras/UXLC/LIVRO.CAP.VERSO`;
   Macabeus vai para LXX com ressalva da versão de Kahana.
4. Remissões lexicais BDB-H direcionadas à pesquisa da fonte BDB no próprio site.
5. Instalar popups em hebraico, siríaco, links bíblicos e remissões lexicais,
   sem atribuir significado inventado a tokens isolados.
6. Ampliar a fonte Noto Serif Hebrew e separar sinais de pontuação no layout.
7. Reusar as variáveis globais `--reference` e `--reference-hover`,
   inclusive no estado :visited, sem alterar outros léxicos.
8. Fixar regra de continuidade em `regras/Rbdbh-pt.txt` e
   prompt em `prompts/BDBH_PT_PROMPT_CANONICO_2026-11-15.md`.

## Prova estática (sobre TODOS os artigos)

- Registros traduzidos presentes: **60/60**.
- Cada um tem exatamente uma seção portuguesa, nenhuma seção inglesa visível.
- BDB original preservou os **100** `sourceRecords` do primeiro módulo,
  com igualdade exata do JSON e SHA da fonte.
- Remissões do HTML português: **840 `data-ref` mantidos na ordem**,
  sem perda ou duplicação, e **840 âncoras** com destinos internos.
- Destas, **802** levam a leitores de Escrituras (incluindo um caso
  de 1 Macabeus no leitor LXX com aviso de versão) e **38** à pesquisa BDB.
- **802 popups** de abreviações e **393 gatilhos de popup hebraico**,
  com direção de escrita e atributos de acessibilidade.
- Todos os 60 cartões conservam suas linhas `search-row` e IDs.
- **Nenhum** dos 60 objetos de tradução ou das formas hebraicas originais
  foi retraduzido ou alterado; mudanças exclusivas da apresentação.
- Testes com motor JS (VM) da composição dos módulos: executados.
- **Teste dinâmico em navegador/DOM, navegação real e acessibilidade:** NÃO EXECUTADO.
- **Fac-símile impresso:** NÃO COTEJADO.
- **Auditoria atômica:** permanece **0**.

## Progresso

Tradução integral digital: **60 / 11.015 = 0,5447% (0,54%)**.
Correção editorial da apresentação: **60 / 60**.
Próximo ordinal para tradução: **61 — אָבַל**.

## Publicação

A correção deve ser integrada de `chat-gpt-bdbh-pt` em
`chat-gpt-commits`, sem alterar `main`, e publicada no projeto
Vercel `scriptura-lexicon` após validar HEAD e status READY.
O presente relatório não presume o SHA final do merge ou do deploy.
