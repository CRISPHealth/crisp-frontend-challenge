import { createSlice } from "@reduxjs/toolkit";

const initialPresent = [
  {
    id: 1,
    title: "todo 1",
    category: "work",
    duration: null,
    complete: false
  },
  {
    id: 2,
    title: "todo 2",
    category: "school",
    duration: null,
    complete: false
  },
  {
    id: 3,
    title: "todo 3",
    category: "personal",
    duration: null,
    complete: false
  }
];

const initialState = {
  past: [],
  present: initialPresent,
  future: []
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        category:action.payload.category,
        duration: null,
        complete: false
      };
      return {
        past: [...state.past, state.present],
        present: [...state.present, newTodo],
        future: []
      };
    },
    editTodo: (state, action) => {
      const updatedTodos = state.present.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
      return {
        past: [...state.past, state.present],
        present: updatedTodos,
        future: []
      };
    },
    completeTodo: (state, action) => {
      const updatedTodos = state.present.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete, duration:action.payload.duration }
          : todo
      );
      return {
        past: [...state.past, state.present],
        present: updatedTodos,
        future: []
      };
    },
    deleteTodo: (state, action) => {
      const updatedTodos = state.present.filter(
        (todo) => todo.id !== action.payload.id
      );
      return {
        past: [...state.past, state.present],
        present: updatedTodos,
        future: []
      };
    },
    undoTodo: (state) => {
      if (state.past.length === 0) {
        return state;
      }
      const [newPresent, ...newPast] = state.past.reverse();
      const newFuture = [state.present, ...state.future];

      state.past = newPast;
      state.present = newPresent;
      state.future = newFuture;
    }
  }
});

export const {
  createTodo,
  editTodo,
  completeTodo,
  deleteTodo,
  undoTodo
} = todoSlice.actions;

export default todoSlice.reducer;
