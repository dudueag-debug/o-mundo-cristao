import React, { useState } from 'react';
import { IMW_HISTORY_EVENTS, IMW_PIONEERS, IMW_DISTINCTIVES } from '../../data/imwHistory';
import { CHURCH_HISTORY_PERIODS, ChurchHistoryPeriod } from '../../data/churchHistory';
import { Flame, BookMarked, Calendar, MapPin, Users, Award, ShieldCheck, ChevronRight } from 'lucide-react';

export const ChurchHistoryView: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'imw' | 'geral'>('imw');
  const [selectedPeriod, setSelectedPeriod] = useState<ChurchHistoryPeriod>(CHURCH_HISTORY_PERIODS[0]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Flame className="w-4 h-4" /> Memória & Tradição
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          História das Igrejas & História da IMW
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Conheça o mover de Deus através dos séculos, desde os mártires da Igreja Primitiva até o avivamento histórico que deu origem à Igreja Metodista Wesleyana em 1967.
        </p>

        {/* Alternador de Abas Principais */}
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => setActiveSection('imw')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeSection === 'imw'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-900/10'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Flame className="w-4 h-4" />
            <span>História da IMW (1967)</span>
          </button>

          <button
            onClick={() => setActiveSection('geral')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeSection === 'geral'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-900/10'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>História Geral das Igrejas</span>
          </button>
        </div>
      </div>

      {/* Seção 1: História da IMW */}
      {activeSection === 'imw' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Banner de Abertura IMW */}
          <div className="relative rounded-3xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 p-6 sm:p-8 text-white border border-amber-800/40 shadow-lg">
            <div className="max-w-3xl space-y-3">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                Uma Igreja Missionária e Avivada
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-amber-50">
                O Avivamento Espiritual de Nova Friburgo (1967)
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal">
                Na década de 1960, um vento impetuoso do Espírito Santo começou a soprar sobre o Brasil. Pastores e membros buscavam o batismo no Espírito Santo, a renovação espiritual e uma volta fervorosa à santidade pregada por John Wesley. Em 5 de janeiro de 1967, no salão do Grêmio Teatral de Nova Friburgo (RJ), nascia a <strong>Igreja Metodista Wesleyana</strong>.
              </p>
            </div>
          </div>

          {/* Marcas Distintivas da IMW */}
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              Marcas Distintivas da IMW
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {IMW_DISTINCTIVES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                    {item.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Linha do Tempo da IMW */}
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              Marcos Históricos da Denominação
            </h3>
            <div className="relative border-l-2 border-amber-300 dark:border-stone-700 ml-4 pl-6 space-y-6">
              {IMW_HISTORY_EVENTS.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-amber-600 border-4 border-white dark:border-stone-900 group-hover:scale-125 transition-transform" />
                  <div className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-amber-800 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/80 px-2.5 py-1 rounded-md border border-amber-200/60 dark:border-amber-800/40">
                        {event.year}
                      </span>
                      {event.badge && (
                        <span className="text-[10px] uppercase font-bold text-stone-500 dark:text-stone-400">
                          {event.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                      {event.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 dark:text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      <span>{event.location}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pioneiros Fundadores */}
          <div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-amber-600" />
              Pastores Pioneiros & Fundadores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IMW_PIONEERS.map((pioneer, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center text-amber-700 dark:text-amber-400 font-serif font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                        {pioneer.name}
                      </h4>
                      <p className="text-xs font-medium text-amber-800 dark:text-amber-400">
                        {pioneer.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed pt-1">
                    {pioneer.contribution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Seção 2: História Geral das Igrejas */}
      {activeSection === 'geral' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Lista dos Períodos Históricos */}
            <div className="lg:col-span-4 space-y-2">
              {CHURCH_HISTORY_PERIODS.map((period) => {
                const isSelected = selectedPeriod.id === period.id;
                return (
                  <div
                    key={period.id}
                    onClick={() => setSelectedPeriod(period)}
                    className={`p-4 rounded-xl cursor-pointer border transition-all text-left ${
                      isSelected
                        ? 'bg-amber-50/90 dark:bg-stone-800/90 border-amber-500/60 shadow-sm ring-1 ring-amber-500/30'
                        : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400 block mb-0.5">
                      {period.century}
                    </span>
                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                      {period.title}
                    </h3>
                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                      {period.summary}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Leitor Detalhado do Período */}
            <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                  {selectedPeriod.era} • {selectedPeriod.century}
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mt-2 mb-2">
                  {selectedPeriod.title}
                </h2>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  {selectedPeriod.summary}
                </p>
              </div>

              {/* Figuras Principais */}
              <div>
                <h4 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" /> Personagens Históricos Marcantes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPeriod.keyFigures.map((fig, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                    >
                      {fig}
                    </span>
                  ))}
                </div>
              </div>

              {/* Principais Acontecimentos */}
              <div>
                <h4 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Acontecimentos Marcantes
                </h4>
                <ul className="space-y-2">
                  {selectedPeriod.keyEvents.map((evt, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
                    >
                      <ChevronRight className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                      <span>{evt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Relevância Teológica e Espiritual */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/40 space-y-1">
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                  Relevância para a Fé Hoje
                </h4>
                <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                  "{selectedPeriod.significance}"
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
