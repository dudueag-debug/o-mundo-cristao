import React, { useState } from 'react';
import { BIBLICAL_PROPHETS, BiblicalProphet } from '../../data/biblicalProphets';
import { Scroll, Search, BookOpen, Sparkles, ChevronRight, X, Copy, Check, ShieldAlert, HeartHandshake, Flame, Calendar, Award } from 'lucide-react';

export const ProphetsView: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<'all' | 'maior' | 'menor'>('all');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProphet, setActiveProphet] = useState<BiblicalProphet | null>(null);
  const [copiedVerse, setCopiedVerse] = useState(false);

  const filteredProphets = BIBLICAL_PROPHETS.filter((p) => {
    const matchesClass = selectedClass === 'all' || p.classification === selectedClass;
    const matchesPeriod = selectedPeriod === 'all' || p.period === selectedPeriod;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      p.name.toLowerCase().includes(query) ||
      p.nameMeaning.toLowerCase().includes(query) ||
      p.centralMessage.toLowerCase().includes(query) ||
      p.audience.toLowerCase().includes(query) ||
      p.keyThemes.some((t) => t.toLowerCase().includes(query));

    return matchesClass && matchesPeriod && matchesQuery;
  });

  const handleCopyVerse = (verse: { reference: string; text: string }, prophetName: string) => {
    const text = `📜 "${verse.text}"\n— ${verse.reference} (${prophetName})\n\nCompartilhado via O Mundo Cristão`;
    navigator.clipboard.writeText(text);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Cabeçalho da Página */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-5">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1.5">
          <Scroll className="w-4 h-4" /> Vozes de Deus no Antigo Testamento
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-4xl text-stone-900 dark:text-stone-100 tracking-tight">
          Profetas Maiores e Menores
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1.5 max-w-3xl leading-relaxed">
          Conheça as histórias completas, a época de cada profeta, suas lutas e martírios, suas mensagens centrais e como todos eles apontaram para a vinda de Jesus Cristo.
        </p>
      </div>

      {/* Card Explicativo Didático: Por que "Maiores" e "Menores"? */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-900/20 via-amber-800/10 to-transparent p-5 sm:p-6 border border-amber-500/30 shadow-sm space-y-3">
        <div className="flex items-center gap-2.5 text-amber-800 dark:text-amber-300 font-serif font-bold text-base sm:text-lg">
          <BookOpen className="w-5 h-5 text-amber-600" />
          <span>Por que são chamados de "Maiores" e "Menores"?</span>
        </div>
        <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
          Essa classificação bíblica histórica <strong>não se refere à importância ou autoridade espiritual</strong> dos profetas — todos falaram inspirados pelo mesmo Espírito Santo!
          A distinção refere-se unicamente ao <strong>tamanho e volume dos seus escritos</strong>:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
          <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong className="text-amber-900 dark:text-amber-400 block font-serif">
              🏛️ Profetas Maiores (4 Profetas / 5 Livros)
            </strong>
            <span className="text-stone-600 dark:text-stone-400">
              Isaías, Jeremias, Lamentações, Ezequiel e Daniel. Livros extensos que precisavam de rolos inteiros de pergaminho individuais.
            </span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-stone-200 dark:border-stone-800 space-y-1">
            <strong className="text-amber-900 dark:text-amber-400 block font-serif">
              📜 Profetas Menores (Os 12 Livros)
            </strong>
            <span className="text-stone-600 dark:text-stone-400">
              Oseias a Malaquias. Obras mais concisas que no cânon hebraico cabiam todos juntos em um único rolo chamado <em>"O Livro dos Doze"</em>.
            </span>
          </div>
        </div>
      </div>

      {/* Barra de Busca e Filtros */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por profeta (ex: Isaías, Daniel, Habacuque), significado do nome, reis..."
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400"
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          {/* Filtro Maiores vs Menores */}
          <div className="flex gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-2xl text-xs font-semibold">
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                selectedClass === 'all'
                  ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Todos (17)
            </button>
            <button
              onClick={() => setSelectedClass('maior')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                selectedClass === 'maior'
                  ? 'bg-white dark:bg-stone-900 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Profetas Maiores (5)
            </button>
            <button
              onClick={() => setSelectedClass('menor')}
              className={`px-3.5 py-1.5 rounded-xl transition-all ${
                selectedClass === 'menor'
                  ? 'bg-white dark:bg-stone-900 text-amber-800 dark:text-amber-400 shadow-sm'
                  : 'text-stone-500 hover:text-stone-900 dark:hover:text-stone-100'
              }`}
            >
              Profetas Menores (12)
            </button>
          </div>

          {/* Filtro por Período */}
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-none text-xs">
            {[
              { id: 'all', label: 'Todas as Épocas' },
              { id: 'pre-exilio', label: 'Pré-Exílio' },
              { id: 'exilio', label: 'No Exílio (Babilônia)' },
              { id: 'pos-exilio', label: 'Pós-Exílio (Retorno)' },
            ].map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPeriod(p.id)}
                className={`px-3 py-1 rounded-xl text-[11px] font-medium whitespace-nowrap transition-colors ${
                  selectedPeriod === p.id
                    ? 'bg-amber-800 text-white dark:bg-amber-700'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grade de Profetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProphets.map((prophet) => (
          <div
            key={prophet.id}
            onClick={() => setActiveProphet(prophet)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-400 dark:hover:border-amber-600/60 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5"
          >
            <div className="space-y-3">
              {/* Badges de Classificação & Época */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    prophet.classification === 'maior'
                      ? 'bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-400/40'
                      : 'bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-300'
                  }`}
                >
                  {prophet.classification === 'maior' ? 'Profeta Maior' : 'Profeta Menor'}
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                  {prophet.approximateDates}
                </span>
              </div>

              {/* Nome do Profeta e Significado */}
              <div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  <span>{prophet.name}</span>
                </h3>
                <p className="text-xs font-medium text-amber-800 dark:text-amber-400 italic">
                  Significado: "{prophet.nameMeaning}"
                </p>
              </div>

              {/* Informações de Período & Reis */}
              <div className="text-[11px] text-stone-500 dark:text-stone-400 space-y-1 bg-stone-50 dark:bg-stone-800/40 p-3 rounded-2xl border border-stone-100 dark:border-stone-800/60">
                <div className="flex items-start gap-1">
                  <Calendar className="w-3 h-3 text-amber-600 mt-0.5 shrink-0" />
                  <span><strong>Período:</strong> {prophet.periodDisplay}</span>
                </div>
                <div className="flex items-start gap-1">
                  <Award className="w-3 h-3 text-amber-600 mt-0.5 shrink-0" />
                  <span><strong>Destinatários:</strong> {prophet.audience}</span>
                </div>
              </div>

              {/* Resumo da Mensagem Central */}
              <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-3 leading-relaxed">
                {prophet.centralMessage}
              </p>
            </div>

            {/* Rodapé do Card com Chamada */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between mt-4">
              <span className="text-[11px] font-semibold text-amber-700 dark:text-amber-400 group-hover:underline">
                Ler História Completa & Mensagem
              </span>
              <ChevronRight className="w-4 h-4 text-amber-600 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes Completos do Profeta */}
      {activeProphet && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Topo do Modal */}
            <div className="relative bg-gradient-to-r from-amber-800 via-amber-900 to-stone-950 p-6 sm:p-8 text-white shrink-0">
              <button
                onClick={() => setActiveProphet(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-amber-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 border border-amber-400/40 text-amber-200">
                  {activeProphet.classification === 'maior' ? 'Profeta Maior' : 'Profeta Menor'}
                </span>
                <span className="text-xs text-amber-200/80 font-mono">
                  {activeProphet.approximateDates}
                </span>
              </div>

              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-amber-100">
                {activeProphet.name}
              </h2>

              <p className="text-xs sm:text-sm text-amber-300 font-serif italic mt-0.5">
                Significado do Nome: "{activeProphet.nameMeaning}"
              </p>

              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-amber-100/80">
                <span><strong>Época:</strong> {activeProphet.periodDisplay}</span>
                <span><strong>Público:</strong> {activeProphet.audience}</span>
                <span><strong>Reis:</strong> {activeProphet.contemporaryKings}</span>
              </div>
            </div>

            {/* Conteúdo com Scroll */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              {/* 1. Biografia e Chamado */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Quem Foi e o Seu Chamado Vocacional
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200 dark:border-stone-800">
                  {activeProphet.biographyAndCalling}
                </p>
              </div>

              {/* 2. O Que Aconteceu com Ele (Lutas, Perseguições e Martírio) */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> O Que Aconteceu com Ele (Lutas, Perseguições e História)
                </h4>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-rose-50/70 dark:bg-rose-950/30 p-4 rounded-2xl border border-rose-200/70 dark:border-rose-900/40">
                  {activeProphet.whatHappenedToHim}
                </div>
              </div>

              {/* 3. A Mensagem Central do Livro */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-2">
                  <Flame className="w-4 h-4" /> A Mensagem Profética Central
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200 dark:border-stone-800">
                  {activeProphet.centralMessage}
                </p>
              </div>

              {/* 4. Como Aponta para Jesus Cristo (Profecias Messiânicas) */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Como Aponta para Jesus Cristo (Profecias Messiânicas)
                </h4>
                <ul className="space-y-2">
                  {activeProphet.messianicProphecies.map((item, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-xs sm:text-sm text-stone-800 dark:text-stone-200 flex items-start gap-2"
                    >
                      <span className="text-amber-600 dark:text-amber-400 font-bold">✝</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Versículo de Ouro */}
              <div className="p-4 sm:p-5 rounded-2xl bg-stone-900 text-stone-100 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                    Versículo de Ouro • {activeProphet.goldenVerse.reference}
                  </span>
                  <button
                    onClick={() => handleCopyVerse(activeProphet.goldenVerse, activeProphet.name)}
                    className="flex items-center gap-1 text-xs text-amber-300 hover:text-white bg-white/10 px-3 py-1 rounded-lg transition-colors"
                  >
                    {copiedVerse ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedVerse ? 'Copiado!' : 'Copiar Versículo'}</span>
                  </button>
                </div>
                <blockquote className="font-serif text-sm sm:text-base italic text-amber-100 leading-relaxed border-l-2 border-amber-500 pl-3">
                  "{activeProphet.goldenVerse.text}"
                </blockquote>
              </div>
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 text-right shrink-0">
              <button
                onClick={() => setActiveProphet(null)}
                className="px-6 py-2 rounded-xl bg-stone-200 hover:bg-stone-300 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
