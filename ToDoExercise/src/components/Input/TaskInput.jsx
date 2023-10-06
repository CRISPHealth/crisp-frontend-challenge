import AddIcon from "@mui/icons-material/AddCircleOutline";
import UndoIcon from "@mui/icons-material/History";
import { Box, Button, TextField, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { appendTask, revertAction } from "../../redux/taskSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState("");
  const [taskType, setTaskType] = useState("General");

  const handleAddTask = () => {
    dispatch(appendTask({ taskText: taskDescription, taskCategory: taskType }));
    setTaskDescription("");
    setTaskType("General");
  };

  const handleRevert = () => {
    dispatch(revertAction());
  };

  return (
    <Box display="flex" alignItems="center" gap={3}>
      <TextField
        label="Enter Task"
        variant="filled"
        fullWidth
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <FormControl variant="standard" sx={{ minWidth: 120 }}>
        <Select
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
          label="Task Type"
          sx={{ 
            bgcolor: 'rgb(37, 150, 190)', 
            '&:hover': { bgcolor: 'rgb(37, 150, 190)' }
          }}
        >
          <MenuItem value="General">General</MenuItem>
          <MenuItem value="Work">Work</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
          <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleAddTask} variant="outlined" color="info">
        Add
      </Button>
      <Button onClick={handleRevert} variant="outlined" color="warning">
        Undo
      </Button>
    </Box>
  );
};

export default TaskInput;
