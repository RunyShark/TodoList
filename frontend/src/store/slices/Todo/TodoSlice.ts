import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  dataCompleted,
  dataInProgress,
  dataPending,
  dataTodoList,
} from './data';
import { Drop } from './action';
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
    inProgress: dataInProgress,
    completed: dataCompleted,
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
    accommodateTasks(state) {
      state.cols = {
        completed: state.todoList.filter((todo) => todo.col === 'completed'),
        pending: state.todoList.filter((todo) => todo.col === 'pending'),
        inProgress: state.todoList.filter((todo) => todo.col === 'inProgress'),
      };
    },
    statusChangeTodo(state, { payload: { item, col } }: PayloadAction<Drop>) {
      state.todoList = state.todoList.map((todo) => {
        if (todo.id === item) {
          todo = {
            ...todo,
            col,
          };
        }
        return todo;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTodoList, statusChangeTodo, accommodateTasks } =
  TodoSlice.actions;

export default TodoSlice.reducer;
