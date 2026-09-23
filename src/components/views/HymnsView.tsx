import React, { useState } from 'react';
import { CLASSIC_HYMNS, Hymn } from '../../data/devotionalData';
import { Music, Search, BookOpen, Volume2 } from 'lucide-react';

export const HymnsView: React.FC = () => {
  const [selectedHymn, setSelectedHymn] = useState<Hymn>(CLASSIC_HYMNS[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHymns = CLASSIC_HYMNS.filter(h =>
    h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    h.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Music className="w-4 h-4" /> Cânticos & Adoração
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Hinário & Harpa
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Cante e medite nas letras ricas da hinologia wesleyana e nos hinos tradicionais da fé cristã.
        </p>
      </div>

      {/* Busca */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Buscar por título, Charles Wesley, Harpa, IMW..."
          className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
        />
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista Lateral */}
        <div className="lg:col-span-4 space-y-2">
          {filteredHymns.map((hymn) => {
            const isSelected = selectedHymn.number === hymn.number && selectedHymn.title === hymn.title;
            return (
              <div
                key={hymn.title}
                onClick={() => setSelectedHymn(hymn)}
                className={`p-4 rounded-xl cursor-pointer border transition-all text-left ${
                  isSelected
                    ? 'bg-amber-50/90 dark:bg-stone-800/90 border-amber-500/60 shadow-sm ring-1 ring-amber-500/30'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400">
                    {hymn.category}
                  </span>
                  <span className="text-xs text-stone-400 font-mono">#{hymn.number}</span>
                </div>
                <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                  {hymn.title}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {hymn.author}
                </p>
              </div>
            );
          })}
        </div>

        {/* Letra do Hino Selecionado */}
        <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors space-y-6">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40 uppercase tracking-wider">
              {selectedHymn.category} • Hino #{selectedHymn.number}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mt-2">
              {selectedHymn.title}
            </h2>
            <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 font-medium mt-1">
              Autor / Letra: {selectedHymn.author}
            </p>
          </div>

          {/* Refrão em destaque se houver */}
          {selectedHymn.chorus && (
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-900 dark:text-amber-400 block">
                [ Coro / Refrão ]
              </span>
              <p className="font-serif italic text-base sm:text-lg text-amber-950 dark:text-amber-200 font-semibold">
                "{selectedHymn.chorus}"
              </p>
            </div>
          )}

          {/* Estrofes */}
          <div className="space-y-4 max-w-xl mx-auto py-2">
            {selectedHymn.verses.map((v, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-100 dark:border-stone-800 space-y-1"
              >
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 block select-none">
                  Estrofe {idx + 1}
                </span>
                <p className="font-serif text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
