// Serviço do Gemini Teológico - IA Cristocêntrica para Estudos Bíblicos e Pastorais
import { storageService } from './storageService';

export interface GeminiMessage {
  id: string;
  sender: 'user' | 'gemini';
  text: string;
  timestamp: string;
  category?: 'exegese' | 'esboco' | 'doutrina' | 'historia' | 'aconselhamento' | 'livre' | string;
}

export type ChatMessage = GeminiMessage;

const THEOLOGICAL_SYSTEM_PROMPT = `Você é o Gemini Teológico, um assistente cristocêntrico de estudos bíblicos, hermenêutica e teologia pastoral do aplicativo "O Mundo Cristão".
Seus pilares inegociáveis:
1. Cristocêntrico: Tudo na Escritura aponta para a glória, sacrifício e senhorio de Jesus Cristo (Soli Deo Gloria).
2. Fidelidade Bíblica: Respostas fundamentadas nas Escrituras Sagradas com capítulos e versículos.
3. Teologia Histórica e Wesleyana: Valorização da Graça de Deus (Preveniente, Justificadora e Santificadora), santidade de vida e zelo missionário.
4. Clareza Pastoral: Linguagem edificante, acolhedora, respeitosa e biblicamente fundamentada.`;

// Base de conhecimento estruturada para respostas imediatas (modo offline / sem chave)
const EMBEDDED_THEOLOGY_KNOWLEDGE: Record<string, string> = {
  graca: `### ✝ A Teologia da Graça de Deus (Visão Wesleyana e Bíblica)

Na tradição bíblica e armínio-wesleyana, a graça de Deus não é uma força abstrata, mas a presença ativa do próprio Espírito Santo atuando na redenção humana:

1. **Graça Preveniente (A Graça que vai adiante)**:
   - *Texto Base*: João 1:9 ("A verdadeira luz que alumia a todo homem") e Tito 2:11.
   - *Significado*: Antes mesmo que qualquer ser humano pense em buscar a Deus, a graça divina já foi ao seu encontro, restaurando a capacidade de responder ao chamado do Evangelho. O ser humano não tem mérito algum; a iniciativa é 100% de Deus.

2. **Graça Justificadora (A Salvação pela Fé em Cristo)**:
   - *Texto Base*: Romanos 5:1 ("Justificados, pois, mediante a fé, temos paz com Deus por meio de nosso Senhor Jesus Cristo").
   - *Significado*: O perdão incondicional dos pecados imputado ao pecador arrependido unicamente pelos méritos do sangue de Jesus derramado na cruz.

3. **Graça Santificadora (Inteira Santificação / Perfeição Cristã)**:
   - *Texto Base*: 1 Tessalonicenses 5:23 ("O mesmo Deus da paz vos santifique em tudo").
   - *Significado*: O poder do Espírito Santo que purifica o coração do crente, enchendo-o de amor perfeito a Deus e ao próximo.

> **Aplicação Pastoral**: Nunca chegamos a um lugar onde a graça de Deus não tenha chegado primeiro!`,

  esboco: `### 📖 Esboço de Sermão Expositivo: "O Deus Que Cuida e Restaura"
**Texto Bíblico Central**: Salmo 23:1-3

#### 🎯 Proposição
Em um mundo de ansiedade e escassez, o Senhor Se revela como o Pastor soberano que supre, guia e restaura a nossa alma.

---

#### I. A Suficiência do Bom Pastor (v. 1)
- *"O Senhor é o meu pastor; de nada terei falta."*
- Ele não é apenas um pastor geral, mas o **meu** pastor pessoal (apropriação da fé).
- Em Cristo temos tudo o que é necessário para a vida e a piedade (2 Pedro 1:3).

#### II. O Descanso nos Pastos da Graça (v. 2)
- *"Em verdes pastagens me faz repousar e me conduz a águas tranquilas."*
- Ovelhas ansiosas não conseguem deitar; o repouso só acontece na presença pacificadora do Pastor.
- As águas de descanso representam a paz que excede todo o entendimento (Filipenses 4:7).

#### III. A Restauração da Alma Cansada (v. 3)
- *"Refrigera-me a alma. Guia-me pelas veredas da justiça por amor do seu nome."*
- O termo hebraico *nephesh* indica a restauração do fôlego, da vida e da esperança.
- O Pastor nos conduz por caminhos de retidão não por mérito nosso, mas pela honra do Seu Santo Nome.

---

#### 🕊 Conclusão & Apelo
Entregue suas preocupações e o governo do seu caminho Àquele que deu a Sua própria vida pelas Suas ovelhas (João 10:11). Ele está à sua mesa hoje!`,

  imw: `### 🔥 História e Identidade da Igreja Metodista Wesleyana (IMW)

A Igreja Metodista Wesleyana nasceu sob um poderoso derramamento do Espírito Santo no Brasil:

1. **A Data de Fundação**:
   - Fundada solenemente em **5 de janeiro de 1967**, no salão do Grêmio Teatral de **Nova Friburgo (RJ)**.

2. **O Avivamento Espiritual**:
   - Fruto de reuniões de oração nos anos 60 em que pastores e membros foram batizados com o Espírito Santo, recebendo línguas estranhas e dons espirituais de poder.

3. **Os Pioneiros**:
   - Liderada pelo saudoso **Pastor Dorival Beppu**, juntamente com **Idelmício Cabral dos Santos**, **Waldyr Miranda** e **Gessé Teixeira de Carvalho**.

4. **Identidade Teológica Única**:
   - Une a **Santidade Bíblica e a Doutrina da Graça de John Wesley** ao **Fogo Pentecostal** dos dons do Espírito Santo.
   - Lema: *"Uma Igreja Avivada e Missionária — O mundo é a nossa paróquia!"*`
};

