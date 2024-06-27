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
    <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}>
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            border: "inset",
            display: "inline",
            padding: "2px 4px",
            backgroundColor: "lightgray",
          }}
          color="text.secondary"
          gutterBottom
        >
          {task.state}
        </Typography>
        <Typography
          sx={{ fontSize: 24, mt: 1 }}
          color="text.secondary"
          gutterBottom
        >
          {task.title}
        </Typography>
        <Typography variant="body1">{task.content}</Typography>
      </CardContent>
    </Card>
  );
};
