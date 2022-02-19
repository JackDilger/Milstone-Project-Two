
const questionText = document.getElementById('question-text')
const answerButtons = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startQuiz();

function startQuiz () {
  console.log('started')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  setNextQuestion()
}

function setNextQuestion () {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
  questionText.innerText = question.question
  question.answers.forEach(answer => {
  const button = document.createElement('button')
  })
}



