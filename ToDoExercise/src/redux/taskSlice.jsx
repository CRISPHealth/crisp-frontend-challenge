import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from '@reduxjs/toolkit';

const defaultState = {
  previousTasks: [],
  currentTasks: [],
};

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: defaultState,
  reducers: {
    appendTask: (state, action) => {
        const { taskText, taskCategory } = action.payload;
        if (!taskText?.trim()) return;
        state.previousTasks = [...state.previousTasks, [...state.currentTasks]];
        state.currentTasks.push({
          text: taskText,
          category: taskCategory,
          isDone: false,
          addedOn: Date.now(),
          finishedOn: null,
        });
    },
    modifyTask: (state, action) => {
      state.previousTasks = [...state.previousTasks, [...state.currentTasks]];
      const { taskText, taskCategory } = action.payload;
      state.currentTasks[action.payload.position] = {
        ...state.currentTasks[action.payload.position],
        text: taskText,
        category: taskCategory
      };
    },
    removeTask: (state, action) => {
      state.previousTasks = [...state.previousTasks, [...state.currentTasks]];
      state.currentTasks.splice(action.payload, 1);
    },
    markTaskAsComplete: (state, action) => {
      state.previousTasks = [...state.previousTasks, [...state.currentTasks]];
      state.currentTasks[action.payload] = {
        ...state.currentTasks[action.payload],
        isDone: true,
        finishedOn: Date.now(),
      };
    },
    revertAction: (state) => {
      if (!state.previousTasks.length) return;

      const latestState = state.previousTasks[state.previousTasks.length - 1];
      const updatedPreviousTasks = state.previousTasks.slice(0, state.previousTasks.length - 1);

      state.currentTasks = [...latestState];
      state.previousTasks = updatedPreviousTasks;
    },
  },
});

export const { appendTask, modifyTask, removeTask, markTaskAsComplete, revertAction } =
  taskSlice.actions;

  export const fetchTasks = (state) => state.store.currentTasks;

  export const fetchCompletedTasks = createSelector(
    [fetchTasks],
    (tasks) => tasks.filter((taskItem) => taskItem.isDone)
  );
  
  export const fetchPendingTasks = createSelector(
    [fetchTasks],
    (tasks) => tasks.filter((taskItem) => !taskItem.isDone)
  );

export default taskSlice.reducer;
