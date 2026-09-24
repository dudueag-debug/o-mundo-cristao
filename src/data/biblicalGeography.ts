export interface BiblicalPlace {
  id: string;
  name: string;
  nativeName: string; // Hebraico, Aramaico ou Grego original
  transliteration: string;
  literalMeaning: string;
  category: 'jesus' | 'profetas';
  region: string;
  biblicalPassages: string[];
  historicalAndSpiritualEvents: string;
  propheticSignificance: string;
  todayStatus: string;
}

export const BIBLICAL_PLACES: BiblicalPlace[] = [
  // Lugares de Jesus
  {
    id: 'belem',
    name: 'Belém',
    nativeName: 'בֵּית לֶחֶם',
    transliteration: 'Beit Lechem (Hebraico)',
    literalMeaning: 'Casa do Pão (no árabe moderno: Beit Lahm, Casa da Carne)',
    category: 'jesus',
    region: 'Montes da Judeia (a 8 km ao sul de Jerusalém)',
    biblicalPassages: ['Miquéias 5:2', 'Mateus 2:1-12', 'Lucas 2:1-20', 'Rute 1 e 4'],
    historicalAndSpiritualEvents: 'Local onde nasceu o Rei Davi e onde se desenrolou a história de Rute e Boaz. Foi em Belém que a Virgem Maria deu à luz ao Messias Jesus em uma manjedoura, após não haver lugar para eles na hospedaria, e onde os anjos anunciaram a glória a pastores e os magos do Oriente trouxeram ouro, incenso e mirra.',
    propheticSignificance: 'Cumprimento exato da profecia de Miquéias 5:2 proferida 700 anos antes ("E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que governará em Israel"). Aquele que é o verdadeiro "Pão da Vida" (João 6:35) nasceu na cidade cujo nome significa literalmente "Casa do Pão".',
    todayStatus: 'Localizada na Cisjordânia, sob administração palestina, lar da milenar Basílica da Natividade.'
  },
  {
    id: 'nazare',
    name: 'Nazaré',
    nativeName: 'נָצְרַת',
    transliteration: 'Natzrat (do radical נֵצֶר - Netzer)',
    literalMeaning: 'Ramo, Broto ou Renovo verdejante',
    category: 'jesus',
    region: 'Baixa Galileia',
    biblicalPassages: ['Isaías 11:1', 'Mateus 2:23', 'Lucas 1:26-38', 'Lucas 4:16-30'],
    historicalAndSpiritualEvents: 'Vila simples e desprezada onde o anjo Gabriel anunciou a Maria o nascimento de Jesus; onde Jesus cresceu em sabedoria, estatura e graça diante de Deus e dos homens (Lc 2:52); e onde Jesus iniciou Seu ministério público lendo o rolo de Isaías 61 na sinagoga local, sendo rejeitado por Seus concidadãos.',
    propheticSignificance: 'Aponta para o cumprimento profético de Isaías 11:1: "Porque brotará um rebento do tronco de Jessé, e das suas raízes um renovo (Netzer) frutificará". Jesus foi chamado "O Nazareno" para cumprir a profecia de Sua humildade e identificação com os desprovidos.',
    todayStatus: 'Hoje é a maior cidade árabe no Distrito Norte de Israel, com importante população cristã e a Basílica da Anunciação.'
  },
  {
    id: 'rio-jordao',
    name: 'Rio Jordão',
    nativeName: 'נְהַר הַיַּרְדֵּן',
    transliteration: 'Nehar ha-Yarden (raiz יָרַד - Yarad)',
    literalMeaning: 'Aquele que Desce / O Descendente',
    category: 'jesus',
    region: 'Vale do Rift / Fronteira entre Israel e Jordânia',
    biblicalPassages: ['Josué 3', '2 Reis 5:1-14', 'Mateus 3:13-17', 'Marcos 1:9-11'],
    historicalAndSpiritualEvents: 'O rio que as doze tribos atravessaram a pé enxuto com a Arca da Aliança sob a liderança de Josué; onde Naamã mergulhou 7 vezes e foi purificado da lepra; e onde Jesus foi batizado por João Batista, momento em que os céus se abriram, o Espírito Santo desceu em forma de pomba e o Pai proclamou: "Este é o meu Filho amado, em quem me comprazo".',
    propheticSignificance: 'Simboliza a transição da Lei para a Graça e o início público da unção messiânica. O nome "aquele que desce" aponta para a humilhação (kénosis) de Cristo, que desceu das alturas celestiais para se identificar com a humanidade quebrantada.',
    todayStatus: 'Corre desde a encosta do Monte Hermom até desaguar no Mar Morto, sendo um dos rios mais reverenciados de toda a história bíblica.'
  },
  {
    id: 'cafarnaum',
    name: 'Cafarnaum',
    nativeName: 'כְּפַר נַחוּם',
    transliteration: 'Kefar Nachum',
    literalMeaning: 'Vila ou Aldeia de Naum (Consolo)',
    category: 'jesus',
    region: 'Costa noroeste do Mar da Galileia',
    biblicalPassages: ['Mateus 4:13', 'Mateus 9:1-8', 'Marcos 2:1-12', 'João 6:22-59'],
    historicalAndSpiritualEvents: 'Tornou-se a base de operações de Jesus ("sua própria cidade"). Foi ali que Jesus curou o paralítico descido pelo teto; curou a sogra de Pedro; ressuscitou a filha de Jairo; curou o servo do centurião romano; e pregou o sermão sobre o Pão da Vida na sinagoga de pedra calcária branca.',
    propheticSignificance: 'Jesus cumpriu a profecia de Isaías 9:1-2: "A terra de Zebulom e a terra de Naftali, o povo que andava em trevas viu uma grande luz". A vila de consolo recebeu o próprio Consolador dos aflitos.',
    todayStatus: 'Sítio arqueológico com as ruínas impressionantes da casa de Pedro e da sinagoga monumental dos séculos I e IV.'
  },
  {
    id: 'mar-da-galileia',
    name: 'Mar da Galileia (Lago de Genesaré / Tiberíades)',
    nativeName: 'יָם כִּנֶּרֶת',
    transliteration: 'Yam Kinneret (de כִּנּוֹר - Kinnor, Harpa)',
    literalMeaning: 'Mar em Formato de Harpa (Genesaré = "Jardim das Delícias")',
    category: 'jesus',
    region: 'Galileia (212 metros abaixo do nível do mar mediterrâneo)',
    biblicalPassages: ['Mateus 8:23-27', 'Mateus 14:22-33', 'Lucas 5:1-11', 'João 21:1-19'],
    historicalAndSpiritualEvents: 'Palco de milagres estupendos: Jesus acalmou a fúria dos ventos e das ondas com uma palavra ("Cala-te, emudece!"); caminhou sobre as águas em meio à tempestade; realizou as duas pescas milagrosas; e restaurou Pedro após a ressurreição ao redor de brasas acesas dizendo: "Simão, tu me amas? Apascenta as minhas ovelhas".',
    propheticSignificance: 'Mostrou a autoridade de Cristo sobre o caos e as forças naturais, demonstrando Seu poder como o Deus que anda sobre as asas do vento (Salmo 104:3).',
    todayStatus: 'O maior reservatório natural de água doce de Israel, cercado por colinas verdes onde ainda hoje pescadores navegam em suas águas.'
  },
  {
    id: 'monte-das-bem-aventurancas',
    name: 'Monte das Bem-Aventuranças',
    nativeName: 'הַר הָאֲשָׁרִים / ὄρος τῶν Μακαρισμῶν',
    transliteration: 'Har ha-Asharim (Hebraico) / Oros ton Makarismon (Grego)',
    literalMeaning: 'Monte da Suprema Felicidade / Monte dos Bem-Aventurados',
    category: 'jesus',
    region: 'Colinas acima de Tabgha e Cafarnaum, com vista para o Mar da Galileia',
    biblicalPassages: ['Mateus 5:1-12', 'Mateus 6 e 7'],
    historicalAndSpiritualEvents: 'Local onde Jesus subiu, assentou-se e proferiu o mais sublime discurso ético e teológico da história da humanidade: o Sermão do Monte (Mateus 5 a 7), proclamando bem-aventurados os pobres de espírito, os mansos, os pacificadores e os puros de coração.',
    propheticSignificance: 'Assim como Moisés subiu ao Sinai para receber a Lei gravada em tábuas de pedra, Jesus, o Legislador Divino, subiu ao monte para gravar a Nova Aliança da graça e do amor no coração humano.',
    todayStatus: 'Belíssima colina com jardim florido e a Igreja das Bem-Aventuranças com arquitetura octogonal lembrando os oito preceitos.'
  },
  {
    id: 'cesareia-de-filipe',
    name: 'Cesaréia de Filipe (Cesareia Panéas)',
    nativeName: 'בָּנְיָאס / Καισάρεια τοῦ Φιλίππου',
    transliteration: 'Banias / Kaisareia tou Filippou',
    literalMeaning: 'Cidade de César fundada por Filipe (antigo santuário do deus pagão Pã)',
    category: 'jesus',
    region: 'Ao sopé do Monte Hermom, junto às nascentes do Rio Jordão',
    biblicalPassages: ['Mateus 16:13-20', 'Marcos 8:27-30'],
    historicalAndSpiritualEvents: 'Diante de uma enorme falésia de pedra repleta de nichos pagãos dedicados ao deus Pã (considerada pelos antigos como "a porta do inferno"), Jesus perguntou: "Quem dizem os homens ser o Filho do Homem?". Pedro proclamou a célebre confissão: "Tu és o Cristo, o Filho do Deus vivo!". Jesus respondeu: "Sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela".',
    propheticSignificance: 'A revelação divina da identidade de Cristo como o Messias eterno triunfa sobre toda a idolatria e ocultismo pagão.',
    todayStatus: 'Reserva Natural de Hermon Stream (Banias), sítio arqueológico com nascentes caudalosas de águas cristalinas.'
  },
  {
    id: 'betania',
    name: 'Betânia',
    nativeName: 'בֵּית עַנְיָא',
    transliteration: 'Beit Anya (Aramaico)',
    literalMeaning: 'Casa dos Pobres, dos Aflitos ou dos Frutos Verdes',
    category: 'jesus',
    region: 'Encosta oriental do Monte das Oliveiras (a 3 km de Jerusalém)',
    biblicalPassages: ['João 11:1-44', 'João 12:1-8', 'Lucas 10:38-42'],
    historicalAndSpiritualEvents: 'O refúgio de amizade de Jesus na casa de Seus amigos Lázaro, Marta e Maria. Ali Jesus ressuscitou Lázaro após quatro dias na sepultura ("Lázaro, vem para fora!"); ali Maria ungiu os pés de Jesus com nardo puro derramando perfume de grande valor para o dia de Sua sepultura.',
    propheticSignificance: 'Em Betânia Jesus fez a declaração triunfal: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá" (João 11:25).',
    todayStatus: 'Hoje chamada al-Eizariya ("Lugar de Lázaro"), abriga a Tumba de Lázaro aberta à visitação.'
  },
  {
    id: 'getsemani',
    name: 'Jardim do Getsêmani',
    nativeName: 'גַּת שְׁמָנִים',
    transliteration: 'Gat Shmanim (de גַּת - Prensa e שֶׁמֶן - Azeite)',
    literalMeaning: 'A Prensa de Azeite',
    category: 'jesus',
    region: 'Pé do Monte das Oliveiras, em frente ao Vale do Cedrom e ao Templo',
    biblicalPassages: ['Mateus 26:36-46', 'Marcos 14:32-42', 'Lucas 22:39-46'],
    historicalAndSpiritualEvents: 'O olival onde Jesus se recolheu em agonia na noite em que foi traído. Ali orou prostrado com suor como grandes gotas de sangue que caíam em terra: "Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres". Ali foi traído com um beijo por Judas e preso pelos soldados do Sinédrio.',
    propheticSignificance: 'Assim como as azeitonas eram prensadas sob pedras pesadíssimas para produzir o azeite puro que iluminava o candelabro do Templo, Jesus foi prensado pelo peso dos pecados do mundo no Getsêmani para produzir a salvação eterna e o Espírito de luz para a humanidade.',
    todayStatus: 'Jardim preservado com oliveiras milenares e a Basílica de Todas as Nações (Igreja da Agonia).'
  },
  {
    id: 'golgota',
    name: 'Gólgota (O Monte Calvário)',
    nativeName: 'גֻּלְגֹּלֶת / Γολγοθᾶ',
    transliteration: 'Gulgoleth (Aramaico / Hebraico) / Golgotha (Grego)',
    literalMeaning: 'Lugar da Caveira (em latim: Calvaria)',
    category: 'jesus',
    region: 'Fora dos muros antigos de Jerusalém, junto a uma via pública',
    biblicalPassages: ['Mateus 27:33-50', 'João 19:17-30', 'Hebreus 13:12'],
    historicalAndSpiritualEvents: 'O monte de execução onde Jesus Cristo foi cravado na Cruz entre dois malfeitores. Ali tomou sobre Si a maldição da humanidade; perdoou os Seus algozes; salvou o ladrão arrependido; entregou Sua mãe aos cuidados de João; e exclamou Sua vitória eterna: "Tetélestai" (Está consumado!), expirando o Seu espírito e rasgando o véu do Templo de alto a baixo.',
    propheticSignificance: 'O ápice da redenção divina e cumprimento de Isaías 53: "Ele foi traspassado pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados".',
    todayStatus: 'Localizado no Santo Sepulcro e na área do Jardim da Tumba (Calvário de Gordon).'
  },
  {
    id: 'monte-das-oliveiras',
    name: 'Monte das Oliveiras',
    nativeName: 'הַר הַזֵּיתִים',
    transliteration: 'Har ha-Zeitim',
    literalMeaning: 'Monte das Oliveiras',
    category: 'jesus',
    region: 'A leste de Jerusalém, separado pela ravina do Vale de Josafá / Cedrom',
    biblicalPassages: ['Zacarias 14:4', 'Lucas 19:28-44', 'Atos 1:9-12'],
    historicalAndSpiritualEvents: 'Local onde Jesus chorou sobre Jerusalém contemplando o Templo; onde proferiu o Sermão Escatológico; e de onde ascendeu aos céus diante dos olhos dos discípulos, enquanto dois varões vestidos de branco prometeram: "Esse mesmo Jesus, que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir".',
    propheticSignificance: 'Aponta para a gloriosa Segunda Vinda profetizada em Zacarias 14:4: "E, naquele dia, estarão os seus pés sobre o Monte das Oliveiras, que está defronte de Jerusalém para o oriente".',
    todayStatus: 'Cume que oferece a vista panorâmica mais famosa e sagrada de toda a Cidade Velha de Jerusalém.'
  },

  // Lugares dos Profetas
  {
    id: 'monte-carmelo',
    name: 'Monte Carmelo',
    nativeName: 'הַר הַכַּרְמֶל',
    transliteration: 'Har ha-Karmel (de כֶּרֶם אֵל - Kerem El)',
    literalMeaning: 'Jardim, Pomar ou Vinha Fértil de Deus',
    category: 'profetas',
    region: 'Cadeia de montanhas costeira com vista para o Mar Mediterrâneo e Vale de Jezreel',
    biblicalPassages: ['1 Reis 18:17-46', '2 Reis 2:25', 'Amós 9:3'],
    historicalAndSpiritualEvents: 'O cenário monumental onde o profeta Elias confrontou o rei Acabe e os 450 profetas de Baal e 400 de Asera. Elias restaurou o altar do Senhor que estava quebrado, cavou um rego ao redor, encharcou o holocausto com 12 cântaros de água e orou. O fogo do Senhor desceu dos céus, lambeu o sacrifício e as pedras e a água, e o povo caiu com o rosto em terra clamando: "Só o Senhor é Deus!".',
    propheticSignificance: 'Demonstrou que o Deus de Israel é o único Deus vivo que responde pelo fogo, desmascarando a ilusão dos ídolos pagãos e restaurando o coração da nação ao arrependimento.',
    todayStatus: 'Hoje abriga o santuário de Muhraqa ("Lugar da Queima"), com vasta vista do Vale do Armagedom (Megido).'
  },
  {
    id: 'monte-sinai',
    name: 'Monte Sinai (Monte Horebe / Jebel Musa)',
    nativeName: 'הַר סִינַי / חֹרֵב',
    transliteration: 'Har Sinai / Chorev',
    literalMeaning: 'Sinai = Brilhante / Horebe = Lugar Seco / Deserto',
    category: 'profetas',
    region: 'Península do Sinai',
    biblicalPassages: ['Êxodo 19 e 20', 'Êxodo 33', '1 Reis 19:8-18'],
    historicalAndSpiritualEvents: 'Onde Deus apareceu a Moisés na sarça ardente que não se consumia; onde o Senhor desceu em fogo e fumaça com som de buzinas e entregou a Lei e os Dez Mandamentos; e onde o profeta Elias, em fuga da rainha Jezabel, entrou em uma caverna e ouviu a voz de Deus não no vento forte, nem no terremoto, nem no fogo, mas num cicio suave e delicado.',
    propheticSignificance: 'O monte da Antiga Aliança e da santidade transcendente do Senhor. Em contraste com o Sinai que fumegava de terror, o autor de Hebreus lembra que fomos conduzidos ao Monte Sião da graça reconciliadora (Hebreus 12:18-24).',
    todayStatus: 'Montanha escarpada de granito vermelho no sul do Sinai, ao pé da qual se ergue o milenar Mosteiro Ortodoxo de Santa Catarina.'
  },
  {
    id: 'rio-quebar',
    name: 'Rio Quebar (Babilônia)',
    nativeName: 'נְהַר כְּבָר',
    transliteration: 'Nehar Kevar',
    literalMeaning: 'O Grande Rio / Canal Abundante',
    category: 'profetas',
    region: 'Planícies da Mesopotâmia / Babilônia (atual Iraque)',
    biblicalPassages: ['Ezequiel 1:1-3', 'Ezequiel 3:15', 'Ezequiel 10:15'],
    historicalAndSpiritualEvents: 'O grande canal navegável babilônico onde os cativos judeus deportados por Nabucodonosor choravam lembrando-se de Sião. Foi às margens do Quebar que os céus se abriram para o profeta Ezequiel e ele viu as visões de Deus: as quatro criaturas viventes, as rodas de fogo repletas de olhos e a carruagem da Glória do Senhor se movendo soberanamente.',
    propheticSignificance: 'Mostrou aos exilados desesperados que a Glória de Deus não estava aprisionada nas pedras do templo destruído em Jerusalém, mas acompanha o Seu povo na diáspora e reina soberano sobre todos os impérios da Terra.',
    todayStatus: 'Identificado pelos arqueólogos com o antigo canal Nar Kabari próximo à cidade de Nipur, no Iraque.'
  },
  {
    id: 'silo',
    name: 'Siló',
    nativeName: 'שִׁלֹה',
    transliteration: 'Shiloh',
    literalMeaning: 'Lugar de Descanso, Paz e Segurança',
    category: 'profetas',
    region: 'Região montanhosa de Efraim (norte de Betel)',
    biblicalPassages: ['Josué 18:1', '1 Samuel 1 a 3', 'Jeremias 7:12-14'],
    historicalAndSpiritualEvents: 'O primeiro centro espiritual de Israel em Canaã, onde o Tabernáculo e a Arca da Aliança permaneceram por mais de 300 anos. Foi ali que Ana orou com o coração amargurado e foi ouvida por Deus, gerando o profeta Samuel; e ali que o menino Samuel, na escuridão do santuário, ouviu Deus chamá-lo: "Samuel, Samuel!... Fala, Senhor, que o teu servo ouve".',
    propheticSignificance: 'O nome Siló também é o título messiânico profetizado por Jacó no leito de morte em Gênesis 49:10: "O cetro não se arredará de Judá... até que venha Siló (Aquele a quem pertence a paz); e a ele se congregarão os povos".',
    todayStatus: 'Tel Shiloh, sítio arqueológico em Samaria onde foram encontrados os vestígios da plataforma exata onde o Tabernáculo mosaico esteve assentado.'
  },
  {
    id: 'ninive',
    name: 'Nínive',
    nativeName: 'נִינְוֵה',
    transliteration: 'Nineveh',
    literalMeaning: 'Morada de Ninus / Cidade Aquática (antiga capital do Império Assírio)',
    category: 'profetas',
    region: 'Margem oriental do Rio Tigre (próximo à moderna Mossul, no Iraque)',
    biblicalPassages: ['Livro de Jonas', 'Livro de Naum', 'Mateus 12:41'],
    historicalAndSpiritualEvents: 'A temível capital do violento Império Assírio para a qual o profeta Jonas foi enviado após sua fuga e resgate do ventre do grande peixe. Ao ouvir a proclamação de Jonas ("Ainda quarenta dias, e Nínive será subvertida!"), o rei e todos os cidadãos, vestidos de saco e cinza, jejuaram e se arrependeram de sua violência, alcançando o perdão divino.',
    propheticSignificance: 'Jesus usou a história de Nínive para repreender os religiosos de Seus dias: "Os homens de Nínive se levantarão no juízo com esta geração e a condenarão; pois se arrependeram com a pregação de Jonas; e eis aqui quem é maior do que Jonas" (Mateus 12:41).',
    todayStatus: 'Ruínas arqueológicas situadas em Mossul (Iraque), com montículos históricos de Kouyunjik e Nabi Yunus.'
  }
];
