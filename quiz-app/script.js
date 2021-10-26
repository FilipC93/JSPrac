const quizData = [
    {
        question: 'How old is Filip?',
        a: '25',
        b: '26',
        c: '27',
        d: '28',
        correct: 'd'
    }, {
        question: 'What is the most used programming language?',
        a: 'Python',
        b: 'JavaScript',
        c: 'C++',
        d: 'PHP',
        correct: 'a'
    }, {
        question: 'What is Filips most played hero in DOTA 2?',
        a: 'Morphling',
        b: 'Phantom Lancer',
        c: 'Phantom Assassin',
        d: 'Slark',
        correct: 'b'
    }, {
        question: 'What is the most popular cryptocurrency to this date?',
        a: 'Ethereum',
        b: 'Cardano',
        c: 'Bitcoin',
        d: 'BNB',
        correct: 'c'
    }, {
        question: 'What is my favorite color?',
        a: 'black',
        b: 'blue',
        c: 'green',
        d: 'purple',
        correct: 'a'
    }
]
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;
loadQuiz();


function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Refresh</button>`;
        }
    }
});