// Rádios Gospel ao Vivo e Podcasts Cristocêntricos de Alta Relevância (Sã Doutrina)

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
  theologicalFocus: string;
  topics: string[];
  spotifyOrWebUrl: string;
  durationAvg: string;
  coverEmoji: string;
  badge: string;
}

export const GOSPEL_RADIOS: GospelRadio[] = [
  {
    id: 'melodia-fm',
    name: 'Rádio Melodia FM',
    location: 'Rio de Janeiro / Nacional',
    frequency: '97.5 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18002/1',
    description: 'A maior emissora evangélica do país com louvores congregacionais, ministração pastoral e adoração 24h.',
    badge: 'Líder em Audiência'
  },
  {
    id: 'sara-brasil',
    name: 'Rádio Sara Brasil FM',
    location: 'Rede Nacional',
    frequency: '101.3 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18020/1',
    description: 'Transmissão contínua de fé, canções inspiradoras e oração para edificar o lar cristão.',
    badge: 'Rede Nacional'
  },
  {
    id: 'boas-novas',
    name: 'Rádio Boas Novas',
    location: 'Manaus / Rede Amazônica',
    frequency: 'Web & FM',
    streamUrl: 'https://streaming01.zas.media:8000/live',
    description: 'Evangelho puro, ministrações expositivas da Palavra e hinos sagrados alcançando o Brasil e nações.',
    badge: 'Missões & Avivamento'
  },
  {
    id: 'cpad-fm',
    name: 'Rádio CPAD Gospel',
    location: 'Rio de Janeiro',
    frequency: 'Web & App',
    streamUrl: 'https://painel.portalradios.com.br/listen/radiocpad/stream',
    description: 'A voz da literatura bíblica, lições da Escola Bíblica Dominical e a beleza dos hinos sacros da Harpa.',
    badge: 'Teologia & Harpa'
  },
  {
    id: 'novas-de-paz',
    name: 'Rádio Novas de Paz',
    location: 'Recife / Nordeste',
    frequency: '107.5 FM',
    streamUrl: 'https://paineldj5.com.br:10996/stream',
    description: 'Pregações fervorosas, oração ao vivo e cânticos de adoração que fortalecem a fé cotidiana.',
    badge: 'Clamor & Palavra'
  },
  {
    id: 'gospel-fm',
    name: 'Rádio Gospel FM',
    location: 'São Paulo',
    frequency: '90.1 FM',
    streamUrl: 'https://ice.fabricahost.com.br/gospelfm',
    description: 'Música cristã de edificação, hinos da fé e mensagens pastorais com dinamismo e profundidade bíblica.',
    badge: 'Louvor & Vida'
  },
  {
    id: 'logos-fm',
    name: 'Rádio Logos FM',
    location: 'Fortaleza / Ceará',
    frequency: '102.3 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18012/1',
    description: 'Emissora comprometida com a fidelidade às Escrituras, adoração reverente e edificação espiritual.',
    badge: 'Edificação Bíblica'
  },
  {
    id: 'radio-93fm',
    name: 'Rádio 93 FM Gospel',
    location: 'Rio de Janeiro',
    frequency: '93.3 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18006/1',
    description: 'Canções de celebração cristã, debates doutrinários respeitosos e mensagens abençoadoras.',
    badge: 'Louvor 24 Horas'
  }
];

