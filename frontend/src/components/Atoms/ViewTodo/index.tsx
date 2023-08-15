import { FC } from 'react';
import { EditTodo } from '..';

export const ViewTodo: FC<EditTodo> = ({
  InitialFormState: { col, _id, description, title },
}) => (
  <div className="viewTodo">
    <p className="viewTodo__campo">
      ID: <span className="viewTodo__campo--value">{_id}</span>
    </p>
    <p className="viewTodo__campo">
      Titulo: <span className="viewTodo__campo--value">{title}</span>
    </p>
    <p className="viewTodo__campo">
      description: <span className="viewTodo__campo--value">{description}</span>
    </p>
    <p className="viewTodo__campo">
      estado: <span className="viewTodo__campo--value">{col}</span>
    </p>
  </div>
);
