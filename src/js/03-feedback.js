const throttle = require('lodash.throttle');

const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

function clearStorage() {
    savedData.message = '';
    savedData.email = '';

    localStorage.removeItem('feedback-form-state');

}

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const formSubmit = document.querySelector('.feedback-form');

emailInput.addEventListener('input', throttle(function(event) {
  savedData.email = emailInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(savedData));

  console.log(savedData.email);
}, 500));

messageInput.addEventListener('input', throttle(function(event) {
  savedData.message = messageInput.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(savedData));

  console.log(savedData.message);
}, 500));

console.log(savedData);

formSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(`email: ${savedData.email}, message: ${savedData.message}`);

    clearStorage()

});
