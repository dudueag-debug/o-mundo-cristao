// Serviço de Autenticação e Gestão de Contas de Usuários
// Garante privacidade total: cada conta possui chave isolada para seus dados

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string; // 'pastor' | 'cordeiro' | 'cruz' | 'biblia' | 'pomba' | 'calice'
  createdAt: string;
}

interface StoredUserAccount extends UserProfile {
  passwordHash: string;
}

const STORAGE_KEYS = {
  USERS_LIST: 'omc_registered_users_v1',
  ACTIVE_SESSION: 'omc_current_user_session_v1',
};

// Utilitário para gerar hash SHA-256 seguro da senha no navegador
async function hashPassword(password: string): Promise<string> {
  if (typeof window === 'undefined' || !window.crypto || !window.crypto.subtle) {
    // Fallback simples
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
      hash = (hash << 5) - hash + password.charCodeAt(i);
      hash |= 0;
    }
    return 'fallback_' + Math.abs(hash).toString(16);
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(password + '_omc_salt_2026');
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

class AuthService {
  private currentUser: UserProfile | null = null;
  private listeners: Array<(user: UserProfile | null) => void> = [];

  constructor() {
    this.loadCurrentSession();
  }

  private loadCurrentSession(): void {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_SESSION);
      if (data) {
        this.currentUser = JSON.parse(data);
      }
    } catch {
      this.currentUser = null;
    }
  }

  private getStoredUsers(): StoredUserAccount[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.USERS_LIST);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveStoredUsers(users: StoredUserAccount[]): void {
    localStorage.setItem(STORAGE_KEYS.USERS_LIST, JSON.stringify(users));
  }

  private notify(): void {
    this.listeners.forEach(cb => cb(this.currentUser));
  }

  getCurrentUser(): UserProfile | null {
    return this.currentUser;
  }

  subscribe(callback: (user: UserProfile | null) => void): () => void {
    this.listeners.push(callback);
    callback(this.currentUser);
    return () => {
      this.listeners = this.listeners.filter(cb => cb !== callback);
    };
  }

  async register(name: string, email: string, password: string, avatar: string = 'pastor'): Promise<UserProfile> {
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    if (!trimmedName) {
      throw new Error('Por favor, informe seu nome completo.');
    }
    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      throw new Error('Por favor, informe um e-mail válido.');
    }
    if (password.length < 6) {
      throw new Error('A senha deve ter no mínimo 6 caracteres.');
    }

    const users = this.getStoredUsers();
    if (users.some(u => u.email.toLowerCase() === trimmedEmail)) {
      throw new Error('Já existe uma conta cadastrada com este e-mail. Faça login ou use outro e-mail.');
    }

    const passwordHash = await hashPassword(password);
    const userId = 'usr_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    const newUser: StoredUserAccount = {
      id: userId,
      name: trimmedName,
      email: trimmedEmail,
      avatar,
      createdAt: new Date().toLocaleDateString('pt-BR'),
      passwordHash
    };

    users.push(newUser);
    this.saveStoredUsers(users);

    const profile: UserProfile = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      createdAt: newUser.createdAt
    };

    this.currentUser = profile;
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(profile));
    this.notify();

    return profile;
  }

  async login(email: string, password: string): Promise<UserProfile> {
    const trimmedEmail = email.trim().toLowerCase();
    const users = this.getStoredUsers();

    const user = users.find(u => u.email.toLowerCase() === trimmedEmail);
    if (!user) {
      throw new Error('Nenhuma conta encontrada com este e-mail. Crie sua conta primeiro!');
    }

    const passwordHash = await hashPassword(password);
    if (user.passwordHash !== passwordHash) {
      throw new Error('Senha incorreta. Verifique os dados digitados e tente novamente.');
    }

    const profile: UserProfile = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      createdAt: user.createdAt
    };

    this.currentUser = profile;
    localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(profile));
    this.notify();

    return profile;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem(STORAGE_KEYS.ACTIVE_SESSION);
    this.notify();
  }

  updateProfile(updates: Partial<Pick<UserProfile, 'name' | 'avatar'>>): UserProfile | null {
    if (!this.currentUser) return null;

    const users = this.getStoredUsers();
    const idx = users.findIndex(u => u.id === this.currentUser!.id);
    if (idx !== -1) {
      if (updates.name) users[idx].name = updates.name.trim();
      if (updates.avatar) users[idx].avatar = updates.avatar;
      this.saveStoredUsers(users);

      this.currentUser = {
        ...this.currentUser,
        ...updates
      };
      localStorage.setItem(STORAGE_KEYS.ACTIVE_SESSION, JSON.stringify(this.currentUser));
      this.notify();
    }

    return this.currentUser;
  }
}

export const authService = new AuthService();
