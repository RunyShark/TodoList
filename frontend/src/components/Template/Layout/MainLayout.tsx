import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Button, Footer, Navbar } from '../..';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <Navbar />
    <div className="spacing mainLayout">{children}</div>
    <Button className="mainLayout__addTodo">AdTodo btn</Button>
    <Footer />
  </div>
);
