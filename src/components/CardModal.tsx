import { Box, Button, ButtonGroup, Modal, Typography } from "@mui/material";
import { TaskDTO, TaskDTOStateEnum } from "../api/models";
import { useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
};

export const CardModalComponent = (props: {
  task: TaskDTO;
  open: boolean;
  handleClose: () => void;
}) => {
  const { task, open, handleClose } = props;
  const [taskState, setTaskState] = useState<TaskDTOStateEnum>(
    task.state || TaskDTOStateEnum.Created
  );

  const handleClickDelete = () => {
    // Lógica para manejar la eliminación
  };

  const handleClickSave = () => {
    // Lógica para manejar el guardado
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontSize: 24 }} gutterBottom>
            {task.title}
          </Typography>
          <ButtonGroup
            size="small"
            variant="text"
            aria-label="Basic button group"
          >
            <Button
              variant={
                taskState === TaskDTOStateEnum.Created ? "outlined" : "text"
              }
              onClick={() => setTaskState(TaskDTOStateEnum.Created)}
            >
              {TaskDTOStateEnum.Created}
            </Button>
            <Button
              variant={
                taskState === TaskDTOStateEnum.Doing ? "outlined" : "text"
              }
              onClick={() => setTaskState(TaskDTOStateEnum.Doing)}
            >
              {TaskDTOStateEnum.Doing}
            </Button>
            <Button
              variant={
                taskState === TaskDTOStateEnum.Done ? "outlined" : "text"
              }
              onClick={() => setTaskState(TaskDTOStateEnum.Done)}
            >
              {TaskDTOStateEnum.Done}
            </Button>
          </ButtonGroup>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "left", borderRadius: 4, width: "100%", height: 200, backgroundColor: "#F0F8FF"}}>
          <Typography variant="body1" sx={{ mt: 2, pl: 2 }}>
            {task.content}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5 }}>
          <Button
            variant="contained"
            sx={{ ml: 1, backgroundColor: "red", "&:hover": {
                backgroundColor: "red"
              } }}
            onClick={handleClickDelete}
          >
            DELETE
          </Button>
          <Button variant="contained" sx={{ ml: 1 }} onClick={handleClickSave}>
            SAVE
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
