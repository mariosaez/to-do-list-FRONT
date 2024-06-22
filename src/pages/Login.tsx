import { BorderAll } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, Snackbar, Alert } from "@mui/material";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import {login} from '../api';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error" | "warning" | "info">("info");

    function manageErrorResponse(status: number) {
        if (status === 404) {
            setSnackbarMessage("User not found");
            setSnackbarSeverity("error");
        } else if (status === 500) {
            setSnackbarMessage("Login error");
            setSnackbarSeverity("error");
        } else {
            setSnackbarMessage("An unexpected error occurred");
            setSnackbarSeverity("error");
        }
        setSnackbarOpen(true);
    }

    const handleLogin = async () => {
        try {
            const response = await login(username, password);
            navigate('/home');
        } catch (error: any) {
            manageErrorResponse(parseInt(error.message));
        }
    };

    const isFormValid = () => {
        return username.trim() !== "" && password.trim() !== "";
    }

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return (
        <>
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#f5f5f5",
            }}
        >
         <Container maxWidth="xs" sx={{boxShadow: 6}}>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2
                }}
            />
                <Typography variant="h5">Login</Typography>
                <Box sx={{ mt: 1, p: 2}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        name="username"
                        label="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        onClick={handleLogin}
                        disabled={!isFormValid()}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link to="/register">Don't have an account? Register</Link>
                        </Grid>
                    </Grid>
                </Box>
                <Snackbar
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{width: '100%'}}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Container>
            </Box>
        </>
    );
};

export default Login;
