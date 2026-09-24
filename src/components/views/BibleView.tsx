import React, { useState, useEffect } from 'react';
import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../../data/fullBibleIndex';
import { bibleService, BIBLE_VERSIONS, BibleVersionId, VerseItem } from '../../services/bibleService';
import { bibleHighlightService, HIGHLIGHT_COLORS, HighlightColor, BibleHighlight } from '../../services/bibleHighlightService';
import { BookOpen, Copy, Check, Type, Bookmark, ChevronDown, Search, ArrowLeft, ArrowRight, Sparkles, Palette, Trash2, X, BookmarkCheck } from 'lucide-react';

interface BibleViewProps {
  onStudyWithGemini?: (prompt: string) => void;
}

export const BibleView: React.FC<BibleViewProps> = ({ onStudyWithGemini }) => {
  const [selectedBook, setSelectedBook] = useState<BibleBookInfo>(ALL_BIBLE_BOOKS.find(b => b.id === 'sl') || ALL_BIBLE_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<number>(23);
  const [selectedVersion, setSelectedVersion] = useState<BibleVersionId>('ARC');
  const [verses, setVerses] = useState<VerseItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);

  // Sistema de Marcação Colorida
  const [highlightsMap, setHighlightsMap] = useState<Record<string, HighlightColor>>({});
  const [activeVerseForMenu, setActiveVerseForMenu] = useState<{ number: number; text: string } | null>(null);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [highlightsList, setHighlightsList] = useState<BibleHighlight[]>([]);
  const [highlightColorFilter, setHighlightColorFilter] = useState<string>('all');

  // Modais de seleção de livro
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookSearchQuery, setBookSearchQuery] = useState('');
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');

  useEffect(() => {
    loadChapter(selectedBook.id, selectedChapter, selectedVersion);
    loadHighlights();
  }, [selectedBook, selectedChapter, selectedVersion]);

  const loadHighlights = () => {
    setHighlightsMap(bibleHighlightService.getHighlightMap());
    setHighlightsList(bibleHighlightService.getHighlights());
  };

  const loadChapter = async (bookId: string, chapter: number, version: BibleVersionId) => {
    setIsLoading(true);
    const data = await bibleService.getChapterVerses(bookId, chapter, version);
    setVerses(data);
    setIsLoading(false);
    setActiveVerseForMenu(null);
  };

  const handleSelectBook = (book: BibleBookInfo) => {
    setSelectedBook(book);
    setSelectedChapter(1);
    setIsBookModalOpen(false);
  };

  const handlePrevChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
    }
  };

  const handleNextChapter = () => {
    if (selectedChapter < selectedBook.chaptersCount) {
      setSelectedChapter(selectedChapter + 1);
    }
  };

  const handleCopyVerse = (verseNum: number, text: string) => {
    const copyText = `"${text}" — ${selectedBook.name} ${selectedChapter}:${verseNum} (${selectedVersion})`;
    navigator.clipboard.writeText(copyText);
    setCopiedVerseNum(verseNum);
    setTimeout(() => setCopiedVerseNum(null), 2000);
  };

  const handleApplyColor = (color: HighlightColor) => {
    if (!activeVerseForMenu) return;
    bibleHighlightService.setHighlight(
      selectedBook.id,
      selectedBook.name,
      selectedChapter,
      activeVerseForMenu.number,
      activeVerseForMenu.text,
      selectedVersion,
      color
    );
    loadHighlights();
    setActiveVerseForMenu(null);
  };

  const handleRemoveColor = () => {
    if (!activeVerseForMenu) return;
    bibleHighlightService.removeHighlight(selectedBook.id, selectedChapter, activeVerseForMenu.number);
    loadHighlights();
    setActiveVerseForMenu(null);
  };

  const handleSendToGemini = (verseNum: number, text: string) => {
    const prompt = `Faça um estudo exegético, histórico e teológico pastoral do versículo: "${text}" (${selectedBook.name} ${selectedChapter}:${verseNum})`;
    if (onStudyWithGemini) {
      onStudyWithGemini(prompt);
    }
  };

  const handleJumpToHighlight = (h: BibleHighlight) => {
    const book = ALL_BIBLE_BOOKS.find(b => b.id === h.bookId);
    if (book) {
      setSelectedBook(book);
      setSelectedChapter(h.chapter);
      setIsHighlightsModalOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-xl leading-loose';
      default: return 'text-base leading-relaxed';
    }
  };

  const filteredBooks = ALL_BIBLE_BOOKS.filter(b => {
    const matchesTestament = testamentFilter === 'ALL' || b.testament === testamentFilter;
    const matchesSearch = b.name.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
                          b.abbrev.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(bookSearchQuery.toLowerCase());
    return matchesTestament && matchesSearch;
  });

  const filteredHighlights = highlightsList.filter(h =>
    highlightColorFilter === 'all' || h.color === highlightColorFilter
  );

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header com Navegação e Controles */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" /> Escrituras Sagradas • 66 Livros
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>Bíblia Sagrada Completa</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Toque em qualquer versículo para marcar com cores, copiar ou estudar diretamente com o Gemini IA.
          </p>
        </div>

        {/* Barra de Ações: Livro, Capítulo, Versão, Marcados e Fonte */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Botão Selecionar Livro */}
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-amber-900/20 transition-all"
          >
            <Bookmark className="w-4 h-4" />
            <span>{selectedBook.name} {selectedChapter}</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Botão Meus Versículos Marcados */}
          <button
            onClick={() => {
              loadHighlights();
              setIsHighlightsModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-500 shadow-sm transition-colors"
            title="Ver meus versículos destacados e marcados com cores"
          >
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            <span>Marcados ({highlightsList.length})</span>
          </button>

          {/* Seletor de Versão Bíblica */}
          <select
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value as BibleVersionId)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            title="Escolha a versão da Bíblia"
          >
            {BIBLE_VERSIONS.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} ({v.fullName})
              </option>
            ))}
          </select>

          {/* Controles de Fonte */}
          <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
            <Type className="w-3.5 h-3.5 text-stone-400 ml-1" />
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'sm' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'md' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'lg' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Seletor Rápido de Capítulos Horizontal */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-stone-400 shrink-0 uppercase tracking-wider pl-1">
          Capítulos:
        </span>
        {Array.from({ length: selectedBook.chaptersCount }, (_, i) => i + 1).map((ch) => {
          const isActive = ch === selectedChapter;
          return (
            <button
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`w-9 h-9 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center justify-center ${
                isActive
                  ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-500/50 scale-105'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              {ch}
            </button>
          );
        })}
      </div>

      {/* Leitor Central do Capítulo */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors relative">
        {/* Cabeçalho do Leitor */}
        <div className="text-center max-w-xl mx-auto mb-8 border-b border-stone-100 dark:border-stone-800 pb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400">
            {selectedBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'} • {selectedBook.category}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mt-1">
            {selectedBook.name} {selectedChapter}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mt-1.5">
            <span>Versão: {BIBLE_VERSIONS.find(v => v.id === selectedVersion)?.fullName}</span>
            <span>•</span>
            <span>Total de {verses.length} versículos</span>
          </div>
        </div>

        {/* Versículos */}
        {isLoading ? (
          <div className="p-12 text-center text-stone-500 space-y-2">
            <BookOpen className="w-8 h-8 animate-pulse text-amber-600 mx-auto" />
            <p className="text-sm">Carregando a Palavra de Deus...</p>
          </div>
        ) : (
          <div className={`space-y-3 max-w-3xl mx-auto font-serif ${getFontSizeClass()} text-stone-800 dark:text-stone-200`}>
            {verses.map((v) => {
              const verseKey = `${selectedBook.id}_${selectedChapter}_${v.number}`;
              const highlightColor = highlightsMap[verseKey];
              const highlightConfig = highlightColor ? HIGHLIGHT_COLORS.find(c => c.id === highlightColor) : null;
              const isSelectedForMenu = activeVerseForMenu?.number === v.number;
              const isCopied = copiedVerseNum === v.number;

              return (
                <div
                  key={v.number}
                  className={`group relative rounded-2xl transition-all ${
                    highlightConfig
                      ? `${highlightConfig.bgClass} shadow-sm px-4 py-2.5`
                      : 'hover:bg-amber-50/60 dark:hover:bg-stone-800/60 p-2.5'
                  } ${isSelectedForMenu ? 'ring-2 ring-amber-500' : ''}`}
                >
                  <div
                    onClick={() => {
                      if (isSelectedForMenu) {
                        setActiveVerseForMenu(null);
                      } else {
                        setActiveVerseForMenu({ number: v.number, text: v.text });
                      }
                    }}
                    className="flex items-baseline gap-3.5 cursor-pointer"
                  >
                    <span className="font-sans text-xs font-bold text-amber-700 dark:text-amber-400 select-none w-6 text-right shrink-0">
                      {v.number}
                    </span>
                    <p className="leading-relaxed flex-1 select-text">
                      {v.text}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyVerse(v.number, v.text);
                        }}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-stone-200/50 dark:hover:bg-stone-700"
                        title="Copiar versículo"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Menu Flutuante de Marcação e Estudo com Gemini IA */}
                  {isSelectedForMenu && (
                    <div className="mt-3 p-3 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1">
                          <Palette className="w-3 h-3 text-amber-600" /> Marcar Versículo {v.number}:
                        </span>
                        <button
                          onClick={() => setActiveVerseForMenu(null)}
                          className="text-stone-400 hover:text-stone-600 p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {HIGHLIGHT_COLORS.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => handleApplyColor(c.id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:scale-105 transition-transform"
                            title={c.label}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full ${c.dotClass} shadow-inner`} />
                            <span>{c.label}</span>
                          </button>
                        ))}

                        {highlightColor && (
                          <button
                            onClick={handleRemoveColor}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900"
                            title="Remover cor deste versículo"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remover Cor</span>
                          </button>
                        )}
                      </div>

                      <div className="pt-2 border-t border-stone-100 dark:border-stone-700 flex flex-wrap items-center justify-between gap-2">
                        <button
                          onClick={() => handleCopyVerse(v.number, v.text)}
                          className="inline-flex items-center gap-1 text-xs text-stone-600 dark:text-stone-300 hover:text-amber-700 font-semibold"
                        >
                          <Copy className="w-3.5 h-3.5" /> Copiar Versículo
                        </button>

                        <button
                          onClick={() => handleSendToGemini(v.number, v.text)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-semibold shadow-md transition-all"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Estudar com Gemini IA</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Navegação Entre Capítulos (Anterior e Próximo) */}
        <div className="flex items-center justify-between max-w-3xl mx-auto pt-8 mt-8 border-t border-stone-100 dark:border-stone-800">
          <button
            onClick={handlePrevChapter}
            disabled={selectedChapter <= 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Capítulo Anterior</span>
          </button>

          <span className="text-xs font-bold text-stone-400">
            {selectedChapter} / {selectedBook.chaptersCount}
          </span>

          <button
            onClick={handleNextChapter}
            disabled={selectedChapter >= selectedBook.chaptersCount}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <span>Próximo Capítulo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Modal Meus Versículos Marcados */}
      {isHighlightsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4 max-h-[85vh] flex flex-col animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <BookmarkCheck className="w-5 h-5 text-amber-600" />
                  Meus Versículos Marcados ({highlightsList.length})
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Seus versículos destacados e coloridos na Bíblia Sagrada
                </p>
              </div>
              <button
                onClick={() => setIsHighlightsModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {/* Filtros por Cor */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
              <button
                onClick={() => setHighlightColorFilter('all')}
                className={`px-3 py-1.5 rounded-xl font-semibold transition-colors ${
                  highlightColorFilter === 'all'
                    ? 'bg-amber-700 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                }`}
              >
                Todos ({highlightsList.length})
              </button>
              {HIGHLIGHT_COLORS.map(c => {
                const count = highlightsList.filter(h => h.color === c.id).length;
                return (
                  <button
                    key={c.id}
                    onClick={() => setHighlightColorFilter(c.id)}
                    className={`px-3 py-1.5 rounded-xl font-semibold flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                      highlightColorFilter === c.id
                        ? 'bg-amber-700 text-white'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300'
                    }`}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${c.dotClass}`} />
                    <span>{c.label} ({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Lista dos Versículos Marcados */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {filteredHighlights.length === 0 ? (
                <div className="p-8 text-center text-stone-400 space-y-2">
                  <Palette className="w-8 h-8 mx-auto text-amber-500/40" />
                  <p className="text-xs">Nenhum versículo marcado nesta categoria.</p>
                </div>
              ) : (
                filteredHighlights.map((h) => {
                  const colorConfig = HIGHLIGHT_COLORS.find(c => c.id === h.color);
                  return (
                    <div
                      key={h.id}
                      onClick={() => handleJumpToHighlight(h)}
                      className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 hover:border-amber-500 cursor-pointer transition-all space-y-2 group"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-serif font-bold text-amber-800 dark:text-amber-400">
                          {h.bookName} {h.chapter}:{h.verseNum}
                        </span>
                        {colorConfig && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-stone-500 dark:text-stone-400">
                            <span className={`w-2 h-2 rounded-full ${colorConfig.dotClass}`} />
                            {colorConfig.label}
                          </span>
                        )}
                      </div>
                      <p className="font-serif text-xs sm:text-sm text-stone-800 dark:text-stone-200 italic line-clamp-3">
                        "{h.verseText}"
                      </p>
                      <div className="text-[10px] text-amber-700 dark:text-amber-400 font-semibold flex items-center justify-between pt-1">
                        <span>Toque para ler no capítulo ↗</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            bibleHighlightService.removeHighlight(h.bookId, h.chapter, h.verseNum);
                            loadHighlights();
                          }}
                          className="text-stone-400 hover:text-rose-600 p-1"
                          title="Remover marcação"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal Selecionar Entre os 66 Livros da Bíblia */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 max-w-3xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4 max-h-[85vh] flex flex-col animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  Os 66 Livros da Bíblia Sagrada
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Selecione qualquer livro do Antigo ou Novo Testamento
                </p>
              </div>
              <button
                onClick={() => setIsBookModalOpen(false)}
                className="px-3 py-1.5 rounded-xl text-xs font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200"
              >
                Fechar
              </button>
            </div>

            {/* Busca & Filtro AT / NT */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
                <input
                  type="text"
                  value={bookSearchQuery}
                  onChange={(e) => setBookSearchQuery(e.target.value)}
                  placeholder="Pesquisar livro (ex: Gênesis, Salmos, Romanos, João)..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl shrink-0">
                <button
                  onClick={() => setTestamentFilter('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'ALL' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Todos (66)
                </button>
                <button
                  onClick={() => setTestamentFilter('AT')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'AT' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Antigo (39)
                </button>
                <button
                  onClick={() => setTestamentFilter('NT')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'NT' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Novo (27)
                </button>
              </div>
            </div>

            {/* Grid dos Livros */}
            <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 py-2">
              {filteredBooks.map((book) => {
                const isCurrent = book.id === selectedBook.id;
                return (
                  <button
                    key={book.id}
                    onClick={() => handleSelectBook(book)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? 'bg-amber-100 dark:bg-amber-950 border-amber-500/80 shadow-sm ring-1 ring-amber-500'
                        : 'bg-white dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        {book.abbrev}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {book.chaptersCount} cap.
                      </span>
                    </div>
                    <div className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                      {book.name}
                    </div>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400 block truncate mt-0.5">
                      {book.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
