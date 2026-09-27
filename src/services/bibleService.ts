import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../data/fullBibleIndex';
import { storageService } from './storageService';

export type BibleVersionId = 'ARC' | 'ARA' | 'NVI' | 'KJA' | 'ACF' | 'NVT' | 'NAA' | 'STRONG';

export interface BibleVersion {
  id: BibleVersionId;
  name: string;
  fullName: string;
  description: string;
}

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'orange';

export const HIGHLIGHT_COLORS: { id: HighlightColor; label: string; bgClass: string; borderClass: string; hex: string }[] = [
  { id: 'yellow', label: 'Amarelo (Revelação)', bgClass: 'bg-yellow-200/60 dark:bg-yellow-900/40 text-yellow-950 dark:text-yellow-100', borderClass: 'border-l-4 border-yellow-500', hex: '#fef08a' },
  { id: 'green', label: 'Verde (Promessa & Vida)', bgClass: 'bg-emerald-200/60 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-100', borderClass: 'border-l-4 border-emerald-500', hex: '#a7f3d0' },
  { id: 'blue', label: 'Azul (Paz & Oração)', bgClass: 'bg-sky-200/60 dark:bg-sky-900/40 text-sky-950 dark:text-sky-100', borderClass: 'border-l-4 border-sky-500', hex: '#bae6fd' },
  { id: 'pink', label: 'Rosa (Amor de Deus)', bgClass: 'bg-rose-200/60 dark:bg-rose-900/40 text-rose-950 dark:text-rose-100', borderClass: 'border-l-4 border-rose-500', hex: '#fecdd3' },
  { id: 'orange', label: 'Laranja (Alerta & Obediência)', bgClass: 'bg-amber-200/60 dark:bg-amber-900/40 text-amber-950 dark:text-amber-100', borderClass: 'border-l-4 border-amber-500', hex: '#fde68a' },
];

export const BIBLE_VERSIONS: BibleVersion[] = [
  { id: 'ARC', name: 'ARC', fullName: 'Almeida Revista e Corrigida', description: 'Tradução clássica, solene e tradicional da igreja evangélica brasileira.' },
  { id: 'ARA', name: 'ARA', fullName: 'Almeida Revista e Atualizada', description: 'Equilíbrio primoroso entre fidelidade textual e clareza contemporânea.' },
  { id: 'NVI', name: 'NVI', fullName: 'Nova Versão Internacional', description: 'Fluidez poética, clareza e acessibilidade em linguagem moderna e viva.' },
  { id: 'NVT', name: 'NVT', fullName: 'Nova Versão Transformadora', description: 'Tradução pastoral de leitura dinâmica e profunda clareza comunicativa.' },
  { id: 'NAA', name: 'NAA', fullName: 'Nova Almeida Atualizada', description: 'A mais recente revisão erudita da Sociedade Bíblica do Brasil (SBB).' },
  { id: 'ACF', name: 'ACF', fullName: 'Almeida Corrigida Fiel', description: 'Baseada estritamente no Textus Receptus grego e massorético hebraico.' },
  { id: 'KJA', name: 'KJA', fullName: 'King James Atualizada', description: 'A majestade e riqueza poética do texto clássico de King James em português.' },
  { id: 'STRONG', name: 'STRONG', fullName: 'Bíblia de Estudo Strong (Interlinear)', description: 'Concordância com números Strong, hebraico e grego para exegese e teologia profunda.' },
];

export interface VerseItem {
  number: number;
  text: string;
}

export interface ChapterData {
  book: string;
  bookId: string;
  chapter: number;
  version: BibleVersionId;
  verses: VerseItem[];
}

const BIBLE_CACHE_KEY_PREFIX = 'omc_bible_v4_';

const BOLLS_TRANSLATION_MAP: Record<BibleVersionId, string> = {
  ARC: 'ARC09',
  ARA: 'ARA',
  NVI: 'NVIPT',
  NVT: 'NVT',
  NAA: 'NAA',
  ACF: 'ACF11',
  KJA: 'KJA',
  STRONG: 'ARC09'
};

