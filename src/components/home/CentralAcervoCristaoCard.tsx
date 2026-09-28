import React, { useState } from 'react';
import {
  Award,
  UserCheck,
  Scroll,
  BookOpen,
  Film,
  ScrollText,
  Sparkles,
  ChevronRight,
  Heart,
  Cross,
  Church,
  Flame,
  Landmark,
  MapPin,
  Users,
  BookMarked,
  Search,
  CheckCircle2,
  Compass
} from 'lucide-react';

interface CentralAcervoCristaoCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralAcervoCristaoCard: React.FC<CentralAcervoCristaoCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos os Módulos (15)' },
    { id: 'historia', label: 'História & Avivamento (3)' },
    { id: 'personagens', label: 'Bíblia, Vidas & Lugares (6)' },
    { id: 'doutrina', label: 'Teologia & Clássicos (4)' },
    { id: 'recursos', label: 'Púlpito & Multimídia (2)' },
  ];

  const modules = [
    {
      id: 'herois-da-fe',
      tab: 'herois-da-fe',
      subTab: undefined,
      category: 'personagens',
      title: 'Heróis da Fé',
      count: 'Galeria da Fé & Mártires',
      tag: 'Hebreus 11 • Reformadores',
      icon: Award,
      color: 'from-amber-600 to-amber-800',
      textColor: 'text-amber-400',
      description: 'Lutero, Calvino, John Wesley, Spurgeon, Moody, Jim Elliot e mártires que viveram pela fé sem vacilar.'
    },
    {
      id: 'personagens',
      tab: 'personagens',
      subTab: undefined,
      category: 'personagens',
      title: 'Personagens Bíblicos',
      count: '20 Gigantes das Escrituras',
      tag: 'Exegese Hebraico/Grego',
      icon: UserCheck,
      color: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-400',
      description: 'Significado no original hebraico e grego, teologia pactual, genealogia e conexão profética com Cristo.'
    },
    {
      id: 'profetas',
      tab: 'profetas',
      subTab: undefined,
      category: 'personagens',
      title: 'Profetas Maiores & Menores',
      count: '16 Profetas Canônicos',
      tag: 'Oráculos Messiânicos',
      icon: Scroll,
      color: 'from-emerald-600 to-emerald-800',
      textColor: 'text-emerald-400',
      description: 'De Isaías a Malaquias: contexto histórico exegético, o Dia do Senhor e o anúncio profético do Messias.'
    },
    {
      id: 'mulheres',
      tab: 'mulheres-vida-de-cristo',
      subTab: 'mulheres',
      category: 'personagens',
      title: 'Mulheres Virtuosas',
      count: '12 Matriarcas & Heroínas',
      tag: 'Santidade & Redenção',
      icon: Heart,
      color: 'from-rose-600 to-rose-800',
      textColor: 'text-rose-400',
      description: 'Sara, Rute, Ester, Débora, Maria e mulheres que moldaram a história da salvação com pureza, fé e oração.'
    },
    {
      id: 'vida-de-cristo',
      tab: 'mulheres-vida-de-cristo',
      subTab: 'vida',
      category: 'personagens',
      title: 'A Vida de Cristo',
      count: '35 Milagres • 40 Parábolas',
      tag: 'Cristologia & Passos 3D',
      icon: Cross,
      color: 'from-indigo-600 to-indigo-800',
      textColor: 'text-indigo-400',
      description: 'Cronologia messiânica pura, teologia da cruz, milagres, parábolas e mapa 3D dos passos sagrados de Jesus.'
    },
    {
      id: 'historia',
      tab: 'historia',
      subTab: 'geral',
      category: 'historia',
      title: 'História das Igrejas',
      count: '8 Eras Eclesiásticas',
      tag: 'Concílios & Reforma',
      icon: Landmark,
      color: 'from-amber-700 to-amber-950',
      textColor: 'text-amber-400',
      description: 'Igreja Primitiva, Patrística, Credo Niceno, Concílios, Reforma Protestante de 1517 e Grandes Avivamentos.'
    },
    {
      id: 'imw',
      tab: 'historia',
      subTab: 'imw',
      category: 'historia',
      title: 'Avivamento & História Wesleyana',
      count: 'IMW 1967 • Aldersgate 1738',
      tag: 'Fervor & Dons do Espírito',
      icon: Flame,
      color: 'from-orange-600 to-red-800',
      textColor: 'text-orange-400',
      description: 'Aldersgate 1738 de John Wesley, o avivamento de Nova Friburgo de 1967 e os pioneiros da IMW.'
    },
    {
      id: 'teologia',
      tab: 'teologia',
      subTab: undefined,
      category: 'doutrina',
      title: 'Teologia Wesleyana & Graça',
      count: 'Doutrinas da Graça',
      tag: 'Ordem da Salvação',
      icon: Sparkles,
      color: 'from-yellow-600 to-amber-800',
      textColor: 'text-amber-300',
      description: 'A Ordem da Graça (Preveniente, Justificadora, Santificadora), o Quadrilátero e a Santidade de vida.'
    },
    {
      id: 'denominacoes',
      tab: 'denominacoes',
      subTab: undefined,
      category: 'historia',
      title: 'Origem das Denominações',
      count: '15 Tradições Cristãs',
      tag: 'Eclesiologia Documentada',
      icon: Church,
      color: 'from-cyan-700 to-blue-900',
      textColor: 'text-cyan-400',
      description: 'Assembleia de Deus, Batistas, Presbiterianas, Metodistas, Luteranas, Anglicanas e origens históricas.'
    },
    {
      id: 'lugares-sagrados',
      tab: 'lugares-sagrados',
      subTab: undefined,
      category: 'personagens',
      title: 'Geografia Sagrada de Jesus',
      count: 'Montes, Rios & Cidades',
      tag: 'Hebraico, Grego & Arqueologia',
      icon: MapPin,
      color: 'from-emerald-700 to-teal-900',
      textColor: 'text-emerald-400',
      description: 'Getsêmani, Gólgota, Cafarnaum, Sinai, Carmelo com nomes nativos, significado literal e relevância bíblica.'
    },
    {
      id: 'teologos',
      tab: 'teologos',
      subTab: undefined,
      category: 'doutrina',
      title: 'Grandes Teólogos da Fé',
      count: '16 Mestres Históricos',
      tag: 'Patrística à Atualidade',
      icon: Users,
      color: 'from-amber-600 to-stone-800',
      textColor: 'text-amber-400',
      description: 'John Wesley, Spurgeon, Calvino, Lutero, C.S. Lewis, Agostinho, Jonathan Edwards e Bonhoeffer.'
    },
    {
      id: 'obras-cristocentricas',
      tab: 'obras-cristocentricas',
      subTab: undefined,
      category: 'doutrina',
      title: 'Obras Cristocêntricas Clássicas',
      count: '12 Clássicos Imortais',
      tag: 'Literatura Ortodoxa',
      icon: BookMarked,
      color: 'from-rose-700 to-red-900',
      textColor: 'text-rose-400',
      description: 'Cristianismo Puro e Simples, A Cruz de Cristo, O Peregrino, O Tesouro de Davi e tratados espirituais.'
    },
    {
      id: 'livros',
      tab: 'livros',
      subTab: undefined,
      category: 'doutrina',
      title: 'Biblioteca Teológica',
      count: 'E-Reader Integrado',
      tag: 'Obras Cristocêntricas',
      icon: BookOpen,
      color: 'from-amber-800 to-stone-900',
      textColor: 'text-amber-400',
      description: 'Obras de teologia sistemática, comentários bíblicos, tratados de santidade e clássicos sacros.'
    },
    {
      id: 'sermoes',
      tab: 'sermoes',
      subTab: undefined,
      category: 'recursos',
      title: 'Esboços & Homilética de Púlpito',
      count: 'Homilética para Púlpito',
      tag: 'Sermões Expositivos',
      icon: ScrollText,
      color: 'from-teal-600 to-teal-800',
      textColor: 'text-teal-400',
      description: 'Esboços estruturados com proposição, tópicos, exegese, ilustrações e apelo pastoral fundamentado na Palavra.'
    },
    {
      id: 'videos',
      tab: 'videos',
      subTab: undefined,
      category: 'recursos',
      title: 'Mídia & Vídeos Cristãos',
      count: 'Vídeos & PDFs',
      tag: 'Multimídia Pastoral',
      icon: Film,
      color: 'from-purple-600 to-purple-800',
      textColor: 'text-purple-400',
      description: 'Animações bíblicas, documentários históricos, estudos em vídeo e upload de seus próprios PDFs para leitura.'
    }
  ];

  const filteredModules = modules.filter((m) => {
    const matchesCat = selectedCategory === 'all' || m.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#18110b] via-stone-900 to-[#120a06] text-white shadow-xl border border-amber-600/30 p-6 sm:p-8 transition-all hover:border-amber-500/50">
      {/* Luzes Suaves de Fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho Unificado e Nobre */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Acervo Central do Saber Cristão
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-100 flex items-center gap-2">
              <span>Central do Saber Bíblico & Teológico</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
              Heróis da Fé, Personagens, Profetas, Mulheres, Vida de Cristo, História da Igreja, Avivamento Wesleyano (IMW 1967), Geografia Sagrada, Teologia e Esboços reunidos com máxima profundidade e sem heresias. Toque em qualquer módulo para abri-lo internamente sem poluição visual.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0 self-start sm:self-center">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
              {modules.length} Módulos Integrados
            </span>
          </div>
        </div>

        {/* Barra de Busca e Filtros de Categoria */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Pesquisar módulo, personagem, tema (ex: Wesley, IMW, milagres, concílios, Spurgeon, profetas)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-black/50 border border-white/10 text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === c.id
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-900/40 ring-1 ring-amber-400/50'
                    : 'bg-white/5 hover:bg-white/10 text-stone-300 border border-white/5'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Módulos Limpos e Clicáveis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3.5">
          {filteredModules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => onSelectTab(m.tab, m.subTab)}
                className="group cursor-pointer p-4 rounded-2xl bg-black/40 hover:bg-black/60 border border-white/5 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-stone-300 font-mono">
                      {m.count}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${m.textColor}`}>
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-sm sm:text-base text-stone-100 group-hover:text-amber-300 transition-colors">
                      {m.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed line-clamp-2">
                      {m.description}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-stone-400 group-hover:text-amber-300 transition-colors">
                  <span>Acessar módulo</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
