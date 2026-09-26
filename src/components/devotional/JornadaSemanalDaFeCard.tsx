import React, { useState, useEffect } from 'react';
import { JORNADA_SEMANAL_DAYS, JornadaSemanalDay } from '../../data/jornadaSemanalData';
import { Sparkles, Calendar, BookOpen, Quote, Heart, Share2, Check, ArrowRight, Lightbulb, Video, Play, X, ExternalLink } from 'lucide-react';

interface JornadaSemanalDaFeCardProps {
  onStudyWithGemini?: (prompt: string) => void;
  onNavigateToBible?: () => void;
}

export const JornadaSemanalDaFeCard: React.FC<JornadaSemanalDaFeCardProps> = ({
  onStudyWithGemini,
  onNavigateToBible
}) => {
  // Obter o dia da semana atual automaticamente (0 = Domingo .. 6 = Sábado)
  const currentDayOfWeek = new Date().getDay();
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<number>(currentDayOfWeek);
  const [copied, setCopied] = useState<boolean>(false);
  const [showWesleyan, setShowWesleyan] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  // Garantir que ao virar o dia ou ao montar, o dia atual seja selecionado
  useEffect(() => {
    setSelectedDayOfWeek(new Date().getDay());
  }, []);

  const activeDay: JornadaSemanalDay =
    JORNADA_SEMANAL_DAYS.find((d) => d.dayOfWeek === selectedDayOfWeek) || JORNADA_SEMANAL_DAYS[0];

  const isToday = selectedDayOfWeek === currentDayOfWeek;

  const handleShare = () => {
    let text = `✨ JORNADA SEMANAL DA FÉ • ${activeDay.dayName.toUpperCase()}\n`;
    text += `Tema: ${activeDay.theme}\n\n`;
    text += `📖 Palavra: "${activeDay.verseText}" (${activeDay.scriptureRef})\n\n`;
    text += `💬 Reflexão:\n${activeDay.reflection}\n\n`;
    text += `💡 Atitude Prática de Fé:\n${activeDay.practicalAction}\n\n`;
    text += `🙏 Oração do Dia:\n"${activeDay.prayer}"\n\n`;
    text += `— Compartilhado através do app O Mundo Cristão`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950 text-white shadow-xl border border-amber-800/40 p-6 sm:p-8 transition-all">
      {/* Luz ambiente de fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-amber-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho do Card */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Devocional Contínuo</span>
              </span>
              {isToday && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 animate-pulse">
                  Dia de Hoje
                </span>
              )}
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white flex items-center gap-2">
              <span>Jornada Semanal da Fé</span>
            </h2>
            <p className="text-xs text-stone-300 max-w-xl">
              Alimento bíblico e consagração diária para cada dia da sua semana com o Senhor.
            </p>
          </div>

          {/* Botão de Compartilhar */}
          <div className="flex items-center gap-2 self-start sm:self-center">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white text-xs font-semibold border border-white/10 transition-all shadow-sm"
              title="Compartilhar reflexão do dia"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-300">Copiado!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Compartilhar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Seletor dos 7 Dias da Semana */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {JORNADA_SEMANAL_DAYS.map((day) => {
            const isSelected = selectedDayOfWeek === day.dayOfWeek;
            const isCurrentDay = day.dayOfWeek === currentDayOfWeek;
            return (
              <button
                key={day.dayOfWeek}
                onClick={() => {
                  setSelectedDayOfWeek(day.dayOfWeek);
                  setIsVideoOpen(false);
                }}
                className={`flex-1 min-w-[70px] py-2.5 px-2 rounded-2xl text-xs font-medium border transition-all text-center flex flex-col items-center justify-center gap-0.5 ${
                  isSelected
                    ? 'bg-amber-600 border-amber-400 text-white shadow-lg shadow-amber-900/30 scale-[1.03]'
                    : isCurrentDay
                    ? 'bg-amber-950/40 border-amber-600/50 text-amber-200 hover:bg-amber-900/40'
                    : 'bg-black/30 border-white/5 text-stone-400 hover:text-stone-200 hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] uppercase font-bold tracking-wider">
                  {day.shortName}
                </span>
                <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-stone-300'}`}>
                  {isCurrentDay ? 'Hoje' : day.dayName.split('-')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo do Dia Ativo */}
        <div className="space-y-4">
          {/* Título & Passagem */}
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${activeDay.color.badge}`}>
                {activeDay.dayName}
              </span>
              <span className="text-xs text-amber-400 font-semibold flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" /> {activeDay.scriptureRef}
              </span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-amber-100">
              {activeDay.theme}
            </h3>
            <p className="text-xs text-stone-400 italic">
              {activeDay.biblicalFocus}
            </p>
          </div>

          {/* Versículo em Destaque */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/20">
            <blockquote className="font-serif italic text-base sm:text-lg text-amber-100/95 leading-relaxed">
              "{activeDay.verseText}"
            </blockquote>
          </div>

          {/* Vídeo Ilustrativo do Capítulo */}
          {activeDay.video && (
            <div className="p-4 rounded-2xl bg-black/40 border border-amber-700/30 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                        Vídeo Ilustrativo do Capítulo
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono">
                        {activeDay.video.duration}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-semibold text-white">
                      {activeDay.video.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <button
                    onClick={() => setIsVideoOpen(!isVideoOpen)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-xs font-semibold shadow-sm transition-all"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>{isVideoOpen ? 'Recolher Vídeo' : 'Assistir Vídeo'}</span>
                  </button>

                  <a
                    href={`https://www.youtube.com/watch?v=${activeDay.video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 text-xs font-medium border border-white/10 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span className="hidden sm:inline">YouTube</span>
                  </a>
                </div>
              </div>

              {isVideoOpen && (
                <div className="pt-2 border-t border-white/10 space-y-2 animate-fadeIn">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-stone-950">
                    <iframe
                      src={activeDay.video.embedUrl}
                      title={activeDay.video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <p className="text-[11px] text-stone-300 italic">
                    {activeDay.video.summary} • <span className="text-amber-400 font-sans">{activeDay.video.sourceName}</span>
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Reflexão Diária */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-normal">
              {activeDay.reflection}
            </p>

            {/* Atitude Prática de Fé */}
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 flex items-start gap-3">
              <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-0.5">
                  Atitude Prática de Fé para Hoje
                </span>
                <p className="text-xs sm:text-sm text-stone-200">
                  {activeDay.practicalAction}
                </p>
              </div>
            </div>

            {/* Olhar Wesleyano Opcional */}
            {showWesleyan && (
              <div className="p-3.5 rounded-xl bg-stone-900 border border-amber-600/20 space-y-1.5 animate-fadeIn">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Quote className="w-3.5 h-3.5" /> Perspectiva Teológica Wesleyana
                </div>
                <p className="text-xs sm:text-sm text-stone-300 italic">
                  "{activeDay.wesleyanInsight}"
                </p>
              </div>
            )}

            {/* Oração do Dia */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5" /> Oração do Dia
              </div>
              <p className="text-xs sm:text-sm text-stone-300 italic leading-relaxed">
                "{activeDay.prayer}"
              </p>
            </div>

            {/* Ações Inferiores */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <button
                onClick={() => setShowWesleyan(!showWesleyan)}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 underline-offset-4 hover:underline flex items-center gap-1"
              >
                {showWesleyan ? 'Ocultar olhar wesleyano' : 'Ver reflexão teológica de Wesley'}
              </button>

              <div className="flex items-center gap-2">
                {onStudyWithGemini && (
                  <button
                    onClick={() =>
                      onStudyWithGemini(
                        `Gostaria de um estudo bíblico devocional aprofundado sobre o tema de hoje da Jornada Semanal da Fé (${activeDay.dayName}): "${activeDay.theme}" baseado em ${activeDay.scriptureRef}. Por favor, traga contexto histórico, hebraico/grego e aplicação pastoral wesleyana.`
                      )
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 text-amber-200 hover:text-white text-xs font-semibold border border-amber-500/30 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Estudar tema com IA</span>
                  </button>
                )}
                {onNavigateToBible && (
                  <button
                    onClick={onNavigateToBible}
                    className="inline-flex items-center gap-1 text-xs text-stone-400 hover:text-stone-200 transition-colors"
                  >
                    <span>Ler na Bíblia</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
