import { ColTodo } from '../..';
import { useAppSelector } from '../../../store/hooks';

export const TodoSection = () => {
  const {
    cols: { completed, inProgress, pending },
  } = useAppSelector((state) => state.todo);

  return (
    <section>
      <div className="todoSection">
        <ColTodo todo={pending} title="Tareas por hacer" />
        <ColTodo todo={inProgress} title="Tareas en progreso" />
        <ColTodo todo={completed} title="Tareas realizadas" />
      </div>
    </section>
  );
};
