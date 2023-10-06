/* eslint-disable react/prop-types */
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask, editTask } from "../../slices/todoSlice";

const TodoItem = ({ initialValue, index }) => {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [text, setText] = useState(initialValue.text);

  const onSave = () => {
    dispatch(
      editTask({
        index,
        text,
      })
    );
    updateEditable();
  };

  const onDelete = () => {
    dispatch(deleteTask(index));
  };

  const onComplete = () => {
    dispatch(completeTask(index));
  };

  const updateEditable = () => setEditable(!editable);

  useEffect(() => {
    if (initialValue.text !== text) {
      setText(initialValue.text);
    }
  }, [initialValue]);

  return (
    <Card
      sx={{
        padding: 2,
        backgroundColor: initialValue.completed ? green[400] : "",
      }}
      variant="outlined"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {editable ? (
          <TextField
            variant="outlined"
            value={text}
            fullWidth
            data-testid="task-textfield"
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <Typography data-testid="task-typography" padding={2}>
            {initialValue.text}
          </Typography>
        )}
        <Stack direction="row" gap={2}>
          {!editable ? (
            <Button
              type="button"
              data-testid="edit-btn"
              variant="contained"
              onClick={updateEditable}
            >
              <EditIcon />
            </Button>
          ) : (
            <>
              <Button type="button" variant="contained" onClick={onSave}>
                <SaveIcon />
              </Button>
              <Button
                type="button"
                variant="contained"
                color="error"
                onClick={() => {
                  setText(initialValue.text);
                  updateEditable();
                }}
              >
                <CancelIcon />
              </Button>
            </>
          )}
          <Button
            type="button"
            variant="contained"
            color="error"
            data-testid="delete-btn"
            onClick={onDelete}
          >
            <DeleteIcon />
          </Button>
          {!initialValue.completed && (
            <Button
              type="button"
              variant="contained"
              color="success"
              data-testid="complete-btn"
              onClick={onComplete}
            >
              <DoneIcon />
            </Button>
          )}
        </Stack>
      </Box>
    </Card>
  );
};

export default TodoItem;
