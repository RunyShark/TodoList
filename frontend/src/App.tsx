import { useEffect } from 'react';
import { Header, MainLayout, TodoSection } from './components';
import { useTodo } from './hooks';

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
  const { getTodo } = useTodo();

  useEffect(() => {
    (async () => getTodo())();
  }, []);

  return (
    <MainLayout>
      <Header {...header} />
      <TodoSection />
    </MainLayout>
  );
};
