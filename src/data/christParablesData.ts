export interface ChristParable {
  id: string;
  name: string;
  biblicalPassage: string;
  contextAndOccasion: string;
  audience: string; // ex: multidão, fariseus, discípulos
  centralTeaching: string;
  kingdomOfGodRelation: string;
  parallelReferences: string[];
  whatJesusSaid: string; // 🗣️ O que Jesus disse (o texto e as palavras de Jesus)
  scholarlyInterpretation: string; // 📖 Como estudiosos interpretam o que Jesus disse
}

export const CHRIST_PARABLES: ChristParable[] = [
  {
    id: 'o-bom-samaritano',
    name: 'O Bom Samaritano',
    biblicalPassage: 'Lucas 10:25-37',
    contextAndOccasion: 'Um doutor da Lei levantou-se para tentar Jesus perguntando: "Mestre, que farei para herdar a vida eterna?" e, querendo justificar-se a si mesmo, perguntou: "E quem é o meu próximo?".',
    audience: 'Um perito na Lei mosaica e os ouvintes presentes.',
    centralTeaching: 'O amor ao próximo não tem limites raciais, sociais ou geográficos; a verdadeira misericórdia se manifesta em ações sacrificiais práticas e não em privilégios cerimoniais.',
    kingdomOfGodRelation: 'No Reino de Deus, o mandamento do amor é superior a todo legalismo: herda a vida eterna quem ama a Deus de todo o coração e ao próximo com misericórdia ativa.',
    parallelReferences: ['Levítico 19:18', 'Miquéias 6:8', 'Mateus 22:37-40'],
    whatJesusSaid: '"Descia um homem de Jerusalém para Jericó, e caiu nas mãos dos salteadores, os quais o despojaram e, espancando-o, se foram, deixando-o meio morto. E, casualmente, descia pelo mesmo caminho certo sacerdote; e, vendo-o, passou de largo. E, de igual modo, também um levita, chegando àquele lugar e vendo-o, passou de largo. Mas um samaritano, que ia de viagem, chegou ao pé dele e, vendo-o, moveu-se de íntima compaixão; e, aproximando-se, atou-lhe as feridas, deitando nelas azeite e vinho; e, pondo-o sobre a sua cavalgadura, levou-o para uma estalagem e cuidou dele... Qual, pois, destes três te parece que foi o próximo daquele que caiu nas mãos dos salteadores? E ele disse: O que usou de misericórdia para com ele. Disse, pois, Jesus: Vai, e faze da mesma maneira."',
    scholarlyInterpretation: 'Estudiosos observam que o caminho montanhoso de Jerusalém a Jericó (chamado "Caminho de Sangue") descia cerca de mil metros em desfiladeiros perigosos infestados de assaltantes. O sacerdote e o levita temiam a contaminação cerimonial caso o homem estivesse morto (conforme Números 19:11), colocando a pureza ritual acima do socorro à vida. O samaritano, membro de um povo desprezado pelos judeus, usou azeite (para suavizar) e vinho (como antisséptico), pagou dois denários (dois dias de diária de hospedagem) e garantiu o custeio total da recuperação. Teologicamente, muitos pais da igreja viram no Bom Samaritano uma alegoria de Cristo descendo para resgatar a humanidade ferida e caída pelo pecado.'
  },
  {
    id: 'o-filho-prodigo',
    name: 'O Pai Misericordioso (O Filho Pródigo)',
    biblicalPassage: 'Lucas 15:11-32',
    contextAndOccasion: 'Os fariseus e escribas murmuravam contra Jesus dizendo: "Este homem recebe pecadores e come com eles". Em resposta, Jesus contou a trilogia das coisas perdidas: a ovelha perdida, a dracma perdida e o filho pródigo.',
    audience: 'Fariseus, escribas, publicanos e pecadores que se achegavam para ouvir Jesus.',
    centralTeaching: 'O amor incondicional, transbordante e perdoador do Pai celestial para com qualquer pecador arrependido, em contraste com a amargura farisaica dos justos aos seus próprios olhos.',
    kingdomOfGodRelation: 'Há júbilo indizível no céu por um pecador que se arrepende; no Reino, o perdão não é conquistado por mérito, mas concedido graciosamente pelo coração do Pai.',
    parallelReferences: ['Salmo 103:8-13', 'Isaías 55:7', 'Romanos 8:15'],
    whatJesusSaid: '"Um certo homem tinha dois filhos; e o mais moço deles disse ao pai: Pai, dá-me a parte dos bens que me pertence. E ele repartiu por eles a fazenda. E, poucos dias depois, ajuntando tudo, partiu para uma terra muito distante, e ali desperdiçou a sua fazenda, vivendo dissolutamente... E caiu em si e disse: Quantos jornaleiros de meu pai têm abundância de pão, e eu aqui pereço de fome! Levantar-me-ei, e irei ter com meu pai... E, levantando-se, foi para seu pai; e, quando ainda estava longe, viu-o seu pai, e se moveu de íntima compaixão e, correndo, lançou-se-lhe ao pescoço e o beijou... Mas o pai disse aos seus servos: Trazei depressa a melhor roupa; e vesti-lho, e ponde-lhe um anel na mão, e alparcas nos pés; e trazei o bezerro cevado, e matai-o; e comamos, e alegremo-nos; porque este meu filho estava morto, e reviveu; tinha-se perdido, e foi achado."',
    scholarlyInterpretation: 'Comentaristas sublinham que pedir a herança com o pai ainda vivo equivalia culturalmente a desejar a sua morte. Cuidar de porcos na terra distante representava a mais abjeta degradação para um judeu. Quando o pai vê o filho ao longe, "corre" — ato considerado indigno para patriarcas idosos no Oriente antigo —, expondo-se à vergonha pública para proteger o filho de ser apedrejado pela aldeia (rito de Kezazah, corte comunal). A melhor túnica devolve a dignidade de filho; o anel restaura a autoridade familiar e as sandálias demonstram que ele não retornava como escravo descalço. O filho mais velho representa a postura dos fariseus: escravo na mentalidade, vivendo em casa sem conhecer o coração generoso do pai.'
  },
  {
    id: 'o-semeador',
    name: 'O Semeador e os Quatro Tipos de Solo',
    biblicalPassage: 'Mateus 13:1-23 / Marcos 4:1-20 / Lucas 8:4-15',
    contextAndOccasion: 'Jesus assentou-se num barco no Mar da Galileia ensinando grandes multidões na praia.',
    audience: 'A grande multidão reunida na margem e os doze apóstolos em particular.',
    centralTeaching: 'A eficácia da Palavra de Deus depende da receptividade e da condição moral do coração humano que a acolhe.',
    kingdomOfGodRelation: 'O Reino de Deus avança mediante a proclamação da Palavra; os frutos santos surgem apenas no coração que ouve, compreende, guarda e persevera contra as distrações mundanas.',
    parallelReferences: ['Isaías 55:10-11', 'Hebreus 6:7-8', 'Tiago 1:21-25'],
    whatJesusSaid: '"Eis que o semeador saiu a semear. E, quando semeava, uma parte da semente caiu ao pé do caminho, e vieram as aves e comeram-na; e outra parte caiu em pedregais, onde não havia terra bastante, e logo nasceu... mas, vindo o sol, queimou-se... e outra caiu entre espinhos, e os espinhos cresceram e sufocaram-na; e outra caiu em boa terra e deu fruto: um a cem, outro a sessenta e outro a trinta. Quem tem ouvidos para ouvir, ouça... Vós, pois, escutai a parábola do semeador: Ouvindo alguém a palavra do reino e não a entendendo, vem o maligno e arrebata o que foi semeado... Mas o que foi semeado em boa terra é o que ouve e compreende a palavra; e dá fruto."',
    scholarlyInterpretation: 'Na agricultura tradicional da Palestina, os caminhos cortavam os campos antes de serem arados; as sementes que caíam à beira do caminho eram pisoteadas e devoradas. As rochas calcárias cobertas por uma fina camada de solo retinham calor gerando crescimento rápido superficial que logo secava sob o sol causticante sem raiz profunda. Os espinhos sugavam a umidade e os nutrientes. Jesus mesmo forneceu a chave hermenêutica: a semente é a Palavra de Deus imutável; a diversidade de resultados decorre exclusivamente da liberdade e da disposição íntima do solo do coração humano.'
  },
  {
    id: 'o-trigo-e-o-joio',
    name: 'O Trigo e o Joio',
    biblicalPassage: 'Mateus 13:24-30, 36-43',
    contextAndOccasion: 'Continuação do discurso em parábolas sobre os mistérios do Reino dos Céus.',
    audience: 'A multidão na praia e os discípulos que pediram a explicação em casa.',
    centralTeaching: 'O bem e o mal coexistem no mundo presente; a separação final e o julgamento perfeito pertencem unicamente a Deus no fim dos tempos.',
    kingdomOfGodRelation: 'O Reino de Deus inaugurado na história convive pacientemente com a oposição ímpia até a consumação dos séculos, quando os justos resplandecerão como o sol.',
    parallelReferences: ['Malaquias 3:18', 'Mateus 25:31-46', 'Apocalipse 14:14-20'],
    whatJesusSaid: '"O Reino dos Céus é semelhante ao homem que semeia boa semente no seu campo; mas, dormindo os homens, veio o seu inimigo, e semeou o joio no meio do trigo, e retirou-se... Disseram-lhe os servos: Queres, pois, que vamos arrancá-lo? Porém ele disse: Não; para que, ao colher o joio, não arranqueis também o trigo com ele. Deixai crescer ambos juntos até à ceifa; e, por ocasião da ceifa, direi aos ceifeiros: Colhei primeiro o joio e atai-o em molhos para o queimar; mas o trigo, ajuntai-o no meu celeiro... O que semeia a boa semente é o Filho do Homem; o campo é o mundo; a boa semente são os filhos do Reino; e o joio são os filhos do maligno... Então, os justos resplandecerão como o sol, no Reino de seu Pai."',
    scholarlyInterpretation: 'O joio botânico (Lolium temulentum / cizânia) é praticamente idêntico ao trigo em suas fases iniciais de crescimento, diferenciando-se apenas na maturidade quando suas espigas pretas e venenosas aparecem. Suas raízes se entrelaçam intimamente com as do trigo no solo, tornando impossível arrancá-lo sem destruir a lavoura. Exegetas alertam contra o fanatismo eclesiástico inquisitorial: a purificação cósmica final dos corações é prerrogativa dos anjos do Senhor na colheita escatológica, cabendo à Igreja proclamar a graça e perseverar em santidade.'
  },
  {
    id: 'a-ovelha-perdida',
    name: 'A Ovelha Perdida',
    biblicalPassage: 'Lucas 15:3-7 / Mateus 18:12-14',
    contextAndOccasion: 'Fariseus censuravam Jesus por acolher e comer com pessoas marginalizadas e publicanos.',
    audience: 'Críticos religiosos e discípulos.',
    centralTeaching: 'O valor infinito de cada indivíduo para Deus; o Bom Pastor busca ativamente o transviado até encontrá-lo e alegra-se com sua restauração.',
    kingdomOfGodRelation: 'A natureza redentora do Reino é pastoral e de resgate: Deus não se acomoda com as noventa e nove no aprisco enquanto houver uma única alma ferida e perdida nos desertos do pecado.',
    parallelReferences: ['Salmo 23', 'Ezequiel 34:11-16', 'João 10:11-16'],
    whatJesusSaid: '"Que homem dentre vós, tendo cem ovelhas e perdendo uma delas, não deixa no deserto as noventa e nove e vai após a perdida até que a venha a achar? E, achando-a, a põe sobre os seus ombros, jubiloso; e, chegando a casa, convoca os amigos e vizinhos, dizendo-lhes: Alegrai-vos comigo, porque já achei a minha ovelha perdida. Digo-vos que assim haverá alegria no céu por um pecador que se arrepende, mais do que por noventa e nove justos que não necessitam de arrependimento."',
    scholarlyInterpretation: 'No pastoreio do Oriente Médio, as ovelhas desorientadas tendem a se deitar paralisadas de pavor quando se separam do rebanho, ficando indefesas diante de lobos e penhascos. O pastor não açoita nem arrasta a ovelha resgatada: carrega-a pessoalmente sobre os ombros, arcando com o peso da caminhada até o aprisco. O texto culmina na alegria compartilhada no céu, revelando a essência do caráter gracioso de Deus.'
  },
  {
    id: 'a-perola-de-grande-valor',
    name: 'O Tesouro Escondido e a Pérola de Grande Valor',
    biblicalPassage: 'Mateus 13:44-46',
    contextAndOccasion: 'Ensino privado aos discípulos sobre o valor inestimável e incomparável do Reino de Deus.',
    audience: 'Os Doze Apóstolos.',
    centralTeaching: 'O Reino de Deus é o bem supremo da existência humana; encontrar a Cristo justifica renunciar alegremente a qualquer tesouro ou ambição terrena.',
    kingdomOfGodRelation: 'A salvação é dádiva da graça soberana, mas exige a entrega integral de tudo o que temos em santa alegria e consagração absoluta.',
    parallelReferences: ['Provérbios 3:13-15', 'Filipenses 3:7-9', 'Apocalipse 3:18'],
    whatJesusSaid: '"O Reino dos Céus é semelhante a um tesouro escondido num campo que um homem achou e escondeu; e, pelo gozo dele, vai, vende tudo quanto tem e compra aquele campo. Outrossim, o Reino dos Céus é semelhante ao homem negociante que busca boas pérolas; e, encontrando uma pérola de grande valor, foi, vendeu tudo quanto tinha e comprou-a."',
    scholarlyInterpretation: 'Em tempos de invasões bélicas na antiguidade sem bancos seguros, muitos cidadãos enterravam seus bens e joias em potes de barro na terra; se morressem na batalha, o tesouro ficava oculto no solo por séculos. A lei rabínica e romana estabelecia que quem comprasse o terreno adquiria legitimamente tudo o que estivesse enterrado nele. As pérolas orientais, retiradas com risco de vida do Mar Vermelho e Golfo Pérsico, eram os itens de maior valor do Império Romano. Teólogos destacam que a venda de todos os bens foi feita com "gozo e júbilo": o crente não abandona o mundo com pesar, mas com a alegria transbordante de quem encontrou a Cristo.'
  },
  {
    id: 'os-trabalhadores-da-vinha',
    name: 'Os Trabalhadores da Vinha',
    biblicalPassage: 'Mateus 20:1-16',
    contextAndOccasion: 'Logo após Pedro perguntar o que eles receberiam por terem deixado tudo para seguir a Jesus (Mt 19:27).',
    audience: 'Os discípulos e ouvintes de Jesus.',
    centralTeaching: 'A salvação e as bênçãos de Deus são frutos da Sua soberana e generosa graça, e não de mérito humano acumulado por tempo de serviço.',
    kingdomOfGodRelation: 'No Reino dos Céus, os últimos serão primeiros e os primeiros últimos: a inveja do irmão agraciado pela misericórdia revela um coração ainda contaminado pelo egoísmo.',
    parallelReferences: ['Deuteronômio 24:14-15', 'Romanos 9:15-16', 'Efésios 2:8-9'],
    whatJesusSaid: '"Porque o Reino dos Céus é semelhante a um homem, pai de família, que saiu de madrugada a assalariar trabalhadores para a sua vinha. E, ajustando com os trabalhadores a um dinheiro por dia, mandou-os para a sua vinha. E, saindo perto da hora terceira... da sexta... da nona... e, saindo quase à hora undécima (17h), achou outros que estavam ociosos e disse-lhes: Ide vós também para a vinha... E, aproximando-se a noite, disse o senhor da vinha ao seu mordomo: Chama os trabalhadores e paga-lhes o jornal, começando pelos derradeiros até aos primeiros... Chegando, pois, também os primeiros, cuidaram que haviam de receber mais; mas do mesmo modo receberam um dinheiro cada um. E, recebendo-o, murmuravam contra o pai de família... Porém ele, respondendo, disse a um deles: Amigo, não te faço agravo; não ajustaste tu comigo um dinheiro? Toma o que é teu e vai-te; eu quero dar a este derradeiro tanto como a ti. Ou não me é lícito fazer o que quiser do que é meu? Ou é mau o teu olho porque eu sou bom? Assim, os derradeiros serão primeiros, e os primeiros, derradeiros."',
    scholarlyInterpretation: 'A jornada de trabalho de 12 horas começava às 6h da manhã; os contratados às 17h trabalharam apenas uma hora antes do pôr do sol. Um denário romano era a diária justa que garantia o sustento diário mínimo de uma família pobre. Pagar primeiro aos que trabalharam menos e dar a eles a diária completa chocou a lógica comercial do mérito acumulado. O senhor da vinha foi perfeitamente justo com os primeiros (pagou exatamente o contratado) e extraordinariamente gracioso com os últimos. Representa Deus acolhendo com plena herança tanto o crente que serviu a vida inteira quanto o pecador arrependido na hora undécima (como o ladrão na cruz).'
  },
  {
    id: 'as-dez-virgens',
    name: 'As Dez Virgens',
    biblicalPassage: 'Mateus 25:1-13',
    contextAndOccasion: 'Parte do Sermão Escatológico no Monte das Oliveiras, instruindo sobre a prontidão para a Segunda Vinda de Cristo.',
    audience: 'Os discípulos íntimos (Pedro, Tiago, João e André).',
    centralTeaching: 'A necessidade inadiável de vigilância constante e de vida espiritual autêntica no Espírito Santo antes do retorno súbito do Noivo.',
    kingdomOfGodRelation: 'A porta da graça permanecerá aberta até o retorno do Senhor; a comunhão íntima e a unção com o Espírito não podem ser transferidas ou emprestadas de uma pessoa para outra na hora final.',
    parallelReferences: ['Lucas 12:35-40', '1 Tessalonicenses 5:1-6', 'Apocalipse 19:7-9'],
    whatJesusSaid: '"Então, o Reino dos Céus será semelhante a dez virgens que, tomando as suas lâmpadas, saíram ao encontro do esposo. E cinco delas eram prudentes, e cinco, loucas. As loucas, tomando as suas lâmpadas, não levaram azeite consigo. Mas as prudentes levaram azeite em suas vasilhas, com as suas lâmpadas. E, tardando o esposo, tosquenejaram todas e adormeceram. Mas, à meia-noite, ouviu-se um clamor: Eis que o esposo vem! Saí-lhe ao encontro!... As loucas disseram às prudentes: Dai-nos do vosso azeite, porque as nossas lâmpadas se apagam. Mas as prudentes responderam: Não seja caso que nos falte a nós e a vós; ide, antes, aos que o vendem e comprai-o para vós. E, tendo elas ido comprá-lo, chegou o esposo, e as que estavam preparadas entraram com ele para as bodas, e fechou-se a porta. E, depois, vieram também as outras virgens, dizendo: Senhor, Senhor, abre-nos! E ele, respondendo, disse: Em verdade vos digo que vos não conheço. Vigiai, pois, porque não sabeis o dia nem a hora em que o Filho do Homem há de vir."',
    scholarlyInterpretation: 'Nos casamentos judaicos bíblicos, o noivo ia à casa da noiva à noite com archotes e amigos para conduzi-la em cortejo festivo à casa nupcial; as donzelas de honra (virgens) aguardavam com pequenas lâmpadas de óleo para iluminar o trajeto. O azeite nas vasilhas extras simboliza a reserva contínua da graça e da vida santa no Espírito Santo. As prudentes não foram egoístas: a fé genuína e a santificação são pessoais e intransferíveis diante de Deus; ninguém pode ser salvo pela fé de seus pais ou amigos no dia do juízo.'
  }
];
