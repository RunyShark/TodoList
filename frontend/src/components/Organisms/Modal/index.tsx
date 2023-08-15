import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/pro-duotone-svg-icons';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actionModal } from '../../../store/slices/Todo/TodoSlice';
import { Children } from '../../../interfaces/interfaces';
interface IModal {
  children: Children;
}

export const Modal: FC<IModal> = ({ children }) => {
  const {
    controlClient: { isOpenModal },
  } = useAppSelector(({ todo }) => todo);
  const dispatch = useAppDispatch();

  return (
    <>
      {isOpenModal && (
        <div className="modal">
          <div className="modal__container">
            <div className="modal__children">
              <div className="modal__containerElement">
                <FontAwesomeIcon
                  icon={faX}
                  className="modal__icon"
                  size="2x"
                  onClick={() => dispatch(actionModal())}
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
