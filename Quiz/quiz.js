//DEFINE VARIABLES
const generalContainer = document.querySelector('.generalContainer');
const startBtn = document.createElement('div');
const moveBtns = document.createElement('div');
const previousBtn = document.createElement('div');
const nextBtn = document.createElement('div');
const quizContainer = document.createElement('div');
const pageNumber = document.createElement('div');

//MAKE THE STARTBUTTON
startBtn.classList.add('startBtn');
generalContainer.appendChild(startBtn).innerText = 'Start!';
startBtn.onclick = startQuiz;

//MAKE THE PREVIOUS AND NEXT BUTTON
moveBtns.classList.add('moveBtns');
generalContainer.append(moveBtns);

previousBtn.classList.add('previousBtn');
moveBtns.appendChild(previousBtn).innerText = 'Previous';

nextBtn.classList.add('nextBtn');
moveBtns.appendChild(nextBtn).innerText = 'Next';

//BUILD THE QUIZ'S Q AND A
const question = [
    'What does HTML stand for?', "What is a computer's main circuit board called?",
    'What does I.T. stand for?', 'How do you pronounce PNG?', 'Firefox and Opera are types of what?',
    'In 1936, Russia built a computer that run on what?'
];

const answers = [
    ['Hyper Text Markup Language', 'How To Make Lumpia', 'Hyper Text Management Laguage', 'Hyper Things Managing Language', 'Hyper Things Making Lumpia'],
    ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard'],
    ['Internet Technology', 'Information Technology', 'Irritating Tuxedos', "Impossible Torpedo's", 'Ivanka Trump'],
    ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format'],
    ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes'],
    ['Vodka', 'Water', 'Jealousy', 'Communism', 'Nested Dolls']
];

//BUILD THE FORM
function getPageNumber(page) {
    switch (page) {
        case 1:
            return page + '/6';
        case 2:
            return page + '/6';
        case 3:
            return page + '/6';
        case 4:
            return page + '/6';
        case 5:
            return page + '/6';
        case 6:
            return page + '/6';
    }
}

function getQuestion(page) {
    switch (page) {
        case 1:
            return question[0];
        case 2:
            return question[1];
        case 3:
            return question[2];
        case 4:
            return question[3];
        case 5:
            return question[4];
        case 6:
            return question[5];
    }
}

function getAnswers(page) {
    switch(page) {
        case 1:
            return answers[0];
        case 2:
            return answers[1];
        case 3:
            return answers[2];
        case 4:
            return answers[3];
        case 5:
            return answers[4];
        case 6:
            return answers[5];
    }
}

// for (let a = 0; a < answers.length; a++) {
//     for (let b = 0; b < answers[a].length; b++) {
//         console.log(answers[b]);
//     }
// }



quizContainer.classList.add('quizContainer');
generalContainer.appendChild(quizContainer);
class PageContent {
    constructor(page) {
        this.quizTitle = document.createElement('div');
        this.pageNumber = document.createElement('div');
        this.questionBox = document.createElement('div');
        this.answersBox = document.createElement('div');
        this.eachAnswer = document.createElement('div');

        this.quizTitle.classList.add('quizTitle');
        this.pageNumber.classList.add('pageNumber');
        this.questionBox.classList.add('questionBox');
        this.answersBox.classList.add('answersBox');
        this.eachAnswer.classList.add('eachAnswer');

        this.quizTitle.innerText = "It's Quiz Time";
        this.pageNumber.innerText = getPageNumber(page);
        this.questionBox.innerText = getQuestion(page);
        this.eachAnswer.innerText = getAnswers(page);

        quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.answersBox);
        this.answersBox.appendChild(this.eachAnswer);
    }
}

new PageContent(6);



// function quizForm(data) {
//     const quizTitle = document.createElement('div');
//     quizTitle.classList.add('quizTitle');
//     quizContainer.appendChild(quizTitle).innerText = 'Quiz Time!';
// }

// for (i = 1; i < 7; i++) {
//     const pageNumber = document.createElement('div');
//     pageNumber.classList.add('pageNumber');
//     quizContainer.appendChild(pageNumber).innerText = i + '/6';
// }


// quizForm();



//FUNCTIONS
function startQuiz() {
    generalContainer.removeChild(startBtn);
    //next add the form page
}