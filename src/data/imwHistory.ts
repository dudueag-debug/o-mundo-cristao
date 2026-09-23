export interface IMWEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  badge?: string;
}

export interface IMWPioneer {
  name: string;
  role: string;
  contribution: string;
}

export const IMW_HISTORY_EVENTS: IMWEvent[] = [
  {
    year: '1960 - 1966',
    title: 'O Despertamento Espiritual nos Anos 60',
    location: 'Brasil (Rio de Janeiro e Minas Gerais)',
    badge: 'Avivamento',
    description: 'Um vigoroso movimento de avivamento espiritual começou a varrer diversas igrejas históricas no Brasil. Pastores e membros passaram a buscar intensamente os dons espirituais, o batismo no Espírito Santo e uma vida de oração contínua nas madrugadas.'
  },
  {
    year: '5 de Janeiro de 1967',
    title: 'Fundação da Igreja Metodista Wesleyana',
    location: 'Nova Friburgo - RJ',
    badge: 'Marco Histórico',
    description: 'Após tensões eclesiásticas decorrentes da manifestação dos dons espirituais carismáticos, um grupo abençoado de pastores e leigos reuniu-se no salão do Grêmio Teatral de Nova Friburgo (RJ). Nascia ali a Igreja Metodista Wesleyana, unindo a rica herança teológica de John Wesley ao fervor e poder do Espírito Santo.'
  },
  {
    year: '1967 - 1970',
    title: 'A Redação dos Primeiros Estatutos e Publicações',
    location: 'Rio de Janeiro - RJ',
    badge: 'Organização',
    description: 'A jovem denominação estabeleceu suas bases de fé: manutenção da doutrina wesleyana da santidade, a crença na contemporaneidade dos dons espirituais (1 Coríntios 12) e um chamado urgente à evangelização fervorosa. É lançado o jornal oficial Voz Wesleyana.'
  },
  {
    year: '1979',
    title: 'Criação do Seminário Teológico Wesleyano',
    location: 'Petrópolis & Rio de Janeiro',
    badge: 'Formação',
    description: 'Para capacitar obreiros, missionários e pastores com sólidas raízes bíblicas e doutrina wesleyana, consolidam-se os centros de treinamento teológico e missiológico da denominação.'
  },
  {
    year: 'Décadas de 80 e 90',
    title: 'Expansão Nacional e Novas Regiões',
    location: 'Todas as regiões do Brasil',
    badge: 'Crescimento',
    description: 'A IMW expande-se de forma acelerada por São Paulo, Espírito Santo, Minas Gerais, Região Sul, Nordeste, Centro-Oeste e Norte, organizando-se em Regiões Eclesiásticas com Superintendentes e Bispos Gerais dedicados ao pastoreio pastoral.'
  },
  {
    year: 'Século XXI',
    title: 'Expansão Missionária Internacional & Presente',
    location: 'América do Sul, Europa, África e Japão',
    badge: 'Missões Globais',
    description: 'A IMW tornou-se uma igreja transcultural, implantando igrejas em Portugal, Espanha, Inglaterra, Estados Unidos, Moçambique e em vários outros países, mantendo vivo o lema: "O mundo é a nossa paróquia".'
  }
];

export const IMW_PIONEERS: IMWPioneer[] = [
  {
    name: 'Pr. Dorival Beppu',
    role: 'Pastor Pioneiro & Primeiro Presidente do Concílio',
    contribution: 'Líder visionário de oração e sabedoria que conduziu com mansidão e coragem a transição e estabelecimento da denominação em Nova Friburgo.'
  },
  {
    name: 'Pr. Idelmício Cabral dos Santos',
    role: 'Pioneiro & Evangelista Fervoroso',
    contribution: 'Homem de oração e púlpito vibrante, pregador do avivamento que inspirou a juventude e os novos ministérios com paixão pelas almas.'
  },
  {
    name: 'Pr. Waldyr Miranda',
    role: 'Pioneiro & Mestre Bíblico',
    contribution: 'Dedicou-se à estruturação administrativa, teológica e à identidade wesleyana clássica nos primeiros anos formativos da igreja.'
  },
  {
    name: 'Pr. Gessé Teixeira de Carvalho',
    role: 'Pioneiro & Líder Eclesiástico',
    contribution: 'Contribuinte fundamental para a expansão pastoral e consolidação do corpo ministerial em todo o território nacional.'
  }
];

export const IMW_DISTINCTIVES = [
  {
    title: 'Herança Teológica Wesleyana',
    desc: 'Firmeza na autoridade das Escrituras, salvação pela graça mediante a fé, e busca constante pela santidade de coração e de vida.'
  },
  {
    title: 'Avivamento & Dons do Espírito Santo',
    desc: 'Crença convicta na plenitude do Espírito Santo, na oração de intercessão e na atualidade dos dons espirituais para a edificação da Igreja.'
  },
  {
    title: 'Vocação Missionária Incansável',
    desc: 'Visão de alcançar os povos não alcançados, plantar igrejas em comunidades carentes e enviar missionários aos confins da Terra.'
  },
  {
    title: 'Ação Social e Amor ao Próximo',
    desc: 'Compromisso com o cuidado dos necessitados, lares de acolhimento e assistência às famílias em vulnerabilidade.'
  }
];
