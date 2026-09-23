import { SermonOutline } from '../data/sermonOutlines';

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

const STORAGE_KEYS = {
  PRAYERS: 'omc_prayers_v1',
  CUSTOM_SERMONS: 'omc_custom_sermons_v1',
  FAVORITES: 'omc_favorites_v1',
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
  getPrayers(): PrayerItem[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PRAYERS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.PRAYERS, JSON.stringify(DEFAULT_PRAYERS));
        return DEFAULT_PRAYERS;
      }
      return JSON.parse(data);
    } catch {
      return DEFAULT_PRAYERS;
    }
  },

  savePrayers(prayers: PrayerItem[]): void {
    localStorage.setItem(STORAGE_KEYS.PRAYERS, JSON.stringify(prayers));
  },

  getCustomSermons(): SermonOutline[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_SERMONS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveCustomSermons(sermons: SermonOutline[]): void {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_SERMONS, JSON.stringify(sermons));
  },

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(STORAGE_KEYS.THEME) as 'light' | 'dark') || 'light';
  },

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
