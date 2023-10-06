import throttle from 'lodash.throttle';

function saveState() {
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  const state = { email, message };

  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}

function loadState() {
  const stateString = localStorage.getItem('feedback-form-state');
  if (stateString) {
    const state = JSON.parse(stateString);
    document.querySelector('input[name="email"]').value = state.email;
    document.querySelector('textarea[name="message"]').value = state.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;

  console.log(`Email: ${email}, Message: ${message}`);

  localStorage.removeItem('feedback-form-state');
  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
}


document.querySelectorAll('input, textarea').forEach(element => {
  element.addEventListener('input', throttle(saveState, 500));
});

document.querySelector('.feedback-form').addEventListener('submit', handleSubmit);

window.addEventListener('load', loadState);
