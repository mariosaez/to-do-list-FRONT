import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import CustomSnackBar from "../components/CustomSnackbar";
import { useLoginViewModel } from "../viewModels/LoginViewModel";

export const LoginView = () => {
  const {
    username,
    password,
    showPassword,
    snackbarMessage,
    snackbarOpen,
    handleUsernameChange,
    handlePasswordChange,
    handleToggleShowPassword,
    handleMouseDownPassword,
    handleLogin,
    handleCloseSnackbar,
    isFormValidState,
  } = useLoginViewModel();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="xs" sx={{ boxShadow: 6 }}>
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: 2,
          }}
        />

        <Box sx={{ mt: 1, p: 2 }}>
          <Typography variant="h5">Login</Typography>
          <FormInput
            id="username"
            name="username"
            label="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <FormInput
            id="password"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            showPassword={showPassword}
            handleClickShowPassword={handleToggleShowPassword}
            handleMouseDownPassword={handleMouseDownPassword}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLogin}
            disabled={!isFormValidState}
          >
            Login
          </Button>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Link to="/register">Don't have an account? Register</Link>
            </Grid>
          </Grid>
          <CustomSnackBar
            open={snackbarOpen}
            autoHideDuration={6000}
            message={snackbarMessage}
            onClose={handleCloseSnackbar}
          />
        </Box>
      </Container>
    </Box>
  );
};
