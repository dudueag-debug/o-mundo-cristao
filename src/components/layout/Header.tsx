import React from 'react';
import { BookOpen, Moon, Sun, Flame, Cross, Download, ShieldCheck, User, Sparkles } from 'lucide-react';
import { UserProfile } from '../../services/authService';

interface HeaderProps {
  currentTab: string;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onSelectTab: (tab: string) => void;
  onOpenInstallModal: () => void;
  user: UserProfile | null;
  onOpenAuth: () => void;
  onOpenProfile: () => void;
  onReopenSplash: () => void;
}

const AVATAR_MAP: Record<string, string> = {
  pastor: '🐑',
  cruz: '✝',
  biblia: '📖',
  pomba: '🕊',
  calice: '🍷',
  chama: '🔥',
};

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
  onSelectTab,
  onOpenInstallModal,
  user,
  onOpenAuth,
  onOpenProfile,
  onReopenSplash
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo & Brand */}
          <div
            onClick={() => onSelectTab('home')}
            className="flex items-center space-x-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-md shadow-amber-900/20 group-hover:scale-105 transition-transform">
              <Cross className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 tracking-tight">
                  O Mundo Cristão
                </span>
                <span className="hidden xs:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  <Flame className="w-3 h-3 mr-0.5 text-amber-600 inline" /> IMW
                </span>
              </div>
              <p className="text-xs text-stone-500 dark:text-stone-400 font-medium hidden sm:block">
                História das Igrejas • Teologia Wesleyana • Esboços
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {/* Botão Abertura Bom Pastor */}
            <button
              onClick={onReopenSplash}
              className="p-2 rounded-xl text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors"
              title="Rever abertura do Bom Pastor"
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Install PWA Button */}
            <button
              onClick={onOpenInstallModal}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all"
              title="Instalar no celular (Android e iOS)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Baixar App</span>
            </button>

            {/* Conta do Usuário / Login Privado */}
            {user ? (
              <button
                onClick={onOpenProfile}
                className="flex items-center gap-2 pl-2 pr-3 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 hover:border-amber-500 transition-all text-left"
                title="Meu Perfil Privado"
              >
                <span className="text-base sm:text-lg">
                  {AVATAR_MAP[user.avatar] || '🐑'}
                </span>
                <div className="hidden sm:block">
                  <div className="text-xs font-bold text-stone-900 dark:text-stone-100 leading-none">
                    {user.name.split(' ')[0]}
                  </div>
                  <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                    <ShieldCheck className="w-2.5 h-2.5" /> Privada
                  </span>
                </div>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-amber-600/40 text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-all"
                title="Criar Conta Privada ou Entrar"
              >
                <User className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Criar Conta / Entrar</span>
                <span className="sm:hidden">Entrar</span>
              </button>
            )}

            {/* Dark / Light Toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Alternar tema"
              title={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-stone-600" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
