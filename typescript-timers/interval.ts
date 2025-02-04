const $interval = document.querySelector('.countdown-display') as HTMLElement;

if (!$interval) throw new Error('$interval does not exist');

let count: number = 4;
const countDown = setInterval(function (): void {
  $interval.textContent = count.toString();
  count--;
  if (count <= 0) {
    clearInterval(countDown); // Stops the interval after counting to 5
    $interval.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
