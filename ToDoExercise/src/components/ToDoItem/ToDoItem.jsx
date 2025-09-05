import { useState } from 'react';
import { CheckBox, CheckBoxOutlineBlank, Delete, ModeEdit, Save } from '@mui/icons-material';
import { todoActions } from '../../state/todoSlice';
import { historyActions } from '../../state/listHistorySlice';
import { useSelector, useDispatch } from 'react-redux';
import { daysFromToday, setDueDateMsg } from './utils'
import './ToDoItem.css'

export default function ToDoItem(todo) {
    const [inEdit, setInEdit] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState(todo.description);
    const [dueDateInput, setDueDateInput] = useState(todo.dueDate);
    const toDoList = useSelector(state => state.todos);
    const dispatch = useDispatch();

    function handleDescriptionChange(event) {
        setDescriptionInput(event.target.value);
    }

    function handleDateChange(event) {
        setDueDateInput(event.target.value);
    }

    // On item checkbox click, toggle item's 'isComplete' value. This, in turn, will update the checkbox icon in the UI.
    function handleItemCompleteClick() {
        dispatch(todoActions.setComplete({
            startDate: todo.startDate,
            isComplete: !todo.isComplete
        }));
    };

    // On task item edit click, update UI to render description and dueDate as inputs for editing task item values.
    function handleEditClick() {
        setInEdit(true);
    };

    // On task item save click, update dueDate and description values. Revert icon to edit symbol.
    function handleSaveClick() {
        dispatch(todoActions.editToDo({
            startDate: todo.startDate,
            description: descriptionInput,
            dueDate: dueDateInput
        }));

        setInEdit(false);
    };

    // On task item delete click, remove task from todo list and update state history.
    function handleItemDeleteClick() {
        dispatch(todoActions.deleteToDo({
            startDate: todo.startDate
        }));
        dispatch(historyActions.addHistory(toDoList));
    }

    return (
        <div id='item-container'>
            <li className="todo-item" id={daysFromToday(new Date(todo.dueDate).getTime()) < 0 ? 'overdue' : ''}>
                <div onClick={handleItemCompleteClick}>
                    {
                        todo.isComplete ? <CheckBox id='checkbox' /> : <CheckBoxOutlineBlank id='checkbox' />
                    }
                </div>
                <div className='todo-content'>
                    {inEdit ?
                        <>
                            <input type="text" name="description" value={descriptionInput} onChange={handleDescriptionChange} />
                            <input type="date" name="dueDate" value={dueDateInput} onChange={handleDateChange} />
                        </> :
                        <>
                            <p>{todo.description}</p>
                            <p id='due-date'>{setDueDateMsg(todo.dueDate)}</p>
                        </>
                    }
                </div>
                <div className="item-actions">
                    {inEdit ? <Save id='save' onClick={handleSaveClick} /> : <ModeEdit id='edit' onClick={handleEditClick} />}
                    <Delete id='delete' onClick={handleItemDeleteClick} />
                </div>
            </li>
        </div>
    )
}