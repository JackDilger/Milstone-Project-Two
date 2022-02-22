
const questionText = document.getElementById('question-text')
const nextButton = document.getElementById('next-btn')
const answerButtons = document.getElementById('answer-buttons')
const score = document.getElementById('score')
const playAgain = document.getElementById('play-again-btn')

let shuffledQuestions, currentQuestionIndex
let interval



nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})


startQuiz();

function startQuiz () {
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  
  setNextQuestion()
}


function setNextQuestion () {
  resetState()
  timer()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function timer() {
  let count = 30;
  clearInterval(interval);
  document.getElementById('timer').innerHTML= "Sec Left: " + count;
  interval = setInterval(function(){
  count--;
  document.getElementById('timer').innerHTML= "Sec Left: " + count;
    if (count === 0) {
      alert("You're out of time!");
      clearInterval(interval);
    }
    
  }, 1000);
}


function showQuestion (question) {
  questionText.innerText = question.question
  question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('option-btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswer)
  answerButtons.appendChild(button)
  })
}

function resetState() {
  nextButton.classList.add('hide')
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild)
  }
}

function selectAnswer (event) {
  const selectedAnswer = event.target
  const correct = selectedAnswer.dataset.correct
  if (correct) {
    selectedAnswer.style.backgroundColor= 'green'
    incrementScore()
  } else {
    selectedAnswer.style.backgroundColor = 'red'
  }

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    playAgain.classList.remove("hide");
    playAgain.onclick = function() {
        location.href = "quiz.html";
    };
    endQuiz()
  }
}

function incrementScore() {
  let currentScore = parseInt(document.getElementById("score").innerText);
  score.innerText = ++currentScore;
}

