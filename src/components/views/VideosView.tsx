import React, { useState, useEffect } from 'react';
import { INITIAL_CHRISTIAN_VIDEOS, ChristianVideo } from '../../data/christianVideos';
import { Play, Plus, Search, Video, Trash2, X, Sparkles, Flame, BookOpen, Music, Check, ExternalLink } from 'lucide-react';

const STORAGE_KEY_CUSTOM_VIDEOS = 'omc_custom_videos_v1';

export const VideosView: React.FC = () => {
  const [videos, setVideos] = useState<ChristianVideo[]>([]);
  const [activeVideo, setActiveVideo] = useState<ChristianVideo | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form de novo vídeo
  const [videoUrl, setVideoUrl] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoSpeaker, setVideoSpeaker] = useState('');
  const [videoCategory, setVideoCategory] = useState<'pregacoes' | 'teologia' | 'historia-imw' | 'louvores'>('pregacoes');
  const [videoDuration, setVideoDuration] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_VIDEOS);
      const custom: ChristianVideo[] = saved ? JSON.parse(saved) : [];
      const combined = [...custom, ...INITIAL_CHRISTIAN_VIDEOS];
      setVideos(combined);
      if (combined.length > 0) {
        setActiveVideo(combined[0]);
      }
    } catch {
      setVideos(INITIAL_CHRISTIAN_VIDEOS);
      if (INITIAL_CHRISTIAN_VIDEOS.length > 0) {
        setActiveVideo(INITIAL_CHRISTIAN_VIDEOS[0]);
      }
    }
  }, []);

  const extractYoutubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const handleAddVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim() || !videoTitle.trim()) return;

    const ytId = extractYoutubeId(videoUrl);

    const newVideo: ChristianVideo = {
      id: `custom-vid-${Date.now()}`,
      youtubeId: ytId,
      title: videoTitle,
      speakerOrAuthor: videoSpeaker || 'Ministério Cristão',
      category: videoCategory,
      duration: videoDuration || 'Vídeo',
      description: 'Vídeo adicionado aos seus estudos e momentos de edificação.',
      isCustom: true
    };

    const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_VIDEOS);
    const customList: ChristianVideo[] = saved ? JSON.parse(saved) : [];
    const updatedCustom = [newVideo, ...customList];
    localStorage.setItem(STORAGE_KEY_CUSTOM_VIDEOS, JSON.stringify(updatedCustom));

    const updatedAll = [newVideo, ...videos];
    setVideos(updatedAll);
    setActiveVideo(newVideo);
    setIsModalOpen(false);

    // Reset
    setVideoUrl('');
    setVideoTitle('');
    setVideoSpeaker('');
    setVideoDuration('');
  };

  const handleDeleteVideo = (id: string) => {
    const saved = localStorage.getItem(STORAGE_KEY_CUSTOM_VIDEOS);
    const customList: ChristianVideo[] = saved ? JSON.parse(saved) : [];
    const updatedCustom = customList.filter(v => v.id !== id);
    localStorage.setItem(STORAGE_KEY_CUSTOM_VIDEOS, JSON.stringify(updatedCustom));

    const updatedAll = videos.filter(v => v.id !== id);
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

  const filteredVideos = videos.filter(v => {
    const matchesCat = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesQuery = v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         v.speakerOrAuthor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Video className="w-4 h-4" /> Conteúdo Audiovisual Edificante
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Vídeos & Mensagens Cristãs
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Pregações bíblicas, documentários históricos da IMW e estudos wesleyanos com player integrado.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-amber-900/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>+ Adicionar Vídeo do YouTube</span>
        </button>
      </div>

      {/* Player de Vídeo em Destaque */}
      {activeVideo && (
        <section className="bg-white dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md">
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
              title={activeVideo.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="p-6 sm:p-8 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                {activeVideo.category} • {activeVideo.duration}
              </span>
              {activeVideo.isCustom && (
                <button
                  onClick={() => handleDeleteVideo(activeVideo.id)}
                  className="text-xs text-rose-500 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Excluir da Minha Lista
                </button>
              )}
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100">
              {activeVideo.title}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-400">
              Por: {activeVideo.speakerOrAuthor}
            </p>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 pt-2 leading-relaxed">
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
            placeholder="Buscar por título, pregador, documentário..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700'
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
          return (
            <div
              key={video.id}
              onClick={() => {
                setActiveVideo(video);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`group cursor-pointer rounded-2xl bg-white dark:bg-stone-900 border overflow-hidden transition-all shadow-sm hover:shadow-lg ${
                isCurrent
                  ? 'border-amber-600 ring-2 ring-amber-500/40'
                  : 'border-stone-200 dark:border-stone-800 hover:border-amber-400'
              }`}
            >
              {/* Miniatura do YouTube */}
              <div className="relative aspect-video bg-stone-900 overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback se a imagem falhar
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-amber-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 ml-0.5 fill-white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-[10px] font-bold bg-black/80 text-white font-mono">
                  {video.duration}
                </span>
              </div>

              {/* Informações */}
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {video.category}
                </span>
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

      {/* Modal Adicionar Vídeo do YouTube */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Video className="w-5 h-5 text-amber-600" />
                Adicionar Vídeo do YouTube
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Link ou URL do Vídeo no YouTube *
                </label>
                <input
                  type="text"
                  required
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=... ou https://youtu.be/..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Título do Vídeo *
                </label>
                <input
                  type="text"
                  required
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  placeholder="Ex: O Mover do Espírito Santo na IMW"
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Pregador / Canal
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
                    Duração
                  </label>
                  <input
                    type="text"
                    value={videoDuration}
                    onChange={(e) => setVideoDuration(e.target.value)}
                    placeholder="Ex: 35 min"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Categoria
                </label>
                <select
                  value={videoCategory}
                  onChange={(e) => setVideoCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="pregacoes">Pregações & Mensagens</option>
                  <option value="teologia">Estudos & Teologia</option>
                  <option value="historia-imw">História da IMW & Documentários</option>
                  <option value="louvores">Louvores & Hinos</option>
                </select>
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
                  className="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Salvar na Minha Playlist
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
