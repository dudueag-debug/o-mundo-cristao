import React, { useState } from 'react';
import { BIBLICAL_CHARACTERS, BiblicalCharacter } from '../../data/biblicalCharacters';
import { Users, Search, BookOpen, Sparkles, ChevronRight, X, Copy, Check, Shield, Globe, Languages } from 'lucide-react';

export const BiblicalCharactersView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [testamentFilter, setTestamentFilter] = useState<'ALL' | 'AT' | 'NT'>('ALL');
  const [selectedCharacter, setSelectedCharacter] = useState<BiblicalCharacter | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filtered = BIBLICAL_CHARACTERS.filter((c) => {
    const matchesTestament = testamentFilter === 'ALL' || c.testament === testamentFilter;
    const matchesQuery =
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.originalName.includes(searchQuery) ||
      c.transliteration.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.nationality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.completeBiography.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTestament && matchesQuery;
  });

  const handleCopyVerse = (verse: string, id: string) => {
    navigator.clipboard.writeText(verse);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto">
      {/* Header da Tela */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Users className="w-4 h-4" /> Dicionário Biográfico Canônico
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
          <span>Enciclopédia de Personagens da Bíblia</span>
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-3xl">
          Consulte cada personagem central das Escrituras com seu nome no original (Hebraico e Grego), significado etimológico, nacionalidade e tribo genealógica, biografia teológica completa e conexões com Cristo.
        </p>
      </div>

      {/* Busca e Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar personagem, nome original ou nacionalidade (ex: Moisés, David, Paulo, Benjamim, Judá)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>

        <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-1 rounded-2xl shrink-0 text-xs font-semibold">
          <button
            onClick={() => setTestamentFilter('ALL')}
            className={`px-3.5 py-1.5 rounded-xl transition-colors ${
              testamentFilter === 'ALL'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300'
            }`}
          >
            Todos ({BIBLICAL_CHARACTERS.length})
          </button>
          <button
            onClick={() => setTestamentFilter('AT')}
            className={`px-3.5 py-1.5 rounded-xl transition-colors ${
              testamentFilter === 'AT'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300'
            }`}
          >
            Antigo Testamento
          </button>
          <button
            onClick={() => setTestamentFilter('NT')}
            className={`px-3.5 py-1.5 rounded-xl transition-colors ${
              testamentFilter === 'NT'
                ? 'bg-amber-800 text-white shadow-sm'
                : 'text-stone-600 dark:text-stone-300'
            }`}
          >
            Novo Testamento
          </button>
        </div>
      </div>

      {/* Grid de Personagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((char) => (
          <div
            key={char.id}
            onClick={() => setSelectedCharacter(char)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {char.role}
                </span>
                <span className="text-base font-serif font-bold text-amber-800 dark:text-amber-300">
                  {char.originalName}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {char.name}
                </h3>
                <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-0.5">
                  {char.transliteration} • Significado: "{char.meaning}"
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-600" /> Nacionalidade & Origem:
                </span>
                <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                  {char.nationality}
                </p>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                {char.completeBiography}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Ler Biografia Completa & Teologia</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes do Personagem Bíblico */}
      {selectedCharacter && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {selectedCharacter.testament === 'AT' ? 'Antigo Testamento' : 'Novo Testamento'} • {selectedCharacter.role}
                  </span>
                  <span className="text-xs text-stone-400">
                    {selectedCharacter.historicalPeriod}
                  </span>
                </div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                    {selectedCharacter.name}
                  </h2>
                  <span className="text-xl font-serif font-bold text-amber-700 dark:text-amber-400">
                    {selectedCharacter.originalName}
                  </span>
                </div>
                <p className="text-xs font-semibold text-amber-800 dark:text-amber-400 mt-0.5">
                  {selectedCharacter.transliteration} • Significado: "{selectedCharacter.meaning}"
                </p>
              </div>

              <button
                onClick={() => setSelectedCharacter(null)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo Rolável */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-2">
              {/* Nacionalidade e Tribo */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-amber-600" /> Nacionalidade, Povo & Tribo Genealógica:
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
                  {selectedCharacter.nationality}
                </p>
              </div>

              {/* Biografia Bíblica Completa */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  Biografia Bíblica Completa e Teologicamente Comprovada
                </h4>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed whitespace-pre-wrap bg-stone-50 dark:bg-stone-800/50 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 font-serif">
                  {selectedCharacter.completeBiography}
                </div>
              </div>

              {/* Legado Espiritual e Conexão Messiânica */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Legado Espiritual & Apontamento para Jesus Cristo
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedCharacter.spiritualLegacyAndChrist}
                </p>
              </div>

              {/* Versículo de Ouro */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block">
                  Versículo Chave:
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                  {selectedCharacter.keyVerse}
                </p>
              </div>
            </div>

            {/* Rodapé com Cópia */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => handleCopyVerse(selectedCharacter.keyVerse, selectedCharacter.id)}
                className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 hover:text-amber-700 font-semibold"
              >
                {copiedId === selectedCharacter.id ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Versículo</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedCharacter(null)}
                className="px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
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
