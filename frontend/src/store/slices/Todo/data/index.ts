import { Todo } from '../TodoSlice';

export const dataTodoList: Todo[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Test description',
    col: 'pending',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Test description',
    col: 'inProgress',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Test description',
    col: 'completed',
  },
  {
    id: '4',
    title: 'Task 4',
    description: 'Test description',
    col: 'inProgress',
  },
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
