import { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubtitles, faArrowDown } from '@fortawesome/pro-duotone-svg-icons';
import {
  Col,
  Todo,
  accommodateTasks,
  actionModal,
  addTodo,
} from '../../../store/slices/Todo/TodoSlice';
import { Button } from '../..';
import { useAppDispatch } from '../../../store/hooks';
import { helperService } from '../../../service';
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
  const [isError, setIsError] = useState(false);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [{ title, description, col }, setAddTodo] =
    useState<InitialFormSState>(formState);

  useEffect(() => {
    setAddTodo(formState);
  }, [formState]);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setAddTodo((state) => ({
      ...state,
      [name]: value,
    }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description || !col) {
      setIsError(true);
      return;
    }
    setIsError(false);

    if (!editTodo) {
      dispatch(addTodo({ title, description, col, id: helperService.uuid() }));
      await postTodo({ title, description, col, id: helperService.uuid() });
      dispatch(accommodateTasks());
      dispatch(actionModal()); //fix
      setAddTodo(initialFormState);
    } else {
      //edit
      dispatch(addTodo({ title, description, col, id: helperService.uuid() }));
      await putTodo(helperService.uuid(), {
        title,
        description,
        col,
        id: helperService.uuid(),
      });
      dispatch(accommodateTasks());
      dispatch(actionModal());
      setAddTodo(initialFormState);
    }
  };

  return (
    <>
      <h3>{formTitle}</h3>
      <h5
        className={`formTodo__messageError ${
          (isError && 'formTodo__messageError--active') || ''
        }`.trim()}
      >
        Todo los campos son necesario
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
            icon={faSubtitles}
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
            icon={faSubtitles}
            className="formTodo__icon"
            size="lg"
          />
        </div>
        <div className="formTodo__container formTodo__container--select">
          <label>Estado inicial de la tarea</label>
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
