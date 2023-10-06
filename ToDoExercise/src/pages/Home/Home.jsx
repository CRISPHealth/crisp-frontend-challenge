import { Box, Stack } from "@mui/material";
import TaskList from "../../components/TaskList/TaskList";
import TaskInput from "../../components/Input/TaskInput";

const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Stack gap={2}>
        <TaskInput />
        <TaskList />
      </Stack>
    </Box>
  );
};

export default Home;
