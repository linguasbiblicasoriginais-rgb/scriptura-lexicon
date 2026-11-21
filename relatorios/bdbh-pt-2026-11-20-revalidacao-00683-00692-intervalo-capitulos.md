# BDB-H/PT — Revalidação de publicação: intervalos de capítulos no ordinal 690

Data editorial: 2026-11-20. Escopo estrito: formatador de apresentação BDB-H/PT (`lexicons/bdbh-pt-ui.js`) e relatório de correção. O checkpoint permanece **692/11.015**; esta correção **não traduz** nem retraduz qualquer artigo.

## Falha documentada

O deployment Vercel `dpl_HuWcz9yiKKsX9EnZ5TZ3T4BvPuRU` do merge `938429acedda1732fabf14ce18081fb33069668d` terminou em `ERROR`. Causa comprovada em `scripts/build-on-demand.mjs`: `BDB-H/PT: referência sem mapeamento certificado: II Chronicles 14-21`. Trata-se de âncora documental do ordinal **690, אָסָא**: `<a data-ref="II Chronicles 14-21" href="/II_Chronicles.14-21">2 Ch 14–21</a>`. O formatador aceitava capítulo único ou intervalo de versículos, mas não intervalo de capítulos.

## Correção mínima

- Reconhecimento de `Livro CAPÍTULO-CAPÍTULO` **somente** em `lexicons/bdbh-pt-ui.js`, por nomes de livros já certificados em `bookEntries`.
- Validação de limites como inteiros positivos em ordem não decrescente; entradas inválidas continuam falhando com erro explícito.
- `II Chronicles 14-21`: apresentação **2Cr 14–21**, popup **Segundo Livro de Crônicas, capítulos 14 a 21**, destino do clique `#escrituras/UXLC/2CH.14.1` (somente o **início** do intervalo, avisado expressamente no popup).
- `data-ref` original e `data-bdbh-source-href` originais preservados; sem alterações no módulo inglês, texto português ou contagens.
- Demais regras de capítulo isolado, versículo, intervalo de versículos e remissão interna continuam inalteradas.

## Controles e pendências

- Fonte inglesa módulo 007: blob `f7990b939a68f16e3c60cb0e2daf3a2e1b7593b5`, intacto.
- Corpus traduzido preservado, checkpoint **692/11.015**, próximo 693 — אָסוּךְ.
- Divergências e emendas textuais suspensas permanecem suspensas, inclusive `Deuteronomy 5:21` versus rótulo `Dt 5:24` no ordinal 686.
- Confirmação do novo build `READY` e do alias oficial deve ser feita após o commit.
- Nenhum fac-símile ou navegador real foi examinado. `audit_status=BLOQUEADA`; `audit_completed=0`.
