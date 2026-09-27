import React, { useState, useRef, useEffect } from 'react';
import { GOSPEL_RADIOS, CHRISTIAN_PODCASTS, GospelRadio, ChristianPodcast } from '../../data/radiosAndPodcasts';
import { Radio, Play, Pause, Volume2, VolumeX, Mic, ExternalLink, Sparkles, Heart, Signal, Headphones, Share2, Check, Clock, ShieldCheck, Flame, BookOpen } from 'lucide-react';

export const RadiosAndPodcastsView: React.FC = () => {
  const [activeRadio, setActiveRadio] = useState<GospelRadio>(GOSPEL_RADIOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'radios' | 'podcasts'>('all');
  const [sleepTimerMinutes, setSleepTimerMinutes] = useState<number | null>(null);
  const [sleepTimerRemaining, setSleepTimerRemaining] = useState<number | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sleepTimerRef = useRef<any>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Gerenciamento do Sleep Timer
  useEffect(() => {
    if (sleepTimerMinutes === null) {
      if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
      setSleepTimerRemaining(null);
      return;
    }

    let remainingSeconds = sleepTimerMinutes * 60;
    setSleepTimerRemaining(remainingSeconds);

    if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);

    sleepTimerRef.current = setInterval(() => {
      remainingSeconds -= 1;
      if (remainingSeconds <= 0) {
        if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
        if (audioRef.current) {
          audioRef.current.pause();
        }
        setIsPlaying(false);
        setSleepTimerMinutes(null);
        setSleepTimerRemaining(null);
      } else {
        setSleepTimerRemaining(remainingSeconds);
      }
    }, 1000);

    return () => {
      if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
    };
  }, [sleepTimerMinutes]);

  const handleSelectRadio = (radio: GospelRadio) => {
    setActiveRadio(radio);
    setIsLoadingAudio(true);
    if (audioRef.current) {
      audioRef.current.src = radio.streamUrl;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoadingAudio(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoadingAudio(false);
        });
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setIsLoadingAudio(true);
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setIsLoadingAudio(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoadingAudio(false);
        });
    }
  };

  const handleShareApp = () => {
    navigator.clipboard.writeText(
      `📻 Estou ouvindo a ${activeRadio.name} (${activeRadio.frequency}) no aplicativo O Mundo Cristão! Acesse: https://o-mundo-cristao.vercel.app`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="space-y-6 pb-16 animate-fadeIn">
      {/* Elemento de Áudio HTML5 Nativo em Segundo Plano */}
      <audio
        ref={audioRef}
        src={activeRadio.streamUrl}
        preload="none"
        onWaiting={() => setIsLoadingAudio(true)}
        onPlaying={() => {
          setIsLoadingAudio(false);
          setIsPlaying(true);
        }}
        onError={() => {
          setIsLoadingAudio(false);
          setIsPlaying(false);
        }}
      />

      {/* Header Compacto */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Radio className="w-4 h-4" /> Louvor 24h & Podcasts Cristocêntricos
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>Rádios Gospel & Podcasts Cristãos</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Sintonize emissoras evangélicas ao vivo e podcasts de sã doutrina (sem heresias, com foco em Cristo e exegese bíblica).
          </p>
        </div>

        {/* Filtros de Aba */}
        <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 p-1 rounded-2xl text-xs font-semibold self-start sm:self-center">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-stone-900 text-amber-800 dark:text-amber-300 shadow-sm font-bold'
                : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveTab('radios')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'radios'
                ? 'bg-white dark:bg-stone-900 text-amber-800 dark:text-amber-300 shadow-sm font-bold'
                : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Rádios ao Vivo
          </button>
          <button
            onClick={() => setActiveTab('podcasts')}
            className={`px-3 py-1.5 rounded-xl transition-all ${
              activeTab === 'podcasts'
                ? 'bg-white dark:bg-stone-900 text-amber-800 dark:text-amber-300 shadow-sm font-bold'
                : 'text-stone-600 dark:text-stone-400'
            }`}
          >
            Podcasts Sã Doutrina
          </button>
        </div>
      </div>

      {/* Player Principal de Rádio em Destaque (Fluido e Compacto) */}
      <div className="rounded-3xl bg-gradient-to-br from-[#170e09] via-stone-950 to-[#1e1008] text-white p-5 sm:p-7 border border-amber-900/40 shadow-xl space-y-5 relative overflow-hidden">
        {/* Glow de Fundo */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {/* Ícone de Rádio com Efeito Equalizador */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-lg shadow-amber-950/60 shrink-0">
              {isPlaying ? (
                <div className="flex items-end gap-1 h-6">
                  <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.3s] h-4" />
                  <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.15s] h-6" />
                  <span className="w-1 bg-white rounded-full animate-bounce h-3" />
                  <span className="w-1 bg-white rounded-full animate-bounce [animation-delay:-0.2s] h-5" />
                </div>
              ) : (
                <Radio className="w-7 h-7 stroke-[2]" />
              )}
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
                  {activeRadio.badge}
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  {activeRadio.frequency} • {activeRadio.location}
                </span>
              </div>
              <h2 className="font-serif font-bold text-lg sm:text-xl text-amber-100">
                {activeRadio.name}
              </h2>
              <p className="text-xs text-stone-300 mt-0.5 max-w-md line-clamp-1 sm:line-clamp-2">
                {activeRadio.description}
              </p>
            </div>
          </div>

          {/* Controles de Reprodução, Volume e Sleep Timer */}
          <div className="flex flex-wrap items-center gap-3 self-stretch md:self-center justify-between md:justify-end">
            {/* Botão Play / Pause */}
            <button
              onClick={togglePlayPause}
              disabled={isLoadingAudio}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-amber-950/50 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {isLoadingAudio ? (
                <span>Conectando...</span>
              ) : isPlaying ? (
                <>
                  <Pause className="w-4 h-4 fill-white" />
                  <span>Pausar</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                  <span>Ouvir Ao Vivo</span>
                </>
              )}
            </button>

            {/* Controle de Volume */}
            <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl border border-white/10">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-stone-300 hover:text-white"
                title={isMuted ? 'Desmutar' : 'Mutar'}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                className="w-16 sm:w-20 accent-amber-500 cursor-pointer"
                title="Ajustar volume"
              />
            </div>

            {/* Sleep Timer */}
            <div className="flex items-center gap-1 bg-black/40 px-2.5 py-1.5 rounded-xl border border-white/10 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              {sleepTimerRemaining !== null ? (
                <button
                  onClick={() => setSleepTimerMinutes(null)}
                  className="text-amber-300 font-mono font-bold hover:underline"
                  title="Clique para cancelar o timer"
                >
                  {formatTimer(sleepTimerRemaining)}
                </button>
              ) : (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setSleepTimerMinutes(15)}
                    className="px-1 text-[11px] text-stone-300 hover:text-amber-300"
                    title="Desligar em 15 minutos"
                  >
                    15m
                  </button>
                  <span className="text-stone-600">|</span>
                  <button
                    onClick={() => setSleepTimerMinutes(30)}
                    className="px-1 text-[11px] text-stone-300 hover:text-amber-300"
                    title="Desligar em 30 minutos"
                  >
                    30m
                  </button>
                  <span className="text-stone-600">|</span>
                  <button
                    onClick={() => setSleepTimerMinutes(60)}
                    className="px-1 text-[11px] text-stone-300 hover:text-amber-300"
                    title="Desligar em 60 minutos"
                  >
                    60m
                  </button>
                </div>
              )}
            </div>

            {/* Compartilhar */}
            <button
              onClick={handleShareApp}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-stone-200 transition-colors"
              title="Compartilhar rádio"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Rodapé Informativo */}
        <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-amber-200/80 pt-2.5 border-t border-white/10 gap-2">
          <span className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Transmissão contínua em segundo plano enquanto você estuda a Palavra.
          </span>
          <span className="text-white/60 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            Programação e podcasts com fidelidade bíblica e sã doutrina.
          </span>
        </div>
      </div>

      {/* SEÇÃO 1: RÁDIOS GOSPEL AO VIVO */}
      {(activeTab === 'all' || activeTab === 'radios') && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Emissoras Evangélicas ao Vivo
              </h2>
            </div>
            <span className="text-xs text-stone-500">{GOSPEL_RADIOS.length} rádios</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {GOSPEL_RADIOS.map((radio) => {
              const isCurrent = activeRadio.id === radio.id;
              return (
                <div
                  key={radio.id}
                  onClick={() => handleSelectRadio(radio)}
                  className={`p-4 rounded-2xl cursor-pointer border transition-all text-left group flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-500 shadow-sm ring-2 ring-amber-500/20'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        {radio.badge}
                      </span>
                      <span className="font-mono text-[11px] font-bold text-amber-700 dark:text-amber-400">
                        {radio.frequency}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {radio.name}
                    </h3>

                    <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                      {radio.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold">
                    <span className="text-stone-400 text-[11px]">{radio.location}</span>
                    <span className="text-amber-700 dark:text-amber-400 group-hover:underline flex items-center gap-1">
                      {isCurrent && isPlaying ? 'Tocando agora' : 'Sintonizar'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* SEÇÃO 2: PODCASTS CRISTOCÊNTRICOS E SEM HERESIAS */}
      {(activeTab === 'all' || activeTab === 'podcasts') && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Headphones className="w-4 h-4 text-amber-700 dark:text-amber-400" />
              <h2 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Podcasts Cristocêntricos & Sã Doutrina (Sem Heresias)
              </h2>
            </div>
            <span className="text-xs text-stone-500">{CHRISTIAN_PODCASTS.length} programas</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CHRISTIAN_PODCASTS.map((podcast) => (
              <div
                key={podcast.id}
                className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{podcast.coverEmoji}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      {podcast.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                      {podcast.hostOrMinistry}
                    </p>
                  </div>

                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-3 leading-relaxed">
                    {podcast.description}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {podcast.topics.slice(0, 2).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] text-stone-600 dark:text-stone-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                  <span className="text-[10px] text-stone-400">{podcast.durationAvg}</span>
                  <a
                    href={podcast.spotifyOrWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 dark:text-amber-400 hover:underline"
                  >
                    <span>Ouvir Episódios</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
