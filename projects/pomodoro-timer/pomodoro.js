// DOM Elements
const timerDisplay = document.querySelector('#timer');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('[data-mode]');

let timer;
let timeLeft = 1500; // Default 25 mins
let isRunning = false;
let currentMode = 'pomodoro'; 

// Durations in seconds
const durations = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60
};

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

function updateDisplay() {
    timerDisplay.textContent = formatTime(timeLeft);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    timeLeft = durations[currentMode];
    updateDisplay();
}

function setMode(mode) {
    currentMode = mode;

    // Toggle active class
    modeButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

    pauseTimer();
    timeLeft = durations[mode];
    updateDisplay();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const mode = button.getAttribute('data-mode');
        setMode(mode);
    });
});

// Init
setMode('pomodoro');




