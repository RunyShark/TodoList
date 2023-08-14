import { createSlice } from '@reduxjs/toolkit';
import {
  dataCompleted,
  dataInProgress,
  dataPending,
  dataTodoList,
} from './data';
// import type { PayloadAction } from '@reduxjs/toolkit';

export type Col = 'pending' | 'completed' | 'inProgress';

export interface TodoState {
  todoList: Todo[] | [];
  cols: Cols;
  httpControl: HttpControl;
}

interface Cols {
  pending: Todo[] | [];
  completed: Todo[] | [];
  inProgress: Todo[] | [];
}

export interface Todo {
  id: string;
  title: string;
  description: string;
  col: Col;
}

interface HttpControl {
  isLoading: boolean;
  isError: Error | null;
}

interface Error {
  status: string;
  message: string;
}

const initialState: TodoState = {
  todoList: dataTodoList,
  cols: {
    pending: dataPending,
    completed: dataInProgress,
    inProgress: dataCompleted,
  },
  httpControl: {
    isLoading: false,
    isError: null,
  },
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodoList() {},
  },
});

// Action creators are generated for each case reducer function
export const { getTodoList } = TodoSlice.actions;

export default TodoSlice.reducer;
