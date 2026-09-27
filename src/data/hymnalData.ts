// Hinário Completo: Harpa Cristã e Hinário da Igreja Metodista Wesleyana

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

  // ==========================================
  // HARPA CRISTÃ (Grandes Clássicos Oficiais)
  // ==========================================
  {
    id: 'harpa-15',
    number: 15,
    title: 'Foi na Cruz',
    author: 'Isaac Watts / Ralph E. Hudson (Harpa Cristã nº 15)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
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
    id: 'harpa-1',
    number: 1,
    title: 'Chuvas de Graça',
    author: 'Daniel W. Whittle / James McGranahan (Harpa nº 1)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'Avivamento e Promessa do Espírito (Ezequiel 34:26)',
    lyrics: [
      'Deus prometeu com certeza, chuvas de graça enviar;\nEle nos dá fortaleza, e ricas bênçãos sem par.',
      'Cristo nos dá a promessa do Santo Consolador;\nEle nos enche de graça, de santo zelo e amor.',
      'Dá-nos, Senhor, amplamente, Teu grande derramar;\nChuva bendita dos céus, vem nossas almas fartar!'
    ],
    chorus: 'Chuvas de graça, chuvas pedimos, Senhor;\nManda-nos gotas benditas, chuvas do Consolador!'
  },
  {
    id: 'harpa-107',
    number: 107,
    title: 'Firme nas Promessas',
    author: 'Russell Kelso Carter (Harpa nº 107)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'Inabalável Fidelidade de Deus (2 Coríntios 1:20)',
    lyrics: [
      'Firme nas promessas do meu Salvador, cantarei louvores ao meu Redentor;\nFico pelo sangue para sempre livre, firme nas promessas de Jesus.',
      'Firme nas promessas, não vacilarei, quando as tempestades rugem ao redor;\nPelo Verbo eterno eu triunfarei, firme nas promessas do Senhor.',
      'Firme nas promessas do amor sem fim, guardo a esperança que brilha em mim;\nNada neste mundo pode me abalar, firme nas promessas vou marchar!'
    ],
    chorus: 'Firme, firme, firme nas promessas de Jesus, meu Mestre!\nFirme, firme, firme nas promessas de Jesus!'
  },
  {
    id: 'harpa-291',
    number: 291,
    title: 'A Mensagem da Cruz (A Rude Cruz)',
    author: 'George Bennard (Harpa nº 291)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'A Glória da Cruz de Cristo (1 Coríntios 1:18)',
    lyrics: [
      'Rude cruz se ergueu, dela o dia fugiu, como emblema de vergonha e dor;\nMas eu amo essa cruz, sobre a qual meu Jesus deu a vida por mim, pecador.',
      'Desde a glória dos céus, o Cordeiro de Deus ao Calvário humilhado baixou;\nEssa cruz tem pra mim atrativos sem fim, porque nela Jesus me salvou.',
      'Nessa cruz padeceu e por nós padeceu, o Cordeiro bendito do amor;\nSua morte me deu a certeza do céu, e a paz no bendito Senhor.',
      'Eu aqui com Jesus a vergonha da cruz quero sempre levar e sofrer;\nCristo um dia virá e pra Si me levará, para sempre com Ele viver!'
    ],
    chorus: 'Sim, eu amo a mensagem da cruz, até morrer eu a vou proclamar;\nLevarei eu também minha cruz, até por uma coroa trocar!'
  },
  {
    id: 'harpa-545',
    number: 545,
    title: 'Porque Ele Vive',
    author: 'Bill & Gloria Gaither (Harpa nº 545)',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'Vitória sobre a Morte e Esperança Viva (João 14:19)',
    lyrics: [
      'Deus enviou Seu Filho amado para morrer em meu lugar;\nNa cruz pagou por meus pecados, mas o sepulcro vazio está porque Ele vive!',
      'E quando enfim chegar a hora em que a morte enfrentarei;\nSem medo, então, terei vitória: verei na glória o meu Jesus que vivo está!'
    ],
    chorus: 'Porque Ele vive, posso crer no amanhã;\nPorque Ele vive, temor não há!\nMas eu bem sei, eu sei que a minha vida\nEstá nas mãos do meu Jesus, que vivo está!'
  },
  {
    id: 'harpa-186',
    number: 186,
    title: 'De Valor em Valor',
    author: 'Harpa Cristã nº 186',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'Crescimento Espiritual e Unção (Salmo 84:7)',
    lyrics: [
      'Pela fé vou caminhando, de valor em valor;\nMinha cruz vou carregando, nos passos do Senhor.',
      'Se o inimigo se levanta, com poder celestial;\nJesus Cristo me levanta, e vence todo o mal!',
      'Avancemos, povo santo, para a terra de Canaã;\nOnde nunca haverá pranto, na glória de Jeová!'
    ],
    chorus: 'De valor em valor, vou marchando com ardor;\nAté ver Jesus na glória, em Seu reino de esplendor!'
  },
  {
    id: 'harpa-525',
    number: 525,
    title: 'Vencendo Vem Jesus (Glória, Glória, Aleluia)',
    author: 'Julia Ward Howe / Harpa nº 525',
    category: 'harpa',
    categoryLabel: 'Harpa Cristã',
    biblicalTheme: 'A Segunda Vinda Vitoriosa de Cristo (Apocalipse 19:11-16)',
    lyrics: [
      'Já refulge a glória eterna de Jesus, o Rei dos reis;\nBreve os reinos deste mundo seguirão as Suas leis.',
      'Os sinais da Sua vinda mais se mostram cada vez;\nVencendo vem Jesus!',
      'O clarim que chama os crentes à batalha já soou;\nCristo, à frente do Seu povo, multidões já conquistou.',
      'O inimigo em retirada seu poder já desfez;\nVencendo vem Jesus!'
    ],
    chorus: 'Glória, glória, aleluia! Glória, glória, aleluia!\nGlória, glória, aleluia! Vencendo vem Jesus!'
  },

  // ==========================================
  // CLÁSSICOS HISTÓRICOS DA REFORMA & ADORAÇÃO
  // ==========================================
  {
    id: 'classico-lutero',
    number: 500,
    title: 'Castelo Forte é Nosso Deus',
    author: 'Martinho Lutero (1529)',
    category: 'classico',
    categoryLabel: 'Hino da Reforma',
    biblicalTheme: 'Deus nosso Refúgio e Fortaleza (Salmo 46)',
    lyrics: [
      'Castelo forte é nosso Deus, espada e bom escudo;\nCom Seu poder defende os Seus em todo transe agudo.',
      'Com fúria e com furor nos cerca o tentador;\nCom manhas e ardil nos quer tragar sutil; na terra não há seu igual.',
      'A nossa força nada faz, sozinhos perecemos;\nMas nosso Deus socorro traz, no Salvador que temos.',
      'Sabeis quem é Jesus? O que venceu na cruz;\nSenhor dos altos céus, e sendo o próprio Deus, triunfa na batalha!',
      'A Palavra permanecerá, sabemos com certeza;\nE nada a derrotará, com Deus por fortaleza!'
    ]
  },
  {
    id: 'classico-grandioso',
    number: 501,
    title: 'Grandioso És Tu (How Great Thou Art)',
    author: 'Carl Boberg (1885)',
    category: 'classico',
    categoryLabel: 'Grande Clássico Cristão',
    biblicalTheme: 'Majestade e Grandeza Divina (Salmo 8)',
    lyrics: [
      'Senhor meu Deus, quando eu maravilhado, fico a pensar nas obras de Tuas mãos;\nNo céu azul de estrelas pontilhado, o Seu poder mostrando as criações.',
      'E quando penso que Deus não poupou Seu próprio Filho, à morte o entregou;\nNa rude cruz por mim foi castigado, e com Seu sangue as culpas me lavou.',
      'Quando enfim Jesus me chamar para o Seu lar no céu triunfador;\nCom santa paz irei me ajoelhar, e adorar o grande Redentor!'
    ],
    chorus: 'Então minha alma canta a Ti, Senhor: Grandioso és Tu, grandioso és Tu!\nEntão minha alma canta a Ti, Senhor: Grandioso és Tu, grandioso és Tu!'
  },
  {
    id: 'classico-tu-es-fiel',
    number: 502,
    title: 'Tu És Fiel, Senhor (Great Is Thy Faithfulness)',
    author: 'Thomas O. Chisholm (1923)',
    category: 'classico',
    categoryLabel: 'Grande Clássico Cristão',
    biblicalTheme: 'A Inesgotável Misericórdia de Deus (Lamentações 3:22-23)',
    lyrics: [
      'Tu és fiel, Senhor, ó Pai celeste; Teus filhos sabem que não falharás;\nNunca mudaste, Tu nunca faltaste, tal como eras, Tu sempre serás.',
      'Flores e frutos, montanhas e mares, sol, lua, estrelas no céu a brilhar;\nDe Tua glória são testemunhas, e da Tua graça que vem nos fartar.',
      'Pleno perdão Tu dás, paz e alegria; graça bendita que me susterá;\nForça e esperança pra cada novo dia, bênçãos sem fim Tua mão me dará!'
    ],
    chorus: 'Tu és fiel, Senhor! Tu és fiel, Senhor!\nDia após dia, com bênçãos sem fim;\nTua bondade me guia e me sustém,\nGrande é Tua fidelidade a mim!'
  }
];
