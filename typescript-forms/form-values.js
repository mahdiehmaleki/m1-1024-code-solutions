'use strict';
const $contactFrom = document.querySelector('form');
if (!$contactFrom) throw new Error('Contact Form does not exist');
$contactFrom.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $contactFrom.elements;
  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formData);
});
