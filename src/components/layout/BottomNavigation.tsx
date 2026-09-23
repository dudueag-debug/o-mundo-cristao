import React from 'react';
import { Home, Sparkles, BookOpen, Flame, ScrollText, HeartHandshake } from 'lucide-react';

interface BottomNavigationProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    { id: 'home', label: 'Início', icon: Home },
    { id: 'teologia', label: 'Teologia', icon: Sparkles },
    { id: 'historia', label: 'História & IMW', icon: Flame },
    { id: 'sermoes', label: 'Esboços', icon: ScrollText },
    { id: 'biblia', label: 'Bíblia', icon: BookOpen },
    { id: 'oracao', label: 'Oração', icon: HeartHandshake },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-lg border-t border-stone-200 dark:border-stone-800 md:hidden">
      <div className="grid grid-cols-6 h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 transition-colors relative ${
                isActive
                  ? 'text-amber-700 dark:text-amber-400 font-semibold'
                  : 'text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200'
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
      </div>
    </nav>
  );
};
