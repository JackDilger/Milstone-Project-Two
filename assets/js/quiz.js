
const questionText = document.getElementById('question-text')
const nextButton = document.getElementById('next-btn')
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

startQuiz();

function startQuiz () {
  console.log('started')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
}


function setNextQuestion () {
  resetState()
  Timer()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function Timer() {
  var count = 30;
  var interval = setInterval(function(){
  document.getElementById('timer').innerHTML=count;
  count--;
    if (count <= 0) {
      clearInterval(interval);
      alert("You're out of time!");
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
  } else {
    selectedAnswer.style.backgroundColor = 'red'
  }
  nextButton.classList.remove('hide')
}
