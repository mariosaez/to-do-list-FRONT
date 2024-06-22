import { BorderAll } from "@mui/icons-material";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography, Snackbar, Alert } from "@mui/material";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {login} from '../api';
import FormInput from '../components/FormInput';

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
                    <LoginForm
                        onLogin={login}
                        snackbarOpen={snackbarOpen}
                        snackbarMessage={snackbarMessage}
                        snackbarSeverity={snackbarSeverity}
                        onSnackbarClose={handleCloseSnackbar}
                        manageErrorResponse={manageErrorResponse}
                    />
                </Container>
            </Box>
        </>
    );
};

export default Login;
