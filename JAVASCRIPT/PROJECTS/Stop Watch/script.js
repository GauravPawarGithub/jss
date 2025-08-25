const timer = document.querySelector(".timer");
const startbtn = document.querySelector(".startbtn");
const stopbtn = document.querySelector(".stopbtn");
const resetbtn = document.querySelector(".resetbtn");

let msec = 0; // milliseconds
let sec = 0;
let min = 0;
let timerID = null;

function updateDisplay() {
  let msecString = msec < 10 ? `0${msec}` : msec;
  let secString = sec < 10 ? `0${sec}` : sec;
  let minString = min < 10 ? `0${min}` : min;
  timer.innerHTML = `${minString} : ${secString} : ${msecString}`;
}

function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }   
    }  
    updateDisplay();
}

startbtn.addEventListener("click", () => {
    if (timerID !== null) {
      clearInterval(timerID); //By clearing the old interval before starting a new one, ensure only one timer is running at a time //only stops does not change any value
    }
    timerID = setInterval(startTimer, 10);
});

stopbtn.addEventListener("click", () => {
    clearInterval(timerID);
});

resetbtn.addEventListener("click", () => {
    clearInterval(timerID);
    msec = sec = min = 0;
    updateDisplay();
});

// Initialize display
updateDisplay();
