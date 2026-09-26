import React from 'react';
import { BookOpen, Bot, Sparkles, ArrowRight, Languages, BookMarked, Flame, ScrollText, Check } from 'lucide-react';

interface CentralBibliaEGeminiCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralBibliaEGeminiCard: React.FC<CentralBibliaEGeminiCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-[#1e130c] text-white shadow-2xl border border-amber-600/35 p-6 sm:p-9 transition-all group">
      {/* Luzes de fundo elegantes */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-80 h-80 bg-amber-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho Unificado */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-amber-300 border border-amber-500/30">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Cânon Completo (66 Livros)</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-amber-200 border border-white/10">
              <Bot className="w-3.5 h-3.5 text-amber-300" />
              <span>Inteligência Teológica Pastoral</span>
            </span>
          </div>

          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
            Bíblia Sagrada & Estudo Teológico com Gemini IA
          </h2>

          <p className="text-xs sm:text-sm text-stone-200 max-w-3xl leading-relaxed">
            Acesse as Escrituras Sagradas com a <strong>Concordância Strong</strong> em hebraico e grego, compare 7 traduções lado a lado e leia no <strong>Leitor Cristão</strong> sem distrações. Ao mesmo tempo, aprofunde temas bíblicos, tire dúvidas exegéticas e prepare sermões com o auxílio teológico do <strong>Gemini IA</strong>.
          </p>
        </div>

        {/* Grade com os 2 Pilares Integrados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pilar 1: Bíblia Sagrada, Strong & Leitor Cristão */}
          <div
            onClick={() => onSelectTab('biblia')}
            className="cursor-pointer p-5 rounded-2xl bg-black/40 hover:bg-black/50 border border-amber-600/30 hover:border-amber-500 transition-all flex flex-col justify-between space-y-3 group/biblia"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-700/80 text-amber-100 flex items-center justify-center shadow-md group-hover/biblia:scale-105 transition-transform">
                  <BookOpen className="w-5 h-5 text-amber-200" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-700/40">
                  ARC • ARA • NVI • Strong
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover/biblia:text-amber-300 transition-colors">
                Bíblia Sagrada & Leitor Cristão
              </h3>

              <p className="text-xs text-stone-300 leading-relaxed">
                Navegue pelos 66 livros do Cânon, consulte significados no hebraico e grego com números de Strong e ative o modo leitura imersivo.
              </p>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-400 pt-2 border-t border-white/5">
              <span>Abrir Cânon Bíblico</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/biblia:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Pilar 2: Estudo Teológico com Gemini IA */}
          <div
            onClick={() => onSelectTab('gemini-ia')}
            className="cursor-pointer p-5 rounded-2xl bg-black/40 hover:bg-black/50 border border-amber-500/30 hover:border-amber-400 transition-all flex flex-col justify-between space-y-3 group/gemini"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-600/80 text-amber-100 flex items-center justify-center shadow-md group-hover/gemini:scale-105 transition-transform">
                  <Bot className="w-5 h-5 text-amber-200" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/40">
                  Exegese & Sermões
                </span>
              </div>

              <h3 className="font-serif font-bold text-base sm:text-lg text-white group-hover/gemini:text-amber-300 transition-colors">
                Estudar Teologia com Gemini IA
              </h3>

              <p className="text-xs text-stone-300 leading-relaxed">
                Tire dúvidas teológicas, solicite exegese versículo por versículo, elabore mensagens pastorais e compreenda a doutrina wesleyana da graça.
              </p>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-300 pt-2 border-t border-white/5">
              <span>Conversar com Gemini IA</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover/gemini:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Botões de Ação Direta & Chips Rápidos */}
        <div className="pt-2 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Chips Rápidos de Pesquisa e Estudo */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => onSelectTab('biblia')}
              className="px-2.5 py-1 rounded-lg bg-black/40 text-[11px] font-medium text-amber-200 border border-white/10 hover:bg-white/10 transition-colors"
            >
              ✨ Concordância Strong
            </button>
            <button
              onClick={() => onSelectTab('biblia')}
              className="px-2.5 py-1 rounded-lg bg-black/40 text-[11px] font-medium text-amber-200 border border-white/10 hover:bg-white/10 transition-colors"
            >
              🔍 Comparar Versões
            </button>
            <button
              onClick={() => onSelectTab('gemini-ia')}
              className="px-2.5 py-1 rounded-lg bg-black/40 text-[11px] font-medium text-amber-300 border border-white/10 hover:bg-white/10 transition-colors"
            >
              📜 Análise Exegética IA
            </button>
            <button
              onClick={() => onSelectTab('gemini-ia')}
              className="px-2.5 py-1 rounded-lg bg-black/40 text-[11px] font-medium text-amber-300 border border-white/10 hover:bg-white/10 transition-colors"
            >
              🔥 Teologia Wesleyana IA
            </button>
          </div>

          {/* Botões Principais */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onSelectTab('biblia')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-700 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105"
            >
              <BookOpen className="w-4 h-4" />
              <span>Abrir Bíblia Sagrada</span>
            </button>

            <button
              onClick={() => onSelectTab('gemini-ia')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-stone-900 hover:bg-amber-50 font-bold text-xs sm:text-sm shadow-lg transition-transform hover:scale-105"
            >
              <Bot className="w-4 h-4 text-amber-700" />
              <span>Estudar com Gemini</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
