export interface ChurchDenomination {
  id: string;
  name: string;
  category: 'historica' | 'reformada' | 'pentecostal' | 'wesleyana' | 'protestante';
  foundedYear: string;
  founders: string[];
  historicalOrigin: string;
  keyDoctrines: string[];
  churchGovernance: string;
  brazilHistory: string;
  consolidationAndImpact: string;
  emblemOrSymbol: string;
  theologicalEmphasis: string;
}

export const CHURCH_DENOMINATIONS: ChurchDenomination[] = [
  {
    id: 'catolica-romana',
    name: 'Igreja Católica Apostólica Romana',
    category: 'historica',
    foundedYear: 'Século I a IV d.C. (Consolidação com Édito de Milão em 313 e Concílio de Nicéia em 325)',
    founders: ['Tradição Petrina e Paulina', 'Bispos de Roma (Leão I, Gregório Magno)', 'Imperador Constantino'],
    historicalOrigin: `A Igreja Católica desenvolveu-se a partir das comunidades cristãs primitivas espalhadas pelo Império Romano. Inicialmente perseguida pelos imperadores romanos durante três séculos (catacumbas e martírios sob Nero, Décio e Diocleciano), a Igreja ganhou liberdade com o Édito de Milão (313 d.C.) sob o imperador Constantino. 

Em 325 d.C., reuniu-se o Primeiro Concílio de Nicéia para combater a heresia do arianismo e definir a divindade plena de Cristo (homoousios, "da mesma substância do Pai"). Com a desintegração do Império Romano do Ocidente (476 d.C.), a cátedra de Roma, liderada por bispos influentes como Leão I (440-461) e Gregório I (590-604), assumiu papel político e espiritual de liderança no Ocidente. Em 1054 d.C. ocorreu o Grande Cisma do Oriente, separando a Igreja Católica Romana no Ocidente da Igreja Ortodoxa no Oriente por disputas sobre a autoridade papal e a cláusula Filioque. No século XVI, em resposta à Reforma Protestante, realizou-se o Concílio de Trento (1545-1563), que dogmatizou os sete sacramentos, a Vulgata Latina, o sacerdócio ministerial hierárquico e a autoridade da Tradição e do Magistério juntamente com as Escrituras.`,
    keyDoctrines: [
      'Autoridade das Escrituras e da Sagrada Tradição interpretadas pelo Magistério da Igreja',
      'Sete Sacramentos: Batismo, Confirmação (Crisma), Eucaristia, Penitência, Unção dos Enfermos, Ordem e Matrimônio',
      'Sucessão apostólica ininterrupta e primazia do Bispo de Roma (Papa)',
      'Dogma da Transubstanciação do pão e vinho no Corpo e Sangue literais de Cristo',
      'Comunhão dos santos, veneração da Virgem Maria (Maternidade Divina, Imaculada Conceição e Assunção) e doutrina do Purgatório'
    ],
    churchGovernance: 'Hierárquico e episcopal centralizado no Papa (Bispo de Roma) e no Colégio de Cardeais e Bispos.',
    brazilHistory: 'Chegou ao Brasil em 22 de abril de 1500 com a frota de Pedro Álvares Cabral e a primeira missa rezada por Frei Henrique de Coimbra em Porto Seguro. Foi a religião oficial do Estado brasileiro durante todo o período Colonial e Imperial até a Proclamação da República e a Constituição de 1891, que instituiu a laicidade do Estado.',
    consolidationAndImpact: 'Consolidou-se como a maior instituição religiosa contínua do Ocidente, exercendo influência gigantesca na filosofia ocidental (Santo Agostinho, São Tomás de Aquino), preservação de manuscritos bíblicos medievais, fundação de universidades e hospitais pelo mundo.',
    emblemOrSymbol: 'A Cruz Latina, as Chaves de São Pedro e a Tiara Papal',
    theologicalEmphasis: 'Sacramentalismo, Tradição Apostólica e Comunhão Universal sob a Sé Romana.'
  },
  {
    id: 'assembleia-de-deus',
    name: 'Assembleia de Deus',
    category: 'pentecostal',
    foundedYear: '18 de Junho de 1911 (Belém do Pará, Brasil)',
    founders: ['Gunnar Vingren', 'Daniel Berg', 'William J. Seymour (Movimento da Rua Azusa)'],
    historicalOrigin: `A Assembleia de Deus tem suas raízes no Movimento Pentecostal moderno iniciado em 1906 na Missão da Rua Azusa, em Los Angeles (EUA), sob a liderança do pastor afro-americano William J. Seymour. O mover caracterizou-se pela busca fervorosa do batismo no Espírito Santo com a evidência bíblica inicial de falar em novas línguas (glossolalia) e manifestação de dons espirituais.

Em Chicago, os jovens missionários suecos Gunnar Vingren e Daniel Berg receberam uma profecia durante um culto de oração indicando que deveriam pregar em um lugar chamado "Pará". Sem saberem onde ficava, consultaram um mapa e descobriram que se tratava de um estado no norte do Brasil. Chegaram a Belém do Pará em 19 de novembro de 1910. Inicialmente congregaram na Igreja Batista de Belém, mas ao compartilharem a doutrina do batismo no Espírito Santo, foram expulsos juntamente com outros irmãos que creram na mensagem. Em 18 de junho de 1911, na casa de Celina de Albuquerque, fundaram a "Missão de Fé Apostólica", que em 1918 foi formalmente registrada como "Assembleia de Deus".`,
    keyDoctrines: [
      'Inerrância e autoridade suprema da Bíblia Sagrada',
      'Salvação unicamente pela graça mediante a fé em Jesus Cristo',
      'Batismo no Espírito Santo como experiência distinta da regeneração, evidenciada pelo falar em outras línguas',
      'Atualidade dos dons espirituais (profecia, curas milagrosas, discernimento de espíritos)',
      'Batismo nas águas exclusivamente por imersão para crentes arrependidos',
      'Escatologia pré-milenista e pré-tribulacionista (arrebatamento da Igreja)'
    ],
    churchGovernance: 'Episcopal-pastoral com convenções distritais, estaduais e nacionais (CGADB - Convenção Geral e CONAMAD - Convenção Madureira).',
    brazilHistory: 'De Belém do Pará, Daniel Berg e Gunnar Vingren viajaram incansavelmente pelo Amazonas, Nordeste, Rio de Janeiro e São Paulo. A igreja cresceu de maneira exponencial entre as classes populares, operários e ribeirinhos, tornando-se o maior movimento protestante do Brasil, com dezenas de milhares de templos e dezenas de milhões de membros.',
    consolidationAndImpact: 'Tornou-se a maior denominação pentecostal do planeta. Teve impacto profundo na evangelização popular no Brasil, envio maciço de missionários transculturais, disseminação da música sacra congregacional (Harpa Cristã) e inserção social por meio de assistência às comunidades periféricas.',
    emblemOrSymbol: 'A Bíblia Aberta, a Pomba do Espírito Santo e a Chama Pentecostal',
    theologicalEmphasis: 'Poder do Espírito Santo, Avivamento Contínuo, Missões e Segunda Vinda Iminente de Cristo.'
  },
  {
    id: 'igreja-batista',
    name: 'Igreja Batista',
    category: 'reformada',
    foundedYear: '1609 (Amsterdã / Inglaterra) & 1871/1882 (Brasil)',
    founders: ['John Smyth', 'Thomas Helwys', 'Roger Williams', 'William Buck Bagby e Anne Luther Bagby'],
    historicalOrigin: `O movimento batista nasceu do seio do movimento Puritano Separatista inglês no início do século XVII. Fugindo da perseguição da Igreja Anglicana oficial, o pastor John Smyth e o advogado Thomas Helwys refugiaram-se em Amsterdã em 1608. Em 1609, após profundo estudo do Novo Testamento, rejeitaram o batismo infantil (pedobatismo) por entenderem que as Escrituras prescrevem o batismo unicamente àqueles que professam fé consciente e pessoal em Cristo (credobatismo).

Em 1611, Thomas Helwys retornou corajosamente à Inglaterra e fundou a primeira Igreja Batista em solo inglês, em Spitalfields (Londres). Helwys escreveu a célebre obra "A Short Declaration of the Mystery of Iniquity", enviando uma cópia ao próprio rei James I com a dedicatória histórica defendendo a liberdade religiosa universal — inclusive para judeus e muçulmanos — afirmando que o rei não tem poder sobre a consciência espiritual de nenhum homem, o que lhe custou a prisão na Torre de Londres até sua morte. Nos EUA, Roger Williams fundou a colônia de Rhode Island (1636) e a Primeira Igreja Batista da América, gravando na história o princípio da separação absoluta entre Igreja e Estado.`,
    keyDoctrines: [
      'Autoridade exclusiva e final da Bíblia em questões de fé e prática (Sola Scriptura)',
      'Batismo bíblico unicamente por imersão total em água de crentes após pública profissão de fé',
      'Sacerdócio universal de todos os crentes: acesso direto a Deus por meio do único Mediador, Jesus Cristo',
      'Autonomia da igreja local sob o senhorio de Jesus Cristo (congregação soberana)',
      'Separação total entre Igreja e Estado e defesa intransigente da liberdade religiosa de consciência',
      'Dois únicos memoriais instituídos por Cristo: o Batismo e a Ceia do Senhor'
    ],
    churchGovernance: 'Congregacional democrático: as decisões e eleições de liderança são tomadas em assembleias plenárias pela membresia da igreja local.',
    brazilHistory: 'A presença batista no Brasil teve início com imigrantes norte-americanos em Santa Bárbara d\'Oeste (SP) em 1871. A primeira igreja batista voltada à evangelização de brasileiros foi organizada em Salvador (Bahia), em 15 de outubro de 1882, pelos missionários William Buck Bagby e Anne Luther Bagby, juntamente com o ex-padre católico convertido Antônio Teixeira de Albuquerque.',
    consolidationAndImpact: 'Organizou-se na Convenção Batista Brasileira (CBB, em 1907) e na Convenção Batista Nacional (CBN, vertente da Renovação Espiritual nos anos 60). Destaca-se pela forte tradição missionária mundial (Junta de Missões Mundiais e Nacionais), fundação de colégios e seminários teológicos renomados e produção de hinologia clássica (Cantor Cristão).',
    emblemOrSymbol: 'A Bíblia Sagrada e a Tocha do Evangelho',
    theologicalEmphasis: 'Autoridade Bíblica, Batismo por Imersão, Autonomia Local e Evangelismo Pessoal.'
  },
  {
    id: 'igreja-presbiteriana',
    name: 'Igreja Presbiteriana (Tradição Reformada)',
    category: 'reformada',
    foundedYear: 'Século XVI (Reforma Suíça e Escocesa) & 1859 (Brasil)',
    founders: ['João Calvino (Genebra)', 'John Knox (Escócia)', 'Ashbel Green Simonton (Brasil)'],
    historicalOrigin: `A Igreja Presbiteriana é a herdeira direta da Reforma Suíça liderada por Ulrico Zuínglio e sistematizada de forma magistral por João Calvino em Genebra (1509-1564). Calvino produziu as "Institutas da Religião Cristã" e delineou uma eclesiologia bíblica baseada no governo colegiado por presbíteros eleitos pelo povo.

O reformador escocês John Knox estudou com Calvino em Genebra e levou esses princípios para a Escócia em 1560, redigindo a "Confissão Escocesa" e estabelecendo a Igreja da Escócia (Kirk) sob governo presbiteriano, resistindo à monarquia britânica. No século XVII, teólogos ingleses e escoceses reuniram-se na Abadia de Westminster (1643-1649) e elaboraram a célebre "Confissão de Fé de Westminster" e os Catecismos Maior e Breve, considerados a súmula mais profunda e sistemática da teologia reformada e das Doutrinas da Graça (depravação total, eleição incondicional, expiação eficaz, graça irresistível e perseverança dos santos).`,
    keyDoctrines: [
      'Soberania absoluta de Deus em todas as áreas da criação, história e salvação',
      'Autoridade e inerrância das Sagradas Escrituras',
      'Doutrina da Graça Reformada (Pacto da Graça e Justificação somente pela Fé)',
      'Governo representativo por Presbíteros (Presbíteros Docentes/Pastores e Presbíteros Regentes)',
      'Padrões doutrinários baseados nos Símbolos de Westminster',
      'Batismo de crentes e de seus filhos (aliança familiar) e Ceia do Senhor como meio de graça espiritual'
    ],
    churchGovernance: 'Presbiterial representativo: Conselho Local (Pastores e Presbíteros), Presbitério Regional, Sínodo e Supremo Concílio deliberativo.',
    brazilHistory: 'O presbiterianismo chegou oficialmente ao Brasil com o jovem pastor norte-americano Ashbel Green Simonton, que desembarcou no Rio de Janeiro em 12 de agosto de 1859. Em 1862 fundou a Igreja Presbiteriana do Rio de Janeiro; em 1864 lançou o primeiro jornal evangélico do país ("A Imprensa Evangélica"); em 1865 organizou o primeiro Presbitério e em 1867 o primeiro Seminário Teológico. O colégio fundado em São Paulo pelos presbiterianos deu origem à prestigiosa Universidade Presbiteriana Mackenzie.',
    consolidationAndImpact: 'A Igreja Presbiteriana do Brasil (IPB) e a Igreja Presbiteriana Independente (IPI) destacam-se pela solidez teológica, alto nível acadêmico de seu corpo pastoral, rigor confessional e pioneirismo educacional na história republicana brasileira.',
    emblemOrSymbol: 'A Sarça Ardente ("Nec Tamen Consumebatur" - Que ardia sem se consumir)',
    theologicalEmphasis: 'Soberania de Deus, Cosmovisão Cristã, Teologia da Aliança e Rigor Exegético.'
  },
  {
    id: 'igreja-metodista-e-imw',
    name: 'Igreja Metodista & Igreja Metodista Wesleyana',
    category: 'wesleyana',
    foundedYear: '1738 (Oxford/Aldersgate) & 5 de Janeiro de 1967 (IMW, Nova Friburgo/RJ)',
    founders: ['John Wesley', 'Charles Wesley', 'Pioneiros IMW: Pr. Dorival Beppu, Idelmício Cabral, Waldyr Miranda, Gessé Carvalho'],
    historicalOrigin: `O Metodismo nasceu na Universidade de Oxford (1729) quando os irmãos John e Charles Wesley formaram o "Clube Santo", dedicando-se à oração diária, estudo rigoroso das Escrituras em grego e visitação contínua a presos e necessitados. Em 24 de maio de 1738, na Rua Aldersgate em Londres, ouvindo a leitura do prefácio de Martinho Lutero à Epístola aos Romanos, John Wesley sentiu o coração "estranhamente aquecido" e a certeza viva de sua justificação por Cristo.

Com os púlpitos das igrejas oficiais fechados, Wesley começou a pregar ao ar livre para milhares de mineradores e trabalhadores excluídos, proclamando o lema imortal: "O mundo é a minha paróquia!". O movimento uniu com perfeição a ortodoxia bíblica arminiana (a graça de Deus é estendida a todos) à ortopraxia prática (santidade de coração e de vida). 

No Brasil, após o estabelecimento do Metodismo tradicional no século XIX, ocorreu na década de 1960 um mover extraordinário do Espírito Santo em Nova Friburgo (RJ). Pastores e congregações metodistas foram batizados no Espírito Santo com línguas e dons espirituais. Em 5 de janeiro de 1967, no salão do Grêmio Teatral de Nova Friburgo, foi fundada a **Igreja Metodista Wesleyana (IMW)**, consolidando a união histórica e gloriosa entre a **Herança Teológica Wesleyana** (santidade e graça) e o **Avivamento Pentecostal** (poder e manifestação dos dons espirituais).`,
    keyDoctrines: [
      'A Ordem da Graça Wesleyana: Graça Preveniente (universal), Justificadora (pela fé) e Santificadora (obra contínua)',
      'O Quadrilátero Wesleyano: Escritura (autoridade primária), Tradição, Razão e Experiência viva',
      'Perfeição Cristã ou Inteira Santificação: o coração purificado do pecado reinante para amar a Deus e ao próximo com amor perfeito',
      'Avivamento Pentecostal na IMW: Batismo no Espírito Santo e atualidade plena dos dons carismáticos',
      'Santidade Social: a fé bíblica manifestada em compaixão, hospitais, apoio comunitário e justiça social'
    ],
    churchGovernance: 'Episcopal-conexional: Concílio Geral, Colégio Episcopal, Regiões Eclesiásticas com seus Bispos, Distritos com Superintendentes e Igrejas Locais.',
    brazilHistory: 'A IMW expandiu-se com dinamismo missionário incomparável a partir de Nova Friburgo para todos os estados do Brasil e países no exterior (América do Sul, Europa, África e EUA), mantendo colégios, seminários teológicos (Cetemw) e agências missionárias.',
    consolidationAndImpact: 'A IMW destaca-se como o modelo pioneiro de denominação wesleyana-pentecostal no mundo de língua portuguesa, com vibrante espiritualidade, hinos históricos cantados com unção contemporânea e evangelização em pequenos grupos (Células/Classes).',
    emblemOrSymbol: 'A Cruz com a Chama do Espírito Santo e a Bíblia Aberta',
    theologicalEmphasis: 'Graça para Todos, Santidade Bíblica, Batismo no Espírito Santo e Paixão Missionária.'
  },
  {
    id: 'igreja-luterana',
    name: 'Igreja Luterana',
    category: 'historica',
    foundedYear: '31 de Outubro de 1517 (Alemanha) & 1824 (Brasil)',
    founders: ['Martinho Lutero', 'Filipe Melâncton'],
    historicalOrigin: `A Igreja Luterana é o berço histórico da Reforma Protestante. Iniciou-se em 31 de outubro de 1517, quando o monge agostiniano e professor de teologia Martinho Lutero afixou suas célebres 95 Teses na porta da Igreja do Castelo de Wittenberg (Alemanha), contestando publicamente o escandaloso comércio papal de indulgências promovido por Johann Tetzel.

Convocado perante a Dieta Imperial de Worms em 1521, perante o Imperador Carlos V e delegados papais, Lutero recusou retratar-se proferindo a histórica declaração: "A menos que eu seja convencido pelo testemunho das Escrituras ou por razão evidente... minha consciência é cativa da Palavra de Deus. Não posso e não me retratarei de nada. Aqui permaneço; não posso fazer de outro modo. Que Deus me ajude. Amém!". A teologia luterana foi documentada na "Confissão de Augsburgo" (1530) e reunida no "Livro de Concórdia" (1580).`,
    keyDoctrines: [
      'Justificação unicamente pela Graça mediante a Fé (Articulus stantis et cadentis ecclesiae - o artigo pelo qual a igreja se mantém em pé ou cai)',
      'Os Cinco Solas da Reforma: Sola Scriptura, Sola Gratia, Sola Fide, Solus Christus, Soli Deo Gloria',
      'Teologia da Cruz (Theologia Crucis) em oposição à Teologia da Glória humana',
      'Consubstanciação Real: presença real e física de Cristo "em, com e sob" os elementos da Ceia',
      'Doutrina da Vocação e dos Dois Reinos (Reino Espiritual de Deus e Reino Temporal terreno)'
    ],
    churchGovernance: 'Episcopal ou sinodal colegiado com Pastores e Sínodos.',
    brazilHistory: 'O luteranismo chegou ao Brasil em 1824 com a imigração de colonos alemães para Nova Friburgo (RJ) e São Leopoldo (RS), estabelecendo as primeiras comunidades protestantes formalmente organizadas no país. Hoje está presente na Igreja Evangélica de Confissão Luterana no Brasil (IECLB) e Igreja Evangélica Luterana do Brasil (IELB).',
    consolidationAndImpact: 'Legou ao cristianismo a tradução das Escrituras para a língua do povo, o resgate do canto congregacional e o princípio fundamental da graça incondicional de Deus.',
    emblemOrSymbol: 'A Rosa de Lutero (Cruz negra no coração vermelho sobre a rosa branca em campo azul cercado de anel dourado)',
    theologicalEmphasis: 'Graça Absoluta, Lei e Evangelho, Justificação pela Fé e Centralidade da Cruz.'
  },
  {
    id: 'igreja-anglicana',
    name: 'Igreja Anglicana (Episcopal)',
    category: 'historica',
    foundedYear: '1534 (Reforma Inglesa) & Século XIX (Brasil)',
    founders: ['Thomas Cranmer', 'Henrique VIII (ruptura política)', 'Rainha Elizabeth I (Acordo Elisabetano)'],
    historicalOrigin: `A Igreja da Inglaterra (Ecclesia Anglicana) tem raízes cristãs celtas antigas, mas formalizou sua autonomia eclesiástica da Sé Romana no século XVI através do Ato de Supremacia de 1534 sob Henrique VIII. Sob o arcebispo de Canterbury Thomas Cranmer e durante o reinado de Eduardo VI, a igreja absorveu profundamente a teologia reformada e protestante, sintetizada nos "Trinta e Nove Artigos de Religião" (1563) e no magnífico "Livro de Oração Comum" (Book of Common Prayer).

Durante o reinado de Elizabeth I consolidou-se a chamada "Via Média", que manteve a estrutura histórica de bispos (episcopado histórico) e rica liturgia eucarística combinadas com a fé soteriológica da Reforma Protestante.`,
    keyDoctrines: [
      'Autoridade suprema das Sagradas Escrituras em tudo o que é necessário para a salvação',
      'Credos Históricos da Igreja: Credo Apostólico, Credo Niceno e Credo de Atanásio',
      'Dois Sacramentos Evangélicos instituídos por Cristo: Batismo e Santa Ceia (Eucaristia)',
      'O Quadrilátero de Lambeth-Chicago: Escrituras, Credos, Sacramentos e Episcopado Histórico',
      'Liturgia estruturada no Livro de Oração Comum'
    ],
    churchGovernance: 'Episcopal histórico, liderado pelo Arcebispo de Canterbury como primaz de honra na Comunhão Anglicana mundial.',
    brazilHistory: 'A presença anglicana no Brasil teve início no século XIX com capelanias para cidadãos britânicos após os tratados de 1810. Em 1890, missionários norte-americanos iniciaram a pregação em português no Rio Grande do Sul, originando a Igreja Episcopal Anglicana do Brasil (IEAB).',
    consolidationAndImpact: 'Representa a terceira maior comunhão cristã do mundo, notável pela conciliação entre tradição sacramental litúrgica e pensamento teológico aberto à reflexão bíblica contemporânea.',
    emblemOrSymbol: 'A Bússola Anglicana e a Cruz de São Jorge',
    theologicalEmphasis: 'Liturgia Bíblica, Via Média, Sacramento e Razão guiada pelas Escrituras.'
  },
  {
    id: 'igreja-congregacional',
    name: 'Igreja Congregacional',
    category: 'protestante',
    foundedYear: 'Século XVI (Inglaterra) & 1855 (Brasil)',
    founders: ['Robert Browne', 'Robert Reid Kalley e Sarah Poulton Kalley (Brasil)'],
    historicalOrigin: `O congregacionalismo surgiu no movimento dos Puritanos Separatistas da Inglaterra elisabetana (final do século XVI), conhecidos como "brownistas" por influência de Robert Browne. Eles defendiam que a igreja local é autônoma, reunida voluntariamente sob a aliança com Cristo, sem interferência de bispos ou magistrados civis.

No Brasil, os congregacionais possuem papel histórico indelével: o médico missionário escocês Dr. Robert Reid Kalley e sua esposa Sarah Kalley desembarcaram no Rio de Janeiro em 10 de maio de 1855. Em 19 de agosto de 1855, Kalley organizou a primeira aula de Escola Bíblica Dominical em língua portuguesa em Petrópolis (RJ) e em 11 de julho de 1858 fundou a histórica "Igreja Evangélica Fluminense", o primeiro templo evangélico de fala portuguesa organizado no país.`,
    keyDoctrines: [
      'Autonomia total da igreja local sob o senhorio direto de Cristo',
      'Sola Scriptura como regra infalível de fé',
      'Pacto da Igreja entre os membros congregados',
      'Batismo e Ceia como ordenanças bíblicas',
      'Defesa histórica da liberdade de culto e separação entre Igreja e Estado'
    ],
    churchGovernance: 'Congregacional puro: cada congregação é soberana em suas decisões administrativas e pastorais.',
    brazilHistory: 'Pioneiros absolutos da evangelização em língua portuguesa no Brasil Imperial. Kalley enfrentou processos do clero católico com santa mansidão, convenceu o Imperador Dom Pedro II a garantir a liberdade de culto e fundou a União das Igrejas Evangélicas Congregacionais do Brasil (UIECB).',
    consolidationAndImpact: 'Deixou como legado imperecível os primeiros hinários evangélicos impressos em português ("Salmos e Hinos") e a primeira geração de pastores e pregadores nacionais.',
    emblemOrSymbol: 'A Bíblia Sagrada e a Cruz sobre a Rampa',
    theologicalEmphasis: 'Autonomia Local, Evangelização Pioneira, Piedade e Liberdade Bíblica.'
  }
];
