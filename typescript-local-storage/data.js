export const todos = readTodos();
export function writeTodos(todos) {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}
export function readTodos() {
  const todosJSON = localStorage.getItem('todos-storage');
  return todosJSON ? JSON.parse(todosJSON) : [];
}
