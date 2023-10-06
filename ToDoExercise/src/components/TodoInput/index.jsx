import AddIcon from "@mui/icons-material/Add";
import UndoIcon from "@mui/icons-material/Undo";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, undo } from "../../slices/todoSlice";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const onAddTask = () => {
    dispatch(addTask(task));
    setTask("");
  };

  const onUndo = () => {
    dispatch(undo());
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <TextField
        id="outlined-basic"
        label="Task"
        variant="outlined"
        sx={{ flexGrow: 1 }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        onClick={onAddTask}
        variant="contained"
        type="button"
        size="small"
      >
        <AddIcon />
      </Button>
      <Button onClick={onUndo} variant="contained" type="button" size="small">
        <UndoIcon />
      </Button>
    </Box>
  );
};

export default TodoInput;
