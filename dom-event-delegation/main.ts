const $click = document.querySelector('.task-list');

if (!$click) throw new Error('$click does not exist');

$click.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

  if (
    eventTarget.tagName === 'BUTTON' &&
    eventTarget.closest('.task-list-item')
  ) {
    const taskListItem = eventTarget.closest('.task-list-item') as HTMLElement;

    if (taskListItem) {
      console.log('Task List Item:', taskListItem);

      taskListItem.remove();
    }
  }

  console.log('Event Target:', eventTarget);
  console.log('Tag Name:', eventTarget.tagName);
});
