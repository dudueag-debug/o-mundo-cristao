import React, { useState } from 'react';
import { Home, BookOpen, Library, UploadCloud, Video, MoreHorizontal, Sparkles, Flame, ScrollText, HeartHandshake, Music, X, Scroll, Bot, Church, Award, MapPin, UserCheck } from 'lucide-react';

interface BottomNavigationProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentTab, onSelectTab }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);

  const mainTabs = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'gemini-ia', label: 'Gemini IA', icon: Bot },
    { id: 'biblia', label: 'Bíblia', icon: BookOpen },
    { id: 'uploads', label: 'Meus PDFs', icon: UploadCloud },
    { id: 'videos', label: 'Vídeos', icon: Video },
  ];

  const moreTabs = [
    { id: 'denominacoes', label: 'Igrejas & Origens', icon: Church },
    { id: 'herois-da-fe', label: 'Heróis da Fé', icon: Award },
    { id: 'lugares-sagrados', label: 'Lugares Sagrados', icon: MapPin },
    { id: 'personagens', label: 'Personagens Bíblicos', icon: UserCheck },
    { id: 'livros', label: 'E-Reader Teológico', icon: Library },
    { id: 'profetas', label: 'Profetas Maiores e Menores', icon: Scroll },
    { id: 'teologos', label: 'Grandes Teólogos', icon: Sparkles },
    { id: 'obras-cristocentricas', label: 'Obras Cristocêntricas', icon: Library },
    { id: 'teologia', label: 'Teologia Wesleyana', icon: Sparkles },
    { id: 'historia', label: 'História das Igrejas & IMW', icon: Flame },
    { id: 'sermoes', label: 'Esboços de Pregação', icon: ScrollText },
    { id: 'oracao', label: 'Diário de Oração', icon: HeartHandshake },
    { id: 'hinos', label: 'Hinário & Harpa', icon: Music },
  ];

  const handleSelectMoreTab = (tabId: string) => {
    onSelectTab(tabId);
    setIsMoreMenuOpen(false);
  };

  return (
    <>
      {/* Menu 'Mais' Gaveta Modal no Mobile */}
      {isMoreMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex flex-col justify-end">
          <div className="bg-white dark:bg-stone-900 rounded-t-3xl p-6 border-t border-stone-200 dark:border-stone-800 space-y-4 animate-slideUp">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <span className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Mais Recursos & Módulos
              </span>
              <button
                onClick={() => setIsMoreMenuOpen(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {moreTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleSelectMoreTab(tab.id)}
                    className={`flex items-center gap-2.5 p-3 rounded-2xl text-left border transition-all ${
                      isActive
                        ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 border-amber-500 font-bold'
                        : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-xs">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Barra Inferior Fixa */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 md:hidden">
        <div className="grid grid-cols-6 h-16 max-w-md mx-auto">
          {mainTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center py-1 transition-colors relative ${
                  isActive
                    ? 'text-amber-700 dark:text-amber-400 font-semibold'
                    : 'text-stone-500 dark:text-stone-400 hover:text-stone-700'
                }`}
              >
                {isActive && (
                  <span className="absolute top-1 w-6 h-0.5 bg-amber-600 rounded-full" />
                )}
                <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'scale-110' : ''} transition-transform`} />
                <span className="text-[10px] tracking-tight">{tab.label}</span>
              </button>
            );
          })}

          {/* Botão Mais */}
          <button
            onClick={() => setIsMoreMenuOpen(true)}
            className={`flex flex-col items-center justify-center py-1 transition-colors relative ${
              moreTabs.some((t) => t.id === currentTab)
                ? 'text-amber-700 dark:text-amber-400 font-semibold'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-700'
            }`}
          >
            <MoreHorizontal className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] tracking-tight">Mais</span>
          </button>
        </div>
      </nav>
    </>
  );
};
