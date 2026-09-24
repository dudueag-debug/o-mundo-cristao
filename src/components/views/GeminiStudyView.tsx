import React, { useState, useEffect, useRef } from 'react';
import { geminiService, GeminiMessage } from '../../services/geminiService';
import { Sparkles, Send, Key, Trash2, BookOpen, Scroll, Flame, Lightbulb, RefreshCw, Check, ArrowRight, Bot, User, HelpCircle, ExternalLink } from 'lucide-react';

interface GeminiStudyViewProps {
  initialQuery?: string;
  onNavigateToBible?: () => void;
}

export const GeminiStudyView: React.FC<GeminiStudyViewProps> = ({ initialQuery }) => {
  const [messages, setMessages] = useState<GeminiMessage[]>([]);
  const [inputText, setInputText] = useState(initialQuery || '');
  const [isLoading, setIsLoading] = useState(false);
  const [isKeyModalOpen, setIsKeyModalOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [keySavedMsg, setKeySavedMsg] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages(geminiService.getChatHistory());
    setApiKeyInput(geminiService.getApiKey());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Se veio com query inicial (ex: versículo da Bíblia), dispara a pesquisa automaticamente se o chat tiver apenas a msg de boas-vindas
  useEffect(() => {
    if (initialQuery && initialQuery.trim()) {
      handleSend(initialQuery, 'exegese');
    }
  }, [initialQuery]);

  const handleSend = async (textToSend?: string, category?: GeminiMessage['category']) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    const userMsg: GeminiMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      category: category || 'livre'
    };

    const newHistory = [...messages, userMsg];
    setMessages(newHistory);
    geminiService.saveChatHistory(newHistory);
    setInputText('');
    setIsLoading(true);

    try {
      const responseText = await geminiService.askGemini(text, category);

      const geminiMsg: GeminiMessage = {
        id: `msg-resp-${Date.now()}`,
        sender: 'gemini',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        category: category
      };

      const finalHistory = [...newHistory, geminiMsg];
      setMessages(finalHistory);
      geminiService.saveChatHistory(finalHistory);
    } catch (err: any) {
      const errorMsg: GeminiMessage = {
        id: `msg-err-${Date.now()}`,
        sender: 'gemini',
        text: `⚠️ Desculpe, ocorreu um erro ao gerar o estudo: ${err.message || 'Erro desconhecido'}. Por favor, tente novamente.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...newHistory, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveApiKey = () => {
    geminiService.setApiKey(apiKeyInput);
    setKeySavedMsg(true);
    setTimeout(() => {
      setKeySavedMsg(false);
      setIsKeyModalOpen(false);
    }, 1500);
  };

  const handleClearChat = () => {
    if (window.confirm('Deseja limpar o histórico desta conversa de estudos?')) {
      geminiService.clearChatHistory();
      setMessages(geminiService.getChatHistory());
    }
  };

  const quickActions: { label: string; icon: any; category: GeminiMessage['category']; prompt: string }[] = [
    {
      label: 'Exegese & Contexto Histórico',
      icon: Scroll,
      category: 'exegese',
      prompt: 'Faça um estudo exegético com o contexto histórico e cultural do Salmo 23 e Romanos 8'
    },
    {
      label: 'Termos no Hebraico / Grego',
      icon: BookOpen,
      category: 'original',
      prompt: 'Explique o significado das palavras no original bíblico para Amor (Ágape, Hesed) e Graça (Charis)'
    },
    {
      label: 'Teologia Wesleyana & Graça',
      icon: Flame,
      category: 'wesleyana',
      prompt: 'Como a Teologia Wesleyana explica a Graça Preveniente, Justificadora e Santificadora?'
    },
    {
      label: 'Esboço de Sermão Completo',
      icon: Bot,
      category: 'sermon',
      prompt: 'Monte um esboço de pregação pastoral completo sobre a Fidelidade de Deus no deserto'
    },
    {
      label: 'Perguntas para EBD / Grupos',
      icon: Lightbulb,
      category: 'ebd',
      prompt: 'Crie 5 perguntas profundas para aula de Escola Bíblica sobre o fruto do Espírito (Gálatas 5)'
    },
  ];

  // Renderizador simplificado e elegante de Markdown
  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Títulos H3
      if (line.startsWith('### ')) {
        return (
          <h3 key={idx} className="font-serif font-bold text-base sm:text-lg text-amber-900 dark:text-amber-300 mt-3 mb-1">
            {line.replace('### ', '')}
          </h3>
        );
      }
      // Títulos H4
      if (line.startsWith('#### ')) {
        return (
          <h4 key={idx} className="font-serif font-semibold text-sm sm:text-base text-stone-900 dark:text-stone-100 mt-2 mb-1">
            {line.replace('#### ', '')}
          </h4>
        );
      }
      // Citação em bloco
      if (line.startsWith('> ')) {
        return (
          <blockquote key={idx} className="border-l-4 border-amber-600 pl-3 py-1 my-2 italic text-xs sm:text-sm text-amber-900 dark:text-amber-200 bg-amber-50/50 dark:bg-amber-950/30 rounded-r-lg">
            {line.replace('> ', '')}
          </blockquote>
        );
      }
      // Marcadores de lista
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        return (
          <li key={idx} className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 ml-4 my-0.5 list-disc leading-relaxed">
            {renderFormattedInline(line.replace(/^(\s*[-*]\s*)/, ''))}
          </li>
        );
      }
      // Itens numerados
      if (/^\s*\d+\.\s/.test(line)) {
        return (
          <div key={idx} className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 ml-2 my-0.5 leading-relaxed font-sans">
            {renderFormattedInline(line)}
          </div>
        );
      }
      // Linha vazia
      if (!line.trim()) {
        return <div key={idx} className="h-1.5" />;
      }
      // Linha padrão
      return (
        <p key={idx} className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-sans">
          {renderFormattedInline(line)}
        </p>
      );
    });
  };

  const renderFormattedInline = (str: string) => {
    // Processa negrito simples **texto**
    const parts = str.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-bold text-stone-900 dark:text-stone-100">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="space-y-5 pb-12 animate-fadeIn max-w-5xl mx-auto">
      {/* Header do Módulo Gemini IA */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" /> Inteligência Teológica Pastoral
          </div>
          <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>Gemini IA • Estudos Bíblicos</span>
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-xl">
            Tire dúvidas teológicas, gere esboços homiléticos, estude palavras no grego e hebraico e aprofunde-se na teologia wesleyana.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsKeyModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700 transition-colors shadow-sm"
            title="Configurar Chave da API do Google Gemini"
          >
            <Key className="w-3.5 h-3.5 text-amber-600" />
            <span>{geminiService.hasCustomKey() ? 'API Conectada ✓' : 'Conectar API Gemini'}</span>
          </button>

          <button
            onClick={handleClearChat}
            className="p-2 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-stone-200 dark:border-stone-800 transition-colors"
            title="Limpar Conversa"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Botões de Ações Rápidas */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
          Estudos Prontos de 1 Toque:
        </span>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {quickActions.map((action, i) => {
            const Icon = action.icon;
            return (
              <button
                key={i}
                onClick={() => handleSend(action.prompt, action.category)}
                disabled={isLoading}
                className="flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-amber-500/80 text-stone-800 dark:text-stone-200 text-xs font-semibold shadow-sm hover:shadow-md transition-all whitespace-nowrap disabled:opacity-50"
              >
                <Icon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Caixa de Mensagens */}
      <div className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm p-4 sm:p-6 min-h-[420px] max-h-[600px] overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-3xl ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
            >
              {/* Avatar */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                  isUser
                    ? 'bg-amber-600 text-white'
                    : 'bg-gradient-to-br from-amber-500 to-amber-700 text-white'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Balão de Mensagem */}
              <div
                className={`p-4 rounded-3xl text-left transition-all ${
                  isUser
                    ? 'bg-amber-700 text-white rounded-tr-none shadow-md'
                    : 'bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/60 rounded-tl-none shadow-sm'
                }`}
              >
                <div className="space-y-1">
                  {isUser ? (
                    <p className="text-xs sm:text-sm font-medium leading-relaxed whitespace-pre-wrap">
                      {msg.text}
                    </p>
                  ) : (
                    <div className="space-y-1">{renderMessageContent(msg.text)}</div>
                  )}
                </div>
                <div
                  className={`text-[10px] mt-2 select-none ${
                    isUser ? 'text-amber-200 text-right' : 'text-stone-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex gap-3 max-w-xl mr-auto">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-4 rounded-3xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700/60 rounded-tl-none flex items-center gap-3">
              <RefreshCw className="w-4 h-4 text-amber-600 animate-spin" />
              <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                Gemini IA pesquisando nas Escrituras e Teologia...
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Barra de Digitação */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="relative flex items-center gap-2"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Pergunte ao Gemini IA sobre qualquer versículo, tema teológico ou esboço..."
          className="flex-1 px-4 sm:px-5 py-3.5 text-xs sm:text-sm rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
        />

        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="px-5 py-3.5 rounded-2xl bg-amber-700 hover:bg-amber-800 text-white text-xs sm:text-sm font-semibold shadow-md transition-all flex items-center gap-1.5 disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          <span>Estudar</span>
          <Send className="w-4 h-4" />
        </button>
      </form>

      {/* Modal de Configuração de Chave de API Google Gemini */}
      {isKeyModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border border-stone-200 dark:border-stone-800 shadow-2xl space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-600" />
                <span>Chave de API do Gemini (Opcional)</span>
              </h3>
              <button
                onClick={() => setIsKeyModalOpen(false)}
                className="text-stone-400 hover:text-stone-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
              O aplicativo já conta com uma <strong>Base Teológica Inteligente Integrada</strong> que responde instantaneamente sem custo. Se preferir usar o modelo <strong>Gemini 1.5 Flash em tempo real</strong>, você pode colar sua chave gratuita do Google AI Studio abaixo:
            </p>

            <div className="space-y-1">
              <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                Sua Google AI API Key (AIza...)
              </label>
              <input
                type="password"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-900 dark:text-amber-200 space-y-1">
              <p>
                <strong>Como pegar sua chave gratuita:</strong>
              </p>
              <ol className="list-decimal ml-4 space-y-0.5">
                <li>Acesse o Google AI Studio com sua conta Google.</li>
                <li>Clique em <em>Get API key</em> e copie o código.</li>
                <li>Cole no campo acima e salve.</li>
              </ol>
              <a
                href="https://aistudio.google.com/app/apikey"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-bold underline mt-1 text-amber-800 dark:text-amber-300"
              >
                <span>Abrir Google AI Studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {keySavedMsg && (
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Chave gravada com segurança no seu aparelho!</span>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsKeyModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleSaveApiKey}
                className="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md transition-colors"
              >
                Salvar Chave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
