export interface Theologian {
  id: string;
  name: string;
  title: string;
  denomination: 'Wesleyana / Metodista' | 'Batista' | 'Presbiteriana / Reformada' | 'Luterana' | 'Anglicana' | 'Pentecostal' | 'Patrística (Pais da Igreja)' | 'Pioneiros IMW';
  period: string;
  birthDeath: string;
  nationality: string;
  majorWorks: string[];
  keyContribution: string;
  famousQuote: string;
  christocentricFocus: string;
  avatarBg: string;
}

export const RENOWNED_THEOLOGIANS: Theologian[] = [
  // Wesleyana / Metodista
  {
    id: 'john-wesley',
    name: 'John Wesley',
    title: 'O Pai do Avivamento Metodista',
    denomination: 'Wesleyana / Metodista',
    period: 'Século XVIII (Avivamento Evangélico)',
    birthDeath: '1703 – 1791',
    nationality: 'Inglês',
    majorWorks: ['Sermões Padrão', 'Um Chamado Simples à Perfeição Cristã', 'Diários e Obras Escolhidas', 'Notas Explicativas do NT'],
    keyContribution: 'Resgatou a universalidade da graça de Deus (graça preveniente), a necessidade do novo nascimento e a santidade bíblica de coração e de vida expressa no amor prático.',
    famousQuote: 'O mundo é a minha paróquia! Ponha fogo no seu sermão ou ponha seu sermão no fogo.',
    christocentricFocus: 'Cristo morreu por todos os seres humanos; a santidade é o amor supremo de Cristo derramado no coração pelo Espírito Santo.',
    avatarBg: 'from-amber-700 to-amber-950'
  },
  {
    id: 'charles-wesley',
    name: 'Charles Wesley',
    title: 'O Poeta do Avivamento & Hinólogo da Graça',
    denomination: 'Wesleyana / Metodista',
    period: 'Século XVIII',
    birthDeath: '1707 – 1788',
    nationality: 'Inglês',
    majorWorks: ['Mais de 6.000 Hinos Sacros', 'Mil Línguas Eu Quisera Ter', 'Eis dos Anjos Harmonia', 'Amor Divino'],
    keyContribution: 'Transformou a profunda teologia wesleyana em hinos cantados pelo povo nas ruas, minas e igrejas, gravando a graça no coração da nação.',
    famousQuote: 'Ele quebra o poder do pecado cancelado e liberta os prisioneiros!',
    christocentricFocus: 'A encarnação e a redenção de Cristo celebradas com intensidade afetiva e beleza poética singular.',
    avatarBg: 'from-amber-600 to-stone-900'
  },
  {
    id: 'dorival-beppu',
    name: 'Pr. Dorival Beppu',
    title: 'Pastor Pioneiro & Primeiro Presidente da IMW',
    denomination: 'Pioneiros IMW',
    period: 'Século XX (Avivamento de 1967)',
    birthDeath: '1929 – 2018',
    nationality: 'Brasileiro',
    majorWorks: ['Atas Históricas da Fundação', 'Ministrações do Avivamento de Nova Friburgo'],
    keyContribution: 'Liderou com sabedoria pastoral e espírito de oração o nascimento da Igreja Metodista Wesleyana em 5 de janeiro de 1967, unindo fidelidade wesleyana ao poder pentecostal.',
    famousQuote: 'Uma Igreja Missionária e Avivada nascida de joelhos diante de Deus!',
    christocentricFocus: 'Cristo glorificado no poder do Espírito Santo e na pregação fervorosa da Palavra.',
    avatarBg: 'from-orange-700 to-stone-950'
  },

  // Batista
  {
    id: 'charles-spurgeon',
    name: 'Charles Haddon Spurgeon',
    title: 'O Príncipe dos Pregadores',
    denomination: 'Batista',
    period: 'Século XIX',
    birthDeath: '1834 – 1892',
    nationality: 'Inglês',
    majorWorks: ['O Tesouro de Davi (Comentário dos Salmos)', 'Lições aos Meus Alunos', 'Sermões do Tabernáculo Metropolitano'],
    keyContribution: 'O mais prolífico e lido pregador bíblico da era moderna. Púlpito apaixonado pela glória da cruz de Cristo e defesa inegociável da suficiência das Escrituras.',
    famousQuote: 'Eu prego a Cristo e este crucificado; de qualquer texto da Bíblia, corro direto para a cruz.',
    christocentricFocus: 'A centralidade absoluta de Jesus Cristo em toda a Escritura: o Cordeiro substituto que perdoa e transforma.',
    avatarBg: 'from-blue-800 to-stone-950'
  },
  {
    id: 'john-bunyan',
    name: 'John Bunyan',
    title: 'O Pregador de Bedford & Autor de O Peregrino',
    denomination: 'Batista',
    period: 'Século XVII (Puritanismo)',
    birthDeath: '1628 – 1688',
    nationality: 'Inglês',
    majorWorks: ['O Peregrino', 'Graça Abundante ao Principal dos Pecadores', 'A Guerra Santa'],
    keyContribution: 'Escreveu a mais célebre alegoria cristã de todos os tempos enquanto encarcerado por pregar o Evangelho sem licença estatal, guiando gerações no caminho da salvação.',
    famousQuote: 'Se o meu pastor for o Senhor, o meu fardo cairá da minha alma na presença da cruz.',
    christocentricFocus: 'O alívio instantâneo do fardo da culpa ao olhar para o sacrifício expiatório de Cristo na cruz.',
    avatarBg: 'from-indigo-800 to-stone-900'
  },

  // Presbiteriana / Reformada
  {
    id: 'joao-calvino',
    name: 'João Calvino',
    title: 'O Teólogo da Soberania de Deus',
    denomination: 'Presbiteriana / Reformada',
    period: 'Século XVI (Reforma Protestante)',
    birthDeath: '1509 – 1564',
    nationality: 'Francês / Genebra',
    majorWorks: ['As Institutas da Religião Cristã', 'Comentários Bíblicos Completos', 'Tratados Eclesiásticos'],
    keyContribution: 'Sistematizou a teologia bíblica da Reforma, enfatizando a majestade soberana de Deus, a eleição divina e a glória exclusiva do Senhor (Soli Deo Gloria).',
    famousQuote: 'O coração humano é uma fábrica perpétua de ídolos; somente em Cristo encontramos repouso verdadeiro.',
    christocentricFocus: 'Cristo como Profeta, Sacerdote e Rei (Munus Triplex) mediador entre Deus e a humanidade.',
    avatarBg: 'from-cyan-900 to-stone-950'
  },
  {
    id: 'jonathan-edwards',
    name: 'Jonathan Edwards',
    title: 'O Grande Filósofo do Avivamento Americano',
    denomination: 'Presbiteriana / Reformada',
    period: 'Século XVIII',
    birthDeath: '1703 – 1758',
    nationality: 'Norte-Americano',
    majorWorks: ['Afeições Religiosas', 'Pecadores nas Mãos de um Deus Irado', 'A Liberdade da Vontade'],
    keyContribution: 'Aliou o mais profundo rigor intelectual filosófico com uma paixão ardente pelo avivamento espiritual e pureza de coração.',
    famousQuote: 'A verdadeira religião consiste, em grande parte, em afeições santas despertadas pela beleza de Cristo.',
    christocentricFocus: 'A suprema beleza e excelência moral de Jesus Cristo que atrai irresistivelmente os afetos da alma humana.',
    avatarBg: 'from-teal-900 to-stone-950'
  },
  {
    id: 'tim-keller',
    name: 'Timothy Keller',
    title: 'O Apologista Contemporâneo & Pastor de Nova York',
    denomination: 'Presbiteriana / Reformada',
    period: 'Século XX - XXI',
    birthDeath: '1950 – 2023',
    nationality: 'Norte-Americano',
    majorWorks: ['A Fé na Era do Ceticismo', 'O Deus Pródigo', 'A Cruz do Rei', 'Ego Transformado'],
    keyContribution: 'Mostrou como o Evangelho de Cristo confronta tanto a religiosidade moralista quanto o relativismo secular moderno com graça e lucidez inigualáveis.',
    famousQuote: 'O Evangelho é este: Somos mais pecadores e falhos do que jamais ousamos acreditar, e ainda assim mais amados e aceitos em Cristo do que jamais ousamos esperar.',
    christocentricFocus: 'Jesus é o verdadeiro e melhor templo, o verdadeiro descanso e o amor incondicional que liberta a alma.',
    avatarBg: 'from-emerald-900 to-stone-950'
  },

  // Luterana
  {
    id: 'martinho-lutero',
    name: 'Martinho Lutero',
    title: 'O Reformador das 95 Teses',
    denomination: 'Luterana',
    period: 'Século XVI',
    birthDeath: '1483 – 1546',
    nationality: 'Alemão',
    majorWorks: ['As 95 Teses', 'Da Liberdade do Cristão', 'O Cativeiro Babilônico da Igreja', 'Nascido Escravo'],
    keyContribution: 'Recuperou a verdade central do Evangelho: a Justificação pela Fé somente (Sola Fide), libertando a Igreja do comércio de indulgências.',
    famousQuote: 'Minha consciência é cativa da Palavra de Deus; aqui permaneço, não posso fazer outra coisa. Que Deus me ajude!',
    christocentricFocus: 'A "doce troca": na cruz, Cristo tomou sobre Si nossos pecados e nos cobriu com a Sua perfeita justiça.',
    avatarBg: 'from-red-900 to-stone-950'
  },
  {
    id: 'dietrich-bonhoeffer',
    name: 'Dietrich Bonhoeffer',
    title: 'O Teólogo Mártir da Graça Preciosa',
    denomination: 'Luterana',
    period: 'Século XX',
    birthDeath: '1906 – 1945',
    nationality: 'Alemão',
    majorWorks: ['Discipulado (O Custo do Discipulado)', 'Vida em Comunhão', 'Ética', 'Resistência e Submissão'],
    keyContribution: 'Denunciou a "graça barata" que exige fé sem obediência, e resistiu com coragem profética contra o nazismo até o martírio.',
    famousQuote: 'A graça barata é a pregação do perdão sem arrependimento; a graça preciosa é o tesouro oculto no campo, pelo qual o homem vai e vende tudo o que tem.',
    christocentricFocus: 'Seguir a Cristo custa a própria vida, mas é a única fonte da verdadeira vida eterna.',
    avatarBg: 'from-stone-700 to-stone-950'
  },

  // Anglicana
  {
    id: 'cs-lewis',
    name: 'C. S. Lewis',
    title: 'O Maior Apologista Cristão do Século XX',
    denomination: 'Anglicana',
    period: 'Século XX',
    birthDeath: '1898 – 1963',
    nationality: 'Britânico (Irlanda do Norte / Oxford)',
    majorWorks: ['Cristianismo Puro e Simples', 'As Crônicas de Nárnia', 'O Problema da Dor', 'Cartas de um Diabo a seu Aprendiz'],
    keyContribution: 'Defendeu as verdades essenciais da fé bíblica que unem todos os cristãos com clareza literária, brilhantismo lógico e profunda imaginação redentora.',
    famousQuote: 'Eu acredito no Cristianismo assim como acredito que o sol nasceu: não apenas porque o vejo, mas porque através dele vejo tudo o mais.',
    christocentricFocus: 'Cristo não é apenas um bom mestre moral: Ele é o Filho de Deus encarnado, Senhor soberano que ressuscitou.',
    avatarBg: 'from-sky-900 to-stone-950'
  },
  {
    id: 'john-stott',
    name: 'John Stott',
    title: 'O Arquiteto do Evangelho Integral',
    denomination: 'Anglicana',
    period: 'Século XX',
    birthDeath: '1921 – 2011',
    nationality: 'Inglês',
    majorWorks: ['A Cruz de Cristo', 'Cristianismo Básico', 'O Discípulo Radical', 'O Pacto de Lausanne'],
    keyContribution: 'Líder do movimento evangélico global, uniu fidelidade bíblica expositiva à responsabilidade social da Igreja no mundo.',
    famousQuote: 'A cruz é a demonstração flamejante do amor de Deus pelo pecador e da santidade justa de Deus contra o pecado.',
    christocentricFocus: 'A cruz de Cristo é o centro fulcral da história humana e da revelação divina.',
    avatarBg: 'from-slate-800 to-stone-950'
  },

  // Tradição Arminiana Clássica
  {
    id: 'jacobus-arminius',
    name: 'Jacobus Arminius',
    title: 'O Teólogo da Graça Universal e Amor Divino',
    denomination: 'Wesleyana / Metodista',
    period: 'Século XVI - XVII',
    birthDeath: '1560 – 1609',
    nationality: 'Holandês',
    majorWorks: ['Declaração de Sentimentos', 'Disputações Públicas e Privadas', 'Comentário de Romanos 7 e 9'],
    keyContribution: 'Defendeu com exegese bíblica que Deus deseja sinceramente a salvação de todos os seres humanos e que a expiação de Cristo é universal para todo aquele que crer.',
    famousQuote: 'A graça de Deus é a fonte de todos os bens, e nenhuma criatura humana pode fazer o bem sem a ajuda dessa graça.',
    christocentricFocus: 'Jesus Cristo é o Mediador universal, e a presciência de Deus não destrói a responsabilidade humana de responder ao amor do Salvador.',
    avatarBg: 'from-amber-800 to-stone-900'
  },

  // Pentecostal / Carismática
  {
    id: 'gordon-fee',
    name: 'Gordon Fee',
    title: 'O Erudito do Novo Testamento & Mestre Pentecostal',
    denomination: 'Pentecostal',
    period: 'Século XX - XXI',
    birthDeath: '1934 – 2022',
    nationality: 'Norte-Americano',
    majorWorks: ['Entendes o que Lês?', 'A Presença do Espírito Santo em Paulo', 'Comentário de 1 Coríntios'],
    keyContribution: 'Uniu a mais rigorosa erudição exegética bíblica à crença vibrante no poder contemporâneo e contínuo do Espírito Santo.',
    famousQuote: 'O Espírito Santo não é um mero poder abstrato, mas a própria presença pessoal de Deus habitando em nós.',
    christocentricFocus: 'O Espírito Santo foi enviado por Cristo para exaltar a Cristo e capacitar o povo de Deus a viver como Cristo.',
    avatarBg: 'from-violet-900 to-stone-950'
  },

  // Patrística / Pais da Igreja
  {
    id: 'agostinho-hipona',
    name: 'Agostinho de Hipona',
    title: 'O Doutor da Graça',
    denomination: 'Patrística (Pais da Igreja)',
    period: 'Século IV - V d.C.',
    birthDeath: '354 – 430 d.C.',
    nationality: 'Norte-Africano / Império Romano',
    majorWorks: ['Confissões', 'A Cidade de Deus', 'A Trindade', 'Tratados sobre a Graça'],
    keyContribution: 'O mais influente teólogo do primeiro milênio cristão. Defendeu a necessidade absoluta da graça contra o moralismo pelagiano.',
    famousQuote: 'Fizeste-nos para Ti, Senhor, e o nosso coração está inquieto enquanto não descansar em Ti.',
    christocentricFocus: 'Cristo é o único Redentor que cura a vontade humana corrompida pelo pecado original.',
    avatarBg: 'from-stone-800 to-amber-950'
  },
  {
    id: 'atanasio-alexandria',
    name: 'Atanásio de Alexandria',
    title: 'O Campeão da Divindade de Cristo',
    denomination: 'Patrística (Pais da Igreja)',
    period: 'Século IV d.C.',
    birthDeath: '298 – 373 d.C.',
    nationality: 'Egípcio / Alexandria',
    majorWorks: ['Sobre a Encarnação do Verbo', 'Cartas Festais', 'Defesa da Fé Nicena'],
    keyContribution: 'Defendeu heroicamente no Concílio de Nicéia (325 d.C.) que Jesus Cristo é verdadeiro Deus, da mesma substância do Pai (Homoousios), sendo exilado cinco vezes por sua fidelidade.',
    famousQuote: 'Se o mundo inteiro estiver contra Atanásio, então Atanásio estará contra o mundo pela verdade de Cristo!',
    christocentricFocus: 'O Filho de Deus se fez homem para que os homens pudessem ser reconciliados com Deus e restaurados à imagem divina.',
    avatarBg: 'from-rose-950 to-stone-950'
  }
];
