document.getElementById('info-btn').addEventListener('click', function() {
    $('#sobreModal').modal('show');
});

const questions = [
    // 5 perguntas fáceis
    {
        question: "Qual é o resultado de 57 + 15?",
        answers: [
            { text: "72", correct: true },
            { text: "77", correct: false },
            { text: "68", correct: false },
            { text: "71", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "Qual é o resultado de 10 - 6?",
        answers: [
            { text: "6", correct: false },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "4", correct: true }
        ],
        difficulty: "easy"
    },
    {
        question: "Qual é o resultado de 21 + 37?",
        answers: [
            { text: "41", correct: false },
            { text: "44", correct: false },
            { text: "58", correct: true },
            { text: "56", correct: false }
        ],
        difficulty: "easy"
    },
    {
        question: "Qual é o resultado de 90 - 40?",
        answers: [
            { text: "30", correct: false },
            { text: "40", correct: false },
            { text: "60", correct: false },
            { text: "50", correct: true }
        ],
        difficulty: "easy"
    },
    {
        question: "Qual é o resultado de 6 + 16?",
        answers: [
            { text: "22", correct: true },
            { text: "26", correct: false },
            { text: "20", correct: false },
            { text: "23", correct: false }
        ],
        difficulty: "easy"
    },
    // 5 perguntas médias
    {
        question: "Qual é o resultado de 70 x 2?",
        answers: [
            { text: "140", correct: true },
            { text: "120", correct: false },
            { text: "130", correct: false },
            { text: "150", correct: false }
        ],
        difficulty: "medium"
    },
    {
        question: "Qual é o resultado de 93 / 3?",
        answers: [
            { text: "30", correct: false },
            { text: "31", correct: true },
            { text: "40", correct: false },
            { text: "29", correct: false }
        ],
        difficulty: "medium"
    },
    {
        question: "Qual é o resultado de 8 x 8?",
        answers: [
            { text: "56", correct: false },
            { text: "72", correct: false },
            { text: "64", correct: true },
            { text: "80", correct: false }
        ],
        difficulty: "medium"
    },
    {
        question: "Qual é o resultado de 42 / 3?",
        answers: [
            { text: "12", correct:  false },
            { text: "13", correct: false },
            { text: "15", correct: false },
            { text: "14", correct:  true }
        ],
        difficulty: "medium"
    },
    {
        question: "Qual é o resultado de 6 x 4?",
        answers: [
            { text: "22", correct: false },
            { text: "24", correct: true },
            { text: "20", correct: false },
            { text: "26", correct: false }
        ],
        difficulty: "medium"
    },
    // 6 perguntas difíceis
    {
        question: "Qual é a raiz quadrada de 144?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "16", correct: false }
        ],
        difficulty: "hard"
    },
    {
        question: "Qual é o valor de pi (π) até duas casas decimais?",
        answers: [
            { text: "3.15", correct: false },
            { text: "3.13", correct: false },
            { text: "3.14", correct: true },
            { text: "3.16", correct: false }
        ],
        difficulty: "hard"
    },
    {
        question: "Qual é o valor de 2^10?",
        answers: [
            { text: "1020", correct: false },
            { text: "1000", correct: false },
            { text: "1048", correct: false },
            { text: "1024", correct: true }
        ],
        difficulty: "hard"
    },
    {
        question: "Qual é o logaritmo natural de e?",
        answers: [
            { text: "0", correct: false },
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "e", correct: false }
        ],
        difficulty: "hard"
    },
    {
        question: "Qual é o valor da soma dos ângulos internos de um triângulo?",
        answers: [
            { text: "360", correct: false },
            { text: "180", correct: true },
            { text: "90", correct: false },
            { text: "270", correct: false }
        ],
        difficulty: "hard"
    },
    {
        question: "Qual é o resultado de 2^5?",
        answers: [
            { text: "32", correct: true },
            { text: "25", correct: false },
            { text: "30", correct: false },
            { text: "35", correct: false }
        ],
        difficulty: "hard"
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
    resultContent.innerHTML = `<div class="result-info">Você fez ${score} pontos.</div>`;

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
    restartButton.className = 'btn btn-secondary mt-3 restart-btn ';
    restartButton.innerHTML = '<i class="bi bi-arrow-counterclockwise"></i> Recomeçar';
    restartButton.onclick = restartQuiz;
    resultContent.appendChild(restartButton);

    const menuButton = document.createElement('button');
    menuButton.className = 'btn btn-secondary mt-3 menu-btn';
    menuButton.innerHTML = '<i class="bi bi-house"></i> Menu';
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
