import React, { useState, useEffect } from 'react';
import { UploadCloud, FileText, Trash2, BookOpen, ExternalLink, Download, Plus, Check, Search, HardDrive, Edit3, FileCheck, AlertCircle, RefreshCw, Sparkles, Copy, Bot } from 'lucide-react';
import { storageService } from '../../services/storageService';
import { documentStorageService } from '../../services/documentStorageService';
import { geminiService } from '../../services/geminiService';
import { KindleReaderModal } from '../common/KindleReaderModal';

export interface UserUploadedDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  hasIndexedFile?: boolean;
  content?: string; // Text content for default or text files
  notes?: string;
}

const DEFAULT_DOCUMENTS: UserUploadedDocument[] = [
  {
    id: 'doc-sample-1',
    name: 'Estudo Exegético sobre a Graça Preveniente.txt',
    size: '18 KB',
    type: 'text/plain',
    uploadedAt: 'Hoje',
    hasIndexedFile: false,
    content: `ESTUDO TEOLÓGICO: A GRAÇA PREVENIENTE NO EVANGELHO DE JOÃO E NA TRADIÇÃO WESLEYANA

1. INTRODUÇÃO
A doutrina da Graça Preveniente é um dos pilares mais belos e bíblicos da teologia armínio-wesleyana. Ela afirma que a iniciativa da salvação pertence inteiramente a Deus. Antes que qualquer pecador pense em buscar a Deus, a graça divina já foi ao seu encontro.

2. TEXTOS BÍBLICOS CENTRAIS:
- João 1:9: "Ali estava a verdadeira luz, que alumia a todo o homem que vem ao mundo."
- Tito 2:11: "Porque a graça de Deus se há manifestado, trazendo salvação a todos os homens."
- Romanos 2:4: "Ou desprezas tu as riquezas da sua benignidade, e paciência e longanimidade, ignorando que a benignidade de Deus te leva ao arrependimento?"

3. APLICAÇÃO PASTORAL E MINISTERIAL:
O pregador e o evangelista nunca chegam a um lugar onde Deus não tenha chegado primeiro. Quando pregamos a Cristo em um bairro difícil ou em um presídio, o Espírito Santo já estava operando na consciência daquelas vidas. Isso nos dá santa audácia e profunda esperança!`,
    notes: 'Excelente material para a aula de Escola Bíblica Dominical de domingo.'
  },
  {
    id: 'doc-sample-2',
    name: 'Esboço Geral do Manual da Igreja Metodista Wesleyana.txt',
    size: '24 KB',
    type: 'text/plain',
    uploadedAt: 'Ontem',
    hasIndexedFile: false,
    content: `RESUMO DO MANUAL GERAL DA IGREJA METODISTA WESLEYANA (IMW)

1. FUNDAÇÃO E IDENTIDADE HISTÓRICA:
Fundada em 5 de janeiro de 1967 em Nova Friburgo, Estado do Rio de Janeiro. Nasceu pelo despertamento pentecostal nos anos 60, unindo a santidade bíblica wesleyana ao poder dos dons do Espírito Santo.

2. ESTRUTURA ECLESIÁSTICA:
- Concílio Geral (órgão deliberativo máximo)
- Colégio Episcopal (direção espiritual e pastoral)
- Regiões Eclesiásticas com seus respectivos Bispos
- Distritos com Superintendentes Distritais
- Igrejas Locais com Pastores Titulares e Conselhos Locais

3. LEMA MISSIONÁRIO:
"Uma Igreja Missionária e Avivada" — O mundo é a nossa paróquia!`,
    notes: 'Importante para recapitular com a liderança no próximo retiro ministerial.'
  }
];

