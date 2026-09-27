export interface BibleBookInfo {
  id: string;
  bookNumber: number; // 1 a 66 (Cânon Bíblico Oficial)
  name: string;
  abbrev: string;
  apiSlug: string;
  testament: 'AT' | 'NT';
  category: 'Pentateuco' | 'Históricos' | 'Poéticos' | 'Profetas Maiores' | 'Profetas Menores' | 'Evangelhos' | 'Histórico' | 'Cartas Paulinas' | 'Cartas Gerais' | 'Profético';
  chaptersCount: number;
}

export const ALL_BIBLE_BOOKS: BibleBookInfo[] = [
  // ==========================================
  // Antigo Testamento (39 Livros • Números 1 a 39)
  // ==========================================
  // Pentateuco (A Lei de Moisés • Torá)
  { id: 'gn', bookNumber: 1, name: 'Gênesis', abbrev: 'Gn', apiSlug: 'genesis', testament: 'AT', category: 'Pentateuco', chaptersCount: 50 },
  { id: 'ex', bookNumber: 2, name: 'Êxodo', abbrev: 'Êx', apiSlug: 'exodus', testament: 'AT', category: 'Pentateuco', chaptersCount: 40 },
  { id: 'lv', bookNumber: 3, name: 'Levítico', abbrev: 'Lv', apiSlug: 'leviticus', testament: 'AT', category: 'Pentateuco', chaptersCount: 27 },
  { id: 'nm', bookNumber: 4, name: 'Números', abbrev: 'Nm', apiSlug: 'numbers', testament: 'AT', category: 'Pentateuco', chaptersCount: 36 },
  { id: 'dt', bookNumber: 5, name: 'Deuteronômio', abbrev: 'Dt', apiSlug: 'deuteronomy', testament: 'AT', category: 'Pentateuco', chaptersCount: 34 },

  // Livros Históricos (12 Livros)
  { id: 'js', bookNumber: 6, name: 'Josué', abbrev: 'Js', apiSlug: 'joshua', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: 'jz', bookNumber: 7, name: 'Juízes', abbrev: 'Jz', apiSlug: 'judges', testament: 'AT', category: 'Históricos', chaptersCount: 21 },
  { id: 'rt', bookNumber: 8, name: 'Rute', abbrev: 'Rt', apiSlug: 'ruth', testament: 'AT', category: 'Históricos', chaptersCount: 4 },
  { id: '1sm', bookNumber: 9, name: '1 Samuel', abbrev: '1Sm', apiSlug: '1 samuel', testament: 'AT', category: 'Históricos', chaptersCount: 31 },
  { id: '2sm', bookNumber: 10, name: '2 Samuel', abbrev: '2Sm', apiSlug: '2 samuel', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: '1rs', bookNumber: 11, name: '1 Reis', abbrev: '1Rs', apiSlug: '1 reis', testament: 'AT', category: 'Históricos', chaptersCount: 22 },
  { id: '2rs', bookNumber: 12, name: '2 Reis', abbrev: '2Rs', apiSlug: '2 reis', testament: 'AT', category: 'Históricos', chaptersCount: 25 },
  { id: '1cr', bookNumber: 13, name: '1 Crônicas', abbrev: '1Cr', apiSlug: '1 cronicas', testament: 'AT', category: 'Históricos', chaptersCount: 29 },
  { id: '2cr', bookNumber: 14, name: '2 Crônicas', abbrev: '2Cr', apiSlug: '2 cronicas', testament: 'AT', category: 'Históricos', chaptersCount: 36 },
  { id: 'ed', bookNumber: 15, name: 'Esdras', abbrev: 'Ed', apiSlug: 'ezra', testament: 'AT', category: 'Históricos', chaptersCount: 10 },
  { id: 'ne', bookNumber: 16, name: 'Neemias', abbrev: 'Ne', apiSlug: 'nehemiah', testament: 'AT', category: 'Históricos', chaptersCount: 13 },
  { id: 'et', bookNumber: 17, name: 'Ester', abbrev: 'Et', apiSlug: 'esther', testament: 'AT', category: 'Históricos', chaptersCount: 10 },

  // Livros Poéticos e Sapienciais (5 Livros)
  { id: 'job', bookNumber: 18, name: 'Jó', abbrev: 'Jó', apiSlug: 'job', testament: 'AT', category: 'Poéticos', chaptersCount: 42 },
  { id: 'sl', bookNumber: 19, name: 'Salmos', abbrev: 'Sl', apiSlug: 'salmos', testament: 'AT', category: 'Poéticos', chaptersCount: 150 },
  { id: 'pv', bookNumber: 20, name: 'Provérbios', abbrev: 'Pv', apiSlug: 'proverbios', testament: 'AT', category: 'Poéticos', chaptersCount: 31 },
  { id: 'ec', bookNumber: 21, name: 'Eclesiastes', abbrev: 'Ec', apiSlug: 'eclesiastes', testament: 'AT', category: 'Poéticos', chaptersCount: 12 },
  { id: 'ct', bookNumber: 22, name: 'Cantares', abbrev: 'Ct', apiSlug: 'cantares', testament: 'AT', category: 'Poéticos', chaptersCount: 8 },

  // Profetas Maiores (5 Livros)
  { id: 'is', bookNumber: 23, name: 'Isaías', abbrev: 'Is', apiSlug: 'isaias', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 66 },
  { id: 'jr', bookNumber: 24, name: 'Jeremias', abbrev: 'Jr', apiSlug: 'jeremias', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 52 },
  { id: 'lm', bookNumber: 25, name: 'Lamentações', abbrev: 'Lm', apiSlug: 'lamentacoes', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 5 },
  { id: 'ez', bookNumber: 26, name: 'Ezequiel', abbrev: 'Ez', apiSlug: 'ezequiel', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 48 },
  { id: 'dn', bookNumber: 27, name: 'Daniel', abbrev: 'Dn', apiSlug: 'daniel', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 12 },

  // Profetas Menores (12 Livros)
  { id: 'os', bookNumber: 28, name: 'Oseias', abbrev: 'Os', apiSlug: 'oseias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'jl', bookNumber: 29, name: 'Joel', abbrev: 'Jl', apiSlug: 'joel', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'am', bookNumber: 30, name: 'Amós', abbrev: 'Am', apiSlug: 'amos', testament: 'AT', category: 'Profetas Menores', chaptersCount: 9 },
  { id: 'ob', bookNumber: 31, name: 'Obadias', abbrev: 'Ob', apiSlug: 'obadias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 1 },
  { id: 'jn', bookNumber: 32, name: 'Jonas', abbrev: 'Jn', apiSlug: 'jonas', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },
  { id: 'mq', bookNumber: 33, name: 'Miqueias', abbrev: 'Mq', apiSlug: 'miqueias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 7 },
  { id: 'na', bookNumber: 34, name: 'Naum', abbrev: 'Na', apiSlug: 'naum', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'hc', bookNumber: 35, name: 'Habacuque', abbrev: 'Hc', apiSlug: 'habacuque', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'sf', bookNumber: 36, name: 'Sofonias', abbrev: 'Sf', apiSlug: 'sofonias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'ag', bookNumber: 37, name: 'Ageu', abbrev: 'Ag', apiSlug: 'ageu', testament: 'AT', category: 'Profetas Menores', chaptersCount: 2 },
  { id: 'zc', bookNumber: 38, name: 'Zacarias', abbrev: 'Zc', apiSlug: 'zacarias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'ml', bookNumber: 39, name: 'Malaquias', abbrev: 'Ml', apiSlug: 'malaquias', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },

  // ==========================================
  // Novo Testamento (27 Livros • Números 40 a 66)
  // ==========================================
  // Evangelhos (4 Livros)
  { id: 'mt', bookNumber: 40, name: 'Mateus', abbrev: 'Mt', apiSlug: 'mateus', testament: 'NT', category: 'Evangelhos', chaptersCount: 28 },
  { id: 'mc', bookNumber: 41, name: 'Marcos', abbrev: 'Mc', apiSlug: 'marcos', testament: 'NT', category: 'Evangelhos', chaptersCount: 16 },
  { id: 'lc', bookNumber: 42, name: 'Lucas', abbrev: 'Lc', apiSlug: 'lucas', testament: 'NT', category: 'Evangelhos', chaptersCount: 24 },
  { id: 'jo', bookNumber: 43, name: 'João', abbrev: 'Jo', apiSlug: 'joao', testament: 'NT', category: 'Evangelhos', chaptersCount: 21 },

  // Histórico do Novo Testamento
  { id: 'at', bookNumber: 44, name: 'Atos dos Apóstolos', abbrev: 'At', apiSlug: 'atos', testament: 'NT', category: 'Histórico', chaptersCount: 28 },

  // Cartas Paulinas (13 Livros)
  { id: 'rm', bookNumber: 45, name: 'Romanos', abbrev: 'Rm', apiSlug: 'romanos', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '1co', bookNumber: 46, name: '1 Coríntios', abbrev: '1Co', apiSlug: '1 corintios', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '2co', bookNumber: 47, name: '2 Coríntios', abbrev: '2Co', apiSlug: '2 corintios', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 13 },
  { id: 'gl', bookNumber: 48, name: 'Gálatas', abbrev: 'Gl', apiSlug: 'galatas', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'ef', bookNumber: 49, name: 'Efésios', abbrev: 'Ef', apiSlug: 'efesios', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'fp', bookNumber: 50, name: 'Filipenses', abbrev: 'Fp', apiSlug: 'filipenses', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'cl', bookNumber: 51, name: 'Colossenses', abbrev: 'Cl', apiSlug: 'colossenses', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: '1ts', bookNumber: 52, name: '1 Tessalonicenses', abbrev: '1Ts', apiSlug: '1 tessalonicenses', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 5 },
  { id: '2ts', bookNumber: 53, name: '2 Tessalonicenses', abbrev: '2Ts', apiSlug: '2 tessalonicenses', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: '1tm', bookNumber: 54, name: '1 Timóteo', abbrev: '1Tm', apiSlug: '1 timoteo', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: '2tm', bookNumber: 55, name: '2 Timóteo', abbrev: '2Tm', apiSlug: '2 timoteo', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'tt', bookNumber: 56, name: 'Tito', abbrev: 'Tt', apiSlug: 'tito', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: 'fm', bookNumber: 57, name: 'Filemom', abbrev: 'Fm', apiSlug: 'filemom', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 1 },

  // Cartas Gerais (8 Livros)
  { id: 'hb', bookNumber: 58, name: 'Hebreus', abbrev: 'Hb', apiSlug: 'hebreus', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 13 },
  { id: 'tg', bookNumber: 59, name: 'Tiago', abbrev: 'Tg', apiSlug: 'tiago', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '1pe', bookNumber: 60, name: '1 Pedro', abbrev: '1Pe', apiSlug: '1 pedro', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2pe', bookNumber: 61, name: '2 Pedro', abbrev: '2Pe', apiSlug: '2 pedro', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 3 },
  { id: '1jo', bookNumber: 62, name: '1 João', abbrev: '1Jo', testament: 'NT', apiSlug: '1 joao', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2jo', bookNumber: 63, name: '2 João', abbrev: '2Jo', testament: 'NT', apiSlug: '2 joao', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: '3jo', bookNumber: 64, name: '3 João', abbrev: '3Jo', testament: 'NT', apiSlug: '3 joao', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: 'jd', bookNumber: 65, name: 'Judas', abbrev: 'Jd', testament: 'NT', apiSlug: 'judas', category: 'Cartas Gerais', chaptersCount: 1 },

  // Profético do Novo Testamento
  { id: 'ap', bookNumber: 66, name: 'Apocalipse', abbrev: 'Ap', apiSlug: 'apocalipse', testament: 'NT', category: 'Profético', chaptersCount: 22 }
];
