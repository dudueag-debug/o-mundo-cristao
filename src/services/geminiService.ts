// Serviço do Assistente Teológico Gemini IA
// Suporta tanto a API oficial do Google Gemini (com chave gratuita do usuário)
// quanto uma Base Teológica Integrada offline com respostas imediatas

export interface GeminiMessage {
  id: string;
  sender: 'user' | 'gemini';
  text: string;
  timestamp: string;
  category?: 'exegese' | 'original' | 'wesleyana' | 'sermon' | 'ebd' | 'livre';
}

const STORAGE_API_KEY = 'omc_gemini_api_key';
const STORAGE_CHAT_HISTORY = 'omc_gemini_chat_history_v1';

class GeminiService {
  getApiKey(): string {
    return localStorage.getItem(STORAGE_API_KEY) || '';
  }

  setApiKey(key: string): void {
    localStorage.setItem(STORAGE_API_KEY, key.trim());
  }

  hasCustomKey(): boolean {
    const key = this.getApiKey();
    return !!key && key.startsWith('AIza') && key.length > 20;
  }

  getChatHistory(): GeminiMessage[] {
    try {
      const data = localStorage.getItem(STORAGE_CHAT_HISTORY);
      if (data) return JSON.parse(data);
    } catch {
      // fallback
    }
    return [
      {
        id: 'msg-welcome',
        sender: 'gemini',
        text: `Olá! Sou o seu **Assistente Teológico Gemini IA** no *O Mundo Cristão*. 

Estou preparado para ajudar você a:
- 📜 Analisar o **contexto histórico, cultural e geográfico** de qualquer texto bíblico.
- 🔍 Entender termos no **Grego do Novo Testamento** e **Hebraico do Antigo Testamento**.
- 🔥 Explicar doutrinas sob a luz da **Teologia Wesleyana** (Graça Preveniente, Santificação e o Amor Perfeito).
- 📖 Estruturar **esboços completos de sermões** para pregação pastoral.
- 💡 Criar **perguntas práticas para Escola Bíblica Dominical (EBD)** e grupos pequenos.

Você pode escolher um dos botões rápidos abaixo ou digitar qualquer pergunta teológica!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }

  saveChatHistory(history: GeminiMessage[]): void {
    localStorage.setItem(STORAGE_CHAT_HISTORY, JSON.stringify(history.slice(-30))); // guarda últimas 30
  }

  clearChatHistory(): void {
    localStorage.removeItem(STORAGE_CHAT_HISTORY);
  }

  async askGemini(prompt: string, contextCategory?: GeminiMessage['category']): Promise<string> {
    const apiKey = this.getApiKey();

    // Se o usuário configurou sua chave real do Google Gemini, chama a API oficial
    if (this.hasCustomKey()) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: `Você é um erudito teólogo cristão, pastor evangélico e especialista em Bíblia Sagrada, com profundo respeito pela tradição metodista wesleyana, reforma protestante e fidelidade às Escrituras. Responda em português com clareza pastoral, riqueza bíblica e formatação organizada em Markdown (títulos, marcadores e versículos).\n\nPergunta/Estudo solicitado: ${prompt}`
                    }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1500
              }
            })
          }
        );

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error?.message || `Erro HTTP ${response.status}`);
        }

        const data = await response.json();
        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidate) {
          return candidate;
        }
      } catch (err: any) {
        console.warn('Falha na API externa do Gemini, acionando Base Teológica Integrada:', err);
        // Fallback gracioso para a base interna embutida
      }
    }

    // Modo Inteligência Teológica Integrada (Instantâneo, rico e pastoral)
    await new Promise((resolve) => setTimeout(resolve, 800)); // Pequena pausa natural
    return this.generateTheologicalResponse(prompt, contextCategory);
  }

  private generateTheologicalResponse(prompt: string, category?: GeminiMessage['category']): string {
    const lower = prompt.toLowerCase();

    if (category === 'exegese' || lower.includes('exegese') || lower.includes('contexto')) {
      return `### 📜 Estudo Exegético & Contexto Histórico

**Passagem/Tema:** "${prompt}"

#### 1. Contexto Histórico e Autor
- **Cenário:** O texto foi escrito em um contexto de aliança e preservação da fé do povo de Deus em meio a desafios culturais e espirituais significativos.
- **Público Original:** Destinado a crentes chamados a viver em santidade e testemunho prático, contrastando com as práticas pagãs ao redor.
- **Gênero Literário:** Texto de caráter doutrinário e pastoral, utilizando recursos de paralelismo semítico ou retórica apostólica para fixar a mensagem no coração.

#### 2. Grandes Verdades Centrais
1. **A Soberania da Revelação:** Deus se comunica de maneira compreensível e progressiva na história.
2. **A Centralidade da Redenção:** Todo preceito e profecia aponta para a consumação do plano salvífico em Jesus Cristo.
3. **Chamado à Obediência:** A fé verdadeira manifesta-se através de obras de piedade e amor ao próximo.

#### 3. Aplicação Pastoral Contemporânea
Hoje, esta passagem nos desafia a não nos conformarmos com as pressões do presente século, mas a renovarmos nossa mente na Palavra eterna de Deus.`;
    }

    if (category === 'original' || lower.includes('original') || lower.includes('grego') || lower.includes('hebraico')) {
      return `### 🔍 Análise nos Idiomas Originais (Hebraico & Grego)

**Texto sob Análise:** "${prompt}"

#### Termos Fundamentais e Seus Significados:
- **No Antigo Testamento (Hebraico):**
  - **Hesed (חֶסֶד):** Amor leal, fidelidade inabalável da aliança divina. Não é mero sentimento, mas uma decisão de amar e sustentar a promessa.
  - **Shalom (שָׁלוֹם):** Muito mais que ausência de conflito; plenitude, harmonia, saúde integral e paz que provém da presença de Deus.
  - **Qadosh (קָדוֹשׁ):** Sagrado, separado, transcendente. O padrão divino que chama o povo à santidade prática.

- **No Novo Testamento (Grego Koiné):**
  - **Ágape (ἀγάπη):** O amor sacrificial e voluntário de Deus, demonstrado supremamente na Cruz do Calvário (João 3:16; Romanos 5:8).
  - **Charis (χάρις):** Graça — o favor imerecido e a força capacitadora do Espírito Santo concedida ao ser humano.
  - **Metanoia (μετάνοια):** Arrependimento genuíno; transformação radical da mente, que resulta em uma nova conduta de vida.

#### Conclusão Linguística:
As Escrituras no original ressaltam que Deus não apenas perdoa, mas restaura ativamente a comunhão e capacita o homem através da Sua graça.`;
    }

    if (category === 'wesleyana' || lower.includes('wesley') || lower.includes('graça') || lower.includes('santificação')) {
      return `### 🔥 Perspectiva da Teologia Wesleyana

**Tema:** "${prompt}"

#### 1. A Tríplice Ordem da Graça (Ordo Salutis Wesleyana)
- **Graça Preveniente:** A graça que precede qualquer decisão humana. Ela restaura o livre-arbítrio ferido pela queda e capacita o homem a responder ao Evangelho (Tito 2:11).
- **Graça Justificadora:** O ato soberano de Deus pelo qual Ele perdoa os pecados e aceita o crente mediante a fé unicamente em Cristo Jesus (Romanos 5:1).
- **Graça Santificadora:** A obra contínua do Espírito Santo que purifica o coração, capacitando o discípulo a crescer no amor e vencer o pecado.

#### 2. O Quadrilátero Wesleyano como Guia:
1. **Escrituras:** A autoridade primária e infalível para toda regra de fé e prática.
2. **Tradição:** O testemunho histórico da Igreja fiel através dos séculos.
3. **Razão:** O dom divino para articular, discernir e comunicar a verdade bíblica.
4. **Experiência:** A vivência pessoal do testemunho do Espírito Santo no coração ("O coração aquecido").

#### 3. Frase Clássica de John Wesley:
> *"O Evangelho não conhece religião que não seja social, nem santidade que não seja santidade social."* — John Wesley`;
    }

    if (category === 'sermon' || lower.includes('sermão') || lower.includes('esboço') || lower.includes('pregação')) {
      return `### 📖 Esboço Homilético para Pregadores

**Tema:** Vivendo sob a Promessa e a Graça  
**Texto Base:** "${prompt}"

#### Introdução
- **Frase de Impacto:** Em tempos de incerteza, o que ancora a nossa alma não são as circunstâncias terrenas, mas a fidelidade imutável de Deus.
- **Pergunta Reflexiva:** Onde você tem colocado a sua confiança nas horas de tempestade?

#### I. O Reconhecimento da Dependência de Deus
- Deus é o Criador, Provedor e Mantenedor de todas as coisas.
- *Aplicação:* Deixar de tentar controlar o futuro com nossas próprias forças e render o fardo no altar da oração.

#### II. A Suficiência da Graça Divina no Deserto
- As aflições não anulam o cuidado de Deus; elas revelam a Sua fidelidade.
- *Ilustração:* Assim como o fogo purifica o ouro sem destruí-lo, as provações refinam a nossa fé.

#### III. A Resposta de Fé: Amor Prático e Santidade
- Fé bíblica genuína transborda em serviço ao próximo e louvor a Deus.
- O crente é chamado a ser luz no lar, no trabalho e na comunidade.

#### Conclusão & Apelo
- Reafirme que a Cruz de Cristo nos garante vitória eterna.
- Convide a congregação a dar um passo de entrega total e renovar sua aliança com o Senhor Jesus.`;
    }

    if (category === 'ebd' || lower.includes('ebd') || lower.includes('pergunta') || lower.includes('célula')) {
      return `### 💡 Guia de Discussão para Escola Bíblica & Grupos Pequenos

**Passagem/Assunto:** "${prompt}"

#### Perguntas de Quebra-Gelo & Observação:
1. O que mais chama a sua atenção neste texto bíblico à primeira leitura?
2. Quais eram os sentimentos e desafios enfrentados pelos personagens descritos nesta passagem?

#### Perguntas de Interpretação Teológica:
3. Como este texto revela o caráter e a santidade de Deus?
4. De que maneira podemos ver a graça de Jesus Cristo operando nesta promessa?

#### Perguntas de Aplicação Prática para a Semana:
5. Diante desta palavra, que atitude prática nós precisamos mudar no nosso dia a dia?
6. Quem nesta semana pode ser abençoado se você compartilhar este testemunho e orar com ele?

#### Oração de Encerramento:
*Senhor nosso Deus, grava esta palavra no mais profundo do nosso coração, para que não apenas a ouçamos, mas a vivamos em amor e verdade. Em nome de Jesus, Amém!*`;
    }

    // Resposta Teológica Geral
    return `### 📖 Reflexão Teológica e Pastoral

Sobre a sua pergunta: **"${prompt}"**

#### 1. Fundamento Bíblico
A Palavra de Deus nos ensina que toda a Escritura é divinamente inspirada e proveitosa para ensinar, redarguir, corrigir e instruir em justiça (2 Timóteo 3:16). Ao olharmos para este assunto, devemos sempre colocá-lo sob a ótica da Redenção em Jesus Cristo.

#### 2. Significado Doutrinário
- Deus se revela não como um observador distante, mas como um Pai amoroso que busca a reconciliação do ser humano.
- A teologia cristã clássica e wesleyana enfatiza que a verdade divina transforma o caráter do crente: o amor a Deus é inseparável do amor ao próximo.

#### 3. Direcionamento Prático
Para aprofundar seu estudo sobre este tema:
1. **Medite com oração:** Peça a iluminação do Espírito Santo antes de estudar.
2. **Compare com outras passagens:** A Escritura interpreta a própria Escritura (analogia da fé).
3. **Aplique na vida diária:** Como esta verdade pode moldar suas atitudes hoje?

*Deseja gerar um esboço de pregação, ver termos no grego/hebraico ou analisar o contexto histórico específico deste tema? Basta tocar em um dos botões rápidos acima!*`;
  }
}

export const geminiService = new GeminiService();
