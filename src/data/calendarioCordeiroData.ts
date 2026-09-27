// Calendário 3D do Cordeiro de Deus: Versículo para cada dia do mês (1 a 31) e Versículo Principal do Mês

export interface CalendarioCordeiroDia {
  dia: number;
  titulo: string;
  passagem: string;
  versiculo: string;
  meditacao: string;
  simboloCordeiro: string;
  oracao: string;
}

export interface VersiculoTemaMensal {
  mesNumero: number; // 1 a 12
  mesNome: string;
  temaGeral: string;
  passagemPrincipal: string;
  versiculoPrincipal: string;
  explicacaoTeologica: string;
}

// ==========================================
// VERSÍCULOS TEMAS PRINCIPAIS PARA CADA MÊS DO ANO
// ==========================================
export const VERSICULOS_TEMAS_MENSAIS: Record<number, VersiculoTemaMensal> = {
  1: {
    mesNumero: 1,
    mesNome: 'Janeiro',
    temaGeral: 'O Cordeiro e o Princípio de Todas as Coisas',
    passagemPrincipal: 'Apocalipse 13:8',
    versiculoPrincipal: 'O Cordeiro que foi morto desde a fundação do mundo.',
    explicacaoTeologica: 'Iniciamos o ano fixando os olhos na eternidade da graça: antes que o mundo existisse, a redenção já estava decretada no amor do Pai.'
  },
  2: {
    mesNumero: 2,
    mesNome: 'Fevereiro',
    temaGeral: 'A Aliança da Graça e a Provisão Divina',
    passagemPrincipal: 'Gênesis 22:8',
    versiculoPrincipal: 'Deus proverá para si o cordeiro para o holocausto, meu filho.',
    explicacaoTeologica: 'A fé patriarcal de Abraão aponta para o Monte Calvário, onde Deus não poupou o Seu próprio Filho para ser nossa provisão eterna.'
  },
  3: {
    mesNumero: 3,
    mesNome: 'Março',
    temaGeral: 'A Páscoa da Redenção e a Libertação',
    passagemPrincipal: '1 Coríntios 5:7',
    versiculoPrincipal: 'Porque Cristo, nossa Páscoa, foi sacrificado por nós.',
    explicacaoTeologica: 'O cordeiro pascal do Êxodo encontra seu pleno cumprimento em Cristo, que nos liberta do cativeiro do pecado e da morte.'
  },
  4: {
    mesNumero: 4,
    mesNome: 'Abril',
    temaGeral: 'O Sacrifício Vicário e o Triunfo na Cruz',
    passagemPrincipal: 'Isaías 53:7',
    versiculoPrincipal: 'Como cordeiro foi levado ao matadouro; e, como ovelha muda perante os seus tosquiadores, ele não abriu a sua boca.',
    explicacaoTeologica: 'A mansidão do Filho de Deus diante dos Seus algozes revela a profundidade do Seu amor voluntário pela humanidade caída.'
  },
  5: {
    mesNumero: 5,
    mesNome: 'Maio',
    temaGeral: 'Eis o Cordeiro que Tira o Pecado do Mundo',
    passagemPrincipal: 'João 1:29',
    versiculoPrincipal: 'Eis o Cordeiro de Deus, que tira o pecado do mundo!',
    explicacaoTeologica: 'O testemunho de João Batista une todas as profecias do Antigo Testamento em Jesus Cristo, o Redentor de todos os povos.'
  },
  6: {
    mesNumero: 6,
    mesNome: 'Junho',
    temaGeral: 'O Precioso Sangue da Nova Aliança',
    passagemPrincipal: '1 Pedro 1:18-19',
    versiculoPrincipal: 'Sabendo que não foi com coisas corruptíveis que fostes resgatados, mas com o precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado.',
    explicacaoTeologica: 'O valor da nossa alma é medido pelo preço do sangue de Jesus; nada deste mundo passageiro se compara à dignidade do Seu sacrifício.'
  },
  7: {
    mesNumero: 7,
    mesNome: 'Julho',
    temaGeral: 'O Cordeiro que Está de Pé no Trono',
    passagemPrincipal: 'Apocalipse 5:6',
    versiculoPrincipal: 'E olhei, e eis que estava no meio do trono e dos quatro animais viventes e entre os anciãos um Cordeiro, como havendo sido morto.',
    explicacaoTeologica: 'O Cordeiro não está derrotado na sepultura, mas reina vitorioso no centro da soberania do universo com as marcas eternas da vitória.'
  },
  8: {
    mesNumero: 8,
    mesNome: 'Agosto',
    temaGeral: 'O Cordeiro e Bom Pastor que nos Guia',
    passagemPrincipal: 'Apocalipse 7:17',
    versiculoPrincipal: 'Porque o Cordeiro que está no meio do trono os apascentará e lhes servirá de guia para as fontes das águas da vida.',
    explicacaoTeologica: 'O mistério sublime da consolação: aquele que foi ferido como ovelha cuida pessoalmente de cada uma das nossas feridas como o nosso Supremo Pastor.'
  },
  9: {
    mesNumero: 9,
    mesNome: 'Setembro',
    temaGeral: 'A Vitória Inabalável do Cordeiro sobre o Mal',
    passagemPrincipal: 'Apocalipse 17:14',
    versiculoPrincipal: 'Batalharão contra o Cordeiro, e o Cordeiro os vencerá, porque é o Senhor dos senhores e o Rei dos reis.',
    explicacaoTeologica: 'Todas as oposições do mundo e das trevas cairão diante da supremacia de Cristo; a Igreja persevera na certeza do triunfo glorioso.'
  },
  10: {
    mesNumero: 10,
    mesNome: 'Outubro',
    temaGeral: 'A Justificação pela Fé e a Santidade Wesleyana',
    passagemPrincipal: 'Romanos 5:1',
    versiculoPrincipal: 'Tendo sido, pois, justificados pela fé, temos paz com Deus, por nosso Senhor Jesus Cristo.',
    explicacaoTeologica: 'No cerne da fé evangélica e do legado de John Wesley, a justificação mediante o sacrifício de Cristo nos outorga paz viva e renovação interior.'
  },
  11: {
    mesNumero: 11,
    mesNome: 'Novembro',
    temaGeral: 'As Gloriosas Bodas do Cordeiro',
    passagemPrincipal: 'Apocalipse 19:7',
    versiculoPrincipal: 'Regozijemo-nos, e alegremo-nos, e demos-lhe glória, porque vindas são as bodas do Cordeiro, e já a sua esposa se aprontou.',
    explicacaoTeologica: 'A história humana culminará em júbilo inefável, quando a Igreja remida se unirá para sempre ao Seu Salvador em bodas eternas.'
  },
  12: {
    mesNumero: 12,
    mesNome: 'Dezembro',
    temaGeral: 'A Glória do Cordeiro Ilumina a Eternidade',
    passagemPrincipal: 'Apocalipse 21:23',
    versiculoPrincipal: 'A cidade não necessita de sol nem de lua, para que nela resplandeçam, porque a glória de Deus a tem alumiado, e o Cordeiro é a sua lâmpada.',
    explicacaoTeologica: 'Na Nova Jerusalém, a presença visível de Jesus dissipará todo pranto, luto e noite; Ele é a luz perene que banhará todas as coisas.'
  }
};

