import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Apple, CheckCircle2, X, Share, PlusSquare, ArrowUpRight } from 'lucide-react';

interface PwaInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  deferredPrompt: any;
  onInstallAndroid: () => void;
}

export const PwaInstallModal: React.FC<PwaInstallModalProps> = ({
  isOpen,
  onClose,
  deferredPrompt,
  onInstallAndroid
}) => {
  const [activePlatform, setActivePlatform] = useState<'ios' | 'android'>('android');
  const [isIOSDevice, setIsIOSDevice] = useState(false);

  useEffect(() => {
    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    setIsIOSDevice(isIOS);
    if (isIOS) {
      setActivePlatform('ios');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-6 my-8">
        {/* Header do Modal */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-md">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                Instalar no seu Celular
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                PWA Gratuito • Rápido • Funciona Offline
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seletor de Plataforma (iOS / Android) */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 dark:bg-stone-800 rounded-2xl">
          <button
            onClick={() => setActivePlatform('ios')}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activePlatform === 'ios'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <Apple className="w-4 h-4 text-stone-800 dark:text-stone-200" />
            <span>iPhone / iPad (iOS)</span>
          </button>

          <button
            onClick={() => setActivePlatform('android')}
            className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activePlatform === 'android'
                ? 'bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm'
                : 'text-stone-500 hover:text-stone-800 dark:hover:text-stone-200'
            }`}
          >
            <Smartphone className="w-4 h-4 text-emerald-600" />
            <span>Android</span>
          </button>
        </div>

        {/* Guia para iOS (iPhone) */}
        {activePlatform === 'ios' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-amber-50/70 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-800/40 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              No Safari da Apple, o app é instalado através do menu nativo de compartilhamento em 3 passos simples:
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">
                    Toque em Compartilhar
                  </span>
                  No Safari, toque no botão de compartilhar <Share className="w-3.5 h-3.5 inline mx-1 text-sky-600" /> (quadrado com a seta para cima na barra inferior do iPhone).
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">
                    Adicionar à Tela de Início
                  </span>
                  Role as opções para baixo e toque em <strong className="text-amber-700 dark:text-amber-400">"Adicionar à Tela de Início"</strong> <PlusSquare className="w-3.5 h-3.5 inline mx-1" />.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60">
                <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <div className="text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <span className="font-semibold block text-stone-900 dark:text-stone-100">
                    Confirmar e Abrir
                  </span>
                  Toque em <strong>"Adicionar"</strong> no canto superior direito. Pronto! O ícone de <strong>O Mundo Cristão</strong> aparecerá na tela do seu iPhone como um aplicativo nativo sem barras de navegador.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Guia para Android */}
        {activePlatform === 'android' && (
          <div className="space-y-4 animate-fadeIn">
            {deferredPrompt ? (
              <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-950/30 rounded-2xl border border-emerald-200 dark:border-emerald-800/40 space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                  Instalação Pronta em 1 Clique!
                </h4>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300">
                  Seu navegador Android suporta instalação direta. Toque no botão abaixo:
                </p>
                <button
                  onClick={onInstallAndroid}
                  className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Instalar Aplicativo Agora</span>
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="bg-stone-50 dark:bg-stone-800/60 p-4 rounded-2xl border border-stone-200/60 dark:border-stone-700/60 space-y-2 text-xs sm:text-sm">
                  <span className="font-semibold text-stone-900 dark:text-stone-100 block">
                    No Google Chrome / Edge para Android:
                  </span>
                  <ol className="list-decimal list-inside space-y-2 text-stone-600 dark:text-stone-300">
                    <li>Toque nos <strong>três pontinhos (⋮)</strong> no canto superior direito do navegador.</li>
                    <li>Selecione a opção <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.</li>
                    <li>Confirme em <strong>"Instalar"</strong>.</li>
                  </ol>
                </div>
                <p className="text-xs text-stone-500 text-center">
                  O aplicativo será instalado na sua gaveta de aplicativos ocupando menos de 1 MB!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
          >
            Entendido, fechar
          </button>
        </div>
      </div>
    </div>
  );
};
