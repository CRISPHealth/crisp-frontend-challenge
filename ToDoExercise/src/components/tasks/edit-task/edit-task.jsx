import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './edit-task.css';

function AddTask (props) {
    const [taskName, setTaskName] = useState(props.defaultValue);

    const onTaskNameChanged = (event) => {
        setTaskName(event.target.value);
    }
    return (
        <Modal show={true} onHide={() => props.onClose()} size={'lg'}>
            <Modal.Header closeButton>
                <h3>Use the input below to select 'Task Name'.</h3>
            </Modal.Header>
            <Modal.Body>
                <div className={'add-task-container'}>
                    <Form.Group>
                        <Form.Label>Task Name:</Form.Label>
                        <Form.Control type="text" onChange={(event) => onTaskNameChanged(event)}/>
                    </Form.Group>
                    <Button onClick={() => props.onSave(taskName)}>Save</Button>
                </div>
            </Modal.Body>
        </Modal>
    )
}

AddTask.defaultProps = {
    onClose: () => console.log('onClose - Not Implemented')
}
export default AddTask;