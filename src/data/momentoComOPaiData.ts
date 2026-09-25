export interface LinguisticOrigin {
  originalScript: string;
  transliteration: string;
  meaning: string;
  strongNumber?: string;
  theologicalDepth: string;
}

export interface MomentoComOPaiDevocional {
  id: string;
  dayOfWeek: number; // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  dayOfWeekName: string;
  dayTheme: string;
  dayOfYear: number;
  dateDisplay: string;
  title: string;
  subtitle: string;
  scriptureRef: string;
  verseText: string;
  readingTime: string;
  fatherMessage: string[];
  keyOfTheDay: string; // Chave do Dia / Atitude Prática
  tablePrayer: string; // Oração à Mesa
  story: {
    title: string;
    chapter: string;
    summary: string;
    historicalContext: string;
  };
  image: {
    url: string;
    alt: string;
    caption: string;
    biblicalLocation: string;
  };
  video: {
    youtubeId: string;
    embedUrl: string;
    title: string;
    duration: string;
    summary: string;
    sourceName: string;
  };
  linguisticRoots: {
    hebrew: LinguisticOrigin;
    aramaic: LinguisticOrigin;
    greek: LinguisticOrigin;
    latin: LinguisticOrigin;
  };
}

export const MOMENTO_COM_O_PAI_LIST: MomentoComOPaiDevocional[] = [
  // 0 = DOMINGO
  {
    id: 'mcp-domingo',
    dayOfWeek: 0,
    dayOfWeekName: 'Domingo',
    dayTheme: 'Vitória sobre a Morte & Alvorada da Esperança',
    dayOfYear: 269,
    dateDisplay: 'Domingo • Alvorada do Senhor',
    title: 'A Pedra Foi Removida: Uma Nova Alvorada Começou',
    subtitle: 'Puxe sua cadeira à mesa e contemple a luz da ressurreição que dissipa qualquer escuridão da sua vida.',
    scriptureRef: 'Lucas 24:5-6 / João 20:19',
    verseText: 'Por que buscais entre os mortos aquele que vive? Ele não está aqui, mas ressuscitou.',
    readingTime: '4 min de comunhão',
    fatherMessage: [
      'Meu filho amado, neste dia que celebra a vitória da vida, Eu quero que você respire profundamente e sinta o aroma da esperança viva que nunca se esgota.',
      'Muitas vezes, você olha para certas áreas da sua história como quem olha para um túmulo lacrado: sonhos interrompidos, relacionamentos feridos ou projetos que parecem mortos e sepultados pela poeira do tempo.',
      'Mas Eu sou o Deus que chama à existência as coisas que não são como se já fossem. A pedra que o mundo colocou para dar o ponto final nos seus dias de alegria foi rolada pelo poder do meu Santo Espírito.',
      'Sente-se à minha mesa nesta manhã com vestes de júbilo. Jesus não venceu a morte apenas para te garantir a eternidade no céu; Ele venceu para que a Vida abundante operasse em você hoje, desfazendo todo medo do amanhã.'
    ],
    keyOfTheDay: 'Hoje, declare vida sobre aquilo que parecia morto. Não gaste suas forças chorando diante de túmulos vazios; olhe para o Cristo vivo que caminha ao seu lado.',
    tablePrayer: 'Pai Eterno, Deus da Vida e Senhor da Ressurreição, louvo o Teu nome porque a morte e o medo foram desarmados na cruz e no túmulo vazio. Entro neste domingo renovado pela certeza de que nenhuma sepultura pode aprisionar o propósito que tens para mim. Enche o meu lar com o poder da Tua vida abundante. Em nome de Jesus, amém!',
    story: {
      title: 'A Alvorada da Ressurreição no Jardim',
      chapter: 'Lucas 24:1-12 e João 20:1-18',
      summary: 'Ao raiar do primeiro dia da semana, as santas mulheres e os apóstolos correram ao jardim do túmulo em Jerusalém e encontraram a pedra removida, os lençóis de linho dobrados e o anúncio celestial de que o Cordeiro que fora morto agora reina vivo para sempre.',
      historicalContext: 'Em Jerusalém, sob ocupação romana do século I, um selo imperial e uma guarda de soldados foram postos no sepulcro esculpido em rocha doada por José de Arimatéia. O romper daquele selo marcou a maior reviravolta de toda a história humana.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
      alt: 'Luz dourada da alvorada entrando no sepulcro no jardim em Jerusalém',
      caption: 'A luz triunfal da manhã da ressurreição no monte em Jerusalém: a vitória do amor sobre o poder da morte.',
      biblicalLocation: 'Jardim do Sepulcro, arredores das muralhas de Jerusalém'
    },
    video: {
      youtubeId: 'tSjPIVXtHsg',
      embedUrl: 'https://www.youtube-nocookie.com/embed/tSjPIVXtHsg?rel=0&modestbranding=1',
      title: 'Lucas 24: A Ressurreição de Jesus',
      duration: '5:05 min',
      summary: 'Animação teológica oficial retratando como a ressurreição corporal de Jesus inaugura a nova criação e transforma o medo humano em ousadia de fé.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'חַיִּים',
        transliteration: 'Chayyim',
        meaning: 'Vida em plenitude, sopro perene de Deus (no plural majestático de intensidade)',
        strongNumber: 'H2416',
        theologicalDepth: 'No Antigo Testamento, a vida não é mera respiração biológica, mas a comunhão dinâmica com o Deus vivo (Elohim Chayyim). Ter Chayyim é estar conectado à fonte divina que nunca seca.'
      },
      aramaic: {
        originalScript: 'קוּם',
        transliteration: 'Qum (Talitha Qumi)',
        meaning: 'Levanta-te! Ergue-te em poder e dignidade real',
        theologicalDepth: 'Aramaico falado por Jesus: o verbo do despertar soberano. O mesmo mandamento com que Cristo ressuscitou a filha de Jairo e Lázaro é sussurrado hoje sobre sua alma adormecida pelo cansaço.'
      },
      greek: {
        originalScript: 'Ζωὴ αἰώνιος',
        transliteration: 'Zōē Aiōnios',
        meaning: 'Vida incriada, divina, indissolúvel e eterna pertencente ao próprio Deus',
        strongNumber: 'G2222',
        theologicalDepth: 'Diferente de Bios (existência biológica terrena) e Psuchē (vida da mente e das emoções), Zōē é a vida sobrenatural injetada pelo Espírito no momento da regeneração.'
      },
      latin: {
        originalScript: 'Resurrectio et Vita',
        transliteration: 'Resurrectio et Vita',
        meaning: 'Ressurreição e Vida Triunfal (Vulgata Latina, Jo 11:25)',
        theologicalDepth: 'Expressão clássica usada por Jerônimo na Vulgata Latina: a garantia irrevogável de que em Cristo o crente já cruzou da morte para a vida (transiit a morte in vitam).'
      }
    }
  },

  // 1 = SEGUNDA-FEIRA
  {
    id: 'mcp-segunda',
    dayOfWeek: 1,
    dayOfWeekName: 'Segunda-feira',
    dayTheme: 'Início da Semana & Alívio do Cansaço',
    dayOfYear: 270,
    dateDisplay: 'Segunda-feira • O Jugo Leve',
    title: 'Você Não Precisa Carregar o Peso do Mundo Sozinho',
    subtitle: 'Puxe uma cadeira, tome seu café em paz e ouça a voz Daquele que mais te ama antes de iniciar a semana.',
    scriptureRef: 'Mateus 11:28-30 / Isaías 40:29-31',
    verseText: 'Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei. Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração.',
    readingTime: '3 min de comunhão',
    fatherMessage: [
      'Meu filho, antes de você abrir as notificações frenéticas, responder às cobranças ou correr para os compromissos desta segunda-feira, Eu preparei este momento reservado só para nós dois.',
      'Eu sei o quanto você se esforça para ser forte, para manter tudo sob controle e para não desapontar ninguém. Muitas vezes você chega ao início da semana já se sentindo exausto por antecipação.',
      'Mas preste atenção: a força para a sua jornada não vem do acúmulo da sua ansiedade, vem da profundidade do seu descanso em Mim. O meu jugo não esmaga; ele ajusta o seu passo ao meu ritmo de graça.',
      'Deixe o fardo pesado aos meus pés nesta manhã. Comece esta semana sabendo que você não é escravo das circunstâncias; você é meu filho amado, e o Pai vai adiante de ti abrindo o caminho.'
    ],
    keyOfTheDay: 'Sempre que o ritmo acelerado tentar disparar a ansiedade no seu peito hoje, feche os olhos por 20 segundos e ore: "O Pai está cuidando de tudo, eu escolho o jugo suave de Cristo."',
    tablePrayer: 'Pai de amor, entrego esta nova semana em Tuas mãos fiéis. Renuncio à ilusão de que preciso controlar tudo sozinho. Recebo o Teu descanso sagrado, a Tua sabedoria para as minhas decisões no trabalho e a Tua proteção sobre os meus passos. Caminho hoje debaixo da Tua graça abundante. Amém!',
    story: {
      title: 'O Jugo Suave nas Colinas da Galiléia',
      chapter: 'Mateus 11:25-30 e Salmo 23',
      summary: 'Em meio ao povo esgotado sob os pesados fardos impostos pela religiosidade farisaica e pela opressão tributária de Roma, Jesus se ergue nas colinas ensolaradas de Cafarnaum e faz o convite mais terno e revolucionário da história: um jugo feito sob medida que ensina a descansar a alma.',
      historicalContext: 'Na Galiléia agrícola, o jugo era talhado em madeira macia sob medida para o pescoço do boi jovem, atrelado a um boi veterano mais forte que suportava 90% da carga. Jesus é o parceiro forte que puxa o fardo da vida por nós.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80',
      alt: 'O Bom Pastor nas pastagens verdes ao amanhecer junto a águas tranquilas',
      caption: 'Nas pastagens verdes da Judéia: o Bom Pastor que não nos empurra com pressa, mas nos conduz com ternura.',
      biblicalLocation: 'Pastagens verdes e vales nas encostas da Galiléia'
    },
    video: {
      youtubeId: 'VskOdIySJQI',
      embedUrl: 'https://www.youtube-nocookie.com/embed/VskOdIySJQI?rel=0&modestbranding=1',
      title: 'Mateus 1-13: O Jugo Leve e o Descanso da Alma',
      duration: '5:15 min',
      summary: 'Uma explicação visual profunda sobre como a mansidão e humildade de Jesus transformam a rotina de trabalho e libertam o coração do esgotamento emocional.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'מְנוּחָה',
        transliteration: 'Menuchah',
        meaning: 'Repouso da alma, tranquilidade sagrada que restaura a dignidade da criação',
        strongNumber: 'H4496',
        theologicalDepth: 'Descanso em Deus não é mera inatividade física, mas Menuchah: um estado sereno onde o coração sabe que tudo está seguro debaixo da soberania do Altíssimo.'
      },
      aramaic: {
        originalScript: 'אַבָּא',
        transliteration: 'Abba',
        meaning: 'Meu Papai querido, expressão de extrema intimidade, dependência e amor filial',
        theologicalDepth: 'O termo carinhoso usado na infância semítica com o qual Jesus se dirigia ao Criador e nos ensinou a clamar (Rm 8:15). Em Abba, todo o fardo da oração formal dá lugar à conversa filial.'
      },
      greek: {
        originalScript: 'Ἀνάπαυσις',
        transliteration: 'Anapausis',
        meaning: 'Refrigério, pausa restauradora concedida de graça para refazer as forças',
        strongNumber: 'G372',
        theologicalDepth: 'No grego militar e clássico, Anapausis era a parada que o comandante ordenava ao exército exausto para que bebesse água limpa e recuperasse o vigor para triunfar.'
      },
      latin: {
        originalScript: 'Coram Deo / Requies',
        transliteration: 'Coram Deo',
        meaning: 'Viver continuamente na presença do Pai celestial sob o Seu olhar paterno',
        theologicalDepth: 'Princípio patrístico e reformado: quando vivemos Coram Deo (face a face com Deus), os aplausos e os medos humanos perdem o poder sobre a nossa alma.'
      }
    }
  },

  // 2 = TERÇA-FEIRA
  {
    id: 'mcp-terca',
    dayOfWeek: 2,
    dayOfWeekName: 'Terça-feira',
    dayTheme: 'Paz Interior & Vitória nas Tempestades',
    dayOfYear: 271,
    dateDisplay: 'Terça-feira • Paz na Tempestade',
    title: 'Paz em Meio ao Mar Revolto: Ele Manda no Vento',
    subtitle: 'Quando as ondas parecerem altas demais para o seu barco, lembre-se de Quem está na popa contigo.',
    scriptureRef: 'Marcos 4:39-40 / Salmo 107:29',
    verseText: 'E ele, despertando, repreendeu o vento e disse ao mar: Aquieta-te, emudece! O vento cessou, e fez-se grande bonança.',
    readingTime: '3 min de comunhão',
    fatherMessage: [
      'Filho amado, as tempestades da vida têm o hábito de surgir de repente, sem pedir licença e sem aviso prévio na previsão do tempo.',
      'Uma notícia inesperada, um conflito na família ou uma preocupação com o futuro podem agitar o mar do seu coração num piscar de olhos, fazendo você pensar: "Será que Deus Se esqueceu de mim?".',
      'Olhe para o barco dos discípulos naquela noite no Mar da Galiléia: as ondas cobriam a embarcação, mas o Criador do universo estava ali dentro. E enquanto Ele estiver no seu barco, nenhuma tempestade tem poder de afundar a sua vida!',
      'Não meça a intensidade da proteção de Deus pela calmaria lá fora; meça-a pela autoridade de Jesus sobre o vento. Ele já se levantou no seu favor e a ordem já foi dada: Aquieta-te!'
    ],
    keyOfTheDay: 'Não dê aos seus problemas o poder de definir a sua paz. Diante de qualquer turbulência hoje, profira a paz de Cristo com calma e autoridade.',
    tablePrayer: 'Senhor Jesus, Mestre do vento e do mar, Tu és a âncora da minha alma. Quando os pensamentos tentarem criar ondas de pavor dentro de mim, coloco meus olhos na Tua soberania. Acalma as tempestades que enfrento hoje e guarda a minha casa debaixo da Tua perfeita paz. Em Teu nome eu descanso. Amém!',
    story: {
      title: 'A Tempestade Noturna no Lago de Genesaré',
      chapter: 'Marcos 4:35-41 e Lucas 8:22-25',
      summary: 'Ao anoitecer, ventos canalizados pelas ravinas dos Montes de Golã açoitaram repentinamente as águas do Mar da Galiléia. Os pescadores experientes se desesperaram, mas Jesus, despertado do sono na popa, repreendeu o vento e transformou o caos numa calmaria de vidro.',
      historicalContext: 'O Mar da Galiléia (Lago Kinneret) fica a mais de 200 metros abaixo do nível do mar, cercado por desfiladeiros montanhosos que provocam violentas tempestades súbitas. No pensamento judaico, as águas turbulentas simbolizavam o caos primitivo, sobre o qual somente o Messias detinha autoridade divina.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Mar majestoso e horizonte iluminado após a tempestade acalmada',
      caption: 'A serenidade que sucede a ordem do Mestre no Mar da Galiléia: a autoridade de Cristo sobre todo vento contrário.',
      biblicalLocation: 'Mar da Galiléia (Lago de Genesaré), Israel'
    },
    video: {
      youtubeId: '7d359aPNpPQ',
      embedUrl: 'https://www.youtube-nocookie.com/embed/7d359aPNpPQ?rel=0&modestbranding=1',
      title: 'O Evangelho de Marcos: Jesus e o Mar da Galiléia',
      duration: '5:12 min',
      summary: 'Explore a narrativa do Evangelho de Marcos quando Jesus manifesta Sua divindade ordenando que os ventos e as ondas do mar calem a sua fúria.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'שָׁלוֹם',
        transliteration: 'Shalom',
        meaning: 'Plenitude de harmonia, integridade, restauração onde nada falta e nada está partido',
        strongNumber: 'H7965',
        theologicalDepth: 'Shalom não é mera ausência de guerra ou de ruído; é a presença ativa e reorganizadora de Deus preenchendo todos os vazios e sarando todas as rupturas.'
      },
      aramaic: {
        originalScript: 'שְׁלָמָא',
        transliteration: 'Shlama',
        meaning: 'A paz celestial com poder para desarrolhar e desarmar o terror do coração humano',
        theologicalDepth: 'A saudação viva que Jesus usou ao entrar no cenáculo fechado por medo dos judeus: Shlama lekhon (A paz seja convosco!), dissipando instantaneamente toda apreensão.'
      },
      greek: {
        originalScript: 'Γαλήνη',
        transliteration: 'Galēnē',
        meaning: 'Grande bonança, calmaria espelhada, serenidade cristalina no mar e na mente',
        strongNumber: 'G1055',
        theologicalDepth: 'O termo usado em Marcos 4:39 denota a calmaria sobrenatural que se instala sem tempo de transição: de um mar enfurecido para uma superfície de vidro absoluto ao comando da voz do Criador.'
      },
      latin: {
        originalScript: 'Pax Domini',
        transliteration: 'Pax Domini',
        meaning: 'A Paz do Senhor que transcende e protege o coração dos crentes (Fp 4:7)',
        theologicalDepth: 'Conceito litúrgico e teológico antigo: uma paz que não depende de tratados humanos ou de circunstâncias favoráveis, mas da presença residente de Cristo.'
      }
    }
  },

  // 3 = QUARTA-FEIRA
  {
    id: 'mcp-quarta',
    dayOfWeek: 3,
    dayOfWeekName: 'Quarta-feira',
    dayTheme: 'Perdão, Graça Incondicional & Restauração',
    dayOfYear: 272,
    dateDisplay: 'Quarta-feira • O Abraço da Graça',
    title: 'O Abraço que Apaga o Passado: O Pai Corre ao Seu Encontro',
    subtitle: 'Você não precisa rastejar de volta com discursos de culpa; o Pai já avistou seus passos de longe.',
    scriptureRef: 'Lucas 15:20-24 / Miqueias 7:18-19',
    verseText: 'E, levantando-se, foi para seu pai. Vinha ele ainda longe, quando seu pai o avistou, e, compadecido dele, correndo, o abraçou e beijou ternamente.',
    readingTime: '4 min de comunhão',
    fatherMessage: [
      'Meu querido filho, quantas vezes a voz acusadora da culpa tenta te convencer de que você falhou demais, que perdeu a oportunidade ou que Deus se cansou da sua fraqueza?',
      'Eu quero que você olhe com atenção para a estrada daquela parábola: o rapaz vinha sujo da lama dos porcos, com o coração partido e ensaiando uma frase de servo merecedor de castigo.',
      'Mas o que o Pai fez? O Pai não esperou de braços cruzados na varanda para cobrar explicações. O Pai quebrou todo o protocolo oriental, levantou suas vestes e correu pela poeira da estrada para abraçá-lo antes mesmo de qualquer justificativa!',
      'O meu abraço é o lugar onde todo o peso do passado se dissolve. A melhor túnica de honra já foi separada para você. Você é filho, e a minha mesa tem o seu nome gravado com sangue precioso.'
    ],
    keyOfTheDay: 'Livre-se de todo sentimento de rejeição ou autocrítica destrutiva. Receba o abraço gracioso do Pai e trate a si mesmo e aos outros com a mesma generosidade.',
    tablePrayer: 'Aba Pai amado, obrigado por Teu amor extravagante que não me mede pelos meus tropeços, mas pelo valor eterno que me deste na cruz. Despindo-me das vestes de escravo e culpa, recebo a Tua túnica de filho e a Tua comunhão restauradora. Caminho em liberdade e alegria diante de Ti. Amém!',
    story: {
      title: 'A Parábola do Filho Pródigo e o Pai que Corre',
      chapter: 'Lucas 15:11-32',
      summary: 'Após desperdiçar todos os seus bens em uma terra distante e terminar no fundo do poço entre animais impuros, o jovem decide voltar para a casa paterna. Surpreendentemente, é o pai amoroso quem corre até ele com lágrimas de regozijo, restaurando seu anel, sandálias e dignidade real.',
      historicalContext: 'Na cultura semítica do Oriente Próximo antigo, era considerado humilhante e impensável para um patriarca respeitável arregaçar a túnica e correr na praça pública. O gesto do pai retrata Deus assumindo nossa vergonha pública para nos cobrir de glória e honra.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
      alt: 'O reencontro afetuoso ao entardecer sob luz acolhedora e calorosa',
      caption: 'A essência do Evangelho de Lucas: a graça que corre apressada para acolher o peregrino fatigado.',
      biblicalLocation: 'Estrada de retorno para a propriedade paterna na Judéia'
    },
    video: {
      youtubeId: 'UeUAAAs7hec',
      embedUrl: 'https://www.youtube-nocookie.com/embed/UeUAAAs7hec?rel=0&modestbranding=1',
      title: 'Lucas 10-24: O Amor Extravagante do Pai',
      duration: '5:35 min',
      summary: 'Uma jornada emocionante pela teologia do Evangelho de Lucas e a parábola do Filho Pródigo, demonstrando a celebração da graça.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'חֶסֶד',
        transliteration: 'Chesed',
        meaning: 'Amor fiel da aliança, misericórdia inabalável que nunca desiste do seu objeto amado',
        strongNumber: 'H2617',
        theologicalDepth: 'Chesed é o atributo central de Deus no Antigo Testamento. É a graça leal que permanece firme mesmo quando a outra parte quebra os termos do pacto.'
      },
      aramaic: {
        originalScript: 'רַחֲמִין',
        transliteration: 'Rachamin',
        meaning: 'Compaixão profunda brotada do íntimo das entranhas maternais/paternais',
        theologicalDepth: 'Ligado à raiz de réchem (útero). É o amor protetor, gerador e aconchegante que se comove fisicamente diante do sofrimento de um filho desamparado.'
      },
      greek: {
        originalScript: 'Σπλαγχνίζομαι',
        transliteration: 'Splagchnizomai',
        meaning: 'Ser movido por compaixão profunda até as próprias entranhas vitais',
        strongNumber: 'G4697',
        theologicalDepth: 'Verbo grego reservado nos Evangelhos quase exclusivamente para as ações de Jesus e para o Pai da parábola. Uma comoção que impele imediatamente a um ato prático de socorro.'
      },
      latin: {
        originalScript: 'Misericordia',
        transliteration: 'Misericordia',
        meaning: 'Compaixão redentora: dar o coração ao miserável (Miseri-cor-dare)',
        theologicalDepth: 'Definição clássica de Santo Agostinho: a misericórdia de Deus não é condescendência fria, mas a inclinação voluntária do Coração Santo em direção à dor humana.'
      }
    }
  },

  // 4 = QUINTA-FEIRA
  {
    id: 'mcp-quinta',
    dayOfWeek: 4,
    dayOfWeekName: 'Quinta-feira',
    dayTheme: 'Fidelidade nas Provações & O Quarto Homem',
    dayOfYear: 273,
    dateDisplay: 'Quinta-feira • O Quarto Homem',
    title: 'O Quarto Homem na Fornalha: Você Nunca Anda no Fogo Sozinho',
    subtitle: 'As chamas podem parecer quentes, mas elas só têm poder para queimar as cordas que te amarravam.',
    scriptureRef: 'Daniel 3:24-25 / Isaías 43:2',
    verseText: 'Quando passares pelas águas, estarei contigo, e, quando pelos rios, eles não te submergirão; quando passares pelo fogo, não te queimarás, nem a chama arderá em ti.',
    readingTime: '4 min de comunhão',
    fatherMessage: [
      'Meu filho, talvez esta semana tenha colocado você diante de provações que parecem insuportáveis, como uma fornalha de pressões financeiras, emocionais ou de saúde.',
      'O rei Nabucodonosor mandou aquecer a fornalha sete vezes mais para intimidar Sadraque, Mesaque e Abednego. Mas ele não sabia que a intensidade do fogo não altera a fidelidade do Deus Todo-Poderoso.',
      'Quando aqueles jovens caíram amarrados nas chamas, algo miraculoso aconteceu: o fogo não queimou um fio de cabelo deles, apenas consumiu as correntes que os prendiam! E quando o rei olhou pasmo, viu quatro homens passeando soltos.',
      'Escute o meu sussurro ao seu coração hoje: Eu não prometi que você nunca enfrentaria a fornalha, mas Eu jurei com a minha própria vida que Eu entraria nela com você! Eu sou o Quarto Homem ao seu lado. As chamas não vão te destruir; elas vão apenas revelar a minha glória através de ti.'
    ],
    keyOfTheDay: 'Não se curve diante das pressões do mundo. Permaneça firme nos seus princípios de integridade e fé, pois o Quarto Homem está guardando os seus passos.',
    tablePrayer: 'Deus de Daniel, de Sadraque, Mesaque e Abednego, Tu és o mesmo ontem, hoje e eternamente. Quando a fornalha das provações tentar me atemorizar, lembro-me de que o Teu Filho caminha comigo. Nada que o inimigo tramou prevalecerá contra a minha vida. Sairei desta prova livre de todas as correntes e aprovado pela Tua graça. Em nome de Jesus, amém!',
    story: {
      title: 'A Fornalha Ardente da Babilônia e a Cristofania',
      chapter: 'Daniel 3:1-30 e Isaías 43:1-7',
      summary: 'Na planície de Dura na Babilônia, três jovens hebreus se recusam a se prostrar diante da estátua de ouro de 30 metros. Lançados atados na fornalha aquecida ao extremo, caminham incólumes ao lado de uma presença divina misteriosa com aspecto de Filho de Deus.',
      historicalContext: 'Fornalhas industriais de tijolos e fundição de metais da Babilônia do século VI a.C. alcançavam temperaturas brutais com uso de óleo de nafta. O quarto homem contemplado por Nabucodonosor é considerado pelos teólogos como uma Cristofania: a manifestação pré-encarnada do Senhor Jesus protegendo Seus servos.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
      alt: 'Presença resplandecente e luz gloriosa em meio ao fogo consumidor',
      caption: 'A manifestação da presença divina na planície de Dura: o Quarto Homem que transforma o fogo da prova em passeio triunfal.',
      biblicalLocation: 'Planície de Dura, antiga Babilônia (atual Iraque)'
    },
    video: {
      youtubeId: 'pfsmbv0L0bo',
      embedUrl: 'https://www.youtube-nocookie.com/embed/pfsmbv0L0bo?rel=0&modestbranding=1',
      title: 'Daniel: A Fidelidade dos Jovens na Fornalha',
      duration: '6:15 min',
      summary: 'Entenda como o livro de Daniel revela a soberania inabalável de Deus acima de todos os impérios terrenos e a proteção aos Seus fiéis na hora da prova.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'יַהְוֶה שָׁמָּה',
        transliteration: 'Yahweh Shammah',
        meaning: 'O Senhor Está Ali: Presença constante e ativa que nunca se ausenta',
        strongNumber: 'H3074',
        theologicalDepth: 'Revelado pelo profeta Ezequiel (48:35): Deus não é uma divindade distante observando do espaço sideral; Ele é Yahweh Shammah, Aquele que está no meio da sua aflição.'
      },
      aramaic: {
        originalScript: 'בַּר אֱלָהִין',
        transliteration: 'Bar Elahin',
        meaning: 'Semelhante ao Filho de Deus / Ser de majestade e natureza divina sobrenatural',
        theologicalDepth: 'A exclamação estarrecida de Nabucodonosor registrada no hebraico/aramaico do livro de Daniel (3:25), prenunciando a presença encarnada de Cristo como o Redentor que entra no sofrimento humano.'
      },
      greek: {
        originalScript: 'Ἐμμανουήל',
        transliteration: 'Emmanouēl',
        meaning: 'Deus Conosco: a aproximação definitiva do Criador com a Sua criatura',
        strongNumber: 'G1694',
        theologicalDepth: 'Cumprimento da promessa profética de Isaías em Mateus 1:23: Deus não nos envia conselhos à distância, Ele se faz Emanuel e habita em nossa realidade de fraqueza.'
      },
      latin: {
        originalScript: 'Deus Praesens',
        transliteration: 'Deus Praesens',
        meaning: 'Deus Presente e Providente em todas as circunstâncias da jornada',
        theologicalDepth: 'Conceito da dogmática clássica: a Onipresença relacional de Deus, que não apenas preenche o universo, mas cuida afetuosamente dos Seus eleitos em cada instante.'
      }
    }
  },

  // 5 = SEXTA-FEIRA
  {
    id: 'mcp-sexta',
    dayOfWeek: 5,
    dayOfWeekName: 'Sexta-feira',
    dayTheme: 'Silêncio de Deus & O Sussurro da Graça',
    dayOfYear: 274,
    dateDisplay: 'Sexta-feira • A Voz Mansa',
    title: 'Depois do Vento e do Fogo: A Voz Suave que Alinha Seu Destino',
    subtitle: 'Deus não precisa de gritos espalhafatosos para te guiar; o sussurro do Pai é mais potente que qualquer tempestade.',
    scriptureRef: '1 Reis 19:11-13 / Salmo 46:10',
    verseText: 'E depois do terremoto, um fogo; porém o Senhor não estava no fogo; e depois do fogo, uma voz mansa e delicada.',
    readingTime: '3 min de comunhão',
    fatherMessage: [
      'Filho, nesta sexta-feira, desacelere a velocidade dos seus pensamentos. O mundo lá fora é ruidoso, frenético e vive exigindo atenção com alarmes, cobranças e urgências fictícias.',
      'O profeta Elias estava exausto debaixo do zimbro no deserto. Ele havia visto fogo cair do céu no Carmelo, mas agora sentia-se sozinho, desiludido e com vontade de desistir da própria missão.',
      'Sabe o que Eu fiz primeiro? Não dei um sermão a ele. Mandei um anjo assar um pão quentinho, servi uma botija de água fresca e ordenei que ele dormisse para recuperar as forças!',
      'E quando ele subiu ao Monte Horebe esperando ver Deus no vento impetuoso, no terremoto ou no fogo, Eu me revelei no sussurro suave de uma brisa leve. É no silêncio da oração secreta que Eu realinho a sua visão e renovo o seu propósito.'
    ],
    keyOfTheDay: 'Dedique pelo menos 10 minutos hoje para ficar em completo silêncio diante de Deus, desligando telas e notificações, apenas desfrutando da companhia Dele.',
    tablePrayer: 'Pai do céu, ensina-me a calar o barulho ensurdecedor deste mundo para ouvir o Teu sussurro de amor e discernimento. Perdoa-me pelas vezes em que me precipitei por ansiedade. Descanso na certeza de que Tu estás cuidando das minhas necessidades físicas e espirituais. Fala com o Teu servo, pois estou ouvindo. Amém!',
    story: {
      title: 'Elias na Fenda da Rocha no Monte Horebe',
      chapter: '1 Reis 19:1-18',
      summary: 'Após o confronto triunfal no Monte Carmelo e a perseguição de Jezabel, o profeta Elias entra em profundo esgotamento emocional no deserto de Berseba. Alimentado por anjos, viaja 40 dias até a caverna do Monte Sinai/Horebe, onde descobre que a maior manifestação de Deus não é o espetáculo do caos, mas a intimidade da voz mansa.',
      historicalContext: 'O Monte Horebe (mesmo Monte Sinai onde Moisés recebeu os Dez Mandamentos) é um maciço rochoso íngreme e silencioso na península do Sinai. Deus levou Elias de volta às origens da aliança de Israel para curar seu coração ferido.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      alt: 'Montanhas imponentes envoltas pela névoa suave e luz serena da manhã',
      caption: 'A majestade tranquila do Monte Horebe: o santuário onde a voz mansa de Deus cura o profeta ferido.',
      biblicalLocation: 'Monte Horebe / Sinai, Península do Sinai'
    },
    video: {
      youtubeId: '6R5wFQWFDL4',
      embedUrl: 'https://www.youtube-nocookie.com/embed/6R5wFQWFDL4?rel=0&modestbranding=1',
      title: '1-2 Reis: Elias e a Voz Mansa de Deus',
      duration: '5:48 min',
      summary: 'Uma reflexão animada profunda sobre saúde emocional, restauração pastoral e como Deus cuida dos Seus servos nos momentos de deserto e crise.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'קוֹל דְּמָמָה דַקָּה',
        transliteration: 'Qol Demamah Daqqah',
        meaning: 'Um som de silêncio delicado, sussurro mansa brisa, quietude audível',
        strongNumber: 'H1827',
        theologicalDepth: 'Expressão hebraica de riqueza poética inigualável: Demamah denota a calmaria absoluta que sucede uma tempestade, e Daqqah algo sutil como uma pétala. Deus falando na mais íntima ternura.'
      },
      aramaic: {
        originalScript: 'קָלָא דִּשְׁתִיקָא',
        transliteration: 'Qala Dishtika',
        meaning: 'A voz silenciosa que ecoa no mais profundo do espírito',
        theologicalDepth: 'Nos Targuns aramaicos (traduções aramaicas do Tanakh), esta expressão salienta a transcendência de Deus que penetra a consciência humana sem necessidade de espavento carnal.'
      },
      greek: {
        originalScript: 'Πνεῦμα ἅγιον / Ἡσυχία',
        transliteration: 'Pneuma Hagion / Hesychia',
        meaning: 'O Espírito Santo consolador e a quietude interior de repouso na alma',
        strongNumber: 'G2271',
        theologicalDepth: 'Hesychia denota a quietude santa da alma que aprendeu a descansar em Cristo, permitindo que a voz do Parakletos (Espírito Consolador) traga iluminação e direção clara.'
      },
      latin: {
        originalScript: 'Aura Lenis',
        transliteration: 'Aura Lenis',
        meaning: 'A brisa suave e reconfortante da graça celestial (Vulgata Latina, 1 Rs 19:12)',
        theologicalDepth: 'Traduzido por São Jerônimo: a Aura Lenis que sopra sobre o viajante cansado, lembrando que o Senhor opera com máxima eficácia nas coisas simples e humildes.'
      }
    }
  },

  // 6 = SÁBADO
  {
    id: 'mcp-sabado',
    dayOfWeek: 6,
    dayOfWeekName: 'Sábado',
    dayTheme: 'O Descanso Sagrado & Esconderijo do Altíssimo',
    dayOfYear: 275,
    dateDisplay: 'Sábado • O Santo Repouso',
    title: 'O Descanso no Esconderijo do Altíssimo: Sob a Sombra do Onipotente',
    subtitle: 'Desacelere, contemple a fidelidade de Deus nesta semana que finda e renove sua alma para um novo ciclo.',
    scriptureRef: 'Salmo 91:1-4 / Gênesis 2:2-3',
    verseText: 'O que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente diz ao Senhor: Meu refúgio e meu baluarte, Deus meu, em quem confio.',
    readingTime: '3 min de comunhão',
    fatherMessage: [
      'Meu filho, chegamos ao final de mais uma semana. Olhe para trás por um instante e veja quantas vezes a minha mão invisível livrou os seus pés do laço e guardou a sua integridade.',
      'Você trabalhou, lutou, resolveu problemas e enfrentou desafios. Mas agora, Eu quero que você se desfaça das ferramentas de trabalho e venha desfrutar do Shabat da minha comunhão.',
      'Quando Eu criei os céus e a terra, no sétimo dia Eu cessei a obra e contemplei com alegria aquilo que havia sido feito. O sábado foi criado por amor a você, para que o seu coração se lembre de que o mundo continua girando porque Eu o sustento, e não pela sua labuta incessante.',
      'Entre no esconderijo da minha presença. Esconda-se debaixo das minhas asas protetoras. Você está seguro, a sua família está guardada e a minha bondade e misericórdia certamente te seguirão por todos os dias da sua vida.'
    ],
    keyOfTheDay: 'Agradeça por 5 bênçãos específicas que Deus concedeu à sua vida durante esta semana. Celebre a comunhão em família com um momento de louvor e descanso.',
    tablePrayer: 'Senhor Altíssimo, meu refúgio e fortaleza inabalável, consagro a Ti o término desta semana com o coração transbordando de gratidão. Nenhum mal me alcançou porque Tu deste ordens aos Teus anjos a meu respeito. Abençoa o meu repouso e a minha família. Prepara a minha alma para te adorar com os santos e começar um novo ciclo vitorioso. Amém!',
    story: {
      title: 'A Santificação do Tempo e o Salmo da Segurança Eterna',
      chapter: 'Gênesis 2:1-3 e Salmo 91:1-16',
      summary: 'Ao concluir a criação do cosmos, o próprio Deus abençoou e santificou o repouso sabático, ensinando ao ser humano que a vida não é definida apenas pela produção econômica, mas pela contemplação festiva da bondade do Criador sob o abrigo seguro das Suas asas.',
      historicalContext: 'No mundo antigo pagão do Oriente Próximo, nenhum império ou religião concedia dia de descanso aos trabalhadores ou escravos; o ser humano era visto como máquina de trabalho. A revelação bíblica do Shabat e do refúgio divino libertou a humanidade da escravidão da produtividade sem alma.'
    },
    image: {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cenário sereno de lago calmo e montanhas no repouso do entardecer',
      caption: 'A paz da criação em contemplação ao Criador: o esconderijo do Altíssimo que abriga os corações fiéis.',
      biblicalLocation: 'Paisagem contemplativa das colinas e fontes de Ein Gedi no Mar Morto'
    },
    video: {
      youtubeId: 'WwokgNSOWuI',
      embedUrl: 'https://www.youtube-nocookie.com/embed/WwokgNSOWuI?rel=0&modestbranding=1',
      title: 'Sábado: O Descanso Sagrado e a Redenção do Tempo',
      duration: '5:20 min',
      summary: 'Descubra a teologia milenar do descanso bíblico: como o Shabat aponta para a libertação final e para a segurança eterna em Deus.',
      sourceName: 'The Bible Project (Português)'
    },
    linguisticRoots: {
      hebrew: {
        originalScript: 'שַׁבָּת',
        transliteration: 'Shabbat',
        meaning: 'Cessar, pausar a labuta, respirar com liberdade sagrada, consagrar o tempo',
        strongNumber: 'H7673',
        theologicalDepth: 'Shabbat é um monumento arquitetado no tempo e não no espaço. Cessar não é perder tempo; é reconhecer a suficiência de Deus que tudo provê aos Seus amados.'
      },
      aramaic: {
        originalScript: 'שְׁכִינְתָּא',
        transliteration: 'Shekinah',
        meaning: 'A presença gloriosa e acolhedora de Deus habitando no meio de Seus filhos',
        theologicalDepth: 'Do verbo shakan (habitar em tenda). Refere-se à nuvem da glória de Deus que pairava sobre o Tabernáculo, transformando qualquer deserto árido em refúgio santo.'
      },
      greek: {
        originalScript: 'Σαββατισμός',
        transliteration: 'Sabbatismos',
        meaning: 'O repouso sabático eterno e inabalável que permanece para o povo de Deus',
        strongNumber: 'G4520',
        theologicalDepth: 'Usado em Hebreus 4:9 para definir a salvação por graça: descansar das próprias obras autojustificatórias e deleitar-se na obra completa consumada por Cristo.'
      },
      latin: {
        originalScript: 'Sabbatum Sanctum',
        transliteration: 'Sabbatum Sanctum',
        meaning: 'O descanso santificado e consagrado ao louvor e à adoração do Criador',
        theologicalDepth: 'Na patrística cristã (Agostinho e Gregório Magno), o repouso é a antecipação da bem-aventurança eterna, onde a alma contempla a Deus face a face sem cansaço.'
      }
    }
  }
];

/**
 * Retorna o devocional correspondente ao dia da semana de hoje (0 a 6)
 */
export function getTodayDevotional(): MomentoComOPaiDevocional {
  const currentDayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
  const found = MOMENTO_COM_O_PAI_LIST.find((item) => item.dayOfWeek === currentDayOfWeek);
  return found || MOMENTO_COM_O_PAI_LIST[0];
}

/**
 * Retorna o devocional por índice de dia da semana (0 a 6)
 */
export function getDevotionalByDayOfWeek(dayOfWeek: number): MomentoComOPaiDevocional {
  const found = MOMENTO_COM_O_PAI_LIST.find((item) => item.dayOfWeek === dayOfWeek);
  return found || MOMENTO_COM_O_PAI_LIST[0];
}