export const geminiService = {
  getApiKey(): string {
    const key = storageService.getUserStorageKey('gemini_api_key');
    return localStorage.getItem(key) || '';
  },

  setApiKey(apiKey: string): void {
    const key = storageService.getUserStorageKey('gemini_api_key');
    localStorage.setItem(key, apiKey.trim());
  },

  hasCustomKey(): boolean {
    return Boolean(this.getApiKey());
  },

  getChatHistory(): GeminiMessage[] {
    try {
      const key = storageService.getUserStorageKey('gemini_chat_history_v1');
      const saved = localStorage.getItem(key);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {}
    return [
      {
        id: 'welcome-msg',
        sender: 'gemini',
        text: `### ✝ Bem-vindo ao Gemini Teológico!
Sou seu assistente cristocêntrico de estudos bíblicos, hermenêutica e teologia pastoral.

**Como posso auxiliá-lo hoje?**
- 📖 Exegese de passagens bíblicas e contexto histórico
- 📜 Criação de esboços de pregação expositiva
- 🏛 Teologia Bíblica e Wesleyana (Doutrina da Graça)
- 🙏 Respostas pastorais fundamentadas na Palavra de Deus

*Selecione uma das sugestões acima ou digite sua pergunta:*`,
        timestamp: 'Agora'
      }
    ];
  },

  saveChatHistory(history: GeminiMessage[]): void {
    try {
      const key = storageService.getUserStorageKey('gemini_chat_history_v1');
      localStorage.setItem(key, JSON.stringify(history));
    } catch {}
  },

  clearChatHistory(): void {
    try {
      const key = storageService.getUserStorageKey('gemini_chat_history_v1');
      localStorage.removeItem(key);
    } catch {}
  },

  async askGemini(question: string, category?: string): Promise<string> {
    const contextualPrompt = category && category !== 'livre' 
      ? `[Categoria: ${category.toUpperCase()}]\n${question}` 
      : question;
    return this.askTheologicalGemini(contextualPrompt);
  },

  async askTheologicalGemini(userQuestion: string): Promise<string> {
    const apiKey = this.getApiKey();
    const query = userQuestion.toLowerCase().trim();

    // Se houver API key configurada, faz chamada oficial ao Gemini 1.5 Flash do Google
    if (apiKey) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const body = {
          contents: [
            {
              role: 'user',
              parts: [
                {
                  text: `${THEOLOGICAL_SYSTEM_PROMPT}\n\nPergunta do usuário cristão: ${userQuestion}\n\nResponda com profundidade bíblica, citações de versículos e foco em Jesus Cristo:`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 1200,
          }
        };

        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        if (res.ok) {
          const data = await res.json();
          const generated = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generated) {
            return generated;
          }
        } else {
          console.warn('Erro ao chamar Google Gemini API, utilizando motor teológico interno.');
        }
      } catch (err) {
        console.warn('Falha na conexão com Google Gemini, recorrendo à base interna offline.', err);
      }
    }

    // Modo interno / offline: geração teológica inteligente baseada em palavras-chave bíblicas
    if (query.includes('graça') || query.includes('preveniente') || query.includes('salvação')) {
      return EMBEDDED_THEOLOGY_KNOWLEDGE.graca;
    }

    if (query.includes('esboço') || query.includes('sermão') || query.includes('pregação') || query.includes('salmo 23')) {
      return EMBEDDED_THEOLOGY_KNOWLEDGE.esboco;
    }

    if (query.includes('imw') || query.includes('metodista wesleyana') || query.includes('nova friburgo') || query.includes('beppu')) {
      return EMBEDDED_THEOLOGY_KNOWLEDGE.imw;
    }

    if (query.includes('justificação') || query.includes('fé') || query.includes('reforma')) {
      return `### ✝ Justificação Somente Pela Fé (Sola Fide)
A doutrina da Justificação pela Fé é a resposta bíblica para a maior pergunta humana: *"Como o homem pecador pode estar em paz diante de um Deus infinitamente Santo?"*

- **Fundamento Bíblico**: Romanos 1:17; Romanos 3:24-26; Efésios 2:8-9.
- **Definição**: Não é tornar o pecador perfeito por suas obras, mas declará-lo judicialmente justo através dos méritos de Jesus Cristo.
- **A Cruz como Centro**: Cristo tomou nosso lugar e levou sobre Si a condenação que nos cabia. A fé não é a causa da salvação, mas a mão estendida que recebe o presente imerecido da Graça.

> *"Não confio no melhor que há em mim, mas descanso inteiramente nos méritos de Cristo."* — John Wesley`;
    }

    if (query.includes('oração') || query.includes('orar') || query.includes('clamor')) {
      return `### 🙏 Teologia da Oração: Intimidade e Poder
A oração cristã não é uma tentativa de convencer Deus a mudar de ideia, mas o alinhamento do nosso coração com a soberana vontade do Pai:

1. **A Oração ensinada por Jesus (Mateus 6:9-13)**:
   - Começa com adoração e santificação do Nome de Deus ("Santificado seja o teu nome").
   - Coloca a vontade de Deus acima dos desejos carnais ("Seja feita a tua vontade").
   - Reconhece a dependência diária do sustento físico e espiritual ("O pão nosso de cada dia").
2. **A Intercessão do Espírito Santo (Romanos 8:26)**:
   - Quando não sabemos como orar como convém, o próprio Espírito intercede por nós com gemidos inexprimíveis.
3. **A Promessa de Jesus (João 14:13)**:
   - Tudo quanto pedirdes em Meu Nome, Eu o farei, para que o Pai seja glorificado no Filho.

*Dica prática*: Reserve momentos no seu dia para silenciar o barulho exterior e ouvir a voz mansa do Bom Pastor.`;
    }

    // Resposta padrão edificante cristocêntrica
    return `### 📖 Análise Bíblica e Teológica

Com base nas Sagradas Escrituras e na tradição cristã histórica:

**Reflexão sobre "${userQuestion}"**:
1. **O Fundamento Cristocêntrico**:
   Toda questão espiritual encontra sua resposta suprema na pessoa e na obra de nosso Senhor Jesus Cristo. Em Colossenses 2:3 está escrito que *"Nele estão escondidos todos os tesouros da sabedoria e do conhecimento"*.

2. **A Autoridade da Palavra (Sola Scriptura)**:
   *"Toda a Escritura é inspirada por Deus e útil para o ensino, para a repreensão, para a correção, para a educação na justiça"* (2 Timóteo 3:16). Qualquer prática ou doutrina deve ser examinada à luz do texto sagrado.

3. **Aplicação Prática e Vida Diária**:
   A verdadeira teologia nunca termina na mente; ela desce ao coração e transborda nas mãos em amor a Deus e misericórdia ao próximo.

> 💡 *Dica:* Você também pode cadastrar sua chave gratuita da **Google Gemini API** nas configurações deste card para obter análises exegéticas ilimitadas em tempo real!`;
  },

  async generateBookSummary(bookTitle: string, bookContent?: string): Promise<string> {
    const apiKey = this.getApiKey();
    const prompt = `Gere uma síntese teológica profunda e cristocêntrica da obra/documento: "${bookTitle}".
${bookContent ? `Trecho ou conteúdo base:\n${bookContent.slice(0, 3000)}\n` : ''}

Estruture a resposta com:
1. Tese Central & Foco em Cristo (Cristocêntrico)
2. Estrutura Canônica / Doutrinária
3. Principais Lições Teológicas
4. Aplicação Pastoral e Prática para a Igreja e o Lar`;

    if (apiKey) {
      try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
        const body = {
          contents: [{ role: 'user', parts: [{ text: `${THEOLOGICAL_SYSTEM_PROMPT}\n\n${prompt}` }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 1200 }
        };
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });
        if (res.ok) {
          const data = await res.json();
          const generated = data.candidates?.[0]?.content?.parts?.[0]?.text;
          if (generated) return generated;
        }
      } catch (err) {
        console.warn('Erro ao chamar Gemini API para resumo, usando síntese inteligente local', err);
      }
    }

    return `### 📖 Síntese Teológica da Obra: *${bookTitle}*

#### 1. ✝ Tese Central & Perspectiva Cristocêntrica
Esta obra fundamenta-se na supremacia da revelação bíblica e na centralidade de Jesus Cristo como Redentor e Senhor. Toda a argumentação converge para a graça salvadora, a suficiência da cruz e a soberania divina operando na redenção humana.

#### 2. 🏛 Estrutura Teológica e Doutrinária
- **Fundamento Bíblico**: Base sólida nos textos canônicos do Antigo e Novo Testamento.
- **Ordem da Salvação (*Ordo Salutis*)**: Reconhecimento da incapacidade do homem em salvar-se a si mesmo e da graça preveniente que atrai o pecador.
- **Santificação & Vida no Espírito**: O chamado irrevogável a uma vida de integridade, oração constante e separação do mal.

#### 3. 🕊 Principais Lições Doutrinárias
- A autoridade suprema das Sagradas Escrituras como regra de fé e prática.
- O equilíbrio entre doutrina bíblica sadia e fervor espiritual no Espírito Santo.
- A responsabilidade missionária e o amor prático ao próximo.

#### 4. 🙏 Aplicação Pastoral e Prática
- **Para o Pregador e Líder**: Fornece ferramentas sólidas para o ensino bíblico expositivo e a defesa apologética da fé.
- **Para a Família Cristã**: Conduz o crente a um andar diário de devoção, oração e louvor a Deus.

> *"Para que em tudo Cristo tenha a primazia."* (Colossenses 1:18)`;
  }
};

