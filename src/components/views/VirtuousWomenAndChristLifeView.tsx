import React, { useState, useEffect } from 'react';
import {
  BIBLICAL_WOMEN,
  PRECISION_CONFIG,
  BiblicalWoman,
  PrecisionLevel
} from '../../data/virtuousWomenData';
import {
  CHRIST_LIFE_EVENTS,
  CHRIST_TIMELINE_STEPS,
  ChristLifeEvent
} from '../../data/christLifeData';
import {
  CHRIST_MIRACLES,
  MIRACLE_CATEGORIES,
  ChristMiracle,
  MiracleCategory
} from '../../data/christMiraclesData';
import {
  CHRIST_PARABLES,
  ChristParable
} from '../../data/christParablesData';
import { InteractiveJesusMap3D } from '../jesus/InteractiveJesusMap3D';
import {
  Heart,
  Cross,
  Compass,
  Sparkles,
  BookOpen,
  Search,
  X,
  ChevronRight,
  Filter,
  Info,
  Clock,
  Scroll,
  HelpCircle,
  Share2,
  Check,
  Flame,
  ArrowRight,
  Award,
  Shield
} from 'lucide-react';

interface VirtuousWomenAndChristLifeViewProps {
  initialSubTab?: string;
  onStudyWithGemini?: (prompt: string) => void;
  onNavigateToBible?: () => void;
}

