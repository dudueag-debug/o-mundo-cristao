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

export interface PodcastEpisode {
  id: string;
  title: string;
  duration: string;
  date: string;
  summary: string;
  verseRef?: string;
  audioText: string;
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
  episodes: PodcastEpisode[];
}

export const GOSPEL_RADIOS: GospelRadio[] = [
  {
    id: 'melodia-fm',
    name: 'Rádio Melodia FM',
    location: 'Rio de Janeiro / Nacional',
    frequency: '97.5 FM',
    streamUrl: 'https://server01.ouvir.radio.br:8033/stream',
    description: 'A maior emissora evangélica do país com louvores congregacionais, ministração pastoral e adoração 24h.',
    badge: 'Líder em Audiência'
  },
  {
    id: 'feliz-fm',
    name: 'Rádio Feliz FM',
    location: 'São Paulo / Rede Nacional',
    frequency: '92.9 FM',
    streamUrl: 'https://cloud1.cdnseguro.com:5520/;stream.mp3',
    description: 'A rádio que toca o seu coração com louvores contemporâneos, oração ao vivo e mensagens de fé.',
    badge: 'Rede Nacional'
  },
  {
    id: 'radio-93fm',
    name: 'Rádio 93 FM Gospel',
    location: 'Rio de Janeiro',
    frequency: '93.3 FM',
    streamUrl: 'https://shout25.crossradio.com.br:18006/1',
    description: 'Canções de celebração cristã, debates doutrinários respeitosos e mensagens abençoadoras 24 horas.',
    badge: 'Louvor 24 Horas'
  },
  {
    id: 'musical-fm',
    name: 'Rádio Musical FM',
    location: 'São Paulo',
    frequency: '105.7 FM',
    streamUrl: 'https://9176.brasilstream.com.br/stream',
    description: 'Música cristã de qualidade, pregações expositivas, debates bíblicos e edificação do povo de Deus.',
    badge: 'Debates & Louvor'
  },
  {
    id: 'mgt-gospel',
    name: 'Rádio MGT Gospel',
    location: 'Brasil / Web',
    frequency: 'Digital HD',
    streamUrl: 'https://cast.mgtradio.net/radio/8040/aac',
    description: 'Louvor congregacional ininterrupto, hinos clássicos da Harpa Cristã e adoração profunda.',
    badge: 'Adoração Contínua'
  },
  {
    id: 'atos-fm',
    name: 'Rádio Atos FM',
    location: 'Rede Cristã',
    frequency: 'Web & FM',
    streamUrl: 'https://s.bul.tec.br:8020/128',
    description: 'Emissora comprometida com a fidelidade bíblica, oração ao vivo e edificação dos lares cristãos.',
    badge: 'Fidelidade Bíblica'
  },
  {
    id: 'adore-fm',
    name: 'Rádio Adore FM',
    location: 'Maceió / Nordeste',
    frequency: '89.3 FM',
    streamUrl: 'https://03.painelstreaming.com.br:27014/stream',
    description: 'Louvores inspiradores, oração pastoral e reflexões bíblicas para transformar o seu dia.',
    badge: 'Oração & Paz'
  },
  {
    id: 'biblia-audio-web',
    name: 'Bíblia em Áudio Web',
    location: 'Nacional',
    frequency: '24h Bíblia Sagrada',
    streamUrl: 'https://stm3.voxhd.com.br:8062/stream',
    description: 'Transmissão contínua da Palavra de Deus narrada capítulo por capítulo, 24 horas por dia para meditação.',
    badge: 'Bíblia Narrada 24h'
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
    spotifyOrWebUrl: 'https://open.spotify.com/search/Cafe%20com%20Deus%20Pai%20Junior%20Rostirola',
    durationAvg: '15 – 20 min',
    coverEmoji: '☕',
    badge: 'Devocional Diário',
    episodes: [
      {
        id: 'cafe-ep-1',
        title: 'Começando o Dia no Altar da Graça',
        duration: '14 min',
        date: 'Hoje',
        verseRef: 'Lamentações 3:22-23',
        summary: 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as Suas misericórdias não têm fim; renovam-se a cada manhã.',
        audioText: 'Bem-vindo ao Café com Deus Pai. Hoje iniciamos o dia lembrando que as misericórdias do Senhor se renovam a cada manhã. Não importa o que você enfrentou ontem, a graça de Deus é suficiente para hoje. Respire fundo, entregue sua ansiedade nas mãos do Pai e caminhe debaixo do favor celestial.'
      },
      {
        id: 'cafe-ep-2',
        title: 'Cura Emocional e a Paternidade de Deus',
        duration: '18 min',
        date: 'Ontem',
        verseRef: 'Salmo 27:10',
        summary: 'Ainda que meu pai e minha mãe me desamparem, o Senhor me acolherá nos Seus braços de eterno amor.',
        audioText: 'Neste episódio meditamos sobre a cura que só a paternidade perfeita de Deus pode trazer. Muitas feridas foram abertas pelo desamparo humano, mas o Senhor nunca te abandona. Ele te conhece pelo nome e cuida de cada detalhe da sua história.'
      }
    ]
  },
  {
    id: 'pod-dois-dedos',
    title: 'Dois Dedos de Teologia',
    hostOrMinistry: 'Felipe Cruz e Teólogos Convidados',
    description: 'Teologia bíblica explicada com clareza, fidelidade textual e sem desvios teológicos. Exegese, apologética, ética cristã e sã doutrina para a Igreja.',
    theologicalFocus: 'Exegese Bíblica e Apologética Cristã',
    topics: ['Exegese Bíblica', 'Cosmovisão Bíblica', 'Sã Doutrina', 'História da Igreja'],
    spotifyOrWebUrl: 'https://open.spotify.com/search/Dois%20Dedos%20de%20Teologia',
    durationAvg: '45 – 60 min',
    coverEmoji: '📖',
    badge: 'Sã Doutrina',
    episodes: [
      {
        id: 'dd-ep-1',
        title: 'Como Ler a Bíblia Sem Cometer Heresias',
        duration: '48 min',
        date: 'Recente',
        verseRef: '2 Timóteo 2:15',
        summary: 'Princípios fundamentais de hermenêutica bíblica: contexto histórico, gênero literário e a analogia da fé.',
        audioText: 'Neste episódio do Dois Dedos de Teologia, analisamos por que o texto fora do contexto é pretexto para heresia. Aprenda a examinar as Escrituras à luz do seu autor, destinatários originais e a harmonia de todo o conselho de Deus em Cristo Jesus.'
      },
      {
        id: 'dd-ep-2',
        title: 'Apologética Cristã: Defendendo a Fé com Mansidão',
        duration: '52 min',
        date: 'Destaque',
        verseRef: '1 Pedro 3:15',
        summary: 'Respostas fundamentadas para os questionamentos contemporâneos da cultura à fé cristã.',
        audioText: 'Como responder aos céticos e defender a veracidade das Escrituras sem perder a graça e a mansidão cristã? Exploramos argumentos históricos sobre a ressurreição corporal de Jesus Cristo e a inerrância bíblica.'
      }
    ]
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
    badge: 'Cristocêntrico',
    episodes: [
      {
        id: 've-ep-1',
        title: 'A Cruz de Cristo Como Centro de Toda a Teologia',
        duration: '42 min',
        date: 'Recente',
        verseRef: '1 Coríntios 2:2',
        summary: 'Porque decidi nada saber entre vós, senão a Jesus Cristo e este crucificado.',
        audioText: 'Uma mensagem expositiva profunda sobre a substituição vicária de Jesus no Calvário. Quando a cruz é o centro, a vaidade humana desmorona e o amor soberano de Deus triunfa sobre todo pecado e culpa.'
      }
    ]
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
    badge: 'Oficial IMW',
    episodes: [
      {
        id: 'imw-ep-1',
        title: 'O Fogo de Nova Friburgo: As Raízes da IMW em 1967',
        duration: '38 min',
        date: 'Histórico',
        verseRef: 'Habacuque 3:2',
        summary: 'A história emocionante de como o Espírito Santo desceu com dons de poder e línguas estranhas nos pioneiros da IMW.',
        audioText: 'Ouça o relato oficial dos dias de oração em Nova Friburgo em janeiro de 1967. O pastor Dorival Beppu e os irmãos pioneiros foram batizados com o Espírito Santo, acendendo uma chama pentecostal de santidade e missões que se espalhou pelo Brasil e pelas nações.'
      }
    ]
  },
  {
    id: 'pod-teologia-vida',
    title: 'Teologia para a Vida',
    hostOrMinistry: 'Estudos Bíblicos Pastorais',
    description: 'Como aplicar os princípios inerrantes da Palavra de Deus nos dilemas práticos da família, casamento, finanças, luto, ansiedade e perseverança na santidade.',
    theologicalFocus: 'Aconselhamento Bíblico Pastoral',
    topics: ['Família Cristã', 'Crescimento Espiritual', 'Aconselhamento', 'Cura da Alma'],
    spotifyOrWebUrl: 'https://open.spotify.com/search/Teologia%20para%20a%20Vida%20pastoral',
    durationAvg: '25 – 35 min',
    coverEmoji: '🕊',
    badge: 'Vida Cristã',
    episodes: [
      {
        id: 'tv-ep-1',
        title: 'Paz no Casamento e no Lar à Luz de Efésios 5',
        duration: '32 min',
        date: 'Recente',
        verseRef: 'Efésios 5:21-25',
        summary: 'A mutualidade, o respeito e a imitação do amor sacrificial de Cristo na edificação do lar cristão.',
        audioText: 'Como construir uma família sólida em tempos de desconstrução moral? Meditamos na exortação paulina sobre o amor sacrificial dos esposos e o respeito mútuo, refletindo a união de Cristo com a Sua noiva, a Igreja.'
      }
    ]
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
    badge: 'Cosmovisão',
    episodes: [
      {
        id: 'bt-ep-1',
        title: 'O Cristão e o Trabalho: Santificando a Segunda-Feira',
        duration: '55 min',
        date: 'Recente',
        verseRef: 'Colossenses 3:23-24',
        summary: 'A dignidade do trabalho e como exercer sua vocação profissional como culto racional a Deus.',
        audioText: 'Tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens. Exploramos o conceito de vocação cristã e sacerdócio universal de todos os crentes na sociedade contemporânea.'
      }
    ]
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
    badge: 'Supremacia de Cristo',
    episodes: [
      {
        id: 'dg-ep-1',
        title: 'A Maior Alegria da Alma é Conhecer a Deus',
        duration: '22 min',
        date: 'Destaque',
        verseRef: 'Filipenses 3:8',
        summary: 'Considero tudo como perda, pela excelência do conhecimento de Cristo Jesus, meu Senhor.',
        audioText: 'Descubra a liberdade de encontrar a maior satisfação da sua vida em Deus. Quando Cristo é o nosso maior tesouro, o pecado perde o seu encanto enganoso e nossa adoração torna-se autêntica e inabalável.'
      }
    ]
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
    badge: 'Clássico da Fé',
    episodes: [
      {
        id: 'sd-ep-1',
        title: 'Santo, Santo, Santo: A Visão de Isaías no Templo',
        duration: '36 min',
        date: 'Clássico',
        verseRef: 'Isaías 6:1-8',
        summary: 'O encontro transformador de Isaías com a majestade transcendente do Senhor assentado sobre um alto e sublime trono.',
        audioText: 'Ao contemplarmos a santidade divina, nossa resposta imediata é o reconhecimento da nossa fragilidade. Mas Deus provê a brasa viva do altar da expiação para purificar os nossos lábios e nos enviar à Sua seara.'
      }
    ]
  }
];
