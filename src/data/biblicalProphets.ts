// Acervo Completo dos Profetas Maiores e Menores da Bíblia Sagrada
// Contém biografia, época histórica, o que aconteceu com eles, mensagem profética e conexões cristocêntricas

export interface BiblicalProphet {
  id: string;
  name: string;
  nameMeaning: string;
  classification: 'maior' | 'menor';
  period: 'pre-exilio' | 'exilio' | 'pos-exilio';
  periodDisplay: string;
  approximateDates: string;
  audience: string; // Ex: Reino do Sul (Judá), Reino do Norte (Israel), Nínive, Babilônia
  contemporaryKings: string;
  biographyAndCalling: string;
  whatHappenedToHim: string; // História de lutas, perseguições, sofrimentos e martírio
  centralMessage: string;
  messianicProphecies: string[];
  keyThemes: string[];
  goldenVerse: {
    reference: string;
    text: string;
  };
}

export const BIBLICAL_PROPHETS: BiblicalProphet[] = [
  // ==========================================
  // PROFETA MAIORES (5 Livros / 4 Profetas)
  // ==========================================
  {
    id: 'isaias',
    name: 'Isaías',
    nameMeaning: 'Yahweh é Salvação',
    classification: 'maior',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Reino de Judá)',
    approximateDates: '~740 – 680 a.C.',
    audience: 'Reino do Sul (Judá) e nações vizinhas',
    contemporaryKings: 'Uzias, Jotão, Acaz e Ezequias',
    biographyAndCalling: 'Filho de Amoz, de linhagem nobre e acesso à corte real em Jerusalém. Teve seu chamado sublime no ano em que morreu o rei Uzias (Is 6), quando contemplou o Senhor assentado sobre um alto e sublime trono e um serafim tocou seus lábios com uma brasa viva do altar, respondendo: "Eis-me aqui, envia-me a mim". Teve esposa profetisa e dois filhos com nomes proféticos: Sear-Jasube ("Um remanescente voltará") e Maer-Salal-Has-Baz ("Apressa-se ao despojo").',
    whatHappenedToHim: 'Ministrou por cerca de 60 anos com extrema coragem diante de reis ímpios e do cerco assírio de Senaqueribe. De acordo com a tradição histórica judaica (registrada no Talmud, no apócrifo Ascensão de Isaías e aludida em Hebreus 11:37), sob o reinado do perverso rei Manassés, Isaías se refugiou dentro do tronco oco de um cedro, mas foi capturado e cruelmente serrado ao meio pelo monarca idólatra.',
    centralMessage: 'A santidade absoluta do "Santo de Israel", a soberania de Deus sobre os impérios da terra, a condenação irrevogável da hipocrisia religiosa sem justiça social, a promessa da salvação pela graça divina e a restauração gloriosa de Sião através do Servo Sofredor.',
    messianicProphecies: [
      'O nascimento virginal de Emanuel: "Eis que a virgem conceberá, e dará à luz um filho, e chamará o seu nome Emanuel" (Is 7:14).',
      'O Menino que é o Deus Forte: "Porque um menino nos nasceu... Maravilhoso Conselheiro, Deus Forte, Pai da Eternidade, Príncipe da Paz" (Is 9:6).',
      'O Renovo de Jessé cheio do Espírito (Is 11:1-2).',
      'O Servo Sofredor que levou sobre Si as nossas enfermidades e foi traspassado pelas nossas iniquidades (Is 53).',
      'A unção do Messias para pregar boas-novas aos mansos (Is 61:1-2, lido por Jesus na sinagoga de Nazaré em Lucas 4).'
    ],
    keyThemes: ['Santidade de Deus', 'Graça Redentora', 'O Messias Sofredor e Glorioso', 'Novo Céu e Nova Terra'],
    goldenVerse: {
      reference: 'Isaías 53:5',
      text: 'Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.'
    }
  },
  {
    id: 'jeremias',
    name: 'Jeremias',
    nameMeaning: 'Yahweh Exalta ou Yahweh Estabelece',
    classification: 'maior',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio e Queda de Jerusalém',
    approximateDates: '~627 – 580 a.C.',
    audience: 'Reino de Judá, Jerusalém e exilados',
    contemporaryKings: 'Josias, Jeoacaz, Joaquim, Joaquim (Jeconias) e Zedequias',
    biographyAndCalling: 'Nascido em família sacerdotal na aldeia de Anatote. Chamado por Deus ainda no ventre materno ("Antes que te formasse no ventre te conheci, e antes que saísses da madre te santifiquei; às nações te dei por profeta"). Conhecido carinhosamente na teologia como "O Profeta Chorão" pela dor profunda de ver seu povo rumar à destruição sem dar ouvidos à Palavra do Senhor.',
    whatHappenedToHim: 'Viveu uma vida de intensa solidão e martírio emocional (Deus o proibiu de casar como sinal da calamidade iminente). Foi traído pelos sacerdotes de sua cidade natal, espancado, colocado em troncos públicos, acusado falsamente de traição e deserção para a Babilônia, e jogado no fundo de um calabouço enlameado sem água (a cisterna de Malquias), onde atolou na lama até ser resgatado pelo eunuco Ebede-Meleque. Após a destruição de Jerusalém em 586 a.C., foi forçado pelos rebeldes judaicos a fugir para o Egito, onde a tradição antiga afirma que foi apedrejado até a morte pelo próprio povo em Tafnes.',
    centralMessage: 'O chamado ao arrependimento radical, a metáfora do oleiro e do barro (a soberania divina de moldar e refazer), a certeza do juízo babilônico de 70 anos e a promessa inabalável de restauração através da Nova Aliança.',
    messianicProphecies: [
      'A Nova Aliança gravada no coração humano: "Porei a minha lei no seu interior, e a escreverei no seu coração; e eu serei o seu Deus e eles serão o meu povo" (Jr 31:31-34, cumprida na Santa Ceia e na cruz por Jesus).',
      'O Renovo Justo de Davi que reinará com sabedoria e cujo nome será "O Senhor, Justiça Nossa" (Jr 23:5-6).'
    ],
    keyThemes: ['Arrependimento Interior', 'O Vaso de Barro', 'A Nova Aliança', 'Soberania de Deus nos Sofrimentos'],
    goldenVerse: {
      reference: 'Jeremias 29:11',
      text: 'Porque eu bem sei os pensamentos que tenho a respeito de vós, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.'
    }
  },
  {
    id: 'lamentacoes',
    name: 'Lamentações de Jeremias',
    nameMeaning: 'Elegias & Clamor de Dor ("Como jaz solitária a cidade!")',
    classification: 'maior',
    period: 'exilio',
    periodDisplay: 'O Clamor do Exílio (586 a.C.)',
    approximateDates: '~586 a.C.',
    audience: 'Os sobreviventes e dispersos da queda de Jerusalém',
    contemporaryKings: 'Zedequias (último rei) e Nabucodonosor da Babilônia',
    biographyAndCalling: 'Embora escrito em formato de elegias fúnebres acrósticas (cada verso segue uma letra do alfabeto hebraico), o livro é o testemunho ocular e o grito de dor de Jeremias sentado sobre as cinzas de Jerusalém e do Templo incendiado por Nabucodonosor. Revela o ápice da fidelidade profética: chorar com os que choram.',
    whatHappenedToHim: 'Jeremias sentou-se nos montes ao redor de Jerusalém contemplando as muralhas derribadas, a fome desumana que assolou a cidade sitiada e o santuário destruído. Em meio à maior escuridão da história de Israel, ele ergueu a mais radiante declaração de esperança já escrita sobre a fidelidade de Deus.',
    centralMessage: 'O reconhecimento sincero da gravidade do pecado da nação, a aceitação humilde da disciplina divina e a certeza inabalável de que a misericórdia de Deus jamais se esgota.',
    messianicProphecies: [
      'Aponta para Cristo como o Homem de Dores que chorou sobre Jerusalém (Lc 19:41) e que assumiu o cálice da ira divina em favor do Seu povo.',
      'A renovação diária da graça que culmina na salvação eterna proporcionada pela cruz.'
    ],
    keyThemes: ['Lamento Santo', 'Fidelidade de Deus', 'Misericórdias Inesgotáveis', 'Esperança nas Ruínas'],
    goldenVerse: {
      reference: 'Lamentações 3:22-23',
      text: 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã; grande é a tua fidelidade.'
    }
  },
  {
    id: 'ezequiel',
    name: 'Ezequiel',
    nameMeaning: 'Deus Fortalece ou Que Deus Fortaleça',
    classification: 'maior',
    period: 'exilio',
    periodDisplay: 'Exílio na Babilônia (Cativeiro)',
    approximateDates: '~593 – 571 a.C.',
    audience: 'Os judeus cativos na Babilônia (junto ao rio Quebar)',
    contemporaryKings: 'Rei Joaquim no cativeiro e Nabucodonosor',
    biographyAndCalling: 'Filho do sacerdote Buzi, levado cativo para a Babilônia aos 25 anos em 597 a.C., antes da destruição total do Templo. Aos 30 anos (idade em que entraria para o sacerdócio em Jerusalém), Deus abriu os céus e ele viu visões gloriosas do trono divino sobre rodas de fogo e seres viventes junto ao canal de Quebar. Deus o constituiu como "Atalaia da Casa de Israel".',
    whatHappenedToHim: 'Sua vida foi um sermão vivo doloroso e sacrificial. Deus pediu que realizasse atos proféticos extremos: deitou-se de lado por mais de um ano para retratar o cerco; comeu pão cozido sobre cinzas; ficou mudo por anos, falando apenas quando recebia mensagens divinas. Sua amada esposa, a quem Deus chamou de "o deleite dos teus olhos", faleceu repentinamente, e Ezequiel foi ordenado a não chorar publicamente como sinal do choque inevitável que seria a destruição de Jerusalém. A tradição afirma que foi martirizado na Babilônia por reprovar os líderes judeus idólatras no cativeiro.',
    centralMessage: 'A glória de Deus que não se limita a fronteiras geográficas ou templos materiais; a responsabilidade individual diante de Deus (o filho não pagará pelo pecado do pai); o vale da morte que se torna vida; a concessão de um novo coração de carne e o novo Templo donde fluem águas curadoras.',
    messianicProphecies: [
      'O Bom Pastor Supremo: "Eu mesmo apascentarei as minhas ovelhas e as farei repousar... e levantarei sobre elas um só pastor que as apascentará, o meu servo Davi" (Ez 34:15,23, cumprido em Jesus em João 10).',
      'A promessa do Novo Espírito e Novo Coração: "Dar-vos-ei coração novo e porei dentro de vós espírito novo; tirarei de vós o coração de pedra e vos darei coração de carne" (Ez 36:26).',
      'O Rio de Águas Vivas que sara tudo por onde passa (Ez 47, João 7:38 e Apocalipse 22).'
    ],
    keyThemes: ['Visão da Glória', 'O Atalaia Espiritual', 'Ressurreição Nacional (Ossos Secos)', 'Coração Novo', 'Restauração'],
    goldenVerse: {
      reference: 'Ezequiel 36:26',
      text: 'Dar-vos-ei coração novo e porei dentro de vós espírito novo; tirarei de vós o coração de pedra e vos darei coração de carne.'
    }
  },
  {
    id: 'daniel',
    name: 'Daniel',
    nameMeaning: 'Deus é meu Juiz',
    classification: 'maior',
    period: 'exilio',
    periodDisplay: 'Exílio na Babilônia e Império Medo-Persa',
    approximateDates: '~605 – 530 a.C.',
    audience: 'A corte imperial babilônica e persa, e o povo da aliança',
    contemporaryKings: 'Nabucodonosor, Belsazar, Dario o Medo e Ciro o Grande',
    biographyAndCalling: 'Jovem da nobreza real de Judá, levado na primeira leva de cativos para a Babilônia em 605 a.C. Dotado de sabedoria extraordinária, integridade espiritual e dom divino de interpretar sonhos e mistérios. Serviu como primeiro-ministro e conselheiro supremo de vários imperadores mundiais durante mais de 70 anos sem jamais negociar seus princípios éticos e de adoração.',
    whatHappenedToHim: 'Propôs firmemente no coração não se contaminar com os manjares do rei. Enfrentou conspirações invejosas de nobres do império e, aos cerca de 80 anos de idade, por orar fielmente com as janelas abertas voltadas para Jerusalém três vezes ao dia, foi atirado na cova dos leões famintos. Deus enviou o Seu anjo que fechou a boca dos animais ferozes. Viveu até a velhice avançada honrado por Deus e pelo rei Ciro da Pérsia.',
    centralMessage: 'A soberania absoluta do Deus de Israel sobre a ascensão e queda de todos os impérios da história humana. Deus governa nos reinos dos homens e o Seu Reino celestial jamais terá fim.',
    messianicProphecies: [
      'A Visão do Filho do Homem vindo nas nuvens: "Eis que vinha com as nuvens do céu um como o Filho do Homem... e foi-lhe dado o domínio, a honra e o reino, para que todos os povos, nações e línguas o servissem" (Dn 7:13-14, o título que Jesus mais usou para Si mesmo nos Evangelhos).',
      'A Pedra cortada sem auxílio de mãos que esmiúça as estátuas dos impérios humanos e se torna uma grande montanha que enche toda a terra (Dn 2:34-45).',
      'A profecia cronológica exata das 70 Semanas e a morte expiatória do Ungido (Messias) para dar fim ao pecado (Dn 9:24-26).'
    ],
    keyThemes: ['Fidelidade Inabalável', 'Soberania nos Impérios', 'O Filho do Homem', 'A Cova dos Leões', 'Apocalipse Bíblico'],
    goldenVerse: {
      reference: 'Daniel 7:14',
      text: 'E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará, e o seu reino o único que não será destruído.'
    }
  },

  // ==========================================
  // PROFETA MENORES (Os 12 Livros)
  // ==========================================
  {
    id: 'oseias',
    name: 'Oseias',
    nameMeaning: 'Salvação ou Yahweh Salva',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Reino do Norte - Israel)',
    approximateDates: '~755 – 715 a.C.',
    audience: 'Reino do Norte (Efraim/Samaria)',
    contemporaryKings: 'Jeroboão II de Israel; Uzias, Jotão, Acaz e Ezequias de Judá',
    biographyAndCalling: 'Filho de Beeri, profeta no florescente mas corrupto reino do Norte antes de sua queda perante a Assíria em 722 a.C. Deus ordenou a Oseias uma missão profundamente dolorosa e emblemática: desposar Gômer, uma mulher propensa à prostituição e infidelidade, para que o próprio sofrimento matrimonial do profeta espelhasse o amor ferido e apaixonado de Deus por Seu povo idólatra.',
    whatHappenedToHim: 'Amou sua esposa mesmo quando ela o abandonou para seguir outros amantes e caiu na escravidão degradante. Por ordem divina, Oseias foi até a praça de escravos, comprou Gômer de volta com moedas de prata e cevada, restaurou-a como sua esposa em aliança perdoadora. Viveu a dor do amor incondicional que nunca desiste.',
    centralMessage: 'O amor fiel e redentor de Deus (hesed). Israel se prostituiu espiritualmente adorando ídolos, mas Deus declara com ternura insondável: "Como te deixaria, ó Efraim? O meu coração está comovido dentro de mim!". Clama para que o povo volte ao Senhor de todo o coração.',
    messianicProphecies: [
      '"Do Egito chamei o meu filho" (Os 11:1, cumprido na infância de Jesus e retorno da fuga no Egito em Mt 2:15).',
      'A redenção na ressurreição ao terceiro dia: "Depois de dois dias nos ressuscitará; ao terceiro dia nos levantará, e viveremos diante dele" (Os 6:2).',
      'A vitória sobre o poder da morte e da sepultura: "Onde estão, ó morte, as tuas pragas? Onde está, ó sepultura, a tua perdição?" (Os 13:14 e 1 Co 15:55).'
    ],
    keyThemes: ['Amor Leal de Deus', 'Perdão e Restauração', 'Conhecer a Deus', 'O Resgate da Noiva Infiel'],
    goldenVerse: {
      reference: 'Oseias 6:3',
      text: 'Conheçamos e prossigamos em conhecer ao Senhor: como a alva, a sua vinda é certa; e ele descerá sobre nós como a chuva, como chuva serôdia que rega a terra.'
    }
  },
  {
    id: 'joel',
    name: 'Joel',
    nameMeaning: 'Yahweh é Deus',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Reino de Judá)',
    approximateDates: '~835 – 796 a.C. (ou ~587 a.C.)',
    audience: 'Povo de Judá, anciãos e sacerdotes de Jerusalém',
    contemporaryKings: 'Provavelmente no início do reinado do jovem rei Joás',
    biographyAndCalling: 'Filho de Petuel. Profeta de grande zelo litúrgico e sensibilidade espiritual em Judá. A partir de uma devastadora praga de quatro tipos de gafanhotos que devorou plantações, vinhedos e trigais da nação, Joel discerniu o alarme celestial e convocou uma assembléia solene de jejum e choro no Templo.',
    whatHappenedToHim: 'Convocou líderes e povo para clamor genuíno: "Rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus". Foi o mensageiro que abriu as portas da história para a era do Espírito Santo.',
    centralMessage: 'A urgência do arrependimento diante do iminente e temível "Dia do Senhor", a promessa da restituição dos anos consumidos pelos gafanhotos e o derramamento universal do Espírito de Deus sobre todas as pessoas.',
    messianicProphecies: [
      'O derramamento do Espírito Santo no Pentecostes: "E há de ser que, depois, derramarei o meu Espírito sobre toda a carne; vossos filhos e vossas filhas profetizarão..." (Jl 2:28-32, citado por Pedro na inauguração da Igreja em Atos 2:16-21).',
      'A salvação universal invocando o Nome Santo: "Todo aquele que invocar o nome do Senhor será salvo" (Jl 2:32 e Rm 10:13).'
    ],
    keyThemes: ['O Dia do Senhor', 'Arrependimento de Coração', 'Restituição Divina', 'O Avivamento do Espírito'],
    goldenVerse: {
      reference: 'Joel 2:28',
      text: 'E há de ser que, depois derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões.'
    }
  },
  {
    id: 'amos',
    name: 'Amós',
    nameMeaning: 'Carregador de Fardos ou Suportador',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Do Sul para o Norte)',
    approximateDates: '~760 – 750 a.C.',
    audience: 'Reino do Norte (Israel - Samaria e Betel)',
    contemporaryKings: 'Jeroboão II de Israel e Uzias de Judá',
    biographyAndCalling: 'Homem simples do campo, nascido em Tecoa (Judá), que cuidava de rebanhos de ovelhas e colhia sicômoros (figos silvestres). Não vinha de escola de profetas nem de linhagem sacerdotal, mas foi tomado por Deus e enviado com ousadia leonina para denunciar o luxo desenfreado, a opressão dos pobres e a corrupção religiosa no santuário real de Betel.',
    whatHappenedToHim: 'Enfrentou o falso sumo sacerdote Amazias de Betel, que o acusou perante o rei Jeroboão de conspiração política e tentou expulsá-lo de volta para a terra de Judá. Amós respondeu destemidamente reafirmando que o rugido de Deus não podia ser silenciado e profetizou o exílio e ruína da casa sacerdotal apóstata. Segundo tradições antigas, foi ferido na testa pelo filho de Amazias antes de retornar a Tecoa.',
    centralMessage: 'Deus odeia cultos pomposos desprovidos de justiça e misericórdia prática. A prosperidade econômica sem retidão é abominação ao Senhor. Deus ruge de Sião exigindo que a justiça brote como rio caudaloso.',
    messianicProphecies: [
      'A restauração da Tenda Caída de Davi: "Naquele dia tornarei a levantar o tabernáculo caído de Davi... e o reedificarei como nos dias antigos" (Am 9:11, aplicado em Tiago e nos Apóstolos em Atos 15:16-17 para a inclusão de gentios e de toda a humanidade em Cristo).',
      'O Senhor como leão que ruge trazendo restauração messiânica final.'
    ],
    keyThemes: ['Justiça Social', 'Fidelidade Ética', 'A Tenda de Davi Restaurada', 'Rugido do Leão'],
    goldenVerse: {
      reference: 'Amós 5:24',
      text: 'Corra, porém, a justiça como as águas, e a retidão como ribeiro perene.'
    }
  },
  {
    id: 'obadias',
    name: 'Obadias',
    nameMeaning: 'Servo de Yahweh ou Adorador do Senhor',
    classification: 'menor',
    period: 'exilio',
    periodDisplay: 'Período do Exílio / Conflito Fraternal',
    approximateDates: '~586 a.C.',
    audience: 'Edom (descendentes de Esaú) e o povo de Judá',
    contemporaryKings: 'Época da tomada de Jerusalém pela Babilônia',
    biographyAndCalling: 'O autor do menor livro do Antigo Testamento (apenas 21 versículos de fogo profético). Homem consagrado que recebeu a visão celestial contra o orgulho impiedoso de Edom, nação irmã descendente de Esaú que habitava nas fendas inacessíveis das rochas em Petra/Seir.',
    whatHappenedToHim: 'Testemunhou com angústia os edomitas rindo e pilhando Jerusalém durante a invasão babilônica, entregando os fugitivos judeus nas mãos dos conquistadores. Com firmeza inegociável, profetizou que quem semeia traição contra seu irmão colherá ruína e humilhação.',
    centralMessage: 'A condenação severa da soberba e da cumplicidade com a maldade alheia. "Como tu fizeste, assim se fará contigo; o teu feito tornará sobre a tua cabeça". No fim, os salvadores subirão ao monte Sião e o Reino será exclusivamente do Senhor.',
    messianicProphecies: [
      'A soberania absoluta do Reino de Deus: "E o reino será do Senhor" (Ob 1:21), antevendo a vitória definitiva do Messias sobre todos os inimigos espirituais e materiais de Seu povo.'
    ],
    keyThemes: ['Queda da Soberba', 'Juízo da Traição', 'Solidariedade com o Aflito', 'O Triunfo do Reino do Senhor'],
    goldenVerse: {
      reference: 'Obadias 1:21',
      text: 'E subirão salvadores ao monte de Sião, para julgarem o monte de Esaú; e o reino será do Senhor.'
    }
  },
  {
    id: 'jonas',
    name: 'Jonas',
    nameMeaning: 'Pomba',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Missão Internacional)',
    approximateDates: '~785 – 760 a.C.',
    audience: 'Nínive (Capital do Império Assírio)',
    contemporaryKings: 'Jeroboão II de Israel (2 Reis 14:25)',
    biographyAndCalling: 'Filho de Amitai, da cidade de Gate-Hefer na Galileia. Recebeu ordem de Deus para ir pregar o arrependimento na temida e violenta capital assíria, Nínive. Temendo que Deus demonstrasse compaixão e perdoasse os cruéis inimigos de Israel, Jonas tentou fugir da presença do Senhor em um navio com destino a Társis (Espanha).',
    whatHappenedToHim: 'Enfrentou tempestade no mar, confessou sua fuga aos marinheiros gentios e foi lançado ao oceano para aplacar a fúria das águas. Foi engolido por um grande peixe providenciado por Deus, onde permaneceu em oração por três dias e três noites antes de ser expelido na terra seca. Foi a Nínive, pregou mensagem de juízo e viu toda a cidade (do rei aos animais) jejuar em pano de saco. Frustrado pela graça de Deus concedida aos ninivitas, recebeu a lição divina da planta que nasceu e secou, aprendendo que o Criador Se compadece de todas as Suas criaturas.',
    centralMessage: 'A universalidade da misericórdia de Deus. Deus não é propriedade exclusiva de uma nação, mas anseia que todos os povos e pecadores cheguem ao arrependimento.',
    messianicProphecies: [
      'O Sinal de Jonas: Os três dias e três noites no ventre do peixe foram explicitamente destacados por Jesus como o grande sinal profético de Sua própria morte, sepultamento e gloriosa ressurreição ao terceiro dia (Mateus 12:39-40).',
      'Jesus como Alguém maior do que Jonas que prega o amor salvador às nações.'
    ],
    keyThemes: ['Soberania Divina', 'Fuga da Vocação', 'O Arrependimento de Nínive', 'A Compaixão que Abraça o Mundo'],
    goldenVerse: {
      reference: 'Jonas 2:9',
      text: 'Mas eu te oferecerei sacrifício com a voz do agradecimento; o que votei pagarei; do Senhor vem a salvação.'
    }
  },
  {
    id: 'miqueias',
    name: 'Miqueias',
    nameMeaning: 'Quem é semelhante a Yahweh?',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Contemporâneo de Isaías)',
    approximateDates: '~735 – 700 a.C.',
    audience: 'Judá e Israel (Reis, príncipes, juízes e sacerdotes)',
    contemporaryKings: 'Jotão, Acaz e Ezequias',
    biographyAndCalling: 'Nascido na pacata vila rural de Moresete-Gate, no sudoeste de Judá. Profeta do campo com profunda compaixão pelas famílias agrícolas despojadas de suas terras por latifundiários gananciosos e governantes iníquos.',
    whatHappenedToHim: 'Pregou com santa paixão contra os falsos profetas que profetizavam paz mediante suborno de dinheiro e comida. Sua pregação corajosa contra a corrupção de Jerusalém foi tão impactante que, mais de um século depois, os anciãos de Judá citaram Miqueias para salvar a vida de Jeremias da pena de morte (Jeremias 26:17-19).',
    centralMessage: 'O combate frontal à injustiça social e à corrupção judiciária. A verdadeira religião não consiste em rios de azeite ou milhares de carneiros sacrificados, mas em praticar a justiça, amar a fidelidade/misericórdia e andar humildemente com o Senhor.',
    messianicProphecies: [
      'A profecia exata da cidade natal do Messias: "E tu, Belém Efrata, posto que pequena entre os milhares de Judá, de ti me sairá o que há de reinar em Israel, e cujas saídas são desde os tempos antigos, desde os dias da eternidade" (Mq 5:2, citado pelos magos e sacerdotes em Mateus 2:6).',
      'O perdão gracioso que lança todos os pecados nas profundezas dos mares (Mq 7:19).'
    ],
    keyThemes: ['Prática da Justiça', 'Humildade Diante de Deus', 'O Nascimento em Belém', 'Pecados no Fundo do Mar'],
    goldenVerse: {
      reference: 'Miqueias 6:8',
      text: 'Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a benevolência, e andes humildemente com o teu Deus?'
    }
  },
  {
    id: 'naum',
    name: 'Naum',
    nameMeaning: 'Consolador ou Cheio de Conforto',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Juízo sobre a Tirania Assíria)',
    approximateDates: '~663 – 612 a.C.',
    audience: 'Nínive (Assíria) e consolo para o povo de Judá',
    contemporaryKings: 'Manassés, Amom ou início do rei Josias de Judá',
    biographyAndCalling: 'Natural de Elcos (provavelmente na Galileia ou em Judá). Escreveu com lírica poética brilhante e vigorosa cerca de um século após Jonas, quando Nínive havia retornado com crueldade desmedida à opressão sanguinária e terror sobre as nações do Oriente Médio.',
    whatHappenedToHim: 'Assumiu a missão de proclamar que o império mais aterrorizante da época, que empalava prisioneiros e destruía cidades, não estava acima do julgamento moral de Deus. A profecia cumpriu-se com rigor em 612 a.C., quando Nínive foi inundada e destruída pelos medos e babilônios.',
    centralMessage: 'Deus é tardio em irar-se, mas não inocenta o culpado. Para os soberbos e sanguinários, Deus é fogo consumidor; mas para aqueles que nele confiam, Ele é refúgio inabalável e fortaleza protetora no dia da angústia.',
    messianicProphecies: [
      'A proclamação das boas-novas de paz: "Eis sobre os montes os pés do que traz boas-novas, do que anuncia a paz!" (Na 1:15, ecoado em Romanos 10:15 e aplicado aos mensageiros do Evangelho de Cristo).'
    ],
    keyThemes: ['Soberania Divina', 'Fim da Tirania', 'Refúgio no Dia da Angústia', 'As Boas-Novas de Paz'],
    goldenVerse: {
      reference: 'Naum 1:7',
      text: 'O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.'
    }
  },
  {
    id: 'habacuque',
    name: 'Habacuque',
    nameMeaning: 'Aquele que Abraça ou Luta Lutando com Amor',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Às vésperas da invasão babilônica)',
    approximateDates: '~608 – 598 a.C.',
    audience: 'Diálogo pessoal do profeta com Deus em favor do povo de Judá',
    contemporaryKings: 'Rei Jeoiaquim de Judá',
    biographyAndCalling: 'Provavelmente levita e músico no Templo de Jerusalém (o livro termina com uma oração em forma de salmo para ser tocada com instrumentos de cordas). Habacuque não começou pregando ao povo, mas abrindo seu coração em perguntas sinceras e ousadas a Deus sobre o silêncio divino diante da violência interna de Judá e da iminente invasão dos babilônios cruéis.',
    whatHappenedToHim: 'Subiu à sua torre de vigia para esperar a resposta de Deus. Lá, aprendeu que quando não compreendemos os métodos de Deus, podemos descansar confiantemente no Seu caráter. Passou da dúvida agonizante no capítulo 1 ("Até quando, Senhor?") para o ápice sublime do louvor da fé inabalável no capítulo 3.',
    centralMessage: 'A justiça final de Deus sobre a arrogância e o mal. A revelação magna de que o ímpio se incha em orgulho, mas "o justo viverá pela sua fé" — pilar basilar que séculos depois incendiou as cartas de Paulo aos Romanos e Gálatas e deflagrou a Reforma Protestante com Martinho Lutero.',
    messianicProphecies: [
      'A doutrina da justificação pela fé em Cristo Jesus: "O justo viverá pela sua fé" (Hc 2:4; Rm 1:17; Gl 3:11; Hb 10:38).',
      'A terra cheia do conhecimento da glória do Senhor como as águas cobrem o mar (Hc 2:14).'
    ],
    keyThemes: ['A Torre de Vigia', 'O Justo Vive pela Fé', 'A Soberania nos Mistérios', 'Alegria Incondicional em Deus'],
    goldenVerse: {
      reference: 'Habacuque 3:17-18',
      text: 'Porquanto, ainda que a figueira não floresça, nem haja fruto na vide; o produto da oliveira minta, e os campos não produzam mantimento; as ovelhas da malhada sejam arrebatadas, e nos currais não haja vacas, todavia, eu me alegrarei no Senhor, exultarei no Deus da minha salvação.'
    }
  },
  {
    id: 'sofonias',
    name: 'Sofonias',
    nameMeaning: 'Yahweh Escondeu ou Yahweh Protegeu',
    classification: 'menor',
    period: 'pre-exilio',
    periodDisplay: 'Pré-Exílio (Reinado do Rei Josias)',
    approximateDates: '~635 – 625 a.C.',
    audience: 'Judá, Jerusalém e as nações ao redor',
    contemporaryKings: 'Rei Josias de Judá',
    biographyAndCalling: 'Bisneto do piedoso rei Ezequias (Sofonias 1:1), possuindo sangue nobre e real. Seu ministério preparou espiritualmente o terreno para o grande avivamento e reforma religiosa promovidos pelo rei Josias após o longo e tenebroso período de idolatria dos reis Manassés e Amom.',
    whatHappenedToHim: 'Percorreu Jerusalém denunciando o sincretismo dos que juravam pelo Senhor mas também adoravam os astros do céu e Moloque, e alertando os que viviam na indolência moral dizendo: "O Senhor não faz bem nem mal". Concluiu seu livro com uma das canções de amor mais ternas de toda a Escritura, na qual Deus Se cala de amor e Se alegra sobre o Seu povo com cânticos.',
    centralMessage: 'O terrível e iminente "Dia do Senhor" sobre o pecado e a complacência; a salvação de um remanescente humilde e pobre que confia no Nome do Senhor; a restauração final onde Deus mesmo habita no meio do Seu povo.',
    messianicProphecies: [
      'Deus no meio do Seu povo como Salvador Poderoso que Se alegra com júbilo (Sf 3:17), imagem viva da encarnação de Jesus e do amor esponsal de Cristo por Sua Igreja.',
      'A reunião dos dispersos e coxos sarados pelo Messias (Sf 3:19).'
    ],
    keyThemes: ['O Dia do Senhor', 'Purificação do Remanescente', 'O Cântico de Amor de Deus', 'Paz em Sião'],
    goldenVerse: {
      reference: 'Sofonias 3:17',
      text: 'O Senhor teu Deus, o poderoso, está no meio de ti, ele salvará; ele se deleitará em ti com alegria; renovar-te-á no seu amor, regozijar-se-á em ti com júbilo.'
    }
  },
  {
    id: 'ageu',
    name: 'Ageu',
    nameMeaning: 'Festivo ou Nascido em Dia de Festa',
    classification: 'menor',
    period: 'pos-exilio',
    periodDisplay: 'Pós-Exílio (Reconstrução de Jerusalém)',
    approximateDates: '~520 a.C.',
    audience: 'Zorobabel (governador), Josué (sumo sacerdote) e os repatriados judeus',
    contemporaryKings: 'Dario I (Rei da Pérsia)',
    biographyAndCalling: 'Provavelmente um ancião venerável que talvez tenha visto em sua juventude a glória do primeiro Templo de Salomão antes de 586 a.C. Retornou com a primeira caravana de exilados sob o decreto de Ciro e, em 520 a.C., profetizou durante um breve período de 4 meses com impacto transformador.',
    whatHappenedToHim: 'Os exilados haviam parado as obras da Casa de Deus por 16 anos, priorizando decorar suas próprias casas confortáveis de tetos apainelados enquanto o Templo jazia em ruínas. Ageu os confrontou: "Considerai os vossos caminhos!". Sua pregação teve sucesso imediato e emocionante: em apenas 23 dias os líderes e o povo reiniciaram a reconstrução da Casa de Deus.',
    centralMessage: 'Primeiro o Reino de Deus. A esterilidade financeira e a seca na colheita eram frutos de inverter prioridades espirituais. Deus promete Sua presença: "Eu sou convosco, diz o Senhor dos Exércitos".',
    messianicProphecies: [
      'O Desejado de Todas as Nações e a Glória do Segundo Templo: "E farei tremer todas as nações, e virá o Desejado de todas as nações, e encherei esta casa de glória... A glória desta última casa será maior do que a da primeira" (Ag 2:7,9, cumprido quando o próprio Senhor Jesus Cristo entrou fisicamente naquele Segundo Templo trazendo a paz eterna).',
      'Zorobabel estabelecido como anel de selar messiânico (Ag 2:23).'
    ],
    keyThemes: ['Prioridade do Reino', 'Reconstrução Espiritual', 'A Glória da Segunda Casa', 'O Desejado das Nações'],
    goldenVerse: {
      reference: 'Ageu 2:9',
      text: 'A glória desta última casa será maior do que a da primeira, diz o Senhor dos Exércitos, e neste lugar darei a paz, diz o Senhor dos Exércitos.'
    }
  },
  {
    id: 'zacarias',
    name: 'Zacarias',
    nameMeaning: 'Yahweh Se Lembra',
    classification: 'menor',
    period: 'pos-exilio',
    periodDisplay: 'Pós-Exílio (Contemporâneo de Ageu)',
    approximateDates: '~520 – 480 a.C.',
    audience: 'Os repatriados em Jerusalém e a Igreja vindoura',
    contemporaryKings: 'Dario I da Pérsia',
    biographyAndCalling: 'Filho de Berequias e neto de Ido. Membro de nobre família sacerdotal que retornou da Babilônia, exercendo ministério profético e sacerdotal em Jerusalém. Jovem contemporâneo do idoso Ageu, recebeu 8 visões noturnas extraordinárias sobre anjos, cavalos, castiçais e coroação simbólica do sumo sacerdote Josué.',
    whatHappenedToHim: 'Encorajou Zorobabel diante das montanhas de escombros e oposição dos inimigos samaritanos, proclamando a máxima eterna: "Não por força nem por violência, mas pelo meu Espírito". Sofreu perseguição por apontar a justiça messiânica. Há tradições cristãs e referências que o associam aos mártires assassinados entre o santuário e o altar (Mateus 23:35).',
    centralMessage: 'A reconstrução do templo material é precursora do Templo Espiritual e do Reino Messiânico. Deus não Se esqueceu de Suas promessas de aliança. A santidade deve cobrir desde as panelas de Jerusalém até as campainhas dos cavalos.',
    messianicProphecies: [
      'A entrada humilde do Rei sobre um jumentinho: "Alegra-te muito, ó filha de Sião... eis que o teu Rei virá a ti, justo e Salvador, pobre, e montado sobre um jumento" (Zc 9:9, cumprido no Domingo de Ramos em Mt 21:5).',
      'O preço da traição por 30 moedas de prata atiradas ao oleiro (Zc 11:12-13, cumprido com Judas Iscariotes em Mt 27:3-10).',
      'A profecia de Cristo traspassado na cruz: "E olharão para mim, a quem traspassaram; e prantearão sobre ele, como quem pranteia pelo filho unigênito" (Zc 12:10; Jo 19:37).',
      'O Pastor ferido e a dispersão das ovelhas (Zc 13:7; Mt 26:31).',
      'A Fonte aberta para purificação do pecado e da imundícia (Zc 13:1).'
    ],
    keyThemes: ['Pelo Meu Espírito', 'O Renovo Real e Sacerdotal', 'O Rei no Jumentinho', 'As 30 Moedas', 'O Traspassado'],
    goldenVerse: {
      reference: 'Zacarias 4:6',
      text: 'Não por força nem por violência, mas pelo meu Espírito, diz o Senhor dos Exércitos.'
    }
  },
  {
    id: 'malaquias',
    name: 'Malaquias',
    nameMeaning: 'Meu Mensageiro ou Embaixador de Deus',
    classification: 'menor',
    period: 'pos-exilio',
    periodDisplay: 'Pós-Exílio (O Último Profeta do Antigo Testamento)',
    approximateDates: '~430 a.C.',
    audience: 'Povo de Judá, sacerdotes descuidos e repatriados em Jerusalém',
    contemporaryKings: 'Período dos governadores persas contemporâneo a Neemias',
    biographyAndCalling: 'O último profeta do cânon veterotestamentário. Ministrou após a reconstrução dos muros por Neemias e do templo por Zorobabel, quando o povo e os sacerdotes haviam caído em apatia espiritual, indiferença nos dízimos, casamentos com idólatras, divórcios cruéis e ofertas de animais defeituosos, cegos e coxos no altar de Deus.',
    whatHappenedToHim: 'Utilizou um método dialético direto de perguntas e respostas entre Deus e o povo ("Em que nos tens amado? Em que te havemos roubado?"). Fechou a cortina profética do Antigo Testamento apontando para um silêncio profético de 400 anos (o período intertestamentário), até que o Anjo da Aliança e a voz do que clama no deserto (João Batista) rompessem nos céus de Israel.',
    centralMessage: 'A fidelidade incondicional na aliança familiar e no sustento da Casa de Deus ("Trazei todos os dízimos à casa do tesouro..."). O fogo do Ourives que purifica a prata e o ouro, e a certeza de que Deus odeia a hipocrisia e a quebra de alianças.',
    messianicProphecies: [
      'O envio do Mensageiro percursor (João Batista): "Eis que eu envio o meu mensageiro, que preparará o caminho diante de mim" (Ml 3:1 e 4:5; Mt 11:10).',
      'O Anjo da Aliança que virá subitamente ao Seu Templo (Ml 3:1).',
      'O Sol da Justiça que traz salvação e cura em Suas asas: "Mas para vós, os que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas" (Ml 4:2, Jesus Cristo a Luz do Mundo).'
    ],
    keyThemes: ['Aliança de Honra', 'Dízimos e Provisão', 'O Fogo do Ourives', 'O Sol da Justiça', 'Fechamento do AT'],
    goldenVerse: {
      reference: 'Malaquias 4:2',
      text: 'Mas para vós, os que temeis o meu nome, nascerá o sol da justiça, e cura trará nas suas asas; e saireis e saltareis como bezerros da estrebaria.'
    }
  }
];