// ==========================================
// 31 DIAS COMPLETOS COM VERSÍCULOS EXCLUSIVOS
// ==========================================
export const CALENDARIO_CORDEIRO_DIAS: CalendarioCordeiroDia[] = [
  {
    dia: 1,
    titulo: 'O Cordeiro Escolhido antes da Fundação do Mundo',
    passagem: '1 Pedro 1:19-20',
    versiculo: 'Mas pelo precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado, conhecido, com efeito, antes da fundação do mundo.',
    meditacao: 'O plano redentor de Deus não foi um improviso após a queda do homem; na presciência eterna, o Filho já havia se oferecido em amor eterno.',
    simboloCordeiro: 'A Aliança Eterna da Graça',
    oracao: 'Senhor Jesus, Cordeiro eterno, agradeço porque o Teu amor por mim foi planejado antes mesmo que as estrelas existissem.'
  },
  {
    dia: 2,
    titulo: 'O Cordeiro Provido no Monte Moriá',
    passagem: 'Gênesis 22:8',
    versiculo: 'Respondeu Abraão: Deus proverá para si o cordeiro para o holocausto, meu filho.',
    meditacao: 'No cume do Moriá, quando Isaque perguntou onde estava a vítima, Abraão profetizou que o próprio Deus proveria o substituto redentor.',
    simboloCordeiro: 'Jeová Jireh — O Deus da Provisão',
    oracao: 'Pai celestial, descanso na certeza de que Tu provês consolo, direção e salvação para a minha vida.'
  },
  {
    dia: 3,
    titulo: 'O Cordeiro Pascal e o Sangue nos Umbrais',
    passagem: 'Êxodo 12:13',
    versiculo: 'O sangue vos será por sinal nas casas em que estiverdes; e, vendo eu o sangue, passarei por cima de vós.',
    meditacao: 'A proteção dos lares em Gósen não dependia dos méritos humanos, mas do sangue aspergido nos umbrais. A nossa segurança é o sangue de Jesus.',
    simboloCordeiro: 'A Proteção e Libertação da Páscoa',
    oracao: 'Cordeiro Santo, que o Teu sangue precioso guarde os meus passos, a minha família e o meu lar neste dia.'
  },
  {
    dia: 4,
    titulo: 'O Cordeiro Perfeito e Sem Defeito',
    passagem: 'Êxodo 12:5',
    versiculo: 'O cordeiro será sem defeito, macho de um ano; podereis tomar um cordeiro ou um cabrito.',
    meditacao: 'A pureza impecável do cordeiro tipificava a vida sem pecado de Jesus, o único Justo capaz de satisfazer a justiça e revelar a misericórdia de Deus.',
    simboloCordeiro: 'A Impecabilidade e Pureza de Cristo',
    oracao: 'Jesus, modelo de santidade, purifica as minhas intenções e faz-me andar em integridade de coração.'
  },
  {
    dia: 5,
    titulo: 'O Cordeiro que Leva Nossas Dores',
    passagem: 'Isaías 53:4',
    versiculo: 'Verdadeiramente, ele tomou sobre si as nossas enfermidades e as nossas dores levou sobre si.',
    meditacao: 'Cristo não foi um espectador distante do sofrimento humano; Ele tomou sobre Si o peso das nossas angústias para nos presentear com a Sua paz.',
    simboloCordeiro: 'A Empatia e Compaixão Redentora',
    oracao: 'Senhor Jesus, entrego em Tuas mãos as aflições e cansaços que pesam em meu peito hoje.'
  },
  {
    dia: 6,
    titulo: 'O Cordeiro Moído pelas Nossas Iniquidades',
    passagem: 'Isaías 53:5',
    versiculo: 'Mas ele foi ferido pelas nossas transgressões e moído pelas nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e, pelas suas pisaduras, fomos sarados.',
    meditacao: 'A paz que hoje desfrutamos custou o suplício do Redentor. As Suas feridas são a fonte curadora que restaura a nossa alma.',
    simboloCordeiro: 'A Paz e a Cura da Cruz',
    oracao: 'Obrigado, Jesus, porque a Tua dor na cruz conquistou a minha reconciliação com o Pai e a saúde do meu espírito.'
  },
  {
    dia: 7,
    titulo: 'O Silêncio Majestoso perante os Tosquiadores',
    passagem: 'Isaías 53:7',
    versiculo: 'Como cordeiro foi levado ao matadouro; e, como ovelha muda perante os seus tosquiadores, ele não abriu a sua boca.',
    meditacao: 'A realeza de Jesus manifestou-se no Seu silêncio sereno. Ele calou para que a nossa voz pudesse ser ouvida com graça no santuário celestial.',
    simboloCordeiro: 'A Mansidão e Submissão Voluntária',
    oracao: 'Ensina-me, Senhor, a mansidão perante as injúrias e o domínio próprio em momentos de provação.'
  },
  {
    dia: 8,
    titulo: 'Eis o Cordeiro de Deus!',
    passagem: 'João 1:29',
    versiculo: 'No dia seguinte, viu João a Jesus, que vinha para ele, e disse: Eis o Cordeiro de Deus, que tira o pecado do mundo!',
    meditacao: 'João Batista sintetizou séculos de profecia numa única exclamação: Jesus não veio para maquiar faltas, mas para remover o pecado pela raiz.',
    simboloCordeiro: 'A Salvação Abrangente e Universal',
    oracao: 'Cordeiro de Deus, tira do meu coração tudo aquilo que me afasta da Tua santa presença.'
  },
  {
    dia: 9,
    titulo: 'Seguindo os Passos do Cordeiro',
    passagem: 'João 1:36-37',
    versiculo: 'E, vendo passar a Jesus, disse: Eis aqui o Cordeiro de Deus. E os dois discípulos ouviram-no dizer isso e seguiram a Jesus.',
    meditacao: 'Ao contemplar a beleza do Cordeiro, os discípulos deixaram tudo para trás. O discipulado cristão nasce do encantamento por quem Cristo é.',
    simboloCordeiro: 'O Discipulado Fiel e Verdadeiro',
    oracao: 'Mestre amado, que os meus passos Te sigam fielmente por onde quer que Tu me conduzires.'
  },
  {
    dia: 10,
    titulo: 'O Cordeiro que Ressuscitou e Vive para Sempre',
    passagem: 'Apocalipse 1:18',
    versiculo: 'E o que vivo e fui morto, mas eis aqui estou vivo para todo o sempre. Amém. E tenho as chaves da morte e do inferno.',
    meditacao: 'O sepulcro vazio proclamou que a morte não pôde reter o Cordeiro. A Sua vitória é a garantia inabalável da nossa ressurreição.',
    simboloCordeiro: 'O Triunfo Sobre o Sepulcro',
    oracao: 'Senhor ressurreto, dissipa todo medo do futuro com a certeza viva de que Tu reinas eternamente.'
  },
  {
    dia: 11,
    titulo: 'O Cordeiro Digno de Abrir o Livro da História',
    passagem: 'Apocalipse 5:2-5',
    versiculo: 'E olhei, e ninguém no céu, nem na terra, nem debaixo da terra podia abrir o livro, nem olhar para ele... Eis que o Leão da tribo de Judá, a Raiz de Davi, venceu para abrir o livro.',
    meditacao: 'O destino da história humana não está nas mãos dos imperadores da terra, mas nas mãos traspassadas do Leão que se fez Cordeiro.',
    simboloCordeiro: 'A Soberania da Providência Divina',
    oracao: 'Rei dos séculos, coloco a história da minha vida sob a Tua soberana e amorosa direção.'
  },
  {
    dia: 12,
    titulo: 'O Cordeiro que Está no Centro do Trono',
    passagem: 'Apocalipse 5:6',
    versiculo: 'E olhei, e eis que estava no meio do trono e dos quatro animais viventes e entre os anciãos um Cordeiro, como havendo sido morto.',
    meditacao: 'As marcas do sacrifício permanecem em Jesus não como lembrança de derrota, mas como os brasões gloriosos do amor redentor.',
    simboloCordeiro: 'O Centro de Toda a Adoração Celestial',
    oracao: 'Jesus, sê o centro dos meus pensamentos, das minhas escolhas e das minhas canções.'
  },
  {
    dia: 13,
    titulo: 'O Cântico Novo ao Cordeiro',
    passagem: 'Apocalipse 5:9',
    versiculo: 'E cantavam um novo cântico, dizendo: Digno és de tomar o livro e de abrir os seus selos, porque foste morto e com o teu sangue compraste para Deus homens de toda tribo, e língua, e povo, e nação.',
    meditacao: 'O Evangelho transcende fronteiras, etnias e culturas. O sangue do Cordeiro uniu uma família santa de adoradores de todos os confins da terra.',
    simboloCordeiro: 'A Graça Multicultural e Missionária',
    oracao: 'Dá-me, Senhor, um coração ardente pelas almas e pela expansão do Teu Reino entre todos os povos.'
  },
  {
    dia: 14,
    titulo: 'Milhares de Milhares Louvando o Cordeiro',
    passagem: 'Apocalipse 5:11-12',
    versiculo: 'Digno é o Cordeiro, que foi morto, de receber o poder, e riquezas, e sabedoria, e força, e honra, e glória, e louvor.',
    meditacao: 'Todo o poder terreno se esvai, mas o louvor ao Cordeiro ecoará pelos séculos dos séculos com intensidade e júbilo inesgotáveis.',
    simboloCordeiro: 'A Glória e Majestade Cósmica',
    oracao: 'A Ti, ó Cordeiro Santo, consagro a minha força, os meus dons e todo o meu louvor.'
  },
  {
    dia: 15,
    titulo: 'A Paz que o Cordeiro Dá em Meio à Tempestade',
    passagem: 'João 14:27',
    versiculo: 'Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.',
    meditacao: 'A paz que Cristo outorga não depende de circunstâncias favoráveis, mas da certeza inabalável da Sua presença constante.',
    simboloCordeiro: 'O Príncipe da Paz Perpétua',
    oracao: 'Acalma as tempestades do meu coração, Senhor, e preenche-me com a Tua paz celestial.'
  },
  {
    dia: 16,
    titulo: 'Lavados e Branqueados no Sangue do Cordeiro',
    passagem: 'Apocalipse 7:14',
    versiculo: 'Estes são os que vieram da grande tribulação, lavaram as suas vestes e as branquearam no sangue do Cordeiro.',
    meditacao: 'O maior paradoxo da graça: o sangue que é carmesim lava a alma do pecador e a torna mais alva que a neve.',
    simboloCordeiro: 'A Inteira Santificação pela Fé',
    oracao: 'Lava-me, Jesus, de todo pensamento egoísta e reveste-me com as vestiduras da Tua justiça.'
  },
  {
    dia: 17,
    titulo: 'O Cordeiro Enxugará dos Olhos Toda Lágrima',
    passagem: 'Apocalipse 7:17',
    versiculo: 'Porque o Cordeiro que está no meio do trono os apascentará e lhes servirá de guia para as fontes das águas da vida; e Deus limpará de seus olhos toda lágrima.',
    meditacao: 'Nenhuma dor do crente será esquecida. As mãos que foram feridas na cruz serão as mesmas que enxugarão pessoalmente cada uma das nossas lágrimas.',
    simboloCordeiro: 'O Consolo Definitivo e Eterno',
    oracao: 'Consolador da minha alma, cura as feridas do passado e renova a minha esperança no Teu cuidado.'
  },
  {
    dia: 18,
    titulo: 'Vencendo o Inimigo pelo Sangue do Cordeiro',
    passagem: 'Apocalipse 12:11',
    versiculo: 'E eles o venceram pelo sangue do Cordeiro e pela palavra do seu testemunho; e não amaram a sua vida até à morte.',
    meditacao: 'Na batalha contra a culpa, a acusação e o desânimo, a nossa vitória não reside em méritos próprios, mas no sangue derramado e no testemunho fiel de Cristo.',
    simboloCordeiro: 'A Armadura Espiritual Invencível',
    oracao: 'Pelo poder do Teu sangue, Senhor, rejeito as acusações e mentiras do adversário sobre a minha vida.'
  },
  {
    dia: 19,
    titulo: 'O Nome do Pai e do Cordeiro nas Nossas Frontes',
    passagem: 'Apocalipse 14:1',
    versiculo: 'E olhei, e eis que estava o Cordeiro sobre o monte Sião, e com ele cento e quarenta e quatro mil, que em suas testas tinham escrito o nome dele e o de seu Pai.',
    meditacao: 'Pertencemos ao Senhor! Ter o Seu nome selado significa proteção indefectível, identidade irrevogável e pertença eterna à família de Deus.',
    simboloCordeiro: 'O Selo e a Identidade de Filhos',
    oracao: 'Obrigado, Pai, porque pertenço a Ti e nada poderá arrebatar-me das Tuas mãos protetoras.'
  },
  {
    dia: 20,
    titulo: 'O Cântico de Moisés e do Cordeiro',
    passagem: 'Apocalipse 15:3',
    versiculo: 'E cantavam o cântico de Moisés, servo de Deus, e o cântico do Cordeiro, dizendo: Grandes e maravilhosas são as tuas obras, Senhor, Deus Todo-Poderoso! Justos e verdadeiros são os teus caminhos, ó Rei dos santos!',
    meditacao: 'A canção da redenção une o Mar Vermelho ao Calvário: em todas as épocas, o Senhor é quem liberta o Seu povo com mão forte e amor inesgotável.',
    simboloCordeiro: 'A Harmonia Eterna das Escrituras',
    oracao: 'Justos e retos são os Teus caminhos, Senhor; louvo o Teu nome pela fidelidade demonstrada de geração em geração.'
  },
  {
    dia: 21,
    titulo: 'O Cordeiro Vence porque É o Senhor dos Senhores',
    passagem: 'Apocalipse 17:14',
    versiculo: 'Batalharão contra o Cordeiro, e o Cordeiro os vencerá, porque é o Senhor dos senhores e o Rei dos reis; vencerão com ele os chamados, e eleitos, e fiéis.',
    meditacao: 'Nenhum império ou filosofia humana prevalecerá contra Cristo. Ele reina supremo, e com Ele marcham aqueles que perseveram na fé.',
    simboloCordeiro: 'A Realeza Triunfante e Absoluta',
    oracao: 'Rei dos reis, governa as minhas vontades e dá-me fidelidade até o fim da minha jornada terrena.'
  },
  {
    dia: 22,
    titulo: 'A Alegria e o Banquete das Bodas do Cordeiro',
    passagem: 'Apocalipse 19:7',
    versiculo: 'Regozijemo-nos, e alegremo-nos, e demos-lhe glória, porque vindas são as bodas do Cordeiro, e já a sua esposa se aprontou.',
    meditacao: 'A santidade a que somos chamados hoje é a preparação comovente de uma noiva para o encontro eterno com o seu Esposo celeste.',
    simboloCordeiro: 'O Amor Nupcial de Cristo pela Igreja',
    oracao: 'Santifica a Tua igreja, Senhor Jesus, e guarda-nos puros e vigilantes para o Teu glorioso regresso.'
  },
  {
    dia: 23,
    titulo: 'Bem-Aventurados os Convidados para as Bodas',
    passagem: 'Apocalipse 19:9',
    versiculo: 'E disse-me: Escreve: Bem-aventurados aqueles que são chamados à ceia das bodas do Cordeiro.',
    meditacao: 'O convite da graça é generoso e gratuito: todo aquele que tem sede pode vir e participar da festa eterna da reconciliação com Deus.',
    simboloCordeiro: 'O Convite Gracioso do Evangelho',
    oracao: 'Agradeço, Pai bondoso, pelo privilégio imerecido de ser convidado para a Tua santa comunhão.'
  },
  {
    dia: 24,
    titulo: 'O Muro da Cidade e os Doze Apóstolos do Cordeiro',
    passagem: 'Apocalipse 21:14',
    versiculo: 'E o muro da cidade tinha doze fundamentos e, neles, os nomes dos doze apóstolos do Cordeiro.',
    meditacao: 'A Nova Jerusalém repousa sobre o fundamento sólido do testemunho apostólico a respeito de Cristo Jesus, a Pedra Angular inabalável.',
    simboloCordeiro: 'O Alicerce Inabalável da Verdade',
    oracao: 'Edifica a minha vida na verdade sólida da Tua Palavra e livra-me de todo vento de doutrina falsa.'
  },
  {
    dia: 25,
    titulo: 'O Cordeiro É o Templo Eterno',
    passagem: 'Apocalipse 21:22',
    versiculo: 'E nela não vi templo, porque o seu templo é o Senhor, Deus Todo-Poderoso, e o Cordeiro.',
    meditacao: 'Na consumação da história, não precisaremos de intermediários físicos: teremos comunhão plena, face a face e sem véu com o Deus Vivo.',
    simboloCordeiro: 'A Habitação Direta com Deus',
    oracao: 'Ansio pelo dia em que Te verei face a face, ó Deus, em santidade e amor pleno.'
  },
  {
    dia: 26,
    titulo: 'A Luz Radiante do Cordeiro',
    passagem: 'Apocalipse 21:23',
    versiculo: 'E a cidade não necessita de sol nem de lua, para que nela resplandeçam, porque a glória de Deus a tem alumiado, e o Cordeiro é a sua lâmpada.',
    meditacao: 'O sol terreno empalidece diante do resplendor de Jesus. A Sua justiça dissipa todas as trevas morais, espirituais e existenciais da nossa vida.',
    simboloCordeiro: 'A Lâmpada e a Luz do Mundo',
    oracao: 'Ilumina os recônditos da minha mente com a luz cristalina da Tua verdade, Senhor.'
  },
  {
    dia: 27,
    titulo: 'O Livro da Vida do Cordeiro',
    passagem: 'Apocalipse 21:27',
    versiculo: 'E não entrará nela coisa alguma que contamine e cometa abominação e mentira; mas só os que estão inscritos no livro da vida do Cordeiro.',
    meditacao: 'A maior alegria do cristão não reside nos feitos ou aplausos terrenos, mas em ter o seu nome registrado no Livro da Vida pelo Salvador.',
    simboloCordeiro: 'A Cidadania Eterna no Céu',
    oracao: 'Guarda o meu coração na certeza alegre de que o meu nome está gravado nas palmas das Tuas mãos e no Teu livro.'
  },
  {
    dia: 28,
    titulo: 'O Rio Puro da Água da Vida que Flui do Trono',
    passagem: 'Apocalipse 22:1',
    versiculo: 'E mostrou-me o rio puro da água da vida, claro como cristal, que procedia do trono de Deus e do Cordeiro.',
    meditacao: 'A vida eterna é um manancial constante que brota de Deus. O Espírito Santo sacia a nossa sede espiritual e nos refrigera a cada aurora.',
    simboloCordeiro: 'O Rio da Graça e do Espírito',
    oracao: 'Sacia a minha alma, Espírito Santo, com as correntes vivas da graça que fluem do Cordeiro.'
  },
  {
    dia: 29,
    titulo: 'O Trono do Cordeiro e o Serviço em Alegria',
    passagem: 'Apocalipse 22:3',
    versiculo: 'E ali nunca mais haverá maldição contra alguém; e nela estará o trono de Deus e do Cordeiro, e os seus servos o servirão.',
    meditacao: 'A eternidade não será ociosidade, mas um serviço jubiloso, sem cansaço, sem pecado e sem lágrimas, na presença deslumbrante de Cristo.',
    simboloCordeiro: 'A Remoção Total de Toda Maldição',
    oracao: 'Capacita-me a Te servir hoje com a mesma alegria e prontidão com que Te servirei na glória.'
  },
  {
    dia: 30,
    titulo: 'Veremos o Rosto do Cordeiro',
    passagem: 'Apocalipse 22:4',
    versiculo: 'E verão o seu rosto, e nas suas testas estará o seu nome.',
    meditacao: 'A maior promessa de todas as Escrituras: contemplar a face amorosa de Jesus, que nos amou, deu a Sua vida por nós e nos chamou de amigos.',
    simboloCordeiro: 'A Visão Beatífica Face a Face',
    oracao: 'Que a esperança de contemplar a Tua face me guarde em pureza, fé e constância todos os dias.'
  },
  {
    dia: 31,
    titulo: 'Maranata! Ora Vem, Senhor Jesus!',
    passagem: 'Apocalipse 22:20-21',
    versiculo: 'Aquele que testifica estas coisas diz: Certamente, cedo venho. Amém! Ora, vem, Senhor Jesus! A graça de nosso Senhor Jesus Cristo seja com todos vós. Amém.',
    meditacao: 'O Cânon Sagrado encerra com a oração ardente da Igreja expectante. O Cordeiro que veio em humildade voltará em glória como Rei triunfante.',
    simboloCordeiro: 'A Consumação de Todas as Promessas',
    oracao: 'Vem, Senhor Jesus! Que a Tua doce graça encha a minha vida, a Tua igreja e toda a terra. Amém!'
  }
];

export const getCordeiroDevocionalDoDia = (diaDoMes: number): CalendarioCordeiroDia => {
  const safeDay = Math.min(Math.max(diaDoMes, 1), 31);
  return CALENDARIO_CORDEIRO_DIAS[safeDay - 1] || CALENDARIO_CORDEIRO_DIAS[0];
};

export const getVersiculoTemaDoMes = (mesNumero: number): VersiculoTemaMensal => {
  const safeMonth = Math.min(Math.max(mesNumero, 1), 12);
  return VERSICULOS_TEMAS_MENSAIS[safeMonth] || VERSICULOS_TEMAS_MENSAIS[1];
};
