# BDB-H/PT — correção técnica do carregamento do módulo português 007

Data: 20/11/2026. Falha comprovada no deploy `dpl_EuZ6brAtffhLBErWeSJVNcfYbiYj` do merge `45e243680e93289401ed4d5557db53747a8a568c`: `Error: BDB-H/PT: artigo ausente 501` em `overlayBdbhPt007`, linha 167.

Causa: o último argumento da chamada do overlay ainda apontava para `window.ScripturaBDBHpt.batch006.records`, copiado do modelo do módulo 006. A função e o módulo inglês de destino já apontavam corretamente para 007. A referência foi corrigida unicamente para `window.ScripturaBDBHpt.batch007.records`.

Regressão: dez ordinais 601–610 encontram cabeçalho `data-bdbh-ordinal` e linha de busca correspondente no módulo inglês 007, SHA `f7990b939a68f16e3c60cb0e2daf3a2e1b7593b5`. Os registros portugueses, suas traduções integrais, 172 atributos `data-ref`, 83 spans RTL, o checkpoint 610/11.015 e os 600 anteriores permanecem intocados. O arquivo de fonte inglesa e demais léxicos não foram modificados.

O resultado de deploy será registrado separadamente; auditoria atômica continua `BLOQUEADA` (sem fac-símile e sem navegador real).
