import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
        const task = state.find(task => task.id === action.payload);
        task.completed = !task.completed;
        if (task.completed) { 
          task.completionDate = new Date().toISOString().split('T')[0]; // Store the current date as completion date
        } else {
          task.completionDate = null;
        }
      },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.text = action.payload.text;
        task.category = action.payload.category;
        task.dueDate = action.payload.dueDate;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTaskCompletion, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
