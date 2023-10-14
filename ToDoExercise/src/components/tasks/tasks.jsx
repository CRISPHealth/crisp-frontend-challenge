import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AddTask from './add-task/add-task';
import Plus from '../../assets/plus.png';
import Delete from '../../assets/bin.png';
import Edit from '../../assets/pen.png';

import './tasks.css';

function Tasks () {

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState();
    const [showEditTask, setShowEditTask] = useState(false);

    const onAddTaskSave = (taskName) => {
        console.log(taskName);
        let currentTasks = [...tasks];
        let newTask = {
            name: taskName,
            createdOn: new Date().getDate()
        }
        currentTasks.push(newTask);
        setTasks(currentTasks);
        setShowEditTask(false);
    }

    return (<div>
        {showEditTask && 
            <AddTask 
                onClose={() => setShowEditTask(false)} 
                onSave={(taskName) => onAddTaskSave(taskName)}/>}
        <h1>Tasks</h1>
        <div>
            <div className={'icon-group-horizontal'}>
                <img onClick={() => setShowEditTask(true)} className={'tasks-icon'} src={Plus}/>
            </div>
            
            <Table bordered striped size='lg' responsive>
                <thead>
                    <th>Task Name</th>
                    <th>Created On</th>
                    <th></th>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr>
                            <td>{task.name}</td>
                            <td>{task.createdOn}</td>
                            <td>
                                <div className={'icon-group-horizontal'}>
                                    <img src={Edit}/>
                                    <img src={Delete}/>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>);
}

export default Tasks;