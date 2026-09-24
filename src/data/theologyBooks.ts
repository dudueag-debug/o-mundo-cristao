export interface BookChapter {
  id: string;
  number: number;
  title: string;
  content: string[];
}

export interface TheologyBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  year: string;
  category: 'Wesleyana' | 'Reforma' | 'Patrística' | 'Arminiana' | 'Doutrina IMW';
  coverBg: string;
  description: string;
  chapters: BookChapter[];
}

export const THEOLOGY_BOOKS: TheologyBook[] = [
  {
    id: 'perfeicao-crista-wesley',
    title: 'Um Chamado Simples à Perfeição Cristã',
    subtitle: 'A doutrina wesleyana da santidade de coração e de vida',
    author: 'John Wesley',
    year: '1777',
    category: 'Wesleyana',
    coverBg: 'from-amber-800 to-amber-950',
    description: 'A obra-prima de John Wesley sobre a plenitude do amor divino que purifica as intenções humanas e governa a alma.',
    chapters: [
      {
        id: 'cap-1',
        number: 1,
        title: 'Introdução e Primeiros Pensamentos sobre a Santidade',
        content: [
          'No ano de 1725, aos vinte e dois anos de idade, conheci os escritos do Bispo Taylor sobre a Santa Vida e a Santa Morte. Ao lê-los, fiquei profundamente impactado pela parte que trata da pureza de intenção.',
          'Imediatamente percebi que a intenção pura governa todos os atos: onde o olho da alma é simples e voltado para Deus, todo o corpo estará cheio de luz.',
          'Em 1726 deparei-me com "O Tratado da Perfeição Cristã" de William Law. Estas páginas me convenceram mais do que nunca da impossibilidade absoluta de ser apenas meio cristão. Decidi, pela graça de Deus, consagrar-Lhe todo o meu ser: alma, corpo, dons e tempo.',
          'A perfeição cristã nada mais é do que o amor supremo a Deus e o amor sincero a todos os homens, governando o coração de tal forma que nenhum afeto contrário seja tolerado.'
        ]
      },
      {
        id: 'cap-2',
        number: 2,
        title: 'O que a Perfeição Cristã NÃO É e o que ELA É',
        content: [
          'Para que ninguém tropece por falta de clareza, afirmo primeiro o que a perfeição cristã NÃO É:',
          '1. Não é perfeição de conhecimento: enquanto estivermos na carne, conheceremos em parte. Não somos oniscientes nem livres de ignorância humana.',
          '2. Não é imunidade a erros de julgamento: até o melhor dos santos pode julgar erroneamente um fato ou uma pessoa.',
          '3. Não é libertação das fraquezas físicas, fadigas ou tentações: o próprio Senhor Jesus foi tentado em tudo, embora sem pecado.',
          'O que ela É, então? É a pureza de motivos recebida pela fé. É amar a Deus com todo o coração, mente, alma e forças, e ao próximo como a si mesmo. É ter o mesmo sentimento que houve em Cristo Jesus.'
        ]
      },
      {
        id: 'cap-3',
        number: 3,
        title: 'Como Buscar e Reter a Inteira Santificação',
        content: [
          'A santificação total é recebida pela fé, exatamente como a justificação. Ela é dom gratuito da cruz de Cristo.',
          'Ela pode ser concedida gradualmente ou num instante, mas em qualquer caso deve ser mantida com constante vigilância e oração.',
          'Quem pensa que está de pé, cuide para não cair. A alma verdadeiramente santificada é a mais humilde de todas as criaturas, pois reconhece que cada suspiro de amor santo depende inteiramente do Espírito de Deus.'
        ]
      }
    ]
  },
  {
    id: 'sermoes-padrao-wesley',
    title: 'Sermões Padrão: A Salvação pela Fé & O Quase Cristão',
    subtitle: 'As mensagens que desencadearam o grande despertamento',
    author: 'John Wesley',
    year: '1738',
    category: 'Wesleyana',
    coverBg: 'from-orange-800 to-stone-950',
    description: 'Os dois sermões fundamentais pregados perante a Universidade de Oxford expondo a diferença entre religiosidade aparente e a fé justificadora viva.',
    chapters: [
      {
        id: 'sem-1',
        number: 1,
        title: 'Sermão 1: A Salvação pela Fé (Efésios 2:8)',
        content: [
          '"Pela graça sois salvos, mediante a fé; e isto não vem de vós; é dom de Deus." Todas as bênçãos que Deus concedeu ao homem fluem unicamente de Sua pura graça e imerecido favor.',
          'Não temos nenhum direito nem mérito a apresentar perante o trono da justiça celeste. Se somos alimentados, vestidos e preservados, é graça. Se somos perdoados e adotados como filhos, é graça soberana.',
          'Que fé é esta pela qual somos salvos? Não é a mera fé histórica dos pagãos, nem a fé racional dos teólogos frios, nem mesmo a fé dos demônios (que creem e tremem). É a confiança filial, viva e amorosa nos méritos da morte e ressurreição de Cristo.',
          'Quem crê é nascido de Deus e liberto da condenação e do domínio do pecado.'
        ]
      },
      {
        id: 'sem-2',
        number: 2,
        title: 'Sermão 2: O Quase Cristão (Atos 26:28)',
        content: [
          '"Por pouco me persuades a me fazer cristão", disse Agripa a Paulo. Quantos em nossos dias não passam de "quase cristãos"?',
          'O quase cristão pratica a honestidade exterior, evita o roubo, o perjúrio e a violência; é pontual nos cultos públicos, ajuda os pobres e jejua.',
          'Contudo, o quase cristão ainda não ama a Deus de todo o coração. O seu serviço é motivado pelo dever, pelo medo do inferno ou pelo elogio dos homens.',
          'O verdadeiro cristão, em contrapartida, é governado pelo amor. Ele não busca apenas o Céu por medo do castigo, mas ama a Deus porque Deus o amou primeiro.'
        ]
      }
    ]
  },
  {
    id: 'declaracao-arminio',
    title: 'Declaração de Sentimentos sobre a Graça Divina',
    subtitle: 'A defesa bíblica da universalidade do amor e da presciência de Deus',
    author: 'Jacobus Arminius',
    year: '1608',
    category: 'Arminiana',
    coverBg: 'from-blue-900 to-stone-950',
    description: 'O texto definitivo onde Armínio expõe aos Estados da Holanda as razões de sua fé na graça salvadora universal de Jesus Cristo.',
    chapters: [
      {
        id: 'arm-1',
        number: 1,
        title: 'A Graça e o Livre-Arbítrio Curado',
        content: [
          'Confesso que o homem em seu estado decaído é incapaz de pensar, desejar ou fazer qualquer bem espiritual por si mesmo. O livre-arbítrio natural está ferido e cativo do pecado.',
          'Contudo, a graça de Deus não é avarenta. Por meio do sacrifício universal de Jesus, Deus derrama Sua graça preveniente sobre toda a humanidade.',
          'A graça desperta a consciência, ilumina o entendimento e capacita a vontade a responder ao Evangelho. A salvação é 100% fruto da graça, mas o homem pode resistir ao Espírito Santo (como advertiu Estêvão em Atos 7:51).'
        ]
      },
      {
        id: 'arm-2',
        number: 2,
        title: 'A Vontade Salvífica Universal de Deus',
        content: [
          'Deus não criou homem algum para a destruição eterna por mero decreto arbitrário. Deus não tem prazer na morte do perverso, mas em que se converta e viva (Ezequiel 18:23).',
          'Cristo é a propiciação pelos nossos pecados, e não somente pelos nossos, mas pelos de todo o mundo (1 João 2:2).',
          'A eleição divina é fundamentada em Cristo Jesus: são eleitos todos aqueles que, pela graça capacitadora, creem e perseveram até o fim em Cristo.'
        ]
      }
    ]
  },
  {
    id: 'prefacio-romanos-lutero',
    title: 'Prefácio à Epístola aos Romanos',
    subtitle: 'O texto lido na Rua Aldersgate que aqueceu o coração de John Wesley',
    author: 'Martinho Lutero',
    year: '1522',
    category: 'Reforma',
    coverBg: 'from-stone-800 to-red-950',
    description: 'O prefácio de Lutero explicando os termos bíblicos "Lei", "Graça", "Fé" e "Justiça", que transformou para sempre a vida de John Wesley em 24 de maio de 1738.',
    chapters: [
      {
        id: 'lut-1',
        number: 1,
        title: 'O Verdadeiro Significado da Fé Viva',
        content: [
          'A fé não é aquela ilusão humana nem aquele pensamento sonhador que algumas pessoas consideram como tal.',
          'A fé é uma obra divina em nós, que nos transforma e nos faz renascer de Deus (João 1:13). Ela mata o velho Adão, torna-nos criaturas completamente diferentes de coração, mente e forças, e traz consigo o Espírito Santo.',
          'Oh, que coisa viva, ativa, poderosa e operosa é a fé! É impossível para ela não produzir continuamente boas obras.',
          'Ela nem sequer pergunta se há boas obras a fazer, mas antes que a pergunta seja formulada, ela já as realizou e está sempre agindo.'
        ]
      }
    ]
  },
  {
    id: 'doutrina-imw',
    title: 'Manual de Fé e Teologia da Igreja Metodista Wesleyana',
    subtitle: 'Princípios fundamentais, artigos de fé e missão bíblica',
    author: 'Colégio Episcopal da IMW',
    year: '1967 - Presente',
    category: 'Doutrina IMW',
    coverBg: 'from-amber-900 to-orange-950',
    description: 'As declarações fundamentais sobre as Escrituras, a Trindade, a Salvação pela Graça, os Dons Espirituais e a Missão de Nova Friburgo para o mundo.',
    chapters: [
      {
        id: 'imw-1',
        number: 1,
        title: 'Artigos Fundamentais de Religião da IMW',
        content: [
          'Artigo I: Cremos em um único Deus vivo, verdadeiro, eterno, infinito em poder, sabedoria e bondade, criador e sustentador de todas as coisas visíveis e invisíveis, manifesto em três Pessoas da mesma substância: Pai, Filho e Espírito Santo.',
          'Artigo II: Cremos na suficiência das Sagradas Escrituras para a salvação. Tudo o que não se lê nela nem por ela pode ser provado, não deve ser exigido de homem algum como artigo de fé.',
          'Artigo III: Cremos na justificação unicamente pela fé no sacrifício vicário de nosso Senhor Jesus Cristo na cruz do Calvário.',
          'Artigo IV: Cremos na atualidade e contemporaneidade do Batismo no Espírito Santo e na concessão dos dons espirituais para a edificação da Igreja e avivamento das nações.'
        ]
      },
      {
        id: 'imw-2',
        number: 2,
        title: 'A Missão Wesleyana no Século XXI',
        content: [
          'A Igreja Metodista Wesleyana existe para proclamar a totalidade do Evangelho: o amor salvador de Cristo, a santificação prática e o revestimento de poder do Espírito Santo.',
          'Nosso lema ecoa a visão de John Wesley: "O mundo é a nossa paróquia".',
          'Através da ação pastoral, evangelização nas ruas, pequenos grupos de oração e ação social, buscamos ser uma igreja missionária, bíblica e inflamada com o fogo do Céu.'
        ]
      }
    ]
  },
  {
    id: 'tesouro-de-davi-spurgeon',
    title: 'O Tesouro de Davi: O Senhor é Meu Pastor',
    subtitle: 'Comentário devocional e teológico nos Salmos da confiança',
    author: 'Charles H. Spurgeon',
    year: '1885',
    category: 'Reforma',
    coverBg: 'from-emerald-800 to-stone-950',
    description: 'A maior obra de Spurgeon, considerada a joia da literatura devocional, expondo versículo a versículo o refrigério da alma sob o pastoreio do Bom Pastor.',
    chapters: [
      {
        id: 'spurg-1',
        number: 1,
        title: 'Salmo 23: A Certeza Inabalável do Cuidado Divino',
        content: [
          '"O Senhor é o meu pastor; nada me faltará." Observem bem: o cristão não diz "O Senhor é o pastor do mundo", mas "o MEU pastor". Se Ele é meu, nenhuma necessidade real da minha alma ficará desatendida.',
          'Ele me faz repousar em pastos verdejantes. Não é apenas caminhar apressado, é descansar! A ovelha nunca deita enquanto tem fome ou medo. Jesus nos alimenta com a Sua Palavra até que nossa alma encontre santa quietude.',
          'Leva-me para junto das águas de descanso. Não águas turbulentas que assustam a ovelha frágil, mas ribeiros serenos da graça perdoadora.',
          'Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum: notem que é um "vale de sombra", não de substância mortal. A cruz de Cristo tirou a substância da morte, deixando aos salvos apenas a sua sombra passageira!'
        ]
      },
      {
        id: 'spurg-2',
        number: 2,
        title: 'Salmo 91: O Abrigo do Onipotente contra o Medo',
        content: [
          '"O que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente diz ao Senhor: Meu refúgio e meu baluarte". A fé verdadeira não faz visitas ocasionais a Deus; ela HABITA em Sua presença.',
          'Não temas o terror noturno nem a seta que voa de dia. O coração ancorado no amor do Pai sabe que nenhum dardo do maligno pode ultrapassar o escudo da verdade divina sem a permissão do Soberano.',
          'Caiam mil ao teu lado e dez mil à tua direita; tu não serás atingido. Deus é o escudo invisível de Seus pequeninos.'
        ]
      }
    ]
  },
  {
    id: 'confissoes-agostinho',
    title: 'Confissões: O Coração Inquieto Encontra a Graça',
    subtitle: 'A busca pela verdade, o arrependimento e a vitória do amor de Deus',
    author: 'Santo Agostinho de Hipona',
    year: '397 d.C.',
    category: 'Patrística',
    coverBg: 'from-indigo-900 to-stone-950',
    description: 'Um dos maiores clássicos espirituais de todos os tempos. O relato comovente da jornada de Agostinho das trevas intelectuais e morais para a luz radiante de Cristo.',
    chapters: [
      {
        id: 'agost-1',
        number: 1,
        title: 'Tu nos Criaste para Ti, ó Deus',
        content: [
          '"Grande és Tu, Senhor, e mui digno de louvor. Grande é o Teu poder e a Tua sabedoria não tem limites."',
          'Tu nos criaste para Ti, e o nosso coração vive inquieto enquanto não repousar em Ti.',
          'Quem me concederá repousar em Ti? Quem me dará que venhas ao meu coração e o inebries, para que eu esqueça as minhas mazelas e me abrace a Ti, meu único e verdadeiro Bem?',
          'Tarde Te amei, ó Beleza tão antiga e tão nova, tarde Te amei! Eis que estavas dentro de mim e eu Te buscava fora, deformado nas belas formas das coisas por Ti criadas. Chamaste-me com um grande brado e rompeste a minha surdez; brilhaste e dissipaste a minha cegueira!'
        ]
      }
    ]
  },
  {
    id: 'oracao-constante-wesley',
    title: 'Oração Constante & O Uso Sábio das Riquezas',
    subtitle: 'Sermões práticos sobre a disciplina espiritual e a mordomia cristã',
    author: 'John Wesley',
    year: '1780',
    category: 'Wesleyana',
    coverBg: 'from-amber-800 to-stone-950',
    description: 'As famosas instruções de Wesley sobre orar sem cessar e os três mandamentos econômicos do Reino: "Ganhe tudo o que puder, poupe tudo o que puder, doe tudo o que puder".',
    chapters: [
      {
        id: 'wes-or-1',
        number: 1,
        title: 'Orai sem Cessar: O Fôlego da Vida Cristã',
        content: [
          'A oração é o fôlego da alma. Assim como a vida biológica não sobrevive sem inspirar e expirar ar puro continuamente, a vida espiritual definha sem comunhão ininterrupta com o Céu.',
          'Orar sem cessar não significa passar vinte e quatro horas do dia de joelhos em um templo, mas manter o coração continuamente erguido para Deus em qualquer lugar: na oficina, no caminho, nas refeições e no leito.',
          'Deus nada faz na terra, para a redenção dos homens, a não ser em resposta à oração fervorosa de Seus filhos.'
        ]
      },
      {
        id: 'wes-or-2',
        number: 2,
        title: 'O Uso do Dinheiro no Reino de Deus',
        content: [
          'O dinheiro é um excelente servo, embora seja um péssimo mestre. O cristão deve observar três princípios dourados:',
          '1. Ganhe tudo o que puder: com trabalho honesto, integridade total, sem ferir seu corpo, mente ou a alma do próximo.',
          '2. Poupe tudo o que puder: livre-se do luxo vão, dos gastos tolos e do exibicionismo mundano.',
          '3. Doe tudo o que puder: tudo o que excede as necessidades sóbrias de sustento pertence aos pobres, aos doentes e à expansão do Reino de Deus nas nações.'
        ]
      }
    ]
  }
];

