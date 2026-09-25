import React, { useState } from 'react';
import { THEOLOGY_BOOKS, TheologyBook, BookChapter } from '../../data/theologyBooks';
import { SYSTEMATIC_THEOLOGY_MODULES, SystematicTheologyModule, TheologyArticle } from '../../data/systematicTheology';
import { KindleReaderModal } from '../common/KindleReaderModal';
import {
  BookOpen,
  Search,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Crown,
  Cross,
  Flame,
  Compass,
  Check,
  BookMarked,
  Scroll,
  HelpCircle,
  X
} from 'lucide-react';

export const TheologyBooksView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'livros' | 'sistematica'>('livros');
  const [selectedBook, setSelectedBook] = useState<TheologyBook | null>(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Teologia Sistemática - Artigo Aberto
  const [selectedArticle, setSelectedArticle] = useState<TheologyArticle | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Obras' },
    { id: 'Wesleyana', label: 'Teologia Wesleyana' },
    { id: 'Doutrina IMW', label: 'Doutrina IMW' },
    { id: 'Arminiana', label: 'Tradição Arminiana' },
    { id: 'Reforma', label: 'A Reforma Protestante' },
    { id: 'Patrística', label: 'Patrística Cristã' },
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

  const getModuleIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-5 h-5 text-amber-500" />;
      case 'Cross': return <Cross className="w-5 h-5 text-rose-500" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Compass': return <Compass className="w-5 h-5 text-sky-500" />;
      default: return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header Geral */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" /> Grande Biblioteca & Doutrina
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Teologia Bíblica & Obras Clássicas
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Tratados fundamentais no Leitor Cristão e compêndio de Teologia Sistemática wesleyana.
          </p>
        </div>

        {/* Alternador de Modo: Obras Clássicas vs Teologia Sistemática */}
        <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-2xl border border-stone-200 dark:border-stone-700 shrink-0">
          <button
            onClick={() => setViewMode('livros')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'livros'
                ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-400/50'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>Obras Clássicas ({THEOLOGY_BOOKS.length})</span>
          </button>

          <button
            onClick={() => setViewMode('sistematica')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === 'sistematica'
                ? 'bg-amber-600 text-white shadow-md ring-2 ring-amber-400/50'
                : 'text-stone-600 dark:text-stone-300 hover:text-stone-900'
            }`}
          >
            <Scroll className="w-3.5 h-3.5" />
            <span>Teologia Sistemática (7 Áreas)</span>
          </button>
        </div>
      </div>

      {/* SEÇÃO 1: ESTANTE DE OBRAS CLÁSSICAS COM LEITOR KINDLE */}
      {viewMode === 'livros' && (
        <div className="space-y-4">
          {/* Busca e Categorias */}
          <div className="space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por livro, Spurgeon, Agostinho, John Wesley, Armínio, IMW..."
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

          {/* Grid dos Livros */}
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
                      Leitor Cristão <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SEÇÃO 2: TEOLOGIA SISTEMÁTICA COMPLETA */}
      {viewMode === 'sistematica' && (
        <div className="space-y-6">
          <div className="bg-amber-50/60 dark:bg-stone-900/60 p-5 rounded-2xl border border-amber-200/60 dark:border-stone-800 flex items-center justify-between">
            <div>
              <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Compêndio de Doutrinas & Teologia Sistemática
              </h2>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
                Exposição bíblica das principais doutrinas da fé cristã sob o prisma armínio-wesleyano.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SYSTEMATIC_THEOLOGY_MODULES.map((mod) => (
              <div
                key={mod.id}
                className="rounded-3xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 space-y-4 hover:border-amber-500/50 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/80 flex items-center justify-center">
                      {getModuleIcon(mod.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        {mod.category}
                      </span>
                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                        {mod.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                    {mod.badge}
                  </span>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  {mod.subtitle}
                </p>

                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Artigos Doutrinários:
                  </span>
                  {mod.articles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => setSelectedArticle(art)}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/50 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-stone-200/60 dark:border-stone-700/60 cursor-pointer flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                          {art.title}
                        </h4>
                        <div className="flex gap-1.5 mt-1">
                          {art.scriptureReferences.map((ref, rIdx) => (
                            <span key={rIdx} className="text-[10px] text-amber-700 dark:text-amber-400 font-mono">
                              {ref}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* LEITOR KINDLE MODAL PARA QUALQUER LIVRO TEOLÓGICO CLICADO */}
      {selectedBook && (
        <KindleReaderModal
          isOpen={!!selectedBook}
          onClose={() => setSelectedBook(null)}
          title={selectedBook.title}
          subtitle={`Capítulo ${currentChapterIndex + 1}: ${currentChapter?.title}`}
          authorOrRef={`Por ${selectedBook.author} (${selectedBook.year})`}
          totalPages={selectedBook.chapters.length}
          currentPage={currentChapterIndex + 1}
          onPageChange={(page) => setCurrentChapterIndex(page - 1)}
        >
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-current/10">
              <span className="text-xs uppercase font-bold tracking-widest opacity-70">
                {selectedBook.title} • Por {selectedBook.author}
              </span>
              <h1 className="font-serif font-bold text-2xl sm:text-3xl mt-2 mb-1">
                {currentChapter?.title}
              </h1>
              <p className="text-xs opacity-60">
                Capítulo {currentChapter?.number} de {selectedBook.chapters.length}
              </p>
            </div>

            <div className="space-y-5 text-justify leading-relaxed">
              {currentChapter?.content.map((p, idx) => (
                <p key={idx} className="indent-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </KindleReaderModal>
      )}

      {/* MODAL DE LEITURA DETALHADA DE ARTIGO DE TEOLOGIA SISTEMÁTICA */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-5 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Doutrina Sistemática
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300 font-bold"
              >
                ✕
              </button>
            </div>

            {/* Referências Bíblicas */}
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-bold text-stone-500">Fundamentação Bíblica:</span>
              {selectedArticle.scriptureReferences.map((ref, idx) => (
                <span key={idx} className="text-xs font-mono font-bold px-2 py-0.5 rounded-lg bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {ref}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <div className="p-4 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                <strong className="block text-stone-900 dark:text-stone-100 mb-1 font-serif text-sm">Resumo da Doutrina:</strong>
                <p>{selectedArticle.summary}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-1 font-serif text-sm">Perspectiva Histórica e Patrística:</strong>
                <p>{selectedArticle.historicalView}</p>
              </div>

              <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-2xl border border-amber-200/70 dark:border-amber-800/40">
                <strong className="block text-amber-900 dark:text-amber-300 mb-1 font-serif text-sm">Enfoque Wesleyano & Santidade:</strong>
                <p className="italic text-amber-950 dark:text-amber-200">{selectedArticle.wesleyanPerspective}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-1 font-serif text-sm">Aplicação Pastoral e Prática:</strong>
                <p>{selectedArticle.pastoralApplication}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-colors"
              >
                Concluir Leitura
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
