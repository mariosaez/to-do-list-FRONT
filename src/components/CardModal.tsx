import { Box, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { TaskDTO } from "../api/models";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const CardModalComponent = (props: { task: TaskDTO, open: boolean, handleClose: () => void }) => {
  const { task, open, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
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
      </Box>
    </Modal>
  );
};
