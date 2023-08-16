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
  info: ` Esta acción eliminará permanentemente la tarea. No habrá posibilidad de
  recuperarla. Antes de confirmar, por favor, asegúrate de revisar
  cuidadosamente esta acción. En caso de que no desees proceder con la
  eliminación, puedes salir de esta sección sin realizar cambios.`,
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
