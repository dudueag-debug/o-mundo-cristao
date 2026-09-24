import React, { useState } from 'react';
import { CHURCH_HISTORY_PERIODS, ChurchHistoryPeriod } from '../../data/churchHistory';
import { CHURCH_DENOMINATIONS, ChurchDenomination } from '../../data/churchDenominations';
import { IMW_HISTORY_EVENTS, IMW_PIONEERS, IMW_DISTINCTIVES, IMWEvent, IMWPioneer } from '../../data/imwHistory';
import { BIBLICAL_PLACES, BiblicalPlace } from '../../data/biblicalGeography';
import {
  Church,
  Flame,
  MapPin,
  Search,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Shield,
  X,
  Compass,
  Star,
  Users,
  Scroll,
  Clock,
  Landmark
} from 'lucide-react';

interface CentralHistoriaLugaresProps {
  onSelectTab: (tab: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralHistoriaLugaresJesusCard: React.FC<CentralHistoriaLugaresProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const [activeTab, setActiveTab] = useState<'igrejas' | 'imw' | 'lugares'>('igrejas');
  const [searchQuery, setSearchQuery] = useState('');

  // Sub-filtro para Igrejas / Denominações
  const [churchSubTab, setChurchSubTab] = useState<'periodos' | 'denominacoes'>('periodos');

  // Sub-filtro para Lugares
  const [placeCategory, setPlaceCategory] = useState<'all' | 'jesus' | 'profetas'>('jesus');

  // Modais de Leitura Completa
  const [selectedPeriod, setSelectedPeriod] = useState<ChurchHistoryPeriod | null>(null);
  const [selectedDenomination, setSelectedDenomination] = useState<ChurchDenomination | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<BiblicalPlace | null>(null);
  const [selectedImwEvent, setSelectedImwEvent] = useState<IMWEvent | null>(null);

  // Filtragem de períodos históricos
  const filteredPeriods = CHURCH_HISTORY_PERIODS.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.era.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyFigures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Filtragem de denominações
  const filteredDenominations = CHURCH_DENOMINATIONS.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.theologicalEmphasis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.founders.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
      d.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtragem de lugares bíblicos
  const filteredPlaces = BIBLICAL_PLACES.filter((p) => {
    const matchesCat = placeCategory === 'all' || p.category === placeCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nativeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.literalMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="relative rounded-3xl bg-white dark:bg-stone-900 border border-amber-600/30 dark:border-amber-600/20 shadow-xl overflow-hidden transition-all">
      {/* Top Banner com Gradiente e Contadores */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-stone-950 p-6 sm:p-7 text-white relative">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-52 h-52 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Memória Eclesiástica & Geografia Sagrada</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
              História das Igrejas, Avivamento Wesleyano (IMW) & Lugares de Jesus
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Uma síntese profunda da trajetória cristã: concílios apostólicos, o legado de Wesley e da IMW de 1967, e os passos proféticos de Jesus em Israel com termos originais em hebraico e grego.
            </p>
          </div>

          {/* Badges de Contagem */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-amber-300/90 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              🏛️ {CHURCH_HISTORY_PERIODS.length} Grandes Eras
            </span>
            <span className="text-[11px] font-mono text-amber-300/90 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              ⛪ {CHURCH_DENOMINATIONS.length} Tradições
            </span>
            <span className="text-[11px] font-mono text-amber-300/90 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              🔥 IMW 1967
            </span>
            <span className="text-[11px] font-mono text-amber-300/90 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              📍 {BIBLICAL_PLACES.length} Lugares Santos
            </span>
          </div>
        </div>

        {/* Abas Principais do Card */}
        <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
          <button
            onClick={() => setActiveTab('igrejas')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'igrejas'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Church className="w-4 h-4" />
            <span>História da Igreja & Denominações</span>
          </button>

          <button
            onClick={() => setActiveTab('imw')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'imw'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-400" />
            <span>História da Metodista Wesleyana (IMW)</span>
          </button>

          <button
            onClick={() => setActiveTab('lugares')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'lugares'
                ? 'bg-amber-700 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Lugares Onde Jesus Visitou</span>
          </button>
        </div>
      </div>

      {/* Barra de Busca e Subfiltros */}
      <div className="p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-900/50 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            placeholder={
              activeTab === 'igrejas'
                ? 'Buscar por período, concílio, Lutero, Calvino, batistas, Roma...'
                : activeTab === 'imw'
                ? 'Buscar por ano, pioneiro, Nova Friburgo, dons, missões...'
                : 'Buscar lugar por português, hebraico (Belém, בֵּית לֶחֶם, Getsêmani)...'
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Subfiltros específicos de cada aba */}
        {activeTab === 'igrejas' && (
          <div className="flex gap-2">
            <button
              onClick={() => setChurchSubTab('periodos')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                churchSubTab === 'periodos'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              Eras & Concílios ({filteredPeriods.length})
            </button>
            <button
              onClick={() => setChurchSubTab('denominacoes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                churchSubTab === 'denominacoes'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
              }`}
            >
              Denominações ({filteredDenominations.length})
            </button>
          </div>
        )}

        {activeTab === 'lugares' && (
          <div className="flex gap-1.5 bg-stone-200 dark:bg-stone-800 p-1 rounded-xl">
            <button
              onClick={() => setPlaceCategory('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                placeCategory === 'all'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              Todos ({BIBLICAL_PLACES.length})
            </button>
            <button
              onClick={() => setPlaceCategory('jesus')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                placeCategory === 'jesus'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              Jesus ({BIBLICAL_PLACES.filter((p) => p.category === 'jesus').length})
            </button>
            <button
              onClick={() => setPlaceCategory('profetas')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                placeCategory === 'profetas'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-400'
              }`}
            >
              Profetas ({BIBLICAL_PLACES.filter((p) => p.category === 'profetas').length})
            </button>
          </div>
        )}
      </div>

      {/* Conteúdo das Abas */}
      <div className="p-5 sm:p-6">
        {/* ABA 1: HISTÓRIA DA IGREJA & DENOMINAÇÕES */}
        {activeTab === 'igrejas' && (
          <div className="space-y-6">
            {churchSubTab === 'periodos' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPeriods.map((period) => (
                  <div
                    key={period.id}
                    onClick={() => setSelectedPeriod(period)}
                    className="group cursor-pointer rounded-2xl p-5 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-amber-500/60 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                          {period.century}
                        </span>
                        <Landmark className="w-4 h-4 text-amber-600" />
                      </div>

                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {period.title}
                      </h3>

                      <p className="text-xs text-amber-700 dark:text-amber-400 font-medium">
                        {period.era}
                      </p>

                      <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                        {period.summary}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-1">
                        {period.keyFigures.slice(0, 3).map((fig, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] bg-white dark:bg-stone-700 px-2 py-0.5 rounded border border-stone-200 dark:border-stone-600 text-stone-700 dark:text-stone-300"
                          >
                            {fig}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 dark:border-stone-700/60 mt-4 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <span>Ver concílios & síntese</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDenominations.map((denom) => (
                  <div
                    key={denom.id}
                    onClick={() => setSelectedDenomination(denom)}
                    className="group cursor-pointer rounded-2xl p-5 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-amber-500/60 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                          {denom.category}
                        </span>
                        <Church className="w-4 h-4 text-amber-600" />
                      </div>

                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {denom.name}
                      </h3>

                      <p className="text-xs text-stone-500 dark:text-stone-400">
                        {denom.foundedYear}
                      </p>

                      <div className="text-xs text-stone-600 dark:text-stone-300 bg-white/60 dark:bg-stone-900/60 p-2 rounded-xl border border-stone-200/50 dark:border-stone-700/50">
                        <span className="font-semibold text-stone-800 dark:text-stone-200 block">
                          Ênfase Teológica:
                        </span>
                        <span className="italic">{denom.theologicalEmphasis}</span>
                      </div>

                      <div className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-600" />
                        <span className="line-clamp-1">{denom.founders.join(', ')}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 dark:border-stone-700/60 mt-4 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <span>Origem, doutrinas & história</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onSelectTab(churchSubTab === 'periodos' ? 'historia' : 'denominacoes')}
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline"
              >
                <span>Abrir módulo completo de {churchSubTab === 'periodos' ? 'História da Igreja' : 'Denominações'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ABA 2: IGREJA METODISTA WESLEYANA (IMW) */}
        {activeTab === 'imw' && (
          <div className="space-y-8">
            {/* Banner Introdutório do Avivamento de 1967 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-amber-600/5 border border-amber-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-orange-700 dark:text-orange-400 uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5" /> 5 de Janeiro de 1967 • Nova Friburgo / RJ
                </div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  O Avivamento da Igreja Metodista Wesleyana
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  A união harmoniosa da santidade bíblica e salvação pela graça de <strong>John Wesley</strong> com o derramamento fervoroso e atual dos <strong>dons do Espírito Santo</strong>.
                </p>
              </div>

              <button
                onClick={() => onSelectTab('historia')}
                className="shrink-0 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs transition-all shadow-md"
              >
                Ver Página Dedicada da IMW
              </button>
            </div>

            {/* Distintivos Wesleyanos */}
            <div>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>Distintivos Teológicos & Identidade</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {IMW_DISTINCTIVES.map((dist, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 space-y-1.5"
                  >
                    <span className="font-serif font-bold text-sm text-amber-900 dark:text-amber-300 block">
                      {dist.title}
                    </span>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {dist.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Linha do Tempo de Eventos Históricos */}
            <div>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Marcos Históricos da Denominação</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {IMW_HISTORY_EVENTS.map((event, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImwEvent(event)}
                    className="group cursor-pointer p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-amber-500/60 hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                          {event.year}
                        </span>
                        {event.badge && (
                          <span className="text-[10px] font-semibold text-orange-700 dark:text-orange-400">
                            {event.badge}
                          </span>
                        )}
                      </div>
                      <h5 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                        {event.title}
                      </h5>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                        📍 {event.location}
                      </p>
                      <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed mt-1">
                        {event.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-stone-200 dark:border-stone-700/60 mt-2 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400">
                      <span>Ler detalhes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pioneiros */}
            <div>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Pioneiros do Avivamento de 1967</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {IMW_PIONEERS.map((pioneer, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-700 text-white font-bold text-xs flex items-center justify-center">
                      {pioneer.name.replace('Pr. ', '').charAt(0)}
                    </div>
                    <h5 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                      {pioneer.name}
                    </h5>
                    <p className="text-[11px] font-semibold text-amber-700 dark:text-amber-400">
                      {pioneer.role}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {pioneer.contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA 3: LUGARES ONDE JESUS VISITOU */}
        {activeTab === 'lugares' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPlaces.map((place) => (
                <div
                  key={place.id}
                  onClick={() => setSelectedPlace(place)}
                  className="group cursor-pointer rounded-2xl p-5 border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:border-emerald-500/60 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300">
                        {place.category === 'jesus' ? 'Passos de Jesus' : 'Lugar dos Profetas'}
                      </span>
                      <span className="font-mono text-base font-bold text-amber-800 dark:text-amber-400">
                        {place.nativeName}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                        {place.name}
                      </h3>
                      <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic">
                        {place.transliteration}
                      </p>
                    </div>

                    <div className="bg-emerald-50/70 dark:bg-stone-900/60 p-2.5 rounded-xl border border-emerald-200/50 dark:border-stone-700/50">
                      <span className="text-[11px] font-bold text-emerald-900 dark:text-emerald-300 block">
                        Significado Literal:
                      </span>
                      <p className="text-xs text-stone-700 dark:text-stone-300 italic">
                        "{place.literalMeaning}"
                      </p>
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                      {place.historicalAndSpiritualEvents}
                    </p>

                    <div className="text-[11px] text-stone-500 dark:text-stone-400">
                      📍 {place.region}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200 dark:border-stone-700/60 mt-4 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    <span>Exegese & profecia</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => onSelectTab('lugares-sagrados')}
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                <span>Abrir atlas bíblico e mapa de lugares sagrados</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* MODAL DE DETALHES: PERÍODO HISTÓRICO */}
      {selectedPeriod && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 w-full max-w-2xl rounded-3xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-4 border border-stone-200 dark:border-stone-800 shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {selectedPeriod.century} • {selectedPeriod.era}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedPeriod.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPeriod(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">
                Síntese Teológica da Era
              </h4>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {selectedPeriod.summary}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-amber-600" />
                <span>Principais Eventos & Concílios</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                {selectedPeriod.keyEvents.map((evt, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-stone-50 dark:bg-stone-800/40 p-2.5 rounded-xl border border-stone-200/60 dark:border-stone-700/60">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{evt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-4 h-4 text-amber-600" />
                <span>Figuras Centrais & Pais da Igreja</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedPeriod.keyFigures.map((fig, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 px-3 py-1 rounded-xl border border-amber-300/40"
                  >
                    {fig}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-amber-950/10 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">
                Significado Permanente para a Igreja
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                "{selectedPeriod.significance}"
              </p>
            </div>

            {onStudyWithGemini && (
              <button
                onClick={() => {
                  setSelectedPeriod(null);
                  onStudyWithGemini(`Quero uma análise teológica e histórica profunda sobre o período: "${selectedPeriod.title}" (${selectedPeriod.century}), destacando concílios, controvérsias bíblicas e legado.`);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Aprofundar este período com o Gemini IA</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* MODAL DE DETALHES: DENOMINAÇÃO */}
      {selectedDenomination && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 w-full max-w-2xl rounded-3xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-4 border border-stone-200 dark:border-stone-800 shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {selectedDenomination.category} • Fundada em: {selectedDenomination.foundedYear}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedDenomination.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Símbolo: {selectedDenomination.emblemOrSymbol}
                </p>
              </div>
              <button
                onClick={() => setSelectedDenomination(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-1">
                Origem Histórica & Fundadores
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-line">
                {selectedDenomination.historicalOrigin}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-amber-600" />
                <span>Doutrinas Fundamentais</span>
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                {selectedDenomination.keyDoctrines.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-stone-50 dark:bg-stone-800/40 p-2.5 rounded-xl border border-stone-200/60 dark:border-stone-700/60">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-950/10 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30 space-y-2">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                Chegada e Consolidação no Brasil
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {selectedDenomination.brazilHistory}
              </p>
            </div>

            {onStudyWithGemini && (
              <button
                onClick={() => {
                  setSelectedDenomination(null);
                  onStudyWithGemini(`Quero uma análise teológica detalhada sobre a história e doutrinas da "${selectedDenomination.name}", comparando com a teologia bíblica e a herança wesleyana.`);
                }}
                className="w-full py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Estudar esta denominação com o Gemini IA</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* MODAL DE DETALHES: LUGAR BÍBLICO DE JESUS OU PROFETAS */}
      {selectedPlace && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 w-full max-w-2xl rounded-3xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-4 border border-stone-200 dark:border-stone-800 shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  {selectedPlace.category === 'jesus' ? 'Lugares de Jesus na Terra Santa' : 'Geografia dos Profetas'}
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                    {selectedPlace.name}
                  </h3>
                  <span className="font-mono text-xl font-bold text-amber-800 dark:text-amber-400">
                    {selectedPlace.nativeName}
                  </span>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 font-serif italic mt-0.5">
                  {selectedPlace.transliteration}
                </p>
              </div>
              <button
                onClick={() => setSelectedPlace(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-emerald-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-emerald-200 dark:border-stone-700 space-y-1">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider block">
                Significado Literal do Nome
              </span>
              <p className="text-sm text-stone-800 dark:text-stone-200 font-serif italic">
                "{selectedPlace.literalMeaning}"
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 pt-1">
                📍 Região: {selectedPlace.region}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider flex items-center gap-1.5">
                <Scroll className="w-4 h-4 text-emerald-600" />
                <span>Passagens Bíblicas de Referência</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedPlace.biblicalPassages.map((p, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 px-3 py-1 rounded-xl border border-emerald-300/40 font-mono"
                  >
                    📖 {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                Eventos Históricos & Espirituais
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/40 p-3.5 rounded-xl border border-stone-200 dark:border-stone-700">
                {selectedPlace.historicalAndSpiritualEvents}
              </p>
            </div>

            <div className="bg-amber-950/10 dark:bg-amber-950/40 p-4 rounded-2xl border border-amber-500/30 space-y-1">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                Significado Profético & Tipologia em Cristo
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                "{selectedPlace.propheticSignificance}"
              </p>
            </div>

            <div className="text-xs text-stone-500 dark:text-stone-400">
              <span className="font-semibold text-stone-700 dark:text-stone-300">Situação Arqueológica Atual:</span>{' '}
              {selectedPlace.todayStatus}
            </div>

            {onStudyWithGemini && (
              <button
                onClick={() => {
                  setSelectedPlace(null);
                  onStudyWithGemini(`Quero uma exegese geográfica e espiritual sobre "${selectedPlace.name}" (${selectedPlace.nativeName}), seu cumprimento profético em Jesus e aplicações para a vida cristã.`);
                }}
                className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Estudar este lugar sagrado com o Gemini IA</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* MODAL DE DETALHES: EVENTO DA IMW */}
      {selectedImwEvent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 w-full max-w-xl rounded-3xl p-6 sm:p-7 max-h-[90vh] overflow-y-auto space-y-4 border border-stone-200 dark:border-stone-800 shadow-2xl animate-fadeIn">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {selectedImwEvent.year} • {selectedImwEvent.location}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
                  {selectedImwEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedImwEvent(null)}
                className="p-1.5 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-amber-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-amber-200 dark:border-stone-700">
              <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                {selectedImwEvent.description}
              </p>
            </div>

            <div className="text-xs text-stone-500 dark:text-stone-400 italic">
              Igreja Metodista Wesleyana • "O mundo é a nossa paróquia"
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
