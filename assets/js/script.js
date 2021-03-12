var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var wrongBtn = document.getElementById('wrong-answer');
var rightBtn = document.getElementById('right-answer');
var nextBtn = document.getElementById('next-question');

var timeLeft = 75;

function decrementByFifteen() {
    timerEl.textContent = timeLeft + ' seconds remaining';
    timeLeft -= 15;
}

function countdown() {
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = 'Time\'s up!';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  function displayWrongMessage() {
    document.getElementById("result").innerHTML = "Incorrect.";
  }

  function displayRightMessage() {
    document.getElementById("result").innerHTML = "Correct!";
  }

  function nextQuestion() {
      document.getElementById("wrong-answer").innerHTML = "Wrong Answer 2"
      document.getElementById("right-answer").innerHTML = "Right Answer 2"
  }
  
  function disableWrongBtn() {
    wrongBtn.disabled = true;
}

function disableRightBtn() {
    rightBtn.disabled = true;
}

function enableWrongBtn() {
    wrongBtn.disabled = false;
}

function enableRightBtn() {
    rightBtn.disabled = false;
}

  startBtn.onclick = countdown;
  wrongBtn.addEventListener("click", displayWrongMessage);
  wrongBtn.addEventListener("click", decrementByFifteen);
  wrongBtn.addEventListener("click", disableWrongBtn);
  rightBtn.addEventListener("click", displayRightMessage);
  rightBtn.addEventListener("click", disableRightBtn);
  nextBtn.addEventListener("click", nextQuestion);
  nextBtn.addEventListener("click", enableWrongBtn);
  nextBtn.addEventListener("click", enableRightBtn);
  
  