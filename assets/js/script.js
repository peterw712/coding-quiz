// setting elements as variables
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var wrongBtn1 = document.getElementById('wrong-answer1');
var wrongBtn2 = document.getElementById('wrong-answer2');
var wrongBtn3 = document.getElementById('wrong-answer3');
var rightBtn = document.getElementById('right-answer');
var nextBtn = document.getElementById('next-question');
var question = document.getElementById('question');
var result = document.getElementById('result')
var score = document.getElementById('score')

// only display start button on load
question.style.display = "none"
wrongBtn1.style.display = "none"
wrongBtn2.style.display = "none"
wrongBtn3.style.display = "none"
rightBtn.style.display = "none"
nextBtn.style.display = "none"
// next button starts out disabled for first question
nextBtn.disabled = true

// to hide start button once it is pressed
function hideButton() {
    startBtn.style.display = "none";
}

// display all buttons on start
function start() {
    var allButtons = [rightBtn, wrongBtn1, wrongBtn2, wrongBtn3, nextBtn];
    for (var i = 0; i < allButtons.length; i++)
    {allButtons[i].style.display = "block";}
    question.style.display = "block";
}

// timing functions
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

 // arrays for possible answers for each question
  var wrongAnswers1 = ['1a', '2a', '3a', '4a']
  var wrongAnswers2 = ['1b', '2b', '3b', '4b']
  var wrongAnswers3 = ['1c', '2c', '3c', '4c']
  var rightAnswers = ['correct1', 'correct2', 'correct3', 'correct4']
// array for questions
  var questions = ['can you get this right? 1', 'can you get this right? 2', 'can you get this right? 3', 'can you get this right? 4']
// randomize choice order
  function randomizeOrder() {
    var randomOrder = (Math.floor(Math.random() * 8));
    var randomOrder2 = (Math.floor(Math.random() * 8));
    var randomOrder3 = (Math.floor(Math.random() * 8));
    var randomOrder4 = (Math.floor(Math.random() * 8));
  
    wrongBtn1.style.order = randomOrder.toString();
    wrongBtn2.style.order = randomOrder2.toString();
    wrongBtn3.style.order = randomOrder3.toString();
    rightBtn.style.order = randomOrder4.toString();
}
  randomizeOrder();
// change question when next question is pressed
  var i = 0;

  function nextQuestion() {
      wrongBtn1.innerHTML = wrongAnswers1[i];
      wrongBtn2.innerHTML = wrongAnswers2[i];
      wrongBtn3.innerHTML = wrongAnswers3[i];
      rightBtn.innerHTML = rightAnswers[i];
      question.innerHTML = questions[i];
      i++;
      // display score and hide other elements after the last question
      if (i === 4) {
          nextBtn.innerHTML = 'Finish'
      }
      if (i > 4) {
        question.style.display = 'none';
        wrongBtn1.style.display = 'none';
        wrongBtn2.style.display = 'none';
        wrongBtn3.style.display = 'none';
        rightBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        result.style.display = 'none'
        timerEl.style.display = 'none'
        if (timeLeft > 0) {
            score.innerHTML = timeLeft.toString();
            }
            else {score.innerHTML = '0'}
      }
    }


//enabling choices and disabling next button, or disabling choices and enabling next button

var choices = [rightBtn, wrongBtn1, wrongBtn2, wrongBtn3];

function disableChoices() {
    for (var i = 0; i < choices.length; i++)
    {choices[i].disabled = true; }
}

function enableChoices() {
    for (var i = 0; i < choices.length; i++)
    {choices[i].disabled = false; }
}

//functions to be executed on click

function startFunctions() {
    countdown();
    start();
    hideButton();
}

function wrongFunctions() {
    result.innerHTML = "Incorrect.";
    if (timeLeft > 0) {
    decrementByFifteen()};
    disableChoices();
    nextBtn.disabled = false;
    result.style.display = 'block';
}

function rightFunctions() {
    result.innerHTML = "Correct!";
    disableChoices();
    nextBtn.disabled = false;
    result.style.display = 'block';
}

function nextFunctions() {
    nextQuestion();
    enableChoices();
    randomizeOrder();
    nextBtn.disabled = true;
    result.style.display = 'none';
}

  startBtn.addEventListener("click", startFunctions);
  wrongBtn1.addEventListener("click", wrongFunctions);
  wrongBtn2.addEventListener("click", wrongFunctions);
  wrongBtn3.addEventListener("click", wrongFunctions);
  rightBtn.addEventListener("click", rightFunctions);
  nextBtn.addEventListener("click", nextFunctions);


  
  

  
  