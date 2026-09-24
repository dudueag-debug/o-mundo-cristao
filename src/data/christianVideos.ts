export interface ChristianVideo {
  id: string;
  youtubeId?: string;
  sourceType?: 'youtube' | 'local';
  localFileId?: string;
  localFileName?: string;
  localFileSize?: string;
  title: string;
  speakerOrAuthor: string;
  category: 'pregacoes' | 'teologia' | 'historia-imw' | 'louvores';
  duration: string;
  description: string;
  isCustom?: boolean;
}

export const INITIAL_CHRISTIAN_VIDEOS: ChristianVideo[] = [
  {
    id: 'vid-wesley-doc',
    youtubeId: 'WLBSFGC6jWs',
    title: 'A História de John Wesley - Documentário Histórico Oficial',
    speakerOrAuthor: 'Documentário Histórico e Biográfico',
    category: 'teologia',
    duration: '52 min',
    description: 'Documentário aprofundado narrando a infância em Epworth, os dias do Clube Santo em Oxford, o navio para a Geórgia, a conversão na Rua Aldersgate e o grande avivamento metodista que transformou a Grã-Bretanha e o mundo.'
  },
  {
    id: 'vid-wesley-filme',
    youtubeId: 'ShgD7zo-WSI',
    title: 'Wesley: Um Coração Transformado Pode Mudar o Mundo (Filme Completo)',
    speakerOrAuthor: 'Filme Cristão Biográfico',
    category: 'teologia',
    duration: '1h 57 min',
    description: 'A marcante produção cinematográfica baseada nos diários reais de John Wesley. Uma obra imperdível para entender a busca de Wesley pela paz com Deus, a experiência do coração aquecido e a santidade bíblica.'
  },
  {
    id: 'vid-quatro-homens',
    youtubeId: 'udXqftWZ6PY',
    title: 'Quatro Homens, Quatro Séculos: A Vida e o Avivamento de John Wesley',
    speakerOrAuthor: 'Série Histórica da Fé Cristã',
    category: 'teologia',
    duration: '42 min',
    description: 'Um estudo fascinante sobre como Deus levantou homens como John Wesley em épocas de frieza espiritual para incendiar a Igreja através da pregação do Evangelho aos pobres e da graça santificadora.'
  },
  {
    id: 'vid-imw-podcast',
    youtubeId: 'pf9sO1vbhkI',
    title: 'Podcast Vocação, Vida e Missão - Igreja Metodista Wesleyana',
    speakerOrAuthor: 'Igreja Metodista Wesleyana Oficial',
    category: 'historia-imw',
    duration: '48 min',
    description: 'Episódio especial sobre a identidade, a vocação pastoral e os desafios missionários da Igreja Metodista Wesleyana, destacando o legado pentecostal iniciado em 1967 em Nova Friburgo.'
  },
  {
    id: 'vid-imw-familia',
    youtubeId: 'TqLBlXSC3Pk',
    title: 'Família Wesleyana: História, Mover de Deus e Acolhimento',
    speakerOrAuthor: 'Voz Wesleyana & Comunhão',
    category: 'historia-imw',
    duration: '35 min',
    description: 'Uma mensagem pastoral calorosa sobre a comunhão, a doutrina da santidade e o amor fraterno que caracterizam a membresia e liderança da Igreja Metodista Wesleyana.'
  },
  {
    id: 'vid-wesley-animacao',
    youtubeId: 'bQeaRc91Q0g',
    title: 'John Wesley: Um Coração Aquecido pelo Amor de Deus',
    speakerOrAuthor: 'História Cristã Ilustrada',
    category: 'pregacoes',
    duration: '28 min',
    description: 'Narrativa didática e inspiradora sobre o poder da fé operante pelo amor. Ideal para compartilhar com jovens, adolescentes e classes de Escola Bíblica Dominical.'
  }
];
