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
import { TheologyBooksView } from './components/views/TheologyBooksView';
import { UploadLibraryView } from './components/views/UploadLibraryView';
import { VideosView } from './components/views/VideosView';
import { TheologiansView } from './components/views/TheologiansView';
import { ChristocentricBooksView } from './components/views/ChristocentricBooksView';
import { ProphetsView } from './components/views/ProphetsView';
import { DenominationsView } from './components/views/DenominationsView';
import { HeroesOfFaithView } from './components/views/HeroesOfFaithView';
import { BiblicalGeographyView } from './components/views/BiblicalGeographyView';
import { BiblicalCharactersView } from './components/views/BiblicalCharactersView';
import { GeminiStudyView } from './components/views/GeminiStudyView';
import { PwaInstallModal } from './components/common/PwaInstallModal';
import { ShepherdSplashScreen } from './components/common/ShepherdSplashScreen';
import { AuthModal } from './components/auth/AuthModal';
import { UserProfileModal } from './components/auth/UserProfileModal';
import { storageService } from './services/storageService';
import { authService, UserProfile } from './services/authService';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isInstallModalOpen, setIsInstallModalOpen] = useState<boolean>(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  // Splash Screen & Auth States
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);
  const [sessionVersion, setSessionVersion] = useState<number>(0);

  useEffect(() => {
    const savedTheme = storageService.getTheme();
    setTheme(savedTheme);
    storageService.setTheme(savedTheme);

    // Assinar mudanças de autenticação
    const unsubscribe = authService.subscribe((user) => {
      setCurrentUser(user);
      setSessionVersion((v) => v + 1);
    });

    // Capture PWA install prompt for Android/Chrome
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);

    return () => {
      unsubscribe();
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

  const [geminiInitialPrompt, setGeminiInitialPrompt] = useState<string>('');

  const handleStudyWithGemini = (prompt: string) => {
    setGeminiInitialPrompt(prompt);
    setCurrentTab('gemini-ia');
  };

  const renderCurrentView = () => {
    // Key com sessionVersion garante que os componentes recarreguem limpos ao alternar de conta
    switch (currentTab) {
      case 'home':
        return (
          <HomeView
            key={`home-${sessionVersion}`}
            onSelectTab={setCurrentTab}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
        );
      case 'gemini-ia':
        return (
          <GeminiStudyView
            key={`gemini-${sessionVersion}`}
            initialQuery={geminiInitialPrompt}
            onNavigateToBible={() => setCurrentTab('biblia')}
          />
        );
      case 'biblia':
        return (
          <BibleView
            key={`biblia-${sessionVersion}`}
            onStudyWithGemini={handleStudyWithGemini}
          />
        );
      case 'livros':
        return <TheologyBooksView key={`livros-${sessionVersion}`} />;
      case 'uploads':
        return <UploadLibraryView key={`uploads-${sessionVersion}`} />;
      case 'videos':
        return <VideosView key={`videos-${sessionVersion}`} />;
      case 'profetas':
        return <ProphetsView key={`profetas-${sessionVersion}`} />;
      case 'teologos':
        return <TheologiansView key={`teologos-${sessionVersion}`} />;
      case 'denominacoes':
        return <DenominationsView key={`denominacoes-${sessionVersion}`} />;
      case 'herois-da-fe':
        return <HeroesOfFaithView key={`herois-${sessionVersion}`} />;
      case 'lugares-sagrados':
        return <BiblicalGeographyView key={`lugares-${sessionVersion}`} />;
      case 'personagens':
        return <BiblicalCharactersView key={`personagens-${sessionVersion}`} />;
      case 'obras-cristocentricas':
        return <ChristocentricBooksView key={`obras-${sessionVersion}`} />;
      case 'teologia':
        return <WesleyanTheologyView key={`teologia-${sessionVersion}`} />;
      case 'historia':
        return <ChurchHistoryView key={`historia-${sessionVersion}`} />;
      case 'sermoes':
        return <SermonsView key={`sermoes-${sessionVersion}`} />;
      case 'oracao':
        return <PrayersView key={`oracao-${sessionVersion}`} />;
      case 'hinos':
        return <HymnsView key={`hinos-${sessionVersion}`} />;
      default:
        return (
          <HomeView
            key={`home-def-${sessionVersion}`}
            onSelectTab={setCurrentTab}
            onOpenInstallModal={() => setIsInstallModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans selection:bg-amber-200 dark:selection:bg-amber-900 transition-colors duration-200">
      {/* Tela de Loading / Splash Screen do Bom Pastor */}
      {showSplash && (
        <ShepherdSplashScreen
          onFinish={() => setShowSplash(false)}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          isLoggedIn={!!currentUser}
          userName={currentUser?.name}
        />
      )}

      {/* Header Fixo com Estado de Login e Perfil */}
      <Header
        currentTab={currentTab}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onSelectTab={setCurrentTab}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
        user={currentUser}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onOpenProfile={() => setIsProfileModalOpen(true)}
        onReopenSplash={() => setShowSplash(true)}
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

      {/* Rodapé Oficial com Créditos do Criador */}
      <footer className="border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/60 py-8 px-4 text-center transition-colors">
        <div className="max-w-3xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
              O Mundo Cristão
            </span>
            <span className="text-stone-400">•</span>
            <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
              Igreja Metodista Wesleyana
            </span>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400">
            Criado e idealizado por <strong className="text-stone-900 dark:text-stone-100">Eduardo</strong> para a edificação do Reino de Deus.
          </p>
          <p className="text-xs text-stone-500 dark:text-stone-400">
            Contato e suporte: <a href="mailto:dudusemog@gmail.com" className="text-amber-700 dark:text-amber-400 hover:underline font-semibold">dudusemog@gmail.com</a>
          </p>
          <p className="text-[11px] text-stone-400 italic pt-1">
            "O mundo é a nossa paróquia!" — John Wesley
          </p>
        </div>
      </footer>

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

      {/* Modal de Login & Criação de Conta Privada */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={(user) => {
          setCurrentUser(user);
          setIsAuthModalOpen(false);
        }}
      />

      {/* Modal de Perfil & Gerenciamento da Conta */}
      {currentUser && (
        <UserProfileModal
          isOpen={isProfileModalOpen}
          onClose={() => setIsProfileModalOpen(false)}
          user={currentUser}
          onLogout={() => {
            setCurrentUser(null);
            setIsProfileModalOpen(false);
          }}
          onReopenSplash={() => setShowSplash(true)}
        />
      )}
    </div>
  );
};

export default App;
