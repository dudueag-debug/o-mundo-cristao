import React, { useState, useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, Settings, Maximize2, Minimize2, Bookmark, BookmarkCheck, Check, Sparkles, SlidersHorizontal, BookOpen, Sun, Moon } from 'lucide-react';

export type KindleTheme = 'white' | 'sepia' | 'dark' | 'paperwhite';
export type KindleFontFamily = 'serif' | 'sans' | 'mono';
export type KindleFontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl';
export type KindleLineHeight = 'tight' | 'normal' | 'relaxed';
export type KindleMarginWidth = 'narrow' | 'normal' | 'wide';

export interface KindleReaderProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  authorOrRef?: string;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (page: number) => void;
  children: React.ReactNode;
}

export const KindleReaderModal: React.FC<KindleReaderProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  authorOrRef,
  totalPages = 1,
  currentPage = 1,
  onPageChange,
  children
}) => {
  // Configurações do Leitor Kindle salvas em LocalStorage
  const [theme, setTheme] = useState<KindleTheme>('sepia');
  const [fontFamily, setFontFamily] = useState<KindleFontFamily>('serif');
  const [fontSize, setFontSize] = useState<KindleFontSize>('lg');
  const [lineHeight, setLineHeight] = useState<KindleLineHeight>('relaxed');
  const [marginWidth, setMarginWidth] = useState<KindleMarginWidth>('normal');
  const [pageMode, setPageMode] = useState<'page' | 'scroll'>('page');

  // Controles de interface
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Carregar preferências salvas
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('omc_kindle_theme') as KindleTheme;
      if (savedTheme) setTheme(savedTheme);
      const savedFont = localStorage.getItem('omc_kindle_font') as KindleFontFamily;
      if (savedFont) setFontFamily(savedFont);
      const savedSize = localStorage.getItem('omc_kindle_size') as KindleFontSize;
      if (savedSize) setFontSize(savedSize);
      const savedMode = localStorage.getItem('omc_kindle_mode') as 'page' | 'scroll';
      if (savedMode) setPageMode(savedMode);
    } catch {}
  }, []);

  // Atalhos de teclado (Setas Esquerda e Direita para trocar de página no Kindle)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        if (onPageChange && currentPage < totalPages) {
          onPageChange(currentPage + 1);
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        if (onPageChange && currentPage > 1) {
          onPageChange(currentPage - 1);
        }
      } else if (e.key === 'Escape') {
        if (isFocusMode) {
          setIsFocusMode(false);
        } else {
          onClose();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, totalPages, isFocusMode, onPageChange, onClose]);

  if (!isOpen) return null;

  const handleSetTheme = (nextTheme: KindleTheme) => {
    setTheme(nextTheme);
    try { localStorage.setItem('omc_kindle_theme', nextTheme); } catch {}
  };

  const handleSetFont = (nextFont: KindleFontFamily) => {
    setFontFamily(nextFont);
    try { localStorage.setItem('omc_kindle_font', nextFont); } catch {}
  };

  const handleSetSize = (nextSize: KindleFontSize) => {
    setFontSize(nextSize);
    try { localStorage.setItem('omc_kindle_size', nextSize); } catch {}
  };

  const handleSetMode = (nextMode: 'page' | 'scroll') => {
    setPageMode(nextMode);
    try { localStorage.setItem('omc_kindle_mode', nextMode); } catch {}
  };

  // Classes de estilo baseadas nos temas do Kindle
  const getThemeWrapperClasses = () => {
    switch (theme) {
      case 'white':
        return 'bg-[#ffffff] text-[#1a1a1a] selection:bg-amber-200';
      case 'sepia':
        return 'bg-[#fbf0d9] text-[#3c2f1d] selection:bg-[#ecd5ac]';
      case 'dark':
        return 'bg-[#121212] text-[#d6d3d1] selection:bg-amber-900/60';
      case 'paperwhite':
        return 'bg-[#1b2620] text-[#d1ded6] selection:bg-emerald-900/50';
    }
  };

  const getThemeBarClasses = () => {
    switch (theme) {
      case 'white':
        return 'bg-stone-50 border-stone-200 text-stone-800';
      case 'sepia':
        return 'bg-[#f4e4c1] border-[#e2cca1] text-[#3c2f1d]';
      case 'dark':
        return 'bg-[#1c1c1c] border-[#2e2e2e] text-[#e0e0e0]';
      case 'paperwhite':
        return 'bg-[#223028] border-[#2d4036] text-[#d1ded6]';
    }
  };

  const getFontFamilyClass = () => {
    switch (fontFamily) {
      case 'serif': return 'font-serif';
      case 'sans': return 'font-sans';
      case 'mono': return 'font-mono';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-normal';
      case 'base': return 'text-base leading-relaxed';
      case 'lg': return 'text-lg leading-relaxed';
      case 'xl': return 'text-xl leading-loose';
      case '2xl': return 'text-2xl leading-loose';
    }
  };

  const getLineHeightClass = () => {
    switch (lineHeight) {
      case 'tight': return 'leading-normal';
      case 'normal': return 'leading-relaxed';
      case 'relaxed': return 'leading-loose';
    }
  };

  const getMarginWidthClass = () => {
    switch (marginWidth) {
      case 'narrow': return 'max-w-xl';
      case 'normal': return 'max-w-2xl';
      case 'wide': return 'max-w-4xl';
    }
  };

  const progressPercent = totalPages > 0 ? Math.round((currentPage / totalPages) * 100) : 0;
  const estimatedMinLeft = Math.max(1, Math.round((totalPages - currentPage) * 1.5));

  return (
    <div className={`fixed inset-0 z-50 flex flex-col transition-colors duration-200 ${getThemeWrapperClasses()}`}>
      {/* Barra Superior do Kindle (ocultável no Modo Foco) */}
      {!isFocusMode && (
        <header className={`px-4 py-2.5 flex items-center justify-between border-b shadow-sm transition-colors ${getThemeBarClasses()}`}>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              title="Fechar Leitor Cristão"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="leading-tight">
              <h2 className="font-serif font-bold text-sm sm:text-base truncate max-w-[200px] sm:max-w-md">
                {title}
              </h2>
              {authorOrRef && (
                <p className="text-[11px] opacity-75 truncate max-w-[180px] sm:max-w-sm">
                  {authorOrRef}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Marcador de Página */}
            <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`p-2 rounded-lg transition-colors ${isBookmarked ? 'text-amber-500' : 'opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10'}`}
              title={isBookmarked ? 'Página marcada' : 'Marcar esta página'}
            >
              {isBookmarked ? <BookmarkCheck className="w-4 h-4 fill-amber-500" /> : <Bookmark className="w-4 h-4" />}
            </button>

            {/* Menu de Configuração de Tipografia (Aa) */}
            <div className="relative">
              <button
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg font-serif font-bold text-xs border border-current/20 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                title="Ajustar Tipografia e Temas do Leitor Cristão"
              >
                <span>Aa</span>
                <SlidersHorizontal className="w-3.5 h-3.5 opacity-70" />
              </button>

              {/* Popover de Configurações */}
              {isSettingsOpen && (
                <div className={`absolute right-0 top-full mt-2 w-72 sm:w-80 p-4 rounded-2xl border shadow-2xl z-50 text-xs space-y-4 animate-fadeIn ${getThemeBarClasses()}`}>
                  <div className="flex items-center justify-between pb-2 border-b border-current/10 font-bold">
                    <span className="flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
                      <Settings className="w-3.5 h-3.5" /> Ajustes do Leitor Cristão
                    </span>
                    <button onClick={() => setIsSettingsOpen(false)} className="opacity-60 hover:opacity-100">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* 4 Temas de Papel */}
                  <div>
                    <span className="block font-semibold mb-1.5 opacity-75">Cor da Página:</span>
                    <div className="grid grid-cols-4 gap-1.5">
                      <button
                        onClick={() => handleSetTheme('white')}
                        className={`h-9 rounded-xl border flex items-center justify-center font-bold text-xs bg-white text-stone-900 ${theme === 'white' ? 'ring-2 ring-amber-500 border-amber-500' : 'border-stone-300'}`}
                        title="Branco"
                      >
                        Branco
                      </button>
                      <button
                        onClick={() => handleSetTheme('sepia')}
                        className={`h-9 rounded-xl border flex items-center justify-center font-bold text-xs bg-[#fbf0d9] text-[#3c2f1d] ${theme === 'sepia' ? 'ring-2 ring-amber-500 border-amber-500' : 'border-[#dfc698]'}`}
                        title="Sépia Clássico"
                      >
                        Sépia
                      </button>
                      <button
                        onClick={() => handleSetTheme('dark')}
                        className={`h-9 rounded-xl border flex items-center justify-center font-bold text-xs bg-[#121212] text-stone-100 ${theme === 'dark' ? 'ring-2 ring-amber-500 border-amber-500' : 'border-stone-700'}`}
                        title="Noturno Preto"
                      >
                        Preto
                      </button>
                      <button
                        onClick={() => handleSetTheme('paperwhite')}
                        className={`h-9 rounded-xl border flex items-center justify-center font-bold text-xs bg-[#1b2620] text-emerald-100 ${theme === 'paperwhite' ? 'ring-2 ring-amber-500 border-amber-500' : 'border-emerald-800'}`}
                        title="Verde Paperwhite"
                      >
                        Oliva
                      </button>
                    </div>
                  </div>

                  {/* Família de Fonte */}
                  <div>
                    <span className="block font-semibold mb-1.5 opacity-75">Tipo de Letra:</span>
                    <div className="grid grid-cols-3 gap-1">
                      <button
                        onClick={() => handleSetFont('serif')}
                        className={`py-1.5 rounded-lg border font-serif text-xs ${fontFamily === 'serif' ? 'bg-amber-500/20 border-amber-500 font-bold' : 'border-current/10'}`}
                      >
                        Bookerly
                      </button>
                      <button
                        onClick={() => handleSetFont('sans')}
                        className={`py-1.5 rounded-lg border font-sans text-xs ${fontFamily === 'sans' ? 'bg-amber-500/20 border-amber-500 font-bold' : 'border-current/10'}`}
                      >
                        Moderna
                      </button>
                      <button
                        onClick={() => handleSetFont('mono')}
                        className={`py-1.5 rounded-lg border font-mono text-xs ${fontFamily === 'mono' ? 'bg-amber-500/20 border-amber-500 font-bold' : 'border-current/10'}`}
                      >
                        Estudo
                      </button>
                    </div>
                  </div>

                  {/* Tamanho da Fonte */}
                  <div>
                    <span className="block font-semibold mb-1.5 opacity-75">Tamanho do Texto:</span>
                    <div className="flex items-center justify-between gap-1 bg-black/5 dark:bg-white/5 p-1 rounded-xl">
                      <button
                        onClick={() => handleSetSize('sm')}
                        className={`flex-1 py-1 rounded-lg font-bold text-[11px] ${fontSize === 'sm' ? 'bg-white text-stone-900 dark:bg-stone-800 dark:text-white shadow-sm' : 'opacity-60'}`}
                      >
                        A-
                      </button>
                      <button
                        onClick={() => handleSetSize('base')}
                        className={`flex-1 py-1 rounded-lg font-bold text-xs ${fontSize === 'base' ? 'bg-white text-stone-900 dark:bg-stone-800 dark:text-white shadow-sm' : 'opacity-60'}`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => handleSetSize('lg')}
                        className={`flex-1 py-1 rounded-lg font-bold text-sm ${fontSize === 'lg' ? 'bg-white text-stone-900 dark:bg-stone-800 dark:text-white shadow-sm' : 'opacity-60'}`}
                      >
                        A+
                      </button>
                      <button
                        onClick={() => handleSetSize('xl')}
                        className={`flex-1 py-1 rounded-lg font-bold text-base ${fontSize === 'xl' ? 'bg-white text-stone-900 dark:bg-stone-800 dark:text-white shadow-sm' : 'opacity-60'}`}
                      >
                        A++
                      </button>
                    </div>
                  </div>

                  {/* Modo de Leitura: Folhear Páginas vs Rolo Contínuo */}
                  <div>
                    <span className="block font-semibold mb-1.5 opacity-75">Formato de Leitura:</span>
                    <div className="grid grid-cols-2 gap-1.5">
                      <button
                        onClick={() => handleSetMode('page')}
                        className={`py-1.5 rounded-lg border text-xs font-semibold ${pageMode === 'page' ? 'bg-amber-500/20 border-amber-500 text-amber-900 dark:text-amber-300' : 'border-current/10 opacity-70'}`}
                      >
                        📖 Modo Livro (Páginas)
                      </button>
                      <button
                        onClick={() => handleSetMode('scroll')}
                        className={`py-1.5 rounded-lg border text-xs font-semibold ${pageMode === 'scroll' ? 'bg-amber-500/20 border-amber-500 text-amber-900 dark:text-amber-300' : 'border-current/10 opacity-70'}`}
                      >
                        📜 Rolagem Contínua
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modo Foco / Tela Cheia (Zen) */}
            <button
              onClick={() => setIsFocusMode(true)}
              className="p-1.5 rounded-lg opacity-70 hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
              title="Modo Foco / Sem Distrações"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </header>
      )}

      {/* Botão flutuante para restaurar menu quando em Modo Foco */}
      {isFocusMode && (
        <button
          onClick={() => setIsFocusMode(false)}
          className="fixed top-3 right-3 z-50 p-2 rounded-full bg-black/40 text-white/80 hover:text-white hover:bg-black/70 backdrop-blur-md transition-all shadow-lg"
          title="Restaurar Barras do Leitor Cristão"
        >
          <Minimize2 className="w-4 h-4" />
        </button>
      )}

      {/* Corpo do Conteúdo do Leitor */}
      <main className="flex-1 overflow-y-auto relative flex flex-col justify-between">
        {/* Controles Laterais estilo Kindle (Toque/Clique nas bordas para virar página) */}
        {pageMode === 'page' && totalPages > 1 && (
          <>
            <button
              onClick={() => onPageChange && currentPage > 1 && onPageChange(currentPage - 1)}
              disabled={currentPage <= 1}
              className="hidden md:flex fixed left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-14 rounded-xl items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-0 transition-all opacity-40 hover:opacity-100"
              title="Página Anterior (Seta Esquerda)"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => onPageChange && currentPage < totalPages && onPageChange(currentPage + 1)}
              disabled={currentPage >= totalPages}
              className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-14 rounded-xl items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 disabled:opacity-0 transition-all opacity-40 hover:opacity-100"
              title="Próxima Página (Seta Direita)"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Artigo / Folha de Leitura Centralizada */}
        <div className={`mx-auto w-full px-6 sm:px-10 py-8 ${getMarginWidthClass()} ${getFontFamilyClass()} ${getFontSizeClass()} ${getLineHeightClass()}`}>
          {subtitle && (
            <div className="text-center mb-6 opacity-70 text-xs font-semibold uppercase tracking-widest">
              {subtitle}
            </div>
          )}
          {children}
        </div>
      </main>

      {/* Barra de Rodapé Oficial do Kindle: Página, Porcentagem e Estimativa de Tempo */}
      <footer className={`px-4 py-2 border-t text-[11px] font-sans flex items-center justify-between transition-colors ${getThemeBarClasses()}`}>
        <div className="flex items-center gap-2">
          {totalPages > 1 ? (
            <>
              <span className="font-semibold">Página {currentPage} de {totalPages}</span>
              <span className="opacity-40">•</span>
              <span className="opacity-75">{progressPercent}% concluído</span>
            </>
          ) : (
            <span className="font-semibold">Leitor Cristão • O Mundo Cristão</span>
          )}
        </div>

        {/* Barra de Progresso Fina */}
        {totalPages > 1 && (
          <div className="hidden sm:block flex-1 max-w-xs mx-4">
            <div className="w-full bg-current/10 h-1 rounded-full overflow-hidden">
              <div
                className="bg-amber-600 dark:bg-amber-400 h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}

        <div className="flex items-center gap-2">
          {totalPages > 1 && (
            <span className="opacity-70 hidden sm:inline">~{estimatedMinLeft} min restantes</span>
          )}
          {pageMode === 'page' && totalPages > 1 && (
            <div className="flex items-center gap-1 ml-2">
              <button
                onClick={() => onPageChange && currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage <= 1}
                className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-20"
                title="Página Anterior"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onPageChange && currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 disabled:opacity-20"
                title="Próxima Página"
              >
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};

// Aliases para nome proprietário do aplicativo
export const LeitorCristaoModal = KindleReaderModal;
export const ChristianReaderModal = KindleReaderModal;

