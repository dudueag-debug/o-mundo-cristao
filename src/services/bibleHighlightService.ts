import { storageService } from './storageService';

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink' | 'orange' | 'purple';

export interface BibleHighlight {
  id: string; // ex: "sl_23_1"
  bookId: string;
  bookName: string;
  chapter: number;
  verseNum: number;
  verseText: string;
  version: string;
  color: HighlightColor;
  createdAt: string;
}

export const HIGHLIGHT_COLORS: { id: HighlightColor; label: string; bgClass: string; dotClass: string; borderClass: string }[] = [
  {
    id: 'yellow',
    label: 'Promessa & Graça',
    bgClass: 'bg-amber-100/90 dark:bg-amber-950/60 text-stone-950 dark:text-amber-100 border-l-4 border-amber-500',
    dotClass: 'bg-amber-400',
    borderClass: 'border-amber-400'
  },
  {
    id: 'green',
    label: 'Esperança & Vida',
    bgClass: 'bg-emerald-100/90 dark:bg-emerald-950/60 text-stone-950 dark:text-emerald-100 border-l-4 border-emerald-500',
    dotClass: 'bg-emerald-500',
    borderClass: 'border-emerald-500'
  },
  {
    id: 'blue',
    label: 'Paz & Refrigério',
    bgClass: 'bg-sky-100/90 dark:bg-sky-950/60 text-stone-950 dark:text-sky-100 border-l-4 border-sky-400',
    dotClass: 'bg-sky-400',
    borderClass: 'border-sky-400'
  },
  {
    id: 'pink',
    label: 'Amor & Misericórdia',
    bgClass: 'bg-rose-100/90 dark:bg-rose-950/60 text-stone-950 dark:text-rose-100 border-l-4 border-rose-400',
    dotClass: 'bg-rose-400',
    borderClass: 'border-rose-400'
  },
  {
    id: 'orange',
    label: 'Alerta & Sabedoria',
    bgClass: 'bg-orange-100/90 dark:bg-orange-950/60 text-stone-950 dark:text-orange-100 border-l-4 border-orange-500',
    dotClass: 'bg-orange-500',
    borderClass: 'border-orange-500'
  },
  {
    id: 'purple',
    label: 'Glória & Majestade',
    bgClass: 'bg-purple-100/90 dark:bg-purple-950/60 text-stone-950 dark:text-purple-100 border-l-4 border-purple-500',
    dotClass: 'bg-purple-500',
    borderClass: 'border-purple-500'
  },
];

class BibleHighlightService {
  private getStorageKey(): string {
    return storageService.getUserStorageKey('bible_highlights_v1');
  }

  getHighlights(): BibleHighlight[] {
    try {
      const data = localStorage.getItem(this.getStorageKey());
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  getHighlightMap(): Record<string, HighlightColor> {
    const list = this.getHighlights();
    const map: Record<string, HighlightColor> = {};
    for (const h of list) {
      map[h.id] = h.color;
    }
    return map;
  }

  setHighlight(
    bookId: string,
    bookName: string,
    chapter: number,
    verseNum: number,
    verseText: string,
    version: string,
    color: HighlightColor
  ): void {
    const id = `${bookId}_${chapter}_${verseNum}`;
    const list = this.getHighlights().filter(h => h.id !== id);

    const newHighlight: BibleHighlight = {
      id,
      bookId,
      bookName,
      chapter,
      verseNum,
      verseText,
      version,
      color,
      createdAt: new Date().toISOString()
    };

    list.unshift(newHighlight);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(list));
  }

  removeHighlight(bookId: string, chapter: number, verseNum: number): void {
    const id = `${bookId}_${chapter}_${verseNum}`;
    const list = this.getHighlights().filter(h => h.id !== id);
    localStorage.setItem(this.getStorageKey(), JSON.stringify(list));
  }
}

export const bibleHighlightService = new BibleHighlightService();
