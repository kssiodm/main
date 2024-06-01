const questions = [
    {
        question: "Qual é o resultado de 5 + 3?",
        answers: [
            { text: "8", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "6", correct: false }
        ],
        difficulty: "easy" // fácil: 1 ponto
    },
    {
        question: "Qual é o resultado de 10 - 6?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ],
        difficulty: "easy" // fácil: 1 ponto
    },
    {
        question: "Qual é o resultado de 7 x 2?",
        answers: [
            { text: "14", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false },
            { text: "15", correct: false }
        ],
        difficulty: "medium" // médio: 2 pontos
    },
    {
        question: "Qual é o resultado de 9 / 3?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ],
        difficulty: "medium" // médio: 2 pontos
    },
    {
        question: "Qual é a raiz quadrada de 144?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ],
        difficulty: "hard" // difícil: 3 pontos
    },
    {
        question: "Qual é o valor de pi (π) até duas casas decimais?",
        answers: [
            { text: "3.14", correct: true },
            { text: "3.15", correct: false },
            { text: "3.13", correct: false },
            { text: "3.16", correct: false }
        ],
        difficulty: "hard" // difícil: 3 pontos
    }
];

let currentQuestionIndex = 0;
let score = 0;

const points = {
    easy: 1,
    medium: 2,
    hard: 3
};

function showQuestion(question) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `
        <div class="mb-4">
            <h5>${question.question}</h5>
        </div>
        ${question.answers.map((answer, index) => `
            <div class="answer-block" onclick="selectAnswer(${index})">
                <input class="form-check-input" type="radio" name="answer" id="answer${index}" value="${answer.correct}" style="display: none;">
                <label class="form-check-label" for="answer${index}">
                    ${answer.text}
                </label>
            </div>
        `).join('')}
    `;
    document.getElementById('error-message').style.display = 'none';
}

function selectAnswer(index) {
    const selectedAnswer = document.getElementById(`answer${index}`);
    selectedAnswer.checked = true;
    document.querySelectorAll('.answer-block').forEach(block => block.classList.remove('selected'));
    selectedAnswer.closest('.answer-block').classList.add('selected');
    document.getElementById('error-message').style.display = 'none';
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const errorMessage = document.getElementById('error-message');
    if (selectedAnswer) {
        if (selectedAnswer.value === 'true') {
            score += points[questions[currentQuestionIndex].difficulty];
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
        }
    } else {
        errorMessage.textContent = 'Por favor, selecione uma resposta.';
        errorMessage.style.display = 'block';
    }
}

function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.style.display = 'block';
    const resultContent = document.getElementById('result');
    resultContent.innerHTML = `Você acertou ${score} pontos.<br>`;

    // Adicionar mensagem personalizada baseada na pontuação
    let message = '';
    let messageClass = '';
    const maxScore = questions.reduce((total, question) => total + points[question.difficulty], 0);
    const halfScore = maxScore / 2;

    if (score === 0) {
        message = 'Você errou todas as perguntas. Tente novamente!';
        messageClass = 'result-red';
    } else if (score < halfScore) {
        message = 'Você errou a maioria das perguntas. Continue praticando!';
        messageClass = 'result-orange';
    } else if (score === halfScore) {
        message = 'Você acertou metade das perguntas. Bom trabalho!';
        messageClass = 'result-yellow';
    } else if (score < maxScore) {
        message = 'Você acertou a maioria das perguntas. Muito bem!';
        messageClass = 'result-light-green';
    } else {
        message = 'Parabéns! Você acertou todas as perguntas!';
        messageClass = 'result-dark-green';
    }

    resultContent.innerHTML += `<span class="${messageClass}">${message}</span>`;

    const restartButton = document.createElement('button');
    restartButton.className = 'btn btn-secondary mt-3 restart-btn';
    restartButton.textContent = 'Recomeçar';
    restartButton.onclick = restartQuiz;
    resultContent.appendChild(restartButton);

    const menuButton = document.createElement('button');
    menuButton.className = 'btn btn-secondary mt-3 menu-btn';
    menuButton.textContent = 'Voltar ao Menu';
    menuButton.onclick = showMenu;
    resultContent.appendChild(menuButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('next-btn').style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
    document.getElementById('quiz-container').style.display = 'block';
}

function showMenu() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('menu-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
}

function startQuiz() {
    document.getElementById('menu-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

document.getElementById('start-btn').addEventListener('click', startQuiz);

document.addEventListener('DOMContentLoaded', () => {
    showMenu();
});
