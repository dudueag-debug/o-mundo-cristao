export type PrecisionLevel = 
  | 'explicit'       // 🟢 BÍBLIA DIZ EXPLICITAMENTE
  | 'inference'      // 🔵 INFERÊNCIA RAZOÁVEL
  | 'theological'    // 🟡 INTERPRETAÇÃO TEOLÓGICA
  | 'tradition'      // 🟠 TRADIÇÃO CRISTÃ
  | 'uncertain';     // 🔴 INFORMAÇÃO INCERTA

export interface BiblicalWoman {
  id: string;
  name: string;
  originalName: string;
  transliteration: string;
  meaning: string;
  testament: 'AT' | 'NT';
  category: 'Matriarcas' | 'Juízas e Líderes' | 'Rainhas e Heroínas' | 'Profetisas' | 'Mulheres dos Evangelhos' | 'Igreja Primitiva' | 'Mulheres em Crise e Conflito';
  biblicalReferences: string[];
  family: {
    father?: string;
    mother?: string;
    spouse?: string;
    children?: string[];
    relatives?: string;
    precisionNote?: string;
  };
  historicalContext: {
    period: string;
    region: string;
    cultureAndCustoms: string;
    religiousContext: string;
    politicalContext?: string;
  };
  biblicalStory: string;
  virtuesAndTraits: {
    trait: string;
    biblicalEvidence: string;
  }[];
  errorsAndConflicts: {
    conflict: string;
    biblicalContext: string;
    biblicalAssessment: string;
  };
  theologicalSignificance: string;
  scholarlyInterpretations: string;
  wesleyanPerspective?: {
    theme: string;
    insight: string;
  };
  precisionClassification: {
    level: PrecisionLevel;
    rationale: string;
  };
}

export const PRECISION_CONFIG: Record<PrecisionLevel, {
  label: string;
  badgeClass: string;
  dotColor: string;
  description: string;
}> = {
  explicit: {
    label: 'BÍBLIA DIZ EXPLICITAMENTE',
    badgeClass: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60',
    dotColor: 'bg-emerald-500',
    description: 'Fato expressamente registrado no texto das Escrituras Sagradas com referência bíblica direta.'
  },
  inference: {
    label: 'INFERÊNCIA RAZOÁVEL',
    badgeClass: 'bg-blue-50 text-blue-800 dark:bg-blue-950/70 dark:text-blue-300 border-blue-300 dark:border-blue-700/60',
    dotColor: 'bg-blue-500',
    description: 'Conclusão lógica fundamentada no contexto geográfico, histórico, cultural ou linguístico das Escrituras.'
  },
  theological: {
    label: 'INTERPRETAÇÃO TEOLÓGICA',
    badgeClass: 'bg-amber-50 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border-amber-300 dark:border-amber-700/60',
    dotColor: 'bg-amber-500',
    description: 'Compreensão derivada de sistemas de doutrina bíblica, hermenêutica cristã e análise teológica.'
  },
  tradition: {
    label: 'TRADIÇÃO CRISTÃ',
    badgeClass: 'bg-orange-50 text-orange-800 dark:bg-orange-950/70 dark:text-orange-300 border-orange-300 dark:border-orange-700/60',
    dotColor: 'bg-orange-500',
    description: 'Informação preservada pelos pais da igreja e história eclesiástica sem mandamento canônico explícito.'
  },
  uncertain: {
    label: 'INFORMAÇÃO INCERTA',
    badgeClass: 'bg-rose-50 text-rose-800 dark:bg-rose-950/70 dark:text-rose-300 border-rose-300 dark:border-rose-700/60',
    dotColor: 'bg-rose-500',
    description: 'Não há informação bíblica suficiente para afirmar isso com certeza absoluta.'
  }
};

