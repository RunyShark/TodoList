import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Button, Footer, FormTodo, Modal, Navbar } from '../..';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-duotone-svg-icons';
import { useAppDispatch } from '../../../store/hooks';
import { actionModal } from '../../../store/slices/Todo/TodoSlice';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  const dispatch = useAppDispatch();
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div className="spacing mainLayout">
        {children}{' '}
        <Button
          className="mainLayout__addTodo "
          iconEnd={<FontAwesomeIcon icon={faPlus} size="xl" />}
          onClick={() => dispatch(actionModal())}
        />
      </div>
      <Modal>
        <FormTodo />
      </Modal>
      <Footer />
    </div>
  );
};
