import { Grid, Stack, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { fetchCompletedTasks, fetchPendingTasks } from "../../redux/taskSlice";
import MetricsView from "../../components/Metrics/MetricsView";

const Metrics = () => {
  const doneTasks = useSelector(fetchCompletedTasks);
  const pendingTasks = useSelector(fetchPendingTasks);
  const avgCompletionTime = doneTasks.reduce(
    (average, current, idx) =>
      (average + (current.finishedOn - current.addedOn) / 1000) / (idx + 1),
    0
  );
  console.log(doneTasks);
  console.log(pendingTasks);

  return (
    <Grid container gap={2} justifyContent="center" alignItems="center" flexDirection="column">
      <MetricsView heading="Finished" dataValue={doneTasks.length} />
      <MetricsView heading="Pending" dataValue={pendingTasks.length} />
      <MetricsView heading="Avg Time(s)" dataValue={`${avgCompletionTime.toFixed(1)}`} />
    </Grid>
  );
};

export default Metrics;
