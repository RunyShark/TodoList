import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
  Col,
  Todo,
  accommodateTasks,
  actionModal,
} from '../../../store/slices/Todo/TodoSlice';
import { Button } from '../..';
import { useAppDispatch } from '../../../store/hooks';
import { useTodo } from '../../../hooks';

export type InitialFormSState = Partial<Todo>;

const initialFormState: InitialFormSState = {
  col: 'pending',
  description: '',
  title: '',
};

interface IFormTodo {
  formState: InitialFormSState;
  formTitle: string;
  editTodo: boolean;
}

export const FormTodo: FC<Partial<IFormTodo>> = ({
  formState = initialFormState,
  formTitle = 'Crea una nueva tarea',
  editTodo = false,
}) => {
  const { postTodo, putTodo } = useTodo();
  const dispatch = useAppDispatch();
  const [isError, setIsError] = useState({
    error: false,
    message: 'Todo los campos son necesario',
  });
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [{ title, description, col, _id }, setAddTodo] =
    useState<InitialFormSState>(formState);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setAddTodo((state) => ({
      ...state,
      [name]: value,
    }));

  const saveTodo = async () => {
    if (!title || !description || !col) {
      setIsError({
        ...isError,
        error: true,
      });
      return;
    }
    try {
      await postTodo({ title, description, col });
      dispatch(accommodateTasks());
      dispatch(actionModal());
      setAddTodo(initialFormState);
      setIsError({
        ...isError,
        error: false,
      });
    } catch (error) {
      console.log('Error algo salio mal');
    }
  };

  const updateTodo = async () => {
    if (!title || !description || !col || !_id) {
      setIsError({
        message: 'Para actualizar son necesarios todos los cambios',
        error: true,
      });
      return;
    }
    await putTodo(_id, {
      title,
      description,
      col,
    });
    dispatch(accommodateTasks());
    dispatch(actionModal());
    setAddTodo(initialFormState);
    setIsError({
      ...isError,
      error: false,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!editTodo) {
      await saveTodo();
    } else {
      await updateTodo();
    }
  };

  return (
    <>
      <h3>{formTitle}</h3>
      <h5
        className={`formTodo__messageError ${
          (isError.error && 'formTodo__messageError--active') || ''
        }`.trim()}
      >
        {isError.message}
      </h5>
      <form className="formTodo" onSubmit={handleSubmit}>
        <div className="formTodo__container">
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            className="formTodo__input"
            onChange={handleChange}
            placeholder="Titulo"
          />
          <FontAwesomeIcon
            icon={faArrowDown}
            className="formTodo__icon"
            size="lg"
          />
        </div>
        <div className="formTodo__container">
          <input
            type="text"
            name="description"
            value={description}
            id="description"
            className="formTodo__input"
            onChange={handleChange}
            placeholder="Description"
          />
          {/* <label>description</label> */}
          <FontAwesomeIcon
            icon={faArrowDown}
            className="formTodo__icon"
            size="lg"
          />
        </div>
        <div className="formTodo__container formTodo__container--select">
          <label>Estado inicial de la tarea</label>
          <div className="formTodo__container ">
            <select
              name="col"
              value={col}
              id="status"
              className="formTodo__select"
              onClick={() => setIsOpenSelect(!isOpenSelect)}
              onChange={(e) =>
                setAddTodo((state) => ({
                  ...state,
                  col: e.target.value as Col,
                }))
              }
            >
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              <option value="inProgress">In Progress</option>
            </select>
            <FontAwesomeIcon
              icon={faArrowDown}
              className={`formTodo__icon ${
                isOpenSelect ? 'formTodo__icon--open' : 'formTodo__icon--close'
              }`}
              size="lg"
            />
          </div>
        </div>

        <Button
          className="formTodo__container"
          style={{ background: 'var(--AddButtonNormal)' }}
          color="#fff"
        >
          Agregar
        </Button>
      </form>
    </>
  );
};
