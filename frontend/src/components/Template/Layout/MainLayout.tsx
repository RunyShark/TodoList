import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => (
  <div className="spacing">{children}</div>
);
