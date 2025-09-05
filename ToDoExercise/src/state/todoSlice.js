import { createSlice } from '@reduxjs/toolkit';

// ToDo List State contains an array of ToDo objects.
// Each ToDo is made up of:
//  1. description   : description of task.
//  2. startDate     : dateTime task was started/created (This value also acts as list item ID since it will always be unique).
//  3. dueDate       : dateTime task should be completed by (Can be left null by user).
//  4. isComplete    : boolean value indicating if task has been completed.
//  5. completedDate : dateTime task was marked 'isComplete'.

function createToDo(description, dueDate) {
    return {
        description,
        startDate: Date.now(),
        dueDate,
        isComplete: false,
        completedDate: null
    };
}

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addToDo(state, action) {
            const newToDo = createToDo(action.payload.description, action.payload.dueDate);
            state.push(newToDo);
        },
        editToDo(state, action) {
            const itemIndex = state.findIndex(item => item.startDate == action.payload.startDate)
            state[itemIndex].description = action.payload.description;
            state[itemIndex].dueDate = action.payload.dueDate;
        },
        deleteToDo(state, action) {
            const itemIndex = state.findIndex(item => item.startDate == action.payload.startDate)
            if (itemIndex != -1) {
                state = state.splice(itemIndex, 1)
            }
        },
        setComplete(state, action) {
            const itemIndex = state.findIndex(item => item.startDate == action.payload.startDate);
            state[itemIndex].isComplete = action.payload.isComplete;
            if (action.payload.isComplete) {
                state[itemIndex].completedDate = Date.now();
            } else {
                state[itemIndex].completedDate = null;
            }
        },
        resetState(state, action) {
            return action.payload;
        }
    }
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;