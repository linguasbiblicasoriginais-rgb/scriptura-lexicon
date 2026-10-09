# Automação DGP — implantação controlada

**Situação:** ferramentas e workflow preparados na branch `chat-gpt-commits`, **não ativados**. O workflow agendado pelo GitHub Actions só funciona após instalação na branch padrão `main`, mediante autorização específica do mantenedor. Este documento, isoladamente, não é um agendamento.

## Escopo

Apenas a fonte DGP. BDAG, LEH e PEREIRA permanecem fora desta automação. A extração usa o XML canônico de `aniseferreira/Grc-Por-DigDict`, commit `deb54b426ead447d01ced7534736f3e77be7015b`, e verifica o hash de blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`. O lote tem 100 registros `entryFree`, sem deduplicar homógrafos.

Arquivos:

- `tools/dgp_engine.py`: extrai os 100 ordinais, protege template literal, gera linhas/cartões, compara as definições com o XML e grava manifesto.
- `tools/dgp_orchestrator.py`: consulta os HEADs, preserva commits por etapa, reconcilia reexecuções e contém a lógica de PR/merge conservadora.
- `tests/test_dgp_engine.py` e `tests/test_dgp_orchestrator.py`: testes locais de integridade, falhas e retomada.
- `.github/workflows/dgp-hourly.yml`: minuta de workflow, com limite de 55 min e exclusão de sobreposição. **Não ativa ao ser gravada fora de main.**

## Sequência e persistência

1. **DGP**: se o lote de 100 ainda não existe, gerar e verificar; único commit em `chat-gpt-dgp`. Se já foi publicado, reutilizar seu SHA.
2. **Auditoria estática**: confrontar integralmente os 100 registros com o XML. Salvar relatório Markdown e manifesto JSON na branch `chat-gpt-correcoes`, em commit independente. Não recomeçar a incorporação em caso de falha da auditoria.
3. **Integração**: só após a liberação editorial aplicável, abrir PRs para `chat-gpt-commits`; reconciliar o delta estritamente previsto, criar commit de merge com dois pais e verificar o PR `merged`. Não mudar `main`, não excluir branches, não usar `force`.

Persistência: commits de origem, relatório por lote e IDs consecutivos. Diante de falha de rede, reconsultar os SHAs antes de tentar novamente; evitar repetir um commit publicado.

## Limite de automação e qualidade

Os testes cobrem **integridade textual e estrutural**. Não confirmam o significado de siglas ambíguas, a correção histórica de todas as expansões, a apresentação real dos popups ou o DOM em navegador. O GitHub Actions não fornece, por si, raciocínio ChatGPT High.

Por isso, a variável `DGP_ALLOW_STATIC_INTEGRATION` está explicitamente em `false` no workflow de preparação. A alteração para `true` só pode ser autorizada se o padrão de auditoria exigido pelo proprietário for efetivamente atendido. **Não declarar revisão filológica de alta precisão a partir de uma comparação de strings.**

## Implantação segura

Antes de ativar:

1. Executar os testes Python em ambiente real e corrigir eventuais erros; neste estágio, sua aprovação em GitHub Actions ainda não foi demonstrada.
2. Executar pré-voo e ensaio de interrupção após cada commit, checando recuperação sem duplicar.
3. Revisar e testar a lógica de dois merges, especialmente diferenças antigas no manifesto de outras fontes.
4. Verificar permissões do `GITHUB_TOKEN` para conteúdo e PRs, políticas do repositório e restrições da branch padrão.
5. Obter autorização expressa para instalar **somente o workflow** em `main`. A instalação é distinta da ativação de produção.
6. Confirmar critérios para revisão editorial dos popups e configuração High; não fingir que o Github fornece essa capacidade.

Os 60 minutos constituem uma meta de produtividade a medir. O agendador não garante execução em hora exata, e a indisponibilidade do serviço pode atrasar o ciclo. Registrar atrasos sem apagar checkpoints.
