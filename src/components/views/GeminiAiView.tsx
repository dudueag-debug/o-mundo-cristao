import React, { useState, useEffect, useRef } from 'react';
import { geminiService, ChatMessage } from '../../services/geminiService';
import { Sparkles, Send, Key, Copy, Check, BookOpen, Flame, ScrollText, HeartHandshake, ShieldCheck, RefreshCw, X, MessageSquare } from 'lucide-react';

const SUGGESTED_PROMPTS = [
  { icon: '✝', text: 'O que é a Graça Preveniente na Teologia Wesleyana?' },
  { icon: '📖', text: 'Gerar um esboço de sermão expositivo sobre o Salmo 23' },
  { icon: '🔥', text: 'História do avivamento da IMW em 1967 em Nova Friburgo' },
  { icon: '🕊', text: 'Como a doutrina da Justificação pela Fé aponta para Cristo?' },
  { icon: '🙏', text: 'Como desenvolver uma vida de oração com intimidade?' },
];

export const GeminiAiView: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      sender: 'gemini',
      text: `### ✝ Bem-vindo ao Gemini Teológico!
Sou seu assistente de estudos bíblicos, teológicos e pastorais, dedicado a glorificar a Jesus Cristo através das Escrituras.

**Como posso auxiliá-lo hoje?**
- 📖 Exegese de passagens bíblicas
- 📜 Criação de esboços de pregação expositiva
- 🏛 Teologia Wesleyana, Doutrina da Graça e História da Igreja
- 🙏 Aconselhamento bíblico fundamentado na Palavra de Deus

*Selecione uma das sugestões abaixo ou digite sua pergunta:*`,
      timestamp: 'Agora'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [savedKeySuccess, setSavedKeySuccess] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setApiKeyInput(geminiService.getApiKey());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const question = (textToSend || inputText).trim();
    if (!question || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: question,
      timestamp: 'Agora'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const responseText = await geminiService.askTheologicalGemini(question);
      const geminiMsg: ChatMessage = {
        id: `gemini-${Date.now()}`,
        sender: 'gemini',
        text: responseText,
        timestamp: 'Agora'
      };
      setMessages((prev) => [...prev, geminiMsg]);
    } catch {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'gemini',
        text: 'Não foi possível completar a resposta neste momento. Por favor, tente novamente.',
        timestamp: 'Agora'
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = (e: React.FormEvent) => {
    e.preventDefault();
    geminiService.setApiKey(apiKeyInput);
    setSavedKeySuccess(true);
    setTimeout(() => {
      setSavedKeySuccess(false);
      setIsKeyModalOpen(false);
    }, 1500);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 pb-12 animate-fadeIn flex flex-col h-[calc(100vh-180px)] min-h-[600px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4" /> Inteligência Artificial Bíblica
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>Gemini Teológico</span>
            <span className="text-xs font-sans font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
              Cristocêntrico
            </span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
            Estudo das Escrituras, exegese, sermões e história da Igreja com profundidade e fidelidade a Cristo.
          </p>
        </div>

        <button
          onClick={() => setIsKeyModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-amber-500 text-xs font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-800 transition-all self-start sm:self-center shrink-0"
        >
          <Key className="w-3.5 h-3.5 text-amber-600" />
          <span>{geminiService.getApiKey() ? 'Chave Gemini Ativa' : 'Configurar Chave Google'}</span>
        </button>
      </div>

      {/* Área de Mensagens (Chat Scroll) */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 scrollbar-thin">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 text-sm font-bold shadow-sm ${
                  isUser
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900'
                    : 'bg-gradient-to-br from-amber-600 to-amber-800 text-white'
                }`}
              >
                {isUser ? '👤' : '✝'}
              </div>

              <div
                className={`max-w-[85%] sm:max-w-[75%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm shadow-sm space-y-2 relative group ${
                  isUser
                    ? 'bg-amber-700 text-white rounded-tr-none'
                    : 'bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-wrap leading-relaxed space-y-2">
                  {msg.text}
                </div>

                {!isUser && (
                  <div className="pt-2 flex items-center justify-between border-t border-stone-100 dark:border-stone-800/80 mt-2 text-[10px] text-stone-400">
                    <span>O Mundo Cristão • Soli Deo Gloria</span>
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="inline-flex items-center gap-1 text-amber-700 dark:text-amber-400 hover:underline font-semibold"
                    >
                      {copiedId === msg.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-500" />
                          <span>Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copiar Estudo</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center shrink-0 text-sm font-bold animate-pulse shadow-sm">
              ✝
            </div>
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl rounded-tl-none p-4 text-xs text-stone-500 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-amber-600 animate-spin" />
              <span>O Gemini Teológico está consultando as Escrituras e a história cristã...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Sugestões de Perguntas Rápidas */}
      {messages.length <= 2 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none shrink-0">
          {SUGGESTED_PROMPTS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(item.text)}
              className="px-3.5 py-2 rounded-2xl bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/60 border border-amber-200 dark:border-amber-800/60 text-stone-800 dark:text-stone-200 text-xs whitespace-nowrap transition-colors flex items-center gap-1.5"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      )}

      {/* Barra de Envio */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="relative shrink-0"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Faça uma pergunta teológica, peça um esboço ou exegese bíblica..."
          className="w-full pl-5 pr-14 py-3.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 shadow-sm"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="absolute right-2 top-2 p-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white disabled:opacity-40 transition-colors shadow-sm"
          title="Enviar pergunta"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Modal para Inserção de API Key Google Gemini */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-600" />
                Chave da Google Gemini API
              </h3>
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              O Gemini Teológico já funciona imediatamente com sua rica base interna offline! Caso deseje geração aberta e ilimitada do modelo <strong>Gemini 1.5 Flash</strong>, cole sua chave gratuita do Google AI Studio abaixo:
            </p>

            <form onSubmit={handleSaveApiKey} className="space-y-3">
              <div>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="AIzaSy..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500 font-mono"
                />
              </div>

              <div className="text-[11px] text-stone-500 space-y-1">
                <p>• Sua chave fica armazenada exclusivamente no seu navegador.</p>
                <p>
                  • Pode obter uma chave gratuita em:{' '}
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-700 dark:text-amber-400 underline font-semibold"
                  >
                    Google AI Studio ↗
                  </a>
                </p>
              </div>

              {savedKeySuccess && (
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>Chave configurada com sucesso!</span>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsKeyModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  Fechar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  Salvar Chave
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
