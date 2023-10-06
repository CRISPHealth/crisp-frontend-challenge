import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  past: [],
  tasks: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (!action.payload?.length) return;
      state.past = [...state.past, [...state.tasks]];
      state.tasks.push({
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
        completedAt: null,
      });
    },
    editTask: (state, action) => {
      state.past = [...state.past, [...state.tasks]];
      state.tasks[action.payload.index] = {
        ...state.tasks[action.payload.index],
        text: action.payload.text,
      };
    },
    deleteTask: (state, action) => {
      state.past = [...state.past, [...state.tasks]];
      state.tasks.splice(action.payload, 1);
    },
    completeTask: (state, action) => {
      state.past = [...state.past, [...state.tasks]];
      state.tasks[action.payload] = {
        ...state.tasks[action.payload],
        completed: true,
        completedAt: Date.now(),
      };
    },
    undo: (state) => {
      if (!state.past.length) return;

      const newPresent = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, state.past.length - 1);

      state.tasks = [...newPresent];
      state.past = newPast;
    },
  },
});

export const { addTask, editTask, deleteTask, completeTask, undo } =
  todoSlice.actions;

export const selectTasks = (state) => state.todo.tasks;

export const selectCompletedTasks = (state) =>
  state.todo.tasks.filter((task) => task.completed);

export const selectOpenedTasks = (state) =>
  state.todo.tasks.filter((task) => !task.completed);

export default todoSlice.reducer;
