import { ColTodo } from '../..';
import { helperService } from '../../../service';
import { useAppSelector } from '../../../store/hooks';
import { Col, Todo } from '../../../store/slices/Todo/TodoSlice';

interface ColData extends ColTodo {
  id: string;
}

export const TodoSection = () => {
  const {
    cols: { pending, completed, inProgress },
  } = useAppSelector((state) => state.todo);

  const ColData: ColData[] = [
    {
      id: helperService.uuid(),
      col: 'pending',
      title: 'Tareas por hacer',
      todo: pending,
      background: 'var(--coolBackgroundPending)',
    },
    {
      id: helperService.uuid(),
      col: 'inProgress',
      title: 'Tareas en progreso',
      todo: inProgress,
      background: 'var(--coolBackgroundOnprogress)',
    },
    {
      id: helperService.uuid(),
      col: 'completed',
      title: 'Tareas realizadas',
      todo: completed,
      background: 'var(--coolBackgroundComplete)',
    },
  ];

  return (
    <section>
      <div className="todoSection">
        {ColData.map((todo) => (
          <ColTodo key={todo.id} {...todo} />
        ))}
      </div>
    </section>
  );
};
