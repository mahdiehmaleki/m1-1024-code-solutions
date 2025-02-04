interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

export const todos: Todo[] = readTodos();

export function writeTodos(todos: Todo[]): void {
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

export function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos-storage');
  return todosJSON ? JSON.parse(todosJSON) : [];
}
