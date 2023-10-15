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
import Undo from '../../assets/undo.png';
import DeleteTaskConfirmation from './delete-task-confirmation/delete-task-confirmation';
import './tasks.css';

function Tasks () {

    const [tasks, setTasks] = useState([]);
    const [showEditTask, setShowEditTask] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [editingTaskName, setEditingTaskName] = useState();
    const [deletingTaskName, setDeletingTaskName] = useState();
    const [updateTaskName, setUpdateTaskName] = useState();
    const [confirmationDisplay, setConfirmationDisplay] = useState();
    const [storedTaskList, setStoredTaskList] = useState([]);

    const onAddTaskSave = (taskName) => {
        let currentTasks = [...tasks];
        storeTaskListCopy([...tasks]);
        let newTask = {
            name: taskName,
            createdOn: getCurrentDateTime(),
            updatedOn: getCurrentDateTime()
        }
        currentTasks.push(newTask);
        setTasks(currentTasks);
        setShowEditTask(false);
    }

    const getCurrentDateTime = () => {
        const currentDate = new Date();
        return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    }
    const onBeginEdit = (taskName) => {
        setEditingTaskName(taskName);
    }

    const onEdit_TextChanged = (event) => {
        setUpdateTaskName(event.target.value);
    }

    const onCancelEdit = () => {
        setEditingTaskName(undefined);
    }

    const onCompleteEdit = (taskName) => {

        let updateTasks = [...tasks];

        storeTaskListCopy([...tasks]);

        let modifiedTasks = updateTasks.map((task) => {
            if (task.name === taskName) {
                return {
                    name: updateTaskName,
                    createdOn: task.createdOn,
                    updatedOn: getCurrentDateTime()
                };
            }

            return task;
        });

        setTasks(modifiedTasks);
        setEditingTaskName(undefined);
    }
    const onBeginDelete = (taskName) => {

        setDeletingTaskName(taskName);
        setConfirmationDisplay(`Are you sure you want to delete '${taskName}?'`);
        setShowConfirmation(true);
    }

    const onCompleteDelete = () => {

        let updateTasks = [...tasks];
        storeTaskListCopy([...tasks]);
        let filteredTasks = updateTasks.filter((x) => x.name !== deletingTaskName);
        setTasks(filteredTasks);
        setShowConfirmation(false);
    }

    const storeTaskListCopy = (tasks) => {

        let updateStoredTaskList = [...storedTaskList];
        updateStoredTaskList.push(tasks);
        setStoredTaskList(updateStoredTaskList);
    }

    const undoTaskList = () => {

        let copiedTasksList = [...storedTaskList];
        
        if (copiedTasksList.length > 0) {
            let newTaskList = [...copiedTasksList[copiedTasksList.length - 1]];
            copiedTasksList.pop();
            setTasks(newTaskList);
            setStoredTaskList(copiedTasksList);
            return;
        }
        
        setTasks([]);
        setStoredTaskList(copiedTasksList);
    }

    return (<div>
        {showEditTask && 
            <AddTask 
                onClose={() => setShowEditTask(false)} 
                onSave={(taskName) => onAddTaskSave(taskName)}/>}

        {showConfirmation &&
            <DeleteTaskConfirmation
                text={confirmationDisplay}
                onYes={() => onCompleteDelete()}
                onNo={() => setShowConfirmation(false)}/>}
            <h1>Tasks</h1>
        <div>
            <div className={'icon-group-horizontal'}>
                <img onClick={() => setShowEditTask(true)} className={'tasks-icon'} src={Plus}/>
                <img onClick={() => undoTaskList()} className={'task-icon'} src={Undo}/>
            </div>
            
            <Table bordered striped size='lg' responsive>
                <thead>
                    <th>Task Name</th>
                    <th>Created On</th>
                    <th>Updated On</th>
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
                            <td>{task.updatedOn}</td>
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