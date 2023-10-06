import {
  Box, Button, Card, Stack, TextField, Typography, FormControl, Select, MenuItem
} from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { markTaskAsComplete, removeTask, modifyTask } from "../../redux/taskSlice";

const TaskItem = ({ taskDetail, position }) => {
  const dispatchAction = useDispatch();
  const [isEditable, toggleEditable] = useState(false);
  const [taskText, updateTaskText] = useState(taskDetail.text);
  const [taskCategory, updateTaskCategory] = useState(taskDetail.category);

  const handleSave = () => {
    dispatchAction(
      modifyTask({
        position,
        taskText,
        taskCategory
      })
    );
    toggleEditable(!isEditable);
  };

  const handleDelete = () => {
    dispatchAction(removeTask(position));
  };

  const handleCompletion = () => {
    dispatchAction(markTaskAsComplete(position));
  };

  const toggleEditState = () => {
    if(!taskDetail.isDone){
      toggleEditable(!isEditable);
    }
  }

  useEffect(() => {
    if (taskDetail.text !== taskText) {
      updateTaskText(taskDetail.text);
      updateTaskCategory(taskDetail.category);
    }
  }, [taskDetail]);

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: taskDetail.isDone ? green[400] : "",
      }}
      variant="outlined"
      onDoubleClick={toggleEditState}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {isEditable ? (
          <TextField
            variant="filled"
            value={taskText}
            fullWidth
            data-testid="task-textfield"
            onChange={(e) => updateTaskText(e.target.value)}
          />
        ) : (
          <Typography data-testid="task-typography" padding={2}>
            {taskDetail.text}
          </Typography>
        )}
        {isEditable ? (
          <FormControl variant="filled" sx={{ minWidth: "fit-content" }}>
            <Select
              value={taskCategory}
              onChange={(e) => updateTaskCategory(e.target.value)}
              label="Category"
              autoWidth
              sx={{ 
                bgcolor: 'rgb(37, 150, 190)', 
                '&.Mui-focused': { bgcolor: 'rgb(37, 150, 190)' },
                '&.MuiSelect-filled': { bgcolor: 'rgb(37, 150, 190)' },
                '&:hover': { bgcolor: 'rgb(37, 150, 190)' }
              }}
            >
              <MenuItem value="General">General</MenuItem>
              <MenuItem value="Work">Work</MenuItem>
              <MenuItem value="Personal">Personal</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
        ) : (
          <Typography data-testid="task-typography" padding={2}>
            <strong>{taskDetail.category}</strong>
          </Typography>
        )}
        <Stack direction="row" gap={2}>
          {!isEditable ? (
            <Button
              type="button"
              data-testid="edit-btn"
              variant="contained"
              onClick={toggleEditState}
            >
              Edit
            </Button>
          ) : (
            <>
              <Button type="button" variant="contained" onClick={handleSave}>
                Save
              </Button>
              <Button
                type="button"
                variant="contained"
                color="error"
                onClick={() => {
                  updateTaskText(taskDetail.text);
                  toggleEditState();
                }}
              >
                Cancel
              </Button>
            </>
          )}
          <Button
            type="button"
            variant="contained"
            color="error"
            data-testid="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </Button>
          {!taskDetail.isDone && (
            <Button
              type="button"
              variant="contained"
              color="success"
              data-testid="complete-btn"
              onClick={handleCompletion}
            >
              Complete
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default TaskItem;
