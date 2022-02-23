/**
 * Modal credit Florin Pop tutorial video, ammended code for my quiz
 * see REAMDME.md credit section
 */

// Declared variables
const instructions = document.getElementById('instruction-btn');
const modalContainer = document.getElementById('modal-container');
const closeModal = document.getElementById('close-modal-btn');
const start = document.getElementById('start-btn');
const prize = document.getElementById('prize-btn')
const prizemodalContainer = document.getElementById('prize-modal-container');
const closePrizeModal = document.getElementById('close-prize-modal-btn');

const submitFormBtn = document.getElementById('submit-form-btn')
const prizeForm = document.getElementById('prize-form')


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
prize.addEventListener('click', () => {
    prizemodalContainer.classList.add('show');
});


// Hide prize modal 
closePrizeModal.addEventListener('click', () => {
    prizemodalContainer.classList.remove('show');
});

function validateForm() {
    let inputs = prizeForm.elements["full-name"]["email-address"]["answer"].value;
    if (inputs == "") {
      alert("All input fields are required");
      return false;
    }
  }