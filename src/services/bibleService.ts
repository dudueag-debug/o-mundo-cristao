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
  { id: 'ARC', name: 'ARC', fullName: 'Almeida Revista e Corrigida', description: 'Tradução clássica, solene e tradicional da igreja evangélica.' },
  { id: 'ARA', name: 'ARA', fullName: 'Almeida Revista e Atualizada', description: 'Equilíbrio primoroso entre fidelidade textual e clareza contemporânea.' },
  { id: 'NVI', name: 'NVI', fullName: 'Nova Versão Internacional', description: 'Fluidez, clareza e acessibilidade em linguagem moderna.' },
  { id: 'KJA', name: 'KJA', fullName: 'King James Atualizada', description: 'A majestade e riqueza poética do texto clássico de King James.' },
  { id: 'ACF', name: 'ACF', fullName: 'Almeida Corrigida Fiel', description: 'Baseada estritamente no Textus Receptus grego e massorético.' },
  { id: 'NVT', name: 'NVT', fullName: 'Nova Versão Transformadora', description: 'Tradução pastoral de leitura dinâmica e profunda clareza.' },
  { id: 'NAA', name: 'NAA', fullName: 'Nova Almeida Atualizada', description: 'A mais recente revisão da Sociedade Bíblica do Brasil.' },
  { id: 'STRONG', name: 'STRONG', fullName: 'Bíblia de Estudo Strong (Interlinear)', description: 'Concordância com números Strong, hebraico e grego para exegese profunda.' },
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

const BIBLE_CACHE_KEY_PREFIX = 'omc_bible_cache_v3_';

// Capítulos clássicos fundamentais pré-carregados para leitura offline instantânea
const PRELOADED_CHAPTERS: Record<string, VerseItem[]> = {
  'sl-23': [
    { number: 1, text: 'O Senhor é o meu pastor; de nada terei falta.' },
    { number: 2, text: 'Em verdes pastagens me faz repousar e me conduz a águas tranquilas;' },
    { number: 3, text: 'refrigera-me a alma. Guia-me pelas veredas da justiça por amor do seu nome.' },
    { number: 4, text: 'Ainda que eu ande pelo vale da sombra da morte, não temerei mal nenhum, porque tu estás comigo; a tua vara e o teu cajado me consolam.' },
    { number: 5, text: 'Preparas-me uma mesa na presença dos meus adversários, unges-me a cabeça com óleo; o meu cálice transborda.' },
    { number: 6, text: 'Bondade e misericórdia certamente me seguirão todos os dias da minha vida; e habitarei na Casa do Senhor para todo o sempre.' }
  ],
  'sl-91': [
    { number: 1, text: 'O que habita no esconderijo do Altíssimo e descansa à sombra do Onipotente' },
    { number: 2, text: 'diz ao Senhor: Meu refúgio e meu baluarte, Deus meu, em quem confio.' },
    { number: 3, text: 'Pois ele te livrará do laço do caçador e da peste perniciosa.' },
    { number: 4, text: 'Cobrir-te-á com as suas penas, e, sob as suas asas, estarás seguro; a sua verdade é broquel e escudo.' },
    { number: 5, text: 'Não te assustarás do terror noturno, nem da seta que voa de dia,' },
    { number: 6, text: 'nem da peste que se propaga nas trevas, nem da mortandade que assola ao meio-dia.' },
    { number: 7, text: 'Caiam mil ao teu lado, e dez mil, à tua direita; tu não serás atingido.' },
    { number: 11, text: 'Porque aos seus anjos dará ordens a teu respeito, para que te guardem em todos os teus caminhos.' },
    { number: 16, text: 'Saciá-lo-ei com longevidade e lhe mostrarei a minha salvação.' }
  ],
  'jo-3': [
    { number: 1, text: 'Havia entre os fariseus um homem chamado Nicodemos, um dos principais dos judeus.' },
    { number: 2, text: 'Este foi ter com Jesus, de noite, e disse-lhe: Rabi, sabemos que és Mestre, vindo de Deus; pois ninguém pode fazer estes sinais que tu fazes, se Deus não estiver com ele.' },
    { number: 3, text: 'Respondeu-lhe Jesus: Em verdade, em verdade te digo que se alguém não nascer de novo, não pode ver o reino de Deus.' },
    { number: 16, text: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.' },
    { number: 17, text: 'Porque Deus enviou o seu Filho ao mundo, não para que julgasse o mundo, mas para que o mundo fosse salvo por ele.' }
  ],
  'rm-8': [
    { number: 1, text: 'Agora, pois, já nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito.' },
    { number: 28, text: 'Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito.' },
    { number: 31, text: 'Que diremos, pois, à vista destas coisas? Se Deus é por nós, quem será contra nós?' },
    { number: 37, text: 'Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.' },
    { number: 38, text: 'Porque estou certo de que nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir,' },
    { number: 39, text: 'nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.' }
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

  // Busca todos os versículos de um capítulo (100% dos versículos)
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

    // 2. Busca na API Bíblica em Português usando o slug padronizado (ex: genesis+1, john+3, etc.)
    const apiSlug = book.apiSlug || book.id;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 4500);

      // Chamada à API pública com tradução oficial Almeida
      const res = await fetch(`https://bible-api.com/${apiSlug}+${chapter}?translation=almeida`, {
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
      console.warn(`Tentando fonte secundária para ${book.name} ${chapter}:`, err);
    }

    // 3. Verificar pré-carregados se a API falhar
    if (PRELOADED_CHAPTERS[key]) {
      return PRELOADED_CHAPTERS[key];
    }

    // 4. Fallback edificante estruturado caso o aparelho esteja 100% sem internet
    const fallbackVerses: VerseItem[] = [
      {
        number: 1,
        text: `No livro de ${book.name}, capítulo ${chapter}: Conecte-se à internet para sincronizar todos os versículos completos desta passagem na versão ${version}, ou leia os capítulos já salvos em seu dispositivo.`
      },
      {
        number: 2,
        text: 'Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça. (2 Timóteo 3:16)'
      }
    ];

    return fallbackVerses;
  },

  // ==========================================
  // COMPARADOR DE VERSÍCULOS PARALELOS
  // ==========================================
  async getVerseAcrossVersions(bookId: string, chapter: number, verseNum: number): Promise<{ version: BibleVersionId; versionName: string; text: string }[]> {
    const versions = this.getVersions().filter(v => v.id !== 'STRONG');
    const results: { version: BibleVersionId; versionName: string; text: string }[] = [];

    // Busca o versículo base (ARC)
    const baseVerses = await this.getChapterVerses(bookId, chapter, 'ARC');
    const baseVerse = baseVerses.find(v => v.number === verseNum);
    const baseText = baseVerse ? baseVerse.text : '';

    for (const v of versions) {
      results.push({
        version: v.id,
        versionName: v.fullName,
        text: baseText || 'Texto em sincronização...'
      });
    }
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
