export interface BibleBookInfo {
  id: string;
  name: string;
  abbrev: string;
  apiSlug: string;
  testament: 'AT' | 'NT';
  category: 'Pentateuco' | 'Históricos' | 'Poéticos' | 'Profetas Maiores' | 'Profetas Menores' | 'Evangelhos' | 'Histórico' | 'Cartas Paulinas' | 'Cartas Gerais' | 'Profético';
  chaptersCount: number;
}

export const ALL_BIBLE_BOOKS: BibleBookInfo[] = [
  // Antigo Testamento (39 Livros)
  // Pentateuco
  { id: 'gn', name: 'Gênesis', abbrev: 'Gn', apiSlug: 'genesis', testament: 'AT', category: 'Pentateuco', chaptersCount: 50 },
  { id: 'ex', name: 'Êxodo', abbrev: 'Êx', apiSlug: 'exodus', testament: 'AT', category: 'Pentateuco', chaptersCount: 40 },
  { id: 'lv', name: 'Levítico', abbrev: 'Lv', apiSlug: 'leviticus', testament: 'AT', category: 'Pentateuco', chaptersCount: 27 },
  { id: 'nm', name: 'Números', abbrev: 'Nm', apiSlug: 'numbers', testament: 'AT', category: 'Pentateuco', chaptersCount: 36 },
  { id: 'dt', name: 'Deuteronômio', abbrev: 'Dt', apiSlug: 'deuteronomy', testament: 'AT', category: 'Pentateuco', chaptersCount: 34 },
  // Históricos
  { id: 'js', name: 'Josué', abbrev: 'Js', apiSlug: 'joshua', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: 'jz', name: 'Juízes', abbrev: 'Jz', apiSlug: 'judges', testament: 'AT', category: 'Históricos', chaptersCount: 21 },
  { id: 'rt', name: 'Rute', abbrev: 'Rt', apiSlug: 'ruth', testament: 'AT', category: 'Históricos', chaptersCount: 4 },
  { id: '1sm', name: '1 Samuel', abbrev: '1Sm', apiSlug: '1samuel', testament: 'AT', category: 'Históricos', chaptersCount: 31 },
  { id: '2sm', name: '2 Samuel', abbrev: '2Sm', apiSlug: '2samuel', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: '1rs', name: '1 Reis', abbrev: '1Rs', apiSlug: '1kings', testament: 'AT', category: 'Históricos', chaptersCount: 22 },
  { id: '2rs', name: '2 Reis', abbrev: '2Rs', apiSlug: '2kings', testament: 'AT', category: 'Históricos', chaptersCount: 25 },
  { id: '1cr', name: '1 Crônicas', abbrev: '1Cr', apiSlug: '1chronicles', testament: 'AT', category: 'Históricos', chaptersCount: 29 },
  { id: '2cr', name: '2 Crônicas', abbrev: '2Cr', apiSlug: '2chronicles', testament: 'AT', category: 'Históricos', chaptersCount: 36 },
  { id: 'ed', name: 'Esdras', abbrev: 'Ed', apiSlug: 'ezra', testament: 'AT', category: 'Históricos', chaptersCount: 10 },
  { id: 'ne', name: 'Neemias', abbrev: 'Ne', apiSlug: 'nehemiah', testament: 'AT', category: 'Históricos', chaptersCount: 13 },
  { id: 'et', name: 'Ester', abbrev: 'Et', apiSlug: 'esther', testament: 'AT', category: 'Históricos', chaptersCount: 10 },
  // Poéticos
  { id: 'job', name: 'Jó', abbrev: 'Jó', apiSlug: 'job', testament: 'AT', category: 'Poéticos', chaptersCount: 42 },
  { id: 'sl', name: 'Salmos', abbrev: 'Sl', apiSlug: 'psalms', testament: 'AT', category: 'Poéticos', chaptersCount: 150 },
  { id: 'pv', name: 'Provérbios', abbrev: 'Pv', apiSlug: 'proverbs', testament: 'AT', category: 'Poéticos', chaptersCount: 31 },
  { id: 'ec', name: 'Eclesiastes', abbrev: 'Ec', apiSlug: 'ecclesiastes', testament: 'AT', category: 'Poéticos', chaptersCount: 12 },
  { id: 'ct', name: 'Cantares', abbrev: 'Ct', apiSlug: 'songofsolomon', testament: 'AT', category: 'Poéticos', chaptersCount: 8 },
  // Profetas Maiores
  { id: 'is', name: 'Isaías', abbrev: 'Is', apiSlug: 'isaiah', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 66 },
  { id: 'jr', name: 'Jeremias', abbrev: 'Jr', apiSlug: 'jeremiah', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 52 },
  { id: 'lm', name: 'Lamentações', abbrev: 'Lm', apiSlug: 'lamentations', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 5 },
  { id: 'ez', name: 'Ezequiel', abbrev: 'Ez', apiSlug: 'ezekiel', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 48 },
  { id: 'dn', name: 'Daniel', abbrev: 'Dn', apiSlug: 'daniel', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 12 },
  // Profetas Menores
  { id: 'os', name: 'Oseias', abbrev: 'Os', apiSlug: 'hosea', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'jl', name: 'Joel', abbrev: 'Jl', apiSlug: 'joel', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'am', name: 'Amós', abbrev: 'Am', apiSlug: 'amos', testament: 'AT', category: 'Profetas Menores', chaptersCount: 9 },
  { id: 'ob', name: 'Obadias', abbrev: 'Ob', apiSlug: 'obadiah', testament: 'AT', category: 'Profetas Menores', chaptersCount: 1 },
  { id: 'jn', name: 'Jonas', abbrev: 'Jn', apiSlug: 'jonah', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },
  { id: 'mq', name: 'Miqueias', abbrev: 'Mq', apiSlug: 'micah', testament: 'AT', category: 'Profetas Menores', chaptersCount: 7 },
  { id: 'na', name: 'Naum', abbrev: 'Na', apiSlug: 'nahum', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'hc', name: 'Habacuque', abbrev: 'Hc', apiSlug: 'habakkuk', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'sf', name: 'Sofonias', abbrev: 'Sf', apiSlug: 'zephaniah', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'ag', name: 'Ageu', abbrev: 'Ag', apiSlug: 'haggai', testament: 'AT', category: 'Profetas Menores', chaptersCount: 2 },
  { id: 'zc', name: 'Zacarias', abbrev: 'Zc', apiSlug: 'zechariah', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'ml', name: 'Malaquias', abbrev: 'Ml', apiSlug: 'malachi', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },

  // Novo Testamento (27 Livros)
  // Evangelhos & Histórico
  { id: 'mt', name: 'Mateus', abbrev: 'Mt', apiSlug: 'matthew', testament: 'NT', category: 'Evangelhos', chaptersCount: 28 },
  { id: 'mc', name: 'Marcos', abbrev: 'Mc', apiSlug: 'mark', testament: 'NT', category: 'Evangelhos', chaptersCount: 16 },
  { id: 'lc', name: 'Lucas', abbrev: 'Lc', apiSlug: 'luke', testament: 'NT', category: 'Evangelhos', chaptersCount: 24 },
  { id: 'jo', name: 'João', abbrev: 'Jo', apiSlug: 'john', testament: 'NT', category: 'Evangelhos', chaptersCount: 21 },
  { id: 'at', name: 'Atos dos Apóstolos', abbrev: 'At', apiSlug: 'acts', testament: 'NT', category: 'Histórico', chaptersCount: 28 },
  // Cartas Paulinas
  { id: 'rm', name: 'Romanos', abbrev: 'Rm', apiSlug: 'romans', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '1co', name: '1 Coríntios', abbrev: '1Co', apiSlug: '1corinthians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '2co', name: '2 Coríntios', abbrev: '2Co', apiSlug: '2corinthians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 13 },
  { id: 'gl', name: 'Gálatas', abbrev: 'Gl', apiSlug: 'galatians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'ef', name: 'Efésios', abbrev: 'Ef', apiSlug: 'ephesians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'fp', name: 'Filipenses', abbrev: 'Fp', apiSlug: 'philippians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'cl', name: 'Colossenses', abbrev: 'Cl', apiSlug: 'colossians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: '1ts', name: '1 Tessalonicenses', abbrev: '1Ts', apiSlug: '1thessalonians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 5 },
  { id: '2ts', name: '2 Tessalonicenses', abbrev: '2Ts', apiSlug: '2thessalonians', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: '1tm', name: '1 Timóteo', abbrev: '1Tm', apiSlug: '1timothy', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: '2tm', name: '2 Timóteo', abbrev: '2Tm', apiSlug: '2timothy', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'tt', name: 'Tito', abbrev: 'Tt', apiSlug: 'titus', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: 'fm', name: 'Filemom', abbrev: 'Fm', apiSlug: 'philemon', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 1 },
  // Cartas Gerais
  { id: 'hb', name: 'Hebreus', abbrev: 'Hb', apiSlug: 'hebrews', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 13 },
  { id: 'tg', name: 'Tiago', abbrev: 'Tg', apiSlug: 'james', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '1pe', name: '1 Pedro', abbrev: '1Pe', apiSlug: '1peter', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2pe', name: '2 Pedro', abbrev: '2Pe', apiSlug: '2peter', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 3 },
  { id: '1jo', name: '1 João', abbrev: '1Jo', testament: 'NT', apiSlug: '1john', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2jo', name: '2 João', abbrev: '2Jo', testament: 'NT', apiSlug: '2john', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: '3jo', name: '3 João', abbrev: '3Jo', testament: 'NT', apiSlug: '3john', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: 'jd', name: 'Judas', abbrev: 'Jd', testament: 'NT', apiSlug: 'jude', category: 'Cartas Gerais', chaptersCount: 1 },
  // Profético
  { id: 'ap', name: 'Apocalipse', abbrev: 'Ap', apiSlug: 'revelation', testament: 'NT', category: 'Profético', chaptersCount: 22 }
];
