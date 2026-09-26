export interface ChristLifeEvent {
  id: string;
  stage: 'nascimento' | 'preparacao' | 'ministerio' | 'ultima_semana' | 'ressurreicao';
  stageTitle: string;
  title: string;
  location: string;
  periodApprox: string;
  biblicalReferences: {
    gospel: string;
    passages: string;
  }[];
  summary: string;
  detailedNarrative: string;
  theologicalSignificance: string;
  wesleyanInsight?: string;
  precision: 'explicit' | 'inference' | 'theological';
}

export interface ChristTimelineStep {
  id: string;
  order: number;
  period: string;
  stageName: string;
  title: string;
  keyPassage: string;
  summary: string;
  badgeColor: string;
}

export const CHRIST_TIMELINE_STEPS: ChristTimelineStep[] = [
  {
    id: 'tl-nascimento',
    order: 1,
    period: 'c. 5–4 a.C.',
    stageName: 'Nascimento & Genealogia',
    title: 'A Encarnação e o Nascimento em Belém',
    keyPassage: 'Lucas 2:1-20 / Mateus 1:18-25',
    summary: 'O Verbo se fez carne: anúncio a Maria e José, nascimento virginal na manjedoura em Belém da Judeia e louvor dos anjos aos pastores.',
    badgeColor: 'border-amber-500 bg-amber-500/10 text-amber-500'
  },
  {
    id: 'tl-infancia',
    order: 2,
    period: 'c. 4 a.C. – 8 d.C.',
    stageName: 'Infância & Juventude',
    title: 'Fuga para o Egito, Nazaré e o Templo aos 12 Anos',
    keyPassage: 'Mateus 2:13-23 / Lucas 2:41-52',
    summary: 'A visita dos magos, fuga e retorno do Egito, crescimento em sabedoria e graça em Nazaré e diálogo com os doutores da Lei no Templo aos doze anos.',
    badgeColor: 'border-amber-600 bg-amber-600/10 text-amber-600'
  },
  {
    id: 'tl-batismo',
    order: 3,
    period: 'c. 26–27 d.C.',
    stageName: 'Início do Ministério',
    title: 'O Batismo no Rio Jordão e a Manifestação Trinitária',
    keyPassage: 'Mateus 3:13-17 / Marcos 1:9-11',
    summary: 'João Batista batiza o Cordeiro de Deus; o Espírito Santo desce em forma de pomba e a voz do Pai proclama: "Este é o meu Filho amado".',
    badgeColor: 'border-sky-500 bg-sky-500/10 text-sky-500'
  },
  {
    id: 'tl-tentacao',
    order: 4,
    period: 'c. 27 d.C.',
    stageName: 'Provação no Deserto',
    title: 'A Vitória sobre a Tentação no Deserto da Judeia',
    keyPassage: 'Mateus 4:1-11 / Lucas 4:1-13',
    summary: 'Quarenta dias de jejum: Jesus repele todas as investidas do diabo empunhando a Palavra de Deus ("Está escrito!").',
    badgeColor: 'border-rose-500 bg-rose-500/10 text-rose-500'
  },
  {
    id: 'tl-discipulos',
    order: 5,
    period: 'c. 27–28 d.C.',
    stageName: 'Vocação dos Primeiros Seguidores',
    title: 'O Chamado dos Primeiros Discípulos e Escolha dos Doze',
    keyPassage: 'João 1:35-51 / Marcos 3:13-19',
    summary: 'André, Pedro, Tiago, João, Filipe e Natanael deixam suas redes: "Segui-me, e eu vos farei pescadores de homens". A instituição dos 12 Apóstolos após uma noite de oração.',
    badgeColor: 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
  },
  {
    id: 'tl-galileia',
    order: 6,
    period: 'c. 28–29 d.C.',
    stageName: 'Ministério na Galileia',
    title: 'O Grande Ministério Galileu: Sermão do Monte e Sinais',
    keyPassage: 'Mateus 5–7 / Marcos 1:14–39',
    summary: 'Base em Cafarnaum; proclamação do Reino de Deus, o Sermão do Monte com as Bem-Aventuranças, curas incontáveis e tempestades acalmadas no Mar da Galileia.',
    badgeColor: 'border-teal-500 bg-teal-500/10 text-teal-500'
  },
  {
    id: 'tl-judeia-samaria',
    order: 7,
    period: 'c. 29–30 d.C.',
    stageName: 'Judeia, Samaria & Pereia',
    title: 'Peregrinações, Diálogo em Sicar e Revelação em Jerusalém',
    keyPassage: 'João 4:1-42 / Lucas 9:51–19:27',
    summary: 'A samaritana no poço de Jacó, a cura do cego de nascença no tanque de Siloé, o Bom Samaritano, o Filho Pródigo e o anúncio de subir a Jerusalém.',
    badgeColor: 'border-indigo-500 bg-indigo-500/10 text-indigo-500'
  },
  {
    id: 'tl-transfiguracao',
    order: 8,
    period: 'c. 29 d.C.',
    stageName: 'Revelação da Glória',
    title: 'A Confissão de Pedro e a Transfiguração no Monte',
    keyPassage: 'Mateus 16:13-20; 17:1-9',
    summary: '"Tu és o Cristo!"; no monte alto, Suas vestes tornam-se alvas como a luz na presença de Moisés e Elias, e a nuvem de glória confirma Sua divindade.',
    badgeColor: 'border-violet-500 bg-violet-500/10 text-violet-500'
  },
  {
    id: 'tl-paixao',
    order: 9,
    period: 'Abril de 30 / 33 d.C. (Semana da Páscoa)',
    stageName: 'A Última Semana',
    title: 'Entrada Triunfal, Última Ceia, Getsêmani e Julgamento',
    keyPassage: 'Marcos 11–14 / João 13–18',
    summary: 'Ramos de palmeira em Jerusalém, purificação do Templo, lava-pés e a Ceia da Nova Aliança, agonia no Getsêmani com suor de sangue e a traição de Judas.',
    badgeColor: 'border-red-600 bg-red-600/10 text-red-600'
  },
  {
    id: 'tl-cruz',
    order: 10,
    period: 'Sexta-feira da Paixão',
    stageName: 'A Crucificação & Morte',
    title: 'O Gólgota, as Sete Palavras e o Sacrifício Vicário',
    keyPassage: 'Mateus 27:32-56 / João 19:16-37',
    summary: 'Cravado na Cruz entre dois malfeitores; perdoa os algozes, salva o ladrão arrependido, clama "Tetélestai" (Está consumado!) e expira, rasgando o véu do Templo.',
    badgeColor: 'border-stone-800 bg-stone-800/10 text-stone-800 dark:text-stone-300'
  },
  {
    id: 'tl-ressurreicao',
    order: 11,
    period: 'Primeiro dia da semana',
    stageName: 'A Ressurreição Gloriosa',
    title: 'O Túmulo Vazio e o Triunfo sobre a Morte',
    keyPassage: 'Mateus 28:1-10 / João 20:1-18',
    summary: 'A pedra removida: Ele não está aqui, ressuscitou! Aparição primeira a Maria Madalena, aos discípulos no caminho de Emaús e aos apóstolos no Cenáculo.',
    badgeColor: 'border-amber-400 bg-amber-400/10 text-amber-400 font-bold'
  },
  {
    id: 'tl-ascensao',
    order: 12,
    period: '40 dias após a Páscoa',
    stageName: 'Grande Comissão & Ascensão',
    title: 'A Grande Comissão e a Elevação ao Céu no Monte das Oliveiras',
    keyPassage: 'Mateus 28:18-20 / Atos 1:6-11',
    summary: '"Ide por todo o mundo e pregai o evangelho a toda criatura". Cristo sobe aos céus à vista dos discípulos e a promessa angélica de que voltará da mesma maneira.',
    badgeColor: 'border-yellow-500 bg-yellow-500/10 text-yellow-500'
  }
];

