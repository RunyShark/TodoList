import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Footer, Navbar } from '../..';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => (
  <div>
    <Navbar />
    <div className="spacing mainLayout">{children}</div>
    <Footer />
  </div>
);
