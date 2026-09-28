import React, { useState } from 'react';
import { HEROES_OF_FAITH, HeroOfFaith } from '../../data/heroesOfFaith';
import { Shield, Search, Award, BookOpen, Heart, Flame, ChevronRight, X, Copy, Check, Sparkles, Scroll, Languages, Landmark } from 'lucide-react';

export const HeroesOfFaithView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedHero, setSelectedHero] = useState<HeroOfFaith | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: `Todos (${HEROES_OF_FAITH.length})` },
    { id: 'patriarcas', label: 'Patriarcas da Aliança' },
    { id: 'lideres-juizes', label: 'Líderes & Juízes' },
    { id: 'reis', label: 'Reis de Israel' },
    { id: 'profetas', label: 'Profetas do Senhor' },
    { id: 'apostolos-martires', label: 'Apóstolos & Mártires' },
    { id: 'reformadores-pioneiros', label: 'Reformadores & Pioneiros' },
  ];

  const filtered = HEROES_OF_FAITH.filter((h) => {
    const matchesCat = selectedCategory === 'all' || h.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCat;

    const matchesQuery =
      h.name.toLowerCase().includes(query) ||
      h.title.toLowerCase().includes(query) ||
      h.summary.toLowerCase().includes(query) ||
      h.trialOfFaith.toLowerCase().includes(query) ||
      h.theologicalDoctrine.toLowerCase().includes(query) ||
      h.christConnection.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn max-w-7xl mx-auto">
      {/* Header da Tela */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <Award className="w-4 h-4" /> Galeria da Fé • Hebreus 11 & História Cristã
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2.5">
          <span>Os Heróis da Fé & Gigantes da Teologia</span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300 font-mono font-bold">
            {HEROES_OF_FAITH.length} Biografias
          </span>
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-3xl leading-relaxed">
          Exegese bíblica no original, teologia pactual sistemática, provações severas e como cada servo de Deus apontou para a redenção suprema em Jesus Cristo.
        </p>
      </div>

      {/* Busca e Filtros */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar herói, doutrina, provação ou termo (ex: Abraão, Justificação, Wesley, Moriá, Graça)..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === c.id
                  ? 'bg-amber-800 text-white dark:bg-amber-700 shadow-sm'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Cards dos Heróis da Fé */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((hero) => (
          <div
            key={hero.id}
            onClick={() => setSelectedHero(hero)}
            className="group cursor-pointer rounded-3xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 shadow-sm hover:shadow-xl transition-all p-6 flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                  {hero.category.replace('-', ' ')}
                </span>
                <span className="text-xs font-mono text-amber-700 dark:text-amber-400 font-semibold line-clamp-1 max-w-[140px]">
                  {hero.originalName}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                  {hero.name}
                </h3>
                <p className="text-xs text-amber-800 dark:text-amber-400 font-semibold mt-0.5">
                  {hero.title}
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50/50 dark:bg-stone-800/40 border border-amber-200/50 dark:border-stone-700/50 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 flex items-center gap-1">
                  <Landmark className="w-3 h-3 text-amber-600" /> Doutrina Bíblica Chave:
                </span>
                <p className="text-xs text-stone-700 dark:text-stone-300 line-clamp-2">
                  {hero.theologicalDoctrine}
                </p>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-3 leading-relaxed">
                {hero.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-semibold text-amber-700 dark:text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Ver Estudo Teológico Profundo</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal Detalhado e Profundamente Teológico */}
      {selectedHero && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col">
            {/* Header do Modal */}
            <div className="flex items-start justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                    {selectedHero.category.replace('-', ' ')}
                  </span>
                  <span className="text-xs text-stone-400">
                    {selectedHero.biblicalReference}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  {selectedHero.name}
                </h2>
                <p className="text-xs font-semibold text-amber-800 dark:text-amber-400">
                  Original: {selectedHero.originalName} • {selectedHero.title}
                </p>
              </div>

              <button
                onClick={() => setSelectedHero(null)}
                className="p-1.5 rounded-full text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo Rolável */}
            <div className="flex-1 overflow-y-auto space-y-5 pr-2 scrollbar-thin">
              {/* Versículo de Hebreus 11 / Memorial Bíblico */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-stone-800 border-l-4 border-amber-600 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300 block">
                  Memorial Bíblico Sagrado:
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-stone-900 dark:text-stone-100 leading-relaxed">
                  "{selectedHero.hebrews11Verse}"
                </p>
              </div>

              {/* Exegese Linguística e Termos Originais */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/50">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-indigo-900 dark:text-indigo-300 flex items-center gap-1.5">
                  <Languages className="w-4 h-4 text-indigo-600" /> Exegese Bíblica & Raízes no Hebraico / Grego
                </h4>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                  {selectedHero.hebrewGreekExegesis}
                </p>
              </div>

              {/* Doutrina Teológica Sistemática */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-amber-50/60 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Landmark className="w-4 h-4 text-amber-600" /> Doutrina Teológica Sistemática & Pacto da Graça
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedHero.theologicalDoctrine}
                </p>
              </div>

              {/* O Grande Teste da Fé */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <Flame className="w-4 h-4" /> O Grande Teste da Fé (A Provação Severa)
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedHero.trialOfFaith}
                </p>
              </div>

              {/* A Vitória Alcançada */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-emerald-50/60 dark:bg-stone-800/80 border border-emerald-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-600" /> A Vitória Triunfante pela Fé
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedHero.victoryOfFaith}
                </p>
              </div>

              {/* Conexão com Jesus Cristo */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-transparent border-l-4 border-amber-600 dark:border-amber-500 p-4 rounded-2xl">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Tipologia Messiânica & Conexão com Jesus Cristo
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedHero.christConnection}
                </p>
              </div>

              {/* Olhar Teológico Wesleyano */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-100 dark:bg-stone-800/90 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-amber-800 dark:text-amber-400 flex items-center gap-1.5">
                  <Scroll className="w-4 h-4 text-amber-600" /> Olhar Wesleyano & Santidade Prática
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  {selectedHero.wesleyanInsight}
                </p>
              </div>

              {/* Lição Pastoral Prática */}
              <div className="space-y-1.5 p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="font-serif font-bold text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500" /> Lição Pastoral Prática para a Nossa Vida
                </h4>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed italic">
                  "{selectedHero.lifeLesson}"
                </p>
              </div>
            </div>

            {/* Rodapé com Cópia */}
            <div className="flex items-center justify-between pt-3 border-t border-stone-200 dark:border-stone-800">
              <button
                onClick={() => handleCopyText(`${selectedHero.name} - ${selectedHero.title}\n\nDoutrina: ${selectedHero.theologicalDoctrine}\n\nExegese: ${selectedHero.hebrewGreekExegesis}\n\nVerso: ${selectedHero.hebrews11Verse}\n\nO Mundo Cristão`, selectedHero.id)}
                className="inline-flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 hover:text-amber-700 font-semibold"
              >
                {copiedId === selectedHero.id ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Estudo Completo</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedHero(null)}
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
