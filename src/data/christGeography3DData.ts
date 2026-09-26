export interface SacredPlace3D {
  id: string;
  name: string;
  nativeName: string;
  transliteration: string;
  meaning: string;
  region: 'Galileia' | 'Samaria' | 'Judeia' | 'Vale do Jordão / Decápolis';
  coords: {
    x: number; // Porcentagem horizontal 0-100 (Oeste -> Leste)
    y: number; // Porcentagem vertical 0-100 (Norte -> Sul)
    elevation: number; // Altitude relativa para efeito 3D em metros (-212 a +800m)
  };
  events: string[];
  miracles: string[];
  teachings: string[];
  biblicalReferences: string[];
  precisionRating: 'explicit' | 'inference';
  descriptionShort: string;
}

export interface ReconstructedRoute {
  id: string;
  name: string;
  description: string;
  waypoints: string[]; // ids dos SacredPlace3D
  approxDistanceKm: number;
  routeType: 'estimativa geográfica' | 'rota documentada nos Evangelhos';
  routeNote: string;
  color: string;
}

export const SACRED_PLACES_3D: SacredPlace3D[] = [
  {
    id: 'galileia-regiao',
    name: 'Galileia (Região Geral)',
    nativeName: 'הַגָּלִיל / Γαλιλαία',
    transliteration: 'Ha-Galil (Círculo / Distrito)',
    meaning: 'Distrito das Nações / Região Circular',
    region: 'Galileia',
    coords: { x: 42, y: 15, elevation: 350 },
    events: [
      'Região principal do ministério público de Jesus (cumprimento de Isaías 9:1-2).',
      'Local da maioria das parábolas da semeadura, dos lírios do campo e da colheita.',
      'Primeiro anúncio público da chegada do Reino de Deus: "O tempo está cumprido, e o Reino de Deus está próximo; arrependei-vos e crede no Evangelho" (Mc 1:15).'
    ],
    miracles: [
      'Inúmeras curas coletivas de multidões em todas as cidades e aldeias da província (Mt 4:23-25).'
    ],
    teachings: [
      'O Sermão do Monte, as Parábolas do Reino de Deus e instruções missionárias aos Doze.'
    ],
    biblicalReferences: ['Isaías 9:1-2', 'Mateus 4:12-25', 'Marcos 1:14-15', 'Lucas 4:14-15'],
    precisionRating: 'explicit',
    descriptionShort: 'Província fértil e montanhosa ao norte de Israel onde Jesus cresceu e estabeleceu a base do Seu ministério.'
  },
  {
    id: 'nazare',
    name: 'Nazaré',
    nativeName: 'נָצְרַת',
    transliteration: 'Natzrat (do radical Netzer - Renovo)',
    meaning: 'Renovo / Broto Verdejante / Ramo',
    region: 'Galileia',
    coords: { x: 38, y: 22, elevation: 360 },
    events: [
      'A Anunciação do anjo Gabriel à Virgem Maria (Lc 1:26-38).',
      'Cidade onde Jesus cresceu com José e Maria dos anos de infância até cerca dos 30 anos (Lc 2:39-52).',
      'Leitura do rolo do profeta Isaías 61 na sinagoga local proclamando o cumprimento da profecia messiânica.',
      'Rejeição violenta de Jesus por Seus concidadãos que tentaram precipitá-lo do cimo do monte (Lc 4:16-30).'
    ],
    miracles: [
      'Poucos milagres operados devido à incredulidade dos habitantes ("Não há profeta sem honra, senão na sua pátria", Mt 13:58).'
    ],
    teachings: [
      'Proclamação do Ano Aceitável do Senhor (Isaías 61 cumprido em Suas palavras); exemplos dos profetas Elias e Eliseu enviados a gentios (Lc 4:24-27).'
    ],
    biblicalReferences: ['Mateus 2:23', 'Mateus 13:54-58', 'Lucas 1:26', 'Lucas 2:39-52', 'Lucas 4:16-30', 'João 1:46'],
    precisionRating: 'explicit',
    descriptionShort: 'Aldeia pacata e simples da Baixa Galileia onde o Messias viveu e trabalhou na carpintaria.'
  },
  {
    id: 'cana',
    name: 'Caná da Galileia',
    nativeName: 'קָנָה / Κανᾶ',
    transliteration: 'Qanah',
    meaning: 'Lugar de Caniços / Juncal',
    region: 'Galileia',
    coords: { x: 44, y: 19, elevation: 280 },
    events: [
      'Festa de casamento com a presença de Jesus, Maria e os discípulos (Jo 2:1-11).',
      'Segundo sinal: cura do filho do oficial nobre do rei Herodes à distância (Jo 4:46-54).',
      'Terra natal do apóstolo Natanael (Bartolomeu; Jo 21:2).'
    ],
    miracles: [
      'Transformação de cerca de 600 litros de água em vinho excelente (primeiro sinal joanino).',
      'Cura instantânea da febre do filho do oficial real que se encontrava em Cafarnaum sem que Jesus fosse até lá fisicamente.'
    ],
    teachings: [
      'Manifestação da glória de Cristo na santificação da família e na eficácia da Sua palavra à distância.'
    ],
    biblicalReferences: ['João 2:1-11', 'João 4:46-54', 'João 21:2'],
    precisionRating: 'explicit',
    descriptionShort: 'Vila a cerca de 14 km a nordeste de Nazaré onde Jesus iniciou Seus sinais messiânicos.'
  },
  {
    id: 'cafarnaum',
    name: 'Cafarnaum',
    nativeName: 'כְּפַר נַחוּם',
    transliteration: 'Kefar Nachum',
    meaning: 'Aldeia de Naum (Vila do Consolo)',
    region: 'Galileia',
    coords: { x: 55, y: 14, elevation: -205 },
    events: [
      'Base operacional e residência oficial de Jesus ("a sua própria cidade", Mt 9:1).',
      'Chamado de Mateus (Levi) na coletoria de impostos junto à via alfandegária romana (Mt 9:9).',
      'Residência de Simão Pedro e André onde Jesus se hospedava frequentemente.',
      'Sermão memorável na sinagoga sobre o Pão da Vida (Jo 6:22-59).'
    ],
    miracles: [
      'Cura do paralítico descido pelo telhado com perdão de pecados (Mc 2:1-12).',
      'Cura da sogra de Pedro de febre alta (Mt 8:14-15).',
      'Ressurreição da filha de Jairo e cura da mulher com fluxo de sangue (Mc 5:21-43).',
      'Cura do servo do centurião romano (Mt 8:5-13).',
      'Cura do homem com a mão ressequida na sinagoga (Mc 3:1-6).',
      'A moeda encontrada na boca do peixe para pagamento do tributo do Templo (Mt 17:24-27).'
    ],
    teachings: [
      'Discurso teológico: "Eu sou o Pão da Vida; aquele que vem a mim não terá fome, e quem crê em mim nunca terá sede" (Jo 6:35); ensino sobre o perdão e o jejum.'
    ],
    biblicalReferences: ['Mateus 4:13', 'Mateus 8:5-17', 'Mateus 9:1-13', 'Marcos 1:21-34', 'João 6:22-59'],
    precisionRating: 'explicit',
    descriptionShort: 'Centro dinâmico do ministério de Jesus na costa noroeste do Mar da Galileia.'
  },
  {
    id: 'mar-da-galileia',
    name: 'Mar da Galileia (Lago de Genesaré / Tiberíades)',
    nativeName: 'יָם כִּנֶּרֶת',
    transliteration: 'Yam Kinneret (de Kinnor - Harpa)',
    meaning: 'Lago em formato de Harpa / Jardim de Riquezas',
    region: 'Galileia',
    coords: { x: 58, y: 17, elevation: -212 },
    events: [
      'Jesus ensinava multidões assentado no barco de Pedro ligeiramente afastado da praia (Lc 5:1-3).',
      'A travessia noturna durante a tempestade furiosa (Mt 8:23-27).',
      'Aparição de Jesus ressurreto nas margens acendendo brasas e preparando peixe para os discípulos (Jo 21).'
    ],
    miracles: [
      'Jesus acalma a tempestade e o mar com uma palavra: "Cala-te, emudece!" (Mc 4:35-41).',
      'Jesus caminha sobre as águas na quarta vigília da noite e resgata Pedro que afundava (Mt 14:22-33).',
      'Primeira pesca milagrosa que levou Pedro a se prostrar: "Senhor, retira-te de mim, que sou homem pecador" (Lc 5:4-9).',
      'Segunda pesca miraculosa após a ressurreição (153 grandes peixes, Jo 21:1-11).'
    ],
    teachings: [
      'Parábolas proferidas da praia: o semeador, a rede lançada ao mar, o grão de mostarda.',
      'A restauração pastoral de Pedro: "Simão, filho de Jonas, tu me amas?... Apascenta as minhas ovelhas" (Jo 21:15-17).'
    ],
    biblicalReferences: ['Mateus 8:23-27', 'Mateus 14:22-33', 'Marcos 4:35-41', 'Lucas 5:1-11', 'João 6:16-21', 'João 21:1-19'],
    precisionRating: 'explicit',
    descriptionShort: 'Enorme lago de água doce a mais de 200 metros abaixo do nível do mar, cercado por colinas verdejantes.'
  },
  {
    id: 'betsaida',
    name: 'Betsaida',
    nativeName: 'בֵּית צַיְדָא',
    transliteration: 'Beit Tzaida',
    meaning: 'Casa da Pesca / Casa dos Pescadores',
    region: 'Galileia',
    coords: { x: 61, y: 13, elevation: -200 },
    events: [
      'Cidade natal dos apóstolos Pedro, André e Filipe (Jo 1:44; 12:21).',
      'Região próxima onde Jesus alimentou a multidão nos campos desertos.',
      'Advertência profética solene de juízo pela impenitência após ver tantos sinais (Mt 11:21).'
    ],
    miracles: [
      'Multiplicação dos cinco pães e dois peixes para cinco mil homens (Lc 9:10-17).',
      'Cura em dois estágios do cego de Betsaida que inicialmente via os homens como árvores que andavam (Mc 8:22-26).'
    ],
    teachings: [
      '"Ai de ti, Corazim! Ai de ti, Betsaida! Porque, se em Tiro e em Sídon se fizessem os prodígios que em vós se fizeram, há muito que se teriam arrependido com saco e cinza" (Mt 11:21).'
    ],
    biblicalReferences: ['Mateus 11:21-22', 'Marcos 8:22-26', 'Lucas 9:10-17', 'João 1:44', 'João 12:21'],
    precisionRating: 'explicit',
    descriptionShort: 'Vila pesqueira na foz norte do Rio Jordão junto ao lago, lar de três dos principais apóstolos.'
  },
  {
    id: 'samaria-regiao',
    name: 'Samaria (Região Central)',
    nativeName: 'שֹׁמְרוֹן / Σαμάρεια',
    transliteration: 'Shomron',
    meaning: 'Torre de Vigia / Guardião',
    region: 'Samaria',
    coords: { x: 42, y: 44, elevation: 450 },
    events: [
      'Passagem obrigatória e intencional do ministério de Jesus unindo o norte e o sul ("E era-lhe necessário passar por Samaria", Jo 4:4).',
      'Acolhimento da mensagem de Cristo por samaritanos após o testemunho da mulher junto ao poço (Jo 4:39-42).',
      'Recusa de uma aldeia samaritana em receber Jesus a caminho de Jerusalém, onde Tiago e João queriam pedir fogo dos céus e foram repreendidos (Lc 9:51-56).'
    ],
    miracles: [
      'Cura dos dez leprosos no caminho entre Samaria e a Galileia, onde apenas um retornou para agradecer — e este era samaritano (Lc 17:11-19).'
    ],
    teachings: [
      'A inesquecível Parábola do Bom Samaritano (Lc 10:25-37), redefinindo o conceito de próximo além de barreiras religiosas e raciais.'
    ],
    biblicalReferences: ['Lucas 9:51-56', 'Lucas 10:29-37', 'Lucas 17:11-19', 'João 4:1-42', 'Atos 1:8'],
    precisionRating: 'explicit',
    descriptionShort: 'Região montanhosa central da Palestina, historicamente habitada por povo mestiço separado dos judeus.'
  },
  {
    id: 'sicar',
    name: 'Sicar (Poço de Jacó)',
    nativeName: 'סִיכָר / Συχάρ',
    transliteration: 'Sychar (antiga Siquém bíblica)',
    meaning: 'Bêbado / Falso (pejorativo judeu) ou Cidade de Jacó',
    region: 'Samaria',
    coords: { x: 45, y: 46, elevation: 520 },
    events: [
      'Encontro histórico de Jesus com a Mulher Samaritana junto ao Poço de Jacó ao meio-dia (Jo 4:5-26).',
      'Estada de dois dias de Jesus na aldeia ensinando os samaritanos a pedido deles (Jo 4:40).'
    ],
    miracles: [
      'Discernimento sobrenatural profético de Jesus ao expor a vida pessoal e oculta da mulher samaritana (Jo 4:17-18, 29).'
    ],
    teachings: [
      'A Revelação da Água Viva: "Aquele que beber da água que eu lhe der nunca terá sede; mas a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna" (Jo 4:14).',
      'O Culto da Nova Aliança: "Deus é Espírito, e importa que os que o adoram o adorem em espírito e em verdade" (Jo 4:24).',
      'Auto-declaração messiânica direta: "Eu o sou, eu que falo contigo" (Jo 4:26).'
    ],
    biblicalReferences: ['João 4:5-42', 'Gênesis 33:18-19 (origem do campo de Jacó)'],
    precisionRating: 'explicit',
    descriptionShort: 'Aldeia samaritana no vale entre o Monte Gerizim e o Monte Ebal, guardiã do secular Poço de Jacó.'
  },
  {
    id: 'rio-jordao',
    name: 'Rio Jordão (Lugar do Batismo)',
    nativeName: 'נְהַר הַיַּרְדֵּן',
    transliteration: 'Nehar ha-Yarden',
    meaning: 'Aquele que Desce / O Descendente',
    region: 'Vale do Jordão / Decápolis',
    coords: { x: 60, y: 55, elevation: -380 },
    events: [
      'Batismo de Jesus por João Batista em Betânia além do Jordão (Al-Maghtas / Qasr al-Yahud; Mt 3:13-17; Jo 1:28).',
      'Descida visível do Espírito Santo como pomba e voz audível do Pai confirmando a filiação divina.',
      'Refúgio de Jesus durante períodos de forte perseguição em Jerusalém (Jo 10:40).'
    ],
    miracles: [
      'A abertura dos céus e a teofania trinitária no instante do batismo.'
    ],
    teachings: [
      'Declaração solene de João Batista: "Eis o Cordeiro de Deus, que tira o pecado do mundo!" (Jo 1:29, 36).',
      'Cumprimento de toda a justiça (Mt 3:15).'
    ],
    biblicalReferences: ['Mateus 3:13-17', 'Marcos 1:9-11', 'Lucas 3:21-22', 'João 1:28-34', 'João 10:40'],
    precisionRating: 'explicit',
    descriptionShort: 'O curso de água mais reverenciado da Bíblia, ligando o Mar da Galileia ao Mar Morto.'
  },
  {
    id: 'jerico',
    name: 'Jericó',
    nativeName: 'יְרִיחוֹ',
    transliteration: 'Yericho (do radical Yareach - Lua)',
    meaning: 'Lugar Fragrante / Cidade das Palmeiras',
    region: 'Judeia',
    coords: { x: 53, y: 62, elevation: -250 },
    events: [
      'Última parada de Jesus em Sua última subida de peregrinação rumo a Jerusalém.',
      'Hospedagem na casa de Zaqueu, o chefe dos publicanos rico e odiado pelo povo (Lc 19:1-10).'
    ],
    miracles: [
      'Cura do mendigo cego Bartimeu, filho de Timeu, que clamava: "Jesus, Filho de Davi, tem misericórdia de mim!" (Mc 10:46-52; Lc 18:35-43).'
    ],
    teachings: [
      'Declaração da missão central salvífica de Cristo: "Porque o Filho do Homem veio buscar e salvar o que se havia perdido" (Lc 19:10).',
      'Parábola das Dez Minas contada perto de Jericó (Lc 19:11-27).'
    ],
    biblicalReferences: ['Mateus 20:29-34', 'Marcos 10:46-52', 'Lucas 18:35–19:10'],
    precisionRating: 'explicit',
    descriptionShort: 'Oásis luxuriante situado no Vale do Jordão, conhecida como uma das cidades mais antigas habitadas do mundo.'
  },
  {
    id: 'betania',
    name: 'Betânia',
    nativeName: 'בֵּית עַנְיָא',
    transliteration: 'Beit Anya',
    meaning: 'Casa dos Pobres / Casa dos Frutos Verdes',
    region: 'Judeia',
    coords: { x: 49, y: 68, elevation: 700 },
    events: [
      'Lar amado de amizade e descanso de Jesus na casa de Seus amigos Marta, Maria e Lázaro (Lc 10:38-42; Jo 11:1).',
      'Banquete na casa de Simão, o leproso, seis dias antes da Páscoa (Jo 12:1-8).',
      'Local das imediações onde ocorreu a Ascensão gloriosa de Jesus aos céus (Lc 24:50).'
    ],
    miracles: [
      'A mais monumental ressurreição: Lázaro chamado para fora da sepultura após quatro dias de falecimento (Jo 11:1-44).'
    ],
    teachings: [
      '"Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá" (Jo 11:25).',
      'O elogio a Maria que escolheu a boa parte que não lhe será tirada (Lc 10:42).'
    ],
    biblicalReferences: ['Mateus 21:17', 'Mateus 26:6-13', 'Marcos 11:1, 11', 'Lucas 10:38-42', 'João 11:1-44', 'João 12:1-8'],
    precisionRating: 'explicit',
    descriptionShort: 'Aldeia pacífica situada na encosta oriental do Monte das Oliveiras, refúgio de amor e amizade para Jesus.'
  },
  {
    id: 'monte-das-oliveiras',
    name: 'Monte das Oliveiras',
    nativeName: 'הַר הַזֵּיתִים',
    transliteration: 'Har ha-Zeitim',
    meaning: 'Monte das Oliveiras / Olival Santo',
    region: 'Judeia',
    coords: { x: 47, y: 67, elevation: 820 },
    events: [
      'Ponto de partida da Entrada Triunfal no Domingo de Ramos montado no jumentinho (Lc 19:29, 37).',
      'Local onde Jesus chorou sobre Jerusalém (Igreja Dominus Flevit).',
      'Proclamação do Sermão Escatológico / Profecia do Monte das Oliveiras sobre o fim dos tempos (Mt 24–25).',
      'Local da Ascensão de Jesus ao Céu e promessa dos anjos sobre Sua Segunda Vinda (Atos 1:9-12).'
    ],
    miracles: [
      'A Ascensão sobrenatural de Cristo envolto em nuvens de glória à vista dos apóstolos.'
    ],
    teachings: [
      'O Discurso das Últimas Coisas: sinais do fim do mundo, a grande tribulação, a Parábola das Dez Virgens e o Julgamento das Nações (Ovelhas e Bodes; Mt 24–25).'
    ],
    biblicalReferences: ['Zacarias 14:4', 'Mateus 24:1-51', 'Mateus 25:1-46', 'Lucas 19:37-44', 'Lucas 22:39', 'Atos 1:9-12'],
    precisionRating: 'explicit',
    descriptionShort: 'Cadeia de colinas situada a leste de Jerusalém, de onde se tem vista privilegiada para o Monte do Templo.'
  },
  {
    id: 'getsemani',
    name: 'Jardim do Getsêmani',
    nativeName: 'גַּת שְׁמָנִים',
    transliteration: 'Gat Shmanim',
    meaning: 'A Prensa de Azeite',
    region: 'Judeia',
    coords: { x: 46, y: 67, elevation: 730 },
    events: [
      'Agonia suprema de Jesus na noite em que foi traído (Mt 26:36-46).',
      'Oração com suor como gotas de sangue: "Meu Pai, se é possível, passe de mim este cálice; todavia, não como eu quero, mas como tu queres".',
      'A traição com um beijo por Judas Iscariotes e a prisão de Jesus pela guarda armada do Templo (Jo 18:1-12).'
    ],
    miracles: [
      'Jesus restaura e cura instantaneamente a orelha decepada de Malco (Lc 22:51).',
      'Quando Jesus respondeu "Eu sou", os soldados recuaram e caíram por terra pelo poder de Sua voz (Jo 18:6).'
    ],
    teachings: [
      '"Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca" (Mt 26:41).'
    ],
    biblicalReferences: ['Mateus 26:36-56', 'Marcos 14:32-52', 'Lucas 22:39-53', 'João 18:1-12'],
    precisionRating: 'explicit',
    descriptionShort: 'Olival milenar no sopé ocidental do Monte das Oliveiras, junto ao leito do Ribeiro de Cedrom.'
  },
  {
    id: 'jerusalem',
    name: 'Jerusalém (Cidade Santa)',
    nativeName: 'יְרוּשָׁלַיִם / Ἱεροσόλυμα',
    transliteration: 'Yerushalayim',
    meaning: 'Fundamento da Paz / Habitação da Paz',
    region: 'Judeia',
    coords: { x: 44, y: 68, elevation: 750 },
    events: [
      'Visita ao Templo aos 12 anos debatendo com os doutores da Lei (Lc 2:41-52).',
      'Purificação do Templo derrubando as mesas dos cambistas.',
      'A Última Ceia no Cenáculo com o lava-pés e a instituição da Ceia do Senhor.',
      'Julgamentos perante o Sinédrio de Caifás, Pôncio Pilatos e Herodes Antipas.'
    ],
    miracles: [
      'Cura do paralítico há 38 anos no Tanque de Betesda em dia de sábado (Jo 5:1-16).',
      'Cura do cego de nascença no Tanque de Siloé após untar-lhe os olhos com lodo (Jo 9:1-41).'
    ],
    teachings: [
      'Diálogo noturno com Nicodemos sobre o Novo Nascimento: "Importa-vos nascer de novo... Porque Deus amou o mundo de tal maneira..." (Jo 3:1-21).',
      'Discursos solenes na Festa dos Tabernáculos: "Se alguém tem sede, venha a mim e beba" (Jo 7:37).'
    ],
    biblicalReferences: ['Salmo 122:6', 'Mateus 21–27', 'Lucas 2:41-52', 'João 2; 5; 7; 8; 9; 13–19'],
    precisionRating: 'explicit',
    descriptionShort: 'Capital espiritual e centro teológico de Israel, palco da Paixão, Morte e Ressurreição do Redentor.'
  },
  {
    id: 'belem',
    name: 'Belém da Judeia (Efrata)',
    nativeName: 'בֵּית לֶחֶם',
    transliteration: 'Beit Lechem',
    meaning: 'Casa do Pão',
    region: 'Judeia',
    coords: { x: 44, y: 74, elevation: 775 },
    events: [
      'O Nascimento de Jesus na manjedoura (Lc 2:1-7).',
      'Anúncio dos coros celestiais de anjos aos pastores nos campos vizinhos (Lc 2:8-20).',
      'Visita e adoração dos Magos do Oriente com dádivas reais de ouro, incenso e mirra (Mt 2:1-12).',
      'Cidade onde se originou a linhagem do rei Davi e a história de Rute e Boaz.'
    ],
    miracles: [
      'O maior de todos os milagres: a concepção virginal e a Encarnação do Filho de Deus no tempo humano.'
    ],
    teachings: [
      'Cumprimento da profecia de Miquéias 5:2: "E tu, Belém Efrata... de ti me sairá o que governará em Israel". Aquele que é o verdadeiro "Pão da Vida" (Jo 6:35) nasce na "Casa do Pão".'
    ],
    biblicalReferences: ['Miquéias 5:2', 'Mateus 2:1-12', 'Lucas 2:1-20', 'João 7:42'],
    precisionRating: 'explicit',
    descriptionShort: 'Pequena cidade histórica nos montes da Judeia, situada a 8 km ao sul de Jerusalém.'
  },
  {
    id: 'golgota',
    name: 'Gólgota (O Calvário)',
    nativeName: 'גֻּלְגֹּלֶת / Γολγοθᾶ',
    transliteration: 'Gulgoleth (Hebraico) / Calvaria (Latim)',
    meaning: 'Lugar da Caveira',
    region: 'Judeia',
    coords: { x: 43.5, y: 67.5, elevation: 760 },
    events: [
      'A Crucificação de Jesus Cristo entre dois malfeitores (Mt 27:33-50).',
      'As Sete Palavras pronunciadas por Jesus pregado na Cruz.',
      'O rasgar do véu do Templo de alto a baixo e o terremoto no momento da Sua morte expiatória.',
      'O sepultamento por José de Arimatéia e Nicodemos no túmulo novo do jardim contíguo.'
    ],
    miracles: [
      'Escuridão sobrenatural cobrindo toda a terra das 12h às 15h.',
      'Ressurreição gloriosa de Jesus Cristo no terceiro dia vencendo a sepultura e a morte.'
    ],
    teachings: [
      '"Tetélestai (Está consumado!)" — O pagamento completo da dívida moral do pecado humano (Jo 19:30).',
      '"Pai, nas tuas mãos entrego o meu espírito" (Lc 23:46).'
    ],
    biblicalReferences: ['Isaías 53', 'Mateus 27:32-56', 'Marcos 15:21-41', 'Lucas 23:26-49', 'João 19:16-37', 'Hebreus 13:12'],
    precisionRating: 'explicit',
    descriptionShort: 'Colina rochosa fora dos muros antigos de Jerusalém onde ocorreu a redenção do mundo na Cruz.'
  },
  {
    id: 'judeia-regiao',
    name: 'Judeia (Região Geral)',
    nativeName: 'יְהוּדָה / Ἰουδαία',
    transliteration: 'Yehudah / Ioudaia',
    meaning: 'Louvor a Yahweh / Região de Judá',
    region: 'Judeia',
    coords: { x: 40, y: 70, elevation: 700 },
    events: [
      'Província do sul de Israel regida diretamente pelo governador romano (Pôncio Pilatos).',
      'Cenário dos maiores debates teológicos entre Jesus e a liderança do Sinédrio, fariseus e saduceus.',
      'Região de montanhas áridas, vales profundos e do Deserto da Judeia.'
    ],
    miracles: [
      'Curativas manifestações públicas nas festas da Páscoa, Pentecostes e Tabernáculos.'
    ],
    teachings: [
      'Proclamação da messianidade perante os líderes da nação e advertências contra o legalismo hipócrita.'
    ],
    biblicalReferences: ['Mateus 19:1', 'Lucas 1:39', 'João 3:22; 4:3; 11:7'],
    precisionRating: 'explicit',
    descriptionShort: 'Região montanhosa meridional de Israel onde ficavam Jerusalém, Belém e o Deserto da Tentação.'
  }
];

