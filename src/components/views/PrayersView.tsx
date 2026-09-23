import React, { useState, useEffect } from 'react';
import { storageService, PrayerItem } from '../../services/storageService';
import { HeartHandshake, Plus, CheckCircle2, Sparkles, Heart, Trash2, X, Award } from 'lucide-react';

export const PrayersView: React.FC = () => {
  const [prayers, setPrayers] = useState<PrayerItem[]>([]);
  const [filter, setFilter] = useState<'ativas' | 'respondidas'>('ativas');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [answeringPrayer, setAnsweringPrayer] = useState<PrayerItem | null>(null);
  const [testimonyText, setTestimonyText] = useState('');

  // Novo pedido
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'familia' | 'saude' | 'espiritual' | 'ministerio' | 'financas'>('espiritual');

  useEffect(() => {
    setPrayers(storageService.getPrayers());
  }, []);

  const handleAddPrayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newPrayer: PrayerItem = {
      id: `p-${Date.now()}`,
      title,
      description,
      category,
      createdAt: 'Hoje',
      isAnswered: false,
      prayCount: 1
    };

    const updated = [newPrayer, ...prayers];
    setPrayers(updated);
    storageService.savePrayers(updated);
    setIsModalOpen(false);
    setTitle('');
    setDescription('');
  };

  const handlePrayCount = (id: string) => {
    const updated = prayers.map(p => {
      if (p.id === id) {
        return { ...p, prayCount: p.prayCount + 1 };
      }
      return p;
    });
    setPrayers(updated);
    storageService.savePrayers(updated);
  };

  const handleConfirmAnswered = () => {
    if (!answeringPrayer) return;

    const updated = prayers.map(p => {
      if (p.id === answeringPrayer.id) {
        return {
          ...p,
          isAnswered: true,
          answeredDate: 'Hoje',
          testimony: testimonyText || 'O Senhor respondeu com graça e poder!'
        };
      }
      return p;
    });

    setPrayers(updated);
    storageService.savePrayers(updated);
    setAnsweringPrayer(null);
    setTestimonyText('');
  };

  const handleDelete = (id: string) => {
    const updated = prayers.filter(p => p.id !== id);
    setPrayers(updated);
    storageService.savePrayers(updated);
  };

  const activePrayers = prayers.filter(p => !p.isAnswered);
  const answeredPrayers = prayers.filter(p => p.isAnswered);

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'familia': return 'Família';
      case 'saude': return 'Saúde';
      case 'espiritual': return 'Espiritual';
      case 'ministerio': return 'Ministério & Igreja';
      case 'financas': return 'Provisão & Trabalho';
      default: return cat;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <HeartHandshake className="w-4 h-4" /> Altar de Intercessão
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
            Diário de Oração
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            "A oração do justo pode muito em seus efeitos." (Tiago 5:16)
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md shadow-amber-900/20 transition-all shrink-0"
        >
          <Plus className="w-4 h-4" />
          <span>Novo Pedido de Oração</span>
        </button>
      </div>

      {/* Tabs: Pedidos Ativos vs Memorial de Respostas */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setFilter('ativas')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'ativas'
              ? 'bg-amber-700 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Heart className="w-4 h-4" />
          <span>Em Oração ({activePrayers.length})</span>
        </button>

        <button
          onClick={() => setFilter('respondidas')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            filter === 'respondidas'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Memorial de Gratidão ({answeredPrayers.length})</span>
        </button>
      </div>

      {/* Lista de Orações */}
      {filter === 'ativas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activePrayers.length === 0 ? (
            <div className="col-span-2 p-12 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-stone-500 space-y-2">
              <HeartHandshake className="w-10 h-10 mx-auto text-amber-600/40" />
              <p className="text-sm font-medium">Nenhum pedido em andamento no momento.</p>
              <p className="text-xs text-stone-400">Toque no botão acima para adicionar um motivo de oração.</p>
            </div>
          ) : (
            activePrayers.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-white dark:bg-stone-900 p-5 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-3 relative group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40">
                    {getCategoryLabel(prayer.category)}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-stone-400">{prayer.createdAt}</span>
                    <button
                      onClick={() => handleDelete(prayer.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-stone-400 hover:text-rose-500 transition-opacity"
                      title="Excluir pedido"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  {prayer.title}
                </h3>

                {prayer.description && (
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {prayer.description}
                  </p>
                )}

                <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-stone-800">
                  <button
                    onClick={() => handlePrayCount(prayer.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900 text-xs font-semibold transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
                    <span>Orei hoje ({prayer.prayCount}x)</span>
                  </button>

                  <button
                    onClick={() => setAnsweringPrayer(prayer)}
                    className="flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Marcar Respondida!</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Memorial de Gratidão */}
      {filter === 'respondidas' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {answeredPrayers.length === 0 ? (
            <div className="col-span-2 p-12 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-stone-500 space-y-2">
              <Award className="w-10 h-10 mx-auto text-emerald-500/40" />
              <p className="text-sm font-medium">Seu memorial de orações respondidas aparecerá aqui.</p>
              <p className="text-xs text-stone-400">Quando Deus responder aos seus clamores, marque-os como respondidos para celebrar!</p>
            </div>
          ) : (
            answeredPrayers.map((prayer) => (
              <div
                key={prayer.id}
                className="bg-emerald-50/50 dark:bg-emerald-950/20 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    Oração Respondida
                  </span>
                  <span className="text-xs text-stone-400">{prayer.answeredDate}</span>
                </div>

                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  {prayer.title}
                </h3>

                <div className="p-3 bg-white dark:bg-stone-900 rounded-xl border border-emerald-100 dark:border-emerald-900/40 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-emerald-700 dark:text-emerald-400 block">
                    Testemunho de Gratidão:
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-stone-800 dark:text-stone-200">
                    "{prayer.testimony}"
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Modal Adicionar Pedido */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Novo Pedido de Oração
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddPrayer} className="space-y-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Motivo da Oração *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Pela saúde da minha mãe, Conversão de um amigo..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Categoria
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="espiritual">Espiritual & Avivamento</option>
                  <option value="familia">Família & Lar</option>
                  <option value="saude">Saúde & Cura</option>
                  <option value="ministerio">Ministério & Igreja</option>
                  <option value="financas">Provisão & Trabalho</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Detalhes ou Promessa Bíblica
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Escreva um versículo de promessa ou detalhes do clamor..."
                  className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Salvar Pedido
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal Registrar Resposta / Testemunho */}
      {answeringPrayer && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif font-bold text-lg text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-5 h-5 text-emerald-500" /> Glória a Deus! Oração Respondida
              </h3>
              <button
                onClick={() => setAnsweringPrayer(null)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
              Registre como o Senhor atendeu ao seu pedido para guardar como testemunho:
            </p>

            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                Seu Testemunho de Gratidão
              </label>
              <textarea
                rows={3}
                value={testimonyText}
                onChange={(e) => setTestimonyText(e.target.value)}
                placeholder="Ex: Deus abriu as portas, a cura foi confirmada pelos médicos, glória a Deus!"
                className="w-full px-3.5 py-2 text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setAnsweringPrayer(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmAnswered}
                className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-colors"
              >
                Confirmar no Memorial
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
