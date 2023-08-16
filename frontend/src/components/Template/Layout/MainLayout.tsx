import { FC, useEffect } from 'react';
import { Children } from '../../../interfaces';
import { Button, Footer, FormTodo, Modal, Navbar } from '../..';
import { useModalControl } from '../../../hooks';
import { useAppSelector } from '../../../store';
import { Plus } from '../..';

interface MainLayout {
  children: Children;
}

export const MainLayout: FC<MainLayout> = ({ children }) => {
  const {
    todo: {
      controlClient: { isOpenModal },
    },
    theme: {
      isDark,
      colorActive,
      primaryColor: { secondary },
    },
  } = useAppSelector((state) => state);

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
          iconEnd={
            <Plus
              onClick={closeModal}
              className="mainLayout__icon"
              colorActive={(!isDark && colorActive) || null}
            />
          }
          onClick={openModal}
          backgroundColor={secondary}
        />
      </div>
      <Modal open={isModalOpen} closeModal={closeModal}>
        <FormTodo />
      </Modal>
      <Footer />
    </div>
  );
};
