import React, { useState, useEffect } from 'react';
import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../../data/fullBibleIndex';
import { bibleService, BIBLE_VERSIONS, BibleVersionId, VerseItem } from '../../services/bibleService';
import { BookOpen, Copy, Check, Type, Bookmark, ChevronDown, Search, ArrowLeft, ArrowRight, Sparkles, Filter } from 'lucide-react';

export const BibleView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<BibleBookInfo>(ALL_BIBLE_BOOKS.find(b => b.id === 'sl') || ALL_BIBLE_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<number>(23);
  const [selectedVersion, setSelectedVersion] = useState<BibleVersionId>('ARC');
  const [verses, setVerses] = useState<VerseItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);

  // Modais de seleção
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookSearchQuery, setBookSearchQuery] = useState('');
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');

  useEffect(() => {
    loadChapter(selectedBook.id, selectedChapter, selectedVersion);
  }, [selectedBook, selectedChapter, selectedVersion]);

  const loadChapter = async (bookId: string, chapter: number, version: BibleVersionId) => {
    setIsLoading(true);
    const data = await bibleService.getChapterVerses(bookId, chapter, version);
    setVerses(data);
    setIsLoading(false);
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

  return (
    <div className="space-y-6 pb-12">
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
            Antigo e Novo Testamento com alternador de versões e busca instantânea.
          </p>
        </div>

        {/* Barra de Ações: Livro, Capítulo, Versão e Fonte */}
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
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors">
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
          <div className={`space-y-4 max-w-3xl mx-auto font-serif ${getFontSizeClass()} text-stone-800 dark:text-stone-200`}>
            {verses.map((v) => {
              const isCopied = copiedVerseNum === v.number;
              return (
                <div
                  key={v.number}
                  className="group relative flex items-baseline gap-3.5 p-2 rounded-xl hover:bg-amber-50/60 dark:hover:bg-stone-800/60 transition-colors"
                >
                  <span className="font-sans text-xs font-bold text-amber-700 dark:text-amber-400 select-none w-6 text-right shrink-0">
                    {v.number}
                  </span>
                  <p className="leading-relaxed flex-1">
                    {v.text}
                  </p>
                  <button
                    onClick={() => handleCopyVerse(v.number, v.text)}
                    className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-stone-200/50 dark:hover:bg-stone-700 transition-all shrink-0"
                    title="Copiar este versículo"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
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

      {/* Modal Selecionar Entre os 66 Livros da Bíblia */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 max-w-3xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
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
