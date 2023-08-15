import { Endpoint, apiService } from '../api';
import { useAppDispatch } from '../store/hooks';
import {
  Todo,
  accommodateTasks,
  hydrateTodoList,
} from '../store/slices/Todo/TodoSlice';

export const useTodo = () => {
  const dispatch = useAppDispatch();

  const getTodo = async () => {
    const todos = await apiService.https({
      endpoint: Endpoint.TODO,
    });
    dispatch(hydrateTodoList(todos?.data || []));
    dispatch(accommodateTasks());
  };

  const putTodo = async (_id: string, payload: Partial<Todo>) =>
    console.log('putTodo', { _id, payload });

  const deleteTodo = async (_id: string) => console.log('delete todo', _id);

  const postTodo = async (payload: Omit<Todo, '_id'>) =>
    console.log('postTodo', payload);

  return { getTodo, putTodo, deleteTodo, postTodo };
};
