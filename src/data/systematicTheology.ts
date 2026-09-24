export interface TheologyArticle {
  id: string;
  title: string;
  scriptureReferences: string[];
  summary: string;
  historicalView: string;
  wesleyanPerspective: string;
  pastoralApplication: string;
}

export interface SystematicTheologyModule {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
  iconName: string;
  articles: TheologyArticle[];
}

export const SYSTEMATIC_THEOLOGY_MODULES: SystematicTheologyModule[] = [
  {
    id: 'teologia-propria',
    category: 'Doutrina de Deus',
    title: 'Teologia Própria & Santíssima Trindade',
    subtitle: 'A autoexistência, soberania, atributos divinos e o mistério da Trindade',
    badge: 'Fundamental',
    color: 'from-amber-700 to-amber-950',
    iconName: 'Crown',
    articles: [
      {
        id: 'tp-1',
        title: 'A Natureza e Atributos de Deus (Incomunicáveis e Comunicáveis)',
        scriptureReferences: ['Êxodo 3:14', 'Salmo 90:2', '1 Timóteo 1:17', '1 João 4:8'],
        summary: 'Deus é Espírito infinito, eterno, autoexistente e imutável. Seus atributos incomunicáveis (asseidade, eternidade, onipresença, onisciência e onipotência) pertencem somente a Ele. Seus atributos comunicáveis (santidade, justiça, amor, misericórdia e verdade) são refletidos, por Sua graça, no ser humano redimido.',
        historicalView: 'Desde os Pais da Igreja (Atanásio, Agostinho) até os reformadores, a teologia cristã confessa que Deus não depende de coisa alguma para existir, sendo a fonte de todo ser e bondade.',
        wesleyanPerspective: 'Para John Wesley, o atributo que mais glorifica e define o coração divino é o Amor Santo: Deus não é uma força fria e distante, mas o Pai amoroso que anseia pela salvação de todos os Seus filhos.',
        pastoralApplication: 'Conhecer os atributos de Deus livra o cristão da idolatria de criar um Deus à sua própria imagem, trazendo descanso na providência e reverência no culto diário.'
      },
      {
        id: 'tp-2',
        title: 'A Santíssima Trindade: Um só Deus em Três Pessoas',
        scriptureReferences: ['Mateus 28:19', '2 Coríntios 13:14', 'João 1:1-3', 'Gênesis 1:26'],
        summary: 'Há um único Deus vivo e verdadeiro, subsistindo eternamente em três Pessoas coiguais, coeternas e consubstanciais: o Pai, o Filho e o Espírito Santo.',
        historicalView: 'Definida nos Concílios de Niceia (325 d.C.) e Constantinopla (381 d.C.) contra o arianismo e o sabelianismo, preservando a divindade plena de Cristo e do Consolador.',
        wesleyanPerspective: 'A comunhão eterna de amor entre as três Pessoas divinas é o padrão da Igreja: somos acolhidos na família de Deus para vivermos em amor fraternal e santidade perfeita.',
        pastoralApplication: 'A oração cristã é trinitária: oramos ao Pai, pelos méritos e mediação do Filho Jesus, no poder e gemidos inextinguíveis do Espírito Santo.'
      }
    ]
  },
  {
    id: 'cristologia',
    category: 'A Pessoa de Cristo',
    title: 'Cristologia: A Divindade & Humanidade de Jesus',
    subtitle: 'A união hipostática, Seus ofícios profético, sacerdotal e régio, e a expiação',
    badge: 'Cristocêntrico',
    color: 'from-rose-800 to-stone-950',
    iconName: 'Cross',
    articles: [
      {
        id: 'cr-1',
        title: 'A União Hipostática: 100% Deus e 100% Homem',
        scriptureReferences: ['João 1:14', 'Filipenses 2:5-11', 'Colossenses 2:9', 'Hebreus 4:15'],
        summary: 'Em Jesus Cristo, a natureza divina e a natureza humana estão unidas de forma perfeita, inseparável, indivisível e sem confusão em uma única Pessoa (União Hipostática).',
        historicalView: 'O Credo de Calcedônia (451 d.C.) estabeleceu os limites bíblicos: Cristo não é metade Deus e metade homem, nem Sua divindade absorveu Sua humanidade.',
        wesleyanPerspective: 'Wesley enfatizava que, sendo verdadeiramente homem, Jesus compreende todas as nossas dores e fraquezas; sendo verdadeiramente Deus, Seu sangue possui valor infinito para expiar os pecados de toda a humanidade.',
        pastoralApplication: 'Podemos nos aproximar com confiança do trono da graça, pois temos um Sumo Sacerdote que se compadece intimamente de nossas lutas e intercede por nós.'
      },
      {
        id: 'cr-2',
        title: 'A Expiação Universal e Substitutiva na Cruz',
        scriptureReferences: ['Isaías 53:4-6', '1 João 2:2', '1 Timóteo 2:4-6', 'Hebreus 2:9'],
        summary: 'Cristo morreu vicariamente no lugar dos pecadores. A Sua morte satisfez a justiça divina e abriu a porta do perdão e da reconciliação com o Pai para todo aquele que crê.',
        historicalView: 'A Reforma Protestante resgatou a doutrina da substituição penal. A vertente arminiana demonstrou nas Escrituras que o valor do sacrifício de Jesus foi universal e ilimitado em alcance.',
        wesleyanPerspective: 'O brado wesleyano: "Graça para todos, graça livre, graça transbordante!". Nenhum pecador está predestinado à perdição por falta de sangue no Calvário.',
        pastoralApplication: 'O pregador do Evangelho pode olhar nos olhos de qualquer ser humano e afirmar com convicção apostólica: "Jesus Cristo morreu por você e deseja te salvar hoje!".'
      }
    ]
  },
  {
    id: 'pneumatologia',
    category: 'O Espírito Santo',
    title: 'Pneumatologia & O Revestimento de Poder',
    subtitle: 'A Pessoa do Espírito, a habitação interior, o fruto e a contemporaneidade dos dons',
    badge: 'Pentecostal/Wesleyano',
    color: 'from-amber-600 to-stone-900',
    iconName: 'Flame',
    articles: [
      {
        id: 'pn-1',
        title: 'A Pessoa e Obra do Espírito Santo',
        scriptureReferences: ['João 14:16-17', 'João 16:7-14', 'Romanos 8:14-16', 'Efésios 1:13-14'],
        summary: 'O Espírito Santo não é uma energia ou força impessoal, mas a Terceira Pessoa da Trindade: Ele pensa, sente, fala, ensina, guia, intercede e pode ser entristecido.',
        historicalView: 'Desde o Pentecostes, a Igreja vive na Dispensação do Espírito. Os movimentos de avivamento sempre foram marcados pelo redescobrimento da presença viva do Consolador.',
        wesleyanPerspective: 'John Wesley ensinava o Testemunho do Espírito (Witness of the Spirit): o Espírito Santo comunica diretamente ao espírito do crente a certeza bendita de que ele é filho de Deus.',
        pastoralApplication: 'A vida cristã não pode ser vivida no esforço da carne. Dependemos diariamente da oração, da sensibilidade à Sua voz e do enchimento do Espírito.'
      },
      {
        id: 'pn-2',
        title: 'O Batismo no Espírito Santo e os Dons Espirituais na IMW',
        scriptureReferences: ['Atos 1:8', 'Atos 2:1-4', '1 Coríntios 12:4-11', '1 Coríntios 14:1'],
        summary: 'O revestimento de poder prometido por Jesus para a proclamação do Evangelho com ousadia e sinais que confirmam a Palavra.',
        historicalView: 'A Igreja Metodista Wesleyana nasceu em 1967 exatamente pela junção bendita da teologia wesleyana de santidade com o despertamento dos dons espirituais carismáticos.',
        wesleyanPerspective: 'Santidade de vida e poder do Espírito Santo andam de mãos dadas. Dons sem amor e santidade tornam-se barulho; mas poder com pureza incendeia o mundo.',
        pastoralApplication: 'A congregação deve buscar os dons com fervor e ordem bíblica, exercitando-os na evangelização, oração por enfermos e libertação espiritual.'
      }
    ]
  },
  {
    id: 'soteriologia',
    category: 'A Doutrina da Salvação',
    title: 'Soteriologia: A Ordem da Salvação (Ordo Salutis)',
    subtitle: 'Graça preveniente, justificação pela fé, novo nascimento e inteira santificação',
    badge: 'Coração Wesleyano',
    color: 'from-emerald-700 to-stone-950',
    iconName: 'Sparkles',
    articles: [
      {
        id: 'so-1',
        title: 'A Graça Preveniente: A Iniciativa Sempre é de Deus',
        scriptureReferences: ['João 1:9', 'Tito 2:11', 'Romanos 2:4', 'Jeremias 31:3'],
        summary: 'A graça divina que vai adiante de todo esforço humano. Porque o homem estava morto em seus delitos e pecados, Deus toma a santa iniciativa de iluminar sua consciência e libertar sua vontade para crer.',
        historicalView: 'Contraponto clássico entre o pelagianismo (que nega a necessidade da graça) e o determinismo absoluto. A síntese armínio-wesleyana coloca a graça divina no centro sem anular a responsabilidade moral humana.',
        wesleyanPerspective: 'A salvação é 100% por graça, do começo ao fim. Ninguém pode se gloriar de ter escolhido a Deus por sabedoria própria; foi a graça que primeiro bateu à porta.',
        pastoralApplication: 'Traz grande conforto ao evangelismo: quando compartilhamos a fé com alguém, sabemos que o Espírito Santo já estava operando naquela vida antes de chegarmos.'
      },
      {
        id: 'so-2',
        title: 'Justificação pela Fé e Regeneração (Novo Nascimento)',
        scriptureReferences: ['Romanos 5:1', '2 Coríntios 5:17', 'João 3:3-5', 'Gálatas 2:16'],
        summary: 'A justificação é o que Deus faz POR NÓS (perdão judicial da culpa); a regeneração é o que Deus faz EM NÓS (transformação do coração e nova vida interior).',
        historicalView: 'O grande pilar da Reforma Protestante articulado por Paulo: o justo viverá da fé.',
        wesleyanPerspective: 'Wesley dizia: "A justificação nos devolve o favor de Deus; o novo nascimento restaura em nós a imagem de Deus". Ambas acontecem no mesmo instante da conversão.',
        pastoralApplication: 'Gera paz profunda de consciência: não há mais condenação para quem está em Cristo Jesus.'
      },
      {
        id: 'so-3',
        title: 'Inteira Santificação ou Perfeição Cristã',
        scriptureReferences: ['1 Tessalonicenses 5:23-24', 'Mateus 5:48', 'Hebreus 12:14', '1 João 1:7-9'],
        summary: 'A obra do Espírito Santo que purifica o coração de todo pecado inato e enche o crente com o amor perfeito a Deus e ao próximo.',
        historicalView: 'A contribuição distintiva do Metodismo para a história da teologia universal.',
        wesleyanPerspective: 'Não é infalibilidade nem ausência de fraquezas físicas, mas a pureza de intenções governada unicamente pelo amor de Cristo.',
        pastoralApplication: 'Desafia a Igreja a não se conformar com uma vida cristã medíocre ou derrotada pelo pecado, mas a buscar a plenitude da comunhão com o Senhor.'
      }
    ]
  },
  {
    id: 'escatologia',
    category: 'As Últimas Coisas',
    title: 'Escatologia Bíblica: A Bendita Esperança',
    subtitle: 'A volta gloriosa de Cristo, a ressurreição dos mortos e a Nova Jerusalém',
    badge: 'Esperança Bendita',
    color: 'from-sky-800 to-stone-950',
    iconName: 'Compass',
    articles: [
      {
        id: 'es-1',
        title: 'A Segunda Vinda de Jesus em Glória e Majestade',
        scriptureReferences: ['Tito 2:13', 'Atos 1:11', '1 Tessalonicenses 4:16-17', 'Apocalipse 1:7'],
        summary: 'O retorno visível, corporal e triunfante do Senhor Jesus Cristo para julgar os vivos e os mortos, recompensar Seus servos e inaugurar o Seu reino eterno.',
        historicalView: 'Artigo essencial do Credo Apostólico e de todas as confissões históricas da cristandade.',
        wesleyanPerspective: 'A esperança da vinda de Cristo não produz alienação do mundo, mas zelo evangelístico ardente e vigilância em santidade.',
        pastoralApplication: 'Consolo nos momentos de luto e perseguição: a história humana tem um destino glorioso guardado pelas mãos do Cordeiro.'
      },
      {
        id: 'es-2',
        title: 'Novos Céus e Nova Terra: O Triunfo Definitivo da Criação',
        scriptureReferences: ['Apocalipse 21:1-5', 'Isaías 65:17', '2 Pedro 3:13', 'Romanos 8:19-21'],
        summary: 'Deus fará novas todas as coisas. A morte, a dor, o luto e as lágrimas serão banidos para sempre, e Deus habitará para sempre face a face com o Seu povo.',
        historicalView: 'A consumação escatológica não é a destruição da matéria, mas a redenção e renovação cósmica total.',
        wesleyanPerspective: 'John Wesley, em seu sermão "A Nova Criação", vislumbrava um universo plenamente restaurado, onde até os animais e a natureza participariam da bênção do Criador.',
        pastoralApplication: 'Nos dá certeza e alegria inabaláveis: a vitória final pertence ao Senhor Jesus Cristo!'
      }
    ]
  }
];
