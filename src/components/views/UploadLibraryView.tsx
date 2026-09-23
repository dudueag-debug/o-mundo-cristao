import React, { useState, useEffect } from 'react';
import { UploadCloud, FileText, Trash2, BookOpen, Eye, Plus, Check, FileCheck, Search, Clock, HardDrive, Edit3, X } from 'lucide-react';
import { storageService } from '../../services/storageService';

export interface UserUploadedDocument {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadedAt: string;
  content?: string; // Text content or data URL
  notes?: string;
}

const DEFAULT_DOCUMENTS: UserUploadedDocument[] = [
  {
    id: 'doc-sample-1',
    name: 'Estudo Exegético sobre a Graça Preveniente.txt',
    size: '18 KB',
    type: 'text/plain',
    uploadedAt: 'Hoje',
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [editingNotes, setEditingNotes] = useState(false);
  const [currentNotes, setCurrentNotes] = useState('');

  useEffect(() => {
    try {
      const storageKey = storageService.getUserStorageKey('user_uploads_v1');
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setDocuments(JSON.parse(saved));
      } else {
        setDocuments(DEFAULT_DOCUMENTS);
        localStorage.setItem(storageKey, JSON.stringify(DEFAULT_DOCUMENTS));
      }
    } catch {
      setDocuments(DEFAULT_DOCUMENTS);
    }
  }, []);

  const saveDocuments = (updated: UserUploadedDocument[]) => {
    setDocuments(updated);
    const storageKey = storageService.getUserStorageKey('user_uploads_v1');
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target?.result as string;
      const newDoc: UserUploadedDocument = {
        id: `user-doc-${Date.now()}`,
        name: file.name,
        size: `${Math.round(file.size / 1024)} KB`,
        type: file.type || 'text/plain',
        uploadedAt: 'Hoje',
        content: content,
        notes: ''
      };

      const updated = [newDoc, ...documents];
      saveDocuments(updated);
      setSelectedDoc(newDoc);
    };

    if (file.type === 'application/pdf') {
      reader.readAsDataURL(file); // Data URL for PDF preview
    } else {
      reader.readAsText(file); // Text for txt / markdown
    }
  };

  const handleDelete = (id: string) => {
    const updated = documents.filter((d) => d.id !== id);
    saveDocuments(updated);
    if (selectedDoc?.id === id) {
      setSelectedDoc(null);
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
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-xs uppercase tracking-widest mb-1">
          <HardDrive className="w-4 h-4" /> Sua Estante Pessoal
        </div>
        <h1 className="font-serif font-bold text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
          Upload de Livros, PDFs & Estudos
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-2xl">
          Envie seus próprios livros em PDF, estudos bíblicos, monografias e sermões para leitura e pesquisa dentro do aplicativo.
        </p>
      </div>

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
        className={`border-2 border-dashed rounded-3xl p-8 text-center transition-all ${
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
              <Plus className="w-4 h-4" />
              <span>Escolher Arquivo do Computador / Celular</span>
              <input
                type="file"
                accept=".pdf,.txt,.md,.epub"
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
              />
            </label>
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
              placeholder="Buscar nos meus arquivos..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
            {filteredDocs.length === 0 ? (
              <p className="text-xs text-stone-500 p-4 text-center italic">
                Nenhum documento encontrado.
              </p>
            ) : (
              filteredDocs.map((doc) => {
                const isSelected = selectedDoc?.id === doc.id;
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
                        <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="overflow-hidden">
                          <h4 className="font-serif font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100 truncate">
                            {doc.name}
                          </h4>
                          <span className="text-[10px] text-stone-400">
                            {doc.size} • {doc.uploadedAt}
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
            <div className="bg-white dark:bg-stone-900 rounded-3xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                    Documento Pessoal
                  </span>
                  <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 mt-1">
                    {selectedDoc.name}
                  </h3>
                  <p className="text-xs text-stone-400">
                    Tamanho: {selectedDoc.size} • Enviado em: {selectedDoc.uploadedAt}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(selectedDoc.id)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Excluir Documento</span>
                </button>
              </div>

              {/* Pré-visualização do Conteúdo */}
              {selectedDoc.type === 'application/pdf' && selectedDoc.content?.startsWith('data:') ? (
                <div className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-700 h-[600px] w-full">
                  <iframe
                    src={selectedDoc.content}
                    title={selectedDoc.name}
                    className="w-full h-full"
                  />
                </div>
              ) : (
                <div className="bg-stone-50 dark:bg-stone-800/60 p-6 rounded-2xl border border-stone-200/70 dark:border-stone-700/60 font-serif text-sm leading-relaxed whitespace-pre-wrap text-stone-800 dark:text-stone-200 max-h-[500px] overflow-y-auto">
                  {selectedDoc.content || 'Nenhum conteúdo legível disponível para este arquivo.'}
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
                Nenhum documento selecionado
              </h4>
              <p className="text-xs text-stone-400 max-w-sm mx-auto">
                Selecione um arquivo na lista lateral ou envie um novo PDF/estudo no card de upload acima para começar a leitura.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
