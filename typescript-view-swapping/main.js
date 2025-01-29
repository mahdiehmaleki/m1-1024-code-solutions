'use strict';
const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', (event) => {
  const $eventTarget = event.target;
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
