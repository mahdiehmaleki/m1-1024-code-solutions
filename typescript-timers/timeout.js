'use strict';
const $setTimeOut = document.querySelector('.message');
if (!$setTimeOut) throw new Error('$SetTimeOut does not exist');
function hello() {
  $setTimeOut.textContent = 'Hello There';
}
setTimeout(hello, 2000);
