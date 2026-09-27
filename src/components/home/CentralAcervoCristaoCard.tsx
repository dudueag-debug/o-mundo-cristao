import React from 'react';
import {
  Award,
  UserCheck,
  Scroll,
  BookOpen,
  Film,
  ScrollText,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Library,
  Flame,
  UploadCloud
} from 'lucide-react';

interface CentralAcervoCristaoCardProps {
  onSelectTab: (tab: string, subTab?: string) => void;
  onStudyWithGemini?: (prompt: string) => void;
}

export const CentralAcervoCristaoCard: React.FC<CentralAcervoCristaoCardProps> = ({
  onSelectTab,
  onStudyWithGemini
}) => {
  const modules = [
    {
      id: 'herois-da-fe',
      title: 'Heróis da Fé',
      count: '15 Biografias',
      tag: 'Reformadores & Mártires',
      icon: Award,
      color: 'from-amber-600 to-amber-800',
      textColor: 'text-amber-400',
      description: 'Lutero, Calvino, John Wesley, Spurgeon, Moody, Jim Elliot e pioneiros da fé cristã.'
    },
    {
      id: 'personagens',
      title: 'Personagens Bíblicos',
      count: '20 Personagens',
      tag: 'Antigo & Novo Testamento',
      icon: UserCheck,
      color: 'from-blue-600 to-blue-800',
      textColor: 'text-blue-400',
      description: 'Significado do nome no original, cronologia, papel histórico e lições espirituais práticas.'
    },
    {
      id: 'profetas',
      title: 'Profetas Maiores & Menores',
      count: '16 Profetas',
      tag: 'Cânon Profético',
      icon: Scroll,
      color: 'from-emerald-600 to-emerald-800',
      textColor: 'text-emerald-400',
      description: 'De Isaías a Malaquias: contexto histórico, temas centrais e profecias messiânicas.'
    },
    {
      id: 'livros',
      title: 'Biblioteca Teológica',
      count: 'E-Reader Integrado',
      tag: 'Clássicos Cristãos',
      icon: BookOpen,
      color: 'from-amber-700 to-amber-900',
      textColor: 'text-amber-400',
      description: 'Obras de teologia sistemática, comentários bíblicos e clássicos da literatura sacra.'
    },
    {
      id: 'videos',
      title: 'Mídia & Vídeos Cristãos',
      count: 'Vídeos & PDFs',
      tag: 'Multimídia Pastoral',
      icon: Film,
      color: 'from-rose-600 to-rose-800',
      textColor: 'text-rose-400',
      description: 'Animações bíblicas, documentários históricos, estudos em vídeo e upload de seus PDFs.'
    },
    {
      id: 'sermoes',
      title: 'Esboços de Pregação',
      count: 'Homilética para Púlpito',
      tag: 'Pregações Expositivas',
      icon: ScrollText,
      color: 'from-purple-600 to-purple-800',
      textColor: 'text-purple-400',
      description: 'Esboços estruturados com proposição, tópicos, ilustrações e apelo pastoral fundamentado.'
    }
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#18110b] via-stone-900 to-[#120a06] text-white shadow-xl border border-amber-600/30 p-6 sm:p-8 transition-all hover:border-amber-500/50">
      {/* Luzes Suaves de Fundo */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Cabeçalho Unificado e Compacto */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Acervo do Saber Cristão
            </div>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-stone-100 flex items-center gap-2">
              <span>Central do Saber Bíblico & Teológico</span>
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl leading-relaxed">
              Heróis da Fé, Personagens Bíblicos, Profetas, Biblioteca Teológica, Mídia e Esboços reunidos de forma compacta. Clique em qualquer módulo para acessar o acervo completo internamente.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30">
              6 Módulos em 1
            </span>
          </div>
        </div>

        {/* Grade de 6 Módulos Limpos e Clicáveis */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                onClick={() => onSelectTab(m.id)}
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
