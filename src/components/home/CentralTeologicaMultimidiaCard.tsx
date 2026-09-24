import React, { useState, useEffect } from 'react';
import { THEOLOGY_BOOKS, TheologyBook, BookChapter } from '../../data/theologyBooks';
import { INITIAL_SERMON_OUTLINES, SermonOutline } from '../../data/sermonOutlines';
import { INITIAL_CHRISTIAN_VIDEOS, ChristianVideo } from '../../data/christianVideos';
import { KindleReaderModal } from '../common/KindleReaderModal';
import { storageService } from '../../services/storageService';
import {
  BookOpen,
  BookMarked,
  Download,
  UploadCloud,
  Film,
  ScrollText,
  Play,
  Plus,
  ArrowRight,
  Sparkles,
  Copy,
  Check,
  Eye,
  FileText,
  ExternalLink,
  ChevronRight,
  Share2
} from 'lucide-react';

interface CentralCardProps {
  onSelectTab: (tab: string) => void;
}

export const CentralTeologicaMultimidiaCard: React.FC<CentralCardProps> = ({ onSelectTab }) => {
  const [activeTab, setActiveTab] = useState<'livros' | 'uploads' | 'videos' | 'sermoes'>('livros');

  // Livros Teológicos & Kindle Modal
  const [selectedBookForKindle, setSelectedBookForKindle] = useState<TheologyBook | null>(null);
  const [kindleChapterIndex, setKindleChapterIndex] = useState(0);

  // Esboços de Sermão
  const [copiedOutlineId, setCopiedOutlineId] = useState<string | null>(null);
  const [selectedOutlineForModal, setSelectedOutlineForModal] = useState<SermonOutline | null>(null);

  // Vídeos
  const [activeVideo, setActiveVideo] = useState<ChristianVideo>(INITIAL_CHRISTIAN_VIDEOS[0]);

  // Uploads & Documentos Locais
  const [localDocs, setLocalDocs] = useState<{ id: string; name: string; size: string; content?: string }[]>([
    {
      id: 'doc-1',
      name: 'Estudo Exegético sobre a Graça Preveniente.txt',
      size: '18 KB',
      content: 'A doutrina da Graça Preveniente é um dos pilares mais belos e bíblicos da teologia armínio-wesleyana. Ela afirma que a iniciativa da salvação pertence inteiramente a Deus.'
    },
    {
      id: 'doc-2',
      name: 'Manual da Igreja Metodista Wesleyana (Resumo Doutrinário).txt',
      size: '24 KB',
      content: 'A Igreja Metodista Wesleyana foi fundada em 5 de janeiro de 1967 em Nova Friburgo/RJ, unindo a santidade bíblica ao poder e dons do Espírito Santo.'
    }
  ]);
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState('');
  const [readingDoc, setReadingDoc] = useState<{ name: string; content: string } | null>(null);

  // Carrega documentos do usuário do localStorage se existirem
  useEffect(() => {
    try {
      const storageKey = storageService.getUserStorageKey('user_uploads_v2');
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length > 0) {
          setLocalDocs((prev) => [...parsed, ...prev.filter(d => !parsed.some((p: any) => p.name === d.name))]);
        }
      }
    } catch {}
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const text = (event.target?.result as string) || 'Documento carregado no leitor.';
      const newDoc = {
        id: `up-${Date.now()}`,
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        content: text
      };
      setLocalDocs((prev) => [newDoc, ...prev]);
      setUploadSuccessMsg(`"${file.name}" pronto para leitura!`);
      setTimeout(() => setUploadSuccessMsg(''), 3000);
    };

    reader.readAsText(file);
  };

  const handleCopyOutline = (outline: SermonOutline) => {
    let text = `📖 ESBOÇO: ${outline.title.toUpperCase()}\n`;
    text += `Tema: ${outline.theme}\nTexto: ${outline.scriptureText}\n\n`;
    text += `Ideia Central:\n${outline.bigIdea}\n\n`;
    text += `Introdução:\n${outline.introduction}\n\n`;
    outline.points.forEach((p) => {
      text += `${p.title}\n${p.explanation ? p.explanation + '\n' : ''}Aplicação: ${p.application}\n\n`;
    });
    if (outline.illustration) text += `Ilustração:\n${outline.illustration}\n\n`;
    if (outline.conclusion) text += `Conclusão:\n${outline.conclusion}\n\n`;
    text += `O Mundo Cristão | Recursos Teológicos`;

    navigator.clipboard.writeText(text);
    setCopiedOutlineId(outline.id);
    setTimeout(() => setCopiedOutlineId(null), 2500);
  };

  const getYoutubeEmbedUrl = (video: ChristianVideo) => {
    if (video.youtubeId) {
      return `https://www.youtube-nocookie.com/embed/${video.youtubeId}`;
    }
    return '';
  };


  return (
    <section className="relative rounded-3xl bg-white dark:bg-stone-900 border border-amber-500/30 dark:border-amber-500/20 shadow-xl overflow-hidden transition-all">
      {/* Faixa Superior com Identidade e Estatísticas */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-amber-950 p-6 sm:p-7 text-white relative">
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Central Unificada de Recursos & Mídias</span>
            </div>
            <h2 className="font-serif font-bold text-xl sm:text-2xl text-white">
              Biblioteca Teológica, Mídias & Esboços
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              Leia livros clássicos no modo Kindle, envie seus PDFs, assista e compartilhe vídeos edificantes e consulte esboços homiléticos em um só lugar.
            </p>
          </div>

          {/* Atalhos Rápidos */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono text-amber-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              📚 {THEOLOGY_BOOKS.length} Obras Clássicas
            </span>
            <span className="text-[11px] font-mono text-amber-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              📜 {INITIAL_SERMON_OUTLINES.length} Esboços
            </span>
            <span className="text-[11px] font-mono text-amber-300/80 bg-black/30 px-3 py-1.5 rounded-xl border border-white/10">
              🎬 {INITIAL_CHRISTIAN_VIDEOS.length} Vídeos
            </span>
          </div>
        </div>

        {/* Abas de Navegação Interna do Card */}
        <div className="flex gap-2 overflow-x-auto pt-6 scrollbar-none">
          <button
            onClick={() => setActiveTab('livros')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'livros'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Livros Teológicos (Kindle)</span>
          </button>

          <button
            onClick={() => setActiveTab('uploads')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'uploads'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Baixar & Enviar Livros/PDFs</span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'videos'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <Film className="w-4 h-4" />
            <span>Vídeos & Mensagens</span>
          </button>

          <button
            onClick={() => setActiveTab('sermoes')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
              activeTab === 'sermoes'
                ? 'bg-amber-600 text-white shadow-md shadow-amber-950/40 ring-2 ring-amber-400/50'
                : 'bg-white/10 hover:bg-white/20 text-stone-200'
            }`}
          >
            <ScrollText className="w-4 h-4" />
            <span>Esboços de Sermão</span>
          </button>
        </div>
      </div>

      {/* Conteúdo Dinâmico da Aba Selecionada */}
      <div className="p-6">
        {/* ABA 1: LIVROS TEOLÓGICOS COM LEITOR KINDLE */}
        {activeTab === 'livros' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Obras Teológicas em Modo Kindle</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Clique em "Ler no Kindle" para abrir qualquer obra em tela imersiva com temas sépia, noturno e fontes ajustáveis.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('livros')}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Ver estante completa</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
              {THEOLOGY_BOOKS.slice(0, 6).map((book) => (
                <div
                  key={book.id}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 p-4 flex flex-col justify-between hover:border-amber-500/50 transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        {book.category}
                      </span>
                      <span className="text-stone-400 font-mono">{book.year}</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 line-clamp-1 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                      {book.title}
                    </h4>
                    <p className="text-xs text-stone-500 dark:text-stone-400 italic mb-2">
                      {book.author}
                    </p>
                    <p className="text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">
                      {book.chapters.length} cap.
                    </span>
                    <button
                      onClick={() => {
                        setSelectedBookForKindle(book);
                        setKindleChapterIndex(0);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold shadow-sm transition-transform active:scale-95"
                    >
                      <span>Ler no Kindle</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ABA 2: BAIXAR & ENVIAR LIVROS E PDFs */}
        {activeTab === 'uploads' && (
          <div className="space-y-5 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-600" />
                  <span>Baixar & Enviar Livros e Documentos</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Envie seus próprios arquivos PDF ou textos para ler no leitor do aplicativo ou faça download.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('uploads')}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Abrir central completa</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Dropzone / Botão de Envio Imediato */}
            <div className="border-2 border-dashed border-amber-500/40 hover:border-amber-500 bg-amber-50/30 dark:bg-amber-950/20 rounded-2xl p-5 text-center transition-colors">
              <UploadCloud className="w-8 h-8 text-amber-600 mx-auto mb-2" />
              <p className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100">
                Selecione ou arraste livros, apostilas e PDFs aqui
              </p>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 mb-3">
                Suporta documentos .PDF, .TXT e estudos bíblicos para leitura local
              </p>
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold cursor-pointer shadow-md transition-transform active:scale-95">
                <Plus className="w-4 h-4" />
                <span>Escolher Arquivo do Computador</span>
                <input
                  type="file"
                  accept=".txt,.pdf,.md,.doc,.docx"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>

              {uploadSuccessMsg && (
                <div className="mt-3 p-2 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs rounded-xl font-medium flex items-center justify-center gap-1.5 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>{uploadSuccessMsg}</span>
                </div>
              )}
            </div>

            {/* Lista de Documentos Disponíveis */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                Documentos Salvos para Leitura e Download:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {localDocs.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-3.5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800 flex items-center justify-between gap-3 hover:border-amber-500/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-9 h-9 rounded-lg bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="overflow-hidden">
                        <h5 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 truncate">
                          {doc.name}
                        </h5>
                        <span className="text-[11px] text-stone-400 font-mono">{doc.size}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => {
                          if (doc.content) {
                            setReadingDoc({ name: doc.name, content: doc.content });
                          } else {
                            onSelectTab('uploads');
                          }
                        }}
                        className="px-2.5 py-1.5 rounded-lg bg-amber-600 text-white hover:bg-amber-700 text-xs font-semibold flex items-center gap-1 transition-colors"
                        title="Ler Documento"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Ler</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ABA 3: VÍDEOS CRISTÃOS & ENVIAR */}
        {activeTab === 'videos' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Film className="w-4 h-4 text-amber-600" />
                  <span>Vídeos, Pregações & Mensagens</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Assista a mensagens edificantes e envie novos vídeos do YouTube ou arquivos locais.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSelectTab('videos')}
                  className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Enviar Novo Vídeo</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Player Principal em Destaque */}
              <div className="lg:col-span-2 space-y-3">
                <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-lg border border-stone-800">
                  <iframe
                    src={getYoutubeEmbedUrl(activeVideo)}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                    {activeVideo.title}
                  </h4>
                  <p className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-0.5">
                    Ministração: {activeVideo.speakerOrAuthor} • {activeVideo.duration}
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    {activeVideo.description}
                  </p>
                </div>
              </div>

              {/* Lista Rápida de Outros Vídeos */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                  Mais Mensagens:
                </span>
                <div className="space-y-2">
                  {INITIAL_CHRISTIAN_VIDEOS.map((vid) => (
                    <div
                      key={vid.id}
                      onClick={() => setActiveVideo(vid)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                        activeVideo.id === vid.id
                          ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/40 ring-1 ring-amber-500'
                          : 'border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-rose-600 text-white flex items-center justify-center shrink-0">
                        <Play className="w-4 h-4 fill-white ml-0.5" />
                      </div>
                      <div className="overflow-hidden flex-1">
                        <h5 className="font-serif font-bold text-xs text-stone-900 dark:text-stone-100 line-clamp-1">
                          {vid.title}
                        </h5>
                        <p className="text-[11px] text-stone-500 truncate">
                          {vid.speakerOrAuthor}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ABA 4: ESBOÇOS DE SERMÃO */}
        {activeTab === 'sermoes' && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <ScrollText className="w-4 h-4 text-amber-600" />
                  <span>Esboços Homiléticos Prontos para Pregar</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Estruturas completas com introdução, tópicos exegéticos, aplicações práticas e ilustrações.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('sermoes')}
                className="text-xs font-bold text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>Criar ou ver todos os esboços</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INITIAL_SERMON_OUTLINES.slice(0, 4).map((sermon) => (
                <div
                  key={sermon.id}
                  className="rounded-2xl border border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/40 p-4 space-y-3 hover:border-amber-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300">
                        {sermon.theme}
                      </span>
                      <span className="text-xs font-serif font-bold text-amber-800 dark:text-amber-400">
                        {sermon.scriptureText}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
                      {sermon.title}
                    </h4>

                    <p className="text-xs text-stone-600 dark:text-stone-300 italic line-clamp-2">
                      "{sermon.bigIdea}"
                    </p>

                    <div className="space-y-1 pt-1">
                      {sermon.points.map((pt, idx) => (
                        <div key={idx} className="text-xs text-stone-700 dark:text-stone-300 flex items-start gap-1.5">
                          <span className="font-bold text-amber-700 dark:text-amber-400 shrink-0">•</span>
                          <span className="line-clamp-1">{pt.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200/60 dark:border-stone-700/60 flex items-center justify-between">
                    <button
                      onClick={() => handleCopyOutline(sermon)}
                      className="text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-amber-700 dark:hover:text-amber-300 flex items-center gap-1 transition-colors"
                    >
                      {copiedOutlineId === sermon.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600 font-bold">Esboço Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Formatado</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setSelectedOutlineForModal(sermon)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold transition-transform active:scale-95"
                    >
                      <span>Ver Esboço Completo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* MODAL KINDLE PARA O LIVRO TEOLÓGICO SELECIONADO */}
      {selectedBookForKindle && (
        <KindleReaderModal
          isOpen={!!selectedBookForKindle}
          onClose={() => setSelectedBookForKindle(null)}
          title={selectedBookForKindle.title}
          subtitle={`Capítulo ${kindleChapterIndex + 1}: ${selectedBookForKindle.chapters[kindleChapterIndex]?.title}`}
          authorOrRef={`Por ${selectedBookForKindle.author} (${selectedBookForKindle.year})`}
          totalPages={selectedBookForKindle.chapters.length}
          currentPage={kindleChapterIndex + 1}
          onPageChange={(page) => setKindleChapterIndex(page - 1)}
        >
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-current/10">
              <h1 className="font-serif font-bold text-2xl sm:text-3xl mb-1">
                {selectedBookForKindle.chapters[kindleChapterIndex]?.title}
              </h1>
              <p className="text-xs opacity-70 italic">
                {selectedBookForKindle.subtitle}
              </p>
            </div>

            <div className="space-y-5 text-justify leading-relaxed">
              {selectedBookForKindle.chapters[kindleChapterIndex]?.content.map((p, idx) => (
                <p key={idx} className="indent-6">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </KindleReaderModal>
      )}

      {/* MODAL KINDLE PARA DOCUMENTO LOCAL ENVIADO */}
      {readingDoc && (
        <KindleReaderModal
          isOpen={!!readingDoc}
          onClose={() => setReadingDoc(null)}
          title={readingDoc.name}
          subtitle="Documento Pessoal de Estudo"
          authorOrRef="Upload do Usuário"
          totalPages={1}
          currentPage={1}
        >
          <div className="space-y-6">
            <h1 className="font-serif font-bold text-xl sm:text-2xl pb-4 border-b border-current/10">
              {readingDoc.name}
            </h1>
            <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
              {readingDoc.content}
            </div>
          </div>
        </KindleReaderModal>
      )}

      {/* MODAL DE VISUALIZAÇÃO DE ESBOÇO COMPLETO */}
      {selectedOutlineForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto space-y-5 shadow-2xl animate-scaleUp">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 dark:border-stone-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {selectedOutlineForModal.theme}
                </span>
                <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                  {selectedOutlineForModal.title}
                </h3>
                <span className="text-xs font-semibold text-stone-500">
                  Texto Bíblico: {selectedOutlineForModal.scriptureText}
                </span>
              </div>
              <button
                onClick={() => setSelectedOutlineForModal(null)}
                className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 text-stone-600 dark:text-stone-300"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="p-3.5 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-800/40">
                <strong className="block text-amber-900 dark:text-amber-300 mb-1">Ideia Central do Sermão:</strong>
                <p className="italic">"{selectedOutlineForModal.bigIdea}"</p>
              </div>

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-1">Introdução:</strong>
                <p>{selectedOutlineForModal.introduction}</p>
              </div>

              <div className="space-y-3">
                <strong className="block text-stone-900 dark:text-stone-100">Divisão Homilética (Tópicos):</strong>
                {selectedOutlineForModal.points.map((pt, i) => (
                  <div key={i} className="pl-4 border-l-2 border-amber-500 space-y-1">
                    <h5 className="font-bold text-stone-900 dark:text-stone-100">{pt.title}</h5>
                    {pt.scripture && <span className="text-xs text-amber-700 dark:text-amber-400 font-serif italic block">{pt.scripture}</span>}
                    {pt.explanation && <p className="text-stone-600 dark:text-stone-300">{pt.explanation}</p>}
                    <p className="text-stone-500 text-xs italic">Aplicação: {pt.application}</p>
                  </div>
                ))}
              </div>

              {selectedOutlineForModal.illustration && (
                <div className="p-3.5 bg-stone-100 dark:bg-stone-800 rounded-xl">
                  <strong className="block text-stone-900 dark:text-stone-100 mb-1">Ilustração Sugerida:</strong>
                  <p className="italic">{selectedOutlineForModal.illustration}</p>
                </div>
              )}

              <div>
                <strong className="block text-stone-900 dark:text-stone-100 mb-1">Conclusão & Apelo:</strong>
                <p>{selectedOutlineForModal.conclusion}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
              <button
                onClick={() => handleCopyOutline(selectedOutlineForModal)}
                className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                {copiedOutlineId === selectedOutlineForModal.id ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Esboço Completo</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setSelectedOutlineForModal(null)}
                className="px-4 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
