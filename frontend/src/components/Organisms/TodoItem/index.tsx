import { FC, useState } from 'react';
import { Todo, useAppSelector } from '../../../store';
import { useModalControl, useTodo } from '../../../hooks';
import { dragAndDrop } from '../../../service';
import { DeleteTodo, Modal, ViewTodo, EditTodo, Edit, Plus } from '../..';

const initialStateAction = {
  edit: false,
  delete: false,
  view: false,
};

// color: rgb(97, 243, 243);
// background-color: rgba(0, 184, 217, 0.16);

export const TodoItem: FC<Todo> = ({ title, description, _id, col }) => {
  const {
    primaryColor: { primary, secondary, tertiary },
  } = useAppSelector(({ theme }) => theme);
  const { closeModal, isModalOpen, openModal } = useModalControl();
  const [action, setAction] = useState(initialStateAction);
  const { deleteTodo } = useTodo();

  const handelAccept = () => {
    deleteTodo(_id);
    closeModal();
    setAction(initialStateAction);
  };
  const handelCancel = () => {
    closeModal();
    setAction(initialStateAction);
  };

  const viewModal = () => {
    setAction({ ...action, view: true });
    openModal();
  };

  const handelEdit = () => {
    setAction({ ...action, edit: true });
    openModal();
  };

  const handelDelete = () => {
    setAction({ ...action, delete: true });
    openModal();
  };

  return (
    <>
      <div
        className="todoSection__todo"
        draggable
        onDragStart={(event) => dragAndDrop.onDragStart(event, _id)}
        onDoubleClick={viewModal}
      >
        <div className="todoSection__actions">
          <span
            className="todoSection__label"
            style={{
              color: col == 'completed' ? primary : tertiary,
              backgroundColor: secondary,
            }}
          >
            {col}
          </span>
          <div className="todoSection__actionsContainer">
            <Edit
              className="modal__icon modal__icon--edit"
              onClick={handelEdit}
            />
            <Plus className="modal__icon--x" onClick={handelDelete} />
          </div>
        </div>

        <h4 className="todoSection__title">{title}</h4>
        <p className="todoSection__text">{description}</p>
      </div>
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
    </>
  );
};
