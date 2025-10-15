// Dados dos pronomes
const pronounsData = {
  subject_pronouns: [
    { pronoun: "I", portuguese: "eu", example: "I love pizza", translation: "Eu amo pizza", character: "👦" },
    { pronoun: "You", portuguese: "você/vocês", example: "You are smart", translation: "Você é inteligente", character: "👤" },
    { pronoun: "He", portuguese: "ele", example: "He plays soccer", translation: "Ele joga futebol", character: "👨" },
    { pronoun: "She", portuguese: "ela", example: "She reads books", translation: "Ela lê livros", character: "👩" },
    { pronoun: "It", portuguese: "ele/ela (objetos)", example: "It is raining", translation: "Está chovendo", character: "🐕" },
    { pronoun: "We", portuguese: "nós", example: "We are friends", translation: "Nós somos amigos", character: "👫" },
    { pronoun: "They", portuguese: "eles/elas", example: "They study English", translation: "Eles estudam inglês", character: "👥" }
  ],
  object_pronouns: [
    { pronoun: "Me", portuguese: "me, mim", example: "Call me!", translation: "Me ligue!", character: "👦" },
    { pronoun: "You", portuguese: "te, você", example: "I see you", translation: "Eu vejo você", character: "👤" },
    { pronoun: "Him", portuguese: "ele, o", example: "I like him", translation: "Eu gosto dele", character: "👨" },
    { pronoun: "Her", portuguese: "ela, a", example: "Help her", translation: "Ajude ela", character: "👩" },
    { pronoun: "It", portuguese: "ele/ela/isso", example: "I want it", translation: "Eu quero isso", character: "🐕" },
    { pronoun: "Us", portuguese: "nós, nos", example: "Come with us", translation: "Venha conosco", character: "👫" },
    { pronoun: "Them", portuguese: "eles/elas, os/as", example: "I know them", translation: "Eu os conheço", character: "👥" }
  ]
};

// Dados do quiz
const quizQuestions = [
  { question: "Substitua: Maria plays piano", options: ["She plays piano", "Her plays piano", "She play piano"], correct: 0 },
  { question: "Substitua: I love my dog", options: ["I love him", "I love it", "I love he"], correct: 1 },
  { question: "Complete: ___ are students", options: ["They", "Them", "Their"], correct: 0 },
  { question: "Substitua: Call João!", options: ["Call he!", "Call him!", "Call his!"], correct: 1 },
  { question: "Complete: ___ study together", options: ["We", "Us", "Our"], correct: 0 },
  { question: "Substitua: Help Ana and Pedro", options: ["Help they", "Help them", "Help their"], correct: 1 }
];

// Dados do jogo de matching
const matchingPairs = [
  ["I", "Me"],
  ["He", "Him"],
  ["She", "Her"],
  ["We", "Us"],
  ["They", "Them"]
];

// Estado do aplicativo
let currentQuestionIndex = 0;
let quizScore = 0;
let gameScore = 0;
let selectedSubject = null;
let gameMatches = [];

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
  renderSubjectPronouns();
  renderObjectPronouns();
  renderExamples();
  initializeQuiz();
  initializeMatchingGame();
});

// Renderizar pronomes sujeito
function renderSubjectPronouns() {
  const container = document.getElementById('subjectPronouns');
  container.innerHTML = '';
  
  pronounsData.subject_pronouns.forEach(pronoun => {
    const card = createPronounCard(pronoun, 'subject');
    container.appendChild(card);
  });
}

// Renderizar pronomes objeto
function renderObjectPronouns() {
  const container = document.getElementById('objectPronouns');
  container.innerHTML = '';
  
  pronounsData.object_pronouns.forEach(pronoun => {
    const card = createPronounCard(pronoun, 'object');
    container.appendChild(card);
  });
}

// Criar card de pronome
function createPronounCard(pronoun, type) {
  const card = document.createElement('div');
  card.className = `pronoun-card ${type}-card`;
  card.innerHTML = `
    <div class="pronoun-character">${pronoun.character}</div>
    <div class="pronoun-en">${pronoun.pronoun}</div>
    <div class="pronoun-pt">${pronoun.portuguese}</div>
  `;
  
  card.addEventListener('click', () => playPronunciation(pronoun.pronoun));
  return card;
}

