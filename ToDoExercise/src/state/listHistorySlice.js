import { createSlice } from '@reduxjs/toolkit';

// List History State Objects
// Past array   :   Array of past list states. Current list state reverts to last object in array if 'undo' action is triggered.
// Future array :   Array of list states that have been 'undone'. Current list state reverts to last object in array if 'redo' action is triggered. 
//                  Array of future states is cleared when user adds a new task to the list.
const listHistorySlice = createSlice({
    name: 'listHistory',
    initialState: {
        past: [],
        future: []
    },
    reducers: {
        addHistory(state, action) {
            state.past.push(action.payload);
            // Clear future array (nothing to 'redo' if last action was adding a new task)
            state.future = []
        },
        undo(state, action) {
            state.past.pop();
            state.future.push(action.payload);
        },
        redo(state, action) {
            state.future.pop();
            state.past.push(action.payload);
        }
    }
});

export const historyActions = listHistorySlice.actions;

export default listHistorySlice.reducer;