export const CHRISTIAN_PODCASTS: ChristianPodcast[] = [
  {
    id: 'pod-cafe-com-deus',
    title: 'Café com Deus Pai (Devocional Diário)',
    hostOrMinistry: 'Junior Rostirola',
    description: 'Reflexões matinais de intimidade, cura emocional e comunhão genuína com o Pai celestial para iniciar o dia centrado na graça divina.',
    theologicalFocus: 'Devocional e Intimidade com Deus',
    topics: ['Devocional Diário', 'Oração Matinal', 'Paternidade de Deus', 'Paz Interior'],
    spotifyOrWebUrl: 'https://open.spotify.com/show/0qGzH0vK8s8Y9V0X0x0x0x',
    durationAvg: '15 – 20 min',
    coverEmoji: '☕',
    badge: 'Devocional Diário'
  },
  {
    id: 'pod-dois-dedos',
    title: 'Dois Dedos de Teologia',
    hostOrMinistry: 'Felipe Cruz e Teólogos Convidados',
    description: 'Teologia bíblica explicada com clareza, fidelidade textual e sem desvios teológicos. Exegese, apologética, ética cristã e sã doutrina para a Igreja.',
    theologicalFocus: 'Exegese Bíblica e Apologética Cristã',
    topics: ['Exegese Bíblica', 'Cosmovisão Bíblica', 'Sã Doutrina', 'História da Igreja'],
    spotifyOrWebUrl: 'https://open.spotify.com/show/doisdedosdeteologia',
    durationAvg: '45 – 60 min',
    coverEmoji: '📖',
    badge: 'Sã Doutrina'
  },
  {
    id: 'pod-voltemos',
    title: 'Voltemos ao Evangelho',
    hostOrMinistry: 'Ministério Fiel & Parceiros',
    description: 'Pregações expositivas com centralidade na cruz de Cristo e herança dos grandes reformadores: John Piper, Spurgeon, Martin Lloyd-Jones e teologia bíblica.',
    theologicalFocus: 'Pregação Expositiva Cristocêntrica',
    topics: ['Pregação Expositiva', 'Avivamento Bíblico', 'Graça Soberana', 'Vida Pastoral'],
    spotifyOrWebUrl: 'https://voltemosaoevangelho.com',
    durationAvg: '35 – 50 min',
    coverEmoji: '✝',
    badge: 'Cristocêntrico'
  },
  {
    id: 'pod-imw-voz',
    title: 'Voz Wesleyana (Podcast Oficial IMW)',
    hostOrMinistry: 'Igreja Metodista Wesleyana',
    description: 'Episódios históricos sobre o avivamento wesleyano de 1967, testemunhos dos pioneiros, missões globais, inteira santificação e teologia arminiano-wesleyana da graça.',
    theologicalFocus: 'História, Avivamento e Teologia Wesleyana',
    topics: ['História IMW', 'Avivamento 1967', 'Santidade Prática', 'Missões'],
    spotifyOrWebUrl: 'https://imw.com.br',
    durationAvg: '30 – 45 min',
    coverEmoji: '🔥',
    badge: 'Oficial IMW'
  },
  {
    id: 'pod-teologia-vida',
    title: 'Teologia para a Vida',
    hostOrMinistry: 'Estudos Bíblicos Pastorais',
    description: 'Como aplicar os princípios inerrantes da Palavra de Deus nos dilemas práticos da família, casamento, finanças, luto, ansiedade e perseverança na santidade.',
    theologicalFocus: 'Aconselhamento Bíblico Pastoral',
    topics: ['Família Cristã', 'Crescimento Espiritual', 'Aconselhamento', 'Cura da Alma'],
    spotifyOrWebUrl: 'https://open.spotify.com',
    durationAvg: '25 – 35 min',
    coverEmoji: '🕊',
    badge: 'Vida Cristã'
  },
  {
    id: 'pod-bibotalk',
    title: 'BiboTalk / Pense Bem',
    hostOrMinistry: 'Rodrigo Bibo e Convidados',
    description: 'Conversas teológicas profundas abordando a Bíblia, ética contemporânea, cultura e a fé reformada histórica para cristãos que buscam raízes sólidas.',
    theologicalFocus: 'Cosmovisão Cristã e Fé Pública',
    topics: ['Teologia Contemporânea', 'Debate Bíblico', 'Cultura', 'Discipulado'],
    spotifyOrWebUrl: 'https://bibotalk.com',
    durationAvg: '50 – 70 min',
    coverEmoji: '🎙',
    badge: 'Cosmovisão'
  },
  {
    id: 'pod-desiring-god',
    title: 'Desiring God em Português',
    hostOrMinistry: 'John Piper / Desiring God Ministries',
    description: 'Meditações exegéticas focadas na supremacia e santidade de Deus: "Deus é mais glorificado em nós quando estamos mais satisfeitos nEle".',
    theologicalFocus: 'Hedonismo Cristão Bíblico & Supremacia de Deus',
    topics: ['Glória de Deus', 'Alegria em Cristo', 'Soberania Divina', 'Pureza'],
    spotifyOrWebUrl: 'https://www.desiringgod.org',
    durationAvg: '20 – 30 min',
    coverEmoji: '✨',
    badge: 'Supremacia de Cristo'
  },
  {
    id: 'pod-santidade-sproul',
    title: 'A Santidade de Deus',
    hostOrMinistry: 'R.C. Sproul / Ligonier Ministries & Fiel',
    description: 'Estudo clássico sobre o caráter glorioso, transcendente e misericordioso de Deus diante do mistério da redenção operada na cruz.',
    theologicalFocus: 'Doutrina de Deus e Reverência Bíblica',
    topics: ['Atributos Divinos', 'Santidade', 'Reverência', 'Graça Soberana'],
    spotifyOrWebUrl: 'https://ministeriofiel.com.br',
    durationAvg: '30 – 40 min',
    coverEmoji: '👑',
    badge: 'Clássico da Fé'
  }
];
