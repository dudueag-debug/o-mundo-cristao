import React from 'react';
import {
  Heart,
  Cross,
  Compass,
  Sparkles,
  BookOpen,
  ArrowRight,
  Shield,
  Layers,
  Users
} from 'lucide-react';
import { BIBLICAL_WOMEN } from '../../data/virtuousWomenData';
import { CHRIST_MIRACLES } from '../../data/christMiraclesData';
import { SACRED_PLACES_3D } from '../../data/christGeography3DData';

interface MulheresVidaDeCristoCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const MulheresVidaDeCristoCard: React.FC<MulheresVidaDeCristoCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const handleOpenModule = (subTab: string) => {
    onSelectTab('mulheres-vida-de-cristo', subTab);
  };

  return (
    <section className="relative rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 text-white p-6 sm:p-8 border border-amber-500/40 shadow-2xl overflow-hidden transition-all group">
      {/* Luzes difusas de fundo */}
      <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-0 bottom-0 -translate-x-12 translate-y-12 w-64 h-64 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho com Emblema e Badges */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 to-rose-500/25 text-amber-200 border border-amber-400/30 text-xs font-semibold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Novo Grande Módulo Bíblico • Exegese, Geografia 3D & Teologia</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-amber-300/80">
            <span className="bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
              👩 {BIBLICAL_WOMEN.length} Mulheres
            </span>
            <span className="bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
              🗺️ {SACRED_PLACES_3D.length} Locais 3D
            </span>
            <span className="bg-black/40 px-2.5 py-1 rounded-lg border border-white/10">
              ✨ {CHRIST_MIRACLES.length} Milagres
            </span>
          </div>
        </div>

        {/* Título Oficial e Subtítulo */}
        <div className="space-y-2 max-w-3xl">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-amber-50 tracking-tight leading-tight flex flex-wrap items-center gap-2">
            <span>MULHERES VIRTUOSAS & VIDA DE CRISTO</span>
          </h2>
          <p className="text-sm sm:text-base text-amber-200/90 font-medium">
            Conheça as mulheres da Bíblia, a história da redenção e o caminho de Jesus Cristo até o Gólgota.
          </p>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1">
            Explore as histórias das mulheres mencionadas nas Escrituras, seus contextos históricos, suas virtudes, erros, desafios e importância na história da redenção. Estude também a vida, ministério, milagres, ensinamentos, morte, ressurreição e ascensão de Jesus Cristo através de uma linha do tempo e de um mapa interativo.
          </p>
        </div>

        {/* 5 BOTÕES PRINCIPAIS DE NAVEGAÇÃO RÁPIDA */}
        <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
          {/* Botão 1: Mulheres da Bíblia */}
          <button
            onClick={() => handleOpenModule('mulheres')}
            className="flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-100 border border-amber-400/40 hover:border-amber-300 font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
          >
            <span>👩</span>
            <span>MULHERES DA BÍBLIA</span>
          </button>

          {/* Botão 2: Vida de Cristo */}
          <button
            onClick={() => handleOpenModule('vida-cristo')}
            className="flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-100 border border-rose-400/40 hover:border-rose-300 font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
          >
            <span>✝️</span>
            <span>VIDA DE CRISTO</span>
          </button>

          {/* Botão 3: Mapa de Jesus */}
          <button
            onClick={() => handleOpenModule('mapa')}
            className="flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-100 border border-sky-400/40 hover:border-sky-300 font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
          >
            <span>🗺️</span>
            <span>MAPA DE JESUS</span>
          </button>

          {/* Botão 4: Milagres */}
          <button
            onClick={() => handleOpenModule('milagres')}
            className="flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-100 border border-emerald-400/40 hover:border-emerald-300 font-bold text-xs sm:text-sm shadow-md hover:scale-[1.02] transition-all"
          >
            <span>✨</span>
            <span>MILAGRES</span>
          </button>

          {/* Botão 5: Estudo Bíblico */}
          <button
            onClick={() => handleOpenModule('estudo')}
            className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 p-3 sm:py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-amber-900/40 hover:scale-[1.02] transition-all"
          >
            <span>📖</span>
            <span>ESTUDO BÍBLICO</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
