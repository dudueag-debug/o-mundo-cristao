export interface ChristocentricBook {
  id: string;
  title: string;
  subtitle: string;
  author: string;
  year: string;
  tradition: string;
  christocentricThesis: string;
  summary: string;
  coreThemes: string[];
  keyQuote: string;
  studySignificance: string;
  coverGradient: string;
}

export const CHRISTOCENTRIC_BOOKS: ChristocentricBook[] = [
  {
    id: 'cristianismo-puro-e-simples',
    title: 'Cristianismo Puro e Simples',
    subtitle: 'A essência da fé que une todos os verdadeiros seguidores de Cristo',
    author: 'C. S. Lewis',
    year: '1952',
    tradition: 'Anglicana / Ecumênica Evangélica',
    christocentricThesis: 'Cristo não é uma das opções entre mestres morais; ou Ele é o Filho de Deus vivo e Senhor supremo, ou é um lunático ou mentiroso. Ele veio para transformar homens terrenos em filhos celestes.',
    summary: 'Nascido de transmissões radiofônicas na BBC durante a Segunda Guerra Mundial, Lewis apresenta com inteligência cristalina as verdades comuns compartilhadas por todos os ramos do cristianismo bíblico, mostrando por que a fé em Jesus é a única explicação que satisfaz a razão e o coração humano.',
    coreThemes: ['A Lei Moral do Universo', 'A Trilema de Cristo (Senhor, Lunático ou Mentiroso)', 'As Virtudes Cristãs', 'A Vida do Novo Homem em Cristo'],
    keyQuote: 'Um homem que fosse meramente homem e dissesse o tipo de coisas que Jesus disse não seria um grande mestre moral. Ou seria um lunático... ou seria o Diabo do Inferno. Você tem que fazer a sua escolha.',
    studySignificance: 'Leitura obrigatória para apologética, fundamentação da fé cristã e evangelização no mundo moderno.',
    coverGradient: 'from-amber-800 to-stone-950'
  },
  {
    id: 'a-cruz-de-cristo',
    title: 'A Cruz de Cristo',
    subtitle: 'O coração da fé cristã e a glória da redenção',
    author: 'John R. W. Stott',
    year: '1986',
    tradition: 'Anglicana Evangélica',
    christocentricThesis: 'A cruz não é um acidente histórico trágico, mas o centro deliberado e soberano de todo o plano de salvação de Deus.',
    summary: 'Uma das maiores obras teológicas do século XX. Stott explora minuciosamente por que Jesus teve que morrer, o significado da expiação substitutiva, o triunfo de Cristo sobre as forças das trevas e como a comunidade cristã deve viver sob a sombra da cruz.',
    coreThemes: ['A Centralidade da Cruz', 'A Necessidade da Expiação', 'A Vitória Sobre o Mal', 'A Vida Cristã Cruciforme'],
    keyQuote: 'Antes de podermos ver a cruz como algo feito por nós, temos de vê-la como algo feito por nossa causa; o nosso pecado O colocou lá.',
    studySignificance: 'O mais equilibrado e profundo tratado contemporâneo sobre a teologia da expiação de Cristo.',
    coverGradient: 'from-red-900 to-stone-950'
  },
  {
    id: 'o-conhecimento-do-santo',
    title: 'O Conhecimento do Santo',
    subtitle: 'Os atributos de Deus e o que eles significam para a vida cristã',
    author: 'A. W. Tozer',
    year: '1961',
    tradition: 'Movimento de Santidade / Aliança Cristã',
    christocentricThesis: 'O que nos vem à mente quando pensamos em Deus é a coisa mais importante a nosso respeito; em Cristo, o Deus inacessível tornou-se nosso Pai e Salvador.',
    summary: 'Uma meditação solene e profunda sobre a majestade, infinitude, santidade, graça e amor de Deus. Tozer adverte contra o cristianismo superficial que reduz Deus a um servo das vontades humanas.',
    coreThemes: ['A Incompreensibilidade de Deus', 'A Santidade Inviolável', 'A Graça Imerecida', 'A Adoração Verdadeira'],
    keyQuote: 'A Igreja perdeu sua capacidade de adorar porque perdeu a visão sublime de quem Deus é. Um Deus que você pode compreender plenamente não é Deus.',
    studySignificance: 'Restaura o temor santo, a reverência e o deslumbramento diante da grandeza de Deus.',
    coverGradient: 'from-amber-700 to-stone-900'
  },
  {
    id: 'o-peregrino',
    title: 'O Peregrino',
    subtitle: 'A jornada da Cidade da Destruição até a Cidade Celestial',
    author: 'John Bunyan',
    year: '1678',
    tradition: 'Puritana / Batista',
    christocentricThesis: 'A salvação é uma jornada contínua de fé em Cristo, onde o fardo do pecado só cai quando os olhos contemplam o Cordeiro no Calvário.',
    summary: 'O segundo livro cristão mais lido na história depois da Bíblia. A alegoria vívida de Cristão, que foge de sua cidade condenada, atravessa o Pântano do Desânimo, perde seu fardo diante da Cruz e viaja rumo à Sião Celestial.',
    coreThemes: ['A Convicção de Pecado', 'A Libertação na Cruz', 'As Armadilhas da Vaidade', 'A Esperança da Glória Eterna'],
    keyQuote: 'Eis que justamente quando Cristão chegou diante da Cruz, o fardo desprendeu-se de seus ombros, rolou para dentro do sepulcro vazio e nunca mais foi visto!',
    studySignificance: 'Ensina perseverança espiritual, discernimento contra falsas doutrinas e a beleza da graça salvadora.',
    coverGradient: 'from-emerald-900 to-stone-950'
  },
  {
    id: 'perfeicao-crista-wesley',
    title: 'Um Chamado Simples à Perfeição Cristã',
    subtitle: 'A maturidade do amor que expulsa o pecado e reina no coração',
    author: 'John Wesley',
    year: '1777',
    tradition: 'Metodista Wesleyana',
    christocentricThesis: 'A obra de Cristo não é apenas perdoar o pecado passado (justificação), mas curar e purificar a alma no presente pelo Espírito Santo, fazendo-a transbordar de amor perfeito.',
    summary: 'O manifesto definitivo de John Wesley sobre a Inteira Santificação. Esclarece desentendimentos históricos e demonstra pelas Escrituras que o discípulo de Jesus é chamado a amar a Deus de todo o coração e ao próximo como a si mesmo.',
    coreThemes: ['Santidade de Coração e Vida', 'A Pureza de Motivos', 'O Crescimento na Graça', 'O Testemunho do Espírito'],
    keyQuote: 'A perfeição cristã nada mais é do que o amor supremo a Deus e o amor sincero a todos os homens governando todos os afetos da alma.',
    studySignificance: 'A obra doutrinária mais emblemática da herança metodista wesleyana mundial.',
    coverGradient: 'from-amber-600 to-orange-950'
  },
  {
    id: 'o-custo-do-discipulado',
    title: 'Discipulado (O Custo do Discipulado)',
    subtitle: 'A diferença entre a graça barata e a graça que transforma',
    author: 'Dietrich Bonhoeffer',
    year: '1937',
    tradition: 'Luterana de Confissão',
    christocentricThesis: 'O chamado de Jesus no Sermão da Montanha não é uma sugestão poética, mas um chamado radical e exclusivo de obediência incondicional ao Mestre.',
    summary: 'Escrito enquanto Bonhoeffer liderava o seminário clandestino em Finkenwalde em oposição à tirania nazista, o livro é uma explosão profética contra a religião de conveniência que quer os benefícios de Cristo sem carregar a cruz com Ele.',
    coreThemes: ['Graça Barata vs Graça Preciosa', 'O Chamado ao Seguimento', 'A Exposição do Sermão da Montanha', 'A Vida Oculta da Igreja'],
    keyQuote: 'Quando Cristo chama um homem, Ele o convida a vir e morrer — morrer para a sua vontade própria e renascer para a vida eterna.',
    studySignificance: 'O maior antídoto contra o cristianismo morno, mundano e sem compromisso de nosso tempo.',
    coverGradient: 'from-stone-800 to-stone-950'
  },
  {
    id: 'as-institutas-calvino',
    title: 'As Institutas da Religião Cristã',
    subtitle: 'O compêndio clássico da fé reformada e a majestade de Deus',
    author: 'João Calvino',
    year: '1536 – 1559',
    tradition: 'Reformada / Presbiteriana',
    christocentricThesis: 'Todo o verdadeiro conhecimento consiste em duas partes: o conhecimento de Deus e o conhecimento de nós mesmos; Cristo é o único Mediador e espelho onde contemplamos a graça.',
    summary: 'A mais influente obra teológica sistemática da Reforma Protestante. Dividida em quatro livros: O Conhecimento de Deus Criador, O Conhecimento de Deus Redentor em Cristo, A Maneira de Receber a Graça de Cristo, e os Meios Externos da Salvação.',
    coreThemes: ['A Revelação e a Escritura', 'A Redenção em Jesus Cristo', 'A Ação do Espírito Santo', 'A Igreja e os Sacramentos'],
    keyQuote: 'Visto que todo o tesouro de salvação e vida eterna reside em Cristo, devemos procurá-lo unicamente nEle e em nenhuma outra criatura.',
    studySignificance: 'Marco monumental para o entendimento da soberania de Deus, providência e eclesiologia.',
    coverGradient: 'from-cyan-900 to-stone-950'
  },
  {
    id: 'o-tesouro-de-davi-spurgeon',
    title: 'O Tesouro de Davi',
    subtitle: 'Comentário devocional e expositivo completo sobre os Salmos',
    author: 'Charles Haddon Spurgeon',
    year: '1885',
    tradition: 'Batista Reformada',
    christocentricThesis: 'Os Salmos apontam continuamente para as dores, a oração sacerdotal e a exaltação gloriosa de Jesus Cristo como Pastor e Rei.',
    summary: 'Fruto de mais de vinte anos de oração e estudo de Spurgeon. Versículo por versículo de todos os 150 Salmos, acompanhado de reflexões de santos dos primeiros séculos até a era puritana.',
    coreThemes: ['A Oração em Tempos de Angústia', 'O Louvor Triunfante', 'Cristo nos Salmos Messiânicos', 'A Fidelidade Inabalável da Aliança'],
    keyQuote: 'Em todas as nossas noites mais escuras, há uma promessa bíblica brilhando como uma estrela que nunca se apagará.',
    studySignificance: 'O mais rico comentário pastoral e devocional sobre os Salmos de toda a história cristã.',
    coverGradient: 'from-blue-900 to-stone-950'
  },
  {
    id: 'confissoes-agostinho',
    title: 'Confissões',
    subtitle: 'A biografia da alma errante resgatada pelo amor soberano de Deus',
    author: 'Agostinho de Hipona',
    year: '397 – 400 d.C.',
    tradition: 'Patrística / Igreja Primitiva',
    christocentricThesis: 'Nenhuma criatura humana pode encontrar descanso, paz ou sentido até que sua vontade seja desarmada e acolhida pela graça de Jesus Cristo.',
    summary: 'A primeira autobiografia espiritual do Ocidente. Agostinho conta com profunda sinceridade suas lutas juvenis com a luxúria e a filosofia mundana até a célebre tarde em Milão onde ouviu a voz celestial: "Toma e lê!", abrindo Romanos 13.',
    coreThemes: ['A Inquietação Humana', 'A Escravidão do Vício', 'A Graça que Converte', 'A Paz da Sabedoria Divina'],
    keyQuote: 'Tarde Te amei, ó Beleza tão antiga e tão nova! Tarde Te amei! Estavas dentro de mim e eu fora, e aí Te procurava... Chamaste-me, clamaste e rompeste a minha surdez!',
    studySignificance: 'A obra fundacional da literatura espiritual e teológica de toda a civilização ocidental.',
    coverGradient: 'from-stone-900 to-amber-950'
  },
  {
    id: 'a-santidade-de-deus-sproul',
    title: 'A Santidade de Deus',
    subtitle: 'O encontro transformador com o Deus três vezes Santo',
    author: 'R. C. Sproul',
    year: '1985',
    tradition: 'Presbiteriana',
    christocentricThesis: 'Quando compreendemos a santidade infinita de Deus, a cruz de Cristo deixa de ser uma opção religiosa e torna-se a nossa única e desesperada esperança de redenção.',
    summary: 'Baseado na visão de Isaías no capítulo 6 ("Santo, Santo, Santo é o Senhor dos Exércitos"), Sproul analisa o impacto esmagador da pureza absoluta de Deus sobre o orgulho humano e a magnitude insondável da Sua misericórdia na cruz.',
    coreThemes: ['O Santo, Santo, Santo', 'O Medo e a Fascinação do Sagrado', 'A Insensatez do Pecado', 'A Justiça e a Graça Unidas'],
    keyQuote: 'Deus não é apenas um pouco mais santo do que nós; Ele é transcendente, puro, majestoso de uma maneira que nos faz cair com o rosto em terra.',
    studySignificance: 'Cura a banalização moderna da fé e reacende a reverência bíblica autêntica nos cultos e na vida pessoal.',
    coverGradient: 'from-slate-800 to-stone-950'
  },
  {
    id: 'teologia-crista-wiley',
    title: 'Teologia Cristã (3 Volumes)',
    subtitle: 'O compêndio magno da teologia sistemática armínio-wesleyana',
    author: 'H. Orton Wiley',
    year: '1940',
    tradition: 'Wesleyana / Movimento de Santidade',
    christocentricThesis: 'A teologia bíblica encontra seu ápice na encarnação redentora de Jesus Cristo e na promessa do batismo no Espírito Santo que purifica o coração para a santidade plena.',
    summary: 'A mais completa e respeitada Teologia Sistemática da tradição armínio-wesleyana já produzida. Abrange Prolegômenos, Teologia Própria, Antropologia, Cristologia, Soteriologia, Pneumatologia, Eclesiologia e Escatologia.',
    coreThemes: ['A Revelação e Autoridade Bíblica', 'A Universalidade da Graça Salvadora', 'A Doutrina da Inteira Santificação', 'A Esperança da Parousia'],
    keyQuote: 'A teologia armínio-wesleyana não é uma mera negação de erros, mas a afirmação bíblica vibrante de que onde abundou o pecado, superabundou a graça redentora de Cristo.',
    studySignificance: 'A obra de consulta teológica definitiva para pastores, seminaristas e pregadores da tradição metodista e wesleyana.',
    coverGradient: 'from-amber-900 to-stone-950'
  },
  {
    id: 'a-fe-na-era-do-ceticismo-keller',
    title: 'A Fé na Era do Ceticismo',
    subtitle: 'Por que o cristianismo faz sentido em um mundo de dúvidas',
    author: 'Timothy Keller',
    year: '2008',
    tradition: 'Presbiteriana Contemporânea',
    christocentricThesis: 'As maiores dúvidas do homem moderno — a dor, a exclusividade religiosa, o sofrimento injusto — só encontram resposta satisfatória na pessoa histórica e ressurreta de Jesus Cristo.',
    summary: 'Keller responde às principais objeções contra a fé cristã com respeito, lógica refinada e profundidade bíblica, mostrando que toda dúvida é fundamentada em uma fé oculta e que Cristo satisfaz os mais profundos anseios da alma.',
    coreThemes: ['Como um Deus Bom Permite o Sofrimento?', 'A Bíblia Pode Ser Confiável?', 'A Verdade da Ressurreição Histórica', 'A Cruz como Triunfo do Amor'],
    keyQuote: 'Se Jesus ressuscitou dos mortos, então tudo o que Ele disse é verdade e todas as suas promessas serão cumpridas; e a história terá um final glorioso.',
    studySignificance: 'O melhor livro contemporâneo para dialogar com céticos, estudantes universitários e pesquisadores da verdade.',
    coverGradient: 'from-teal-900 to-stone-950'
  }
];
