import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/pro-duotone-svg-icons';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { actionModal } from '../../../store/slices/Todo/TodoSlice';

export const Modal = () => {
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
                <div>
                  <p>Test</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
