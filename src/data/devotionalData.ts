export interface DailyDevotional {
  date: string;
  verseText: string;
  reference: string;
  theme: string;
  reflection: string;
  prayer: string;
  wesleyanInsight: string;
}

export interface EmotionalCheckin {
  id: string;
  feeling: string;
  iconName: string;
  color: string;
  title: string;
  scripture: string;
  verseText: string;
  message: string;
  guidedPrayer: string;
}

export const DAILY_DEVOTIONALS: DailyDevotional[] = [
  {
    date: 'Hoje',
    verseText: 'O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti; o Senhor sobre ti levante o seu rosto e te dê a paz.',
    reference: 'Números 6:24-26',
    theme: 'A Bênção e a Guarda da Graça Divina',
    reflection: 'Em meio às incertezas da vida cotidiana e aos desafios do ministério, lembre-se de que você está debaixo da bênção sacerdotal eterna de Deus. Ele não é um observador distante: Seu rosto brilha sobre você com olhar de amor, favor e acolhimento perdoador.',
    prayer: 'Pai celeste, agradeço porque o Teu olhar de graça está sobre a minha vida hoje. Guarda os meus passos, protege a minha mente da ansiedade e inunda o meu coração com a paz de Cristo que excede todo o entendimento. Em nome de Jesus, amém.',
    wesleyanInsight: 'John Wesley ensinava que a graça de Deus não é apenas o perdão do pecado, mas a presença capacitadora do Pai celestial que sustenta o crente a cada respiração.'
  },
  {
    date: 'Amanhã',
    verseText: 'Mas Ele me disse: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza".',
    reference: '2 Coríntios 12:9',
    theme: 'Força na Fraqueza',
    reflection: 'Muitas vezes oramos pedindo que Deus remova imediatamente nossos espinhos e fardos. No entanto, o plano de Deus frequentemente é nos ensinar a confiar no suprimento diário da Sua graça suficiente. Quando reconhecemos que nada somos por nós mesmos, o poder soberano de Cristo repousa sobre nós.',
    prayer: 'Senhor, nas áreas em que me sinto fraco e vulnerável, coloco a minha total confiança em Ti. Que o Teu poder se manifeste na minha fraqueza e que o Teu nome seja glorificado em cada vitória. Amém.',
    wesleyanInsight: 'A verdadeira perfeição cristã não reside na força humana arrogante, mas na dependência absoluta do amor de Cristo que governa os nossos motivos.'
  }
];

