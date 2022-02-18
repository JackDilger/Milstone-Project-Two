
/*---------------------------------------------------- declared variables*/
const instructions = document.getElementById('instruction-btn');
const modalContainer = document.getElementById('modal-container');
const closeModal = document.getElementById('close-modal-btn');
const start = document.getElementById('start-btn');


/*---------------------------------------------------- show modal */
instructions.addEventListener('click', () => {
    modalContainer.classList.add('show');
});


/*---------------------------------------------------- hide modal */
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

/*---------------------------------------------------- open quiz question area*/
start.onclick = function() {
    location.href = "quiz.html";
};

