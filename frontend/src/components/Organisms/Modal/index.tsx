import { FC } from 'react';
import { Children } from '../../../interfaces/interfaces';
interface IModal {
  children: Children;
  open: boolean;
  closeModal: () => void;
}
//closeModal
export const Modal: FC<IModal> = ({ children, open }) => {
  return (
    <>
      {open && (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__children">
              <div className="modal__containerElement">
                <p>icon</p>
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
