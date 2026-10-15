# DGP — etapa 3: dez novas homologações individuais (15/10/2026)

## Escopo e evidência

Ordinais **41, 45, 46, 50, 51, 52, 53, 54, 57, 58**. Todos constam com texto da fonte coincidente e parecer histórico A; foram individualmente exercitados no Chromium pela [execução original 38744134668](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38744134668), **10/10 PASS**.

A integração comprovada ocorreu no [PR #152](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/152), `merged=true` e merge `684d8f5a713df7301deb8b65cdaf5057adaff200`. O próprio ramo consolidado foi novamente testado no [CI 38744423888](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38744423888), `completed/success`, para esse exato commit. Os dez registros são homologados sobre **esta versão de referência**, não sobre edições posteriores desconhecidas.

## Dez controles aplicáveis

Cada ficha em `auditorias/dgp-etapa3-candidatos-41-58.json` registra fonte, lema, definições, análise semântica/morfológica, ausência de abonações de autores na entrada DGP, separação de camadas, estrutura/índice, Chromium/teclado/popups, verificação de remissões/links e integração. O campo "NÃO SE APLICA" em testemunhos refere-se somente a entradas que **não apresentam citação antiga no corpo original do DGP**. O histórico e o XML permanecem preservados.

Em especial:
- **#50** remete explicitamente a `ἄβροχος` (#64); pesquisa e abertura do alvo sob demanda foram testadas.
- **#54** contém apenas a etimologia `〈ἁβρός, δίαιτα〉`; sua relação com #55 é interpretação editorial, **não remissão literal**. Não foi fabricado um link para #55.
- Nenhuma acepção ou leitura grega foi reescrita para facilitar a conclusão.

## Barras de progresso verificáveis

- Cobertura funcional do lote: **1.000/1.000** (100%).
- Homologações da rodada: **10/10** (100% de candidatos examinados e aprovados).
- Homologação definitiva acumulada do primeiro lote: **30/1.000** (3%).
- Homologação definitiva global: **30/44.590** (0.0673%).
- Verbetes ainda sem homologação: **970/1.000**, ou **44.560** no DGP.
- Pareceres históricos não são automaticamente homologações; as outras entradas requerem seu próprio checklist.

**Estado:** AUDITORIA_CONCLUIDA apenas nos dez IDs listados, vinculada ao SHA e à versão auditada.
