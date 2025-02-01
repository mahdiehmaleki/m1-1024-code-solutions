const $setTimeOut = document.querySelector('.message') as HTMLElement;

if (!$setTimeOut) throw new Error('$SetTimeOut does not exist');

function hello(): void {
  $setTimeOut.textContent = 'Hello There';
}

setTimeout(hello, 2000);
