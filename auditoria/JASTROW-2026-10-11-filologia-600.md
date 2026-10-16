# JASTROW — auditoria filológica independente, triagem cumulativa de 600 registros
**Data:** 11/10/2026. **Situação:** TRIAGEM DOCUMENTADA; certificação filológica integral **NÃO CONCLUÍDA**.

## Fonte, escopo e imutabilidade
- Fonte: Marcus Jastrow, *A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature* (1903), XML do Sefaria-Data, commit fixo `947c1b91684df9f8b92f14cf0d281b5d4f29bfc7`.
- Branch lexical examinada: `chat-gpt-jastrow`, HEAD `e042fe9dc51389f86391532cfbb43b504719c974`. Esse HEAD é ancestral da integração `chat-gpt-commits` HEAD `a02d891f7282b62cf2d8c6e6467c4cd5dc750d26`, cujo manifesto já informa 600 integrados.
- Registros-fonte disponíveis: 600 (`A00000–A00599`) em 3 lotes JSON de 200. Entradas editoriais: 600. O léxico original é muito maior; este exame não cobre a obra inteira.
- Auditoria estrutural antecedente: GitHub Actions 38117209491, reportando 600 `search-row`, 600 `entry-card`, 600 IDs correspondentes, 176 termos explicativos de popup e 33 módulos; **não** é revisão filológica. No presente exame, 590 entradas editoriais estruturadas como objetos JSON (`A00010–A00599`) foram recuperadas de 26 módulos e confrontadas por ID, primeiro cabeçalho XML e características internas; 300 da primeira faixa e 290 da segunda. Os 10 registros iniciais estão no módulo-base e tiveram leitura dirigida, não conferência independente exaustiva palavra a palavra.
- Nenhuma alteração do XML original, dos lemas ou da redação lexical foi realizada por esta auditoria. `total_audited=0` permanece correto.

## Resultados da comparação independente
| Controle | Resultado | Interpretação |
|---|---:|---|
| Objetos editoriais JSON confrontados com XML | 590/590 | Presença e identidade verificadas, sem certificar tradução |
| Lema principal diferente após normalização conservadora, nos 590 | 0 | Igualdade do primeiro cabeçalho XML |
| Cabeçalhos alternativos sem reprodução textual integral detectável | 32 | **Sinais para revisão**, com possíveis falsos positivos em cabeçalhos compostos ou fragmentários do XML |
| Trechos gregos presentes no XML, ausentes como grafia exata no cartão | 2 registros | `A00238` e `A00362`: síntese portuguesa sem transcrição de todos os termos/citações gregas |
| Verbete com remissão editorial objetivamente ambígua/incorreta | 1 confirmado | `A00057`, referência a “verbete precedente”, embora o antecedente filológico seja `A00055` |
| Entradas com 2 ou mais elementos `sense` e síntese de menos de 35 palavras | 6 | Indicador de prioridade, **não** prova de perda de sentido |
| Divergências gráficas legadas do módulo-base | 2 | `A00006`, apóstrofo/geresh; `A00007`, cabeçalho editorial combinado; exigem tratamento documentado, não substituição automática |
| Revisões filológicas individualmente certificadas após exame exaustivo | 0 | Bloqueio de certificação; não elevar o checkpoint |

**Fila de revisão de cabeçalhos alternativos (32 IDs):** `A00012`, `A00016`, `A00018`, `A00031`, `A00051`, `A00054`, `A00056`, `A00057`, `A00077`, `A00111`, `A00156`, `A00161`, `A00190`, `A00202`, `A00243`, `A00247`, `A00271`, `A00278`, `A00282`, `A00284`, `A00286`, `A00353`, `A00370`, `A00446`, `A00449`, `A00466`, `A00490`, `A00501`, `A00592`, `A00593`, `A00597`, `A00598`.

As 32 ocorrências significam apenas que a forma completa de um segundo ou ulterior `head-word` não foi encontrada literalmente na concatenação lema + corpo do cartão, depois de normalização. Ex.: `A00592` contém a equivalência distribuída em segmentos distintos e `A00284` tem fragmentos estranhos `תוס,` e `…,` no XML; não classificá-los automaticamente como erros editoriais.

