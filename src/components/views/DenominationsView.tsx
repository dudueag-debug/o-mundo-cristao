import React, { useState } from 'react';
import { CHURCH_DENOMINATIONS, ChurchDenomination } from '../../data/churchDenominations';
import { Church, Search, Shield, BookOpen, Clock, Users, Globe, X, ChevronRight, Bookmark, Sparkles, Building2 } from 'lucide-react';

export const DenominationsView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDenomination, setSelectedDenomination] = useState<ChurchDenomination | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Tradições' },
    { id: 'pentecostal', label: 'Pentecostal (Assembleia de Deus)' },
    { id: 'wesleyana', label: 'Wesleyana (Metodista & IMW)' },
    { id: 'reformada', label: 'Reformada & Batista' },
    { id: 'historica', label: 'Históricas (Católica, Luterana, Anglicana)' },
  ];

  const filtered = CHURCH_DENOMINATIONS.filter((d) => {
    const matchesCat = selectedCategory === 'all' || d.category === selectedCategory;
    const matchesQuery =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.historicalOrigin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.keyDoctrines.some(doc => doc.toLowerCase().includes(searchQuery.toLowerCase())) ||
      d.founders.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto">
      {/* Header da Tela */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Building2 className="w-4 h-4" /> História Eclesiástica Documentada
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>Origem e História de Todas as Igrejas</span>
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-3xl">
          Conheça em profundidade as origens históricas, concílios, doutrinas centrais, pioneiros e como se consolidaram a Igreja Católica Romana, Assembleia de Deus, Batistas, Presbiterianas, Metodistas/IMW e Luteranas.
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
            placeholder="Pesquisar denominação, doutrina, fundador (ex: Assembleia de Deus, Calvino, Constantino, Batistas)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === c.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards das Denominações */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedDenomination(item)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {item.category}
                </span>
                <span className="text-[11px] text-stone-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {item.foundedYear.split('(')[0].trim()}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-0.5">
                  Símbolo: {item.emblemOrSymbol}
                </p>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                {item.historicalOrigin}
              </p>

              <div className="pt-2 border-t border-stone-100 dark:border-stone-800 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                  Fundadores / Pioneiros Centrais:
                </span>
                <p className="text-xs text-stone-700 dark:text-stone-300 font-medium line-clamp-1">
                  {item.founders.join(' • ')}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Ler História Completa & Doutrinas</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes da Denominação */}
      {selectedDenomination && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {selectedDenomination.category}
                  </span>
                  <span className="text-xs text-stone-400">
                    Origem: {selectedDenomination.foundedYear}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedDenomination.name}
                </h2>
                <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5">
                  Ênfase: {selectedDenomination.theologicalEmphasis}
                </p>
              </div>

              <button
                onClick={() => setSelectedDenomination(null)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo Rolável */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-2">
              {/* Origem Histórica e Surgimento */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  Origem Histórica: Como Surgiu e Como se Consolidou
                </h4>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 font-serif">
                  {selectedDenomination.historicalOrigin}
                </div>
              </div>

              {/* Doutrinas Fundamentais */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Doutrinas e Crenças Centrais
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {selectedDenomination.keyDoctrines.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs text-stone-800 dark:text-stone-200"
                    >
                      <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governo Eclesiástico e Estrutura */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> Forma de Governo Eclesiástico
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedDenomination.churchGovernance}
                </p>
              </div>

              {/* História no Brasil */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Globe className="w-4 h-4" /> Chegada e História no Brasil
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedDenomination.brazilHistory}
                </p>
              </div>

              {/* Impacto e Consolidação Mundial */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-600" /> Consolidação e Impacto Espiritual
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedDenomination.consolidationAndImpact}
                </p>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="flex justify-end pt-3 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => setSelectedDenomination(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
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
