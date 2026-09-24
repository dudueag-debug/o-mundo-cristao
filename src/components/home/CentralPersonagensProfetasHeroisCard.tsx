import React, { useState } from 'react';
import { HEROES_OF_FAITH, HeroOfFaith } from '../../data/heroesOfFaith';
import { BIBLICAL_CHARACTERS, BiblicalCharacter } from '../../data/biblicalCharacters';
import { BIBLICAL_PROPHETS, BiblicalProphet } from '../../data/biblicalProphets';
import {
  Award,
  UserCheck,
  Scroll,
  Search,
  Sparkles,
  ChevronRight,
  ArrowRight,
  BookOpen,
  Heart,
  X,
  Shield,
  Star,
  Flame,
  Check
} from 'lucide-react';

interface CentralPersonagensProps {
  onSelectTab: (tab: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralPersonagensProfetasHeroisCard: React.FC<CentralPersonagensProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const [activeTab, setActiveTab] = useState<'herois' | 'personagens' | 'profetas'>('herois');
  const [searchQuery, setSearchQuery] = useState('');
  const [prophetFilter, setProphetFilter] = useState<'all' | 'maior' | 'menor'>('all');

  // Modais de detalhe
  const [selectedHero, setSelectedHero] = useState<HeroOfFaith | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<BiblicalCharacter | null>(null);
  const [selectedProphet, setSelectedProphet] = useState<BiblicalProphet | null>(null);

  // Filtros
  const filteredHeroes = HEROES_OF_FAITH.filter(
    (h) =>
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.originalName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCharacters = BIBLICAL_CHARACTERS.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProphets = BIBLICAL_PROPHETS.filter((p) => {
    const matchesClassification = prophetFilter === 'all' || p.classification === prophetFilter;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.nameMeaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.audience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.contemporaryKings.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesClassification && matchesSearch;
  });

  return (
    <section className="relative rounded-3xl bg-white dark:bg-stone-900 border border-orange-500/30 dark:border-orange-500/20 shadow-xl overflow-hidden transition-all">
      {/* Faixa Superior com Identidade e Contadores */}
      <div className="bg-gradient-to-r from-orange-950 via-stone-900 to-amber-950 p-6 sm:p-7 text-white relative">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-semibold mb-2">
              <Star className="w-3.5 h-3.5 text-orange-400" />
              <span>Galeria Sagrada de Fé & Profecia</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Heróis da Fé, Personagens & Profetas
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Consulte a nuvem de testemunhas de Hebreus 11, etimologias dos nomes originais em hebraico/grego e a história completa dos profetas maiores e menores.
            </p>
          </div>

          {/* Badges de Contagem */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-orange-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              🏆 {HEROES_OF_FAITH.length} Heróis da Fé
            </span>
            <span className="text-[11px] font-mono text-orange-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              👤 {BIBLICAL_CHARACTERS.length} Personagens
            </span>
            <span className="text-[11px] font-mono text-orange-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              📜 {BIBLICAL_PROPHETS.length} Profetas
            </span>
          </div>
        </div>

        {/* Abas de Navegação Interna do Card */}
        <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
          <button
            onClick={() => setActiveTab('herois')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'herois'
                ? 'bg-orange-700 text-white shadow-md shadow-orange-950/40 ring-2 ring-orange-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Heróis da Fé (Hebreus 11)</span>
          </button>

          <button
            onClick={() => setActiveTab('personagens')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'personagens'
                ? 'bg-orange-700 text-white shadow-md shadow-orange-950/40 ring-2 ring-orange-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <UserCheck className="w-4 h-4" />
            <span>Personagens Bíblicos</span>
          </button>

          <button
            onClick={() => setActiveTab('profetas')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'profetas'
                ? 'bg-orange-700 text-white shadow-md shadow-orange-950/40 ring-2 ring-orange-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>Profetas Maiores & Menores (17)</span>
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="p-6 space-y-4">
        {/* Barra de Busca Universal */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                activeTab === 'herois'
                  ? 'Buscar herói da fé (Abraão, Moisés, Raabe, Daniel...)'
                  : activeTab === 'personagens'
                  ? 'Buscar personagem bíblico (Adão, Davi, Pedro, Maria...)'
                  : 'Buscar profeta (Isaías, Jeremias, Daniel, Jonas, Habacuque...)'
              }
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
          </div>

          {/* Subfiltro específico de Profetas */}
          {activeTab === 'profetas' && (
            <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl shrink-0 text-xs">
              <button
                onClick={() => setProphetFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  prophetFilter === 'all'
                    ? 'bg-orange-700 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                Todos (17)
              </button>
              <button
                onClick={() => setProphetFilter('maior')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  prophetFilter === 'maior'
                    ? 'bg-orange-700 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                Maiores (4)
              </button>
              <button
                onClick={() => setProphetFilter('menor')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-colors ${
                  prophetFilter === 'menor'
                    ? 'bg-orange-700 text-white shadow-sm'
                    : 'text-stone-600 dark:text-stone-300'
                }`}
              >
                Menores (12)
              </button>
            </div>
          )}

          {/* Ação: Abrir Módulo Completo */}
          <button
            onClick={() => {
              if (activeTab === 'herois') onSelectTab('herois-da-fe');
              else if (activeTab === 'personagens') onSelectTab('personagens');
              else onSelectTab('profetas');
            }}
            className="text-xs font-bold text-orange-700 dark:text-orange-400 hover:underline flex items-center gap-1 shrink-0 self-end sm:self-center"
          >
            <span>Ver módulo completo</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* ABA 1: HERÓIS DA FÉ (HEBREUS 11) */}
        {activeTab === 'herois' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 animate-fadeIn">
            {filteredHeroes.map((hero) => (
              <div
                key={hero.id}
                onClick={() => setSelectedHero(hero)}
                className="group cursor-pointer rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 p-4 space-y-3 hover:border-orange-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="text-orange-700 dark:text-orange-400 font-serif">
                      {hero.originalName}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300">
                      {hero.biblicalReference}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                    {hero.name}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-2">
                    {hero.title}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                    {hero.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs">
                  <span className="text-amber-800 dark:text-amber-400 font-semibold font-serif text-[11px] truncate max-w-[170px]">
                    Hebreus 11
                  </span>
                  <span className="font-bold text-orange-700 dark:text-orange-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver biografia <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ABA 2: PERSONAGENS BÍBLICOS */}
        {activeTab === 'personagens' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 animate-fadeIn">
            {filteredCharacters.map((char) => (
              <div
                key={char.id}
                onClick={() => setSelectedCharacter(char)}
                className="group cursor-pointer rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 p-4 space-y-3 hover:border-orange-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="text-orange-700 dark:text-orange-400 font-serif">
                      {char.originalName} ({char.transliteration})
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                      {char.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}
                    </span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                    {char.name}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-2">
                    Significado: "{char.meaning}"
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                    {char.completeBiography}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs">
                  <span className="text-stone-400 text-[11px] truncate max-w-[150px]">
                    {char.nationality}
                  </span>
                  <span className="font-bold text-orange-700 dark:text-orange-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ABA 3: PROFETAS MAIORES E MENORES */}
        {activeTab === 'profetas' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1 animate-fadeIn">
            {filteredProphets.map((prophet) => (
              <div
                key={prophet.id}
                onClick={() => setSelectedProphet(prophet)}
                className="group cursor-pointer rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 p-4 space-y-3 hover:border-orange-500/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-300">
                      Profeta {prophet.classification === 'maior' ? 'Maior' : 'Menor'}
                    </span>
                    <span className="text-stone-400 font-mono">{prophet.approximateDates}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors">
                    {prophet.name}
                  </h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-2">
                    Significado: {prophet.nameMeaning} • {prophet.periodDisplay}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                    {prophet.biographyAndCalling}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between text-xs">
                  <span className="text-amber-700 dark:text-amber-400 text-[11px] font-medium truncate max-w-[160px]">
                    Destinatário: {prophet.audience}
                  </span>
                  <span className="font-bold text-orange-700 dark:text-orange-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Ver história <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL DETALHADO DO HERÓI DA FÉ */}
      {selectedHero && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 font-serif">
                  {selectedHero.originalName} • {selectedHero.biblicalReference}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedHero.name}
                </h3>
                <p className="text-xs text-stone-500 italic">{selectedHero.title}</p>
              </div>
              <button
                onClick={() => setSelectedHero(null)}
                className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-2xl border border-orange-200/70 dark:border-orange-800/40 font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200">
              "{selectedHero.hebrews11Verse}"
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">A Provação da Fé:</strong>
                <p>{selectedHero.trialOfFaith}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">A Vitória Concedida por Deus:</strong>
                <p>{selectedHero.victoryOfFaith}</p>
              </div>

              <div className="p-3.5 bg-stone-50 dark:bg-stone-800 rounded-2xl">
                <strong className="block text-orange-900 dark:text-orange-300 mb-0.5 font-serif">Conexão Tipológica com Cristo Jesus:</strong>
                <p className="text-xs text-stone-700 dark:text-stone-300">{selectedHero.christConnection}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">Lição para a Nossa Vida Hoje:</strong>
                <p className="italic text-stone-600 dark:text-stone-400">"{selectedHero.lifeLesson}"</p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedHero(null)}
                className="px-4 py-2 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold"
              >
                Fechar Perfil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETALHADO DO PERSONAGEM BÍBLICO */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  {selectedCharacter.nationality} • {selectedCharacter.historicalPeriod}
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedCharacter.name} ({selectedCharacter.originalName})
                </h3>
                <p className="text-xs text-stone-500 italic">Significado do nome: "{selectedCharacter.meaning}"</p>
              </div>
              <button
                onClick={() => setSelectedCharacter(null)}
                className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">Biografia Canônica Completa:</strong>
                <p className="text-justify">{selectedCharacter.completeBiography}</p>
              </div>

              <div className="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-2xl border border-orange-200/70 dark:border-orange-800/40">
                <strong className="block text-orange-900 dark:text-orange-300 mb-0.5 font-serif">Legado Espiritual & Apontamento para Cristo:</strong>
                <p className="text-xs text-stone-700 dark:text-stone-300">{selectedCharacter.spiritualLegacyAndChrist}</p>
              </div>

              <div className="text-xs text-stone-500 font-mono">
                Livros Bíblicos: {selectedCharacter.biblicalBooks.join(', ')}
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedCharacter(null)}
                className="px-4 py-2 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold"
              >
                Fechar Perfil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DETALHADO DO PROFETA */}
      {selectedProphet && (
        <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  Profeta {selectedProphet.classification === 'maior' ? 'Maior' : 'Menor'} • {selectedProphet.periodDisplay} ({selectedProphet.approximateDates})
                </span>
                <h3 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  O Profeta {selectedProphet.name}
                </h3>
                <p className="text-xs text-stone-500 italic">Significado do nome: "{selectedProphet.nameMeaning}"</p>
              </div>
              <button
                onClick={() => setSelectedProphet(null)}
                className="p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300 font-bold"
              >
                ✕
              </button>
            </div>

            <div className="p-3.5 bg-orange-50 dark:bg-orange-950/40 rounded-2xl border border-orange-200/70 dark:border-orange-800/40">
              <span className="text-[10px] font-bold uppercase tracking-wider text-orange-800 dark:text-orange-400 block mb-1">
                Versículo Áureo ({selectedProphet.goldenVerse.reference}):
              </span>
              <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                "{selectedProphet.goldenVerse.text}"
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">Biografia e Chamado:</strong>
                <p>{selectedProphet.biographyAndCalling}</p>
              </div>

              <div className="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/50">
                <strong className="block text-rose-900 dark:text-rose-300 mb-0.5 font-serif">Sofrimentos, Lutas e O Que Aconteceu com Ele:</strong>
                <p className="text-xs text-stone-700 dark:text-stone-300">{selectedProphet.whatHappenedToHim}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-0.5">Mensagem Central aos Destinatários ({selectedProphet.audience}):</strong>
                <p>{selectedProphet.centralMessage}</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-1">Profecias Messiânicas de Cristo:</strong>
                <ul className="space-y-1">
                  {selectedProphet.messianicProphecies.map((prof, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5 text-xs">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>{prof}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setSelectedProphet(null)}
                className="px-4 py-2 rounded-xl bg-orange-700 hover:bg-orange-800 text-white text-xs font-bold"
              >
                Fechar Perfil
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
