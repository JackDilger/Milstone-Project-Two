/**
 * Credit WEB DEV Simplified- base quiz tutorial followed and was modfied and extra features added to fit my ideas
 * see REAMDME.md credit section
 */


// Declared const variables
const questionText = document.getElementById('question-text');
const nextButton = document.getElementById('next-btn');
const answerButtons = document.getElementById('answer-buttons');
const score = document.getElementById('score');
const playAgain = document.getElementById('play-again-btn');
const questionArea = document.getElementById('question-area');
const endQuizHeading = document.getElementById('end-quiz-heading');
const totalScore = document.getElementById('total-score');
const pikachu = document.getElementById('pikachu');
const gengar = document.getElementById('gengar');
const countdown = document.getElementById('countdown');

// Declared let variables
let shuffledQuestions, currentQuestionIndex
let interval;


// Increments currentQuestionIndex when next button is clicked
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

// Calls start quiz function
startQuiz();

/**
 * Starts main quiz
 * Shuffles the questions array
 * Calls the setNextQuestion function
 */
function startQuiz() {
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

/**
 * Calls the resetState function
 * Calls the timer function
 * Shows the shuffled question
 */
function setNextQuestion() {
    resetState()
    timer()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

/**
 * Function to set the 30 second limit to answer each question
 * Displays an alert if the timer reaches 0
 * Hides quetsion area and displays play again screen
 */
function timer() {
    let count = 30;
    clearInterval(interval);
    countdown.innerHTML = "Sec Left: " + count;
    interval = setInterval(function () {
        count--;
        countdown.innerHTML = "Sec Left: " + count;
        if (count === 0) {
            alert("You're too slow! Press play again to restart or click the logo to go back to the menu.");
            playAgain.classList.remove("hide");
            playAgain.onclick = function () {
                location.href = "quiz.html";
            }
            gengar.classList.remove('hide')
            questionArea.classList.add('hide')
            clearInterval(interval);
        }
    }, 1000);
}


/**
 * Function to show question and answers
 */
function showQuestion(question) {
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

/**
 * Function resets question and answer section to default state
 */
function resetState() {
    nextButton.classList.add('hide')
    answerButtons.classList.remove('disable')
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


/**
 * Function to check if the user has answered correctly
 * Sets background color of answer button to green on correct answer and calls icrementScore function
 * Sets background color of answer button to red on incorrect answer
 * Disables answer buttons after the user selects first answer
 */
function selectAnswer(event) {
    const selectedAnswer = event.target
    const correct = selectedAnswer.dataset.correct
    if (correct) {
        selectedAnswer.style.backgroundColor = 'green'
        incrementScore()
    } else {
        selectedAnswer.style.backgroundColor = 'red'
    }
    answerButtons.classList.add('disable')

    /**
     * Checks to see if the user has answered the last question
     * If so shows play again button
     * Calls endQuiz function and clears timer
     */
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        playAgain.classList.remove("hide");
        playAgain.onclick = function () {
            location.href = "quiz.html";
        }
        clearInterval(interval);
        endQuiz()
    }
}

// Function to increment score counter by 1
function incrementScore() {
    let currentScore = parseInt(document.getElementById("score").innerText);
    score.innerText = ++currentScore;
}


/**
 * Function to end the quiz
 * Hides main quiz area
 * Displays end quiz image and header
 */
function endQuiz() {
    questionArea.classList.add('hide')
    endQuizHeading.classList.remove('hide')
    pikachu.classList.remove('hide')
    countdown.classList.add('hide')
}






