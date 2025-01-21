function handleFocus(event: Event): void {
  console.log('Focus event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event name is:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('Blur event was fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event name is:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('Event name is:', eventTarget.name);
  console.log('Event value is:', eventTarget.value);
}

const $usernameInput =
  document.querySelector<HTMLInputElement>('input[name="name"]');
const $emailInput = document.querySelector<HTMLInputElement>(
  'input[name="email"]'
);
const $messageTextarea = document.querySelector<HTMLTextAreaElement>(
  'textarea[name="message"]'
);

if (!$usernameInput || !$emailInput || !$messageTextarea)
  throw new Error('One or more of form controls do not exist');

[$usernameInput, $emailInput, $messageTextarea].forEach((element) => {
  element.addEventListener('focus', handleFocus);
  element.addEventListener('blur', handleBlur);
  element.addEventListener('input', handleInput);
});
