import React, { useState, useEffect, useMemo } from 'react';
import { COMPLETE_HYMNAL, DetailedHymn } from '../../data/hymnalData';
import { Music, Search, Volume2, Square, Copy, Check, Type, Flame, Sparkles, Hash, ArrowRight } from 'lucide-react';

export const HymnsView: React.FC = () => {
  const [selectedHymn, setSelectedHymn] = useState<DetailedHymn>(COMPLETE_HYMNAL[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedHymn, setCopiedHymn] = useState(false);
  const [isSpeakingHymn, setIsSpeakingHymn] = useState<boolean>(false);
  const [jumpNumber, setJumpNumber] = useState<string>('');

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

  const handleJumpToNumber = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpNumber.trim(), 10);
    if (!num) return;

    // Buscar hino pelo número exato
    const found = COMPLETE_HYMNAL.find(h => {
      if (selectedCategory === 'wesleyano' || selectedCategory === 'imw-oficial') {
        return h.number === num && (h.category === 'wesleyano' || h.category === 'imw-oficial');
      }
      return h.number === num && h.category === 'harpa';
    }) || COMPLETE_HYMNAL.find(h => h.number === num);

    if (found) {
      handleStopHymnAudio();
      setSelectedHymn(found);
      setJumpNumber('');
    }
  };

  const filteredHymns = useMemo(() => {
    return COMPLETE_HYMNAL.filter((h) => {
      let matchesCategory = true;
      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'harpa-all') {
        matchesCategory = h.category === 'harpa';
      } else if (selectedCategory === 'r-1-100') {
        matchesCategory = h.category === 'harpa' && h.number >= 1 && h.number <= 100;
      } else if (selectedCategory === 'r-101-200') {
        matchesCategory = h.category === 'harpa' && h.number >= 101 && h.number <= 200;
      } else if (selectedCategory === 'r-201-300') {
        matchesCategory = h.category === 'harpa' && h.number >= 201 && h.number <= 300;
      } else if (selectedCategory === 'r-301-400') {
        matchesCategory = h.category === 'harpa' && h.number >= 301 && h.number <= 400;
      } else if (selectedCategory === 'r-401-500') {
        matchesCategory = h.category === 'harpa' && h.number >= 401 && h.number <= 500;
      } else if (selectedCategory === 'r-501-640') {
        matchesCategory = h.category === 'harpa' && h.number >= 501 && h.number <= 640;
      } else if (selectedCategory === 'wesleyano') {
        matchesCategory = h.category === 'wesleyano' || h.category === 'imw-oficial';
      } else if (selectedCategory === 'classico') {
        matchesCategory = h.category === 'classico';
      }

      if (!matchesCategory) return false;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return true;

      return (
        h.title.toLowerCase().includes(query) ||
        h.number.toString() === query ||
        h.number.toString().includes(query) ||
        h.author.toLowerCase().includes(query) ||
        h.biblicalTheme.toLowerCase().includes(query) ||
        h.lyrics.some(v => v.toLowerCase().includes(query)) ||
        (h.chorus && h.chorus.toLowerCase().includes(query))
      );
    });
  }, [selectedCategory, searchQuery]);

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
            <Music className="w-4 h-4" /> Cânticos Sagrados & Hinologia Completa
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2.5">
            <span>Harpa Cristã (640 Hinos) & Hinário Wesleyano</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-mono font-bold">
              {COMPLETE_HYMNAL.length} Hinos
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
            Todos os 640 hinos da Harpa Cristã com estrofes e refrões completos, hinos oficiais da IMW e poemas sacros de Charles Wesley.
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

      {/* Barra de Busca e Atalho Rápido de Número */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
        {/* Campo de Pesquisa Geral */}
        <div className="sm:col-span-8 relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar por título, letra ou autor (ex: Chuvas de Graça, Wesley, Cruz)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors shadow-sm"
          />
        </div>

        {/* Atalho "Ir direto para o Hino nº..." */}
        <form onSubmit={handleJumpToNumber} className="sm:col-span-4 flex items-center gap-1.5">
          <div className="relative flex-1">
            <Hash className="w-4 h-4 absolute left-3 top-3 text-amber-600" />
            <input
              type="number"
              min="1"
              max="640"
              value={jumpNumber}
              onChange={(e) => setJumpNumber(e.target.value)}
              placeholder="Ir p/ Hino nº (1-640)..."
              className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-800/80 focus:outline-none focus:ring-2 focus:ring-amber-500 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="px-3.5 py-2.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs flex items-center gap-1 shrink-0 transition-all shadow-sm"
            title="Ir para o hino"
          >
            <span>Ir</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Filtros de Categoria e Faixas da Harpa Cristã (1 a 640) */}
      <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
        {[
          { id: 'all', label: `Todos (${COMPLETE_HYMNAL.length})` },
          { id: 'harpa-all', label: 'Harpa Completa (640)' },
          { id: 'r-1-100', label: 'Hinos 1 – 100' },
          { id: 'r-101-200', label: 'Hinos 101 – 200' },
          { id: 'r-201-300', label: 'Hinos 201 – 300' },
          { id: 'r-301-400', label: 'Hinos 301 – 400' },
          { id: 'r-401-500', label: 'Hinos 401 – 500' },
          { id: 'r-501-640', label: 'Hinos 501 – 640' },
          { id: 'wesleyano', label: 'Wesleyano & IMW' },
          { id: 'classico', label: 'Clássicos da Fé' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === cat.id
                ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid Principal Fluido */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista Lateral de Hinos */}
        <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1 scrollbar-thin">
          <div className="text-[11px] text-stone-400 font-medium px-1 flex items-center justify-between">
            <span>Listando {filteredHymns.length} hinos</span>
            <span className="font-mono">Total no app: {COMPLETE_HYMNAL.length}</span>
          </div>

          {filteredHymns.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-xs text-stone-500">
              Nenhum hino encontrado para os filtros selecionados. Tente buscar pelo número ou título.
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
                    {hymn.author} • {hymn.biblicalTheme}
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
                <span className="text-xs text-stone-400 font-mono">
                  {selectedHymn.lyrics.length} estrofes {selectedHymn.chorus ? '+ refrão' : ''}
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