export const EMOTIONAL_CHECKINS: EmotionalCheckin[] = [
  {
    id: 'ansioso',
    feeling: 'Ansioso',
    iconName: 'HeartCrack',
    color: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-950 dark:text-amber-200',
    title: 'Paz para Acalmar a Tempestade da Mente',
    scripture: 'Filipenses 4:6-7',
    verseText: 'Não andeis ansiosos de coisa alguma; em tudo, porém, sejam conhecidas diante de Deus as vossas petições, pela oração e pela súplica, com ações de graças.',
    message: 'A ansiedade tenta roubar a paz do seu hoje por causa de coisas que você não pode controlar no amanhã. Entregue cada preocupação nas mãos Daquele que cuida até dos lírios do campo.',
    guidedPrayer: 'Senhor Jesus, descarrego agora aos Teus pés todo o peso do meu amanhã. Entrego as decisões, as contas, a família e a minha saúde. Guarda a minha mente na Tua paz imutável.'
  },
  {
    id: 'grato',
    feeling: 'Grato',
    iconName: 'Sparkles',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-950 dark:text-emerald-200',
    title: 'Louvor pelo Cuidado Fiel de Deus',
    scripture: 'Salmos 103:1-2',
    verseText: 'Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome. Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum dos seus benefícios.',
    message: 'Um coração grato é um solo fértil para novos milagres. Quando louvamos a Deus pelo que Ele já fez, nossa fé é renovada para o que Ele ainda fará.',
    guidedPrayer: 'Pai bondoso, muito obrigado pelo fôlego de vida, pelo pão de cada dia e pela Tua salvação sem fim. Que o meu louvor não seja apenas de lábios, mas de gratidão em cada atitude minha.'
  },
  {
    id: 'cansado',
    feeling: 'Cansado',
    iconName: 'BatteryCharging',
    color: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950 dark:text-blue-200',
    title: 'Descanso e Renovação para a Alma Esgotada',
    scripture: 'Mateus 11:28',
    verseText: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.',
    message: 'Você não precisa carregar o mundo nas costas. Jesus não disse para você tentar ser mais forte sozinho; Ele convidou você a repousar o seu fardo no dEle.',
    guidedPrayer: 'Senhor amado, o meu corpo e a minha mente estão cansados da rotina e das lutas. Aceito o Teu convite para descansar em Teus braços. Renova as minhas forças como as da águia.'
  },
  {
    id: 'com-medo',
    feeling: 'Com Medo',
    iconName: 'ShieldAlert',
    color: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950 dark:text-rose-200',
    title: 'O Perfeito Amor que Expulsa o Temor',
    scripture: 'Isaías 41:10',
    verseText: 'Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.',
    message: 'O medo olha para o tamanho do problema; a fé olha para o tamanho do Deus que está ao seu lado. O Criador do Universo segura a sua mão direita.',
    guidedPrayer: 'Deus Todo-Poderoso, repreendo todo espírito de medo sobre a minha vida e minha família. Tu és o meu escudo e a minha fortaleza inabalável. Em Ti estou seguro.'
  },
  {
    id: 'em-paz',
    feeling: 'Em Paz',
    iconName: 'Sun',
    color: 'bg-sky-100 text-sky-800 border-sky-300 dark:bg-sky-950 dark:text-sky-200',
    title: 'A Doce Serenidade na Presença de Deus',
    scripture: 'Salmos 23:1-3',
    verseText: 'O Senhor é o meu pastor; nada me faltará. Ele me faz repousar em pastos verdejantes; leva-me para junto das águas de descanso; refrigera a minha alma.',
    message: 'Desfrute desse momento de comunhão e serenidade. Use essa paz para abençoar alguém ao seu redor que esteja passando por aflições.',
    guidedPrayer: 'Senhor, obrigado pela paz que reina em meu coração hoje. Ajuda-me a ser um instrumento de reconciliação, transmitindo essa Tua luz e consolo aos que estão aflitos.'
  }
];

export interface Hymn {
  number: number;
  title: string;
  author: string;
  category: 'Wesleyano' | 'Harpa Cristã' | 'Hino IMW';
  verses: string[];
  chorus?: string;
}

export const CLASSIC_HYMNS: Hymn[] = [
  {
    number: 1,
    title: 'Hino Oficial da Igreja Metodista Wesleyana',
    author: 'Tradição Wesleyana / Hinário IMW',
    category: 'Hino IMW',
    verses: [
      'Somos um povo salvo por Jesus, caminhando na senda da luz.',
      'Com o fogo do Espírito a arder, para as almas perdidas acolher.',
      'Wesleyana, fiel na missão, proclamando em santa união:',
      'Pelo sangue de Cristo remidos, pelo Espírito Santo ungidos!'
    ],
    chorus: 'Avivamento, santidade e poder! Para o Reino de Cristo crescer!'
  },
  {
    number: 2,
    title: 'Mil Línguas Eu Quisera Ter (O For a Thousand Tongues to Sing)',
    author: 'Charles Wesley (1739)',
    category: 'Wesleyano',
    verses: [
      'Mil línguas eu quisera ter, para entoar louvor',
      'À glória do meu Redentor, ao triunfo do Seu amor!',
      'Jesus! O nome que desfaz o medo e a aflição;',
      'Que ao pobre traz consolo e paz, e ao triste, redenção.',
      'Ele quebra o poder do vil pecado e quebra as prisões;',
      'Seu sangue limpa o mais manchado e traz reconciliação.'
    ]
  },
  {
    number: 15,
    title: 'Foi na Cruz (Alas! and Did My Saviour Bleed)',
    author: 'Isaac Watts / Ralph E. Hudson',
    category: 'Harpa Cristã',
    verses: [
      'Oh! quão cego eu andei e perdido vaguei, longe, longe do meu Salvador!',
      'Mas da glória desceu e seu sangue verteu pra salvar um tão pobre pecador.'
    ],
    chorus: 'Foi na cruz, foi na cruz, onde um dia eu vi meu pecado castigado em Jesus; foi ali, pela fé, que os olhos abri, e agora me alegro em sua luz!'
  }
];
