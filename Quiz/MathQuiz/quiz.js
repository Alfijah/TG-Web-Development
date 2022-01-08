const generalContainer = document.querySelector('.generalContainer');
let pageCounter = 1;
let allSelectedAnswers = [];
let correctSelectedAnswers = [];
let newPage1;
let newPage2;
let newPage3;
const question = [
    '70 - 14 equals?', '80 - 15 equals?', '59 - 80 equals?',
    '-32 + 15 equals?', '-17 - 29 equals?', '97 + -32 equals?'
];

const answers = [
    {
        eachPage: ['56', '66', '54', '57', '-56'],
        userAnswer: null,
        correctAnswer: '56',
    },
    {
        eachPage: ['95', '-65', '65', '55', '64'],
        userAnswer: null,
        correctAnswer: '65',
    },
    {
        eachPage: ['21', '139', '-21', '22', '-23'],
        userAnswer: null,
        correctAnswer: '-21',
    },
    {
        eachPage: ['47', '-47', '-17', '17', '7'],
        userAnswer: null,
        correctAnswer: '-17',
    },
    {
        eachPage: ['12', '22', '46', '-46', '-12'],
        userAnswer: null,
        correctAnswer: '-46',
    },
    {
        eachPage: ['-129', '129', '65', '-65', '55'],
        userAnswer: null,
        correctAnswer: '65',
    },
];

class Page {
    constructor(page) {
        this.quizContainer = document.createElement('div');
        this.quizTitle = document.createElement('div');
        this.pageNumber = document.createElement('div');
        this.questionBox = document.createElement('div');
        this.answerBox = document.createElement('div');

        this.quizContainer.classList.add('quizContainer');
        this.quizTitle.classList.add('quizTitle');
        this.pageNumber.classList.add('pageNumber');
        this.questionBox.classList.add('questionBox');
        this.answerBox.classList.add('answerBox');

        this.quizTitle.innerText = "It's Quiz Time!";
        this.pageNumber.innerText = page + '/' + question.length;
        this.questionBox.innerText = question[page - 1];

        generalContainer.appendChild(this.quizContainer);
        this.quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.answerBox);

        for (let i = 1; i < question.length; i++) {
            this.eachAnswer = document.createElement('div');
            this.answerNumber = document.createElement('div');
            this.answerText = document.createElement('div');

            this.eachAnswer.classList.add('eachAnswer');
            this.answerNumber.classList.add('answerNumber');
            this.answerText.classList.add('answerText');

            this.answerNumber.innerText = i;
            this.answerText.innerText = answers[page - 1].eachPage[i - 1];

            this.answerBox.appendChild(this.eachAnswer);
            this.eachAnswer.append(this.answerNumber, this.answerText);
        }
        clickAnyAnswer();
    }
}

class ResultPage {
    constructor() {
        const result = document.createElement('div');
        const restartBtn = document.createElement('div');

        result.classList.add('result');
        restartBtn.classList.add('restartBtn', 'button');

        generalContainer.appendChild(result).innerText = `Your score is: ${correctSelectedAnswers.length} out of ${question.length}!`;
        generalContainer.appendChild(restartBtn).innerText = 'Restart';

        restartBtn.onclick = getRestarted;
    }
}

//CREATE THE STARTBUTTON
const startBtn = document.createElement('div');
startBtn.classList.add('startBtn', 'button');
generalContainer.appendChild(startBtn).innerText = 'Start!';
startBtn.onclick = startQuiz;

function startQuiz() {
    generalContainer.removeChild(startBtn);
    newPage1 = new Page(pageCounter);
    createNavButtons();
}

function createNavButtons() {
    const navButtons = document.createElement('div');
    const previousBtn = document.createElement('div');
    const nextBtn = document.createElement('div');

    navButtons.classList.add('navButtons');
    previousBtn.classList.add('previousBtn', 'button');
    nextBtn.classList.add('nextBtn', 'button');

    generalContainer.append(navButtons);
    navButtons.appendChild(previousBtn).innerText = 'Previous';
    navButtons.appendChild(nextBtn).innerText = 'Next';

    previousBtn.onclick = goToPreviousPage;
    nextBtn.onclick = goToNextPage;
}

