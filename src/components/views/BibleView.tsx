import React, { useState } from 'react';
import { SAMPLE_BIBLE_CHAPTERS, BibleChapter } from '../../data/bibleBooks';
import { BookOpen, Copy, Check, Type, Bookmark } from 'lucide-react';

export const BibleView: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<BibleChapter>(SAMPLE_BIBLE_CHAPTERS[0]);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg'>('md');
  const [copiedVerseNum, setCopiedVerseNum] = useState<number | null>(null);

  const handleCopyVerse = (verseNum: number, text: string) => {
    const copyText = `"${text}" — ${selectedChapter.book} ${selectedChapter.chapter}:${verseNum}`;
    navigator.clipboard.writeText(copyText);
    setCopiedVerseNum(verseNum);
    setTimeout(() => setCopiedVerseNum(null), 2000);
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm': return 'text-sm leading-relaxed';
      case 'lg': return 'text-xl leading-loose';
      default: return 'text-base leading-relaxed';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" /> Escrituras Sagradas
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Leitor Bíblico
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Alimento diário para o espírito e fundamentação para pregações e estudos.
          </p>
        </div>

        {/* Controles de Leitura (Fonte) */}
        <div className="flex items-center gap-2 bg-stone-100 dark:bg-stone-800 p-1.5 rounded-xl self-start sm:self-auto">
          <Type className="w-4 h-4 text-stone-500 ml-1.5" />
          <button
            onClick={() => setFontSize('sm')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
              fontSize === 'sm'
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            A-
          </button>
          <button
            onClick={() => setFontSize('md')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
              fontSize === 'md'
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            A
          </button>
          <button
            onClick={() => setFontSize('lg')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-colors ${
              fontSize === 'lg'
                ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            A+
          </button>
        </div>
      </div>

      {/* Seleção de Livros / Passagens Chave */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {SAMPLE_BIBLE_CHAPTERS.map((ch, idx) => {
          const isSelected = selectedChapter.book === ch.book && selectedChapter.chapter === ch.chapter;
          return (
            <button
              key={idx}
              onClick={() => setSelectedChapter(ch)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all ${
                isSelected
                  ? 'bg-amber-700 text-white border-amber-800 shadow-sm shadow-amber-900/20'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-200' : 'text-amber-600'}`} />
              <span>{ch.book} {ch.chapter}</span>
            </button>
          );
        })}
      </div>

      {/* Livro Aberto / Visualizador */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors">
        <div className="text-center max-w-lg mx-auto mb-8 border-b border-stone-100 dark:border-stone-800 pb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-700 dark:text-amber-400">
            {selectedChapter.testament}
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mt-1">
            {selectedChapter.book} {selectedChapter.chapter}
          </h2>
          <p className="text-xs text-stone-400 mt-1">Versão João Ferreira de Almeida</p>
        </div>

        {/* Versículos */}
        <div className={`space-y-4 max-w-3xl mx-auto font-serif ${getFontSizeClass()} text-stone-800 dark:text-stone-200`}>
          {selectedChapter.verses.map((v) => {
            const isCopied = copiedVerseNum === v.number;
            return (
              <div
                key={v.number}
                className="group relative flex items-baseline gap-3 p-2 rounded-xl hover:bg-amber-50/60 dark:hover:bg-stone-800/60 transition-colors"
              >
                <span className="font-sans text-xs font-bold text-amber-700 dark:text-amber-400 select-none w-5 text-right shrink-0">
                  {v.number}
                </span>
                <p className="leading-relaxed flex-1">
                  {v.text}
                </p>
                <button
                  onClick={() => handleCopyVerse(v.number, v.text)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-stone-200/50 dark:hover:bg-stone-700 transition-all shrink-0"
                  title="Copiar este versículo"
                >
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
