import React, { useState } from 'react';
import { CHRISTOCENTRIC_BOOKS, ChristocentricBook } from '../../data/christocentricBooks';
import { BookMarked, Search, Cross, Quote, CheckCircle2, ChevronRight, X, Sparkles, BookOpen } from 'lucide-react';

export const ChristocentricBooksView: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<ChristocentricBook | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTradition, setSelectedTradition] = useState<string>('all');

  const traditions = [
    { id: 'all', label: 'Todas as Obras' },
    { id: 'Metodista Wesleyana', label: 'Wesleyana' },
    { id: 'Anglicana', label: 'Anglicana & Apologética' },
    { id: 'Reformada / Presbiteriana', label: 'Reformada & Presbiteriana' },
    { id: 'Batista', label: 'Batista & Puritana' },
    { id: 'Patrística / Igreja Primitiva', label: 'Patrística Clássica' },
  ];

  const filteredBooks = CHRISTOCENTRIC_BOOKS.filter((b) => {
    const matchesTrad = selectedTradition === 'all' || b.tradition.toLowerCase().includes(selectedTradition.toLowerCase());
    const matchesQuery =
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.coreThemes.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTrad && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Cross className="w-4 h-4 text-amber-600" /> Compêndio de Obras Clássicas
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Livros Teológicos Cristocêntricos Renomados
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          As maiores obras teológicas da história da Igreja que colocam a pessoa e o sacrifício de Jesus Cristo no centro absoluto da vida e do pensamento.
        </p>
      </div>

      {/* Busca e Filtros */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por livro, autor (Lewis, Wesley, Stott, Tozer, Calvino, Spurgeon, Keller)..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {traditions.map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTradition(t.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedTradition === t.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid das Obras */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            onClick={() => setSelectedBook(book)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Capa Editorial */}
            <div className={`p-6 bg-gradient-to-br ${book.coverGradient} text-white relative flex flex-col justify-between min-h-[160px]`}>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/20">
                  {book.tradition}
                </span>
                <span className="text-xs text-amber-200 font-mono font-medium">{book.year}</span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-200 transition-colors leading-snug">
                  {book.title}
                </h3>
                <p className="text-xs text-stone-200/90 mt-0.5 italic">
                  Por {book.author}
                </p>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
                  <span className="text-[10px] uppercase font-bold text-amber-800 dark:text-amber-400 block mb-0.5">
                    Tese Cristocêntrica:
                  </span>
                  <p className="font-serif italic text-xs text-stone-800 dark:text-stone-200 line-clamp-2">
                    "{book.christocentricThesis}"
                  </p>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                  {book.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-stone-400 font-medium">
                  {book.coreThemes.length} eixos de estudo
                </span>
                <span className="text-amber-700 dark:text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ver Análise da Obra <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal com Análise da Obra Selecionada */}
      {selectedBook && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-5 my-8">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {selectedBook.tradition} • Publicado em {selectedBook.year}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100 mt-1">
                  {selectedBook.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 font-medium">
                  Por {selectedBook.author} — <em>"{selectedBook.subtitle}"</em>
                </p>
              </div>
              <button
                onClick={() => setSelectedBook(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tese Cristocêntrica em Destaque */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 space-y-1">
              <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Cross className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                Por que esta obra é Cristocêntrica?
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                "{selectedBook.christocentricThesis}"
              </p>
            </div>

            {/* Resumo da Obra */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1">
                Visão Geral & Importância Histórica
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl">
                {selectedBook.summary}
              </p>
            </div>

            {/* Citação Clássica */}
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/80 border-l-4 border-amber-600 space-y-1">
              <span className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" /> Trecho Marcante do Livro:
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                "{selectedBook.keyQuote}"
              </p>
            </div>

            {/* Eixos Temáticos */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
                Principais Eixos Temáticos Abordados
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedBook.coreThemes.map((theme, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 text-xs font-medium text-stone-800 dark:text-stone-200 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{theme}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Aplicação nos Estudos */}
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-xs text-stone-700 dark:text-stone-300">
              <strong className="text-emerald-900 dark:text-emerald-300 block mb-0.5">
                💡 Relevância para o Pregador e Estudante da Bíblia:
              </strong>
              {selectedBook.studySignificance}
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedBook(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-amber-700 hover:bg-amber-800 text-white shadow-sm transition-colors"
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
