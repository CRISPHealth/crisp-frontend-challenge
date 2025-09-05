import { useSelector } from 'react-redux';
import { calculateAvgMinutes } from './utils'
import './Metrics.css'

export default function Metrics() {
    const toDoList = useSelector(state => state.todos);
    const completedTasks = toDoList.filter(todo => todo.isComplete)

    let avgTimeWorked;
    if (completedTasks.length > 0) {
        const tasksTimeWorked = completedTasks.map((task) => {
            return new Date(task.completedDate) - new Date(task.startDate);
        });
        avgTimeWorked = calculateAvgMinutes(tasksTimeWorked);
    }

    return (
        <div className='metrics-content'>
            <div id='column-left'>
                <p>Number of tasks completed:</p>
                <p>Number of open tasks:</p>
                <p>Average duration for completed tasks:</p>
            </div>
            <div id='column-right'>
                <p>{completedTasks.length}</p>
                <p>{toDoList.length - completedTasks.length}</p>
                <p>{avgTimeWorked ? avgTimeWorked + ' min' : '--'}</p>
            </div>
        </div>
    )
}