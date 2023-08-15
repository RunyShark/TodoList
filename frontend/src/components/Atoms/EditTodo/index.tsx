import { FC } from 'react';
import { FormTodo, InitialFormSState } from '../..';

interface EditTodo {
  handelCancel: () => void;
  handelAccept: () => void;
  InitialFormState: InitialFormSState;
}

export const EditTodo: FC<EditTodo> = ({ InitialFormState }) => (
  <FormTodo
    formTitle="Puedes editar la tarea seleccionada"
    formState={InitialFormState}
    editTodo
  />
);
