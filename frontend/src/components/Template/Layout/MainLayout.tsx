import { FC, useEffect } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Button, Footer, FormTodo, Modal, Navbar } from '../..';
import { useModalControl } from '../../../hooks';
import { useAppSelector } from '../../../store/hooks';
import { Plus } from '../../Atoms/Icons';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  const {
    controlClient: { isOpenModal },
  } = useAppSelector(({ todo }) => todo);
  const { closeModal, isModalOpen, openModal } = useModalControl();

  useEffect(() => {
    closeModal();
  }, [isOpenModal]);

  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      <div className="spacing mainLayout">
        {children}
        <Button
          className="mainLayout__addTodo"
          iconEnd={<Plus onClick={closeModal} className="mainLayout__icon" />}
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
