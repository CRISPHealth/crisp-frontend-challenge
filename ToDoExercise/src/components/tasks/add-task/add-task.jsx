import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './add-task.css';

function AddTask (props) {
    const [taskName, setTaskName] = useState();

    const onTaskNameChanged = (event) => {
        setTaskName(event.target.value);
    }
    const onSavedClicked = () => {

    }
    return (
        <Modal show={true} onHide={() => props.onClose()}>
            <Modal.Header closeButton>
                <h2>Use the input below to select 'Task Name'.</h2>
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