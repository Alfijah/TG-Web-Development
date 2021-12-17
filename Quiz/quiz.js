//DEFINING VARIABLES
const generalContainer = document.querySelector('.generalContainer');
const startBtn = document.createElement('div');
const moveBtns = document.createElement('div');
const previousBtn = document.createElement('div');
const nextBtn = document.createElement('div');
const quizContainer = document.createElement('div');

//ASSIGN CLASSNAME TO VARIABLES
startBtn.classList.add('startBtn');
moveBtns.classList.add('moveBtns');
previousBtn.classList.add('previousBtn');
nextBtn.classList.add('nextBtn');
quizContainer.classList.add('quizContainer');

//APPEND CHILDELEMENT TO VARIABLES
generalContainer.appendChild(startBtn).innerText = 'Start';
generalContainer.append(moveBtns, quizContainer);
moveBtns.appendChild(previousBtn).innerText = 'Vorige';
moveBtns.appendChild(nextBtn).innerText = 'Volgende';

//FUNCTIONS
//MAKE THE STARTBUTTON
function startQuiz() {
    generalContainer.removeChild(startBtn);
    //next add the form page
}

//

//BUILD THE FORM
function quizForm(data) {
    const quizTitle = document.createElement('div');
    quizTitle.classList.add('quizTitle');
    quizContainer.appendChild(quizTitle).innerText = 'Quiz Time!';

    for (i=1; i<7; i++) {
    const currentPage = document.createElement('div');
    currentPage.classList.add('currentPage');
    quizContainer.appendChild(currentPage).innerText = i + '/6';
    }
}

quizForm();



//FUNCTIONS
//MAKE THE NEXT AND PREVIOUS BUTTON
//ACTIVATE BUTTONS
startBtn.onclick = startQuiz;