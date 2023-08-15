import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubtitles } from '@fortawesome/pro-duotone-svg-icons';
import { Todo } from '../../../store/slices/Todo/TodoSlice';
import { Button } from '../..';

type InitialFormSState = Partial<Todo>;

const initialFormState: InitialFormSState = {
  col: 'completed',
  description: '',
  title: '',
};

export const FormTodo = () => {
  const [{ title, description }, setAddTodo] =
    useState<InitialFormSState>(initialFormState);

  const handleChange = ({
    target: { value, name },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setAddTodo((state) => ({
      ...state,
      [name]: value,
    }));

  return (
    <form className="formTodo">
      <div className="formTodo__container">
        <input
          type="text"
          name="title"
          value={title}
          id="title"
          className="formTodo__input"
          onChange={handleChange}
        />
        {/* <label>title</label> */}
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
        />
        {/* <label>description</label> */}
        <FontAwesomeIcon
          icon={faSubtitles}
          className="formTodo__icon"
          size="lg"
        />
      </div>

      <select name="status" id="status" className="formTodo__container">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="inProgress">In Progress</option>
      </select>

      <Button className="formTodo__container">Agregar</Button>
    </form>
  );
};
