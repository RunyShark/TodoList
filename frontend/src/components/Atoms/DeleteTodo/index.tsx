import { FC } from 'react';
import { Button } from '../..';

interface DeleteTodo {
  handelCancel: () => void;
  handelAccept: () => void;
}

export const DeleteTodo: FC<DeleteTodo> = ({ handelAccept, handelCancel }) => {
  return (
    <div>
      <h4>Estas seguro que deseas borrar la tarea ?</h4>
      <div>
        <Button onClick={handelCancel}>Cancelar</Button>
        <Button onClick={handelAccept}>Aceptar</Button>
      </div>
    </div>
  );
};
