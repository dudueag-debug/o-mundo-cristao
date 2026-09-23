import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { DesktopNav } from './components/layout/DesktopNav';
import { BottomNavigation } from './components/layout/BottomNavigation';
import { HomeView } from './components/views/HomeView';
import { WesleyanTheologyView } from './components/views/WesleyanTheologyView';
import { ChurchHistoryView } from './components/views/ChurchHistoryView';
import { SermonsView } from './components/views/SermonsView';
import { BibleView } from './components/views/BibleView';
import { PrayersView } from './components/views/PrayersView';
import { HymnsView } from './components/views/HymnsView';
import { PwaInstallModal } from './components/common/PwaInstallModal';
import { storageService } from './services/storageService';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const savedTheme = storageService.getTheme();
    setTheme(savedTheme);
    storageService.setTheme(savedTheme);

    // Capture PWA install prompt for Android/Chrome
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    };
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    storageService.setTheme(nextTheme);
  };

  const handleInstallAndroid = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('Usuário aceitou a instalação do PWA');
      }
      setDeferredPrompt(null);
      setIsInstallModalOpen(false);
    }
  };

  const renderCurrentView = () => {
    switch (currentTab) {
      case 'home':
        return (
          <HomeView
            onSelectTab={setCurrentTab}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
        );
      case 'teologia':
        return <WesleyanTheologyView />;
      case 'historia':
        return <ChurchHistoryView />;
      case 'sermoes':
        return <SermonsView />;
      case 'biblia':
        return <BibleView />;
      case 'oracao':
        return <PrayersView />;
      case 'hinos':
        return <HymnsView />;
      default:
        return (
          <HomeView
            onSelectTab={setCurrentTab}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-amber-200 dark:selection:bg-amber-900 transition-colors duration-200">
      {/* Header Fixo */}
      <Header
        currentTab={currentTab}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onSelectTab={setCurrentTab}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Navegação Desktop */}
      <DesktopNav
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-20 md:pb-12">
        {renderCurrentView()}
      </main>

      {/* Navegação Mobile Inferior */}
      <BottomNavigation
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
      />

      {/* Modal de Instalação PWA (iOS e Android) */}
      <PwaInstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        deferredPrompt={deferredPrompt}
        onInstallAndroid={handleInstallAndroid}
      />
    </div>
  );
};

export default App;