export const RECONSTRUCTED_ROUTES: ReconstructedRoute[] = [
  {
    id: 'rota-1-galileia',
    name: 'Rota 1: Circuito da Galileia Setentrional',
    description: 'Trajeto de Nazaré a Caná da Galileia e descida para Cafarnaum e Betsaida às margens do Mar da Galileia.',
    waypoints: ['nazare', 'cana', 'cafarnaum', 'betsaida', 'mar-da-galileia'],
    approxDistanceKm: 52,
    routeType: 'estimativa geográfica',
    routeNote: 'Existem diferentes reconstruções possíveis dessa rota; a distância é uma aproximação baseada nos vales e caminhos da Baixa Galileia antiga.',
    color: '#0284c7' // sky-600
  },
  {
    id: 'rota-2-samaria',
    name: 'Rota 2: Peregrinação por Samaria até Jerusalém',
    description: 'Percurso documentado em João 4: de Cafarnaum cortando o vale central de Samaria (Sicar / Poço de Jacó) até subir aos montes de Jerusalém.',
    waypoints: ['cafarnaum', 'sicar', 'jerusalem'],
    approxDistanceKm: 145,
    routeType: 'rota documentada nos Evangelhos',
    routeNote: 'Existem diferentes reconstruções possíveis dessa rota; muitos judeus evitavam Samaria, mas João 4:4 declara que era "necessário passar por Samaria" por propósito divino.',
    color: '#d97706' // amber-600
  },
  {
    id: 'rota-3-pereia-jordao',
    name: 'Rota 3: Caminho Tradicional pelo Vale do Jordão & Jericó',
    description: 'Rota habitual dos peregrinos galileus descendo o Vale do Jordão pela margem oriental (Pereia), cruzando junto a Jericó e subindo a Jerusalém.',
    waypoints: ['cafarnaum', 'rio-jordao', 'jerico', 'jerusalem'],
    approxDistanceKm: 168,
    routeType: 'estimativa geográfica',
    routeNote: 'Existem diferentes reconstruções possíveis dessa rota; era o caminho mais seguro e comum para evitar desavenças com os samaritanos.',
    color: '#059669' // emerald-600
  },
  {
    id: 'rota-4-paixao',
    name: 'Rota 4: Circuito da Última Semana & Paixão',
    description: 'Percurso sagrado entre Betânia, Monte das Oliveiras, Cenáculo em Jerusalém, Getsêmani e o Calvário (Gólgota).',
    waypoints: ['betania', 'monte-das-oliveiras', 'getsemani', 'jerusalem', 'golgota'],
    approxDistanceKm: 12,
    routeType: 'rota documentada nos Evangelhos',
    routeNote: 'Percurso local documentado nas narrativas da Paixão percorrido a pé diariamente por Jesus durante a semana pascal.',
    color: '#dc2626' // red-600
  },
  {
    id: 'rota-5-inaugural',
    name: 'Rota 5: Viagem do Nascimento e Fuga',
    description: 'De Nazaré a Belém (censo), dali ao Egito (fuga de Herodes) e posterior regresso a Nazaré.',
    waypoints: ['nazare', 'belem', 'nazare'],
    approxDistanceKm: 980,
    routeType: 'estimativa geográfica',
    routeNote: 'Aproximação que inclui os ~150 km de Nazaré a Belém e os cerca de 800 km ida e volta para a fronteira egípcia através do deserto de Sur.',
    color: '#8b5cf6' // violet-600
  }
];

