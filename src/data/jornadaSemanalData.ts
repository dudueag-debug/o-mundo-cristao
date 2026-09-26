export interface JornadaSemanalDay {
  dayOfWeek: number; // 0 = Domingo, 1 = Segunda, 2 = Terça, 3 = Quarta, 4 = Quinta, 5 = Sexta, 6 = Sábado
  dayName: string;
  shortName: string;
  theme: string;
  biblicalFocus: string;
  scriptureRef: string;
  verseText: string;
  reflection: string;
  practicalAction: string;
  wesleyanInsight: string;
  prayer: string;
  video?: {
    youtubeId: string;
    embedUrl: string;
    title: string;
    duration: string;
    summary: string;
    sourceName: string;
  };
  color: {
    bg: string;
    border: string;
    text: string;
    badge: string;
  };
}

export const JORNADA_SEMANAL_DAYS: JornadaSemanalDay[] = [
  {
    dayOfWeek: 0,
    dayName: 'Domingo',
    shortName: 'Dom',
    theme: 'Celebração da Ressurreição & Dia do Senhor',
    biblicalFocus: 'Adoração comunitária, renovação da esperança e descanso na soberania de Deus.',
    scriptureRef: 'Salmo 118:24 & Apocalipse 1:10',
    verseText: 'Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele.',
    reflection: 'O primeiro dia da semana nos recorda a vitória definitiva de Cristo sobre o túmulo vazio. Não iniciamos a semana a partir da fadiga, mas a partir do triunfo da Cruz. Reunir-se com a congregação dos santos e celebrar a Ceia do Senhor reorienta nossos amores e restaura a nossa visão da eternidade.',
    practicalAction: 'Participe da adoração pública com os irmãos, desconecte-se das pressões corporativas e dedique o dia a glorificar a Deus em família.',
    wesleyanInsight: 'John Wesley considerava a Ceia do Senhor e o Dia do Senhor como meios de graça insubstituíveis, onde o Espírito Santo aviva a alma e sela a aliança do crente com Deus.',
    prayer: 'Senhor Deus Todo-Poderoso, hoje celebro a ressurreição do Teu Filho amado. Enche o meu coração com júbilo santo, renova as minhas forças espirituais e recebe o louvor sincero da minha vida e da minha família. Em nome de Jesus, amém.',
    video: {
      youtubeId: 'tSjPIVXtHsg',
      embedUrl: 'https://www.youtube-nocookie.com/embed/tSjPIVXtHsg?rel=0&modestbranding=1',
      title: 'Lucas 24: A Ressurreição de Jesus e o Dia do Senhor',
      duration: '5:05 min',
      summary: 'Animação teológica retratando o túmulo vazio, o encontro no caminho de Emaús e a celebração da vida abundante.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-amber-950/60 to-stone-900',
      border: 'border-amber-600/40',
      text: 'text-amber-300',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    }
  },
  {
    dayOfWeek: 1,
    dayName: 'Segunda-feira',
    shortName: 'Seg',
    theme: 'Propósito no Trabalho & Graça no Cotidiano',
    biblicalFocus: 'Consagração das atividades seculares como ministério diante de Deus.',
    scriptureRef: 'Colossenses 3:23-24',
    verseText: 'Tudo o que fizerem, façam de todo o coração, como para o Senhor, e não para os homens, sabendo que receberão do Senhor a recompensa da herança.',
    reflection: 'O seu trabalho não é uma maldição, mas uma vocação sagrada. Ao iniciar a semana de tarefas, projetos e decisões, lembre-se de que cada detalhe pode ser executado para a glória de Deus. A excelência do cristão no trabalho é um dos testemunhos mais eloquentes do Evangelho em um mundo pragmático.',
    practicalAction: 'Antes de abrir a primeira planilha, atender o primeiro cliente ou iniciar a lida do dia, faça uma breve oração consagrando suas mãos e seus talentos a Deus.',
    wesleyanInsight: 'Wesley ensinava: "Ganhe tudo o que puder, poupe tudo o que puder, doe tudo o que puder". O trabalho ético e generoso é um desdobramento direto da santidade de coração e de vida.',
    prayer: 'Senhor Jesus, consagro a Ti o início das minhas atividades nesta semana. Dá-me sabedoria para decidir, paciência para lidar com as pressões e integridade em cada atitude. Que as pessoas vejam a Tua luz em meu testemunho profissional. Amém.',
    video: {
      youtubeId: '9oLFKp-t7aI',
      embedUrl: 'https://www.youtube-nocookie.com/embed/9oLFKp-t7aI?rel=0&modestbranding=1',
      title: 'Visão Geral: Colossenses (O Senhorio de Cristo no Trabalho)',
      duration: '9:13 min',
      summary: 'Como a supremacia de Jesus transforma nossa vocação diária e nosso trabalho em adoração sincera.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-blue-950/60 to-stone-900',
      border: 'border-blue-600/40',
      text: 'text-blue-300',
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
    }
  },
  {
    dayOfWeek: 2,
    dayName: 'Terça-feira',
    shortName: 'Ter',
    theme: 'Perseverança nas Provações & Fé Inabalável',
    biblicalFocus: 'Resiliência espiritual fundamentada na fidelidade imutável de Deus.',
    scriptureRef: 'Tiago 1:2-3 & Romanos 8:37',
    verseText: 'Meus irmãos, tende por motivo de toda a alegria o passardes por várias provações, sabendo que a prova da vossa fé produz a perseverança.',
    reflection: 'Nem todas as tempestades vêm para destruir o barco; muitas são permitidas para nos ensinar que o Mestre dorme em paz no meio delas porque tem autoridade absoluta sobre os ventos. Quando a rotina apertar e os desafios parecerem gigantescos, ancore a sua alma na promessa de que nada pode separar você do amor de Deus.',
    practicalAction: 'Identifique a maior fonte de estresse desta semana e renuncie conscientemente à ansiedade, entregando-a a Deus através de um versículo de promessa.',
    wesleyanInsight: 'Para a tradição metodista wesleyana, as provações não são sinais de rejeição divina, mas a oficina onde a Graça Santificadora aperfeiçoa a nossa paciência e purifica os nossos afetos.',
    prayer: 'Pai celeste, quando as tempestades da vida se levantarem contra mim, não permitas que a minha fé vacile. Lembra-me de que a Tua graça me basta e que em todas estas coisas sou mais que vencedor por Aquele que me amou. Amém.',
    video: {
      youtubeId: '5159s_0-0rU',
      embedUrl: 'https://www.youtube-nocookie.com/embed/5159s_0-0rU?rel=0&modestbranding=1',
      title: 'Visão Geral: Romanos 5-16 (Mais que Vencedores nas Provações)',
      duration: '9:08 min',
      summary: 'A gloriosa revelação do amor inabalável de Deus que nos sustenta e nos faz triunfar em meio às tribulações.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-emerald-950/60 to-stone-900',
      border: 'border-emerald-600/40',
      text: 'text-emerald-300',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
    }
  },
  {
    dayOfWeek: 3,
    dayName: 'Quarta-feira',
    shortName: 'Qua',
    theme: 'O Poder da Oração & Intercessão Compassiva',
    biblicalFocus: 'Vida de oração íntima, busca do Espírito Santo e clamor pelo próximo.',
    scriptureRef: 'Jeremias 33:3 & Tiago 5:16',
    verseText: 'Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.',
    reflection: 'No meio da semana, a oração é o oásis no deserto da pressa. Quando nos prostramos diante de Deus, não estamos apenas trazendo uma lista de pedidos, mas abrindo o coração para sermos transformados pela Sua santa presença. A oração intercessória rompe o egoísmo e alinha nossos anseios ao coração do Pai.',
    practicalAction: 'Envie hoje uma mensagem de oração ou encorajamento para alguém que você sabe que está enfrentando enfermidade, luto ou desânimo.',
    wesleyanInsight: 'John Wesley passava as primeiras duas horas de cada manhã em oração antes de qualquer atividade ministerial, afirmando: "Deus nada faz na terra a não ser em resposta à oração fervorosa".',
    prayer: 'Espírito Santo, ensina-me a orar como convém. Intercedo hoje por minha igreja, por minha família e pelos enfermos e angustiados. Que a Tua paz visite aqueles que choram no secreto. Amém.',
    video: {
      youtubeId: 'kYJdJ-5O3yQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/kYJdJ-5O3yQ?rel=0&modestbranding=1',
      title: 'Visão Geral: Jeremias (Clamor, Oração e Nova Esperança)',
      duration: '7:15 min',
      summary: 'A voz profética de Jeremias chamando à oração sincera e à certeza de que Deus escuta o coração aflito.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-purple-950/60 to-stone-900',
      border: 'border-purple-600/40',
      text: 'text-purple-300',
      badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  },
  {
    dayOfWeek: 4,
    dayName: 'Quinta-feira',
    shortName: 'Qui',
    theme: 'Comunhão, Amor ao Próximo & Santidade Prática',
    biblicalFocus: 'O amor de Deus manifestado em atitudes concretas de misericórdia.',
    scriptureRef: '1 João 4:11-12 & Gálatas 6:2',
    verseText: 'Amados, se Deus assim nos amou, também nós devemos amar-nos uns aos outros. Ninguém jamais viu a Deus; se nos amamos uns aos outros, Deus está em nós, e em nós é perfeito o seu amor.',
    reflection: 'A verdadeira espiritualidade não é medida por discursos eloquentes, mas pela capacidade de suportar os fardos uns dos outros com ternura e paciência. No Cenáculo, foi numa quinta-feira que Jesus lavou os pés dos discípulos, ensinando que no Seu Reino o maior é aquele que serve de joelhos.',
    practicalAction: 'Pratique um ato de generosidade espontâneo hoje: perdoe uma ofensa antiga, compartilhe o pão ou sirva alguém sem esperar reconhecimento.',
    wesleyanInsight: 'Wesley definia a santidade não como reclusão monástica, mas como "o amor de Deus reinando no coração e na vida, transbordando em benevolência ativa para com toda a humanidade".',
    prayer: 'Senhor Jesus, que lavaste os pés dos discípulos com humildade inigualável, arranca do meu peito todo o orgulho e indiferença. Faze de mim um instrumento da Tua misericórdia e do Teu amor acolhedor. Amém.',
    video: {
      youtubeId: 'X-85u1o0K74',
      embedUrl: 'https://www.youtube-nocookie.com/embed/X-85u1o0K74?rel=0&modestbranding=1',
      title: 'Visão Geral: 1-3 João (O Amor de Deus e a Comunhão Fraterna)',
      duration: '8:42 min',
      summary: 'O ensinamento apostólico de que conhecer a Deus é amar ativamente e cuidar uns dos outros na prática.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-rose-950/60 to-stone-900',
      border: 'border-rose-600/40',
      text: 'text-rose-300',
      badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30'
    }
  },
  {
    dayOfWeek: 5,
    dayName: 'Sexta-feira',
    shortName: 'Sex',
    theme: 'A Cruz de Cristo, Redenção & Perdão Eterno',
    biblicalFocus: 'Meditação no sacrifício vicário no Calvário e na reconciliação com o Pai.',
    scriptureRef: 'Isaías 53:5 & Gálatas 2:20',
    verseText: 'Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados.',
    reflection: 'Na sexta-feira da Paixão, o Filho de Deus clamou no Calvário: "Está consumado!". A dívida impagável do nosso pecado foi cancelada pelo precioso sangue do Cordeiro sem mancha. Ao contemplar a Cruz, todo sentimento de culpa é afogado no mar do perdão e da graça perdoadora de Deus.',
    practicalAction: 'Dedique alguns minutos de silêncio para agradecer a Jesus pelo preço pago no Calvário por sua salvação e perdoe sinceramente quem lhe tenha ofendido.',
    wesleyanInsight: 'O coração arruinado pelo pecado encontra no sacrifício expiatório de Cristo a plena justificação pela fé: somos aceitos não por nossos méritos, mas unicamente pelo sangue vertido no Gólgota.',
    prayer: 'Cordeiro Santo de Deus, que tiraste o pecado do mundo na Cruz do Calvário, prostrado aos Teus pés rendo graças pela minha salvação. Nada posso Te oferecer além de um coração quebrantado e grato. Amém.',
    video: {
      youtubeId: 'tAWKUvWe5JI',
      embedUrl: 'https://www.youtube-nocookie.com/embed/tAWKUvWe5JI?rel=0&modestbranding=1',
      title: 'Visão Geral: Isaías 40-66 (O Servo Sofredor e a Cruz Redentora)',
      duration: '8:30 min',
      summary: 'A profecia comovente de Isaías 53 sobre o Cordeiro de Deus ferido por nossas transgressões para nos trazer a paz.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-red-950/60 to-stone-900',
      border: 'border-red-600/40',
      text: 'text-red-300',
      badge: 'bg-red-500/20 text-red-300 border-red-500/30'
    }
  },
  {
    dayOfWeek: 6,
    dayName: 'Sábado',
    shortName: 'Sáb',
    theme: 'Descanso da Alma, Memória das Bênçãos & Gratidão',
    biblicalFocus: 'Cessar as correrias, recordar os livramentos de Deus e preparar o coração.',
    scriptureRef: 'Salmo 103:2 & Mateus 11:28-29',
    verseText: 'Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum de seus benefícios.',
    reflection: 'O sábado nos convida a desacelerar e fitar o retrovisor da semana que passou: quantos livramentos silenciosos Deus operou, quanto sustento Ele enviou e quanta paciência Ele teve para conosco! O descanso bíblico não é mera inatividade física, mas o repouso confiante de quem sabe que o Pai cuida de tudo enquanto descansamos.',
    practicalAction: 'Escreva num caderno ou no app 3 bênçãos concretas recebidas durante esta semana e agradeça a Deus em voz audível antes de dormir.',
    wesleyanInsight: 'A paz interior do crente que repousa na providência divina é o fruto maduro da justificação: "Estando, pois, justificados pela fé, temos paz com Deus por nosso Senhor Jesus Cristo".',
    prayer: 'Pai de amor, ao término desta semana, louvo o Teu santo nome por cada provisão e livramento. Guarda a minha mente em perfeito descanso e prepara a minha alma para celebrar o Teu louvor no amanhecer de amanhã. Amém.',
    video: {
      youtubeId: 'WwokgNSOWuI',
      embedUrl: 'https://www.youtube-nocookie.com/embed/WwokgNSOWuI?rel=0&modestbranding=1',
      title: 'Sábado: O Padrão Sagrado do Descanso Bíblico',
      duration: '5:20 min',
      summary: 'Uma jornada bíblica sobre o descanso de Deus, o cessar do estresse e a renovação física e espiritual da alma.',
      sourceName: 'The Bible Project (Português)'
    },
    color: {
      bg: 'from-amber-950/60 to-stone-900',
      border: 'border-amber-600/40',
      text: 'text-amber-300',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30'
    }
  }
];
