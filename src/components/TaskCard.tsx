import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TaskDTO } from "../api/models";

export const CardComponent = (props: { task: TaskDTO }) => {
  const { task } = props;
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {task.state} Task
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {task.title} Task
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {task.state}
          </Typography>
          <Typography variant="body2">
            {task.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
