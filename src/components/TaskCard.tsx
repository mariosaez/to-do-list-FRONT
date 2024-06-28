import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { TaskDTO } from "../api/models";
import { DraggableComponent } from "./DraggableComponent";

export const CardComponent = (props: { task: TaskDTO, onClick: () => void }) => {
  const { task, onClick } = props;
  return (
    <DraggableComponent id={task.id!!} type="TASK">
      <Card sx={{ backgroundColor: "#00B9E8", boxShadow: "none", mb: 2 }} onClick={onClick}>
        <CardContent>
          <Typography
            sx={{ fontSize: 24, mt: 1 }}
            color="text.secondary"
            gutterBottom
          >
            {task.title}
          </Typography>
        </CardContent>
      </Card>
    </DraggableComponent>
  );
};
