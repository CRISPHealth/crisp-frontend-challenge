import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, Paper } from '@mui/material';

function MetricsView() {
  const tasks = useSelector(state => state.tasks);
  const completedTasks = tasks.filter(task => task.completed);

  const averageDuration = completedTasks.reduce((sum, task) => {
    const dueDate = new Date(task.dueDate);
    const completionDate = new Date(task.completionDate);
    return sum + (completionDate - dueDate);
  }, 0) / completedTasks.length;

  const averageDurationInDays = Math.round(averageDuration / (1000 * 60 * 60 * 24));

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: 400, 
        m: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4" gutterBottom>
          Metrics
        </Typography>
        <Typography variant="body1">
          Total number of tasks: {tasks.length}
        </Typography>
        <Typography variant="body1">
          Number of tasks completed: {completedTasks.length}
        </Typography>
        <Typography variant="body1">
          Average duration for completed tasks: {averageDurationInDays} days
        </Typography>
      </Paper>
    </Box>
  );
}

export default MetricsView;
