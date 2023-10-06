import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import MetricsCard from "../components/MetricsCard";
import { selectCompletedTasks, selectOpenedTasks } from "../slices/todoSlice";

const Metrics = () => {
  const completedTasks = useSelector(selectCompletedTasks);
  const openedTasks = useSelector(selectOpenedTasks);
  const avgTime = completedTasks.reduce(
    (avg, cur, index) =>
      (avg + (cur.completedAt - cur.createdAt) / 1000) / (index + 1),
    0
  );

  return (
    <Grid container gap={2}>
      <MetricsCard title="Completed" value={completedTasks.length} />
      <MetricsCard title="Opened" value={openedTasks.length} />
      <MetricsCard title="Avg Duration" value={`${avgTime.toFixed(2)}s`} />
    </Grid>
  );
};

export default Metrics;
