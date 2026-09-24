import React, { useState } from 'react';
import { BIBLICAL_PLACES, BiblicalPlace } from '../../data/biblicalGeography';
import { MapPin, Search, Compass, BookOpen, Sparkles, ChevronRight, X, Globe, Languages } from 'lucide-react';

export const BiblicalGeographyView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPlace, setSelectedPlace] = useState<BiblicalPlace | null>(null);

  const categories = [
    { id: 'all', label: 'Todos os Lugares Sagrados' },
    { id: 'jesus', label: 'Lugares que Jesus Visitou & Ministrou' },
    { id: 'profetas', label: 'Lugares Históricos dos Profetas' },
  ];

  const filtered = BIBLICAL_PLACES.filter((p) => {
    const matchesCat = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nativeName.includes(searchQuery) ||
      p.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.literalMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.historicalAndSpiritualEvents.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto">
      {/* Header da Tela */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Compass className="w-4 h-4" /> Geografia Bíblica & Línguas Originais
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>Lugares de Jesus e dos Profetas</span>
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-3xl">
          Explore os montes, mares, rios e cidades por onde Jesus e os santos profetas andaram, com os nomes em sua língua nativa (Hebraico, Aramaico e Grego), significado etimológico e os eventos sagrados ocorridos.
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
            placeholder="Pesquisar cidade, monte, mar ou nome em hebraico (ex: Belém, Cafarnaum, Getsêmani, Carmelo, Sinai)..."
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

      {/* Grid dos Lugares Bíblicos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((place) => (
          <div
            key={place.id}
            onClick={() => setSelectedPlace(place)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {place.category === 'jesus' ? 'Caminhos de Jesus' : 'Lugares dos Profetas'}
                </span>
                <span className="text-base font-serif font-bold text-amber-800 dark:text-amber-300">
                  {place.nativeName}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {place.name}
                </h3>
                <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-0.5">
                  {place.transliteration}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200/60 dark:border-stone-700 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5" /> Significado Literal:
                </span>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                  "{place.literalMeaning}"
                </p>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                {place.historicalAndSpiritualEvents}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Ver História Profética & Significado</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Lugar Sagrado */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {selectedPlace.category === 'jesus' ? 'Caminhos de Jesus' : 'Lugares dos Profetas'}
                  </span>
                  <span className="text-xs text-stone-400">
                    Região: {selectedPlace.region}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                    {selectedPlace.name}
                  </h2>
                  <span className="text-xl font-serif font-bold text-amber-700 dark:text-amber-400">
                    {selectedPlace.nativeName}
                  </span>
                </div>
                <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 mt-0.5">
                  {selectedPlace.transliteration} • Significado: "{selectedPlace.literalMeaning}"
                </p>
              </div>

              <button
                onClick={() => setSelectedPlace(null)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo Rolável */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-2">
              {/* O que Aconteceu Ali */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  O que Aconteceu neste Lugar Sagrado
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 font-serif">
                  {selectedPlace.historicalAndSpiritualEvents}
                </p>
              </div>

              {/* Significado Profético e Teológico */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Significado Profético e Teológico
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedPlace.propheticSignificance}
                </p>
              </div>

              {/* Textos Bíblicos Centrais */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-600" /> Passagens Bíblicas de Referência
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedPlace.biblicalPassages.map((ref, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-xs font-semibold text-amber-800 dark:text-amber-400"
                    >
                      {ref}
                    </span>
                  ))}
                </div>
              </div>

              {/* Como é Hoje */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-emerald-600" /> Localização e Características Geográficas Atuais
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedPlace.todayStatus}
                </p>
              </div>
            </div>

            {/* Rodapé */}
            <div className="flex justify-end pt-3 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => setSelectedPlace(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
              >
                Fechar Detalhes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
