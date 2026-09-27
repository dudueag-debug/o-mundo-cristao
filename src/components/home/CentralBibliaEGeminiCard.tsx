import React from 'react';
import { BookOpen, Bot, Sparkles, Volume2, ScrollText, ArrowRight, ChevronRight, PenTool } from 'lucide-react';

interface CentralBibliaEGeminiCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralBibliaEGeminiCard: React.FC<CentralBibliaEGeminiCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1109] via-stone-900 to-[#120a06] text-white shadow-xl border border-amber-600/30 p-6 sm:p-8 transition-all hover:border-amber-500/50 group">
      {/* Luzes de Fundo e Brilho Dourado */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-80 h-80 bg-amber-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho Principal: Ícone da Bíblia em Destaque + Título + Badges */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/10 pb-6">
          <div className="flex items-start sm:items-center gap-4">
            {/* Ícone da Bíblia Sagrada Dourado com Efeito Capa */}
            <div
              onClick={() => onSelectTab('biblia')}
              className="cursor-pointer relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 p-1 shadow-2xl shadow-amber-950/80 border border-amber-400/40 flex flex-col items-center justify-center shrink-0 group-hover:scale-105 group-hover:rotate-1 transition-all"
              title="Clique para abrir a Bíblia Sagrada Completa"
            >
              <div className="w-full h-full rounded-xl border border-amber-400/20 flex flex-col items-center justify-center p-2 text-center bg-black/20">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-amber-200 stroke-[1.5] mb-1" />
                <span className="text-[9px] font-serif font-black tracking-widest uppercase text-amber-200/90 leading-tight">
                  BÍBLIA
                </span>
                <span className="text-[7px] text-amber-400/80 font-mono">66 LIVROS</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-300 border border-amber-500/30">
                  <BookOpen className="w-3 h-3 text-amber-400" />
                  <span>Cânon Completo (66 Livros)</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-emerald-300 border border-emerald-500/30">
                  <Volume2 className="w-3 h-3 text-emerald-400" />
                  <span>Áudio Narração</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-400/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-amber-200 border border-amber-400/30">
                  <ScrollText className="w-3 h-3 text-amber-300" />
                  <span>Montador de Esboços & IA</span>
                </span>
              </div>

              <h2
                onClick={() => onSelectTab('biblia')}
                className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight cursor-pointer hover:text-amber-200 transition-colors"
              >
                Bíblia Sagrada Completa
              </h2>

              <p className="text-xs sm:text-sm text-stone-300 max-w-2xl leading-relaxed">
                Navegue por todos os 66 livros e capítulos integrais com narração em áudio, anotações de versículos, comparador de versões e IA teológica para estruturação de pregações.
              </p>
            </div>
          </div>

          {/* Botões de Ação Direta */}
          <div className="flex items-center gap-2.5 shrink-0 self-start sm:self-center">
            <button
              onClick={() => onSelectTab('biblia')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-950/60 transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>Abrir Bíblia</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <button
              onClick={() => onSelectTab('gemini-ia')}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white text-stone-900 hover:bg-amber-50 font-bold text-xs sm:text-sm shadow-xl transition-all hover:scale-105"
            >
              <Bot className="w-4 h-4 text-amber-700" />
              <span>Gemini IA</span>
            </button>
          </div>
        </div>

        {/* 3 Recursos Compactos e Informativos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Card 1: 66 Livros e Capítulos Completos */}
          <div
            onClick={() => onSelectTab('biblia')}
            className="cursor-pointer p-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-amber-500/40 transition-all group/item flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-600/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-500/30">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-200 group-hover/item:text-amber-300 transition-colors">
                  66 Livros & Capítulos
                </h4>
                <span className="text-[10px] text-amber-400 font-mono">39 AT • 27 NT</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Todos os versículos de cada capítulo nas versões ARC, ARA, NVI, NVT, ACF e Strong.
            </p>
          </div>

          {/* Card 2: Áudio Narração com Karaokê */}
          <div
            onClick={() => onSelectTab('biblia')}
            className="cursor-pointer p-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-emerald-500/40 transition-all group/item flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-600/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-500/30">
                <Volume2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-200 group-hover/item:text-emerald-300 transition-colors">
                  Escuta em Áudio
                </h4>
                <span className="text-[10px] text-emerald-400 font-mono">Voz Natural • Velocidade</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Ouça o capítulo completo ou versículos avulsos com acompanhamento sincronizado.
            </p>
          </div>

          {/* Card 3: Anotações & Montador de Esboço de Pregação */}
          <div
            onClick={() => onSelectTab('biblia')}
            className="cursor-pointer p-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-amber-400/40 transition-all group/item flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <PenTool className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-200 group-hover/item:text-amber-300 transition-colors">
                  Anotações & Esboço
                </h4>
                <span className="text-[10px] text-amber-300 font-mono">Com IA Homilética</span>
              </div>
            </div>
            <p className="text-[11px] text-stone-400 leading-relaxed">
              Clique no versículo para abrir a aba lateral, registrar reflexões e montar sua pregação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
