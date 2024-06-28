import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { CardComponent } from "../components/TaskCard";
import CustomSnackBar from "../components/CustomSnackbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CardModalComponent } from "../components/CardModal";
import { DroppableComponent } from "../components/DroppableComponent";
import { TaskDTOStateEnum } from "../api/models";

const columns = [TaskDTOStateEnum.Created, TaskDTOStateEnum.Doing, TaskDTOStateEnum.Done];

export const HomeView = () => {
  const {
    userData,
    handleClickExit,
    handleClickProfile,
    snackbarMessage,
    snackbarOpen,
    handleCloseSnackbar,
    handleCardClick,
    handleCloseModal,
    selectedTask,
    handleDrop,
    tasks,
  } = useHomeViewModel();

  return (
    <Box sx={{ mt: 4, p: 3, display: 'flex', flexDirection: 'column' }}>
      <Grid container spacing={3} sx={{ flex: 1}}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2
            }}
          >
            <Typography variant="h4" gutterBottom>
              Bienvenido {userData?.name}!
            </Typography>
            <Box>
              <Button
                variant="contained"
                startIcon={<ExitToAppIcon />}
                sx={{
                  ml: 1,
                  bgcolor: "#ff4d4d",
                  "&:hover": {
                    bgcolor: "#e60000",
                  },
                }}
                onClick={handleClickExit}
              >
                Exit
              </Button>
              <Button
                variant="contained"
                startIcon={<AccountCircleIcon />}
                sx={{
                  ml: 1,
                  bgcolor: "#4d79ff",
                  "&:hover": {
                    bgcolor: "#005ce6",
                  },
                }}
                onClick={handleClickProfile}
              >
                Profile
              </Button>
            </Box>
          </Box>
        </Grid>

        {columns.map((column) => (
          <Grid item xs={4} key={column}>
            <DroppableComponent onDrop={(item) => handleDrop(item, column)}>
              <Paper elevation={10} sx={{ p: 2, backgroundColor: "#F0F8FF", border: "none" }}>
                <Typography variant="h6" gutterBottom>
                  {column}
                </Typography>
                {tasks
                  .filter((task) => task.state === column)
                  .map((task) => (
                    <CardComponent
                      key={task.id}
                      task={task}
                      onClick={() => handleCardClick(task)}
                    />
                  ))}
              </Paper>
            </DroppableComponent>
          </Grid>
        ))}
      </Grid>

      <CustomSnackBar
        open={snackbarOpen}
        autoHideDuration={6000}
        message={snackbarMessage}
        onClose={handleCloseSnackbar}
      />

      {selectedTask && (
        <CardModalComponent
          task={selectedTask}
          open={true}
          handleClose={handleCloseModal}
        />
      )}
    </Box>
  );
};
