# DGP — homologação textual e estrutural (3.300/3.300), 11/10/2026

## Resultado e fundamento

**APROVADA NO ESCOPO TEXTUAL E ESTRUTURAL DEFINIDO: 3.300/3.300 (100%)**. Combinam-se a colação estática prévia da fonte com os dados de todos os ordinais e a execução real de testes funcionais em Chromium. A etapa filológica e a integração permanecem independentes.

- Fonte primária: XML `arquivos_xml/01_Alfa.txt.xml`, commit `deb54b426ead447d01ced7534736f3e77be7015b`, blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`.
- HEAD lexical DGP: `59d497c25c0a9bbc0a15a2d49d6586e5d6892500`; são 3.300 registros incorporados na origem.
- Auditoria estática canônica: `auditorias/dgp-2026-10-11-integral-3300.md` e JSON anexo. O contraste estático identificou 3.300 linhas/cartões, zero duplicados e tratou especificamente os casos 95, 124, 150, 2311, 2483 e diferenças editoriais atribuídas.
- Código de testes: `tests/test_dgp_browser.py`, `on: push` em `.github/workflows/dgp-browser-audit.yml`.
- Commit TESTADO: `7381492379f4d7141e9458472c336eba00bf2c1a`.
- **Execução real GitHub Actions #38174680134: SUCCESS**, em Ubuntu + Chromium headless + Playwright; [logs públicos completos](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38174680134).

## Evidência funcional: dois cenários

| Cenário | Linhas DGP | Cartões DGP | Índices com a definição principal completa | Alvos únicos e pareados | Resultado |
|---|---:|---:|---:|---:|---|
| `index.html` atual de `chat-gpt-correcoes` | 2.880 | 2.880 | 2.880 | 2.880 | APROVADO |
| `index.dgp-candidate.html` gerado apenas no runner | 3.300 | 3.300 | 3.300 | 3.300 | APROVADO |

O candidato temporário copia para o diretório de trabalho do CI, a partir de `chat-gpt-dgp`, os módulos `dgp-batch-077.js` a `dgp-batch-081.js`, inserindo as referências **somente** no HTML descartável do runner. Não há commit, PR ou merge desses 420 verbetes nesta auditoria.

### Verificações realizadas por Chromium (em ambos os cenários)

1. Atributos estruturais, unicidade dos destinos, existência do cartão correspondente, texto igual de lema nos dois pontos e presença da definição em cada cartão.
2. O atributo `data-search` contém a definição principal completa de **cada** entrada; total de índices processados igual à quantidade de cartões, sem cartões ausentes.
3. Correções comprovadas de contato sigla/forma grega: `aor.ἤϊξα` (#1114), `fut.ἀλείψω` (#1627), `aor.ἠλήθευσα` (#1683), `aor.ἠμύστισα` (#2278), `méd.ἀμφαφάομαι-ῶμαι` (#2289). Exatamente um popup com espaço segue cada sigla nestes cinco registros.
4. Uma nota editorial explicitamente separada da fonte em #2311, #2483, #434 e #543. Não há emenda silenciosa da numeração ou de cabeçalhos inferidos.
5. Pesquisa pelo corpo `ser ginasta`, resultado #1627 e abertura do verbete pelo teclado **Enter**.
6. Popup `fut.` com texto `futuro (tempo verbal)`, abertura ao receber foco e fechamento quando o foco vai para a pesquisa.
7. Fonte DGP presente no seletor, alternância dos temas claro/escuro pelo menu visível, pesquisa visível em viewport 375×812 e nenhuma exceção JavaScript durante a execução.

Trechos explícitos dos logs da execução bem-sucedida:

```text
APROVADO: index.html, 2880 pares, 2880 indices completos, 5 popups, 4 notas, pesquisa/teclado/temas/mobile
APROVADO: index.dgp-candidate.html, 3300 pares, 3300 indices completos, 5 popups, 4 notas, pesquisa/teclado/temas/mobile
```

## Limites e próximos processos independentes

- **Integração:** `chat-gpt-commits` ainda carrega os módulos até o lote 076 e, portanto, 2.880/3.300. O teste do candidato 3.300 NÃO equivale a merge dos lotes 077–081. A integração necessita reconciliação e PR conforme protocolo.
- **Filologia:** não homologa individualmente traduções, atribuições de autores, acentuação discrepante na fonte primária ou testemunhos gregos. Essas tarefas mantêm a própria rastreabilidade.
- **Acessibilidade e dispositivos:** o teste cobre fluxo de foco, Enter, temas e presença do campo de pesquisa em 375×812, mas não constitui auditoria WCAG completa, inspeção de contraste com instrumento de medição nem ensaio de todos os dispositivos reais.
- **Popups:** os cinco casos de regressão comprovados foram testados; não foram manualmente exercitados todos os popups bibliográficos de todos os verbetes. A auditoria estrutural atesta integridade dos registros e dos critérios definidos, não perfeição universal da interface.
- **Fidelidade:** nenhuma modificação no XML primário e nenhum novo registro incorporado por esta auditoria. Os relatórios históricos, inclusive ressalvas de expansões autorais, continuam válidos.

## Fecho

**Auditoria textual e estrutural DGP: ✓ 3.300/3.300 (100%, estática + navegador; 3.300 no candidato completo).**

**Integração DGP: ◐ 2.880/3.300 (87,27%; ainda 420).**

**Auditoria filológica: processo separado; não se infere homologação de traduções e citações a partir destes testes.**
