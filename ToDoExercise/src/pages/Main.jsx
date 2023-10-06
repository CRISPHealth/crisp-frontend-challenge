import { Box, Stack } from "@mui/material";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Main = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack gap={2}>
        <TodoInput />
        <TodoList />
      </Stack>
    </Box>
  );
};

export default Main;
