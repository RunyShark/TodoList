import { Endpoint, HTTP_METHOD, apiService } from '../api';
import { useAppDispatch } from '../store/hooks';
import {
  Todo,
  accommodateTasks,
  hydrateTodoList,
} from '../store/slices/Todo/TodoSlice';

export const useTodo = () => {
  const dispatch = useAppDispatch();

  const getTodo = async () => {
    const todo = await apiService.https({
      endpoint: Endpoint.TODO,
    });
    dispatch(hydrateTodoList(todo?.data || []));
    dispatch(accommodateTasks());
  };

  const putTodo = async (_id: string, payload: Partial<Todo>) => {
    await apiService.https({
      type: HTTP_METHOD.PUT,
      endpoint: `${Endpoint.TODO}/${_id}`,
      payload,
    });
    getTodo();
  };

  const deleteTodo = async (_id: string) => {
    await apiService.https({
      type: HTTP_METHOD.DELETE,
      endpoint: `${Endpoint.TODO}/${_id}`,
    });
    getTodo();
  };

  const postTodo = async (payload: Omit<Todo, '_id'>) =>
    console.log('postTodo', payload);

  return { getTodo, putTodo, deleteTodo, postTodo };
};
