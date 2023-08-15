import { FC } from 'react';
import { FormTodo, InitialFormSState } from '../..';

export interface EditTodo {
  InitialFormState: InitialFormSState;
}

export const EditTodo: FC<EditTodo> = ({ InitialFormState }) => (
  <FormTodo
    formTitle="Puedes editar la tarea seleccionada"
    formState={InitialFormState}
    editTodo
  />
);
