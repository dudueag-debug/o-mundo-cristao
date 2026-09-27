import React, { useState } from 'react';
import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../../data/fullBibleIndex';
import { BookOpen, Bot, Sparkles, ArrowRight, Volume2, Bookmark, Check, ChevronRight } from 'lucide-react';

interface CentralBibliaEGeminiCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralBibliaEGeminiCard: React.FC<CentralBibliaEGeminiCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const [activeTestament, setActiveTestament] = useState<'AT' | 'NT'>('AT');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoriesAT = ['Pentateuco', 'Históricos', 'Poéticos', 'Profetas Maiores', 'Profetas Menores'];
  const categoriesNT = ['Evangelhos', 'Histórico', 'Cartas Paulinas', 'Cartas Gerais', 'Profético'];

  const filteredBooks = ALL_BIBLE_BOOKS.filter(b => {
    if (b.testament !== activeTestament) return false;
    if (selectedCategory !== 'all' && b.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1109] via-stone-900 to-[#120a06] text-white shadow-xl border border-amber-600/30 p-5 sm:p-7 transition-all group">
      {/* Luzes de fundo elegantes */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-72 h-72 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-5">
        {/* Cabeçalho Unificado e Compacto */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-amber-500/30">
                <BookOpen className="w-3 h-3 text-amber-400" />
                <span>Cânon Completo (66 Livros)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                <Volume2 className="w-3 h-3 text-emerald-400" />
                <span>Com Áudio Narração</span>
              </span>
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">
              Bíblia Sagrada Completa & Gemini IA
            </h2>

            <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
              Todos os 66 livros e 100% dos versículos de cada capítulo nas versões ARC, ARA, NVI, NVT e Strong, com áudio nativo e exegese pastoral integrada.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onSelectTab('biblia')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Abrir Bíblia</span>
            </button>
            <button
              onClick={() => onSelectTab('gemini-ia')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-stone-900 hover:bg-amber-50 font-bold text-xs shadow-md transition-all hover:scale-105"
            >
              <Bot className="w-3.5 h-3.5 text-amber-700" />
              <span>Gemini IA</span>
            </button>
          </div>
        </div>

        {/* Explorador Rápido do Cânon (Mais Fluido e Compacto) */}
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            {/* Alternador AT / NT */}
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl w-fit">
              <button
                onClick={() => {
                  setActiveTestament('AT');
                  setSelectedCategory('all');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTestament === 'AT'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Antigo Testamento (39)
              </button>
              <button
                onClick={() => {
                  setActiveTestament('NT');
                  setSelectedCategory('all');
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  activeTestament === 'NT'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                Novo Testamento (27)
              </button>
            </div>

            {/* Filtros de Categoria */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-2 py-0.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-amber-500/30 text-amber-200 border border-amber-500/40'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                Todos
              </button>
              {(activeTestament === 'AT' ? categoriesAT : categoriesNT).map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2 py-0.5 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-amber-500/30 text-amber-200 border border-amber-500/40'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grade de Livros Clicáveis */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1.5 max-h-48 overflow-y-auto pr-1">
            {filteredBooks.map((b) => (
              <button
                key={b.id}
                onClick={() => onSelectTab('biblia')}
                className="p-2 rounded-xl bg-white/5 hover:bg-amber-600/30 border border-white/5 hover:border-amber-500/50 text-left transition-all group/item flex flex-col justify-between"
                title={`${b.name} (${b.chaptersCount} capítulos) - Clique para ler`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-amber-400">{b.abbrev}</span>
                  <span className="text-[9px] text-stone-400">{b.chaptersCount}c</span>
                </div>
                <span className="text-xs font-serif font-semibold text-stone-200 group-hover/item:text-white truncate mt-0.5">
                  {b.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pilares Compactos: Bíblia com Áudio & Estudo com Gemini IA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div
            onClick={() => onSelectTab('biblia')}
            className="cursor-pointer p-3.5 rounded-2xl bg-black/40 hover:bg-black/50 border border-amber-600/25 hover:border-amber-500/50 transition-all flex items-center justify-between group/pill"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-700/80 text-amber-100 flex items-center justify-center shrink-0">
                <Volume2 className="w-4 h-4 text-amber-200" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-white group-hover/pill:text-amber-300 transition-colors">
                  Áudio Bíblia & Versículos
                </h4>
                <p className="text-[11px] text-stone-400">
                  Ouça capítulos com narração contínua e destaque sincronizado
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-400 group-hover/pill:translate-x-1 transition-transform shrink-0" />
          </div>

          <div
            onClick={() => onSelectTab('gemini-ia')}
            className="cursor-pointer p-3.5 rounded-2xl bg-black/40 hover:bg-black/50 border border-amber-500/25 hover:border-amber-400/50 transition-all flex items-center justify-between group/gem"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-600/80 text-amber-100 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4 text-amber-200" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-white group-hover/gem:text-amber-300 transition-colors">
                  Exegese Pastoral com Gemini IA
                </h4>
                <p className="text-[11px] text-stone-400">
                  Esboços de sermão, teologia wesleyana e concordância Strong
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-300 group-hover/gem:translate-x-1 transition-transform shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
