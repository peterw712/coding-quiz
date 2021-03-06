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
var score1 = document.getElementById('score1')
var score2 = document.getElementById('score2')
score2.style.display = 'none'

// only display start button on load
question.style.display = 'none'
wrongBtn1.style.display = 'none'
wrongBtn2.style.display = 'none'
wrongBtn3.style.display = 'none'
rightBtn.style.display = 'none'
nextBtn.style.display = 'none'
document.getElementById('try-again').style.display = 'none'
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
  var wrongAnswers1 = ['booleans', 'square brackets', 'booleans', 'terminal / bash']
  var wrongAnswers2 = ['numbers', 'curly brackets', 'numbers', 'for loops']
  var wrongAnswers3 = ['strings', 'quotes', 'strings', 'JavaScript']
  var rightAnswers = ['alerts', 'parentheses', 'all of these choices', 'console log']
// array for questions
  var questions = ['Commonly used data types DO NOT include:', 'The condition in an if / else statement is enclosed within ____.', 'Arrays in Javascript can be used to store ____.', 'A very useful tool used during debugging is:']
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
        document.getElementById('try-again').style.display = 'block'
        
        if (timeLeft > 0) {
            score1.innerHTML = 'Your score is: ' + (timeLeft.toString());
            localStorage.setItem('score1', timeLeft);
            }
            else {
                score1.innerHTML = 'Your score is: ' + '0';
                localStorage.setItem('score1', 0);
            }
            
            score2.style.display = "block"
        }
    }

score2.innerHTML = 'Your previous score is: ' + localStorage.getItem('score1');  
localStorage.setItem('score2', score2.textContent);

console.log(localStorage);

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
    document.getElementById('instructions').style.display = 'none';
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




  
  

  
  