import { Header, MainLayout, TodoSection } from './components';

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
  return (
    <MainLayout>
      <Header {...header} />
      <TodoSection />
    </MainLayout>
  );
};
