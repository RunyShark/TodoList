import { useEffect } from 'react';
import { Header, MainLayout, TodoSection } from './components';
import { useQueryGetTodo } from './hooks/useQueryGetTodo';
import { useAppDispatch } from './store/hooks';
import {
  accommodateTasks,
  hydrateTodoList,
} from './store/slices/Todo/TodoSlice';

interface DataApp {
  header: Header;
}

const { header }: DataApp = {
  header: {
    title: 'Todo',
    subtitle: 'Test',
  },
};

export const App = () => {
  const dispatch = useAppDispatch();
  const { query } = useQueryGetTodo();
  useEffect(() => {
    if (query.data) {
      dispatch(hydrateTodoList(query?.data || []));
      dispatch(accommodateTasks());
    }
  }, [query.data]);

  return (
    <MainLayout>
      <Header {...header} />
      <TodoSection />
    </MainLayout>
  );
};
