export interface HeroOfFaith {
  id: string;
  name: string;
  originalName: string;
  title: string;
  biblicalReference: string;
  hebrews11Verse: string;
  category: 'patriarcas' | 'lideres-juizes' | 'profetas' | 'reis' | 'apostolos-martires';
  trialOfFaith: string;
  victoryOfFaith: string;
  christConnection: string;
  lifeLesson: string;
  summary: string;
}

export const HEROES_OF_FAITH: HeroOfFaith[] = [
  {
    id: 'abel',
    name: 'Abel',
    originalName: 'הֶבֶל (Hevel - "Sopro/Fragilidade")',
    title: 'O Primeiro Testemunho de Fé e Adoração Aceitável',
    biblicalReference: 'Gênesis 4:1-10',
    hebrews11Verse: 'Pela fé, Abel ofereceu a Deus mais excelente sacrifício do que Caim, pelo qual alcançou testemunho de que era justo, dando Deus testemunho dos seus dons, e, por ela, depois de morto, ainda fala. (Hebreus 11:4)',
    category: 'patriarcas',
    trialOfFaith: 'Apresentar a Deus uma oferta do primogênito do rebanho em obediência interior sincera, enfrentando a hostilidade invejosa e o ódio mortal de seu irmão mais velho Caim.',
    victoryOfFaith: 'Foi reconhecido pelo próprio Deus como justo. Embora tenha sido o primeiro mártir da humanidade, seu sangue derramado não clamou por vingança, mas tornou-se um memorial eterno de que a adoração genuína brota da fé no Redentor.',
    christConnection: 'Jesus declara que Abel foi um mártir justo (Mateus 23:35). A Epístola aos Hebreus (12:24) declara que o sangue aspergido de Jesus fala melhor do que o de Abel: o sangue de Abel clamava por justiça da terra, enquanto o sangue de Jesus clama por perdão e redenção eterna.',
    lifeLesson: 'Deus olha primeiro para a atitude e fé do coração de quem oferece, antes de olhar para a oferta. A fé verdadeira não busca aplausos humanos, mas a aprovação do Todo-Poderoso.',
    summary: 'O segundo filho de Adão e Eva, pastor de ovelhas, que pelo olhar da fé discerniu que Deus merece o melhor de nossa adoração e dependência.'
  },
  {
    id: 'enoque',
    name: 'Enoque',
    originalName: 'חֲנוֹךְ (Chanoch - "Dedicado/Iniciado")',
    title: 'Aquele que Andou com Deus e Venceu a Morte',
    biblicalReference: 'Gênesis 5:21-24',
    hebrews11Verse: 'Pela fé, Enoque foi trasladado para não ver a morte e não foi achado, porque Deus o trasladara; visto como, antes da sua trasladação, alcançou testemunho de que agradara a Deus. (Hebreus 11:5)',
    category: 'patriarcas',
    trialOfFaith: 'Viver em santidade pessoal e comunhão diária ininterrupta em uma geração corrupta, violenta e moralmente degradada que antecedeu o dilúvio.',
    victoryOfFaith: 'Andou com Deus durante 300 anos consecutivos. Seu testemunho foi tão singular que foi arrebatado corporalmente para a glória celestial sem experimentar a corrupção da sepultura.',
    christConnection: 'A trasladação de Enoque prefigura o arrebatamento da Igreja de Jesus Cristo e a ressurreição corpórea dos santos, demonstrando que a comunhão íntima com Deus supera os limites da morte terrena.',
    lifeLesson: 'Andar com Deus não é um evento isolado, mas uma caminhada diária de obediência e fidelidade passo a passo. Sem fé é impossível agradar a Deus.',
    summary: 'Sétimo homem depois de Adão, pai de Metusalém, cuja vida foi marcada por tamanha intimidade com o Senhor que seu fim não foi a sepultura, mas a presença imediata do Criador.'
  },
  {
    id: 'noe',
    name: 'Noé',
    originalName: 'נֹחַ (Noach - "Descanso/Consolo")',
    title: 'O Pregador da Justiça que Construiu a Arca pela Fé',
    biblicalReference: 'Gênesis 6 a 9',
    hebrews11Verse: 'Pela fé, Noé, divinamente avisado das coisas que ainda não se viam, temeu, e, para salvação da sua família, preparou a arca, pela qual condenou o mundo, e foi feito herdeiro da justiça que é segundo a fé. (Hebreus 11:7)',
    category: 'patriarcas',
    trialOfFaith: 'Construir uma embarcação gigantesca em terra firme, ao longo de mais de um século, sob o escárnio e zombaria de toda uma sociedade, sem nunca ter visto um dilúvio ou tempestade global.',
    victoryOfFaith: 'Perseverou pregando a justiça divina enquanto erguia a arca. Pela sua fidelidade, sua família foi preservada da destruição e a linhagem humana e messiânica foi salva.',
    christConnection: 'A Arca de Noé é um dos maiores tipos bíblicos de Jesus Cristo: assim como havia uma única porta na arca e somente aqueles que entraram nela foram salvos do juízo, Jesus é a única Porta da Salvação (João 10:9) que nos livra da ira vindoura.',
    lifeLesson: 'Fé bíblica é crer na Palavra de Deus mesmo quando as circunstâncias visíveis parecem contradizê-la. O temor reverente a Deus é a raiz da verdadeira obediência.',
    summary: 'Homem íntegro e justo em suas gerações que confiou na promessa divina, construiu a arca e herdou a justiça eterna mediante a fé.'
  },
  {
    id: 'abraao',
    name: 'Abraão',
    originalName: 'אַבְרָהָם (Avraham - "Pai de Multidões")',
    title: 'O Pai da Fé e o Amigo de Deus',
    biblicalReference: 'Gênesis 12 a 25',
    hebrews11Verse: 'Pela fé, Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia... Pela fé, ofereceu a Isaque, quando foi provado; sim, aquele que recebera as promessas ofereceu o seu unigênito. (Hebreus 11:8,17)',
    category: 'patriarcas',
    trialOfFaith: 'Deixar sua terra, parentela e idolatria em Ur dos Caldeus sem saber para onde ia; esperar 25 anos pelo filho da promessa na velhice; e o teste supremo no Monte Moriá ao ser ordenado a entregar Isaque.',
    victoryOfFaith: 'Creu que Deus era poderoso até para ressuscitar os mortos. No Moriá, o Senhor proveu o cordeiro substituto (Yahweh Yireh) e jurou abençoar em sua semente todas as famílias da Terra.',
    christConnection: 'A jornada no Moriá é o retrato mais comovente do sacrifício de Deus Pai entregando Seu Filho Unigênito na Cruz: Isaque carregou a lenha do sacrifício assim como Jesus carregou o madeiro, e no mesmo monte o Cordeiro de Deus deu a vida por nós.',
    lifeLesson: 'A fé exige renúncia do conhecido e entrega irrestrita do que nos é mais precioso. Deus nunca nos pede nada sem antes ter nos dado a promessa de Sua fidelidade.',
    summary: 'O patriarca de Israel chamado por Deus aos 75 anos de idade, cuja fé inabalável nas promessas divinas o tornou modelo e pai espiritual de todos os que creem.'
  },
  {
    id: 'sara',
    name: 'Sara',
    originalName: 'שָׂרָה (Sarah - "Princesa")',
    title: 'A Fé que Superou a Esterilidade e o Impossível',
    biblicalReference: 'Gênesis 17 a 23',
    hebrews11Verse: 'Pela fé, também a mesma Sara recebeu a virtude de conceber e deu à luz já fora da idade; porquanto teve por fiel aquele que lho tinha prometido. (Hebreus 11:11)',
    category: 'patriarcas',
    trialOfFaith: 'Enfrentar uma vida inteira de esterilidade dolorosa numa cultura onde não ter filhos era estigma de maldição, e crer que aos 90 anos de idade seu ventre geraria o herdeiro da aliança.',
    victoryOfFaith: 'Apesar das dúvidas iniciais, julgou fiel Aquele que havia prometido. Concebeu e deu à luz a Isaque ("Riso"), tornando-se mãe de reis e nações.',
    christConnection: 'A maternidade milagrosa de Sara prefigura a soberania de Deus em gerar vida a partir da morte e o nascimento virginal milagroso de nosso Senhor Jesus Cristo pelo poder do Espírito Santo.',
    lifeLesson: 'A nossa fraqueza e idade avançada não limitam o cumprimento dos planos de Deus. Quando Deus promete, Ele é fiel para cumprir no tempo perfeito.',
    summary: 'A companheira fiel de Abraão que, ultrapassando os limites da biologia humana, experimentou a fidelidade divina e gerou o filho do riso e da promessa.'
  },
  {
    id: 'jose-do-egito',
    name: 'José do Egito',
    originalName: 'יוֹסֵף (Yosef - "Que Ele Acrescente")',
    title: 'O Governador Fiel que Confiou no Deus Invisível',
    biblicalReference: 'Gênesis 37 a 50',
    hebrews11Verse: 'Pela fé, José, próximo da morte, fez menção da saída dos filhos de Israel e deu ordem a respeito de seus ossos. (Hebreus 11:22)',
    category: 'patriarcas',
    trialOfFaith: 'Ser traído e vendido pelos próprios irmãos como escravo; ser falsamente acusado de assédio no Egito pela mulher de Potifar; e passar anos esquecido em uma masmorra escura.',
    victoryOfFaith: 'Manteve-se em santidade inquebrantável ("Como faria eu este grande mal e pecaria contra Deus?"). Foi exaltado por Deus a governador de todo o Egito, salvando o mundo da fome e perdoando seus irmãos em lágrimas: "Vós intentastes o mal contra mim; Deus, porém, o intentou para o bem".',
    christConnection: 'José é uma das tipologias mais ricas de Jesus Cristo no Antigo Testamento: o filho amado do Pai enviado aos irmãos, rejeitado e vendido por moedas de prata, injustamente condenado, elevado à destra do trono soberano e tornando-se o Salvador do mundo que perdoa e alimenta os que o rejeitaram.',
    lifeLesson: 'O tempo que passamos no poço e na prisão de Deus não é desperdiçado; é o tempo em que o nosso caráter é forjado para sustentar o peso da honra divina.',
    summary: 'O jovem sonhador que suportou a traição e a dor com santa paciência, tornando-se o preservador da nação de Israel e do plano messiânico.'
  },
  {
    id: 'moises',
    name: 'Moisés',
    originalName: 'מֹשֶׁה (Mosheh - "Tirado das Águas")',
    title: 'O Libertador que Escolheu Sofrer com o Povo de Deus',
    biblicalReference: 'Êxodo, Levítico, Números e Deuteronômio',
    hebrews11Verse: 'Pela fé, Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó, escolhendo antes ser maltratado com o povo de Deus do que por um pouco de tempo ter o gozo do pecado; tendo, por maiores riquezas, o vitupério de Cristo do que os tesouros do Egito; porque tinha em vista a recompensa. (Hebreus 11:24-26)',
    category: 'lideres-juizes',
    trialOfFaith: 'Renunciar ao poder absoluto, ao luxo e à riqueza dos palácios imperiais do Egito para liderar uma massa de escravos murmuradores durante 40 anos pelo deserto escaldante.',
    victoryOfFaith: 'Pela fé realizou a Páscoa aspergindo o sangue; abriu o Mar Vermelho; recebeu a Lei no Monte Sinai face a face com Deus; e contemplou o invisível como vendo Aquele que é invisível.',
    christConnection: 'Moisés foi o profeta que predisse o Messias: "O Senhor teu Deus te levantará um profeta do meio de ti, de teus irmãos, como eu; a ele ouvireis" (Dt 18:15). Cristo é o Novo e Maior Moisés, que nos liberta não da escravidão do Egito, mas da escravidão do pecado e da morte.',
    lifeLesson: 'Os prazeres efêmeros deste mundo não se comparam à glória eterna de andar em aliança com Deus e servir ao Seu povo.',
    summary: 'O homem mais manso da terra que conversava com Deus como um amigo conversa com outro amigo, condutor do Êxodo e legislador da Antiga Aliança.'
  },
  {
    id: 'raabe',
    name: 'Raabe',
    originalName: 'רָחָב (Rachav - "Ampla/Espaçosa")',
    title: 'A Prostituta Cananéia Enxertada na Graça Soberana',
    biblicalReference: 'Josué 2 e 6; Mateus 1:5',
    hebrews11Verse: 'Pela fé, Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias. (Hebreus 11:31)',
    category: 'lideres-juizes',
    trialOfFaith: 'Arriscar a própria vida contra o rei pagão de Jericó para acolher e esconder os espias de Israel, confiando que o Deus de Israel é o verdadeiro Deus nos céus e na terra.',
    victoryOfFaith: 'Atou o cordão de escarlata à sua janela. Quando as muralhas de Jericó desabaram, apenas a sua casa permaneceu intacta. Ela e toda a sua família foram salvas e acolhidas no meio de Israel.',
    christConnection: 'O cordão de fio de escarlata na janela é o símbolo claro do Sangue de Cristo que livra da condenação. Raabe casou-se com Salmom e tornou-se mãe de Boaz, bisavó do Rei Davi e antepassada direta do Salvador Jesus Cristo (Mateus 1:5).',
    lifeLesson: 'Não existe passado tão quebrado que a graça e o perdão de Deus não possam transformar em uma árvore de bênção eterna.',
    summary: 'A mulher gentílica de Jericó cuja fé viva arrancou-a da destruição pagã e a colocou na genealogia da linhagem real do Messias.'
  },
  {
    id: 'gideao',
    name: 'Gideão',
    originalName: 'גִּדְעוֹן (Gid\'on - "Cortador/Guerreiro Poderoso")',
    title: 'O Menor da Sua Casa que Venceu com 300 Valentes',
    biblicalReference: 'Juízes 6 a 8',
    hebrews11Verse: 'E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté, e de Davi, e de Samuel, e dos profetas; os quais, pela fé, venceram reinos, praticaram a justiça, alcançaram promessas... (Hebreus 11:32-33)',
    category: 'lideres-juizes',
    trialOfFaith: 'Superar o medo profundo de sua própria pequenez ("Minha família é a mais pobre em Manassés, e eu, o menor na casa de meu pai") e obedecer à ordem divina de reduzir seu exército de 32.000 para apenas 300 homens diante de 135.000 midianitas armados.',
    victoryOfFaith: 'Munidos apenas de trombetas, cântaros de barro e tochas acesas, cercaram o arraial inimigo no meio da noite. Ao toque das buzinas e quebra dos cântaros gritando "Pela espada do Senhor e de Gideão!", o Senhor pôs confusão no exército inimigo e Israel foi libertado.',
    christConnection: 'A vitória de Gideão ilustra o princípio da Cruz: a vitória não vem pela força militar humana, mas pela luz de Deus que resplandece através de vasos de barro quebrados (2 Coríntios 4:7).',
    lifeLesson: 'Quando você reconhece sua incapacidade, abre espaço para o poder infinito de Deus operar. Deus não precisa de multidões descompromissadas, mas de corações dispostos e obedientes.',
    summary: 'O juiz de Israel que derrubou o altar de Baal na casa de seu pai e conduziu uma libertação milagrosa apoiado unicamente na palavra do Todo-Poderoso.'
  },
  {
    id: 'davi',
    name: 'Davi',
    originalName: 'דָּוִד (David - "Amado")',
    title: 'O Homem Segundo o Coração de Deus',
    biblicalReference: '1 Samuel 16 a 1 Reis 2; Livro dos Salmos',
    hebrews11Verse: 'E de Davi, e de Samuel, e dos profetas... da fraqueza tiraram forças, na batalha se esforçaram, puseram em fuga os exércitos dos estranhos. (Hebreus 11:32-34)',
    category: 'reis',
    trialOfFaith: 'Enfrentar o gigante Golias quando todo o exército de Israel tremia de pavor; suportar anos como fugitivo nos desertos e cavernas sendo perseguido injustamente pelo rei Saul sem nunca tocar no ungido do Senhor.',
    victoryOfFaith: 'Derrubou o filisteu em nome do Senhor dos Exércitos com uma funda e uma pedra; unificou as 12 tribos; conquistou Jerusalém; e recebeu a Promessa Davídica da qual brotou o trono eterno.',
    christConnection: 'Jesus Cristo é o Filho de Davi, o Pastor e Rei Eterno cujo reino não terá fim (Lucas 1:32-33). Os Salmos de Davi contêm as profecias mais vívidas da Paixão e Ressurreição de Jesus (Salmo 22 e Salmo 16).',
    lifeLesson: 'O gigante que afronta a sua vida não é medido pelo seu tamanho, mas pelo tamanho do Deus que vai com você. Arrependimento sincero cura o coração e restaura a comunhão com o Pai.',
    summary: 'O pastor de Belém, músico, poeta, guerreiro e rei de Israel cuja paixão pela presença de Deus legou à humanidade o tesouro inestimável dos Salmos.'
  },
  {
    id: 'daniel-e-os-jovens',
    name: 'Daniel e os Três Jovens',
    originalName: 'דָּנִיֵּאל (Daniel - "Deus é Meu Juiz")',
    title: 'A Integridade Inegociável na Fornalha e na Cova dos Leões',
    biblicalReference: 'Livro de Daniel',
    hebrews11Verse: 'Pela fé... taparam as bocas dos leões, apagaram a força do fogo, escaparam do fio da espada... (Hebreus 11:33-34)',
    category: 'profetas',
    trialOfFaith: 'Recusar curvar-se diante da estátua de ouro de Nabucodonosor sob pena de queima viva na fornalha de fogo ardente; e recusar deixar de orar três vezes ao dia em direção a Jerusalém sob pena de ser lançado aos leões famintos.',
    victoryOfFaith: 'Sadraque, Mesaque e Abednego responderam: "O nosso Deus, a quem nós servimos, é que nos pode livrar... E, se não, fica sabendo, ó rei, que não serviremos a teus deuses!". O Quarto Homem, semelhante ao Filho dos Deuses, passeou com eles no fogo sem queimar nem seus cabelos. Na cova, Deus enviou Seu anjo e fechou a boca dos leões.',
    christConnection: 'A presença do Quarto Homem no meio das chamas é uma teofania / cristofania de Jesus Cristo com os Seus servos na fornalha da aflição. A preservação de Daniel na cova e sua saída ilesa prefigura a ressurreição triunfal de Cristo da sepultura selada.',
    lifeLesson: 'Fidelidade a Deus não depende de garantias terrenas de livramento; depende da certeza de que pertencer a Deus vale mais do que a própria vida.',
    summary: 'Jovens príncipes hebreus exilados na Babilônia que escolheram não se contaminar com o manjar do rei e demonstraram ao maior império do mundo que o Altíssimo reina soberano.'
  },
  {
    id: 'estevao',
    name: 'Estêvão',
    originalName: 'Στέφανος (Stefanos - "Coroa")',
    title: 'O Primeiro Mártir que Contemplou os Céus Abertos',
    biblicalReference: 'Atos 6 e 7',
    hebrews11Verse: 'Outros foram apedrejados, serrados, tentados, mortos a fio de espada... dos quais o mundo não era digno. (Hebreus 11:37-38)',
    category: 'apostolos-martires',
    trialOfFaith: 'Ser preso pelo Sinédrio judaico sob falsas acusações de blasfêmia e pregar o Evangelho com ousadia inabalável diante de juízes enfurecidos que rangeram os dentes contra ele.',
    victoryOfFaith: 'Cheio do Espírito Santo, fixou os olhos no céu e exclamou: "Eis que vejo os céus abertos e o Filho do Homem, que está em pé à destra de Deus!". Enquanto as pedras caíam sobre ele, orou de joelhos: "Senhor, não lhes imputes este pecado!".',
    christConnection: 'Estêvão morreu refletindo a própria oração de Jesus no Calvário ("Pai, perdoa-lhes"). Jesus, que habitualmente está sentado à destra do Pai, levantou-se em pé para receber e homenagear Seu corajoso primeiro mártir na glória.',
    lifeLesson: 'Quando você se posiciona pela verdade de Cristo, a presença celestial se manifesta com poder indescritível, transformando até o momento da morte em porta de entrada para a glória eterna.',
    summary: 'Diácono da igreja primitiva, homem cheio de graça e do Espírito Santo, cujo testemunho e oração perdoadora impactaram para sempre o coração do jovem Saulo de Tarso.'
  }
];
