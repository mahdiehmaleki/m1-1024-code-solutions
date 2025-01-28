const phraseSpans = document.querySelectorAll('#phrase span');

let currentIndex = 0;
let incorrectCount = 0;

function updateUnderline(): void {
  phraseSpans.forEach((span, index) => {
    span.classList.toggle('underline', index === currentIndex);
  });
}

function handleKeydown(event: KeyboardEvent): void {
  const currentChar = phraseSpans[currentIndex].textContent;

  if (event.key === currentChar) {
    phraseSpans[currentIndex].classList.add('correct');
    currentIndex++;
    updateUnderline();
  } else {
    phraseSpans[currentIndex].classList.add('wrong');
    incorrectCount++;
  }

  if (currentIndex === phraseSpans.length) {
    const accuracy =
      ((phraseSpans.length - incorrectCount) / phraseSpans.length) * 100;
    const resultDiv = document.getElementById('result');
    resultDiv!.textContent = `You finished! Accuracy: ${accuracy.toFixed(
      2
    )}%. Press any key to play again.`;
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', () => location.reload());
  }
}

document.addEventListener('keydown', handleKeydown);
