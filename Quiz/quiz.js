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
    'In 1936, Russia built a computer that runs on what?'
];

const answers = [
    {eachPage: ['Hyper Text Markup Language', 'How To Make Lumpia', 'Hyper Text Management Laguage', 'Hyper Things Managing Language', 'Hyper Things Making Lumpia']},
    {eachPage: ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard']},
    {eachPage: ['Internet Technology', 'Information Technology', 'Irritating Tuxedos', "Impossible Torpedo's", 'Ivanka Trump']},
    {eachPage: ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format']},
    {eachPage: ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes']},
    {eachPage: ['Vodka', 'Water', 'Jealousy', 'Communism', 'Nested Dolls']}
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
            return getAnswersSeperated(0);
        case 2:
            return getAnswersSeperated(1);
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

function getAnswersSeperated(index) {
    allAnswers.append(answerNumber, answerText);

    for ( let i = 1; i < 7; i++) {
        answerNumber.innerText = i;

        for( a = 0; a < answers[index].eachPage.length; a++) {
            answers[index].eachPage[a];

            // console.log(answers[index].eachPage[a]);
        }
        
    }
console.log(i) 
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
        this.allAnswers = document.createElement('div');
        this.answerBox = document.createElement('div');
        this.answerNumber = document.createElement('div');
        this.answerText = document.createElement('div');

        this.quizTitle.classList.add('quizTitle');
        this.pageNumber.classList.add('pageNumber');
        this.questionBox.classList.add('questionBox');
        this.allAnswers.classList.add('allAnswers');
        this.answerBox.classList.add('answerBox');
        this.answerNumber.classList.add('answerNumber');
        this.answerText.classList.add('answerText');

        this.quizTitle.innerText = "It's Quiz Time!";
        this.pageNumber.innerText = getPageNumber(page);
        this.questionBox.innerText = getQuestion(page);
        // this.answerText.innerText = getAnswers(page);

        quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.allAnswers);
        this.allAnswers.appendChild(this.answerBox);
        this.answerBox.append(this.answerNumber, this.answerText);
    }

}

new PageContent(1);

//FUNCTIONS
function startQuiz() {
    generalContainer.removeChild(startBtn);
    //next add the form page
}