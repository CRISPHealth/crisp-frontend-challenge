/* eslint-disable react/prop-types */
import { Card, Typography } from "@mui/material";

const MetricsCard = ({ title, value }) => {
  return (
    <Card padding={2} sx={{ width: 300 }}>
      <Typography variant="h4" padding={2} component="div">
        {title}
      </Typography>
      <Typography variant="h5" padding={2} component="div">
        {value}
      </Typography>
    </Card>
  );
};

export default MetricsCard;