function goToPreviousPage() {
    if (pageCounter === 1) return;
    pageCounter--;
    generalContainer.innerHTML = "";
    newPage2 = new Page(pageCounter);
    createNavButtons();
    checkIfUserHasAnswered();
}

function goToNextPage() {
    if (pageCounter === question.length && allSelectedAnswers.length < question.length) return;
    generalContainer.innerHTML = "";
    pageCounter++;
    if (pageCounter === question.length + 1) {
        new ResultPage();
        return;
    }
    newPage3 = new Page(pageCounter);
    createNavButtons();
    checkIfUserHasAnswered();
}

function clickAnyAnswer() {
    const allAnswers = document.querySelectorAll('.eachAnswer');

    allAnswers.forEach((answer) => {
        const answerOnClick = answer.childNodes[1].textContent;

        answer.onclick = function checkIfAnswerCorrect(event) {
            const userClick = event.target.textContent;
            answers[pageCounter - 1].userAnswer = userClick;

            if (answers[pageCounter - 1].correctAnswer === answerOnClick) {
                correctSelectedAnswers.push(answerOnClick.value);
                allSelectedAnswers.push(answerOnClick.value);
                showCorrectAnswer();
                disableClickOnAnswer();

            } else {
                allSelectedAnswers.push(answerOnClick.value);
                showCorrectAnswer();
                showWrongClickedAnswer();
                disableClickOnAnswer();
            }
        }
    });
}

function showCorrectAnswer() {
    const correctAnswer = answers[pageCounter - 1].correctAnswer;
    const allAnswers = document.querySelectorAll('.eachAnswer');

    allAnswers.forEach((answer) => {
        if (answer.childNodes[1].textContent === correctAnswer) {
            answer.childNodes[0].style.backgroundColor = '#34BE82';
            answer.childNodes[1].style.backgroundColor = '#34BE82';
            answer.childNodes[0].style.borderColor = '#34BE82';
            answer.childNodes[1].style.borderColor = '#34BE82';
        }
    })
}

function showWrongClickedAnswer() {
    const currentUserAnswer = answers[pageCounter - 1].userAnswer;
    const allAnswers = document.querySelectorAll('.eachAnswer');

    allAnswers.forEach((answer) => {
        if (answer.childNodes[1].textContent === currentUserAnswer) {
            answer.childNodes[0].style.backgroundColor = '#D0312D';
            answer.childNodes[1].style.backgroundColor = '#D0312D';
            answer.childNodes[0].style.borderColor = '#D0312D';
            answer.childNodes[1].style.borderColor = '#D0312D';
        }
    })
}

function disableClickOnAnswer() {
    const allAnswers = document.querySelectorAll('.eachAnswer');
    allAnswers.forEach((answer) => {
        answer.onclick = null;
    })
}

function checkIfUserHasAnswered() {
    const currentUserAnswer = answers[pageCounter - 1].userAnswer;
    const correctAnswer = answers[pageCounter - 1].correctAnswer;

    if (currentUserAnswer !== null) {
        showCorrectAnswer();
        disableClickOnAnswer();
    }

    if (currentUserAnswer !== null && currentUserAnswer !== correctAnswer) {
        showWrongClickedAnswer();
        disableClickOnAnswer();
    }
}

function resetUserAnswer() {
    console.log("RESET")

    const currentUserAnswer = answers[pageCounter - 1].userAnswer;
    if (currentUserAnswer !== null && pageCounter === question.length + 1) {
        const allAnswers = document.querySelectorAll('.eachAnswer');
        allAnswers.forEach((answer) => {
            currentUserAnswer = null;
        })
    }
}

function getRestarted() {
    generalContainer.innerHTML = "";
    startBtn.classList.add('startBtn', 'button');
    generalContainer.appendChild(startBtn).innerText = 'Start!';
    pageCounter = 1;
    allSelectedAnswers = [];
    correctSelectedAnswers = [];
    resetUserAnswer();
}