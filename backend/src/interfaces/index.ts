export interface Todo {
  id: string;
  title: string;
  description: string;
  col: Col;
}

export type Col = 'pending' | 'completed' | 'inProgress';
