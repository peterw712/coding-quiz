var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var wrongBtn = document.getElementById('wrong-answer');
var rightBtn = document.getElementById('right-answer');
var nextBtn = document.getElementById('next-question');
var question = document.getElementById('question');
question.style.display = "none"
wrongBtn.style.display = "none"
rightBtn.style.display = "none"
nextBtn.style.display = "none"
nextBtn.disabled = true

function hideButton() {
    startBtn.style.display = "none";
}

function start() {
    var buttonArray = [rightBtn, wrongBtn, nextBtn];
    for (var i = 0; i < buttonArray.length; i++)
    {buttonArray[i].style.display = "block";}
    question.style.display = "block";
}

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
  
  var wrongAnswers = ['2b', '3a', '4b', '5a']

  var rightAnswers = ['2a', '3b', '4a', '5b']

  var questions = ['can you get this right? 2', 'can you get this right? 3', 'can you get this right? 4', 'can you get this right? 5']
  
  var i = 0

  var randomOrder = (Math.floor(Math.random() * 4));
  var randomOrder2 = (Math.floor(Math.random() * 4));

  function randomizeOrder() {
  wrongBtn.style.order = randomOrder.toString();
  rightBtn.style.order = randomOrder2.toString();}

  randomizeOrder();

  function nextQuestion() {
      wrongBtn.innerHTML = wrongAnswers[i];
      rightBtn.innerHTML = rightAnswers[i];

      question.innerHTML = questions[i];
      randomizeOrder();
      i++
  }


function disableChoices() {
    var buttonArray = [rightBtn, wrongBtn];
    for (var i = 0; i < buttonArray.length; i++)
    {buttonArray[i].disabled = true; }
}

function disableNext() {
    nextBtn.disabled = true;
}

function enableNext() {
    nextBtn.disabled = false;
}

function enableChoices() {
    var buttonArray = [rightBtn, wrongBtn];
    for (var i = 0; i < buttonArray.length; i++)
    {buttonArray[i].disabled = false; }
}

  startBtn.addEventListener("click", countdown);
  startBtn.addEventListener("click", start);
  startBtn.addEventListener("click", hideButton);
  wrongBtn.addEventListener("click", displayWrongMessage);
  wrongBtn.addEventListener("click", decrementByFifteen);
  wrongBtn.addEventListener("click", disableChoices);
  wrongBtn.addEventListener("click", enableNext);
  rightBtn.addEventListener("click", displayRightMessage);
  rightBtn.addEventListener("click", disableChoices);
  rightBtn.addEventListener("click", enableNext);
  nextBtn.addEventListener("click", nextQuestion);
  nextBtn.addEventListener("click", enableChoices);
  nextBtn.addEventListener("click", disableNext);
  nextBtn.addEventListener("click", randomizeOrder);


  
  

  
  