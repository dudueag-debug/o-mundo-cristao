export interface BiblicalCharacter {
  id: string;
  name: string;
  originalName: string;
  transliteration: string;
  meaning: string;
  nationality: string;
  testament: 'AT' | 'NT';
  role: string;
  historicalPeriod: string;
  biblicalBooks: string[];
  covenantConnection: string;
  theologicalSignificance: string;
  hermeneuticalApplication: string;
  completeBiography: string;
  spiritualLegacyAndChrist: string;
  keyVerse: string;
}

export const BIBLICAL_CHARACTERS: BiblicalCharacter[] = [
  {
    id: 'adao',
    name: 'Adão',
    originalName: 'אָדָם',
    transliteration: 'Adam (ligado a אֲדָמָה - Adamah, Terra/Solo avermelhado)',
    meaning: 'Ser Humano / Tirado da Terra',
    nationality: 'Primeiro ser humano criado por Deus na Mesopotâmia / Éden',
    testament: 'AT',
    role: 'Primeiro Patriarca e Cabeça Federal da Humanidade',
    historicalPeriod: 'A Criação e Origens da Humanidade',
    biblicalBooks: ['Gênesis 1 a 5', 'Romanos 5', '1 Coríntios 15'],
    covenantConnection: 'Aliança Edênica e Adâmica: estabelece o mandato cultural, a prova da obediência no jardim e a promessa do Protoevangelho (Gênesis 3:15).',
    theologicalSignificance: 'Antropologia Bíblica e Hamartiologia: Adão foi criado em estado de inocência original à Imagem de Deus (Imago Dei). Sua queda voluntária introduziu a culpa original, a depravação da natureza humana e a separação espiritual de Deus.',
    hermeneuticalApplication: 'Ninguém pode salvar a si mesmo pelas obras porque todos nascem sob a solidariedade caída do primeiro Adão; somente o novo nascimento pelo Espírito nos transfere para o reinado da graça em Cristo.',
    completeBiography: 'Criado diretamente pelas mãos de Deus à Sua imagem e semelhança (Imago Dei) a partir do pó da terra, Adão recebeu o fôlego de vida (Neshamah) e foi colocado no Jardim do Éden para lavrá-lo e guardá-lo. Deu nome a todas as criaturas e recebeu Eva como companheira idônea. Sucumbiu à tentação da serpente ao desobedecer a ordem de não comer da árvore do conhecimento do bem e do mal. Pela sua desobediência voluntária, o pecado e a morte entraram no mundo, afetando toda a sua descendência. Contudo, ouviu no Éden a promessa do Protoevangelho (Gênesis 3:15), que anunciava a vitória futura da semente da mulher sobre a serpente.',
    spiritualLegacyAndChrist: 'O apóstolo Paulo define Adão como figura do que havia de vir (Romanos 5:14). Jesus Cristo é o "Último Adão" (1 Coríntios 15:45): enquanto o primeiro Adão trouxe condenação e morte pela desobediência no jardim, o Último Adão trouxe justificação e vida eterna pela obediência na cruz.',
    keyVerse: '"Porque, assim como todos morrem em Adão, assim também todos serão vivificados em Cristo." (1 Coríntios 15:22)'
  },
  {
    id: 'eva',
    name: 'Eva',
    originalName: 'חַוָּה',
    transliteration: 'Chavah (da raiz חָיָה - Chayah, Viver)',
    meaning: 'Mãe de Todos os Viventes / Vivificadora',
    nationality: 'Primeira mulher da Criação / Éden',
    testament: 'AT',
    role: 'Matriarca da Humanidade e Companheira Idônea de Adão',
    historicalPeriod: 'A Criação',
    biblicalBooks: ['Gênesis 2 a 4', '2 Coríntios 11:3', '1 Timóteo 2:13-14'],
    covenantConnection: 'Aliança Adâmica: receptora da promessa profética da "Semente da Mulher" que haveria de esmagar a cabeça da serpente (Gênesis 3:15).',
    theologicalSignificance: 'Ontologia da Dignidade Feminina: criada da costela ao lado de Adão, simbolizando igualdade de natureza perante o Criador. Sua sedução pela serpente evidencia a fragilidade do discernimento autônomo fora da Palavra revelada.',
    hermeneuticalApplication: 'A resposta de Deus ao fracasso humano no Éden não foi o aniquilamento, mas a promessa da graça redentora através da linhagem materna que geraria o Messias.',
    completeBiography: 'Criada por Deus da costela de Adão para ser sua auxiliadora correspondente, em perfeita igualdade de essência e dignidade espiritual. Foi seduzida pela astúcia da serpente a duvidar da bondade e da palavra de Deus, comendo do fruto proibido e dando ao marido. Recebeu no julgamento a sentença do parto com dores e a submissão, mas também a gloriosa promessa profética de que de sua descendência nasceria o Salvador que esmagaria a cabeça da serpente (Gênesis 3:15). Foi mãe de Caim, Abel e Sete.',
    spiritualLegacyAndChrist: 'Eva é a receptora da primeira profecia messiânica das Escrituras (o Protoevangelho). A promessa de redenção foi entregue através de sua linhagem, culminando na encarnação de Jesus Cristo.',
    keyVerse: '"E chamou Adão o nome de sua mulher Eva, porquanto ela era a mãe de todos os viventes." (Gênesis 3:20)'
  },
  {
    id: 'abraao',
    name: 'Abraão',
    originalName: 'אַבְרָהָם (originalmente אַבְרָם - Avram)',
    transliteration: 'Avraham (de Av Hamon Goyim - Pai de muitas nações)',
    meaning: 'Pai de uma Multidão de Nações (antes: Pai Exaltado)',
    nationality: 'Semita / Hebreu (originário de Ur dos Caldeus, Mesopotâmia)',
    testament: 'AT',
    role: 'Patriarca Fundador da Aliança e Amigo de Deus',
    historicalPeriod: 'c. 2000 a.C. (Idade do Bronze Médio)',
    biblicalBooks: ['Gênesis 11 a 25', 'Romanos 4', 'Gálatas 3', 'Hebreus 11:8-19'],
    covenantConnection: 'Aliança Abraâmica (Gênesis 12, 15, 17): aliança graciosa, incondicional e perpétua que prometeu Terra, Descendência e Bênção Universal para todas as nações da terra.',
    theologicalSignificance: 'Pilar da Doutrina da Justificação pela Fé (Sola Fide): Abraão creu no Senhor, e isso lhe foi creditado/imputado como justiça divina (Gênesis 15:6; Romanos 4:3).',
    hermeneuticalApplication: 'Ser filho de Abraão no Novo Testamento não é questão de sangue ou etnia judaica, mas de comunhão com a mesma fé obediente em Jesus Cristo (Gálatas 3:7, 29).',
    completeBiography: 'Chamado por Deus aos 75 anos em Harã para deixar sua parentela idólatra e viajar para a terra de Canaã. Deus estabeleceu com ele uma aliança incondicional (Gênesis 12, 15 e 17), prometendo uma terra, uma descendência incontável e que nele seriam benditas todas as famílias da Terra. Creu no Senhor e isso lhe foi imputado como justiça (Gênesis 15:6). Aos 100 anos, pela fidelidade divina, gerou Isaque com Sara. No Monte Moriá, foi provado ao ser ordenado a sacrificar Isaque, crendo na ressurreição, sendo impedido pelo anjo do Senhor que proveu um carneiro em seu lugar.',
    spiritualLegacyAndChrist: 'Abraão é o pai de todos os que creem pela fé (Romanos 4:11). Jesus afirmou: "Abraão, vosso pai, exultou por ver o meu dia; e viu-o e alegrou-se" (João 8:56). A promessa abraâmica alcança os gentios unicamente por meio de Jesus Cristo.',
    keyVerse: '"E creu ele no Senhor, e imputou-lhe isto por justiça." (Gênesis 15:6)'
  },
  {
    id: 'sara',
    name: 'Sara',
    originalName: 'שָׂרָה (originalmente שָׂרַי - Sarai)',
    transliteration: 'Sarah (de Sar - Príncipe)',
    meaning: 'Princesa / Mulher Nobre da Aliança',
    nationality: 'Hebreia / Semita (Meia-irmã e esposa de Abraão)',
    testament: 'AT',
    role: 'Matriarca da Aliança e Mãe de Reis e Povos',
    historicalPeriod: 'c. 2000 a.C.',
    biblicalBooks: ['Gênesis 11 a 23', 'Isaías 51:2', 'Romanos 9:9', '1 Pedro 3:6', 'Hebreus 11:11'],
    covenantConnection: 'Aliança Abraâmica: mãe biológica do herdeiro pactual Isaque, através do qual a descendência santa haveria de ser chamada (Gênesis 21:12).',
    theologicalSignificance: 'Teologia da Graça versus Obras Legais: em Gálatas 4:21-31, Paulo utiliza Sara como alegoria da Jerusalém celestial e da Aliança da Graça (a mulher livre), em contraste com Agar (a escrava que gera para a escravidão da Lei).',
    hermeneuticalApplication: 'A esterilidade humana torna-se o palco onde o poder regenerador de Deus atua, provando que a promessa bíblica não depende de recursos carnais, mas da fidelidade do Senhor.',
    completeBiography: 'Esposa dedicada de Abraão que o acompanhou na jornada de fé por Canaã e Egito. Sofreu durante décadas a dor da esterilidade. Em um momento de fraqueza deu sua serva Agar a Abraão, mas quando Deus renovou a promessa, aos 90 anos de idade seu ventre foi milagrosamente vivificado pelo poder do Todo-Poderoso, dando à luz a Isaque. Foi a única mulher cuja idade, morte e sepultamento no campo de Macpela (Hebrom) estão registrados de forma detalhada na Bíblia.',
    spiritualLegacyAndChrist: 'Apóstolo Pedro a elogia como padrão de beleza interior, fé santa e mansidão (1 Pedro 3:5-6). Ela gerou a linhagem do povo da promessa da qual veio o Messias.',
    keyVerse: '"Olhai para Abraão, vosso pai, e para Sara, que vos deu à luz..." (Isaías 51:2)'
  },
  {
    id: 'moises',
    name: 'Moisés',
    originalName: 'מֹשֶׁה',
    transliteration: 'Mosheh (do verbo מָשָׁה - Mashah, Tirar/Extrair)',
    meaning: 'Tirado das Águas',
    nationality: 'Hebreu da Tribo de Levi (nascido no Egito)',
    testament: 'AT',
    role: 'Libertador de Israel, Legislador, Profeta e Mediador da Antiga Aliança',
    historicalPeriod: 'c. 1500 - 1400 a.C. (Faraós do Império Novo egípcio)',
    biblicalBooks: ['Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Hebreus 3 e 11'],
    covenantConnection: 'Aliança Mosaica / Sinaítica: inaugurada com sacrifício de sangue no Monte Sinai, contendo a Lei moral (Decálogo), a Lei cerimonial e o Tabernáculo.',
    theologicalSignificance: 'Cristologia Tipológica e Ofício Profético: Moisés prefigura a Cristo como Profeta, Legislador e Intercessor. A Lei revela o pecado e a santa transcendência de Deus, servindo de aio até que viesse a Graça (Gálatas 3:24).',
    hermeneuticalApplication: 'A fidelidade de Moisés como servo na casa de Deus é superada infinitamente pela fidelidade de Jesus Cristo como Filho sobre a Sua própria casa espiritual (Hebreus 3:5-6).',
    completeBiography: 'Nascido sob o decreto infanticida do Faraó, foi escondido por seus pais em um cesto de juncos no Rio Nilo e resgatado pela filha de Faraó, sendo educado em toda a sabedoria dos egípcios. Aos 40 anos, ao defender um irmão hebreu, matou um capataz e fugiu para o deserto de Midiã, onde trabalhou como pastor de ovelhas por 40 anos. Aos 80 anos, Deus o chamou na sarça ardente no Monte Horebe para libertar Israel. Confrontou o Faraó através das dez pragas; liderou o povo no Êxodo; abriu o Mar Vermelho; recebeu os Dez Mandamentos no Monte Sinai; construiu o Tabernáculo; e pastoreou a nação por 40 anos até o Monte Nebo, onde contemplou a Terra Prometida e foi sepultado pelo próprio Deus.',
    spiritualLegacyAndChrist: 'Moisés é o maior legislador da antiguidade e tipo profético supremo de Jesus Cristo. Predisse a vinda do Profeta Maior (Dt 18:15). Em João 1:17: "A lei foi dada por Moisés; a graça e a verdade vieram por Jesus Cristo". Apareceu com Elias no Monte da Transfiguração conversando com Jesus sobre a Sua morte salvífica.',
    keyVerse: '"E nunca mais se levantou em Israel profeta algum como Moisés, a quem o Senhor conhecera face a face." (Deuteronômio 34:10)'
  },
  {
    id: 'rute',
    name: 'Rute',
    originalName: 'רוּת',
    transliteration: 'Rut (de רְעוּת - Re\'ut, Amizade/Companheira)',
    meaning: 'Amiga / Companheira Leal',
    nationality: 'Moabita (gentia convertida ao Deus de Israel)',
    testament: 'AT',
    role: 'Exemplo de Lealdade, Fé e Matriarca Real Messiânica',
    historicalPeriod: 'Período dos Juízes (c. 1150 a.C.)',
    biblicalBooks: ['Livro de Rute', 'Mateus 1:5'],
    covenantConnection: 'Aliança da Graça e Lei do Levirato: enxertada no povo da promessa mediante casamento pactual com Boaz, pai de Obede, avô de Davi.',
    theologicalSignificance: 'Doutrina da Redenção (Goel / Parente Remidor) e Inclusão Gentílica: Boaz como parente que tinha o direito, o poder financeiro e a disposição de coração para resgatar Rute é a imagem tipológica exata de Cristo Jesus nos redimindo da miséria do pecado.',
    hermeneuticalApplication: 'O livro de Rute demonstra que, mesmo em épocas de anarquia moral (como o período dos Juízes), a providência de Deus opera silenciosamente nos lares fiéis para preparar a vinda do Rei.',
    completeBiography: 'Jovem viúva moabita que, após a morte de seu marido hebreu Malom, decidiu com amor sacrificial não abandonar sua sogra Noemi, declarando uma das mais belas confissões de conversão e fidelidade da Bíblia: "O teu povo é o meu povo, o teu Deus é o meu Deus" (Rt 1:16). Em Belém, trabalhou recolhendo espigas nos campos do fazendeiro Boaz. Pela lei do resgate (Goel), Boaz redimiu suas terras e a tomou por esposa. Rute deu à luz a Obede, que foi pai de Jessé, pai do Rei Davi.',
    spiritualLegacyAndChrist: 'A inclusão de Rute na genealogia de Jesus em Mateus 1:5 comprova que o plano de salvação de Deus sempre incluiu os povos gentílicos mediante a fé. O resgate de Boaz prefigura o papel de Jesus Cristo como nosso Parente Redentor divino que nos comprou pelo Seu sangue.',
    keyVerse: '"Disse, porém, Rute: Não me instes para que te deixe e me afaste de ti; porque, aonde quer que tu fores, irei eu... o teu povo é o meu povo, o teu Deus é o meu Deus." (Rute 1:16)'
  },
  {
    id: 'davi',
    name: 'Davi',
    originalName: 'דָּוִד',
    transliteration: 'David (de דּוֹד - Dod, Amado)',
    meaning: 'Amado / Predileto do Senhor',
    nationality: 'Hebreu da Tribo de Judá (nascido em Belém)',
    testament: 'AT',
    role: 'Pastor, Salmista, Guerreiro e Maior Rei de Israel',
    historicalPeriod: 'c. 1040 - 970 a.C. (século X a.C.)',
    biblicalBooks: ['1 e 2 Samuel', '1 Crônicas', 'Salmos', 'Atos 13:22'],
    covenantConnection: 'Aliança Davídica (2 Samuel 7:12-16): promessa de que sua dinastia, trono e reino seriam firmados para sempre, cumprida eternamente no Messias ressurreto.',
    theologicalSignificance: 'Teologia Régia e Soteriologia dos Salmos: Davi personifica o Rei Teocrático que reina debaixo da submissão a Yahweh. Seus salmos de lamento e louvor revelam o quebrantamento genuíno da justificação.',
    hermeneuticalApplication: 'Mesmo após a queda vergonhosa no adultério e homicídio, a oração do Salmo 51 nos ensina que a graça perdoadora de Deus não busca sacrifícios exteriores, mas um coração contrito e quebrantado.',
    completeBiography: 'Filho mais moço de Jessé, ungido pelo profeta Samuel enquanto ainda pastoreava ovelhas no campo. Venceu o gigante filisteu Golias no Vale de Elá confiando unicamente no Senhor dos Exércitos. Suportou perseguição implacável do rei Saul com paciência santa e integridade. Ao assumir o trono, unificou as 12 tribos, conquistou a fortaleza de Sião transformando Jerusalém na capital sagrada e trouxe a Arca da Aliança com danças e louvor. Recebeu a Aliança Davídica eterna (2 Samuel 7). Embora tenha pecado gravemente no episódio com Bate-Seba, arrependeu-se com choro amargo e quebrantamento genuíno (Salmo 51), sendo chamado por Deus de "homem segundo o meu coração".',
    spiritualLegacyAndChrist: 'Jesus Cristo é proclamado nos Evangelhos como o "Filho de Davi" (Mateus 1:1; Lucas 1:32). O trono de Davi é a base da promessa do Reino eterno do Messias.',
    keyVerse: '"Achei a Davi, meu servo; com o meu santo óleo o ungi... Ele me clamará: Tu és meu Pai, meu Deus e a rocha da minha salvação." (Salmo 89:20,26)'
  },
  {
    id: 'elias',
    name: 'Elias',
    originalName: 'אֵלִיָּהוּ',
    transliteration: 'Eliyahu (de אֵלִי - Meu Deus e יָהוּ - Yahweh)',
    meaning: 'Meu Deus é Yahweh',
    nationality: 'Hebreu de Tisbe em Gileade',
    testament: 'AT',
    role: 'Profeta do Fogo e Restaurador do Altar de Deus',
    historicalPeriod: 'Século IX a.C. (Reinado de Acabe e Jezabel)',
    biblicalBooks: ['1 e 2 Reis', 'Malaquias 4:5', 'Mateus 17:1-13', 'Tiago 5:17'],
    covenantConnection: 'Restauração do Pacto Mosaico contra a Apostasia de Baal: reconstrução do altar de doze pedras representando a unidade indivisível do povo da aliança (1 Reis 18:31).',
    theologicalSignificance: 'Zelo Monoteísta Radical e Cristologia Escatológica: o confronto no Carmelo prova que Deus não divide Sua glória com ídolos. Sua presença na Transfiguração atesta que Jesus cumpre toda a Lei e os Profetas.',
    hermeneuticalApplication: 'Deus muitas vezes não se manifesta no vendaval ou no terremoto, mas na voz mansa e suave da Sua presença íntima, ensinando que o fervor profético deve repousar no descanso espiritual.',
    completeBiography: 'Surgiu abruptamente confrontando o apóstata rei Acabe e a ímpia rainha Jezabel, trancando os céus para que não chovesse durante três anos e meio. Alimentado milagrosamente por corvos no ribeiro de Querite e depois sustentado na casa da viúva de Sarepta, onde ressuscitou o filho dela. No cume do Monte Carmelo, desafiou 850 falsos profetas de Baal e Asera: reconstruiu o altar, orou, e o fogo de Deus desceu queimando tudo. Após fugir de Jezabel, encontrou Deus no cicio suave no Monte Horebe e ungiu Eliseu como seu sucessor. Foi arrebatado aos céus vivo em um redemoinho por uma carruagem e cavalos de fogo.',
    spiritualLegacyAndChrist: 'Elias representa os profetas na Transfiguração de Jesus. Malaquias profetizou o envio de Elias antes do grande e terrível dia do Senhor, cumprido ministerialmente na pregação poderosa de João Batista.',
    keyVerse: '"Elias era homem sujeito às mesmas paixões que nós e, orando, pediu que não chovesse e, por três anos e seis meses, não choveu sobre a terra. E orou outra vez, e o céu deu chuva..." (Tiago 5:17-18)'
  },
  {
    id: 'daniel',
    name: 'Daniel',
    originalName: 'דָּנִיֵּאל (na Babilônia: בֵּלְטְשַׁאצַּר - Belteshazzar)',
    transliteration: 'Daniel (de Dan - Juiz e El - Deus)',
    meaning: 'Deus é Meu Juiz Soberano',
    nationality: 'Hebreu da Nobreza Real de Judá',
    testament: 'AT',
    role: 'Estadista, Sábio e Profeta Apocalíptico das Nações',
    historicalPeriod: 'c. 605 - 536 a.C. (Impérios Babilônico e Medo-Persa)',
    biblicalBooks: ['Livro de Daniel', 'Ezequiel 14:14', 'Mateus 24:15'],
    covenantConnection: 'Preservação da Aliança no Cativeiro Babilônico: oração penitencial fundamentada na promessa profética de Jeremias para a restauração do remanescente (Daniel 9).',
    theologicalSignificance: 'Escatologia Bíblica e Teologia do Reino de Deus: Daniel estabelece a cronologia dos impérios gentílicos e a pedra cortada sem mãos que encherá toda a terra (o Reino Messiânico indestrutível de Cristo).',
    hermeneuticalApplication: 'A oração fiel e o propósito no coração de não se contaminar com a cultura secular são as marcas irremovíveis do crente vitorioso em meio a sociedades anticristãs.',
    completeBiography: 'Levado cativo ainda jovem para a Babilônia no primeiro cerco de Nabucodonosor (605 a.C.). Propôs no seu coração não se contaminar com a comida e o vinho do rei. Deus lhe concedeu sabedoria incomparável e entendimento de sonhos e visões. Interpretou o sonho da grande estátua dos impérios mundiais (Daniel 2) e a escrita misteriosa na parede no banquete de Belsazar (Mene, Mene, Tequel, Ufarsim). Sob o governo persa de Dario, recusou deixar de orar ao Deus verdadeiro três vezes ao dia e foi lançado na cova dos leões famintos, de onde saiu ileso porque Deus enviou Seu anjo e fechou a boca dos animais.',
    spiritualLegacyAndChrist: 'Daniel recebeu as revelações mais precisas sobre a datação do sacrifício do Messias (a Profecia das 70 Semanas em Daniel 9) e a visão majestosa do "Filho do Homem" vindo sobre as nuvens celestiais para receber um reino eterno (Daniel 7:13-14), título que Jesus mais usou para Si mesmo.',
    keyVerse: '"E Daniel propôs no seu coração não se contaminar com a porção das iguarias do rei, nem com o vinho que ele bebia..." (Daniel 1:8)'
  },
  {
    id: 'paulo',
    name: 'Apóstolo Paulo (Saulo de Tarso)',
    originalName: 'שָׁאוּל (Hebraico: Sha\'ul) / Παῦλος (Grego: Paulos)',
    transliteration: 'Sha\'ul (Pedido a Deus) / Paulos (Pequeno / Humilde)',
    meaning: 'Pedido ao Senhor / O Pequeno que Cristo Exaltou',
    nationality: 'Judeu da Tribo de Benjamim e Cidadão Romano (Tarso da Cilícia)',
    testament: 'NT',
    role: 'Fariseu Zeloso, Apóstolo dos Gentios e Maior Teólogo do Cristianismo',
    historicalPeriod: 'c. 5 d.C. - 67 d.C.',
    biblicalBooks: ['Atos 7 a 28', '13 Epístolas Paulinas (Romanos a Filemom)'],
    covenantConnection: 'Ministro da Nova Aliança no Espírito (2 Coríntios 3:6): proclamador da reconciliação entre judeus e gentios em um só corpo por meio da cruz (Efésios 2:14-16).',
    theologicalSignificance: 'Sistematização da Soteriologia e Eclesiologia: justificação unicamente pela fé, redenção vicária, a união mística do crente com Cristo e a doutrina da Igreja como Corpo e Noiva do Senhor.',
    hermeneuticalApplication: 'A cruz de Cristo desmascara tanto o legalismo religioso quanto a libertinagem mundana: em Cristo somos justificados gratuitamente para andar em novidade de vida no Espírito.',
    completeBiography: 'Fariseu educado em Jerusalém aos pés do renomado rabino Gamaliel, fluente em hebraico, aramaico e grego. Perseguia ferozmente a Igreja nascente, consentindo na morte de Estêvão e prendendo crentes. No caminho de Damasco, foi fulgurado por uma luz celestial e ouviu a voz de Jesus: "Saulo, Saulo, por que me persegues?". Convertido e curado de sua cegueira, tornou-se o mais ardoroso pregador da graça. Realizou três grandes viagens missionárias fundando igrejas pela Ásia Menor, Grécia e Roma; sobreviveu a naufrágios, açoites, apedrejamento e prisões. Escreveu as epístolas que formam a coluna dorsal da teologia soteriológica cristã. Foi decapitado nos arredores de Roma sob o imperador Nero, proclamando sua vitória imortal: "Combati o bom combate, acabei a carreira, guardei a fé".',
    spiritualLegacyAndChrist: 'Paulo sistematizou a doutrina da Justificação pela Fé somente (Sola Fide), a universalidade da Igreja de Cristo e o mistério da Graça para judeus e gentios. Sua vida personifica o poder transformador do Evangelho: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim" (Gálatas 2:20).',
    keyVerse: '"Mas em nada tenho a minha vida por preciosa, contanto que cumpra com alegria a minha carreira e o ministério que recebi do Senhor Jesus, para dar testemunho do evangelho da graça de Deus." (Atos 20:24)'
  }
];
