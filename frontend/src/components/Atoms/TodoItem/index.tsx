import { FC } from 'react';
import { Todo } from '../../../store/slices/Todo/TodoSlice';
import { dragAndDrop } from '../../../service';

export const TodoItem: FC<Todo> = ({ title, description, id }) => (
  <div
    className="todoSection__todo"
    draggable
    onDragStart={(evt) => dragAndDrop.onDragStart(evt, id)}
  >
    <strong>{title}</strong>
    <p>{description}</p>
  </div>
);
