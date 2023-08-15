import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
import { Plus } from '../../Atoms/Icons';
interface IModal {
  children: Children;
  open: boolean;
  closeModal: () => void;
}

export const Modal: FC<IModal> = ({ children, open, closeModal }) => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__children">
              <div className="modal__containerElement">
                <Plus onClick={closeModal} className="modal__icon--x" />

                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
