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





//BUILD THE FORM
// generalContainer.appendChild(divElement).innerText = 'Start';
// generalContainer.appendChild(divElement).innerText = 'Math Problem';


//MAKE THE STARTBUTTON



//MAKE THE NEXT AND PREVIOUS BUTTON


//FUNCTIONS