export const VirtuousWomenAndChristLifeView: React.FC<VirtuousWomenAndChristLifeViewProps> = ({
  initialSubTab = 'mulheres',
  onStudyWithGemini,
  onNavigateToBible
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Estados: Mulheres da Bíblia
  const [womenSearch, setWomenSearch] = useState('');
  const [womenCategoryFilter, setWomenCategoryFilter] = useState<string>('all');
  const [womenTestamentFilter, setWomenTestamentFilter] = useState<'all' | 'AT' | 'NT'>('all');
  const [selectedWoman, setSelectedWoman] = useState<BiblicalWoman | null>(null);

  // Estados: Vida de Cristo
  const [christStageFilter, setChristStageFilter] = useState<string>('all');
  const [selectedLifeEvent, setSelectedLifeEvent] = useState<ChristLifeEvent | null>(null);

  // Estados: Milagres
  const [miracleCategoryFilter, setMiracleCategoryFilter] = useState<string>('all');
  const [miracleSearch, setMiracleSearch] = useState('');
  const [selectedMiracle, setSelectedMiracle] = useState<ChristMiracle | null>(null);

  // Estados: Parábolas
  const [parableSearch, setParableSearch] = useState('');
  const [selectedParable, setSelectedParable] = useState<ChristParable | null>(null);

  // Feedback de cópia
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  // Filtragem de Mulheres
  const filteredWomen = BIBLICAL_WOMEN.filter((woman) => {
    const matchesSearch =
      woman.name.toLowerCase().includes(womenSearch.toLowerCase()) ||
      woman.meaning.toLowerCase().includes(womenSearch.toLowerCase()) ||
      woman.biblicalStory.toLowerCase().includes(womenSearch.toLowerCase()) ||
      woman.theologicalSignificance.toLowerCase().includes(womenSearch.toLowerCase());
    const matchesCategory = womenCategoryFilter === 'all' || woman.category === womenCategoryFilter;
    const matchesTestament = womenTestamentFilter === 'all' || woman.testament === womenTestamentFilter;
    return matchesSearch && matchesCategory && matchesTestament;
  });

  // Filtragem de Eventos da Vida de Cristo
  const filteredLifeEvents = CHRIST_LIFE_EVENTS.filter((ev) => {
    if (christStageFilter === 'all') return true;
    return ev.stage === christStageFilter;
  });

  // Filtragem de Milagres
  const filteredMiracles = CHRIST_MIRACLES.filter((mil) => {
    const matchesCat = miracleCategoryFilter === 'all' || mil.category === miracleCategoryFilter;
    const matchesSearch =
      mil.name.toLowerCase().includes(miracleSearch.toLowerCase()) ||
      mil.location.toLowerCase().includes(miracleSearch.toLowerCase()) ||
      mil.description.toLowerCase().includes(miracleSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Filtragem de Parábolas
  const filteredParables = CHRIST_PARABLES.filter((p) => {
    return (
      p.name.toLowerCase().includes(parableSearch.toLowerCase()) ||
      p.centralTeaching.toLowerCase().includes(parableSearch.toLowerCase()) ||
      p.whatJesusSaid.toLowerCase().includes(parableSearch.toLowerCase())
    );
  });

  const renderPrecisionBadge = (level: PrecisionLevel, rationale?: string) => {
    const config = PRECISION_CONFIG[level];
    return (
      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-tight border ${config.badgeClass}`}>
        <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
        <span>{config.label}</span>
      </div>
    );
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Top Banner de Identidade Visual do Módulo */}
      <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-950 text-white p-6 sm:p-8 border border-amber-600/30 shadow-xl overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Grande Módulo de Estudos Bíblicos</span>
            </div>
            <h1 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              📖 MULHERES VIRTUOSAS & A VIDA DE CRISTO
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Pesquise a história das mulheres das Escrituras sob a ótica histórica e da tradição wesleyana, e estude a vida completa de Jesus Cristo através de mapas 3D, linha do tempo, milagres e ensinamentos.
            </p>
          </div>

          {/* Legenda de Precisão Bíblica com as 5 Classificações */}
          <div className="bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 space-y-2 text-xs max-w-xs shrink-0">
            <span className="font-bold text-amber-300 flex items-center gap-1.5 uppercase text-[10px] tracking-wider">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> Regra de Precisão Bíblica
            </span>
            <div className="grid grid-cols-1 gap-1 text-[11px] text-stone-300">
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Bíblia diz explicitamente</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500" /> Inferência razoável</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Interpretação teológica</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-500" /> Tradição cristã</div>
              <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-500" /> Informação incerta</div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegação Superior por Sub-Abas */}
      <div className="flex items-center space-x-1 sm:space-x-2 border-b border-stone-200 dark:border-stone-800 pb-2 overflow-x-auto scrollbar-none">
        {[
          { id: 'mulheres', label: 'Mulheres da Bíblia', icon: '👩', count: BIBLICAL_WOMEN.length },
          { id: 'vida-cristo', label: 'Vida de Cristo', icon: '✝️', count: CHRIST_LIFE_EVENTS.length },
          { id: 'mapa', label: 'Mapa 3D de Jesus', icon: '🗺️', count: '17 Locais' },
          { id: 'milagres', label: 'Milagres de Jesus', icon: '✨', count: CHRIST_MIRACLES.length },
          { id: 'parabolas', label: 'Parábolas', icon: '📜', count: CHRIST_PARABLES.length },
          { id: 'timeline', label: 'Linha do Tempo', icon: '⏳', count: '12 Marcos' },
          { id: 'estudo', label: 'Estudo Teológico', icon: '📖' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/20 scale-[1.02]'
                  : 'bg-stone-100 dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.count && (
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ABA 1: MULHERES DA BÍBLIA */}
      {activeTab === 'mulheres' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Barra de Busca e Filtros */}
          <div className="space-y-3 bg-white dark:bg-stone-900 p-4 sm:p-5 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={womenSearch}
                onChange={(e) => setWomenSearch(e.target.value)}
                placeholder="Buscar por nome, significado, virtudes, história ou versículo..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              {womenSearch && (
                <button
                  onClick={() => setWomenSearch('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filtros por Categoria e Testamento */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-stone-500 mr-1 flex items-center gap-1">
                  <Filter className="w-3.5 h-3.5" /> Testamento:
                </span>
                {[
                  { id: 'all', label: 'Todos' },
                  { id: 'AT', label: 'Antigo Testamento' },
                  { id: 'NT', label: 'Novo Testamento' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setWomenTestamentFilter(t.id as any)}
                    className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                      womenTestamentFilter === t.id
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'all', label: 'Todas as Categorias' },
                  { id: 'Matriarcas', label: 'Matriarcas' },
                  { id: 'Juízas e Líderes', label: 'Juízas' },
                  { id: 'Rainhas e Heroínas', label: 'Rainhas/Heroínas' },
                  { id: 'Profetisas', label: 'Profetisas' },
                  { id: 'Mulheres dos Evangelhos', label: 'Evangelhos' },
                  { id: 'Igreja Primitiva', label: 'Igreja Primitiva' },
                  { id: 'Mulheres em Crise e Conflito', label: 'Crise & Conflito' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setWomenCategoryFilter(cat.id)}
                    className={`px-2.5 py-1 rounded-xl text-xs font-medium transition-all ${
                      womenCategoryFilter === cat.id
                        ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-200 font-bold border border-amber-400'
                        : 'bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid de Cards de Mulheres da Bíblia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWomen.map((woman) => (
              <div
                key={woman.id}
                onClick={() => setSelectedWoman(woman)}
                className="group cursor-pointer p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                          {woman.testament} • {woman.category}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors mt-1">
                        {woman.name}
                      </h3>
                      <p className="text-xs text-amber-800 dark:text-amber-400 italic">
                        {woman.originalName} ({woman.transliteration}) — <em>{woman.meaning}</em>
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-md shrink-0 group-hover:scale-110 transition-transform">
                      👩
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                    {woman.biblicalStory}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {woman.virtuesAndTraits.slice(0, 2).map((v, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] font-medium text-stone-700 dark:text-stone-300"
                      >
                        ✓ {v.trait}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 mt-4 flex items-center justify-between text-xs">
                  <span className="text-stone-400 font-mono text-[11px]">
                    {woman.biblicalReferences[0]}
                  </span>
                  <span className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Ficha Completa</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredWomen.length === 0 && (
            <div className="p-12 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 space-y-2">
              <span className="text-3xl">🔍</span>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Nenhuma personagem encontrada
              </h3>
              <p className="text-xs text-stone-500">
                Tente buscar com outros termos ou redefina os filtros de categoria e testamento.
              </p>
            </div>
          )}
        </div>
      )}

      {/* ABA 2: VIDA DE CRISTO */}
      {activeTab === 'vida-cristo' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Filtro por Etapa da Vida de Cristo */}
          <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-stone-900 p-4 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <span className="text-xs font-bold text-stone-500 mr-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Etapas:
            </span>
            {[
              { id: 'all', label: 'Todas as Etapas' },
              { id: 'nascimento', label: '1. Nascimento & Origens' },
              { id: 'preparacao', label: '2. Preparação' },
              { id: 'ministerio', label: '3. Ministério Público' },
              { id: 'ultima_semana', label: '4. Última Semana & Morte' },
              { id: 'ressurreicao', label: '5. Ressurreição & Ascensão' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setChristStageFilter(st.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  christStageFilter === st.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Lista de Acontecimentos Cronológicos */}
          <div className="space-y-4">
            {filteredLifeEvents.map((ev) => (
              <div
                key={ev.id}
                onClick={() => setSelectedLifeEvent(ev)}
                className="group cursor-pointer p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                      {ev.periodApprox}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      📍 {ev.location}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {ev.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {ev.summary}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                    {ev.biblicalReferences.map((ref, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-lg bg-stone-100 dark:bg-stone-800 font-mono text-[11px] text-amber-800 dark:text-amber-400"
                      >
                        {ref.passages}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 flex items-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-xs font-bold group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <span>Ver Detalhes</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABA 3: MAPA 3D DE JESUS */}
      {activeTab === 'mapa' && (
        <div className="animate-fadeIn">
          <InteractiveJesusMap3D onStudyWithGemini={onStudyWithGemini} />
        </div>
      )}

      {/* ABA 4: MILAGRES DE JESUS */}
      {activeTab === 'milagres' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header e Busca dos Milagres */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  ✨ Biblioteca de Milagres de Jesus Cristo
                </h3>
                <p className="text-xs text-stone-500">
                  Classificação pelas 9 categorias bíblicas dos sinais sobrenaturais operados pelo Senhor.
                </p>
              </div>

              <div className="w-full sm:w-72 relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={miracleSearch}
                  onChange={(e) => setMiracleSearch(e.target.value)}
                  placeholder="Buscar milagre ou local..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-800 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>
            </div>

            {/* Categorias dos Milagres */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <button
                onClick={() => setMiracleCategoryFilter('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  miracleCategoryFilter === 'all'
                    ? 'bg-amber-600 text-white'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                }`}
              >
                Todos ({CHRIST_MIRACLES.length})
              </button>
              {MIRACLE_CATEGORIES.map((cat) => {
                const count = CHRIST_MIRACLES.filter((m) => m.category === cat.id).length;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setMiracleCategoryFilter(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      miracleCategoryFilter === cat.id
                        ? `${cat.badgeClass} ring-2 ring-amber-500/40 font-bold scale-105`
                        : 'bg-stone-50 dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                    <span className="text-[10px] opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards dos Milagres */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredMiracles.map((mil) => {
              const catMeta = MIRACLE_CATEGORIES.find((c) => c.id === mil.category);
              return (
                <div
                  key={mil.id}
                  onClick={() => setSelectedMiracle(mil)}
                  className="group cursor-pointer p-5 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${catMeta?.badgeClass}`}>
                        {catMeta?.icon} {catMeta?.name}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">
                        📍 {mil.location}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors">
                      {mil.name}
                    </h4>

                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                      {mil.description}
                    </p>

                    <div className="bg-stone-50 dark:bg-stone-800/60 p-2.5 rounded-xl text-[11px] text-stone-700 dark:text-stone-300 italic">
                      "Pessoa envolvida: <strong>{mil.personInvolved}</strong>"
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 mt-4 flex items-center justify-between text-xs">
                    <div className="flex gap-1">
                      {mil.gospels.map((g, i) => (
                        <span key={i} className="font-mono text-[10px] text-amber-700 dark:text-amber-400">
                          {g.gospel} {g.chapter}:{g.verses}
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1">
                      <span>Ver exegese</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ABA 5: PARÁBOLAS DE JESUS */}
      {activeTab === 'parabolas' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Header e Busca das Parábolas */}
          <div className="bg-white dark:bg-stone-900 p-5 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                📜 As Parábolas de Jesus Cristo
              </h3>
              <p className="text-xs text-stone-500">
                Diferenciação clara entre <strong>o que Jesus disse</strong> e <strong>como estudiosos interpretam</strong>.
              </p>
            </div>

            <div className="w-full sm:w-72 relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={parableSearch}
                onChange={(e) => setParableSearch(e.target.value)}
                placeholder="Buscar parábola..."
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-800 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
            </div>
          </div>

          {/* Cards das Parábolas */}
          <div className="space-y-5">
            {filteredParables.map((parable) => (
              <div
                key={parable.id}
                className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {parable.biblicalPassage}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
                      {parable.name}
                    </h4>
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Público ouvinte: <strong className="text-stone-700 dark:text-stone-300">{parable.audience}</strong>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Bloco: O QUE JESUS DISSE */}
                  <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-stone-800/80 border border-amber-300/60 dark:border-amber-700/60 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                      <span>🗣️</span>
                      <span>O QUE JESUS DISSE (Texto Bíblico Exato)</span>
                    </div>
                    <blockquote className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                      {parable.whatJesusSaid}
                    </blockquote>
                  </div>

                  {/* Bloco: COMO ESTUDIOSOS INTERPRETAM */}
                  <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                      <span>📖</span>
                      <span>COMO ESTUDIOSOS INTERPRETAM O QUE JESUS DISSE</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {parable.scholarlyInterpretation}
                    </p>
                    <div className="pt-2 border-t border-stone-200/50 dark:border-stone-700/50 text-[11px] text-amber-800 dark:text-amber-400">
                      <strong>Relação com o Reino de Deus:</strong> {parable.kingdomOfGodRelation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABA 6: LINHA DO TEMPO */}
      {activeTab === 'timeline' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 p-6 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-2">
            <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>Linha do Tempo Cronológica da Vida de Cristo</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              A trajetória do Salvador na história: da promessa da Encarnação à Ascensão gloriosa aos céus.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-8 my-6">
            {CHRIST_TIMELINE_STEPS.map((step) => (
              <div key={step.id} className="relative group">
                {/* Marcador na Linha */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-stone-900 border-2 border-amber-500 flex items-center justify-center text-[10px] font-mono text-amber-400 font-bold shadow-md group-hover:scale-125 transition-transform">
                  {step.order}
                </div>

                <div className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 group-hover:border-amber-500 shadow-sm hover:shadow-lg transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {step.period} • {step.stageName}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {step.keyPassage}
                    </span>
                  </div>

                  <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ABA 7: ESTUDO BÍBLICO & TEOLOGIA */}
      {activeTab === 'estudo' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-amber-600 via-amber-700 to-stone-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              Hermeneutica & Fé Reformada Wesleyana
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl">
              Estudo Bíblico Aprofundado & Inteligência Teológica
            </h3>
            <p className="text-xs sm:text-sm text-amber-100 max-w-2xl leading-relaxed">
              Consulte estudos exegéticos, termos originais no hebraico e grego, a hermenêutica das mulheres das Escrituras e a teologia da graça preveniente de John Wesley com suporte da Inteligência Artificial.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              {onStudyWithGemini && (
                <button
                  onClick={() => onStudyWithGemini("Faça um estudo bíblico completo sobre a importância das mulheres na história da redenção bíblica e como Jesus Cristo revolucionou a dignidade feminina nos Evangelhos sob a ótica wesleyana da graça.")}
                  className="px-5 py-3 rounded-2xl bg-white text-amber-950 font-bold text-xs sm:text-sm shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Estudar Mulheres da Bíblia com Gemini IA</span>
                </button>
              )}
              {onNavigateToBible && (
                <button
                  onClick={onNavigateToBible}
                  className="px-5 py-3 rounded-2xl bg-black/30 hover:bg-black/40 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all flex items-center gap-2"
                >
                  <BookOpen className="w-4 h-4 text-amber-300" />
                  <span>Consultar Bíblia Sagrada Completa</span>
                </button>
              )}
            </div>
          </div>

          {/* Cards Teológicos Wesleyanos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
              <span className="text-2xl">🌱</span>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Graça Preveniente nas Escrituras
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                Deus toma sempre a iniciativa de buscar o ser humano em sua miséria. Visto na chamada de Sara, na água viva oferecida à Samaritana antes que ela pedisse, e na restauração da mulher hemorrágica.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
              <span className="text-2xl">⚖️</span>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Livre Resposta & Responsabilidade
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                A resposta humana nunca é forçada: Maria respondeu "Cumpra-se em mim", Rute escolheu não voltar a Moabe, e Ester declarou "Se perecer, pereci", agindo com coragem pactual.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 space-y-3">
              <span className="text-2xl">🕊️</span>
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                Santificação & Obras de Amor
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                A justificação pela fé conduz inevitavelmente à vida santa em amor. Personificada em Dorcas tecendo para as viúvas, Lídia abrindo sua casa e Maria Madalena fiel junto à cruz e à tumba.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MODAL INDIVIDUAL COMPLETO DE CADA MULHER (Ficha Completa dos 10 Campos e Precisão Bíblica) */}
      {selectedWoman && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-amber-600/30 shadow-2xl space-y-6 animate-scaleUp my-6 max-h-[90vh] overflow-y-auto">
            {/* Header do Modal com Nome e Badges */}
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                    {selectedWoman.testament} • {selectedWoman.category}
                  </span>
                  {renderPrecisionBadge(selectedWoman.precisionClassification.level)}
                </div>

                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
                  {selectedWoman.name}
                </h3>
                <p className="text-xs sm:text-sm text-amber-700 dark:text-amber-400 font-serif italic mt-0.5">
                  {selectedWoman.originalName} ({selectedWoman.transliteration}) — <em>{selectedWoman.meaning}</em>
                </p>
              </div>

              <button
                onClick={() => setSelectedWoman(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* SEÇÃO 1: 📖 REFERÊNCIAS BÍBLICAS */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" /> 📖 Referências Bíblicas
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedWoman.biblicalReferences.map((ref, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-xl text-xs font-mono font-medium bg-amber-50 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300/40"
                  >
                    {ref}
                  </span>
                ))}
              </div>
            </div>

            {/* SEÇÃO 2: 👨👩👧 FAMÍLIA (somente registros bíblicos) */}
            <div className="space-y-2 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>👨👩👧</span> Relações Familiares Documentadas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                {selectedWoman.family.father && <div><strong>Pai:</strong> {selectedWoman.family.father}</div>}
                {selectedWoman.family.mother && <div><strong>Mãe:</strong> {selectedWoman.family.mother}</div>}
                {selectedWoman.family.spouse && <div><strong>Cônjuge:</strong> {selectedWoman.family.spouse}</div>}
                {selectedWoman.family.relatives && <div><strong>Parentesco:</strong> {selectedWoman.family.relatives}</div>}
                {selectedWoman.family.children && selectedWoman.family.children.length > 0 && (
                  <div className="sm:col-span-2">
                    <strong>Filhos:</strong> {selectedWoman.family.children.join(', ')}
                  </div>
                )}
                {selectedWoman.family.precisionNote && (
                  <div className="sm:col-span-2 text-[11px] text-stone-500 italic pt-1 border-t border-stone-200 dark:border-stone-700">
                    ℹ️ {selectedWoman.family.precisionNote}
                  </div>
                )}
              </div>
            </div>

            {/* SEÇÃO 3: 🏺 CONTEXTO HISTÓRICO */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>🏺</span> Contexto Histórico, Cultural & Religioso
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700 dark:text-stone-300 bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
                <div><strong>Período:</strong> {selectedWoman.historicalContext.period}</div>
                <div><strong>Região:</strong> {selectedWoman.historicalContext.region}</div>
                <div className="sm:col-span-2"><strong>Cultura & Costumes:</strong> {selectedWoman.historicalContext.cultureAndCustoms}</div>
                <div className="sm:col-span-2"><strong>Contexto Religioso:</strong> {selectedWoman.historicalContext.religiousContext}</div>
              </div>
            </div>

            {/* SEÇÃO 4: 📜 HISTÓRIA BÍBLICA */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>📜</span> Narrativa Bíblica em Ordem Cronológica
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-amber-50/40 dark:bg-stone-800/30 p-4 rounded-2xl border border-amber-200/40 dark:border-stone-700">
                {selectedWoman.biblicalStory}
              </p>
            </div>

            {/* SEÇÃO 5: ❤️ CARACTERÍSTICAS & VIRTUDES EVIDENCIADAS */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-rose-900 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>❤️</span> Características & Virtudes Evidenciadas pelo Texto
              </h4>
              <div className="space-y-1.5">
                {selectedWoman.virtuesAndTraits.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-rose-50/50 dark:bg-stone-800/50 border border-rose-200/50 dark:border-stone-700 text-xs">
                    <strong className="text-rose-950 dark:text-rose-300">✓ {item.trait}:</strong>{' '}
                    <span className="text-stone-700 dark:text-stone-300">{item.biblicalEvidence}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SEÇÃO 6: ⚠️ ERROS E CONFLITOS */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <span>⚠️</span> Erros, Decisões Difíceis ou Conflitos Registrados
              </h4>
              <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-stone-800/60 border border-amber-300/60 dark:border-stone-700 space-y-1.5 text-xs">
                <div className="font-bold text-amber-950 dark:text-amber-300">
                  {selectedWoman.errorsAndConflicts.conflict}
                </div>
                <div className="text-stone-700 dark:text-stone-300">
                  {selectedWoman.errorsAndConflicts.biblicalContext}
                </div>
                <div className="text-[11px] text-amber-800 dark:text-amber-400 italic pt-1 border-t border-amber-200 dark:border-stone-700">
                  Avaliação bíblica: {selectedWoman.errorsAndConflicts.biblicalAssessment}
                </div>
              </div>
            </div>

            {/* SEÇÃO 7: ✝️ SIGNIFICADO TEOLÓGICO */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <Cross className="w-3.5 h-3.5 text-amber-600" /> Significado Teológico na História da Redenção
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/40 p-4 rounded-2xl border border-stone-200 dark:border-stone-700">
                {selectedWoman.theologicalSignificance}
              </p>
            </div>

            {/* SEÇÃO 8: 📚 INTERPRETAÇÕES DE ESTUDIOSOS */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                <span>📚</span> Interpretações de Estudiosos & Tradição
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed bg-stone-50 dark:bg-stone-800/30 p-3.5 rounded-2xl border border-stone-200 dark:border-stone-700">
                {selectedWoman.scholarlyInterpretations}
              </p>
            </div>

            {/* SEÇÃO 9: 🟦 PERSPECTIVA WESLEYANA */}
            {selectedWoman.wesleyanPerspective && (
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-800/60 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <span>Perspectiva Wesleyana / Arminiana: {selectedWoman.wesleyanPerspective.theme}</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
                  "{selectedWoman.wesleyanPerspective.insight}"
                </p>
              </div>
            )}

            {/* SEÇÃO 10: NOTA DE PRECISÃO & BOTÕES DE AÇÃO */}
            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-stone-500 italic max-w-md">
                Classificação: {selectedWoman.precisionClassification.rationale}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyText(selectedWoman.id, `${selectedWoman.name} - ${selectedWoman.meaning}\n\n${selectedWoman.biblicalStory}\n\nReferências: ${selectedWoman.biblicalReferences.join(', ')}`)}
                  className="px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-700 dark:text-stone-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {copiedItem === selectedWoman.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Copiar Ficha</span>
                    </>
                  )}
                </button>

                {onStudyWithGemini && (
                  <button
                    onClick={() => onStudyWithGemini(`Explique em detalhes teológicos e devocionais a vida de ${selectedWoman.name}, suas referências bíblicas, erros, virtudes e a perspectiva wesleyana da graça.`)}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Estudar com Gemini IA</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE EVENTO DA VIDA DE CRISTO */}
      {selectedLifeEvent && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-600/30 shadow-2xl space-y-5 animate-scaleUp my-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {selectedLifeEvent.periodApprox}
                  </span>
                  <span className="text-xs text-stone-500">📍 {selectedLifeEvent.location}</span>
                </div>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedLifeEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedLifeEvent(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider">
                Narrativa dos Evangelhos
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-amber-50/40 dark:bg-stone-800/40 p-4 rounded-2xl border border-amber-200/50 dark:border-stone-700">
                {selectedLifeEvent.detailedNarrative}
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="text-xs font-bold text-stone-900 dark:text-stone-200 uppercase tracking-wider">
                Significado Teológico & Redentor
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                {selectedLifeEvent.theologicalSignificance}
              </p>
            </div>

            {selectedLifeEvent.wesleyanInsight && (
              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200 italic">
                <strong>Olhar Wesleyano:</strong> "{selectedLifeEvent.wesleyanInsight}"
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedLifeEvent(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE MILAGRE DE CRISTO */}
      {selectedMiracle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-amber-600/30 shadow-2xl space-y-5 animate-scaleUp my-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-300">
                  {selectedMiracle.location}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100 mt-1">
                  {selectedMiracle.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMiracle(null)}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {selectedMiracle.description}
            </div>

            <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
              <strong className="text-stone-900 dark:text-stone-200 block">Contexto Histórico & Cultural:</strong>
              <p>{selectedMiracle.historicalAndCulturalContext}</p>
            </div>

            <div className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400">
              <strong className="text-stone-900 dark:text-stone-200 block">Significado Teológico no Ministério de Jesus:</strong>
              <p>{selectedMiracle.theologicalSignificance}</p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedMiracle(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs"
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
