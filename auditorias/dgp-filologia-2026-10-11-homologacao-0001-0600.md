# DGP — homologação filológico-documental dos 600 verbetes iniciais

**Data:** 11/10/2026. **Fonte:** DGP α, XML imutável, commit `deb54b426ead447d01ced7534736f3e77be7015b`; blob `eec318bb6150b6b2f4422ea4a76383ac0a254de2`. HEAD lexical `chat-gpt-dgp`: `59d497c25c0a9bbc0a15a2d49d6586e5d6892500`.

## Conclusão circunscrita

**600/600** lemas e definições completas confrontados com o XML, com **600/600** pareceres individuais prévios aproveitados e vinculados ao texto. Classificação documental: **A=528; C=4; P=68**. Assim, **532 decisões A/C e 68 pendências dirigidas**. Todos foram avaliados documentalmente; os 68 P não estão homologados no ponto aberto.

**A:** conforme na camada filológico-documental, sem questão registrada não resolvida. **C:** nota/correção editorial documentada nesta execução, sem alterar a Fonte. **P:** questão individual precisando de testemunho externo, contexto de corpus ou decisão sustentada. Não transformar A/C em afirmação de exame direto de todos os manuscritos/autores antigos.

## Inventário e conferência completa

| Critério | Quantidade |
|---|---:|
| Lemas publicados idênticos ao XML | **600** |
| Definições reconciliadas com XML | **600** |
| Definições literais com espaços normalizados | 558 |
| Apenas hífen discricionário removido | 11 |
| Expansão bibliográfica/autor | 29 |
| Expansão + hífen discricionário | 1 |
| Hifenização da fonte (`au- sência`) | 1 |
| Divergências inexplicadas | **0** |
| Pareceres individuais reunidos | 600 |
| Alertas antigos | 77 |
| Questões documentais fechadas | 9 |
| **Questões abertas de escopo filológico (P)** | **68** |

O caso #15 apresenta espaço aparente ao remover spans HTML de `Homero`, sem divergência real. A expansão `men.` → `Menandro` em #419 também foi verificada. As três diferenças históricas de cabeçalho #95, #124 e #150 estão corrigidas na branch de correções, não na lexical de origem.

## Nove decisões documentais fundamentadas

- **#86 ἀγαθός, ή, όν:** A etimologia 〈ἄγαμαι〉 consta do DGP, mas foi qualificada por nova nota editorial como hipótese (LSJ e IE-CoR registram incerteza).
- **#95 ἀγακλυτός, ή, όν:** Terminação feminina ή conferida com o XML na correção anterior.
- **#124 ἀγαπήνωρ, ορος:** Separação de (masc.) e lema conferida com a segmentação do XML na correção anterior.
- **#150 ἄγε:** O XML tem o lema ἄγε e a definição começa por e ἄγετε; correção anterior confirmada.
- **#288 ἀγνωμοσύνη, ης (ἡ):** Duas acepções «4» pertencem à numeração original, documentada em nota editorial nova.
- **#303 ἀγοράζω:** A grafia original resgastados foi preservada e assinalada em nota documental nova.
- **#335 ἀγρεύς, έως (ὁ):** A grafia original passáro foi preservada e assinalada em nota documental nova.
- **#434 ἀγώνισμα, ατος (τό):** Duplicação original do numeral 3 registrada na nota editorial preexistente.
- **#543 ἀδίδακτος, ος, ον:** Duplicação original do numeral 3 registrada; LSJ distingue coro não ensaiado e drama ainda não encenado.

