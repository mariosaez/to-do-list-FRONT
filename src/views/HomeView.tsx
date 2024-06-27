import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { CardComponent } from "../components/TaskCard";
import CustomSnackBar from "../components/CustomSnackbar";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const HomeView = () => {
  const {
    userData,
    handleClickExit,
    handleClickProfile,
    taskList,
    snackbarMessage,
    snackbarOpen,
    handleCloseSnackbar,
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
              Home View
            </Typography>
            <Box>
              <Button
                variant="contained"
                startIcon={<ExitToAppIcon />}
                sx={{ ml: 1 }}
                onClick={handleClickExit}
              >
                Exit
              </Button>
              <Button
                variant="contained"
                startIcon={<AccountCircleIcon />}
                sx={{ ml: 1 }}
                onClick={handleClickProfile}
              >
                Profile
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          {userData && userData.tasks && userData.tasks.length > 0 && (
            <Paper elevation={10}>
              {userData.tasks.map((task, index) => (
                <CardComponent key={index} task={task}/>
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
    </Box>
  );
};
