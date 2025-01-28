'use strict';
const phraseSpans = document.querySelectorAll('#phrase span');
let currentIndex = 0;
let correctCount = 0;
function updateUnderline() {
  phraseSpans.forEach((span, index) => {
    span.classList.toggle('underline', index === currentIndex);
  });
}
function handleKeydown(event) {
  const currentChar = phraseSpans[currentIndex].textContent;
  if (event.key === currentChar) {
    phraseSpans[currentIndex].classList.add('correct');
    correctCount++;
    currentIndex++;
    updateUnderline();
  } else {
    phraseSpans[currentIndex].classList.add('wrong');
  }
  if (currentIndex === phraseSpans.length) {
    const accuracy = (correctCount / phraseSpans.length) * 100;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You finished! Accuracy: ${accuracy.toFixed(
      2
    )}%. Press any key to play again.`;
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', () => location.reload());
  }
}
document.addEventListener('keydown', handleKeydown);
