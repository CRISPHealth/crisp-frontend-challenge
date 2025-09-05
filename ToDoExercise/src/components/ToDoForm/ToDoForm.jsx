import { useState } from 'react';
import { todoActions } from '../../state/todoSlice';
import { historyActions } from '../../state/listHistorySlice';
import { useSelector, useDispatch } from 'react-redux';
import './ToDoForm.css'

export default function ToDoForm() {
    const [descriptionInput, setDescriptionInput] = useState("");
    const [dueDateInput, setDueDateInput] = useState("");
    const toDoList = useSelector(state => state.todos);
    const dispatch = useDispatch();

    function handleDescriptionChange(event) {
        setDescriptionInput(event.target.value);
    }

    function handleDateChange(event) {
        setDueDateInput(event.target.value);
    }

    // Add new task to todo list
    function handleAddClick() {
        if (descriptionInput) {
            dispatch(todoActions.addToDo({
                description: descriptionInput,
                dueDate: dueDateInput
            }));
            dispatch(historyActions.addHistory(toDoList));
        }
        setDescriptionInput("");
        setDueDateInput("");
    }

    return (
        <div className="todo-form">
            <label id='form-label'>Task Description</label>
            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} placeholder="description..." />
            <label id='form-label'>Due Date</label>
            <input type="date" name="dueDate" value={dueDateInput} onChange={handleDateChange} />
            <button onClick={handleAddClick}>Add Task</button>
        </div>
    )
}