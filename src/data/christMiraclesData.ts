export type MiracleCategory = 
  | 'curas'         // ❤️ Curas gerais e febres
  | 'cegueira'      // 👁️ Cura de cegueira
  | 'surdez'        // 👂 Cura de surdez e mudez
  | 'paralisias'    // 🦽 Paralisias
  | 'natureza'      // 🌊 Natureza
  | 'provisao'      // 🍞 Provisão
  | 'libertacao'    // 👿 Libertação demoníaca
  | 'ressurreicao'  // ⚰️ Ressurreição
  | 'outros';       // ✨ Outros sinais

export interface MiracleCategoryMeta {
  id: MiracleCategory;
  name: string;
  icon: string;
  badgeClass: string;
  description: string;
}

export const MIRACLE_CATEGORIES: MiracleCategoryMeta[] = [
  { id: 'curas', name: 'Curas', icon: '❤️', badgeClass: 'bg-rose-50 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300', description: 'Curas de lepra, febres, hemorragias e enfermidades orgânicas graves.' },
  { id: 'cegueira', name: 'Cura de Cegueira', icon: '👁️', badgeClass: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-300', description: 'Restauração da visão física e espiritual a cegos de nascença e mendigos.' },
  { id: 'surdez', name: 'Cura de Surdez', icon: '👂', badgeClass: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300 border-yellow-300', description: 'Abertura de ouvidos surdos e destravamento de línguas mudas e gagas.' },
  { id: 'paralisias', name: 'Paralisias', icon: '🦽', badgeClass: 'bg-blue-50 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300', description: 'Restauração motora completa de paralíticos e pessoas com membros ressequidos.' },
  { id: 'natureza', name: 'Natureza', icon: '🌊', badgeClass: 'bg-cyan-50 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-300', description: 'Autoridade soberana sobre o vento, as ondas, a gravidade e os elementos cósmicos.' },
  { id: 'provisao', name: 'Provisão', icon: '🍞', badgeClass: 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300', description: 'Multiplicação milagrosa de alimentos, vinho novo e recursos materiais.' },
  { id: 'libertacao', name: 'Libertação', icon: '👿', badgeClass: 'bg-purple-50 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300', description: 'Vitória absoluta sobre legiões e espíritos malignos opressores.' },
  { id: 'ressurreicao', name: 'Ressurreição', icon: '⚰️', badgeClass: 'bg-stone-100 text-stone-800 dark:bg-stone-800 dark:text-stone-200 border-stone-400', description: 'Triunfo sobre a morte física devolvendo a vida a jovens e mortos já sepultados.' },
  { id: 'outros', name: 'Outros Sinais', icon: '✨', badgeClass: 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300', description: 'Sinais proféticos sobrenaturais como a figueira que secou e pescas miraculosas.' }
];

export interface ChristMiracle {
  id: string;
  name: string;
  category: MiracleCategory;
  location: string;
  personInvolved: string;
  description: string;
  gospels: {
    gospel: 'Mateus' | 'Marcos' | 'Lucas' | 'João';
    chapter: number;
    verses: string;
  }[];
  historicalAndCulturalContext: string;
  theologicalSignificance: string;
}

export const CHRIST_MIRACLES: ChristMiracle[] = [
  // 1. CURAS
  {
    id: 'cura-sogra-pedro',
    name: 'Cura da Sogra de Pedro',
    category: 'curas',
    location: 'Cafarnaum (Casa de Pedro)',
    personInvolved: 'A sogra de Simão Pedro',
    description: 'Jesus entrou na casa de Pedro e viu a sogra deste acamada com febre muito alta. Tocou-lhe na mão, repreendeu a febre e esta a deixou imediatamente; e ela levantou-se e pôs-se a servi-los.',
    gospels: [
      { gospel: 'Mateus', chapter: 8, verses: '14-15' },
      { gospel: 'Marcos', chapter: 1, verses: '29-31' },
      { gospel: 'Lucas', chapter: 4, verses: '38-39' }
    ],
    historicalAndCulturalContext: 'Febres prolongadas na bacia úmida do Mar da Galileia eram frequentemente fatais ou debilitantes; a recuperação instantânea para o serviço ativo atesta a perfeição da cura divina.',
    theologicalSignificance: 'Manifesta o cuidado de Jesus pela família íntima dos Seus discípulos e ensina que a cura recebida pela graça de Deus deságua naturalmente em serviço de amor ao Reino.'
  },
  {
    id: 'cura-leproso-galileia',
    name: 'Purificação de um Leproso',
    category: 'curas',
    location: 'Uma cidade da Galileia',
    personInvolved: 'Um homem cheio de lepra',
    description: 'Um homem coberto de lepra aproximou-se de Jesus e, prostrando-se com o rosto em terra, suplicou: "Senhor, se quiseres, bem podes limpar-me". Jesus, movido de profunda compaixão, estendeu a mão, tocou-o e disse: "Quero; sê limpo!". E logo a lepra desapareceu dele.',
    gospels: [
      { gospel: 'Mateus', chapter: 8, verses: '1-4' },
      { gospel: 'Marcos', chapter: 1, verses: '40-45' },
      { gospel: 'Lucas', chapter: 5, verses: '12-16' }
    ],
    historicalAndCulturalContext: 'Segundo Levítico 13-14, tocar num leproso tornava o indivíduo cerimonialmente imundo e sujeito a banimento social rigoroso; os leprosos deviam gritar "Imundo! Imundo!".',
    theologicalSignificance: 'Jesus rompe o isolamento da maldição: ao tocar no intocável, a santidade de Cristo não é contaminada pela lepra, mas a pureza de Cristo consome e aniquila a enfermidade.'
  },
  {
    id: 'cura-mulher-fluxo-sangue',
    name: 'Cura da Mulher com Hemorragia',
    category: 'curas',
    location: 'Cafarnaum (a caminho da casa de Jairo)',
    personInvolved: 'Mulher doente há 12 anos',
    description: 'Após gastar todos os seus bens com médicos sem qualquer alívio, a mulher tocou na orla do manto de Jesus crendo que seria curada. Imediatamente a hemorragia estancou e Jesus a chamou de "Filha", elogiando sua fé.',
    gospels: [
      { gospel: 'Mateus', chapter: 9, verses: '20-22' },
      { gospel: 'Marcos', chapter: 5, verses: '25-34' },
      { gospel: 'Lucas', chapter: 8, verses: '43-48' }
    ],
    historicalAndCulturalContext: 'Levítico 15:25 prescrevia impureza contínua durante todo o tempo de fluxo de sangue, privando-a do convívio do Templo e da sociedade judaica.',
    theologicalSignificance: 'A apropriação ativa da graça através da fé viva: no meio de uma multidão que apenas esbarrava em Cristo, um único toque de fé consciente extraiu virtude divina curadora.'
  },
  {
    id: 'cura-dez-leprosos',
    name: 'Cura dos Dez Leprosos',
    category: 'curas',
    location: 'Fronteira entre Samaria e a Galileia',
    personInvolved: 'Dez homens leprosos (incluindo um samaritano)',
    description: 'Parados de longe, clamaram: "Jesus, Mestre, tem misericórdia de nós!". Jesus ordenou que fossem mostrar-se aos sacerdotes; enquanto iam a caminho, foram purificados. Apenas um voltou, prostrando-se aos pés de Jesus para agradecer — e este era samaritano.',
    gospels: [
      { gospel: 'Lucas', chapter: 17, verses: '11-19' }
    ],
    historicalAndCulturalContext: 'A lepra unia até inimigos históricos (judeus e samaritanos) na mesma desgraça comum fora dos muros das vilas.',
    theologicalSignificance: 'O contraste marcante entre receber um benefício da graça e render adoração com gratidão salvadora: "Levanta-te e vai; a tua fé te salvou".'
  },
  {
    id: 'cura-orelha-malco',
    name: 'Restauração da Orelha de Malco',
    category: 'curas',
    location: 'Jardim do Getsêmani',
    personInvolved: 'Malco, servo do sumo sacerdote Caifás',
    description: 'Durante a prisão de Jesus, Pedro desembainhou a espada e decepou a orelha direita de Malco. Jesus repreendeu Pedro e, tocando a orelha de Malco ferido, curou-o milagrosamente.',
    gospels: [
      { gospel: 'Lucas', chapter: 22, verses: '49-51' },
      { gospel: 'João', chapter: 18, verses: '10-11' }
    ],
    historicalAndCulturalContext: 'Malco integrava a comitiva armada de oficiais enviada pelo Sinédrio para prender Jesus com espadas e varapaus na calada da noite.',
    theologicalSignificance: 'O último milagre de cura operado por Jesus antes da Sua morte na Cruz foi concedido a um dos Seus próprios algozes, ensinando a prática viva do amor aos inimigos.'
  },

  // 2. CURA DE CEGUEIRA
  {
    id: 'cura-cego-bartimeu',
    name: 'Cura do Cego Bartimeu',
    category: 'cegueira',
    location: 'Saída da cidade de Jericó',
    personInvolved: 'Bartimeu, filho de Timeu (mendigo cego)',
    description: 'Ouvindo que era Jesus quem passava, começou a clamar em alta voz: "Jesus, Filho de Davi, tem misericórdia de mim!". Mesmo repreendido pela multidão para se calar, clamou ainda mais alto. Jesus mandou chamá-lo; ele lançou de si a capa, levantou-se e veio a Jesus, que lhe restituiu a vista.',
    gospels: [
      { gospel: 'Mateus', chapter: 20, verses: '29-34' },
      { gospel: 'Marcos', chapter: 10, verses: '46-52' },
      { gospel: 'Lucas', chapter: 18, verses: '35-43' }
    ],
    historicalAndCulturalContext: 'A capa de mendicância era a posse mais importante e o certificado social do cego perante as autoridades romanas e judaicas; jogá-la fora significava certeza inabalável de cura.',
    theologicalSignificance: 'Bartimeu confessou Jesus pelo título messiânico "Filho de Davi", mostrando que aqueles que o mundo considera desprovidos muitas vezes enxergam a verdade espiritual com maior clareza que os teólogos fariseus.',
  },
  {
    id: 'cura-cego-nascenca-siloe',
    name: 'Cura do Cego de Nascença no Tanque de Siloé',
    category: 'cegueira',
    location: 'Jerusalém (Tanque de Siloé)',
    personInvolved: 'Homem cego desde o ventre materno',
    description: 'Os discípulos indagaram quem havia pecado para que ele nascesse cego; Jesus declarou que foi para que nele se manifestassem as obras de Deus. Cuspiu na terra, fez lodo com a saliva, untou os olhos do cego e disse: "Vai, lava-te no tanque de Siloé (que significa Enviado)". Ele foi, lavou-se e voltou vendo.',
    gospels: [
      { gospel: 'João', chapter: 9, verses: '1-41' }
    ],
    historicalAndCulturalContext: 'A teologia rabínica popular relacionava rigidamente toda enfermidade congênita ao pecado dos pais ou ao pecado pré-natal.',
    theologicalSignificance: 'Jesus é a Luz do Mundo que dissipa a cegueira moral e física (Jo 9:5). O relato expõe o contraste: o cego curado passa a crer e adorar a Jesus, enquanto os fariseus religiosos afirmavam ver, mas permaneciam em trevas espirituais culpáveis.',
  },
  {
    id: 'cura-cego-betsaida',
    name: 'Cura Gradual do Cego de Betsaida',
    category: 'cegueira',
    location: 'Fora da aldeia de Betsaida',
    personInvolved: 'Um homem cego trazido a Jesus',
    description: 'Jesus tomou o cego pela mão e levou-o para fora da aldeia; cuspindo-lhe nos olhos e impondo-lhe as mãos, perguntou se via alguma coisa. Ele disse: "Vejo os homens como árvores que andam". Jesus pôs outra vez as mãos sobre os olhos dele; e ele, olhando atentamente, ficou restabelecido e viu a todos claramente.',
    gospels: [
      { gospel: 'Marcos', chapter: 8, verses: '22-26' }
    ],
    historicalAndCulturalContext: 'O único milagre de Jesus narrado nos Evangelhos que ocorreu em duas etapas progressivas.',
    theologicalSignificance: 'Ilustração pedagógica do processo de iluminação espiritual dos próprios discípulos: a compreensão das realidades de Cristo muitas vezes começa parcial antes de alcançar a visão espiritual plena.',
  },

  // 3. CURA DE SURDEZ E MUDEZ
  {
    id: 'cura-surdo-gago-decapolis',
    name: 'Cura do Surdo e Gago em Decápolis',
    category: 'surdez',
    location: 'Região de Decápolis',
    personInvolved: 'Um homem surdo que falava com muita dificuldade',
    description: 'Jesus tirou-o da multidão à parte, pôs os dedos nos ouvidos dele e, cuspindo, tocou-lhe na língua; erguendo os olhos ao céu, suspirou e disse: "Efatá! (Abre-te!)". Imediatamente os ouvidos se lhe abriram, a prisão da língua se desfez e falava com clareza.',
    gospels: [
      { gospel: 'Marcos', chapter: 7, verses: '31-37' }
    ],
    historicalAndCulturalContext: 'Decápolis era uma confederação de dez cidades helenísticas pagãs a leste do Mar da Galileia; a preservação do termo aramaico original "Efatá" destaca a precisão das memórias do apóstolo Pedro.',
    theologicalSignificance: 'Cumprimento direto da profecia messiânica de Isaías 35:5-6: "Então os olhos dos cegos serão abertos, e os ouvidos dos surdos se desimpedirão; então o coxo saltará como o cervo, e a língua do mudo cantará".'
  },
  {
    id: 'cura-mudo-endemoninhado',
    name: 'Cura do Mudo Possesso',
    category: 'surdez',
    location: 'Galileia',
    personInvolved: 'Um homem mudo oprimido por espírito maligno',
    description: 'Trazido perante Jesus, assim que o demônio foi expulso, o mudo falou. As multidões maravilhavam-se dizendo: "Nunca tal se viu em Israel!", enquanto os fariseus blasfemavam dizendo que Ele expulsava demônios pelo príncipe dos demônios.',
    gospels: [
      { gospel: 'Mateus', chapter: 9, verses: '32-34' }
    ],
    historicalAndCulturalContext: 'Exorcistas judaicos dependiam de que a entidade pronunciasse seu nome para ser expulsa; um espírito que deixava a vítima muda era considerado invencível pela sabedoria rabínica.',
    theologicalSignificance: 'Demonstra a soberania incontestável de Cristo até sobre as aflições espirituais tidas como impossíveis pela sabedoria humana terrena.'
  },

  // 4. PARALISIAS
  {
    id: 'cura-paralitico-cafarnaum',
    name: 'Cura do Paralítico Descido pelo Telhado',
    category: 'paralisias',
    location: 'Cafarnaum (Casa lotada)',
    personInvolved: 'Um paralítico carregado por quatro amigos fiéis',
    description: 'Não podendo aproximar-se de Jesus por causa da multidão, quatro amigos destelharam o teto da casa e desceram o leito onde jazia o paralítico. Vendo-lhes a fé, Jesus disse: "Filho, perdoados estão os teus pecados". Diante do murmúrio dos escribas, ordenou: "Levanta-te, toma o teu leito e vai para tua casa". Ele levantou-se logo e saiu à vista de todos.',
    gospels: [
      { gospel: 'Mateus', chapter: 9, verses: '1-8' },
      { gospel: 'Marcos', chapter: 2, verses: '1-12' },
      { gospel: 'Lucas', chapter: 5, verses: '17-26' }
    ],
    historicalAndCulturalContext: 'As casas galileias tinham telhados planos feitos de vigas de madeira cobertas de ramos e argila batida, facilmente acessíveis por escadarias externas.',
    theologicalSignificance: 'Prova cabal da divindade de Jesus Cristo: "Para que saibais que o Filho do Homem tem na terra poder para perdoar pecados". Somente Deus pode perdoar pecados, e Jesus demonstra essa prerrogativa divina curando a paralisia do corpo físico.',
  },
  {
    id: 'cura-paralitico-betesda',
    name: 'Cura do Paralítico de Betesda',
    category: 'paralisias',
    location: 'Jerusalém (Tanque de Betesda, junto à Porta das Ovelhas)',
    personInvolved: 'Homem enfermo e paralisado há 38 anos',
    description: 'Jazia ali junto a uma multidão de cegos e coxos que esperavam o movimento das águas. Jesus perguntou: "Queres ficar são?". Ele respondeu que não tinha ninguém que o descesse ao tanque. Jesus ordenou: "Levanta-te, toma o teu leito e anda!". Imediatamente o homem ficou são, tomou o leito e andava; e aquele dia era sábado.',
    gospels: [
      { gospel: 'João', chapter: 5, verses: '1-16' }
    ],
    historicalAndCulturalContext: 'O Tanque de Betesda possuía cinco pórticos escavados na rocha (confirmados pela arqueologia moderna); carregar objetos no sábado era vedado pela rígida tradição oral farisaica.',
    theologicalSignificance: 'Jesus não depende de rituais de águas ou de ajuda humana; Sua palavra é suficiente para recriar as forças vitais. Jesus declara Sua igualdade com o Pai no governo do mundo: "Meu Pai trabalha até agora, e eu trabalho também" (Jo 5:17).',
  },
  {
    id: 'cura-mao-ressequida',
    name: 'Cura do Homem da Mão Ressequida',
    category: 'paralisias',
    location: 'Sinagoga na Galileia',
    personInvolved: 'Homem com uma das mãos atrofiada/ressequida',
    description: 'Os fariseus observavam se Jesus curaria em dia de sábado para o acusarem. Jesus mandou o homem vir para o meio e perguntou: "É lícito no sábado fazer o bem ou fazer o mal? Salvar a vida ou matar?". Olhando ao redor com santa indignação e tristeza pela dureza de coração deles, disse ao homem: "Estende a tua mão". Ele a estendeu, e a mão lhe foi restaurada sã como a outra.',
    gospels: [
      { gospel: 'Mateus', chapter: 12, verses: '9-14' },
      { gospel: 'Marcos', chapter: 3, verses: '1-6' },
      { gospel: 'Lucas', chapter: 6, verses: '6-11' }
    ],
    historicalAndCulturalContext: 'A halacá rabínica permitia intervenção médica no sábado apenas em caso de perigo iminente de morte; uma mão ressequida era vista como condição que podia esperar até o pôr do sol.',
    theologicalSignificance: 'Jesus restaura o propósito original do sábado: o descanso sagrado foi feito para o ser humano florescer em misericórdia e vida, e não para sufocar o amor e a compaixão sob formalismo rígido.',
  },

  // 5. NATUREZA
  {
    id: 'acalma-tempestade',
    name: 'A Tempestade Acalmada no Mar da Galileia',
    category: 'natureza',
    location: 'Mar da Galileia',
    personInvolved: 'Os discípulos aterrorizados no barco',
    description: 'Levantou-se uma grande tempestade de vento e as ondas batiam no barco a ponto de o encher; Jesus dormia na popa sobre uma almofada. Despertaram-no dizendo: "Mestre, não te importa que pereçamos?". Ele levantou-se, repreendeu o vento e disse ao mar: "Cala-te, emudece!". O vento cessou e fez-se grande bonança.',
    gospels: [
      { gospel: 'Mateus', chapter: 8, verses: '23-27' },
      { gospel: 'Marcos', chapter: 4, verses: '35-41' },
      { gospel: 'Lucas', chapter: 8, verses: '22-25' }
    ],
    historicalAndCulturalContext: 'A topografia do Mar da Galileia canaliza ventos frios do Monte Hermom pelos desfiladeiros gerando tempestades violentas repentinas que apavoravam até pescadores experientes.',
    theologicalSignificance: 'Manifestação da prerrogativa exclusiva do Deus Altíssimo, que no Salmo 107:29 "faz cessar a tormenta, e acalmam-se as suas ondas". Os discípulos exclamaram: "Quem é este que até o vento e o mar lhe obedecem?".',
  },
  {
    id: 'caminhar-sobre-aguas',
    name: 'Jesus Anda sobre as Águas',
    category: 'natureza',
    location: 'Mar da Galileia',
    personInvolved: 'Jesus e o apóstolo Pedro',
    description: 'Na quarta vigília da noite (entre 3h e 6h da madrugada), com o barco açoitado pelas ondas e vento contrário, Jesus veio ter com os discípulos andando sobre o mar. Pensando ser um fantasma, gritaram de medo. Jesus acalmou-os: "Tende bom ânimo, sou eu; não temais". Pedro pediu para ir ao Seu encontro sobre as águas e andou; mas, reparando no vento forte, teve medo e começou a afundar, clamando: "Senhor, salva-me!". Jesus estendeu a mão, segurou-o e disse: "Homem de pequena fé, por que duvidaste?". Entrando no barco, o vento cessou.',
    gospels: [
      { gospel: 'Mateus', chapter: 14, verses: '22-33' },
      { gospel: 'Marcos', chapter: 6, verses: '45-52' },
      { gospel: 'João', chapter: 6, verses: '16-21' }
    ],
    historicalAndCulturalContext: 'Caminhar sobre as ondas caóticas do mar no Antigo Testamento é ação atribuída unicamente ao Criador divino (Jó 9:8; Salmo 77:19).',
    theologicalSignificance: 'A auto-revelação de Jesus como o "Eu Sou" divino (gr. Ego Eimi: "Sou eu, não temais"). Pedro simboliza o crente: enquanto fixa os olhos em Cristo caminha sobre as tempestades da vida; quando olha para a fúria das circunstâncias, começa a soçobrar.',
  },

  // 6. PROVISÃO
  {
    id: 'multiplicacao-5000',
    name: 'Multiplicação dos Cinco Pães e Dois Peixes',
    category: 'provisao',
    location: 'Lugar deserto junto a Betsaida',
    personInvolved: 'Cerca de cinco mil homens, além de mulheres e crianças',
    description: 'Diante de uma multidão faminta ao entardecer, os discípulos sugeriram despedi-los. Jesus respondeu: "Dai-lhes vós de comer". Encontraram um jovem com cinco pães de cevada e dois peixinhos. Jesus mandou que todos se assentassem na relva verde em grupos, tomou os alimentos, ergueu os olhos aos céus, abençoou, partiu e deu aos discípulos para distribuírem. Todos comeram e se fartaram, e recolheram doze cestos cheios dos pedaços que sobraram.',
    gospels: [
      { gospel: 'Mateus', chapter: 14, verses: '13-21' },
      { gospel: 'Marcos', chapter: 6, verses: '30-44' },
      { gospel: 'Lucas', chapter: 9, verses: '10-17' },
      { gospel: 'João', chapter: 6, verses: '1-15' }
    ],
    historicalAndCulturalContext: 'O único milagre público de Jesus antes da ressurreição registrado em todos os quatro Evangelhos canônicos.',
    theologicalSignificance: 'Jesus revela-se como o novo Moisés que provê o verdadeiro maná celestial no deserto e o Sumo Pastor que cuida do Seu rebanho. O número doze dos cestos recolhidos simboliza a provisão transbordante para as doze tribos do novo Israel de Deus.',
  },
  {
    id: 'multiplicacao-4000',
    name: 'Multiplicação dos Sete Pães para Quatro Mil',
    category: 'provisao',
    location: 'Decápolis / Costa oriental do Mar da Galileia',
    personInvolved: 'Quatro mil homens e suas famílias em região gentílica',
    description: 'Jesus compadeceu-se da multidão que estava com Ele há três dias sem ter o que comer. Com sete pães e alguns peixinhos, deu graças, partiu e distribuiu; e recolheram sete cestos grandes (spuris) das sobras.',
    gospels: [
      { gospel: 'Mateus', chapter: 15, verses: '32-39' },
      { gospel: 'Marcos', chapter: 8, verses: '1-10' }
    ],
    historicalAndCulturalContext: 'Ocorreu em território predominantemente gentio (Decápolis), utilizando cestos grandes de corda (spuris) diferentes dos cestos judaicos de vime (kophinos) da primeira multiplicação.',
    theologicalSignificance: 'A graça sustentadora do Reino de Deus alcança tanto os judeus (os cinco mil) quanto as nações gentílicas (os quatro mil): Cristo é o Pão de Vida para o mundo inteiro.',
  },
  {
    id: 'agua-em-vinho-cana',
    name: 'Água Transformada em Vinho',
    category: 'provisao',
    location: 'Caná da Galileia',
    personInvolved: 'Os noivos, Maria e os convidados das bodas',
    description: 'Transformou cerca de seiscentas litros de água comum de purificação em vinho da mais alta qualidade para evitar a vergonha pública de uma família humilde recém-casada.',
    gospels: [
      { gospel: 'João', chapter: 2, verses: '1-11' }
    ],
    historicalAndCulturalContext: 'A celebração do matrimônio durava até sete dias; o término do vinho era visto como humilhação irreparável para os noivos perante a aldeia.',
    theologicalSignificance: 'Inauguração dos sinais messiânicos (Jo 2:11), prefigurando as Bodas do Cordeiro e a alegria perene da Nova Aliança.',
  },

  // 7. LIBERTAÇÃO
  {
    id: 'endemoninhado-gadareno',
    name: 'Libertação do Endemoninhado Geraseno (Gadareno)',
    category: 'libertacao',
    location: 'Região de Gadara / Gerasa (Costa oriental pagã do lago)',
    personInvolved: 'Homem violentíssimo possesso por uma Legião de espíritos',
    description: 'Vivia entre os sepulcros e montes, gritando e ferindo-se com pedras, sem que ninguém conseguisse prendê-lo nem com correntes. Vendo Jesus de longe, correu e prostrou-se diante dEle. Quando Jesus ordenou que saíssem, os espíritos revelaram seu nome: "Legião é o meu nome, porque somos muitos". Rogaram para entrar numa manada de cerca de dois mil porcos; com a permissão de Jesus, os espíritos entraram nos porcos, que se precipitaram no mar e se afogaram. O homem foi achado assentado, vestido e em perfeito juízo aos pés de Jesus.',
    gospels: [
      { gospel: 'Mateus', chapter: 8, verses: '28-34' },
      { gospel: 'Marcos', chapter: 5, verses: '1-20' },
      { gospel: 'Lucas', chapter: 8, verses: '26-39' }
    ],
    historicalAndCulturalContext: 'Uma legião romana correspondia a cerca de 6.000 soldados; a criação de porcos confirmava a população gentílica da Decápolis.',
    theologicalSignificance: 'Cristo invade o território da morte, impureza e possessão diabólica extrema para libertar e restaurar a dignidade humana. O homem liberto foi comissionado como o primeiro missionário daquelas cidades: "Vai para tua casa e conta-lhes quão grandes coisas o Senhor te fez".',
  },
  {
    id: 'jovem-possesso-monte',
    name: 'Libertação do Jovem Epilético Possesso',
    category: 'libertacao',
    location: 'Planície junto ao Monte da Transfiguração',
    personInvolved: 'Um jovem atormentado desde a infância e seu pai desesperado',
    description: 'Descendo do Monte da Transfiguração, um pai ajoelhou-se perante Jesus implorando misericórdia por seu único filho, a quem os discípulos não haviam conseguido curar. O pai clamou com lágrimas a célebre oração: "Eu creio, Senhor! Ajuda a minha incredulidade!". Jesus repreendeu o espírito impuro, ordenando que saísse dele e nunca mais entrasse. O espírito saiu gritando; Jesus tomou o menino pela mão e o ergueu são.',
    gospels: [
      { gospel: 'Mateus', chapter: 17, verses: '14-21' },
      { gospel: 'Marcos', chapter: 9, verses: '14-29' },
      { gospel: 'Lucas', chapter: 9, verses: '37-43' }
    ],
    historicalAndCulturalContext: 'Contraste imediato entre a glória celestial do topo do monte e a miséria do sofrimento humano na planície do vale.',
    theologicalSignificance: 'A autoridade de Cristo sobre forças demoníacas e a lição aos discípulos: "Esta casta não pode sair com coisa alguma, a não ser com oração e jejum".',
  },

  // 8. RESSURREIÇÃO
  {
    id: 'ressurreicao-filho-viuva-naim',
    name: 'Ressurreição do Filho da Viúva de Naim',
    category: 'ressurreicao',
    location: 'Porta da cidade de Naim (Galileia)',
    personInvolved: 'Jovem defunto e sua mãe viúva desolada',
    description: 'Jesus aproximou-se da porta de Naim quando saía o enterro de um jovem, filho único de sua mãe, que era viúva. Vendo-a, o Senhor moveu-se de íntima compaixão para com ela e disse-lhe: "Não chores!". Aproximou-se e tocou o esquife funerário; os que o levavam pararam. Jesus disse: "Jovem, a ti te digo: Levanta-te!". O defunto sentou-se e começou a falar; e Jesus o entregou à sua mãe.',
    gospels: [
      { gospel: 'Lucas', chapter: 7, verses: '11-17' }
    ],
    historicalAndCulturalContext: 'Uma viúva sem filho na antiguidade ficava totalmente desprovida de sustento, herança e proteção social.',
    theologicalSignificance: 'Intervenção espontânea da pura compaixão de Cristo sem que ninguém Lhe pedisse o milagre. O povo proclamou: "Um grande profeta se levantou entre nós, e Deus visitou o seu povo!".',
  },
  {
    id: 'ressurreicao-filha-jairo',
    name: 'Ressurreição da Filha de Jairo',
    category: 'ressurreicao',
    location: 'Cafarnaum (Casa de Jairo)',
    personInvolved: 'A filha de 12 anos de Jairo, chefe da sinagoga',
    description: 'Jairo prostrou-se aos pés de Jesus rogando por sua filha única à morte. Chegaram da casa dizendo que a menina já falecera. Jesus tranquilizou o pai: "Não temas; crê somente". Entrando na casa onde havia pranto e alvoroço, despediu a todos, levando apenas Pedro, Tiago, João e os pais. Tomando a mão da menina, disse em aramaico: "Talitha cumi! (Menina, a ti te digo, levanta-te!)". Imediatamente a jovem levantou-se e andava; e mandou que lhe dessem de comer.',
    gospels: [
      { gospel: 'Mateus', chapter: 9, verses: '18-26' },
      { gospel: 'Marcos', chapter: 5, verses: '21-43' },
      { gospel: 'Lucas', chapter: 8, verses: '40-56' }
    ],
    historicalAndCulturalContext: 'O chefe da sinagoga arriscava sua posição e prestígio religioso perante a casta farisaica ao recorrer publicamente a Jesus.',
    theologicalSignificance: 'Jesus trata a morte biológica com a serenidade de quem desperta uma criança do sono ("A menina não está morta, mas dorme"). A ternura divina demonstrada ao mandar dar-lhe alimento após ressuscitá-la.',
  },
  {
    id: 'ressurreicao-de-lazaro-milagre',
    name: 'Ressurreição de Lázaro de Betânia',
    category: 'ressurreicao',
    location: 'Betânia da Judeia (Sepulcro escavado na rocha)',
    personInvolved: 'Lázaro, irmão de Marta e Maria',
    description: 'Após quatro dias de sepultamento, quando o corpo já cheirava mal pela decomposição natural, Jesus ordenou retirar a pedra e clamou em alta voz: "Lázaro, vem para fora!". O falecido saiu enfaixado nas mãos e pés, sendo plenamente restaurado à vida.',
    gospels: [
      { gospel: 'João', chapter: 11, verses: '1-44' }
    ],
    historicalAndCulturalContext: 'A crença rabínica sustentava que a alma pairava sobre o cadáver por três dias, mas ao quarto dia a decomposição era irreversível.',
    theologicalSignificance: 'A comprovação irrevogável da autoridade divina de Jesus como a Ressurreição e a Vida (Jo 11:25), prenúncio e garantia da ressurreição final de todos os que creem.',
  },

  // 9. OUTROS SINAIS
  {
    id: 'figueira-amaldicoada',
    name: 'A Figueira que Secou',
    category: 'outros',
    location: 'Caminho entre Betânia e Jerusalém',
    personInvolved: 'Os discípulos que observavam a figueira',
    description: 'Tendo fome pela manhã, Jesus viu uma figueira à beira do caminho coberta de folhas, mas sem fruto algum. Disse-lhe: "Nunca mais nasça fruto de ti!". No dia seguinte, passando por ali, os discípulos viram que a figueira secara desde as raízes. Pedro admirou-se e Jesus ensinou sobre a oração da fé.',
    gospels: [
      { gospel: 'Mateus', chapter: 21, verses: '18-22' },
      { gospel: 'Marcos', chapter: 11, verses: '12-14, 20-25' }
    ],
    historicalAndCulturalContext: 'As figueiras da Judeia produzem pequenos brotos comestíveis (brebas) antes ou junto com as folhas; uma árvore cheia de folhas vistosas sem qualquer fruto era hipócrita em sua aparência.',
    theologicalSignificance: 'O único milagre de destruição/juízo operado por Jesus, constituindo uma parábola profética encenada sobre a esterilidade espiritual do Templo e da liderança religiosa de Jerusalém que mantinha aparência de folhas exteriores de religiosidade, mas não produzia frutos de arrependimento e justiça.',
  },
  {
    id: 'pesca-milagrosa-joao21',
    name: 'A Segunda Pesca Milagrosa dos 153 Grandes Peixes',
    category: 'outros',
    location: 'Mar de Tiberíades (Galileia)',
    personInvolved: 'Sete apóstolos liderados por Pedro',
    description: 'Tendo pescado a noite toda sem nada apanhar, ao amanhecer Jesus apareceu na praia (sem que o reconhecessem a princípio) e disse: "Lançai a rede para a banda direita do barco e achareis". Lançaram-na e não podiam puxá-la pela multidão de peixes. João reconheceu: "É o Senhor!". Puxaram a rede cheia de cento e cinquenta e três grandes peixes; e, sendo tantos, não se rompeu a rede.',
    gospels: [
      { gospel: 'João', chapter: 21, verses: '1-14' }
    ],
    historicalAndCulturalContext: 'Ocorreu após a ressurreição corpórea de Cristo, confirmando o chamado apostólico original.',
    theologicalSignificance: 'A missão evangelizadora da Igreja: a rede do Evangelho lançada sob a ordem direta de Cristo colhe crentes de todas as nações sem se romper.',
  }
];
