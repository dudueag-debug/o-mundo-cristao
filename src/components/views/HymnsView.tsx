import React, { useState } from 'react';
import { COMPLETE_HYMNAL, DetailedHymn } from '../../data/hymnalData';
import { Music, Search, BookOpen, Volume2, Copy, Check, Type, Sparkles, Flame, Share2 } from 'lucide-react';

export const HymnsView: React.FC = () => {
  const [selectedHymn, setSelectedHymn] = useState<DetailedHymn>(COMPLETE_HYMNAL[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedHymn, setCopiedHymn] = useState(false);

  const filteredHymns = COMPLETE_HYMNAL.filter((h) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'harpa' && h.category === 'harpa') ||
      (selectedCategory === 'wesleyano' && (h.category === 'wesleyano' || h.category === 'imw-oficial')) ||
      (selectedCategory === 'classico' && h.category === 'classico');

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      h.title.toLowerCase().includes(query) ||
      h.number.toString().includes(query) ||
      h.author.toLowerCase().includes(query) ||
      h.biblicalTheme.toLowerCase().includes(query);

    return matchesCategory && matchesQuery;
  });

  const handleCopyLyrics = () => {
    let text = `🎶 ${selectedHymn.title} (Nº ${selectedHymn.number})\n`;
    text += `Autor: ${selectedHymn.author} • ${selectedHymn.categoryLabel}\n`;
    text += `Tema: ${selectedHymn.biblicalTheme}\n\n`;

    selectedHymn.lyrics.forEach((verse, idx) => {
      text += `[Verso ${idx + 1}]\n${verse}\n\n`;
    });

    if (selectedHymn.chorus) {
      text += `[Coro / Refrão]\n${selectedHymn.chorus}\n\n`;
    }

    text += `— Compartilhado via O Mundo Cristão`;
    navigator.clipboard.writeText(text);
    setCopiedHymn(true);
    setTimeout(() => setCopiedHymn(false), 2000);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm leading-relaxed';
      case 'lg':
        return 'text-base sm:text-lg leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Music className="w-4 h-4" /> Cânticos Sagrados & Hinologia Histórica
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Harpa Cristã & Hinário Wesleyano
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Cante e medite nas letras inspiradas de Charles Wesley, nos hinos oficiais da IMW e nos hinos imortais da Harpa Cristã.
          </p>
        </div>

        {/* Controles de Tamanho de Fonte */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl text-xs font-semibold self-start sm:self-center">
          <span className="text-[10px] uppercase font-bold text-stone-400 px-2 flex items-center gap-1">
            <Type className="w-3 h-3" /> Letra:
          </span>
          <button
            onClick={() => setFontSize('sm')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'sm' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('md')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'md' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'lg' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Busca e Filtros de Categoria */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por número (ex: 15, 107, 291), título ou autor (Wesley, Harpa)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {[
            { id: 'all', label: 'Todos os Hinos' },
            { id: 'harpa', label: 'Harpa Cristã (Oficial)' },
            { id: 'wesleyano', label: 'Hinário Wesleyano & IMW' },
            { id: 'classico', label: 'Clássicos da Fé' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista Lateral de Hinos */}
        <div className="lg:col-span-5 space-y-2 max-h-[650px] overflow-y-auto pr-1 scrollbar-thin">
          {filteredHymns.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-xs text-stone-500">
              Nenhum hino encontrado para os filtros selecionados.
            </div>
          ) : (
            filteredHymns.map((hymn) => {
              const isSelected = selectedHymn.id === hymn.id;
              return (
                <div
                  key={hymn.id}
                  onClick={() => setSelectedHymn(hymn)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left group ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-stone-800 border-amber-500 shadow-sm ring-2 ring-amber-500/20'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {hymn.categoryLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                      Nº {hymn.number}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {hymn.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                    {hymn.author}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Leitor da Letra do Hino Selecionado */}
        <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {selectedHymn.categoryLabel} • Nº {selectedHymn.number}
                </span>
              </div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 mt-1">
                {selectedHymn.title}
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Por: {selectedHymn.author} • {selectedHymn.biblicalTheme}
              </p>
            </div>

            <button
              onClick={handleCopyLyrics}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-300 dark:border-amber-800 transition-all shadow-sm"
              title="Copiar letra do hino"
            >
              {copiedHymn ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copiar Letra</span>
                </>
              )}
            </button>
          </div>

          {/* Letra com Estrofes */}
          <div className={`space-y-6 font-serif text-stone-800 dark:text-stone-200 ${getFontSizeClass()}`}>
            {selectedHymn.lyrics.map((verse, idx) => (
              <div
                key={idx}
                className="bg-stone-50/60 dark:bg-stone-800/40 p-4 sm:p-5 rounded-2xl border border-stone-100 dark:border-stone-800 space-y-1.5"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                  Estrofe {idx + 1}
                </span>
                <p className="whitespace-pre-line leading-relaxed">
                  {verse}
                </p>
              </div>
            ))}

            {/* Refrão / Coro em Destaque */}
            {selectedHymn.chorus && (
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-transparent p-5 sm:p-6 rounded-2xl border-l-4 border-amber-600 dark:border-amber-500 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" /> Refrão / Coro
                </span>
                <p className="font-semibold italic whitespace-pre-line text-stone-900 dark:text-stone-100 leading-relaxed">
                  {selectedHymn.chorus}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
