import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { CardComponent } from "../components/TaskCard";
import CustomSnackBar from "../components/CustomSnackbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CardModalComponent } from "../components/CardModal";

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
  } = useHomeViewModel();
  return (
    <Box sx={{ mt: 4, p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h4" gutterBottom>
              {userData?.name}
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

        <Grid item xs={3}>
          {userData && userData.tasks && userData.tasks.length > 0 && (
            <Paper elevation={10}>
              {userData.tasks.map((task, index) => (
                <CardComponent
                  key={index}
                  task={task}
                  onClick={() => handleCardClick(task)}
                />
              ))}
            </Paper>
          )}
        </Grid>
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
