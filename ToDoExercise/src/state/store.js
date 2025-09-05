import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import listHistoryReducer from './listHistorySlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        listHistory: listHistoryReducer
    }
});

export default store;