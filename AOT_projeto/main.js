const questions = [
    {
        question: "Qual é o resultado de 5 + 3?",
        answers: [
            { text: "8", correct: true },
            { text: "7", correct: false },
            { text: "9", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 10 - 6?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 7 x 2?",
        answers: [
            { text: "14", correct: true },
            { text: "12", correct: false },
            { text: "13", correct: false },
            { text: "15", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 9 / 3?",
        answers: [
            { text: "3", correct: true },
            { text: "2", correct: false },
            { text: "4", correct: false },
            { text: "1", correct: false }
        ]
    },
    {
        question: "Qual é o resultado de 5 x 5?",
        answers: [
            { text: "25", correct: true },
            { text: "20", correct: false },
            { text: "30", correct: false },
            { text: "15", correct: false }
        ]
    }
    
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion(question) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
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
    // Ocultar a mensagem de erro ao exibir uma nova pergunta
    document.getElementById('error-message').style.display = 'none';
}

function selectAnswer(index) {
    const selectedAnswer = document.getElementById(`answer${index}`);
    selectedAnswer.checked = true;
    document.querySelectorAll('.answer-block').forEach(block => block.classList.remove('selected'));
    selectedAnswer.closest('.answer-block').classList.add('selected');
    // Ocultar a mensagem de erro ao selecionar uma resposta
    document.getElementById('error-message').style.display = 'none';
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const errorMessage = document.getElementById('error-message');
    if (selectedAnswer) {
        if (selectedAnswer.value === 'true') {
            score++;
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
    quizContainer.innerHTML = '';
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Você acertou ${score} de ${questions.length} perguntas.`;
    document.getElementById('next-btn').style.display = 'none';

    const restartButton = document.createElement('button');
    restartButton.className = 'btn btn-secondary mt-3 restart-btn';
    restartButton.textContent = 'Recomeçar';
    restartButton.onclick = restartQuiz;
    resultContainer.appendChild(restartButton);
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('result').innerHTML = '';
    document.getElementById('next-btn').style.display = 'block';
    showQuestion(questions[currentQuestionIndex]);
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion(questions[currentQuestionIndex]);
});
