import React, { useState, useEffect } from 'react';
import { INITIAL_SERMON_OUTLINES, SermonOutline } from '../../data/sermonOutlines';
import { storageService } from '../../services/storageService';
import { ScrollText, Search, Plus, Copy, Check, BookOpen, Lightbulb, Flame, Trash2, X } from 'lucide-react';

export const SermonsView: React.FC = () => {
  const [sermons, setSermons] = useState<SermonOutline[]>([]);
  const [selectedSermon, setSelectedSermon] = useState<SermonOutline | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isCopied, setIsCopied] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  // Formulário de novo esboço
  const [newTitle, setNewTitle] = useState('');
  const [newTheme, setNewTheme] = useState('');
  const [newScripture, setNewScripture] = useState('');
  const [newBigIdea, setNewBigIdea] = useState('');
  const [newIntro, setNewIntro] = useState('');
  const [newP1Title, setNewP1Title] = useState('');
  const [newP1App, setNewP1App] = useState('');
  const [newP2Title, setNewP2Title] = useState('');
  const [newP2App, setNewP2App] = useState('');
  const [newIllustration, setNewIllustration] = useState('');
  const [newConclusion, setNewConclusion] = useState('');

  useEffect(() => {
    const custom = storageService.getCustomSermons();
    const combined = [...custom, ...INITIAL_SERMON_OUTLINES];
    setSermons(combined);
    if (combined.length > 0) {
      setSelectedSermon(combined[0]);
    }
  }, []);

  const handleCreateSermon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newScripture.trim()) return;

    const newOutline: SermonOutline = {
      id: `custom-${Date.now()}`,
      title: newTitle,
      category: 'avivamento',
      theme: newTheme || 'Mensagem Geral',
      scriptureText: newScripture,
      bigIdea: newBigIdea,
      introduction: newIntro,
      points: [
        {
          title: newP1Title || 'I. Primeiro Ponto',
          explanation: '',
          application: newP1App
        },
        ...(newP2Title ? [{
          title: newP2Title,
          explanation: '',
          application: newP2App
        }] : [])
      ],
      illustration: newIllustration,
      conclusion: newConclusion,
      isCustom: true
    };

    const custom = storageService.getCustomSermons();
    const updatedCustom = [newOutline, ...custom];
    storageService.saveCustomSermons(updatedCustom);

    const updatedAll = [newOutline, ...sermons];
    setSermons(updatedAll);
    setSelectedSermon(newOutline);
    setIsCreating(false);

    // Reset
    setNewTitle('');
    setNewTheme('');
    setNewScripture('');
    setNewBigIdea('');
    setNewIntro('');
    setNewP1Title('');
    setNewP1App('');
    setNewP2Title('');
    setNewP2App('');
    setNewIllustration('');
    setNewConclusion('');
  };

  const handleDeleteSermon = (id: string) => {
    const custom = storageService.getCustomSermons().filter(s => s.id !== id);
    storageService.saveCustomSermons(custom);
    const updatedAll = sermons.filter(s => s.id !== id);
    setSermons(updatedAll);
    if (selectedSermon?.id === id) {
      setSelectedSermon(updatedAll[0] || null);
    }
  };

  const handleCopyFormatted = () => {
    if (!selectedSermon) return;
    let text = `📖 ESBOÇO: ${selectedSermon.title.toUpperCase()}\n`;
    text += `Texto Bíblico: ${selectedSermon.scriptureText}\n`;
    text += `Tema: ${selectedSermon.theme}\n`;
    text += `Proposição: ${selectedSermon.bigIdea}\n\n`;
    text += `1. INTRODUÇÃO:\n${selectedSermon.introduction}\n\n`;
    text += `2. DESENVOLVIMENTO:\n`;
    selectedSermon.points.forEach((p, idx) => {
      text += `\n${p.title}\n`;
      if (p.scripture) text += `Referência: ${p.scripture}\n`;
      if (p.explanation) text += `${p.explanation}\n`;
      if (p.application) text += `Aplicação: ${p.application}\n`;
    });
    if (selectedSermon.illustration) {
      text += `\n3. ILUSTRAÇÃO:\n${selectedSermon.illustration}\n`;
    }
    text += `\n4. CONCLUSÃO & APELO:\n${selectedSermon.conclusion}\n\n`;
    text += `— Compartilhado via O Mundo Cristão`;

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  const filtered = sermons.filter(s => {
    const matchesCat = selectedCategory === 'all' || s.category === selectedCategory;
    const matchesQuery = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         s.scriptureText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <ScrollText className="w-4 h-4" /> Recursos Ministeriais
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Esboços de Pregação
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Biblioteca de sermões bíblicos estruturados para pregadores, professores de EBD e líderes.
          </p>
        </div>

        <button
          onClick={() => setIsCreating(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-amber-900/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Criar Meu Esboço</span>
        </button>
      </div>

      {/* Busca e Filtros */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por tema, texto bíblico (ex: Romanos 8, Josué, Lucas)..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
          />
        </div>
      </div>

      {/* Grid Principal: Lista e Visualizador */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista de Sermões */}
        <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-1">
          {filtered.length === 0 ? (
            <p className="text-xs text-stone-500 italic p-4 text-center">
              Nenhum esboço encontrado.
            </p>
          ) : (
            filtered.map((sermon) => {
              const isSelected = selectedSermon?.id === sermon.id;
              return (
                <div
                  key={sermon.id}
                  onClick={() => setSelectedSermon(sermon)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all text-left relative ${
                    isSelected
                      ? 'bg-amber-50/90 dark:bg-stone-800/90 border-amber-500/60 shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400">
                      {sermon.theme}
                    </span>
                    {sermon.isCustom && (
                      <span className="text-[9px] font-bold bg-amber-200 dark:bg-amber-950 text-amber-900 dark:text-amber-300 px-1.5 py-0.5 rounded">
                        Meu Esboço
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                    {sermon.title}
                  </h3>
                  <p className="text-xs font-medium text-stone-500 dark:text-stone-400 flex items-center gap-1">
                    <BookOpen className="w-3 h-3 text-amber-600" />
                    <span>{sermon.scriptureText}</span>
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Leitor do Esboço Selecionado */}
        {selectedSermon ? (
          <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40 uppercase tracking-wider">
                  {selectedSermon.theme}
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mt-2 mb-1">
                  {selectedSermon.title}
                </h2>
                <div className="flex items-center gap-2 text-sm text-amber-800 dark:text-amber-400 font-medium">
                  <BookOpen className="w-4 h-4" />
                  <span>Texto Bíblico: {selectedSermon.scriptureText}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyFormatted}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-medium transition-colors"
                  title="Copiar esboço estruturado"
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar Esboço</span>
                    </>
                  )}
                </button>

                {selectedSermon.isCustom && (
                  <button
                    onClick={() => handleDeleteSermon(selectedSermon.id)}
                    className="p-2 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/50 transition-colors"
                    title="Excluir meu esboço"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Proposição / Ideia Central */}
            {selectedSermon.bigIdea && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider block mb-1">
                  Proposição Central do Sermão:
                </span>
                <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200">
                  "{selectedSermon.bigIdea}"
                </p>
              </div>
            )}

            {/* Introdução */}
            {selectedSermon.introduction && (
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                  1. Introdução & Gancho
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/50 p-4 rounded-xl">
                  {selectedSermon.introduction}
                </p>
              </div>
            )}

            {/* Pontos do Sermão */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                2. Desenvolvimento da Mensagem
              </h4>
              {selectedSermon.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/70 dark:border-stone-700/60 space-y-2"
                >
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h5 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                      {pt.title}
                    </h5>
                    {pt.scripture && (
                      <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                        {pt.scripture}
                      </span>
                    )}
                  </div>
                  {pt.explanation && (
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {pt.explanation}
                    </p>
                  )}
                  {pt.application && (
                    <div className="pt-2 border-t border-stone-200/50 dark:border-stone-700/50">
                      <span className="text-[11px] font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider block">
                        Aplicação Ministerial / Vida Prática:
                      </span>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 italic">
                        {pt.application}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Ilustração para Púlpito */}
            {selectedSermon.illustration && (
              <div className="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800/40 space-y-1.5">
                <h4 className="text-xs font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Lightbulb className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  3. Ilustração de Púlpito
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedSermon.illustration}
                </p>
              </div>
            )}

            {/* Conclusão e Apelo */}
            {selectedSermon.conclusion && (
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-stone-800/80 border-l-4 border-amber-600 space-y-1">
                <h4 className="text-xs font-bold text-amber-900 dark:text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5" /> 4. Conclusão & Apelo
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedSermon.conclusion}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="lg:col-span-8 p-12 text-center text-stone-500">
            Selecione um esboço para visualizar.
          </div>
        )}
      </div>

      {/* Modal Criar Novo Esboço */}
      {isCreating && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-5 my-8">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                Criar Novo Esboço de Pregação
              </h3>
              <button
                onClick={() => setIsCreating(false)}
                className="p-1 rounded-lg text-stone-500 hover:text-stone-900 dark:hover:text-stone-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSermon} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Título do Sermão *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ex: O Poder da Oração Fervorosa"
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Texto Bíblico Principal *
                  </label>
                  <input
                    type="text"
                    required
                    value={newScripture}
                    onChange={(e) => setNewScripture(e.target.value)}
                    placeholder="Ex: Tiago 5:16-18"
                    className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                    Tema Central
                  </label>
                  <input
                    type="text"
                    value={newTheme}
                    onChange={(e) => setNewTheme(e.target.value)}
                    placeholder="Ex: Oração e Fé"
                    className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Proposição Central (Ideia Principal)
                </label>
                <input
                  type="text"
                  value={newBigIdea}
                  onChange={(e) => setNewBigIdea(e.target.value)}
                  placeholder="Ex: A oração não muda a soberania de Deus, mas libera o mover de Deus em nossa história."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Introdução
                </label>
                <textarea
                  rows={2}
                  value={newIntro}
                  onChange={(e) => setNewIntro(e.target.value)}
                  placeholder="Gancho de abertura para capturar a atenção da congregação..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="p-3 bg-stone-50 dark:bg-stone-800/60 rounded-xl space-y-2 border border-stone-200 dark:border-stone-700">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase">
                  Ponto I
                </span>
                <input
                  type="text"
                  value={newP1Title}
                  onChange={(e) => setNewP1Title(e.target.value)}
                  placeholder="Título do Ponto I (Ex: I. A Oração do Justo é Poderosa)"
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                />
                <input
                  type="text"
                  value={newP1App}
                  onChange={(e) => setNewP1App(e.target.value)}
                  placeholder="Aplicação Prática para os ouvintes..."
                  className="w-full px-3 py-1.5 text-xs rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Ilustração de Púlpito
                </label>
                <textarea
                  rows={2}
                  value={newIllustration}
                  onChange={(e) => setNewIllustration(e.target.value)}
                  placeholder="Uma história, parábola ou fato marcante..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Conclusão e Apelo
                </label>
                <textarea
                  rows={2}
                  value={newConclusion}
                  onChange={(e) => setNewConclusion(e.target.value)}
                  placeholder="Convocação ao altar ou desafio final..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Salvar Esboço
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
