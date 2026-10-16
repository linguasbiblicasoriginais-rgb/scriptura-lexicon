# THAYER — correção localizada de ressalvas editoriais confirmadas

Data: 11/10/2026. Branch de origem: `chat-gpt-thayer`. HEAD de partida: `1572a5c7dd3244d6cc5eda32acadc068c5ff5a5d`.

## Correções em código

| ID | Forma de pesquisa mantida | Cabeçalho original de Thayer | Pág. | Tipo de correção |
|---|---|---|---|---|
| `0040` | ἅγιον | **ἅγιος** | 6–7 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como neutro substantivado e não artigo independente |
| `0139` | αἱρέομαι | **αἱρέω** | 16 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como forma média e não artigo independente |
| `0150` | αἰσχρόν | **αἰσχρός** | 17 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como neutro substantivado e não artigo independente |
| `0154` | αἰσχύνομαι | **αἰσχύνω** | 17 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como forma média/passiva e não artigo independente |
| `0197` | ἀκριβέστατος | **ἀκριβής** | 23–24 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como superlativo e não artigo independente |
| `0198` | ἀκριβέστερον | **ἀκριβής** | 23–24 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como comparativo adverbial e não artigo independente |
| `0207` | ἄκρον | **ἄκρος** | 24 | Adicionada anotação de lematização ao cartão e ao `data-search`, identificando a forma como neutro substantivado e não artigo independente |

- **`entry-thayer-0017` (ἀγαθός):** remova a duplicação textual da numeração em **sete parágrafos** da seção de acepções; apenas a segunda ocorrência do número é suprimida, sem reescrever as definições.
- **`entry-aaron-thayer` (Ἀαρών):** o índice `data-search` da linha estática passa a incluir **Lc 1.5; At 7.40; Hb 5.4; Hb 7.11; Hb 9.4** e a referência bibliográfica a Fílon. Nenhum link original foi substituído.
- **Contagem:** 500 cartões THAYER mantidos (499 dinâmicos, 1 histórico); IDs e `data-target` invariáveis.

## Distinção de camadas e limitações

As sete notas novas estão expressamente rotuladas como **análise editorial do Scriptura Lexicon**, não transcrição/tradução de Thayer. O leitor continua podendo procurar as formas secundárias. O documento `auditorias/thayer-2026-10-11-triagem-de-12-candidatos.md` contém **12 candidatos ainda não homologados**; não foram convertidos arbitrariamente em artigos.

**Ainda não executados:** homologação palavra por palavra das acepções, da morfologia e das referências de todos os 500 registros; conversão de referências textuais em links confirmados; paginação individual de todos os artigos verificada no fac-símile; testes reais em navegador, acessibilidade e URLs externas. Essas atividades constituem trabalho filológico e funcional adicional — e não podem ser contabilizadas como resolvidas pelo presente commit.

Os relatórios antigos foram preservados por rastreabilidade; a correção posterior supera os apontamentos locais quanto ao código, não apaga a ocorrência histórica.
