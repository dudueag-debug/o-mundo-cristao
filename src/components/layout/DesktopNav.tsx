import React from 'react';
import { Home, BookOpen, Library, UploadCloud, Video, Sparkles, Flame, ScrollText, HeartHandshake, Music, Users, Cross, Scroll } from 'lucide-react';

interface DesktopNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ currentTab, onSelectTab }) => {
  const navItems = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'profetas', label: 'Profetas', icon: Scroll },
    { id: 'teologos', label: 'Grandes Teólogos', icon: Users },
    { id: 'obras-cristocentricas', label: 'Obras Cristocêntricas', icon: Cross },
    { id: 'biblia', label: 'Bíblia (66)', icon: BookOpen },
    { id: 'livros', label: 'E-Reader', icon: Library },
    { id: 'uploads', label: 'Meus PDFs', icon: UploadCloud },
    { id: 'videos', label: 'Vídeos', icon: Video },
    { id: 'teologia', label: 'Teologia Wesleyana', icon: Sparkles },
    { id: 'historia', label: 'História & IMW', icon: Flame },
    { id: 'sermoes', label: 'Esboços', icon: ScrollText },
    { id: 'oracao', label: 'Oração', icon: HeartHandshake },
    { id: 'hinos', label: 'Hinário', icon: Music },
  ];

  return (
    <div className="hidden md:block border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-1 py-2 overflow-x-auto scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-200 shadow-sm ring-1 ring-amber-500/30'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-700 dark:text-amber-400' : 'text-stone-500'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
