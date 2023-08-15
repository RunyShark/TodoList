import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { Children } from '../../../interfaces/interfaces';
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
                <FontAwesomeIcon
                  icon={faX}
                  className="modal__icon"
                  size="2x"
                  onClick={closeModal}
                />
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
