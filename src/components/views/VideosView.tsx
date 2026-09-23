import React, { useState, useEffect } from 'react';
import { INITIAL_CHRISTIAN_VIDEOS, ChristianVideo } from '../../data/christianVideos';
import { videoStorageService } from '../../services/videoStorageService';
import { storageService } from '../../services/storageService';
import { Play, Plus, Search, Video, Trash2, X, Sparkles, HardDrive, Smartphone, Monitor, Youtube, Film, Check, AlertCircle } from 'lucide-react';

export const VideosView: React.FC = () => {
  const [videos, setVideos] = useState<ChristianVideo[]>([]);
  const [activeVideo, setActiveVideo] = useState<ChristianVideo | null>(null);
  const [activeBlobUrl, setActiveBlobUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSourceTab, setModalSourceTab] = useState<'local' | 'youtube'>('local');

  // Form states
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoSpeaker, setVideoSpeaker] = useState('');
  const [videoCategory, setVideoCategory] = useState<'pregacoes' | 'teologia' | 'historia-imw' | 'louvores'>('pregacoes');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Carrega vídeos iniciais combinados com os vídeos privados da conta
  const loadVideos = () => {
    try {
      const storageKey = storageService.getUserStorageKey('custom_videos_v1');
      const saved = localStorage.getItem(storageKey);
      const custom: ChristianVideo[] = saved ? JSON.parse(saved) : [];
      const combined = [...custom, ...INITIAL_CHRISTIAN_VIDEOS];
      setVideos(combined);
      if (combined.length > 0 && !activeVideo) {
        setActiveVideo(combined[0]);
      }
    } catch {
      setVideos(INITIAL_CHRISTIAN_VIDEOS);
      if (INITIAL_CHRISTIAN_VIDEOS.length > 0 && !activeVideo) {
        setActiveVideo(INITIAL_CHRISTIAN_VIDEOS[0]);
      }
    }
  };

  useEffect(() => {
    loadVideos();
  }, []);

  // Quando o vídeo ativo muda, se for local, carrega o blob do IndexedDB
  useEffect(() => {
    let isCancelled = false;

    async function loadActiveVideoBlob() {
      if (!activeVideo) {
        setActiveBlobUrl(null);
        return;
      }

      if (activeVideo.sourceType === 'local' && activeVideo.localFileId) {
        try {
          const url = await videoStorageService.getVideoUrl(activeVideo.localFileId);
          if (!isCancelled) {
            setActiveBlobUrl(url);
          }
        } catch {
          if (!isCancelled) setActiveBlobUrl(null);
        }
      } else {
        setActiveBlobUrl(null);
      }
    }

    loadActiveVideoBlob();

    return () => {
      isCancelled = true;
    };
  }, [activeVideo]);

  const extractYoutubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : url;
  };

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitle.trim()) return;

    setIsSaving(true);

    try {
      let newVideo: ChristianVideo;
      const storageKey = storageService.getUserStorageKey('custom_videos_v1');
      const saved = localStorage.getItem(storageKey);
      const customList: ChristianVideo[] = saved ? JSON.parse(saved) : [];

      if (modalSourceTab === 'local') {
        if (!videoFile) {
          alert('Por favor, selecione um arquivo de vídeo do seu computador ou celular.');
          setIsSaving(false);
          return;
        }

        const fileId = `loc_vid_${Date.now()}`;
        // Salva o arquivo real de alta capacidade no IndexedDB
        await videoStorageService.saveVideoFile(fileId, videoFile, videoFile.name);

        const fileSizeMB = (videoFile.size / (1024 * 1024)).toFixed(1);

        newVideo = {
          id: `custom-local-${Date.now()}`,
          sourceType: 'local',
          localFileId: fileId,
          localFileName: videoFile.name,
          localFileSize: `${fileSizeMB} MB`,
          title: videoTitle.trim(),
          speakerOrAuthor: videoSpeaker.trim() || 'Meu Arquivo Pessoal',
          category: videoCategory,
          duration: `${fileSizeMB} MB • Local`,
          description: 'Vídeo importado da pasta do seu computador ou galeria do telefone. Fica guardado exclusivamente na sua conta privada com suporte a reprodução offline.',
          isCustom: true
        };
      } else {
        if (!videoUrl.trim()) {
          alert('Por favor, informe a URL do YouTube.');
          setIsSaving(false);
          return;
        }

        const ytId = extractYoutubeId(videoUrl);
        newVideo = {
          id: `custom-yt-${Date.now()}`,
          sourceType: 'youtube',
          youtubeId: ytId,
          title: videoTitle.trim(),
          speakerOrAuthor: videoSpeaker.trim() || 'Ministério Cristão',
          category: videoCategory,
          duration: 'YouTube',
          description: 'Vídeo do YouTube salvo em sua coleção pessoal.',
          isCustom: true
        };
      }

      const updatedCustom = [newVideo, ...customList];
      localStorage.setItem(storageKey, JSON.stringify(updatedCustom));

      const updatedAll = [newVideo, ...videos];
      setVideos(updatedAll);
      setActiveVideo(newVideo);
      setSaveSuccessMsg('Vídeo adicionado com sucesso!');
      setTimeout(() => setSaveSuccessMsg(''), 2500);

      // Limpar formulário
      setVideoFile(null);
      setVideoUrl('');
      setVideoTitle('');
      setVideoSpeaker('');
      setIsModalOpen(false);
    } catch (err: any) {
      alert('Erro ao salvar vídeo: ' + err.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteVideo = async (id: string, localFileId?: string) => {
    if (!window.confirm('Tem certeza de que deseja remover este vídeo da sua lista?')) return;

    if (localFileId) {
      await videoStorageService.deleteVideoFile(localFileId);
    }

    const storageKey = storageService.getUserStorageKey('custom_videos_v1');
    const saved = localStorage.getItem(storageKey);
    const customList: ChristianVideo[] = saved ? JSON.parse(saved) : [];
    const updatedCustom = customList.filter((v) => v.id !== id);
    localStorage.setItem(storageKey, JSON.stringify(updatedCustom));

    const updatedAll = videos.filter((v) => v.id !== id);
    setVideos(updatedAll);
    if (activeVideo?.id === id) {
      setActiveVideo(updatedAll[0] || null);
    }
  };

  const categories = [
    { id: 'all', label: 'Todos os Vídeos' },
    { id: 'pregacoes', label: 'Pregações & Mensagens' },
    { id: 'teologia', label: 'Estudos & Teologia' },
    { id: 'historia-imw', label: 'História da IMW & Documentários' },
    { id: 'louvores', label: 'Louvores & Hinos' },
  ];

  const filteredVideos = videos.filter((v) => {
    const matchesCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesQuery =
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.speakerOrAuthor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header da Tela */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Film className="w-4 h-4" /> Videoteca & Mídia Pessoal
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Vídeos & Mensagens Cristãs
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Assista a documentários históricos, estudos wesleyanos ou carregue seus próprios vídeos do PC e celular com privacidade total.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-amber-900/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Adicionar Vídeo (PC, Celular ou YouTube)</span>
        </button>
      </div>

      {saveSuccessMsg && (
        <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{saveSuccessMsg}</span>
        </div>
      )}

      {/* Player Principal em Destaque */}
      {activeVideo && (
        <section className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-xl">
          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            {activeVideo.sourceType === 'local' ? (
              activeBlobUrl ? (
                <video
                  key={activeBlobUrl}
                  src={activeBlobUrl}
                  controls
                  playsInline
                  className="w-full h-full object-contain bg-black"
                >
                  Seu navegador não suporta a reprodução deste formato de vídeo.
                </video>
              ) : (
                <div className="text-center p-6 text-stone-400 space-y-2">
                  <Film className="w-12 h-12 mx-auto text-amber-500 animate-pulse" />
                  <p className="text-xs sm:text-sm">Carregando vídeo do armazenamento local...</p>
                </div>
              )
            ) : (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="p-6 sm:p-8 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {activeVideo.category}
                </span>

                {activeVideo.sourceType === 'local' ? (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-400/30">
                    <HardDrive className="w-3 h-3" /> Vídeo do Seu Aparelho (Offline)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-300">
                    <Youtube className="w-3 h-3" /> Transmissão do YouTube
                  </span>
                )}
              </div>

              {activeVideo.isCustom && (
                <button
                  onClick={() => handleDeleteVideo(activeVideo.id, activeVideo.localFileId)}
                  className="text-xs text-rose-500 hover:text-rose-600 hover:underline flex items-center gap-1 font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Excluir da Minha Conta
                </button>
              )}
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              {activeVideo.title}
            </h2>

            <p className="text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-400">
              Por: {activeVideo.speakerOrAuthor} {activeVideo.localFileSize && `• Tamanho: ${activeVideo.localFileSize}`}
            </p>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 pt-1 leading-relaxed">
              {activeVideo.description}
            </p>
          </div>
        </section>
      )}

      {/* Busca e Filtros */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por título, pregador, documentário ou seus vídeos locais..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grade de Vídeos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((video) => {
          const isCurrent = activeVideo?.id === video.id;
          const isLocal = video.sourceType === 'local';

          return (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group cursor-pointer rounded-2xl bg-white dark:bg-stone-900 border overflow-hidden transition-all shadow-sm hover:shadow-xl ${
                isCurrent
                  ? 'border-amber-600 ring-2 ring-amber-500/40'
                  : 'border-stone-200 dark:border-stone-800 hover:border-amber-400'
              }`}
            >
              {/* Miniatura */}
              <div className="relative aspect-video bg-stone-900 overflow-hidden flex items-center justify-center">
                {isLocal ? (
                  <div className="w-full h-full bg-gradient-to-br from-stone-800 via-stone-900 to-amber-950 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-2">
                      <Film className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-medium text-stone-300 line-clamp-1">
                      {video.localFileName || video.title}
                    </span>
                    <span className="text-[9px] text-emerald-400 mt-1 uppercase font-bold tracking-wider">
                      Vídeo do Aparelho (PC/Celular)
                    </span>
                  </div>
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                )}

                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-amber-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>

                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-black/80 text-white font-mono">
                  {video.duration}
                </span>
              </div>

              {/* Informações do Card */}
              <div className="p-4 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-amber-700 dark:text-amber-400">{video.category}</span>
                  {isLocal && (
                    <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                      <HardDrive className="w-3 h-3" /> Local
                    </span>
                  )}
                </div>

                <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 line-clamp-2 leading-snug group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {video.title}
                </h3>

                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {video.speakerOrAuthor}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal Adicionar Vídeo (PC, Celular ou YouTube) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Video className="w-5 h-5 text-amber-600" />
                  Adicionar Vídeo
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Escolha se deseja enviar do seu aparelho ou colar um link do YouTube.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Alternador de Origem (Aparelho vs YouTube) */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setModalSourceTab('local')}
                className={`py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  modalSourceTab === 'local'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                <Smartphone className="w-4 h-4 text-emerald-600" />
                <span>Do PC ou Celular</span>
              </button>
              <button
                type="button"
                onClick={() => setModalSourceTab('youtube')}
                className={`py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all ${
                  modalSourceTab === 'youtube'
                    ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                    : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
                }`}
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Link do YouTube</span>
              </button>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-4">
              {modalSourceTab === 'local' ? (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Selecionar Arquivo de Vídeo do Aparelho *
                  </label>
                  <div className="border-2 border-dashed border-stone-300 dark:border-stone-700 rounded-2xl p-4 text-center hover:border-amber-500 transition-colors bg-stone-50 dark:bg-stone-800/50">
                    <input
                      type="file"
                      id="video-file-input"
                      accept="video/mp4,video/webm,video/quicktime,video/mkv,video/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setVideoFile(file);
                          if (!videoTitle) {
                            setVideoTitle(file.name.replace(/\.[^/.]+$/, ''));
                          }
                        }
                      }}
                      className="hidden"
                    />
                    <label
                      htmlFor="video-file-input"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-700 dark:text-amber-400">
                        <HardDrive className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                        {videoFile ? `Arquivo selecionado: ${videoFile.name}` : 'Toque para escolher da pasta do PC ou galeria do telefone'}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        Suporta MP4, WEBM, MOV, MKV. Armazenado de forma segura no seu aparelho.
                      </span>
                    </label>
                  </div>
                </div>
              ) : (
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Link do Vídeo no YouTube *
                  </label>
                  <input
                    type="text"
                    required={modalSourceTab === 'youtube'}
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              )}

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Título do Vídeo *
                </label>
                <input
                  type="text"
                  required
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="Ex: Mensagem sobre a Oração e Fé"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Pregador / Autor
                  </label>
                  <input
                    type="text"
                    value={videoSpeaker}
                    onChange={(e) => setVideoSpeaker(e.target.value)}
                    placeholder="Ex: Pastor ..."
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Categoria
                  </label>
                  <select
                    value={videoCategory}
                    onChange={(e) => setVideoCategory(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="pregacoes">Pregações & Mensagens</option>
                    <option value="teologia">Estudos & Teologia</option>
                    <option value="historia-imw">História da IMW</option>
                    <option value="louvores">Louvores & Hinos</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-[11px] text-stone-600 dark:text-stone-300">
                🔒 <strong>Privacidade Garantida:</strong> Este vídeo fica armazenado estritamente na sua conta. Ninguém mais poderá vê-lo.
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors disabled:opacity-50"
                >
                  {isSaving ? 'Gravando arquivo...' : 'Salvar na Minha Coleção'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
