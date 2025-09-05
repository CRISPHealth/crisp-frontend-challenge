import { useSelector } from 'react-redux';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoList.css';

export default function ToDoList() {
    let toDoList = useSelector(state => state.todos);
    let listContent;

    if (toDoList.length > 0) {
        // Sort list of todos by due date.
        //  - Items with closest due date will appear at the top of the list. 
        //  - Items with undefined due dates will appear at the bottom of the list.
        let sortedList = [...toDoList].sort((a, b) => {
            if (!b.dueDate) {
                return -1;
            } else {
                return new Date(a.dueDate) - new Date(b.dueDate);
            }
        })

        listContent = (
            <ol>
                {sortedList.map(todo => (
                    <ToDoItem
                        key={todo.startDate}
                        {...todo}
                    />
                ))}
            </ol>
        )
    } else {
        listContent = <p>No tasks defined yet...</p>
    }

    return (
        <div className='todo-list'>
            {listContent}
        </div>
    )
}