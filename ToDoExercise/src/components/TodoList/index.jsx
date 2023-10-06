/* eslint-disable react/prop-types */
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectTasks } from "../../slices/todoSlice";
import TodoItem from "../TodoItem";

const TodoList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <Stack data-testid="todo-list" gap={2}>
      {tasks?.map((task, index) => (
        <TodoItem key={index} initialValue={task} index={index} />
      ))}
    </Stack>
  );
};

export default TodoList;
