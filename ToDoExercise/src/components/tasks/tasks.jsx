import React, { useState } from 'react';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function Tasks () {

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState();

    const onTaskNameTextChanged = (event) => {
        setTaskName(event.target.value);
    }
    const onAddTaskedClicked = () => {
        let currentTasks = [...tasks];
        let newTask = { name: taskName };
        currentTasks.push(newTask);
        setTasks(currentTasks);
    }

    return (<div>
        <h1>Tasks</h1>
        <div>
            <Form.Group>
                <Form.Label>Use the input below to name this task:</Form.Label>
                <Form.Control onTaskNameTextChanged={(event) => onTaskNameTextChanged(event)} name={'taskName'} type="text"></Form.Control>
                <Button onClick={() => onAddTaskedClicked()}>Add Task</Button>
            </Form.Group>
            <Table>
                <thead>
                    <th>Task Name</th>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </div>
    </div>);
}

export default Tasks;