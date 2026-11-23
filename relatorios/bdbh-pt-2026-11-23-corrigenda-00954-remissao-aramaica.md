# BDB-H/PT — Correção de publicação fail-closed: ordinal 954

**Data:** 2026-11-23. **Origem:** commit editorial `2ed56b009524a339f03ff81d29c09f8fa7c9a868`, integrado `bba4876cb7dc2f7d86d1d77223fdc47573f7412d`. **Deployment falho:** `dpl_BiiLXJ2eCMYZx76iim77L28AG6z4` (estado ERROR, `BUILD_UTILS_SPAWN_1`).

## Diagnóstico

A interface canônica e imutável `lexicons/bdbh-pt-ui.js` interrompe o build em `transformAnchors` quando o `data-ref` não pertence a um livro bíblico mapeado ou a um verbete certificado no léxico **BDB-H**. No artigo 954, a fonte inglesa contém exatamente uma remissão a **BDB Aramaic, וְ**, endereço documental `/BDB Aramaic,_וְ`; não se trata de remissão ao léxico hebraico BDB nem de passagem bíblica. A falha foi corretamente explícita: `BDB-H/PT: referência sem mapeamento certificado: BDB Aramaic, וְ`. **Não alterar o destino para BDB, וְ**, pois isso criaria vinculação enganosa a outro léxico.

## Reparação restrita

No **registro 954 somente**, transformar a única âncora não certificada em elemento `bdi` **não clicável**, mantendo literalmente a forma visível `וְ`, `data-bdbh-source-ref="BDB Aramaic, וְ"`, `data-bdbh-source-href="/BDB Aramaic,_וְ"`, classe e dados de tooltip hebraico e um aviso contextual de ausência de mapeamento. **Nenhum endereço foi inventado, nenhum link externo foi mantido ativo, e a fonte inglesa permanece idêntica.**

Conservar as demais **163 âncoras originais**, sem alteração de HTML e posição. A comparação reconstrutiva, reinserindo a âncora bloqueada somente para fins de teste, reproduz as **164 âncoras originais** na ordem exata; **69 spans** e **20 superscritos** permanecem idênticos ao inglês. Estrutura HTML equilibrada; as 53 traduções anteriores no módulo, ordinais 901–953, continuam estruturalmente idênticas. As 163 referências que continuam clicáveis foram confrontadas estaticamente com as classes de destino aceitas pelo código canônico.

Esta emenda **não** aumenta `fully_collated`, `registered_translation_records`, `validated_statically` ou `editorially_collated`: checkpoint continua **954/11.015**, próximo ordinal **955 — אֵת²**.

## Estado protegido

SHA da fonte inglesa 010 `2b94193730743a2b26696bc764c8a5c02fdf6156`. Os quatro SHA imutáveis seguem: batch-007 `f7990b939a68f16e3c60cb0e2daf3a2e1b7593b5`, batch-008 `39d09d21a0e6212b9c058b6b2192bc0150eddda3`, batch-009 `19ae5e1ae8cf4975f2d5c507bd2ce504a99293b1`, interface `b80dab74414c04b671b743af4884a5743080860c`. Nenhuma alteração em `main`, inglês, outro léxico ou irregularidade 821; pendência **BDBH-FONTE-00934** e outras suspensões continuam. Sem fac-símile e sem testes reais de navegador. `audit_status=BLOQUEADA`, `audit_completed=0`, `validated_published=0`.

Arquivos afetados: `lexicons/bdbh-pt-batch-010.js`, `lexicons/bdbh-pt-progress.json`, este relatório. A aprovação estática não permite declarar publicação READY sem verificação efetiva de deployment e alias oficial.
