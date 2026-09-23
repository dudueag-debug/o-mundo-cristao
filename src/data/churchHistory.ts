export interface ChurchHistoryPeriod {
  id: string;
  era: string;
  title: string;
  century: string;
  summary: string;
  keyFigures: string[];
  keyEvents: string[];
  significance: string;
}

export const CHURCH_HISTORY_PERIODS: ChurchHistoryPeriod[] = [
  {
    id: 'era-apostolica',
    era: 'Igreja Primitiva',
    century: 'Século I - III d.C.',
    title: 'A Era Apostólica & os Mártires',
    summary: 'O nascimento da Igreja em Pentecostes, a pregação audaciosa dos apóstolos por todo o Império Romano, a perseguição sob os imperadores e a fidelidade heroica dos mártires.',
    keyFigures: ['Apóstolo Paulo', 'Apóstolo Pedro', 'Policarpo de Esmirna', 'Inácio de Antioquia', 'Justino Mártir'],
    keyEvents: [
      'Derramamento do Espírito Santo no Dia de Pentecostes (Atos 2)',
      'Concílio de Jerusalém (Atos 15) estabelecendo a graça para os gentios',
      'Perseguições sob Nero (64 d.C.) e Domiciano',
      'Destruição de Jerusalém pelos romanos (70 d.C.)',
      'Difusão subterrânea do cristianismo pelas rotas romanas'
    ],
    significance: 'Demonstrou que o Evangelho triunfa sobre a força do maior império da época não pela espada, mas pelo poder do Espírito e o testemunho do sangue dos mártires ("O sangue dos mártires é a semente da Igreja", Tertuliano).'
  },
  {
    id: 'era-dos-concilios',
    era: 'Pais da Igreja & Concílios',
    century: 'Século IV - VI d.C.',
    title: 'A Definição da Ortodoxia Cristã',
    summary: 'Com o fim das perseguições e o Édito de Milão (313 d.C.), a Igreja enfrentou perigosas heresias sobre a divindade de Cristo e a Trindade, definindo os credos fundamentais da fé.',
    keyFigures: ['Atanásio de Alexandria', 'Agostinho de Hipona', 'João Crisóstomo', 'Jerônimo (Vulgata Latina)'],
    keyEvents: [
      '313 d.C. - Édito de Milão concede liberdade religiosa aos cristãos',
      '325 d.C. - Concílio de Nicéia afirma que Cristo é verdadeiro Deus, da mesma substância do Pai',
      '381 d.C. - Concílio de Constantinopla ratifica a divindade do Espírito Santo',
      '451 d.C. - Concílio de Calcedônia define as duas naturezas de Cristo (verdadeiro Deus e verdadeiro Homem)'
    ],
    significance: 'Estabeleceu as bases sólidas da teologia trinitária e cristológica que unem todas as igrejas cristãs bíblicas até os dias de hoje.'
  },
  {
    id: 'reforma-protestante',
    era: 'A Reforma Protestante',
    century: 'Século XVI (1517 em diante)',
    title: 'O Resgate das Escrituras e da Salvação pela Fé',
    summary: 'Após séculos de desvios eclesiásticos e comércio de indulgências, os reformadores convocaram a Igreja de volta à Palavra de Deus e à pura graça redentora de Jesus.',
    keyFigures: ['Martinho Lutero', 'João Calvino', 'Ulrico Zuínglio', 'William Tyndale', 'Filipe Melâncton'],
    keyEvents: [
      '31 de Outubro de 1517 - Lutero afixa as 95 Teses na porta da Igreja do Castelo de Wittenberg',
      '1521 - Dieta de Worms ("Minha consciência é cativa da Palavra de Deus")',
      'Tradução da Bíblia para o vernáculo (alemão, inglês, francês) para o povo comum',
      'Formulação dos 5 Solas da Reforma'
    ],
    significance: 'Resgatou a centralidade das Escrituras (Sola Scriptura), a salvação unicamente pela graça (Sola Gratia) mediante a fé (Sola Fide), em Cristo Jesus (Solus Christus), para a glória exclusiva de Deus (Soli Deo Gloria).'
  },
  {
    id: 'arminio-e-graça',
    era: 'A Questão da Graça',
    century: 'Século XVII (1609-1618)',
    title: 'Jacobus Arminius e a Universalidade do Amor Divino',
    summary: 'O teólogo holandês Jacobus Arminius defendeu vigorosamente que Deus deseja genuinamente a salvação de todos os seres humanos e que Cristo morreu por toda a humanidade.',
    keyFigures: ['Jacobus Arminius', 'Simon Episcopius', 'Os Remonstrantes'],
    keyEvents: [
      'Arminius reexamina Romanos e conclui que a graça divina é generosa e universal',
      '1610 - Apresentação dos 5 Artigos dos Remonstrantes',
      'Defesa de que a presciência divina não anula a responsabilidade moral humana',
      'Abertura das bases que mais tarde fundamentariam o Avivamento Metodista'
    ],
    significance: 'Forneceu as bases teológicas de que a cruz de Cristo é suficiente para o mundo inteiro, restaurando a esperança viva de que todo aquele que crer será salvo.'
  },
  {
    id: 'avivamento-wesleyano',
    era: 'O Avivamento Metodista',
    century: 'Século XVIII (1738 em diante)',
    title: 'O Fogo de Deus na Grã-Bretanha e no Mundo',
    summary: 'Numa Inglaterra degradada moralmente pela Revolução Industrial, Deus levantou John e Charles Wesley e George Whitefield para pregar nas ruas, campos e minas de carvão.',
    keyFigures: ['John Wesley', 'Charles Wesley (o poeta do Evangelho)', 'George Whitefield', 'Susanna Wesley'],
    keyEvents: [
      '1729 - Criação do Clube Santo em Oxford',
      '24 de Maio de 1738 - O coração estranhamente aquecido de John Wesley na Rua Aldersgate',
      'Início das pregações ao ar livre perante dezenas de milhares de operários',
      'Organização de "Classes" e "Sociedades" para discipulado mútuo sistemático',
      'Criação de escolas, farmácias populares e luta incansável pela abolição da escravatura'
    ],
    significance: 'Historiadores concordam que o avivamento wesleyano não apenas salvou milhões de almas, mas poupou a Inglaterra de uma revolução sangrenta e estabeleceu o padrão de discipulado em pequenos grupos e santidade ativa no mundo.'
  },
  {
    id: 'protestantismo-brasil',
    era: 'A Fé Evangélica no Brasil',
    century: 'Século XIX - XX',
    title: 'Os Pioneiros e a Expansão em Solo Brasileiro',
    summary: 'A chegada corajosa dos primeiros missionários protestantes que enfrentaram preconceito, trouxeram escolas, hospitais e a Palavra de Deus para o povo brasileiro.',
    keyFigures: ['Robert Kalley (1855)', 'Ashbel Green Simonton (1859)', 'Junius Newman (1867)', 'John James Ransom (1876)'],
    keyEvents: [
      '1855 - Chegada do médico escocês Robert Kalley no Rio de Janeiro (Igreja Congregacional)',
      '1859 - Fundação da Igreja Presbiteriana no Brasil',
      '1867/1876 - Chegada dos pioneiros metodistas em Santa Bárbara d\'Oeste e Rio de Janeiro',
      '1881 - Estabelecimento pioneiro dos Batistas em Salvador e São Paulo',
      '1910/1911 - Surgimento dos primeiros movimentos pentecostais em solo nacional',
      '1967 - Fundação da Igreja Metodista Wesleyana em Nova Friburgo/RJ'
    ],
    significance: 'O Evangelho fincou raízes profundas no coração do povo brasileiro, transformando vidas através do ensino bíblico, da música sacra e do poder do Espírito Santo.'
  }
];
