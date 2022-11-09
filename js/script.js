let modalWindow = document.querySelector('.modal');
let modalButton = document.querySelector('.contacts-button');
const loginLogin = modalWindow.querySelector('.feedback-name');
const loginForm = modalWindow.querySelector('.feedback');
const loginPassword = modalWindow.querySelector('.feedback-email');

modalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalWindow.classList.add('modal-show');
  loginLogin.focus();

});

let modalClose = modalWindow.querySelector('.modal-close');

modalClose.addEventListener('click', function () {
  modalWindow.classList.remove('modal-show');
});

document.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.remove('modal-show');
  }
});

loginForm.addEventListener('submit', function(evt) {
  if (!loginLogin.value || !loginPassword.value) {
    evt.preventDefault();
  }
});

