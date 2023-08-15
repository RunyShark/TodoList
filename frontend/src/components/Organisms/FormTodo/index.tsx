import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileSignature,
  faSubtitles,
} from '@fortawesome/pro-duotone-svg-icons';
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

  return (
    <form className="formTodo">
      <div>
        <input type="text" name={title} value={title} id="title" />
        <label>title</label>
        <FontAwesomeIcon icon={faFileSignature} />
      </div>
      <div>
        <input
          type="text"
          name={description}
          value={description}
          id="description"
        />
        <label>description</label>
        <FontAwesomeIcon icon={faSubtitles} />
      </div>

      <select name="status" id="status">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="inProgress">In Progress</option>
      </select>
      <Button>Agregar</Button>
    </form>
  );
};
