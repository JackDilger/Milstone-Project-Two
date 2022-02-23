/**
 * Modal credit Florin Pop tutorial video, ammended code for my quiz
 * see REAMDME.md credit section
 */

// Declared variables
const instructions = document.getElementById('instruction-btn');
const modalContainer = document.getElementById('modal-container');
const closeModal = document.getElementById('close-modal-btn');
const start = document.getElementById('start-btn');


// Show modal 
instructions.addEventListener('click', () => {
    modalContainer.classList.add('show');
});


// Hide modal 
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

// Open quiz question area
start.onclick = function() {
    location.href = "quiz.html";
};

