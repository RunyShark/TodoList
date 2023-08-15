export interface Todo {
  title: string;
  description: string;
  col: Col;
}

export type Col = 'pending' | 'completed' | 'inProgress';
