import React, { useState, useEffect } from 'react';
import { MOMENTO_COM_O_PAI_LIST, MomentoComOPaiDevocional } from '../../data/momentoComOPaiData';
import { Coffee, KeyRound, Heart, Share2, Check, Sparkles, BookOpen, Clock, ChevronRight, MessageSquareHeart, Bookmark } from 'lucide-react';

export const MomentoComOPaiCard: React.FC = () => {
  const [selectedDayIdx, setSelectedDayIdx] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [userNote, setUserNote] = useState<string>('');
  const [savedNoteSuccess, setSavedNoteSuccess] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const devotional: MomentoComOPaiDevocional = MOMENTO_COM_O_PAI_LIST[selectedDayIdx] || MOMENTO_COM_O_PAI_LIST[0];
  const storageNoteKey = `omc_mcp_note_${devotional.id}`;

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageNoteKey);
      setUserNote(saved || '');
    } catch {
      setUserNote('');
    }
  }, [selectedDayIdx, storageNoteKey]);

  const handleSaveNote = () => {
    try {
      localStorage.setItem(storageNoteKey, userNote);
      setSavedNoteSuccess(true);
      setTimeout(() => setSavedNoteSuccess(false), 2000);
    } catch {}
  };

  const handleShare = () => {
    let text = `☕ MOMENTO COM O PAI\n`;
    text += `${devotional.dateDisplay} (Dia ${devotional.dayOfYear} de 365)\n\n`;
    text += `"${devotional.title.toUpperCase()}"\n\n`;
    text += `📖 Palavra do Pai:\n"${devotional.verseText}" — ${devotional.scriptureRef}\n\n`;
    text += `💬 Uma palavra ao seu coração:\n${devotional.fatherMessage[0]}\n\n`;
    text += `🔑 A CHAVE DO DIA:\n${devotional.keyOfTheDay}\n\n`;
    text += `🙏 Oração à Mesa:\n"${devotional.tablePrayer}"\n\n`;
    text += `— Compartilhado via O Mundo Cristão`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2e1d15] via-[#21150f] to-[#170e0a] text-[#fbf0d9] border border-amber-900/40 shadow-2xl p-6 sm:p-9 transition-all">
      {/* Luz ambiente de cafeteria acolhedora */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#c86b3e]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho do Card */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-800/30 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-amber-100 flex items-center justify-center shadow-lg shadow-amber-950/40 border border-amber-600/30">
              <Coffee className="w-6 h-6 text-amber-300 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-lg sm:text-xl text-[#fef5e7] tracking-tight">
                  Momento com o Pai
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Café & Comunhão
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-medium">
                {devotional.dateDisplay} • Dia {devotional.dayOfYear} de 365 • {devotional.readingTime}
              </p>
            </div>
          </div>

          {/* Ações: Seleção de Dias & Botão de Compartilhar */}
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-black/40 rounded-xl p-1 border border-white/5 text-xs">
              {MOMENTO_COM_O_PAI_LIST.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedDayIdx(idx)}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    selectedDayIdx === idx
                      ? 'bg-amber-700 text-white font-bold shadow-sm'
                      : 'text-amber-200/60 hover:text-white'
                  }`}
                >
                  {idx === 0 ? 'Hoje' : idx === 1 ? 'Amanhã' : `Dia ${idx + 1}`}
                </button>
              ))}
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-200 hover:text-white text-xs font-semibold border border-white/10 transition-all"
              title="Copiar mensagem completa para compartilhar"
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

        {/* Título & Subtítulo da Conversa */}
        <div>
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#fff8ee] leading-tight mb-1.5">
            {devotional.title}
          </h2>
          <p className="text-xs sm:text-sm text-amber-200/80 italic font-serif">
            "{devotional.subtitle}"
          </p>
        </div>

        {/* Versículo à Mesa */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/30 backdrop-blur-sm border border-amber-700/30 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" /> A Palavra de Hoje • {devotional.scriptureRef}
          </div>
          <p className="font-serif italic text-base sm:text-lg text-amber-100/95 leading-relaxed">
            "{devotional.verseText}"
          </p>
        </div>

        {/* Mensagem Íntima do Pai para o Filho */}
        <div className="space-y-3 font-serif text-sm sm:text-base leading-relaxed text-[#f3e5d0]/90 text-justify">
          {devotional.fatherMessage.map((p, idx) => (
            <p key={idx} className="indent-4">
              {p}
            </p>
          ))}
        </div>

        {/* A Chave do Dia (Ação Prática) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-950/80 to-[#3d2417] border border-amber-600/40 shadow-sm space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300">
            <KeyRound className="w-4 h-4 text-amber-400" />
            <span>A Chave do Dia (Sua Atitude de Hoje)</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-amber-100 leading-relaxed">
            {devotional.keyOfTheDay}
          </p>
        </div>

        {/* Oração à Mesa com o Pai */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-amber-500/20 space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Oração à Mesa com o Pai</span>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-stone-300 leading-relaxed">
            "{devotional.tablePrayer}"
          </p>
        </div>

        {/* Espaço Interativo: Meu Registro com o Pai Hoje */}
        <div className="pt-4 border-t border-amber-900/40 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <MessageSquareHeart className="w-4 h-4 text-amber-400" />
              Minha Resposta ao Pai Hoje (Seu Diário Pessoal)
            </label>
            {savedNoteSuccess && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1 animate-fadeIn">
                <Check className="w-3.5 h-3.5" /> Salvo no aparelho!
              </span>
            )}
          </div>

          <div className="relative">
            <textarea
              rows={3}
              value={userNote}
              onChange={(e) => setUserNote(e.target.value)}
              placeholder="O que o Pai falou ao seu coração neste momento? Escreva aqui para guardar como memorial..."
              className="w-full p-3.5 text-xs sm:text-sm rounded-2xl bg-black/30 border border-amber-800/40 text-stone-200 placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/60 transition-colors"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSaveNote}
                className="px-4 py-1.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors flex items-center gap-1.5"
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Salvar Minha Resposta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
