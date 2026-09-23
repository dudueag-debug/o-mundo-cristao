import React, { useState } from 'react';
import { RENOWNED_THEOLOGIANS, Theologian } from '../../data/renownedTheologians';
import { Users, Search, Quote, BookOpen, Sparkles, ChevronRight, Award, Flame, Cross, X } from 'lucide-react';

export const TheologiansView: React.FC = () => {
  const [selectedTheologian, setSelectedTheologian] = useState<Theologian | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDenom, setSelectedDenom] = useState<string>('all');

  const denominations = [
    { id: 'all', label: 'Todas as Tradições' },
    { id: 'Wesleyana / Metodista', label: 'Wesleyana & Metodista' },
    { id: 'Pioneiros IMW', label: 'Pioneiros IMW (1967)' },
    { id: 'Batista', label: 'Batista' },
    { id: 'Presbiteriana / Reformada', label: 'Presbiteriana & Reformada' },
    { id: 'Luterana', label: 'Luterana' },
    { id: 'Anglicana', label: 'Anglicana' },
    { id: 'Pentecostal', label: 'Pentecostal' },
    { id: 'Patrística (Pais da Igreja)', label: 'Pais da Igreja (Patrística)' },
  ];

  const filteredTheologians = RENOWNED_THEOLOGIANS.filter((t) => {
    const matchesDenom = selectedDenom === 'all' || t.denomination === selectedDenom;
    const matchesQuery =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.keyContribution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.majorWorks.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDenom && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Users className="w-4 h-4" /> Mestres & Pais da Fé
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Grandes Teólogos Renomados
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Conheça os mais influentes pensadores, pregadores e teólogos cristocêntricos de todas as grandes tradições cristãs (Wesleyanos, Batistas, Reformados, Luteranos, Anglicanos, Pentecostais e Pais da Igreja).
        </p>
      </div>

      {/* Busca e Filtros por Denominação */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por teólogo, John Wesley, Spurgeon, Calvino, Lutero, Lewis, Dorival Beppu..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {denominations.map((d) => (
            <button
              key={d.id}
              onClick={() => setSelectedDenom(d.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedDenom === d.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards dos Teólogos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTheologians.map((theologian) => (
          <div
            key={theologian.id}
            onClick={() => setSelectedTheologian(theologian)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/60 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
          >
            {/* Topo com Avatar & Badges */}
            <div className={`p-5 bg-gradient-to-br ${theologian.avatarBg} text-white relative flex items-center gap-3.5`}>
              <div className="w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-center font-serif text-xl font-bold shrink-0 shadow-md">
                {theologian.name.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/20 border border-white/20 inline-block mb-1">
                  {theologian.denomination}
                </span>
                <h3 className="font-serif font-bold text-base text-white group-hover:text-amber-200 transition-colors truncate">
                  {theologian.name}
                </h3>
                <p className="text-xs text-amber-200/80 truncate">
                  {theologian.title}
                </p>
              </div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-stone-400">
                  <span>{theologian.nationality}</span>
                  <span>{theologian.birthDeath}</span>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                  {theologian.keyContribution}
                </p>

                {/* Citação Rápida */}
                <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-100 dark:border-stone-800 text-xs italic font-serif text-stone-700 dark:text-stone-300 line-clamp-2">
                  "{theologian.famousQuote}"
                </div>
              </div>

              {/* Rodapé com Obras */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-stone-400 font-medium">
                  {theologian.majorWorks.length} obras principais
                </span>
                <span className="text-amber-700 dark:text-amber-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Ver Perfil Completo <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal com Detalhes Completos do Teólogo Selecionado */}
      {selectedTheologian && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8">
            {/* Header do Modal */}
            <div className="flex items-start justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div className="flex items-center gap-3.5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selectedTheologian.avatarBg} text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md`}>
                  {selectedTheologian.name.charAt(0)}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    {selectedTheologian.denomination} • {selectedTheologian.period}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100 mt-1">
                    {selectedTheologian.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-400 font-medium">
                    {selectedTheologian.title} ({selectedTheologian.birthDeath}, {selectedTheologian.nationality})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTheologian(null)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Citação Célebre */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-600 space-y-1">
              <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                <Quote className="w-3.5 h-3.5" /> Frase Célebre:
              </span>
              <p className="font-serif italic text-sm sm:text-base text-stone-800 dark:text-stone-200">
                "{selectedTheologian.famousQuote}"
              </p>
            </div>

            {/* Contribuição Histórica & Teológica */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-1.5">
                Legado & Contribuição para a Fé Cristã
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl">
                {selectedTheologian.keyContribution}
              </p>
            </div>

            {/* Ênfase Cristocêntrica */}
            <div className="p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                <Cross className="w-3.5 h-3.5 text-rose-600" />
                Ênfase Cristocêntrica (Cristo no Centro)
              </span>
              <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-serif">
                {selectedTheologian.christocentricFocus}
              </p>
            </div>

            {/* Obras Notáveis */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Obras Mais Famosas
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedTheologian.majorWorks.map((work, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                  >
                    📖 {work}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedTheologian(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold bg-amber-700 hover:bg-amber-800 text-white shadow-sm transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