// Simular pronúncia
function playPronunciation(pronoun) {
  const modal = document.getElementById('soundModal');
  const soundText = document.getElementById('soundText');
  
  soundText.textContent = pronoun;
  modal.style.display = 'flex';
  
  // Fechar modal após 2 segundos
  setTimeout(() => {
    modal.style.display = 'none';
  }, 2000);
}

// Renderizar exemplos
function renderExamples() {
  const container = document.getElementById('examplesGrid');
  container.innerHTML = '';
  
  // Misturar exemplos de subject e object pronouns
  const allExamples = [...pronounsData.subject_pronouns, ...pronounsData.object_pronouns];
  const shuffled = shuffleArray(allExamples).slice(0, 6);
  
  shuffled.forEach(pronoun => {
    const card = document.createElement('div');
    card.className = 'example-card';
    card.innerHTML = `
      <div class="example-en">${pronoun.example}</div>
      <div class="example-pt">${pronoun.translation}</div>
    `;
    container.appendChild(card);
  });
}

// Inicializar quiz
function initializeQuiz() {
  currentQuestionIndex = 0;
  quizScore = 0;
  updateQuizScore();
  showQuestion();
}

// Mostrar pergunta do quiz
function showQuestion() {
  const questionContainer = document.getElementById('quizQuestion');
  const optionsContainer = document.getElementById('quizOptions');
  const feedbackContainer = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('nextQuestionBtn');
  const restartBtn = document.getElementById('restartQuizBtn');
  
  if (currentQuestionIndex < quizQuestions.length) {
    const question = quizQuestions[currentQuestionIndex];
    
    questionContainer.textContent = question.question;
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = '';
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.className = 'quiz-option';
      button.textContent = option;
      button.addEventListener('click', () => selectAnswer(index));
      optionsContainer.appendChild(button);
    });
  } else {
    // Quiz finalizado
    questionContainer.textContent = `Quiz finalizado! 🎉`;
    optionsContainer.innerHTML = '';
    feedbackContainer.innerHTML = `
      <div style="color: var(--color-kid-success); font-size: var(--font-size-2xl);">
        Sua pontuação final: ${quizScore}/${quizQuestions.length}
        <br>
        ${quizScore === quizQuestions.length ? 'Perfeito! Você é um expert! 🌟' : 
          quizScore >= quizQuestions.length * 0.7 ? 'Muito bem! Continue praticando! 👏' : 
          'Bom trabalho! Vamos praticar mais! 💪'}
      </div>
    `;
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-flex';
  }
}

// Selecionar resposta do quiz
function selectAnswer(selectedIndex) {
  const question = quizQuestions[currentQuestionIndex];
  const options = document.querySelectorAll('.quiz-option');
  const feedbackContainer = document.getElementById('quizFeedback');
  const nextBtn = document.getElementById('nextQuestionBtn');
  
  // Desabilitar todas as opções
  options.forEach(option => option.style.pointerEvents = 'none');
  
  // Marcar resposta correta e incorreta
  options[question.correct].classList.add('correct');
  if (selectedIndex !== question.correct) {
    options[selectedIndex].classList.add('incorrect');
  }
  
  // Mostrar feedback
  if (selectedIndex === question.correct) {
    quizScore++;
    feedbackContainer.innerHTML = '<span style="color: var(--color-kid-success);">🎉 Correto! Muito bem!</span>';
  } else {
    feedbackContainer.innerHTML = '<span style="color: var(--color-red-400);">❌ Ops! A resposta correta é destacada em verde.</span>';
  }
  
  updateQuizScore();
  nextBtn.style.display = 'inline-flex';
}

// Próxima pergunta
document.getElementById('nextQuestionBtn').addEventListener('click', () => {
  currentQuestionIndex++;
  showQuestion();
});

// Reiniciar quiz
document.getElementById('restartQuizBtn').addEventListener('click', () => {
  initializeQuiz();
});

// Atualizar pontuação do quiz
function updateQuizScore() {
  document.getElementById('quizScore').textContent = `Pontuação: ${quizScore}/${quizQuestions.length}`;
}

// Inicializar jogo de matching
function initializeMatchingGame() {
  gameScore = 0;
  gameMatches = [];
  selectedSubject = null;
  updateGameScore();
  renderGameItems();
}

