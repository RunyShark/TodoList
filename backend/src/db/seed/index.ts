import { helperService } from '../../helper';
import { Todo } from '../../interfaces';

interface SeedData {
  entries: Todo[];
}

export const seedData: SeedData = {
  entries: [
    {
      title: 'Task 1',
      description: 'Test description',
      col: 'completed',
    },
    {
      title: 'Task 2',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      title: 'Task 3',
      description: 'Test description',
      col: 'completed',
    },
    {
      title: 'Task 4',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      title: 'Task 5',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      title: 'Task 6',
      description: 'Test description',
      col: 'inProgress',
    },
  ],
};
