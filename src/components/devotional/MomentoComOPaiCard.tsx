import React, { useState, useEffect } from 'react';
import { MOMENTO_COM_O_PAI_LIST, MomentoComOPaiDevocional, LinguisticOrigin } from '../../data/momentoComOPaiData';
import {
  Coffee,
  KeyRound,
  Heart,
  Share2,
  Check,
  Sparkles,
  BookOpen,
  Clock,
  MessageSquareHeart,
  Bookmark,
  Calendar,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Video,
  Languages,
  MapPin,
  Maximize2,
  X,
  Scroll,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { storageService } from '../../services/storageService';
import { KindleReaderModal } from '../common/KindleReaderModal';

export const MomentoComOPaiCard: React.FC = () => {
  // Dia da semana atual (0 = Domingo, 1 = Segunda, ..., 6 = Sábado)
  const todayDayOfWeek = new Date().getDay();

  // Seleciona automaticamente o devocional do dia de hoje
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(() => {
    const currentDay = new Date().getDay();
    const foundIdx = MOMENTO_COM_O_PAI_LIST.findIndex((d) => d.dayOfWeek === currentDay);
    return foundIdx >= 0 ? foundIdx : 0;
  });

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [userNote, setUserNote] = useState<string>('');
  const [savedNoteSuccess, setSavedNoteSuccess] = useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [isKindleOpen, setIsKindleOpen] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [activeLangTab, setActiveLangTab] = useState<'all' | 'hebrew' | 'aramaic' | 'greek' | 'latin'>('all');

  const devotional: MomentoComOPaiDevocional = MOMENTO_COM_O_PAI_LIST[selectedDayIdx] || MOMENTO_COM_O_PAI_LIST[0];
  const storageNoteKey = storageService.getUserStorageKey(`mcp_note_${devotional.id}`);

  // Carrega nota do diário pessoal
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageNoteKey);
      setUserNote(saved || '');
    } catch {
      setUserNote('');
    }
  }, [selectedDayIdx, storageNoteKey]);

  // Cancela a fala de áudio ao trocar de dia ou desmontar
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [selectedDayIdx]);

  const handleSaveNote = () => {
    try {
      localStorage.setItem(storageNoteKey, userNote);
      setSavedNoteSuccess(true);
      setTimeout(() => setSavedNoteSuccess(false), 2000);
    } catch {}
  };

  const handleToggleSpeak = () => {
    if (!('speechSynthesis' in window)) {
      alert('Síntese de voz não é suportada neste navegador.');
      return;
    }
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToRead = `${devotional.title}. ${devotional.subtitle}. Leitura bíblica: ${devotional.scriptureRef}. "${devotional.verseText}". ${devotional.fatherMessage.join(' ')}. A Chave do Dia: ${devotional.keyOfTheDay}. Oração à Mesa: ${devotional.tablePrayer}`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const handleShare = () => {
    let text = `☕ COMUNHÃO COM O PAI\n`;
    text += `${devotional.dateDisplay} • ${devotional.dayTheme}\n\n`;
    text += `"${devotional.title.toUpperCase()}"\n\n`;
    text += `📖 Palavra do Pai:\n"${devotional.verseText}" — ${devotional.scriptureRef}\n\n`;
    text += `💬 Uma palavra ao seu coração:\n${devotional.fatherMessage.join('\n\n')}\n\n`;
    text += `🏛️ Raízes Sagradas da Palavra:\n`;
    text += `• Hebraico: ${devotional.linguisticRoots.hebrew.originalScript} (${devotional.linguisticRoots.hebrew.transliteration}) - ${devotional.linguisticRoots.hebrew.meaning}\n`;
    text += `• Aramaico: ${devotional.linguisticRoots.aramaic.originalScript} (${devotional.linguisticRoots.aramaic.transliteration}) - ${devotional.linguisticRoots.aramaic.meaning}\n`;
    text += `• Grego: ${devotional.linguisticRoots.greek.originalScript} (${devotional.linguisticRoots.greek.transliteration}) - ${devotional.linguisticRoots.greek.meaning}\n`;
    text += `• Latim: ${devotional.linguisticRoots.latin.originalScript} - ${devotional.linguisticRoots.latin.meaning}\n\n`;
    text += `🔑 A CHAVE DO DIA:\n${devotional.keyOfTheDay}\n\n`;
    text += `🙏 Oração à Mesa:\n"${devotional.tablePrayer}"\n\n`;
    text += `— Compartilhado via O Mundo Cristão | Teologia & Devocional`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const isCurrentToday = devotional.dayOfWeek === todayDayOfWeek;

  return (
    <>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2a1a12] via-[#1d120c] to-[#120a06] text-[#fbf0d9] border border-amber-800/40 shadow-2xl p-5 sm:p-8 lg:p-10 transition-all">
        {/* Luz ambiente dourada de cafeteria e santuário */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-amber-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-[#c86b3e]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-7">
          {/* Cabeçalho Principal: Título & Ações */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-800/30 pb-5">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-900 text-amber-100 flex items-center justify-center shadow-xl shadow-amber-950/50 border border-amber-500/40 flex-shrink-0">
                <Coffee className="w-7 h-7 text-amber-300 stroke-[2.2] animate-pulse" />
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2">
                  <h1 className="font-serif font-bold text-xl sm:text-2xl text-[#fef5e7] tracking-tight">
                    Comunhão com o Pai
                  </h1>
                  {isCurrentToday ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/25 text-amber-300 border border-amber-500/40 shadow-sm animate-pulse">
                      <Sparkles className="w-3 h-3 text-amber-400" /> Devocional de Hoje
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-white/10 text-amber-200 border border-white/10">
                      {devotional.dayOfWeekName}
                    </span>
                  )}
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-950/50 text-rose-300 border border-rose-800/40">
                    Café & Intimidade
                  </span>
                </div>
                <p className="text-xs text-amber-200/80 font-medium flex items-center gap-2 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{devotional.dateDisplay}</span>
                  <span>•</span>
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>{devotional.readingTime}</span>
                </p>
              </div>
            </div>

            {/* Barra de Ações Rápidas: Áudio, Modo Kindle e Compartilhar */}
            <div className="flex items-center flex-wrap gap-2">
              {/* Botão Ouvir Áudio */}
              <button
                onClick={handleToggleSpeak}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  isSpeaking
                    ? 'bg-amber-600 text-white border-amber-400 shadow-md shadow-amber-900/50 animate-pulse'
                    : 'bg-white/10 hover:bg-white/15 text-amber-200 hover:text-white border-white/10'
                }`}
                title={isSpeaking ? 'Pausar narração da devocional' : 'Ouvir devocional com voz suave'}
              >
                {isSpeaking ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-amber-200" />
                    <span>Pausar Áudio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ouvir</span>
                  </>
                )}
              </button>

              {/* Botão Leitor Cristão */}
              <button
                onClick={() => setIsKindleOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-950/60 hover:bg-amber-900/80 text-amber-200 hover:text-amber-100 text-xs font-semibold border border-amber-700/50 shadow-sm transition-all"
                title="Abrir no Leitor Cristão (Leitura Imersiva)"
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                <span>Leitor Cristão</span>
              </button>

              {/* Botão Compartilhar */}
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white text-xs font-semibold border border-white/10 transition-all"
                title="Copiar mensagem e reflexões para compartilhar"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Compartilhar</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Navegador Automático dos 7 Dias da Semana */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300/90 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                Jornada Semanal da Fé (Mudança Automática Diária)
              </span>
              <span className="text-[10px] text-amber-200/60">
                Toque em qualquer dia para navegar
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 bg-black/40 p-1.5 rounded-2xl border border-white/5">
              {MOMENTO_COM_O_PAI_LIST.map((item, idx) => {
                const isSelected = selectedDayIdx === idx;
                const isToday = item.dayOfWeek === todayDayOfWeek;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedDayIdx(idx)}
                    className={`relative px-2.5 py-2 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-700 to-amber-900 text-white font-bold shadow-lg shadow-amber-950/60 border border-amber-500/40 ring-1 ring-amber-400/30'
                        : 'text-amber-200/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold leading-none">{item.dayOfWeekName}</span>
                      {isToday && (
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] font-extrabold bg-amber-400 text-stone-950 uppercase tracking-tight">
                          Hoje
                        </span>
                      )}
                    </div>
                    <p className="text-[10px] opacity-80 truncate mt-1">
                      {item.scriptureRef.split('/')[0]}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Título & Subtítulo da Conversa à Mesa */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Tema do Dia: {devotional.dayTheme}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#fff8ee] leading-tight">
              {devotional.title}
            </h2>
            <p className="text-sm sm:text-base text-amber-200/80 italic font-serif leading-relaxed">
              "{devotional.subtitle}"
            </p>
          </div>

          {/* Versículo Âncora à Mesa */}
          <div className="p-4 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-amber-600/30 space-y-2 shadow-inner">
            <div className="flex items-center justify-between gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-300" /> Palavra Revelada • {devotional.scriptureRef}
              </span>
              <span className="text-[10px] text-amber-200/60 font-mono">
                {devotional.story.chapter}
              </span>
            </div>
            <p className="font-serif italic text-lg sm:text-xl text-amber-100 leading-relaxed">
              "{devotional.verseText}"
            </p>
          </div>

          {/* Bloco Multimídia: Imagem Temática do Capítulo & Vídeo Animado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* 1. Imagem de Alta Resolução da História Bíblica */}
            <div className="relative group overflow-hidden rounded-2xl border border-amber-800/40 bg-black/50 shadow-lg">
              <div className="relative h-60 sm:h-72 w-full overflow-hidden">
                <img
                  src={devotional.image.url}
                  alt={devotional.image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                
                {/* Localização Bíblica Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-black/70 backdrop-blur-md text-amber-200 border border-amber-700/40">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{devotional.image.biblicalLocation}</span>
                </div>

                {/* Botão Ampliar */}
                <button
                  onClick={() => setIsImageModalOpen(true)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 hover:bg-black/90 text-amber-200 hover:text-white border border-white/10 transition-colors"
                  title="Visualizar arte bíblica em tela cheia"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Legenda na base da foto */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-amber-100/90 bg-black/60 backdrop-blur-sm p-2.5 rounded-xl border border-white/5">
                  <p className="font-medium line-clamp-2">{devotional.image.caption}</p>
                </div>
              </div>
            </div>

            {/* 2. Card do Vídeo Animado da História Bíblica */}
            <div className="flex flex-col justify-between p-5 rounded-2xl bg-black/40 border border-amber-700/30 shadow-lg space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    <Video className="w-3 h-3 text-amber-400" /> História Animada do Capítulo
                  </span>
                  <span className="text-[11px] text-amber-300/80 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {devotional.video.duration}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#fef5e7] leading-snug">
                  {devotional.story.title}
                </h3>
                <p className="text-xs text-amber-200/80 font-mono mt-0.5">
                  {devotional.story.chapter}
                </p>

                <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed mt-2 text-justify">
                  {devotional.story.summary}
                </p>

                {/* Contexto histórico rápido */}
                <div className="mt-3 p-3 rounded-xl bg-amber-950/40 border border-amber-800/30 text-[11px] text-amber-200/90 leading-relaxed font-serif">
                  <strong className="text-amber-300 font-sans">Contexto Histórico: </strong>
                  {devotional.story.historicalContext}
                </div>
              </div>

              {/* Botões de Ação do Vídeo */}
              <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                <button
                  onClick={() => setIsVideoOpen(!isVideoOpen)}
                  className="w-full flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-white font-semibold text-xs sm:text-sm shadow-md shadow-amber-950/60 border border-amber-500/40 transition-all"
                >
                  <Play className="w-4 h-4 fill-white" />
                  <span>{isVideoOpen ? 'Fechar Vídeo' : 'Assistir à História Animada'}</span>
                </button>

                <a
                  href={`https://www.youtube.com/watch?v=${devotional.video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white text-xs font-semibold border border-white/10 transition-all shrink-0"
                  title="Abrir no YouTube em nova aba"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Player do Vídeo Incorporado (quando aberto) */}
          {isVideoOpen && (
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/40 bg-black shadow-2xl p-3 sm:p-5 space-y-3 animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-amber-200 px-1 border-b border-white/10 pb-2">
                <span className="font-semibold flex items-center gap-1.5 truncate max-w-md">
                  <Video className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{devotional.video.title}</span>
                  <span className="text-[10px] text-amber-400/80 font-mono">({devotional.video.sourceName})</span>
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://www.youtube.com/watch?v=${devotional.video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-600/30 hover:bg-red-600/50 text-red-200 text-[11px] font-semibold border border-red-500/40 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Ver no YouTube</span>
                  </a>
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="p-1 rounded-lg hover:bg-white/10 text-amber-300 transition-colors"
                    title="Fechar player"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-stone-950">
                <iframe
                  src={devotional.video.embedUrl}
                  title={devotional.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-1 text-[11px] text-amber-200/80">
                <p className="italic">
                  {devotional.video.summary}
                </p>
                <p className="text-[10px] text-stone-400 shrink-0">
                  Dica: Se o vídeo não iniciar devido a bloqueadores de anúncios, use o botão "Ver no YouTube".
                </p>
              </div>
            </div>
          )}

          {/* Mensagem Íntima do Pai para o Filho (Conversa à Mesa de Café) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 via-black/40 to-stone-950/60 border border-amber-700/30 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-amber-800/30 pb-3">
              <Coffee className="w-4 h-4 text-amber-400" />
              <span>Uma Palavra Direto ao Seu Coração (Puxe uma Cadeira com o Pai)</span>
            </div>
            <div className="space-y-3.5 font-serif text-sm sm:text-base leading-relaxed text-[#f3e5d0]/95 text-justify">
              {devotional.fatherMessage.map((p, idx) => (
                <p key={idx} className="indent-5 first:indent-0">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Módulo: Origens Sagradas da Palavra (Hebraico, Aramaico, Grego e Latim) */}
          <div className="space-y-4 rounded-2xl bg-black/40 p-5 sm:p-7 border border-amber-700/30">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-800/30 pb-3">
              <div className="flex items-center gap-2">
                <Languages className="w-5 h-5 text-amber-400" />
                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#fef5e7]">
                  Origem Sagrada da Palavra: Raízes Bíblicas & Históricas
                </h3>
              </div>
              <span className="text-xs text-amber-300/80 font-mono">
                Hebraico • Aramaico • Grego • Latim
              </span>
            </div>

            {/* 4 Cards Linguísticos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Hebraico */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-black/60 border border-amber-600/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                    📜 Hebraico (Tanakh)
                  </span>
                  {devotional.linguisticRoots.hebrew.strongNumber && (
                    <span className="text-[10px] font-mono text-amber-400/80">
                      Strong {devotional.linguisticRoots.hebrew.strongNumber}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-serif text-amber-200 tracking-wide font-bold" dir="rtl">
                    {devotional.linguisticRoots.hebrew.originalScript}
                  </span>
                  <span className="text-xs font-medium text-amber-300 italic">
                    ({devotional.linguisticRoots.hebrew.transliteration})
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-100">
                  {devotional.linguisticRoots.hebrew.meaning}
                </p>
                <p className="text-[11px] text-stone-300 font-serif leading-relaxed text-justify">
                  {devotional.linguisticRoots.hebrew.theologicalDepth}
                </p>
              </div>

              {/* 2. Aramaico */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-black/60 border border-amber-600/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                    🕊️ Aramaico (Dialeto de Jesus)
                  </span>
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-serif text-amber-200 tracking-wide font-bold" dir="rtl">
                    {devotional.linguisticRoots.aramaic.originalScript}
                  </span>
                  <span className="text-xs font-medium text-amber-300 italic">
                    ({devotional.linguisticRoots.aramaic.transliteration})
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-100">
                  {devotional.linguisticRoots.aramaic.meaning}
                </p>
                <p className="text-[11px] text-stone-300 font-serif leading-relaxed text-justify">
                  {devotional.linguisticRoots.aramaic.theologicalDepth}
                </p>
              </div>

              {/* 3. Grego */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-black/60 border border-amber-600/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                    🏛️ Grego Koiné (Novo Testamento)
                  </span>
                  {devotional.linguisticRoots.greek.strongNumber && (
                    <span className="text-[10px] font-mono text-amber-400/80">
                      Strong {devotional.linguisticRoots.greek.strongNumber}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-2xl font-serif text-amber-200 tracking-wide font-bold">
                    {devotional.linguisticRoots.greek.originalScript}
                  </span>
                  <span className="text-xs font-medium text-amber-300 italic">
                    ({devotional.linguisticRoots.greek.transliteration})
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-100">
                  {devotional.linguisticRoots.greek.meaning}
                </p>
                <p className="text-[11px] text-stone-300 font-serif leading-relaxed text-justify">
                  {devotional.linguisticRoots.greek.theologicalDepth}
                </p>
              </div>

              {/* 4. Latim */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-amber-950/40 to-black/60 border border-amber-600/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                    ⚖️ Latim (Vulgata Latina & Patrística)
                  </span>
                </div>
                <div className="flex items-baseline gap-2.5">
                  <span className="text-xl font-serif text-amber-200 tracking-wide font-bold italic">
                    {devotional.linguisticRoots.latin.originalScript}
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-100">
                  {devotional.linguisticRoots.latin.meaning}
                </p>
                <p className="text-[11px] text-stone-300 font-serif leading-relaxed text-justify">
                  {devotional.linguisticRoots.latin.theologicalDepth}
                </p>
              </div>
            </div>
          </div>

          {/* A Chave do Dia (Sua Atitude de Fé Prática) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/90 via-[#3a2215] to-[#25150d] border border-amber-500/40 shadow-lg space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
              <KeyRound className="w-4 h-4 text-amber-400" />
              <span>A Chave do Dia (Sua Atitude de Fé Hoje)</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-amber-100 leading-relaxed font-sans">
              {devotional.keyOfTheDay}
            </p>
          </div>

          {/* Oração à Mesa com o Pai */}
          <div className="p-5 sm:p-6 rounded-2xl bg-black/50 border border-amber-600/30 space-y-2 shadow-inner">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500/30" />
              <span>Oração à Mesa com o Pai</span>
            </div>
            <p className="font-serif italic text-xs sm:text-sm text-stone-300 leading-relaxed text-justify">
              "{devotional.tablePrayer}"
            </p>
          </div>

          {/* Espaço Interativo: Meu Diário Espiritual com o Pai */}
          <div className="pt-4 border-t border-amber-800/40 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <MessageSquareHeart className="w-4 h-4 text-amber-400" />
                Meu Memorial com o Pai (Diário Espiritual Pessoal)
              </label>
              {savedNoteSuccess && (
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" /> Salvo com sucesso!
                </span>
              )}
            </div>

            <div className="relative">
              <textarea
                rows={3}
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="O que o Pai falou ao seu coração hoje? Escreva aqui sua resposta, louvor ou petição para guardar como memorial..."
                className="w-full p-4 text-xs sm:text-sm rounded-2xl bg-black/40 border border-amber-800/40 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 transition-colors"
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors flex items-center gap-1.5"
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Salvar no Meu Memorial</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Imagem Ampliada (Lightbox) */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-stone-950 rounded-3xl overflow-hidden border border-amber-600/40 shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-xs font-bold text-amber-300">
                {devotional.image.biblicalLocation} • {devotional.story.title}
              </span>
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center">
              <img
                src={devotional.image.url}
                alt={devotional.image.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>
            <div className="p-4 bg-black/60 text-xs text-stone-300 font-serif">
              <p className="font-semibold text-amber-200">{devotional.image.caption}</p>
              <p className="mt-1 text-[11px] text-stone-400">{devotional.story.summary}</p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Leitor Kindle para Leitura Imersiva da Devocional */}
      {isKindleOpen && (
        <KindleReaderModal
          isOpen={isKindleOpen}
          onClose={() => setIsKindleOpen(false)}
          title={devotional.title}
          subtitle={`${devotional.dateDisplay} • ${devotional.dayTheme}`}
          authorOrRef={devotional.scriptureRef}
          totalPages={1}
          currentPage={1}
        >
          <div className="space-y-6">
            <div className="text-center pb-4 border-b border-stone-300 dark:border-stone-700">
              <p className="text-xs uppercase tracking-widest font-mono text-amber-700 dark:text-amber-400 mb-1">
                Comunhão com o Pai • {devotional.dayOfWeekName}
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                {devotional.title}
              </h2>
              <p className="text-sm italic font-serif text-stone-600 dark:text-stone-300 mt-1">
                "{devotional.subtitle}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-800/60 border border-amber-200 dark:border-stone-700">
              <p className="text-xs font-bold text-amber-800 dark:text-amber-400 mb-1 uppercase tracking-wider">
                Palavra Revelada ({devotional.scriptureRef})
              </p>
              <p className="font-serif italic text-base text-stone-800 dark:text-stone-200">
                "{devotional.verseText}"
              </p>
            </div>

            <div className="space-y-4 text-justify font-serif text-base sm:text-lg leading-relaxed text-stone-800 dark:text-stone-200">
              <h3 className="font-bold text-lg border-b pb-1 text-amber-900 dark:text-amber-400">
                Uma Conversa ao Seu Coração
              </h3>
              {devotional.fatherMessage.map((p, idx) => (
                <p key={idx} className="indent-6">
                  {p}
                </p>
              ))}
            </div>

            {/* Raízes Sagradas no Kindle */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                Raízes da Palavra (Hebraico, Aramaico, Grego e Latim)
              </h4>
              <ul className="text-xs space-y-2">
                <li>
                  <strong>Hebraico:</strong> {devotional.linguisticRoots.hebrew.originalScript} ({devotional.linguisticRoots.hebrew.transliteration}) — {devotional.linguisticRoots.hebrew.meaning}
                </li>
                <li>
                  <strong>Aramaico:</strong> {devotional.linguisticRoots.aramaic.originalScript} ({devotional.linguisticRoots.aramaic.transliteration}) — {devotional.linguisticRoots.aramaic.meaning}
                </li>
                <li>
                  <strong>Grego:</strong> {devotional.linguisticRoots.greek.originalScript} ({devotional.linguisticRoots.greek.transliteration}) — {devotional.linguisticRoots.greek.meaning}
                </li>
                <li>
                  <strong>Latim:</strong> {devotional.linguisticRoots.latin.originalScript} — {devotional.linguisticRoots.latin.meaning}
                </li>
              </ul>
            </div>

            {/* Chave do Dia e Oração */}
            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-lg bg-amber-100 dark:bg-stone-800">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-400">
                  A Chave do Dia
                </p>
                <p className="text-sm font-sans mt-1 text-stone-800 dark:text-stone-200">
                  {devotional.keyOfTheDay}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-stone-100 dark:bg-stone-800/80">
                <p className="text-xs font-bold uppercase tracking-wider text-rose-800 dark:text-rose-400">
                  Oração à Mesa
                </p>
                <p className="text-sm italic font-serif mt-1 text-stone-700 dark:text-stone-300">
                  "{devotional.tablePrayer}"
                </p>
              </div>
            </div>
          </div>
        </KindleReaderModal>
      )}
    </>
  );
};

