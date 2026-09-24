export interface StrongEntry {
  number: string; // Ex: "H7225" ou "G3056"
  original: string; // Ex: רֵאשִׁית ou λόγος
  transliteration: string; // Ex: rê'shîyth ou lógos
  pronunciation: string; // Ex: ray-sheeth' ou log'-os
  partOfSpeech: string; // Ex: Substantivo feminino, Verbo, etc.
  language: 'Hebraico' | 'Aramaico' | 'Grego';
  shortDefinition: string;
  detailedDefinition: string;
  theologicalSignificance: string;
}

export const STRONG_DICTIONARY: Record<string, StrongEntry> = {
  // === HEBRAICO (ANTIGO TESTAMENTO) ===
  'H7225': {
    number: 'H7225',
    original: 'רֵאשִׁית',
    transliteration: "rê'shîyth",
    pronunciation: "ray-sheeth'",
    partOfSpeech: 'Substantivo feminino',
    language: 'Hebraico',
    shortDefinition: 'Princípio, primícias, começo, o primeiro em tempo ou posto.',
    detailedDefinition: 'Derivado de rosh (cabeça). Significa o primeiro momento cronológico, as primícias colhidas que pertencem a Deus, ou o posto principal supremo de liderança.',
    theologicalSignificance: 'Usado em Gênesis 1:1 ("Bereshit Bara Elohim"). Aponta para o plano inicial e soberano de Deus na criação e profeticamente para Cristo, as Primícias de toda a criação.'
  },
  'H430': {
    number: 'H430',
    original: 'אֱלֹהִים',
    transliteration: "'elôhîym",
    pronunciation: "el-o-heem'",
    partOfSpeech: 'Substantivo masculino plural',
    language: 'Hebraico',
    shortDefinition: 'Deus, Juiz supremo, divindade.',
    detailedDefinition: 'Plural de majestade e plenitude para El ou Eloah. Embora a terminação seja plural (-im), o verbo associado no texto bíblico está quase sempre no singular (ex: bara - criou).',
    theologicalSignificance: 'Revela o Deus Todo-Poderoso em Sua plenitude de poder, justiça e majestade, harmonizando-se perfeitamente com a revelação trinitária do Novo Testamento.'
  },
  'H1254': {
    number: 'H1254',
    original: 'בָּרָא',
    transliteration: 'bârâ’',
    pronunciation: 'baw-raw’',
    partOfSpeech: 'Verbo',
    language: 'Hebraico',
    shortDefinition: 'Criar do nada (ex nihilo), moldar divinamente.',
    detailedDefinition: 'Verbo cujo sujeito na Bíblia hebraica é exclusivamente Deus. Refere-se à atividade criadora soberana que traz à existência algo totalmente novo e perfeito.',
    theologicalSignificance: 'Sublinha que Deus não precisou de matéria preexistente para fundar o cosmos. A Sua mera palavra é criadora e ordenadora da realidade.'
  },
  'H3068': {
    number: 'H3068',
    original: 'יְהֹוָה',
    transliteration: 'YHVH / Yahweh',
    pronunciation: 'ye-ho-vaw’',
    partOfSpeech: 'Nome próprio divino',
    language: 'Hebraico',
    shortDefinition: 'O SENHOR, O Eterno, O Autoexistente.',
    detailedDefinition: 'O Tetragragrama sagrado (Y-H-V-H). Derivado do verbo "havah" (ser/existir). "Eu Sou o que Sou". É o nome pactual e pessoal de Deus com o Seu povo.',
    theologicalSignificance: 'Expressa a fidelidade incondicional da aliança, a autoexistência e a proximidade compassiva de Deus com Seus servos redimidos.'
  },
  'H7965': {
    number: 'H7965',
    original: 'שָׁלוֹם',
    transliteration: 'shâlôm',
    pronunciation: 'shaw-lome’',
    partOfSpeech: 'Substantivo masculino',
    language: 'Hebraico',
    shortDefinition: 'Paz, plenitude, integridade, bem-estar completo, prosperidade da alma.',
    detailedDefinition: 'Muito além da mera ausência de conflitos; significa reconciliação, cura, completude moral e harmonia santa com Deus, com o próximo e com a criação.',
    theologicalSignificance: 'Antecipa a paz messiânica consumada na cruz de Cristo, pela qual somos reconciliados com Deus e revestidos de consolo interior.'
  },
  'H2617': {
    number: 'H2617',
    original: 'חֶסֶד',
    transliteration: 'chesed',
    pronunciation: 'kheh’-sed',
    partOfSpeech: 'Substantivo masculino',
    language: 'Hebraico',
    shortDefinition: 'Misericórdia leal, graça pactual, amor fiel inabalável.',
    detailedDefinition: 'O compromisso de amor eterno que Deus mantém com Seu povo por livre graça, mesmo quando este falha.',
    theologicalSignificance: 'Um dos termos mais ricos do Antigo Testamento, traduzido no Novo Testamento grego por charis (graça) e agape (amor sacrificial).'
  },
  'H7307': {
    number: 'H7307',
    original: 'רוּחַ',
    transliteration: 'rûach',
    pronunciation: 'roo’-akh',
    partOfSpeech: 'Substantivo feminino/masculino',
    language: 'Hebraico',
    shortDefinition: 'Espírito, vento, sopro de vida.',
    detailedDefinition: 'O sopro de Deus que dá vida aos seres viventes e o Espírito divino que move sobre as águas e unge profetas, sacerdotes e reis.',
    theologicalSignificance: 'Revela a Terceira Pessoa da Trindade atuando na criação, regeneração e revestimento de santidade do povo de Deus.'
  },
  'H6918': {
    number: 'H6918',
    original: 'קָדוֹשׁ',
    transliteration: 'qâdôwsh',
    pronunciation: 'kaw-doshe’',
    partOfSpeech: 'Adjetivo',
    language: 'Hebraico',
    shortDefinition: 'Santo, consagrado, separado da impureza, transcendental.',
    detailedDefinition: 'Indica a pureza moral perfeita e a majestade divina insondável. O que é santo é reservado exclusivamente para o culto e honra do Criador.',
    theologicalSignificance: 'Base do mandamento: "Sede santos, porque Eu sou santo" (Levítico 11:44), que fundamenta o chamado wesleyano à santidade de coração.'
  },

  // === GREGO (NOVO TESTAMENTO) ===
  'G3056': {
    number: 'G3056',
    original: 'λόγος',
    transliteration: 'lógos',
    pronunciation: 'log’-os',
    partOfSpeech: 'Substantivo masculino',
    language: 'Grego',
    shortDefinition: 'Verbo, Palavra viva, Razão divina revelada, Expressão de Deus.',
    detailedDefinition: 'Derivado de lego (falar/declarar). Em João 1:1, denota a Segunda Pessoa da Santíssima Trindade, o Verbo Eterno que se fez carne.',
    theologicalSignificance: 'Jesus não apenas traz uma mensagem de Deus: Ele É a própria Palavra viva e definitiva de salvação e redenção da humanidade.'
  },
  'G2316': {
    number: 'G2316',
    original: 'θεός',
    transliteration: 'theós',
    pronunciation: 'theh’-os',
    partOfSpeech: 'Substantivo masculino',
    language: 'Grego',
    shortDefinition: 'Deus, a Divindade Suprema.',
    detailedDefinition: 'Usado para designar o Único Deus Verdadeiro, Criador e Sustentador de todas as coisas visíveis e invisíveis.',
    theologicalSignificance: 'No Novo Testamento, aplicado tanto ao Pai quanto ao Filho (João 1:1; 20:28; Tito 2:13) e ao Espírito Santo (Atos 5:3-4).'
  },
  'G26': {
    number: 'G26',
    original: 'ἀγάπη',
    transliteration: 'agápē',
    pronunciation: 'ag-ah’-pay',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Amor incondicional, amor sacrificial, benevolência pura.',
    detailedDefinition: 'O mais sublime amor: não é guiado pela emoção passageira ou mérito do objeto amado, mas pela determinação voluntária de doar-se pelo bem supremo do outro.',
    theologicalSignificance: 'A essência do caráter de Deus: "Deus é amor" (1 João 4:8). O padrão pelo qual os discípulos de Jesus são reconhecidos no mundo.'
  },
  'G5485': {
    number: 'G5485',
    original: 'χάρις',
    transliteration: 'cháris',
    pronunciation: 'khar’-ece',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Graça, favor imerecido, disposição benigna capacitadora.',
    detailedDefinition: 'A bondade e o poder salvador de Deus concedidos a pecadores indignos, perdoando-os e capacitando-os a viver em novidade de vida.',
    theologicalSignificance: 'Pilar central da teologia bíblica e wesleyana: a Graça Preveniente que nos atrai, a Justificadora que nos perdoa e a Santificadora que nos purifica.'
  },
  'G4151': {
    number: 'G4151',
    original: 'πνεῦμα',
    transliteration: 'pneûma',
    pronunciation: 'pnyoo’-mah',
    partOfSpeech: 'Substantivo neutro',
    language: 'Grego',
    shortDefinition: 'Espírito, fôlego de vida, o Espírito Santo.',
    detailedDefinition: 'Derivado de pneo (soprar). Refere-se à Terceira Pessoa da Trindade (Pneuma Hagion), ao espírito regenerado do crente ou ao sopro de revelação.',
    theologicalSignificance: 'O Consolador (Paráclito) prometido por Cristo, que habita nos crentes, convence o mundo do pecado e concede dons para o ministério da Igreja.'
  },
  'G4102': {
    number: 'G4102',
    original: 'πίστις',
    transliteration: 'pístis',
    pronunciation: 'pis’-tis',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Fé, confiança inabalável, fidelidade, convicção espiritual.',
    detailedDefinition: 'Não é um mero assentimento intelectual, mas a entrega do coração e dependência pessoal nos méritos e promessas de Jesus Cristo.',
    theologicalSignificance: 'O instrumento pelo qual nos apropriamos da justificação e da santificação concedidas pela graça de Deus (Efésios 2:8).'
  },
  'G4991': {
    number: 'G4991',
    original: 'σωτηρία',
    transliteration: 'sōtēría',
    pronunciation: 'so-tay-ree’-ah',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Salvação, libertação do perigo e do pecado, preservação da vida.',
    detailedDefinition: 'Livramento de toda opressão espiritual, perdão dos pecados, cura da alma e concessão da vida eterna em Cristo Jesus.',
    theologicalSignificance: 'A obra redentora consumada na cruz, que engloba passado (justificação), presente (santificação) e futuro (glorificação).'
  },
  'G2222': {
    number: 'G2222',
    original: 'ζωή',
    transliteration: 'zōē',
    pronunciation: 'dzo-ay’',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Vida divina, vida eterna, a plenitude da existência em Deus.',
    detailedDefinition: 'Diferente de bios (vida biológica física). Zoe é a vida inextinguível, abundante e santa que emana do próprio Deus.',
    theologicalSignificance: 'A promessa de Cristo em João 10:10: "Eu vim para que tenham vida, e a tenham com abundância".'
  },
  'G932': {
    number: 'G932',
    original: 'βασιλεία',
    transliteration: 'basileía',
    pronunciation: 'bas-il-i’-ah',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Reino, soberania régia, o governo soberano de Deus.',
    detailedDefinition: 'O domínio e reinado do Altíssimo no coração dos redimidos e na consumação da história quando todo joelho se dobrará diante de Cristo.',
    theologicalSignificance: 'Tema central das pregações de Jesus: "O Reino de Deus está próximo; arrependei-vos e crede no Evangelho" (Marcos 1:15).'
  },
  'G3341': {
    number: 'G3341',
    original: 'μετάνοια',
    transliteration: 'metánoia',
    pronunciation: 'met-an’-oy-ah',
    partOfSpeech: 'Substantivo feminino',
    language: 'Grego',
    shortDefinition: 'Arrependimento bíblico, mudança radical de mentalidade e rumo.',
    detailedDefinition: 'Composto de meta (além/depois) e nous (mente). Uma transformação interior de mente, vontade e afetos, voltando-se do pecado para a santidade de Deus.',
    theologicalSignificance: 'Condição indispensável para o ingresso na salvação, fruto do quebrantamento operado pelo Espírito Santo.'
  }
};

// Mapa de correspondência de termos em português para os números Strong
export const WORD_TO_STRONG_MAP: Record<string, string> = {
  // AT (Hebraico)
  'princípio': 'H7225',
  'começo': 'H7225',
  'deus': 'H430',
  'senhor': 'H3068',
  'criou': 'H1254',
  'criar': 'H1254',
  'paz': 'H7965',
  'misericórdia': 'H2617',
  'espírito': 'H7307',
  'santo': 'H6918',
  'santidade': 'H6918',

  // NT (Grego)
  'verbo': 'G3056',
  'palavra': 'G3056',
  'amor': 'G26',
  'amou': 'G26',
  'graça': 'G5485',
  'fé': 'G4102',
  'salvação': 'G4991',
  'salvo': 'G4991',
  'vida': 'G2222',
  'reino': 'G932',
  'arrependimento': 'G3341',
  'arrependei-vos': 'G3341'
};

export const getStrongEntry = (strongNumber: string): StrongEntry | undefined => {
  return STRONG_DICTIONARY[strongNumber];
};

export const findStrongNumberForWord = (word: string): string | undefined => {
  const clean = word.toLowerCase().replace(/[.,;:!?()""'']/g, '').trim();
  return WORD_TO_STRONG_MAP[clean];
};
