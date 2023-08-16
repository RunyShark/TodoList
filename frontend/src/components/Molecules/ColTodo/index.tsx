import { FC } from 'react';
import { TodoItem } from '../..';
import {
  Col,
  Todo,
  accommodateTasks,
  statusChangeTodo,
  useAppDispatch,
} from '../../../store';
import { DragEvent, dragAndDrop } from '../../../service';
import { useTodo } from '../../../hooks';
export interface ColTodo {
  title: string;
  todo: Todo[];
  col: Col;
  background: string;
}

export const ColTodo: FC<ColTodo> = ({ title, todo, col, background }) => {
  const dispatch = useAppDispatch();
  const { putTodo } = useTodo();

  const onDrop = async (event: DragEvent, col: Col) => {
    const item = dragAndDrop.onDrop(event);
    await putTodo(item, { col });
    dispatch(statusChangeTodo({ col, item }));
    dispatch(accommodateTasks());
  };

  return (
    <div
      className="todoSection__col"
      onDragOver={(evt) => evt.preventDefault()}
      onDrop={(event) => onDrop(event, col)}
    >
      <h4>{title}</h4>
      <div
        className="todoSection__containerTodo"
        style={{
          background,
        }}
      >
        {todo.map((todo) => (
          <TodoItem key={todo._id} {...todo} />
        ))}
      </div>
    </div>
  );
};
