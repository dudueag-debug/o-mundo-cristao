export interface TheologicalTopic {
  id: string;
  title: string;
  category: 'graca' | 'pilares' | 'santificacao' | 'sermoes' | 'vida-wesley';
  subtitle: string;
  summary: string;
  scriptures: string[];
  keyConcept: string;
  content: string[];
  wesleyQuote?: string;
  practicalApplication: string;
}

export const WESLEYAN_THEOLOGY_TOPICS: TheologicalTopic[] = [
  {
    id: 'graca-preveniente',
    category: 'graca',
    title: 'Graça Preveniente',
    subtitle: 'A graça que antecede, busca e desperta o ser humano',
    summary: 'A graça que vem antes de qualquer iniciativa humana. Deus dá a cada pessoa uma medida de luz para capacitá-la a responder ao chamado do Evangelho.',
    scriptures: ['João 1:9', 'Tito 2:11', 'Romanos 2:4', 'Jeremias 31:3'],
    keyConcept: 'Deus sempre toma a iniciativa. Antes de buscarmos a Deus, Ele já nos estava procurando.',
    content: [
      'Para John Wesley e a teologia armínio-wesleyana, a Graça Preveniente é a primeira manifestação do amor divino na vida humana após a Queda.',
      'Embora o pecado tenha corrompido totalmente a natureza humana, Deus não nos abandonou à própria sorte. Pelo sacrifício universal de Cristo na cruz, uma graça restauradora é concedida a todos os seres humanos.',
      'Essa graça desperta a consciência, produz o primeiro senso de culpa ou anseio por Deus, e liberta a vontade humana da escravidão absoluta do pecado, tornando o ser humano capaz de escolher crer ou resistir ao Espírito Santo.',
      'Não se trata de justiça própria nem de salvação pelas obras, mas sim do amor paciente do Pai que nos atrai suavemente para Si.'
    ],
    wesleyQuote: 'A graça de Deus está livre para todos e livre em todos. Ninguém é deixado completamente desprovido da luz da graça preveniente.',
    practicalApplication: 'Olhe para cada pessoa com esperança redentora. Ninguém está longe demais da ação do Espírito Santo, pois a Graça de Deus já está trabalhando no coração dela antes mesmo de você falar.'
  },
  {
    id: 'graca-justificadora',
    category: 'graca',
    title: 'Graça Justificadora & Novo Nascimento',
    subtitle: 'O que Deus faz por nós e o que Deus faz em nós',
    summary: 'A justificação é o perdão judicial dos pecados mediante a fé em Jesus Cristo, acompanhada pelo Novo Nascimento (regeneração).',
    scriptures: ['Romanos 5:1', 'Efésios 2:8-9', '2 Coríntios 5:17', 'João 3:3-5'],
    keyConcept: 'A justificação muda nossa posição diante de Deus (de condenados para justificados); a regeneração muda nosso coração.',
    content: [
      'John Wesley fazia uma distinção preciosa entre Justificação e Novo Nascimento:',
      '1. Justificação é o que Deus faz POR NÓS através do Seu Filho — apaga nossos pecados passados, aceita-nos como justos e nos reconcilia com o Pai.',
      '2. Novo Nascimento (Regeneração) é o que Deus faz EM NÓS através do Seu Espírito — transforma nossa natureza, tira o coração de pedra e nos dá um coração sensível ao amor de Deus.',
      'A justificação é recebida unicamente pela fé, sem qualquer mérito de boas obras prévias. O crente recebe a paz de Deus e o testemunho interior de que agora é filho de Deus (Romanos 8:16).'
    ],
    wesleyQuote: 'Pela justificação nós somos salvos da culpa do pecado e restaurados ao favor de Deus; pela regeneração nós somos salvos do poder do pecado e restaurados à imagem de Deus.',
    practicalApplication: 'Você não precisa consertar sua vida antes de vir a Cristo. Venha como está, receba o perdão pela fé e deixe o Espírito Santo recriar o seu interior.'
  },
  {
    id: 'graca-santificadora',
    category: 'graca',
    title: 'Graça Santificadora',
    subtitle: 'A caminhada contínua rumo à semelhança com Cristo',
    summary: 'O processo dinâmico pelo qual o Espírito Santo purifica nossos motivos, crucifica a velha natureza e nos enche com o amor perfeito de Deus.',
    scriptures: ['1 Tessalonicenses 5:23', 'Hebreus 12:14', 'Gálatas 5:22-23', 'Filipenses 2:12-13'],
    keyConcept: 'A salvação não termina na justificação: ela floresce na santificação diária até sermos conformados à imagem de Jesus.',
    content: [
      'Após o novo nascimento, inicia-se a obra da Graça Santificadora. Não é um estado passivo ou estático, mas uma jornada viva de consagração.',
      'Wesley enfatizava que a verdadeira religião não consiste em rituais externos, mas em ter o amor de Deus derramado no coração pelo Espírito Santo.',
      'A santificação abrange pensamentos, palavras e ações práticas de misericórdia (cuidar dos pobres, dos enfermos e dos aflitos) e obras de piedade (oração, leitura bíblica, jejum e Santa Ceia).',
      'É o poder da graça que nos ensina a amar a Deus sobre todas as coisas e ao nosso próximo como a nós mesmos.'
    ],
    wesleyQuote: 'A santidade nada mais é do que o amor supremo a Deus e o amor sincero a todos os homens.',
    practicalApplication: 'A santidade não é viver isolado do mundo, mas andar no mundo transbordando o amor, a verdade e o caráter humilde de Jesus.'
  },
  {
    id: 'quadrilatero-wesleyano',
    category: 'pilares',
    title: 'O Quadrilátero Wesleyano',
    subtitle: 'A bússola para discernimento teológico e vida prática',
    summary: 'As quatro fontes de autoridade e reflexão teológica: Escritura (fonte primária), Tradição, Razão e Experiência Cristã.',
    scriptures: ['2 Timóteo 3:16-17', '1 Coríntios 10:15', 'Lucas 1:1-4', 'Romanos 8:16'],
    keyConcept: 'A Bíblia é a autoridade suprema e suficiente; Tradição, Razão e Experiência servem para compreendê-la e vivê-la.',
    content: [
      'Para discernir a vontade de Deus e evitar heresias e extremismos, John Wesley fundamentava seu pensamento em quatro pilares interligados:',
      '1. Escritura Sagrada (Primária): A Palavra inspirada de Deus, infalível em matéria de fé e prática cristã.',
      '2. Tradição: O testemunho histórico da Igreja, os credos históricos (ex: Credo Apostólico, Credo Niceno) e o consenso dos santos ao longo dos séculos.',
      '3. Razão: O dom divino do intelecto para examinar, interpretar as Escrituras de forma coerente e dialogar com o mundo de forma clara.',
      '4. Experiência: A confirmação viva da verdade de Deus experimentada no coração, a paz do Espírito e a transformação real de vida.'
    ],
    wesleyQuote: 'Deixem-me ser um homem de um só livro (Homo unius libri): a Bíblia. Nela encontro a verdade imutável que conduz ao Céu.',
    practicalApplication: 'Ao tomar decisões espirituais importantes ou analisar ensinos, passe pelo crivo: O que a Bíblia ensina? Como a igreja histórica entendeu? É racionalmente coerente? Produz frutos reais na vida com Deus?'
  },
  {
    id: 'perfeicao-crista',
    category: 'santificacao',
    title: 'Perfeição Cristã (Inteira Santificação)',
    subtitle: 'A plenitude do amor que expulsa o pecado e o medo',
    summary: 'A doutrina distintiva de John Wesley: a maturidade espiritual caracterizada pelo amor perfeito a Deus e ao próximo governando todos os afetos.',
    scriptures: ['Mateus 5:48', '1 João 4:18', 'Mateus 22:37-39', '1 Tessalonicenses 4:3'],
    keyConcept: 'Não é infalibilidade nem perfeição angelical; é a pureza de motivos em que o amor é a única regra motriz da alma.',
    content: [
      'A doutrina da Perfeição Cristã foi frequentemente mal compreendida. John Wesley deixou claro o que ela NÃO É e o que ela É:',
      'NÃO É: Perfeição no conhecimento (não sabemos tudo), liberdade de erros involuntários, fraquezas humanas ou tentações.',
      'É: Ser liberto do domínio do pecado voluntário e egoísta, ter o coração purificado pela fé de tal modo que o amor a Deus se torna o motor de toda a existência.',
      'Wesley a chamava de "Santidade de coração e de vida", uma graça que deve ser buscada com oração constante, expectativa e dedicação diária.'
    ],
    wesleyQuote: 'Perfeição cristã é amar a Deus de todo o coração, mente, alma e forças. Isso implica que nenhum amor contrário a Deus divida o nosso coração.',
    practicalApplication: 'Em vez de se contentar com uma vida espiritual morna e cheia de recaídas voluntárias, busque a plenitude do Espírito Santo para amar sacrificialmente até aqueles que te feriram.'
  },
  {
    id: 'vida-de-john-wesley',
    category: 'vida-wesley',
    title: 'A Vida de John Wesley & o Avivamento',
    subtitle: 'Do Clube Santo de Oxford ao coração aquecido na Rua Aldersgate',
    summary: 'A trajetória do homem que Deus usou para transformar a Inglaterra do século XVIII através do avivamento metódico.',
    scriptures: ['Zacarias 4:6', 'Marcos 16:15', 'Isaías 6:8'],
    keyConcept: 'Em 24 de maio de 1738, na Rua Aldersgate, Wesley sentiu seu coração "estranhamente aquecido", descobrindo que a salvação é pela graça.',
    content: [
      'John Wesley (1703–1791) nasceu em Epworth, Inglaterra. Aos 5 anos foi milagrosamente salvo do incêndio na reitoria ("um tição tirado do fogo").',
      'Na Universidade de Oxford, fundou com seu irmão Charles Wesley o "Clube Santo", buscando santidade por meio de regras rigorosas, jejuns e visita aos presos.',
      'Apesar de sua religiosidade exemplar e missão na Geórgia (América), confessou que ainda não tinha a paz salvadora.',
      'A grande virada ocorreu aos 35 anos, em Londres: enquanto ouvia a leitura do prefácio de Lutero à Epístola aos Romanos, experimentou a certeza plena da salvação.',
      'A partir dali, pregou nos campos abertos para multidões de mineiros e operários, percorrendo mais de 400.000 km a cavalo, organizando pequenas classes (células) e abalando o mundo.'
    ],
    wesleyQuote: 'O mundo é a minha paróquia! Onde quer que eu esteja, considero próprio, justo e meu santo dever declarar a todos a boa notícia da salvação.',
    practicalApplication: 'A religiosidade fria e as regras não salvam ninguém. Apenas o encontro pessoal com a graça de Cristo pode aquecer a nossa alma e nos inflamar com paixão pelas vidas perdidas.'
  }
];
