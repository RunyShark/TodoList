import { Header, MainLayout } from './components';

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
    </MainLayout>
  );
};