export const CHRIST_LIFE_EVENTS: ChristLifeEvent[] = [
  // 1. NASCIMENTO & INFÂNCIA
  {
    id: 'anunciacao',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'A Anunciação a Maria em Nazaré',
    location: 'Nazaré da Galileia',
    periodApprox: 'c. 6–5 a.C.',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 1:26-38' }
    ],
    summary: 'O arcanjo Gabriel é enviado por Deus a uma jovem virgem desposada com José, anunciando a concepção do Messias pelo poder do Espírito Santo.',
    detailedNarrative: 'No sexto mês, o anjo Gabriel foi enviado da parte de Deus a uma cidade da Galileia chamada Nazaré, a uma virgem desposada com um homem cujo nome era José, da casa de Davi; e o nome da virgem era Maria. Entrando o anjo onde ela estava, disse: "Salve, agraciada; o Senhor é contigo". Ela turbou-se, mas o anjo lhe assegurou: "Não temas, Maria, porque achaste graça diante de Deus. E eis que em teu ventre conceberás e darás à luz um filho, e por-lhe-ás o nome de JESUS. Este será grande, e será chamado Filho do Altíssimo; e o Senhor Deus lhe dará o trono de Davi, seu pai; e reinará eternamente na casa de Jacó, e o seu reino não terá fim". Quando Maria perguntou como se faria isso sendo ela virgem, Gabriel revelou: "Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra; por isso também o Santo, que de ti há de nascer, será chamado Filho de Deus". Maria respondeu com submissão sublime: "Eis aqui a serva do Senhor; cumpra-se em mim segundo a tua palavra".',
    theologicalSignificance: 'O milagre fundante da Encarnação: Deus se une de forma definitiva e hipostática à natureza humana no ventre de Maria pelo Espírito Santo, sem intervenção de homem terreno (Isaías 7:14; Gálatas 4:4).',
    wesleyanInsight: 'John Wesley sublinha o consentimento livre e humilde de Maria diante da graça preveniente de Deus: a salvação envolve a graciosa iniciativa divina e a submissão crente do ser humano.',
    precision: 'explicit'
  },
  {
    id: 'nascimento-belem',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'O Nascimento de Jesus em Belém da Judeia',
    location: 'Belém da Judeia (Estalagem / Manjedoura)',
    periodApprox: 'c. 5–4 a.C. (Censo de César Augusto)',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 2:1-7' },
      { gospel: 'Mateus', passages: 'Mateus 1:18-25' }
    ],
    summary: 'José e Maria viajam de Nazaré a Belém por decreto do imperador romano; não havendo lugar na hospedaria, Jesus nasce e é deitado em uma manjedoura.',
    detailedNarrative: 'Por ocasião do censo decretado por César Augusto quando Quirino governava a Síria, José subiu da Galileia, da cidade de Nazaré, à Judeia, à cidade de Davi chamada Belém, por ser da casa e família de Davi, para alistar-se com Maria, sua esposa desposada, que estava grávida. E aconteceu que, estando eles ali, cumpriram-se os dias em que ela havia de dar à luz. E deu à luz o seu filho primogênito, e envolveu-o em panos, e deitou-o numa manjedoura, porque não havia lugar para eles na hospedaria. O Rei dos reis nasceu na mais extrema simplicidade, rodeado por animais e palha, acolhido pelo amor obediente de José e Maria.',
    theologicalSignificance: 'Cumprimento milenar de Miquéias 5:2. O Criador do Universo assume a condição de servo (Kénosis, Filipenses 2:6-8), desprovido de pompa terrena, identificando-se com os pobres e desvalidos.',
    wesleyanInsight: 'Wesley via na manjedoura o chamado inegociável à humildade cristã: aquele que quer seguir a Cristo deve despir-se da arrogância e amar a simplicidade de coração.',
    precision: 'explicit'
  },
  {
    id: 'pastores-e-anjos',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'A Aparição dos Anjos e a Adoração dos Pastores',
    location: 'Campos de Belém da Judeia',
    periodApprox: 'Noite do Nascimento de Jesus',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 2:8-20' }
    ],
    summary: 'A glória do Senhor resplandece aos pastores que guardavam seus rebanhos; o coro celestial canta "Glória a Deus nas alturas" e os pastores correm a Belém.',
    detailedNarrative: 'Havia naquela mesma comarca pastores que estavam no campo, e guardavam, durante as vigílias da noite, o seu rebanho. E eis que o anjo do Senhor veio sobre eles, e a glória do Senhor os cercou de resplendor; e tiveram grande temor. E o anjo lhes disse: "Não temais, porque eis aqui vos trago novas de grande alegria, que será para todo o povo: Pois, na cidade de Davi, vos nasceu hoje o Salvador, que é Cristo, o Senhor. E isto vos será por sinal: Achareis o menino envolto em panos, e deitado numa manjedoura". E, no mesmo instante, apareceu com o anjo uma multidão dos exércitos celestiais, louvando a Deus, e dizendo: "Glória a Deus nas maiores alturas, paz na terra, boa vontade para com os homens". Os pastores foram apressadamente e acharam Maria, e José, e o menino deitado na manjedoura, glorificando a Deus.',
    theologicalSignificance: 'A primeira revelação da chegada do Salvador do mundo é dada não aos sacerdotes do Templo nem aos imperadores de Roma, mas a humildes pastores de ovelhas, simbolizando o Bom Pastor vindo para as ovelhas perdidas.',
    wesleyanInsight: 'Wesley observava que os olhos dos humildes estão abertos para a luz da graça divina, enquanto o coração endurecido pelos palácios permanece cego para o mover de Deus.',
    precision: 'explicit'
  },
  {
    id: 'apresentacao-templo',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'Apresentação no Templo: Simeão e Ana',
    location: 'Jerusalém (Templo)',
    periodApprox: '40 dias após o nascimento',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 2:21-38' }
    ],
    summary: 'Conforme a Lei de Moisés, o menino é circuncidado e apresentado no Templo; o justo Simeão e a profetisa Ana reconhecem o Messias prometido.',
    detailedNarrative: 'Cumpridos os dias da purificação segundo a Lei de Moisés, Maria e José levaram o menino a Jerusalém para apresentá-lo ao Senhor, oferecendo o sacrifício dos pobres: um par de rolas ou dois pombinhos. Estava ali o piedoso Simeão, a quem o Espírito Santo revelara que não veria a morte antes de ver o Cristo do Senhor. Movido pelo Espírito, tomou o menino nos braços e louvou a Deus com o cântico Nunc Dimittis: "Agora, Senhor, despedes em paz o teu servo... pois já os meus olhos viram a tua salvação". Profetizou a Maria que uma espada transpassaria a sua alma. A idosa profetisa Ana também chegou naquela mesma hora, dando graças a Deus e falando do menino a todos que esperavam a redenção.',
    theologicalSignificance: 'Jesus cumpre perfeitamente a Lei mosaica desde os primeiros dias de vida (Gálatas 4:4), sendo consagrado ao Pai e revelado como a Luz para iluminar as nações gentias e a glória de Israel.',
    wesleyanInsight: 'A consagração de Jesus ensina que a obediência aos preceitos divinos é testemunho da verdadeira piedade interior e reverência contínua.',
    precision: 'explicit'
  },
  {
    id: 'magos-do-oriente',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'A Visita dos Magos do Oriente',
    location: 'Belém (em uma casa, conforme Mateus 2:11)',
    periodApprox: 'c. 4 a.C. (meses após o nascimento)',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 2:1-12' }
    ],
    summary: 'Sábios do Oriente seguem a estrela e chegam a Belém; prostrando-se, adoram o Menino Rei e abrem seus tesouros ofertando ouro, incenso e mirra.',
    detailedNarrative: 'Tendo Jesus nascido em Belém de Judá, no tempo do rei Herodes, eis que uns magos (astrónomos/sábios de origem persa ou mesopotâmica) vieram do Oriente a Jerusalém perguntando: "Onde está aquele que é nascido rei dos judeus? Porque vimos a sua estrela no Oriente e viemos a adorá-lo". Herodes perturbou-se e consultou os príncipes dos sacerdotes, que apontaram a profecia de Miquéias sobre Belém. Os magos seguiram a estrela até o local onde estava o menino. Entrando na casa, viram o menino com Maria, sua mãe, e, prostrando-se, o adoraram; e, abrindo os seus tesouros, ofertaram-lhe dádivas: ouro (reconhecimento da Sua realeza), incenso (homenagem à Sua divindade e sacerdócio) e mirra (anúncio profético do Seu sofrimento e embalsamamento no sepulcro). Avisados por Deus em sonho para não voltarem a Herodes, regressaram por outro caminho.',
    theologicalSignificance: 'A adoração dos magos assinala o cumprimento de Isaías 60:3 ("as nações caminharão à tua luz, e os reis, ao resplendor da tua aurora"), atestando que Jesus é o Rei soberano de todas as nações da Terra e não apenas de Israel.',
    wesleyanInsight: 'Wesley ressaltava a coragem e desprendimento dos magos: abandonaram a comodidade de suas terras e ofertaram seus bens mais preciosos ao Senhor sem esperar honrarias mundanas.',
    precision: 'explicit'
  },
  {
    id: 'fuga-egito-e-nazare',
    stage: 'nascimento',
    stageTitle: '1. O Nascimento & Origens Humanas',
    title: 'Fuga para o Egito, Retorno e Infância em Nazaré',
    location: 'Egito e Nazaré da Galileia',
    periodApprox: 'c. 4 a.C. – c. 8 d.C.',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 2:13-23' },
      { gospel: 'Lucas', passages: 'Lucas 2:39-52' }
    ],
    summary: 'Avisado em sonho, José foge com a família para o Egito salvando o menino do infanticídio de Herodes; após a morte do tirano, retornam e se estabelecem em Nazaré.',
    detailedNarrative: 'O anjo do Senhor apareceu a José em sonhos, dizendo: "Levanta-te, toma o menino e sua mãe, e foge para o Egito, e demora-te lá até que eu te diga; porque Herodes há de procurar o menino para o matar". José levantou-se de noite e partiu para o Egito, cumprindo Oséias 11:1 ("Do Egito chamei o meu Filho"). Enfurecido com a partida dos magos, Herodes mandou degolar todos os meninos de dois anos para baixo em Belém (cumprindo Jeremias 31:15). Morto Herodes, a santa família retornou por ordem angélica, fixando residência na desprezada vila de Nazaré da Galileia, "para que se cumprisse o que fora dito pelos profetas: Ele será chamado Nazareno". Lucas relata o crescimento sereno de Jesus em sabedoria, estatura e graça diante de Deus e dos homens, e Sua visita ao Templo aos doze anos, onde maravilhou os mestres com Suas respostas.',
    theologicalSignificance: 'Jesus experimenta a condição de refugiado político em terra estrangeira, identificando-se com a aflição humana. O crescimento em Nazaré revela a genuína e plena humanidade de Cristo.',
    wesleyanInsight: 'Wesley ensinava que a fidelidade silenciosa de Jesus durante os 30 anos em Nazaré santificou a vida comum de trabalho e obediência aos pais, revelando que a verdadeira santidade se cultiva no cotidiano.',
    precision: 'explicit'
  },

  // 2. PREPARAÇÃO PARA O MINISTÉRIO
  {
    id: 'ministerio-joao-batista',
    stage: 'preparacao',
    stageTitle: '2. Preparação para o Ministério',
    title: 'A Voz que Clama no Deserto: João Batista',
    location: 'Deserto da Judeia e Margens do Rio Jordão',
    periodApprox: 'c. 26–27 d.C. (15º ano de Tibério César)',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 3:1-12' },
      { gospel: 'Marcos', passages: 'Marcos 1:1-8' },
      { gospel: 'Lucas', passages: 'Lucas 3:1-18' },
      { gospel: 'João', passages: 'João 1:19-28' }
    ],
    summary: 'João Batista prega o batismo de arrependimento preparando o caminho do Messias: "Eis o Cordeiro de Deus que tira o pecado do mundo!".',
    detailedNarrative: 'No deserto da Judeia surgiu João Batista pregando: "Arrependei-vos, porque é chegado o Reino dos Céus". Vestia peles de camelo e cinto de couro, alimentando-se de gafanhotos e mel silvestre. Conforme profetizado em Isaías 40:3 e Malaquias 3:1, ele era a voz que clamava no deserto endireitando os caminhos do Senhor. Multidões de Jerusalém e da Judeia saíam a ele confessando seus pecados e sendo batizadas no Rio Jordão. Repreendeu com intrepidez os fariseus e saduceus ("Raça de víboras!"), exigindo frutos dignos de arrependimento. Anunciou com fervor: "Eu vos batizo com água para o arrependimento; mas aquele que vem após mim é mais poderoso do que eu... ele vos batizará com o Espírito Santo e com fogo".',
    theologicalSignificance: 'João fecha a dispensação dos profetas da Antiga Aliança (Mateus 11:13) e introduz o Cordeiro pascal da Nova Aliança.',
    wesleyanInsight: 'Wesley considerava a mensagem de arrependimento de João Batista como o pórtico indispensável da fé salvadora: não pode haver justificação pela graça sem sincero quebrantamento do coração.',
    precision: 'explicit'
  },
  {
    id: 'batismo-de-jesus',
    stage: 'preparacao',
    stageTitle: '2. Preparação para o Ministério',
    title: 'O Batismo de Jesus no Rio Jordão',
    location: 'Rio Jordão (Betânia além do Jordão)',
    periodApprox: 'c. 27 d.C.',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 3:13-17' },
      { gospel: 'Marcos', passages: 'Marcos 1:9-11' },
      { gospel: 'Lucas', passages: 'Lucas 3:21-22' },
      { gospel: 'João', passages: 'João 1:29-34' }
    ],
    summary: 'Jesus é batizado por João para "cumprir toda a justiça"; os céus se abrem, o Espírito desce como pomba e o Pai proclama Sua filiação divina.',
    detailedNarrative: 'Jesus veio da Galileia ao Jordão para ser batizado por João. Mas João se opunha, dizendo: "Eu careço de ser batizado por ti, e vens tu a mim?". Jesus respondeu com autoridade messiânica: "Deixa por agora, porque assim nos convém cumprir toda a justiça". Então João consentiu e o batizou nas águas do rio. E, sendo Jesus batizado, saiu logo da água; e eis que se lhe abriram os céus, e viu o Espírito de Deus descendo como pomba e vindo sobre ele. E uma voz dos céus disse: "Este é o meu Filho amado, em quem me comprazo".',
    theologicalSignificance: 'A mais esplêndida manifestação pública da Santíssima Trindade nos Evangelhos: a voz audível do Pai, a unção visível do Espírito Santo e a presença corpórea do Filho encarnado. Jesus não tinha pecado para se arrepender, mas assumiu o batismo para se solidarizar plenamente com a humanidade pecadora e inaugurar formalmente Sua investidura messiânica.',
    wesleyanInsight: 'Wesley enfatiza que a descida do Espírito sobre Cristo marca a unção do Sumo Sacerdote da Nova Aliança: assim como a cabeça foi ungida, o mesmo Espírito é derramado sobre o Seu corpo, que é a Igreja.',
    precision: 'explicit'
  },
  {
    id: 'tentacao-no-deserto',
    stage: 'preparacao',
    stageTitle: '2. Preparação para o Ministério',
    title: 'A Tentação de Jesus no Deserto da Judeia',
    location: 'Deserto da Judeia (Monte da Quarentena)',
    periodApprox: 'Logo após o batismo (40 dias e 40 noites)',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 4:1-11' },
      { gospel: 'Marcos', passages: 'Marcos 1:12-13' },
      { gospel: 'Lucas', passages: 'Lucas 4:1-13' }
    ],
    summary: 'Conduzido pelo Espírito Santo ao deserto, Jesus jejua quarenta dias e vence as três investidas de satanás utilizando unicamente a autoridade das Escrituras.',
    detailedNarrative: 'Jesus foi conduzido pelo Espírito ao deserto para ser tentado pelo diabo. Após jejuar quarenta dias e quarenta noites, teve fome. O tentador aproximou-se propondo transformar pedras em pães (concupiscência da carne). Jesus rebateu: "Está escrito: Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus" (Dt 8:3). Em seguida, colocou-o sobre o pináculo do Templo desafiando-o a atirar-se para baixo para forçar a proteção angélica (soberba da vida). Jesus replicou: "Também está escrito: Não tentarás o Senhor teu Deus" (Dt 6:16). Por fim, do alto de um monte, ofereceu-lhe todos os reinos do mundo se prostrado o adorasse (concupiscência dos olhos). Jesus ordenou com vitória: "Vai-te, satanás, porque está escrito: Ao Senhor teu Deus adorarás, e só a ele servirás" (Dt 6:13). O diabo retirou-se e os anjos vieram e o serviram.',
    theologicalSignificance: 'Jesus triunfa onde Adão caiu no Éden e onde Israel falhou durante 40 anos de peregrinação no deserto. Cristo é o Segundo Adão impecável que vence o tentador não por magia, mas como homem dependente do Espírito e firmado na Palavra de Deus.',
    wesleyanInsight: 'John Wesley ensinava que a tentação não é pecado, mas a concessão à tentação sim: Jesus nos legou a arma invencível da Escritura e a certeza de que pelo poder da graça santificadora podemos resistir ao inimigo.',
    precision: 'explicit'
  },
  {
    id: 'chamado-dos-discipulos',
    stage: 'preparacao',
    stageTitle: '2. Preparação para o Ministério',
    title: 'O Chamado dos Primeiros Discípulos e a Eleição dos Doze',
    location: 'Jordão e Litoral do Mar da Galileia',
    periodApprox: 'c. 27–28 d.C.',
    biblicalReferences: [
      { gospel: 'João', passages: 'João 1:35-51' },
      { gospel: 'Mateus', passages: 'Mateus 4:18-22; 10:1-4' },
      { gospel: 'Marcos', passages: 'Marcos 1:16-20; 3:13-19' },
      { gospel: 'Lucas', passages: 'Lucas 5:1-11; 6:12-16' }
    ],
    summary: 'Pescadores humildes e publicanos deixam tudo para seguir o Mestre; após passar a noite em oração a Deus no monte, Jesus escolhe os Doze Apóstolos.',
    detailedNarrative: 'Caminhando junto ao Mar da Galileia, Jesus viu Simão Pedro e André lançando a rede, e disse-lhes: "Vinde após mim, e eu vos farei pescadores de homens". Imediatamente deixaram as redes e o seguiram. Mais adiante chamou Tiago e João, filhos de Zebedeu, que deixaram o barco e o pai. Chamou Mateus (Levi) na coletoria de impostos. Lucas 6:12-13 relata o momento crucial: Jesus subiu ao monte a orar e passou a noite inteira em oração a Deus; quando amanheceu, chamou a Si os discípulos e escolheu doze deles, a quem também deu o nome de apóstolos: Simão Pedro, André, Tiago, João, Filipe, Bartolomeu (Natanael), Mateus, Tomé, Tiago filho de Alfeu, Simão o Zelote, Judas filho de Tiago e Judas Iscariotes, que veio a ser o traidor.',
    theologicalSignificance: 'Os Doze Apóstolos representam a restauração escatológica das Doze Tribos de Israel e o alicerce fundamental da Igreja de Cristo (Efésios 2:20; Apocalipse 21:14). Jesus não escolheu a elite letrada de Jerusalém, mas corações dispostos a serem moldados pela graça.',
    wesleyanInsight: 'Wesley adotou esse princípio para os pregadores leigos do metodismo: o que qualifica um obreiro de Deus não são os títulos mundanos, mas a conversão real, a oração e a submissão santa à liderança de Cristo.',
    precision: 'explicit'
  },

  // 3. O GRANDE MINISTÉRIO PÚBLICO
  {
    id: 'bodas-de-cana',
    stage: 'ministerio',
    stageTitle: '3. O Ministério Público na Galileia, Samaria e Judeia',
    title: 'O Primeiro Sinal: Transformação de Água em Vinho em Caná',
    location: 'Caná da Galileia',
    periodApprox: 'Início do Ministério Público (c. 27 d.C.)',
    biblicalReferences: [
      { gospel: 'João', passages: 'João 2:1-12' }
    ],
    summary: 'Nas bodas de Caná, atendendo ao pedido de Sua mãe Maria, Jesus transforma cerca de seiscentos litros de água em vinho excelente, manifestando Sua glória.',
    detailedNarrative: 'No terceiro dia houve um casamento em Caná da Galileia, e estava ali a mãe de Jesus; e foram também convidados Jesus e os seus discípulos. Faltando o vinho, a mãe de Jesus disse-lhe: "Não têm vinho". Disse-lhe Jesus: "Mulher, que tenho eu contigo? Ainda não é chegada a minha hora". Sua mãe disse aos serventes: "Fazei tudo quanto ele vos disser". Havia ali seis talhas de pedra para as purificações judaicas, contendo cada uma duas ou três metretas (cerca de 80 a 120 litros). Jesus ordenou aos servos: "Enchei de água as talhas". E encheram-nas até em cima. Depois disse: "Tirai agora, e levai ao mestre-sala". Quando o mestre-sala provou a água tornada em vinho sem saber de onde viera, chamou o noivo e elogiou: "Todo o homem põe primeiro o vinho bom... tu, porém, guardaste até agora o bom vinho". Jesus principiou assim os seus sinais em Caná da Galileia, e manifestou a sua glória; e os seus discípulos creram nele.',
    theologicalSignificance: 'A santificação da família e da aliança matrimonial por Cristo. As talhas de pedra da antiga purificação cerimonial vazias representavam a Lei mosaica; o vinho novo e excelente simboliza a graça transbordante e jubilosa da Nova Aliança.',
    wesleyanInsight: 'Wesley exalta o mandamento maternal de Maria ("Fazei tudo o que ele vos disser") como a regra perpétua da vida cristã: a obediência irrestrita às ordens de Jesus é o canal onde os milagres da graça se operam.',
    precision: 'explicit'
  },
  {
    id: 'sermao-do-monte',
    stage: 'ministerio',
    stageTitle: '3. O Ministério Público na Galileia, Samaria e Judeia',
    title: 'O Sermão do Monte e a Constituição do Reino',
    location: 'Monte das Bem-Aventuranças (Tabgha / Mar da Galileia)',
    periodApprox: 'c. 28 d.C.',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 5, 6 e 7' },
      { gospel: 'Lucas', passages: 'Lucas 6:20-49 (Sermão da Planície)' }
    ],
    summary: 'O mais sublime discurso ético e espiritual da humanidade: as Bem-Aventuranças, o Sal e a Luz da Terra, o Pai Nosso e a justiça do Reino interior.',
    detailedNarrative: 'Vendo as multidões, Jesus subiu ao monte e, assentando-se, aproximaram-se dele os seus discípulos; e, abrindo a boca, os ensinava com autoridade ímpar. Proclamou bem-aventurados os pobres de espírito, os que choram, os mansos, os que têm fome e sede de justiça, os misericordiosos, os limpos de coração, os pacificadores e os perseguidos por causa da justiça. Declarou que Seus discípulos são o Sal da Terra e a Luz do Mundo. Ensinou que não veio abolir a Lei, mas cumpri-la, aprofundando o mandamento de Moisés: o adultério começa no olhar lascivo do coração; o homicídio começa na ira e no desprezo fraterno. Ordenou amar os inimigos e orar pelos perseguidores para sermos filhos do Pai celeste. Ensinou a oração perfeita do Pai Nosso, alertou contra a hipocrisia nas esmolas e jejuns, instruiu a buscar primeiro o Reino de Deus e a Sua justiça sem ansiedade pelo amanhã, e concluiu com a parábola dos dois construtores: a casa sobre a rocha (o que ouve e pratica) e a casa sobre a areia.',
    theologicalSignificance: 'O Sermão do Monte é o manifesto da ética da Graça: o Reino de Deus não se satisfaz com conformidade exterior de rituais, mas exige a circuncisão do coração, a santificação interior e a pureza de intenções movida pelo amor divino.',
    wesleyanInsight: 'John Wesley considerava o Sermão do Monte a base mestra de toda a sua teologia prática, dedicando nada menos que 13 dos seus 44 Sermões Padrão para expor versículo por versículo Mateus 5 a 7, proclamando a perfeição cristã no amor.',
    precision: 'explicit'
  },
  {
    id: 'transfiguracao',
    stage: 'ministerio',
    stageTitle: '3. O Ministério Público na Galileia, Samaria e Judeia',
    title: 'A Transfiguração no Monte Alto',
    location: 'Monte Hermom (ou Monte Tabor, segundo tradição posterior)',
    periodApprox: 'c. 29 d.C.',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 17:1-9' },
      { gospel: 'Marcos', passages: 'Marcos 9:2-10' },
      { gospel: 'Lucas', passages: 'Lucas 9:28-36' },
      { gospel: '2 Pedro', passages: '2 Pedro 1:16-18' }
    ],
    summary: 'Jesus toma Pedro, Tiago e João e sobre ao monte; Seu rosto brilha como o sol, Moisés e Elias aparecem conversando sobre Seu êxodo e o Pai fala da nuvem.',
    detailedNarrative: 'Seis dias depois (ou oito dias segundo Lucas), Jesus tomou consigo a Pedro, e aos irmãos Tiago e João, e os levou a sós a um alto monte. E transfigurou-se diante deles; o seu rosto resplandeceu como o sol, e as suas vestes se tornaram brancas como a luz. E eis que lhes apareceram Moisés (representando a Lei) e Elias (representando os Profetas), falando com ele a respeito do Seu êxodo (Sua morte e partida redentora) que haveria de cumprir-se em Jerusalém. Pedro, maravilhado e atônito, disse: "Senhor, bom é estarmos aqui; se queres, façamos aqui três tabernáculos: um para ti, um para Moisés e um para Elias". Enquanto ele ainda falava, eis que uma nuvem luminosa os cobriu; e da nuvem saiu uma voz soberana que dizia: "Este é o meu Filho amado, em quem me comprazo; a ele ouvi". Ouvindo isto, os discípulos caíram sobre os seus rostos e tiveram grande medo. Aproximando-se Jesus, tocou-os e disse: "Levantai-vos e não temais". Erguendo os olhos, a ninguém viram senão a Jesus somente.',
    theologicalSignificance: 'Antecipação da glória escatológica da Segunda Vinda e afirmação da supremacia absoluta de Cristo sobre a Lei e os Profetas: Moisés e Elias desvanecem para que reine unicamente o Filho Amado.',
    wesleyanInsight: 'Wesley nota as palavras imperativas do Pai ("A ele ouvi"): toda tradição humana e preceito cerimonial deve inclinar-se perante a voz e os ensinamentos soberanos do Filho de Deus.',
    precision: 'explicit'
  },
  {
    id: 'ressurreicao-de-lazaro',
    stage: 'ministerio',
    stageTitle: '3. O Ministério Público na Galileia, Samaria e Judeia',
    title: 'A Ressurreição de Lázaro em Betânia',
    location: 'Betânia da Judeia',
    periodApprox: 'Fins de 32 ou início de 33 d.C.',
    biblicalReferences: [
      { gospel: 'João', passages: 'João 11:1-46' }
    ],
    summary: 'Após quatro dias de sepultura, Jesus chora diante do túmulo e clama com voz de autoridade: "Lázaro, vem para fora!", manifestando o poder sobre a morte.',
    detailedNarrative: 'Lázaro de Betânia, irmão de Marta e Maria, adoeceu gravemente. As irmãs enviaram recado a Jesus dizendo: "Senhor, aquele a quem amas está enfermo". Jesus permaneceu ainda dois dias no lugar onde estava e depois disse aos discípulos: "Lázaro morreu; e alegro-me por vossa causa de que eu lá não estivesse, para que credes". Chegando a Betânia, achou que Lázaro já estava na sepultura havia quatro dias. Marta saiu ao Seu encontro e Jesus declarou: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá; e todo aquele que vive e crê em mim nunca morrerá. Crês tu isto?". Diante das lágrimas de Maria e dos judeus que choravam, Jesus comoveu-se profundamente em espírito e chorou (Jo 11:35). Mandou retirar a pedra da entrada da cova. Marta advertiu que já cheirava mal. Jesus respondeu: "Não te disse eu que, se creres, verás a glória de Deus?". Levantando os olhos ao céu, deu graças ao Pai e clamou em alta voz: "Lázaro, vem para fora!". E o defunto saiu, tendo as mãos e os pés ligados com faixas e o rosto envolto num lenço. Disse-lhes Jesus: "Desatai-o e deixai-o ir".',
    theologicalSignificance: 'O ápice dos sete sinais messiânicos registrados no Evangelho de João. A ressurreição de Lázaro comprova a divindade de Cristo como Senhor absoluto sobre a morte e foi o estopim decisivo que levou o Sinédrio a tramar formalmente a execução de Jesus.',
    wesleyanInsight: 'Wesley comentava que a ordem "Desatai-o e deixai-o ir" ilustra o papel da igreja: Cristo concede a nova vida ao pecador morto em delitos e pecados, mas cabe aos santos desatar as amarras dos velhos hábitos pela santificação fraterna.',
    precision: 'explicit'
  },

  // 4. A ÚLTIMA SEMANA & A PAIXÃO DE CRISTO
  {
    id: 'entrada-triunfal',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Entrada Triunfal em Jerusalém',
    location: 'Monte das Oliveiras e Portas de Jerusalém',
    periodApprox: 'Domingo de Ramos (Semana da Páscoa)',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 21:1-11' },
      { gospel: 'Marcos', passages: 'Marcos 11:1-11' },
      { gospel: 'Lucas', passages: 'Lucas 19:28-44' },
      { gospel: 'João', passages: 'João 12:12-19' }
    ],
    summary: 'Montado em um jumentinho em cumprimento a Zacarias 9:9, Jesus entra aclamado por multidões com ramos de palmeiras: "Hosana ao Filho de Davi!".',
    detailedNarrative: 'Aproximando-se de Jerusalém pelo Monte das Oliveiras, Jesus enviou dois discípulos para trazerem uma jumenta e um jumentinho sobre o qual ninguém havia montado. Os discípulos puseram sobre o jumentinho suas vestes e Jesus montou nele. Uma imensa multidão estendeu suas capas pelo caminho; outros cortavam ramos de árvores e os espalhavam pela estrada. E as multidões que iam adiante e as que seguiam clamavam: "Hosana ao Filho de Davi! Bendito o que vem em nome do Senhor! Hosana nas maiores alturas!". Ao contemplar a cidade de Jerusalém do alto do monte, Jesus chorou sobre ela profetizando a sua futura destruição pelo Império Romano por não ter conhecido o tempo da sua visitação divina (Lc 19:41-44). Entrando no Templo, toda a cidade se alvoroçou perguntando: "Quem é este?". E as multidões respondiam: "Este é o profeta Jesus, de Nazaré da Galileia".',
    theologicalSignificance: 'A apresentação pública de Jesus como o Rei Messias pacífico e humilde profetizado em Zacarias 9:9, que não vem sobre cavalos de guerra imperial, mas sobre a montaria mansa dos servos, trazendo a paz da reconciliação com Deus.',
    wesleyanInsight: 'Wesley alertava sobre a inconstância do louvor humano carnal: a mesma multidão que cantava "Hosana!" no domingo clamou "Crucifica-o!" na sexta-feira, mostrando que a fé cristã autêntica não se firma em comoções superficiais, mas em amor arraigado até a cruz.',
    precision: 'explicit'
  },
  {
    id: 'purificacao-do-templo',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Purificação do Templo de Jerusalém',
    location: 'Átrio dos Gentios no Templo de Herodes',
    periodApprox: 'Segunda-feira da Semana da Paixão',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 21:12-17' },
      { gospel: 'Marcos', passages: 'Marcos 11:15-19' },
      { gospel: 'Lucas', passages: 'Lucas 19:45-48' },
      { gospel: 'João', passages: 'João 2:13-22 (purificação inicial)' }
    ],
    summary: 'Jesus expulsa os cambistas e vendedores do Templo, derrubando mesas: "A minha casa será chamada casa de oração para todos os povos; vós, porém, a tendes feito covil de salteadores".',
    detailedNarrative: 'Entrando no Templo, Jesus começou a expulsar todos os que ali vendiam e compravam animais para sacrifício; derrubou as mesas dos cambistas que cobravam taxas abusivas para a moeda do santuário e as cadeiras dos que vendiam pombas, não consentindo que ninguém transportasse vaso algum pelo Templo. E ensinava-lhes: "Não está escrito: A minha casa será chamada, por todas as nações, casa de oração? Mas vós a tendes feito covil de salteadores" (Isaías 56:7; Jeremias 7:11). Os principais sacerdotes e os escribas ouviram isto e buscavam um meio de o matar, pois temiam-no, visto que todo o povo estava maravilhado da Sua doutrina.',
    theologicalSignificance: 'Zelo santo pela pureza do culto ao Deus Altíssimo. Ao purificar o Átrio dos Gentios, Jesus defendeu o direito de todos os povos gentios orarem a Deus sem serem impedidos pela corrupção e mercantilismo sacerdotal.',
    wesleyanInsight: 'Wesley aplicava a purificação do templo ao coração humano como templo do Espírito Santo: Jesus expulsa os ídolos do lucro e da vaidade para restituir a alma à sua vocação original de altar de oração contínua.',
    precision: 'explicit'
  },
  {
    id: 'ultima-ceia',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Última Ceia, o Lava-Pés e a Instituição da Eucaristia',
    location: 'Cenáculo em Jerusalém (Quarto Superior)',
    periodApprox: 'Quinta-feira à noite da Páscoa',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 26:17-30' },
      { gospel: 'Marcos', passages: 'Marcos 14:12-26' },
      { gospel: 'Lucas', passages: 'Lucas 22:7-38' },
      { gospel: 'João', passages: 'João 13–17' },
      { gospel: '1 Coríntios', passages: '1 Coríntios 11:23-26' }
    ],
    summary: 'Jesus lava os pés dos discípulos, identifica o traidor, institui o sacramento da Nova Aliança com o pão e o cálice e profere Seus discursos de despedida.',
    detailedNarrative: 'Reunido no Cenáculo com os Doze, sabendo que era chegada a Sua hora, Jesus levantou-se da ceia, cingiu-se com uma toalha, deitou água numa bacia e começou a lavar os pés dos discípulos. Ao resistir Pedro, Jesus advertiu: "Se eu te não lavar, não tens parte comigo", ensinando o exemplo do amor serviçal. Durante a refeição, revelou a traição iminente. Tomou o pão e, abençoando-o, partiu-o e deu-o aos discípulos, dizendo: "Tomai, comei, isto é o meu corpo, que por vós é dado; fazei isto em memória de mim". Semelhantemente, tomou o cálice depois da ceia, dizendo: "Este cálice é o Novo Testamento no meu sangue, que é derramado por vós e por muitos, para remissão dos pecados". Em seguida, consolou os discípulos com a promessa do Consolador (o Espírito Santo), ensinou a alegoria da Videira Verdadeira e proferiu a sublime Oração Sacerdotal (João 17).',
    theologicalSignificance: 'A transição definitiva da Páscoa da Antiga Aliança para a Ceia do Senhor da Nova Aliança. O pão partido e o cálice derramado antecipam e simbolizam o sacrifício corpóreo e vicário de Cristo na Cruz para expiação universal dos pecados.',
    wesleyanInsight: 'John Wesley e seu irmão Charles mantinham a Ceia do Senhor como o meio primordial de graça confirmadora e convertedora, exortando os metodistas à "comunhão constante" como alimento espiritual da santificação.',
    precision: 'explicit'
  },
  {
    id: 'getsemani',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Agonia e a Oração no Getsêmani',
    location: 'Jardim do Getsêmani (sopé do Monte das Oliveiras)',
    periodApprox: 'Quinta-feira à meia-noite',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 26:36-46' },
      { gospel: 'Marcos', passages: 'Marcos 14:32-42' },
      { gospel: 'Lucas', passages: 'Lucas 22:39-46' },
      { gospel: 'João', passages: 'João 18:1-2' }
    ],
    summary: 'Jesus recolhe-se em agonia mortal com Pedro, Tiago e João; ora prostrado com suor como grandes gotas de sangue: "Pai, não seja feita a minha vontade, mas a tua".',
    detailedNarrative: 'Chegando com eles ao olival chamado Getsêmani, Jesus disse aos discípulos: "Assentai-vos aqui, enquanto eu vou além orar". Tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se grandemente, declarando: "A minha alma está cheia de tristeza até a morte; ficai aqui e vigiai comigo". Indo um pouco mais para a frente, prostrou-se sobre o seu rosto, orando: "Meu Pai, se é possível, passe de mim este cálice; todavia, não seja como eu quero, mas como tu queres". Voltando, achou os discípulos dormindo pelo peso da tristeza e repreendeu Pedro: "Não pudestes vigiar uma hora comigo?". Lucas registra que, posto em agonia, orava mais intensamente e o seu suor tornou-se em grandes gotas de sangue (hematidrose clínica) que corriam até à terra; e apareceu-lhe um anjo do céu que o fortalecia. Ao terceiro clamor, a Sua vontade humana estava em perfeita e absoluta conformidade com o plano redentor do Pai: "Levantai-vos, vamo-nos; eis que é chegado o que me trai".',
    theologicalSignificance: 'A vitória moral decisiva da redenção: onde o primeiro homem no jardim do Éden disse a Deus "Não a tua vontade, mas a minha", o Último Adão no jardim da prensa de azeitonas disse ao Pai "Não a minha vontade, mas a tua", tomando voluntariamente sobre Si o cálice da ira divina contra o pecado da humanidade.',
    wesleyanInsight: 'Wesley via no Getsêmani o retrato da submissão suprema: a oração autêntica não consiste em dobrar a vontade de Deus aos nossos caprichos, mas em render inteiramente nosso coração à santíssima vontade do Pai.',
    precision: 'explicit'
  },
  {
    id: 'prisao-e-julgamento',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Prisão, o Julgamento no Sinédrio e Diante de Pilatos',
    location: 'Getsêmani, Palácio de Caifás e Pretório Romano',
    periodApprox: 'Madrugada e Manhã de Sexta-Feira',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 26:47–27:26' },
      { gospel: 'Marcos', passages: 'Marcos 14:43–15:15' },
      { gospel: 'Lucas', passages: 'Lucas 22:47–23:25' },
      { gospel: 'João', passages: 'João 18:3–19:16' }
    ],
    summary: 'Judas trai Jesus com um beijo; Pedro fere Malco mas Jesus restaura a orelha; Jesus enfrenta falsas testemunhas no Sinédrio, as negações de Pedro e o tribunal de Pôncio Pilatos.',
    detailedNarrative: 'Judas Iscariotes chegou com uma coorte de soldados armados de espadas e varapaus enviada pelos príncipes dos sacerdotes. Com um beijo de fingida amizade, identificou o Senhor ("Amigo, a que vieste?"). Pedro puxou a espada e cortou a orelha de Malco, mas Jesus o repreendeu ("Guarda a tua espada... não beberei eu o cálice que o Pai me deu?") e tocou a orelha curando-a no último milagre antes da Cruz. Todos os discípulos o desampararam e fugiram. Conduzido à noite perante o Sinédrio e o sumo sacerdote Caifás, foi cercado de falsas testemunhas. Quando Caifás o conjurou solenemente pelo Deus vivo a dizer se era o Cristo, Jesus respondeu: "Tu o disseste; e eu vos digo que vereis em breve o Filho do Homem assentado à direita do Poder e vindo sobre as nuvens do céu". O sumo sacerdote rasgou as vestes gritando blasfêmia e o condenaram à morte, cuspindo-lhe no rosto e esbofeteando-o. Do lado de fora, no pátio, Pedro negou a Jesus três vezes por medo e, ao cantar do galo, o Senhor virou-se e olhou para Pedro, que saiu dali chorando amargamente. De manhã, foi levado ao governador romano Pôncio Pilatos e enviado a Herodes Antipas, que o escarneceu com vestes vistosas. De volta a Pilatos, o governador reconheceu Sua inocência ("Não acho nele crime algum"), mas sob chantagem política dos líderes religiosos e gritos da multidão ("Crucifica-o! Solta-nos Barrabás!"), mandou flagelar Jesus com açoites romanos e o entregou para ser crucificado.',
    theologicalSignificance: 'O Justo é julgado e condenado injustamente pelos homens pecadores para que os pecadores culpados pudessem ser justificados perante o tribunal santo de Deus. Jesus cumpre Isaías 53:7: como cordeiro mudo foi levado ao matadouro.',
    wesleyanInsight: 'Wesley destacava o choro amargo de Pedro como o arquétipo do verdadeiro arrependimento da alma que olhou para os olhos de amor e misericórdia de Cristo.',
    precision: 'explicit'
  },
  {
    id: 'crucificacao-e-morte',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'A Crucificação e a Morte no Gólgota',
    location: 'Gólgota (O Monte Calvário, fora dos muros)',
    periodApprox: 'Sexta-feira da Paixão (das 9h às 15h)',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 27:27-56' },
      { gospel: 'Marcos', passages: 'Marcos 15:16-41' },
      { gospel: 'Lucas', passages: 'Lucas 23:26-49' },
      { gospel: 'João', passages: 'João 19:16-37' }
    ],
    summary: 'Coroado de espinhos e carregando a trave da Cruz, Jesus é pregado no Gólgota entre dois malfeitores; pronuncia as Sete Palavras na Cruz, expira às três da tarde e o véu do Templo se rasga.',
    detailedNarrative: 'Açoitado brutalmente, escarnecido pelos soldados romanos com uma coroa de espinhos e uma cana na mão direita, Jesus carregou o madeiro pela Via Dolorosa até o Gólgota (Lugar da Caveira). Ali foi crucificado entre dois malfeitores, com o título em hebraico, latim e grego sobre Sua cabeça: "JESUS NAZARENO, O REI DOS JUDEUS". Da Cruz, pronunciou as Sete Palavras eternas: 1) "Pai, perdoa-lhes, porque não sabem o que fazem" (Lc 23:34); 2) Ao ladrão arrependido: "Em verdade te digo que hoje estarás comigo no Paraíso" (Lc 23:43); 3) À Sua mãe Maria e ao discípulo João: "Mulher, eis aí o teu filho... Eis aí a tua mãe" (Jo 19:26-27); 4) Na escuridão das trevas que cobriram a terra do meio-dia às três da tarde: "Eloí, Eloí, lamá sabactâni? (Deus meu, Deus meu, por que me desamparaste?)" (Mt 27:46); 5) "Tenho sede" (Jo 19:28); 6) "Tetélestai (Está consumado!)" (Jo 19:30); 7) "Pai, nas tuas mãos entrego o meu espírito" (Lc 23:46). E, inclinando a cabeça, expirou. No mesmo instante, o véu do Templo se rasgou de alto a baixo em duas partes, a terra tremeu e as rochas se fenderam. O centurião romano que guardava a cruz exclamou com pavor reverente: "Verdadeiramente este homem era o Filho de Deus!".',
    theologicalSignificance: 'O coração do Evangelho e o ápice da história cósmica: a expiação substitutiva e vicária de Cristo. O véu rasgado de alto a baixo atesta que o acesso à presença santa de Deus Pai foi aberto a todos os crentes pelo sangue do Cordeiro (Hebreus 10:19-22).',
    wesleyanInsight: 'John Wesley e o metodismo fundamentam toda a soteriologia no sacrifício universal da Cruz: Cristo não morreu apenas por alguns eleitos, mas provou a morte por todos os homens (Hebreus 2:9), oferecendo a graça salvadora a qualquer ser humano que crer.',
    precision: 'explicit'
  },
  {
    id: 'sepultamento',
    stage: 'ultima_semana',
    stageTitle: '4. A Última Semana, Julgamento e Morte',
    title: 'O Sepultamento no Túmulo Novo de José de Arimatéia',
    location: 'Jardim junto ao Gólgota (Túmulo escavado na rocha)',
    periodApprox: 'Sexta-feira ao pôr do sol',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 27:57-66' },
      { gospel: 'Marcos', passages: 'Marcos 15:42-47' },
      { gospel: 'Lucas', passages: 'Lucas 23:50-56' },
      { gospel: 'João', passages: 'João 19:38-42' }
    ],
    summary: 'José de Arimatéia e Nicodemos pedem o corpo a Pilatos, embalsamam-no com mirra e aloés e o depositam num sepulcro novo cavado na rocha, vigiado por guardas romanos.',
    detailedNarrative: 'Chegada a tarde, José de Arimatéia, membro nobre do Sinédrio e discípulo secreto de Jesus, foi ousadamente a Pilatos e pediu o corpo de Jesus. Pilatos admirou-se de que já tivesse morrido e entregou o corpo a José. Veio também Nicodemos, aquele que antes fora ter com Jesus de noite, trazendo cerca de cem libras de uma mistura de mirra e aloés. Tomaram o corpo de Jesus e o envolveram em lençóis de linho com os aromas, segundo o costume dos judeus de sepultar. Havia um jardim naquele lugar onde fora crucificado, e no jardim um sepulcro novo, no qual ainda ninguém havia sido posto. Ali depositaram Jesus por causa do dia da preparação da Páscoa. Rolaram uma grande pedra para a entrada do sepulcro. Maria Madalena e Maria mãe de José estavam ali sentadas em frente ao sepulcro observando onde o corpo fora posto. No dia seguinte, os príncipes dos sacerdotes selaram a pedra e colocaram guardas romanos vigiando a tumba para que os discípulos não roubassem o corpo.',
    theologicalSignificance: 'O sepultamento confirma a realidade histórica e médica da morte física de Jesus Cristo ("morreu e foi sepultado", conforme o Credo Apostólico), cumprindo Isaías 53:9: "designaram-lhe a sepultura com os perversos, mas com o rico esteve na sua morte".',
    wesleyanInsight: 'O sábado do sepulcro ensina a igreja sobre a santa quietude da esperança: mesmo quando o corpo descansa na tumba sob o silêncio da terra, a promessa da aliança de Deus permanece inabalável.',
    precision: 'explicit'
  },

  // 5. A RESSURREIÇÃO & ASCENSÃO
  {
    id: 'ressurreicao-triunfal',
    stage: 'ressurreicao',
    stageTitle: '5. A Ressurreição, Aparições e Ascensão Gloriosa',
    title: 'A Ressurreição Gloriosa no Primeiro Dia da Semana',
    location: 'Túmulo no Jardim em Jerusalém',
    periodApprox: 'Domingo da Ressurreição de madrugada',
    biblicalReferences: [
      { gospel: 'Mateus', passages: 'Mateus 28:1-10' },
      { gospel: 'Marcos', passages: 'Marcos 16:1-8' },
      { gospel: 'Lucas', passages: 'Lucas 24:1-12' },
      { gospel: 'João', passages: 'João 20:1-18' }
    ],
    summary: 'A pedra é revolvida pelo anjo do Senhor; o túmulo está vazio! Jesus ressurge corporalmente dentre os mortos triunfando para sempre sobre o pecado e a morte.',
    detailedNarrative: 'Passado o sábado, ao despontar do primeiro dia da semana, Maria Madalena e a outra Maria foram visitar o sepulcro levando aromas. Eis que houvera um grande terremoto, porque um anjo do Senhor desceu do céu, removeu a pedra e assentou-se sobre ela. O seu aspecto era como um relâmpago, e as suas vestes brancas como a neve; os guardas tremeram de medo dele e ficaram como mortos. O anjo disse às mulheres: "Não temais vós; pois eu sei que buscais a Jesus, que foi crucificado. Ele não está aqui, porque já ressuscitou, como havia dito. Vinde, vede o lugar onde o Senhor jazia. E ide depressa, dizei aos seus discípulos que já ressuscitou dos mortos". Maria Madalena correu e anunciou a Pedro e a João, que correram à tumba e acharam os lençóis de linho enrolados e o lenço dobrado à parte. Jesus apareceu primeiro a Maria Madalena chamando-a pelo nome ("Maria!"), transformando seu pranto em júbilo eterno.',
    theologicalSignificance: 'A pedra angular de toda a fé cristã: "Se Cristo não ressuscitou, logo é vã a nossa pregação, e também é vã a vossa fé" (1 Coríntios 15:14). Pela Ressurreição corpórea de Cristo, a morte foi tragada na vitória e a justificação do crente foi selada (Romanos 4:25).',
    wesleyanInsight: 'Wesley proclamava a Ressurreição como a fonte viva da regeneração e da certeza da vida eterna: Cristo não é uma ideia abstrata ou memória histórica, mas o Salvador vivo que habita nos corações regenerados.',
    precision: 'explicit'
  },
  {
    id: 'aparicoes-e-comissao',
    stage: 'ressurreicao',
    stageTitle: '5. A Ressurreição, Aparições e Ascensão Gloriosa',
    title: 'Aparições durante 40 Dias e a Grande Comissão',
    location: 'Estrada de Emaús, Cenáculo, Mar da Galileia e Monte na Galileia',
    periodApprox: 'Período pascal de 40 dias pós-ressurreição',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 24:13-49' },
      { gospel: 'João', passages: 'João 20:19–21:23' },
      { gospel: 'Mateus', passages: 'Mateus 28:16-20' },
      { gospel: '1 Coríntios', passages: '1 Coríntios 15:5-8' }
    ],
    summary: 'Jesus aparece aos discípulos no caminho de Emaús, aos apóstolos no Cenáculo com as portas trancadas, restaura Pedro no Mar de Tiberíades e proclama a Grande Comissão.',
    detailedNarrative: 'Durante quarenta dias após a ressurreição, Jesus apresentou-se vivo com muitas e infalíveis provas aos Seus seguidores. Caminhou com dois discípulos na estrada de Emaús e lhes expôs em todas as Escrituras o que dEle se achava, dando-se a conhecer no partir do pão. Apareceu aos apóstolos reunidos com as portas fechadas dizendo: "Paz seja convosco", mostrando as mãos e os pés cravados e comendo peixe assado diante deles para atestar Sua ressurreição corpórea real. Oito dias depois, convidou o hesitante Tomé a tocar em Suas chagas, levando-o à solene confissão: "Senhor meu, e Deus meu!". No Mar da Galileia, realizou a pesca miraculosa de 153 grandes peixes e restaurou o apóstolo Pedro perguntando três vezes: "Simão, filho de Jonas, amas-me mais do que estes?... Apascenta as minhas ovelhas". Em um monte na Galileia, entregou a Grande Comissão: "É-me dado todo o poder no céu e na terra. Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos".',
    theologicalSignificance: 'A constituição da missão mundial da Igreja. O mandato missionário universal de evangelizar e discipular todas as nações é outorgado com a autoridade cósmica total do Cristo ressurreto.',
    wesleyanInsight: 'John Wesley inspirou-se na Grande Comissão para cunhar o célebre lema metodista: "O mundo é a minha paróquia!". O Evangelho não tem fronteiras geográficas ou culturais, mas deve ser levado a todas as criaturas.',
    precision: 'explicit'
  },
  {
    id: 'ascensao-gloriosa',
    stage: 'ressurreicao',
    stageTitle: '5. A Ressurreição, Aparições e Ascensão Gloriosa',
    title: 'A Ascensão Gloriosa ao Céu no Monte das Oliveiras',
    location: 'Monte das Oliveiras (junto a Betânia)',
    periodApprox: '40 dias após a Ressurreição (c. 30 / 33 d.C.)',
    biblicalReferences: [
      { gospel: 'Lucas', passages: 'Lucas 24:50-53' },
      { gospel: 'Marcos', passages: 'Marcos 16:19-20' },
      { gospel: 'Atos', passages: 'Atos 1:6-11' }
    ],
    summary: 'Abençoando os discípulos, Jesus é elevado ao céu em uma nuvem de glória; anjos asseguram Sua volta visível da mesma maneira.',
    detailedNarrative: 'Reunido com os apóstolos no Monte das Oliveiras, ordenou-lhes que não se ausentassem de Jerusalém até que fossem revestidos do poder do Alto: "Mas recebereis poder, ao descer sobre vós o Espírito Santo, e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judeia e Samaria, e até aos confins da terra". E, tendo dito estas palavras, erguendo as Suas mãos, os abençoou. E aconteceu que, enquanto os abençoava, foi elevado às alturas à vista deles, e uma nuvem o ocultou aos seus olhos. E, estando eles com os olhos fitos no céu enquanto Ele subia, eis que dois varões vestidos de branco se puseram ao lado deles e disseram: "Varões galileus, por que estais olhando para o céu? Esse Jesus, que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir". Eles então voltaram para Jerusalém com grande júbilo e perseveravam unânimes em oração no Cenáculo aguardando a promessa de Pentecostes.',
    theologicalSignificance: 'A exaltação soberana de Jesus à destra de Deus Pai como Rei dos reis e Sumo Sacerdote eterno que intercede continuamente pelo Seu povo (Romanos 8:34; Hebreus 7:25), acompanhada da promessa inabalável da Sua Segunda Vinda (Parousia).',
    wesleyanInsight: 'Wesley ensinava que a Ascensão de Cristo ancora a esperança da Igreja: nosso Advogado está assentado no trono celestial, derramando o Espírito Santo para capacitar os santos à vida de santidade e missão.',
    precision: 'explicit'
  }
];
