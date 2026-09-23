export interface BibleBookInfo {
  id: string;
  name: string;
  abbrev: string;
  testament: 'AT' | 'NT';
  category: 'Pentateuco' | 'Históricos' | 'Poéticos' | 'Profetas Maiores' | 'Profetas Menores' | 'Evangelhos' | 'Histórico' | 'Cartas Paulinas' | 'Cartas Gerais' | 'Profético';
  chaptersCount: number;
}

export const ALL_BIBLE_BOOKS: BibleBookInfo[] = [
  // Antigo Testamento (39 Livros)
  // Pentateuco
  { id: 'gn', name: 'Gênesis', abbrev: 'Gn', testament: 'AT', category: 'Pentateuco', chaptersCount: 50 },
  { id: 'ex', name: 'Êxodo', abbrev: 'Êx', testament: 'AT', category: 'Pentateuco', chaptersCount: 40 },
  { id: 'lv', name: 'Levítico', abbrev: 'Lv', testament: 'AT', category: 'Pentateuco', chaptersCount: 27 },
  { id: 'nm', name: 'Números', abbrev: 'Nm', testament: 'AT', category: 'Pentateuco', chaptersCount: 36 },
  { id: 'dt', name: 'Deuteronômio', abbrev: 'Dt', testament: 'AT', category: 'Pentateuco', chaptersCount: 34 },
  // Históricos
  { id: 'js', name: 'Josué', abbrev: 'Js', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: 'jz', name: 'Juízes', abbrev: 'Jz', testament: 'AT', category: 'Históricos', chaptersCount: 21 },
  { id: 'rt', name: 'Rute', abbrev: 'Rt', testament: 'AT', category: 'Históricos', chaptersCount: 4 },
  { id: '1sm', name: '1 Samuel', abbrev: '1Sm', testament: 'AT', category: 'Históricos', chaptersCount: 31 },
  { id: '2sm', name: '2 Samuel', abbrev: '2Sm', testament: 'AT', category: 'Históricos', chaptersCount: 24 },
  { id: '1rs', name: '1 Reis', abbrev: '1Rs', testament: 'AT', category: 'Históricos', chaptersCount: 22 },
  { id: '2rs', name: '2 Reis', abbrev: '2Rs', testament: 'AT', category: 'Históricos', chaptersCount: 25 },
  { id: '1cr', name: '1 Crônicas', abbrev: '1Cr', testament: 'AT', category: 'Históricos', chaptersCount: 29 },
  { id: '2cr', name: '2 Crônicas', abbrev: '2Cr', testament: 'AT', category: 'Históricos', chaptersCount: 36 },
  { id: 'ed', name: 'Esdras', abbrev: 'Ed', testament: 'AT', category: 'Históricos', chaptersCount: 10 },
  { id: 'ne', name: 'Neemias', abbrev: 'Ne', testament: 'AT', category: 'Históricos', chaptersCount: 13 },
  { id: 'et', name: 'Ester', abbrev: 'Et', testament: 'AT', category: 'Históricos', chaptersCount: 10 },
  // Poéticos
  { id: 'job', name: 'Jó', abbrev: 'Jó', testament: 'AT', category: 'Poéticos', chaptersCount: 42 },
  { id: 'sl', name: 'Salmos', abbrev: 'Sl', testament: 'AT', category: 'Poéticos', chaptersCount: 150 },
  { id: 'pv', name: 'Provérbios', abbrev: 'Pv', testament: 'AT', category: 'Poéticos', chaptersCount: 31 },
  { id: 'ec', name: 'Eclesiastes', abbrev: 'Ec', testament: 'AT', category: 'Poéticos', chaptersCount: 12 },
  { id: 'ct', name: 'Cantares', abbrev: 'Ct', testament: 'AT', category: 'Poéticos', chaptersCount: 8 },
  // Profetas Maiores
  { id: 'is', name: 'Isaías', abbrev: 'Is', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 66 },
  { id: 'jr', name: 'Jeremias', abbrev: 'Jr', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 52 },
  { id: 'lm', name: 'Lamentações', abbrev: 'Lm', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 5 },
  { id: 'ez', name: 'Ezequiel', abbrev: 'Ez', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 48 },
  { id: 'dn', name: 'Daniel', abbrev: 'Dn', testament: 'AT', category: 'Profetas Maiores', chaptersCount: 12 },
  // Profetas Menores
  { id: 'os', name: 'Oseias', abbrev: 'Os', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'jl', name: 'Joel', abbrev: 'Jl', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'am', name: 'Amós', abbrev: 'Am', testament: 'AT', category: 'Profetas Menores', chaptersCount: 9 },
  { id: 'ob', name: 'Obadias', abbrev: 'Ob', testament: 'AT', category: 'Profetas Menores', chaptersCount: 1 },
  { id: 'jn', name: 'Jonas', abbrev: 'Jn', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },
  { id: 'mq', name: 'Miqueias', abbrev: 'Mq', testament: 'AT', category: 'Profetas Menores', chaptersCount: 7 },
  { id: 'na', name: 'Naum', abbrev: 'Na', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'hc', name: 'Habacuque', abbrev: 'Hc', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'sf', name: 'Sofonias', abbrev: 'Sf', testament: 'AT', category: 'Profetas Menores', chaptersCount: 3 },
  { id: 'ag', name: 'Ageu', abbrev: 'Ag', testament: 'AT', category: 'Profetas Menores', chaptersCount: 2 },
  { id: 'zc', name: 'Zacarias', abbrev: 'Zc', testament: 'AT', category: 'Profetas Menores', chaptersCount: 14 },
  { id: 'ml', name: 'Malaquias', abbrev: 'Ml', testament: 'AT', category: 'Profetas Menores', chaptersCount: 4 },

  // Novo Testamento (27 Livros)
  // Evangelhos & Histórico
  { id: 'mt', name: 'Mateus', abbrev: 'Mt', testament: 'NT', category: 'Evangelhos', chaptersCount: 28 },
  { id: 'mc', name: 'Marcos', abbrev: 'Mc', testament: 'NT', category: 'Evangelhos', chaptersCount: 16 },
  { id: 'lc', name: 'Lucas', abbrev: 'Lc', testament: 'NT', category: 'Evangelhos', chaptersCount: 24 },
  { id: 'jo', name: 'João', abbrev: 'Jo', testament: 'NT', category: 'Evangelhos', chaptersCount: 21 },
  { id: 'at', name: 'Atos dos Apóstolos', abbrev: 'At', testament: 'NT', category: 'Histórico', chaptersCount: 28 },
  // Cartas Paulinas
  { id: 'rm', name: 'Romanos', abbrev: 'Rm', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '1co', name: '1 Coríntios', abbrev: '1Co', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 16 },
  { id: '2co', name: '2 Coríntios', abbrev: '2Co', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 13 },
  { id: 'gl', name: 'Gálatas', abbrev: 'Gl', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'ef', name: 'Efésios', abbrev: 'Ef', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: 'fp', name: 'Filipenses', abbrev: 'Fp', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'cl', name: 'Colossenses', abbrev: 'Cl', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: '1ts', name: '1 Tessalonicenses', abbrev: '1Ts', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 5 },
  { id: '2ts', name: '2 Tessalonicenses', abbrev: '2Ts', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: '1tm', name: '1 Timóteo', abbrev: '1Tm', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 6 },
  { id: '2tm', name: '2 Timóteo', abbrev: '2Tm', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 4 },
  { id: 'tt', name: 'Tito', abbrev: 'Tt', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 3 },
  { id: 'fm', name: 'Filemom', abbrev: 'Fm', testament: 'NT', category: 'Cartas Paulinas', chaptersCount: 1 },
  // Cartas Gerais
  { id: 'hb', name: 'Hebreus', abbrev: 'Hb', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 13 },
  { id: 'tg', name: 'Tiago', abbrev: 'Tg', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '1pe', name: '1 Pedro', abbrev: '1Pe', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2pe', name: '2 Pedro', abbrev: '2Pe', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 3 },
  { id: '1jo', name: '1 João', abbrev: '1Jo', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 5 },
  { id: '2jo', name: '2 João', abbrev: '2Jo', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: '3jo', name: '3 João', abbrev: '3Jo', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 1 },
  { id: 'jd', name: 'Judas', abbrev: 'Jd', testament: 'NT', category: 'Cartas Gerais', chaptersCount: 1 },
  // Profético
  { id: 'ap', name: 'Apocalipse', abbrev: 'Ap', testament: 'NT', category: 'Profético', chaptersCount: 22 }
];
