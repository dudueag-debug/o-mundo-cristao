// Rádios Gospel ao Vivo e Podcasts Cristãos Confiáveis

export interface GospelRadio {
  id: string;
  name: string;
  location: string;
  frequency: string;
  streamUrl: string;
  description: string;
  badge: string;
}

export interface ChristianPodcast {
  id: string;
  title: string;
  hostOrMinistry: string;
  description: string;
  topics: string[];
  spotifyOrWebUrl: string;
  durationAvg: string;
  coverEmoji: string;
}

export const GOSPEL_RADIOS: GospelRadio[] = [
  {
    id: 'melodia-fm',
    name: 'Rádio Melodia FM',
    location: 'Rio de Janeiro / Nacional',
    frequency: '97.5 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18002/1',
    description: 'A rádio evangélica líder em louvores, mensagens e adoração no Brasil.',
    badge: 'Mais Ouvida'
  },
  {
    id: 'sara-brasil',
    name: 'Rádio Sara Brasil FM',
    location: 'Rede Nacional',
    frequency: '101.3 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18020/1',
    description: 'Programação de louvor, palavra pastoral e oração para edificar a sua família.',
    badge: 'Nacional'
  },
  {
    id: 'boas-novas',
    name: 'Rádio Boas Novas',
    location: 'Manaus / Rede Amazônica',
    frequency: 'Web & FM',
    streamUrl: 'https://streaming01.zas.media:8000/live',
    description: 'Evangelho puro, ministrações bíblicas e cânticos sagrados 24 horas no ar.',
    badge: 'Mundial'
  },
  {
    id: 'cpad-fm',
    name: 'Rádio CPAD Gospel',
    location: 'Rio de Janeiro',
    frequency: 'Web & App',
    streamUrl: 'https://painel.portalradios.com.br/listen/radiocpad/stream',
    description: 'A voz da literatura cristã, lições bíblicas e os mais belos hinos sacros da Harpa.',
    badge: 'Teologia & Harpa'
  },
  {
    id: 'novas-de-paz',
    name: 'Rádio Novas de Paz',
    location: 'Recife / Nordeste',
    frequency: '107.5 FM',
    streamUrl: 'https://paineldj5.com.br:10996/stream',
    description: 'Pregações fervorosas, oração ao vivo e louvores tradicionais abençoando vidas.',
    badge: 'Avivamento'
  },
  {
    id: 'gospel-fm',
    name: 'Rádio Gospel FM',
    location: 'São Paulo',
    frequency: '90.1 FM',
    streamUrl: 'https://ice.fabricahost.com.br/gospelfm',
    description: 'Música cristã contemporânea, hinos da fé e reflexões pastorais para o seu dia.',
    badge: 'Louvor 24h'
  }
];

export const CHRISTIAN_PODCASTS: ChristianPodcast[] = [
  {
    id: 'pod-cafe-com-deus',
    title: 'Café com Deus Pai (Devocional Diário)',
    hostOrMinistry: 'Junior Rostirola',
    description: 'Momentos diários de intimidade, cura emocional e comunhão profunda com o Pai celestial para começar cada manhã na presença de Deus.',
    topics: ['Devocional', 'Oração Matinal', 'Vida com Deus', 'Paternidade Divina'],
    spotifyOrWebUrl: 'https://open.spotify.com/show/0qGzH0vK8s8Y9V0X0x0x0x',
    durationAvg: '15 – 20 min',
    coverEmoji: '☕'
  },
  {
    id: 'pod-dois-dedos',
    title: 'Dois Dedos de Teologia',
    hostOrMinistry: 'Felipe Cruz e Convidados',
    description: 'Teologia bíblica explicada de forma clara, bíblica e sem rodeios. Exegese, apologética, ética cristã e sã doutrina para a Igreja.',
    topics: ['Exegese Bíblica', 'Cosmovisão Cristã', 'Sã Doutrina', 'História'],
    spotifyOrWebUrl: 'https://open.spotify.com/show/doisdedosdeteologia',
    durationAvg: '45 – 60 min',
    coverEmoji: '📖'
  },
  {
    id: 'pod-voltemos',
    title: 'Voltemos ao Evangelho',
    hostOrMinistry: 'Ministério Fiel & Parceiros',
    description: 'Mensagens expositivas e reflexões com grandes mestres da história: John Piper, Charles Spurgeon, Timothy Keller e herança da Reforma.',
    topics: ['Pregação Expositiva', 'Avivamento', 'Graça de Deus', 'Pastoral'],
    spotifyOrWebUrl: 'https://voltemosaoevangelho.com',
    durationAvg: '30 – 40 min',
    coverEmoji: '✝'
  },
  {
    id: 'pod-imw-voz',
    title: 'Voz Wesleyana Podcast Oficial',
    hostOrMinistry: 'Igreja Metodista Wesleyana',
    description: 'Episódios sobre a história da IMW, avivamento espiritual dos anos 60, testemunhos dos pioneiros, missões e a teologia da santidade.',
    topics: ['História IMW', 'Doutrina Wesleyana', 'Avivamento 1967', 'Missões'],
    spotifyOrWebUrl: 'https://imw.com.br',
    durationAvg: '35 – 50 min',
    coverEmoji: '🔥'
  },
  {
    id: 'pod-teologia-vida',
    title: 'Teologia para a Vida',
    hostOrMinistry: 'Estudos Bíblicos Pastoral',
    description: 'Como aplicar a Palavra de Deus nos dilemas do casamento, finanças, criação de filhos, ansiedade e perseverança na caminhada cristã.',
    topics: ['Família Cristã', 'Aconselhamento', 'Vida Prática', 'Paz em Deus'],
    spotifyOrWebUrl: 'https://open.spotify.com',
    durationAvg: '25 – 35 min',
    coverEmoji: '🕊'
  }
];
