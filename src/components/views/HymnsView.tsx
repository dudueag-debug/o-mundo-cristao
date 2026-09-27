import React, { useState, useEffect } from 'react';
import { COMPLETE_HYMNAL, DetailedHymn } from '../../data/hymnalData';
import { Music, Search, Volume2, Square, Copy, Check, Type, Flame, Sparkles } from 'lucide-react';

export const HymnsView: React.FC = () => {
  const [selectedHymn, setSelectedHymn] = useState<DetailedHymn>(COMPLETE_HYMNAL[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedHymn, setCopiedHymn] = useState(false);
  const [isSpeakingHymn, setIsSpeakingHymn] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleStopHymnAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeakingHymn(false);
  };

  const handleSpeakHymn = () => {
    if (!('speechSynthesis' in window)) {
      alert('Síntese de voz não suportada neste navegador.');
      return;
    }

    if (isSpeakingHymn) {
      handleStopHymnAudio();
      return;
    }

    handleStopHymnAudio();
    setIsSpeakingHymn(true);

    const fullHymnText = `${selectedHymn.title}, número ${selectedHymn.number}. ${selectedHymn.lyrics.join('. ')}. Refrão: ${selectedHymn.chorus || ''}`;
    const utterance = new SpeechSynthesisUtterance(fullHymnText);
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;

    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang === 'pt-BR' || v.lang.startsWith('pt'));
    if (ptVoice) utterance.voice = ptVoice;

    utterance.onend = () => {
      setIsSpeakingHymn(false);
    };
    utterance.onerror = () => {
      setIsSpeakingHymn(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const filteredHymns = COMPLETE_HYMNAL.filter((h) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      (selectedCategory === 'harpa' && h.category === 'harpa') ||
      (selectedCategory === 'wesleyano' && (h.category === 'wesleyano' || h.category === 'imw-oficial')) ||
      (selectedCategory === 'classico' && h.category === 'classico');

    const query = searchQuery.toLowerCase().trim();
    const matchesQuery =
      h.title.toLowerCase().includes(query) ||
      h.number.toString().includes(query) ||
      h.author.toLowerCase().includes(query) ||
      h.biblicalTheme.toLowerCase().includes(query) ||
      h.lyrics.some(v => v.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  const handleCopyLyrics = () => {
    let text = `🎶 ${selectedHymn.title} (Nº ${selectedHymn.number})\n`;
    text += `Autor: ${selectedHymn.author} • ${selectedHymn.categoryLabel}\n`;
    text += `Tema: ${selectedHymn.biblicalTheme}\n\n`;

    selectedHymn.lyrics.forEach((verse, idx) => {
      text += `[Estrofe ${idx + 1}]\n${verse}\n\n`;
    });

    if (selectedHymn.chorus) {
      text += `[Coro / Refrão]\n${selectedHymn.chorus}\n\n`;
    }

    text += `— Compartilhado via O Mundo Cristão`;
    navigator.clipboard.writeText(text);
    setCopiedHymn(true);
    setTimeout(() => setCopiedHymn(false), 2000);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-xs sm:text-sm leading-relaxed';
      case 'lg':
        return 'text-base sm:text-lg leading-loose';
      default:
        return 'text-sm sm:text-base leading-relaxed';
    }
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header Compacto e Elegante */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Music className="w-4 h-4" /> Cânticos Sagrados & Hinologia Histórica
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Harpa Cristã & Hinário da Wesleyana
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Letras completas dos hinos oficiais da IMW, composições de Charles Wesley e hinos clássicos da Harpa Cristã.
          </p>
        </div>

        {/* Controles de Tamanho de Fonte */}
        <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl text-xs font-semibold self-start sm:self-center">
          <span className="text-[10px] uppercase font-bold text-stone-400 px-2 flex items-center gap-1">
            <Type className="w-3 h-3" /> Letra:
          </span>
          <button
            onClick={() => setFontSize('sm')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'sm' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('md')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'md' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            className={`px-2.5 py-1 rounded-xl transition-all ${
              fontSize === 'lg' ? 'bg-white dark:bg-stone-900 shadow-sm text-amber-800 dark:text-amber-300' : 'text-stone-500'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Busca e Filtros de Categoria Fluidos */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar por número (ex: 1, 15, 107, 291), título ou autor (Wesley, Harpa)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
          {[
            { id: 'all', label: `Todos os Hinos (${COMPLETE_HYMNAL.length})` },
            { id: 'harpa', label: 'Harpa Cristã (Oficial)' },
            { id: 'wesleyano', label: 'Hinário Wesleyano & IMW' },
            { id: 'classico', label: 'Clássicos da Fé' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
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

      {/* Grid Principal Fluido */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista Lateral de Hinos */}
        <div className="lg:col-span-5 space-y-2 max-h-[620px] overflow-y-auto pr-1 scrollbar-thin">
          {filteredHymns.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-xs text-stone-500">
              Nenhum hino encontrado para os filtros selecionados.
            </div>
          ) : (
            filteredHymns.map((hymn) => {
              const isSelected = selectedHymn.id === hymn.id;
              return (
                <div
                  key={hymn.id}
                  onClick={() => {
                    handleStopHymnAudio();
                    setSelectedHymn(hymn);
                  }}
                  className={`p-3.5 rounded-2xl cursor-pointer border transition-all text-left group ${
                    isSelected
                      ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-500 shadow-sm ring-2 ring-amber-500/20'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                      {hymn.categoryLabel}
                    </span>
                    <span className="font-mono text-xs font-bold text-amber-700 dark:text-amber-400">
                      Nº {hymn.number}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                    {hymn.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                    {hymn.author}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Leitor da Letra do Hino Selecionado */}
        <div className="lg:col-span-7 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {selectedHymn.categoryLabel} • Nº {selectedHymn.number}
                </span>
              </div>
              <h2 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 mt-1">
                {selectedHymn.title}
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                Por: {selectedHymn.author} • {selectedHymn.biblicalTheme}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {/* Botão Ouvir Letra em Áudio */}
              <button
                onClick={handleSpeakHymn}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                  isSpeakingHymn
                    ? 'bg-amber-600 text-white animate-pulse'
                    : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-100'
                }`}
                title="Ouvir a letra do hino declamada em áudio"
              >
                {isSpeakingHymn ? (
                  <>
                    <Square className="w-3.5 h-3.5" />
                    <span>Parar Áudio</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Ouvir Letra</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopyLyrics}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 transition-all shadow-sm border border-stone-200 dark:border-stone-700"
                title="Copiar letra do hino"
              >
                {copiedHymn ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Letra</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Letra com Estrofes Fluidas */}
          <div className={`space-y-4 font-serif text-stone-800 dark:text-stone-200 ${getFontSizeClass()}`}>
            {selectedHymn.lyrics.map((verse, idx) => (
              <div
                key={idx}
                className="bg-stone-50/70 dark:bg-stone-800/40 p-4 sm:p-5 rounded-2xl border border-stone-100 dark:border-stone-800 space-y-1.5"
              >
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block mb-1">
                  Estrofe {idx + 1}
                </span>
                <p className="whitespace-pre-line leading-relaxed">
                  {verse}
                </p>
              </div>
            ))}

            {/* Refrão / Coro em Destaque */}
            {selectedHymn.chorus && (
              <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/10 to-transparent p-5 sm:p-6 rounded-2xl border-l-4 border-amber-600 dark:border-amber-500 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 dark:text-amber-300 block mb-1 flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" /> Refrão / Coro
                </span>
                <p className="font-semibold italic whitespace-pre-line text-stone-900 dark:text-stone-100 leading-relaxed">
                  {selectedHymn.chorus}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
