import { FC } from 'react';
import { Todo } from '../../../store/slices/Todo/TodoSlice';

export const TodoItem: FC<Todo> = ({ title, description }) => (
  <div className="todoSection__todo" draggable>
    <strong>{title}</strong>
    <p>{description}</p>
  </div>
);
