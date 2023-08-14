import { helperService } from '../../../../service/HelperService';
import { Todo } from '../TodoSlice';

export const dataTodoList: Todo[] = [
  {
    id: helperService.uuid(),
    title: 'Task 1',
    description: 'Test description',
    col: 'pending',
  },
  {
    id: helperService.uuid(),
    title: 'Task 2',
    description: 'Test description',
    col: 'pending',
  },
  // {
  //   id: helperService.uuid(),
  //   title: 'Task 3',
  //   description: 'Test description',
  //   col: 'completed',
  // },
  // {
  //   id: helperService.uuid(),
  //   title: 'Task 4',
  //   description: 'Test description',
  //   col: 'inProgress',
  // },
  // {
  //   id: helperService.uuid(),
  //   title: 'Task 5',
  //   description: 'Test description',
  //   col: 'inProgress',
  // },
];

export const dataPending: Todo[] = dataTodoList.filter(
  (todo) => todo.col === 'pending'
);

export const dataInProgress: Todo[] = dataTodoList.filter(
  (todo) => todo.col === 'inProgress'
);

export const dataCompleted: Todo[] = dataTodoList.filter(
  (todo) => todo.col === 'completed'
);
