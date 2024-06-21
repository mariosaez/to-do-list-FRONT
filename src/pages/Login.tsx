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

    const handleLogin = async () => {
        try {
            await login(username, password)
            navigate('/home');
        } catch (error: any) {
            if (error.status === 404) {
                setSnackbarMessage("User not found");
                setSnackbarSeverity("error");
            } else if (error.name === "500") {
                setSnackbarMessage("Login error");
                setSnackbarSeverity("error");
            } else {
                setSnackbarMessage("An unexpected error occurred");
                setSnackbarSeverity("error");
            }
            setSnackbarOpen(true);
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
         <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    mt: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            />
                <Typography variant="h5">Login</Typography>
                <Box sx={{ mt: 1}}>
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
        </>
    );
};

export default Login;