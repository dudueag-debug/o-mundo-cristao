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
  biographyAndContext: string;
  historicalStruggles: string;
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
    avatarBg: 'from-amber-700 to-amber-950',
    biographyAndContext: 'Filho de Samuel e Susanna Wesley, sobreviveu milagrosamente a um incêndio na infância, sendo chamado por sua mãe de "um tição tirado do fogo". Estudou e lecionou em Oxford, fundando com seu irmão Charles o "Clube Santo" para oração, estudo do grego bíblico e visita a presídios. Serviu como missionário na colônia da Geórgia (EUA), regressando em crise de fé até sua experiência transformadora em 24 de maio de 1738 na Rua Aldersgate, Londres: ao ouvir o prefácio de Lutero aos Romanos, sentiu seu "coração estranhamente aquecido". A partir de então, cavalgou mais de 400.000 km pela Grã-Bretanha pregando ao ar livre para as multidões de operários e mineiros.',
    historicalStruggles: 'Teve as portas da maioria das igrejas anglicanas fechadas diante de si por pregar a necessidade do novo nascimento. Enfrentou turbas violentas incitadas por nobres locais, sofreu calúnias sobre espionagem e traição à coroa, e teve um casamento atribulado, mas jamais retrocedeu de sua missão evangelística, proclamando em seu leito de morte: "O melhor de tudo é que Deus está conosco!"'
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
    avatarBg: 'from-amber-600 to-stone-900',
    biographyAndContext: 'Irmão mais novo de John Wesley, fundou o Clube Santo original na Universidade de Oxford em 1729. No Domingo de Pentecostes de 1738, três dias antes de John, Charles encontrou a paz justificadora da fé em Cristo enquanto se recuperava de uma grave enfermidade. Essa experiência inaugurou uma fecundidade hinológica sem paralelo na história cristã, compondo mais de 6.500 hinos que se tornaram a mais poderosa cartilha teológica do povo simples.',
    historicalStruggles: 'Pregou incansavelmente nos campos abertos ao lado de John, sendo alvejado com pedras e animais mortos por turbas enfurecidas. Enfrentou com equilíbrio pastoral os debates acirrados com Whitefield sobre a predestinação, sempre defendendo que o amor cristão devia prevalecer sobre qualquer divergência de opinião.'
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
    avatarBg: 'from-orange-700 to-stone-950',
    biographyAndContext: 'Pastor metodista de conduta exemplar e profunda consagração, pastoreava a congregação de Nova Friburgo (RJ) quando o sopro do Espírito Santo tocou a mocidade e as lideranças nos primeiros dias de 1967. Diante da necessidade de preservar a liberdade dos dons espirituais sem abandonar as raízes wesleyanas, presidiu o concílio de fundação da Igreja Metodista Wesleyana em 5 de janeiro de 1967, tornando-se o primeiro Presidente Geral.',
    historicalStruggles: 'Suportou com mansidão e firmeza a exclusão eclesiástica inicial, o preconceito religioso da época contra o pentecostalismo e a total escassez de recursos materiais para a construção dos primeiros templos. Guiou a denominação com zelo evangelístico e disciplina santa até a sua plena consolidação nacional e internacional.'
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
    avatarBg: 'from-blue-800 to-stone-950',
    biographyAndContext: 'Convertido aos 15 anos numa manhã de tempestade de neve em Colchester através do chamado de um sapateiro leigo sobre Isaías 45:22. Aos 19 anos foi chamado para a Capela de New Park Street em Londres, onde as multidões eram tão imensas que exigiram a construção do Tabernáculo Metropolitano (6.000 lugares), que lotou ininterruptamente até sua morte. Fundou um colégio para preparar pastores humildes, dois orfanatos e mantinha mais de 60 obras sociais.',
    historicalStruggles: 'Sofria de gota dolorosíssima, doença renal crônica e recorrentes episódios de profunda depressão física e mental. No final de sua vida, suportou o isolamento e o rompimento na dolorosa "Controvérsia do Rebaixamento" (Downgrade Controversy), ao advertir que o liberalismo teológico alemão estava destruindo a fé bíblica das igrejas batistas inglesas.'
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
    avatarBg: 'from-indigo-800 to-stone-900',
    biographyAndContext: 'Funileiro humilde de Bedford sem instrução formal erudita. Após anos de terror e agonias de alma sobre o inferno e a culpa dos seus pecados, encontrou a redenção ao ouvir lavadeiras pobres falarem com gozo sobre o novo nascimento. Tornou-se pregador congregacional/batista fervoroso, atraindo multidões de lavradores com sua linguagem bíblica cristalina e coração pastoral.',
    historicalStruggles: 'Com a Restauração da Monarquia e as leis de conformidade religiosa, foi preso em 1660 por se recusar a abandonar a pregação leiga. Passou 12 longos anos no cárcere de Bedford, trabalhando como artesão de cadarços para alimentar sua esposa cega e quatro filhos. Naquela cela úmida escreveu a obra-prima "O Peregrino", o livro mais lido e traduzido da história depois da Bíblia.'
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
    avatarBg: 'from-cyan-900 to-stone-950',
    biographyAndContext: 'Advogado e erudito humanista em Paris, converteu-se subitamente por volta de 1533 ("Deus subjugou o meu coração pela Sua graça"). Fugindo das fogueiras francesas, publicou em Basileia a primeira edição das "Institutas" aos 26 anos para defender os cristãos reformados diante do rei francês. Ao passar uma noite em Genebra a caminho de Estrasburgo, Guilherme Farel o convocou a permanecer na cidade sob advertência do juízo de Deus, transformando Genebra na capital intelectual da Reforma.',
    historicalStruggles: 'Foi expulso da cidade em 1538 por se recusar a submeter a Ceia do Senhor ao controle de magistrados mundanos, vivendo anos fecundos em Estrasburgo com Martin Bucer antes de ser implorado a retornar a Genebra em 1541. Viveu com enxaquecas terríveis, cólicas nefríticas, gota e tuberculose, enquanto trabalhava até 18 horas por dia e lidava com a oposição ferrenha do partido dos libertinos.'
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
    avatarBg: 'from-teal-900 to-stone-950',
    biographyAndContext: 'Graduado em Yale com precocidade genial aos 17 anos, pastoreou a igreja de Northampton, Massachusetts. Sob sua pregação expositiva minuciosa, eclodiu em 1734 e 1740 o Primeiro Grande Despertamento nas colônias americanas. Escreveu tratados pioneiros demonstrando que as afeições religiosas genuínas devem produzir frutos de santidade e integridade moral.',
    historicalStruggles: 'Após 23 anos de ministério comovente, foi demitido pelos membros de sua congregação por insistir que a Ceia do Senhor exigia profissão de fé e regeneração genuína (recusando o relaxamento moral do "Half-Way Covenant"). Mudou-se como missionário pioneiro para os índios de Stockbridge, antes de ser eleito presidente da Universidade de Princeton, falecendo pouco depois por inoculação vacinal.'
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
    avatarBg: 'from-emerald-900 to-stone-950',
    biographyAndContext: 'Plantou em 1989 a Redeemer Presbyterian Church em Manhattan, Nova York, desafiando a premissa de que cidades globais hipersecularizadas eram cemitérios para o Evangelho bíblico. Com pregação bíblica rigorosa e profunda sensibilidade cultural, alcançou milhares de profissionais céticos, artistas e intelectuais, fundando uma rede global que já plantou centenas de igrejas em dezenas de nações.',
    historicalStruggles: 'Liderou sua congregação em oração e auxílio humanitário nos escombros do 11 de Setembro de 2001. Nos seus anos derradeiros, travou uma longa e exemplar batalha contra o câncer de pâncreas estágio IV, dando testemunho constante de esperança viva na ressurreição e no amor do Salvador.'
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
    avatarBg: 'from-red-900 to-stone-950',
    biographyAndContext: 'Monge agostiniano angustiado pelo peso de seus pecados e pelo terror do juízo divino. Foi curado em sua alma ao meditar em Romanos 1:17 ("O justo viverá por fé"), descobrindo que a justiça de Deus não é uma espada punitiva, mas o dom da graça que salva o pecador penitente em Cristo. Em 31 de outubro de 1517, afixou as 95 Teses nas portas de Wittenberg, desencadeando a aurora da Reforma Protestante.',
    historicalStruggles: 'Excomungado pela bula papal "Exsurge Domine" de Leão X, queimou-a publicamente em fogueira com seus alunos. Na Dieta Imperial de Worms diante de Carlos V, recusou-se a retratar suas obras bíblicas sob risco iminente de morte. Resgatado pelo príncipe Frederico, viveu escondido no Castelo de Wartburg sob o disfarce de "Cavaleiro George", traduzindo o Novo Testamento grego para a língua do povo alemão.'
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
    avatarBg: 'from-stone-700 to-stone-950',
    biographyAndContext: 'Doutor em teologia em Berlim aos 21 anos, rejeitou a complacência da igreja nacional alemã com o regime de Hitler. Liderou o seminário clandestino da Igreja Confessante em Finkenwalde, treinando pastores em oração contínua, vida comunitária e fidelidade bíblica inegociável. Renunciou à segurança de um convite nos Estados Unidos para compartilhar o destino de sofrimento e resistência de sua pátria.',
    historicalStruggles: 'Preso pela Gestapo em abril de 1943 por atuar no resgate secreto de famílias judias e apoiar os conspiradores contra o tirano. Mesmo na cela militar de Tegel, pastoreava prisioneiros e guardas com cartas de profunda maturidade teológica. Foi executado por enforcamento no campo de concentração de Flossenbürg em 9 de abril de 1945, murmurando: "Para mim, é o início da vida".'
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
    avatarBg: 'from-sky-900 to-stone-950',
    biographyAndContext: 'Catedrático de literatura medieval em Oxford e Cambridge. Abandonou a fé na juventude tornando-se ateu convicto, mas após anos de debates intelectuais com amigos piedosos como J.R.R. Tolkien, rendeu-se a Cristo aos 31 anos como "o convertido mais relutante de toda a Inglaterra". Durante a Segunda Guerra, suas palestras na BBC de Londres reergueram a alma da nação sob o fogo dos bombardeios.',
    historicalStruggles: 'Ferido gravemente por estilhaços nas trincheiras da Primeira Guerra Mundial em 1918. Suportou a hostilidade e a esnobação de acadêmicos de Oxford que criticavam seu zelo evangelístico popular. Sofreu a dolorosa morte por câncer de sua amada esposa Joy Davidman, experiência que o levou a escrever "A Anatomia de uma Dor", onde sua fé foi refinada como ouro no fogo.'
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
    avatarBg: 'from-slate-800 to-stone-950',
    biographyAndContext: 'Rector emérito da All Souls Church, Langham Place em Londres, e capelão honorário da Coroa Britânica. Desempenhou papel seminal na articulação do Congresso Mundial de Evangelização de Lausanne em 1974, redigindo o célebre Pacto de Lausanne ao lado de Billy Graham. Viveu em extrema modéstia monástica, doando todos os direitos de seus mais de 50 livros para bolsas de estudo de líderes do Terceiro Mundo.',
    historicalStruggles: 'Enfrentou com rigorosa autoridade bíblica tanto a maré do liberalismo secular europeu quanto os desvios sectários de grupos evangélicos desprovidos de base exegética ou de misericórdia para com as dores sociais dos pobres.'
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
    avatarBg: 'from-amber-800 to-stone-900',
    biographyAndContext: 'Discípulo de Teodoro de Beza na conceituada Academia de Genebra. Ao receber o encargo de refutar as teses que contestavam a predestinação rígida supralapsariana, dedicou-se à exegese minuciosa do texto grego do Novo Testamento e concluiu que o determinismo absoluto colocava sobre o Deus amoroso a autoria do pecado. Tornou-se o mais eminente professor de teologia da Universidade de Leiden.',
    historicalStruggles: 'Foi violentamente caluniado e acusado falsamente de heresia e pelagianismo por seu colega de faculdade Franciscus Gomarus. Enfrentou com nobreza e brandura de ânimo incontáveis interrogatórios dos magistrados e sínodos regionais, mantendo sua ortodoxia bíblica imaculada até falecer de tuberculose aos 49 anos.'
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
    avatarBg: 'from-violet-900 to-stone-950',
    biographyAndContext: 'Filho de pastor pioneiro das Assembleias de Deus americanas, lecionou Novo Testamento no Regent College e no Gordon-Conwell Theological Seminary. Coordenou por décadas o comitê internacional de tradutores da New International Version (NIV), demonstrando com erudição incontestável que o batismo no Espírito Santo e os dons espirituais devem andar de mãos dadas com a exegese bíblica meticulosa.',
    historicalStruggles: 'Superou a desconfiança secular de acadêmicos tradicionais contra o movimento pentecostal e, por outro lado, confrontou com coragem profética as heresias triunfalistas da teologia da prosperidade, exortando a Igreja a retornar à pureza da Cruz e do discipulado humilde.'
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
    avatarBg: 'from-stone-800 to-amber-950',
    biographyAndContext: 'Nascido em Tagaste (Argélia), filho das orações perseverantes de Santa Mônica. Perambulou na juventude pelos labirintos da licenciosidade e da seita maniqueísta até sua conversão histórica em Milão em 386 d.C. ao ouvir uma voz angelical ("Toma e lê") e ler Romanos 13:13-14. Consagrado bispo de Hipona, suas obras influenciaram de forma indelével tanto a tradição católica quanto todos os reformadores protestantes.',
    historicalStruggles: 'Combateu o cisma rigorista donatista e a heresia moralista de Pelágio. Escreveu "A Cidade de Deus" durante a comoção do saque de Roma pelos visigodos de Alarico em 410 d.C. Faleceu em oração enquanto os bárbaros vândalos sitiavam as muralhas de sua diocese de Hipona.'
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
    avatarBg: 'from-rose-950 to-stone-950',
    biographyAndContext: 'Jovem diácono e secretário episcopal no Concílio Ecumênico de Nicéia (325 d.C.), refutou a heresia ariana que sustentava que Jesus era uma criatura criada ("Houve um tempo em que Ele não era"). Patriarca de Alexandria por 45 anos, produziu a clássica obra "Sobre a Encarnação do Verbo" e foi o primeiro bispo a listar em sua 39ª Carta Festal (367 d.C.) exatamente os 27 livros canônicos do Novo Testamento.',
    historicalStruggles: 'Alvo de ódio sem tréguas por parte de imperadores arianos corruptos, suportou cinco exílios forçados pelo Império Romano, totalizando mais de 17 anos errante pelo deserto e acolhido pelos monges eremitas. Nunca capitulou nem contemporizou a verdade sobre a plena divindade do Filho de Deus.'
  }
];