export const UploadLibraryView: React.FC = () => {
  const [documents, setDocuments] = useState<UserUploadedDocument[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<UserUploadedDocument | null>(null);
  const [selectedDocUrl, setSelectedDocUrl] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState('');
  const [editingNotes, setEditingNotes] = useState(false);
  const [currentNotes, setCurrentNotes] = useState('');
  const [isSummarizing, setIsSummarizing] = useState(false);
  const [aiSummary, setAiSummary] = useState<string | null>(null);
  const [summaryCopied, setSummaryCopied] = useState(false);
  const [isKindleModalOpen, setIsKindleModalOpen] = useState(false);


  const handleGenerateAiSummary = async () => {
    if (!selectedDoc || isSummarizing) return;
    setIsSummarizing(true);
    try {
      const summary = await geminiService.generateBookSummary(selectedDoc.name, selectedDoc.content);
      setAiSummary(summary);
    } catch (err: any) {
      alert('Erro ao gerar resumo teológico: ' + (err.message || 'Falha ao processar'));
    } finally {
      setIsSummarizing(false);
    }
  };

  // Carrega documentos do usuário com compatibilidade
  useEffect(() => {
    try {
      const storageKey = storageService.getUserStorageKey('user_uploads_v2');
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed: UserUploadedDocument[] = JSON.parse(saved);
        setDocuments(parsed);
        if (parsed.length > 0 && !selectedDoc) {
          setSelectedDoc(parsed[0]);
        }
      } else {
        // Fallback para versão 1 sem quebrar dados existentes
        const oldKey = storageService.getUserStorageKey('user_uploads_v1');
        const oldSaved = localStorage.getItem(oldKey);
        if (oldSaved) {
          try {
            const oldParsed: UserUploadedDocument[] = JSON.parse(oldSaved);
            // Higieniza removendo data-URIs pesadas para liberar espaço
            const cleaned = oldParsed.map(d => ({
              ...d,
              content: d.type === 'application/pdf' ? undefined : d.content,
              hasIndexedFile: d.type === 'application/pdf'
            }));
            setDocuments(cleaned);
            localStorage.setItem(storageKey, JSON.stringify(cleaned));
            if (cleaned.length > 0) setSelectedDoc(cleaned[0]);
          } catch {
            setDocuments(DEFAULT_DOCUMENTS);
            localStorage.setItem(storageKey, JSON.stringify(DEFAULT_DOCUMENTS));
          }
        } else {
          setDocuments(DEFAULT_DOCUMENTS);
          localStorage.setItem(storageKey, JSON.stringify(DEFAULT_DOCUMENTS));
          setSelectedDoc(DEFAULT_DOCUMENTS[0]);
        }
      }
    } catch {
      setDocuments(DEFAULT_DOCUMENTS);
    }
  }, []);

  // Quando o documento selecionado muda, busca a URL do arquivo no IndexedDB se for binário
  useEffect(() => {
    let isMounted = true;
    setAiSummary(null);
    setSummaryCopied(false);

    async function loadDocUrl() {
      if (!selectedDoc) {
        setSelectedDocUrl(null);
        return;
      }

      if (selectedDoc.hasIndexedFile || selectedDoc.type === 'application/pdf') {
        try {
          const url = await documentStorageService.getDocumentUrl(selectedDoc.id);
          if (isMounted) {
            setSelectedDocUrl(url);
          }
        } catch (err) {
          console.error('Erro ao obter URL do documento:', err);
          if (isMounted) setSelectedDocUrl(null);
        }
      } else {
        setSelectedDocUrl(null);
      }
    }

    loadDocUrl();

    return () => {
      isMounted = false;
    };
  }, [selectedDoc]);

  const saveDocuments = (updated: UserUploadedDocument[]) => {
    setDocuments(updated);
    const storageKey = storageService.getUserStorageKey('user_uploads_v2');
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');
    const isText = file.type.startsWith('text/') || file.name.endsWith('.txt') || file.name.endsWith('.md');

    setIsUploading(true);

    try {
      const docId = `user-doc-${Date.now()}`;
      let textContent: string | undefined = undefined;

      // Se for PDF ou binário, grava com segurança no IndexedDB de alta capacidade
      if (isPdf) {
        await documentStorageService.saveDocumentFile(docId, file, file.name);
      } else if (isText) {
        textContent = await file.text();
        await documentStorageService.saveDocumentFile(docId, file, file.name);
      } else {
        await documentStorageService.saveDocumentFile(docId, file, file.name);
      }

      const fileSizeFormatted = file.size > 1024 * 1024
        ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
        : `${Math.round(file.size / 1024)} KB`;

      const newDoc: UserUploadedDocument = {
        id: docId,
        name: file.name,
        size: fileSizeFormatted,
        type: file.type || (isPdf ? 'application/pdf' : 'text/plain'),
        uploadedAt: 'Hoje',
        hasIndexedFile: true,
        content: textContent,
        notes: ''
      };

      const updated = [newDoc, ...documents];
      saveDocuments(updated);
      setSelectedDoc(newDoc);
      setUploadSuccess(`"${file.name}" carregado com sucesso!`);
      setTimeout(() => setUploadSuccess(''), 3000);
    } catch (err: any) {
      alert('Erro ao processar o arquivo: ' + (err.message || 'Falha ao salvar no armazenamento'));
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Deseja excluir este documento da sua biblioteca?')) return;

    try {
      await documentStorageService.deleteDocumentFile(id);
    } catch {
      // ignora se não estava no indexeddb
    }

    const updated = documents.filter((d) => d.id !== id);
    saveDocuments(updated);
    if (selectedDoc?.id === id) {
      setSelectedDoc(updated[0] || null);
    }
  };

  const handleSaveNotes = () => {
    if (!selectedDoc) return;
    const updated = documents.map((d) => {
      if (d.id === selectedDoc.id) {
        return { ...d, notes: currentNotes };
      }
      return d;
    });
    saveDocuments(updated);
    setSelectedDoc({ ...selectedDoc, notes: currentNotes });
    setEditingNotes(false);
  };

  const filteredDocs = documents.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (d.notes && d.notes.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6 pb-12 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <HardDrive className="w-4 h-4" /> Sua Estante Pessoal de Livros
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Upload e Leitura de Livros em PDF & Estudos
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Envie seus próprios livros em PDF, comentários bíblicos, apostilas e monografias teológicas para leitura integrada com armazenamento seguro no seu aparelho.
        </p>
      </div>

      {uploadSuccess && (
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>{uploadSuccess}</span>
        </div>
      )}

      {/* Card de Upload Drag & Drop */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragOver(true);
        }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragOver(false);
          handleFileUpload(e.dataTransfer.files);
        }}
        className={`border-2 border-dashed rounded-3xl p-6 sm:p-8 text-center transition-all ${
          isDragOver
            ? 'border-amber-600 bg-amber-50 dark:bg-amber-950/40 scale-[1.01]'
            : 'border-stone-300 dark:border-stone-700 hover:border-amber-500/60 bg-white dark:bg-stone-900'
        }`}
      >
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 mx-auto flex items-center justify-center shadow-inner">
            <UploadCloud className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">
              Arraste e solte seus livros ou clique para enviar
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
              Suporta arquivos <strong>PDF (.pdf)</strong>, <strong>Texto (.txt)</strong>, <strong>Markdown (.md)</strong> e <strong>EPUB</strong>
            </p>
          </div>
          <div>
            <label className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-semibold shadow-md cursor-pointer transition-colors">
              {isUploading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Salvando Livro no Aparelho...</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Escolher Arquivo do Computador ou Celular</span>
                </>
              )}
              <input
                type="file"
                disabled={isUploading}
                accept=".pdf,.txt,.md,.epub,application/pdf,text/plain"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
            </label>
          </div>
          <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1">
            <HardDrive className="w-3.5 h-3.5 text-emerald-500" />
            <span>Armazenado com segurança no seu dispositivo (IndexedDB). Não consome limites de armazenamento.</span>
          </div>
        </div>
      </div>

      {/* Grid Principal: Lista de Documentos e Visualizador */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Lista de Documentos */}
        <div className="lg:col-span-4 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar nos meus livros..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2 max-h-[550px] overflow-y-auto pr-1">
            {filteredDocs.length === 0 ? (
              <p className="text-xs text-stone-500 p-4 text-center italic">
                Nenhum documento encontrado.
              </p>
            ) : (
              filteredDocs.map((doc) => {
                const isSelected = selectedDoc?.id === doc.id;
                const isPdf = doc.type === 'application/pdf' || doc.name.toLowerCase().endsWith('.pdf');
                return (
                  <div
                    key={doc.id}
                    onClick={() => {
                      setSelectedDoc(doc);
                      setCurrentNotes(doc.notes || '');
                      setEditingNotes(false);
                    }}
                    className={`p-3.5 rounded-2xl cursor-pointer border transition-all text-left group ${
                      isSelected
                        ? 'bg-amber-50 dark:bg-stone-800 border-amber-500/80 shadow-sm ring-1 ring-amber-500/30'
                        : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isPdf
                            ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400'
                            : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400'
                        }`}>
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 truncate">
                            {doc.name}
                          </h4>
                          <span className="text-[10px] text-stone-400">
                            {doc.size} • {doc.uploadedAt} {isPdf && '• PDF'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(doc.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 p-1 text-stone-400 hover:text-rose-500 transition-opacity"
                        title="Excluir arquivo"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Visualizador do Arquivo Selecionado */}
        <div className="lg:col-span-8">
          {selectedDoc ? (
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-7 border border-stone-200 dark:border-stone-800 shadow-sm space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      {selectedDoc.type === 'application/pdf' || selectedDoc.name.toLowerCase().endsWith('.pdf') ? 'Livro em PDF' : 'Documento / Texto'}
                    </span>
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <HardDrive className="w-3 h-3" /> Salvo no Aparelho
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 mt-1">
                    {selectedDoc.name}
                  </h3>
                  <p className="text-xs text-stone-400">
                    Tamanho: {selectedDoc.size} • Enviado: {selectedDoc.uploadedAt}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={handleGenerateAiSummary}
                    disabled={isSummarizing}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-sm transition-all disabled:opacity-50"
                    title="Gerar resumo teológico e síntese da obra com Gemini IA"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{isSummarizing ? 'Gerando Análise...' : 'Resumo com Gemini IA'}</span>
                  </button>

                  {selectedDoc.content && (
                    <button
                      onClick={() => setIsKindleModalOpen(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-200 hover:bg-amber-100 transition-colors shadow-sm"
                      title="Abrir este documento no leitor estilo Kindle"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>Ler no Kindle</span>
                    </button>
                  )}


                  {selectedDocUrl && (
                    <>
                      <a
                        href={selectedDocUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
                        title="Abrir em nova aba com zoom e controles nativos"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Tela Cheia</span>
                      </a>

                      <a
                        href={selectedDocUrl}
                        download={selectedDoc.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 transition-colors"
                        title="Baixar cópia para o computador ou celular"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Baixar</span>
                      </a>
                    </>
                  )}

                  <button
                    onClick={() => handleDelete(selectedDoc.id)}
                    className="p-1.5 rounded-xl text-stone-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                    title="Excluir Documento"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Área de Visualização do Documento */}
              {selectedDoc.type === 'application/pdf' || selectedDoc.name.toLowerCase().endsWith('.pdf') ? (
                selectedDocUrl ? (
                  <div className="space-y-2">
                    <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 h-[600px] w-full bg-stone-950">
                      <object
                        data={selectedDocUrl}
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="p-8 text-center text-stone-300 space-y-4">
                          <p className="text-sm">
                            O leitor embutido precisa de permissão de visualização neste navegador.
                          </p>
                          <a
                            href={selectedDocUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-bold shadow-md"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Toque Aqui para Abrir o Livro no Leitor do Aparelho
                          </a>
                        </div>
                      </object>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-stone-500 px-1">
                      <span>Dica: Use os botões acima para ler em tela cheia no navegador ou celular com zoom.</span>
                      <a href={selectedDocUrl} target="_blank" rel="noreferrer" className="text-amber-700 dark:text-amber-400 font-semibold hover:underline">
                        Modo Leitura Cheia ↗
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-12 text-center bg-stone-50 dark:bg-stone-800/40 rounded-2xl border border-stone-200 dark:border-stone-700 text-stone-500 space-y-2">
                    <RefreshCw className="w-6 h-6 animate-spin text-amber-600 mx-auto" />
                    <p className="text-xs">Carregando visualizador do livro em PDF...</p>
                  </div>
                )
              ) : (
                <div className="bg-stone-50 dark:bg-stone-800/60 p-6 rounded-2xl border border-stone-200/70 dark:border-stone-700/60 font-serif text-sm leading-relaxed whitespace-pre-wrap text-stone-800 dark:text-stone-200 max-h-[500px] overflow-y-auto">
                  {selectedDoc.content || 'Nenhum conteúdo legível em texto disponível para este arquivo.'}
                </div>
              )}

              {/* Card de Resumo Gemini IA */}
              {aiSummary && (
                <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-600/5 to-amber-700/10 border border-amber-500/30 dark:border-amber-500/20 shadow-sm space-y-3 animate-fadeIn">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                          Resumo Teológico & Síntese da Obra
                          <span className="text-[10px] font-sans font-semibold px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200">
                            Gemini IA
                          </span>
                        </h4>
                        <p className="text-[11px] text-stone-500 dark:text-stone-400">
                          Estrutura canônica, tese central, divisão de capítulos e aplicação prática
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (aiSummary) {
                            navigator.clipboard.writeText(aiSummary);
                            setSummaryCopied(true);
                            setTimeout(() => setSummaryCopied(false), 2500);
                          }
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-50 transition-colors shadow-xs"
                        title="Copiar resumo completo"
                      >
                        {summaryCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copiar</span>
                          </>
                        )}
                      </button>

                      <button
                        onClick={() => {
                          if (!aiSummary || !selectedDoc) return;
                          const updatedText = selectedDoc.notes 
                            ? `${selectedDoc.notes}\n\n--- RESUMO IA ---\n${aiSummary}`
                            : `--- RESUMO IA ---\n${aiSummary}`;
                          const updatedDocs = documents.map(d => d.id === selectedDoc.id ? { ...d, notes: updatedText } : d);
                          saveDocuments(updatedDocs);
                          setSelectedDoc({ ...selectedDoc, notes: updatedText });
                          setCurrentNotes(updatedText);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white transition-colors shadow-xs"
                        title="Salvar este resumo diretamente nas suas notas deste livro"
                      >
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>Salvar nas Notas</span>
                      </button>

                      <button
                        onClick={() => setAiSummary(null)}
                        className="p-1 rounded-lg text-stone-400 hover:text-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                        title="Fechar painel de resumo"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/80 dark:bg-stone-900/80 p-4 rounded-xl border border-stone-200/60 dark:border-stone-800/80 font-serif text-xs sm:text-sm leading-relaxed whitespace-pre-wrap text-stone-800 dark:text-stone-200 max-h-[400px] overflow-y-auto">
                    {aiSummary}
                  </div>
                </div>
              )}

              {/* Caderno de Anotações do Livro */}
              <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-stone-800/80 border border-amber-200 dark:border-stone-700 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                    <Edit3 className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                    Minhas Anotações de Estudo deste Livro
                  </h4>
                  {!editingNotes ? (
                    <button
                      onClick={() => {
                        setCurrentNotes(selectedDoc.notes || '');
                        setEditingNotes(true);
                      }}
                      className="text-xs font-semibold text-amber-800 dark:text-amber-400 hover:underline"
                    >
                      {selectedDoc.notes ? 'Editar anotação' : '+ Adicionar nota'}
                    </button>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingNotes(false)}
                        className="text-xs text-stone-500 hover:text-stone-800"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={handleSaveNotes}
                        className="px-3 py-1 rounded-lg bg-amber-700 text-white text-xs font-semibold shadow-sm"
                      >
                        Salvar Nota
                      </button>
                    </div>
                  )}
                </div>

                {editingNotes ? (
                  <textarea
                    rows={4}
                    value={currentNotes}
                    onChange={(e) => setCurrentNotes(e.target.value)}
                    placeholder="Escreva seus resumos, insights teológicos e notas de pregação sobre este livro..."
                    className="w-full p-3 text-xs sm:text-sm rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 italic">
                    {selectedDoc.notes || 'Nenhuma anotação adicionada ainda. Clique em "+ Adicionar nota" para registrar seus estudos.'}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="p-16 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 text-stone-500 space-y-2">
              <BookOpen className="w-12 h-12 mx-auto text-amber-600/40" />
              <h4 className="font-serif font-bold text-base text-stone-800 dark:text-stone-200">
                Nenhum livro selecionado
              </h4>
              <p className="text-xs text-stone-400 max-w-sm mx-auto">
                Selecione um arquivo na lista lateral ou envie um novo PDF/estudo no card de upload acima para começar a leitura.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Leitor Estilo Kindle para Documentos do Usuário */}
      {isKindleModalOpen && selectedDoc && selectedDoc.content && (
        <KindleReaderModal
          isOpen={isKindleModalOpen}
          onClose={() => setIsKindleModalOpen(false)}
          title={selectedDoc.name}
          subtitle="Documento da Biblioteca de Uploads"
          authorOrRef="O Mundo Cristão"
          totalPages={1}
          currentPage={1}
        >
          <div className="space-y-6">
            <div className="text-center pb-6 border-b border-current/10">
              <h1 className="font-serif font-bold text-2xl sm:text-3xl mb-1">
                {selectedDoc.name}
              </h1>
              <p className="text-xs opacity-70">
                Enviado pelo Usuário • {selectedDoc.size}
              </p>
            </div>
            <div className="whitespace-pre-wrap leading-relaxed text-sm sm:text-base">
              {selectedDoc.content}
            </div>
          </div>
        </KindleReaderModal>
      )}
    </div>
  );
};

