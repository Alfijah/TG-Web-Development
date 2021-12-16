//GLOBAL VARIABLES DEFINED
const stopwatch = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.start_button');
const pauseBtn = document.querySelector('.pause_button');
const stopBtn = document.querySelector('.stop_button');
const btnOnActive = document.querySelectorAll('.buttons');

stopwatch.innerText = '00:00:00';

let min = 0;
let sec = 0;
let cent = 0;
let isRunning = false; 

// FUNCTIONS DECLARED
function startTime() {
    if (!isRunning) {
        isRunning = true;
        updateTime();
    }
}

function pauseTime() {
    if (isRunning) {
        isRunning = false;
    }
}

function resetTime() {
        isRunning = false;
        stopwatch.innerText = '00:00:00';
        min = 0;
        sec = 0;
        cent = 0;
}

function updateTime() {
    if (isRunning == true) {
        min = parseInt(min);
        sec = parseInt(sec);
        cent = parseInt(cent);

        cent = cent + 1;
        // console.log(cent)
        
        if (cent === 100) {
            sec = sec + 1;
            cent = 0;
        }

        if (sec === 60) {
            min = min + 1;
            sec = 0;
        }

        if (min === 99) {
            min = 0;
            return resetTime();
        }

        if (cent < 10) {
            cent = '0' + cent;
        }

        if (sec < 10) {
            sec = '0' + sec;
            console.log('meer tellen')
        }

        if (min < 10) {
            min = '0' + min;
        }

        stopwatch.innerText = min + ':' + sec + ':' + cent;

        setTimeout(updateTime, 10)
    }
}

//WHEN CLICKING ON BUTTONS, CHANGE BUTTON COLOR
function removeActive() {
    btnOnActive.forEach((button) => {
        button.classList.remove('active');
    })
}

btnOnActive.forEach((button) => {
    button.addEventListener('click', () => {
        removeActive();
        button.classList.add('active');
    })
})