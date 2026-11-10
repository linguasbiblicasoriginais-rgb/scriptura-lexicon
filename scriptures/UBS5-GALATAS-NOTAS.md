# UBS5 — Epístola de Paulo aos Gálatas (1–6)

## Procedência e protocolo

- **Fonte:** transcrição grega fornecida pelo mantenedor, no arquivo `galatas.txt`, em 10/11/2026.
- **Edição de destino:** UBS5, conforme identificação do projeto; **sem cotejo independente com a edição impressa ou seu aparato crítico**.
- **Princípio de fidelidade:** caracteres gregos, diacríticos, pontuação, colchetes, travessões, capitalização e sequência textual foram preservados; não houve harmonização com NA28, Textus Receptus ou outras edições.
- **Separação das camadas:** `verses` contém unicamente o texto grego; `headings` traz os títulos editoriais traduzidos e o correspondente inglês; `paragraphEnds` representa os finais de blocos inferidos da transcrição; `unnumberedPassages` permanece vazio porque toda linha grega integra um versículo numerado.
- **Títulos editoriais:** foram registrados 15 títulos, equivalências arquivadas em `scriptures/UBS5-GALATAS-TITULOS.json`. Nenhum título integra o texto bíblico.
- **Remissões paralelas:** inexistem remissões em linhas editoriais isoladas no arquivo; nenhuma foi acrescentada.
- **Colação mecânica:** a sequência extraída foi confrontada, capítulo a capítulo, com a transcrição original, removendo somente os números de versículos e espaços em branco, **sem normalização ou substituição de caracteres**.

## Relatório quantitativo

- **6 capítulos**, **149 versículos numerados**, sem lacunas.
- **15 títulos editoriais**, **30 finais de bloco**, **3 quebras internas de versículo**.
- **11483 caracteres não brancos** do texto grego e sinais editoriais preservados.
- **3 linhas gregas poéticas** sem número, incorporadas ao versículo correspondente.

| Capítulo | Versículos | Títulos editoriais | Finais de bloco | Quebras internas |
|---:|---:|---:|---:|---:|
| 1 | 24 | 3 | 6 | 0 |
| 2 | 21 | 3 | 3 | 0 |
| 3 | 29 | 3 | 6 | 0 |
| 4 | 31 | 2 | 5 | 3 |
| 5 | 26 | 2 | 6 | 0 |
| 6 | 18 | 2 | 4 | 0 |
| **Total** | **149** | **15** | **30** | **3** |

## Particularidades

1. **Gl 4.27:** as três linhas gregas subsequentes à introdução `γέγραπται γάρ,`, iniciadas por `Εὐφράνθητι`, `ῥῆξον` e `ὅτι πολλά`, foram anexadas ao versículo 27, com três quebras internas. Não se trata de versículos independentes.
2. **Gl 5.1–2:** o capítulo 5 inicia sem novo título; a seção inglesa `Christian Freedom` aparece somente antes de 5.2. A estrutura digital mantém `beforeVerse: 2` e não desloca o cabeçalho para 5.1.
3. **Gl 2.11–14:** o título original menciona Peter, traduzido como `Pedro`, enquanto a transcrição grega preserva `Κηφᾶς`. Não houve alteração ou harmonização de nomes próprios.
4. **Gl 3.21; 4.25; 5.7; 5.24:** quaisquer sinais editoriais presentes foram conservados na transcrição, sem criação de leituras alternativas.
5. **Gl 6.18:** preservado como último versículo numerado, sem doxologia ou versículo adicional.

## Limites de verificação

A auditoria verifica a integridade da incorporação da **transcrição recebida**, não sua equivalência independente ao exemplar UBS5. Não houve revisão do aparato crítico nem inspeção visual no navegador. A atualização afeta somente a branch `chat-gpt-escrituras`, sem merge.
