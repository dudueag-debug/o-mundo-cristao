export interface MomentoComOPaiDevocional {
  id: string;
  dayOfYear: number;
  dateDisplay: string;
  title: string;
  subtitle: string;
  scriptureRef: string;
  verseText: string;
  fatherMessage: string[];
  keyOfTheDay: string; // Chave do Dia / Atitude Prática
  tablePrayer: string; // Oração à Mesa
  readingTime: string;
}

export const MOMENTO_COM_O_PAI_LIST: MomentoComOPaiDevocional[] = [
  {
    id: 'mcp-1',
    dayOfYear: 266,
    dateDisplay: 'Hoje • 23 de Setembro',
    title: 'Você Não Precisa Carregar o Peso do Mundo Sozinho',
    subtitle: 'Puxe uma cadeira, respire fundo e ouça a voz Daquele que mais te ama.',
    scriptureRef: 'Mateus 11:28',
    verseText: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.',
    fatherMessage: [
      'Meu filho amado, antes mesmo de você despertar hoje e checar as notificações agitadas do mundo, Eu já estava contemplando o seu rosto com imenso amor e ternura.',
      'Eu conheço os pensamentos que tentam roubar a sua tranquilidade quando a casa fica em silêncio. Sei das batalhas silenciosas que você não conta para ninguém para não parecer fraco.',
      'Mas escute o que Eu tenho para lhe dizer hoje: você não precisa provar nada para o mundo, nem precisa carregar nos seus ombros o peso que só os meus braços eternos podem sustentar.',
      'Sente-se à mesa Comigo. Tome o seu café em paz. Deixe os fardos pesados aos meus pés. A minha graça te basta para cada hora deste dia.'
    ],
    keyOfTheDay: 'Hoje, sempre que um pensamento de ansiedade ou cobrança excessiva tentar acelerar o seu coração, pare por 30 segundos, respire fundo e declare: "O Senhor cuida de mim, eu escolho descansar em Seus braços."',
    tablePrayer: 'Pai querido, como é bom sentar à Tua mesa nesta manhã. Descarrego aos Teus pés toda a pressa, o medo e as incertezas. Enche o meu coração com a Tua paz que excede todo entendimento humano. Conduz os meus passos e abençoa a minha família hoje. Em nome de Jesus, amém.',
    readingTime: '3 min de reflexão'
  },
  {
    id: 'mcp-2',
    dayOfYear: 267,
    dateDisplay: 'Amanhã • 24 de Setembro',
    title: 'A Promessa que Não Envelhece',
    subtitle: 'Mesmo quando tudo ao redor oscila, a fidelidade do Pai permanece inabalável.',
    scriptureRef: 'Lamentações 3:22-23',
    verseText: 'As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim; renovam-se cada manhã. Grande é a tua fidelidade!',
    fatherMessage: [
      'Filho, o dia de ontem pode ter sido exaustivo. Talvez tenham acontecido imprevistos que te deixaram frustrado ou com a sensação de passos perdidos.',
      'Mas olhe para a janela: uma nova manhã nasceu. E com ela, o estoque da minha misericórdia para a sua vida acabou de ser 100% renovado.',
      'Não comece o dia olhando pelo espelho retrovisor dos erros passados. Eu não te chamei para viver do que deu errado ontem, mas para experimentar o que Eu preparei para você hoje.',
      'A minha fidelidade não depende do seu desempenho perfeito; ela é ancorada na minha promessa irrevogável de que nunca te deixarei nem te desampararei.'
    ],
    keyOfTheDay: 'Libere perdão a si mesmo e a quem te feriu. Comece este novo dia com a folha em branco da misericórdia de Deus.',
    tablePrayer: 'Pai bondoso, muito obrigado porque hoje é um novo começo. Perdoa os meus deslizes de ontem e renova a minha alegria de viver. Ensina-me a enxergar Tua mão providenciando cada detalhe da minha jornada. Amém!',
    readingTime: '3 min de reflexão'
  },
  {
    id: 'mcp-3',
    dayOfYear: 268,
    dateDisplay: '25 de Setembro',
    title: 'A Certeza de que Deus Já Chegou no Seu Amanhã',
    subtitle: 'A graça preveniente que aplaina os caminhos antes de você passar.',
    scriptureRef: 'Deuteronômio 31:8',
    verseText: 'O Senhor é quem vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te atemorizes.',
    fatherMessage: [
      'Quantas vezes você perde o sono imaginando como resolverá o problema da próxima semana ou do próximo mês?',
      'Lembre-se: antes de você chegar no seu amanhã, o seu Pai celestial já chegou lá primeiro! A Graça Preveniente já está trabalhando no coração das pessoas com quem você vai falar e preparando as portas que você precisa.',
      'Não antecipe dores que talvez nunca existam. Viva a graça de hoje com alegria e deixe o seu futuro guardado no cofre da minha soberania.'
    ],
    keyOfTheDay: 'Pratique a gratidão antecipada: agradeça a Deus antes mesmo de ver o milagre acontecer.',
    tablePrayer: 'Senhor, entrego o meu futuro em Tuas mãos. Sei que onde eu pisar, Tu já estiveste primeiro cuidando de tudo. Descanso seguro em Tua soberania. Amém!',
    readingTime: '2 min de reflexão'
  }
];
