import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './taskSlice.jsx';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
