import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import { Todo } from '../../../store/slices/Todo/TodoSlice';
import { dragAndDrop } from '../../../service';
import { DeleteTodo, Modal } from '../..';
import { useModalControl, useTodo } from '../../../hooks';
import { EditTodo } from '../../Atoms/EditTodo';

const initialStateAction = {
  edit: false,
  delete: false,
};

export const TodoItem: FC<Todo> = ({ title, description, _id, col }) => {
  const { closeModal, isModalOpen, openModal } = useModalControl();
  const [action, setAction] = useState(initialStateAction);
  const { deleteTodo } = useTodo();

  const handelAccept = () => (
    deleteTodo(_id), closeModal(), setAction(initialStateAction)
  );
  const handelCancel = () => (closeModal(), setAction(initialStateAction));

  const handelEdit = () => {
    setAction({ ...action, edit: true });
    openModal();
  };

  const handelDelete = () => {
    setAction({ ...action, delete: true });
    openModal();
  };
  return (
    <div
      className="todoSection__todo"
      draggable
      onDragStart={(event) => dragAndDrop.onDragStart(event, _id)}
    >
      <FontAwesomeIcon
        icon={faX}
        className="modal__icon"
        size="2x"
        onClick={handelDelete}
      />
      <FontAwesomeIcon
        icon={faSquarePen}
        className="modal__icon"
        onClick={handelEdit}
      />
      <strong>{title}</strong>
      <p>{description}</p>
      <Modal
        open={isModalOpen}
        closeModal={() => (closeModal(), setAction(initialStateAction))}
      >
        {action.delete && (
          <DeleteTodo handelAccept={handelAccept} handelCancel={handelCancel} />
        )}
        {action.edit && (
          <EditTodo
            InitialFormState={{ title, description, _id, col }}
            handelAccept={handelAccept}
            handelCancel={handelCancel}
          />
        )}
      </Modal>
    </div>
  );
};
