import React, { useState, useEffect, useRef } from 'react';
import { ALL_BIBLE_BOOKS, BibleBookInfo } from '../../data/fullBibleIndex';
import { bibleService, BIBLE_VERSIONS, BibleVersionId, VerseItem } from '../../services/bibleService';
import { bibleHighlightService, HIGHLIGHT_COLORS, HighlightColor, BibleHighlight } from '../../services/bibleHighlightService';
import { findStrongNumberForWord, getStrongEntry, StrongEntry } from '../../data/strongConcordance';
import { KindleReaderModal } from '../common/KindleReaderModal';
import { BookOpen, Copy, Check, Type, Bookmark, ChevronDown, Search, ArrowLeft, ArrowRight, Sparkles, Palette, Trash2, X, BookMarked, Volume2, VolumeX, Play, Pause, Square, FastForward } from 'lucide-react';

interface BibleViewProps {
  onStudyWithGemini?: (prompt: string) => void;
}

export const BibleView: React.FC<BibleViewProps> = ({ onStudyWithGemini }) => {
  const [selectedBook, setSelectedBook] = useState<BibleBookInfo>(ALL_BIBLE_BOOKS.find(b => b.id === 'sl') || ALL_BIBLE_BOOKS[0]);
  const [selectedChapter, setSelectedChapter] = useState<number>(23);
  const [selectedVersion, setSelectedVersion] = useState<BibleVersionId>('ARC');
  const [verses, setVerses] = useState<VerseItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);

  // Leitor Estilo Kindle
  const [isKindleModalOpen, setIsKindleModalOpen] = useState(false);

  // Modo Concordância Strong
  const [isStrongMode, setIsStrongMode] = useState(false);
  const [selectedStrongEntry, setSelectedStrongEntry] = useState<StrongEntry | null>(null);

  // Comparador de Versículos Paralelos
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareVerseNumber, setCompareVerseNumber] = useState<number | null>(null);
  const [compareVersionsData, setCompareVersionsData] = useState<{ version: BibleVersionId; versionName: string; text: string }[]>([]);
  const [isComparingLoading, setIsComparingLoading] = useState(false);

  // Sistema de Marcação Colorida
  const [highlightsMap, setHighlightsMap] = useState<Record<string, HighlightColor>>({});
  const [activeVerseForMenu, setActiveVerseForMenu] = useState<{ number: number; text: string } | null>(null);
  const [isHighlightsModalOpen, setIsHighlightsModalOpen] = useState(false);
  const [highlightsList, setHighlightsList] = useState<BibleHighlight[]>([]);
  const [highlightColorFilter, setHighlightColorFilter] = useState<string>('all');

  // Modais de seleção de livro
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [bookSearchQuery, setBookSearchQuery] = useState('');
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');

  // ==========================================
  // ÁUDIO BÍBLIA (NARRADOR POR VOZ NATURAL)
  // ==========================================
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const [isAudioPaused, setIsAudioPaused] = useState<boolean>(false);
  const [currentSpeakingVerseNum, setCurrentSpeakingVerseNum] = useState<number | null>(null);
  const [audioPlaybackRate, setAudioPlaybackRate] = useState<number>(1);
  const audioIndexRef = useRef<number>(0);
  const versesRef = useRef<VerseItem[]>([]);
  versesRef.current = verses;

  // Cleanup de áudio ao desmontar ou trocar de capítulo
  useEffect(() => {
    return () => {
      stopAudioPlayback();
    };
  }, []);

  useEffect(() => {
    stopAudioPlayback();
    loadChapter(selectedBook.id, selectedChapter, selectedVersion);
    loadHighlights();
  }, [selectedBook, selectedChapter, selectedVersion]);

  const loadHighlights = () => {
    setHighlightsMap(bibleHighlightService.getHighlightMap());
    setHighlightsList(bibleHighlightService.getHighlights());
  };

  const loadChapter = async (bookId: string, chapter: number, version: BibleVersionId) => {
    setIsLoading(true);
    const data = await bibleService.getChapterVerses(bookId, chapter, version);
    setVerses(data);
    setIsLoading(false);
    setActiveVerseForMenu(null);
  };

  const handleSelectBook = (book: BibleBookInfo) => {
    setSelectedBook(book);
    setSelectedChapter(1);
    setIsBookModalOpen(false);
  };

  const handlePrevChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter(selectedChapter - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextChapter = () => {
    if (selectedChapter < selectedBook.chaptersCount) {
      setSelectedChapter(selectedChapter + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyVerse = (verseNum: number, text: string) => {
    const copyText = `"${text}" — ${selectedBook.name} ${selectedChapter}:${verseNum} (${selectedVersion})`;
    navigator.clipboard.writeText(copyText);
    setCopiedVerseNum(verseNum);
    setTimeout(() => setCopiedVerseNum(null), 2000);
  };

  const handleApplyColor = (color: HighlightColor) => {
    if (!activeVerseForMenu) return;
    bibleHighlightService.setHighlight(
      selectedBook.id,
      selectedBook.name,
      selectedChapter,
      activeVerseForMenu.number,
      activeVerseForMenu.text,
      selectedVersion,
      color
    );
    loadHighlights();
    setActiveVerseForMenu(null);
  };

  const handleRemoveColor = () => {
    if (!activeVerseForMenu) return;
    bibleHighlightService.removeHighlight(selectedBook.id, selectedChapter, activeVerseForMenu.number);
    loadHighlights();
    setActiveVerseForMenu(null);
  };

  const handleSendToGemini = (verseNum: number, text: string) => {
    const prompt = `Faça um estudo exegético, histórico e teológico pastoral do versículo: "${text}" (${selectedBook.name} ${selectedChapter}:${verseNum})`;
    if (onStudyWithGemini) {
      onStudyWithGemini(prompt);
    }
  };

  const handleJumpToHighlight = (h: BibleHighlight) => {
    const book = ALL_BIBLE_BOOKS.find(b => b.id === h.bookId);
    if (book) {
      setSelectedBook(book);
      setSelectedChapter(h.chapter);
      setIsHighlightsModalOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-xl leading-loose';
      default: return 'text-base leading-relaxed';
    }
  };

  const handleOpenCompareModal = async (verseNum: number) => {
    setCompareVerseNumber(verseNum);
    setIsCompareModalOpen(true);
    setIsComparingLoading(true);
    try {
      const data = await bibleService.getVerseAcrossVersions(selectedBook.id, selectedChapter, verseNum);
      setCompareVersionsData(data);
    } catch (err) {
      console.error('Erro ao comparar versículos', err);
    } finally {
      setIsComparingLoading(false);
    }
  };

  // ==========================================
  // LOGICA DO MOTOR DE ÁUDIO BÍBLIA
  // ==========================================
  const getPortugueseVoice = (): SpeechSynthesisVoice | null => {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang === 'pt-BR' || v.lang.startsWith('pt')) || null;
    return ptVoice;
  };

  const stopAudioPlayback = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsAudioPlaying(false);
    setIsAudioPaused(false);
    setCurrentSpeakingVerseNum(null);
  };

  const pauseAudioPlayback = () => {
    if ('speechSynthesis' in window && isAudioPlaying) {
      window.speechSynthesis.pause();
      setIsAudioPaused(true);
    }
  };

  const resumeAudioPlayback = () => {
    if ('speechSynthesis' in window && isAudioPaused) {
      window.speechSynthesis.resume();
      setIsAudioPaused(false);
    }
  };

  const playVerseAtIndex = (index: number) => {
    const currentVerses = versesRef.current;
    if (index >= currentVerses.length) {
      stopAudioPlayback();
      return;
    }

    audioIndexRef.current = index;
    const item = currentVerses[index];
    if (!item) {
      stopAudioPlayback();
      return;
    }

    setCurrentSpeakingVerseNum(item.number);

    // Auto-scroll suave para o versículo ativo
    const el = document.getElementById(`verse-${item.number}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (!('speechSynthesis' in window)) {
      alert('A síntese de voz não está disponível neste navegador.');
      stopAudioPlayback();
      return;
    }

    // Texto para fala: ex "Versículo 1: No princípio..."
    const speechText = `${item.number}. ${item.text}`;
    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.lang = 'pt-BR';
    utterance.rate = audioPlaybackRate;
    const voice = getPortugueseVoice();
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      // Avança para o próximo versículo
      playVerseAtIndex(index + 1);
    };

    utterance.onerror = (e) => {
      console.warn('Erro na síntese de áudio bíblico:', e);
      stopAudioPlayback();
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStartChapterAudio = () => {
    if (verses.length === 0) return;
    if (isAudioPaused) {
      resumeAudioPlayback();
      return;
    }
    if (isAudioPlaying) {
      stopAudioPlayback();
      return;
    }

    stopAudioPlayback();
    setIsAudioPlaying(true);
    setIsAudioPaused(false);
    playVerseAtIndex(0);
  };

  const handlePlaySingleVerse = (verseNum: number, text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('A síntese de voz não está disponível neste navegador.');
      return;
    }
    stopAudioPlayback();
    setIsAudioPlaying(true);
    setCurrentSpeakingVerseNum(verseNum);

    const el = document.getElementById(`verse-${verseNum}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });

    const utterance = new SpeechSynthesisUtterance(`${selectedBook.name} ${selectedChapter}, versículo ${verseNum}: ${text}`);
    utterance.lang = 'pt-BR';
    utterance.rate = audioPlaybackRate;
    const voice = getPortugueseVoice();
    if (voice) utterance.voice = voice;

    utterance.onend = () => {
      stopAudioPlayback();
    };
    utterance.onerror = () => {
      stopAudioPlayback();
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleChangePlaybackRate = (rate: number) => {
    setAudioPlaybackRate(rate);
    if (isAudioPlaying && !isAudioPaused) {
      // Reinicia do versículo atual na nova velocidade
      window.speechSynthesis.cancel();
      playVerseAtIndex(audioIndexRef.current);
    }
  };

  const renderVerseWithStrong = (verseText: string) => {
    if (!isStrongMode) return verseText;

    const words = verseText.split(' ');
    return words.map((word, idx) => {
      const strongNum = findStrongNumberForWord(word);
      if (!strongNum) {
        return <span key={idx}>{word} </span>;
      }
      const entry = getStrongEntry(strongNum);
      return (
        <span key={idx} className="inline-block">
          <span
            onClick={(e) => {
              e.stopPropagation();
              if (entry) setSelectedStrongEntry(entry);
            }}
            className="text-amber-800 dark:text-amber-300 font-semibold underline decoration-amber-500/50 decoration-dotted cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-950 px-1 py-0.5 rounded transition-colors"
            title={`Strong ${strongNum} (${entry?.language}): ${entry?.transliteration} - ${entry?.shortDefinition}`}
          >
            {word}
            <sup className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold ml-0.5">
              {strongNum}
            </sup>
          </span>{' '}
        </span>
      );
    });
  };

  const filteredBooks = ALL_BIBLE_BOOKS.filter(b => {
    const matchesTestament = testamentFilter === 'ALL' || b.testament === testamentFilter;
    const matchesSearch = b.name.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
                          b.abbrev.toLowerCase().includes(bookSearchQuery.toLowerCase()) ||
                          b.category.toLowerCase().includes(bookSearchQuery.toLowerCase());
    return matchesTestament && matchesSearch;
  });

  const filteredHighlights = highlightsList.filter(h =>
    highlightColorFilter === 'all' || h.color === highlightColorFilter
  );

  return (
    <div className="space-y-6 pb-20 animate-fadeIn">
      {/* Header com Navegação e Controles */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" /> Cânon Completo • 66 Livros & Áudio Narração
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>Bíblia Sagrada Completa</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Navegue pelos 66 livros, ouça os versículos narrados em áudio e estude versículo a versículo.
          </p>
        </div>

        {/* Barra de Ações: Livro, Áudio, Versão, Marcados e Fonte */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Botão Selecionar Livro */}
          <button
            onClick={() => setIsBookModalOpen(true)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-amber-900/20 transition-all"
          >
            <Bookmark className="w-4 h-4" />
            <span>{selectedBook.name} {selectedChapter}</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-80" />
          </button>

          {/* Botão de Áudio Bíblia (Ouvir Capítulo) */}
          <button
            onClick={handleStartChapterAudio}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all shadow-sm ${
              isAudioPlaying
                ? 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-400/50 animate-pulse'
                : 'bg-amber-50 dark:bg-amber-950/50 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 hover:bg-amber-100'
            }`}
            title="Ouvir a narração completa deste capítulo em áudio"
          >
            {isAudioPlaying ? (
              <>
                <Square className="w-3.5 h-3.5" />
                <span>Parar Áudio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                <span>Ouvir Capítulo</span>
              </>
            )}
          </button>

          {/* Botão Leitor Cristão */}
          <button
            onClick={() => setIsKindleModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 transition-colors shadow-sm"
            title="Modo Leitor Cristão imersivo sem distrações"
          >
            <BookMarked className="w-3.5 h-3.5 text-amber-600" />
            <span className="hidden sm:inline">Leitor Cristão</span>
          </button>

          {/* Botão Modo Bíblia Strong */}
          <button
            onClick={() => setIsStrongMode(!isStrongMode)}
            className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border transition-all ${
              isStrongMode
                ? 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-400/50'
                : 'bg-white dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-500'
            }`}
            title="Ativar palavras-chave interlineares com números de Strong"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Strong {isStrongMode ? '(Ativo)' : ''}</span>
          </button>

          {/* Botão Meus Versículos Marcados */}
          <button
            onClick={() => {
              loadHighlights();
              setIsHighlightsModalOpen(true);
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-amber-500 shadow-sm transition-colors"
            title="Ver meus versículos destacados e marcados com cores"
          >
            <Palette className="w-3.5 h-3.5 text-amber-600" />
            <span>Marcados ({highlightsList.length})</span>
          </button>

          {/* Seletor de Versão Bíblica */}
          <select
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value as BibleVersionId)}
            className="px-3 py-2 text-xs font-semibold rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            title="Escolha a versão da Bíblia"
          >
            {BIBLE_VERSIONS.map((v) => (
              <option key={v.id} value={v.id}>
                {v.name} ({v.fullName})
              </option>
            ))}
          </select>

          {/* Controles de Fonte */}
          <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl">
            <Type className="w-3.5 h-3.5 text-stone-400 ml-1" />
            <button
              onClick={() => setFontSize('sm')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'sm' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('md')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'md' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('lg')}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${fontSize === 'lg' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
            >
              A+
            </button>
          </div>
        </div>
      </div>

      {/* Seletor Rápido de Capítulos Horizontal */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold text-stone-400 shrink-0 uppercase tracking-wider pl-1">
          Capítulos:
        </span>
        {Array.from({ length: selectedBook.chaptersCount }, (_, i) => i + 1).map((ch) => {
          const isActive = ch === selectedChapter;
          return (
            <button
              key={ch}
              onClick={() => setSelectedChapter(ch)}
              className={`w-9 h-9 rounded-xl text-xs font-bold shrink-0 transition-all flex items-center justify-center ${
                isActive
                  ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-500/50 scale-105'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-800 hover:bg-stone-100 dark:hover:bg-stone-800'
              }`}
            >
              {ch}
            </button>
          );
        })}
      </div>

      {/* Leitor Central do Capítulo */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors relative">
        {/* Cabeçalho do Leitor */}
        <div className="text-center max-w-xl mx-auto mb-8 border-b border-stone-100 dark:border-stone-800 pb-6 space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400">
            {selectedBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'} • Livro {selectedBook.bookNumber} de 66 • {selectedBook.category}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 dark:text-stone-100">
            {selectedBook.name} {selectedChapter}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-500 dark:text-stone-400 pt-1">
            <span className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800 font-semibold text-amber-700 dark:text-amber-400">
              {BIBLE_VERSIONS.find(v => v.id === selectedVersion)?.fullName}
            </span>
            <span>•</span>
            <span className="font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" /> Capítulo Completo ({verses.length} versículos)
            </span>
          </div>

          {/* Botão de Áudio em Destaque no Cabeçalho */}
          <div className="pt-2 flex justify-center">
            <button
              onClick={handleStartChapterAudio}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-sm ${
                isAudioPlaying
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-amber-100 hover:bg-amber-200 dark:bg-amber-950/70 dark:hover:bg-amber-900 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800'
              }`}
            >
              {isAudioPlaying ? (
                <>
                  <Square className="w-3.5 h-3.5" />
                  <span>{isAudioPaused ? 'Retomar Narração' : 'Pausar / Parar Áudio'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>Ouvir Capítulo {selectedBook.name} {selectedChapter} em Áudio</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Versículos */}
        {isLoading ? (
          <div className="p-12 text-center text-stone-500 space-y-2">
            <BookOpen className="w-8 h-8 animate-pulse text-amber-600 mx-auto" />
            <p className="text-sm">Carregando todos os versículos do capítulo...</p>
          </div>
        ) : (
          <div className={`space-y-3 max-w-3xl mx-auto font-serif ${getFontSizeClass()} text-stone-800 dark:text-stone-200`}>
            {verses.map((v) => {
              const verseKey = `${selectedBook.id}_${selectedChapter}_${v.number}`;
              const highlightColor = highlightsMap[verseKey];
              const highlightConfig = highlightColor ? HIGHLIGHT_COLORS.find(c => c.id === highlightColor) : null;
              const isSelectedForMenu = activeVerseForMenu?.number === v.number;
              const isCopied = copiedVerseNum === v.number;
              const isBeingSpoken = currentSpeakingVerseNum === v.number;

              return (
                <div
                  key={v.number}
                  id={`verse-${v.number}`}
                  className={`group relative rounded-2xl transition-all ${
                    isBeingSpoken
                      ? 'bg-amber-500/20 dark:bg-amber-950/60 ring-2 ring-amber-500 shadow-md p-3 scale-[1.01]'
                      : highlightConfig
                      ? `${highlightConfig.bgClass} shadow-sm px-4 py-2.5`
                      : 'hover:bg-amber-50/60 dark:hover:bg-stone-800/60 p-2.5'
                  } ${isSelectedForMenu ? 'ring-2 ring-amber-500' : ''}`}
                >
                  <div
                    onClick={() => {
                      if (isSelectedForMenu) {
                        setActiveVerseForMenu(null);
                      } else {
                        setActiveVerseForMenu({ number: v.number, text: v.text });
                      }
                    }}
                    className="flex items-baseline gap-3.5 cursor-pointer"
                  >
                    <span className="font-sans text-xs font-bold text-amber-700 dark:text-amber-400 select-none w-6 text-right shrink-0">
                      {v.number}
                    </span>
                    <p className="leading-relaxed flex-1 select-text">
                      {renderVerseWithStrong(v.text)}
                    </p>

                    {/* Botões de Ação do Versículo (Ouvir e Copiar) */}
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-1 shrink-0 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlaySingleVerse(v.number, v.text);
                        }}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-stone-200/50 dark:hover:bg-stone-700"
                        title="Ouvir este versículo em áudio"
                      >
                        <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyVerse(v.number, v.text);
                        }}
                        className="p-1.5 rounded-lg text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-stone-200/50 dark:hover:bg-stone-700"
                        title="Copiar versículo"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Menu Flutuante de Marcação, Áudio e Estudo com Gemini IA */}
                  {isSelectedForMenu && (
                    <div className="mt-3 p-3 bg-white dark:bg-stone-800 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-xl space-y-2.5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1">
                          <Palette className="w-3 h-3 text-amber-600" /> Versículo {v.number}:
                        </span>
                        <button
                          onClick={() => setActiveVerseForMenu(null)}
                          className="text-stone-400 hover:text-stone-600 p-0.5"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {HIGHLIGHT_COLORS.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => handleApplyColor(c.id)}
                            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-[11px] font-semibold bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 hover:scale-105 transition-transform"
                            title={c.label}
                          >
                            <span className={`w-3.5 h-3.5 rounded-full ${c.dotClass} shadow-inner`} />
                            <span>{c.label}</span>
                          </button>
                        ))}

                        {highlightColor && (
                          <button
                            onClick={handleRemoveColor}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-900"
                            title="Remover cor deste versículo"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Remover Cor</span>
                          </button>
                        )}
                      </div>

                      <div className="pt-2 border-t border-stone-100 dark:border-stone-700 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handlePlaySingleVerse(v.number, v.text)}
                            className="inline-flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400 font-semibold hover:underline"
                          >
                            <Volume2 className="w-3.5 h-3.5" /> Ouvir em Áudio
                          </button>

                          <button
                            onClick={() => handleCopyVerse(v.number, v.text)}
                            className="inline-flex items-center gap-1 text-xs text-stone-600 dark:text-stone-300 hover:text-amber-700 font-semibold"
                          >
                            <Copy className="w-3.5 h-3.5" /> Copiar
                          </button>

                          <button
                            onClick={() => handleOpenCompareModal(v.number)}
                            className="inline-flex items-center gap-1 text-xs text-stone-600 dark:text-stone-300 hover:text-amber-700 font-semibold"
                          >
                            <span>Comparar Versões</span>
                          </button>
                        </div>

                        {onStudyWithGemini && (
                          <button
                            onClick={() => handleSendToGemini(v.number, v.text)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm transition-all"
                          >
                            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                            <span>Estudar com Gemini</span>
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Paginação Inferior Anterior / Próximo Capítulo */}
        <div className="mt-10 pt-6 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <button
            onClick={handlePrevChapter}
            disabled={selectedChapter <= 1}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Capítulo Anterior</span>
          </button>

          <span className="text-xs text-stone-400 font-serif">
            {selectedBook.name} {selectedChapter} de {selectedBook.chaptersCount}
          </span>

          <button
            onClick={handleNextChapter}
            disabled={selectedChapter >= selectedBook.chaptersCount}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-700 hover:bg-amber-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
          >
            <span>Próximo Capítulo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* BARRA DE ÁUDIO BÍBLIA FLUTUANTE (QUANDO ESTIVER TOCANDO) */}
      {isAudioPlaying && (
        <div className="fixed bottom-20 md:bottom-6 left-1/2 -translate-x-1/2 z-40 bg-stone-900/95 dark:bg-stone-950/95 backdrop-blur-md text-white border border-amber-500/50 rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 animate-slideUp max-w-lg w-[90%]">
          <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white shrink-0">
            <Volume2 className="w-4 h-4 animate-pulse" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-bold text-amber-300 truncate">
              {selectedBook.name} {selectedChapter}:{currentSpeakingVerseNum || 1}
            </div>
            <div className="text-[10px] text-stone-400">
              Narrando versículo {currentSpeakingVerseNum || 1} de {verses.length}
            </div>
          </div>

          {/* Velocidade de Fala */}
          <div className="flex items-center gap-1 text-[10px] bg-black/40 px-2 py-1 rounded-lg border border-white/10">
            <button
              onClick={() => handleChangePlaybackRate(0.8)}
              className={`px-1 rounded ${audioPlaybackRate === 0.8 ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
            >
              0.8x
            </button>
            <button
              onClick={() => handleChangePlaybackRate(1.0)}
              className={`px-1 rounded ${audioPlaybackRate === 1.0 ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
            >
              1x
            </button>
            <button
              onClick={() => handleChangePlaybackRate(1.2)}
              className={`px-1 rounded ${audioPlaybackRate === 1.2 ? 'text-amber-400 font-bold' : 'text-stone-400'}`}
            >
              1.2x
            </button>
          </div>

          {/* Play / Pause Toggle */}
          <button
            onClick={() => {
              if (isAudioPaused) resumeAudioPlayback();
              else pauseAudioPlayback();
            }}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white"
            title={isAudioPaused ? 'Retomar' : 'Pausar'}
          >
            {isAudioPaused ? <Play className="w-4 h-4 text-emerald-400" /> : <Pause className="w-4 h-4 text-amber-300" />}
          </button>

          {/* Stop / Close */}
          <button
            onClick={stopAudioPlayback}
            className="p-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white"
            title="Parar áudio"
          >
            <Square className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* MODAL DE SELEÇÃO DOS 66 LIVROS DO CÂNON BÍBLICO */}
      {isBookModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-4xl w-full max-h-[85vh] p-6 shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Cânon Bíblico Completo (66 Livros)
                </h3>
              </div>
              <button
                onClick={() => setIsBookModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Busca & Filtro AT / NT */}
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
                <input
                  type="text"
                  value={bookSearchQuery}
                  onChange={(e) => setBookSearchQuery(e.target.value)}
                  placeholder="Pesquisar livro por nome, abreviação ou categoria..."
                  className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-xl shrink-0">
                <button
                  onClick={() => setTestamentFilter('ALL')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'ALL' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Todos (66)
                </button>
                <button
                  onClick={() => setTestamentFilter('AT')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'AT' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Antigo Testamento (39)
                </button>
                <button
                  onClick={() => setTestamentFilter('NT')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${testamentFilter === 'NT' ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm' : 'text-stone-500'}`}
                >
                  Novo Testamento (27)
                </button>
              </div>
            </div>

            {/* Grid dos Livros com Número Canônico */}
            <div className="flex-1 overflow-y-auto pr-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 py-2">
              {filteredBooks.map((book) => {
                const isCurrent = book.id === selectedBook.id;
                return (
                  <button
                    key={book.id}
                    onClick={() => handleSelectBook(book)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isCurrent
                        ? 'bg-amber-100 dark:bg-amber-950 border-amber-500/80 shadow-sm ring-1 ring-amber-500'
                        : 'bg-white dark:bg-stone-800/80 border-stone-200 dark:border-stone-700 hover:border-amber-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                        #{book.bookNumber} • {book.abbrev}
                      </span>
                      <span className="text-[10px] text-stone-400">
                        {book.chaptersCount} cap.
                      </span>
                    </div>
                    <div className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                      {book.name}
                    </div>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400 block truncate mt-0.5">
                      {book.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DO DICIONÁRIO E CONCORDÂNCIA STRONG */}
      {selectedStrongEntry && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold border border-amber-300 dark:border-amber-800">
                  {selectedStrongEntry.number}
                </span>
                <span className="text-xs uppercase tracking-wider font-bold text-stone-400">
                  {selectedStrongEntry.language}
                </span>
              </div>
              <button
                onClick={() => setSelectedStrongEntry(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs text-stone-400 uppercase font-bold">Termo Original:</span>
                <div className="text-2xl font-serif font-bold text-amber-700 dark:text-amber-400 mt-0.5">
                  {selectedStrongEntry.original} ({selectedStrongEntry.transliteration})
                </div>
              </div>

              <div>
                <span className="text-xs text-stone-400 uppercase font-bold">Definição Resumida:</span>
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                  {selectedStrongEntry.shortDefinition}
                </p>
              </div>

              <div>
                <span className="text-xs text-stone-400 uppercase font-bold">Significado Exegético e Teológico:</span>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed mt-0.5 bg-stone-50 dark:bg-stone-800/60 p-3 rounded-xl border border-stone-200 dark:border-stone-700">
                  {selectedStrongEntry.detailedDefinition}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-between items-center">
              {onStudyWithGemini && (
                <button
                  onClick={() => {
                    const prompt = `Faça um estudo bíblico aprofundado sobre o termo original ${selectedStrongEntry.original} (${selectedStrongEntry.number} - ${selectedStrongEntry.transliteration}) e sua aplicação teológica e pastoral.`;
                    onStudyWithGemini(prompt);
                    setSelectedStrongEntry(null);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aprofundar com Gemini</span>
                </button>
              )}
              <button
                onClick={() => setSelectedStrongEntry(null)}
                className="px-4 py-1.5 rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE VERSÍCULOS MARCADOS COM CORES */}
      {isHighlightsModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full max-h-[85vh] p-6 shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Meus Versículos Marcados ({highlightsList.length})
                </h3>
              </div>
              <button
                onClick={() => setIsHighlightsModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filtro por Cor */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setHighlightColorFilter('all')}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  highlightColorFilter === 'all'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}
              >
                Todas as Cores
              </button>
              {HIGHLIGHT_COLORS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setHighlightColorFilter(c.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-semibold transition-all ${
                    highlightColorFilter === c.id
                      ? 'ring-2 ring-amber-500 font-bold'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full ${c.dotClass}`} />
                  <span>{c.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Lista dos Versículos Marcados */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
              {filteredHighlights.length === 0 ? (
                <div className="text-center py-10 text-stone-400 text-sm">
                  Nenhum versículo marcado nesta categoria. Toque em qualquer versículo da Bíblia para marcá-lo.
                </div>
              ) : (
                filteredHighlights.map((h) => {
                  const cfg = HIGHLIGHT_COLORS.find(c => c.id === h.color);
                  return (
                    <div
                      key={h.id}
                      onClick={() => handleJumpToHighlight(h)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                        cfg ? cfg.bgClass : 'bg-stone-50 dark:bg-stone-800'
                      } hover:scale-[1.01]`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="text-amber-800 dark:text-amber-300">
                          {h.bookName} {h.chapter}:{h.verseNum} ({h.version})
                        </span>
                        <span className="text-[10px] opacity-60">
                          {new Date(h.createdAt).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <p className="font-serif text-sm italic">
                        "{h.verseText}"
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL DE COMPARAÇÃO DE VERSÍCULOS PARALELOS */}
      {isCompareModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full max-h-[85vh] p-6 shadow-2xl border border-stone-200 dark:border-stone-800 flex flex-col space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Comparador de Traduções Bíblicas
                </h3>
                <span className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                  {selectedBook.name} {selectedChapter}:{compareVerseNumber}
                </span>
              </div>
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {isComparingLoading ? (
                <div className="py-12 text-center text-stone-400 space-y-2">
                  <BookOpen className="w-8 h-8 animate-pulse text-amber-600 mx-auto" />
                  <p className="text-sm">Comparando traduções bíblicas oficiais...</p>
                </div>
              ) : (
                compareVersionsData.map((item) => (
                  <div
                    key={item.version}
                    className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                        {item.versionName}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(`"${item.text}" — ${selectedBook.name} ${selectedChapter}:${compareVerseNumber} (${item.version})`);
                        }}
                        className="text-stone-400 hover:text-amber-600 p-1"
                        title="Copiar esta tradução"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="font-serif text-sm text-stone-800 dark:text-stone-200 leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex justify-end">
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold"
              >
                Fechar Comparador
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL LEITOR CRISTÃO (ESTILO KINDLE) */}
      {isKindleModalOpen && (
        <KindleReaderModal
          isOpen={isKindleModalOpen}
          onClose={() => setIsKindleModalOpen(false)}
          title={`${selectedBook.name} ${selectedChapter}`}
          subtitle={`Versão ${selectedVersion} • ${selectedBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}`}
          authorOrRef={`Bíblia Sagrada — ${selectedBook.chaptersCount} capítulos`}
          currentPage={selectedChapter}
          totalPages={selectedBook.chaptersCount}
          onPageChange={(page) => {
            setSelectedChapter(page);
          }}
        >
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-current/10">
              <span className="text-xs uppercase font-bold tracking-widest opacity-70">
                {selectedBook.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'}
              </span>
              <h1 className="font-serif font-bold text-2xl sm:text-3xl mt-2 mb-1">
                {selectedBook.name} {selectedChapter}
              </h1>
              <p className="text-xs opacity-60">
                Tradução: {selectedVersion} • {verses.length} versículos completos
              </p>
            </div>

            <div className="space-y-4 leading-relaxed font-serif text-justify text-base sm:text-lg">
              {verses.map((v) => (
                <p key={v.number} className="indent-4 sm:indent-6">
                  <sup className="font-sans font-bold text-[11px] opacity-60 mr-2 select-none">
                    {v.number}
                  </sup>
                  {v.text}
                </p>
              ))}
            </div>
          </div>
        </KindleReaderModal>
      )}
    </div>
  );
};
