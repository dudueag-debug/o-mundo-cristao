import React, { useState, useRef, useEffect } from 'react';
import { GOSPEL_RADIOS, CHRISTIAN_PODCASTS, GospelRadio, ChristianPodcast } from '../../data/radiosAndPodcasts';
import { Radio, Play, Pause, Volume2, VolumeX, Mic, ExternalLink, Sparkles, Heart, Signal, Headphones, Share2, Check } from 'lucide-react';

export const RadiosAndPodcastsView: React.FC = () => {
  const [activeRadio, setActiveRadio] = useState<GospelRadio>(GOSPEL_RADIOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoadingAudio, setIsLoadingAudio] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

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

  return (
    <div className="space-y-8 pb-12 animate-fadeIn">
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

      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Radio className="w-4 h-4" /> Louvor & Palavra 24 Horas
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>Rádios Gospel & Podcasts Cristãos</span>
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Sintonize as maiores emissoras evangélicas do Brasil e ouça podcasts de sã doutrina para edificar o seu espírito — com Cristo sempre no centro.
        </p>
      </div>

      {/* Player Principal de Rádio em Destaque */}
      <div className="rounded-3xl bg-gradient-to-br from-stone-900 via-stone-950 to-amber-950 text-white p-6 sm:p-8 border border-amber-900/40 shadow-2xl space-y-6 relative overflow-hidden">
        {/* Efeito Glow de Fundo */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Ícone de Rádio com Animação de Onda quando Toca */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white shadow-xl shadow-amber-950/60 shrink-0">
              <Radio className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.2]" />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500" />
                </span>
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
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-amber-100">
                {activeRadio.name}
              </h2>
              <p className="text-xs text-stone-300 mt-1 max-w-md">
                {activeRadio.description}
              </p>
            </div>
          </div>

          {/* Controles de Reprodução e Volume */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 self-stretch sm:self-center justify-end">
            {/* Botão Play / Pause */}
            <button
              onClick={togglePlayPause}
              disabled={isLoadingAudio}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-sm shadow-xl shadow-amber-950/50 transition-all transform active:scale-95 disabled:opacity-50"
            >
              {isLoadingAudio ? (
                <span>Conectando...</span>
              ) : isPlaying ? (
                <>
                  <Pause className="w-5 h-5 fill-white" />
                  <span>Pausar Rádio</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                  <span>Ouvir Ao Vivo</span>
                </>
              )}
            </button>

            {/* Controle de Volume */}
            <div className="flex items-center gap-2 bg-black/40 px-3.5 py-2 rounded-2xl border border-white/10">
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
                className="w-20 accent-amber-500 cursor-pointer"
                title="Ajustar volume"
              />
            </div>

            {/* Compartilhar */}
            <button
              onClick={handleShareApp}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 text-stone-200 transition-colors"
              title="Compartilhar rádio"
            >
              {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Rodapé Informativo: Áudio em Segundo Plano */}
        <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] text-amber-200/80 pt-3 border-t border-white/10 gap-2">
          <span className="flex items-center gap-1.5">
            <Signal className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            Transmissão contínua em segundo plano enquanto você lê a Bíblia e os hinos.
          </span>
          <span className="italic text-white/50">
            "Que Deus seja o centro de cada canção!"
          </span>
        </div>
      </div>

      {/* Seção 1: Lista de Rádios Gospel */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Radio className="w-5 h-5 text-amber-700 dark:text-amber-400" />
          <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
            Estações de Rádio Disponíveis
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GOSPEL_RADIOS.map((radio) => {
            const isCurrent = activeRadio.id === radio.id;
            return (
              <div
                key={radio.id}
                onClick={() => handleSelectRadio(radio)}
                className={`p-5 rounded-3xl cursor-pointer border transition-all text-left group flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-amber-50 dark:bg-stone-800 border-amber-600 shadow-md ring-2 ring-amber-500/30'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400 shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {radio.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-500 dark:text-stone-400">
                      {radio.frequency}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {radio.name}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    {radio.location}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-300 pt-1 line-clamp-2 leading-relaxed">
                    {radio.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between mt-3 text-xs font-semibold">
                  <span className="text-amber-700 dark:text-amber-400 group-hover:underline">
                    {isCurrent && isPlaying ? '● Tocando Agora' : 'Sintonizar Estação'}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isCurrent && isPlaying
                        ? 'bg-amber-700 text-white'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 group-hover:bg-amber-700 group-hover:text-white'
                    }`}
                  >
                    {isCurrent && isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seção 2: Podcasts Cristãos Edificantes */}
      <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
        <div>
          <div className="flex items-center gap-2">
            <Headphones className="w-5 h-5 text-amber-700 dark:text-amber-400" />
            <h2 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
              Podcasts Cristãos de Confiança
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-0.5">
            Conteúdo teológico, bíblico e devocional selecionado com rigor doutrinário e foco em Cristo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CHRISTIAN_PODCASTS.map((pod) => (
            <div
              key={pod.id}
              className="bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4 hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-2xl flex items-center justify-center shrink-0 shadow-inner">
                    {pod.coverEmoji}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-snug">
                      {pod.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                      Por: {pod.hostOrMinistry} • Duração Média: {pod.durationAvg}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {pod.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {pod.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[10px] text-stone-600 dark:text-stone-300 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-end">
                <a
                  href={pod.spotifyOrWebUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-300 dark:border-amber-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Acessar Episódios</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
