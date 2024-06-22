import { Box, Button, Grid, Typography, Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from '../components/FormInput';
import { login } from '../api';
import React from 'react';

interface LoginFormProps{
    onLogin: (usename: string, password: string) => void;
    snackbarOpen: boolean;
    snackbarMessage: string;
    snackbarSeverity: "success" | "error" | "warning" | "info";
    onSnackbarClose: () => void;
    manageErrorResponse: (status: number) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  snackbarOpen,
  snackbarMessage,
  snackbarSeverity,
  onSnackbarClose,
  manageErrorResponse,
  onLogin,
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        try {
            await login(username, password);
            navigate('/home');
        } catch (error: any) {
            manageErrorResponse(parseInt(error.message));
        }
    };

    const isFormValid = () => {
        return username.trim() !== "" && password.trim() !== "";
    };

    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="h5">Login</Typography>
            <FormInput
                id="username"
                name="username"
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
                id="password"
                name="password"
                label="Password"
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
                sx={{ mt: 3, mb: 2 }}
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
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={onSnackbarClose}
            >
                <Alert onClose={onSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default LoginForm;