**Apoios auxiliares pontuais:** [LSJ para ἀγαθός](https://atlas.perseus.tufts.edu/dictionaries/entry/urn%3Acite2%3Ascaife-viewer%3Adictionaries.v1%3Alsj-n260/) e [IE-CoR](https://iecor.clld.org/cognatesets/4118) para etimologia incerta de #86; [LSJ para ἀδίδακτος](https://atlas.perseus.tufts.edu/dictionaries/entry/urn%3Acite2%3Ascaife-viewer%3Adictionaries.v1%3Alsj-n1356/) para distinguir coro, drama e possibilidade de ensino em #543. Não houve verificação exaustiva de todas as citações em suas edições gregas.

**Teste das novas notas documentais e regressão de busca/popups:** GitHub Actions [#38175516482](https://github.com/linguasbiblicasoriginais-rgb/scriptura-lexicon/actions/runs/38175516482), resultado `success` em Chromium com os 2.880 registros da branch e os 3.300 em montagem temporária; alterações somente no aparato GDHAGP.

## Fichas individuais (600 verbetes)

Cada linha abaixo incorpora observação filológica individual já produzida e reapreciada documentalmente. Para cada registro, o [JSON complementar](dgp-filologia-2026-10-11-homologacao-0001-0600.json) fornece texto integral da fonte e da edição, classificação de diferença, análise e decisão fundamentada A/C/P. Estas fichas não são atestação manuscritológica universal.

| # | Lema literal | Parecer | Observação filológica / questão específica |
|---:|---|:---:|---|
| 1 | `Α, α (ἄλφα) (τό)` | **P** | A letra α tem uso alfabético e numeral; o símbolo ͵α marca milhar. O rótulo final ’[hebr.]’ está presente no DGP, mas seu escopo editorial não é explicado neste registro. Não inferir empréstimo hebraico nem apagar o rótulo. |
| 2 | `ἁ` | **A** | Forma dórica ἁ relacionada à forma ἡ do artigo feminino singular. A indicação dór. é parte da descrição original; não normalizar o lema para ἡ. |
| 3 | `ἅ1` | **P** | ἅ1 é descrito pelo DGP como forma feminina de pronome possessivo ou relativo. Manter ambos os valores do registro e a distinção numérica; falta ocorrência contextual para optar por uma análise única. |
| 4 | `ἅ2` | **P** | ἅ2 é descrito como plural neutro do possessivo/relativo; representa outra análise morfológica da mesma forma gráfica. Não fundir com ἅ1. |
| 5 | `ᾇ` | **A** | DGP apresenta ᾇ como correspondente dórico de ᾗ, dativo feminino de ὅς. Não substituir o lema dórico por seu correspondente supradialetal. |
| 6 | `ἄ, ἅ, ἇ` | **A** | Há quatro formas acentuadas registradas na mesma entrada (ἄ, ἅ, ἇ, ἆ). A interjeição recebe valores pragmáticos de espanto, dor e indignação; não reduzir a única grafia. |
| 7 | `ἀάατος, ος, ον` | **P** | O LSJ atesta 'inviolável' em Ilíada 14.271 e também valores próximos a 'invencível'. Divergência de apresentação: DGP dá as terminações ος, ον, enquanto o LSJ apresenta o lema em duas terminações, ον. Registrar como ponto de padronização editorial, NÃO corrigir o original automaticamente. |
| 8 | `ἀαγής, ής, ές` | **A** | Semântica 'inquebrável; sólido' e associação com ἄγνυμι corroboradas pelo LSJ, com testemunhos citados na Odisseia 11.575. Não é correção de origem. |
| 9 | `ἄαπτος, ος, ον` | **A** | LSJ atesta 'intocável/invencível' e Ilíada 1.567. DGP relaciona o étimo a ἅπτω; LSJ remete a ἅπτομαι. O LSJ apresenta adjetivo de duas terminações; DGP, três. Há diferenças de representação, não prova de erro. |
| 10 | `ἄασα, ἀασάμην, ἀάσθην` | **A** | O verbete agrupa ἄασα (aoristo ativo), ἀασάμην (aoristo médio) e ἀάσθην (aoristo passivo) e as remete a ἀάω (#14). As formas são reconhecíveis no LSJ ἀάω; manter a forma agrupada no testemunho DGP. |
| 11 | `ἀάσχετος, ος, ον` | **A** | O registro usa apenas ἄσχετος como conteúdo definicional, sem ’cf.’ explícito. Cunliffe identifica ἀάσχετος como forma lexical relacionada a ἄσχετος e cita Ilíada 5.892/24.708. Tratar como remissão a ser representada editorialmente, não como glosa semântica a inventar. |
| 12 | `ἀᾶται` | **A** | A leitura '3ª pessoa do singular do presente médio de ἀάω' é corroborada em Cunliffe/LSJ; a forma figura na Ilíada 19.91. Não confundir a desinência -ται com voz passiva automática. |
| 13 | `ἄατος` | **A** | LSJ documenta ἄατος/ἆτος com sentido 'insaciável', inclusive construções com genitivo como ἄατος πολέμοιο (Hesíodo, Teogonia 714). É distinto do adjetivo ἀάατος (#7); não agrupar palavras apenas pela semelhança gráfica. |
| 14 | `ἀάω` | **P** | A alternância de ativo/médio na família de ἀάω é apoiada pelo LSJ. O trecho citado pelo DGP corresponde a Ilíada 9.537; a linha grega da edição consultada contém a partícula δὲ entre ἀάσατο e μέγα, omitida na citação abreviada do DGP. É uma abreviação registrada, não uma autorização para emendar a fonte. |
| 15 | `ἀβακέω-ῶ` | **P** | A forma aorística de terceira pessoa plural ἀβάκησαν está em Odisseia 4.249 segundo LSJ. O DGP anota 〈ἀ-, βάζω〉 como análise etimológica; o LSJ apresenta ἀβακής como base lexical. A divergência exige avaliação diacrônica antes de alterar etimologia. |
| 16 | `ἀβάπτιστος, ος, ον` | **P** | LSJ confirma os sentidos 'não submergido' e 'sóbrio' para ἀβάπτιστος, citando Píndaro (Pítica 2.80) e Plutarco. A acepção cristã 'não batizado' está no DGP, mas não foi individualmente atestada na fonte auxiliar consultada; manter sem excluí-la e pesquisar testemunhos cristãos. |
| 17 | `ἀβαρής, ής, ές` | **P** | A citação pertence a 2 Coríntios 11.9; o adjetivo acusativo ἀβαρῆ predica ἐμαυτόν, enquanto ὑμῖν fornece o complemento dativo. A leitura 'não ser pesado a alguém' é apoiada por LSJ e pelo texto do NT. DGP apresenta ής, ές; LSJ apresenta adjetivo em duas terminações, ἀβαρής, ές: verificar a convenção morfológica sem alterar o testemunho. |
| 18 | `ἀβασάνιστος, ος, ον` | **P** | A polissemia vai de ausência de tortura à ausência de exame crítico, coerente com LSJ ἀβασάνιστος e seus exemplos (Josefo, Antifonte). DGP registra terminações ος, ον, enquanto LSJ apresenta ον; observar a convenção editorial. |
| 19 | `ἀβασανίστως` | **A** | Advérbio em -ως relacionado a ἀβασάνιστος. As acepções sobre ausência de exame são apoiadas pelas observações e referências adverbiais no LSJ (Tucídides 1.20). Não converter o advérbio em adjetivo. |
| 20 | `ἀβασίλευτος, ος, ον` | **P** | LSJ atesta o sentido mais específico 'sem rei' e a extensão 'livre de governo'; DGP resume 'sem governo; sem guia; independente'. Manter os equivalentes do DGP e registrar a diferença de granularidade; LSJ apresenta adjetivo em duas terminações. |
| 21 | `ἀβάστακτος, ος, ον` | **A** | Adjetivo deverbal: privativo ἀ- + βαστάζω, tal como indicado no DGP. LSJ dá 'não suportável/carregável' e também uso para coisa que não se consegue remover. A glosa portuguesa 'intolerável' capta parte do campo, não toda a extensão em testemunhos externos. |
| 22 | `ἁβατάς` | **A** | Forma ἁβατάς: o LSJ sob ἡβητής distingue ἡβατάς dórico (epigrafia) e ἁβατάς em Calímaco. A remissão DGP é compatível, mas registrar que a forma concreta não equivale a todas as ocorrências dialetais sem distinção. |
| 23 | `ἄβατος, ος` | **P** | O DGP distribui seis acepções, incluindo passabilidade geográfica, inviolabilidade, abandono, aplicação a animais e acepção médica tardia. LSJ documenta ἄβατος, ον e também η, ον em Píndaro, e atesta rios/florestas e lugar interdito. Não tratar cada acepção como sinônimo livre; ambientes de uso diferentes. |
| 24 | `ἀβαφής, ής, ές` | **P** | O DGP registra ἀβαφής, -ής, -ές 'não tingido' (ἀ- + βάπτω). LSJ apresenta a forma em duas terminações, nota variante -ος, -ον em glosários e remete à discussão sob ἀναφής. Sem exemplo de uso do DGP aqui, não corrigir a flexão nem deduzir que a formação está errada. |
| 25 | `Ἄβδηρα, ων (τά)` | **P** | Topônimo plural neutro Ἄβδηρα, -ων, τά; substantivo próprio não deve ser tratado como singular automaticamente. Fonte localiza a cidade na Trácia. O exame não fez revisão geográfica histórica das diferentes cidades homônimas. |
| 26 | `Ἀβδηρίτης, ου` | **A** | Gentílico masculino Ἀβδηρίτης, -ου, ligado ao topônimo #25. DGP mantém dois sentidos: habitante e avaliação depreciativa 'tolo'. A Suda também identifica o cidadão de Abdera e sua reputação proverbial; não transpor a avaliação proverbial a todas as pessoas reais. |
| 27 | `Ἀβδηριτικός, ή, όν` | **P** | Adjetivo gentílico derivado de Ἀβδηρίτης; DGP distingue propriedade local e extensão pejorativa. Sem atestação textual independente consultada para cada acepção deste lema, não retroprojetar automaticamente a fonte de #26. |
| 28 | `Ἀβδηρόθεν` | **A** | Advérbio de origem/proveniência com elemento -θεν, associado a Ἄβδηρα. 'De Abdera' traduz valor de proveniência, não 'em Abdera'; sem citação independente da forma no relatório. |
| 29 | `ἀβέβαιος, ος, ον` | **P** | Adjetivo privativo ἀ- + βέβαιος. A consulta ao LSJ (via CLD) comprova emprego para olhos instáveis, relações inconstantes, fortuna e remédios incertos. A glosa 'instável (doença)' do DGP não fica diretamente demonstrada pelo exemplo externo de remédio; requer testemunho apropriado, sem suprimi-la. |
| 30 | `ἀβέβηλος, ος, ον` | **A** | Formação privativa em oposição a βέβηλος, com valor 'sagrado/inviolável'; o LSJ reproduz exemplos de Plutarco e diferencia também 'puro' quando aplicado a pessoas. Contexto cultual específico deve prevalecer; não equiparar mecanicamente a toda acepção de ἄβατος. |
| 31 | `ἀβελτερία, ας (ἡ)` | **A** | Substantivo abstrato feminino ἀβελτερία, -ας com valores de tolice e falta de discernimento. LSJ confirma uso em Platão (Teeteto 174c) e Aristóteles. A relação derivacional com #32 está registrada pelo DGP. |
| 32 | `ἀβέλτερος, α, ον` | **A** | Adjetivo ἀβέλτερος: DGP anota três terminações, enquanto LSJ apresenta a forma usual de duas e uma forma de três atestada em Platão, Filebo 48c. O LSJ também registra contexto cômico. Diferença editorial de paradigmas não autoriza eliminar a forma do DGP. |
| 33 | `ἀβελτέρως` | **A** | Advérbio ἀβελτέρως em -ως, derivado de #32. LSJ o menciona no registro de ἀβέλτερος (com citação de Plutarco, De tuenda sanitate 127e). Glosa 'tolamente' compatível; não confundir com substantivo #31. |
| 34 | `ἄβιος, ος, ον` | **P** | DGP reúne 'pobre', 'vida insuportável' e 'nômade' no mesmo lema ἄβιος. O valor de base associado a βίος não resolve, por si só, como surgiram historicamente as três acepções. Não foram verificados exemplos individuais em corpus ou léxico externo nesta rodada. |
| 35 | `ἀβίοτος, ος, ον` | **A** | Entrada DGP ἀβίοτος remete somente a ἀβίωτος (#36), sem glosa própria. LSJ registra ἀβίοτος como lema autônomo no Eurípides, Hipólito 821 e 868 ('que torna a vida inviável'); a relação com ἀβίωτος não é identidade universal de distribuição. Preservar remissão do DGP e documentar as atestações complementares. |
| 36 | `ἀβίωτος, ος, ον` | **P** | DGP descreve predicação de uma vida impossível de suportar, traz Demóstenes e Platão por abreviatura, e exemplos com neutro ἀβίωτον/ἀβίωτα e cópula elíptica [ἐστί]. CGL confirma adjetivo e usos impessoais do neutro; não tratar esses neutros como novas entradas lexicais. Localizações exatas das citações de Demóstenes/Platão do DGP requerem cotejo primário. |
| 37 | `ἀβιώτως` | **P** | DGP traduz ἀβιώτως genericamente como 'de modo intolerável' e as locuções ἔχειν/διατεθῆναι como 'ser intolerável'. CGL diferencia, no contexto de Plutarco, atitudes diante da vida ('não desejar mais viver' ou 'perder esperança de sobreviver'). Isso torna a correspondência tradutória uma questão de nuance contextual, **não** emenda automática. |
| 38 | `ἀβλάβεια, ας (ἡ)` | **P** | Substantivo ἀβλάβεια, derivado de #39; DGP possui sentidos de não causar dano, precaução e condição de não sofrer dano. LSJ/CLD confirmam sobretudo os valores ativo/passivo; 'precaução/cautela' requer contexto próprio. O original XML dividiu o português 'ausência' em ’au-’ + U+2028 + ’sência’; o cartão mostra 'au- sência'. Corrigir exclusivamente a exibição para 'ausência' mantendo o registro da leitura material. |
| 39 | `ἀβλαβής, ής, ές` | **A** | Adjetivo de duas terminações na apresentação LSJ (ἀβλαβής, ές), DGP registra ής, ές. Reconhecer sentidos ativo (não causar dano) e passivo (não sofrer dano) e sua combinação expressa em Platão, Leis 953b: ’ἀβλαβὴς τοῦ δρᾶσαί τε καὶ παθεῖν’. Construção com infinitivos articularizados no genitivo não pode ser traduzida como se houvesse apenas voz passiva. |
| 40 | `ἀβλαβῶς` | **A** | Advérbio ἀβλαβῶς formado de #39. DGP privilegia 'sem prejudicar', valor ativo; LSJ também registra 'com segurança', valor passivo, além do emprego em tratados ao cumprir condições sem transgressão (Tucídides 5.18/47). A glosa não está errada, mas não encerra o campo documentado externamente. |
| 41 | `ἀβλής, ῆτος` | **A** | Adjetivo em -ητ- com genitivo -ῆτος, registrado para masculino/feminino. O privativo é relacionado pelo DGP a βάλλω. Distinguir 'não lançado' do resultado 'não atingido' do verbete seguinte. |
| 42 | `ἄβλητος, ος, ον` | **A** | Adjetivo privativo de três terminações, com valor 'não atingido'. A semelhança de formação com #41 não prova equivalência de distribuição, que exigiria abonações. |
| 43 | `ἀβληχρός, ά, όν` | **P** | DGP classifica ἀ- como intensivo (não privativo); as acepções abrangem muralhas, sono, doença e morte. Rubricas Homero, Aristófanes e Plutarco foram expandidas na interface; conferir loci específicos. |
| 44 | `ἀβοήθητος, ος, ον` | **A** | Três esferas de aplicação: doença/veneno incurável, pessoa sem socorro e coisa ineficaz. A polissemia de ἀβοήθητος não se reduz a um único tipo de desamparo. |
| 45 | `ἀβόσχητος, ος, ον` | **A** | Formação privativa com βόσχω segundo a fonte; 'sem pastagens' é relativo à disponibilidade de pasto. A seleção de referentes depende de testemunhos ainda não localizados. |
| 46 | `ἀβουκόλητος, ος, ον` | **A** | Composto com βουκολέω: o DGP registra desinteresse e negligência, valores metafóricos. Não fabricar acepção literal 'sem pastor' por decomposição morfológica. |
| 47 | `ἀβουλία, ας (ἡ)` | **A** | Nome feminino derivado de ἄβουλος, com 'irreflexão' e 'indecisão'. São conceitos relacionados, mas não sinônimos necessários em todo contexto. |
| 48 | `ἄβουλος, ος, ον` | **A** | Adjetivo com referentes pessoais e não pessoais. Preservar regência em dativo do sentido 'indiferente a'; não confundir com o substantivo ἀβουλία. |
| 49 | `ἀβούλως` | **A** | Advérbio em -ως 'irrefletidamente'. Corresponde ao campo de ἄβουλος sem que a fonte autorize novas acepções de vontade deliberada. |
| 50 | `ἄβρεκτος, ος, ον` | **A** | Remissão pura a ἄβροχος (#64). Preservar a relação lexical; não reproduzir toda a definição como se constasse originalmente deste verbete. |
| 51 | `ἁβροβάτης, ου` | **A** | Composto de ἁβρός e βαίνω. 'Andar delicado' e avaliação 'efeminado' são caracterizações lexicais históricas, não descrições gerais de gênero. |
| 52 | `ἁβρόβιος, ος, ον` | **A** | Composto de ἁβρός e βίος, qualificação de modo de vida. A tradução avaliativa do DGP não deve ser universalizada para qualquer uso de ἁβρός. |
| 53 | `ἁβρόγοος, ος, ον` | **A** | Composto com γόος, qualificando modo de gemer. A comparação 'como mulher' é expressão da fonte, sem implicar exclusividade do referente feminino. |
| 54 | `ἁβροδίαιτα, ης (ἡ)` | **A** | Nome feminino relativo a δίαιτα; 'vida efeminada' no DGP. Relacioná-lo com o adjetivo #55 sem fundir classes gramaticais. |
| 55 | `ἁβροδίαιτος, ος, ον` | **A** | Adjetivo e substantivação neutra τὸ ἁβροδίαιτον na mesma entrada. A substantivação nomeia um modo de vida; não converte todas as formas em substantivos. |
| 56 | `ἄβρομος, ος, ον` | **P** | O 'duv.' é explícito: DGP admite leitura intensiva 'fragoroso' e privativa 'silencioso'. Cunliffe cita Ilíada 13.41 para leitura ruidosa; outra tradição distingue ἄβρωμος 'sem cheiro'. Suspender decisão editorial até colação contextual. |
| 57 | `ἁβροπενθής, ής, ές` | **A** | Composto ἁβρός + πένθος. O sentido de lamento langoroso exige prova de gênero/contexto antes de atribuir intensidade psicológica específica. |
| 58 | `ἁβρόπλουτος, ος, ον` | **A** | Composto ἁβρός + πλοῦτος com uso metafórico para cabelo viçoso/sedoso. Não transportar literalmente 'riqueza' financeira à interpretação. |
| 59 | `ἁβρός, ά, όν` | **A** | ἁβρός assume conotação positiva ('gracioso/delicado') e pejorativa ('luxuoso/efeminado'), segundo contexto e referente. Essa variação é corroborada no LSJ. |
| 60 | `ἀβροτάζω` | **P** | O DGP restringe ἀβροτάζω a primeira pessoa plural do subjuntivo aoristo. Ilíada 10.65 traz ἀβροτάξομεν ἀλλήλοιιν; o pronome é dual e a construção é descrita com genitivo por Cunliffe. Locus identificado. |
| 61 | `ἁβρότης, ητος (ἡ)` | **A** | Substantivo abstrato de ἁβρός. Distinguir requinte/opulência, delicadeza/indolência e viço da juventude; são três ambientes semânticos no DGP, não uma glosa universal. |
| 62 | `ἄβροτος, ος` | **P** | A forma ἄβροτος é descrita com duas e três terminações distribuídas entre cabeçalho e corpo. LSJ/Bailly atestam valor sacral em Ilíada 14.78 e lugar desabitado em tradição trágica. Não confundir com βρότος 'sangue'. |
| 63 | `ἁβροχίτων, ωνος` | **A** | Composto de ἁβρός com χιτών e flexão comum aos dois gêneros no DGP. O sentido têxtil 'túnica delicada' não autoriza generalizar 'cobertas finas' para todos os usos. |
| 64 | `ἄβροχος, ος, ον` | **A** | Adjetivo ἄβροχος tem valor de não molhado e de privado de chuva/água. Não confundir os dois predicados: um incide sobre molhamento, outro sobre ambiente seco. |
| 65 | `ἁβρύνω` | **A** | ἁβρύνω distingue ativa (ornar, mimar) e média (afetar superioridade, orgulhar-se). Preservar o dativo registrado no último sentido em vez de nivelar regências. |
| 66 | `ἁβρῶς` | **A** | Advérbio em -ῶς ligado à família de ἁβρός, com nuance de delicadeza e languidez. Polaridade avaliativa requer contexto da ocorrência. |
| 67 | `Ἀβυδηνός, ή, όν` | **A** | Gentílico de Ἄβυδος (#70) com feminino substantivado ἡ Ἀβυδηνή [χώρη], 'território de Abido'. A elipse da palavra entre colchetes é análise editorial, não parte atestada necessariamente. |
| 68 | `Ἀβυδόθεν` | **A** | Advérbio em -θεν indica proveniência 'de Abido', contrastando com o locativo #69. Não normalizar ambos como indicação genérica de lugar. |
| 69 | `Ἀβυδόθι` | **A** | Advérbio em -θι traduz 'em Abido'. A diferença espacial de proveniência em #68 vs localização em #69 é informação lexical relevante. |
| 70 | `Ἄβυδος, ου (ἡ)` | **P** | Topônimo Ἄβυδος aplicado a cidade da Trôade e a cidade do Egito segundo a fonte. Remissões históricas futuras precisam distinguir os dois referentes geográficos. |
| 71 | `ἄβυσσος, ος, ον` | **P** | ἄβυσσος passa de adjetivo 'sem fundo' a substantivo ἡ ἄβυσσος. LXX emprega o termo para o abismo/profundidade e Lc 8.31 o usa num contexto demonológico; 'habitação dos mortos' não vale para toda ocorrência. |
| 72 | `ἄγα` | **A** | ἄγα, dórico para ἄγη no DGP: preservar acento inicial. A forma não é intercambiável graficamente com ἀγά (#73). |
| 73 | `ἀγά` | **A** | ἀγά, dórico para ἀγή no DGP: acento final e forma-base diferem de #72; conservar as duas remissões sem colapso por normalização. |
| 74 | `ἀγάασθαι, ἀγάασθε` | **P** | Agrupamento de infinitivo ἀγάασθαι e segunda pessoa plural presente ἀγάασθε de ἀγάομαι. O modo de ἀγάασθε não vem especificado no DGP; não inventá-lo. |
| 75 | `Ἀγαβάτανα` | **A** | Remissão ortográfica Ἀγαβάτανα → Ἀγβάτανα (#136). Manter grafia alternativa sem promover explicação etimológica ou geográfica própria. |
| 76 | `ἀγαγεῖν` | **A** | ἀγαγεῖν é infinitivo de segundo aoristo de ἄγω, distinto do infinitivo presente do mesmo verbo. Preservar tempo/aspecto na análise morfológica. |
| 77 | `ἄγαγον` | **P** | ἄγαγον classificado no DGP como forma dórica de segundo aoristo de ἄγω; a forma isolada não autoriza decidir pessoa, número e contexto. |
| 78 | `ἀγάζω` | **P** | ἀγάζω apresenta insistência excessiva, valor médio de veneração e uso tardio de irritação. A citação de Ésquilo está na fonte, mas seu locus exato não foi estabelecido nesta rodada. |
| 79 | `ἀγάθεος` | **A** | ἠγάθεος é forma de referência do dórico ἀγάθεος no DGP. Registrar como variação dialetal, sem apagar acentos ou fundir entradas. |
| 80 | `ἀγαθοεργέω-ῶ` | **P** | O DGP reúne ἀγαθοεργέω e ἀγαθουργέω para 'fazer o bem'. LSJ identifica 1Timóteo 6.18 para a primeira e Atos 14.17 para a forma contraída; não inferir diferença semântica apenas da grafia. |
| 81 | `ἀγαθοεργία, ας (ἡ)` | **A** | Substantivo abstrato de ἀγαθοεργός: 'boa ação/benefício/serviço'. A fonte não especifica caráter litúrgico de serviço; evitar introduzir tal distinção sem testemunho. |
| 82 | `ἀγαθοεργός, ός, όν` | **A** | Adjetivo de agente ἀγαθός + ἔργον, 'que pratica o bem'. Manter flexão fornecida pelo DGP e não equiparar automaticamente a formas em -ουργ-. |
| 83 | `ἀγαθοποιέω-ῶ` | **P** | Verbo ἀγαθοποιέω marcado bíblico, com socorro a alguém e agir honestamente. O particípio ἀγαθοποιοῦντας em 1Pedro 2.15 corrobora ação boa no contexto ético; preservar as regências distintas da fonte. |
| 84 | `ἀγαθοποιΐα, ας (ἡ)` | **A** | Nome feminino ἀγαθοποιΐα, formado na família de #85, 'prática do bem/boa ação'. A rubrica bíblica não fornece locus específico nesta entrada e não autoriza atribuição de versículo por conjectura. |
| 85 | `ἀγαθοποιός, ός, όν` | **P** | ἀγαθοποιός combina valor geral benéfico, uso astrológico e substantivação bíblica. Separar terminologia astrológica de valor moral cristão; exigir abonação antes de ampliar sentidos. |
| 86 | `ἀγαθός, ή, όν` | **C** | ἀγαθός envolve nobreza, bravura, virtude, habilidade, utilidade, bens materiais e o bem filosófico; apresenta comparativos/superlativos em grande parte supletivos. A etimologia 〈ἄγαμαι〉 é proposta do DGP: Chantraine/Beekes consideram a origem incerta. |
| 87 | `ἀγαθουργέω-ῶ` | **A** | Remissão de ἀγαθουργέω para ἀγαθοεργέω (#80), preservando a variante verbal. Uma remissão não garante identidade de distribuição cronológica. |
| 88 | `ἀγαθουργία` | **A** | Remissão nominal ἀγαθουργία → ἀγαθοεργία (#81). Documentar variante formativa, sem fabricar sentidos próprios. |
| 89 | `ἀγαθουργός` | **A** | Remissão de agente ἀγαθουργός → ἀγαθοεργός (#82), com alteração de vogal/construção do composto. Manter ambos os índices lexicalmente recuperáveis. |
| 90 | `ἀγαθῶς` | **A** | Advérbio ἀγαθῶς 'bem'; não confundir com o neutro substantivado τὸ ἀγαθόν de #86, porque classe e sintaxe diferem. |
| 91 | `ἀγαθωσύνη, ης (ἡ)` | **A** | Nome abstrato ἀγαθωσύνη, rubrica bíblica; quatro ocorrências do NT documentadas em Rm 15.14, Gl 5.22, Ef 5.9 e 2Ts 1.11. O DGP traduz 'bondade'; nuanças contextuais precisam de estudo de passagem. |
| 92 | `ἀγαίομαι` | **A** | Verbo médio ἀγαίομαι apresenta indignação/inveja e admiração; a direção afetiva pode inverter conforme contexto. Não resolver ambiguidade sem frase atestada. |
| 93 | `ἀγακλεής, ής, ές` | **A** | ἀγακλεής derivado de ἄγαν + κλέος segundo DGP, qualificando fama extraordinária. Não confundir com as formações próximas #94–95. |
| 94 | `ἀγακλειτός, ή, όν` | **A** | ἀγακλειτός aplica-se a pessoa renomada ou objeto conhecido/memorável. A distribuição por referente está explícita, mas os loci individuais não foram conferidos. |
| 95 | `ἀγακλυτός, ή, όν` | **A** | A fonte traz ἀγακλυτός, ή, όν; o HEAD lexical ainda tem ής na segunda terminação. A branch de correções já restaura ή, e nenhuma nova emenda é necessária neste lote. |
| 96 | `ἀγάλακτος, ος, ον` | **A** | ἀγάλακτος: paciente pode ser mulher sem leite, pastagem incapaz de propiciar leite ou cria não aleitada. Preservar os três referentes para evitar uma definição excessivamente genérica. |
| 97 | `ἀγαλλίασις, εως (ἡ)` | **A** | Substantivo ἀγαλλίασις em -σις, designando regozijo/exultação e relacionado ao verbo #98. O DGP assinala uso bíblico, sem locus próprio. |
| 98 | `ἀγαλλιάω-ῶ` | **P** | Verbo ἀγαλλιάω no DGP admite ativa/média e construções com acusativo, dativo e preposições. Uma glosa única não resolve a sintaxe; verificar cada ocorrência bíblica em trabalho de atestação. |
| 99 | `ἀγάλλω` | **A** | ἀγάλλω: distinguir ativo 'honrar/ornar' de médio 'vangloriar-se/alegrar-se', com regências múltiplas. Não tratar toda forma média como passiva. |
| 100 | `ἄγαλμα, ατος (τό)` | **P** | ἄγαλμα progride de objeto precioso/oferenda a imagem cultual, estátua, símbolo e hieróglifo tardio no DGP. Não verter toda ocorrência como 'ídolo' sem contexto religioso e cronológico. |
| 101 | `ἀγαλμάτιον, ου (τό)` | **A** | Diminutivo ἀγαλμάτιον relacionado a ἄγαλμα. O sufixo pode indicar objeto pequeno, mas não implica necessariamente função cultual. |
| 102 | `ἀγαλματοποιός, οῦ (ὁ)` | **A** | Nome profissional ἀγαλματοποιός formado com ποιέω, 'escultor/estatuário'. Não reduzir sua denotação a fabricante de ídolos sem contexto da atividade. |
| 103 | `ἄγαμαι` | **P** | ἄγαμαι tem sentidos de admirar, encantar-se, invejar e irritar-se, com regências diferenciadas. Bailly confirma a polaridade positiva/negativa; registrar acusativo, genitivo e dativo quando contextualizados. |
| 104 | `Ἀγαμεμνόνειος, α, ον` | **A** | Adjetivo referente a Agamenão com variantes Ἀγαμεμνόνειος e Ἀγαμεμνόνεος. Preservar as duas flexões, sem transformar a variante do corpo em acepção independente. |
| 105 | `Ἀγαμεμνονίδης, ου (ὁ)` | **A** | Patronímico Ἀγαμεμνονίδης indica filho ou descendente de Agamenão, não necessariamente uma personagem mitológica específica na ausência de ocorrência. |
| 106 | `Ἀγαμέμνων, ονος (ὁ)` | **P** | Nome próprio Ἀγαμέμνων, chefe dos gregos no ciclo troiano, conforme DGP. A relação 〈ἄγαν, μένος〉 é hipótese etimológica da fonte, não derivação histórica comprovada pelo resumo mítico. |
| 107 | `ἀγαμένως` | **A** | Advérbio ἀγαμένως relacionado a ἄγαμαι, com admiração, modo admirável e aprovação. Distinguir juízo do observador de modo de ação. |
| 108 | `ἀγαμία, ας (ἡ)` | **A** | Nome feminino ἀγαμία (celibato) derivado de ἄγαμος; o DGP não apresenta lei ou contexto institucional que permita determinar o regime jurídico. |
| 109 | `ἀγαμίου δίκη (ἡ)` | **P** | Expressão jurídica composta ἀγαμίου δίκη: ação contra homens que ultrapassam idade de casar, segundo o DGP. Faltam fontes legais primárias para época, local e procedimento; não inventá-los. |
| 110 | `ἄγαμος, ος, ον` | **A** | ἄγαμος tanto qualifica solteiro quanto, na citação de Sófocles, um 'casamento que não é casamento'. O exemplo literário é uso paradoxal e não definição cívica geral. |
| 111 | `ἄγαν` | **P** | ἄγαν indica grau muito/eccessivo, inclusive μηδὲν ἄγαν. A derivação 〈ἄγω〉 consta do DGP e exige controle etimológico independente antes de ser aceita como estabelecida. |
| 112 | `ἀγανακτέω-ῶ` | **P** | ἀγανακτέω abrange vinho em fermentação, agitação interior e indignação de pessoa. O DGP registra múltiplas preposições/casos (dat., ἐπί, περί, πρός etc.), a preservar, sem nivelar tudo como transitivo direto. |
| 113 | `ἀγανάκτησις, εως (ἡ)` | **A** | ἀγανάκτησις denota causa de indignação, sentimento e sensação desagradável. Distinguir objeto motivador e estado afetivo, em vez de fundir as três acepções. |
| 114 | `ἀγάννιφος, ος, ον` | **A** | Composto com ἄγαν e νίφω 'coberto de neve'. Não quantificar neve ou postular região climática sem testemunhos. |
| 115 | `ἀγανόρειος, α, ον` | **A** | Remissão de ἀγανόρειος a ἀγήνωρ. Preservar destino e grafia; não deduzir pessoa, gênero ou uso genealógico sem contexto. |
| 116 | `ἀγανός, ή, όν` | **A** | ἀγανός com ἀ- declarado intensivo no DGP, não privativo. Os valores suave/sereno dependem de palavra, objeto ou pessoa qualificados. |
| 117 | `ἀγανοφροσύνη, ης (ἡ)` | **A** | ἀγανοφροσύνη, nome feminino derivado de ἀγανόφρων; o XML possui hífen discricionário dentro da base, omitido na exibição. É normalização tipográfica, não erro de morfologia. |
| 118 | `ἀγανόφρων, ων, ον` | **A** | ἀγανόφρων registra genitivo -ονος e dois referentes: sujeito gentil ou qualidade que traz serenidade. O genitivo deve ser mantido no paradigma. |
| 119 | `ἀγανῶς` | **A** | Advérbio ἀγανῶς 'gentilmente/serenamente', distinto do adjetivo #116 e do composto #118; nenhuma regência própria foi dada. |
| 120 | `ἀγάομαι` | **A** | O DGP classifica ἀγάομαι como forma épica de ἄγαμαι. Equivalência dialetal não prova coincidência em todos os tempos e formas verbais. |
| 121 | `ἀγαπάζω` | **A** | Verbo ἀγαπάζω em usos restritos e variantes épicas/líricas, relacionado a ἀγαπάω. LSJ/Cunliffe confirmam acolher com afeição em Od 16.17 e voz média; distinguir gesto de acolhida de afeto abstrato. |
| 122 | `ἀγαπάω-ῶ` | **A** | ἀγαπάω abrange acolher, amar, preferir, contentar-se, ter hábito e uso passivo, com regências diferentes. Lexicon Thucydideum confirma 'contentar-se'; não reduzir tudo a 'amor' no sentido afetivo. |
| 123 | `ἀγάπη, ης (ἡ)` | **P** | ἀγάπη é amor/caridade e também refeição comunitária cristã. LSJ registra Judas 12 para o segundo uso, mas 'ceia eucarística' no DGP é qualificação que necessita análise ritual histórica: ágape não equivale automaticamente à Eucaristia em todos os textos. |
| 124 | `ἀγαπήνωρ, ορος` | **A** | Fonte distingue lema ἀγαπήνωρ, ορος e nota inicial definicional '(masc.)'. HEAD lexical deslocou-a para o lema, enquanto ramo de correções preserva a segmentação XML. É divergência editorial previamente tratada, não nova emenda. |
| 125 | `ἀγάπησις, εως (ἡ)` | **A** | Nome abstrato ἀγάπησις em -σις relacionado a ἀγαπάω. Afeição/carinhos/amor não designa por si refeição cristã de ἀγάπη (#123). |
| 126 | `ἀγαπητικός, ή, όν` | **A** | Adjetivo ἀγαπητικός designa agente afetuoso, associado a ἀγαπητός, mas não é sinônimo de ser objeto do amor; distinguir voz semântica ativa/dispositiva. |
| 127 | `ἀγαπητός, ή, όν` | **P** | ἀγαπητός: amado, desejável, uso impessoal de aceitação e substantivação para filho/filha únicos. LSJ confirma Homero, LXX e Platão; a acepção familiar não equivale necessariamente a μονογενής em qualquer contexto. |
| 128 | `ἀγαπητῶς` | **A** | Advérbio ἀγαπητῶς tem dois valores contextuais contrastantes: 'de bom grado' e 'mal/com dificuldade'. LSJ confirma 'gladly/contentedly' e 'barely/scarcely'; conservar ambas as acepções. |
| 129 | `ἀγάρροος-ους, οος-ους, οον-ουν` | **A** | Adjetivo com formas contraídas -ρροος/-ρρους, declinadas no cabeçalho. A variação gráfica não significa múltiplas raízes; o valor é curso caudaloso/impetuoso. |
| 130 | `ἀγάστονος, ος, ον` | **A** | ἄγαν + στένω, com mar que brame e pessoa que geme. Os diferentes referentes justificam glosas sonoras distintas sem postular verbetes homógrafos. |
| 131 | `ἀγαστός, ή, όν` | **A** | ἀγαστός relacionado a ἄγαμαι: admirável ou querido, segundo o DGP. A proximidade de sentidos não garante substituição lexical em toda construção. |
| 132 | `ἀγαστῶς` | **A** | Advérbio ἀγαστῶς 'admiravelmente'; não transportar automaticamente o segundo valor afetivo do adjetivo #131. |
| 133 | `ἀγαυός, ή, όν` | **A** | ἀγαυός pode qualificar pessoa ilustre e coisa esplêndida, com domínios diferentes na fonte. Sem etimologia explícita não acrescentar uma reconstrução. |
| 134 | `ἀγαυρός, ά, όν` | **A** | ἀγαυρός com base intensiva no DGP; ἀγαυρότατα é advérbio de superlativo presente na definição. Não promovê-lo a novo lema adjetival autônomo. |
| 135 | `ἀγάω` | **A** | ἀγάω ocorre especialmente como médio ἀγάομαι e é remetido a ἄγαμαι, sob restrição de tempos presente/imperfeito. Não criar paradigma restante. |
| 136 | `Ἀγβάτανα, ων (τά)` | **P** | Ἀγβάτανα, topônimo plural neutro da Média e da Síria segundo DGP. A remissão de #75 fornece grafia alternativa; não fundir cidades distintas nem atribuir etimologia não fornecida. |
| 137 | `ἀγγαρεύω` | **P** | Verbo ἀγγαρεύω bíblico com valor de requisição coercitiva. Mt 5.41 e 27.32 exemplificam emprego no período romano, derivado historicamente da instituição de correios persas. Separar história institucional de tradução contextual. |
| 138 | `ἀγγαρήϊον, ου (τό)` | **A** | Substantivo ἀγγαρήϊον designa serviço postal persa. Middle Liddell confirma registro jônico de correio montado; não atribuir automaticamente origem hebraica por semelhança. |
| 139 | `ἀγγαρήϊος, ου (ὁ)` | **P** | ἀγγαρήϊος é variante jônica de ἄγγαρος segundo Middle Liddell, com nota '[persa]' na fonte DGP. Distinguir etiqueta de empréstimo de relação cognata comprovada. |
| 140 | `ἄγγαρος, ος, ον` | **P** | ἄγγαρος designa mensageiro real e adjetivo de correio. LSJ cita Heródoto 3.126, Xenofonte, Ciropédia 8.6.17, e uso metafórico 'fogo mensageiro' em Ésquilo Agamêmnon 282; não reconstruir etimologia iraniana específica sem evidência. |
| 141 | `ἀγγεῖον, ου (τό)` | **A** | Recipiente material e extensão anatômica/botânica: registrar as duas esferas e a derivação indicada de ἄγγος, sem restringir a vasilha. |
| 142 | `ἀγγελία, ας (ἡ)` | **A** | Distinguir a notícia, o anúncio imperativo e a embaixada ou delegação, três valores nominais ligados a ἄγγελος. |
| 143 | `ἀγγελιαφόρος, ου (ὁ, ἡ)` | **A** | O segundo sentido é função cortesã na Pérsia, não sinônimo genérico de mensageiro; origem composicional apresentada pela fonte. |
| 144 | `ἀγγελικός, ή, όν` | **A** | O valor “angélico” pertence à rubrica tardia, distinto do adjetivo relativo a mensageiro. |
| 145 | `ἀγγέλλω` | **A** | Verbo com paradigmas ativo e passivo; περί rege genitivo no segundo sentido, e a notícia pode vir em ὅτι, ὡς, infinitivo ou particípio; médio anuncia a própria chegada. |
| 146 | `ἄγγελμα, ατος (τό)` | **A** | Nome de resultado verbal: mensagem ou notícia derivada, segundo a entrada, de ἀγγέλλω. |
| 147 | `ἄγγελος, ου (ὁ)` | **A** | Mensageiro e delegado são o núcleo do vocábulo; “mensagem” é raro, “anjo” é uso bíblico e cristão indicado como rubrica. |
| 148 | `ἄγγος, εος-ους (τό)` | **A** | Substantivo neutro de cinco grupos semânticos; anotar útero como raro e invólucro zoológico sem o reduzir a vaso doméstico. |
| 149 | `ἄγδην` | **A** | Advérbio “de modo arrastado”; remissão etimológica a ἄγω não fornece locuções adicionais. |
| 150 | `ἄγε` | **A** | O XML desloca “e ἄγετε” para <def>; o cartão corrigido conserva ἄγε e registra também ἄγετε na remissão a ἄγω, sem forçar um segundo lema. |
| 151 | `ἄγε` | **A** | Imperf. poético de ἄγω; associação alternativa a ἄγνυμι é expressamente apenas possível. |
| 152 | `ἆγε` | **A** | Forma dórica de terceira pessoa do imperfeito de ἄγω, com eventual aoristo de ἄγνυμι marcado como hipótese. |
| 153 | `ἀγειρόντων` | **A** | Forma isolada do imperativo presente ativo, terceira pessoa do plural; não confundir com presente indicativo. |
| 154 | `ἀγείρω` | **P** | Reunião de pessoas, provisão de coisas, coleta/mendicância e médio-passivo de agrupamento; exemplos homéricos incluem porcos e concentração do ânimo. |
| 155 | `ἁγεῖτο` | **A** | Forma dialetal dórica do imperfeito de ἡγέομαι, sem criar verbo independente. |
| 156 | `ἀγείτων, ων, ον` | **A** | Adjetivo privativo de vizinhança, com genitivo ονος indicado no corpo; a estrutura morfológica deve permanecer distinta da glosa. |
| 157 | `ἀγελαῖος, α, ον` | **A** | Do rebanho ao grupo social; “vulgar” e “comum” constituem acepção figurada, não qualidade do gado. |
| 158 | `ἀγελάρχης, ου (ὁ)` | **A** | Composto ἀγέλη + ἄρχω; liderança literal de rebanho e extensão a chefia de pessoas. |
| 159 | `ἀγελαστί` | **A** | Advérbio negativo de γελάω: ausência do ato de rir, não necessariamente tristeza. |
| 160 | `ἀγέλαστος, ος, ον` | **A** | Distinguir a pessoa que não ri do acontecimento que não provoca riso; valor poético e conotação fúnebre. |
| 161 | `ἀγελείη, ης (ἡ)` | **A** | Epíteto jônico de Atena relacionado ao transporte de despojos; não tomar “predadora” como substantivo comum independente. |
| 162 | `ἀγέλη, ης (ἡ)` | **A** | Rebanho, grupo organizado e agrupamento juvenil; diferença única entre original e editor é hífen discricionário interno a “grupo”. |
| 163 | `ἀγεληδόν` | **A** | Advérbio coletivo de movimento em rebanho, bando ou tropa; não é substantivo. |
| 164 | `ἀγέληφι` | **A** | Dativo instrumental épico de ἀγέλη; forma flexional e não homônimo lexical. |
| 165 | `ἀγελοιος, ος, ον` | **A** | Negação “que não faz rir”, semanticamente distinta de ἀγέλαστος quando este qualifica a pessoa sem riso. |
| 166 | `ἀγελοίως` | **A** | Advérbio “de modo não risível”; não extrapolar usos sem abonação. |
| 167 | `ἀγέμεν` | **A** | Infinitivo presente poético de ἄγω, preservando tempo e rubrica de registro. |
| 168 | `ἀγεμονεύω` | **A** | Equivalência dialetal dórica com ἡγεμονεύω; não inventar acepções próprias. |
| 169 | `ἀγεμών` | **A** | Equivalência dórica com ἡγεμών; não atribuir classe sem consultar o lema remetido. |
| 170 | `ἄγεν` | **A** | Terceira pessoa plural do segundo aoristo passivo poético de ἄγνυμι; não confundir com ἄγω. |
| 171 | `ἀγενεαλόγητος, ος, ον` | **A** | Restrição bíblica: falta de antepassados conhecidos ou de genealogia; não equiparar automaticamente a eternidade ontológica. |
| 172 | `ἀγένεια, ας (ἡ)` | **A** | Substantivo social de baixa linhagem e origem obscura; não fundir com criação metafísica. |
| 173 | `ἀγένειος, ος, ον` | **A** | Qualificação etária (imberbe), figurada (pueril) e plural substantivado “os adolescentes”. |
| 174 | `ἀγενής, ής, ές` | **A** | O mesmo adjetivo comporta “incriado” e “de baixa linhagem”; τὰ ἀγενῆ tem acepção bíblica de coisas humildes/vis. |
| 175 | `ἀγένητος, ος, ον` | **P** | Negação de origem ou começo, inexistência e impossibilidade de realização; distinguir do ἀγέννητος formado de γεννάω. |
| 176 | `ἀγέννεια` | **A** | Remissão à variante ἀγένεια, sem tratar grafia duplicada como nova acepção. |
| 177 | `ἀγεννής, ής, ές` | **A** | Ausência de origem nobre e de qualidade moral; a fonte vincula o composto a γέννα. |
| 178 | `ἀγέννητος, ος, ον` | **P** | Não geração/nascimento, condição social e esterilidade: distinguir rigorosamente de ἀγένητος e não substituir a raiz γεννάω por γίγνομαι. |
| 179 | `ἀγεννήτως` | **A** | Advérbio de não ter sido gerado, específico quanto à passividade do nascimento. |
| 180 | `ἀγεννῶς` | **A** | Advérbio avaliativo referente a nobreza de conduta e covardia; não é sinônimo do advérbio de geração. |
| 181 | `ἁγέομαι` | **A** | Forma dórica de ἡγέομαι, cuja equivalência está integralmente numa remissão. |
| 182 | `ἀγέραστος, ος, ον` | **A** | Adjetivo sem prêmio e sem honrarias; formação privativa de γέρας. |
| 183 | `ἀγερέσθαι` | **A** | Infinitivo do segundo aoristo médio de ἀγείρω; preservar a marca do aoristo. |
| 184 | `ἀγέρθη` | **A** | Terceira pessoa singular do aoristo passivo poético de ἀγείρω. |
| 185 | `ἀγερμός, οῦ (ὁ)` | **A** | Da convocação militar à coleta de contribuições, mendicância e resultado da arrecadação; quatro grupos de sentido. |
| 186 | `ἀγέροντο` | **A** | Terceira pessoa plural do aoristo médio poético de ἀγείρω. |
| 187 | `ἄγερσις, εως (ἡ)` | **A** | Substantivo ação de reunir, concentrar ou coletar, distinto de recrutamento armado restrito. |
| 188 | `ἀγέρωχος, ος, ον` | **A** | Coexistem avaliação positiva (nobre/glorioso) e negativa (insolente/arrogante); contexto resolve a polaridade. |
| 189 | `Ἀγεσίλας` | **A** | Grafia dórica do nome próprio Ἀγησίλαος, não um antropônimo novo. |
| 190 | `ἄγεσκον` | **A** | Imperf. iterativo de ἄγω; elemento -σκ- não deve ser confundido com passado simples. |
| 191 | `ἄγευστος, ος, ον` | **A** | Alternância entre quem não provou e o objeto não degustado, mais sabor insípido; genitivo regido na acepção de experiência. |
| 192 | `ἄγη1, ης (ἡ)` | **A** | Primeiro homógrafo ἄγη1, substantivo feminino: assombro e ciúme/inveja, remetido a ἄγαμαι. |
| 193 | `ἄγη2` | **A** | Segundo homógrafo ἄγη2, forma verbal (terceira singular do segundo aoristo passivo poético de ἄγνυμι). |
| 194 | `ἅγη` | **A** | Plural de ἅγος, não confundir com os homógrafos ἄγη1 e ἄγη2. |
| 195 | `ἀγή, ῆς (ἡ)` | **A** | Substantivo de fragmentação, arrebentação das ondas, curva e astúcia; polissemia do corpo e figuração não reduzíveis à “quebra”. |
| 196 | `ἀγηγέρατο` | **A** | Mais-que-perfeito passivo épico, terceira pessoa plural de ἀγείρω. |
| 197 | `ἀγήγερμαι` | **A** | Remissão à forma perfeita médio-passiva de ἀγείρω, sem acepção independente. |
| 198 | `ἀγῆλαι` | **A** | Infinitivo do aoristo de ἀγάλλω; evitar confundir com formas de ἄγω. |
| 199 | `ἀγηλατέω-ῶ` | **A** | Ação de expulsar como impuro, com marca de desterro religioso; composição proposta com ἄγος/ἐλαύνω. |
| 200 | `ἄγημα, ατος (τό)` | **A** | Corpo militar organizado ou divisão, resultado nominal relacionado a ἄγω. |
| 201 | `ἅγημαι,` | **A** | Equivalência dórica com ἥγημαι (de ἡγέομαι); a vírgula final no cabeçalho vem do XML e merece retenção documental. |
| 202 | `ἀγηνορίη, ης (ἡ)` | **A** | Forma jônica: mérito/coragem e orgulho/arrogância; registro dialetal e polaridade contrastiva. |
| 203 | `ἀγήνωρ, ορος` | **A** | Adjetivo de coragem, orgulho e magnificência; análise composicional ἄγαν + ἀνήρ consta na fonte, não prova etimologia histórica independente. |
| 204 | `ἀγήοχα` | **A** | Forma do perfeito de ἄγω, não substantivo ἀγή. |
| 205 | `ἀγήραος, ος, ον` | **A** | Não envelhecer e não se deteriorar são referentes diferentes, pessoal e material. |
| 206 | `ἀγήρατος, ος, ον` | **A** | O valor “imortal” acompanha o adjetivo de não envelhecimento, sem igualar necessariamente a eternidade metafísica. |
| 207 | `ἀγήρως` | **A** | Remissão a ἀγήραος, sem admitir automaticamente equivalência de todos os paradigmas. |
| 208 | `Ἀγησίλαος, ου (ὁ)` | **A** | Nome próprio Agesilau, rei de Esparta, não adjetivo “sem velhice”. |
| 209 | `ἀγητός, ή, όν` | **A** | Adjetivo admirável/surpreendente derivado, conforme fonte, de ἄγαμαι. |
| 210 | `ἁγήτωρ` | **A** | Grafia dórica igualada ao substantivo ἡγήτωρ. |
| 211 | `ἁγιάζω` | **A** | Uso bíblico de ἁγιάζω: dedicar, consagrar e celebrar festas; preservar paradigma futuro e aoristo. |
| 212 | `ἁγιασμός, οῦ (ὁ)` | **A** | Consagração e santificação/santidade, significados nominais distintos; rubrica bíblica expressa. |
| 213 | `ἁγίζω` | **A** | Uso sacrificial ativo, versus médio de temor religioso e veneração; não fundir com ἁγιάζω. |
| 214 | `ἀγινέω` | **A** | Transportar/conduzir no ativo, fazer-se conduzir no médio, com nota de valência. |
| 215 | `ἅγιος, α, ον` | **A** | Santo, sagrado e consagrado; τὸ ἅγιον é substantivação neutra para objeto ou lugar sacro. |
| 216 | `ἁγιότης, ητος (ἡ)` | **A** | Santidade, mas “pureza moral; sinceridade” sob marca bíblica; não impor somente sentido cultual. |
| 217 | `Ἆγις, ιδος (ὁ)` | **A** | Nome próprio dos reis espartanos Ágis, com genitivo -ιδος e masculino. |
| 218 | `ἁγιστεία, ας (ἡ)` | **A** | Nome feminino de cerimônia ritual e culto, derivado de ἁγιστεύω na fonte. |
| 219 | `ἁγιστεύω` | **A** | Culto ritual, modo de vida santo e purificação das mãos; o verbo não possui somente sentido moral. |
| 220 | `ἁγιωσύνη, ης (ἡ)` | **A** | Santidade/castidade e consagração, ambas sob rubrica bíblica; distinguir de ἁγιότης. |
| 221 | `ἀγκάζομαι` | **A** | O médio ἀγκάζομαι refere-se ao ato de tomar nos braços e abraçar; a flexão indicada é poética. |
| 222 | `ἄγκαθεν1` | **A** | Primeiro homógrafo ἄγκαθεν1: advérbio “com abraço” ou “com apoio nos cotovelos”. |
| 223 | `ἄγκαθεν2` | **A** | Segundo homógrafo ἄγκαθεν2: equivalência poética a ἀνέκαθεν, sem partilhar os sentidos de ἄγκαθεν1. |
| 224 | `ἀγκαλεῖσθε` | **A** | A mesma forma é segunda pessoa plural do imperativo e do indicativo presente médio; ambiguidade flexional relevante. |
| 225 | `ἀγκαλέσαιτο` | **A** | Optativo médio de aoristo, terceira pessoa singular de ἀγκαλέω. |
| 226 | `ἀγκαλέω` | **A** | Remissão poética a ἀνακαλέω, cujo sentido não se infere por mera semelhança gráfica. |
| 227 | `ἀγκάλη, ης (ἡ)` | **A** | Braço humano, braço de mar/rios e medida por braçada; observar dativo plural frequente ἀγκάλαις. |
| 228 | `ἀγκαλίζομαι` | **A** | Presente e aoristo de “levar nos braços”; médio “abraçar”; mudança de hifenização discricionária no perfeito não é divergência lexical. |
| 229 | `ἀγκαλίς, ίδος (ἡ)` | **A** | Braço e braçada, com exemplo do dativo plural ἐν ἀγκαλίδεσσι. |
| 230 | `ἀγκάς` | **A** | Advérbio locativo “nos braços”; diferente de ἀγκάλη nominal. |
| 231 | `ἀγκίστριον, ου (τό)` | **A** | Diminutivo nominal de anzol, não embarcação ou instrumento diverso. |
| 232 | `ἀγκιστροειδής, ής, ές` | **A** | Adjetivo -ειδής de configuração em forma de anzol; o composto inclui εἶδος. |
| 233 | `ἄγκιστρον, ου (τό)` | **A** | Gancho de anzol ou anzol, sem acepção figurada atestada na ficha do DGP. |
| 234 | `ἀγκιστρόω-ῶ` | **A** | Verbo de moldagem em gancho; particípio perfeito passivo fornece resultado estático de curvatura. |
| 235 | `ἀγκλίνω` | **A** | Equivalência poética a ἀνακλίνω, sem acepção autônoma. |
| 236 | `ἄγκοινα, ης (ἡ)` | **A** | Braço e envolvimento/abraço são os dois valores; a derivação declarada é ἀγκών. |
| 237 | `ἄγκος, εος-ους (τό)` | **A** | Cavidade/reentrância e vale; não fundir com ἄγγος recipiente. |
| 238 | `ἀγκρεμάννυμι` | **A** | Remissão poética a ἀνακρεμάννυμι, conservando escrita exata da entrada. |
| 239 | `ἄγκρισις` | **A** | Remissão poética a ἀνάκρισις, sem sentidos acrescentados. |
| 240 | `ἀγκροτέω` | **A** | Grafia remetida a ἀνακροτέω; o DGP não marca aqui novo sentido. |
| 241 | `ἀγκρούομαι` | **A** | Remissão poética a ἀνακρούομαι. |
| 242 | `ἀγκύλη, ης (ἡ)` | **A** | Objeto técnico polissêmico: correia da lança, lança equipada, laços mecânicos/náuticos e articulação corporal; não reduzir a “gancho”. |
| 243 | `ἀγκυλογλώχιν, ινος` | **A** | Adjetivo de esporões curvos (masc./fem.) relacionado a γλωχίς; termo técnico descritivo. |
| 244 | `ἀγκυλομήτης, ου` | **A** | Composto qualificativo de ardil mental, de ἀγκύλος + μῆτις, sem confundir com curvatura física. |
| 245 | `ἀγκυλόπους, ους, ουν` | **A** | Adjetivo “de pés curvos” registrado só com δίφρος, cadeira curul; preservar a restrição colocacional. |
| 246 | `ἀγκύλος, η, ον` | **A** | Curvatura física, caráter ardiloso, complexidade e concisão estilística: quatro esferas, não um único sinônimo. |
| 247 | `ἀγκυλότοξος, ος, ον` | **A** | Qualidade do arco recurvo, adjetivo composto com τόξον. |
| 248 | `ἀγκυλοχείλης, ου` | **A** | Adjetivo masculino para bico recurvado, não “lábios” humanos apesar do componente χεῖλος. |
| 249 | `ἄγκυρα, ας (ἡ)` | **A** | Locuções náuticas distintas de lançar e levantar âncora; segundo sentido “foice/podadeira” exige preservação. |
| 250 | `ἀγκυρουχία, ας (ἡ)` | **A** | Substantivo de atividade de ancoragem, não a âncora material. |
| 251 | `ἀγκύψας` | **A** | Particípio do aoristo poético de ἀνακύπτω. |
| 252 | `ἀγκών, ῶνος (ὁ)` | **A** | Cotovelo, articulação, ângulo e braço de cadeira; distinguir sentido anatômico de geometria material. |
| 253 | `ἀγλαΐα, ας (ἡ)` | **A** | Brilho/vaidade, triunfo/festa, adorno e nome de uma Graça; não confundir substantivo comum e teônimo. |
| 254 | `ἀγλαΐζω` | **A** | Ativo de glória e honra, médio reflexivo de enfeitar-se e experimentar alegria; os tempos citados são declarados pela fonte. |
| 255 | `ἀγλαΐη` | **A** | Grafia jônica remitida a ἀγλαΐα, não subdivisão do nome próprio. |
| 256 | `ἀγλαΐηφι` | **A** | Dativo épico de ἀγλαΐα; forma flexional, não lema independente de objeto. |
| 257 | `ἀγλάϊσμα, ατος (τό)` | **A** | Nome resultativo de brilho/ornamento e derivação indicada de ἀγλαΐζω. |
| 258 | `ἀγλαόκαρπος, ος, ον` | **A** | Qualificação de frutos magníficos, não sentido literal “fruto brilhante” necessariamente. |
| 259 | `ἀγλαός, ή` | **P** | O cabeçalho divide a flexão ἀγλαός, ή / e ός, όν entre lema e <def>; ambas variantes de desinência devem ser lidas juntas; soft hyphen em “ilustre” não é perda semântica. |
| 260 | `ἀγλαοφωτίς, ίδος (ἡ)` | **A** | Nome botânico remitido a γλυκυσίδη; a etimologia associativa com ἀγλαός/φῶς não identifica por si só a planta. |
| 261 | `ἀγλαώψ, ῶπος` | **A** | Adjetivo feminino “de aspecto brilhante”, com genitivo -ῶπος; composto com ὤψ. |
| 262 | `ἀγλευκής, ής, ές` | **A** | Privação de doçura e sentido de amargo; etimologia declarada com γλεῦκος. |
| 263 | `ἄγλις, ιθος (ἡ)` | **A** | Substantivo feminino nome de unidade do alho (“dente”), não elemento anatômico. |
| 264 | `ἄγλωσσος, ος, ον` | **A** | Ausência anatômica de língua, mudez, ausência de eloquência e não falar grego; “bárbaro” pertence à quarta acepção contextual. |
| 265 | `ἄγλωττος` | **A** | Forma ática equiparada a ἄγλωσσος; não afirmar dialectologia adicional. |
| 266 | `ἄγμα, ατος (τό)` | **A** | Substantivo neutro de fragmento ligado a ἄγνυμι. |
| 267 | `ἄγναμπτος, ος, ον` | **A** | Inflexibilidade literal; eventual uso moral exige documentação que não aparece nesta entrada. |
| 268 | `ἄγναπτος, ος, ον` | **A** | Tecido ainda não lavado, portanto novo, distinto do “novo” bíblico da entrada seguinte. |
| 269 | `ἄγναφος, ος, ον` | **A** | Uso bíblico registrado para tecido novo; a fonte não explicita “sem lavar” neste artigo. |
| 270 | `ἁγνεία, ας (ἡ)` | **A** | Pureza sagrada, abstinência sexual e plural de práticas de consagração: cuidado com número gramatical. |
| 271 | `ἅγνευμα, ατος (τό)` | **A** | Pureza e castidade feminina explicitamente, sem igualar a todos os rituais de ἁγνεία. |
| 272 | `ἁγνεύω` | **P** | Verbo de pureza e abstinência: acusativo de relação, infinitivo e genitivo regido; Eurípides e Heródoto são expansões editoriais de eur./her. |
| 273 | `ἁγνίζω` | **A** | Ações de lavar e purificar, inclusive batismo de fogo, médio reflexivo e construção bíblica com ἀπό + genitivo. |
| 274 | `ἅγνισμα, ατος (τό)` | **A** | Substantivo de purificação ou expiação, distinto de processo moral mais amplo. |
| 275 | `ἁγνισμός, οῦ (ὁ)` | **A** | Purificação especificamente ritual e valores de pureza/santidade. |
| 276 | `ἁγνιστέος, α, ον` | **A** | Adjetivo verbal remetido a ἁγνίζω, sem paradigmas extras. |
| 277 | `ἀγνοεῦντες` | **A** | Particípio presente jônico no nominativo plural de ἀγνοέω; não confundir com forma finita. |
| 278 | `ἀγνοέω-ῶ` | **P** | Valências de ignorância: περί + genitivo, acusativo, particípio, ὅτι/ὡς e interrogativa indireta; exemplos da fonte têm abreviações Homero/Platão/Demóstenes expandidas. |
| 279 | `ἀγνόημα, ατος (τό)` | **A** | Distinguir ignorância, erro involuntário e pecado por ignorância no contexto bíblico. |
| 280 | `ἄγνοια, ας (ἡ)` | **A** | Três esferas distintas: ignorância intelectual, erro inadvertido e termo médico de perda de consciência; supressão do hífen discrecional em Medic. não altera sentido. |
| 281 | `ἀγνοιῇσι` | **A** | Terceira pessoa singular do subjuntivo épico de ἀγνοέω. |
| 282 | `ἁγνόρυτος, ος, ον` | **A** | Curso limpo de rio, composto com ῥέω; não equivale a santidade ritual. |
| 283 | `ἁγνός, ή, όν` | **A** | Pureza sacral, ausência de contaminação, inocência moral e alimento que não mancha: manter quatro referentes. |
| 284 | `ἁγνότης, ητος (ἡ)` | **A** | Substantivo bíblico de pureza/castidade, não necessariamente todos os sentidos de ἁγνός. |
| 285 | `ἄγνυμι` | **A** | Paradigma irregular de ἄγνυμι (futuro, aoristo, passivo aoristo II); distinguir ativo de quebrar e médio de romper-se. |
| 286 | `ἀγνωμονέω-ῶ` | **A** | Imprudência decisória e injustiça no trato com pessoas; εἰς/πρός + acusativo expressam relação. |
| 287 | `ἀγνωμόνως` | **A** | Advérbio de imprudência e injustiça, valores distintos e ambos documentados. |
| 288 | `ἀγνωμοσύνη, ης (ἡ)` | **C** | A fonte numera “4 insensibilidade” e novamente “4 pl. suspeitas”; registrar duplicidade numerativa do XML sem corrigir silenciosamente o testemunho. |
| 289 | `ἀγνώμων, ων, ον` | **A** | Adjetivo insensato, ignorante, insensível e cruel/obstinado; o genitivo ονος consta do corpo, e não se deve reduzir a “ignorante”. |
| 290 | `ἀγνώς, ῶτος` | **A** | Adjetivo comum masc./fem. que pode indicar desconhecido ou desconhecedor; genitivo na construção de conhecimento. |
| 291 | `ἁγνῶς` | **A** | Advérbio de pureza e santidade, não variante de ἀγνώς (“desconhecido”). |
| 292 | `ἀγνώσασκε` | **A** | Aoristo iterativo, terceira pessoa singular de ἀγνοέω; não confundir com presente. |
| 293 | `ἀγνωσία, ας (ἡ)` | **A** | Falta de conhecimento, obscuridade e cegueira espiritual bíblica; registo distinto do médico ἄγνοια. |
| 294 | `ἄγνωστος, ος, ον` | **P** | O DGP distingue desconhecido, incognoscível, incompreensível e sujeito que ignora; dativo/genitivo conforme acepção. |
| 295 | `ἄγνωτος, ος, ον` | **P** | Adjetivo “desconhecido de” com dativo; manter diferença de forma e uso em relação a ἄγνωστος. |
| 296 | `ἀγξηράνῃ` | **A** | Terceira singular do subjuntivo aoristo de ἀναξηραίνω; não reconstruir outra forma sem atestação. |
| 297 | `ἆγον` | **A** | Forma dórica do imperfeito de ἄγω, distinta do imperativo ἄγε. |
| 298 | `ἀγονία, ας (ἡ)` | **A** | Nome feminino de esterilidade derivado de ἄγονος. |
| 299 | `ἄγονος, ος, ον` | **A** | Não nascido, improdutivo e que não gera/produz; no último caso reger genitivo segundo o DGP. |
| 300 | `ἄγοος, ος, ον` | **A** | O adjetivo privativo qualifica quem não foi chorado nem lamentado, sem incluir sentido de infertilidade do lema anterior. |
| 301 | `ἀγορά, ᾶς (ἡ)` | **A** | Distinguir reunião, discurso, praça/mercado, provisões e dois topônimos; as citações homéricas e xenofônticas aparecem com expansão autoral. |
| 302 | `ἀγοράασθε` | **A** | Forma verbal de 2.ª pessoa do plural, presente poético; não confundir forma flexionada com acepção lexical nova. |
| 303 | `ἀγοράζω` | **C** | Distinguir compra comercial, resgate bíblico e valor médio reflexivo; preservar a grafia original «resgastados» como questão de revisão editorial. |
| 304 | `ἀγοραῖος, ος` | **A** | Distinguir epíteto divino, mercador, ocioso, orador popular, vulgaridade e valores adverbiais documentados. |
| 305 | `ἀγοραίως` | **A** | Separar modo vulgar de registro forense/oratório; ambos são advérbios no DGP. |
| 306 | `ἀγορανομέω-ῶ` | **A** | Diferenciar exercício da agoranomia grega e cargo edilício romano, sem tratá-los como identidade institucional. |
| 307 | `ἀγορανομία, ας (ἡ)` | **A** | Dois valores institucionais distintos, função grega de agorânomo e edilidade romana. |
| 308 | `ἀγορανομικός, ή, όν` | **A** | Adjetivo de pertencimento funcional, diferenciando instituições grega e romana. |
| 309 | `ἀγορανόμος, ου (ὁ)` | **A** | Nome de agente, fiscal ateniense ou edil romano; derivação dupla indicada pela fonte. |
| 310 | `ἀγοράομαι-ῶμαι` | **A** | Conferir paradigmas imperfeito/aoristo, alternâncias formais e regência acusativo-dativo; hífen discricionário é traço tipográfico. |
| 311 | `ἀγοράσθω` | **A** | Variante dórica indicada para ἀγοράζω; remissão não equivale a definição inédita. |
| 312 | `ἀγόρασμα, ατος (τό)` | **A** | Distinguir ato de compra, objeto comerciado e provisão adquirida. |
| 313 | `ἀγοραστής, οῦ (ὁ)` | **A** | Agente de compras escravizado e comprador genérico são acepções distintas. |
| 314 | `ἀγορεύω` | **A** | Preservar informação sobre substituição de tempos e formas áticas, voz passiva e valor médio; não reduzir todo o verbete a «falar». |
| 315 | `ἀγορή` | **A** | Variante jônica de ἀγορά; manter como entrada autônoma. |
| 316 | `ἀγορῆθεν` | **A** | Advérbio de procedência («da assembleia»), não de direção. |
| 317 | `ἀγορήνδε` | **A** | Advérbio diretivo («à assembleia»), contrastar com ἀγορῆθεν. |
| 318 | `ἀγορητής, οῦ (ὁ)` | **A** | Nome de agente «orador», relacionado a ἀγοράομαι. |
| 319 | `ἀγορητύς, ύος (ἡ)` | **A** | Abstrato «eloquência», distinto do indivíduo «orador». |
| 320 | `ἄγορος, ου (ὁ)` | **A** | Entrada remissiva a ἀγορά, sem sentido independente explicitado. |
| 321 | `ἅγος` | **A** | Separar impureza ritual, pessoa sacrílega e sacrifício expiatório; forma alternativa ἄγος integra a definição. |
| 322 | `ἀγός, οῦ (ὁ)` | **A** | Substantivo agente «condutor/chefe» ligado a ἄγω. |
| 323 | `ἀγοστός, οῦ (ὁ)` | **A** | Palma da mão e braço curvado, duas acepções anatômicas. |
| 324 | `ἄγρα, ας (ἡ)` | **A** | Caça/pesca, estratégia cinegética com genitivo, presa e produto bíblico da pesca. |
| 325 | `Ἀγραΐς, ΐδος (ἡ)` | **A** | Topônimo/etnônimo territorial; não o reinterpretar como substantivo comum. |
| 326 | `ἀγραμματία, ας (ἡ)` | **A** | Abstrato falta de instrução/ignorância, vinculado a ἀγράμματος. |
| 327 | `ἀγράμματος, ος, ον` | **A** | Distinguir analfabetismo, ausência de escrita, incapacidade fonatória e falta de articulação. |
| 328 | `ἄγραπτος, ος, ον` | **A** | Negação morfológica de «escrito», sem impor outros sentidos de ἄγραφος. |
| 329 | `ἀγραυλέω-ῶ` | **A** | Habitar campo e pernoitar ao ar livre, ações separadas. |
| 330 | `ἄγραυλος, ος, ον` | **A** | Distinguir habitat rural, natureza indomada e rusticidade humana. |
| 331 | `ἄγραφος, ος, ον` | **A** | Distinguir não escrito, não inscrito em rol e não pintado. |
| 332 | `ἄγρει, ἀγρεῖτε` | **A** | Duas formas flexionadas remetem a ἀγρέω; manter ambas no mesmo cabeçalho conforme XML. |
| 333 | `ἀγρεῖος, α, ον` | **A** | Adjetivo relativo ao campo e extensão depreciativa de rusticidade. |
| 334 | `ἄγρευμα, ατος (τό)` | **A** | Rede/armadilha de captura e presa capturada, instrumento versus resultado. |
| 335 | `ἀγρεύς, έως (ὁ)` | **C** | Caçador, pescador e nome de ave; a grafia «passáro» ocorre na própria fonte. |
| 336 | `ἀγρευτάν` | **A** | Acusativo dórico de ἀγρευτής; não converter em substantivo lexical novo. |
| 337 | `ἀγρευτήρ, ῆρος (ὁ)` | **A** | Remissão simples a ἀγρευτής, preservando a variante nominal. |
| 338 | `ἀγρευτής, οῦ (ὁ)` | **A** | Separar função nominal de caçador e uso adjetivo de caça/pesca. |
| 339 | `ἀγρεύω` | **A** | Preservar sequência flexional, transitividade, extensão perseguir e voz média. |
| 340 | `ἀγρέω-ῶ` | **A** | Diferenciar uso verbal transitivo e imperativo lexicalizado como interjeição exortativa. |
| 341 | `ἄγρη` | **A** | Forma jônica remissiva de ἄγρα. |
| 342 | `ἀγριαίνω` | **A** | Distinguir estado emotivo, transformação animal e causação transitiva. |
| 343 | `ἀγριέλαιος, ος, ον` | **A** | Adjetivo e substantivação feminina referente à oliveira silvestre. |
| 344 | `ἄγριος, α` | **A** | Cabeçalho com paradigma alternativo no corpo; distinguir adjetivo, advérbio neutro e substantivação. |
| 345 | `ἀγριότης, ητος (ἡ)` | **A** | Estado selvagem em natureza não humana versus crueldade humana. |
| 346 | `ἀγριόφωνος, ος, ον` | **A** | Composto ligado à qualidade da voz, não simplesmente à ferocidade de conduta. |
| 347 | `ἀγριόω-ῶ` | **A** | Preservar regência acusativo + dativo/πρός e acusativo e os valores passivos referentes a plantas e homens. |
| 348 | `Ἀγρίππας, α (ὁ)` | **A** | Nome próprio latino em contexto bíblico, não substantivo comum. |
| 349 | `ἀγριωπός, ός, όν` | **A** | Atribuição expressiva de olhar/aspecto feroz; derivação de ὤψ. |
| 350 | `ἀγρίως` | **A** | Advérbio de modo selvagem ou inculto, manter ambas as dimensões. |
| 351 | `ἀγροβάτης, ου (ὁ)` | **A** | Nome de agente definido pelo deslocamento no campo. |
| 352 | `ἀγροβότης, ου (ὁ)` | **A** | Nome de agente ligado a pastoreio nos campos. |
| 353 | `ἀγρόθε` | **A** | Duas variantes adverbiais de procedência; contrastar com ἀγρόνδε. |
| 354 | `ἀγροικία, ας (ἡ)` | **A** | Rusticidade, permanência e moradia rural, três nominais distintos. |
| 355 | `ἀγροικίζομαι` | **A** | Forma média e paradigma verbal conservados; a única diferença gráfica é hífen U+00AD. |
| 356 | `ἀγροῖκος` | **A** | Variante de cabeçalho e quatro sentidos: moradia rural, rudeza, localização e frutos silvestres. |
| 357 | `ἀγροίκως` | **A** | Advérbio com valores rural, rústico e grosseiro. |
| 358 | `ἀγροιώτης, ου (ὁ)` | **A** | Distinguir camponês substantivo de «rústico» adjetivo. |
| 359 | `ἀγρόμενος` | **A** | Particípio de aoristo segundo médio sincopado de ἀγείρω. |
| 360 | `ἀγρόνδε` | **A** | Advérbio diretivo para o campo, contrastar com ἀγρόθε/ἀγρόθεν. |
| 361 | `ἀγρονόμος, ος` | **A** | Adjetivo «campestre» e título de fiscal de zona rural; conferir ausência de espaço antes do losango no XML. |
| 362 | `ἀγρός, οῦ (ὁ)` | **A** | Campo cultivável e campo em oposição à cidade, não fundir as duas acepções. |
| 363 | `Ἀγροτέρα, ας` | **A** | Epíteto de Ártemis e sentido ativo de «que persegue»; nome de Píndaro expandido. |
| 364 | `ἀγρότερος, α, ον` | **A** | Adjetivo rural/silvestre e qualificativo de pessoa campesina. |
| 365 | `ἀγρότης1, ου (ὁ)` | **A** | Primeiro homógrafo ἀγρότης¹: caçador, etimologia com ἄγρα. |
| 366 | `ἀγρότης2, ου` | **A** | Segundo homógrafo ἀγρότης²: campestre/rústico, etimologia com ἀγρός. |
| 367 | `ἀγρυπνέω-ῶ` | **A** | Vigília pode expressar insônia ou ato intencional de velar; não equiparar sem exame. |
| 368 | `ἀγρυπνητικός, ή, όν` | **A** | Adjetivo vigilante, distinto do substantivo ἀγρυπνία. |
| 369 | `ἀγρυπνία, ας (ἡ)` | **A** | Distinguir insônia, turno de guarda e vigilância preocupada. |
| 370 | `ἄγρυπνος, ος, ον` | **P** | Adjetivo insone e substantivação neutra vigília; etimologia indicada pelo DGP pede cautela e cotejo externo. |
| 371 | `ἀγρώσσω` | **A** | Verbo apenas no presente segundo a fonte, com sentidos caçar/pescar. |
| 372 | `ἄγρωστις, εως` | **A** | Dupla declinação nominal e distinção erva genérica/escalracho. |
| 373 | `ἀγυιά` | **A** | Grafia variante e extensão semântica de via para praça e cidade. |
| 374 | `ἀγυιάτης, ου (ὁ)` | **A** | Remissão a ἀγυιεύς, sem ampliar conteúdo. |
| 375 | `ἀγυιεύς, έως (ὁ)` | **A** | Epíteto cultual de Apolo e objeto material (altar ou estela) associado ao culto, evitar fusão. |
| 376 | `ἀγύμναστος, ος, ον` | **A** | Regências expressas para inexperiência (genitivo e preposições com acusativo) e extensão a sofrimento. |
| 377 | `ἀγυμνάστως` | **A** | Modo adverbial «sem exercício»; não inferir outras acepções. |
| 378 | `ἄγυρις, εως (ἡ)` | **A** | Abstrato aglomeração/multidão ligado a ἀγορά. |
| 379 | `ἀγυρμός, οῦ (ὁ)` | **A** | Ato de coleta e reunião; derivado de ἀγείρω. |
| 380 | `ἀγυρτάζω` | **A** | Verbo recolher/juntar/reunir; verificar vínculo indicado a ἀγύρτης antes de propor emenda etimológica. |
| 381 | `ἀγύρτης, ου (ὁ)` | **A** | Três avaliações sociolexicais distintas: mendigo, vagabundo, charlatão. |
| 382 | `ἀγυρτικός, ή, όν` | **A** | Adjetivo de vagabundo/de charlatão; diferença meramente de hífen discricionário no étimo. |
| 383 | `ἀγύρτρια, ας (ἡ)` | **A** | Substantivo feminino «mendiga», relacionado a ἀγύρτης. |
| 384 | `ἀγχέμαχος, ος, ον` | **A** | Combate próximo e adequação de arma ao combate próximo. |
| 385 | `ἄγχι` | **A** | Advérbio espacial e temporal, uso preposicional com genitivo e graus comparativo/superlativo. |
| 386 | `ἀγχιάλος, ος, ον` | **A** | Composto para vizinhança ao mar; não reduzir à proximidade espacial indeterminada. |
| 387 | `ἀγχιβαθής, ής, ές` | **A** | Profundidade versus altura medida desde margem, polissemia espacial específica. |
| 388 | `ἀγχιγείτων, ων, ον` | **P** | «gen. ονος» indicado dentro da definição apesar da flexão no cabeçalho; não corrigir sem evidência externa. |
| 389 | `ἀγχίθεος, ος, ον` | **P** | Não fundir quase-deus, uso cristão «próximo de Deus» e substantivo semideus. |
| 390 | `ἀγχίθυρος, ος, ον` | **A** | Vizinhança de porta, sentido local preciso. |
| 391 | `ἀγχιμαχητής, οῦ (ὁ)` | **A** | Remissão a ἀγχέμαχος, não confundir com ἀγχιμαχητής de análise própria. |
| 392 | `ἀγχίμολος, ος, ον` | **A** | Preservar locução ἐξ ἀγχιμόλοιο e emprego adverbial com dativo. |
| 393 | `ἀγχίνοια, ας (ἡ)` | **A** | Abstrato «perspicácia» de ἀγχίνοος. |
| 394 | `ἀγχίνοος-ους, οος-ους, οον-ουν` | **A** | Pares alternantes de terminações e base νοός; sentido de vivacidade mental. |
| 395 | `ἀγχίπλοος-ους, οος-ους, οον-ουν` | **A** | Pares alternantes de terminações e noção náutica de curta travessia. |
| 396 | `ἀγχίπολις, ιος` | **A** | Variante ἀγχίπτολις, gênero masculino/feminino e oposição proteger/estar vizinho da cidade. |
| 397 | `Ἀγχίσης, ου (ὁ)` | **A** | Nome próprio Anquises e referência mítica a Eneias. |
| 398 | `Ἀγχισιάδης, ου (ὁ)` | **A** | Patronímico «filho de Anquises», distinto do antropônimo-base. |
| 399 | `ἄγχιστα` | **A** | Remissão ao superlativo ἄγχιστος, sem deduzir paradigma novo. |
| 400 | `ἀγχιστεία, ας (ἡ)` | **A** | Distinguir proximidade familiar, intimidade e direito sucessório. |
| 401 | `ἀγχιστεῖον, ου (τό)` | **A** | Remissão autônoma a ἀγχιστεία; não criar definição nova. |
| 402 | `ἀγχιστεύς, έως (ὁ)` | **A** | Distingue grau de parentesco e condição de herdeiro legítimo. |
| 403 | `ἀγχιστεύω` | **A** | Preserva aoristo passivo e regências genitiva/dativa; o uso bíblico relativo à herança é acepção específica. |
| 404 | `ἀγχιστήρ, ῆρος (ὁ)` | **A** | A regência com genitivo é essencial à definição de agente causador. |
| 405 | `ἀγχιστῖνος, η, ον` | **A** | O plural designa elementos cerrados uns aos outros, além da proximidade. |
| 406 | `ἄγχιστος, η, ον` | **A** | Discriminar proximidade espacial, parentesco, advérbios substantivados e valor temporal recente. |
| 407 | `ἀγχίστροφος, ος, ον` | **A** | Distinguir rapidez/versatilidade no adjetivo e correspondente valor adverbial. |
| 408 | `ἀγχιτέρμων, ων, ον` | **A** | Adjetivo limítrofe; conservar o genitivo alternativo em -ονος. |
| 409 | `ἀγχόθεν` | **A** | Advérbio de procedência, distinguível de posição estática. |
| 410 | `ἀγχόθι` | **A** | Advérbio e preposição regente do genitivo são funções distintas. |
| 411 | `ἀγχόνη, ης (ἡ)` | **A** | Preservar instrumento físico, execução por enforcamento e extensão a angústia. |
| 412 | `ἀγχότατα, ἀγχοτάτω` | **A** | Lema duplo com remissão, sem significados independentes na fonte. |
| 413 | `ἀγχότερος, α, ον` | **A** | Valor de superlativo de proximidade e complemento no genitivo. |
| 414 | `ἀγχοῦ` | **A** | Separar advérbio locativo/comparativo da preposição com genitivo ou dativo. |
| 415 | `ἄγχουσα, ης (ἡ)` | **A** | Separar planta (ancusa) e cosmético obtido da raiz. |
| 416 | `ἄγχω` | **A** | Conservar paradigma ativo e sentido médio reflexivo de enforcar-se. |
| 417 | `ἀγχώμαλος, ος, ον` | **A** | Citações atribuídas a Tucídides; diferencia quase igualdade, indecisão e equilíbrio adverbial. |
| 418 | `ἀγχωμάλως` | **A** | A glosa concentra-se na igualdade de oportunidades como modo. |
| 419 | `ἄγω` | **P** | Verbo polissêmico: 12 acepções, paradigma ativo/passivo, formas médias, uso intransitivo e imperativos exortativos; expansões de autoridades não alteram texto grego. |
| 420 | `ἀγῷ, ῇς, ῇ` | **A** | A definição indica subjuntivo aoristo segundo passivo de ἄγνυμι, não de ἄγω. |
| 421 | `ἁγώ` | **A** | Crase de ἅ com ἐγώ; não interpretar como derivado de ἄγω. |
| 422 | `ἀγωγεύς, έως (ὁ)` | **A** | Condutor humano e instrumento (correia/rédea) são sentidos distintos. |
| 423 | `ἀγωγή, ῆς (ἡ)` | **A** | Conservar nove acepções: condução, viagem, prisão, educação, conduta, transporte e valor musical de duração. |
| 424 | `ἀγώγιμος, ος, ον` | **A** | Distingue transportabilidade de objeto, sujeição jurídica de pessoa e possibilidade de condução. |
| 425 | `ἀγώγιον, ου (τό)` | **A** | Carga ou mercadoria transportada, substantivo ligado a ἀγωγή. |
| 426 | `ἀγωγός, ός, όν` | **A** | Separar adjetivo condutor/sedutor (genitivo) e substantivação de guia. |
| 427 | `ἀγών, ῶνος (ὁ)` | **A** | A fonte registra dez sentidos, inclusive assembleia, arena, litígio, retórica e divindade personificada; não reduzir a competição atlética. |
| 428 | `ἀγωνάρχης, ου (ὁ)` | **A** | Agonarca é juiz da luta; não confundir com agonóteta. |
| 429 | `ἀγωνία, ας (ἡ)` | **A** | A trajetória semântica entre competição, exercício, ansiedade e uso cristão é explicitada em quatro acepções. |
| 430 | `ἀγωνιάω-ῶ` | **A** | Preservar paradigma, a regência περί com genitivo e ἐπί com dativo, e valor de temor. |
| 431 | `ἀγωνίζομαι` | **A** | Registrar paradigmas de futuro e perfeito, complementos regenciais e usos jurídico e dramático. |
| 432 | `ἀγώνιος, ος, ον` | **A** | Adjetivo competitivo, epíteto de deuses e estado de inquietação são distinguíveis. |
| 433 | `ἀγώνισις, εως (ἡ)` | **A** | Substantivo abstrato de luta/combate em remissão etimológica. |
| 434 | `ἀγώνισμα, ατος (τό)` | **A** | A numeração repetida «3» consta na própria fonte e deve ser anotada, não corrigida silenciosamente; inclui acepção dramática. |
| 435 | `ἀγωνισμός, οῦ (ὁ)` | **A** | Abstrato de luta em relação ao verbo ἀγωνίζομαι. |
| 436 | `ἀγωνιστέον` | **A** | Forma adjetival verbal remissiva, não traduzida como verbo independente. |
| 437 | `ἀγωνιστής, οῦ (ὁ)` | **A** | Nome de agente com sentidos atlético, forense, teatral e técnico/artístico. |
| 438 | `ἀγωνιστικός, ή, όν` | **A** | Adjetivo e substantivações da arte de lutar; hífen discricionário U+00AD foi removido na apresentação. |
| 439 | `ἀγωνιστικῶς` | **A** | Advérbio marca disposição para luta, obstinação e vigor. |
| 440 | `ἀγωνοθεσία, ας (ἡ)` | **A** | Nome abstrato da função de agonóteta, não do titular. |
| 441 | `ἀγωνοθετέω-ῶ` | **A** | Exercício da agonotesia, arbitragem, organização e incitamento: quatro funções diferenciadas. |
| 442 | `ἀγωνοθέτης, ου (ὁ)` | **A** | Agonóteta descrito como organizador/presidente/árbitro dos jogos, sem extrapolar cargos. |
| 443 | `ἀδαγμός, οῦ (ὁ)` | **A** | A acepção de mordida/laceração liga-se à derivação intensiva indicada na fonte. |
| 444 | `ἀδαημονίη, ης (ἡ)` | **A** | Rubrica épica e sentidos de ignorância/inabilidade/inexperiência. |
| 445 | `ἀδαημοσύνη, ης (ἡ)` | **A** | Remissão explícita ao lema ἀδαημονίη. |
| 446 | `ἀδαήμων, ων, ον` | **A** | Adjetivo que rege genitivo para a matéria da inabilidade. |
| 447 | `ἀδαής, ής, ές` | **A** | Preservar alternância de regência genitiva ou infinitiva. |
| 448 | `ἄδαιτος, ος, ον` | **A** | Qualificação ritual de sacrifício sem banquete; não confundir com ausência de comida em geral. |
| 449 | `ἄδακρυς, υς, υ` | **A** | Diferenciar sujeito sem lágrimas de objeto que não faz chorar. |
| 450 | `ἀδακρυτί` | **A** | Advérbio de ausência de lágrimas, distinto do adjetivo relacionado. |
| 451 | `ἀδάκρυτος, ος, ον` | **A** | Distinguir quem não chora de quem não é chorado nem merece lamento. |
| 452 | `ἀδαμάντινος, ος, ον` | **A** | Material comparado ao aço e ideia de resistência são sentidos relacionados. |
| 453 | `ἀδαμαντόδετος, ος, ον` | **A** | Composto com elos de aço; preservar remissão ao verbo δέω¹. |
| 454 | `ἀδάμας, αντος (ὁ)` | **A** | Metal duro, diamante e qualidade figurada de inflexibilidade em categorias separadas. |
| 455 | `ἀδάμαστος, ος, ον` | **A** | Indomabilidade moral e ausência de domesticação animal não devem fundir-se. |
| 456 | `ἀδάματος, ος, ον` | **A** | Indomado e intacto/virgem são extensões diferentes no adjetivo. |
| 457 | `ἀδάπανος, ος, ον` | **A** | Distingue custo nulo, quem não gasta e advérbio bíblico de gratuidade. |
| 458 | `ἄδαστος, ος, ον` | **A** | Negação de divisão, com valor de indiviso. |
| 459 | `ἀδδεής` | **A** | Remissão gráfica simples para ἀδεής. |
| 460 | `ἀδδηκότες` | **A** | Forma remissiva de ἀδηκότες. |
| 461 | `ἄδδην` | **A** | Forma remissiva de ἄδην. |
| 462 | `ἀδδήσειε` | **A** | Identificação de optativo de aoristo épico, não infinitivo. |
| 463 | `ᾄδε` | **A** | Homografia flexional: imperativo presente e imperfeito poético. |
| 464 | `ἅδε` | **P** | Primeiro ἅδε: aoristo segundo de ἁνδάνω. |
| 465 | `ἅδε` | **P** | Segundo ἅδε: feminino dórico de ὅδε; não fundir com #464. |
| 466 | `ἀδεᾶ` | **A** | Forma de acusativo singular ou nominativo/acusativo plural neutro. |
| 467 | `ἁδέα` | **A** | Forma dórica com alternativas de gênero/número no adjetivo ἡδύς. |
| 468 | `ἀδεής1, ής, ές` | **P** | Primeiro homógrafo ἀδεής¹: ausência de medo, qualidade que não infunde medo e substantivação de segurança. |
| 469 | `ἀδεής2, ής, ές` | **P** | Segundo homógrafo ἀδεής²: falta de necessidade, com genitivo. |
| 470 | `ἄδεια, ας (ἡ)` | **A** | Distinguir segurança física, impunidade/anistia e licença/salvo-conduto; conservar regência de infinitivo. |
| 471 | `ἀδείη` | **A** | Variante jônica remissiva a ἄδεια. |
| 472 | `ἀδείης` | **A** | Forma épica remissiva a ἀδεής. |
| 473 | `ἀδείμαντος, ος, ον` | **A** | Rubrica poética e distinção entre pessoa destemida e lugar seguro. |
| 474 | `ἀδειμάντως` | **A** | Advérbio de destemor e intrepidez. |
| 475 | `ἁδεῖν` | **A** | Infinitivo de aoristo segundo de ἁνδάνω. |
| 476 | `ἄδειπνος, ος, ον` | **A** | Negação de ter comido, diferente de proibição de banquete. |
| 477 | `ἀδέκαστος, ος, ον` | **A** | Qualidade de incorruptibilidade e integridade, distinta de ἄδεκτος. |
| 478 | `ἀδεκάστως` | **A** | Advérbio ético de agir íntegra ou imparcialmente. |
| 479 | `ἀδεκάτευτος, ος, ον` | **A** | Isenção fiscal relativa ao dízimo. |
| 480 | `ἄδεκτος, ος, ον` | **A** | Separar incapacidade de aceitar e inaceitabilidade/incompreensibilidade. |
| 481 | `ἀδελφεά` | **A** | Duas variantes dialetais (dórica e jônica) apontam a ἀδελφή. |
| 482 | `ἀδελφειός` | **A** | Forma épica remissiva a ἀδελφός. |
| 483 | `ἀδελφεοκτόνος, ος, ον` | **A** | Variante jônica de ἀδελφοκτόνος. |
| 484 | `ἀδελφεός` | **A** | Variante jônica e poética de ἀδελφός. |
| 485 | `ἀδελφή, ῆς (ἡ)` | **A** | Lema nominal feminino remissivo ao artigo de ἀδελφός. |
| 486 | `ἀδελφιδεός-οῦς, εοῦ-οῦ (ὁ)` | **A** | Sobrinho como termo de parentesco distinto da sobrinha em #487. |
| 487 | `ἀδελφιδῆ, ῆς (ἡ)` | **A** | Sobrinha em uso jônico e ático. |
| 488 | `ἀδελφίδιον, ου (τό)` | **A** | Diminutivo de irmão, com derivação em ἀδελφός. |
| 489 | `ἀδελφιδοῦς` | **A** | Remissão simples à grafia ἀδελφιδεός. |
| 490 | `ἀδελφίζω` | **A** | Conservar sentidos ativo social e médio de semelhança, com regência dativa. |
| 491 | `ἀδελφικός, ή, όν` | **A** | Adjetivo «fraterno», não designação nominal de irmão. |
| 492 | `ἀδελφοκτόνος, ος, ον` | **A** | Nome/adjetivo de fratricida com composição etimológica específica. |
| 493 | `ἀδελφός, ή, όν` | **P** | Adjetivo, substantivos masculino/feminino e neutro, usos bíblicos e comunidade religiosa são distribuídos em nove acepções distintas. |
| 494 | `ἀδελφότης, ητος (ἡ)` | **A** | Os usos bíblicos de afeição, fraternidade e comunidade cristã devem permanecer separados. |
| 495 | `ἀδέξιος, ος, ον` | **A** | Inabilidade ou falta de destreza, adjetivo derivado de δεξιός. |
| 496 | `ἄδερκτος, ος, ον` | **A** | Cegueira indicada pelo adjetivo, sem ampliar para ignorância intelectual. |
| 497 | `ἀδέρκτως` | **A** | Advérbio «sem ver», distinto de substantivo de cegueira. |
| 498 | `ἄδεσμος, ος, ον` | **A** | Diferenciar ausência de amarração de ausência de fechamento. |
| 499 | `ἀδέσποτος, ος, ον` | **A** | Sem dono, indomável e de autoria desconhecida são três acepções de naturezas diferentes. |
| 500 | `ἀδευκής, ής, ές` | **A** | A fonte contém hífen discricionário dentro de «inesperado»; manter três acepções, inclusive valor de crueldade. |
| 501 | `ἀδέψητος, ος, ον` | **A** | Adjetivo épico e poético para couro não curtido. |
| 502 | `ἀδέω` | **A** | Verbo de saciedade ou cansaço; regência com dativo. |
| 503 | `ἀδεῶς` | **A** | Advérbio sem medo e, em outro valor, impunemente. |
| 504 | `ἀδήϊος` | **A** | Conservar forma contraída e oposição entre devastação e hostilidade. |
| 505 | `ἅδηκα` | **A** | Forma de perfeito de ἁνδάνω. |
| 506 | `ἀδηκότες` | **A** | Particípio perfeito plural de ἀδέω. |
| 507 | `ἄδηκτος, ος, ον` | **A** | Distinguir mordida física, remorso e capacidade de ferir. |
| 508 | `ἀδήκτως` | **A** | Distinguir ausência de moléstia e de remorso. |
| 509 | `ἀδηλέω-ῶ` | **A** | Ativa com genitivo, média e passiva possuem funções próprias. |
| 510 | `ἄδηλος, ος, ον` | **A** | Construções impessoal e pessoal; Isócrates expandido. |
| 511 | `ἀδηλότης, ητος (ἡ)` | **A** | Incerteza e insegurança como dois sentidos substantivos. |
| 512 | `ἀδήλως` | **A** | Sigilo e falta de rumo são duas acepções. |
| 513 | `ἀδημονέω-ῶ` | **A** | Preservar dativo, ὑπό + genitivo, ἐπί + dativo e acusativo de relação. |
| 514 | `ἀδημονία, ας (ἡ)` | **A** | Substantivo de inquietude e angústia. |
| 515 | `ἀδήμων, ων, ον` | **A** | Adjetivo de perturbação, com genitivo em -ονος. |
| 516 | `ἅδην, ἄδην` | **A** | Três grafias adverbiais e exemplos de três autores preservados. |
| 517 | `ἀδῇος` | **A** | Remissão isolada à variante ἀδήϊος. |
| 518 | `ἀδήριτος, ος, ον` | **A** | Uso poético tardio: não contestado versus invencível. |
| 519 | `ᾄδης` | **A** | Remissão a Ἅιδης; não confundir com forma verbal. |
| 520 | `ἁδήσω` | **A** | Remissão a ἁνδάνω, sem acepção suplementar. |
| 521 | `ἀδηφαγέω-ῶ` | **A** | Verbo de comer vorazmente. |
| 522 | `ἀδηφάγος, ος, ον` | **A** | Voracidade literal e gasto excessivo figurado. |
| 523 | `ἀδῄωτος, ος, ον` | **A** | Negação de devastação e estado ileso. |
| 524 | `ἀδιάβατος, ος, ον` | **A** | Intransponível e impenetrável. |
| 525 | `ἀδιάβλητος, ος, ον` | **P** | Três posições semânticas diante da calúnia devem permanecer distintas. |
| 526 | `ἀδιακόντιστος, ος, ον` | **P** | Rubrica duvidosa impede certificação sem testemunhos. |
| 527 | `ἀδιάκριτος, ος, ον` | **A** | Indiscernível, incompreensível, indeciso e imparcial. |
| 528 | `ἀδιάλειπτος, ος, ον` | **A** | Adjetivo bíblico e advérbio neutro diferenciado. |
| 529 | `ἀδιαλείπτως` | **A** | Advérbio bíblico de constância. |
| 530 | `ἀδιάλλακτος, ος, ον` | **A** | Adjetivo privativo de reconciliação. |
| 531 | `ἀδιάλυτος, ος, ον` | **A** | Indissolubilidade e indestrutibilidade. |
| 532 | `ἀδίαντος, ος` | **A** | Adjetivo relativo à umidade e substantivo botânico. |
| 533 | `ἀδιάρθρωτος, ος, ον` | **A** | Inarticulado, confuso e indistinto. |
| 534 | `ἀδιάσπαστος, ος, ον` | **A** | Não separado, não interrompido, contínuo. |
| 535 | `ἀδιάστατος, ος, ον` | **A** | Continuidade temporal, ausência de extensão e indivisibilidade cristã. |
| 536 | `ἀδιάστροφος, ος, ον` | **A** | Reto e impossível de desviar. |
| 537 | `ἀδιάφθαρτος, ος, ον` | **A** | Integridade e incorruptibilidade. |
| 538 | `ἀδιαφθορία, ας (ἡ)` | **A** | Uso bíblico do abstrato sem mácula. |
| 539 | `ἀδιάφθορος, ος, ον` | **A** | Castidade e incorruptibilidade distintas. |
| 540 | `ἀδιαφθόρως` | **A** | Pureza, inocência e castidade adverbiais. |
| 541 | `ἀδιαφορία, ας (ἡ)` | **A** | Indiferença e negligência sem atribuição filosófica automática. |
| 542 | `ἀδιάφορος, ος, ον` | **P** | Distinguir métrica ancípite e plural filosófico das demais acepções. |
| 543 | `ἀδίδακτος, ος, ον` | **A** | Duplicação autêntica do numeral 3 no XML; não corrigir silenciosamente. |
| 544 | `ἀδιεξέργαστος, ος, ον` | **A** | Inacabado e inextricável são sentidos diferentes. |
| 545 | `ἀδιέξοδος, ος, ον` | **A** | Ausência de saída e impossibilidade de sair. |
| 546 | `ἀδιέργαστος, ος, ον` | **A** | Remissão à forma ἀδιεξέργαστος. |
| 547 | `ἀδιερεύνητος, ος, ον` | **A** | Inescrutável e ainda não examinado. |
| 548 | `ἀδιήγητος, ος, ον` | **A** | Indescritível e tardio não contado. |
| 549 | `ἀδίκαστος, ος, ον` | **A** | Não julgado, não decidido e não condenado. |
| 550 | `ἀδικάστως` | **A** | Advérbio sem julgamento. |
| 551 | `ἀδικέω-ῶ` | **P** | Preservar vozes, paradigma, regências e quatro grupos de acepções. |
| 552 | `ἀδίκημα, ατος (τό)` | **P** | Prejuízo, fruto de injustiça e erro de julgamento duvidoso. |
| 553 | `ἀδικητέον` | **A** | Adjetivo verbal de ἀδικέω. |
| 554 | `ἀδικητικός, ή, όν` | **A** | Adjetivo com inclinação para injustiça. |
| 555 | `ἀδικία, ας,` | **P** | Injustiça praticada e sofrida, variante jônica e regências. |
| 556 | `ἀδικίου (δίκη) (ἡ)` | **A** | Termo de ação judiciária com parêntese no lema. |
| 557 | `ἀδικοπραγέω-ῶ` | **A** | Verbo composto de agir injustamente. |
| 558 | `ἄδικος, ος, ον` | **A** | Adjetivo de ilegalidade e substantivações masculina/neutra. |
| 559 | `ἀδίκως` | **A** | Advérbio ilegalmente e injustamente. |
| 560 | `ἁδινός` | **A** | Variante poética, quatro citações homéricas e advérbios. |
| 561 | `ἁδινῶς` | **A** | Duas grafias do advérbio de vigor contínuo. |
| 562 | `ἀδιοίκητος, ος, ον` | **A** | Desordem, falta de administração e uso tardio digestivo. |
| 563 | `ἅδιον` | **A** | Comparativo neutro dórico de ἡδύς. |
| 564 | `ἀδιόρθωτος, ος, ον` | **A** | Adjetivo irremediável e forma adverbial. |
| 565 | `ἀδμής, ῆτος` | **A** | Genitivo e usos de não domado e não casada. |
| 566 | `ἄδμητος, η, ον` | **A** | Não domado e virgem como sentidos separados. |
| 567 | `ᾁδοβάτης, ου (ὁ)` | **A** | Composto alusivo ao Hades. |
| 568 | `ἀδόκητος, ος, ον` | **A** | Inesperado, obscuro, impossível e locuções adverbiais. |
| 569 | `ἀδοκήτως` | **A** | Advérbio de surpresa temporal. |
| 570 | `ἀδοκίμαστος, ος, ον` | **A** | Conceito institucional de prova δοκιμασία. |
| 571 | `ἀδόκιμος, ος, ον` | **A** | Falsidade, inutilidade, vileza e reprovação. |
| 572 | `ἀδολεσχέω-ῶ` | **A** | Tagarelice e valor tardio de meditação. |
| 573 | `ἀδολέσχης, ου (ὁ)` | **A** | Tagarela versus argumentador sutil. |
| 574 | `ἀδολεσχία, ας (ἡ)` | **A** | Tagarelice, sutileza e meditação bíblica. |
| 575 | `ἀδόλεσχος, ος, ον` | **A** | Remissão a ἀδολέσχης. |
| 576 | `ἄδολος, ος, ον` | **A** | Ausência de dolo e não adulteração. |
| 577 | `ἀδόλως` | **A** | Advérbio de lealdade. |
| 578 | `ἅδον` | **A** | Aoristo segundo épico de ἁνδάνω. |
| 579 | `ἁδονά` | **A** | Remissão dórica a ἡδονή. |
| 580 | `ἀδόξαστος, ος, ον` | **A** | Certo, inesperado e tardio não conjecturador. |
| 581 | `ἀδοξέω-ῶ` | **A** | Desprezar e ter má reputação com regências e vozes. |
| 582 | `ἀδόξημα, ατος (τό)` | **A** | Ato desonroso, desonra e infâmia. |
| 583 | `ἀδοξία, ας (ἡ)` | **A** | Descrédito, anonimato e desprezo tardio. |
| 584 | `ἄδοξος, ος, ον` | **A** | Desconhecido, mal reputado e inesperado. |
| 585 | `ἀδόξως` | **A** | Advérbio sem glória nem honra. |
| 586 | `ἀδορυφόρητος, ος, ον` | **A** | Sem guarda-costas e sem escolta. |
| 587 | `ἅδος` | **A** | Somente nominativo; gênero neutro ou masculino e exemplo homérico. |
| 588 | `ἄδουλος, ος, ον` | **A** | Sem escravos em propriedade, distinto de não escravizado. |
| 589 | `ἀδούλωτος, ος, ον` | **A** | Não escravizado e livre. |
| 590 | `ἀδρανής, ής, ές` | **A** | Fraco, inativo e impotente. |
| 591 | `Ἀδράστεια, ας (ἡ)` | **P** | Deusa, cidade mísia e planta são três referentes. |
| 592 | `ἄδραστος, ος, ον` | **A** | Não fugir e não mover-se. |
| 593 | `ἄδρεπτος, ος, ον` | **A** | Que não pode ser colhido. |
| 594 | `Ἀδρήστεια` | **A** | Variante jônica de Ἀδράστεια. |
| 595 | `Ἀδρηστίνη, ης (ἡ)` | **A** | Filha de Adrasto, referencial mitológico. |
| 596 | `ἄδρηστος` | **A** | Remissão jônica a ἄδραστος. |
| 597 | `Ἀδριανός, ός, όν` | **A** | Adjetivo relativo ao Adriático. |
| 598 | `Ἀδρίας, ου (ὁ)` | **A** | Nome do mar Adriático. |
| 599 | `Ἀδριατικός, ή, όν` | **A** | Outro adjetivo de origem adriática. |
| 600 | `Ἀδριηνός` | **A** | Variante jônica de Ἀδριανός. |

## Limitações, preservação e próxima etapa

- Os **68 estados P** registram decisões filológicas ainda sem evidência externa conclusiva. Sua resolução não exige nova passagem geral por todos os 600; cada questão tem sua ficha própria.
- O DGP é um dicionário grego-português: as acepções portuguesas são da obra-fonte; esta homologação é de representação e análise documental, não retradução independente de todos os testemunhos.
- Os outros **2.700 registros DGP** não pertencem a este escopo. A próxima sequência filológica independente é **601–700**.
- Auditoria textual/estrutural **3.300/3.300** já possui prova separada. Integração da branch consolidada permanece em **2.880/3.300**, sem PR ou merge por esta rotina.
- Preservadas as camadas Fonte, Tradução, Análise e GDHAGP; nenhum verbete foi alterado silenciosamente.

**Parecer:** auditoria **documental** dos primeiros 600 concluída com **532 A/C e 68 P**; não declarar homologação filológica irrestrita 600/600.
