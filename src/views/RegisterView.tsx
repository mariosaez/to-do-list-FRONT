import { Box, Button, Container, CssBaseline, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CustomSnackBar from "../components/CustomSnackbar";
import FormInput from "../components/FormInput";
import { useRegisterViewModel } from "../viewModels/RegisterViewModel";

export const RegisterView = () => {
    const {
        handleClickShowPassword,
        handleMouseDownPassword,
        handleRegister,
        isFormValidState,
        handleCloseSnackbar,
        userData
    } = useRegisterViewModel();
    return(
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
                        p: 2
                    }}
                />
                <Box sx={{ mt: 1, p: 2 }}>
                <Typography variant="h5">Register</Typography>
                    <FormInput
                        id="name"
                        name="name"
                        label="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormInput
                        id="surname"
                        name="surname"
                        label="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <FormInput
                        id="email"
                        name="email"
                        label="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput
                        id="username"
                        name="username"
                        label="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FormInput
                        id="password"
                        name="password"
                        label="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        showPassword={showPassword}
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        onClick={handleRegister}
                        disabled={!isFormValidState}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link to="/">Return to Login</Link>
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