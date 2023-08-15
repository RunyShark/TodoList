import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Button, Footer, Navbar } from '../..';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-duotone-svg-icons';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <Navbar />
    <div className="spacing mainLayout">
      {children}{' '}
      <Button
        className="mainLayout__addTodo "
        iconEnd={<FontAwesomeIcon icon={faPlus} size="xl" />}
      />
    </div>

    <Footer />
  </div>
);
