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
previousBtn.classList.add('previousBtn');
nextBtn.classList.add('nextBtn');

generalContainer.append(moveBtns, quizContainer);
moveBtns.appendChild(previousBtn).innerText = 'Previous';
moveBtns.appendChild(nextBtn).innerText = 'Next';

//BUILD THE QUIZ'S Q AND A
const question = [
    'What does HTML stand for?', "What is a computer's main circuit board called?",
    'What does I.T. stand for?', 'How do you pronounce PNG?', 'Firefox and Opera are types of what?'
];

const answers = [
    ['Hyper Text Markup Language', 'How To Make Lumpia', 'Hyper Text Management Laguage', 'Hyper Things Managing Language', 'Hyper Things Making Lumpia'],
    ['Surfboard', 'Ironing Board', 'Motherboard', 'Fatherboard', 'Blackboard'],
    ['Internet Technology', 'Information Technology', 'Irritating Tuxedos', "Impossible Torpedo's", 'Ivanka Trump'],
    ['Pea-en-gee', 'Ping', 'Pung', 'Pang', 'Portable Graphics Format'],
    ['Pokemon', 'Chilli', 'Anti-virus software', 'Browser', 'Marvel Heroes']
];

const correctAnswer = [
    'Hyper Text Markup Language', 'Motherboard', 'Information Technology', 'Pea-en-gee', 'Browser'
];

//BUILD THE FORM
quizContainer.classList.add('quizContainer');
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
        // this.questionBox.innerText = getQuestion(page);
        // this.answersBox.innerText = getAnswers(page);

        quizContainer.append(this.quizTitle, this.pageNumber, this.questionBox, this.answersBox);
        this.answersBox.appendChild(this.eachAnswer);

    }
}

new PageContent();
console.log(PageContent)



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