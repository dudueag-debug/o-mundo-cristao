import { SermonOutline } from '../data/sermonOutlines';
import { authService } from './authService';

export interface PrayerItem {
  id: string;
  title: string;
  description: string;
  category: 'familia' | 'saude' | 'espiritual' | 'ministerio' | 'financas';
  createdAt: string;
  isAnswered: boolean;
  answeredDate?: string;
  testimony?: string;
  prayCount: number;
}

const GLOBAL_KEYS = {
  THEME: 'omc_theme_v1'
};

const DEFAULT_PRAYERS: PrayerItem[] = [
  {
    id: 'p1',
    title: 'Avivamento Espiritual na Minha Igreja e Família',
    description: 'Clamor pela restauração do altar de oração no lar e batismo no Espírito Santo para a juventude.',
    category: 'espiritual',
    createdAt: 'Ontem',
    isAnswered: false,
    prayCount: 5
  },
  {
    id: 'p2',
    title: 'Restauração da Saúde da Vovó Maria',
    description: 'Oração por recuperação após consulta médica e paz no coração.',
    category: 'saude',
    createdAt: '15 dias atrás',
    isAnswered: true,
    answeredDate: 'Esta semana',
    testimony: 'Glória a Deus! Os exames vieram limpos e a recuperação foi completa.',
    prayCount: 14
  }
];

export const storageService = {
  // Retorna o prefixo do usuário atual para isolamento estrito de dados
  getUserStorageKey(baseKey: string): string {
    const user = authService.getCurrentUser();
    const userPrefix = user ? `user_${user.id}` : 'guest';
    return `omc_${userPrefix}_${baseKey}`;
  },

  getPrayers(): PrayerItem[] {
    try {
      const key = this.getUserStorageKey('prayers_v1');
      const data = localStorage.getItem(key);
      if (!data) {
        // Se for primeira vez, inicializa com exemplos
        localStorage.setItem(key, JSON.stringify(DEFAULT_PRAYERS));
        return DEFAULT_PRAYERS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_PRAYERS;
    }
  },

  savePrayers(prayers: PrayerItem[]): void {
    const key = this.getUserStorageKey('prayers_v1');
    localStorage.setItem(key, JSON.stringify(prayers));
  },

  getCustomSermons(): SermonOutline[] {
    try {
      const key = this.getUserStorageKey('custom_sermons_v1');
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveCustomSermons(sermons: SermonOutline[]): void {
    const key = this.getUserStorageKey('custom_sermons_v1');
    localStorage.setItem(key, JSON.stringify(sermons));
  },

  getUserNotes(docOrKeyId: string): string {
    try {
      const key = this.getUserStorageKey(`notes_${docOrKeyId}`);
      return localStorage.getItem(key) || '';
    } catch {
      return '';
    }
  },

  saveUserNotes(docOrKeyId: string, notes: string): void {
    const key = this.getUserStorageKey(`notes_${docOrKeyId}`);
    localStorage.setItem(key, notes);
  },

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(GLOBAL_KEYS.THEME) as 'light' | 'dark') || 'light';
  },

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(GLOBAL_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
