import { FC, useState } from 'react';
import { Todo } from '../../../store/slices/Todo/TodoSlice';
import { dragAndDrop } from '../../../service';
import { DeleteTodo, Modal, ViewTodo } from '../..';
import { useModalControl, useTodo } from '../../../hooks';
import { EditTodo } from '../../Atoms/EditTodo';

const initialStateAction = {
  edit: false,
  delete: false,
  view: false,
};

export const TodoItem: FC<Todo> = ({ title, description, _id, col }) => {
  const { closeModal, isModalOpen, openModal } = useModalControl();
  const [action, setAction] = useState(initialStateAction);
  const { deleteTodo } = useTodo();

  const handelAccept = () => (
    deleteTodo(_id), closeModal(), setAction(initialStateAction)
  );
  const handelCancel = () => (closeModal(), setAction(initialStateAction));

  const viewModal = () => {
    setAction({ ...action, view: true });
    openModal();
  };

  // const handelEdit = () => {
  //   setAction({ ...action, edit: true });
  //   openModal();
  // };

  // const handelDelete = () => {
  //   setAction({ ...action, delete: true });
  //   openModal();
  // };
  return (
    <div
      className="todoSection__todo"
      draggable
      onDragStart={(event) => dragAndDrop.onDragStart(event, _id)}
      onDoubleClick={viewModal}
    >
      <div className="todoSection__actions">
        {/* <FontAwesomeIcon
          icon={faSquarePen}
          className="modal__icon modal__icon--edit"
          onClick={handelEdit}
        />
        <FontAwesomeIcon
          icon={faX}
          className="modal__icon modal__icon--delete"
          size="2x"
          onClick={handelDelete}
        /> */}
      </div>

      <h5 className="todoSection__title">{title}</h5>
      <p className="todoSection__text">{description}</p>
      <Modal
        open={isModalOpen}
        closeModal={() => (closeModal(), setAction(initialStateAction))}
      >
        {action.view && (
          <ViewTodo InitialFormState={{ title, description, _id, col }} />
        )}

        {action.delete && (
          <DeleteTodo handelAccept={handelAccept} handelCancel={handelCancel} />
        )}
        {action.edit && (
          <EditTodo InitialFormState={{ title, description, _id, col }} />
        )}
      </Modal>
    </div>
  );
};
