import React, { useState } from 'react';
import { UserProfile, authService } from '../../services/authService';
import { X, LogOut, ShieldCheck, Heart, Sparkles, BookOpen, Video, Award, Check } from 'lucide-react';

interface UserProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserProfile;
  onLogout: () => void;
  onReopenSplash: () => void;
}

const AVATAR_MAP: Record<string, string> = {
  pastor: '🐑',
  cruz: '✝',
  biblia: '📖',
  pomba: '🕊',
  calice: '🍷',
  chama: '🔥',
};

export const UserProfileModal: React.FC<UserProfileModalProps> = ({
  isOpen,
  onClose,
  user,
  onLogout,
  onReopenSplash
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar || 'pastor');
  const [successSaved, setSuccessSaved] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    authService.updateProfile({ name, avatar: selectedAvatar });
    setSuccessSaved(true);
    setIsEditing(false);
    setTimeout(() => setSuccessSaved(false), 2000);
  };

  const handleLogout = () => {
    authService.logout();
    onLogout();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden my-8">
        {/* Cabeçalho */}
        <div className="relative bg-gradient-to-br from-amber-800 via-amber-900 to-stone-950 p-6 text-white text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-amber-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Avatar Grande */}
          <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-amber-500/20 border-2 border-amber-300/40 flex items-center justify-center text-3xl shadow-lg shadow-black/40">
            {AVATAR_MAP[user.avatar] || '🐑'}
          </div>

          <h2 className="font-serif font-bold text-xl text-amber-100">
            {user.name}
          </h2>
          <p className="text-xs text-amber-200/80 mt-0.5">
            {user.email}
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 text-[11px] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Perfil Ativo • Dados 100% Protegidos</span>
          </div>
        </div>

        {/* Corpo do Modal */}
        <div className="p-6 space-y-5">
          {successSaved && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Perfil atualizado com sucesso!</span>
            </div>
          )}

          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                  Alterar Ícone
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.entries(AVATAR_MAP).map(([key, icon]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedAvatar(key)}
                      className={`p-2 rounded-xl border flex items-center justify-center text-xl transition-all ${
                        selectedAvatar === key
                          ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 ring-2 ring-amber-500/30'
                          : 'border-stone-200 dark:border-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Salvar Alterações
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-3">
              <div className="bg-stone-50 dark:bg-stone-800/60 rounded-2xl p-4 border border-stone-200 dark:border-stone-800 space-y-2 text-xs">
                <div className="flex justify-between text-stone-600 dark:text-stone-400">
                  <span>Membro desde:</span>
                  <strong className="text-stone-900 dark:text-stone-100">{user.createdAt}</strong>
                </div>
                <div className="flex justify-between text-stone-600 dark:text-stone-400">
                  <span>Privacidade da Conta:</span>
                  <strong className="text-emerald-700 dark:text-emerald-400">Exclusiva & Privada</strong>
                </div>
                <div className="flex justify-between text-stone-600 dark:text-stone-400">
                  <span>ID Seguro:</span>
                  <span className="font-mono text-[10px] text-stone-400">{user.id}</span>
                </div>
              </div>

              {/* Botão de Editar Perfil */}
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="w-full py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors"
              >
                Editar Nome e Ícone
              </button>

              {/* Botão para Rever a Abertura do Bom Pastor */}
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onReopenSplash();
                }}
                className="w-full py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs font-semibold text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Rever Abertura do Bom Pastor</span>
              </button>
            </div>
          )}

          {/* Linha Divisória */}
          <div className="border-t border-stone-200 dark:border-stone-800 pt-4">
            <button
              onClick={handleLogout}
              className="w-full py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 dark:bg-rose-950/40 dark:hover:bg-rose-950/60 border border-rose-200 dark:border-rose-900/50 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sair da Minha Conta (Logout Seguro)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
