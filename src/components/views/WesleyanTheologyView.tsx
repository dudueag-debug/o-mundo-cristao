import React, { useState } from 'react';
import { WESLEYAN_THEOLOGY_TOPICS, TheologicalTopic } from '../../data/wesleyanTheology';
import { Sparkles, Search, BookOpen, Quote, CheckCircle2, ChevronRight } from 'lucide-react';

export const WesleyanTheologyView: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<TheologicalTopic>(WESLEYAN_THEOLOGY_TOPICS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Artigos' },
    { id: 'graca', label: 'A Ordem da Graça' },
    { id: 'pilares', label: 'Quadrilátero Wesleyano' },
    { id: 'santificacao', label: 'Santificação & Perfeição' },
    { id: 'vida-wesley', label: 'Vida de John Wesley' },
  ];

  const filteredTopics = WESLEYAN_THEOLOGY_TOPICS.filter((topic) => {
    const matchesCategory = activeCategory === 'all' || topic.category === activeCategory;
    const matchesSearch =
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.keyConcept.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12">
      {/* Header da Seção */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Sparkles className="w-4 h-4" /> Doutrinas & Avivamento
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Teologia Wesleyana
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Conheça as bases bíblicas da tradição armínio-wesleyana: a universalidade da graça, a santidade de coração e de vida, e a paixão evangelística.
        </p>
      </div>

      {/* Busca e Filtros de Categoria */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar tema, graça preveniente, santificação, Wesley..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 transition-colors"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Principal: Lista Lateral e Leitor Central */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista de Tópicos */}
        <div className="lg:col-span-4 space-y-2 max-h-[600px] overflow-y-auto pr-1">
          {filteredTopics.length === 0 ? (
            <p className="text-xs text-stone-500 italic p-4 text-center">
              Nenhum tema teológico encontrado para essa busca.
            </p>
          ) : (
            filteredTopics.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <div
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all text-left ${
                    isSelected
                      ? 'bg-amber-50/90 dark:bg-stone-800/90 border-amber-500/60 shadow-sm ring-1 ring-amber-500/30'
                      : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 dark:text-amber-400">
                      {topic.category}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-700 dark:text-amber-400' : 'text-stone-400'}`} />
                  </div>
                  <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2">
                    {topic.summary}
                  </p>
                </div>
              );
            })
          )}
        </div>

        {/* Leitor Completo do Tópico Selecionado */}
        <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm transition-colors space-y-6">
          <div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 border border-amber-300/40 uppercase tracking-wider">
              {selectedTopic.category}
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 mt-2 mb-1">
              {selectedTopic.title}
            </h2>
            <p className="text-sm font-medium text-amber-800 dark:text-amber-400">
              {selectedTopic.subtitle}
            </p>
          </div>

          {/* Conceito Chave */}
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40">
            <h4 className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Essência da Doutrina
            </h4>
            <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200">
              "{selectedTopic.keyConcept}"
            </p>
          </div>

          {/* Base Bíblica */}
          <div>
            <h4 className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Textos Bíblicos Fundamentais
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedTopic.scriptures.map((ref, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700"
                >
                  {ref}
                </span>
              ))}
            </div>
          </div>

          {/* Conteúdo Explicativo Completo */}
          <div className="space-y-4 pt-2 border-t border-stone-100 dark:border-stone-800">
            {selectedTopic.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Citação de John Wesley */}
          {selectedTopic.wesleyQuote && (
            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/60 border-l-4 border-amber-600 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-400">
                <Quote className="w-3.5 h-3.5" /> Nas palavras de John Wesley:
              </div>
              <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200">
                "{selectedTopic.wesleyQuote}"
              </p>
            </div>
          )}

          {/* Aplicação Prática */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 space-y-1.5">
            <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Aplicação Prática no Dia a Dia e Ministério
            </h4>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              {selectedTopic.practicalApplication}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
