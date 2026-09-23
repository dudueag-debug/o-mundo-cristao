export interface SermonPoint {
  title: string;
  scripture?: string;
  explanation: string;
  application: string;
}

export interface SermonOutline {
  id: string;
  title: string;
  category: 'graca' | 'avivamento' | 'familia' | 'santidade' | 'santaceia' | 'missoes';
  theme: string;
  scriptureText: string;
  bigIdea: string;
  introduction: string;
  points: SermonPoint[];
  illustration: string;
  conclusion: string;
  isCustom?: boolean;
}

export const INITIAL_SERMON_OUTLINES: SermonOutline[] = [
  {
    id: 'sermon-1',
    title: 'O Coração Aquecido pela Graça',
    category: 'avivamento',
    theme: 'Avivamento Pessoal e Transformação',
    scriptureText: 'Lucas 24:32; Romanos 8:14-16',
    bigIdea: 'A verdadeira religião não é mero ritualismo, mas a certeza viva da graça de Deus incendiando o nosso íntimo.',
    introduction: 'Muitos cristãos vivem na penumbra da dúvida e do cansaço espiritual. Eles frequentam a igreja, mas sentem que a fé virou um fardo moral. Foi exatamente isso que John Wesley viveu até maio de 1738, quando experimentou o poder de um "coração estranhamente aquecido". Como Deus faz essa chama arder em nós?',
    points: [
      {
        title: 'I. A Insuficiência da Religião Externa',
        scripture: 'Mateus 15:8; 2 Timóteo 3:5',
        explanation: 'Wesley orava, jejuava duas vezes por semana e até atravessou o oceano como missionário na Geórgia, mas confessou: "Fui à América para converter os índios, mas quem me converterá a mim?". Rituais sem a graça viva geram cansaço e frustração.',
        application: 'Examine seu coração: você tem servido a Deus por obrigação religiosa ou impulsionado por um amor transbordante?'
      },
      {
        title: 'II. O Encontro Decisivo com a Palavra da Graça',
        scripture: 'Romanos 1:16-17; 5:1',
        explanation: 'Enquanto ouvia ler o prefácio de Lutero aos Romanos, onde se descreve a mudança que Deus opera no coração mediante a fé em Cristo, Wesley sentiu que confiava em Cristo, somente em Cristo, para a salvação.',
        application: 'A salvação e a paz não são conquistadas por nossos méritos, mas recebidas de joelhos diante da cruz de Cristo.'
      },
      {
        title: 'III. O Testemunho Interior do Espírito Santo',
        scripture: 'Romanos 8:15-16; Gálatas 4:6',
        explanation: 'O Espírito clama em nosso espírito: "Aba, Pai". Deus não nos chamou para vivermos sob o espírito de escravidão e medo, mas na gloriosa liberdade dos filhos amados.',
        application: 'Descanse na promessa: o Espírito Santo habita em você para lhe dar vitória, consolo e convicção diária.'
      }
    ],
    illustration: 'Em um inverno rigoroso na Inglaterra, um viajante quase congelava perto de uma lareira apagada, cheia de lenha bem cortada, mas sem fogo. Bastou uma única brasa viva tocar a madeira para que a sala inteira se enchesse de luz e calor. Assim é o Espírito Santo: Ele toca a nossa estrutura e acende a vida de Deus.',
    conclusion: 'Não saia deste culto com um coração frio ou indiferente. Peça a Deus neste momento: "Senhor, aquece o meu coração com o Teu amor soberano. Dá-me a certeza da Tua graça e enche-me com o Teu Santo Espírito".'
  },
  {
    id: 'sermon-2',
    title: 'Edificando a Casa sobre a Rocha da Santidade',
    category: 'familia',
    theme: 'Família, Altar no Lar e Valores Eternos',
    scriptureText: 'Josué 24:14-15; Mateus 7:24-27',
    bigIdea: 'Uma família abençoada não nasce por acaso; ela é construída intencionalmente sobre os princípios inegociáveis da Palavra de Deus.',
    introduction: 'Vivemos numa época de tempestades culturais e relacionais. As pressões do mundo tentam moldar nossos lares pelo molde do individualismo e do entretenimento vazio. Como podemos proteger nossa família e torná-la um refúgio de paz e honra a Deus?',
    points: [
      {
        title: 'I. A Decisão Inegociável da Liderança Espiritual',
        scripture: 'Josué 24:15 ("Eu e a minha casa serviremos ao Senhor")',
        explanation: 'Josué não esperou a aprovação da sociedade de Canaã para decidir o rumo de sua família. Ele colocou sua bandeira no chão com firmeza e mansidão.',
        application: 'Pais e mães: a liderança espiritual do seu lar não pertence à escola nem às redes sociais; Deus confiou a você o privilégio de guiar seus filhos a Cristo.'
      },
      {
        title: 'II. O Altar Doméstico: O Exemplo de Susanna Wesley',
        scripture: 'Deuteronômio 6:6-9; Provérbios 22:6',
        explanation: 'Susanna Wesley, mãe de 19 filhos (incluindo John e Charles), dedicava uma hora por semana para orar e discipular individualmente cada um dos seus filhos. Daquele lar humilde saíram os homens que mudaram a história da Inglaterra.',
        application: 'Recupere o momento de oração em família à mesa. Menos telas e mais diálogo, leitura bíblica e bênção sobre a cabeça dos filhos.'
      },
      {
        title: 'III. O Perdão como o Cimento do Lar',
        scripture: 'Colossenses 3:12-14; Efésios 4:32',
        explanation: 'Nenhuma casa resiste sem o perdão diário. Onde não há perdão, o chão racha e a estrutura desmorona. Onde o amor de Cristo reina, há reconciliação contínua.',
        application: 'Não durma com ressentimentos acumulados. Peça perdão, libere perdão e proteja a atmosfera de graça no seu lar.'
      }
    ],
    illustration: 'Durante o terremoto em São Francisco, muitas casas desabaram por terem alicerces superficiais em solo arenoso. Mas uma casa permaneceu intacta: seus pilares de sustentação haviam sido perfurados na rocha viva. As tempestades da vida vão soprar contra todas as famílias, mas a que está edificada em Cristo não cairá.',
    conclusion: 'Consagre a sua casa ao Senhor hoje. Faça do seu casamento e dos seus filhos um território protegido pela aliança de Deus.'
  },
  {
    id: 'sermon-3',
    title: 'A Graça que Restaura o Perdido',
    category: 'graca',
    theme: 'Salvação, Misericórdia e Amor Incondicional',
    scriptureText: 'Lucas 15:20-24; Efésios 2:4-5',
    bigIdea: 'Deus não espera o pecador se limpar para acolhê-lo; Ele corre ao seu encontro, abraça e restaura a sua dignidade de filho.',
    introduction: 'A parábola do Filho Pródigo é o coração do Evangelho. Revela que o Pai celestial não é um juiz distante que se alegra na punição, mas um Pai amoroso que anseia pelo retorno de cada filho que se perdeu nos caminhos do engano.',
    points: [
      {
        title: 'I. A Ilusão das Terras Distantes',
        scripture: 'Lucas 15:13-16; Jeremias 2:13',
        explanation: 'O jovem achava que longe do Pai encontraria a liberdade plena. No entanto, acabou cuidando de porcos e faminto. O pecado sempre promete o que não pode dar e cobra um preço que ninguém pode pagar.',
        application: 'Se você tem tentado saciar a sede da sua alma longe de Deus, reconheça hoje o vazio dessa busca.'
      },
      {
        title: 'II. A Graça Preveniente que Desperta: "Caindo em Si"',
        scripture: 'Lucas 15:17; Salmos 32:5',
        explanation: 'Mesmo no chiqueiro, a lembrança do amor da casa do pai tocou a mente do filho. Essa é a graça preveniente: Deus acende a luz da esperança no meio das nossas trevas.',
        application: 'O arrependimento começa quando você reconhece que precisa voltar para o Senhor.'
      },
      {
        title: 'III. O Pai que Corre ao Encontro',
        scripture: 'Lucas 15:20; Romanos 5:8',
        explanation: 'Na cultura oriental antiga, um patriarca nobre jamais corria em público porque era considerado indigno. Mas o amor daquele pai superou qualquer protocolo: ele viu o filho ao longe, moveu-se de íntima compaixão e correu para beijá-lo.',
        application: 'Deus não quer humilhar você pelos seus erros passados. Ele tem vestes novas, anel de autoridade e um banquete de celebração para você hoje.'
      }
    ],
    illustration: 'Um rapaz que fugiu de casa após desobedecer gravemente o pai escreveu uma carta pedindo perdão: "Se você me perdoar, amarre um lenço branco no carvalho da linha do trem. Se não houver lenço, continuarei viagem e nunca mais voltarei". Quando o trem se aproximou da fazenda, o jovem viu o carvalho coberto por centenas de panos brancos balançando ao vento: o pai não havia colocado apenas um, mas todos os lençóis da casa para que ele soubesse que estava perdoado.',
    conclusion: 'O Pai celestial está de braços abertos para você hoje. Venha para a casa do Pai agora!'
  },
  {
    id: 'sermon-4',
    title: 'O Clamor pelo Fogo do Alto',
    category: 'avivamento',
    theme: 'Poder do Espírito Santo e Oração Fervorosa',
    scriptureText: 'Atos 1:8; Atos 2:1-4; 1 Reis 18:38',
    bigIdea: 'A Igreja não vence pela força de sua estrutura humana, mas pelo poder avivador e transformador do Espírito Santo.',
    introduction: 'A história da Igreja Metodista Wesleyana e de todos os grandes avivamentos começou com reuniões de oração simples, onde homens e mulheres clamaram: "Senhor, envia o Teu fogo!". O que acontece quando o Espírito Santo é derramado?',
    points: [
      {
        title: 'I. A Promessa da Capacitação Sobrenatural',
        scripture: 'Atos 1:8 ("Mas recebereis poder ao descer sobre vós o Espírito Santo")',
        explanation: 'Jesus proibiu os discípulos de saírem a pregar antes de serem revestidos de poder. O intelecto e os talentos são úteis, mas é o Espírito quem convence do pecado, da justiça e do juízo.',
        application: 'Nunca tente fazer a obra de Deus confiando apenas na sua própria sabedoria. Clame pela unção do Espírito Santo sobre suas palavras.'
      },
      {
        title: 'II. O Altar Consertado Atrai a Resposta de Deus',
        scripture: '1 Reis 18:30-38; Levítico 6:13',
        explanation: 'Elias primeiro restaurou o altar do Senhor que estava quebrado, colocou o sacrifício e clamou. O fogo não caiu sobre o chão vazio; caiu sobre o altar consagrado.',
        application: 'Conserte o altar do seu coração: retire a mágoa, a divisão e a carnalidade, para que o fogo da presença de Deus possa descer com liberdade.'
      },
      {
        title: 'III. Os Frutos do Verdadeiro Avivamento',
        scripture: 'Atos 2:42-47; Gálatas 5:22',
        explanation: 'O autêntico avivamento wesleyano e bíblico produz três marcas indiscutíveis: amor fervente pela Palavra, paixão incontida por missões e salvação de vidas, e santidade prática no dia a dia.',
        application: 'O avivamento que Deus quer nos dar não é apenas um arrepio passageiro no domingo, mas um fogo contínuo que transforma nossas segundas-feiras.'
      }
    ],
    illustration: 'Em 1904, durante o avivamento do País de Gales liderado pelo jovem Evan Roberts, os cavalos das minas de carvão ficaram desorientados porque os mineradores recém-convertidos deixaram de falar palavrões e de ser cruéis. Quando o Espírito Santo desce, a atmosfera de toda uma cidade é transformada pelo Evangelho!',
    conclusion: 'Abra seu coração neste momento. Clame com a Igreja: "Enche-nos, Espírito Santo! Batiza com fogo, renova os dons e inflama a nossa vida com a Tua presença!".'
  }
];
