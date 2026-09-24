// Serviço de Armazenamento de Documentos e Livros (PDF/TXT/EPUB) via IndexedDB
// Evita limites de 5MB do LocalStorage e permite armazenar livros completos com segurança

const DB_NAME = 'omc_documents_db';
const DB_VERSION = 1;
const STORE_NAME = 'documents';

interface StoredDocument {
  id: string;
  blob: Blob;
  name: string;
  type: string;
  size: number;
  createdAt: string;
}

class DocumentStorageService {
  private dbPromise: Promise<IDBDatabase> | null = null;
  private objectUrlCache: Map<string, string> = new Map();

  private getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB não suportado neste navegador.'));
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });

    return this.dbPromise;
  }

  async saveDocumentFile(id: string, file: File | Blob, name?: string): Promise<void> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);

      const record: StoredDocument = {
        id,
        blob: file,
        name: name || (file instanceof File ? file.name : 'documento.pdf'),
        type: file.type || 'application/pdf',
        size: file.size,
        createdAt: new Date().toISOString()
      };

      const request = store.put(record);

      request.onsuccess = () => {
        if (this.objectUrlCache.has(id)) {
          URL.revokeObjectURL(this.objectUrlCache.get(id)!);
          this.objectUrlCache.delete(id);
        }
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async getDocumentBlob(id: string): Promise<Blob | null> {
    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);

      request.onsuccess = () => {
        const record = request.result as StoredDocument | undefined;
        resolve(record ? record.blob : null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }

  async getDocumentUrl(id: string): Promise<string | null> {
    if (this.objectUrlCache.has(id)) {
      return this.objectUrlCache.get(id)!;
    }

    const blob = await this.getDocumentBlob(id);
    if (!blob) return null;

    const url = URL.createObjectURL(blob);
    this.objectUrlCache.set(id, url);
    return url;
  }

  async deleteDocumentFile(id: string): Promise<void> {
    if (this.objectUrlCache.has(id)) {
      URL.revokeObjectURL(this.objectUrlCache.get(id)!);
      this.objectUrlCache.delete(id);
    }

    const db = await this.getDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => {
        resolve();
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  }
}

export const documentStorageService = new DocumentStorageService();
