"use strict";
/* JASTROW: complementação centralizada de popups para a rodada A00010–A00109.
   Expansões descritivas; nenhuma URL inferida ou citação substituída. */
(function(){
const lex=window.ScripturaLexicons && window.ScripturaLexicons.JASTROW;
if(!lex)throw Error("JASTROW base module required");
const terms=[
  {
    "key": "Rosh Hashaná",
    "type": "biblio",
    "text": "Tratado Rosh Hashaná da Mishná e do Talmude, relativo ao início dos anos e à proclamação dos meses."
  },
  {
    "key": "Ta‘anit",
    "type": "biblio",
    "text": "Tratado Ta‘anit, acerca de jejuns e súplicas em períodos de calamidade."
  },
  {
    "key": "Sanhedrin",
    "type": "biblio",
    "text": "Tratado Sanhedrin, relativo aos tribunais, ao direito penal e à organização judicial rabínica."
  },
  {
    "key": "Sifré Deuteronômio",
    "type": "biblio",
    "text": "Midraxe haláquico sobre Deuteronômio, conhecido como Sifré Devarim."
  },
  {
    "key": "Sifré",
    "type": "biblio",
    "text": "Denominação de coleções de midraxes haláquicos sobre livros da Torá, sobretudo Números e Deuteronômio."
  },
  {
    "key": "Oholot",
    "type": "biblio",
    "text": "Tratado Oholot, da ordem Tohorot da Mishná, que trata de impureza ritual transmitida em espaços cobertos."
  },
  {
    "key": "Ketubot",
    "type": "biblio",
    "text": "Tratado Ketubot, relativo a contratos matrimoniais e a aspectos jurídicos do casamento."
  },
  {
    "key": "Avodah Zarah",
    "type": "biblio",
    "text": "Tratado Avodah Zarah, sobre relações jurídicas e religiosas com o culto estrangeiro."
  },
  {
    "key": "Targum Onkelos",
    "type": "biblio",
    "text": "Tradução e interpretação aramaica tradicional da Torá, conhecida como Targum Onkelos."
  },
  {
    "key": "Targum",
    "type": "biblio",
    "text": "Tradução interpretativa para o aramaico de textos das Escrituras Hebraicas; há diversos targumim."
  },
  {
    "key": "Gênesis Rabá",
    "type": "biblio",
    "text": "Bereshit Rabá: coleção antiga de comentários homiléticos e exegéticos sobre Gênesis."
  },
  {
    "key": "Levítico Rabá",
    "type": "biblio",
    "text": "Vayikrá Rabá: coleção de homilias e interpretações rabínicas sobre Levítico."
  },
  {
    "key": "Números Rabá",
    "type": "biblio",
    "text": "Bamidbar Rabá: coleção midráxica de comentários sobre Números."
  },
  {
    "key": "Êxodo Rabá",
    "type": "biblio",
    "text": "Shemot Rabá: coletânea de comentários rabínicos sobre Êxodo."
  },
  {
    "key": "Cântico dos Cânticos Rabá",
    "type": "biblio",
    "text": "Shir ha-Shirim Rabá: comentários rabínicos ao Cântico dos Cânticos."
  },
  {
    "key": "Eclesiastes Rabá",
    "type": "biblio",
    "text": "Kohelet Rabá: comentário midráxico ao livro de Eclesiastes."
  },
  {
    "key": "Rute Rabá",
    "type": "biblio",
    "text": "Rute Rabá: comentário midráxico ao livro de Rute."
  },
  {
    "key": "Yalkut",
    "type": "biblio",
    "text": "Forma abreviada de referência a coletâneas de interpretações rabínicas, especialmente Yalkut Shimoni; a identificação exata depende da passagem."
  },
  {
    "key": "Berakhot",
    "type": "biblio",
    "text": "Tratado Berakhot, que trata de bênçãos, oração, Shemá e práticas associadas."
  },
  {
    "key": "Shabbat",
    "type": "biblio",
    "text": "Tratado Shabbat, sobre a observância do sábado e suas categorias de trabalho."
  },
  {
    "key": "Eruvin",
    "type": "biblio",
    "text": "Tratado Eruvin, acerca de limites e disposições que regulam certas atividades no sábado."
  },
  {
    "key": "Yoma",
    "type": "biblio",
    "text": "Tratado Yoma, sobre o Dia da Expiação e seus ritos."
  },
  {
    "key": "Sucá",
    "type": "biblio",
    "text": "Tratado Sucá, sobre a Festa dos Tabernáculos."
  },
  {
    "key": "Gitin",
    "type": "biblio",
    "text": "Tratado Gitin, relativo a documentos de divórcio e suas normas."
  },
  {
    "key": "Pesahim",
    "type": "biblio",
    "text": "Tratado Pesahim, sobre a Páscoa e o pão ázimo."
  },
  {
    "key": "Hagigah",
    "type": "biblio",
    "text": "Tratado Hagigah, sobre peregrinações e ofertas das festividades."
  },
  {
    "key": "Bava Metzia",
    "type": "biblio",
    "text": "Tratado Bava Metzia, sobre relações civis, propriedade, trabalho e contratos."
  },
  {
    "key": "Bava Kamma",
    "type": "biblio",
    "text": "Tratado Bava Kamma, especialmente sobre danos e responsabilidade civil."
  },
  {
    "key": "Bava Batra",
    "type": "biblio",
    "text": "Tratado Bava Batra, sobre propriedade e transmissão de bens."
  },
  {
    "key": "Menahot",
    "type": "biblio",
    "text": "Tratado Menahot, sobre oferendas de cereais e outros temas cultuais."
  },
  {
    "key": "Nedarim",
    "type": "biblio",
    "text": "Tratado Nedarim, sobre votos e compromissos religiosos."
  },
  {
    "key": "Moed Katan",
    "type": "biblio",
    "text": "Tratado Moed Katan, relativo aos dias intermediários das festas e às práticas de luto."
  },
  {
    "key": "Tohorot",
    "type": "biblio",
    "text": "Ordem da Mishná dedicada às normas de pureza e impureza ritual."
  },
  {
    "key": "Avot",
    "type": "biblio",
    "text": "Tratado Pirkei Avot (“Capítulos dos Pais”), coleção de máximas éticas rabínicas na ordem Nezikin."
  },
  {
    "key": "Nezikin",
    "type": "biblio",
    "text": "Uma das seis ordens da Mishná, dedicada sobretudo a direito civil e criminal."
  },
  {
    "key": "Mishná",
    "type": "biblio",
    "text": "Compilação fundamental de tradições jurídico-religiosas rabínicas, organizada em seis ordens."
  },
  {
    "key": "Sinédrio",
    "type": "biblio",
    "text": "Conselho e tribunal judaico designado pela tradição rabínica como Sanhedrin."
  },
  {
    "key": "amoraítas",
    "type": "abbr",
    "text": "Sábios rabínicos do período talmúdico posterior à compilação da Mishná."
  },
  {
    "key": "amoraíta",
    "type": "abbr",
    "text": "Membro do grupo de mestres rabínicos que comentaram a Mishná nas tradições talmúdicas."
  },
  {
    "key": "midraxe",
    "type": "abbr",
    "text": "Interpretação ou exposição rabínica de passagens das Escrituras; também designa coleções desses comentários."
  },
  {
    "key": "Midrax",
    "type": "abbr",
    "text": "Transliteração de midrash: interpretação rabínica de um texto bíblico e, por extensão, sua coletânea."
  },
  {
    "key": "havdalá",
    "type": "abbr",
    "text": "Rito e oração que assinalam a separação entre o sábado ou festa e o período comum."
  },
  {
    "key": "nasi",
    "type": "abbr",
    "text": "Título de liderança ou presidência em instituições judaicas antigas, conforme o período."
  },
  {
    "key": "Nifal",
    "type": "abbr",
    "text": "Padrão verbal hebraico tradicional, geralmente com valores médios ou passivos, variáveis conforme o verbo."
  },
  {
    "key": "Pael",
    "type": "abbr",
    "text": "Padrão verbal intensivo/factitivo em variedades aramaicas; sua função depende do contexto lexical."
  },
  {
    "key": "Af'el",
    "type": "abbr",
    "text": "Padrão verbal aramaico geralmente causativo, correspondente funcional ao hifil hebraico em diversos contextos."
  },
  {
    "key": "Itpaal",
    "type": "abbr",
    "text": "Padrão verbal aramaico frequentemente reflexivo ou médio-passivo."
  },
  {
    "key": "qal",
    "type": "abbr",
    "text": "Forma verbal hebraica simples, também chamada paʿal."
  },
  {
    "key": "Piel",
    "type": "abbr",
    "text": "Padrão verbal hebraico tradicional, cujo valor deve ser estabelecido segundo o verbo e o contexto."
  }
];
lex.bibliographicTerms=lex.bibliographicTerms||[];
const used=new Set(lex.bibliographicTerms.map(t=>t.key.toLocaleLowerCase("pt-BR")));
for(const term of terms){const key=term.key.toLocaleLowerCase("pt-BR");if(!used.has(key)){lex.bibliographicTerms.push(term);used.add(key);}}
})();
