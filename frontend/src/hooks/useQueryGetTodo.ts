import { useQuery } from '@tanstack/react-query';
import { Todo } from '../store/slices/Todo/TodoSlice';
import { Endpoint, apiService } from '../api';

export enum CACHE_KEY {
  TODO = 'todo',
}

const getTodo = async (): Promise<Todo[]> => {
  const todo = await apiService.https({
    endpoint: Endpoint.TODO,
  });
  return todo?.data;
};

export const useQueryGetTodo = () => {
  const query = useQuery([CACHE_KEY.TODO], getTodo, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return { query };
};
