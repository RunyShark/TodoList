import { Todo } from '../store/slices/Todo/TodoSlice';

export const useTodo = () => {
  const getTodo = async () => console.log('getTodo');

  const putTodo = async (id: string, payload: Partial<Todo>) =>
    console.log('putTodo', { id, payload });

  const deleteTodo = async (id: string) => console.log('delete todo', id);

  const postTodo = async (payload: Todo) => console.log('postTodo', payload);

  return { getTodo, putTodo, deleteTodo, postTodo };
};
