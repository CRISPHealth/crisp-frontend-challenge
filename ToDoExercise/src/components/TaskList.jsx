import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaskCompletion, deleteTask, editTask } from '../redux/taskSlice.jsx';
import { List, ListItem, ListItemText, IconButton, TextField, Grid, Paper  } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditingText(text);
  };

  const handleUpdate = (id) => {
    dispatch(editTask({ id, text: editingText }));
    setEditingId(null);
    setEditingText('');
  };

  return (
    <>
        {tasks && tasks.length > 0 && (
        // <Grid item xs={8}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
                <List>
                {tasks.map(task => (
                    <ListItem key={task.id}>
                    {editingId === task.id ? (
                        <>
                        <TextField 
                            value={editingText} 
                            onChange={(e) => setEditingText(e.target.value)} 
                        />
                        <IconButton onClick={() => handleUpdate(task.id)}>
                            <SaveIcon />
                        </IconButton>
                        <IconButton onClick={() => setEditingId(null)}>
                            <CancelIcon />
                        </IconButton>
                        </>
                    ) : (
                        <>
                        <ListItemText
                            primary={task.text}
                            secondary={`${task.category} - ${task.dueDate}`}
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            onClick={() => dispatch(toggleTaskCompletion(task.id))}
                        />
                        <IconButton onClick={() => handleEdit(task.id, task.text)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => dispatch(deleteTask(task.id))}>
                            <DeleteIcon />
                        </IconButton>
                        </>
                    )}
                    </ListItem>
                ))}
                </List>
            </Paper>
        // </Grid>
        )}
    </>
  );
}

export default TaskList;
