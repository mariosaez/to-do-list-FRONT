import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TaskDTO } from "../api/models";

export const CardComponent = (props: { task: TaskDTO, onClick: () => void }) => {
  const { task, onClick } = props;
  return (
    <Card sx={{ backgroundColor: "#f5f5f5", boxShadow: "none" }} onClick={onClick}>
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
      </CardContent>
    </Card>
  );
};
