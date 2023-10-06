import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import TaskItem from "../TaskItem/TaskItem";
import { fetchTasks } from "../../redux/taskSlice";

const TaskList = () => {
  const taskItems = useSelector(fetchTasks);

  return (
    <Stack data-testid="todo-collection" gap={2}>
      {taskItems?.map((taskDetail, idx) => (
        <TaskItem key={idx} taskDetail={taskDetail} position={idx} />
      ))}
    </Stack>
  );
};

export default TaskList;
