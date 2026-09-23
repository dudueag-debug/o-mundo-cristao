export interface ChristianVideo {
  id: string;
  youtubeId: string;
  title: string;
  speakerOrAuthor: string;
  category: 'pregacoes' | 'teologia' | 'historia-imw' | 'louvores';
  duration: string;
  description: string;
  isCustom?: boolean;
}

export const INITIAL_CHRISTIAN_VIDEOS: ChristianVideo[] = [
  {
    id: 'vid-1',
    youtubeId: 'Ww5yS9wG2p8',
    title: 'A Vida de John Wesley e o Avivamento na Inglaterra',
    speakerOrAuthor: 'Documentário Histórico',
    category: 'teologia',
    duration: '52 min',
    description: 'Documentário aprofundado narrando a infância em Epworth, os dias em Oxford, a conversão na Rua Aldersgate e o avivamento metodista que transformou a Grã-Bretanha.'
  },
  {
    id: 'vid-2',
    youtubeId: 'b_HkR_k34_c',
    title: 'A Glória da Graça Preveniente e Santificadora',
    speakerOrAuthor: 'Estudo Teológico Wesleyano',
    category: 'teologia',
    duration: '38 min',
    description: 'Compreenda a visão armínio-wesleyana sobre a graça de Deus: como o Espírito Santo atrai o pecador e capacita a Igreja a viver em santidade prática.'
  },
  {
    id: 'vid-3',
    youtubeId: '6qG6uS8P6f4',
    title: 'História e Memória da Igreja Metodista Wesleyana (1967)',
    speakerOrAuthor: 'Voz Wesleyana & Pioneiros',
    category: 'historia-imw',
    duration: '45 min',
    description: 'A trajetória de fé iniciada em 5 de janeiro de 1967 em Nova Friburgo/RJ: o derramamento do Espírito Santo, os pastores pioneiros e a expansão missionária nacional.'
  },
  {
    id: 'vid-4',
    youtubeId: '2m6V4L9oU_c',
    title: 'O Poder da Oração que Prevalece e o Fogo de Deus',
    speakerOrAuthor: 'Pregação Inspiradora',
    category: 'pregacoes',
    duration: '41 min',
    description: 'Uma mensagem contundente sobre o altar de oração, a oração de intercessão e a busca incessante pela glória de Deus na vida da família e do ministério.'
  },
  {
    id: 'vid-5',
    youtubeId: 'a7b_k9W3j8M',
    title: 'Hinos Históricos da Fé Cristã & Harpa ao Vivo',
    speakerOrAuthor: 'Adoração Congregacional',
    category: 'louvores',
    duration: '29 min',
    description: 'Coletânea especial de hinos clássicos de Charles Wesley e da Harpa Cristã entoados com instrumentos acústicos e unção congregacional.'
  }
];