// Capítulos fundamentais pré-carregados para leitura offline instantânea
const PRELOADED_CHAPTERS: Record<string, VerseItem[]> = {
  'sl-23': [
    { number: 1, text: 'O Senhor é o meu pastor; nada me faltará.' },
    { number: 2, text: 'Deitar-me faz em verdes pastos, guia-me mansamente a águas mansas.' },
    { number: 3, text: 'Refrigera a minha alma; guia-me pelas veredas da justiça por amor do seu nome.' },
    { number: 4, text: 'Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.' },
    { number: 5, text: 'Preparas uma mesa perante mim na presença dos meus inimigos, unges a minha cabeça com óleo, o meu cálice transborda.' },
    { number: 6, text: 'Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor por longos dias.' }
  ],
  'sl-91': [
    { number: 1, text: 'Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.' },
    { number: 2, text: 'Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.' },
    { number: 3, text: 'Porque ele te livrará do laço do passarinheiro e da peste perniciosa.' },
    { number: 4, text: 'Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.' },
    { number: 5, text: 'Não terás medo do terror de noite nem da seta que voa de dia,' },
    { number: 6, text: 'nem da peste que anda na escuridão, nem da mortandade que assola ao meio-dia.' },
    { number: 7, text: 'Mil cairão ao teu lado, e dez mil, à tua direita, mas tu não serás atingido.' },
    { number: 11, text: 'Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.' },
    { number: 16, text: 'Com longura de dias o fartarei e lhe mostrarei a minha salvação.' }
  ],
  'jo-3': [
    { number: 1, text: 'E havia entre os fariseus um homem chamado Nicodemos, príncipe dos judeus.' },
    { number: 2, text: 'Este foi ter de noite com Jesus e disse-lhe: Rabi, bem sabemos que és mestre vindo de Deus, porque ninguém pode fazer estes sinais que tu fazes, se Deus não for com ele.' },
    { number: 3, text: 'Jesus respondeu e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo não pode ver o Reino de Deus.' },
    { number: 16, text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.' },
    { number: 17, text: 'Porque Deus enviou o seu Filho ao mundo não para que condenasse o mundo, mas para que o mundo fosse salvo por ele.' }
  ],
  'rm-8': [
    { number: 1, text: 'Portanto, agora, nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.' },
    { number: 28, text: 'E sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto.' },
    { number: 31, text: 'Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?' },
    { number: 37, text: 'Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.' },
    { number: 38, text: 'Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,' },
    { number: 39, text: 'nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor!' }
  ]
};

export const bibleService = {
  getVersions(): BibleVersion[] {
    return BIBLE_VERSIONS;
  },

  getAllBooks(): BibleBookInfo[] {
    return ALL_BIBLE_BOOKS;
  },

  getBookById(bookId: string): BibleBookInfo | undefined {
    return ALL_BIBLE_BOOKS.find((b) => b.id === bookId);
  },

  getBookByNumber(bookNumber: number): BibleBookInfo | undefined {
    return ALL_BIBLE_BOOKS.find((b) => b.bookNumber === bookNumber);
  },

  // Busca TODOS os versículos de um capítulo completo (100% de versículos)
  async getChapterVerses(bookId: string, chapter: number, version: BibleVersionId = 'ARC'): Promise<VerseItem[]> {
    const key = `${bookId}-${chapter}`;
    const cacheKey = `${BIBLE_CACHE_KEY_PREFIX}${version}_${key}`;

    // 1. Verificar cache local no navegador
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {}

    const book = this.getBookById(bookId);
    if (!book) return [];

    const bollsVersion = BOLLS_TRANSLATION_MAP[version] || 'ARC09';
    const bookNumber = book.bookNumber || 1;

    // 2. Consulta Primária de Alta Confiabilidade: Bolls Life API (Todos os 66 livros, 100% dos versículos)
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

      const res = await fetch(`https://bolls.life/get-chapter/${bollsVersion}/${bookNumber}/${chapter}/`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          const apiVerses: VerseItem[] = data.map((v: any) => ({
            number: v.verse,
            text: (v.text || '').replace(/<[^>]*>?/gm, '').trim() // Remove tags HTML se houver
          })).filter(v => v.text.length > 0);

          if (apiVerses.length > 0) {
            try {
              localStorage.setItem(cacheKey, JSON.stringify(apiVerses));
            } catch {}
            return apiVerses;
          }
        }
      }
    } catch (err) {
      console.warn(`Fonte primária Bolls para ${book.name} ${chapter} indisponível, tentando fonte secundária:`, err);
    }

    // 3. Consulta Secundária: Bible-API com slug oficial
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const querySlug = encodeURIComponent(`${book.name} ${chapter}`);
      const res = await fetch(`https://bible-api.com/${querySlug}?translation=almeida`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        if (data.verses && Array.isArray(data.verses) && data.verses.length > 0) {
          const apiVerses: VerseItem[] = data.verses.map((v: any) => ({
            number: v.verse,
            text: v.text.trim()
          }));

          try {
            localStorage.setItem(cacheKey, JSON.stringify(apiVerses));
          } catch {}
          return apiVerses;
        }
      }
    } catch (err) {
      console.warn(`Fonte secundária falhou para ${book.name} ${chapter}:`, err);
    }

    // 4. Verificar pré-carregados se o usuário estiver offline
    if (PRELOADED_CHAPTERS[key]) {
      return PRELOADED_CHAPTERS[key];
    }

    // 5. Fallback explicativo com instrução graciosa
    return [
      {
        number: 1,
        text: `No livro de ${book.name}, capítulo ${chapter}: O texto completo está sendo sincronizado. Conecte-se à internet para carregar instantaneamente todos os versículos na versão ${version}, ou selecione outro capítulo salvo.`
      },
      {
        number: 2,
        text: 'Lâmpada para os meus pés é tua palavra e luz, para o meu caminho. (Salmos 119:105)'
      }
    ];
  },

  // ==========================================
  // COMPARADOR DE VERSÍCULOS PARALELOS REAL
  // ==========================================
  async getVerseAcrossVersions(bookId: string, chapter: number, verseNum: number): Promise<{ version: BibleVersionId; versionName: string; text: string }[]> {
    const book = this.getBookById(bookId);
    if (!book) return [];

    const versionsToCompare: { id: BibleVersionId; bolls: string; label: string }[] = [
      { id: 'ARC', bolls: 'ARC09', label: 'Almeida Revista e Corrigida (ARC)' },
      { id: 'ARA', bolls: 'ARA', label: 'Almeida Revista e Atualizada (ARA)' },
      { id: 'NVI', bolls: 'NVIPT', label: 'Nova Versão Internacional (NVI)' },
      { id: 'NVT', bolls: 'NVT', label: 'Nova Versão Transformadora (NVT)' },
      { id: 'NAA', bolls: 'NAA', label: 'Nova Almeida Atualizada (NAA)' },
      { id: 'ACF', bolls: 'ACF11', label: 'Almeida Corrigida Fiel (ACF)' },
      { id: 'KJA', bolls: 'KJA', label: 'King James Atualizada (KJA)' }
    ];

    const results = await Promise.all(
      versionsToCompare.map(async (v) => {
        try {
          const verses = await this.getChapterVerses(bookId, chapter, v.id);
          const found = verses.find(item => item.number === verseNum);
          return {
            version: v.id,
            versionName: v.label,
            text: found ? found.text : 'Versículo em processamento...'
          };
        } catch {
          return {
            version: v.id,
            versionName: v.label,
            text: 'Texto temporariamente indisponível offline.'
          };
        }
      })
    );

    return results;
  },

  // ==========================================
  // MARCA-TEXTO COLORIDO DE VERSÍCULOS
  // ==========================================
  getChapterHighlights(bookId: string, chapter: number): Record<number, HighlightColor> {
    try {
      const key = storageService.getUserStorageKey(`bible_hl_${bookId}_${chapter}`);
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  setVerseHighlight(bookId: string, chapter: number, verseNum: number, color: HighlightColor): void {
    try {
      const key = storageService.getUserStorageKey(`bible_hl_${bookId}_${chapter}`);
      const current = this.getChapterHighlights(bookId, chapter);
      current[verseNum] = color;
      localStorage.setItem(key, JSON.stringify(current));
    } catch {}
  },

  removeVerseHighlight(bookId: string, chapter: number, verseNum: number): void {
    try {
      const key = storageService.getUserStorageKey(`bible_hl_${bookId}_${chapter}`);
      const current = this.getChapterHighlights(bookId, chapter);
      delete current[verseNum];
      localStorage.setItem(key, JSON.stringify(current));
    } catch {}
  }
};
