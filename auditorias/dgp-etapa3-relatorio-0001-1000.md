# DGP — etapa 3: homologação atômica, primeira unidade de aceite

**Data:** 15/10/2026. **Universo:** ordinais 1–1.000; DGP total 44.590. **Não conceder selo sem integração.**

## Correção da importação de lemas

As fichas anteriores usaram a propriedade inexistente `lema_coincide`, mas o inventário de cotejo usa `lemma_coincide`. Corrigidas as **1.000 classificações de lema** por sua evidência original. Isso altera somente metadados de auditoria, não o HTML nem o conteúdo-fonte. Os 15 registros com diferenças editoriais na definição continuam diferenciados.

## Cinco pareceres individualizados aptos, ainda sem selo

| Ordinal | Lema | Decisão antes da integração | Fatos verificados |
|---:|---|---|---|
| 2 | ἁ | AGUARDANDO_INTEGRACAO | Forma dórica do artigo, equivalente ἡ; popups dór., fem., art., def. |
| 5 | ᾇ | AGUARDANDO_INTEGRACAO | Dativo feminino dórico de ὅς, referente ᾗ; popups dór., dat., fem. |
| 6 | ἄ, ἅ, ἇ | AGUARDANDO_INTEGRACAO | Quarta forma ἆ preservada; interjeição e três valores pragmáticos; popup interj. |
| 19 | ἀβασανίστως | AGUARDANDO_INTEGRACAO | Advérbio e duas acepções integrais; popup adv. |
| 33 | ἀβελτέρως | AGUARDANDO_INTEGRACAO | Advérbio 'tolamente', sem inserção editorial na fonte; popup adv. |

Cada ficha em `auditorias/dgp-etapa3-0001-1000.json` contém dez verificações com justificativa, inclusive **NÃO SE APLICA** exclusivamente para citações antigas não existentes na entrada-fonte DGP. A consistência global aguarda integração; por isso nenhum desses cinco conta como definitivo ainda.

## Evidências
- Fonte: `aniseferreira/Grc-Por-DigDict`, commit `deb54b426ead447d01ced7534736f3e77be7015b`, SHA blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`.
- Cotejo da literalidade: `auditorias/dgp-2026-10-14-cotejo-0001-1000.json` (1000 lemas, 985 definições idênticas, 15 apresentações divergentes).
- Execução funcional total: [38673465781](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38673465781), 1.000/1.000, 1436 popups; formatos e temas verificados.
- Testes específicos de cada um dos cinco: [38692090158](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38692090158), 5/5 PASS.
- 910 A / 8 C / 82 P são **pareceres históricos**, não selos equivalentes a Rauditoria. As outras 995 fichas mantêm pendências obrigatórias.

**Progresso global antes da integração:** 5/44.590 com parecer atômico aguardando integração (0,0112%); 0/44.590 homologados definitivamente.

## Homologação definitiva parcial, comprovada (15/10/2026)

Cinco verbetes — **#2, #5, #6, #19 e #33** — satisfizeram os dez controles da ficha individual, com os controles pertinentes aprovados e as citações ausentes marcadas NÃO SE APLICA justificadamente. O GitHub confirmou o [PR #147](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/147) com `merged=true`, commit `bd56d7daf4e4e62d090475386b4ab3aedae68533`, e o [CI no destino #38694280677](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38694280677) com `completed/success` sobre `807d7e6a998409a2056ab9e6d2d04a04ad1ccf95`. Os originais permanecem inalterados.

**AUDITORIA_CONCLUIDA = 5/1000**, restantes EM_EXECUCAO = 995/1000. **DGP global = 5/44590 = 0.0112%**. Os 120 exemplos sem obra identificada e 82 pendências históricas permanecem abertos onde aplicáveis. O total não é 1000 homologados.


## Novo marco — 40 homologados (15/10/2026)

Os ordinais **8, 21, 26, 30, 32, 44, 48, 59, 61, 64** foram revistos individualmente e concluídos segundo o protocolo, após [PR #154](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/pull/154) (**merged=true**, SHA `492acc76504f256f2e2a841a6b585c56b87f9922`) e [GitHub Actions do destino #38752919905](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38752919905) (**completed/success**). Fonte DGP XML preservada. Os casos #26→#25 e #61→#59 tiveram remissões verificadas pelo frontend de carregamento sob demanda. Fichas individuais completas: `auditorias/dgp-etapa3-candidatos-08-64.json`.

**AUDITORIA_CONCLUIDA = 40/1000 (4%)**; **DGP global 40/44590 (0,0897%)**. Restam 960 no lote. Não confundir o teste antigo da etapa 1 com a regressão nova sob demanda, mantida em fluxo separado.
