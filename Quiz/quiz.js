const generalContainer = document.querySelector('.generalContainer');
let pageCounter = 1;
let allSelectedAnswers = [];
let correctSelectedAnswers = [];

//CREATE THE QUIZ BLUEPRINT
const question = [
    'What does HTML stand for?', "What is a computer's main circuit board called?",
    'What does I.T. stand for?', 'How do you pronounce PNG?', 'Firefox and Opera are types of what?',
    'In 1936, Russia built a computer that runs on what?'
];

const answers = [
    { eachPage: ['Hyper Text Markup Language', 'How To Make Lumpia', 'Hyper Text Management Laguage', 'Hyper Things Managing Language', 'Hyper Things Making Lumpia'] },
    { eachPage: ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard'] },
    { eachPage: ['Internet Technology', 'Information Technology', 'Irritating Tuxedos', "Impossible Torpedoes", 'Ivanka Trump'] },
    { eachPage: ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format'] },
    { eachPage: ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes'] },
    { eachPage: ['Vodka', 'Water', 'Jealousy', 'Communism', 'Nested Dolls'] }
];

const correctAnswer = [
    'Hyper Text Markup Language', 'Motherboard', 'Information Technology', 'Pea-en-gee', 'Browser', 'Water'
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

        for (let i = 1; i < 6; i++) {
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

class LastPage {
    constructor() {
        const result = document.createElement('div');
        const restartBtn = document.createElement('div');

        result.classList.add('result');
        restartBtn.classList.add('restartBtn', 'button');

        generalContainer.appendChild(result).innerText = `Your score is: ${correctSelectedAnswers.length} out of 6!`;
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
    new Page(pageCounter);
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
    if (pageCounter == 1) return;
    pageCounter--;
    generalContainer.innerHTML = "";
    new Page(pageCounter);
    createNavButtons();
}

function goToNextPage() {
    if (pageCounter == 6 && allSelectedAnswers.length < 6) return;
    generalContainer.innerHTML = "";
    pageCounter++;
    if (pageCounter == 7) {
        new LastPage();
        return;
    }
    new Page(pageCounter);
    createNavButtons();
}

function clickAnyAnswer() {
    const answerBox = document.querySelector('.answerBox');
    answerBox.childNodes.forEach((node) => {
        const answerOnClick = node.childNodes[1].textContent;
        const correctAnswerNode = correctAnswer.find((answer) => {
            if (answer === answerOnClick) {
                return true;
            }
        })

        node.onclick = function checkIfAnswerCorrect() {
            if (correctAnswerNode === answerOnClick) {
                node.childNodes[0].style.backgroundColor = '#34BE82';
                node.childNodes[1].style.backgroundColor = '#34BE82';
                correctSelectedAnswers.push(answerOnClick);
                allSelectedAnswers.push(answerOnClick);
                disableClickOnAnswer();
            } else {
                node.childNodes[0].style.backgroundColor = '#950101';
                node.childNodes[1].style.backgroundColor = '#950101';
                allSelectedAnswers.push(answerOnClick);
                disableClickOnAnswer();
                showCorrectAnswer();
            }
        }

        function showCorrectAnswer() {
            console.log('show')
            const answerNumber = document.querySelectorAll('.answerNumber')
            const answerText = document.querySelectorAll('.answerText');
            answerText.forEach((answer) => {
                console.log(answerText);
                // console.log(correctAnswerNode);
                if (answer == correctAnswerNode) {
                    console.log('next')

                    answerNumber.classList.add('correct');
                    answerText.classList.add('correct');
                }
            })
        }
    });
}

function disableClickOnAnswer() {
    const answerBox = document.querySelector('.answerBox');
    answerBox.childNodes.forEach((node) => {
        node.onclick = null;
    });

}

function getRestarted() {
    generalContainer.innerHTML = "";
    startBtn.classList.add('startBtn', 'button');
    generalContainer.appendChild(startBtn).innerText = 'Start!';
    pageCounter = 1;
    correctSelectedAnswers = [];
}