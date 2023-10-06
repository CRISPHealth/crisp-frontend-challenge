import { Card, Typography } from "@mui/material";

const MetricsView = ({ heading, dataValue }) => {

  return (
    <Card elevation={3} sx={{ padding: 5, width: 300 }}>
      <Typography variant="h6" component="div" gutterBottom>
        {heading}
      </Typography>
      <Typography variant="h7" component="div" color="textSecondary">
        {dataValue}
      </Typography>
    </Card>
  );
};

export default MetricsView;
