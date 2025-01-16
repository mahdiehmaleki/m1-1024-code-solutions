'use strict';
const $click = document.querySelector('.task-list');
if (!$click) throw new Error('$click does not exist');
$click.addEventListener('click', (event) => {
  const eventTarget = event.target;
  if (
    eventTarget.tagName === 'BUTTON' &&
    eventTarget.closest('.task-list-item')
  ) {
    const taskListItem = eventTarget.closest('.task-list-item');
    if (taskListItem) {
      console.log('Task List Item:', taskListItem);
      taskListItem.remove();
    }
  }
  console.log('Event Target:', eventTarget);
  console.log('Tag Name:', eventTarget.tagName);
});
