import React, { useState } from 'react';
import { THEOLOGY_BOOKS, TheologyBook, BookChapter } from '../../data/theologyBooks';
import { BookOpen, Search, ArrowLeft, ArrowRight, List, Type, Palette, Bookmark, Sparkles, ChevronRight, Check } from 'lucide-react';

export const TheologyBooksView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<TheologyBook | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [readTheme, setReadTheme] = useState<'light' | 'sepia' | 'dark'>('light');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');

  const categories = [
    { id: 'all', label: 'Todas as Obras' },
    { id: 'Wesleyana', label: 'Teologia Wesleyana' },
    { id: 'Doutrina IMW', label: 'Doutrina IMW' },
    { id: 'Arminiana', label: 'Tradição Arminiana' },
    { id: 'Reforma', label: 'A Reforma Protestante' },
  ];

  const filteredBooks = THEOLOGY_BOOKS.filter((b) => {
    const matchesCat = selectedCategory === 'all' || b.category === selectedCategory;
    const matchesQuery =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const currentChapter: BookChapter | undefined = selectedBook?.chapters[currentChapterIndex];

  const getThemeClasses = () => {
    switch (readTheme) {
      case 'sepia':
        return 'bg-[#fbf0d9] text-[#433422] border-[#ebd4aa] selection:bg-[#ebd4aa]';
      case 'dark':
        return 'bg-stone-900 text-stone-100 border-stone-800 selection:bg-amber-900';
      default:
        return 'bg-white text-stone-900 border-stone-200 selection:bg-amber-200';
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-xl leading-loose';
      default: return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Geral se estiver na estante */}
      {!selectedBook ? (
        <>
          <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
              <BookOpen className="w-4 h-4" /> Biblioteca Clássica de Estudo
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
              Livros & Tratados Teológicos
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
              Obras fundamentais completas para leitura, edificação e preparo doutrinário com leitor imersivo integrado.
            </p>
          </div>

          {/* Busca e Categorias */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por livro, John Wesley, Armínio, Lutero, IMW..."
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
              />
            </div>

            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-amber-800 text-white dark:bg-amber-700'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Estante de Livros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                onClick={() => {
                  setSelectedBook(book);
                  setCurrentChapterIndex(0);
                }}
                className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                {/* Capa do Livro */}
                <div className={`p-6 bg-gradient-to-br ${book.coverBg} text-white relative min-h-[170px] flex flex-col justify-between`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                      {book.category}
                    </span>
                    <span className="text-xs text-amber-200/80 font-mono font-medium">{book.year}</span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-lg leading-snug text-white group-hover:text-amber-200 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-xs text-stone-200/80 mt-1 italic">
                      Por {book.author}
                    </p>
                  </div>
                </div>

                {/* Descrição e Ação */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                    {book.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
                    <span className="text-stone-500 font-medium">
                      {book.chapters.length} {book.chapters.length === 1 ? 'capítulo' : 'capítulos'}
                    </span>
                    <span className="font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Abrir Livro <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Visualizador E-Reader do Livro Aberto */
        <div className="space-y-4 animate-fadeIn">
          {/* Barra Superior do E-Reader */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <button
              onClick={() => setSelectedBook(null)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 text-xs font-semibold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar à Estante</span>
            </button>

            <div className="flex items-center gap-2">
              {/* Botão Sumário */}
              <button
                onClick={() => setIsTocOpen(!isTocOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-semibold border border-amber-200 dark:border-amber-800/40"
              >
                <List className="w-4 h-4" />
                <span>Sumário</span>
              </button>

              {/* Tema de Leitura (Claro, Sépia, Noturno) */}
              <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
                <button
                  onClick={() => setReadTheme('light')}
                  className={`w-6 h-6 rounded-lg bg-white border border-stone-300 text-[10px] font-bold ${readTheme === 'light' ? 'ring-2 ring-amber-500' : ''}`}
                  title="Modo Claro"
                >
                  C
                </button>
                <button
                  onClick={() => setReadTheme('sepia')}
                  className={`w-6 h-6 rounded-lg bg-[#fbf0d9] border border-[#d8be8d] text-[10px] font-bold text-[#5c4728] ${readTheme === 'sepia' ? 'ring-2 ring-amber-500' : ''}`}
                  title="Modo Sépia / Pergaminho"
                >
                  S
                </button>
                <button
                  onClick={() => setReadTheme('dark')}
                  className={`w-6 h-6 rounded-lg bg-stone-900 border border-stone-700 text-[10px] font-bold text-white ${readTheme === 'dark' ? 'ring-2 ring-amber-500' : ''}`}
                  title="Modo Escuro"
                >
                  E
                </button>
              </div>

              {/* Ajuste de Tamanho de Fonte */}
              <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
                <button
                  onClick={() => setFontSize('sm')}
                  className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'sm' ? 'bg-white dark:bg-stone-700 shadow-sm' : 'text-stone-400'}`}
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize('md')}
                  className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'md' ? 'bg-white dark:bg-stone-700 shadow-sm' : 'text-stone-400'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('lg')}
                  className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'lg' ? 'bg-white dark:bg-stone-700 shadow-sm' : 'text-stone-400'}`}
                >
                  A+
                </button>
              </div>
            </div>
          </div>

          {/* Sumário Dropdown se aberto */}
          {isTocOpen && (
            <div className="bg-white dark:bg-stone-900 p-4 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-lg space-y-2 animate-fadeIn">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-2">
                Sumário do Livro ({selectedBook.chapters.length} capítulos)
              </h4>
              <div className="space-y-1">
                {selectedBook.chapters.map((ch, idx) => (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setCurrentChapterIndex(idx);
                      setIsTocOpen(false);
                    }}
                    className={`w-full text-left p-2.5 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-between transition-colors ${
                      idx === currentChapterIndex
                        ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 font-bold'
                        : 'hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <span>{ch.number}. {ch.title}</span>
                    {idx === currentChapterIndex && <Check className="w-4 h-4 text-amber-700" />}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Página do Livro */}
          <article className={`p-8 sm:p-12 rounded-3xl border shadow-md transition-colors ${getThemeClasses()}`}>
            <header className="text-center max-w-2xl mx-auto border-b border-current/10 pb-6 mb-8">
              <span className="text-xs uppercase font-bold tracking-widest opacity-70">
                {selectedBook.title} • Por {selectedBook.author}
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl mt-2 mb-1">
                {currentChapter?.title}
              </h2>
              <span className="text-xs opacity-60">
                Capítulo {currentChapter?.number} de {selectedBook.chapters.length}
              </span>
            </header>

            {/* Parágrafos da Obra */}
            <div className={`space-y-6 max-w-3xl mx-auto font-serif ${getFontSizeClass()} text-justify leading-relaxed`}>
              {currentChapter?.content.map((p, idx) => (
                <p key={idx} className="indent-6">
                  {p}
                </p>
              ))}
            </div>

            {/* Rodapé de Navegação */}
            <footer className="flex items-center justify-between max-w-3xl mx-auto pt-8 mt-12 border-t border-current/10">
              <button
                onClick={() => setCurrentChapterIndex(currentChapterIndex - 1)}
                disabled={currentChapterIndex <= 0}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Capítulo Anterior</span>
              </button>

              <span className="text-xs font-bold opacity-60">
                {currentChapterIndex + 1} de {selectedBook.chapters.length}
              </span>

              <button
                onClick={() => setCurrentChapterIndex(currentChapterIndex + 1)}
                disabled={currentChapterIndex >= selectedBook.chapters.length - 1}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-black/5 dark:bg-white/5 hover:bg-black/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <span>Próximo Capítulo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </footer>
          </article>
        </div>
      )}
    </div>
  );
};
