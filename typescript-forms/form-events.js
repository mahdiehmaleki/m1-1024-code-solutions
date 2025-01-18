'use strict';
function handleFocus(event) {
  console.log('Focus event was fired');
  const eventTarget = event.target;
  console.log('event name is:', eventTarget.name);
}
function handleBlur(event) {
  console.log('Blur event was fired');
  const eventTarget = event.target;
  console.log('event name is:', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('Event name is:', eventTarget.name);
  console.log('Event value is:', eventTarget.value);
}
const $usernameInput = document.querySelector('input[name="name"]');
const $emailInput = document.querySelector('input[name="email"]');
const $messageTextarea = document.querySelector('textarea[name="message"]');
if (!$usernameInput || !$emailInput || !$messageTextarea)
  throw new Error('One or more of form controls do not exist');
[$usernameInput, $emailInput, $messageTextarea].forEach((element) => {
  element.addEventListener('focus', handleFocus);
  element.addEventListener('blur', handleBlur);
  element.addEventListener('input', handleInput);
});
