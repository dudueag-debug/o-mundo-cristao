// Hinário Completo: Harpa Cristã (640 Hinos) e Hinário da Igreja Metodista Wesleyana (IMW)
import harpaJson from './harpa640.json';

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

// Hinos Históricos e Oficiais da Igreja Metodista Wesleyana e Charles Wesley
export const WESLEYAN_AND_CLASSIC_HYMNS: DetailedHymn[] = [
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
    author: 'Martinho Lutero / Versão Histórica',
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
  {
    id: 'imw-mundo-paroquia',
    number: 10,
    title: 'O Mundo é a Nossa Paróquia',
    author: 'Lema Histórico de John Wesley',
    category: 'imw-oficial',
    categoryLabel: 'Missões IMW',
    biblicalTheme: 'A Grande Comissão Universal (Marcos 16:15)',
    lyrics: [
      'Olhai os campos prontos pra ceifar, a messe é grande e clama com fervor;\nQuem sobre os montes há de anunciar a graça e o perdão do Redentor?',
      'O mundo inteiro é o nosso lugar, nenhuma fronteira pode deter;\nO Evangelho vivo a proclamar, até que a terra venha se render!',
      'Ide por todo o mundo e pregai, a ordem santa vamos cumprir;\nNo santo fogo do Espírito marchai, até que Cristo venha reluzir!'
    ],
    chorus: 'O mundo é a nossa paróquia de amor!\nPregamos a Cristo, o Rei e Salvador!\nDa Wesleyana o clarim a soar,\nAté que todo povo venha adorar!'
  }
];

// Metadados enriquecidos para os hinos mais célebres da Harpa Cristã
const HARPA_SPECIAL_META: Record<number, { author?: string; biblicalTheme?: string }> = {
  1: { author: 'Daniel W. Whittle / James McGranahan', biblicalTheme: 'Avivamento e Promessa do Espírito (Ezequiel 34:26)' },
  15: { author: 'Isaac Watts / Ralph E. Hudson', biblicalTheme: 'O Sacrifício e Salvação na Cruz (Gálatas 6:14)' },
  24: { author: 'Charles H. Gabriel', biblicalTheme: 'O Fogo do Espírito Santo (Atos 2:1-4)' },
  36: { author: 'G. M. J.', biblicalTheme: 'A Saudade da Pátria Celestial (Hebreus 11:13-16)' },
  77: { author: 'C. S. Kauffman', biblicalTheme: 'Comunhão Constante com Deus (1 João 1:7)' },
  107: { author: 'Russell Kelso Carter', biblicalTheme: 'Inabalável Fidelidade de Deus (2 Coríntios 1:20)' },
  115: { author: 'E. A. Hoffman', biblicalTheme: 'Purificação pelo Sangue do Cordeiro (1 João 1:9)' },
  141: { author: 'Johnson Oatman Jr.', biblicalTheme: 'A Busca da Santificação e Pureza (Hebreus 12:14)' },
  186: { author: 'P. P. Bliss', biblicalTheme: 'Luz e Salvação para os Perdidos (Mateus 5:14-16)' },
  187: { author: 'Charles Wesley / Versão Harpa', biblicalTheme: 'Oração Pelo Poder do Espírito (Salmo 85:6)' },
  192: { author: 'W. S. Martin', biblicalTheme: 'Cuidado Paterno do Senhor (1 Pedro 5:7)' },
  196: { author: 'J. H. Sammis', biblicalTheme: 'A Bênção da Obediência e Fé (1 Samuel 15:22)' },
  212: { author: 'William R. Newell', biblicalTheme: 'A Imensidão da Graça no Calvário (Romanos 5:20)' },
  291: { author: 'George Bennard', biblicalTheme: 'A Mensagem da Cruz (1 Coríntios 1:18)' },
  300: { author: 'Harpa Cristã Tradicional', biblicalTheme: 'A Segunda Vinda de Cristo (Tito 2:13)' },
  396: { author: 'Harpa Cristã Tradicional', biblicalTheme: 'O Descanso Eterno na Glória (Apocalipse 21:4)' },
  432: { author: 'Harpa Cristã Tradicional', biblicalTheme: 'Consagração e Santificação (Romanos 12:1)' },
  525: { author: 'Julia Ward Howe', biblicalTheme: 'O Triunfo Eterno do Rei dos reis (Apocalipse 19:11-16)' },
  545: { author: 'Harpa Cristã Tradicional', biblicalTheme: 'A Graça Imerecida (Romanos 3:24)' },
  547: { author: 'Harpa Cristã Tradicional', biblicalTheme: 'Fidelidade às Escrituras e à Fé (Salmo 60:4)' }
};

// Conversão e carregamento de TODOS os 640 hinos da Harpa Cristã
export const HARPA_HYMNS: DetailedHymn[] = (harpaJson as any[]).map((item) => {
  const meta = HARPA_SPECIAL_META[item.number] || {};
  return {
    id: item.id || `harpa-${item.number}`,
    number: item.number,
    title: item.title,
    author: meta.author || item.author || 'Harpa Cristã',
    category: 'harpa' as const,
    categoryLabel: item.categoryLabel || `Harpa Cristã nº ${item.number}`,
    biblicalTheme: meta.biblicalTheme || item.biblicalTheme || 'Louvor Congregacional e Adoração',
    lyrics: item.lyrics || [],
    chorus: item.chorus || undefined
  };
});

// Hinário Unificado Completo (IMW + Wesleyano + 640 Hinos da Harpa Cristã)
export const COMPLETE_HYMNAL: DetailedHymn[] = [
  ...WESLEYAN_AND_CLASSIC_HYMNS,
  ...HARPA_HYMNS
];
