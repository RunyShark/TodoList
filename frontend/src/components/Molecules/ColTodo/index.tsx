import { FC } from 'react';
import { TodoItem } from '../..';
import { Todo } from '../../../store/slices/Todo/TodoSlice';
interface ColTodo {
  title: string;
  todo: Todo[];
}

export const ColTodo: FC<ColTodo> = ({ title, todo }) => (
  <div className="todoSection__col">
    <h4>{title}</h4>
    <div className="todoSection__containerTodo">
      {todo.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  </div>
);
