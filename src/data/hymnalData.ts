// Hinário Completo: Harpa Cristã e Hinário da Igreja Metodista Wesleyana (IMW)

export interface DetailedHymn {
  id: string;
  number: number;
  title: string;
  author: string;
  category: 'harpa' | 'wesleyano' | 'imw-oficial' | 'classico';
  categoryLabel: string;
  lyrics: string[];
  chorus?: string;
  biblicalTheme: string;
}

export const COMPLETE_HYMNAL: DetailedHymn[] = [
  // ==========================================
  // HINÁRIO DA IGREJA METODISTA WESLEYANA & CHARLES WESLEY
  // ==========================================
  {
    id: 'imw-oficial',
    number: 1,
    title: 'Hino Oficial da Igreja Metodista Wesleyana',
    author: 'Tradição Histórica da IMW',
    category: 'imw-oficial',
    categoryLabel: 'Hino Oficial IMW',
    biblicalTheme: 'Santidade, Avivamento e Missões (Atos 1:8)',
    lyrics: [
      'Somos um povo salvo por Jesus, caminhando na senda da luz;\nCom o fogo do Espírito a arder, para as almas perdidas acolher.',
      'Wesleyana, fiel na missão, proclamando em santa união:\nPelo sangue de Cristo remidos, pelo Espírito Santo ungidos!',
      'Nas cidades, nos campos, além, anunciamos a graça também;\nO avivamento que desce dos céus, sustentado na glória de Deus.',
      'Com fervor, santidade e amor, exaltamos o nosso Senhor;\nE marchamos com fé e poder, até Cristo na glória descer!'
    ],
    chorus: 'Avivamento, santidade e poder!\nPara o Reino de Cristo crescer!\nIgreja Metodista Wesleyana, avança com amor,\nPois o mundo é a paróquia do Senhor!'
  },
  {
    id: 'wesley-mil-linguas',
    number: 2,
    title: 'Mil Línguas Eu Quisera Ter',
    author: 'Charles Wesley (1739)',
    category: 'wesleyano',
    categoryLabel: 'Hinário Wesleyano',
    biblicalTheme: 'Louvor e Redenção Triunfante (Filipenses 2:9-11)',
    lyrics: [
      'Mil línguas eu quisera ter, para entoar louvor\nÀ glória do meu Redentor, ao triunfo do Seu amor!',
      'Jesus! O nome que desfaz o medo e a aflição;\nQue ao pobre traz consolo e paz, e ao triste, redenção.',
      'Ele quebra o poder do vil pecado e quebra as prisões;\nSeu sangue limpa o mais manchado e traz reconciliações.',
      'Cojos já saltam de prazer, e os cegos podem ver;\nOs mudos cantam Seu poder, e os mortos voltam a viver!',
      'Glorificai ao grande Deus, por graça tão sem par;\nCantai, ó povos e ó céus, a Cristo sem cessar!'
    ]
  },
  {
    id: 'wesley-amor-divino',
    number: 3,
    title: 'Amor Divino que a Todos Sobrepuja',
    author: 'Charles Wesley (1747)',
    category: 'wesleyano',
    categoryLabel: 'Hinário Wesleyano',
    biblicalTheme: 'Inteira Santificação e Perfeição Cristã (1 João 4:18)',
    lyrics: [
      'Amor divino, excelso amor, que do alto céu baixou,\nEm nós habita, ó Salvador, Tua graça em nós brotou.',
      'Jesus, Tu és compaixão pura, amor sem limitação;\nVisita-nos com Tua cura, concede Tua salvação.',
      'Vem, ó Todo-Poderoso, liberta todo o coração;\nHabita em nós, Deus glorioso, em plena santificação.',
      'Transforma-nos de glória em glória, até no céu chegarmos lá;\nCantando a eterna vitória que Cristo aos Seus dará!'
    ]
  },
  {
    id: 'wesley-coracao-aquecido',
    number: 4,
    title: 'O Coração Estranhamente Aquecido (Aldersgate)',
    author: 'Memória Histórica de Aldersgate (1738)',
    category: 'wesleyano',
    categoryLabel: 'Hinário Wesleyano',
    biblicalTheme: 'A Certeza da Salvação pela Fé (Romanos 8:16)',
    lyrics: [
      'Na Rua Aldersgate um dia, a graça a luz fez brilhar;\nOuvindo a Palavra viva, que veio a paz proclamar.',
      'Senti meu coração arder, no fogo de um grande amor;\nCerteza tive em meu viver: Jesus é o meu Salvador!',
      'Perdão de todos os meus pecados, Jesus na cruz conquistou;\nLivrou-me da lei e da morte, meu fardo Ele retirou.',
      'Agora com santa ousadia, o mundo irei proclamar:\nQue a graça de Deus é bendita, pra todo o que nEle confiar!'
    ],
    chorus: 'Estranhamente aquecido, pelo poder do Senhor!\nO coração renascido, na graça do Salvador!'
  },
  {
    id: 'imw-eis-os-milhoes',
    number: 5,
    title: 'Eis os Milhões (Chamado Missionário)',
    author: 'Hinologia Missionária Histórica',
    category: 'imw-oficial',
    categoryLabel: 'Missões IMW',
    biblicalTheme: 'Visão Missionária Global (Mateus 28:19)',
    lyrics: [
      'Eis os milhões que em trevas tão medonhas, jazem sem luz, sem Deus e sem perdão;\nQuem levará as novas gloriosas, da graça, da verdade e da unção?',
      'Ouviram eles já de Jesus Cristo? Sabem que Ele a vida entregou?\nQue derramou Seu sangue no Calvário, e da condenação nos resgatou?',
      'Eis-nos aqui, Senhor, envia a nós! Queremos Tua voz obedecer;\nLevar ao mundo inteiro as boas-novas, e ver o Teu poder resplandecer!'
    ],
    chorus: 'Clama a voz do Salvador: "Quem irá por Mim pregar?"\nEis-me aqui, amado Mestre, para o mundo abençoar!'
  },
  {
    id: 'imw-santidade',
    number: 6,
    title: 'Santidade ao Senhor',
    author: 'Tradição do Movimento de Santidade',
    category: 'imw-oficial',
    categoryLabel: 'Doutrina IMW',
    biblicalTheme: 'A Busca da Santificação (Hebreus 12:14)',
    lyrics: [
      'Santidade ao Senhor, brado de vitória e luz!\nCaminhando em retidão, pelos passos de Jesus.',
      'Coração puro e leal, consagrado ao bom Pastor;\nLonge de todo o mal, vivendo no santo amor.',
      'Pelo Espírito selados, para as obras do além;\nPor Jesus justificados, na glória cantamos amém!'
    ],
    chorus: 'Santidade ao Senhor! Este é o nosso estandarte;\nNo poder do Salvador, a vitória nos reparte!'
  },
  {
    id: 'wesley-castelo-forte',
    number: 7,
    title: 'Castelo Forte é Nosso Deus',
    author: 'Martinho Lutero / Versão Wesleyana',
    category: 'classico',
    categoryLabel: 'Grande Clássico Cristão',
    biblicalTheme: 'Refúgio Seguro e Triunfo Final (Salmo 46:1)',
    lyrics: [
      'Castelo forte é nosso Deus, espada e bom escudo;\nCom Seu poder defende os Seus, em todo transe agudo.',
      'Com fúria e com furor, nos cerca o tentador;\nCom armas e ardil, combate o mundo vil; igual não há na terra.',
      'A nossa força nada faz, estamos derrotados;\nMas nosso Deus socorro traz, por Cristo enviados.',
      'Sabeis quem é Jesus? O que venceu na cruz!\nSenhor dos altos céus, o próprio e eterno Deus; triunfa na batalha!'
    ]
  },
  {
    id: 'wesley-maravilhosa-graca',
    number: 8,
    title: 'Maravilhosa Graça (Amazing Grace)',
    author: 'John Newton (1779)',
    category: 'classico',
    categoryLabel: 'Grande Clássico Cristão',
    biblicalTheme: 'A Redenção do Pecador Perdido (Efésios 2:8-9)',
    lyrics: [
      'Maravilhosa graça, que um pobre como eu salvou!\nPerdido eu andava outrora, mas Cristo me encontrou.',
      'Fazia tanto tempo que em trevas vaguei;\nMas Sua luz divina no coração achei.',
      'Por muitas aflições passei, perigos e pesar;\nA graça me guardou até aqui, ao céu me levará!',
      'E quando lá no céu chegar, no eterno resplendor;\nCantarei louvores sem cessar ao meu bom Salvador!'
    ]
  },
  {
    id: 'wesley-sol-minha-alma',
    number: 9,
    title: 'Sol da Minha Alma',
    author: 'John Keble / John Wesley',
    category: 'wesleyano',
    categoryLabel: 'Hinário Wesleyano',
    biblicalTheme: 'Comunhão e Descanso em Cristo (Salmo 27:1)',
    lyrics: [
      'Sol da minha alma, ó meu Jesus, não há mais trevas onde estás;\nEm Ti encontro clara luz, perfeita redenção e paz.',
      'Se sobre mim vier a dor, e a noite escura me cobrir;\nEu sei que perto estás, Senhor, Teu terno amor vou usufruir.',
      'Permanece comigo até o fim, na aurora do meu derradeiro dia;\nAté que no céu eu cante enfim, com celestial alegria!'
    ]
  },

  // ==========================================
  // HARPA CRISTÃ OFICIAL (Os Grandes Hinos Históricos)
  // ==========================================
  {
    id: 'harpa-1',
    number: 1,
    title: 'Chuvas de Graça',
    author: 'Daniel W. Whittle / James McGranahan (Harpa nº 1)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 1',
    biblicalTheme: 'Avivamento e Promessa do Espírito (Ezequiel 34:26)',
    lyrics: [
      'Deus prometeu com certeza, chuvas de graça enviar;\nEle nos dá fortaleza, e ricas bênçãos sem par.',
      'Cristo nos dá a promessa do Santo Consolador;\nEle nos enche de graça, de santo zelo e amor.',
      'Dá-nos, Senhor, amplamente, Teu grande derramar;\nChuva bendita dos céus, vem nossas almas fartar!'
    ],
    chorus: 'Chuvas de graça, chuvas pedimos, Senhor;\nManda-nos gotas benditas, chuvas do Consolador!'
  },
  {
    id: 'harpa-15',
    number: 15,
    title: 'Foi na Cruz',
    author: 'Isaac Watts / Ralph E. Hudson (Harpa Cristã nº 15)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 15',
    biblicalTheme: 'O Sacrifício e Salvação na Cruz (Gálatas 6:14)',
    lyrics: [
      'Oh! quão cego eu andei e perdido vaguei, longe, longe do meu Salvador!\nMas da glória desceu e Seu sangue verteu, pra salvar um tão pobre pecador.',
      'Eu ouvia falar dessa graça sem par, que do céu trouxe nosso Jesus;\nMas eu cego e perverso, não pude enxergar a beleza que brilha na cruz.',
      'Mas um dia senti meu pecado, e vi sobre mim a condenação;\nMas Jesus me acolheu e Seus braços me deu, concedendo-me pleno perdão.',
      'Oh! que grande prazer inundou o meu ser, quando a Cristo entreguei o meu mal;\nMinha alma em Sião hoje tem redenção, e um hino de glória imortal!'
    ],
    chorus: 'Foi na cruz, foi na cruz, onde um dia eu vi\nMeu pecado castigado em Jesus;\nFoi ali, pela fé, que os olhos abri,\nE agora me alegro em Sua luz!'
  },
  {
    id: 'harpa-24',
    number: 24,
    title: 'Poder Pentecostal',
    author: 'Charles H. Gabriel (Harpa Cristã nº 24)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 24',
    biblicalTheme: 'O Fogo do Espírito Santo (Atos 2:1-4)',
    lyrics: [
      'No Pentecostes sucedeu, o que Jesus nos prometeu;\nO fogo santo então desceu, e com poder os revestiu.',
      'Ouviram grande vendaval, que encheu o templo divinal;\nE línguas como de metal, pousaram sobre o povo leal.',
      'Batiza-nos, ó Salvador, com Teu poder renovador;\nConsola o triste pecador, e enche o crente de fervor!'
    ],
    chorus: 'Poder, poder pentecostal! Do alto vem a nós também;\nAviva a Tua igreja, ó Pai, no nome de Jesus, amém!'
  },
  {
    id: 'harpa-36',
    number: 36,
    title: 'O Exilado',
    author: 'G. M. J. (Harpa Cristã nº 36)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 36',
    biblicalTheme: 'A Saudade da Pátria Celestial (Hebreus 11:13-16)',
    lyrics: [
      'Da linda pátria estou tão longe, triste e cansado peregrino eu sou;\nMas sei que breve verei a glória, da terra santa pra onde vou.',
      'Jesus me deu a Sua promessa: "Vou preparar-vos um doce lar";\nAli não há mais dor nem tristeza, mas com meu Mestre vou descansar.',
      'Pátria querida, formosa e pura, teus muros brilham de pedras mil;\nEm breve subo à clara altura, deixando o mundo de trevas vil!'
    ],
    chorus: 'Pátria minha, por ti suspiro, quando no céu enfim irei chegar?\nEm vestes brancas, com meu Cordeiro, pra todo o sempre me alegrar!'
  },
  {
    id: 'harpa-77',
    number: 77,
    title: 'Guarda o Contacto',
    author: 'C. S. Kauffman (Harpa Cristã nº 77)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 77',
    biblicalTheme: 'Comunhão Constante com Deus (1 João 1:7)',
    lyrics: [
      'Queres, neste mundo, ser um vencedor? Queres tu cantar nas lutas e na dor?\nGuarda o contacto com o teu Senhor, e o Seu poder te inundará de amor.',
      'Deixa todo o laço que te quer prender, busca a santidade para em Deus viver;\nCom o Espírito Santo vem te revestir, para a Sua glória no mundo luzir.',
      'Nunca desanimes se o mar rugir, a mão do Mestre te há de conduzir;\nEm oração contínua deves vigiar, para que nada possa te afastar!'
    ],
    chorus: 'Guarda o contacto com o teu Salvador!\nE fluirá em ti o santo amor;\nNão percas nunca a doce comunhão,\nE sempre terás paz no coração!'
  },
  {
    id: 'harpa-107',
    number: 107,
    title: 'Firme nas Promessas',
    author: 'Russell Kelso Carter (Harpa nº 107)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 107',
    biblicalTheme: 'Inabalável Fidelidade de Deus (2 Coríntios 1:20)',
    lyrics: [
      'Firme nas promessas do meu Salvador, cantarei louvores ao meu Redentor;\nFico pelo sangue para sempre livre, firme nas promessas de Jesus.',
      'Firme nas promessas, não vacilarei, quando as tempestades rugem ao redor;\nPelo Verbo eterno eu triunfarei, firme nas promessas do Senhor.',
      'Firme nas promessas do amor sem fim, guardo a esperança que brilha em mim;\nNada neste mundo pode me abalar, firme nas promessas vou marchar!'
    ],
    chorus: 'Firme, firme, firme nas promessas de Jesus, meu Mestre!\nFirme, firme, firme nas promessas de Jesus!'
  },
  {
    id: 'harpa-115',
    number: 115,
    title: 'Trabalhai e Orai',
    author: 'C. R. Blackall (Harpa Cristã nº 115)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 115',
    biblicalTheme: 'Obra Missionária e Serviço Cristão (1 Coríntios 15:58)',
    lyrics: [
      'Eu quero trabalhar pra meu Senhor, levando a Sua luz com muito amor;\nQuero pregar a paz e a salvação, ao mundo que perece na ilusão.',
      'Quero colher o trigo nos campos do além, servindo a Jesus com fé também;\nAntes que venha a noite escura e fria, trabalharei com santa alegria.',
      'Quando o labor findar aqui na terra, e Cristo me chamar pra Sua glória;\nReceberei coroa que não fenece, no céu cantando a santa vitória!'
    ],
    chorus: 'Trabalhai e orai, na seara e na vinha do Senhor!\nCom amor, com fervor, pela glória de Cristo Salvador!'
  },
  {
    id: 'harpa-141',
    number: 141,
    title: 'Guia-me, ó Salvador',
    author: 'William Williams (Harpa Cristã nº 141)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 141',
    biblicalTheme: 'Direção Divina no Deserto (Salmo 23:3)',
    lyrics: [
      'Guia-me, ó Salvador bendito, peregrino em terra estranha;\nSou fraquinho, mas Tu és forte, livra-me da vil manha.',
      'Pão do céu, ó me sustenta! Pão da vida sem cessar;\nCom a Tua santa graça, vem minha alma alimentar.',
      'Abre a fonte cristalina, de onde mana a redenção;\nQue a coluna de luz e fogo guarde o meu coração!'
    ],
    chorus: 'Guia-me, Senhor! Meu fiel Pastor!\nAté chegar à pátria de esplendor!'
  },
  {
    id: 'harpa-186',
    number: 186,
    title: 'De Valor em Valor',
    author: 'Emil Gustafson (Harpa Cristã nº 186)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 186',
    biblicalTheme: 'Crescimento Espiritual e Santidade (Salmo 84:7)',
    lyrics: [
      'De valor em valor e de glória em glória, caminhando com Cristo na santa vitória;\nRevestido de força que vem lá do céu, contemplando sem véu o glorioso Deus.',
      'Se o inimigo tentar assolar nosso passo, em Jesus encontramos refúgio e regaço;\nEle estende o Seu braço com grande poder, para o Seu povo santo na graça crescer.',
      'Vamos nós avançar com coragem e fé, proclamando bem alto o que Cristo é;\nNosso Rei soberano que há de voltar, para a Sua noiva querida buscar!'
    ],
    chorus: 'De glória em glória, de valor em valor!\nCaminhamos com Cristo, o fiel Salvador!'
  },
  {
    id: 'harpa-192',
    number: 192,
    title: 'Pelo Sangue de Jesus',
    author: 'Lewis E. Jones (Harpa Cristã nº 192)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 192',
    biblicalTheme: 'O Poder Redentor do Sangue (Apocalipse 12:11)',
    lyrics: [
      'Queres ser livre do fardo do mal? Há poder no sangue de Jesus!\nQueres a glória do reino imortal? Há poder no sangue da cruz!',
      'Queres vencer o pecado e a paixão? Há poder no sangue de Jesus!\nVem para a fonte de purificação, há poder no sangue da cruz!',
      'Queres servir ao teu Mestre e Senhor? Há poder no sangue de Jesus!\nVem consagrar-te no santo fervor, há poder no sangue da cruz!'
    ],
    chorus: 'Há poder, sim, força sem igual, no sangue de Jesus!\nHá poder, sim, graça divinal, no sangue que verteu na cruz!'
  },
  {
    id: 'harpa-212',
    number: 212,
    title: 'Os Guerreiros se Preparam',
    author: 'E. A. Hoffman (Harpa Cristã nº 212)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 212',
    biblicalTheme: 'A Batalha Espiritual da Igreja (Efésios 6:10-18)',
    lyrics: [
      'Os guerreiros se preparam para a santa luta, ouvindo a trombeta do Senhor;\nTodos empunham a espada da verdade e marcham com fervor.',
      'Não temos armas carnais nesta contenda, mas poderosas em Deus para vencer;\nDestruindo fortalezas e grilhões com santo padecer.',
      'Eia avante, ó soldados do Cordeiro! O capitão à frente vai marchar;\nA bandeira do Evangelho desfraldada no mundo há de triunfar!'
    ],
    chorus: 'Eu quero estar com Cristo onde a luta se travar!\nNo campo de batalha Seu nome exaltar;\nAté que a coroa de vitória venha me entregar!'
  },
  {
    id: 'harpa-258',
    number: 258,
    title: 'Na Rocha Eterna Firmado',
    author: 'Edward Mote (Harpa Cristã nº 258)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 258',
    biblicalTheme: 'Cristo, o Único Alicerce (1 Coríntios 3:11)',
    lyrics: [
      'A minha fé e o meu amor estão firmados no Senhor;\nEm nada mais confiarei, senão no sangue do meu Rei.',
      'Se escuridão cobrir o céu, a Sua graça rasga o véu;\nNas tempestades sem cessar, na rocha firme vou ficar.',
      'O Seu juramento e aliança fiel me guardam quando ruge o fel;\nQuando tudo em redor ruir, Cristo me faz permanecer e subir!'
    ],
    chorus: 'Na rocha eterna estou firmado, o chão ao redor é movediço;\nEm Cristo abrigo fui achado, eterno e santo é Seu serviço!'
  },
  {
    id: 'harpa-291',
    number: 291,
    title: 'A Mensagem da Cruz (A Rude Cruz)',
    author: 'George Bennard (Harpa Cristã nº 291)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 291',
    biblicalTheme: 'A Glória da Cruz de Cristo (Gálatas 6:14)',
    lyrics: [
      'Rude cruz se erigiu, dela o dia fugiu, como emblema de vergonha e dor;\nMas eu amo essa cruz, sobre a qual meu Jesus deu a vida por mim, pecador.',
      'Nessa cruz padeceu, o bendito do céu, e Seu sangue precioso verteu;\nPra lavar os pecados e as manchas do ser, nova vida na graça me deu.',
      'Eu aqui com Jesus, a vergonha da cruz, levarei com amor e prazer;\nAté quando no céu, onde habita meu Deus, Sua face em glória eu puder ver!'
    ],
    chorus: 'Sim, eu amo a mensagem da cruz, até morrer eu a vou proclamar;\nLevarei eu também minha cruz, até por uma coroa trocar!'
  },
  {
    id: 'harpa-300',
    number: 300,
    title: 'Nossa Esperança (A Volta de Jesus)',
    author: 'Harpa Cristã nº 300',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 300',
    biblicalTheme: 'A Segunda Vinda de Cristo (Tito 2:13)',
    lyrics: [
      'Jesus voltará com poder e esplendor, rompendo as nuvens do céu com amor;\nOs anjos e arcanjos com trombetas sem fim, tocarão o clarim!',
      'Os mortos em Cristo primeiro ressurgirão, com corpos gloriosos na ressurreição;\nE nós os viventes seremos arrebatados, com o Rei coroados.',
      'Oh! que dia glorioso e sem igual será, quando a noiva a Jesus encontrar lá;\nLágrimas e dores nunca mais existirão, na santa Sião!'
    ],
    chorus: 'Ele vem! Ele vem! O Cordeiro de Deus vem reinar!\nPrepara-te, ó noiva querida, com Cristo no céu vais morar!'
  },
  {
    id: 'harpa-396',
    number: 396,
    title: 'Além do Céu Azul',
    author: 'Harpa Cristã nº 396',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 396',
    biblicalTheme: 'O Descanso Eterno na Glória (Apocalipse 21:4)',
    lyrics: [
      'Além do céu azul foi Jesus preparar, um lar de gozo e luz pra quem nEle esperar;\nLá não há mais pranto, nem tristeza e dor, só hinos de louvor ao grande Salvador.',
      'As ruas são de ouro, de jaspe o resplendor; no trono soberano reluz o Redentor;\nÁgua viva corre do rio cristalino, saciando para sempre o coro peregrino.',
      'Em breve chegaremos à santa mansão, com vestiduras brancas cantando em união;\nJesus é o Rei da glória, que tudo consumou, e para a eternidade o Seu povo salvou!'
    ],
    chorus: 'Além do céu azul, eu tenho um doce lar!\nOnde com meu Jesus, pra sempre vou cantar!'
  },
  {
    id: 'harpa-432',
    number: 432,
    title: 'Consagrado ao Senhor',
    author: 'Harpa Cristã nº 432',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 432',
    biblicalTheme: 'Consagração e Santificação (Romanos 12:1)',
    lyrics: [
      'Minha vida e meu ser consagro a Ti, Jesus;\nQuero andar em Tua senda, sob a Tua santa luz.',
      'Toma as minhas mãos e pés, guia os meus pensamentos;\nSeja o Teu amor constante em todos os momentos.',
      'Não vivo mais eu, mas Cristo vive em mim;\nE a Tua doce graça me sustentará até o fim!'
    ],
    chorus: 'Toma, Senhor, todo o meu coração!\nFaz da minha vida um vaso de bênção e unção!'
  },
  {
    id: 'harpa-525',
    number: 525,
    title: 'Vencendo Vem Jesus (Batalha da Fé)',
    author: 'Julia Ward Howe / Versão Harpa nº 525',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 525',
    biblicalTheme: 'O Triunfo Eterno do Rei dos reis (Apocalipse 19:11-16)',
    lyrics: [
      'Já refulge a glória eterna de Jesus, o Redentor;\nEle esmaga as forças do mal e triunfa no amor.',
      'Sua trombeta celestial convoca o Seu exército à luz;\nVencendo vem Jesus!',
      'Ele fez nascer a aurora sobre o mundo de opressão;\nDestronou a morte e o medo com a santa redenção.',
      'Ao soar da meia-noite o Seu povo há de subir;\nVencendo vem Jesus!'
    ],
    chorus: 'Glória, glória, aleluia! Glória, glória, aleluia!\nGlória, glória, aleluia! Vencendo vem Jesus!'
  },
  {
    id: 'harpa-545',
    number: 545,
    title: 'Salvação de Graça',
    author: 'Harpa Cristã nº 545',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 545',
    biblicalTheme: 'A Graça Imerecida (Romanos 3:24)',
    lyrics: [
      'Salvação de graça pelo Salvador, dada ao perdido pobre pecador;\nNão por nossas obras nem por nosso mérito, mas por Seu amor!',
      'Cristo pagou a dívida na cruz, nos reconciliou na eterna luz;\nQuem nEle crer jamais perecerá, vida eterna terá.',
      'Oh! vinde todos à fonte carmesim, beber da água viva até o fim;\nJesus vos chama com amor e paz, salvação que satisfaz!'
    ],
    chorus: 'De graça, sim, de graça! A salvação nos deu;\nPor Cristo ressurgido, o céu nos concedeu!'
  },
  {
    id: 'harpa-547',
    number: 547,
    title: 'O Estandarte da Verdade',
    author: 'Harpa Cristã nº 547',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã nº 547',
    biblicalTheme: 'Fidelidade às Escrituras e à Fé (Salmo 60:4)',
    lyrics: [
      'Levantai o estandarte da verdade e do amor, marchai com valentia pelo nosso Salvador;\nNão temais as trevas, nem o mundo ao redor, pois conosco está o grande Vencedor!',
      'A Palavra santa é o escudo e o farol, mais brilhante e claro que a luz do próprio sol;\nEla guia os povos e restaura o coração, proclamando a eterna redenção.',
      'Fieis até a morte nos chama o bom Jesus, levando pelo mundo a mensagem da cruz;\nAté que desça o noivo com coroa de esplendor, para arrebatar o Seu povo de amor!'
    ],
    chorus: 'Erguei o estandarte! Proclamai o amor!\nVitória soberana no nome do Senhor!'
  }
];
