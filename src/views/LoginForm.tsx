import { Box, Button, Grid, Typography} from "@mui/material";
import { Link} from "react-router-dom";
import FormInput from '../components/FormInput';
import CustomSnackBar from "../components/CustomSnackbar";
import React from 'react';

interface LoginFormProps {
    username: string;
    password: string;
    showPassword: boolean;
    snackbarMessage: string;
    snackbarOpen: boolean;
    onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleShowPassword: () => void;
    onMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onLogin: () => void;
    onCloseSnackbar: () => void;
    isFormValid: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({
    username,
    password,
    showPassword,
    snackbarMessage,
    snackbarOpen,
    onUsernameChange,
    onPasswordChange,
    onToggleShowPassword,
    onMouseDownPassword,
    onLogin,
    onCloseSnackbar,
    isFormValid,
}) => {

    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="h5">Login</Typography>
            <FormInput
                id="username"
                name="username"
                label="Username"
                value={username}
                onChange={onUsernameChange}
            />
            <FormInput
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={onPasswordChange}
                showPassword={showPassword}
                handleClickShowPassword={onToggleShowPassword}
                handleMouseDownPassword={onMouseDownPassword}
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onLogin}
                disabled={!isFormValid}
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
                onClose={onCloseSnackbar}
            />
        </Box>
    );
};

export default LoginForm;