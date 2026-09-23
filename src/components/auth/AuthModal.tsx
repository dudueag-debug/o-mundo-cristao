import React, { useState } from 'react';
import { authService, UserProfile } from '../../services/authService';
import { X, Lock, Mail, User, ShieldCheck, Check, AlertCircle, Sparkles, LogIn, UserPlus } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (user: UserProfile) => void;
  initialMode?: 'login' | 'register';
}

const AVATAR_OPTIONS = [
  { id: 'pastor', label: 'O Bom Pastor', icon: '🐑' },
  { id: 'cruz', label: 'A Santa Cruz', icon: '✝' },
  { id: 'biblia', label: 'Palavra Viva', icon: '📖' },
  { id: 'pomba', label: 'Espírito Santo', icon: '🕊' },
  { id: 'calice', label: 'Pão & Cálice', icon: '🍷' },
  { id: 'chama', label: 'Fogo do Avivamento', icon: '🔥' },
];

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  initialMode = 'login'
}) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('pastor');
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    try {
      if (mode === 'register') {
        if (password !== confirmPassword) {
          throw new Error('As senhas não coincidem. Digite a mesma senha nos dois campos.');
        }
        const user = await authService.register(name, email, password, selectedAvatar);
        if (onSuccess) onSuccess(user);
        onClose();
      } else {
        const user = await authService.login(email, password);
        if (onSuccess) onSuccess(user);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Ocorreu um erro. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl overflow-hidden my-8">
        {/* Banner Superior */}
        <div className="relative bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 p-6 text-white text-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-black/20 hover:bg-black/40 text-amber-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-amber-500/30 border border-amber-300/40 flex items-center justify-center text-2xl shadow-inner">
            {mode === 'register' ? '✍️' : '🔐'}
          </div>

          <h2 className="font-serif font-bold text-xl text-amber-100">
            {mode === 'register' ? 'Criar Minha Conta Privada' : 'Acessar Minha Conta'}
          </h2>
          <p className="text-xs text-amber-200/90 mt-1 max-w-xs mx-auto">
            {mode === 'register'
              ? 'Seu espaço íntimo e seguro. Tudo o que você guardar fica 100% privado.'
              : 'Entre para acessar seus devocionais, orações e vídeos salvos.'}
          </p>

          {/* Abas Alternadoras */}
          <div className="flex bg-black/30 p-1 rounded-xl mt-4 max-w-xs mx-auto text-xs font-semibold">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                mode === 'login' ? 'bg-white text-stone-900 shadow-sm' : 'text-amber-200 hover:text-white'
              }`}
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Entrar</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setErrorMsg('');
              }}
              className={`flex-1 py-1.5 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                mode === 'register' ? 'bg-white text-stone-900 shadow-sm' : 'text-amber-200 hover:text-white'
              }`}
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Criar Conta</span>
            </button>
          </div>
        </div>

        {/* Mensagem de Erro se houver */}
        {errorMsg && (
          <div className="mx-6 mt-4 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-2 text-xs text-rose-700 dark:text-rose-300">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                Seu Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: Pr. João Silva ou Maria Santos"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
              E-mail *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
              Senha {mode === 'register' && '(Mínimo 6 dígitos)'} *
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
          </div>

          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-1">
                Confirmar Senha *
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3 text-stone-400" />
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repita a senha digitada"
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>
          )}

          {mode === 'register' && (
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 block mb-2">
                Escolha o Ícone do seu Perfil
              </label>
              <div className="grid grid-cols-3 gap-2">
                {AVATAR_OPTIONS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedAvatar(item.id)}
                    className={`p-2 rounded-xl border flex flex-col items-center gap-1 transition-all ${
                      selectedAvatar === item.id
                        ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 ring-2 ring-amber-500/30'
                        : 'border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[10px] font-medium leading-none">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Destaque de Privacidade Garantida */}
          <div className="p-3 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-stone-600 dark:text-stone-300 leading-relaxed">
              <strong className="text-amber-900 dark:text-amber-300">Privacidade Absoluta:</strong> Tudo o que você adicionar em sua conta (anotações, vídeos do seu aparelho, diário de oração) é isolado e ninguém mais tem acesso.
            </div>
          </div>

          {/* Botão de Envio */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-amber-700 hover:bg-amber-800 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isLoading ? (
              <span>Processando com segurança...</span>
            ) : mode === 'register' ? (
              <>
                <UserPlus className="w-4 h-4" />
                <span>Criar Minha Conta & Entrar</span>
              </>
            ) : (
              <>
                <LogIn className="w-4 h-4" />
                <span>Entrar na Minha Conta</span>
              </>
            )}
          </button>

          {/* Explorar como Visitante */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-stone-500 dark:text-stone-400 hover:underline"
            >
              Continuar explorando como visitante por enquanto
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
