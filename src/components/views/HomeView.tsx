import React, { useState } from 'react';
import { DAILY_DEVOTIONALS, EMOTIONAL_CHECKINS } from '../../data/devotionalData';
import { MomentoComOPaiCard } from '../devotional/MomentoComOPaiCard';
import { CentralTeologicaMultimidiaCard } from '../home/CentralTeologicaMultimidiaCard';
import { CentralPersonagensProfetasHeroisCard } from '../home/CentralPersonagensProfetasHeroisCard';
import { CentralHistoriaLugaresJesusCard } from '../home/CentralHistoriaLugaresJesusCard';
import { Sparkles, Flame, ScrollText, BookOpen, Share2, Check, ArrowRight, Heart, HeartCrack, BatteryCharging, ShieldAlert, Sun, Quote, BookMarked, Download, Smartphone, Apple, Users, Cross, Scroll, Bot, Church, Award, MapPin, UserCheck, Languages, Compass, Shield } from 'lucide-react';


interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenInstallModal?: () => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onOpenInstallModal, onStudyWithGemini }) => {
  const [selectedFeeling, setSelectedFeeling] = useState<string | null>(null);
  const [copiedVerse, setCopiedVerse] = useState(false);
  const [showFullDevotional, setShowFullDevotional] = useState(false);

  const devotional = DAILY_DEVOTIONALS[0];
  const activeFeeling = EMOTIONAL_CHECKINS.find((c) => c.id === selectedFeeling);

  const handleCopyVerse = () => {
    const textToCopy = `"${devotional.verseText}" - ${devotional.reference}\n\nO Mundo Cristão | Teologia & Devocional Diário`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2500);
  };

  const getFeelingIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartCrack': return <HeartCrack className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      case 'BatteryCharging': return <BatteryCharging className="w-4 h-4" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4" />;
      case 'Sun': return <Sun className="w-4 h-4" />;
      default: return <Heart className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Card Destaque: Momento com o Pai (Estilo Café com Deus Pai) */}
      <MomentoComOPaiCard />

      {/* Hero: Versículo e Devocional do Dia */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 via-stone-900 to-amber-950 text-white shadow-xl shadow-amber-950/20 p-6 sm:p-8 border border-amber-800/30">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Palavra & Alento de Hoje
            </span>
            <button
              onClick={handleCopyVerse}
              className="flex items-center gap-1.5 text-xs text-amber-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
              title="Copiar versículo para compartilhar"
            >
              {copiedVerse ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>
          </div>

          <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl font-light italic leading-relaxed text-amber-50 mb-3">
            "{devotional.verseText}"
          </blockquote>

          <div className="flex items-center gap-2 text-sm text-amber-300 font-medium mb-6">
            <span>— {devotional.reference}</span>
            <span className="text-amber-500">•</span>
            <span className="text-amber-200/80">{devotional.theme}</span>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-white/5 space-y-3">
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-normal">
              {devotional.reflection}
            </p>

            {showFullDevotional && (
              <div className="pt-3 border-t border-white/10 space-y-3 animate-fadeIn">
                <div className="bg-amber-950/40 p-3.5 rounded-xl border border-amber-500/20">
                  <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Quote className="w-3 h-3" /> Olhar Wesleyano
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 italic">
                    "{devotional.wesleyanInsight}"
                  </p>
                </div>

                <div className="bg-stone-900/60 p-3.5 rounded-xl border border-white/5">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Heart className="w-3 h-3 text-rose-400" /> Oração Sugerida
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300">
                    {devotional.prayer}
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={() => setShowFullDevotional(!showFullDevotional)}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline-offset-4 hover:underline flex items-center gap-1 pt-1"
            >
              {showFullDevotional ? 'Recolher reflexão' : 'Ver reflexão wesleyana e oração completa'}
            </button>
          </div>
        </div>
      </section>

      {/* Banner de Instalação PWA (iOS e Android) */}
      {onOpenInstallModal && (
        <section 
          onClick={onOpenInstallModal}
          className="cursor-pointer bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-orange-500/10 hover:from-amber-500/20 hover:to-orange-500/20 border border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-900/10 group-hover:scale-105 transition-transform">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900 dark:text-stone-100">
                  Instalar App no seu Celular
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  PWA Gratuito
                </span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5 flex items-center gap-1.5">
                <Apple className="w-3.5 h-3.5 inline text-stone-700 dark:text-stone-300" />
                <span>iPhone (iOS)</span>
                <span>•</span>
                <Smartphone className="w-3.5 h-3.5 inline text-emerald-600" />
                <span>Android</span>
                <span>— Use sem precisar de loja de aplicativos!</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 dark:text-amber-400 self-end sm:self-center group-hover:translate-x-1 transition-transform">
            <span>Ver como baixar</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </section>
      )}

      {/* Check-in Emocional e Espiritual */}
      <section className="bg-white dark:bg-stone-900 rounded-3xl p-6 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors">
        <div className="max-w-2xl mb-4">
          <div className="flex items-center gap-2 mb-1">
            <Heart className="w-4 h-4 text-rose-500" />
            <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
              Como está o seu coração agora?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
            Toque no sentimento que melhor descreve seu momento para receber uma palavra bíblica e uma oração imediata.
          </p>
        </div>

        {/* Botoes de Emoções */}
        <div className="flex flex-wrap gap-2 mb-4">
          {EMOTIONAL_CHECKINS.map((item) => {
            const isSelected = selectedFeeling === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedFeeling(isSelected ? null : item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all ${
                  isSelected
                    ? `${item.color} shadow-sm ring-2 ring-amber-500/50 scale-105`
                    : 'bg-stone-50 dark:bg-stone-800/60 border-stone-200 dark:border-stone-700/60 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                {getFeelingIcon(item.iconName)}
                <span>{item.feeling}</span>
              </button>
            );
          })}
        </div>

        {/* Card do Check-in Ativo */}
        {activeFeeling && (
          <div className="mt-4 p-5 rounded-2xl bg-amber-50/70 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700 animate-fadeIn space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-amber-950 dark:text-amber-300">
                {activeFeeling.title}
              </h3>
              <span className="text-xs font-semibold text-amber-800 dark:text-amber-400 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-full border border-amber-300/50">
                {activeFeeling.scripture}
              </span>
            </div>

            <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200 bg-white/60 dark:bg-black/20 p-3 rounded-xl border border-stone-200/50 dark:border-stone-700/50">
              "{activeFeeling.verseText}"
            </p>

            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {activeFeeling.message}
            </p>

            <div className="pt-2 border-t border-amber-200/60 dark:border-stone-700">
              <span className="text-xs font-bold text-amber-900 dark:text-amber-400 block mb-1">
                Oração para este instante:
              </span>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 italic">
                "{activeFeeling.guidedPrayer}"
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Banner / Card Destaque: Gemini IA Teológico */}
      <section
        onClick={() => onSelectTab('gemini-ia')}
        className="group cursor-pointer rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-amber-100 border border-white/20">
              <Bot className="w-3.5 h-3.5" />
              <span>Novo Módulo • Inteligência Teológica Pastoral</span>
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Estude a Bíblia & Teologia com o Gemini IA
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              Tire dúvidas teológicas, analise termos no hebraico e grego, prepare esboços de sermão e compreenda a doutrina da graça wesleyana com auxílio da IA.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-lg bg-black/20 text-[11px] font-medium border border-white/10">📜 Exegese & Contexto</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/20 text-[11px] font-medium border border-white/10">🔍 Hebraico & Grego</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/20 text-[11px] font-medium border border-white/10">🔥 Teologia Wesleyana</span>
              <span className="px-2.5 py-1 rounded-lg bg-black/20 text-[11px] font-medium border border-white/10">📖 Gerador de Sermões</span>
            </div>
          </div>
          <div className="shrink-0 flex items-center">
            <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-amber-900 font-bold text-xs sm:text-sm shadow-lg group-hover:scale-105 transition-transform">
              <span>Abrir Gemini IA</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* Portal da Bíblia Sagrada Completa com Bíblia Strong e Leitor Kindle */}
      <section
        onClick={() => onSelectTab('biblia')}
        className="group cursor-pointer rounded-3xl p-6 sm:p-7 bg-gradient-to-r from-amber-800 via-amber-900 to-stone-900 text-white shadow-xl hover:shadow-2xl border border-amber-600/30 transition-all relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-amber-200 border border-white/10">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>Cânon Bíblico Completo • 66 Livros</span>
            </div>

            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
              Bíblia Sagrada com Concordância Strong & Leitor Cristão
            </h2>

            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
              Consulte as Escrituras com termos originais em hebraico e grego (Bíblia Strong), compare traduções lado a lado (ARC, ARA, NVI, KJA, ACF, NVT, NAA) e leia no Leitor Cristão sem distrações.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-black/30 text-[11px] font-mono text-amber-300 border border-white/10">
                ✨ Concordância de Strong Interlinear
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/30 text-[11px] font-mono text-amber-300 border border-white/10">
                📖 Leitor Cristão (Sépia, Dark, Bookerly)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/30 text-[11px] font-mono text-amber-300 border border-white/10">
                🔍 Comparador de Versões Paralelas
              </span>
            </div>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs sm:text-sm shadow-lg group-hover:scale-105 transition-transform">
              <span>Abrir Bíblia Sagrada</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* CARD 1 UNIFICADO: LIVROS TEOLÓGICOS, BAIXAR/ENVIAR LIVROS E VÍDEOS, E ESBOÇOS */}
      <CentralTeologicaMultimidiaCard onSelectTab={onSelectTab} />

      {/* CARD 2 UNIFICADO: HERÓIS DA FÉ, PERSONAGENS BÍBLICOS E PROFETAS MAIORES E MENORES */}
      <CentralPersonagensProfetasHeroisCard 
        onSelectTab={onSelectTab} 
        onStudyWithGemini={onStudyWithGemini} 
      />

      {/* CARD 3 UNIFICADO: HISTÓRIA DAS IGREJAS, HISTÓRIA DA METODISTA WESLEYANA (IMW) E LUGARES DE JESUS */}
      <CentralHistoriaLugaresJesusCard 
        onSelectTab={onSelectTab} 
        onStudyWithGemini={onStudyWithGemini} 
      />

      {/* Seção Destaque Complementar: Mestres Teólogos, Obras Cristocêntricas & Ministério */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Teologia Histórica, Clássicos & Ministério
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <span>Pilares do Saber & Grandes Mestres</span>
            </h2>
          </div>
          <p className="text-xs text-stone-500 dark:text-stone-400 max-w-md">
            Biografias teológicas, obras cristocêntricas consagradas, a ordem da graça wesleyana e homilética para púlpito.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Teólogos de Todas as Denominações */}
          <div
            onClick={() => onSelectTab('teologos')}
            className="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-amber-900/15 via-stone-900/5 to-amber-950/20 dark:from-stone-900 dark:to-amber-950/30 border border-amber-600/30 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                  16 Mestres
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Grandes Teólogos
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  Biografias e citações: <strong>Wesley</strong>, <strong>Spurgeon</strong>, <strong>Calvino</strong>, <strong>Lutero</strong>, <strong>C.S. Lewis</strong>, <strong>Bonhoeffer</strong> e pioneiros.
                </p>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform pt-3 border-t border-stone-200/50 dark:border-stone-800/50 mt-4">
              <span>Conhecer todos os mestres</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 2: Livros Cristocêntricos */}
          <div
            onClick={() => onSelectTab('obras-cristocentricas')}
            className="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-rose-900/15 via-stone-900/5 to-rose-950/20 dark:from-stone-900 dark:to-rose-950/30 border border-rose-500/30 hover:border-rose-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-rose-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Cross className="w-6 h-6 stroke-[2.2]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 dark:bg-rose-950 dark:text-rose-300 border border-rose-300/40">
                  12 Clássicos
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-rose-700 dark:group-hover:text-rose-400 transition-colors">
                  Obras Cristocêntricas
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  As maiores obras da fé: <em>Cristianismo Puro e Simples</em>, <em>A Cruz de Cristo</em>, <em>O Peregrino</em> e <em>O Tesouro de Davi</em>.
                </p>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-rose-700 dark:text-rose-400 group-hover:translate-x-1 transition-transform pt-3 border-t border-stone-200/50 dark:border-stone-800/50 mt-4">
              <span>Acessar acervo clássico</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 3: Teologia Wesleyana */}
          <div
            onClick={() => onSelectTab('teologia')}
            className="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-stone-50 dark:from-stone-900 dark:to-amber-950/30 border border-amber-500/30 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40">
                  Doutrinas da Graça
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Teologia Wesleyana
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  A Ordem da Graça (Preveniente, Justificadora, Santificadora), o Quadrilátero e a Santidade de vida.
                </p>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform pt-3 border-t border-stone-200/50 dark:border-stone-800/50 mt-4">
              <span>Estudar compêndio teológico</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>

          {/* Card 4: Esboços de Pregação */}
          <div
            onClick={() => onSelectTab('sermoes')}
            className="group cursor-pointer p-5 rounded-3xl bg-gradient-to-br from-stone-500/10 via-stone-600/5 to-stone-50 dark:from-stone-900 dark:to-stone-800 border border-stone-300 dark:border-stone-700 hover:border-amber-500 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-stone-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <ScrollText className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-stone-200 text-stone-800 dark:bg-stone-800 dark:text-stone-200">
                  Homilética
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  Esboços de Pregação
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 mt-1 leading-relaxed">
                  Sermões estruturados para púlpito, estudos bíblicos de EBD e criador inteligente de novos esboços.
                </p>
              </div>
            </div>

            <div className="flex items-center text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform pt-3 border-t border-stone-200/50 dark:border-stone-800/50 mt-4">
              <span>Acessar acervo de sermões</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>
      </section>

      {/* Regra de Ouro de John Wesley */}
      <section className="rounded-2xl p-6 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-center max-w-2xl mx-auto">
        <Quote className="w-6 h-6 text-amber-600 mx-auto mb-2 opacity-80" />
        <p className="font-serif italic text-sm sm:text-base text-stone-800 dark:text-stone-200 leading-relaxed mb-2">
          "Faça todo o bem que puder, com todos os meios que puder, de todas as maneiras que puder, em todos os lugares que puder, a todas as pessoas que puder, enquanto você puder."
        </p>
        <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
          — John Wesley
        </span>
      </section>

      {/* Seção: Sobre o Criador do Aplicativo */}
      <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-amber-500/10 via-stone-100 to-amber-600/10 dark:from-stone-900 dark:via-stone-900 dark:to-stone-900 border border-amber-500/20 max-w-3xl mx-auto shadow-sm">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md shrink-0 ring-4 ring-amber-500/20">
            E
          </div>
          <div className="space-y-1.5 flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Criado por Eduardo
              </h3>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                Idealizador do Projeto
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
              O aplicativo <strong>O Mundo Cristão</strong> nasceu do desejo sincero de abençoar vidas com a Palavra de Deus, resgatar a riqueza histórica das igrejas e proclamar as verdades bíblicas da tradição metodista wesleyana.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs">
              <a
                href="mailto:dudusemog@gmail.com"
                className="inline-flex items-center gap-1.5 text-amber-700 dark:text-amber-400 hover:underline font-semibold bg-amber-100/60 dark:bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-500/30"
              >
                <span>✉️ dudusemog@gmail.com</span>
              </a>
              <span className="text-stone-400">
                Igreja Metodista Wesleyana • "O mundo é a nossa paróquia"
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
