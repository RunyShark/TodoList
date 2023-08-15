import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Button, Footer, FormTodo, Modal, Navbar } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/pro-duotone-svg-icons';
import { useModalControl } from '../../../hooks';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  const { closeModal, isModalOpen, openModal } = useModalControl();

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div className="spacing mainLayout">
        {children}{' '}
        <Button
          className="mainLayout__addTodo "
          iconEnd={<FontAwesomeIcon icon={faPlus} size="xl" />}
          onClick={openModal}
        />
      </div>
      <Modal open={isModalOpen} closeModal={closeModal}>
        <FormTodo />
      </Modal>
      <Footer />
    </div>
  );
};
