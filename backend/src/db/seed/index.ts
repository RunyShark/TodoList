import { helperService } from '../../helper';
import { Todo } from '../../interfaces';

interface SeedData {
  entries: Todo[];
}

export const seedData: SeedData = {
  entries: [
    {
      id: helperService.uuid(),
      title: 'Task 1',
      description: 'Test description',
      col: 'completed',
    },
    {
      id: helperService.uuid(),
      title: 'Task 2',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      id: helperService.uuid(),
      title: 'Task 3',
      description: 'Test description',
      col: 'completed',
    },
    {
      id: helperService.uuid(),
      title: 'Task 4',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      id: helperService.uuid(),
      title: 'Task 5',
      description: 'Test description',
      col: 'inProgress',
    },
    {
      id: helperService.uuid(),
      title: 'Task 6',
      description: 'Test description',
      col: 'inProgress',
    },
  ],
};
