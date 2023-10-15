import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './edit-task-confirmation.css';

function EditTaskConfirmation (props) {

    const getActionDisplay = () => {
        if (props.type === 'edit') {
            return 'Are you sure you would like to update this task name?';
        }
        else if (props.type === 'delete') {
            return `Are you sure you would like to delete '${props.taskName}'?`;
        }
    }
    return (
        <Modal show={true}>
            <Modal.Body>
                <p>{props.text}</p>
                <div className={'edit-task-confirmation-button-group'}>
                    <Button className={'edit-task-confirmation-button'} onClick={() => props.onYes()}>Yes</Button>
                    <Button variant={'danger'} className={'edit-task-confirmation-button'} onClick={() => props.onNo()}>No</Button>
                </div>
            </Modal.Body>
            
        </Modal>
    )
}

EditTaskConfirmation.defaultProps = {
    onYes: () => console.log('OnYes - Not Implemented'),
    onNo: () => console.log('OnNo - Not Implemented')
}
export default EditTaskConfirmation;