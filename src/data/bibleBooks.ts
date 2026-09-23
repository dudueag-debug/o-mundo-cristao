export interface BibleChapter {
  book: string;
  chapter: number;
  testament: 'Antigo Testamento' | 'Novo Testamento';
  verses: { number: number; text: string }[];
}

export const SAMPLE_BIBLE_CHAPTERS: BibleChapter[] = [
  {
    book: 'Salmos',
    chapter: 23,
    testament: 'Antigo Testamento',
    verses: [
      { number: 1, text: 'O Senhor é o meu pastor; nada me faltará.' },
      { number: 2, text: 'Ele me faz repousar em pastos verdejantes; leva-me para junto das águas de descanso;' },
      { number: 3, text: 'refrigera-me a alma. Guia-me pelas veredas da justiça por amor do seu nome.' },
      { number: 4, text: 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque tu estás comigo; a tua vara e o teu cajado me consolam.' },
      { number: 5, text: 'Preparas-me uma mesa na presença dos meus adversários, unges-me a cabeça com óleo; o meu cálice transborda.' },
      { number: 6, text: 'Bondade e misericórdia certamente me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor para todo o sempre.' }
    ]
  },
  {
    book: 'Salmos',
    chapter: 91,
    testament: 'Antigo Testamento',
    verses: [
      { number: 1, text: 'O que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente' },
      { number: 2, text: 'diz ao Senhor: Meu refúgio e meu baluarte, Deus meu, em quem confio.' },
      { number: 3, text: 'Pois ele te livrará do laço do caçador e da peste perniciosa.' },
      { number: 4, text: 'Cobrir-te-á com as suas penas, e, sob as suas asas, estarás seguro; a sua verdade é broquel e escudo.' },
      { number: 5, text: 'Não te assustarás do terror noturno, nem da seta que voa de dia,' },
      { number: 6, text: 'nem da peste que se propaga nas trevas, nem da mortandade que assola ao meio-dia.' },
      { number: 7, text: 'Caiam mil ao teu lado, e dez mil, à tua direita; tu não serás atingido.' },
      { number: 11, text: 'Porque aos seus anjos dará ordens a teu respeito, para que te guardem em todos os teus caminhos.' }
    ]
  },
  {
    book: 'Romanos',
    chapter: 8,
    testament: 'Novo Testamento',
    verses: [
      { number: 1, text: 'Agora, pois, já nenhuma condenação há para os que estão em Cristo Jesus.' },
      { number: 2, text: 'Porque a lei do Espírito da vida, em Cristo Jesus, te livrou da lei do pecado e da morte.' },
      { number: 14, text: 'Pois todos os que são guiados pelo Espírito de Deus são filhos de Deus.' },
      { number: 15, text: 'Porque não recebestes o espírito de escravidão, para outrora estardes em temor; mas recebestes o espírito de adoção, baseados no qual clamamos: Aba, Pai.' },
      { number: 16, text: 'O próprio Espírito testifica com o nosso espírito que somos filhos de Deus.' },
      { number: 28, text: 'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.' },
      { number: 31, text: 'Que diremos, pois, à vista destas coisas? Se Deus é por nós, quem será contra nós?' },
      { number: 37, text: 'Em todas estas coisas, porém, somos mais que vencedores, por meio daquele que nos amou.' },
      { number: 38, text: 'Porque eu estou bem certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as coisas do presente, nem do porvir, nem os poderes,' },
      { number: 39, text: 'nem a altura, nem a profundidade, nem qualquer outra criatura poderá separar-nos do amor de Deus, que está em Cristo Jesus, nosso Senhor.' }
    ]
  },
  {
    book: '1 Coríntios',
    chapter: 13,
    testament: 'Novo Testamento',
    verses: [
      { number: 1, text: 'Ainda que eu fale as línguas dos homens e dos anjos, se não tiver amor, serei como o bronze que soa ou como o címbalo que retine.' },
      { number: 2, text: 'Ainda que eu tenha o dom de profetizar e conheça todos os mistérios e toda a ciência; ainda que eu tenha tamanha fé, a ponto de transportar montes, se não tiver amor, nada serei.' },
      { number: 4, text: 'O amor é paciente, é benigno; o amor não arde em ciúmes, não se ufana, não se ensoberbe,' },
      { number: 7, text: 'tudo sofre, tudo crê, tudo espera, tudo suporta.' },
      { number: 8, text: 'O amor jamais acaba.' },
      { number: 13, text: 'Agora, pois, permanecem a fé, a esperança e o amor, estes três; porém o maior destes é o amor.' }
    ]
  },
  {
    book: 'João',
    chapter: 3,
    testament: 'Novo Testamento',
    verses: [
      { number: 3, text: 'A isto, respondeu Jesus: Em verdade, em verdade te digo que, se alguém não nascer de novo, não pode ver o reino de Deus.' },
      { number: 5, text: 'Respondeu Jesus: Em verdade, em verdade te digo: quem não nascer da água e do Espírito não pode entrar no reino de Deus.' },
      { number: 16, text: 'Porque Deus amou ao mundo de tal maneira que deu o seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna.' },
      { number: 17, text: 'Porquanto Deus enviou o seu Filho ao mundo, não para que julgasse o mundo, mas para que o mundo fosse salvo por ele.' }
    ]
  }
];
