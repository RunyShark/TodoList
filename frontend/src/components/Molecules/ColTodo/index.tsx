import { FC } from 'react';
import { TodoItem } from '../..';
import { Col, Todo } from '../../../store/slices/Todo/TodoSlice';
import { DragEvent, dragAndDrop } from '../../../service';
interface ColTodo {
  title: string;
  todo: Todo[];
  col: Col;
}

export const ColTodo: FC<ColTodo> = ({ title, todo, col }) => {
  const onDrop = (event: DragEvent, col: Col) => {
    const item = dragAndDrop.onDrop(event);
    console.log({ event, col, item });
  };
  return (
    <div className="todoSection__col">
      <h4>{title}</h4>
      <div
        className="todoSection__containerTodo"
        onDragOver={dragAndDrop.onDragOver}
        onDrop={(event) => onDrop(event, col)}
      >
        {todo.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};
