import { useQueryClient } from '@tanstack/react-query';
import { Endpoint, HTTP_METHOD, apiService } from '../api';
import { Todo } from '../store/slices/Todo/TodoSlice';
import { CACHE_KEY } from '.';

export const useTodo = () => {
  const queryClient = useQueryClient();
  const putTodo = async (_id: string, payload: Partial<Todo>) => {
    await apiService.https({
      type: HTTP_METHOD.PUT,
      endpoint: `${Endpoint.TODO}/${_id}`,
      payload,
    });
    queryClient.invalidateQueries({ queryKey: [CACHE_KEY.TODO] });
  };

  const deleteTodo = async (_id: string) => {
    await apiService.https({
      type: HTTP_METHOD.DELETE,
      endpoint: `${Endpoint.TODO}/${_id}`,
    });
    queryClient.invalidateQueries({ queryKey: [CACHE_KEY.TODO] });
  };

  const postTodo = async (payload: Omit<Todo, '_id'>) => {
    await apiService.https({
      type: HTTP_METHOD.POST,
      endpoint: Endpoint.TODO,
      payload,
    });
    queryClient.invalidateQueries({ queryKey: [CACHE_KEY.TODO] });
  };

  return { putTodo, deleteTodo, postTodo };
};