export const BIBLICAL_WOMEN: BiblicalWoman[] = [
  {
    id: 'eva',
    name: 'Eva',
    originalName: 'חַוָּה',
    transliteration: 'Chavah (raiz חָיָה - Viver)',
    meaning: 'Mãe de Todos os Viventes / Vivificadora',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Gênesis 2:18-25', 'Gênesis 3:1-24', 'Gênesis 4:1-2, 25', '2 Coríntios 11:3', '1 Timóteo 2:13-14'],
    family: {
      spouse: 'Adão (Gênesis 2:23-24)',
      children: ['Caim', 'Abel', 'Sete', 'e outros filhos e filhas gerados por Adão e Eva (Gênesis 5:4)'],
      precisionNote: 'Criada diretamente por Deus da costela de Adão.'
    },
    historicalContext: {
      period: 'Origens da Humanidade / A Criação',
      region: 'Jardim do Éden (Mesopotâmia primordial)',
      cultureAndCustoms: 'Estado de inocência pré-queda; comunhão direta e desimpedida com Deus no Éden.',
      religiousContext: 'Monoteísmo original em comunhão com o Criador antes da entrada do pecado no cosmos.'
    },
    biblicalStory: 'Eva foi criada por Deus para ser a auxiliadora idônea de Adão, em perfeita correspondência e igualdade de natureza (Gn 2:18-23). Seduzida pelas insinuações da serpente acerca do fruto da árvore do conhecimento do bem e do mal, duvidou da bondade da palavra de Deus, comeu do fruto e o deu a seu marido, que também comeu. Após o juízo divino, ouviu a gloriosa promessa do Protoevangelho (Gn 3:15) de que a descendência da mulher esmagaria a cabeça da serpente. Enfrentou a dor incomparável do assassinato de Abel por Caim e recebeu a dádiva de Sete.',
    virtuesAndTraits: [
      { trait: 'Companheirismo e Dignidade', biblicalEvidence: 'Reconhecida por Adão como "osso dos meus ossos e carne da minha carne" (Gn 2:23).' },
      { trait: 'Esperança na Promessa Divina', biblicalEvidence: 'Ao nascer Caim e posteriormente Sete, declarou: "Deus me deu outro filho em lugar de Abel" (Gn 4:25).' }
    ],
    errorsAndConflicts: {
      conflict: 'Queda moral e transgressão do mandamento de Deus no Éden.',
      biblicalContext: 'Gênesis 3:6 relata que ela viu que a árvore era boa para comer, agradável aos olhos e desejável para dar entendimento.',
      biblicalAssessment: 'O Novo Testamento registra que "a serpente enganou Eva com a sua astúcia" (2 Co 11:3) e que ela "sendo enganada, caiu em transgressão" (1 Tm 2:14).'
    },
    theologicalSignificance: 'Eva é a destinatária do Protoevangelho (Gn 3:15), a primeira profecia messiânica de toda a Bíblia, apontando que da linhagem da mulher haveria de nascer o Redentor Jesus Cristo que triunfaria sobre satanás.',
    scholarlyInterpretations: 'Teólogos concordam sobre sua condição de matriarca primordial; debatem a dimensão tipológica entre a primeira Eva (mãe da humanidade caída) e Maria (a virgem através de quem Cristo encarnou).',
    wesleyanPerspective: {
      theme: 'Graça Preveniente e Responsabilidade Moral',
      insight: 'John Wesley sublinha que Eva possuía livre-arbítrio real para obedecer ou ceder; após a queda, a graça de Deus não a abandonou à condenação eterna, mas inaugurou imediatamente a aliança da promessa da semente redentora.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Seus atos, palavras e descendência imediata estão registrados explicitamente nos primeiros capítulos de Gênesis.'
    }
  },
  {
    id: 'sara',
    name: 'Sara (Sarai)',
    originalName: 'שָׂרָה (originalmente שָׂרַי - Sarai)',
    transliteration: 'Sarah (de Sar - Príncipe/Nobreza)',
    meaning: 'Princesa / Nobre / Senhora',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Gênesis 11:29-31', 'Gênesis 12:10-20', 'Gênesis 16:1-6', 'Gênesis 17:15-21', 'Gênesis 18:1-15', 'Gênesis 21:1-12', 'Gênesis 23:1-20', 'Isaías 51:2', 'Romanos 4:19', 'Hebreus 11:11', '1 Pedro 3:6'],
    family: {
      father: 'Terá (meia-irmã de Abraão por parte de pai; Gn 20:12)',
      spouse: 'Abraão (Gênesis 11:29)',
      children: ['Isaque (Gênesis 21:2-3)'],
      precisionNote: 'Gn 20:12 confirma ser filha do mesmo pai, mas de mãe diferente de Abraão.'
    },
    historicalContext: {
      period: 'Era Patriarcal (c. 2000 a.C. - Bronze Médio)',
      region: 'Ur dos Caldeus, Harã, Canaã e Egito',
      cultureAndCustoms: 'Costumes nômades do antigo Oriente Próximo; esterilidade vista como desonra profunda segundo o Código de Hamurabi e tábuas de Nuzi.',
      religiousContext: 'Chamado divino monoteísta no meio de sociedades politeístas mesopotâmicas.'
    },
    biblicalStory: 'Esposa fiel de Abraão que o acompanhou na jornada de fé saindo de Ur para a terra prometida. Estéril até a velhice avançada, sofreu grande tribulação interior, propondo a Abraão que gerasse um filho através de sua serva egípcia Agar. Deus mudou seu nome de Sarai para Sara ("Princesa") e prometeu que reis de povos sairiam dela. Aos 90 anos, riu de incredulidade inicial ao ouvir a promessa de um filho, mas concebeu por fé Isaque ("riso de alegria"). Morreu aos 127 anos em Quiriate-Arba (Hebrom) e foi sepultada na cova de Macpela.',
    virtuesAndTraits: [
      { trait: 'Fé Sobrenatural na Fidelidade de Deus', biblicalEvidence: '"Pela fé, também a própria Sara recebeu o poder de conceber... visto que considerou fiel aquele que lhe havia feito a promessa" (Hb 11:11).' },
      { trait: 'Lealdade e Submissão Piedosa', biblicalEvidence: 'Pedro a cita como exemplo de santa mulher que confiava em Deus e chamava Abraão de senhor (1 Pe 3:5-6).' }
    ],
    errorsAndConflicts: {
      conflict: 'Ansiedade diante da esterilidade e tratamento ríspido com Agar.',
      biblicalContext: 'Gênesis 16 relata que Sara deu Agar a Abraão como concubina e depois a humilhou quando Agar a desprezou por estar grávida.',
      biblicalAssessment: 'A tentativa humana de antecipar a promessa divina gerou tensões domésticas e dor prolongada.'
    },
    theologicalSignificance: 'Mãe da aliança e matriarca do povo de Israel. O apóstolo Paulo em Gálatas 4 a utiliza como alegoria da Nova Aliança da graça e da Jerusalém celestial, a mulher livre cujos filhos nascem segundo a promessa.',
    scholarlyInterpretations: 'Historiadores destacam como a entrega da serva correspondia a leis patriarcais de adoção da época, enquanto exegetas ressaltam o contraste entre a obra da carne e a paciência da fé.',
    wesleyanPerspective: {
      theme: 'A Graça Superando a Incapacidade Humana',
      insight: 'Wesley nota que a fé de Sara não era isenta de dúvidas, mas amadureceu pela fidelidade de Deus: a justificação e os milagres divinos não dependem de mérito humano, mas da recepção confiante da promessa.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Textos exaustivos em Gênesis, Isaías e nas epístolas apostólicas registram sua vida e linhagem.'
    }
  },
  {
    id: 'agar',
    name: 'Agar',
    originalName: 'הָגָר',
    transliteration: 'Hagar (ligado à raiz fugir / peregrinar)',
    meaning: 'Fuga / Emigração / Aquela que Peregrina',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['Gênesis 16:1-16', 'Gênesis 21:8-21', 'Gálatas 4:21-31'],
    family: {
      spouse: 'Concubina de Abraão (Gênesis 16:3)',
      children: ['Ismael (Gênesis 16:15)'],
      precisionNote: 'Origem egípcia; serva de Sara provavelmente adquirida durante a estada no Egito (Gn 12:16).'
    },
    historicalContext: {
      period: 'Era Patriarcal (c. 2000 a.C.)',
      region: 'Canaã e Deserto de Berseba / Sur',
      cultureAndCustoms: 'Condição servil no antigo Oriente; servas podiam ser oferecidas como mães de aluguel legal para os senhores.',
      religiousContext: 'Encontro pessoal e transformador com o Deus dos hebreus no deserto árido.'
    },
    biblicalStory: 'Serva egípcia dada por Sara a Abraão para gerar filhos. Ao engravidar, passou a olhar sua senhora com desprezo, sofrendo retaliação e fugindo para o deserto. Junto a uma fonte, o Anjo do Senhor a encontrou, instruiu-a a retornar e fez-lhe grandiosas promessas sobre seu filho Ismael. Agar foi a primeira pessoa em toda a Escritura a atribuir um nome a Deus: "El Roi" (O Deus que me vê). Anos depois, após o desmame de Isaque, foi despedida com o filho rumo ao deserto de Berseba; quando a água acabou e ela chorava esperando a morte do menino sob um arbusto, Deus ouviu a voz do jovem, abriu seus olhos para um poço de água e a sustentou.',
    virtuesAndTraits: [
      { trait: 'Sensibilidade Espiritual e Revelação de Deus', biblicalEvidence: 'Chamou o nome do Senhor que lhe falava: "Tu és Deus que me vê (El Roi)" (Gn 16:13).' },
      { trait: 'Amor Materno e Resiliência', biblicalEvidence: 'Chorou e orou pela preservação da vida de Ismael no deserto de Berseba (Gn 21:16).' }
    ],
    errorsAndConflicts: {
      conflict: 'Soberba ao engravidar em relação a Sara estéril.',
      biblicalContext: 'Gênesis 16:4 declara expressamente: "Vendo ela que concebera, foi sua senhora desprezada aos seus olhos".',
      biblicalAssessment: 'A presunção quebrou a paz familiar e gerou conflito severo.'
    },
    theologicalSignificance: 'Demonstra a maravilhosa compaixão de Deus pelos excluídos e oprimidos. Em Gálatas 4, Paulo a apresenta como tipo da Antiga Aliança sob escravidão da Lei do Sinai em contraste com a liberdade da Nova Aliança.',
    scholarlyInterpretations: 'Comentaristas observam o cuidado providencial de Deus mesmo fora da linhagem da promessa sacerdotal de Isaque, abençoando Ismael com doze príncipes.',
    wesleyanPerspective: {
      theme: 'Graça Universal e Olhar Compassivo de Deus',
      insight: 'Wesley ensinava que os olhos do Senhor estão sobre todos os seres humanos em sua miséria: a graça divina não se restringe aos privilegiados, mas alcança o servo humilhado no deserto mais ermo.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'História detalhada em Gênesis 16 e 21 com intervenção do Anjo do Senhor.'
    }
  },
  {
    id: 'rebeca',
    name: 'Rebeca',
    originalName: 'רִבְקָה',
    transliteration: 'Rivkah',
    meaning: 'Laço / Corda Firme / Aquela que Une com Firmeza',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Gênesis 24:1-67', 'Gênesis 25:19-28', 'Gênesis 26:1-11', 'Gênesis 27:1-46', 'Romanos 9:10-12'],
    family: {
      father: 'Betuel (filho de Naor e Milca; Gn 24:15)',
      spouse: 'Isaque (Gênesis 24:67)',
      children: ['Esaú e Jacó (gêmeos; Gênesis 25:24-26)'],
      relatives: 'Irmã de Labão; sobrinha-neta de Abraão'
    },
    historicalContext: {
      period: 'Era Patriarcal (c. 1900 a.C.)',
      region: 'Padã-Arã (Mesopotâmia) e Canaã (Neguebe/Berseba)',
      cultureAndCustoms: 'Casamentos patriarcais endogâmicos arranjados com dádivas nupciais e bênção paterna.',
      religiousContext: 'Aliança divina transmitida de Abraão a Isaque.'
    },
    biblicalStory: 'Jovem formosa e solícita encontrada junto ao poço de Harã pelo servo de Abraão, a quem ofereceu água para ele e para todos os seus camelos. Demonstrou decisão imediata ao aceitar partir para Canaã e desposar Isaque. Enfrentou 20 anos de esterilidade até que a oração de Isaque foi ouvida. Ao sentir os bebês lutando em seu ventre, consultou o Senhor e recebeu a profecia: "Duas nações há no teu ventre... e o maior servirá ao menor" (Gn 25:23). Diante da velhice de Isaque, orquestrou o ardil com peles de cabrito para garantir a bênção patriarcal sobre Jacó.',
    virtuesAndTraits: [
      { trait: 'Hospitalidade e Prontidão Notável', biblicalEvidence: 'Tirou água com presteza para 10 camelos sedentos sem hesitação (Gn 24:18-20).' },
      { trait: 'Ousadia e Sensibilidade Espiritual', biblicalEvidence: 'Buscou a Deus em oração pessoal quando sentiu a dor no ventre (Gn 25:22).' }
    ],
    errorsAndConflicts: {
      conflict: 'Favoritismo materno e maquinação fraudulenta contra o esposo cego.',
      biblicalContext: 'Gênesis 27 relata que ela planejou e ordenou a Jacó que enganasse o pai Isaque para arrebatar a bênção.',
      biblicalAssessment: 'Embora a promessa pertencesse a Jacó, a mentira e o estratagema humano provocaram inimizade mortal e a fuga de Jacó, que ela nunca mais voltou a ver.'
    },
    theologicalSignificance: 'Canal da bênção abraâmica; a revelação dada a ela é citada em Romanos 9 para ilustrar o propósito soberano da eleição da graça divina.',
    scholarlyInterpretations: 'Debate histórico-hermenêutico sobre sua motivação em Gênesis 27: zelo pela profecia de Deus ou pura manipulação maternal.',
    wesleyanPerspective: {
      theme: 'Soberania Divina e o Erro dos Métodos Pecaminosos',
      insight: 'Wesley pontua que os santos propósitos de Deus não necessitam do engano humano: o Senhor cumpre Suas promessas pela fidelidade da Sua palavra, e o pecado sempre traz consequências amargas mesmo sobre Seus servos.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa minuciosa presente em Gênesis 24 a 27.'
    }
  },
  {
    id: 'lia',
    name: 'Lia (Léia)',
    originalName: 'לֵאָה',
    transliteration: 'Le\'ah',
    meaning: 'Vaca Selvagem / Cansada / Delicada',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Gênesis 29:16-35', 'Gênesis 30:1-21', 'Gênesis 31:4-16', 'Gênesis 49:31', 'Rute 4:11'],
    family: {
      father: 'Labão (Gênesis 29:16)',
      spouse: 'Jacó (Gênesis 29:23-25)',
      children: ['Rúben, Simeão, Levi, Judá, Issacar, Zebulom e Diná'],
      relatives: 'Irmã mais velha de Raquel; prima de Jacó'
    },
    historicalContext: {
      period: 'Era Patriarcal (c. 1850 a.C.)',
      region: 'Padã-Arã (Harã) e Canaã',
      cultureAndCustoms: 'Costume de casar a primogênita antes da mais nova; poligamia patriarcal.',
      religiousContext: 'Apego a Yahweh em meio aos ídolos domésticos da casa de Labão.'
    },
    biblicalStory: 'Filha mais velha de Labão, descrita como tendo "olhos tenros" (delicados ou fracos). Foi entregue em casamento a Jacó na calada da noite pelo estratagema ardiloso do pai, em lugar de sua formosa irmã Raquel por quem Jacó trabalhara 7 anos. Sofreu com o desprezo e a preferência aberta de Jacó por Raquel. Deus, vendo que Lia era desprezada, abriu-lhe a madre: teve seis filhos homens e uma filha, Diná. O nascimento de cada filho reflete sua jornada espiritual: inicialmente buscava o amor do marido, até o quarto filho (Judá), quando declarou: "Esta vez louvarei ao Senhor" (Gn 29:35). Foi sepultada por Jacó na sepultura dos patriarcas em Macpela.',
    virtuesAndTraits: [
      { trait: 'Maturidade Espiritual em Meio à Rejeição', biblicalEvidence: 'Ao gerar Judá, desvia os olhos da aceitação do marido para glorificar a Deus: "Esta vez louvarei a Yahweh" (Gn 29:35).' },
      { trait: 'Perseverança Maternal', biblicalEvidence: 'Mãe de seis das doze tribos de Israel, incluindo a tribo sacerdotal (Levi) e a real (Judá).' }
    ],
    errorsAndConflicts: {
      conflict: 'Competição amarga e inveja fraterna com a irmã Raquel por meio de filhos.',
      biblicalContext: 'Gênesis 30 detalha a disputa pelas mandrágoras e o uso de servas para gerar filhos por procuração.',
      biblicalAssessment: 'Fruto doloroso do casamento poligâmico imposto por Labão.'
    },
    theologicalSignificance: 'De Lia descende a linhagem sacerdotal de Arão (Levi) e a linhagem régia e messiânica de Jesus Cristo através da Tribo de Judá. Rute 4:11 a celebra junto com Raquel como as edificadoras da casa de Israel.',
    scholarlyInterpretations: 'Comentaristas sublinham a soberania graciosa de Deus que escolheu a mulher desprezada pelo mundo para ser a mãe dos reis de Israel.',
    wesleyanPerspective: {
      theme: 'O Consolo da Graça para os Aflitos',
      insight: 'Wesley ensinava que quando os homens nos rejeitam, Deus nos acolhe; o louvor de Lia em Judá representa o coração que encontra em Deus o seu tesouro supremo, acima de todo afeto terreno.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Texto detalhado em Gênesis e menção genealógica em Mateus 1 e Lucas 3.'
    }
  },
  {
    id: 'raquel',
    name: 'Raquel',
    originalName: 'רָחֵל',
    transliteration: 'Rachel',
    meaning: 'Ovelha / Cordeira',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Gênesis 29:6-30', 'Gênesis 30:1-25', 'Gênesis 31:19-35', 'Gênesis 35:16-20', 'Jeremias 31:15', 'Mateus 2:18'],
    family: {
      father: 'Labão (Gênesis 29:16)',
      spouse: 'Jacó (Gênesis 29:28)',
      children: ['José e Benjamim (Gênesis 30:24; 35:18)'],
      relatives: 'Irmã mais nova de Lia; sobrinha de Rebeca'
    },
    historicalContext: {
      period: 'Era Patriarcal (c. 1850 a.C.)',
      region: 'Padã-Arã e Canaã',
      cultureAndCustoms: 'Pastora ativa nos rebanhos da família; posse dos ídolos do lar (terafins) vinculada a direitos de herança mesopotâmica.',
      religiousContext: 'Transição da idolatria politeísta aramaica para a fé em Yahweh.'
    },
    biblicalStory: 'Pastora de ovelhas, formosa de porte e de rosto, amada apaixonadamente por Jacó que serviu 14 anos por ela. Sofreu por anos com a esterilidade enquanto sua irmã gerava filhos, clamando a Jacó em desespero: "Dá-me filhos, senão eu morro" (Gn 30:1). Deus lembrou-se dela e deu-lhe José. Na fuga de Padã-Arã, furtou os terafins (ídolos) de seu pai Labão. Morreu em parto doloroso nas proximidades de Belém dando à luz Benjamim, a quem chamou Benoni ("filho da minha dor"), sendo sepultada no caminho de Efrata.',
    virtuesAndTraits: [
      { trait: 'Diligência e Trabalho Árduo', biblicalEvidence: 'Cuidava pessoalmente dos rebanhos de seu pai quando conheceu Jacó (Gn 29:9).' },
      { trait: 'Intenso Amor e Lealdade a Jacó', biblicalEvidence: 'Apoiou incondicionalmente a decisão de Jacó de retornar à terra da promessa (Gn 31:14-16).' }
    ],
    errorsAndConflicts: {
      conflict: 'Furto dos ídolos de Labão e desespero diante da esterilidade.',
      biblicalContext: 'Gênesis 31:19 e 34 relata o furto e a dissimulação sentada sobre a albarda do camelo.',
      biblicalAssessment: 'Demonstra a persistência de vestígios do paganismo de sua terra natal antes da renovação da aliança em Betel.'
    },
    theologicalSignificance: 'Mãe de José (salvador do Egito e preservador das nações) e Benjamim. Em Jeremias 31:15 e Mateus 2:18, Raquel é poetizada como a mãe que chora do túmulo pelos seus filhos no exílio e no massacre dos inocentes em Belém.',
    scholarlyInterpretations: 'Arqueologia bíblica (tabletes de Nuzi) esclarece que a posse dos terafins garantia a liderança do clã aos olhos da lei aramaica.',
    wesleyanPerspective: {
      theme: 'A Vaidade das Paixões Terrenas Desmedidas',
      insight: 'Wesley observa que o clamor aflito "Dá-me filhos, senão morro" foi tragicamente respondido: Raquel morreu precisamente ao dar à luz seu segundo filho, ensinando que a vontade de Deus deve ser recebida com santa submissão.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Relato bíblico detalhado em Gênesis 29 a 35.'
    }
  },
  {
    id: 'tamar',
    name: 'Tamar',
    originalName: 'תָּמָר',
    transliteration: 'Tamar',
    meaning: 'Palmeira / Tâmara',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['Gênesis 38:6-30', 'Rute 4:12', '1 Crônicas 2:4', 'Mateus 1:3'],
    family: {
      spouse: 'Er (filho de Judá; Gn 38:6), e sucessivamente Onã pelo levirato',
      children: ['Perez e Zerá (gêmeos com Judá; Gn 38:29-30)'],
      relatives: 'Nora do patriarca Judá'
    },
    historicalContext: {
      period: 'Era Patriarcal em Canaã',
      region: 'Quezibe, Timna e Adulão (Canaã)',
      cultureAndCustoms: 'Lei do Levirato primordial: o irmão do falecido devia suscitar descendência ao falecido para preservar a herança e o sustento da viúva.',
      religiousContext: 'Mundo cananeu circundante corrompido moralmente.'
    },
    biblicalStory: 'Casou-se com Er, filho mais velho de Judá, que era perverso e foi morto pelo Senhor. Casada com Onã pelo levirato, este se recusou a suscitar semente ao irmão e também pereceu. Judá prometeu seu terceiro filho, Selá, mas faltou à palavra com medo de perdê-lo. Tamar, vendo-se abandonada e sem descendência na casa de seu pai, cobriu-se com véu na encruzilhada de Enaim; Judá, julgando ser uma meretriz, deitou-se com ela e deu em penhor seu selo, cordão e cajado. Quando Tamar foi acusada de adultério grávida e condenada à fogueira, apresentou os penhores. Judá reconheceu: "Mais justa é ela do que eu" (Gn 38:26). Gerou os gêmeos Perez e Zerá.',
    virtuesAndTraits: [
      { trait: 'Determinação e Luta pelos Direitos da Aliança', biblicalEvidence: 'Agredida pela quebra da promessa patriarcal, arriscou a vida para garantir sua descendência e dignidade.' },
      { trait: 'Justiça Reconhecida Publicamente', biblicalEvidence: '"Mais justa é ela do que eu, porquanto não a dei a Selá, meu filho" (Gn 38:26).' }
    ],
    errorsAndConflicts: {
      conflict: 'Uso de disfarce de prostituta cultual para atrair o sogro.',
      biblicalContext: 'Gênesis 38:14-16 narra a troca de roupas de viúva pelo véu na entrada de Enaim.',
      biblicalAssessment: 'Um método extremo motivado pela traição e infidelidade de Judá ao dever moral do levirato.'
    },
    theologicalSignificance: 'Tamar é a primeira mulher explicitamente incluída na genealogia real do Messias em Mateus 1:3 ("Judá gerou de Tamar a Perez e a Zerá"), demonstrando que a graça salvadora de Deus redime histórias marcadas por pecado e dor.',
    scholarlyInterpretations: 'Teólogos destacam a coragem moral de Tamar em exigir a continuidade da semente de Judá, tornando-se mãe da casa de Perez da qual descendeu Davi e Jesus Cristo.',
    wesleyanPerspective: {
      theme: 'Graça Redentora e Eleição Imerecida',
      insight: 'Wesley ressalta nas suas notas sobre Mateus 1 que Cristo incluiu pecadores e gentios na Sua linhagem humana para mostrar que veio salvar o mundo inteiro de seus pecados.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'História canônica narrada em Gênesis 38 e confirmada em Mateus 1.'
    }
  },
  {
    id: 'joquebede',
    name: 'Joquebede',
    originalName: 'יוֹכֶבֶד',
    transliteration: 'Yocheved',
    meaning: 'Yahweh é Glória / Glória do Senhor',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['Êxodo 2:1-10', 'Êxodo 6:20', 'Números 26:59', 'Hebreus 11:23'],
    family: {
      father: 'Levi (nascida no Egito; Nm 26:59)',
      spouse: 'Anrão (Êxodo 6:20)',
      children: ['Miriã', 'Arão', 'Moisés'],
      relatives: 'Tribo de Levi'
    },
    historicalContext: {
      period: 'Escravidão em terras egípcias (c. 1500–1400 a.C.)',
      region: 'Terra de Gósen / Rio Nilo (Egito)',
      cultureAndCustoms: 'Edito infanticida do Faraó ordenando o afogamento de todos os recém-nascidos hebreus do sexo masculino.',
      religiousContext: 'Fé monoteísta preservada sob tirania extrema.'
    },
    biblicalStory: 'Mulher levita que, desafiando a ordem assassina do Faraó, escondeu seu filho Moisés por três meses ao ver que era uma criança formosa diante de Deus. Quando não pôde mais ocultá-lo, teceu uma arca de juncos, vedou-a com betume e pez, colocou o menino dentro e a posicionou entre os juncos à beira do Rio Nilo, enquanto sua filha Miriã vigiava. A filha do Faraó encontrou a criança; Miriã ofereceu uma ama hebréia e Joquebede foi contratada para criar o próprio filho no colo da sua fé até a infância.',
    virtuesAndTraits: [
      { trait: 'Coragem Santa contra a Tirania', biblicalEvidence: '"Pela fé, Moisés, apenas nascido, foi ocultado por seus pais durante três meses, porque viram que a criança era formosa; e não temeram o decreto do rei" (Hb 11:23).' },
      { trait: 'Sabedoria e Engenho Protetor', biblicalEvidence: 'A construção cuidadosa da arca de junco impermeável e o posicionamento seguro no Nilo.' }
    ],
    errorsAndConflicts: {
      conflict: 'Desobediência civil ao decreto do Faraó.',
      biblicalContext: 'Êxodo 2:2-3 registra a transgressão direta da ordem real de assassinato.',
      biblicalAssessment: 'A Bíblia celebra a recusa em cometer homicídio contra a vida inocente como ato de reverência a Deus (Hb 11:23).'
    },
    theologicalSignificance: 'Mãe dos três grandes líderes do Êxodo: Moisés (o libertador e legislador), Arão (o primeiro sumo sacerdote) e Miriã (a profetisa e líder de louvor). Sua fé preservou a vida de Moisés.',
    scholarlyInterpretations: 'Estudiosos sublinham o termo hebraico "tevah" (arca) usado para a cesta de Moisés, o mesmo vocábulo usado unicamente para a Arca de Noé, simbolizando salvação do juízo das águas.',
    wesleyanPerspective: {
      theme: 'Fé Operante e Convicção contra o Mal',
      insight: 'Wesley destacava que a fé genuína vence o medo dos reis da terra quando a lei humana viola expressamente os mandamentos do Deus altíssimo.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Descrita em Êxodo e elogiada na galeria dos heróis da fé em Hebreus 11:23.'
    }
  },
  {
    id: 'miria',
    name: 'Miriã (Miriam)',
    originalName: 'מִרְיָם',
    transliteration: 'Miryam',
    meaning: 'Rebelião / Amargura / Senhora Amada',
    testament: 'AT',
    category: 'Profetisas',
    biblicalReferences: ['Êxodo 2:4-8', 'Êxodo 15:20-21', 'Números 12:1-16', 'Números 20:1', 'Números 26:59', 'Deuteronômio 24:9', 'Miquéias 6:4'],
    family: {
      father: 'Anrão (Êxodo 6:20)',
      mother: 'Joquebede',
      children: [],
      relatives: 'Irmã mais velha de Arão e Moisés',
      precisionNote: 'Não há registro bíblico de que tenha se casado ou tido filhos.'
    },
    historicalContext: {
      period: 'O Êxodo e a Peregrinação no Deserto (c. 1446 a.C.)',
      region: 'Egito, Mar Vermelho e Deserto de Zim/Cades',
      cultureAndCustoms: 'Liderança musical e profética entre as mulheres hebreias.',
      religiousContext: 'Nascimento da nação de Israel sob a Aliança do Sinai.'
    },
    biblicalStory: 'Jovem inteligente que vigiou Moisés bebê no Nilo e sugeriu a mãe como ama à princesa egípcia. Chamada explicitamente de "a profetisa" em Êxodo 15, liderou as mulheres com tamboris e danças entoando o hino triunfal da vitória após a travessia milagrosa do Mar Vermelho: "Cantai ao Senhor, porque grandemente triunfou; lançou no mar o cavalo e o seu cavaleiro" (Ex 15:21). Mais tarde, em Hazerote, aliou-se a Arão murmurando contra a liderança exclusiva de Moisés por causa da esposa cuxita. Foi ferida por Deus com lepra, ficando branca como a neve; após intercessão com lágrimas de Moisés, foi purificada após sete dias fora do arraial. Morreu e foi sepultada em Cades.',
    virtuesAndTraits: [
      { trait: 'Ministério Profético e Louvor', biblicalEvidence: '"A profetisa Miriã... tomou um tamboril na mão, e todas as mulheres saíram atrás dela com tamboris e danças" (Ex 15:20).' },
      { trait: 'Liderança Reconhecida por Deus', biblicalEvidence: 'Em Miquéias 6:4, Deus declara: "Pois te fiz subir da terra do Egito... e enviei adiante de ti Moisés, Arão e Miriã".' }
    ],
    errorsAndConflicts: {
      conflict: 'Ciúme da liderança de Moisés e contestação da autoridade delegada por Deus.',
      biblicalContext: 'Números 12:1-2: "Porventura tem falado o Senhor somente por Moisés? Não tem falado também por nós?".',
      biblicalAssessment: 'A ira do Senhor se acendeu contra ela, sendo disciplinada publicamente com lepra para restaurar a ordem e a reverência.'
    },
    theologicalSignificance: 'Primeira mulher designada como profetisa na Bíblia; exemplifica tanto a dignidade da liderança feminina como os perigos da inveja espiritual e rebelião contra a ordem divina.',
    scholarlyInterpretations: 'Linguistas apontam que seu nome egípcio primordial significa "amada de Amon" ou "amada do Senhor", transposto para o grego como Maria no Novo Testamento.',
    wesleyanPerspective: {
      theme: 'Santificação e o Veneno do Orgulho Espiritual',
      insight: 'Wesley adverte em suas notas que até os mais eminentes servos e profetas de Deus podem cair em inveja carnal se não guardarem seus corações em humildade contínua.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrada diretamente em Êxodo, Números, Deuteronômio e Miquéias.'
    }
  },
  {
    id: 'raabe',
    name: 'Raabe',
    originalName: 'רָחָב',
    transliteration: 'Rachav',
    meaning: 'Ampla / Espaçosa / Acolhedora',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['Josué 2:1-24', 'Josué 6:17-25', 'Mateus 1:5', 'Hebreus 11:31', 'Tiago 2:25'],
    family: {
      spouse: 'Salmom (príncipe de Judá; Mateus 1:5)',
      children: ['Boaz (bisavô do Rei Davi; Mt 1:5)'],
      relatives: 'Pais e irmãos salvos com ela dentro da sua casa em Jericó (Js 6:23)'
    },
    historicalContext: {
      period: 'Conquista de Canaã (c. 1400 a.C. - Bronze Tardio)',
      region: 'Jericó (Vale do Jordão)',
      cultureAndCustoms: 'Cidade fortificada cananéia com muralhas duplas; Raabe mantinha estalagem na própria muralha.',
      religiousContext: 'Paganismo cananeu violento e idólatra; reconhecimento da superioridade absoluta de Yahweh.'
    },
    biblicalStory: 'Mulher de Jericó identificada no texto bíblico como meretriz/hospedeira. Acolheu os dois espias hebreus enviados por Josué e os ocultou sob talos de linho no eirado. Confessou sua fé perante eles: "Bem sei que o Senhor vos deu esta terra... porque o Senhor, vosso Deus, é Deus em cima nos céus e embaixo na terra" (Js 2:9, 11). Fez um pacto solene e atou o cordão de fio de escarlata em sua janela na muralha. Quando as muralhas de Jericó desabaram, a casa de Raabe permaneceu de pé: ela e toda a sua família foram poupadas, passando a habitar no meio de Israel.',
    virtuesAndTraits: [
      { trait: 'Fé Prática e Transformadora', biblicalEvidence: '"Pela fé, Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias" (Hb 11:31).' },
      { trait: 'Obras de Amor e Proteção à Vida', biblicalEvidence: '"De igual modo, não foi também justificada pelas obras a meretriz Raabe, quando acolheu os mensageiros e os fez sair por outro caminho?" (Tg 2:25).' }
    ],
    errorsAndConflicts: {
      conflict: 'Vida pregressa de prostituição e engano dito aos soldados de Jericó.',
      biblicalContext: 'Josué 2:4-5 relata que ela disse aos guardas do rei que os homens já haviam partido.',
      biblicalAssessment: 'Estudiosos debatem a ética da dissimulação em tempos de guerra; o Novo Testamento não celebra a mentira em si, mas a corajosa fé salvadora que resgatou os servos de Deus.'
    },
    theologicalSignificance: 'Membro nobre da linhagem de Jesus Cristo em Mateus 1:5. Mãe de Boaz, que desposou Rute. O cordão de fio de escarlata em sua janela é amplamente interpretado pelos pais da igreja como símbolo do sangue redentor de Cristo que livra da destruição.',
    scholarlyInterpretations: 'Exegetas tradicionais mostram que o termo hebraico "zonah" indica prostituta, mas na tradição judaica (Flávio Josefo e Targum) também é lido como hospedeira.',
    wesleyanPerspective: {
      theme: 'Graça Justificadora Universal e Fé Viva',
      insight: 'Wesley usa Raabe para exemplificar que ninguém está tão manchado pelo pecado que não possa ser justificado pela graça mediante a fé; sua fé não foi morta, mas operou corajosamente em amor.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Registrada com destaque em Josué 2 e 6, Mateus 1, Hebreus 11 e Tiago 2.'
    }
  },
  {
    id: 'debora',
    name: 'Débora',
    originalName: 'דְּבוֹרָה',
    transliteration: 'Devorah',
    meaning: 'Abelha / Laboriosa e Fiel',
    testament: 'AT',
    category: 'Juízas e Líderes',
    biblicalReferences: ['Juízes 4:1-24', 'Juízes 5:1-31'],
    family: {
      spouse: 'Lapidote (Juízes 4:4)',
      children: [],
      precisionNote: 'Chama a si mesma poeticamente de "mãe em Israel" (Jz 5:7).'
    },
    historicalContext: {
      period: 'Período dos Juízes (c. 1200 a.C. - Idade do Ferro I)',
      region: 'Entre Ramá e Betel, na região montanhosa de Efraim; batalha no Monte Tabor e Ribeiro de Quisom',
      cultureAndCustoms: 'Crise profunda de segurança em Israel; estradas desertas e opressão militar cananéia com 900 carros de ferro de Sísera.',
      religiousContext: 'Ciclos de apostasia de Israel e restauração pela misericórdia de Yahweh.'
    },
    biblicalStory: 'Profetisa e a única mulher a atuar como juíza sobre todo o Israel. Assentava-se sob a palmeira de Débora julgando as causas do povo com notável integridade e sabedoria. Sob ordem de Deus, convocou Baraque para mobilizar dez mil homens no Monte Tabor contra o temível general Sísera. Quando Baraque hesitou dizendo que só iria se ela o acompanhasse, profetizou que a glória da vitória não seria dele, pois o Senhor entregaria Sísera nas mãos de uma mulher (cumprido por Jael). Após a vitória esmagadora no ribeiro de Quisom, entoou o magnífico Cântico de Débora (Jz 5), um dos mais antigos poemas épicos da literatura bíblica, trazendo 40 anos de paz à terra.',
    virtuesAndTraits: [
      { trait: 'Liderança Inspiradora e Espiritualidade Firme', biblicalEvidence: 'Todo o Israel subia a ela a juízo sob a palmeira de Débora (Jz 4:5).' },
      { trait: 'Coragem Militar e Ousadia na Fé', biblicalEvidence: 'Não hesitou em marchar com o exército à frente dos soldados rumo à batalha (Jz 4:9-10).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhum pecado moral registrado no texto bíblico sobre sua conduta pessoal.',
      biblicalContext: 'Juízes 4 e 5 exaltam sua integridade e justiça.',
      biblicalAssessment: 'Seu ministério contrastou fortemente com a covardia moral dos homens da sua geração.'
    },
    theologicalSignificance: 'Testemunho inequívoco de que Deus capacita e unge mulheres para funções de autoridade profética, judicial e governamental no meio do Seu povo.',
    scholarlyInterpretations: 'Historiadores e filólogos celebram o Cântico de Juízes 5 como monumento da poesia hebraica arcaica preservado sem adulterações.',
    wesleyanPerspective: {
      theme: 'Deus Escolhe Quem Quer para o Seu Ministério',
      insight: 'John Wesley frequentemente citava Débora e as profetisas para defender que o Espírito Santo soberanamente concede dons de proclamação e liderança a mulheres quando a igreja precisa de restauração e zelo santo.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Registro histórico e poético completo nos capítulos 4 e 5 de Juízes.'
    }
  },
  {
    id: 'jael',
    name: 'Jael',
    originalName: 'יָעֵל',
    transliteration: 'Ya\'el',
    meaning: 'Cabra-Montês / Íbex Ágil',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['Juízes 4:17-22', 'Juízes 5:24-27'],
    family: {
      spouse: 'Héber, o queneu (descendente de Jetro, sogro de Moisés; Jz 4:11, 17)',
      precisionNote: 'Não era israelita por nascimento, mas pertencia a um clã nômade aliado.'
    },
    historicalContext: {
      period: 'Período dos Juízes (c. 1200 a.C.)',
      region: 'Planície de Zaananim, próxima a Quedes (Galileia)',
      cultureAndCustoms: 'Tendas nômades beduínas queneias; a tenda das mulheres era tradicionalmente inviolável para homens estranhos.',
      religiousContext: 'Aliança histórica entre queneus e Israel desde os dias do deserto.'
    },
    biblicalStory: 'Quando o general cananeu Sísera fugiu a pé após o aniquilamento do seu exército, buscou refúgio na tenda de Jael, pois havia paz entre o rei Jabim e o clã de Héber. Jael saiu ao seu encontro com palavras acolhedoras, cobriu-o com uma manta e deu-lhe leite azedo (coalhada nobre) para beber. Exausto, Sísera adormeceu profundamente. Jael então tomou uma estaca da tenda e um martelo nas mãos, aproximou-se mansamente e cravou a estaca nas têmporas do opressor, cravando-a no chão, cumprindo com precisão a profecia de Débora. Quando Baraque se aproximou em perseguição, Jael o chamou e mostrou-lhe o inimigo morto.',
    virtuesAndTraits: [
      { trait: 'Audácia Decisiva e Destemor', biblicalEvidence: 'Enfrentou desarmada o mais temido guerreiro e general da região (Jz 4:21).' },
      { trait: 'Louvor Poético nas Escrituras', biblicalEvidence: '"Bendita seja entre as mulheres Jael... bendita seja entre as mulheres nas tendas" (Jz 5:24).' }
    ],
    errorsAndConflicts: {
      conflict: 'Uso de estratagema e quebra das leis antigas de hospitalidade nômade do Oriente.',
      biblicalContext: 'Juízes 4:18-20 mostra o oferecimento de refúgio antes da execução.',
      biblicalAssessment: 'No contexto de guerra santa e libertação do povo de Deus contra um tirano sanguinário, o cântico inspirado celebra seu ato como julgamento divino.'
    },
    theologicalSignificance: 'Cumprimento da profecia divina de Juízes 4:9 ("o Senhor entregará Sísera nas mãos de uma mulher"), ecoando a promessa de Gênesis 3:15 sobre o esmagamento da cabeça do inimigo.',
    scholarlyInterpretations: 'Historiadores analisam as regras severas de hospitalidade semita e como a tirania de Sísera justificou uma intervenção de emergência para salvar Israel da servidão.',
    wesleyanPerspective: {
      theme: 'O Julgamento dos Opressores pelos Instrumentos mais Frágeis',
      insight: 'Wesley nota que Deus frequentemente confunde os soberbos da terra através da fraqueza aparente de mãos anônimas em tendas remotas.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrado em prosa (Jz 4) e em poesia celebrativa (Jz 5).'
    }
  },
  {
    id: 'rute',
    name: 'Rute',
    originalName: 'רוּת',
    transliteration: 'Rut',
    meaning: 'Amiga / Companheira Fiel',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['Livro de Rute 1 a 4', 'Mateus 1:5'],
    family: {
      spouse: 'Malom (primeiro marido; Rt 4:10), e Boaz (resgatador; Rt 4:13)',
      children: ['Obede (avô do Rei Davi; Rt 4:17)'],
      relatives: 'Nora leal de Noemi; origem moabita'
    },
    historicalContext: {
      period: 'Dias em que julgavam os juízes (c. 1150 a.C.)',
      region: 'Campos de Moabe e Belém de Judá',
      cultureAndCustoms: 'Lei bíblica do respigo para os pobres e viúvas (Lv 19:9-10) e a instituição do Goel (parente resgatador).',
      religiousContext: 'Ruptura definitiva com Quemos (deus pagão de Moabe) para servir unicamente a Yahweh.'
    },
    biblicalStory: 'Jovem viúva moabita que, após a morte de seu marido Malom e de seu sogro Elimeleque em Moabe, recusou-se veementemente a abandonar sua sogra Noemi. Fez o mais célebre voto de lealdade das Escrituras: "Não me instes para que te deixe... porque aonde quer que tu fores, irei eu... o teu povo é o meu povo, o teu Deus é o meu Deus" (Rt 1:16). Chegando a Belém em extrema pobreza no início da sega da cevada, trabalhou humildemente respigando espigas no campo de Boaz, homem rico e parente de Elimeleque. Pela sua modéstia, fidelidade e pureza, conquistou a admiração de toda a cidade como "mulher virtuosa" (Rt 3:11). Boaz assumiu o papel de parente resgatador e casou-se com ela, gerando Obede.',
    virtuesAndTraits: [
      { trait: 'Fidelidade e Amor Incondicional (Hesed)', biblicalEvidence: 'Abandono de sua pátria, família e deuses por amor devotado a Noemi e ao Senhor (Rt 1:16-17).' },
      { trait: 'Virtude e Pureza Comprovadas', biblicalEvidence: '"Toda a porta do meu povo sabe que és mulher virtuosa" (Rt 3:11).' },
      { trait: 'Humildade e Diligência Incansável', biblicalEvidence: 'Trabalhava desde a manhã até a tarde respigando espigas sob sol causticante (Rt 2:7).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falha moral ou pecado imputado no livro canônico.',
      biblicalContext: 'Mesmo a cena noturna na eira em Rute 3 foi conduzida sob absoluta pureza e respeito às leis de resgate.',
      biblicalAssessment: 'Exemplo supremo de retidão no Antigo Testamento.'
    },
    theologicalSignificance: 'Bisavó do Rei Davi e ascendente direta de Jesus Cristo (Mt 1:5). O livro de Rute tipifica o plano da salvação: a gentia desamparada resgatada pelo amor do Redentor (Boaz prefigurando Cristo).',
    scholarlyInterpretations: 'Teólogos bíblicos ressaltam o conceito de "Hesed" (amor pactual constante de Deus) personificado na vida de Rute.',
    wesleyanPerspective: {
      theme: 'Graça que Não Conhece Fronteiras Nacionais',
      insight: 'Wesley ensina que Rute, sendo estrangeira moabita por nascimento, foi enxertada no centro da aliança de Israel pela fé leal, atestando que a misericórdia redentora de Deus é universal.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa integral no Livro de Rute e confirmação genealógica em Mateus 1:5.'
    }
  },
  {
    id: 'noemi',
    name: 'Noemi (Mara)',
    originalName: 'נָעֳמִי',
    transliteration: 'Na\'omi',
    meaning: 'Minha Agradável / Delícia / Doçura',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Livro de Rute 1 a 4'],
    family: {
      spouse: 'Elimeleque (Rt 1:2)',
      children: ['Malom e Quiliom (ambos falecidos em Moabe; Rt 1:5)'],
      relatives: 'Sogra e mentora espiritual de Rute e Orfa'
    },
    historicalContext: {
      period: 'Período dos Juízes',
      region: 'Belém de Judá e Moabe',
      cultureAndCustoms: 'Desamparo severo de viúvas sem herdeiros no mundo antigo; perda de propriedades da família.',
      religiousContext: 'Retorno a Belém ao saber que o Senhor visitara Seu povo dando-lhe pão.'
    },
    biblicalStory: 'Esposa de Elimeleque que emigrou para Moabe fugindo da fome em Belém. Ali perdeu o marido e seus dois filhos, ficando desolada. Ao decidir voltar viúva e desprovida a Belém, instruiu suas noras a retornarem para a casa de seus pais, mas Rute apegou-se a ela. Ao chegar, as mulheres da cidade se comoveram: "É esta Noemi?". Ela respondeu: "Não me chameis Noemi; chamai-me Mara (amargurada), porque grande amargura me tem dado o Todo-Poderoso" (Rt 1:20). Com sabedoria pactual, aconselhou Rute em cada passo junto a Boaz. Ao nascer seu neto Obede, as mulheres disseram: "Louvado seja o Senhor... nasceu um filho a Noemi", e ela o tomou no regaço e foi sua ama.',
    virtuesAndTraits: [
      { trait: 'Desprendimento e Cuidado pelas Noras', biblicalEvidence: 'Não exigiu que as noras sacrificassem o futuro por ela em Moabe (Rt 1:8-13).' },
      { trait: 'Sabedoria Pactual e Familiar', biblicalEvidence: 'Instruiu com precisão os costumes de resgate de herança em Israel (Rt 3:1-4).' }
    ],
    errorsAndConflicts: {
      conflict: 'Desânimo e queixa temporária contra a providência de Deus.',
      biblicalContext: 'Rute 1:21: "Ditosa parti, mas o Senhor me fez voltar vazia... o Senhor tem testemunhado contra mim".',
      biblicalAssessment: 'Expressão de dor genuína de um coração quebrantado, que Deus restaurou em plenitude transbordante ao final.'
    },
    theologicalSignificance: 'Personifica o caminho do sofrimento que conduz à redenção pela providência divina. De "vazia" a "cheia", Noemi testemunha a restauração do Senhor sobre os Seus filhos.',
    scholarlyInterpretations: 'Comentaristas observam o uso do termo "Shuv" (retornar/arrepender-se) repetido dezenas de vezes no capítulo 1, simbolizando o regresso espiritual a Deus.',
    wesleyanPerspective: {
      theme: 'A Providência Misteriosa e a Esperança que Não Falha',
      insight: 'Wesley ressaltava que os caminhos mais escuros da vida de um crente muitas vezes são o próprio berço das maiores bênçãos que Deus está forjando para as gerações futuras.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Documentada minuciosamente nos quatro capítulos do Livro de Rute.'
    }
  },
  {
    id: 'ana',
    name: 'Ana',
    originalName: 'חַנָּה',
    transliteration: 'Channah (da raiz Chanan)',
    meaning: 'Graça / Favor / Graciosa',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['1 Samuel 1:1-28', '1 Samuel 2:1-21', 'Lucas 1:46-55 (paralelo poético)'],
    family: {
      spouse: 'Elcana, levita de Ramataim-Zofim (1 Sm 1:1)',
      children: ['Samuel (o profeta) e mais três filhos e duas filhas (1 Sm 2:21)'],
      relatives: 'Concorrente de Penina na casa de Elcana'
    },
    historicalContext: {
      period: 'Fim do período dos Juízes / Transição para a Monarquia (c. 1100 a.C.)',
      region: 'Ramá e Tabernáculo de Siló',
      cultureAndCustoms: 'Peregrinações anuais ao Tabernáculo em Siló; poligamia tolerada gerando rivalidade interna cruel.',
      religiousContext: 'Declínio espiritual sob o sacerdócio frouxo de Eli e a impiedade de seus filhos Hofni e Fineias.'
    },
    biblicalStory: 'Esposa preferida de Elcana, que sofria em profundo silêncio por ser estéril e pelas incessantes provocações de Penina para a irritar. Em peregrinação a Siló, entrou no Tabernáculo e chorou copiosamente com amargura de alma, movendo os lábios em oração sem que se ouvisse a sua voz, orando no coração. Foi injustamente repreendida pelo sumo sacerdote Eli por achar que estava embriagada, ao que respondeu: "Não sou mulher embriagada... mas tenho derramado a minha alma perante o Senhor" (1 Sm 1:15). Eli a abençoou. Voltou para casa em paz e concebeu Samuel. Cumprindo fielmente seu voto, após o desmame levou o menino para ser consagrado perpetuamente a Deus em Siló e proferiu o célebre Cântico de Ana (1 Sm 2).',
    virtuesAndTraits: [
      { trait: 'Oração Íntima e Quebrantamento Genuíno', biblicalEvidence: '"Derramava a minha alma perante o Senhor" (1 Sm 1:15).' },
      { trait: 'Fidelidade Absoluta ao Voto Feito a Deus', biblicalEvidence: 'Entregou seu filho único tão esperado para o serviço perpétuo no santuário (1 Sm 1:28).' },
      { trait: 'Visão Profética Exaltada', biblicalEvidence: 'Primeira pessoa na Bíblia a profetizar sobre o Messias ("ungido", Mashíach) de Deus em 1 Sm 2:10.' }
    ],
    errorsAndConflicts: {
      conflict: 'Tristeza profunda inicial que a impedia de comer.',
      biblicalContext: '1 Samuel 1:7-8 registra seu pranto incontido diante das afrontas de Penina.',
      biblicalAssessment: 'Não pecou contra Deus, mas transformou sua aflição em súplica ardente no altar.'
    },
    theologicalSignificance: 'Mãe e formadora de Samuel, o profeta que ungiu os primeiros reis de Israel (Saul e Davi). O Cântico de Ana é o molde e a matriz teológica do Magnificat de Maria em Lucas 1.',
    scholarlyInterpretations: 'Exegetas enfatizam que Ana é a primeira a usar o título divino "Yahweh dos Exércitos" (Yahweh Tsebaoth) em oração (1 Sm 1:11).',
    wesleyanPerspective: {
      theme: 'A Eficácia da Oração de Fé e a Graça Concedida',
      insight: 'Wesley ensinava que a oração de Ana é o arquétipo da comunhão silenciosa do coração com Deus: quando a boca não fala mas a alma geme em quebrantamento, a graça do céu responde com poder.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa e oração registradas integralmente em 1 Samuel 1 e 2.'
    }
  },
  {
    id: 'abigail',
    name: 'Abigail',
    originalName: 'אֲבִיגַיִל',
    transliteration: 'Avigayil',
    meaning: 'Meu Pai é Alegria / Fonte de Regozijo',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['1 Samuel 25:1-44', '1 Samuel 27:3', '1 Samuel 30:5', '2 Samuel 2:2', '2 Samuel 3:3'],
    family: {
      spouse: 'Nabal de Maom (primeiro marido; 1 Sm 25:3), e posteriormente o Rei Davi (1 Sm 25:42)',
      children: ['Quileabe / Daniel (filho gerado com Davi em Hebrom; 2 Sm 3:3; 1 Cr 3:1)'],
      precisionNote: 'Descrita como formosa de rosto e de grande inteligência.'
    },
    historicalContext: {
      period: 'Monarquia Unida / Fuga de Davi de Saul (c. 1020 a.C.)',
      region: 'Carmelo e Deserto de Parã (Sul de Judá)',
      cultureAndCustoms: 'Costume de hospitalidade e partilha de iguarias na tosquia das ovelhas.',
      religiousContext: 'Reconhecimento da unção profética de Davi como o futuro rei de Israel.'
    },
    biblicalStory: 'Mulher sábia e sensata casada com Nabal, homem rico da linhagem de Calebe, mas rude e maligno nas suas ações. Quando Nabal insultou com soberba os mensageiros de Davi que pediam provisões após protegerem seus rebanhos, Davi jurou vingança com espada para exterminar toda a sua casa. Avisada por um servo, Abigail agiu com rapidez assombrosa: preparou duzentos pães, odres de vinho, ovelhas preparadas, trigo tostado, passas e figos em pasta, indo ao encontro de Davi. Prostrou-se aos seus pés com palavras sublimes de intercessão, advertindo Davi contra o derramamento de sangue inocente e profetizando que sua alma seria "atada no feixe dos que vivem com o Senhor" (1 Sm 25:29). Davi louvou a Deus pela sensatez de Abigail. Ao saber do ocorrido no dia seguinte, o coração de Nabal se paralisou como pedra e ele morreu dez dias depois. Davi mandou pedi-la em casamento.',
    virtuesAndTraits: [
      { trait: 'Sabedoria Pacificadora e Prudência Extraordinária', biblicalEvidence: 'Interveio na hora exata, evitando uma chacina vingativa pelas mãos de Davi (1 Sm 25:18-35).' },
      { trait: 'Visão Teológica Profética', biblicalEvidence: 'Reconheceu que Davi guerreava as guerras do Senhor e que Deus lhe estabeleceria casa firme (1 Sm 25:28).' },
      { trait: 'Humildade e Generosidade', biblicalEvidence: 'Pediu que a culpa de Nabal caísse sobre ela mesma perante Davi (1 Sm 25:24).' }
    ],
    errorsAndConflicts: {
      conflict: 'Agir secretamente sem a consulta do marido Nabal.',
      biblicalContext: '1 Samuel 25:19 declara abertamente: "Porém nada disse a seu marido Nabal".',
      biblicalAssessment: 'Ação de emergência estritamente necessária para salvar vidas humanas da morte iminente provocada pela loucura de Nabal.'
    },
    theologicalSignificance: 'Arquétipo da pacificadora prudente (bem-aventurada, Mt 5:9) e exemplo supremo da teologia da intercessão vicária no Antigo Testamento.',
    scholarlyInterpretations: 'Comentaristas admiram a sofisticação retórica do discurso de Abigail em 1 Samuel 25, considerado uma das obras-primas da oratória hebraica clássica.',
    wesleyanPerspective: {
      theme: 'Prudência Cristã e Sabedoria Pacificadora',
      insight: 'Wesley louvou o discernimento de Abigail como modelo de resposta santa que aplaca a ira: "A resposta branda desvia o furor" (Pv 15:1); ela salvou Davi de manchar suas mãos de sangue antes de assumir o trono.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Texto exaustivo e biográfico no capítulo 25 de 1 Samuel.'
    }
  },
  {
    id: 'bate-seba',
    name: 'Bate-Seba',
    originalName: 'בַּת־שֶׁבַע',
    transliteration: 'Bat-Sheva',
    meaning: 'Filha do Juramento / Filha da Abundância',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['2 Samuel 11:1-27', '2 Samuel 12:1-25', '1 Reis 1:11-31', '1 Reis 2:13-25', '1 Crônicas 3:5', 'Salmo 51 (título)', 'Mateus 1:6'],
    family: {
      father: 'Eliã (um dos valentes de Davi; 2 Sm 23:34; neta do conselheiro Aitofel)',
      spouse: 'Urias, o heteu (primeiro marido; 2 Sm 11:3), e depois o Rei Davi (2 Sm 11:27)',
      children: ['Primeiro filho (falecido; 2 Sm 12:18)', 'Salomão (rei; 2 Sm 12:24)', 'Siméia, Sobabe e Natã (1 Cr 3:5)'],
      precisionNote: 'Também chamada de Batsuá em 1 Crônicas 3:5.'
    },
    historicalContext: {
      period: 'Reinado de Davi e Salomão em Jerusalém (c. 990–970 a.C.)',
      region: 'Jerusalém (Cidade de Davi)',
      cultureAndCustoms: 'Poder monárquico absolutista no Oriente Antigo; purificação cerimonial pós-menstrual da lei mosaica.',
      religiousContext: 'A aliança davídica e a centralidade do culto no tabernáculo de Sião.'
    },
    biblicalStory: 'Mulher de excepcional formosura, casada com o fiel guerreiro Urias, o heteu. Enquanto o exército sitiava Rabá, Davi passeava no terraço do palácio e a viu banhando-se após sua purificação; mandou buscá-la e adulterou com ela. Engravidando, enviou mensagem a Davi, que tentou acobertar o ato trazendo Urias e, falhando pela lealdade deste, ordenou que fosse colocado na frente da batalha para morrer. Cumprido o luto, Davi tomou-a por esposa. O profeta Natã confrontou Davi; a primeira criança faleceu sob juízo. Davi a consolou e ela gerou Salomão, amado pelo Senhor (Jedidias). Na velhice de Davi, Bate-Seba agiu com ousadia junto ao profeta Natã para desbaratar a usurpação de Adonias e garantir que Salomão fosse ungido rei conforme o juramento de Davi, tornando-se a influente rainha-mãe (Gevirá).',
    virtuesAndTraits: [
      { trait: 'Sabedoria Política e Coragem na Sucessão Real', biblicalEvidence: 'Entrou com reverência perante Davi garantindo o cumprimento do plano de Deus para o trono (1 Rs 1:15-31).' },
      { trait: 'Maternidade Formadora', biblicalEvidence: 'Dignificada em Provérbios 31:1 como a mãe cujas instruções foram ouvidas por seu filho real.' }
    ],
    errorsAndConflicts: {
      conflict: 'Envolvimento no adultério no palácio real.',
      biblicalContext: '2 Samuel 11 relata o chamado do rei absolutista e a consumação do ato.',
      biblicalAssessment: 'Embora a iniciativa e o abuso de poder tenham partido do rei Davi, a tragédia gerou o luto de Urias, a morte da criança e dor perpétua sobre a dinastia davídica.'
    },
    theologicalSignificance: 'Mãe de Salomão e da linhagem genealógica de Cristo em Mateus 1:6 ("Davi gerou a Salomão da que fora mulher de Urias"). Através de Natã (seu outro filho com Davi; 1 Cr 3:5), também é ancestral de Maria em Lucas 3:31.',
    scholarlyInterpretations: 'Historiadores e exegetas modernos discutem o desequilíbrio absoluto de poder entre um monarca com autoridade de vida e morte e uma súdita cujo marido estava na guerra.',
    wesleyanPerspective: {
      theme: 'Restauração da Graça sobre Cinzas e Arrependimento',
      insight: 'Wesley observa no Salmo 51 e na vida de Bate-Seba que Deus não encerra Sua aliança diante de falhas devastadoras quando há arrependimento profundo: do seio de uma história de tragédia e pecado, o Senhor fez nascer Salomão e o templo sagrado.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'História exaustivamente documentada em 2 Samuel 11-12, 1 Reis 1-2 e Mateus 1.'
    }
  },
  {
    id: 'jezabel',
    name: 'Jezabel',
    originalName: 'אִיזֶבֶל',
    transliteration: 'Izevel',
    meaning: 'Onde está o Príncipe? / Não Exaltada / Devota de Baal',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['1 Reis 16:31', '1 Reis 18:4-19', '1 Reis 19:1-2', '1 Reis 21:1-26', '2 Reis 9:30-37', 'Apocalipse 2:20'],
    family: {
      father: 'Etbaal, rei dos sidônios e sacerdote de Astarote (1 Rs 16:31)',
      spouse: 'Acabe, rei de Israel (1 Rs 16:31)',
      children: ['Acazias e Jorão (reis de Israel) e Atalia (rainha de Judá)'],
      precisionNote: 'Princesa fenícia de Tiro e Sídon.'
    },
    historicalContext: {
      period: 'Reino do Norte (Israel) - Dinastia de Onri (c. 870–850 a.C.)',
      region: 'Samaria e Jezreel',
      cultureAndCustoms: 'Casamento diplomático comercial entre Tiro e Samaria; imposição agressiva do culto a Baal-Melcarte e Astarote.',
      religiousContext: 'A mais severa perseguição estatal contra os profetas de Yahweh e a religião monoteísta.'
    },
    biblicalStory: 'Princesa fenícia idólatra que desposou o fraco rei Acabe e estabeleceu oficialmente o culto a Baal em Israel, sustentando 450 profetas de Baal e 400 de Aserate à sua mesa enquanto massacrava sistematicamente os profetas do Senhor. Após o confronto do Monte Carmelo onde Elias derrotou os profetas idólatras, enviou mensageiro jurando a morte de Elias em 24 horas. Quando Nabote recusou vender sua vinha de herança a Acabe, Jezabel falsificou cartas com o selo do rei, subornou homens ímpios para acusarem Nabote falsamente de blasfêmia e o mandou apedrejar até a morte para confiscar a vinha. Elias profetizou que os cães a comeriam junto ao muro de Jezreel. Anos depois, diante do julgamento executado por Jeú, pintou os olhos, enfeitou a cabeça e o desafiou da janela, sendo atirada pelos seus próprios eunucos e devorada por cães na rua.',
    virtuesAndTraits: [
      { trait: 'Determinação e Liderança Implacável', biblicalEvidence: 'Conduzia as decisões do Estado sobrepujando o rei com vontade de ferro (1 Rs 21:7).' }
    ],
    errorsAndConflicts: {
      conflict: 'Idolatria violenta, genocídio de profetas e assassinato de Nabote.',
      biblicalContext: '1 Reis 21:25: "Ninguém houve, pois, como Acabe, que se vendeu para fazer o que era mau... induzido por Jezabel, sua mulher".',
      biblicalAssessment: 'Considerada na Bíblia o símbolo máximo da sedução idólatra, crueldade tirânica e paganismo desavergonhado.'
    },
    theologicalSignificance: 'Antítese da mulher piedosa; seu nome transcende a história e ressurge em Apocalipse 2:20 na carta à igreja de Tiatira como símbolo de qualquer falsa profetisa ou doutrina que seduza o povo de Deus à imoralidade e idolatria.',
    scholarlyInterpretations: 'Historiadores do Oriente Próximo explicam que sua postura correspondia ao absolutismo imperial fenício em choque direto com a aliança mosaica, onde o rei não podia desrespeitar os direitos da herança familiar da terra.',
    wesleyanPerspective: {
      theme: 'A Gravidade Extrema da Apostasia e a Resistência à Graça',
      insight: 'Wesley adverte que a obstinação voluntária contra a verdade conduz o ser humano a uma dureza de coração terminal, onde o julgamento inevitável da justiça divina se cumpre sem escapatória.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica detalhada nos livros de 1 e 2 Reis e alusão em Apocalipse 2.'
    }
  },
  {
    id: 'ester',
    name: 'Ester (Hadassa)',
    originalName: 'אֶסְתֵּר (originalmente הֲדַסָּה - Hadassah)',
    transliteration: 'Esther (de Stara/Ishtar - Estrela) / Hadassah (Murta)',
    meaning: 'Estrela (Persa) / Murta perfumada (Hebraico)',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['Livro de Ester 1 a 10'],
    family: {
      father: 'Abiail (da Tribo de Benjamim; Et 2:15)',
      spouse: 'Rei Assuero (Xerxes I da Pérsia; Et 2:17)',
      children: [],
      relatives: 'Criada e adotada por seu primo Mardoqueu (Et 2:7)'
    },
    historicalContext: {
      period: 'Império Persa Aquemênida (c. 480–470 a.C.)',
      region: 'Susã (capital de inverno do Império Persa)',
      cultureAndCustoms: 'Etiqueta rígida e protocolar da corte persa; pena de morte automática para quem se aproximasse do trono sem ser convocado.',
      religiousContext: 'Povo judeu disperso vivendo sob domínio gentílico na Diáspora.'
    },
    biblicalStory: 'Órfã judia exilada na Pérsia, criada com retidão por seu primo Mardoqueu. Após a deposição da rainha Vasti, foi recolhida ao harém real e, por sua modéstia, graça e formosura, achou favor diante do rei Assuero que colocou a coroa real sobre sua cabeça. Quando o vizir Hamã promulgou um decreto irrevogável com o selo real para exterminar todos os judeus em um único dia, Mardoqueu a desafiou: "Quem sabe se para um tempo como este chegaste a este reino?" (Et 4:14). Ester convocou um jejum rigoroso de três dias entre todos os judeus de Susã, assumindo a célebre resolução: "Se perecer, pereci" (Et 4:16). Apresentou-se sem chamado ao rei, que estendeu seu cetro de ouro; convidou-o com Hamã a dois banquetes e desmascarou o plano genocida do ministro. O decreto foi contraposto, o povo salvo e instituída a Festa de Purim.',
    virtuesAndTraits: [
      { trait: 'Coragem Heroica e Amor Sacrificial pelo Seu Povo', biblicalEvidence: '"Entrarei a ter com o rei, ainda que não é segundo a lei; e, se perecer, pereci" (Et 4:16).' },
      { trait: 'Prudência, Jejum e Autocontrole Exemplar', biblicalEvidence: 'Convocou jejum sagrado antes de qualquer ação e soube aguardar o momento exato para falar nos banquetes.' },
      { trait: 'Humildade e Obediência ao Mentor', biblicalEvidence: 'Mesmo após ser coroada rainha da maior potência mundial, continuou ouvindo os conselhos de Mardoqueu (Et 2:20).' }
    ],
    errorsAndConflicts: {
      conflict: 'Ocultação de sua identidade judaica inicial.',
      biblicalContext: 'Ester 2:10 declara que por ordem prudente de Mardoqueu ela não revelou seu povo.',
      biblicalAssessment: 'Estratégia necessária no ambiente hostil persa até o momento oportuno de revelar-se como intercessora providencial.'
    },
    theologicalSignificance: 'O Livro de Ester é o único da Bíblia que não menciona explicitamente o nome de Deus, ilustrando magistralmente a Sua providência invisível e soberana regendo a história das nações para salvar Seu povo remanescente.',
    scholarlyInterpretations: 'Historiadores identificam Assuero como Xerxes I, o célebre imperador da invasão à Grécia (Batalha de Termópilas), e atestam a precisão arqueológica dos relevos e costumes do palácio de Susã descritos no livro.',
    wesleyanPerspective: {
      theme: 'Providência Divina e Responsabilidade Humana Cooperante',
      insight: 'Wesley destacava as palavras de Mardoqueu (Et 4:14): Deus não deixará de socorrer o Seu povo, mas conclama indivíduos a colocarem sua liberdade e coragem em ação como instrumentos vivos da graça salvadora.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica completa nos 10 capítulos do Livro de Ester.'
    }
  },
  {
    id: 'maria-mae-de-jesus',
    name: 'Maria, Mãe de Jesus',
    originalName: 'מִרְיָם / Μαριάμ',
    transliteration: 'Miryam (Aramaico / Hebraico) / Mariam (Grego)',
    meaning: 'Senhora Amada / Exaltada / Amada de Deus',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Mateus 1:16-25', 'Mateus 2:11-23', 'Mateus 12:46-50', 'Marcos 3:31-35', 'Lucas 1:26-56', 'Lucas 2:1-52', 'João 2:1-12', 'João 19:25-27', 'Atos 1:14'],
    family: {
      father: 'Eli (Lucas 3:23 na leitura genealógica patrística); tradição apócrifa do Protoevangelho de Tiago a chama de filha de Joaquim e Ana',
      spouse: 'José, carpinteiro da linhagem de Davi (Mateus 1:18-24)',
      children: ['Jesus Cristo (primogênito gerado pelo Espírito Santo; Mt 1:25)', 'Tiago, José, Simão, Judas e irmãs (Mt 13:55-56)'],
      relatives: 'Parenta de Isabel, mãe de João Batista (Lucas 1:36)',
      precisionNote: 'A concepção virginal de Jesus é doutrina bíblica explícita; o status de outros filhos posteriores de José e Maria é afirmado nos textos de Mt 13:55 e glosado diferentemente por tradições católicas e ortodoxas.'
    },
    historicalContext: {
      period: 'Transição da Era Antes de Cristo para a Nova Aliança (c. 6 a.C. - 33 d.C.)',
      region: 'Nazaré da Galileia, Belém da Judeia, Egito e Jerusalém',
      cultureAndCustoms: 'Noivado judaico com valor legal vinculante (Kiddushin); risco de apedrejamento público em caso de suspeita de fornicação.',
      religiousContext: 'Expectativa messiânica ardente sob ocupação militar do Império Romano.'
    },
    biblicalStory: 'Jovem virgem piedosa de Nazaré noiva de José. Recebeu a visita do anjo Gabriel anunciando que conceberia do Espírito Santo o Filho do Altíssimo, cujo reino não terá fim. Maria respondeu em total submissão: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra" (Lc 1:38). Visitou Isabel na Judeia e entoou o magnífico hino profético Magnificat (Lc 1:46-55). Deu à luz a Jesus em Belém numa manjedoura; guardava todas as palavras dos pastores e profetas meditando-as no coração. Foi advertida pelo idoso Simeão de que uma espada transpassaria a sua própria alma. Fugiu para o Egito com José para salvar o menino da fúria de Herodes. Esteve nas Bodas de Caná onde instruiu os servos: "Fazei tudo o que ele vos disser" (Jo 2:5). Permaneceu de pé junto à Cruz no Gólgota, onde Jesus agonizante a entregou aos cuidados filiais do apóstolo João. Após a ressurreição, perseverava em oração unânime com os apóstolos no Cenáculo aguardando o derramamento do Espírito Santo no Pentecostes.',
    virtuesAndTraits: [
      { trait: 'Obediência e Humildade Perfeitas perante a Palavra', biblicalEvidence: '"Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra" (Lc 1:38).' },
      { trait: 'Fé Reverente e Meditação Contemplativa', biblicalEvidence: '"Maria, porém, guardava todas estas coisas, meditando-as no seu coração" (Lc 2:19, 51).' },
      { trait: 'Perseverança aos Pés da Cruz e na Oração', biblicalEvidence: 'Estava firme junto à cruz no Gólgota (Jo 19:25) e perseverava em oração no cenáculo em Atos 1:14.' }
    ],
    errorsAndConflicts: {
      conflict: 'Incompreensão momentânea da missão pública de Jesus durante Seu ministério.',
      biblicalContext: 'Marcos 3:21 e 31-35 relata a ida dos familiares temendo por Ele.',
      biblicalAssessment: 'Evidencia sua humanidade real e o processo de aprendizado da fé de que seu filho era também o seu Senhor e Salvador.'
    },
    theologicalSignificance: 'O instrumento humano eleito para a Encarnação do Verbo eterno de Deus (Teótoco / Aquela que deu à luz o Messias). Ela própria proclamou em Lucas 1:47: "O meu espírito se alegra em Deus, meu Salvador", atestando sua necessidade da graça redentora comum a toda a humanidade.',
    scholarlyInterpretations: 'Divergências históricas marcantes: a Reforma Protestante rejeitou a mediação corredentora e a virgindade perpétua dogmaizada pela tradição romana medieval, resgatando Maria como o mais puro exemplo de discípula obediente e santa de Cristo.',
    wesleyanPerspective: {
      theme: 'Exemplo Supremo de Fé, Submissão e Santidade de Vida',
      insight: 'John Wesley mantinha profunda reverência por Maria como "bem-aventurada entre as mulheres", destacando que a verdadeira bem-aventurança, como ensinou Jesus (Lc 11:28), é ouvir a Palavra de Deus e guardá-la com fidelidade sincera.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Textos canônicos abundantes nos quatro Evangelhos e no início de Atos dos Apóstolos.'
    }
  },
  {
    id: 'isabel',
    name: 'Isabel',
    originalName: 'אֱלִישֶׁבַע / Ἐλισάβετ',
    transliteration: 'Elishevah (Hebraico) / Elisavet (Grego)',
    meaning: 'Deus é Juramento / Aliança de Deus',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Lucas 1:5-66'],
    family: {
      spouse: 'Zacarias, sacerdote da turma de Abias (Lc 1:5)',
      children: ['João Batista (o profeta precursor de Cristo; Lc 1:13, 57)'],
      relatives: 'Parenta da Virgem Maria (Lucas 1:36); descendente direta das filhas de Arão'
    },
    historicalContext: {
      period: 'Fim do Período do Segundo Templo / Reinado de Herodes, o Grande (c. 6 a.C.)',
      region: 'Região montanhosa de Judá (Ein Karem)',
      cultureAndCustoms: 'Linhagem estritamente sacerdotal; vergonha social da esterilidade na velhice.',
      religiousContext: 'Piedade fiel que guardava todos os preceitos e ordenanças do Senhor de maneira irrepreensível.'
    },
    biblicalStory: 'Mulher piedosa da linhagem de Arão, casada com o idoso sacerdote Zacarias. Lucas registra que ambos eram justos diante de Deus, andando sem repreensão em todos os mandamentos, mas não tinham filhos porque Isabel era estéril e ambos avançados em dias. O anjo Gabriel apareceu a Zacarias anunciando que suas orações haviam sido ouvidas e que Isabel daria à luz aquele que prepararia o caminho do Messias. Na gravidez, recolheu-se cinco meses em adoração. Ao receber a visita de Maria grávida de Jesus, quando a saudação soou aos seus ouvidos, o menino saltou de alegria no seu ventre e Isabel, cheia do Espírito Santo, exclamou em alta voz: "Bendita és tu entre as mulheres, e bendito o fruto do teu ventre! E de onde me provém isto a mim, que venha visitar-me a mãe do meu Senhor?" (Lc 1:42-43). Firme na promessa, confirmou contra a tradição dos parentes que o menino se chamaria João.',
    virtuesAndTraits: [
      { trait: 'Justiça e Integridade Espiritual Irrepreensível', biblicalEvidence: '"Ambos eram justos perante Deus, vivendo irrepreensivelmente em todos os mandamentos" (Lc 1:6).' },
      { trait: 'Discernimento Profético no Espírito Santo', biblicalEvidence: 'Cheia do Espírito Santo, proclamou Jesus como "meu Senhor" ainda no ventre de Maria (Lc 1:41-43).' },
      { trait: 'Fidelidade Firme à Palavra de Deus', biblicalEvidence: 'Insistiu no nome profético João dado pelo anjo (Lc 1:60).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falta moral registrada nas Escrituras.',
      biblicalContext: 'O texto bíblico salienta sua justiça irrepreensível e reverência.',
      biblicalAssessment: 'Modelo de santidade sacerdotal do Antigo Testamento preparando a aurora da Nova Aliança.'
    },
    theologicalSignificance: 'Isabel é a primeira pessoa nos Evangelhos a confessar publicamente a divindade e senhorio de Jesus ("a mãe do meu Senhor"), marcando a transição profética entre a Lei mosaica e o advento do Salvador.',
    scholarlyInterpretations: 'Historiadores ressaltam que seu filho João Batista foi santificado desde o ventre de Isabel pelo mover do Espírito Santo relatado em Lucas 1:15 e 41.',
    wesleyanPerspective: {
      theme: 'A Plenitude do Espírito Santo e a Santidade de Vida',
      insight: 'Wesley destacou que a integridade diária de Isabel e a sua plenitude no Espírito Santo mostram que Deus recompensa a obediência perseverante e derrama luz espiritual sobre os humildes de coração.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa detalhada e explícita no primeiro capítulo do Evangelho de Lucas.'
    }
  },
  {
    id: 'ana-a-profetisa',
    name: 'Ana, a Profetisa',
    originalName: 'חַנָּה / Ἄννα',
    transliteration: 'Hannah (Hebraico) / Anna (Grego)',
    meaning: 'Graça / Favor',
    testament: 'NT',
    category: 'Profetisas',
    biblicalReferences: ['Lucas 2:36-38'],
    family: {
      father: 'Fanuel, da tribo de Aser (Lc 2:36)',
      spouse: 'Faleceu após 7 anos de casada (Lc 2:36)',
      precisionNote: 'Viúva de cerca de 84 anos (ou viúva há 84 anos, segundo variantes textuais de Lucas).'
    },
    historicalContext: {
      period: 'Início da era cristã (c. 4 a.C.)',
      region: 'Jerusalém / Pátios do Templo',
      cultureAndCustoms: 'Devoção monástica judaica de oração contínua nas cortes do Templo de Herodes.',
      religiousContext: 'Expectativa profética fervorosa pela "redenção de Jerusalém".'
    },
    biblicalStory: 'Profetisa idosa que viveu com seu marido sete anos desde a virgindade e permaneceu viúva até os 84 anos. Não se afastava do Templo, servindo a Deus noite e dia com jejuns e orações. Chegando naquela mesma hora em que Maria e José traziam o menino Jesus para a consagração legal, deu graças a Deus e falava a respeito do menino a todos os que esperavam a redenção de Jerusalém.',
    virtuesAndTraits: [
      { trait: 'Perseverança Ininterrupta de Devoção e Oração', biblicalEvidence: '"Não se afastava do templo, servindo a Deus noite e dia em jejuns e orações" (Lc 2:37).' },
      { trait: 'Testemunho Evangelístico Ousado', biblicalEvidence: 'Falava de Jesus a todos quantos esperavam a redenção de Jerusalém (Lc 2:38).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhum conflito ou erro registrado nas Escrituras.',
      biblicalContext: 'Lucas a apresenta como uma coroa de honra da velhice pia.',
      biblicalAssessment: 'Vida de dedicação integral ao Senhor.'
    },
    theologicalSignificance: 'Representa a voz profética da Antiga Aliança reconhecendo e acolhendo a chegada do Messias no templo terreno.',
    scholarlyInterpretations: 'Debate filológico em Lucas 2:37 sobre a idade exata: se ela tinha 84 anos de vida ou se era viúva há 84 anos (o que a tornaria centenária). Ambos os casos confirmam sua longevidade em fidelidade.',
    wesleyanPerspective: {
      theme: 'Vida de Oração Constante e Ministério da Maturidade',
      insight: 'Wesley recomendava o exemplo de Ana aos crentes idosos, exortando que a velhice dedicada à intercessão e ao testemunho de Cristo é um dos maiores pilares da igreja.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Descrita com clareza nos versículos 36 a 38 de Lucas 2.'
    }
  },
  {
    id: 'maria-madalena',
    name: 'Maria Madalena',
    originalName: 'Μαρία ἡ Μαγδαληνή',
    transliteration: 'Maria He Magdalene',
    meaning: 'Maria da cidade de Magdala (Torre de Peixes)',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Mateus 27:55-61', 'Mateus 28:1-10', 'Marcos 15:40-47', 'Marcos 16:1-11', 'Lucas 8:1-3', 'Lucas 24:1-10', 'João 19:25', 'João 20:1-18'],
    family: {
      precisionNote: 'Não há qualquer registro bíblico sobre família, casamento ou filhos. Afirmações posteriores de romance ou parentesco com Jesus são lendas sem suporte bíblico ou histórico.'
    },
    historicalContext: {
      period: 'Ministério de Jesus e Ressurreição (c. 28–33 d.C.)',
      region: 'Magdala (litoral do Mar da Galileia), Judeia e Jerusalém',
      cultureAndCustoms: 'Mulheres galileias independentes de posse que proviam para o sustento dos mestres itinerantes.',
      religiousContext: 'Libertação do jugo das trevas e discipulado fiel a Jesus.'
    },
    biblicalStory: 'Discípula de Jesus de quem saíram sete demônios por libertação divina (Lc 8:2). Passou a segui-lO fielmente pela Galileia e Judeia, ajudando a custear Seu ministério com seus próprios recursos materiais ao lado de Joana e Susana. Acompanhou Jesus em Seus momentos mais terríveis: esteve ao pé da Cruz no Gólgota quando a maioria dos apóstolos havia fugido; observou atentamente onde e como o corpo de Jesus foi sepultado por José de Arimatéia. No primeiro dia da semana, de madrugada, foi com outras mulheres ao sepulcro levando aromas. Encontrando a pedra removida, correu aos apóstolos e depois permaneceu chorando junto à tumba vazia. Foi honrada com a primeira aparição de Jesus ressurreto na história humana, que a chamou pelo nome ("Maria!") e a comissionou como a primeira mensageira da Ressurreição aos onze: "Vai para meus irmãos e dize-lhes: Subo para meu Pai e vosso Pai" (Jo 20:17).',
    virtuesAndTraits: [
      { trait: 'Gratidão Profunda e Lealdade Inabalável', biblicalEvidence: 'Seguiu e serviu a Jesus desde a Galileia até o Gólgota e a tumba (Lc 8:2-3; Jo 19:25).' },
      { trait: 'Apostola Apostolorum (Primeira Testemunha da Ressurreição)', biblicalEvidence: 'Proclamou aos discípulos: "Vi o Senhor!" e relatou Suas palavras exatas (Jo 20:18).' },
      { trait: 'Generosidade Material e Apoio Missionário', biblicalEvidence: 'Ajudava a manter o ministério de Jesus com seus próprios bens (Lc 8:3).' }
    ],
    errorsAndConflicts: {
      conflict: 'Confusão histórica e preconceito secular causado pela tradição papal medieval.',
      biblicalContext: 'O papa Gregório Magno (em 591 d.C.) fundiu erroneamente Maria Madalena com a mulher pecadora anônima de Lucas 7 e com Maria de Betânia.',
      biblicalAssessment: '🔴 INFORMAÇÃO INCERTA / TRADIÇÃO EQUIVOCADA: A Bíblia nunca afirma que Maria Madalena era prostituta, mas sim que foi liberta de opressão demoníaca.'
    },
    theologicalSignificance: 'Apóstola dos apóstolos pela ordem de Cristo; personifica a vitória da graça sobre as forças das trevas e a dignificação máxima da mulher como testemunha pioneira da Ressurreição corpórea de Cristo.',
    scholarlyInterpretations: 'Historiadores eclesiásticos confirmam hoje que a estigmatização como prostituta foi um equívoco hermenêutico histórico corrigido formalmente inclusive pela Igreja Católica moderna (elevada a festa litúrgica em 2016).',
    wesleyanPerspective: {
      theme: 'Transformação Total pela Graça e o Testemunho da Ressurreição',
      insight: 'Wesley exalta o amor fervoroso de Maria Madalena: ela que foi libertada de grande opressão demonstrou fidelidade superior à dos apóstolos homens, sendo galardoada com a primeira visão do Senhor ressurreto.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Presença e palavras atestadas em todos os quatro Evangelhos canônicos.'
    }
  },
  {
    id: 'marta',
    name: 'Marta de Betânia',
    originalName: 'Μάρθα',
    transliteration: 'Martha (Aramaico: Martâ)',
    meaning: 'Senhora / Dona da Casa',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Lucas 10:38-42', 'João 11:1-44', 'João 12:1-2'],
    family: {
      children: [],
      relatives: 'Irmã de Maria e de Lázaro de Betânia (Lucas 10:38-39; João 11:1)',
      precisionNote: 'A casa de Betânia onde Jesus se hospedava frequentemente era de Marta.'
    },
    historicalContext: {
      period: 'Ministério de Jesus (c. 30–33 d.C.)',
      region: 'Betânia (aldeia a 3 km a leste de Jerusalém, no Monte das Oliveiras)',
      cultureAndCustoms: 'Dever sagrado judaico da hospitalidade diligente com viajantes e mestres.',
      religiousContext: 'Amizade íntima e refúgio acolhedor para Jesus diante da perseguição dos líderes em Jerusalém.'
    },
    biblicalStory: 'Mulher hospitaleira de Betânia que abriu sua casa para acolher Jesus e Seus discípulos. Em Lucas 10, sentindo-se sobrecarregada com os muitos afazeres da recepção enquanto sua irmã Maria estava sentada aos pés de Jesus ouvindo Seus ensinamentos, queixou-se ao Senhor pedindo que mandasse Maria ajudá-la. Jesus a repreendeu com mansidão: "Marta, Marta, andas inquieta e te preocupas com muitas coisas. Mas uma só é necessária; Maria escolheu a boa parte, a qual não lhe será tirada" (Lc 10:41-42). Quando seu irmão Lázaro adoeceu e morreu, Marta saiu ao encontro de Jesus logo que soube que Ele se aproximava, proferindo uma das maiores confissões de fé de todo o Novo Testamento: "Sim, Senhor, eu creio que tu és o Cristo, o Filho de Deus que havia de vir ao mundo" (Jo 11:27). Diante do sepulcro, lembrou com franqueza que já cheirava mal por ser o quarto dia, testemunhando em seguida a ressurreição triunfal de seu irmão.',
    virtuesAndTraits: [
      { trait: 'Hospitalidade Generosa e Incansável', biblicalEvidence: 'Recebeu a Jesus e a comitiva apostólica em seu lar (Lc 10:38; Jo 12:2).' },
      { trait: 'Confissão Cristológica Profunda', biblicalEvidence: 'Confessou a divindade e o messiado de Jesus em termos idênticos aos de Pedro (Jo 11:27).' },
      { trait: 'Franqueza e Amor Fraternal', biblicalEvidence: 'Procurou Jesus com confiança imediata durante o luto de Lázaro (Jo 11:20-22).' }
    ],
    errorsAndConflicts: {
      conflict: 'Ansiedade com afazeres domésticos e repreensão à irmã.',
      biblicalContext: 'Lucas 10:40: "Marta, porém, estava atarefada em muitos serviços...".',
      biblicalAssessment: 'Não foi repreendida por trabalhar ou cozinhar, mas pela inquietação desordenada que a distraiu da comunhão com a Palavra viva.'
    },
    theologicalSignificance: 'Marta personifica o serviço ativo e diligente que aprende a subordinar o ativismo à presença e à voz de Cristo. Sua declaração em João 11:27 é um dos ápices teológicos do Quarto Evangelho.',
    scholarlyInterpretations: 'Comentaristas equilibram o binômio Marta (serviço ativo) e Maria (contemplação), frisando que a igreja precisa de ambas em harmonia sob o senhorio de Cristo.',
    wesleyanPerspective: {
      theme: 'Fé Ativa, Obras de Piedade e Descanso na Graça',
      insight: 'Wesley ressaltava que a verdadeira religião une a comunhão interior de Maria com a prontidão serviçal de Marta: as boas obras perdem seu valor se forem feitas com espírito agitado e sem a quietude da oração aos pés do Mestre.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativas bíblicas ricas em Lucas 10 e João 11 e 12.'
    }
  },
  {
    id: 'maria-de-betania',
    name: 'Maria de Betânia',
    originalName: 'Μαρία',
    transliteration: 'Maria',
    meaning: 'Amada / Exaltada',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Lucas 10:38-42', 'João 11:1-45', 'João 12:1-8', 'Mateus 26:6-13', 'Marcos 14:3-9'],
    family: {
      children: [],
      relatives: 'Irmã de Marta e de Lázaro de Betânia (Lucas 10:39; João 11:1)'
    },
    historicalContext: {
      period: 'Ministério de Jesus e Última Semana antes da Páscoa (c. 33 d.C.)',
      region: 'Betânia (Judeia)',
      cultureAndCustoms: 'Costume rabínico que frequentemente proibia mulheres de assentarem-se como alunas formais aos pés de um rabi; uso de perfumes preciosos para honra de reis e sepultamento.',
      religiousContext: 'Preparação profética da morte e sepultura de Jesus Cristo.'
    },
    biblicalStory: 'Irmã de Marta e Lázaro, caracterizada em todas as suas aparições nos Evangelhos como aquela que se assenta aos pés de Jesus. Em Lucas 10, assentou-se aos pés do Mestre ouvindo a Sua doutrina, recebendo dEle o elogio por escolher "a melhor parte". Na morte de Lázaro, ao ver Jesus chegar, prostrou-se a Seus pés chorando, comovendo profundamente o espírito de Jesus a ponto de o próprio Senhor chorar (Jo 11:32-35). Seis dias antes da Páscoa, durante uma ceia em Betânia, tomou uma libra de bálsamo de nardo puro de grande valor (cerca de 300 denários, equivalente a um ano inteiro de salário de um trabalhador), ungiu os pés de Jesus e os enxugou com os seus cabelos, perfumando toda a casa. Diante das críticas indignadas de Judas Iscariotes pela suposta perda de dinheiro, Jesus a defendeu vigorosamente: "Deixai-a; para o dia da minha sepultura guardou isto... onde for pregado este evangelho, em todo o mundo, também será contado o que ela fez, para memória sua" (Jo 12:7; Mc 14:9).',
    virtuesAndTraits: [
      { trait: 'Adoração Extravagante e Sem Limites', biblicalEvidence: 'Derramou perfume no valor de 300 denários sobre Jesus enxugando Seus pés com os próprios cabelos (Jo 12:3).' },
      { trait: 'Sede da Palavra e Discipulado Íntimo', biblicalEvidence: 'Assentou-se aos pés de Jesus para aprender, escolhendo "a boa parte" (Lc 10:39, 42).' },
      { trait: 'Sensibilidade Espiritual Profética Única', biblicalEvidence: 'Foi a única discípula que compreendeu de antemão a iminência da morte e sepultamento de Cristo (Mc 14:8).' }
    ],
    errorsAndConflicts: {
      conflict: 'Julgada severamente e criticada pelos discípulos e por Judas como desperdiçadora.',
      biblicalContext: 'Marcos 14:4-5 e João 12:4-5 relatam a censura dos presentes.',
      biblicalAssessment: 'Jesus a justificou publicamente e imortalizou sua oferta em todo o mundo.'
    },
    theologicalSignificance: 'Arquétipo da verdadeira adoração cristã centrada exclusivamente na pessoa de Cristo. Seu ato antecipou o sepultamento do Redentor, demonstrando que nenhum sacrifício material é exagerado para quem reconhece a infinita majestade do Filho de Deus.',
    scholarlyInterpretations: 'Historiadores salientam a audácia cultural de desamarrar os cabelos em público no século I, quebrando barreiras cerimoniais por reverência ardente a Jesus.',
    wesleyanPerspective: {
      theme: 'Amor Santo e Devoção Perfeita a Cristo',
      insight: 'John Wesley sublinhava que Maria de Betânia exemplifica o mandamento do amor supremo: quem ama a Cristo com todo o coração não calcula custos nem mede sacrifícios, mas derrama tudo perante os Seus pés.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Textos harmônicos em Lucas 10, João 11-12 e paralelos em Mateus e Marcos.'
    }
  },
  {
    id: 'mulher-samaritana',
    name: 'A Mulher Samaritana (Fotina, na tradição)',
    originalName: 'Ἡ Σαμαρεῖτις (na tradição oriental: Φωτεινή - Photine)',
    transliteration: 'He Samareitis / Photine',
    meaning: 'A Samaritana / Luminosa (nome atribuído pela tradição cristã)',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['João 4:1-42'],
    family: {
      spouse: 'Teve cinco maridos no passado, e o homem com quem vivia então não era seu marido (João 4:18)',
      children: [],
      precisionNote: 'A Bíblia não registra seu nome civil pessoal; na tradição cristã oriental foi chamada de Fotina.'
    },
    historicalContext: {
      period: 'Ministério de Jesus (c. 30 d.C.)',
      region: 'Sicar (Samaria, junto ao Poço de Jacó e ao Monte Gerizim)',
      cultureAndCustoms: 'Rivalidade étnica e religiosa milenar ("os judeus não se dão com os samaritanos", Jo 4:9); rabinos não costumavam dialogar a sós com mulheres em vias públicas; buscar água ao meio-dia (hora sexta) indicava isolamento social das demais mulheres da vila.',
      religiousContext: 'Controvérsia sobre o local correto de adoração (Monte Gerizim em Samaria vs Monte Sião em Jerusalém).'
    },
    biblicalStory: 'Mulher de Sicar que foi tirar água no secular Poço de Jacó ao meio-dia sob calor intenso. Jesus, cansado da viagem, assentou-se junto à fonte e surpreendeu-a pedindo: "Dá-me de beber". A mulher questionou o fato de um judeu dirigir a palavra a uma samaritana. Jesus ofereceu-lhe "água viva" que salta para a vida eterna. Quando Jesus revelou sobrenaturalmente o histórico oculto da sua vida sentimental ("Disseste bem: Não tenho marido; porque tiveste cinco maridos, e o que agora tens não é teu marido"), ela reconheceu: "Senhor, vejo que és profeta" (Jo 4:19). Em seguida, dialogaram sobre o culto genuíno e Jesus fez a sublime revelação: "Os verdadeiros adoradores adorarão o Pai em espírito e em verdade" (Jo 4:23). Quando ela mencionou a esperança no Messias, Jesus declarou explicitamente pela primeira vez nos Evangelhos: "Eu o sou, eu que falo contigo" (Jo 4:26). Deixando seu cântaro, correu à cidade e testemunhou a todos: "Vinde, vede um homem que me disse tudo quanto tenho feito. Porventura não é este o Cristo?". Pelo testemunho dela, muitos samaritanos creram em Jesus.',
    virtuesAndTraits: [
      { trait: 'Espírito Evangelístico Instantâneo e Impactante', biblicalEvidence: 'Deixou o cântaro no poço e proclamou Cristo na sua cidade, trazendo a vila inteira aos pés do Salvador (Jo 4:28-30).' },
      { trait: 'Franqueza e Sede de Verdade Espiritual', biblicalEvidence: 'Dialogou com inteligência e sede sobre o culto a Deus e a esperança messiânica (Jo 4:19-25).' }
    ],
    errorsAndConflicts: {
      conflict: 'Vida relacional desordenada e pecado de coabitação fora do matrimônio.',
      biblicalContext: 'João 4:17-18 expõe com precisão a sucessão de cinco maridos anteriores e a relação ilícita atual.',
      biblicalAssessment: 'Jesus expôs sua ferida moral com amor e dignidade, não para esmagá-la, mas para conduzi-la ao perdão e à fonte de água viva.'
    },
    theologicalSignificance: 'Quebra revolucionária das barreiras de preconceito de gênero, raça e religião por Cristo. Ela é a destinatária do mais profundo discurso bíblico sobre adoração em espírito e em verdade e uma das primeiras evangelistas transculturais do Evangelho.',
    scholarlyInterpretations: 'Teólogos concordam sobre a intencionalidade de Jesus em passar por Samaria ("era-lhe necessário passar por Samaria", Jo 4:4) por propósito missionário da graça.',
    wesleyanPerspective: {
      theme: 'Graça Preveniente e o Convite Aberto a Todo Pecador',
      insight: 'Wesley ensinava que a água viva oferecida por Cristo é a graça santificadora do Espírito Santo que purifica a alma ressequida de qualquer pecador, convertendo o coração ferido em manancial de testemunho vivo.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa integral e detalhada nos versículos 1 a 42 de João 4.'
    }
  },
  {
    id: 'mulher-fluxo-de-sangue',
    name: 'A Mulher com o Fluxo de Sangue',
    originalName: 'Ἡ γυνὴ αἱμορροοῦσα (Tradição: Verônica / Berenice)',
    transliteration: 'He gyne haimorrhoousa',
    meaning: 'A mulher acometida de hemorragia',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Mateus 9:20-22', 'Marcos 5:25-34', 'Lucas 8:43-48'],
    family: {
      children: [],
      precisionNote: 'A Bíblia não preserva seu nome nem detalhes familiares; na tradição apócrifa cristã posterior foi chamada de Verônica ou Berenice.'
    },
    historicalContext: {
      period: 'Ministério de Jesus na Galileia (c. 31 d.C.)',
      region: 'Cafarnaum (costa do Mar da Galileia)',
      cultureAndCustoms: 'Lei de pureza levítica severa (Levítico 15:25-30): a hemorragia contínua a tornava cerimonialmente imunda, assim como qualquer pessoa ou objeto que ela tocasse, gerando banimento social e religioso completo.',
      religiousContext: 'O tzitzit (borlas azuis na orla da túnica dos mestres judeus) simbolizava a autoridade e os mandamentos de Deus (Nm 15:38-39; Ml 4:2).'
    },
    biblicalStory: 'Mulher que padecia há 12 anos de uma hemorragia incurável. Havia sofrido muito nas mãos de muitos médicos, gastando todos os seus bens e recursos sem obter cura alguma, antes piorando. Ouvindo falar de Jesus e de Seus milagres, rompeu a densa multidão que o apertava, dizendo consigo mesma em fé santa: "Se eu tão somente tocar nas suas vestes, ficarei sã" (Mc 5:28). Chegando por trás, tocou na orla do manto de Jesus. No mesmo instante a fonte do seu sangue estancou e sentiu no corpo que estava curada. Jesus, percebendo que de Si havia saído virtude curadora (dynamis), parou e perguntou: "Quem tocou nas minhas vestes?". Temendo e tremendo, ciente do que nela se operara, ela veio, prostrou-se diante dEle e declarou perante todo o povo a verdade. Jesus a acolheu com infinita ternura: "Filha, a tua fé te salvou; vai em paz e fica livre do teu mal" (Mc 5:34).',
    virtuesAndTraits: [
      { trait: 'Fé Ousada e Perseverança Extraordinária', biblicalEvidence: 'Enfrentou o preconceito da impureza cerimonial e a multidão para tocar a orla das vestes de Jesus (Mc 5:27-28).' },
      { trait: 'Confissão Pública Corajosa', biblicalEvidence: 'Veio prostrar-se perante Jesus e contou toda a verdade diante de toda a assembleia (Lc 8:47).' }
    ],
    errorsAndConflicts: {
      conflict: 'Violação da lei de isolamento cerimonial do Antigo Testamento.',
      biblicalContext: 'Ao tocar na multidão estando imunda segundo Levítico 15, arriscava represália e apedrejamento social.',
      biblicalAssessment: 'Jesus não se contaminou com a impureza dela; pelo contrário, a pureza e santidade divina de Jesus aniquilaram a enfermidade e restauraram sua dignidade.'
    },
    theologicalSignificance: 'Ilustração máxima da fé que toca a Cristo ativamente em meio à multidão passiva. O título "Filha" (Thygater) usado por Jesus é o único registro em todos os Evangelhos onde Cristo chama uma mulher individualmente de "Filha", conferindo-lhe pertencimento pactual.',
    scholarlyInterpretations: 'Historiadores e exegetas conectam a "orla da veste" à profecia messiânica de Malaquias 4:2 ("o Sol da Justiça nascerá trazendo salvação em suas asas/orlas").',
    wesleyanPerspective: {
      theme: 'A Fé que se Apropria da Graça Imediata de Cristo',
      insight: 'Wesley destacava a diferença crucial entre a multidão que apenas apertava e esbarrava em Jesus e a mulher que o tocou pela fé: muitos têm contato externo com o Evangelho, mas apenas os que tocam a Cristo pela fé viva experimentam a virtude salvadora do Espírito.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa sinótica harmônica em Mateus 9, Marcos 5 e Lucas 8.'
    }
  },
  {
    id: 'mulher-cananeia',
    name: 'A Mulher Cananeia (Siro-Fenícia)',
    originalName: 'Γυνὴ Χαναναία / Συροφοινίκισσα (Tradição: Justa)',
    transliteration: 'Gyne Chananaia / Syrophoinikissa',
    meaning: 'Mulher de Canaã / Fenícia da Síria',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Mateus 15:21-28', 'Marcos 7:24-30'],
    family: {
      children: ['Uma filha jovem atormentada por um espírito imundo (Mt 15:22; Mc 7:25)'],
      precisionNote: 'Origem gentílica siro-fenícia; a Bíblia não cita o nome da mãe nem da filha.'
    },
    historicalContext: {
      period: 'Ministério de Jesus além das fronteiras de Israel (c. 32 d.C.)',
      region: 'Região gentílica de Tiro e Sídon (costa do Mediterrâneo)',
      cultureAndCustoms: 'Hostilidade histórica secular entre judeus e cananeus/fenícios pagãos.',
      religiousContext: 'Mundo idólatra grego e cananeu em contraste com o Reino de Deus.'
    },
    biblicalStory: 'Mulher gentia da região de Tiro e Sídon cuja filha estava miseravelmente endemoninhada. Clamou após Jesus em alta voz: "Senhor, Filho de Davi, tem misericórdia de mim!". Inicialmente, Jesus não lhe respondeu palavra e os discípulos rogaram que a despedisse pelo incômodo do seu clamor. Jesus declarou que fora enviado às ovelhas perdidas da casa de Israel. A mulher então se aproximou, adorou-o de joelhos e implorou: "Senhor, socorre-me!". Jesus respondeu com uma prova de fé: "Não é bom tomar o pão dos filhos e lançá-lo aos cachorrinhos". Com humildade desconcertante e agudeza de fé, ela respondeu: "Sim, Senhor, mas também os cachorrinhos comem das migalhas que caem da mesa dos seus senhores". Jesus exclamou maravilhado: "Ó mulher, grande é a tua fé! Faça-se contigo como tu queres". E desde aquela mesma hora sua filha ficou sã.',
    virtuesAndTraits: [
      { trait: 'Grandeza de Fé Reconhecida por Cristo', biblicalEvidence: '"Ó mulher, grande é a tua fé!" (Mt 15:28) — apenas ela e o centurião romano receberam esse louvor de Jesus nos Evangelhos.' },
      { trait: 'Humildade Profunda e Amor Materno Sacrificial', biblicalEvidence: 'Aceitou de bom grado a condição de quem depende unicamente de uma migalha da graça soberana (Mt 15:27).' },
      { trait: 'Perseverança Inabalável diante do Silêncio e das Dificuldades', biblicalEvidence: 'Não se ofendeu nem desistiu perante a prova de fé imposta por Cristo.' }
    ],
    errorsAndConflicts: {
      conflict: 'Origem pagã cananéia fora da aliança da circuncisão.',
      biblicalContext: 'Mateus faz questão de designá-la como "cananeia" para evocar a antiga inimizade histórica.',
      biblicalAssessment: 'Sua fé humilde triunfou sobre séculos de distanciamento étnico e religioso.'
    },
    theologicalSignificance: 'Precursora da abertura do Reino de Deus aos povos gentios pela fé; demonstra que a graça de Deus não é contida por barreiras de nascimento ou linhagem étnica.',
    scholarlyInterpretations: 'Linguistas salientam o termo diminutivo afetuoso "kynarion" (cachorrinhos domésticos) usado por Jesus, testando pedagogicamente a fé da mulher para manifestar sua confiança inabalável.',
    wesleyanPerspective: {
      theme: 'A Fé Perseverante que Prevalece com Deus',
      insight: 'Wesley ensinava que quando Deus parece silenciar perante nossas orações, Ele está aprofundando nossa dependência e preparando uma vitória maior: a fé que insiste com humildade conquista as misericórdias do Senhor.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa explícita registrada em Mateus 15 e Marcos 7.'
    }
  },
  {
    id: 'dorcas-tabita',
    name: 'Dorcas (Tabita)',
    originalName: 'טָבִיתָא / Δορκάς',
    transliteration: 'Tavitha (Aramaico) / Dorkas (Grego)',
    meaning: 'Gazela / Graciosa e Veloz',
    testament: 'NT',
    category: 'Igreja Primitiva',
    biblicalReferences: ['Atos 9:36-43'],
    family: {
      precisionNote: 'Não há menção bíblica de cônjuge ou filhos; vivia dedicada ao serviço da comunidade de crentes em Jope.'
    },
    historicalContext: {
      period: 'Igreja Apostólica Primitiva (c. 38–40 d.C.)',
      region: 'Jope (Jafa, porto marítimo na costa mediterrânea de Israel)',
      cultureAndCustoms: 'Comunidades cristãs locais acolhiam e sustentavam viúvas desamparadas.',
      religiousContext: 'Expansão do Evangelho entre judeus e prosélitos na costa litorânea.'
    },
    biblicalStory: 'Discípula notável da igreja de Jope, designada pelo texto bíblico como "notável pelas boas obras e esmolas que fazia" (At 9:36). Adoecendo gravemente naqueles dias, veio a falecer; lavaram seu corpo e o depositaram no cenáculo superior. Sabendo que o apóstolo Pedro estava na cidade vizinha de Lida, os discípulos enviaram dois homens rogando sua vinda urgente. Chegando Pedro, todas as viúvas chorando o rodearam, mostrando aos prantos as túnicas e vestidos que Dorcas costurara com as próprias mãos enquanto estava com elas. Pedro fez sair a todos, pôs-se de joelhos, orou e, voltando-se para o corpo, disse: "Tabita, levanta-te!". Ela abriu os olhos e, vendo a Pedro, sentou-se. Ele deu-lhe a mão, levantou-a e chamou os santos e as viúvas, apresentando-a viva. O milagre tornou-se notório em toda a Jope e muitos creram no Senhor.',
    virtuesAndTraits: [
      { trait: 'Prática Abundante de Obras de Misericórdia', biblicalEvidence: '"Esta mulher era notável pelas boas obras e esmolas que fazia" (At 9:36).' },
      { trait: 'Amor Fraternal Prático e Habilidade Serviçal', biblicalEvidence: 'As viúvas exibiram com lágrimas as roupas que ela costurava para os desprovidos (At 9:39).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falta moral documentada nas Escrituras.',
      biblicalContext: 'O texto de Atos a canoniza como o modelo ideal da caridade cristã em ação.',
      biblicalAssessment: 'Vida de discipulado ativo que marcou profundamente sua comunidade.'
    },
    theologicalSignificance: 'A única mulher no Novo Testamento explicitamente referida com o substantivo feminino grego "mathetria" (discípula). Sua ressurreição atesta o poder continuado de Cristo atuando através do ministério apostólico.',
    scholarlyInterpretations: 'Historiadores ressaltam como o cristianismo primitivo valorizou e institucionalizou a dignidade do trabalho social e caritativo das mulheres cristãs.',
    wesleyanPerspective: {
      theme: 'Obras de Misericórdia como Fruto Indispensável da Fé Viva',
      insight: 'John Wesley frequentemente citava Dorcas como exemplo das "obras de misericórdia" (alimentar famintos, vestir nus, visitar enfermos) que todo metodista nascido de novo deve praticar diariamente como fruto da santificação.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Relato bíblico detalhado em Atos 9:36-43.'
    }
  },
  {
    id: 'lidia',
    name: 'Lídia de Tiatira',
    originalName: 'Λυδία',
    transliteration: 'Lydia',
    meaning: 'Da terra de Lídia / Nascida na nobreza',
    testament: 'NT',
    category: 'Igreja Primitiva',
    biblicalReferences: ['Atos 16:11-15, 40'],
    family: {
      precisionNote: 'Mulher independente com residência própria e serviçais ("sua casa", At 16:15); não há menção bíblica de esposo.'
    },
    historicalContext: {
      period: 'Segunda Viagem Missionária de Paulo (c. 50 d.C.)',
      region: 'Filipos (colônia romana na Macedônia, Grécia)',
      cultureAndCustoms: 'Comerciante próspera de púrpura, corante caríssimo derivado de moluscos marinhos de Tiatira, muito valorizado pelas elites romanas.',
      religiousContext: 'Era "temente a Deus" (gentia prosélita simpatizante do monoteísmo judaico) reunindo-se para orar junto ao rio.'
    },
    biblicalStory: 'Empresária de púrpura originária da cidade asiática de Tiatira, residente na importante colônia romana de Filipos. No sábado, o apóstolo Paulo e sua equipe foram à beira do rio fora da porta da cidade, onde supunham haver um lugar de oração, e assentaram-se para falar às mulheres reunidas. O texto bíblico declara com beleza teológica: "O Senhor lhe abriu o coração para atender às coisas que Paulo dizia" (At 16:14). Crendo com sinceridade, foi batizada juntamente com toda a sua casa. Em seguida, constrangeu os missionários com santa hospitalidade: "Se julgais que sou fiel ao Senhor, entrai em minha casa e ficai ali" (At 16:15). Sua residência tornou-se a sede da primeira igreja cristã fundada em solo europeu; ao saírem da prisão em Filipos, Paulo e Silas foram à casa de Lídia consolar os irmãos.',
    virtuesAndTraits: [
      { trait: 'Sensibilidade Espiritual e Abertura do Coração a Deus', biblicalEvidence: '"O Senhor lhe abriu o coração para atender às coisas que Paulo dizia" (At 16:14).' },
      { trait: 'Hospitalidade Cristã Generosa e Liderança Eclesiástica', biblicalEvidence: 'Abriu seu lar como primeira base missionária e sede da igreja em Filipos (At 16:15, 40).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhum erro registrado; o texto destaca sua fidelidade exemplar.',
      biblicalContext: 'Lucas a apresenta como modelo de conversão equilibrada e generosa.',
      biblicalAssessment: 'Testemunho luminoso da expansão do Evangelho à Europa.'
    },
    theologicalSignificance: 'Primeira convertida documentada do continente europeu. Sua casa foi o berço da pioneira e amorosa igreja dos Filipenses, a quem Paulo dirigiu sua carta mais jubilosa.',
    scholarlyInterpretations: 'Historiadores do mundo greco-romano apontam a autonomia social e econômica de Lídia como líder de sua casa e administradora de negócio mercantil sofisticado.',
    wesleyanPerspective: {
      theme: 'Graça Cooperante: Deus Abre o Coração, o Homem Responde',
      insight: 'Wesley ensinava com base em Atos 16:14 que a graça preveniente de Deus opera abrindo as afeições do coração humano para acolher o Evangelho, requerendo a resposta livre e pronta da obediência ativa.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Fatos narrados de modo claro em Atos 16.'
    }
  },
  {
    id: 'priscila',
    name: 'Priscila (Prisca)',
    originalName: 'Πρίσκιλλα / Πρίσκα',
    transliteration: 'Priscilla / Prisca',
    meaning: 'Antiga / Venerável / De Origem Nobre',
    testament: 'NT',
    category: 'Igreja Primitiva',
    biblicalReferences: ['Atos 18:1-4, 18-28', 'Romanos 16:3-5', '1 Coríntios 16:19', '2 Timóteo 4:19'],
    family: {
      spouse: 'Áquila, judeu natural do Ponto (Atos 18:2)',
      children: [],
      precisionNote: 'Casal inseparável no ministério apostólico; em quatro das seis menções bíblicas, o nome de Priscila é citado antes do nome de Áquila.'
    },
    historicalContext: {
      period: 'Expansão Apostólica Paulina (c. 50–65 d.C.)',
      region: 'Roma, Corinto e Éfeso',
      cultureAndCustoms: 'Expulsos de Roma pelo imperador Cláudio (c. 49 d.C.); artesãos fabricantes de tendas de couro e tecido.',
      religiousContext: 'Comunhão íntima com o apóstolo Paulo e hospedagem de igrejas em seus lares.'
    },
    biblicalStory: 'Cristã dinâmica casada com Áquila, que trabalhou com o apóstolo Paulo no ofício de fabricar tendas em Corinto e hospedou a igreja em sua residência. Quando Paulo viajou para a Síria, Priscila e Áquila o acompanharam até Éfeso, onde permaneceram como líderes fundamentais da obra local. Em Éfeso, ouviram o brilhante e eloquente orador Apolo pregando fervorosamente na sinagoga, conhecendo apenas o batismo de João. Com sabedoria, tato pastoral e profunda maturidade teológica, Priscila e Áquila o acolheram em sua casa e "lhe expuseram com mais exatidão o caminho de Deus" (At 18:26). Em Romanos 16:3-4, Paulo expressa sua mais alta gratidão: "Saudai a Priscila e a Áquila, meus cooperadores em Cristo Jesus, os quais pela minha vida arriscaram o seu próprio pescoço; o que não só eu lhes agradeço, mas também todas as igrejas dos gentios".',
    virtuesAndTraits: [
      { trait: 'Competência Teológica e Discipulado Pastoral', biblicalEvidence: 'Instruiu com precisão e amor o eloquente pregador Apolo no Evangelho pleno (At 18:26).' },
      { trait: 'Coragem Sacrificial e Parceria Ministerial', biblicalEvidence: 'Arriscou o próprio pescoço para salvar a vida do apóstolo Paulo (Rm 16:4).' },
      { trait: 'Hospitalidade Eclesiástica Dedicada', biblicalEvidence: 'Igrejas se reuniam regularmente em sua casa em Corinto, Éfeso e Roma (1 Co 16:19; Rm 16:5).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhum erro registrado; modelo exemplar de santidade conjugal no ministério.',
      biblicalContext: 'O Novo Testamento exalta reiteradamente sua fidelidade.',
      biblicalAssessment: 'Padrão supremo de liderança bíblica feminina.'
    },
    theologicalSignificance: 'Demonstra a atuação direta de mulheres como mestras respeitadas da sã doutrina e cooperadoras estratégicas do colégio apostólico no alicerce da igreja primitiva.',
    scholarlyInterpretations: 'Exegetas destacam que o fato de Lucas e Paulo mencionarem frequentemente Priscila antes de Áquila indica sua notável proeminência na liderança e capacidade de ensino na comunidade cristã.',
    wesleyanPerspective: {
      theme: 'Casamento Consagrado e Ministério Conjunto no Reino',
      insight: 'Wesley louvava o casal Priscila e Áquila como o mais brilhante modelo neotestamentário de lar dedicado à edificação da igreja, onde homem e mulher exercem seus dons com harmonia santa sob a graça de Deus.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Atestada em Atos 18, Romanos 16, 1 Coríntios 16 e 2 Timóteo 4.'
    }
  },
  {
    id: 'febe',
    name: 'Febe de Cencréia',
    originalName: 'Φοίβη',
    transliteration: 'Phoibe',
    meaning: 'Radiante / Brilhante / Pura',
    testament: 'NT',
    category: 'Igreja Primitiva',
    biblicalReferences: ['Romanos 16:1-2'],
    family: {
      precisionNote: 'Irmã na fé e benfeitora de muitos; o texto sagrado não cita cônjuge nem parentes carnais.'
    },
    historicalContext: {
      period: 'Envio da Epístola aos Romanos (c. 57 d.C.)',
      region: 'Cencréia (porto oriental de Corinto, Grécia) e Roma',
      cultureAndCustoms: 'Portadora e fiadora de cartas magnas apostólicas pelo Império Romano.',
      religiousContext: 'Exercício formal de ministério e liderança serviçal na igreja local.'
    },
    biblicalStory: 'Líder cristã de Cencréia recomendada pelo apóstolo Paulo no encerramento da Epístola aos Romanos com termos de altíssimo louvor e respeito ministerial: "Recomendo-vos a nossa irmã Febe, que é serva (diákonos) da igreja de Cencréia, para que a recebais no Senhor de uma maneira digna dos santos e a ajudeis em qualquer coisa em que de vós necessitar; porque tem sido protetora (prostátis) de muitos, e de mim mesmo" (Rm 16:1-2). Foi a emissária de confiança escolhida por Paulo para transportar e entregar aos crentes de Roma a mais monumental epístola teológica de todo o cristianismo.',
    virtuesAndTraits: [
      { trait: 'Ministério Diaconal Oficial Reconhecido', biblicalEvidence: 'Designada pelo título bíblico de "diákonos" da igreja de Cencréia (Rm 16:1).' },
      { trait: 'Generosa Protetora e Benfeitora de Santos e Apóstolos', biblicalEvidence: 'Identificada como "prostátis" (patrona/benfeitora) de muitos crentes e do próprio Paulo (Rm 16:2).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falta registrada no texto sagrado.',
      biblicalContext: 'Paulo exige que a influente igreja de Roma a receba com honra máxima.',
      biblicalAssessment: 'Exemplo de liderança serviçal consagrada.'
    },
    theologicalSignificance: 'O uso da palavra grega "diákonos" no gênero comum estabelece a legitimidade neotestamentária do ministério de diaconisas / ministras na igreja primitiva.',
    scholarlyInterpretations: 'Historiadores e filólogos concordam que Febe foi a portadora oficial da Epístola aos Romanos, tendo provavelmente sido quem primeiro leu ou esclareceu trechos da carta perante as congregações romanas.',
    wesleyanPerspective: {
      theme: 'A Dignidade do Ministério Diaconal Feminino',
      insight: 'John Wesley e o metodismo primitivo apoiaram-se diretamente em Febe para instituir diaconisas e visitadoras de enfermos, reconhecendo que a igreja necessita do ministério oficial de mulheres consagradas.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Recomendação expressa do apóstolo Paulo em Romanos 16:1-2.'
    }
  },
  {
    id: 'loide-e-eunice',
    name: 'Loide e Eunice',
    originalName: 'Λωΐς / Εὐνίκη',
    transliteration: 'Lois / Eunike',
    meaning: 'Agradável / Superior (Loide); Aquela que Vence Gloriosamente (Eunice)',
    testament: 'NT',
    category: 'Igreja Primitiva',
    biblicalReferences: ['2 Timóteo 1:5', '2 Timóteo 3:14-15', 'Atos 16:1-3'],
    family: {
      mother: 'Loide (mãe de Eunice; avó de Timóteo)',
      spouse: 'O esposo de Eunice era grego pagão (Atos 16:1)',
      children: ['Timóteo, jovem pastor e cooperador de Paulo (2 Tm 1:5)'],
      precisionNote: 'Eunice era judia crente casada com um grego.'
    },
    historicalContext: {
      period: 'Ministério de Paulo e Timóteo na Ásia Menor (c. 45–66 d.C.)',
      region: 'Listra e Derbe (Licaônia / Galácia)',
      cultureAndCustoms: 'Casamento misto em ambiente pagão gentílico; educação doméstica bíblica segundo o judaísmo piedoso.',
      religiousContext: 'Transição da fé fiel das Escrituras do Antigo Testamento para a fé viva em Cristo Jesus.'
    },
    biblicalStory: 'Avó (Loide) e mãe (Eunice) de Timóteo, companheiro mais chegado de Paulo. Viveram em Listra sob a influência de um lar religioso misto, já que o pai de Timóteo era grego. Apesar do ambiente cultural adverso, essas duas mulheres formaram o jovem Timóteo nas Sagradas Escrituras desde a sua mais tenra infância. O apóstolo Paulo recorda com profunda emoção espiritual: "Lembrando-me da fé não fingida que há em ti, a qual habitou primeiro em tua avó Loide, e em tua mãe Eunice, e estou certo de que também em ti" (2 Tm 1:5) e adverte: "Tu, porém, permanece naquilo que aprendeste... sabendo que desde a infância sabes as sagradas letras, que podem fazer-te sábio para a salvação pela fé em Cristo Jesus" (2 Tm 3:14-15).',
    virtuesAndTraits: [
      { trait: 'Fé Sincera e Não Fingida (Anyfokritos)', biblicalEvidence: 'Elogiadas pelo apóstolo Paulo pela autenticidade inabalável de sua fé (2 Tm 1:5).' },
      { trait: 'Educação Bíblica Doméstica Incansável', biblicalEvidence: 'Ensinaram as Escrituras a Timóteo desde os primeiros anos de vida (2 Tm 3:15).' }
    ],
    errorsAndConflicts: {
      conflict: 'Desafio de viver num casamento inter-religioso com um grego em ambiente politeísta.',
      biblicalContext: 'Atos 16:1 menciona sucintamente a diferença de fé do pai.',
      biblicalAssessment: 'Não desanimaram diante da disparidade espiritual no lar, transmitindo o legado de fé à nova geração com pleno sucesso.'
    },
    theologicalSignificance: 'Monumento ao ministério do discipulado materno e familiar. Timóteo tornou-se o principal pastor de Éfeso e destinatário de duas epístolas canônicas graças aos ensinamentos fundamentados por sua mãe e avó.',
    scholarlyInterpretations: 'Educadores cristãos e teólogos destacam como o conhecimento do Antigo Testamento inculcado no coração infantil prepara a alma para o pleno florescimento da graça em Jesus Cristo.',
    wesleyanPerspective: {
      theme: 'A Piedade Familiar e o Discipulado no Lar',
      insight: 'Susanna Wesley, mãe de John e Charles Wesley, foi amplamente chamada de "a Eunice moderna" por educar seus dezenove filhos nas Escrituras e na oração diária, inspirada diretamente no legado de Loide e Eunice.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Elogiadas textualmente por Paulo em 2 Timóteo 1 e 3 e documentadas em Atos 16.'
    }
  },
  {
    id: 'joana-e-susana',
    name: 'Joana e Susana',
    originalName: 'Ἰωάννα / Σουσάννα',
    transliteration: 'Ioanna / Sousanna',
    meaning: 'Yahweh é Gracioso (Joana); Lírio Puro (Susana)',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Lucas 8:1-3', 'Lucas 24:10'],
    family: {
      spouse: 'Joana era esposa de Cuza, procurador e alto administrador da casa de Herodes Antipas (Lucas 8:3)',
      precisionNote: 'Susana é mencionada como discípula dedicada; detalhes de parentesco não constam no texto.'
    },
    historicalContext: {
      period: 'Ministério de Jesus na Galileia e Ressurreição (c. 30–33 d.C.)',
      region: 'Tiberíades, Galileia e Jerusalém',
      cultureAndCustoms: 'Joana pertencia à mais alta aristocracia herodiana da corte imperial de Tiberíades.',
      religiousContext: 'Rompimento com o luxo palaciano mundano para apoiar os discípulos de Jesus.'
    },
    biblicalStory: 'Mulheres piedosas curadas por Jesus de espíritos malignos e enfermidades que o acompanhavam com os doze apóstolos pelas cidades e aldeias, anunciando as boas-novas do Reino de Deus. O texto de Lucas declara explicitamente que Joana, mulher de Cuza (procurador de Herodes), Susana e muitas outras "os serviam com os seus bens" (Lc 8:3), provendo alimentação, vestuário e apoio financeiro constante à comitiva de Jesus. Joana também esteve presente no grupo fiel de mulheres que foram ao sepulcro na manhã do domingo da Ressurreição, ouviram o anúncio dos anjos e foram contar as novas aos onze apóstolos (Lc 24:10).',
    virtuesAndTraits: [
      { trait: 'Generosidade Financeira e Apoio Missionário', biblicalEvidence: 'Financiavam as viagens missionárias de Jesus e dos discípulos com seus próprios recursos (Lc 8:3).' },
      { trait: 'Coragem Social na Corte dos Herodes', biblicalEvidence: 'Joana professou sua fé mesmo sendo esposa do administrador de um monarca devasso e hostil como Herodes Antipas.' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falha moral mencionada.',
      biblicalContext: 'Fidelidade desde o ministério da Galileia até a Ressurreição em Jerusalém.',
      biblicalAssessment: 'Exemplo de como o Evangelho penetrou as próprias cortes de poder político do Império.'
    },
    theologicalSignificance: 'Revela a infraestrutura prática e solidária do ministério itinerante de Jesus sustentado pela devoção generosa de mulheres de fé, derrubando o mito de que Jesus e os discípulos não tinham suporte comunitário estruturado.',
    scholarlyInterpretations: 'Historiadores observam a provável conexão através de Joana de informações precisas sobre a corte de Herodes registradas exclusivamente pelo evangelista Lucas.',
    wesleyanPerspective: {
      theme: 'Mausoléus de Riqueza Trocados pelo Tesouro do Reino',
      insight: 'Wesley destacava que o uso dos bens terrenos para a expansão do Reino de Deus é o verdadeiro teste de um coração santificado: Joana usou a riqueza da corte herodiana para glorificar a Cristo.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Menções canônicas explícitas em Lucas 8:1-3 e Lucas 24:10.'
    }
  },
  {
    id: 'vasti',
    name: 'Vasti',
    originalName: 'וַשְׁתִּי',
    transliteration: 'Vashti',
    meaning: 'A Mais Bela / Amada / A Excelente',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['Ester 1:1-22', 'Ester 2:1'],
    family: {
      spouse: 'Rei Assuero (Xerxes I da Pérsia; Et 1:9)',
      children: []
    },
    historicalContext: {
      period: 'Império Persa (c. 483 a.C.)',
      region: 'Susã (Pérsia)',
      cultureAndCustoms: 'Banquete régio de 180 dias regado a vinho em profusão; desrespeito à dignidade feminina.',
      religiousContext: 'Corte pagã persa regida por leis de orgulho imperial.'
    },
    biblicalStory: 'Rainha da Pérsia casada com o rei Assuero. Enquanto o rei oferecia um banquete aos príncipes e nobres no palácio de Susã, Vasti oferecia um banquete às mulheres. No sétimo dia, aquecido pelo vinho, o rei ordenou aos seus sete eunucos que trouxessem a rainha Vasti perante o monarca com a coroa real, para mostrar aos povos e príncipes a sua formosura. A rainha recusou-se a atender o mandado do rei, preservando sua dignidade perante uma assembleia embriagada. O rei irou-se grandemente e, sob conselho dos nobres que temiam que as mulheres de todo o império desprezassem seus maridos, promulgou decreto irrevogável depondo Vasti da realeza para nunca mais entrar à presença do rei, abrindo caminho para a eleição providencial de Ester.',
    virtuesAndTraits: [
      { trait: 'Dignidade Pessoal e Auto-Respeito', biblicalEvidence: 'Recusou-se a ser exibida como objeto perante homens embriagados no banquete persa (Et 1:12).' }
    ],
    errorsAndConflicts: {
      conflict: 'Desobediência pública ao decreto e comando imperial do esposo e rei.',
      biblicalContext: 'Ester 1:12 declara: "Porém a rainha Vasti recusou vir segundo a palavra do rei... pelo que o rei muito se enfureceu".',
      biblicalAssessment: 'Custou-lhe a coroa e os privilégios reais, servindo nos planos providenciais de Deus para elevar Ester em favor do povo judeu.'
    },
    theologicalSignificance: 'Sua destituição exemplifica como a soberania divina utiliza até as crises morais e conflitos de cortes mundanas para conduzir a história da redenção.',
    scholarlyInterpretations: 'Historiadores e exegetas modernos reconhecem em Vasti uma postura de coragem moral e recusa à humilhação pública, contrastando com o despotismo irracional de Assuero.',
    wesleyanPerspective: {
      theme: 'A Soberania Secreta de Deus nas Decisões dos Reis',
      insight: 'Wesley nota que o Senhor reina sobre todas as nações: a fúria cega de um monarca pagão e a deposição de uma rainha foram encaminhadas pela providência divina para que o povo da promessa não fosse exterminado.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa explícita no primeiro capítulo de Ester.'
    }
  },
  {
    id: 'atalia',
    name: 'Atalia',
    originalName: 'עֲתַלְיָה',
    transliteration: 'Atalyah',
    meaning: 'Yahweh é Exaltado / Oprimida por Yahweh',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['2 Reis 8:18, 26', '2 Reis 11:1-20', '2 Crônicas 22:1-12', '2 Crônicas 23:1-21'],
    family: {
      father: 'Acabe e Jezabel (filha ou neta de Onri de Israel; 2 Rs 8:26)',
      spouse: 'Jeorão, rei de Judá (2 Rs 8:18)',
      children: ['Acazias, rei de Judá (2 Cr 22:2)'],
      precisionNote: 'Usurpou o trono de Judá assassinando seus próprios netos.'
    },
    historicalContext: {
      period: 'Reino Dividido (c. 841–835 a.C.)',
      region: 'Jerusalém (Reino de Judá)',
      cultureAndCustoms: 'Casamento dinástico funesto entre a casa ímpia de Acabe (Israel) e a linhagem de Davi (Judá).',
      religiousContext: 'Tentativa de erradicar o culto a Yahweh no Templo de Jerusalém e entronizar o culto fenício a Baal.'
    },
    biblicalStory: 'Filha de Jezabel e Acabe dada em casamento a Jeorão de Judá, que introduziu a idolatria de Samaria na dinastia davídica em Jerusalém. Quando seu filho Acazias foi morto por Jeú, Atalia levantou-se com crueldade inaudita e mandou matar toda a descendência real da casa de Judá para usurpar o trono, reinando durante seis anos. Contudo, Jeoseba (irmã de Acazias) resgatou o bebê Joás dentre os príncipes que estavam sendo massacrados e o escondeu com sua ama no Templo do Senhor. No sétimo ano, o sumo sacerdote Joiada organizou uma insurreição santa com os capitães da guarda, armou os levitas e coroou o menino Joás no Templo. Ao ouvir os brados de "Viva o rei!", Atalia rasgou os vestidos e gritou: "Traição! Traição!". Foi retirada dos átrios sagrados e executada junto à porta dos cavalos do palácio real.',
    virtuesAndTraits: [
      { trait: 'Ousadia Política Tirânica', biblicalEvidence: 'Governou despoticamente sobre Judá durante seis anos como única rainha reinante da história do reino do sul.' }
    ],
    errorsAndConflicts: {
      conflict: 'Massacre de sua própria descendência e profanação idólatra da aliança davídica.',
      biblicalContext: '2 Reis 11:1: "Vendo Atalia que seu filho era morto, levantou-se e destruiu toda a semente real".',
      biblicalAssessment: 'Atentou diretamente contra a promessa messiânica feita a Davi de que sua linhagem nunca cessaria.'
    },
    theologicalSignificance: 'O momento mais crítico de toda a história messiânica: a semente de Davi foi reduzida a um único bebê de um ano escondido no Templo (Joás). A preservação desse menino garantiu a continuidade da linhagem que culminou no nascimento de Jesus Cristo.',
    scholarlyInterpretations: 'Historiadores bíblicos apontam que sua sede assassina de poder imitava o fanatismo idólatra e sanguinário de sua mãe Jezabel.',
    wesleyanPerspective: {
      theme: 'A Fidelidade Absoluta da Promessa Messiânica de Deus',
      insight: 'Wesley ressaltava que satanás tentou exterminar a linhagem da qual nasceria o Salvador através da crueldade de Atalia, mas a fidelidade de Deus ocultou a promessa nas câmaras secretas do santuário até a hora do triunfo da justiça.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica completa em 2 Reis 11 e 2 Crônicas 22-23.'
    }
  },
  {
    id: 'hulda',
    name: 'Hulda, a Profetisa',
    originalName: 'חֻלְדָּה',
    transliteration: 'Chuldah',
    meaning: 'Doninha / Vontade Firme / Duradoura',
    testament: 'AT',
    category: 'Profetisas',
    biblicalReferences: ['2 Reis 22:14-20', '2 Crônicas 34:22-28'],
    family: {
      spouse: 'Salum, guarda das vestimentas sagradas do rei (2 Rs 22:14)',
      precisionNote: 'Residia na Cidade Baixa (Mishneh), o segundo distrito de Jerusalém.'
    },
    historicalContext: {
      period: 'Reinado de Josias em Judá (c. 622 a.C.)',
      region: 'Jerusalém',
      cultureAndCustoms: 'Ministério profético consultado oficialmente pela alta corte real do reino.',
      religiousContext: 'Redescoberta do Livro da Lei no Templo durante as reformas de Josias.'
    },
    biblicalStory: 'Profetisa respeitadíssima que habitava em Jerusalém no segundo distrito. Quando o sumo sacerdote Hilquias encontrou o Livro da Lei esquecido no Templo e o leu perante o jovem rei Josias, este rasgou os seus vestidos em profundo temor pelo juízo iminente sobre a apostasia do povo. O rei enviou imediatamente uma delegação de altíssimo escalão (o sumo sacerdote, escribas reais e conselheiros) para consultar o Senhor através da profetisa Hulda. Com autoridade profética inflexível, ela proferiu a palavra do Senhor: confirmou que a ira de Deus se derramaria sobre a terra e seus habitantes pelas abominações cometidas, mas assegurou com ternura que, por ter o rei Josias um coração quebrantado e ter chorado perante Deus, seus olhos não veriam o mal e ele seria recolhido em paz à sua sepultura antes da catástrofe do exílio.',
    virtuesAndTraits: [
      { trait: 'Autoridade Profética Máxima e Incorruptível', biblicalEvidence: 'Consultada formalmente pelo sumo sacerdote e pelos principais ministros do reino (2 Rs 22:14).' },
      { trait: 'Fidelidade Fiel à Palavra Sagrada', biblicalEvidence: 'Proferiu a mensagem de juízo e graça sem suavizar os decretos do Todo-Poderoso (2 Rs 22:15-20).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhuma falha moral ou pecado registrado no texto bíblico.',
      biblicalContext: 'O texto bíblico reverencia sua voz como o oráculo fiel de Deus na corte.',
      biblicalAssessment: 'Sua profecia desencadeou o maior avivamento religioso e limpeza de idolatria da história de Judá.'
    },
    theologicalSignificance: 'Evidência incontestável de que Deus conferiu a uma mulher a autoridade de autenticar e interpretar as próprias Escrituras Sagradas perante as mais altas autoridades sacerdotais e políticas de Israel contemporânea de profetas como Jeremias e Sofonias.',
    scholarlyInterpretations: 'Historiadores rabínicos notam que no Segundo Templo os portões ao sul que conduziam ao Monte do Templo eram denominados "Portões de Hulda" em honra ao seu memorável legado.',
    wesleyanPerspective: {
      theme: 'A Voz Profética que Desperta para a Reforma Espiritual',
      insight: 'Wesley valorizava o ministério de Hulda como demonstração de que Deus levanta vozes proféticas autênticas para chamar igrejas e nações ao arrependimento profundo diante da redescoberta da Palavra viva.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa detalhada e harmônica em 2 Reis 22 e 2 Crônicas 34.'
    }
  },
  {
    id: 'salome-mae-dos-filhos-de-zebedeu',
    name: 'Salomé (Mãe dos Filhos de Zebedeu)',
    originalName: 'Σαλώμη',
    transliteration: 'Salome (do hebraico Shalom - Paz)',
    meaning: 'Pacífica / Plena de Paz',
    testament: 'NT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['Mateus 20:20-28', 'Mateus 27:56', 'Marcos 15:40', 'Marcos 16:1'],
    family: {
      spouse: 'Zebedeu, pescador próspero do Mar da Galileia (Mt 4:21)',
      children: ['Tiago e João (os apóstolos chamados "filhos do trovão", Boanerges; Mc 3:17)'],
      precisionNote: 'Harmonização dos Evangelhos sugere que era irmã de Maria, mãe de Jesus (João 19:25).'
    },
    historicalContext: {
      period: 'Ministério de Jesus e Ressurreição (c. 30–33 d.C.)',
      region: 'Galileia (Betsaida/Cafarnaum) e Jerusalém',
      cultureAndCustoms: 'Ambição legítima de mães judaicas pela honra de seus filhos no reino vindouro.',
      religiousContext: 'Seguidora fiel de Jesus desde o início da pregação na Galileia.'
    },
    biblicalStory: 'Mãe zelosa dos apóstolos Tiago e João. Em Mateus 20, aproximou-se de Jesus com seus filhos, adorando-o, e pediu que eles se assentassem um à sua direita e outro à sua esquerda no Seu Reino. Jesus ensinou que o verdadeiro Reino se baseia no serviço humilde: "Quem quiser ser o primeiro entre vós, seja vosso servo" (Mt 20:26-28). Apesar desse equívoco de ambição terrena, Salomé permaneceu fiel até o fim: esteve firme aos pés da Cruz no Gólgota quando muitos discípulos haviam fugido (Mc 15:40) e, no alvorecer do primeiro dia da semana, comprou aromas e foi ao sepulcro para embalsamar o corpo do Senhor, sendo uma das primeiras a testemunhar o túmulo vazio e a mensagem dos anjos.',
    virtuesAndTraits: [
      { trait: 'Fidelidade Intrépida aos Pés da Cruz', biblicalEvidence: 'Presença documentada junto à crucificação e no sepulcro vazio (Mc 15:40; 16:1).' },
      { trait: 'Amor Materno e Apoio ao Ministério', biblicalEvidence: 'Apoiou a consagração integral dos filhos Tiago e João ao discipulado apostólico.' }
    ],
    errorsAndConflicts: {
      conflict: 'Ambição carnal por posições de honra e poder político para seus filhos.',
      biblicalContext: 'Mateus 20:20-24 relata que os outros dez apóstolos se indignaram com o pedido.',
      biblicalAssessment: 'Corrigida com mansidão por Cristo, que redefiniu a grandeza como espírito de serviço humilde.'
    },
    theologicalSignificance: 'Exemplifica a transformação do discipulado: da busca ingênua por glória humana ao testemunho corajoso na dor da Cruz e na celebração da Ressurreição.',
    scholarlyInterpretations: 'Exegetas comparam Mateus 27:56 ("a mãe dos filhos de Zebedeu") com Marcos 15:40 ("Salomé") para confirmar sua identidade harmônica.',
    wesleyanPerspective: {
      theme: 'A Purificação dos Motivos pela Santificação',
      insight: 'Wesley ressaltava que a graça de Deus purifica gradualmente nossos motivos carnais: Salomé começou pedindo tronos de glória para seus filhos, mas aprendeu a contemplar a cruz e a servir com humildade santa.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Atestada textualmente em Mateus e Marcos.'
    }
  },
  {
    id: 'sefora',
    name: 'Séfora (Zípora)',
    originalName: 'צִפֹּרָה',
    transliteration: 'Tzipporah',
    meaning: 'Pássaro Pequeno / Passarinho',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['Êxodo 2:16-22', 'Êxodo 4:24-26', 'Êxodo 18:1-6'],
    family: {
      father: 'Reuel / Jetro, sacerdote de Midiã (Ex 2:18; 3:1)',
      spouse: 'Moisés (Êxodo 2:21)',
      children: ['Gérson e Eliézer (Êxodo 18:3-4)'],
      precisionNote: 'Origem midianita, descendente de Abraão por Quetura.'
    },
    historicalContext: {
      period: 'Antes do Êxodo (c. 1480–1446 a.C.)',
      region: 'Terra de Midiã (Península do Sinai / Arábia)',
      cultureAndCustoms: 'Pastoras midianitas; rito da circuncisão com faca de pederneira afiada.',
      religiousContext: 'Sacerdócio de Jetro preservando traços da fé em Deus.'
    },
    biblicalStory: 'Uma das sete filhas de Jetro, sacerdote de Midiã. Quando Moisés fugiu do Egito e defendeu as jovens contra pastores agressivos junto ao poço, Séfora foi dada por seu pai a Moisés como esposa, gerando Gérson. Quando Moisés retornava ao Egito por ordem divina, o Senhor o encontrou numa estalagem e procurou matá-lo por negligência na aliança da circuncisão. Séfora agiu com rapidez decisiva: tomou uma faca de pederneira afiada, circuncidou o prepúcio de seu filho e tocou os pés de Moisés, dizendo: "Certamente me és um esposo sanguinário" (Ex 4:25). Por esse ato de obediência pactual, o Senhor retirou o juízo mortal. Mais tarde, foi acolhida por Moisés no deserto sob a bênção de seu pai Jetro.',
    virtuesAndTraits: [
      { trait: 'Prontidão e Resolução Espiritual Decisiva', biblicalEvidence: 'Executou o mandamento sagrado da circuncisão no momento de crise extrema salvando a vida de Moisés (Ex 4:25).' }
    ],
    errorsAndConflicts: {
      conflict: 'Tensões culturais quanto ao rito da circuncisão dos filhos.',
      biblicalContext: 'Êxodo 4:25-26 expressa sua perplexidade inicial diante da exigência cruenta da aliança abraâmica.',
      biblicalAssessment: 'Sua ação rápida demonstrou submissão necessária aos estatutos divinos da aliança.'
    },
    theologicalSignificance: 'Demonstra a inviolabilidade dos mandamentos da aliança de Deus: até o maior líder e legislador precisava que a aliança fosse cumprida em sua própria casa antes de liderar o povo.',
    scholarlyInterpretations: 'Historiadores bíblicos analisam a narrativa enigmática da estalagem em Êxodo 4 como advertência sobre a santidade sacerdotal do mediador da aliança.',
    wesleyanPerspective: {
      theme: 'Obediência aos Mandamentos como Requisito da Graça',
      insight: 'Wesley adverte que ninguém pode servir como líder da congregação do Senhor enquanto negligenciar os deveres santos da aliança no seu próprio lar.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica presente em Êxodo 2, 4 e 18.'
    }
  },
  {
    id: 'mical',
    name: 'Mical',
    originalName: 'מִיכַל',
    transliteration: 'Michal',
    meaning: 'Quem é como Deus? / Riacho / Perfeição',
    testament: 'AT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['1 Samuel 18:20-28', '1 Samuel 19:11-17', '1 Samuel 25:44', '2 Samuel 3:13-16', '2 Samuel 6:16-23', '1 Crônicas 15:29'],
    family: {
      father: 'Rei Saul (primeiro rei de Israel; 1 Sm 14:49)',
      spouse: 'Davi (1 Sm 18:27); dada posteriormente por Saul a Paltiel (1 Sm 25:44) e recuperada por Davi (2 Sm 3:14)',
      children: [],
      precisionNote: '2 Samuel 6:23 declara que Mical não teve filhos até o dia de sua morte.'
    },
    historicalContext: {
      period: 'Início da Monarquia em Israel (c. 1010–990 a.C.)',
      region: 'Gibeá de Saul e Jerusalém',
      cultureAndCustoms: 'Casamentos reais usados como peões de xadrez político; protocolo de realeza e imagem aristocrática.',
      religiousContext: 'A arca da aliança trazida a Jerusalém com danças e celebração popular.'
    },
    biblicalStory: 'Filha mais nova do rei Saul, que amava apaixonadamente a Davi. Quando Saul tramou a morte de Davi exigindo cem prepúcios de filisteus como dote, Davi trouxe duzentos e desposou Mical. Quando Saul enviou assassinos à casa de Davi, Mical o fez descer por uma janela na calada da noite e colocou uma estátua (terafim) na cama coberta com pelos de cabra para enganar os soldados, salvando a vida de Davi. Após anos de separação forçada por Saul que a entregara a Paltiel, Davi a exigiu de volta como rainha legítima. Contudo, quando a Arca da Aliança entrou em Jerusalém e Davi dançava com júbilo cingido de um éfode de linho diante do Senhor, Mical o olhou da janela e o desprezou no seu coração. Ao censurar Davi sarcasticamente ("Como se cobriu de glória o rei de Israel descobrindo-se aos olhos das servas!"), Davi respondeu que dançara perante o Senhor que o escolhera em lugar de seu pai. Mical permaneceu sem filhos até o dia de sua morte.',
    virtuesAndTraits: [
      { trait: 'Coragem Protetora pelo Marido', biblicalEvidence: 'Arriscou a ira de seu pai Saul para salvar Davi dos assassinos à meia-noite (1 Sm 19:11-17).' }
    ],
    errorsAndConflicts: {
      conflict: 'Orgulho aristocrático, soberba e desprezo pelo louvor fervoroso a Deus.',
      biblicalContext: '2 Samuel 6:16 registra que ela "o desprezou no seu coração" e o censurou com sarcasmo amargo.',
      biblicalAssessment: 'Priorizou o protocolo do palácio em detrimento da adoração genuína ao Senhor, resultando em esterilidade e isolamento.'
    },
    theologicalSignificance: 'Contraste vívido entre a religião formal e vazia da casa de Saul (focada em aparências mundanas) e a adoração quebrantada de Davi, homem segundo o coração de Deus.',
    scholarlyInterpretations: 'Psicólogos e exegetas notam a tragédia de sua trajetória: amou Davi, foi usada politicamente pelo pai, arrancada de Paltiel e terminou amargurada contra o próprio esposo.',
    wesleyanPerspective: {
      theme: 'O Perigo do Desprezo Espiritual e do Orgulho de Castas',
      insight: 'Wesley adverte em seus sermões que o desprezo pelo entusiasmo santo e pela celebração sincera a Deus é sintoma mortal de frieza espiritual que endurece o coração para com o Senhor.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica completa em 1 e 2 Samuel.'
    }
  },
  {
    id: 'safira',
    name: 'Safira',
    originalName: 'Σαπφείρη',
    transliteration: 'Sapphire (do aramaico Sappira - Bela / Jóia de Safira)',
    meaning: 'Bela / Preciosa como Safira',
    testament: 'NT',
    category: 'Mulheres em Crise e Conflito',
    biblicalReferences: ['Atos 5:1-11'],
    family: {
      spouse: 'Ananias (membro da igreja primitiva de Jerusalém; At 5:1)',
      children: []
    },
    historicalContext: {
      period: 'Início da Igreja Apostólica em Jerusalém (c. 31–33 d.C.)',
      region: 'Jerusalém',
      cultureAndCustoms: 'Comunhão de bens voluntária na igreja primitiva; venda de propriedades para socorro dos pobres.',
      religiousContext: 'Presença manifesta e poderosa do Espírito Santo na assembleia apostólica.'
    },
    biblicalStory: 'Mulher cristã casada com Ananias na comunidade apostólica de Jerusalém. Em comum acordo com o marido, vendeu uma propriedade e reteve secretamente parte do valor, trazendo apenas uma quantia aos pés dos apóstolos, fingindo ter doado o valor total para granjear reputação de generosidade santa perante a igreja. Ananias caiu morto ao ser repreendido por Pedro por mentir ao Espírito Santo. Cerca de três horas depois, Safira entrou, sem saber o que havia acontecido. Pedro lhe perguntou: "Dize-me, vendestes por tanto aquela herdade?". Ela mentiu deliberadamente: "Sim, por tanto". Pedro sentenciou: "Por que combinastes entre vós tentar o Espírito do Senhor? Eis aí à porta os pés dos que sepultaram o teu marido, e também te levarão a ti". Imediatamente caiu aos pés de Pedro e expirou. Grande temor sobreveio a toda a igreja e a todos quantos ouviram estas coisas.',
    virtuesAndTraits: [
      { trait: 'Generosidade Material Parcial Inicial', biblicalEvidence: 'Venderam a propriedade com intenção declarada de auxílio à comunidade.' }
    ],
    errorsAndConflicts: {
      conflict: 'Hipocrisia deliberada, conspirata mentirosa e afronta contra o Espírito Santo.',
      biblicalContext: 'Atos 5:2 e 9 revelam o acordo prévio consciente para enganar os servos de Deus.',
      biblicalAssessment: 'Julgamento severo e exemplar da pureza da noiva de Cristo nascente.'
    },
    theologicalSignificance: 'Advertência solene sobre a gravidade da hipocrisia e a santidade inegociável da presença do Espírito Santo na Igreja. Demonstra que a responsabilidade moral diante de Deus é pessoal e intransferível.',
    scholarlyInterpretations: 'Historiadores bíblicos apontam que Pedro deu a Safira uma chance explícita de dizer a verdade ao interrogá-la a sós, mas ela confirmou a mentira por vontade própria.',
    wesleyanPerspective: {
      theme: 'A Santidade Incorruptível de Deus e o Veneno da Falsa Piedade',
      insight: 'Wesley ensinava com base em Atos 5 que Deus não pode ser escarnecido: fingir santidade externa para receber elogios humanos enquanto se abriga a desonestidade interior é uma afronta mortal ao Espírito da Verdade.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa explícita registrada no capítulo 5 de Atos dos Apóstolos.'
    }
  },
  {
    id: 'rainha-de-saba',
    name: 'A Rainha de Sabá',
    originalName: 'מַלְכַּת שְׁבָא (Na tradição etíope: Makeda)',
    transliteration: 'Malkat Sheva / Makeda',
    meaning: 'Rainha do Reino de Sabá',
    testament: 'AT',
    category: 'Rainhas e Heroínas',
    biblicalReferences: ['1 Reis 10:1-13', '2 Crônicas 9:1-12', 'Mateus 12:42', 'Lucas 11:31'],
    family: {
      precisionNote: 'Monarca reinante do próspero reino sabeu no sul da Península Arábica / Chifre da África (Etiópia/Iêmen); tradição etíope afirma ter gerado com Salomão o rei Menelik I (informação extrabíblica).'
    },
    historicalContext: {
      period: 'Século X a.C. (Reinado de Salomão, c. 960 a.C.)',
      region: 'Reino de Sabá (Iêmen/Sudoeste da Arábia) e Jerusalém',
      cultureAndCustoms: 'Comércio de especiarias finas, ouro de Ofir e pedras preciosas via caravanas de camelos.',
      religiousContext: 'Busca sincera pela sabedoria de Deus em contraste com o paganismo do sul.'
    },
    biblicalStory: 'Poderosa soberana que, ouvindo a fama de Salomão no tocante ao nome do Senhor, empreendeu uma longa e árdua jornada de mais de dois mil quilômetros com grandiosa comitiva de camelos carregados de aromas, ouro e pedras preciosas até Jerusalém para provar a sabedoria do monarca com enigmas difíceis. Salomão respondeu a todas as suas perguntas. Vendo ela a sabedoria, o palácio, a ordem dos servos e os holocaustos que ele oferecia no Templo de Yahweh, "ficou como fora de si" e confessou: "Foi verdade a palavra que ouvi na minha terra... mas eu não cria nas palavras até que vim, e os meus olhos o viram; e eis que não me disseram a metade" (1 Rs 10:6-7), bendizendo publicamente ao Deus de Israel. Presenteou o rei com 120 talentos de ouro e grande profusão de especiarias e regressou em paz.',
    virtuesAndTraits: [
      { trait: 'Sede Incessante de Verdade e Sabedoria', biblicalEvidence: 'Viajou milhares de quilômetros cruzando desertos escaldantes para aprender e buscar conhecimento de Deus (1 Rs 10:1).' },
      { trait: 'Generosidade Magnífica e Reconhecimento Divino', biblicalEvidence: 'Glorificou a Deus publicamente e ofertou tesouros principescos (1 Rs 10:9-10).' }
    ],
    errorsAndConflicts: {
      conflict: 'Ceticismo inicial perante a fama de Salomão.',
      biblicalContext: '1 Reis 10:7 declara que ela não acreditava nos relatos até comprovar pessoalmente.',
      biblicalAssessment: 'Dúvida honesta convertida em admiração reverente e louvor a Deus.'
    },
    theologicalSignificance: 'Elogiada e canonizada pelo próprio Jesus Cristo nos Evangelhos como "a Rainha do Sul": "A Rainha do Sul se levantará no juízo com esta geração e a condenará; porque veio dos confins da terra para ouvir a sabedoria de Salomão; e eis que está aqui quem é maior do que Salomão" (Mt 12:42).',
    scholarlyInterpretations: 'Arqueólogos e historiadores documentam a civilização dos sabeus com capitais em Marib (Iêmen), controlando a rota do incenso e do ouro da Antiguidade.',
    wesleyanPerspective: {
      theme: 'A Busca Sincera da Luz da Verdade Revelada',
      insight: 'Wesley destacava as palavras de Jesus: se uma rainha gentia pagã viajou dos confins da terra para buscar sabedoria perecível, com quanta maior reverência devemos nós correr aos pés de Jesus Cristo, a própria Sabedoria encarnada de Deus.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Atestada nos livros de Reis, Crônicas e confirmada com autoridade suprema por Jesus em Mateus e Lucas.'
    }
  },
  {
    id: 'viuva-de-sarepta',
    name: 'A Viúva de Sarepta',
    originalName: 'Γυνὴ χήρα ἐν Σαρέπτοις',
    transliteration: 'Gyne chera en Sareptois',
    meaning: 'Viúva moradora de Sarepta de Sídon',
    testament: 'AT',
    category: 'Mulheres dos Evangelhos',
    biblicalReferences: ['1 Reis 17:8-24', 'Lucas 4:25-26'],
    family: {
      children: ['Um filho único (ressuscitado pelo profeta Elias; 1 Rs 17:17, 21-23)'],
      precisionNote: 'Mulher gentia fenícia; a Bíblia não registra seu nome pessoal.'
    },
    historicalContext: {
      period: 'Seca de três anos e meio nos dias de Acabe e Elias (c. 860 a.C.)',
      region: 'Sarepta de Sídon (Fenícia, no coração da terra de Jezabel e de Baal)',
      cultureAndCustoms: 'Fome generalizada e mortandade extrema; extrema carência de viúvas desamparadas.',
      religiousContext: 'Gentilidade idólatra alcançada pela soberana providência de Deus.'
    },
    biblicalStory: 'Viúva pobre e gentia que apanhava gravetos na porta da cidade de Sarepta para preparar a última refeição para si e para seu filho, aguardando a morte pela fome provocada pela seca. O profeta Elias, enviado por Deus, pediu-lhe um bocado de água e um pedaço de pão. Ela jurou pelo Senhor Deus que tinha apenas um punhado de farinha numa panela e um pouco de azeite numa botija. Elias ordenou em fé: "Não temas... faze primeiro para mim um bolo pequeno... pois assim diz o Senhor: A farinha da panela não se acabará, e o azeite da botija não faltará, até ao dia em que o Senhor der chuva sobre a terra" (1 Rs 17:13-14). Ela foi e fez conforme a palavra de Elias; comeram ela, ele e a sua casa durante muitos dias sem que a botija de azeite secasse nem a panela de farinha faltasse. Posteriormente, quando seu filho faleceu de súbita enfermidade, Elias clamou a Deus estendendo-se sobre a criança e o Senhor ressuscitou o menino, ao que ela confessou: "Nisto conheço agora que tu és homem de Deus, e que a palavra do Senhor na tua boca é verdade" (1 Rs 17:24).',
    virtuesAndTraits: [
      { trait: 'Fé Prática e Entrega Absoluta', biblicalEvidence: 'Deu sua última porção de sustento ao homem de Deus antes de pensar em si mesma (1 Rs 17:15).' },
      { trait: 'Hospitalidade Heroica na Pobreza Extrema', biblicalEvidence: 'Hospedou e alimentou o profeta durante a calamidade nacional.' }
    ],
    errorsAndConflicts: {
      conflict: 'Desespero e dor dilacerante diante da morte repentina de seu filho.',
      biblicalContext: '1 Reis 17:18 expressa sua aflição: "Que tenho eu contigo, homem de Deus? Vieste a mim para trazeres à memória a minha iniquidade e matares o meu filho?".',
      biblicalAssessment: 'Angústia humana real que conduziu à primeira ressurreição relatada na história bíblica.'
    },
    theologicalSignificance: 'Mencionada por Jesus em Seu primeiro sermão em Nazaré (Lucas 4:25-26): havia muitas viúvas em Israel nos dias de Elias, mas a nenhuma delas foi enviado o profeta, senão a uma mulher viúva em Sarepta de Sídon, prefigurando o alcance salvífico dos gentios.',
    scholarlyInterpretations: 'Historiadores observam a ironia sagrada de Deus demonstrar Seu poder sobre a fertilidade e a chuva exatamente na terra natal de Jezabel e do deus Baal.',
    wesleyanPerspective: {
      theme: 'A Primazia do Reino e a Multiplicação da Graça',
      insight: 'Wesley ensinava que quando damos a Deus o primeiro lugar mesmo na nossa carência mais aguda, a providência divina multiplica nossos recursos e sustenta nossa alma em todo tempo de crise.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Registrada com detalhes em 1 Reis 17 e citada com autoridade por Jesus em Lucas 4.'
    }
  },
  {
    id: 'mulher-sunamita',
    name: 'A Mulher Sunamita',
    originalName: 'הָאִשָּׁה הַשּׁוּנַמִּית',
    transliteration: 'Ha-Ishah Ha-Shunamit',
    meaning: 'A Mulher Notável de Suném',
    testament: 'AT',
    category: 'Matriarcas',
    biblicalReferences: ['2 Reis 4:8-37', '2 Reis 8:1-6'],
    family: {
      spouse: 'Homem idoso e próspero de Suném (2 Reis 4:14)',
      children: ['Um filho prometido por Eliseu e ressuscitado pelo profeta (2 Rs 4:17, 32-35)'],
      precisionNote: 'Descrita como mulher rica e respeitada ("notável", em hebraico Ishah Gedolah).'
    },
    historicalContext: {
      period: 'Reino do Norte (Israel) nos dias do profeta Eliseu (c. 845 a.C.)',
      region: 'Suném (Vale de Jezreel, sopé do Monte More)',
      cultureAndCustoms: 'Construção de quarto de hóspedes privativo no eirado superior (quarto na muralha).',
      religiousContext: 'Acolhimento da profecia de Yahweh em meio à apostasia generalizada do Reino do Norte.'
    },
    biblicalStory: 'Mulher nobre e temente a Deus que residia em Suném. Percebendo que o profeta Eliseu passava frequentemente por ali, sugeriu ao seu esposo construir um pequeno quarto no terraço com cama, mesa, cadeira e candeeiro para acolhê-lo com conforto e dignidade. Agradecido, Eliseu profetizou que, apesar da idade avançada do marido, ela abraçaria um filho dentro de um ano. A profecia cumpriu-se com fidelidade. Anos depois, o menino foi ao campo com os ceifeiros e clamou de dor de cabeça, vindo a falecer no colo da mãe ao meio-dia. Ela subiu, deitou a criança morta na cama de Eliseu, fechou a porta e partiu velozmente a cavalo rumo ao Monte Carmelo. Ao ser indagada se ia tudo bem, respondeu com fé inabalável: "Vai tudo bem!" (Shalom). Lançou-se aos pés de Eliseu em dor santa. O profeta foi à casa, orou ao Senhor, estendeu-se sobre o corpo da criança; o menino espirrou sete vezes e abriu os olhos. Ela entrou, prostrou-se em terra rendendo graças e tomou o filho vivo nos braços.',
    virtuesAndTraits: [
      { trait: 'Discernimento Espiritual e Generosidade Pura', biblicalEvidence: '"Vejo que este que passa sempre por nós é um santo homem de Deus" (2 Rs 4:9).' },
      { trait: 'Fé Inabalável em Meio à Tragédia da Morte', biblicalEvidence: 'Respondeu repetidamente "Vai tudo bem!" com o filho morto em casa até alcançar o profeta (2 Rs 4:23, 26).' }
    ],
    errorsAndConflicts: {
      conflict: 'Nenhum pecado moral documentado no texto sagrado.',
      biblicalContext: 'O texto exalta sua reverência, hospitalidade e fé intrépida.',
      biblicalAssessment: 'Modelo supremo de perseverança crente que não aceita a derrota da morte sem buscar o Deus Todo-Poderoso.'
    },
    theologicalSignificance: 'Tipifica a fé perseverante que se recusa a murmurar e busca diretamente a intervenção do poder de Deus. Em 2 Reis 8, a providência divina restaura todas as suas terras por causa desse testemunho.',
    scholarlyInterpretations: 'Comentaristas celebram a expressão "Shalom" (Vai tudo bem) como o mais sublime ato de confissão de fé preventiva de todo o Antigo Testamento.',
    wesleyanPerspective: {
      theme: 'A Certeza da Paz de Deus que Guarda o Coração',
      insight: 'Wesley citava a sunamita para demonstrar que quem confia na soberana fidelidade de Deus experimenta uma paz interior (Shalom) que o mundo não pode compreender, mesmo diante da pior aflição terrena.'
    },
    precisionClassification: {
      level: 'explicit',
      rationale: 'Narrativa biográfica detalhada e comovente em 2 Reis 4 e 8.'
    }
  }
];

