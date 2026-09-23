import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronRight, Heart, ShieldCheck, UserCheck } from 'lucide-react';

interface ShepherdSplashScreenProps {
  onFinish: () => void;
  onOpenAuth?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

export const ShepherdSplashScreen: React.FC<ShepherdSplashScreenProps> = ({
  onFinish,
  onOpenAuth,
  isLoggedIn = false,
  userName
}) => {
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('Preparando pastos verdejantes...');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(45);
      setStatusText('Conduzindo a águas tranquilas...');
    }, 600);

    const timer2 = setTimeout(() => {
      setProgress(78);
      setStatusText('Refrigerando a sua alma...');
    }, 1400);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText('A paz do Senhor esteja com você!');
    }, 2200);

    // Auto fade-in / finish after 3.2s
    const timer4 = setTimeout(() => {
      onFinish();
    }, 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden bg-black text-white select-none animate-fadeIn">
      {/* Imagem de Fundo do Bom Pastor com Efeito Ken Burns Suave */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/good_shepherd_splash.jpg"
          alt="Jesus Cristo o Bom Pastor com as ovelhas"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Degradê sutil no topo e forte na base para contraste impecável */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
      </div>

      {/* Topo: Logo & Selo Espiritual */}
      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10 shadow-lg">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
            ✝
          </div>
          <div>
            <h1 className="font-serif font-bold text-sm tracking-wider uppercase text-amber-200">
              O Mundo Cristão
            </h1>
            <span className="text-[10px] text-amber-100/70 block">
              Alimento & Edificação
            </span>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="flex items-center gap-2 bg-emerald-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-emerald-500/30 text-emerald-200 text-xs font-medium">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Paz, {userName || 'Irmão'}</span>
          </div>
        ) : (
          <button
            onClick={() => {
              onFinish();
              if (onOpenAuth) onOpenAuth();
            }}
            className="flex items-center gap-1.5 bg-amber-600/80 hover:bg-amber-600 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/40 text-amber-100 text-xs font-semibold shadow-lg transition-all"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Criar Conta / Entrar</span>
          </button>
        )}
      </div>

      {/* Conteúdo Central: Passagem do Bom Pastor & Saudação */}
      <div className="relative z-10 px-6 sm:px-12 max-w-2xl mx-auto text-center space-y-4 my-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs font-serif tracking-widest uppercase">
          <Sparkles className="w-3 h-3 text-amber-300" />
          Salmo 23 • O Bom Pastor
        </div>

        <blockquote className="font-serif text-lg sm:text-2xl lg:text-3xl text-stone-100 font-light leading-relaxed italic drop-shadow-md">
          “O Senhor é o meu pastor; de nada terei falta. Em verdes pastagens me faz repousar e me conduz a águas tranquilas.”
        </blockquote>

        <p className="text-xs sm:text-sm text-amber-200/90 font-medium tracking-wide">
          “Eu sou o bom pastor; conheço as minhas ovelhas e as minhas ovelhas me conhecem.” — João 10:14
        </p>
      </div>

      {/* Rodapé: Barra de Progresso & Botão de Entrada */}
      <div className="relative z-10 p-6 sm:p-8 max-w-xl w-full mx-auto space-y-4 pb-8">
        {/* Barra de Progresso */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-amber-200/80 font-mono">
            <span>{statusText}</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 rounded-full transition-all duration-500 shadow-sm shadow-amber-400"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Botão de Entrar Imediatamente */}
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onFinish}
            className="group flex items-center gap-2 px-7 py-3 rounded-2xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-semibold text-sm shadow-xl shadow-amber-950/60 border border-amber-400/30 transition-all transform active:scale-95"
          >
            <span>Entrar no Aplicativo</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-[11px] text-center text-white/50 italic">
          Idealizado por Eduardo para a Glória de Deus
        </p>
      </div>
    </div>
  );
};