// Renderizar itens do jogo
function renderGameItems() {
  const subjectContainer = document.getElementById('subjectItems');
  const objectContainer = document.getElementById('objectItems');
  
  subjectContainer.innerHTML = '';
  objectContainer.innerHTML = '';
  
  // Embaralhar os pares
  const shuffledSubjects = shuffleArray([...matchingPairs.map(pair => pair[0])]);
  const shuffledObjects = shuffleArray([...matchingPairs.map(pair => pair[1])]);
  
  // Criar items de subject
  shuffledSubjects.forEach(subject => {
    const item = document.createElement('div');
    item.className = 'game-item';
    item.textContent = subject;
    item.dataset.pronoun = subject;
    item.addEventListener('click', () => selectSubject(subject, item));
    subjectContainer.appendChild(item);
  });
  
  // Criar items de object
  shuffledObjects.forEach(object => {
    const item = document.createElement('div');
    item.className = 'game-item';
    item.textContent = object;
    item.dataset.pronoun = object;
    item.addEventListener('click', () => selectObject(object, item));
    objectContainer.appendChild(item);
  });
}

// Selecionar subject pronoun
function selectSubject(pronoun, element) {
  if (element.classList.contains('matched')) return;
  
  // Remover seleção anterior
  document.querySelectorAll('.subject-items .game-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  selectedSubject = pronoun;
  element.classList.add('selected');
}

// Selecionar object pronoun
function selectObject(pronoun, element) {
  if (element.classList.contains('matched') || !selectedSubject) return;
  
  // Verificar se é a combinação correta
  const isCorrectMatch = matchingPairs.some(pair => 
    pair[0] === selectedSubject && pair[1] === pronoun
  );
  
  if (isCorrectMatch) {
    // Marcar como combinado
    element.classList.add('matched');
    document.querySelector(`[data-pronoun="${selectedSubject}"]`).classList.add('matched');
    gameMatches.push([selectedSubject, pronoun]);
    gameScore += 10;
    updateGameScore();
    
    // Verificar se o jogo terminou
    if (gameMatches.length === matchingPairs.length) {
      setTimeout(() => {
        document.getElementById('gameFeedback').innerHTML = `
          <span style="color: var(--color-kid-success); font-size: var(--font-size-xl);">
            🎉 Parabéns! Você completou o jogo! 
            <br>Pontuação final: ${gameScore} pontos!
          </span>
        `;
      }, 500);
    }
  } else {
    // Feedback de erro
    document.getElementById('gameFeedback').innerHTML = `
      <span style="color: var(--color-red-400);">
        ❌ Ops! ${selectedSubject} não combina com ${pronoun}. Tente novamente!
      </span>
    `;
    setTimeout(() => {
      document.getElementById('gameFeedback').innerHTML = '';
    }, 2000);
  }
  
  // Limpar seleção
  selectedSubject = null;
  document.querySelectorAll('.subject-items .game-item').forEach(item => {
    item.classList.remove('selected');
  });
}

// Verificar respostas do jogo
document.getElementById('checkAnswersBtn').addEventListener('click', () => {
  const feedback = document.getElementById('gameFeedback');
  const correctMatches = gameMatches.length;
  const totalMatches = matchingPairs.length;
  
  feedback.innerHTML = `
    <div style="color: var(--color-kid-accent); font-size: var(--font-size-lg);">
      Você acertou ${correctMatches} de ${totalMatches} combinações! 
      ${correctMatches === totalMatches ? '🌟 Perfeito!' : '💪 Continue tentando!'}
    </div>
  `;
});

// Reiniciar jogo
document.getElementById('resetGameBtn').addEventListener('click', () => {
  initializeMatchingGame();
  document.getElementById('gameFeedback').innerHTML = '';
});

// Atualizar pontuação do jogo
function updateGameScore() {
  document.getElementById('gameScore').textContent = `Pontuação: ${gameScore}`;
}

// Função utilitária para embaralhar array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Fechar modal de som ao clicar fora
document.getElementById('soundModal').addEventListener('click', (e) => {
  if (e.target.id === 'soundModal') {
    e.target.style.display = 'none';
  }
});

// Adicionar animações de entrada
function animateOnScroll() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
}

// Inicializar animações quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Adicionar efeitos de confete para sucessos
function createConfetti() {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-10px';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    
    document.body.appendChild(confetti);
    
    // Animar confete
    confetti.animate([
      { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
      { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
      duration: Math.random() * 2000 + 1000,
      easing: 'ease-out'
    }).onfinish = () => {
      confetti.remove();
    };
  }
}