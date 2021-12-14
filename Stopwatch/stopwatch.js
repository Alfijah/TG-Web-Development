// VARIABLES DEFINED

const stopwatch = document.querySelector('.stopwatch');
const startBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const stopBtn = document.querySelector('.fa-stop');

let min = 0;
let sec = 0;
let cent = 0;
let stopTime = true; 


// FUNCTIONS DECLARED

function startTime() {
    if (stopTime == true) {
        stopTime = false;
        updateTime();
    }
}


function pauseTime() {
    if (stopTime == false) {
        stopTime = true;
    }
}

function resetTime() {
    if (stopTime == false) {
        stopTime = true;
        stopwatch.innerText = '00:00:00';
        min = 0;
        sec = 0;
        cent = 0;
    }
}

function updateTime() {
    if (stopTime == true) {
        min = parseInt(min);
        sec = parseInt(sec);
        cent = parseInt(cent);

        cent = cent + 1;

        if (cent == 100) {
            sec += 1;
            cent = 0;
        }

        if (sec == 60) {
            min += 1;
            sec = 0;
        }

        if (min == 99) {
            min = 0;
            return resetTime();
        }

        if (cent < 10) {
            cent = '0' + cent;
        }

        if (sec < 10) {
            sec = '0' + sec;
        }

        if (min < 10) {
            min = '0' + min;
        }

        stopwatch.innerText = min + ':' + sec + ':' + cent;

        setInterval(updateTime, 10)
    }
}


//WHEN CLICKED ON THE BUTTONS
startBtn.addEventListener('click', startTime());
pauseBtn.addEventListener('click', pauseTime());
stopBtn.addEventListener('click', resetTime());