## Achados filológicos diretamente adjudicados
1. **A00057 — remissão inexata (erro confirmado).** A fonte traz `v. foreg. h.`, remissão ao vocábulo hebraico `A00055` (*אִיבּוּב אַבּוּב*), no qual se registra o emprego botânico *Eupatorium*. A redação do cartão diz “ver a denominação botânica no verbete precedente”; o precedente imediato do aplicativo é `A00056`, verbete aramaico da flauta, sem a identificação botânica. Substituição proposta, sem aplicá-la: “ver a acepção botânica de `אִיבּוּב אַבּוּב` (JASTROW `A00055`)”.
2. **A00446 — variantes onomasiológicas/gráficas do cabeçalho não explicitadas.** Fonte: `אֵדֶר` II, `אִדְרָא` II, `אֲדָרָא` I. Cartão publica apenas `אֵדֶר` como lema visível e trata os dois sentidos botânicos. Acepções estão representadas, mas as variantes originais merecem restituição documental, preservando numeração romana/homografia.
3. **A00597 — variantes fonográficas ausentes.** XML: `אַוותֶּנְטְיָא`, `אַוְתֶּ'` e `אַוְותֶּנְטְיָיה`. Cartão sintetiza sentidos e referências, mas não inclui as duas formas secundárias. São formas de cabeçalho, não simples comentários dispensáveis.
4. **A00012 — variante de prefixo omitida.** A fonte traz `אַב־` e `אֶבְ־`; o cartão explicita apenas a primeira como lema, enquanto trata o contraste entre os étimos gregos `αὐ-` e `εὐ-`. A ausência de `אֶבְ־` exige complementação.
5. **A00238 — erudição grega condensada.** XML menciona nominalmente `χρυσάνθεμον`, `χάλκη` e `κάλχη`. O cartão reduz a passagem a “termos gregos para plantas”; perde grafias importantes para verificação etimológica e botânica.
6. **A00362 — citação grega não preservada.** XML cita `παρὰ βασιλέως ὁ νόμος ἄγραφος`; o cartão conserva o étimo `ἄγραφος` e traduz/interpreta a passagem, mas não apresenta a citação grega. Deve-se conservar o original e separar glosa e comentário interpretativo.
7. **A00593 — forma secundária não transcrita por inteiro.** XML: `(אותיום) אֶוְתִּיֹוס`; a edição cita `אותיום` e variantes contextuais, mas não preserva exatamente `אֶוְתִּיֹוס`.
8. **A00449 — forma alternante sob risco de confusão.** O original registra `אַדְּרַבָּא` e `אַדְּרַבָּה`, e adverte contra outras grafias e formações. A redação publicada não explicita em conjunto os dois cabeçalhos. Não unificar formas distintas silenciosamente.

## Deficiências sistêmicas e limitações
- **Fonte ≠ Tradução:** os textos portugueses apresentam resumos lexicalmente úteis, mas numerosos exemplos, versões textuais, notas de manuscritos e remissões não estão representados integralmente. Igualdade de lema e integridade do HTML não bastam para afirmar fidelidade filológica.
- **Classificação linguística:** os módulos e modelos inspecionados atribuem `data-dictionary="aramaico"` a entradas JASTROW mesmo quando a análise indica hebraico, como `אָב` (`A00014`) ou `אָדָם` (`A00418`). Revisar critério de classificação e filtros sem inferir idioma pelo alfabeto.
- **Popups:** 176 termos únicos são contagem de cadastro, não demonstração de cobertura de todas as abreviaturas, citações, biografias, etimologias e referências nos 600 cartões. Minidicionário e minibiografias: revisão exaustiva não executada.
- **Interface e referências:** não foram executados testes reais de navegador, pesquisa, foco/teclado, popups em hover/click, acessibilidade, layout bidi RTL/LTR, contraste nem validação de destinos de URLs externas.
- **Confronto primário:** fonte XML preservada e fixa; ainda é recomendável confrontar casos difíceis com o fac-símile da edição 1903, distinguindo grafia de edição, erro de extração, abreviatura e conjectura de Jastrow.
- **Branch de correções divergente:** em pré-voo, `chat-gpt-correcoes` estava 131 commits atrás e 14 à frente de `chat-gpt-commits`; o arquivo `lexicons/jastrow-041-080.js` não existia na branch de correções. Não copiar automaticamente módulos nem sobrescrever alterações de outras fontes. Correções editoriais aguardam reconciliação não destrutiva.

## Decisão da auditoria
**Não aprovado para certificação filológica integral.** Auditoria estruturada de cobertura do acervo JASTROW publicada nesta rodada; pontos concretos e fila de 32 registros abertos. Conservar `total_audited=0`. O fluxo de correções deve reconciliar os módulos lexicais na branch `chat-gpt-correcoes` antes de aplicar diffs mínimos testados, e nunca alterar `main` nem a branch `chat-gpt-jastrow`. Integração via PR e merge pertence à rotina exclusiva de integração. O próximo passo filológico é revisar individualmente, com o XML completo e preferencialmente o fac-símile, TODOS os 600 registros, marcando como aprovado apenas cada verbete efetivamente revisado.
