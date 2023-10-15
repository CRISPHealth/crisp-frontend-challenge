import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import AddTask from './edit-task/edit-task';
import Plus from '../../assets/plus.png';
import Delete from '../../assets/bin.png';
import Edit from '../../assets/pen.png';
import Check from '../../assets/check.png';
import Cancel from '../../assets/cancel.png';
import EditTaskConfirmation from './edit-task-confirmation/edit-task-confirmation';
import './tasks.css';

function Tasks () {

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState();
    const [showEditTask, setShowEditTask] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [editingTaskName, setEditingTaskName] = useState();
    const [updateTaskName, setUpdateTaskName] = useState();
    const [confirmationType, setConfirmationType] = useState();
    const [confirmationDisplay, setConfirmationDisplay] = useState();
    const [onDeleteTask, setOnDeleteTask] = useState(() => console.log('OnDeleteTask - Not Impelemented'));

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

    const onBeginEdit = (taskName) => {
        setEditingTaskName(taskName);
        setConfirmnationType('edit');
    }

    const onEdit_TextChanged = (event) => {
        setUpdateTaskName(event.target.value);
    }

    const onCancelEdit = () => {
        setEditingTaskName(undefined);
    }

    const onCompleteEdit = (taskName) => {
        let updateTasks = [...tasks];

        let modifiedTasks = updateTasks.map((task) => {
            if (task.name === taskName) {
                return {
                    name: updateTaskName,
                    createdOn: task.createdOn,
                    UpdatedOn: new Date().getTime()
                };
            }

            return task;
        });

        setTasks(modifiedTasks);
        setEditingTaskName(undefined);
    }
    const onBeginDelete = (taskName) => {
        setConfirmationDisplay('Are you sure you want to delete this?');
        setShowConfirmation(true);
        setConfirmationType('delete');
    }

    const onDelete = (taskName) => {
        let updateTasks = [...tasks];
        let filteredTasks = updateTasks.filter((x) => x.name !== taskName);
        setTasks(filteredTasks);
    }

    return (<div>
        {showEditTask && 
            <AddTask 
                onClose={() => setShowEditTask(false)} 
                onSave={(taskName) => onAddTaskSave(taskName)}/>}

        {showConfirmation &&
            <EditTaskConfirmation
                text={confirmationDisplay}
                onYes={() => onDelete()}
                onNo={() => setShowConfirmation(false)}/>}
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
                            <td>{editingTaskName !== task.name ? task.name :
                                (
                                    <div className={'tasks-group-inline'}>
                                        <Form.Control defaultValue={task.name} type={'text'} onChange={(event) => onEdit_TextChanged(event)}/>
                                        <div className={'icon-group-horizontal'}>
                                            <img onClick={() => onCancelEdit()} src={Cancel}/>
                                            <img onClick={() => onCompleteEdit(task.name)} src={Check}/>
                                        </div>
                                        
                                    </div>
                                )}</td>
                            <td>{task.createdOn}</td>
                            <td>
                                {editingTaskName === undefined && <div className={'icon-group-horizontal'}>
                                    <img onClick={() => onBeginEdit(task.name)} src={Edit}/>
                                    <img onClick={() => onBeginDelete(task.name)} src={Delete}/>
                                </div>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    </div>);
}

export default Tasks;