import { FC } from 'react';
import { TodoItem } from '../..';
import {
  Col,
  Todo,
  accommodateTasks,
  statusChangeTodo,
} from '../../../store/slices/Todo/TodoSlice';
import { DragEvent, dragAndDrop } from '../../../service';
import { useAppDispatch } from '../../../store/hooks';
import { useTodo } from '../../../hooks';
interface ColTodo {
  title: string;
  todo: Todo[];
  col: Col;
}

export const ColTodo: FC<ColTodo> = ({ title, todo, col }) => {
  const { putTodo } = useTodo();
  const dispatch = useAppDispatch();
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
      <div className="todoSection__containerTodo">
        {todo.map((todo) => (
          <TodoItem key={todo._id} {...todo} />
        ))}
      </div>
    </div>
  );
};
