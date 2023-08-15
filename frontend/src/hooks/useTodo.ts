import { Todo } from '../store/slices/Todo/TodoSlice';

export const useTodo = () => {
  const getTodo = () => console.log('getTodo');

  const putTodo = (id: string, payload: Partial<Todo>) =>
    console.log('putTodo', { id, payload });

  const deleteTodo = (id: string) => console.log('delete todo', id);

  const postTodo = (payload: Todo) => console.log('postTodo', payload);

  return { getTodo, putTodo, deleteTodo, postTodo };
};
