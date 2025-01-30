const $tabContainer = document.querySelector(
  '.tab-container'
) as HTMLDivElement;
const $tab = document.querySelectorAll('.tab') as NodeListOf<HTMLDivElement>;
const $view = document.querySelectorAll('.view') as NodeListOf<HTMLDivElement>;

$tabContainer.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLDivElement;

  if ($eventTarget.matches('.tab')) {
    const $viewToShow = $eventTarget.dataset.view;

    $tab.forEach((tab) => {
      if (tab === $eventTarget) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
    $view.forEach((view) => {
      const $viewAttribute = view.getAttribute('data-view');
      if ($viewAttribute === $viewToShow) {
        view.classList.remove('hidden');
      } else {
        view.classList.add('hidden');
      }
    });
  }
});
