/**
 * Modal credit Florin Pop tutorial video, ammended code for my quiz
 * see REAMDME.md credit section
 */

// Declared variables
const instructions = document.getElementById('instruction-btn');
const modalContainer = document.getElementById('modal-container');
const closeModal = document.getElementById('close-modal-btn');
const start = document.getElementById('start-btn');
const prizeButton = document.getElementById('prize-btn')
const prizemodalContainer = document.getElementById('prize-modal-container');
const closePrizeModal = document.getElementById('close-prize-modal-btn');

const submitFormBtn = document.getElementById('submit-form-btn');
const prizeForm = document.getElementById('prize-form');
const formInfoText = document.getElementById('form-info-text')
const prizeformComplete = document.getElementById('prize-form-complete')
let fullName;
let email;
let answer;



// Open quiz question area
start.onclick = function() {
    location.href = "quiz.html";
};

// Show instruction modal 
instructions.addEventListener('click', () => {
    modalContainer.classList.add('show');
});


// Hide instruction modal 
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});


// Show prize modal 
prizeButton.addEventListener('click', () => {
    prizemodalContainer.classList.add('show');
});


// Hide prize modal 
closePrizeModal.addEventListener('click', () => {
    prizemodalContainer.classList.remove('show');
});

// Calls validateForm function once form is submitted
submitFormBtn.onclick = function() {
    validateForm()
};


/**
 * Function to validate form fields
 * Displays alert if required fields are not filled out
 * Hides form once submiited and gives feedback to the user
 * Amended from w3schools- See README.md credit section
 */
function validateForm () {
    fullName = prizeForm.elements["full-name"].value
    email = prizeForm.elements["email-address"].value
    answer = prizeForm.elements["answer"].value
    if (fullName == "") {
        alert("Full name must be filled out");
        return false;
    }

    if (email == "") {
        alert("email must be filled out");
        return false;
    }

    if (answer == "") {
        alert("Answer must be filled out");
        return false;
    }
    submitFormBtn.classList.add('hide')
    prizeForm.classList.add('hide')
    formInfoText.classList.add('hide')

    prizeformComplete.innerHTML = ` <h1> Thanks for completing our quiz ${fullName}!
    <br>
    Best of luck in the prize draw!
    </h1>`
}

  