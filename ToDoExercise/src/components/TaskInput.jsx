import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice.jsx';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Grid, Paper } from '@mui/material';

function TaskInput() {
  const [inputValue, setInputValue] = useState('');
  const [category, setCategory] = useState('All');
  const [dueDate, setDueDate] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask({ 
        id: Date.now(), 
        text: inputValue, 
        completed: false,
        category: category,
        dueDate: dueDate
      }));
      setInputValue('');
      setCategory('All');
      setDueDate('');
    }
  };

  return (
    // <Grid item xs={4}>
        <Paper elevation={3} style={{ padding: '1rem' }}>
            <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                // maxWidth: 400,
                m: 'auto',
                position: 'absolute'
            }}
            >
            <TextField 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                label="Task"
                variant="outlined"
                fullWidth
            />
            <FormControl variant="outlined" fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
                >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Work">Work</MenuItem>
                <MenuItem value="Personal">Personal</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
                </Select>
            </FormControl>
            <TextField 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
                variant="outlined"
                fullWidth
                InputLabelProps={{
                shrink: true,
                }}
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Add Task
            </Button>
            </Box>
        </Paper>
    // </Grid>
 );
}

export default TaskInput;
