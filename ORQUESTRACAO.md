# Orquestração recuperável — GDHAGP

## Estado e autoridade
O HEAD real de cada branch e seus arquivos lexicais são a fonte da verdade. `regras/estado-orquestracao.json` é um manifesto **local da branch**, não um registro global transacional. Checkpoints históricos exigem reconfirmação remota; jamais avançar o manifesto antes da publicação lexical. A ordem obrigatória é **BDAG → DGP → LEH → PEREIRA**. O agendamento externo coordena as quatro branches; não há escrita cruzada entre elas.

## Pré-voo automatizado
Execute `python tools/validar_orquestracao.py --all` para auditar os HEADs remotos, a existência de regras e léxicos e os SHAs dos PDFs BDAG/LEH. `GITHUB_TOKEN` é opcional para leitura pública. O script é somente leitura, imprime JSON e retorna erro em falhas. **Este pré-voo não substitui leitura filológica, contagem de cartões ou verificação do commit publicado.**

## Publicação
1. Ler regras canônicas e fontes diretamente no HEAD da branch específica; confirmar o próximo lema e lote, sem inventar texto.
2. Preparar todos os arquivos do lote, inclusive README e regras, em memória ou em diretório local; validar sintaxe, contagens, IDs, correspondência entre linhas/cartões e fonte.
3. Criar blobs e árvore sobre a árvore do HEAD real; conferir o HEAD imediatamente antes da publicação.
4. Criar um único commit com pai exatamente igual ao HEAD verificado e atualizar somente a branch autorizada usando `expected_sha` e `force=false`. **Nunca publicar partes de um lote separadamente.**
5. Ler novamente o HEAD, o commit e os arquivos modificados; confirmar contagens e próximo lema. Só então atualizar o estado persistente como parte do mesmo commit (se aplicável).
6. Em erro recuperável, registrar o diagnóstico e tentar na execução seguinte; não desligar o agendamento, não saltar a etapa, não criar PR/branch e não pedir upload de PDF presente no repositório.

## Fontes permanentes
`fontes/fonte-bdag.pdf` e `fontes/fonte-leh.pdf` são os caminhos fixos. O conteúdo pode mudar de alfa para beta, gama etc. Sempre verificar blob SHA e intervalo real do PDF. Erro de leitura não significa ausência.

## Limites reais
Este repositório fornece manifesto, protocolo e auditoria remota de pré-voo. A geração filológica de lotes e a execução horária dependem do orquestrador externo; **nenhum script aqui finge traduzir automaticamente um léxico ou publicar commits**. Agendamentos GitHub Actions em branches que não são default não são usados para burlar a proibição de alterar `main`.
