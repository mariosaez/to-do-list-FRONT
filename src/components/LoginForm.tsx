import { Box, Button, Grid, Typography} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormInput from '../components/FormInput';
import CustomSnackBar from "./CustomSnackbar";
import { login } from '../api';
import React from 'react';
import { isFormValid, manageErrorResponse } from "../utils/formUtils";

interface LoginFormProps{
    onLogin: (
        usename: string, 
        password: string
        ) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleLogin = async () => {
        try {
            await login(username, password);
            navigate('/home');
        } catch (error: any) {
            const message = manageErrorResponse(parseInt(error.message));
            setSnackbarMessage(message);
            setSnackbarOpen(true);
        }
    };

    const fields = [username, password];
    const isFormValidState = isFormValid(fields);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
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
    );
};

export default LoginForm;