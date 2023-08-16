import { useEffect } from 'react';
import { Header, MainLayout, TodoSection } from './components';
import { useQueryGetTodo } from './hooks/useQueryGetTodo';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  accommodateTasks,
  hydrateTodoList,
  isLoading,
} from './store/slices/Todo/TodoSlice';
import { themeService } from './service';
import { seTheme } from './store/slices/Theme/ThemeSlice';

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

  //Cada responsabilidad debe ser manejada por un useEffect individual, tal como es recomendado por el equipo de React.
  useEffect(() => {
    console.log('query.data1', query.data);
    if (query.data) {
      console.log('query.data2', query.data);
      dispatch(isLoading(false));
      dispatch(hydrateTodoList(query?.data || []));
      dispatch(accommodateTasks());
    } else {
      dispatch(isLoading(true));
    }
  }, [query.data]);

  //set theme
  useEffect(() => {
    themeService.init();
  }, []);

  useEffect(() => {
    dispatch(seTheme(themeService.getTheme));
  }, []);

  return (
    <MainLayout>
      {httpControlIsLoading ? (
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
