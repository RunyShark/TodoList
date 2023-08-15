import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Drop } from './action';

export interface TodoState {
  todoList: Todo[] | [];
  cols: Cols;
  httpControl: HttpControl;
  controlClient: ControlClient;
}

interface ControlClient {
  isOpenModal: boolean;
}

interface Cols {
  pending: Todo[] | [];
  completed: Todo[] | [];
  inProgress: Todo[] | [];
}

export interface Todo {
  _id: string;
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
  todoList: [],
  cols: {
    pending: [],
    inProgress: [],
    completed: [],
  },
  httpControl: {
    isLoading: false,
    isError: null,
  },
  controlClient: {
    isOpenModal: false,
  },
};
export type Col = 'pending' | 'completed' | 'inProgress';

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    hydrateTodoList(state, { payload }: PayloadAction<Todo[]>) {
      state.todoList = payload;
      state.httpControl.isLoading = false;
    },
    accommodateTasks(state) {
      state.cols = {
        completed: state.todoList.filter((todo) => todo.col === 'completed'),
        pending: state.todoList.filter((todo) => todo.col === 'pending'),
        inProgress: state.todoList.filter((todo) => todo.col === 'inProgress'),
      };
    },
    statusChangeTodo(state, { payload: { item, col } }: PayloadAction<Drop>) {
      state.todoList = state.todoList.map((todo) => {
        if (todo._id === item) {
          return {
            ...todo,
            col,
          };
        }
        return todo;
      });
    },
    actionModal(state) {
      state.controlClient.isOpenModal = !state.controlClient.isOpenModal;
    },

    addTodo(state, { payload }: PayloadAction<Todo>) {
      state.todoList = [...state.todoList, payload];
    },

    isLoading(state, { payload }: PayloadAction<boolean>) {
      state.httpControl.isLoading = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  hydrateTodoList,
  statusChangeTodo,
  accommodateTasks,
  actionModal,
  addTodo,
  isLoading,
} = TodoSlice.actions;

export default TodoSlice.reducer;