export const TOTAL_DISTANCE_METHODOLOGY = {
  title: '📏 DISTÂNCIA ESTIMADA DOS PERCURSOS REGISTRADOS',
  totalEstimatedKmMin: 4500,
  totalEstimatedKmMax: 5200,
  routesAnalyzedCount: 5,
  coreTerms: ['distância estimada', 'rota reconstruída', 'percurso documentado', 'aproximação geográfica'],
  disclaimer: 'Não se pode afirmar que essa é a distância absolutamente exata que Jesus percorreu durante toda a sua vida ou ministério. As Escrituras não registraram todos os passos, vilas e viagens de Cristo (João 21:25). Os valores apresentados constituem uma aproximação geográfica e histórica calculada por arqueólogos e geógrafos bíblicos com base nas narrativas dos quatro Evangelhos.',
  methodologyText: `Metodologia utilizada para o cálculo da distância estimada:
1. Topografia da Palestina no Século I: Consideração das estradas romanas pavimentadas e das trilhas montanhosas naturais sinuosas de Israel, que aumentavam em 20% a 35% a distância em linha reta entre duas cidades.
2. Desníveis de Altitude: Deslocamento pedestre entre o Mar da Galileia (-212 m de altitude) e Jerusalém (+750 m de altitude), exigindo esforço contínuo em subidas íngremes de quase 1.000 metros de desnível vertical.
3. Peregrinações Anuais das Festas: Conforme o costume da Lei judaica e os registros do Evangelho de João, Jesus subiu a Jerusalém para a Páscoa (pelo menos três registradas em João 2:13; 6:4; 11:55), a Festa dos Tabernáculos (João 7:2, 10) e a Festa da Dedicação (João 10:22). Cada viagem de ida e volta entre a Galileia e a Judeia totalizava cerca de 280 a 340 km a pé.
4. Circuitos Missionários Locais: Viagens itinerantes constantes através de vilas e cidades da Baixa Galileia, Decápolis, Cesareia de Filipe e regiões de Tiro e Sídon.
5. Soma Cumulativa: O total médio documentado e reconstruído aponta para um percurso pedestre estimado entre 4.500 km e 5.200 km ao longo dos três anos e meio de ministério público de Jesus Cristo.`
};
