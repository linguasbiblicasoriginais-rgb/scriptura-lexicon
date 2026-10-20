"use strict";

/**
 * Catálogo BIBLIOGRÁFICO da interface. Não se confunde com as fontes textuais
 * nem autoriza equiparar a transcrição digital à edição impressa indicada.
 * Campos não certificados permanecem nulos; URLs das capas históricas
 * referem-se a registros identificados do Internet Archive.
 */
window.ScripturaSourceCatalog = Object.freeze({
    "LSJ": {
        title: "A Greek–English Lexicon",
        authors: "Henry George Liddell; Robert Scott; revisão de Henry Stuart Jones e Roderick McKenzie",
        publisher: "Clarendon Press, Oxford",
        date: "1940",
        edition: "9ª edição; transcrição digital auxiliar LSJLogeion/Perseus ainda não homologada",
        isbn: null,
        pages: null,
        coverUrl: null,
        coverColor: "#54637e",
        dictionary: "grego",
        publicationStatus: "source-only",
        note: "Fonte em preparação. Os arquivos LSJ disponíveis pertencem exclusivamente à camada FONTE, em inglês; ainda não há verbetes traduzidos para português, revistos ou publicados para consulta neste site. Os registros da fonte não são contabilizados como artigos pesquisáveis. Transcrição auxiliar derivada de Perseus/Tufts e LSJLogeion (CC BY-SA 4.0); créditos: Perseus Digital Library, Gregory Crane e Helma Dik/Logeion.",
        reference: "regras/Rlsj.txt"
    },
    "ROBINSON": {
        title: "A Greek and English Lexicon of the New Testament",
        authors: "Edward Robinson",
        publisher: "Harper & Brothers, Nova York (exemplar catalogado)",
        date: "1850 (edição de referência)",
        edition: "Exemplar de 1850; a edição de 1836 é distinta",
        isbn: null,
        pages: "xii + 803 p. (edição de 1850)",
        coverUrl: "imagens/capas/robinson.png",
        coverColor: "#36516e",
        note: "Existem edições com paginação diferente. A correspondência integral do texto digital com este exemplar ainda depende de cotejo.",
        reference: "regras/Rfontes-impressas.txt"
    },
    "ABBOTT-SMITH": {
        title: "A Manual Greek Lexicon of the New Testament",
        authors: "George Abbott-Smith",
        publisher: "T. & T. Clark, Edimburgo (edição de referência)",
        date: "1922",
        edition: "Edição britânica de 1922",
        isbn: null,
        pages: "xvi + 512 p.",
        coverUrl: "imagens/capas/abbott-smith.png",
        coverColor: "#5c4e39",
        note: "O cadastro registra também uma impressão americana; as duas composições ainda não foram cotejadas integralmente.",
        reference: "regras/Rfontes-impressas.txt"
    },
    "THAYER": {
        title: "A Greek-English Lexicon of the New Testament",
        authors: "Joseph Henry Thayer (tradução e revisão de Grimm–Wilke)",
        publisher: "American Book Company, Nova York (edição de referência)",
        date: "1889",
        edition: "Edição corrigida de referência",
        isbn: null,
        pages: "727 p. (edição de 1889)",
        coverUrl: "imagens/capas/thayer.png",
        coverColor: "#5b493e",
        note: "Dados referentes à edição histórica identificada; os registros atuais do site ainda estão em processo de revisão filológica.",
        reference: "regras/Rthayer.txt"
    },
    "BDAG": {
        title: "A Greek-English Lexicon of the New Testament and Other Early Christian Literature",
        authors: "Walter Bauer; Frederick W. Danker; W. F. Arndt; F. W. Gingrich",
        publisher: "University of Chicago Press (indicada no arquivo consultado)",
        date: "2021 (versão digital fornecida)",
        edition: "Arquivo identificado como 4ª edição digital (BDAG)",
        isbn: null,
        pages: "1.078 p. no arquivo digital; paginação da edição comercial não certificada",
        coverUrl: "imagens/capas/bdag.png",
        coverColor: "#35587b",
        note: "A identificação bibliográfica do arquivo digital não deve ser confundida automaticamente com a edição comercial impressa do BDAG.",
        reference: "regras/Rbdag.txt"
    },
    "LEH": {
        title: "A Greek-English Lexicon of the Septuagint",
        authors: "Johan Lust; Erik Eynikel; Katrin Hauspie",
        publisher: "Deutsche Bibelgesellschaft, Stuttgart",
        date: "2003",
        edition: "Revised Edition",
        isbn: "3-438-05124-9",
        pages: null,
        coverUrl: "imagens/capas/leh.png",
        coverColor: "#365e62",
        note: "A paginação do exemplar impresso da edição de 2003 não foi certificada; não confundir com a edição corrigida posterior.",
        reference: "regras/Rleh.txt"
    },
    "DGP": {
        title: "Dicionário Grego–Português (DGP)",
        authors: "Coordenação: Daisi Malhadas; Maria Celeste C. Dezotti; Maria Helena de Moura Neves",
        publisher: "Ateliê Editorial, Cotia (SP)",
        date: "2006 (vol. I da edição original)",
        edition: "Obra originalmente publicada em volumes; o site utiliza transcrição digital com proveniência própria",
        isbn: "85-7480-327-8 (vol. I)",
        pages: "264 p. (vol. I, α–δ); não representa a coleção inteira",
        coverUrl: "imagens/capas/dgp.png",
        coverColor: "#675348",
        note: "A base digital incorporada possui cobertura própria. Dados físicos do primeiro volume, não da edição em volume único de 2025.",
        reference: "regras/Rdgp.txt"
    },
    "PEREIRA": {
        title: "Dicionário Grego–Português e Português–Grego",
        authors: "Isidro Pereira",
        publisher: "Livraria Apostolado da Imprensa, Braga",
        date: "1998 (8ª edição de referência)",
        edition: "A edição reproduzida pelo serviço digital ainda não está identificada com segurança",
        isbn: "972-571-193-9 (edição de referência)",
        pages: "1.054 p. (8ª edição de referência)",
        coverUrl: null,
        coverColor: "#4f5b42",
        note: "Os dados físicos descrevem uma edição bibliográfica conhecida; não provam a identidade do texto da API.",
        reference: "regras/Rpereira.txt"
    },
    "JASTROW": {
        title: "A Dictionary of the Targumim, the Talmud Babli and Yerushalmi, and the Midrashic Literature",
        authors: "Marcus Jastrow",
        publisher: "Luzac & Co., Londres; G. P. Putnam's Sons, Nova York",
        date: "1903 (edição histórica de referência)",
        edition: "Obra histórica em dois volumes",
        isbn: null,
        pages: "1.736 p. (paginação da edição histórica catalogada)",
        coverUrl: "imagens/capas/jastrow.png",
        coverColor: "#4a555f",
        note: "O acervo eletrônico procede da Sefaria; a edição impressa serve apenas como referência bibliográfica.",
        reference: "regras/Rjastrow.txt"
    },
    "HALOT": {
        title: "The Hebrew and Aramaic Lexicon of the Old Testament",
        authors: "Ludwig Koehler; Walter Baumgartner; Johann Jakob Stamm; trad. M. E. J. Richardson",
        publisher: "Brill, Leiden",
        date: "1994–2000 (edição em volumes)",
        edition: "O PDF canônico da ingestão é identificado como CD-ROM Edition",
        isbn: null,
        pages: null,
        coverUrl: "imagens/capas/halot.png",
        coverColor: "#404b5c",
        note: "Não equiparar o PDF em CD-ROM à série impressa em cinco volumes sem cotejo bibliográfico.",
        reference: "regras/Rhalot.txt"
    },
    "KBS": {
        title: "The Hebrew and Aramaic Lexicon of the Old Testament",
        authors: "Ludwig Koehler; Walter Baumgartner; Johann Jakob Stamm; trad. M. E. J. Richardson",
        publisher: "E. J. Brill, Leiden",
        date: "1994–2000",
        edition: "Edição impressa em cinco volumes (KBS)",
        isbn: null,
        pages: null,
        coverUrl: null,
        coverColor: "#404b5c",
        note: "Os cinco volumes possuem datas e ISBN próprios; conferir o volume exato antes de atribuir dados editoriais a um verbete.",
        reference: "regras/Rfontes-consulta.txt"
    },
    "CLINES": {
        title: "The Dictionary of Classical Hebrew",
        authors: "David J. A. Clines (editor)",
        publisher: "Sheffield Academic Press; Sheffield Phoenix Press",
        date: "1993–2011",
        edition: "Oito volumes lexicográficos (I–VIII)",
        isbn: null,
        pages: "5.653 p. (conjunto de oito volumes, referência comercial)",
        coverUrl: null,
        coverColor: "#292e3e",
        note: "Cada volume tem sua própria edição, paginação e ISBN. A data de 2011 em reimpressões não substitui a data original de cada volume.",
        reference: "regras/Rfontes-consulta.txt"
    },
    "LSJ": {
        title: "A Greek-English Lexicon",
        authors: "Henry George Liddell; Robert Scott; revisão de Henry Stuart Jones e Roderick McKenzie",
        publisher: "Clarendon Press, Oxford",
        date: "1940 (nona edição de referência)",
        edition: "A Greek-English Lexicon, nona edição; transcrição auxiliar Perseus/Tufts–LSJLogeion",
        isbn: null,
        pages: null,
        coverUrl: null,
        coverColor: "#4e536d",
        note: "Os artigos portugueses estão sendo traduzidos progressivamente da transcrição TEI auxiliar LSJLogeion/Perseus. O exemplar impresso de Oxford (1940) permanece por cotejar integralmente. O total de fonte não é o total de artigos publicados.",
        reference: "regras/Rlsj.txt"
    }
});
