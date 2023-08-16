import { FC } from 'react';
import { Button } from '../..';

interface DeleteTodo {
  handelCancel: () => void;
  handelAccept: () => void;
}

interface IDeleteTodoData {
  title: string;
  info: string;
}

const deleteTodoData: IDeleteTodoData = {
  title: '¿Estás seguro de que deseas eliminar la tarea?',
  info: ` Esta acción eliminará la tarea de forma permanente y no se podrá recuperar. Por favor, revisa con cuidado antes de confirmar. Si no deseas eliminarla, puedes salir sin hacer cambios.`,
};

export const DeleteTodo: FC<DeleteTodo> = ({ handelAccept, handelCancel }) => (
  <div className="deleteTodo">
    <div>
      <h4>{deleteTodoData.title}</h4>
      <p>{deleteTodoData.info}</p>
    </div>

    <div className="deleteTodo__containerButtons">
      <Button
        onClick={handelCancel}
        width="100%"
        className="deleteTodo__button deleteTodo__button--cancel"
      >
        Cancelar
      </Button>
      <Button
        onClick={handelAccept}
        width="100%"
        className="deleteTodo__button deleteTodo__button--accept"
      >
        Aceptar
      </Button>
    </div>
  </div>
);
