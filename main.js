// * task 1
setTimeout(function () {
  const hello = document.getElementById("paragraf");
  hello.innerHTML = "Ураа!";
},10000);

// task 2
let i = 0;
 function chage() {
  const doc = document.getElementById("flowers");
  const color = ["black", "blue", "brown", "green"];
  doc.style.background = color[i];
  i = (i +1) % color.length
}
setInterval(chage,1000)

// task 3

let timer;
let minutesInput = document.getElementById("minutes")
let secondsInput = document.getElementById("seconds")
let startButton = document.getElementById("start")
let pauseButton = document.getElementById("pause")
let resetButton = document.getElementById("reset")
let timerDisplay= document.getElementById("timer")

function startTimer() {
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;
  let totalTime = minutes * 60 + seconds;
}

timer = setInterval(() => {
  if(totalTime > 0) {
    minutes = Math.floor(totalTime / 60)
    seconds = totalTime % 60;
    timerDisplay.innerHTML = `${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    totalTime--
  }else {
    clearInterval(timer);
    timerDisplay.innerHTML = "Tome out!";
  }
}, 1000 );

startButton.addEventListener("click", startTimer);
 pauseButton.addEventListener("click", () => {
  clearInterval(timer)
 });

 resetButton.addEventListener("click", () => {
  clearInterval(timer)
  timerDisplay.innerHTML = "00:00";
  minutesInput.value = "";
  secondsInput.value = "";
 });
