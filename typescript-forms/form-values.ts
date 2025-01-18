interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $contactFrom = document.querySelector<HTMLFormElement>('form');

if (!$contactFrom) throw new Error('Contact Form does not exist');

$contactFrom.addEventListener('submit', (event) => {
  event.preventDefault();

  const $formElements = $contactFrom.elements as FormElements;

  const formData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(formData);
});
