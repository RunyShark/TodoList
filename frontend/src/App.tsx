import { useEffect } from 'react';
import { Header, MainLayout, TodoSection } from './components';
import { useQueryGetTodo } from './hooks/useQueryGetTodo';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  accommodateTasks,
  hydrateTodoList,
  isLoading,
} from './store/slices/Todo/TodoSlice';

interface DataApp {
  header: Header;
}

const { header }: DataApp = {
  header: {
    title: 'Todo list',
    subtitle: 'Como funciona',
  },
};

export const App = () => {
  const {
    httpControl: { isLoading: httpControlIsLoading },
  } = useAppSelector(({ todo }) => todo);

  const dispatch = useAppDispatch();
  const { query } = useQueryGetTodo();
  useEffect(() => {
    if (query.data) {
      dispatch(hydrateTodoList(query?.data || []));
      dispatch(accommodateTasks());
    } else {
      dispatch(isLoading(true));
    }
  }, [query.data]);

  return (
    <MainLayout>
      {false ? (
        <div className="loading" />
      ) : (
        <>
          <Header {...header} />
          <TodoSection />
        </>
      )}
    </MainLayout>
  );
};
